import { useState, useEffect, useCallback } from 'react';
import { User, Session } from '@supabase/supabase-js';
import { supabase } from '@/integrations/supabase/client';

export const useAuth = () => {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);
  const [roleChecked, setRoleChecked] = useState(false);

  useEffect(() => {
    // Set up auth state listener FIRST
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, session) => {
        setSession(session);
        setUser(session?.user ?? null);
        setLoading(false);

        // Check admin status after auth state changes
        if (session?.user) {
          setRoleChecked(false);
          setTimeout(() => {
            checkAdminStatus(session.user.id);
          }, 0);
        } else {
          setIsAdmin(false);
          setRoleChecked(true);
        }
      }
    );

    // THEN check for existing session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setUser(session?.user ?? null);
      setLoading(false);

      if (session?.user) {
        setRoleChecked(false);
        checkAdminStatus(session.user.id);
      } else {
        setIsAdmin(false);
        setRoleChecked(true);
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  const checkAdminStatus = async (userId: string) => {
    try {
      setRoleChecked(false);

      // Prefer RPC (security definer) to avoid any RLS edge cases
      const { data: hasAdminRole, error: rpcError } = await supabase.rpc('has_role', {
        _user_id: userId,
        _role: 'admin',
      });

      if (!rpcError && typeof hasAdminRole === 'boolean') {
        setIsAdmin(hasAdminRole);
        return;
      }

      // Fallback to direct table read (should work with RLS "own roles")
      const { data, error } = await supabase
        .from('user_roles')
        .select('role')
        .eq('user_id', userId)
        .eq('role', 'admin')
        .maybeSingle();

      if (error) {
        console.error('Error checking admin status:', error);
        setIsAdmin(false);
        return;
      }

      setIsAdmin(!!data);
    } catch (err) {
      console.error('Error checking admin status:', err);
      setIsAdmin(false);
    } finally {
      setRoleChecked(true);
    }
  };

  const signIn = useCallback(async (email: string, password: string) => {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    return { error };
  }, []);

  const signUp = useCallback(async (email: string, password: string) => {
    const redirectUrl = `${window.location.origin}/`;
    
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: redirectUrl
      }
    });
    return { error };
  }, []);

  const signOut = useCallback(async () => {
    const { error } = await supabase.auth.signOut();
    return { error };
  }, []);

  return {
    user,
    session,
    loading,
    isAdmin,
    roleChecked,
    signIn,
    signUp,
    signOut,
  };
};
