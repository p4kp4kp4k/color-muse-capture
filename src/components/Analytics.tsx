import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';

declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
    dataLayer: unknown[];
    fbq: (...args: unknown[]) => void;
    _fbq: unknown;
  }
}

// Store IDs globally for helper functions
let GA_ID = '';
let META_ID = '';

export const Analytics = () => {
  const location = useLocation();
  const [gaId, setGaId] = useState('');
  const [metaId, setMetaId] = useState('');
  const [initialized, setInitialized] = useState(false);

  // Fetch analytics IDs from database
  useEffect(() => {
    const fetchAnalyticsConfig = async () => {
      const { data, error } = await supabase
        .from('site_config')
        .select('key, value')
        .in('key', ['ga_measurement_id', 'meta_pixel_id']);

      if (!error && data) {
        const gaConfig = data.find(c => c.key === 'ga_measurement_id');
        const metaConfig = data.find(c => c.key === 'meta_pixel_id');
        
        if (gaConfig?.value) {
          setGaId(gaConfig.value);
          GA_ID = gaConfig.value;
        }
        if (metaConfig?.value) {
          setMetaId(metaConfig.value);
          META_ID = metaConfig.value;
        }
      }
    };

    fetchAnalyticsConfig();
  }, []);

  // Initialize analytics scripts
  useEffect(() => {
    if (initialized) return;

    // Google Analytics 4
    if (gaId) {
      const gaScript = document.createElement('script');
      gaScript.async = true;
      gaScript.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`;
      document.head.appendChild(gaScript);

      window.dataLayer = window.dataLayer || [];
      window.gtag = function gtag(...args: unknown[]) {
        window.dataLayer.push(args);
      };
      window.gtag('js', new Date());
      window.gtag('config', gaId, {
        page_path: location.pathname,
      });
    }

    // Meta Pixel (Facebook)
    if (metaId) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const initFbq = () => {
        const fbq = function(...args: unknown[]) {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          const fn = fbq as any;
          if (fn.callMethod) {
            fn.callMethod(...args);
          } else {
            fn.queue.push(args);
          }
        };
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const fn = fbq as any;
        fn.push = fbq;
        fn.loaded = true;
        fn.version = '2.0';
        fn.queue = [];
        return fbq;
      };
      
      if (!window._fbq) {
        window.fbq = initFbq();
        window._fbq = window.fbq;
      }
      
      const script = document.createElement('script');
      script.async = true;
      script.src = 'https://connect.facebook.net/en_US/fbevents.js';
      document.head.appendChild(script);
      
      window.fbq('init', metaId);
      window.fbq('track', 'PageView');
    }

    if (gaId || metaId) {
      setInitialized(true);
    }
  }, [gaId, metaId, initialized, location.pathname]);

  // Track page views on route change
  useEffect(() => {
    if (!initialized) return;

    if (gaId && window.gtag) {
      window.gtag('config', gaId, {
        page_path: location.pathname,
      });
    }

    if (metaId && window.fbq) {
      window.fbq('track', 'PageView');
    }
  }, [location.pathname, gaId, metaId, initialized]);

  return null;
};

// Helper functions for tracking events
export const trackEvent = (eventName: string, params?: Record<string, unknown>) => {
  if (GA_ID && window.gtag) {
    window.gtag('event', eventName, params);
  }
};

export const trackConversion = (eventName: string, params?: Record<string, unknown>) => {
  if (GA_ID && window.gtag) {
    window.gtag('event', eventName, params);
  }
  
  if (META_ID && window.fbq) {
    window.fbq('track', eventName, params);
  }
};

export const trackWhatsAppClick = (courseName?: string) => {
  trackConversion('Lead', {
    content_name: courseName || 'Contato WhatsApp',
    content_category: 'WhatsApp',
  });
  trackEvent('whatsapp_click', {
    course_name: courseName,
  });
};

export const trackCourseView = (courseName: string, courseLevel: string) => {
  trackEvent('view_item', {
    item_name: courseName,
    item_category: courseLevel,
  });
  if (META_ID && window.fbq) {
    window.fbq('track', 'ViewContent', {
      content_name: courseName,
      content_category: courseLevel,
    });
  }
};
