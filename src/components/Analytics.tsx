import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Configure seus IDs aqui
const GA_MEASUREMENT_ID = ''; // Ex: G-XXXXXXXXXX
const META_PIXEL_ID = ''; // Ex: 1234567890123456

declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
    dataLayer: unknown[];
    fbq: (...args: unknown[]) => void;
    _fbq: unknown;
  }
}

export const Analytics = () => {
  const location = useLocation();

  useEffect(() => {
    // Google Analytics 4
    if (GA_MEASUREMENT_ID) {
      // Load gtag script
      const gaScript = document.createElement('script');
      gaScript.async = true;
      gaScript.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
      document.head.appendChild(gaScript);

      // Initialize gtag
      window.dataLayer = window.dataLayer || [];
      window.gtag = function gtag(...args: unknown[]) {
        window.dataLayer.push(args);
      };
      window.gtag('js', new Date());
      window.gtag('config', GA_MEASUREMENT_ID, {
        page_path: location.pathname,
      });
    }

    // Meta Pixel (Facebook)
    if (META_PIXEL_ID) {
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
      
      // Load script
      const script = document.createElement('script');
      script.async = true;
      script.src = 'https://connect.facebook.net/en_US/fbevents.js';
      document.head.appendChild(script);
      
      window.fbq('init', META_PIXEL_ID);
      window.fbq('track', 'PageView');
    }
  }, []);

  // Track page views on route change
  useEffect(() => {
    if (GA_MEASUREMENT_ID && window.gtag) {
      window.gtag('config', GA_MEASUREMENT_ID, {
        page_path: location.pathname,
      });
    }

    if (META_PIXEL_ID && window.fbq) {
      window.fbq('track', 'PageView');
    }
  }, [location.pathname]);

  return null;
};

// Helper functions for tracking events
export const trackEvent = (eventName: string, params?: Record<string, unknown>) => {
  if (GA_MEASUREMENT_ID && window.gtag) {
    window.gtag('event', eventName, params);
  }
};

export const trackConversion = (eventName: string, params?: Record<string, unknown>) => {
  // Google Analytics
  if (GA_MEASUREMENT_ID && window.gtag) {
    window.gtag('event', eventName, params);
  }
  
  // Meta Pixel
  if (META_PIXEL_ID && window.fbq) {
    window.fbq('track', eventName, params);
  }
};

// Pre-defined conversion events
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
  if (META_PIXEL_ID && window.fbq) {
    window.fbq('track', 'ViewContent', {
      content_name: courseName,
      content_category: courseLevel,
    });
  }
};
