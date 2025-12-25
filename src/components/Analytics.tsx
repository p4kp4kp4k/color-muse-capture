import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';

declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
    dataLayer: unknown[];
  }
}

// Store IDs globally for helper functions
let GA_ID = '';
let GADS_ID = '';
let GADS_LABEL = '';

export const Analytics = () => {
  const location = useLocation();
  const [gaId, setGaId] = useState('');
  const [gadsId, setGadsId] = useState('');
  const [gadsLabel, setGadsLabel] = useState('');
  const [initialized, setInitialized] = useState(false);

  // Fetch analytics IDs from database
  useEffect(() => {
    const fetchAnalyticsConfig = async () => {
      const { data, error } = await supabase
        .from('site_config')
        .select('key, value')
        .in('key', ['ga_measurement_id', 'google_ads_id', 'google_ads_label']);

      if (!error && data) {
        const gaConfig = data.find(c => c.key === 'ga_measurement_id');
        const gadsConfig = data.find(c => c.key === 'google_ads_id');
        const gadsLabelConfig = data.find(c => c.key === 'google_ads_label');
        
        if (gaConfig?.value) {
          setGaId(gaConfig.value);
          GA_ID = gaConfig.value;
        }
        if (gadsConfig?.value) {
          setGadsId(gadsConfig.value);
          GADS_ID = gadsConfig.value;
        }
        if (gadsLabelConfig?.value) {
          setGadsLabel(gadsLabelConfig.value);
          GADS_LABEL = gadsLabelConfig.value;
        }
      }
    };

    fetchAnalyticsConfig();
  }, []);

  // Initialize analytics scripts (GA4 + Google Ads via gtag - GTM is in index.html)
  useEffect(() => {
    if (initialized) return;

    const hasGoogleTag = gaId || gadsId;
    if (hasGoogleTag) {
      const primaryId = gaId || gadsId;
      const gaScript = document.createElement('script');
      gaScript.async = true;
      gaScript.src = `https://www.googletagmanager.com/gtag/js?id=${primaryId}`;
      document.head.appendChild(gaScript);

      window.dataLayer = window.dataLayer || [];
      window.gtag = function gtag(...args: unknown[]) {
        window.dataLayer.push(args);
      };
      window.gtag('js', new Date());
      
      // Configure GA4 if available
      if (gaId) {
        window.gtag('config', gaId, {
          page_path: location.pathname,
        });
      }
      
      // Configure Google Ads if available
      if (gadsId) {
        window.gtag('config', gadsId);
      }
      
      setInitialized(true);
    }
  }, [gaId, gadsId, gadsLabel, initialized, location.pathname]);

  // Track page views on route change
  useEffect(() => {
    if (!initialized) return;

    if (gaId && window.gtag) {
      window.gtag('config', gaId, {
        page_path: location.pathname,
      });
    }
  }, [location.pathname, gaId, initialized]);

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
};

// Google Ads conversion tracking
export const trackGoogleAdsConversion = () => {
  if (GADS_ID && GADS_LABEL && window.gtag) {
    window.gtag('event', 'conversion', {
      'send_to': `${GADS_ID}/${GADS_LABEL}`,
    });
    return true;
  }
  return false;
};

export const trackWhatsAppClick = (courseName?: string) => {
  // Track Google Ads conversion
  trackGoogleAdsConversion();
  
  // Track GA4 conversions
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
};
