import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const weddingFAQs = [
  { q: "Can Maranasi plan a destination wedding at Petra?", a: "Yes. We have extensive experience planning destination weddings at Petra — one of the world's most iconic UNESCO World Heritage sites. We manage all permits, logistics, and cinematic production." },
  { q: "How far in advance should I book a wedding planner in Jordan?", a: "We recommend 12–18 months for peak season (April–June, September–November), and 9–12 months minimum for off-season." },
  { q: "Does Maranasi provide cinematic wedding films?", a: "Yes. Our in-house film directors produce cinematic wedding films that capture every moment with editorial precision." },
  { q: "What is the cost of a luxury wedding in Jordan?", a: "Pricing depends on venue, guest count, and production scope. Contact us for a bespoke proposal tailored to your vision." },
  { q: "Does Maranasi handle multi-day wedding celebrations?", a: "Yes. We specialize in multi-day celebrations including henna nights, welcome dinners, the ceremony, and farewell brunches." },
];

const faqSchema = {
  "@context": "https://schema.org", "@type": "FAQPage",
  "mainEntity": weddingFAQs.map(f => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } }))
};

const serviceSchema = {
  "@context": "https://schema.org", "@type": "Service",
  "name": "Luxury Wedding Planning in Jordan",
  "provider": { "@type": "LocalBusiness", "name": "Maranasi", "url": "https://maranasi.com" },
  "serviceType": "Wedding Planning", "areaServed": "Jordan",
  "url": "https://maranasi.com/weddings"
};

const weddingDestinations = [
  { name: "Weddings at Petra", href: "/weddings/petra", desc: "Say your vows in the rose-red ancient city — a UNESCO World Heritage site." },
  { name: "Weddings at Wadi Rum", href: "/weddings/wadi-rum", desc: "Desert ceremonies under infinite skies in Mars-like landscapes." },
  { name: "Weddings at the Dead Sea", href: "/weddings/dead-sea", desc: "Luxury resort weddings at the lowest point on earth." },
  { name: "Weddings in Amman", href: "/weddings/amman", desc: "Rooftop celebrations and five-star venue weddings in Jordan's capital." },
];

export default function WeddingsMain() {
  return (
    <Layout>
      <SEO
        title="Luxury Wedding Planner Jordan | Weddings at Petra, Wadi Rum & Amman | Maranasi"
        description="Plan your dream wedding in Jordan with Maranasi — luxury destination weddings at Petra, Wadi Rum, the Dead Sea & Amman. Jordan's most awarded wedding planning team."
        keywords="luxury wedding planner Jordan, destination wedding Jordan, wedding planner Amman, wedding at Petra, Wadi Rum wedding, Dead Sea wedding, luxury wedding Jordan"
        canonicalPath="/weddings"
        breadcrumbs={[
          { name: "Home", url: "https://maranasi.com" },
          { name: "Weddings", url: "https://maranasi.com/weddings" },
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
            <p className="section-label mb-4">Weddings</p>
            <h1 className="heading-display max-w-4xl">Luxury Wedding Planning in Jordan</h1>
            <p className="body-lg mt-6 max-w-2xl">
              Destination weddings at Petra, Wadi Rum, the Dead Sea, and Amman's most prestigious venues. Full-service planning with cinematic production.
            </p>
            <div className="flex gap-4 mt-8">
              <Link to="/contact" className="btn-primary">Begin Planning</Link>
              <Link to="/portfolio" className="btn-outline">See Our Weddings</Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Intro */}
      <section className="section-padding">
        <div className="container-wide max-w-3xl">
          <AnimatedSection>
            <p className="body-lg leading-relaxed">
              Maranasi is Jordan's most sought-after luxury wedding planner. From the ancient rose-red city of Petra to the desert majesty of Wadi Rum, we design and produce destination weddings that become the stories families tell for generations. Every wedding we produce reflects our cinematic approach — where beauty meets operational precision, and every moment is directed with intention.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Destination Cards */}
      <section className="section-padding bg-card pt-0">
        <div className="container-wide">
          <AnimatedSection>
            <p className="section-label mb-4">Destinations</p>
            <h2 className="heading-lg mb-12">Where Will Your Story Begin?</h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 gap-6">
            {weddingDestinations.map((dest, i) => (
              <AnimatedSection key={dest.href} delay={i * 100}>
                <Link to={dest.href} className="group block bg-background p-8 border-t-2 border-t-primary hover:shadow-gold-glow transition-all duration-700">
                  <h3 className="font-accent text-lg text-primary tracking-wide mb-3 group-hover:text-gold-light transition-colors">{dest.name}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{dest.desc}</p>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Why Maranasi */}
      <section className="section-padding">
        <div className="container-wide">
          <AnimatedSection>
            <h2 className="heading-lg mb-10">Why Choose Maranasi for Your Jordan Wedding</h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Cinematic Production", desc: "In-house film directors and editorial photographers capture your day with the artistry of a feature film." },
              { title: "Iconic Venues", desc: "Access to Jordan's most extraordinary locations — from UNESCO World Heritage sites to luxury desert camps." },
              { title: "Full-Service Planning", desc: "From concept to execution, we manage every detail so you can be fully present in the moment." },
            ].map((point, i) => (
              <AnimatedSection key={i} delay={i * 100}>
                <div className="flex gap-4">
                  <div className="w-8 h-px bg-primary mt-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-display text-xl mb-3">{point.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{point.desc}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-card">
        <div className="container-wide max-w-3xl mx-auto">
          <AnimatedSection>
            <p className="section-label mb-4">Common Questions</p>
            <h2 className="heading-lg mb-10">Wedding Planning FAQs</h2>
          </AnimatedSection>
          <Accordion type="single" collapsible className="space-y-3">
            {weddingFAQs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="border border-border/50 px-6 data-[state=open]:bg-background/50">
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
            <h2 className="heading-lg text-primary-foreground mb-8">Begin Planning Your Jordan Wedding</h2>
            <Link to="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-background text-foreground text-[13px] font-medium uppercase tracking-[0.15em] hover:bg-background/90 transition-all">
              Request a Wedding Consultation
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
}
