import { Link, useParams } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

const subPages: Record<string, { title: string; metaTitle: string; metaDescription: string; keywords: string; intro: string }> = {
  "conferences": {
    title: "Conference Management in Jordan",
    metaTitle: "Conference Management Jordan | Corporate Conferences Amman | Maranasi",
    metaDescription: "Maranasi manages corporate conferences in Jordan — agenda control, stage operations, speaker flow, and production. Producers of TEDxAmman.",
    keywords: "conference management Jordan, conference organizer Amman, corporate conference Jordan",
    intro: "Maranasi manages corporate conferences with credibility, timing discipline, and premium production. Agenda flow, stage operations, room readiness, onsite coordination.",
  },
  "product-launches": {
    title: "Product Launch Events in Jordan",
    metaTitle: "Product Launch Events Jordan & Amman | Maranasi",
    metaDescription: "Maranasi produces luxury product launch events in Amman, Jordan. Cinematic staging, live AV, and immersive brand storytelling.",
    keywords: "product launch Jordan, product launch event Amman, brand launch Jordan",
    intro: "From automotive reveals to luxury fashion launches and tech product unveilings — Maranasi combines cinematic staging, live AV, and brand storytelling to maximise your impact in Jordan.",
  },
  "award-ceremonies": {
    title: "Award Ceremony Production in Jordan",
    metaTitle: "Award Ceremony Production Jordan | Corporate Awards Amman | Maranasi",
    metaDescription: "Maranasi produces premium award ceremonies in Jordan. Show-calling, entertainment programming, and cinematic production for corporate award nights.",
    keywords: "award ceremony Jordan, corporate awards Amman, award night production Jordan",
    intro: "From corporate award nights to industry gala ceremonies, Maranasi delivers award ceremony productions in Jordan with show-calling, entertainment programming, and premium staging.",
  },
};

export default function CorporateSubPage() {
  const { subSlug } = useParams<{ subSlug: string }>();
  const page = subPages[subSlug || ""];

  if (!page) {
    return (
      <Layout>
        <section className="pt-40 pb-20 text-center">
          <h1 className="heading-lg">Page Not Found</h1>
          <Link to="/corporate-events" className="btn-outline mt-8">Back to Corporate Events</Link>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      <SEO
        title={page.metaTitle}
        description={page.metaDescription}
        keywords={page.keywords}
        canonicalPath={`/corporate-events/${subSlug}`}
        breadcrumbs={[
          { name: "Home", url: "https://maranasi.com" },
          { name: "Corporate Events", url: "https://maranasi.com/corporate-events" },
          { name: page.title, url: `https://maranasi.com/corporate-events/${subSlug}` },
        ]}
      />

      <section className="pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="container-wide">
          <AnimatedSection>
            <p className="section-label mb-4">Corporate</p>
            <h1 className="heading-display max-w-4xl">{page.title}</h1>
          </AnimatedSection>
        </div>
      </section>

      <section className="section-padding pt-0">
        <div className="container-wide max-w-3xl">
          <AnimatedSection>
            <p className="body-lg">{page.intro}</p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-primary/90 via-primary to-primary/80">
        <div className="container-narrow text-center">
          <AnimatedSection>
            <h2 className="heading-lg text-primary-foreground mb-8">Request a Proposal</h2>
            <Link to="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-background text-foreground text-[13px] font-medium uppercase tracking-[0.15em] hover:bg-background/90 transition-all">
              Get Started
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
}
