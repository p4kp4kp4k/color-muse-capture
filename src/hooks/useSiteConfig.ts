import { useState, useEffect, useCallback } from 'react';
import { supabase } from '@/integrations/supabase/client';

export interface SiteConfig {
  id: string;
  key: string;
  value: string;
  description: string | null;
  category: string;
}

export const useSiteConfig = () => {
  const [config, setConfig] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchConfig = useCallback(async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('site_config')
        .select('*');

      if (error) throw error;

      const configMap: Record<string, string> = {};
      data?.forEach((item: SiteConfig) => {
        configMap[item.key] = item.value;
      });
      setConfig(configMap);
    } catch (err) {
      console.error('Error fetching site config:', err);
      setError(err instanceof Error ? err.message : 'Failed to load config');
      // Use fallback values
      setConfig({
        site_name: 'EAD Cursos Nacional',
        whatsapp_number: '5511999999999',
        whatsapp_message: 'Olá! Gostaria de mais informações sobre os diplomas.',
        banner_text: 'Confira Antes, Pague Depois',
        primary_color: '221 83% 53%',
        gold_color: '45 93% 47%',
      });
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchConfig();
  }, [fetchConfig]);

  const getWhatsAppLink = useCallback(() => {
    const number = config.whatsapp_number || '5511999999999';
    const message = encodeURIComponent(config.whatsapp_message || 'Olá! Gostaria de mais informações sobre os diplomas.');
    return `https://wa.me/${number}?text=${message}`;
  }, [config]);

  return {
    config,
    loading,
    error,
    refetch: fetchConfig,
    getWhatsAppLink,
    siteName: config.site_name || 'EAD Cursos Nacional',
    bannerText: config.banner_text || 'Confira Antes, Pague Depois',
  };
};
