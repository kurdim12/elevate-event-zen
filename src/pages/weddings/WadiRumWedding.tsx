import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqData = [
  { q: "Can you have a wedding in Wadi Rum, Jordan?", a: "Yes. Maranasi plans luxury destination weddings in Wadi Rum, Jordan's stunning desert landscape. We handle all permits, logistics, luxury camp coordination, and cinematic production." },
  { q: "What does a Wadi Rum wedding look like?", a: "A Wadi Rum wedding typically includes a sunset ceremony against dramatic sandstone formations, followed by a dinner reception under the stars at a luxury desert camp. Maranasi designs every detail to be cinematic and unforgettable." },
  { q: "How many guests can attend a Wadi Rum wedding?", a: "Wadi Rum weddings are ideal for intimate groups of 20–100 guests. Luxury desert camps offer premium glamping accommodation, and Maranasi coordinates all guest transport from Amman or Aqaba." },
  { q: "What is the best season for a Wadi Rum wedding?", a: "Spring (March–May) and autumn (September–November) offer the best conditions — mild temperatures and spectacular desert light. Winter provides dramatic stargazing but cooler nights." },
  { q: "Does Maranasi provide wedding videography at Wadi Rum?", a: "Yes. Maranasi's in-house film production team specialises in cinematic wedding documentation. The dramatic Wadi Rum landscape provides an extraordinary backdrop for award-winning wedding films." },
];

const faqSchema = {
  "@context": "https://schema.org", "@type": "FAQPage",
  "mainEntity": faqData.map(f => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } }))
};

const serviceSchema = {
  "@context": "https://schema.org", "@type": "Service",
  "name": "Wadi Rum Wedding Planning in Jordan",
  "provider": { "@type": "LocalBusiness", "name": "Maranasi", "url": "https://maranasi.com" },
  "serviceType": "Wedding Planning",
  "areaServed": "Jordan",
  "description": "Desert destination wedding planning at Wadi Rum, Jordan. Ceremonies under the stars in Wadi Rum's breathtaking landscape.",
  "url": "https://maranasi.com/weddings/wadi-rum"
};

export default function WadiRumWedding() {
  return (
    <Layout>
      <SEO
        title="Wadi Rum Wedding Planner Jordan | Desert Wedding | Maranasi"
        description="Plan your Wadi Rum wedding in Jordan with Maranasi. Desert ceremonies under the stars in Wadi Rum's breathtaking landscape. Full-service destination wedding planning in Jordan."
        keywords="Wadi Rum wedding, desert wedding Jordan, Wadi Rum wedding planner, destination wedding Wadi Rum, wedding planner Wadi Rum Jordan, luxury desert wedding Jordan"
        canonicalPath="/weddings/wadi-rum"
        breadcrumbs={[
          { name: "Home", url: "https://maranasi.com" },
          { name: "Weddings", url: "https://maranasi.com/destination-luxury-weddings" },
          { name: "Wadi Rum", url: "https://maranasi.com/weddings/wadi-rum" }
        ]}
        jsonLd={[faqSchema, serviceSchema]}
      />

      {/* Hero */}
      <section className="relative h-[70vh] min-h-[500px] flex items-end">
        <div className="absolute inset-0">
          <img src="/images/weddings/wadi-rum-wedding-hero.jpg" alt="Desert wedding at Wadi Rum Jordan — Maranasi luxury wedding planner" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/30 to-foreground/20" />
        </div>
        <div className="relative z-10 container-wide pb-16">
          <AnimatedSection>
            <h1 className="heading-display text-background max-w-4xl">
              Wadi Rum Wedding Planning in Jordan
            </h1>
            <p className="body-lg text-background/80 mt-6 max-w-2xl">
              Exchange vows under a canopy of stars in the Valley of the Moon. Desert destination weddings at Wadi Rum, produced by Maranasi.
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
                Wadi Rum — the Valley of the Moon — is Jordan's most dramatic natural landscape and one of the world's most extraordinary wedding destinations. Located in southern Jordan, this UNESCO World Heritage site offers vast desert panoramas, towering sandstone formations, and skies filled with more stars than anywhere in the Middle East.
              </p>
              <p className="body-md text-muted-foreground mt-4">
                Maranasi is Jordan's leading luxury wedding planner for Wadi Rum destination weddings. We design and produce desert ceremonies and reception events that combine raw natural beauty with refined luxury — sunset ceremonies, starlit dinners, and cinematic documentation by our award-winning film team.
              </p>
            </AnimatedSection>

            <AnimatedSection>
              <h2 className="heading-lg mb-4">Desert Wedding Ceremonies at Wadi Rum</h2>
              <p className="body-md text-muted-foreground">
                Imagine exchanging vows as the desert sun sets behind towering sandstone mountains, painting the landscape in shades of gold and crimson. Wadi Rum offers ceremony settings that no indoor venue can match — vast open spaces, natural rock arches, and dramatic canyon formations. Maranasi designs each ceremony location to maximise the cinematic impact of this extraordinary Jordanian landscape.
              </p>
            </AnimatedSection>

            <AnimatedSection>
              <h2 className="heading-lg mb-4">Luxury Desert Camp Receptions</h2>
              <p className="body-md text-muted-foreground">
                Following your ceremony, guests are transported to a luxury desert camp for an evening of dining under the stars. Maranasi coordinates with premium Wadi Rum camps to create bespoke reception environments — custom table design, ambient lighting, live entertainment, and locally-inspired gourmet cuisine prepared by top Jordanian chefs.
              </p>
            </AnimatedSection>

            <AnimatedSection>
              <h2 className="heading-lg mb-4">What Maranasi Handles</h2>
              <ul className="space-y-3 text-muted-foreground">
                {["All permits and Wadi Rum Protected Area coordination", "Luxury desert camp selection and coordination", "Custom ceremony and reception design", "Catering with locally-sourced gourmet cuisine", "Entertainment and live music under the stars", "Cinematic wedding film production", "Guest transport from Amman, Aqaba, or Petra", "Multi-day desert itinerary planning"].map(item => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {item}
                  </li>
                ))}
              </ul>
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
            <h2 className="heading-lg text-background mb-6">Plan Your Wadi Rum Wedding</h2>
            <p className="text-background/60 mb-10 max-w-xl mx-auto">
              Contact Maranasi to start planning your desert destination wedding at Wadi Rum, Jordan.
            </p>
            <Link to="/contact" className="btn-gold">Plan Your Wadi Rum Wedding</Link>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
}
