import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqData = [
  { q: "Can you have a wedding at Petra, Jordan?", a: "Yes. Maranasi plans and produces luxury destination weddings at Petra, Jordan — one of the New Seven Wonders of the World. We handle all permits, logistics, catering, and production at this UNESCO World Heritage site." },
  { q: "How much does a Petra wedding cost?", a: "The cost of a Petra wedding depends on guest count, ceremony location, catering, and production scope. Maranasi provides bespoke proposals — contact us for a custom quote for your Petra wedding in Jordan." },
  { q: "What is the best time for a wedding at Petra?", a: "Spring (March–May) and autumn (September–November) offer the best weather for a wedding at Petra, Jordan. Temperatures are mild, and the light is perfect for cinematic photography and videography." },
  { q: "Does Maranasi handle Petra wedding permits?", a: "Yes. Maranasi manages all permits and approvals required for weddings at Petra, including coordination with the Petra Development and Tourism Region Authority (PDTRA)." },
  { q: "What ceremony locations are available at Petra?", a: "Popular ceremony locations at Petra include The Treasury (Al-Khazneh), The Great Temple, The Royal Tombs, and the Monastery (Ad-Deir). Maranasi can advise on the best location for your wedding vision." },
];

const faqSchema = {
  "@context": "https://schema.org", "@type": "FAQPage",
  "mainEntity": faqData.map(f => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } }))
};

const serviceSchema = {
  "@context": "https://schema.org", "@type": "Service",
  "name": "Petra Wedding Planning in Jordan",
  "provider": { "@type": "LocalBusiness", "name": "Maranasi", "url": "https://maranasi.com" },
  "serviceType": "Wedding Planning",
  "areaServed": "Jordan",
  "description": "Destination wedding planning at Petra, Jordan. Ceremonies at The Treasury, The Great Temple, and iconic Nabataean sites.",
  "url": "https://maranasi.com/weddings/petra"
};

export default function PetraWedding() {
  return (
    <Layout>
      <SEO
        title="Petra Wedding Planner Jordan | Destination Wedding at Petra | Maranasi"
        description="Plan your destination wedding at Petra, Jordan with Maranasi. Ceremonies at The Treasury, The Great Temple, and iconic Nabataean sites. Full-service wedding planning and cinematic production."
        keywords="Petra wedding, wedding at Petra Jordan, destination wedding Petra, Petra wedding planner, wedding planner Petra Jordan, luxury wedding Petra"
        canonicalPath="/weddings/petra"
        breadcrumbs={[
          { name: "Home", url: "https://maranasi.com" },
          { name: "Weddings", url: "https://maranasi.com/destination-luxury-weddings" },
          { name: "Petra", url: "https://maranasi.com/weddings/petra" }
        ]}
        jsonLd={[faqSchema, serviceSchema]}
      />

      {/* Hero */}
      <section className="relative h-[70vh] min-h-[500px] flex items-end">
        <div className="absolute inset-0">
          <img src="/images/weddings/petra-wedding-hero.jpg" alt="Destination wedding at Petra Jordan — Maranasi luxury wedding planner" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/30 to-foreground/20" />
        </div>
        <div className="relative z-10 container-wide pb-16">
          <AnimatedSection>
            <h1 className="heading-display text-background max-w-4xl">
              Petra Wedding Planning in Jordan
            </h1>
            <p className="body-lg text-background/80 mt-6 max-w-2xl">
              Say "I do" at one of the New Seven Wonders of the World. Luxury destination weddings at Petra, planned and produced by Maranasi.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="max-w-3xl space-y-8">
            <AnimatedSection>
              <p className="body-lg">
                Petra, the ancient rose-red city carved into the sandstone cliffs of southern Jordan, is one of the most breathtaking wedding destinations on earth. As Jordan's leading luxury wedding planner, Maranasi has extensive experience producing destination weddings at this UNESCO World Heritage site in the Hashemite Kingdom of Jordan.
              </p>
              <p className="body-md text-muted-foreground mt-4">
                From intimate elopements at The Treasury to grand celebrations at The Great Temple, Maranasi handles every detail — permits, logistics, catering, décor, entertainment, and cinematic film production. Your Petra wedding will be documented by our award-winning in-house film team.
              </p>
            </AnimatedSection>

            <AnimatedSection>
              <h2 className="heading-lg mb-4">Why Petra for Your Wedding</h2>
              <p className="body-md text-muted-foreground">
                Petra offers an unmatched combination of ancient grandeur and natural beauty. The iconic Treasury façade, illuminated by candlelight at sunset, creates a ceremony backdrop that no other venue in the world can match. Located in the Hashemite Kingdom of Jordan, Petra is easily accessible from Amman (3 hours) and Aqaba (2 hours), with luxury accommodation options nearby.
              </p>
            </AnimatedSection>

            <AnimatedSection>
              <h2 className="heading-lg mb-4">What Maranasi Handles</h2>
              <ul className="space-y-3 text-muted-foreground">
                {["All permits and PDTRA coordination", "Venue selection within the Petra archaeological site", "Luxury catering and menu curation", "Custom décor, floral design, and lighting", "Entertainment and live music", "Cinematic wedding film production", "Guest accommodation and transport logistics", "Multi-day wedding itinerary planning"].map(item => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </AnimatedSection>

            <AnimatedSection>
              <h2 className="heading-lg mb-4">Best Time for a Petra Wedding</h2>
              <p className="body-md text-muted-foreground">
                Spring (March–May) and autumn (September–November) are the ideal seasons for a Petra wedding in Jordan. Temperatures range from 15–28°C, and the golden-hour light at Petra creates perfect conditions for cinematic photography and videography. Summer (June–August) is possible but very hot; winter offers dramatic light but cooler temperatures.
              </p>
            </AnimatedSection>

            <AnimatedSection>
              <p className="body-md text-muted-foreground">
                <Link to="/destination-luxury-weddings" className="text-primary hover:underline">← Back to Luxury Wedding Planning in Jordan</Link>
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-ivory-dark">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto">
            <AnimatedSection><h2 className="heading-lg mb-8">Frequently Asked Questions</h2></AnimatedSection>
            <Accordion type="single" collapsible className="space-y-4">
              {faqData.map((faq, i) => (
                <AccordionItem key={i} value={`faq-${i}`} className="border border-border/50 px-6 data-[state=open]:bg-background">
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
            <h2 className="heading-lg text-background mb-6">Plan Your Petra Wedding</h2>
            <p className="text-background/60 mb-10 max-w-xl mx-auto">
              Contact Maranasi to start planning your destination wedding at Petra, Jordan. We'll create a bespoke proposal for your dream wedding.
            </p>
            <Link to="/contact" className="btn-gold">Plan Your Petra Wedding</Link>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
}
