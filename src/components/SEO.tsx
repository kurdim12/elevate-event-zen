import { useEffect } from "react";

interface BreadcrumbItem {
  name: string;
  url: string;
}

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonicalPath?: string;
  breadcrumbs?: BreadcrumbItem[];
  jsonLd?: object[];
  ogImage?: string;
}

export function SEO({ title, description, keywords, canonicalPath, breadcrumbs, jsonLd, ogImage }: SEOProps) {
  useEffect(() => {
    document.title = title;
    
    const updateMeta = (selector: string, attr: string, value: string) => {
      const el = document.querySelector(selector);
      if (el) el.setAttribute(attr, value);
    };

    updateMeta('meta[name="description"]', "content", description);
    updateMeta('meta[property="og:title"]', "content", title);
    updateMeta('meta[property="og:description"]', "content", description);
    updateMeta('meta[name="twitter:title"]', "content", title);
    updateMeta('meta[name="twitter:description"]', "content", description);

    // OG URL
    if (canonicalPath) {
      const fullUrl = `https://maranasi.com${canonicalPath}`;
      updateMeta('meta[property="og:url"]', "content", fullUrl);

      let canonical = document.querySelector('link[rel="canonical"]');
      if (canonical) {
        canonical.setAttribute("href", fullUrl);
      } else {
        canonical = document.createElement("link");
        canonical.setAttribute("rel", "canonical");
        canonical.setAttribute("href", fullUrl);
        document.head.appendChild(canonical);
      }

      // Hreflang tags
      const hreflangIds = ["hreflang-en", "hreflang-ar", "hreflang-default"];
      hreflangIds.forEach(id => {
        const existing = document.getElementById(id);
        if (existing) existing.remove();
      });

      const enLink = document.createElement("link");
      enLink.id = "hreflang-en";
      enLink.rel = "alternate";
      enLink.hreflang = "en";
      enLink.href = fullUrl;
      document.head.appendChild(enLink);

      const arLink = document.createElement("link");
      arLink.id = "hreflang-ar";
      arLink.rel = "alternate";
      arLink.hreflang = "ar";
      arLink.href = `https://maranasi.com/ar${canonicalPath}`;
      document.head.appendChild(arLink);

      const defaultLink = document.createElement("link");
      defaultLink.id = "hreflang-default";
      defaultLink.rel = "alternate";
      defaultLink.hreflang = "x-default";
      defaultLink.href = fullUrl;
      document.head.appendChild(defaultLink);
    }

    // OG image
    if (ogImage) {
      updateMeta('meta[property="og:image"]', "content", ogImage);
      updateMeta('meta[name="twitter:image"]', "content", ogImage);
    }

    // Keywords
    if (keywords) {
      let metaKeywords = document.querySelector('meta[name="keywords"]');
      if (metaKeywords) {
        metaKeywords.setAttribute("content", keywords);
      } else {
        metaKeywords = document.createElement("meta");
        metaKeywords.setAttribute("name", "keywords");
        metaKeywords.setAttribute("content", keywords);
        document.head.appendChild(metaKeywords);
      }
    }

    // Clean up old dynamic JSON-LD
    document.querySelectorAll('script[data-seo-jsonld]').forEach(el => el.remove());

    // Breadcrumb JSON-LD
    if (breadcrumbs && breadcrumbs.length > 0) {
      const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": breadcrumbs.map((item, i) => ({
          "@type": "ListItem",
          "position": i + 1,
          "name": item.name,
          "item": item.url
        }))
      };
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.setAttribute("data-seo-jsonld", "true");
      script.textContent = JSON.stringify(breadcrumbSchema);
      document.head.appendChild(script);
    }

    // Additional JSON-LD schemas
    if (jsonLd) {
      jsonLd.forEach(schema => {
        const script = document.createElement("script");
        script.type = "application/ld+json";
        script.setAttribute("data-seo-jsonld", "true");
        script.textContent = JSON.stringify(schema);
        document.head.appendChild(script);
      });
    }

    return () => {
      document.querySelectorAll('script[data-seo-jsonld]').forEach(el => el.remove());
      ["hreflang-en", "hreflang-ar", "hreflang-default"].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.remove();
      });
    };
  }, [title, description, keywords, canonicalPath, breadcrumbs, jsonLd, ogImage]);

  return null;
}
