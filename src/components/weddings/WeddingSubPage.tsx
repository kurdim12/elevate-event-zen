import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

interface WeddingSubPageProps {
  location: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string;
  canonicalPath: string;
  intro: string;
  highlights: string[];
}

export function WeddingSubPage({ location, title, metaTitle, metaDescription, keywords, canonicalPath, intro, highlights }: WeddingSubPageProps) {
  return (
    <Layout>
      <SEO
        title={metaTitle}
        description={metaDescription}
        keywords={keywords}
        canonicalPath={canonicalPath}
        breadcrumbs={[
          { name: "Home", url: "https://maranasi.com" },
          { name: "Weddings", url: "https://maranasi.com/weddings" },
          { name: title, url: `https://maranasi.com${canonicalPath}` },
        ]}
        jsonLd={[{
          "@context": "https://schema.org", "@type": "Service",
          "name": title, "serviceType": "Wedding Planning",
          "provider": { "@type": "LocalBusiness", "name": "Maranasi", "url": "https://maranasi.com" },
          "areaServed": "Jordan", "url": `https://maranasi.com${canonicalPath}`
        }]}
      />

      <section className="relative min-h-[60vh] flex items-end">
        <div className="absolute inset-0 bg-gradient-to-br from-card via-background to-card">
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
        </div>
        <div className="relative z-10 container-wide pb-16">
          <AnimatedSection>
            <p className="section-label mb-4">Weddings</p>
            <h1 className="heading-display max-w-4xl">{title}</h1>
          </AnimatedSection>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-wide max-w-3xl">
          <AnimatedSection>
            <p className="body-lg">{intro}</p>
          </AnimatedSection>
          <AnimatedSection delay={100}>
            <h2 className="heading-sm mt-12 mb-6">Why {location}</h2>
            <ul className="space-y-3">
              {highlights.map((h) => (
                <li key={h} className="flex items-center gap-3 text-muted-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  {h}
                </li>
              ))}
            </ul>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-primary/90 via-primary to-primary/80">
        <div className="container-narrow text-center">
          <AnimatedSection>
            <h2 className="heading-lg text-primary-foreground mb-8">Plan Your {location} Wedding</h2>
            <Link to="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-background text-foreground text-[13px] font-medium uppercase tracking-[0.15em] hover:bg-background/90 transition-all">
              Request a Consultation
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
}
