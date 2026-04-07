import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const galaDinnerFAQs = [
  { q: "How do I plan a gala dinner in Jordan?", a: "Planning a gala dinner in Jordan involves selecting a luxury venue in Amman, defining your event concept and guest count, coordinating catering, AV, staging, and décor. Maranasi handles all of this end-to-end — contact us to start planning your gala dinner in Jordan today." },
  { q: "What does a luxury gala dinner cost in Amman?", a: "The cost depends on guest count, venue, catering, and production scope. Maranasi offers bespoke proposals — contact us for a custom quote." },
  { q: "Can Maranasi organise a charity gala in Jordan?", a: "Yes. Maranasi plans charity galas and fundraising dinners across Jordan, providing full event production, donor engagement strategy, and cinematic documentation." },
  { q: "What venues does Maranasi use for gala dinners in Amman?", a: "We work with Amman's top 5-star venues including Ritz-Carlton Amman, Grand Hyatt Amman, InterContinental Jordan, Four Seasons Amman, and Mövenpick Dead Sea." },
  { q: "How far in advance should I book a gala dinner planner in Jordan?", a: "We recommend 3–6 months before your date. For large-scale events (200+), 6–9 months ensures venue and team availability." },
];

const faqSchema = {
  "@context": "https://schema.org", "@type": "FAQPage",
  "mainEntity": galaDinnerFAQs.map(f => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } }))
};

const serviceSchema = {
  "@context": "https://schema.org", "@type": "Service",
  "name": "Gala Dinner Planning in Jordan",
  "provider": { "@type": "LocalBusiness", "name": "Maranasi", "url": "https://maranasi.com" },
  "serviceType": "Gala Dinner Planning", "areaServed": "Jordan",
  "description": "Luxury gala dinner planning and production in Amman, Jordan.",
  "url": "https://maranasi.com/gala-dinners"
};

const scaleOptions = [
  { name: "Intimate", range: "50–150 guests", desc: "Exclusive fine-dining experiences with bespoke décor and personal attention." },
  { name: "Signature", range: "150–500 guests", desc: "Full-scale productions with cinematic lighting, live entertainment, and custom staging." },
  { name: "Grand Production", range: "500–5,000+ guests", desc: "Arena-scale gala events with stadium AV, multi-stage entertainment, and show-calling." },
];

export default function GalaDinners() {
  return (
    <Layout>
      <SEO
        title="Gala Dinner Planning Jordan & Amman | Luxury Gala Events | Maranasi"
        description="Maranasi produces Jordan's most extraordinary gala dinners — from intimate 50-guest affairs to 5,000-person productions. Cinematic design, world-class catering coordination, Amman & beyond."
        keywords="gala dinner Jordan, gala dinner Amman, gala dinner planner Jordan, charity gala Jordan, award ceremony dinner Amman, corporate gala dinner Jordan"
        canonicalPath="/gala-dinners"
        breadcrumbs={[
          { name: "Home", url: "https://maranasi.com" },
          { name: "Gala Dinners", url: "https://maranasi.com/gala-dinners" },
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
            <p className="section-label mb-4">Our Signature</p>
            <h1 className="heading-display max-w-4xl">
              Gala Dinner Planning in Jordan
            </h1>
            <p className="body-lg mt-6 max-w-2xl">
              Custom stage design, cinematic lighting, live AV production, bespoke décor, entertainment programming, and catering coordination — delivered with operational precision at Jordan's most iconic venues.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Intro */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-16">
            <AnimatedSection>
              <p className="body-lg">
                Maranasi is Amman's premier gala dinner planning and production company, delivering luxury gala events across Jordan and the MENA region. From charity galas and award ceremony dinners to corporate gala nights, we handle every detail.
              </p>
              <p className="body-md text-muted-foreground mt-6">
                Whether you are planning an intimate gala dinner for 50 guests or a grand award ceremony for 500, Maranasi brings the same standard of cinematic excellence that produced TEDxAmman for over 4,000 guests in Amman, Jordan.
              </p>
            </AnimatedSection>
            <AnimatedSection delay={100}>
              <h2 className="heading-sm mb-6">What's Included</h2>
              <ul className="space-y-3 text-muted-foreground">
                {["Venue sourcing at luxury locations", "Cinematic lighting design", "Custom décor & floral design", "AV production & show-calling", "Catering coordination", "Entertainment booking & programming"].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Scale Options */}
      <section className="section-padding bg-card">
        <div className="container-wide">
          <AnimatedSection>
            <p className="section-label mb-4">Scale Options</p>
            <h2 className="heading-lg mb-12">Choose Your Format</h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-3 gap-6">
            {scaleOptions.map((opt, i) => (
              <AnimatedSection key={opt.name} delay={i * 100}>
                <div className="bg-background p-8 border-t-2 border-t-primary">
                  <h3 className="font-accent text-lg text-primary tracking-wide mb-2">{opt.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{opt.range}</p>
                  <p className="text-sm text-foreground/70 leading-relaxed">{opt.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="section-padding">
        <div className="container-wide space-y-20">
          {[
            { h: "Gala Dinner Planning in Amman, Jordan", p: "Our gala dinner planning service covers everything from initial concept through to the final guest departure. We work with Amman's finest 5-star hotel venues including the Ritz-Carlton Amman, Grand Hyatt Amman, InterContinental Jordan, and Mövenpick Dead Sea." },
            { h: "Charity Gala Events in Jordan", p: "Maranasi plans charity galas and fundraising dinners across Jordan, combining luxury event production with meaningful cause communication. We handle donor engagement, entertainment programming, live auction management, and full cinematic documentation." },
            { h: "Award Ceremony Dinners in Amman", p: "From corporate award nights to industry gala ceremonies, Maranasi delivers award ceremony dinners in Amman that leave a lasting impression." },
            { h: "Corporate Gala Dinners in Jordan", p: "Maranasi organises corporate gala dinners for Jordan's leading companies and international organisations operating in the Hashemite Kingdom." },
          ].map((section, i) => (
            <AnimatedSection key={i}>
              <h2 className="heading-lg mb-6">{section.h}</h2>
              <p className="body-md text-muted-foreground max-w-3xl">{section.p}</p>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-card">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto">
            <AnimatedSection>
              <p className="section-label mb-4">Common Questions</p>
              <h2 className="heading-lg mb-10">Frequently Asked Questions</h2>
            </AnimatedSection>
            <Accordion type="single" collapsible className="space-y-3">
              {galaDinnerFAQs.map((faq, i) => (
                <AccordionItem key={i} value={`faq-${i}`} className="border border-border/50 px-6 data-[state=open]:bg-background/50">
                  <AccordionTrigger className="text-left font-display text-lg py-5 hover:no-underline">{faq.q}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-5">{faq.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-primary/90 via-primary to-primary/80">
        <div className="container-narrow text-center">
          <AnimatedSection>
            <h2 className="heading-lg text-primary-foreground mb-8">Plan Your Gala Dinner</h2>
            <Link to="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-background text-foreground text-[13px] font-medium uppercase tracking-[0.15em] hover:bg-background/90 transition-all">
              Request a Gala Dinner Proposal
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
}
