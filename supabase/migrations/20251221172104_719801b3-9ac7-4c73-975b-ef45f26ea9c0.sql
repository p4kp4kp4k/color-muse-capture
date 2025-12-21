-- Create app_role enum
CREATE TYPE public.app_role AS ENUM ('admin', 'user');

-- Create user_roles table for role management
CREATE TABLE public.user_roles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  role app_role NOT NULL DEFAULT 'user',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  UNIQUE (user_id, role)
);

-- Enable RLS on user_roles
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

-- Create has_role function
CREATE OR REPLACE FUNCTION public.has_role(_user_id UUID, _role app_role)
RETURNS BOOLEAN
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1
    FROM public.user_roles
    WHERE user_id = _user_id
      AND role = _role
  )
$$;

-- Policy for user_roles (admins can view all)
CREATE POLICY "Admins can view all roles"
ON public.user_roles
FOR SELECT
TO authenticated
USING (public.has_role(auth.uid(), 'admin') OR auth.uid() = user_id);

-- Create site_config table for storing all site configurations
CREATE TABLE public.site_config (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  key TEXT NOT NULL UNIQUE,
  value TEXT NOT NULL,
  description TEXT,
  category TEXT NOT NULL DEFAULT 'general',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS on site_config
ALTER TABLE public.site_config ENABLE ROW LEVEL SECURITY;

-- Policy: Anyone can read site_config (public data)
CREATE POLICY "Anyone can read site config"
ON public.site_config
FOR SELECT
TO anon, authenticated
USING (true);

-- Policy: Only admins can update site_config
CREATE POLICY "Admins can update site config"
ON public.site_config
FOR UPDATE
TO authenticated
USING (public.has_role(auth.uid(), 'admin'))
WITH CHECK (public.has_role(auth.uid(), 'admin'));

-- Policy: Only admins can insert site_config
CREATE POLICY "Admins can insert site config"
ON public.site_config
FOR INSERT
TO authenticated
WITH CHECK (public.has_role(auth.uid(), 'admin'));

-- Policy: Only admins can delete site_config
CREATE POLICY "Admins can delete site config"
ON public.site_config
FOR DELETE
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

-- Create trigger for updated_at
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

CREATE TRIGGER update_site_config_updated_at
BEFORE UPDATE ON public.site_config
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Insert default site configurations
INSERT INTO public.site_config (key, value, description, category) VALUES
('site_name', 'EAD Cursos Nacional', 'Nome do site', 'general'),
('whatsapp_number', '5511999999999', 'Número do WhatsApp principal', 'contact'),
('whatsapp_message', 'Olá! Gostaria de mais informações sobre os diplomas.', 'Mensagem padrão do WhatsApp', 'contact'),
('primary_color', '221 83% 53%', 'Cor primária do site (HSL)', 'theme'),
('gold_color', '45 93% 47%', 'Cor dourada do site (HSL)', 'theme'),
('banner_text', 'Confira Antes, Pague Depois', 'Texto do banner superior', 'general');