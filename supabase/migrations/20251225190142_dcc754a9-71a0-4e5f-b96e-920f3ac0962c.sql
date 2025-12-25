-- Insert analytics configuration
INSERT INTO public.site_config (key, value, description, category)
VALUES 
  ('ga_measurement_id', '', 'ID do Google Analytics (ex: G-XXXXXXXXXX)', 'analytics'),
  ('meta_pixel_id', '', 'ID do Meta Pixel (ex: 1234567890123456)', 'analytics')
ON CONFLICT (key) DO NOTHING;