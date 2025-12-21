import React, { createContext, useContext, ReactNode } from 'react';
import { useSiteConfig } from '@/hooks/useSiteConfig';

interface SiteConfigContextType {
  config: Record<string, string>;
  loading: boolean;
  error: string | null;
  refetch: () => Promise<void>;
  getWhatsAppLink: () => string;
  siteName: string;
  bannerText: string;
}

const SiteConfigContext = createContext<SiteConfigContextType | undefined>(undefined);

export const SiteConfigProvider = ({ children }: { children: ReactNode }) => {
  const siteConfig = useSiteConfig();

  return (
    <SiteConfigContext.Provider value={siteConfig}>
      {children}
    </SiteConfigContext.Provider>
  );
};

export const useSiteConfigContext = () => {
  const context = useContext(SiteConfigContext);
  if (context === undefined) {
    throw new Error('useSiteConfigContext must be used within a SiteConfigProvider');
  }
  return context;
};
