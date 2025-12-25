import { useEffect } from "react";
import { useSiteConfigContext } from "@/contexts/SiteConfigContext";

interface SEOHeadProps {
  title: string;
  description: string;
  keywords?: string;
  canonicalPath?: string;
  ogImage?: string;
  ogType?: "website" | "article";
  structuredData?: object;
}

const SEOHead = ({
  title,
  description,
  keywords,
  canonicalPath = "",
  ogImage = "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1200&h=630&fit=crop",
  ogType = "website",
  structuredData,
}: SEOHeadProps) => {
  const { siteName } = useSiteConfigContext();
  const brandName = (siteName || "EAD Cursos Nacional").trim();

  const baseUrl = "https://eadcursosnacional.com.br";
  const fullUrl = `${baseUrl}${canonicalPath}`;
  const fullTitle = `${title} | ${brandName}`;

  useEffect(() => {
    // Update document title
    document.title = fullTitle;

    // Helper to update or create meta tag
    const updateMeta = (name: string, content: string, property = false) => {
      const attr = property ? "property" : "name";
      let meta = document.querySelector(`meta[${attr}="${name}"]`);
      if (!meta) {
        meta = document.createElement("meta");
        meta.setAttribute(attr, name);
        document.head.appendChild(meta);
      }
      meta.setAttribute("content", content);
    };

    // Update meta tags
    updateMeta("description", description);
    if (keywords) updateMeta("keywords", keywords);
    updateMeta("robots", "index, follow");

    // Open Graph
    updateMeta("og:title", fullTitle, true);
    updateMeta("og:description", description, true);
    updateMeta("og:url", fullUrl, true);
    updateMeta("og:image", ogImage, true);
    updateMeta("og:type", ogType, true);
    updateMeta("og:locale", "pt_BR", true);
    updateMeta("og:site_name", brandName, true);

    // Twitter Card
    updateMeta("twitter:card", "summary_large_image");
    updateMeta("twitter:title", fullTitle);
    updateMeta("twitter:description", description);
    updateMeta("twitter:image", ogImage);

    // Canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", fullUrl);

    // Structured data
    if (structuredData) {
      const existingScript = document.querySelector('script[data-seo-structured]');
      if (existingScript) {
        existingScript.remove();
      }
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.setAttribute("data-seo-structured", "true");
      script.textContent = JSON.stringify(structuredData);
      document.head.appendChild(script);
    }

    return () => {
      // Cleanup structured data on unmount
      const script = document.querySelector('script[data-seo-structured]');
      if (script) script.remove();
    };
  }, [fullTitle, description, keywords, fullUrl, ogImage, ogType, structuredData]);

  return null;
};

export default SEOHead;
