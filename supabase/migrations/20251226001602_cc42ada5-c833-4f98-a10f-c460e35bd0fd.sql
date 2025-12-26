-- Add restrictive UPDATE policy on user_roles table to prevent privilege escalation
-- Only admins can update user roles

CREATE POLICY "Only admins can update roles"
ON public.user_roles
FOR UPDATE
USING (has_role(auth.uid(), 'admin'::app_role))
WITH CHECK (has_role(auth.uid(), 'admin'::app_role));