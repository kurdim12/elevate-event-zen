import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const corporateFAQs = [
  { q: "What corporate events does Maranasi manage in Jordan?", a: "We manage conferences, product launches, award ceremonies, team retreats, exhibitions, and MICE events across Jordan and MENA." },
  { q: "Can Maranasi handle events for 4,000+ guests?", a: "Yes. We produced TEDxAmman for over 4,000 guests — one of the largest independent TEDx events in the Arab world." },
  { q: "Does Maranasi work with international companies?", a: "Yes. We've produced events for international brands and organisations operating in Jordan, UAE, Saudi Arabia, and beyond." },
  { q: "What is the Maranasi approach to corporate events?", a: "Every project is a managed system — planning, suppliers, production, guest flow, and stage timing aligned before show day." },
  { q: "How do I request a corporate event proposal?", a: "Contact us via our website form, call +962 77 524 0000, or email gm@maranasi.com. We respond within 24 hours." },
];

const faqSchema = {
  "@context": "https://schema.org", "@type": "FAQPage",
  "mainEntity": corporateFAQs.map(f => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } }))
};

const serviceSchema = {
  "@context": "https://schema.org", "@type": "Service",
  "name": "Corporate Event Management in Jordan",
  "provider": { "@type": "LocalBusiness", "name": "Maranasi", "url": "https://maranasi.com" },
  "serviceType": "Corporate Event Management", "areaServed": "Jordan",
  "url": "https://maranasi.com/corporate-events"
};

const subServices = [
  { name: "Conferences", href: "/corporate-events/conferences", desc: "Multi-day conferences with stage management and speaker coordination." },
  { name: "Product Launches", href: "/corporate-events/product-launches", desc: "Cinematic product reveals with live AV and immersive staging." },
  { name: "Award Ceremonies", href: "/corporate-events/award-ceremonies", desc: "Premium award nights with show-calling and entertainment programming." },
];

export default function CorporateEventsMain() {
  return (
    <Layout>
      <SEO
        title="Corporate Event Management Jordan & Amman | Conferences, Product Launches | Maranasi"
        description="Maranasi delivers luxury corporate events in Jordan — conferences, product launches, team building & award ceremonies in Amman. Producers of TEDxAmman for 4,000+ guests."
        keywords="corporate event management Jordan, event management companies in Jordan, corporate event planner Amman, conference planning Jordan, product launch Jordan, TEDxAmman"
        canonicalPath="/corporate-events"
        breadcrumbs={[
          { name: "Home", url: "https://maranasi.com" },
          { name: "Corporate Events", url: "https://maranasi.com/corporate-events" },
        ]}
        jsonLd={[faqSchema, serviceSchema]}
      />

      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-end">
        <div className="absolute inset-0 bg-gradient-to-br from-card via-background to-card">
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
        </div>
        <div className="relative z-10 container-wide pb-16">
          <AnimatedSection>
            <p className="section-label mb-4">Corporate</p>
            <h1 className="heading-display max-w-4xl">Corporate Event Management in Jordan</h1>
            <p className="body-lg mt-6 max-w-2xl">
              As one of the leading event management companies in Jordan, Maranasi delivers world-class corporate events. Producers of TEDxAmman for 4,000+ guests.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Intro */}
      <section className="section-padding">
        <div className="container-wide max-w-3xl">
          <AnimatedSection>
            <p className="body-lg">
              Maranasi is one of the top event management companies in Jordan, delivering luxury corporate events that combine premium production with strategic brand communication. Based in Amman, in the Hashemite Kingdom of Jordan, our team has produced some of the most high-profile corporate events in the Arab world.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* TEDxAmman Callout */}
      <section className="py-16 bg-card">
        <div className="container-wide text-center">
          <AnimatedSection>
            <p className="section-label mb-4">Case Study</p>
            <h2 className="heading-xl text-primary mb-4">Producers of TEDxAmman</h2>
            <p className="text-lg text-muted-foreground">4,000+ Guests · Jordan's Flagship TEDx Event</p>
          </AnimatedSection>
        </div>
      </section>

      {/* Sub-services */}
      <section className="section-padding">
        <div className="container-wide">
          <AnimatedSection>
            <p className="section-label mb-4">Services</p>
            <h2 className="heading-lg mb-12">What We Deliver</h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-3 gap-6">
            {subServices.map((s, i) => (
              <AnimatedSection key={s.href} delay={i * 100}>
                <Link to={s.href} className="group block bg-card p-8 border-t-2 border-t-primary hover:shadow-gold-glow transition-all duration-700">
                  <h3 className="font-accent text-lg text-primary tracking-wide mb-3">{s.name}</h3>
                  <p className="text-sm text-muted-foreground">{s.desc}</p>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-card">
        <div className="container-wide">
          <AnimatedSection>
            <h2 className="heading-lg mb-12">Our Process</h2>
          </AnimatedSection>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {["Brief", "Concept", "Production", "Execution", "Post-Event Report"].map((step, i) => (
              <AnimatedSection key={step} delay={i * 80}>
                <div className="text-center">
                  <span className="font-display text-4xl text-primary">{String(i + 1).padStart(2, '0')}</span>
                  <p className="text-sm text-foreground mt-2">{step}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding">
        <div className="container-wide max-w-3xl mx-auto">
          <AnimatedSection>
            <h2 className="heading-lg mb-10">Frequently Asked Questions</h2>
          </AnimatedSection>
          <Accordion type="single" collapsible className="space-y-3">
            {corporateFAQs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="border border-border/50 px-6 data-[state=open]:bg-card">
                <AccordionTrigger className="text-left font-display text-lg py-5 hover:no-underline">{faq.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">{faq.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-primary/90 via-primary to-primary/80">
        <div className="container-narrow text-center">
          <AnimatedSection>
            <h2 className="heading-lg text-primary-foreground mb-8">Request a Corporate Event Proposal</h2>
            <Link to="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-background text-foreground text-[13px] font-medium uppercase tracking-[0.15em] hover:bg-background/90 transition-all">
              Get Started
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
}
