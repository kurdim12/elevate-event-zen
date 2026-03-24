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

    const ensureMeta = (name: string, content: string, isProperty = false) => {
      const attr = isProperty ? 'property' : 'name';
      const selector = `meta[${attr}="${name}"]`;
      let el = document.querySelector(selector);
      if (el) {
        el.setAttribute("content", content);
      } else {
        el = document.createElement("meta");
        el.setAttribute(attr, name);
        el.setAttribute("content", content);
        document.head.appendChild(el);
      }
    };

    // Basic meta
    ensureMeta("description", description);
    ensureMeta("og:title", title, true);
    ensureMeta("og:description", description, true);
    ensureMeta("og:type", "website", true);
    ensureMeta("og:site_name", "Maranasi — Luxury Event Planner Jordan", true);
    ensureMeta("og:locale", "en_US", true);
    ensureMeta("twitter:card", "summary_large_image");
    ensureMeta("twitter:title", title);
    ensureMeta("twitter:description", description);

    // Geo meta tags — tell Google this is a Jordan business
    ensureMeta("geo.region", "JO-AM");
    ensureMeta("geo.placename", "Amman, Jordan");
    ensureMeta("geo.position", "31.9522;35.9304");
    ensureMeta("ICBM", "31.9522, 35.9304");

    // OG URL + canonical
    if (canonicalPath) {
      const fullUrl = `https://maranasi.com${canonicalPath}`;
      ensureMeta("og:url", fullUrl, true);

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
    const ogImg = ogImage || "https://maranasi.com/wp-content/uploads/maranasi-og-image.jpg";
    ensureMeta("og:image", ogImg, true);
    ensureMeta("twitter:image", ogImg);

    // Keywords
    if (keywords) {
      ensureMeta("keywords", keywords);
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
