-- Drop the restrictive policy and create a better one
DROP POLICY IF EXISTS "Admins can view all roles" ON public.user_roles;

-- Allow users to check their own roles (needed for admin verification)
CREATE POLICY "Users can view their own roles"
ON public.user_roles
FOR SELECT
TO authenticated
USING (auth.uid() = user_id);

-- Allow admins to view all roles
CREATE POLICY "Admins can view all user roles"
ON public.user_roles
FOR SELECT
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));