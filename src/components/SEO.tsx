import { useEffect } from "react";

interface BreadcrumbItem {
  name: string;
  url: string;
}

interface HreflangAlternate {
  hreflang: string;
  path: string;
}

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonicalPath?: string;
  breadcrumbs?: BreadcrumbItem[];
  jsonLd?: object[];
  ogImage?: string;
  hreflangAlternates?: HreflangAlternate[];
  locale?: string;
}

export function SEO({
  title,
  description,
  keywords,
  canonicalPath,
  breadcrumbs,
  jsonLd,
  ogImage,
  hreflangAlternates,
  locale,
}: SEOProps) {
  useEffect(() => {
    document.title = title;

    const ensureMeta = (name: string, content: string, isProperty = false) => {
      const attr = isProperty ? "property" : "name";
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

    ensureMeta("description", description);
    ensureMeta("og:title", title, true);
    ensureMeta("og:description", description, true);
    ensureMeta("og:type", "website", true);
    ensureMeta("og:site_name", "Maranasi — Luxury Event Planner Jordan", true);
    ensureMeta("og:locale", locale || "en_US", true);
    ensureMeta("twitter:card", "summary_large_image");
    ensureMeta("twitter:title", title);
    ensureMeta("twitter:description", description);

    ensureMeta("geo.region", "JO-AM");
    ensureMeta("geo.placename", "Amman, Jordan");
    ensureMeta("geo.position", "31.9522;35.9304");
    ensureMeta("ICBM", "31.9522, 35.9304");

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

      // Remove any prior hreflang tags we injected
      document
        .querySelectorAll('link[data-seo-hreflang]')
        .forEach((el) => el.remove());

      const alternates: HreflangAlternate[] =
        hreflangAlternates && hreflangAlternates.length > 0
          ? hreflangAlternates
          : [
              { hreflang: "en", path: canonicalPath },
              { hreflang: "x-default", path: canonicalPath },
            ];

      alternates.forEach((alt) => {
        const link = document.createElement("link");
        link.setAttribute("data-seo-hreflang", "true");
        link.rel = "alternate";
        link.hreflang = alt.hreflang;
        link.href = `https://maranasi.com${alt.path}`;
        document.head.appendChild(link);
      });
    }

    const ogImg = ogImage || "https://maranasi.com/images/hero-event-opt.jpg";
    ensureMeta("og:image", ogImg, true);
    ensureMeta("twitter:image", ogImg);

    if (keywords) {
      ensureMeta("keywords", keywords);
    }

    document.querySelectorAll('script[data-seo-jsonld]').forEach((el) => el.remove());

    if (breadcrumbs && breadcrumbs.length > 0) {
      const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: breadcrumbs.map((item, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: item.name,
          item: item.url,
        })),
      };
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.setAttribute("data-seo-jsonld", "true");
      script.textContent = JSON.stringify(breadcrumbSchema);
      document.head.appendChild(script);
    }

    if (jsonLd) {
      jsonLd.forEach((schema) => {
        const script = document.createElement("script");
        script.type = "application/ld+json";
        script.setAttribute("data-seo-jsonld", "true");
        script.textContent = JSON.stringify(schema);
        document.head.appendChild(script);
      });
    }

    // Set html lang/dir for Arabic routes
    if (locale && locale.startsWith("ar")) {
      document.documentElement.lang = "ar";
      document.documentElement.dir = "rtl";
    } else {
      document.documentElement.lang = "en";
      document.documentElement.dir = "ltr";
    }

    return () => {
      document.querySelectorAll('script[data-seo-jsonld]').forEach((el) => el.remove());
      document.querySelectorAll('link[data-seo-hreflang]').forEach((el) => el.remove());
    };
  }, [title, description, keywords, canonicalPath, breadcrumbs, jsonLd, ogImage, hreflangAlternates, locale]);

  return null;
}
