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

  // Default Organization schema with dynamic siteName
  const defaultOrganizationSchema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": brandName,
    "alternateName": brandName,
    "url": baseUrl,
    "logo": `${baseUrl}/favicon.ico`,
    "description": `${brandName} - Diplomas e certificados acadêmicos reconhecidos pelo MEC para todo o Brasil.`,
    "areaServed": {
      "@type": "Country",
      "name": "Brazil"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "availableLanguage": "Portuguese"
    },
    "sameAs": []
  };

  // Website schema for better SEO
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": brandName,
    "url": baseUrl,
    "potentialAction": {
      "@type": "SearchAction",
      "target": `${baseUrl}/cursos?q={search_term_string}`,
      "query-input": "required name=search_term_string"
    }
  };

  // BreadcrumbList schema
  const breadcrumbSchema = canonicalPath && canonicalPath !== "/" ? {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": baseUrl
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": title,
        "item": fullUrl
      }
    ]
  } : null;

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
    updateMeta("author", brandName);
    updateMeta("publisher", brandName);

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
    updateMeta("twitter:site", `@${brandName.replace(/\s+/g, '')}`);

    // Canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", fullUrl);

    // Remove existing structured data scripts
    document.querySelectorAll('script[data-seo-structured]').forEach(el => el.remove());

    // Add Organization schema
    const orgScript = document.createElement("script");
    orgScript.type = "application/ld+json";
    orgScript.setAttribute("data-seo-structured", "org");
    orgScript.textContent = JSON.stringify(defaultOrganizationSchema);
    document.head.appendChild(orgScript);

    // Add Website schema
    const webScript = document.createElement("script");
    webScript.type = "application/ld+json";
    webScript.setAttribute("data-seo-structured", "website");
    webScript.textContent = JSON.stringify(websiteSchema);
    document.head.appendChild(webScript);

    // Add Breadcrumb schema if not homepage
    if (breadcrumbSchema) {
      const bcScript = document.createElement("script");
      bcScript.type = "application/ld+json";
      bcScript.setAttribute("data-seo-structured", "breadcrumb");
      bcScript.textContent = JSON.stringify(breadcrumbSchema);
      document.head.appendChild(bcScript);
    }

    // Add custom structured data if provided
    if (structuredData) {
      const customScript = document.createElement("script");
      customScript.type = "application/ld+json";
      customScript.setAttribute("data-seo-structured", "custom");
      customScript.textContent = JSON.stringify(structuredData);
      document.head.appendChild(customScript);
    }

    return () => {
      // Cleanup structured data on unmount
      document.querySelectorAll('script[data-seo-structured]').forEach(el => el.remove());
    };
  }, [fullTitle, description, keywords, fullUrl, ogImage, ogType, structuredData, brandName]);

  return null;
};

export default SEOHead;
