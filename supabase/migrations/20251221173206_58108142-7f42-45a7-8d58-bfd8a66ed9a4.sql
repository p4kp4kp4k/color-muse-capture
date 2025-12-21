-- Add more strict RLS policies
-- Revoke direct table access and ensure only proper policies work

-- Add policy to prevent non-admins from inserting into user_roles
CREATE POLICY "Only system can insert user roles"
ON public.user_roles
FOR INSERT
TO authenticated
WITH CHECK (false);

-- But allow the trigger function to insert (it uses SECURITY DEFINER)

-- Add index for faster lookups
CREATE INDEX IF NOT EXISTS idx_user_roles_user_id ON public.user_roles(user_id);
CREATE INDEX IF NOT EXISTS idx_user_roles_role ON public.user_roles(role);
CREATE INDEX IF NOT EXISTS idx_site_config_key ON public.site_config(key);
CREATE INDEX IF NOT EXISTS idx_site_config_category ON public.site_config(category);

-- Add constraint to prevent SQL injection in config keys
ALTER TABLE public.site_config ADD CONSTRAINT valid_key_format 
  CHECK (key ~ '^[a-z][a-z0-9_]*$');

-- Add constraint to limit value length
ALTER TABLE public.site_config ADD CONSTRAINT max_value_length 
  CHECK (length(value) <= 5000);