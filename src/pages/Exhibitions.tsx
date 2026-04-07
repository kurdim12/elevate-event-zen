import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqData = [
  { q: "What is a brand activation event in Jordan?", a: "A brand activation is an immersive, experiential marketing event designed to bring a brand to life. Maranasi creates cinematic brand experiences at iconic locations across Jordan." },
  { q: "Does Maranasi handle product launch events in Amman?", a: "Yes. Maranasi produces luxury product launch events in Amman, Jordan — combining cinematic staging, live AV, and immersive brand storytelling." },
  { q: "Can Maranasi produce a brand activation at Petra?", a: "Yes. We have produced cinematic brand activations at Petra, one of the Seven Wonders of the World. We handle all permits, logistics, staging, and production." },
  { q: "What makes Maranasi different?", a: "Maranasi brings the lens of a film director to every brand activation. We deliver cinematic brand experiences with award-winning production and art direction." },
  { q: "How do I book Maranasi?", a: "Contact us via our website, WhatsApp at +962 77 524 0000, or email gm@maranasi.com. We respond within 24 hours." },
];

const faqSchema = {
  "@context": "https://schema.org", "@type": "FAQPage",
  "mainEntity": faqData.map(f => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } }))
};

export default function Exhibitions() {
  return (
    <Layout>
      <SEO
        title="Brand Activation & Experiential Marketing Jordan | Maranasi"
        description="Maranasi delivers luxury brand activations and experiential marketing in Jordan. Cinematic brand experiences at Petra, the Amman Citadel, and iconic venues across Amman."
        keywords="brand activation Jordan, experiential marketing Jordan, product launch event Jordan, brand experience Jordan, exhibition Jordan"
        canonicalPath="/exhibitions"
        breadcrumbs={[
          { name: "Home", url: "https://maranasi.com" },
          { name: "Exhibitions", url: "https://maranasi.com/exhibitions" },
        ]}
        jsonLd={[faqSchema]}
      />

      <section className="relative min-h-[70vh] flex items-end">
        <div className="absolute inset-0 bg-gradient-to-br from-card via-background to-card">
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
        </div>
        <div className="relative z-10 container-wide pb-16">
          <AnimatedSection>
            <p className="section-label mb-4">Brand Activation</p>
            <h1 className="heading-display max-w-4xl">Exhibitions & Brand Activations in Jordan</h1>
            <p className="body-lg mt-6 max-w-2xl">Cinematic brand experiences at Jordan's most iconic locations.</p>
          </AnimatedSection>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-wide max-w-3xl">
          <AnimatedSection>
            <p className="body-lg">
              Maranasi creates luxury brand activations and immersive experiential marketing events across Jordan. We have produced cinematic brand experiences at Petra and the Amman Citadel — iconic locations in the Hashemite Kingdom of Jordan.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="section-padding bg-card">
        <div className="container-wide max-w-3xl mx-auto">
          <AnimatedSection>
            <h2 className="heading-lg mb-10">Frequently Asked Questions</h2>
          </AnimatedSection>
          <Accordion type="single" collapsible className="space-y-3">
            {faqData.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="border border-border/50 px-6 data-[state=open]:bg-background/50">
                <AccordionTrigger className="text-left font-display text-lg py-5 hover:no-underline">{faq.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">{faq.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-primary/90 via-primary to-primary/80">
        <div className="container-narrow text-center">
          <AnimatedSection>
            <h2 className="heading-lg text-primary-foreground mb-8">Activate Your Brand in Jordan</h2>
            <Link to="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-background text-foreground text-[13px] font-medium uppercase tracking-[0.15em] hover:bg-background/90 transition-all">
              Request a Proposal
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
}
