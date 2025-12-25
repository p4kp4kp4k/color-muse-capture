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

// Debug mode - set to true to see console logs
const DEBUG_ANALYTICS = true;

const debugLog = (message: string, data?: unknown) => {
  if (DEBUG_ANALYTICS) {
    console.log(`%c[Analytics] ${message}`, 'color: #4CAF50; font-weight: bold;', data || '');
  }
};

export const Analytics = () => {
  const location = useLocation();
  const [gaId, setGaId] = useState('');
  const [gadsId, setGadsId] = useState('');
  const [gadsLabel, setGadsLabel] = useState('');
  const [initialized, setInitialized] = useState(false);

  // Fetch analytics IDs from database
  useEffect(() => {
    const fetchAnalyticsConfig = async () => {
      debugLog('Fetching analytics config from database...');
      
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
          debugLog('GA4 ID loaded:', gaConfig.value);
        }
        if (gadsConfig?.value) {
          setGadsId(gadsConfig.value);
          GADS_ID = gadsConfig.value;
          debugLog('Google Ads ID loaded:', gadsConfig.value);
        }
        if (gadsLabelConfig?.value) {
          setGadsLabel(gadsLabelConfig.value);
          GADS_LABEL = gadsLabelConfig.value;
          debugLog('Google Ads Label loaded:', gadsLabelConfig.value);
        }
        
        debugLog('Config summary:', { GA_ID, GADS_ID, GADS_LABEL });
      } else if (error) {
        debugLog('Error fetching config:', error);
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
      debugLog('Initializing gtag with primary ID:', primaryId);
      
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
        debugLog('GA4 configured:', gaId);
      }
      
      // Configure Google Ads if available
      if (gadsId) {
        window.gtag('config', gadsId);
        debugLog('Google Ads configured:', gadsId);
      }
      
      setInitialized(true);
      debugLog('Analytics initialized successfully!');
    }
  }, [gaId, gadsId, gadsLabel, initialized, location.pathname]);

  // Track page views on route change
  useEffect(() => {
    if (!initialized) return;

    if (gaId && window.gtag) {
      window.gtag('config', gaId, {
        page_path: location.pathname,
      });
      debugLog('Page view tracked:', location.pathname);
    }
  }, [location.pathname, gaId, initialized]);

  return null;
};

// Helper functions for tracking events
export const trackEvent = (eventName: string, params?: Record<string, unknown>) => {
  if (GA_ID && window.gtag) {
    window.gtag('event', eventName, params);
    debugLog(`Event tracked: ${eventName}`, params);
  }
};

export const trackConversion = (eventName: string, params?: Record<string, unknown>) => {
  if (GA_ID && window.gtag) {
    window.gtag('event', eventName, params);
    debugLog(`Conversion tracked: ${eventName}`, params);
  }
};

// Google Ads conversion tracking
export const trackGoogleAdsConversion = () => {
  debugLog('Attempting Google Ads conversion...', { GADS_ID, GADS_LABEL, hasGtag: !!window.gtag });
  
  if (GADS_ID && GADS_LABEL && window.gtag) {
    const sendTo = `${GADS_ID}/${GADS_LABEL}`;
    window.gtag('event', 'conversion', {
      'send_to': sendTo,
    });
    debugLog(`✅ Google Ads conversion FIRED! send_to: ${sendTo}`);
    return true;
  }
  
  if (!GADS_ID) {
    debugLog('⚠️ Google Ads ID not configured');
  }
  if (!GADS_LABEL) {
    debugLog('⚠️ Google Ads Label not configured');
  }
  if (!window.gtag) {
    debugLog('⚠️ gtag not available');
  }
  
  return false;
};

export const trackWhatsAppClick = (courseName?: string) => {
  debugLog('🟢 WhatsApp click detected!', { courseName });
  
  // Track Google Ads conversion
  const adsSuccess = trackGoogleAdsConversion();
  
  // Track GA4 conversions
  trackConversion('Lead', {
    content_name: courseName || 'Contato WhatsApp',
    content_category: 'WhatsApp',
  });
  trackEvent('whatsapp_click', {
    course_name: courseName,
  });
  
  debugLog('WhatsApp tracking complete', { googleAdsConversion: adsSuccess });
};

export const trackCourseView = (courseName: string, courseLevel: string) => {
  trackEvent('view_item', {
    item_name: courseName,
    item_category: courseLevel,
  });
  debugLog('Course view tracked:', { courseName, courseLevel });
};
