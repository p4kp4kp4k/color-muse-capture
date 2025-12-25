-- Add Google Tag Manager ID to site_config
INSERT INTO public.site_config (key, value, category, description)
VALUES ('gtm_id', '', 'analytics', 'Google Tag Manager ID (formato: GTM-XXXXXXXX)')
ON CONFLICT (key) DO NOTHING;