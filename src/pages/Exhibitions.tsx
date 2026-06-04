import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqData = [
  { q: "What is a brand activation event in Jordan?", a: "A brand activation is an immersive, experiential marketing event designed to bring a brand to life. Maranasi creates cinematic brand experiences at iconic locations across Jordan including Petra and the Amman Citadel." },
  { q: "Does Maranasi handle product launch events in Amman?", a: "Yes. Maranasi produces luxury product launch events in Amman, Jordan — combining cinematic staging, live AV, and immersive brand storytelling for maximum impact." },
  { q: "Can Maranasi produce a brand activation at Petra?", a: "Yes. Maranasi has produced cinematic brand activations at Petra, one of the Seven Wonders of the World. We handle all permits, logistics, staging, and production." },
  { q: "What makes Maranasi different from other event companies in Jordan?", a: "Maranasi brings the lens of a film director to every brand activation. Where others focus on logistics, we deliver cinematic brand experiences with award-winning production, art direction, and documentation." },
  { q: "How do I book Maranasi for a brand activation in Jordan?", a: "Contact us via our website, WhatsApp at +962 79 656 5971, or email gm@maranasi.com. We respond within 24 hours." },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqData.map(f => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } }))
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Brand Activation & Experiential Marketing in Jordan",
  "provider": { "@type": "LocalBusiness", "name": "Maranasi", "url": "https://maranasi.com" },
  "serviceType": "Brand Activation",
  "areaServed": "Jordan",
  "description": "Luxury brand activations and experiential marketing in Jordan. Cinematic brand experiences at Petra, the Amman Citadel, and iconic venues across Amman.",
  "url": "https://maranasi.com/exhibitions"
};

export default function Exhibitions() {
  return (
    <Layout>
      <SEO
        title="Brand Activation & Experiential Marketing in Jordan | Maranasi"
        description="Maranasi delivers luxury brand activations and experiential marketing in Jordan. Cinematic brand experiences at Petra, the Amman Citadel, and iconic venues across Amman. Request a proposal."
        keywords="brand activation Jordan, experiential marketing Jordan, luxury brand activation Amman, product launch event Jordan, brand experience Jordan, cinematic brand activation Petra, exhibition Jordan"
        canonicalPath="/exhibitions"
        breadcrumbs={[
          { name: "Home", url: "https://maranasi.com" },
          { name: "Brand Activation", url: "https://maranasi.com/exhibitions" }
        ]}
        jsonLd={[faqSchema, serviceSchema]}
      />

      {/* Hero */}
      <section className="relative h-[70vh] min-h-[500px] flex items-end">
        <div className="absolute inset-0">
          <img src="/images/corporate/exhibition-1.jpg" alt="Brand activation event at Amman Citadel — Maranasi Jordan" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/30 to-foreground/20" />
        </div>
        <div className="relative z-10 container-wide pb-16">
          <AnimatedSection>
            <h1 className="heading-display text-background max-w-4xl">
              Brand Activation & Experiential Marketing in Jordan
            </h1>
            <p className="body-lg text-background/80 mt-6 max-w-2xl">
              Cinematic brand experiences at Jordan's most iconic locations. From Petra to the Amman Citadel — we transform brands into unforgettable moments.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Intro */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-16">
            <AnimatedSection>
              <div className="space-y-6">
                <p className="body-lg">
                  Maranasi creates luxury brand activations and immersive experiential marketing events across Jordan. We have produced cinematic brand experiences at some of the most iconic locations in the Hashemite Kingdom — including Petra and the Amman Citadel.
                </p>
                <p className="body-md text-muted-foreground">
                  Where other event companies in Jordan focus on logistics, Maranasi brings the lens of a film director to every brand activation. Your product launch, exhibition, or brand experience is treated as a cinematic production from concept through to final documentation.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={100}>
              <h2 className="heading-sm mb-6">What We Deliver</h2>
              <ul className="space-y-3 text-muted-foreground">
                {["Cinematic brand storytelling and art direction", "Immersive experiential environments", "Product launch staging and AV production", "Live entertainment and talent coordination", "Full cinematic documentation and post-production", "Venue sourcing at iconic Jordan locations", "Guest journey design and VIP handling", "Post-event content creation for social and PR"].map(item => (
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

      {/* H2 Sections */}
      <section className="section-padding bg-ivory-dark">
        <div className="container-wide space-y-20">
          <AnimatedSection>
            <h2 className="heading-lg mb-6">Brand Activation in Jordan</h2>
            <p className="body-md text-muted-foreground max-w-3xl">
              Jordan offers an unmatched backdrop for luxury brand activations — from the ancient rose-red city of Petra to the futuristic skyline of Amman. Maranasi leverages these iconic settings to create brand moments that generate global media attention and lasting consumer impact.
            </p>
          </AnimatedSection>

          <AnimatedSection>
            <h2 className="heading-lg mb-6">Experiential Marketing in Jordan</h2>
            <p className="body-md text-muted-foreground max-w-3xl">
              Experiential marketing goes beyond traditional advertising — it creates memorable, immersive interactions between brands and their audiences. Maranasi designs and produces experiential marketing campaigns across Amman and Jordan that transform passive audiences into active brand advocates.
            </p>
          </AnimatedSection>

          <AnimatedSection>
            <h2 className="heading-lg mb-6">Petra Brand Activation — Case Study</h2>
            <p className="body-md text-muted-foreground max-w-3xl">
              Maranasi produced a cinematic brand activation at Petra, one of the New Seven Wonders of the World. The production combined live performance, architectural lighting, and cinematic documentation at this UNESCO World Heritage site in Jordan — creating a brand experience that generated international media coverage.
            </p>
          </AnimatedSection>

          <AnimatedSection>
            <h2 className="heading-lg mb-6">Amman Citadel Brand Activation — Case Study</h2>
            <p className="body-md text-muted-foreground max-w-3xl">
              The Amman Citadel, overlooking the capital of the Hashemite Kingdom of Jordan, served as the backdrop for a luxury brand activation produced by Maranasi. The event combined ancient heritage with modern brand storytelling — a signature Maranasi approach that no other event company in Jordan can deliver.
            </p>
          </AnimatedSection>

          <AnimatedSection>
            <h2 className="heading-lg mb-6">Product Launch Events in Amman</h2>
            <p className="body-md text-muted-foreground max-w-3xl">
              Maranasi produces premium product launch events in Amman, Jordan. From automotive reveals to luxury fashion launches and tech product unveilings — we combine staging, live AV, and cinematic documentation to maximise your brand's impact in the Jordanian and MENA markets.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto">
            <AnimatedSection>
              <h2 className="heading-lg mb-8">Frequently Asked Questions</h2>
            </AnimatedSection>
            <Accordion type="single" collapsible className="space-y-4">
              {faqData.map((faq, i) => (
                <AccordionItem key={i} value={`faq-${i}`} className="border border-border/50 px-6 data-[state=open]:bg-ivory-dark">
                  <AccordionTrigger className="text-left font-serif text-lg py-5 hover:no-underline">{faq.q}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-5">{faq.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-foreground">
        <div className="container-narrow text-center">
          <AnimatedSection>
            <h2 className="heading-lg text-background mb-6">Activate Your Brand in Jordan</h2>
            <p className="text-background/60 mb-10 max-w-xl mx-auto">
              Contact Maranasi to discuss your brand activation vision. We'll create a cinematic experience that sets your brand apart in Jordan and across MENA.
            </p>
            <Link to="/contact" className="btn-gold">
              Request a Brand Activation Proposal
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
}
