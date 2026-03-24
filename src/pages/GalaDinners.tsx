import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const galaDinnerFAQs = [
  {
    q: "How do I plan a gala dinner in Jordan?",
    a: "Planning a gala dinner in Jordan involves selecting a luxury venue in Amman, defining your event concept and guest count, coordinating catering, AV, staging, and décor. Maranasi handles all of this end-to-end — contact us to start planning your gala dinner in Jordan today."
  },
  {
    q: "What does a luxury gala dinner cost in Amman?",
    a: "The cost of a luxury gala dinner in Amman, Jordan depends on guest count, venue, catering, and production scope. Maranasi offers bespoke proposals — contact us for a custom quote tailored to your event."
  },
  {
    q: "Can Maranasi organise a charity gala in Jordan?",
    a: "Yes. Maranasi plans charity galas and fundraising dinners across Jordan, providing full event production, donor engagement strategy, and cinematic documentation."
  },
  {
    q: "What venues does Maranasi use for gala dinners in Amman?",
    a: "We work with Amman's top 5-star venues including Ritz-Carlton Amman, Grand Hyatt Amman, InterContinental Jordan, Four Seasons Amman, and Mövenpick Dead Sea."
  },
  {
    q: "How far in advance should I book a gala dinner planner in Jordan?",
    a: "We recommend booking at least 3–6 months before your gala dinner date in Jordan. For large-scale events (200+ guests), 6–9 months advance notice ensures your preferred venue and production team availability."
  },
  {
    q: "Is Maranasi the best gala dinner planner in Amman?",
    a: "Maranasi is Jordan's premier luxury gala dinner planning and production company, with a portfolio that includes TEDxAmman (4,000+ guests) and cinematic activations at Petra and the Amman Citadel."
  }
];

const faqPageSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": galaDinnerFAQs.map(faq => ({
    "@type": "Question",
    "name": faq.q,
    "acceptedAnswer": { "@type": "Answer", "text": faq.a }
  }))
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Gala Dinner Planning in Jordan",
  "provider": { "@type": "LocalBusiness", "name": "Maranasi", "url": "https://maranasi.com" },
  "serviceType": "Gala Dinner Planning",
  "areaServed": "Jordan",
  "description": "Luxury gala dinner planning and production in Amman, Jordan. Charity galas, award ceremony dinners, corporate gala events.",
  "url": "https://maranasi.com/gala-dinners"
};

export default function GalaDinners() {
  return (
    <Layout>
      <SEO
        title="Gala Dinner Planner in Jordan & Amman | Maranasi"
        description="Maranasi plans luxury gala dinners in Amman, Jordan — charity galas, award ceremony dinners, and corporate gala events. Full production: staging, lighting, AV, catering. Zero competitors own this keyword in Jordan."
        keywords="gala dinner Jordan, gala dinner Amman, charity gala Jordan, award ceremony dinner Amman, corporate gala dinner Jordan, luxury dinner event Amman, gala dinner planner Jordan, gala dinner planner Amman"
        canonicalPath="/gala-dinners"
        breadcrumbs={[
          { name: "Home", url: "https://maranasi.com" },
          { name: "Gala Dinners", url: "https://maranasi.com/gala-dinners" }
        ]}
        jsonLd={[faqPageSchema, serviceSchema]}
      />

      {/* Hero */}
      <section className="relative h-[70vh] min-h-[500px] flex items-end">
        <div className="absolute inset-0">
          <img
            src="/images/corporate/gala-1.jpg"
            alt="Luxury gala dinner setup at Amman Citadel — Maranasi Jordan"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/30 to-foreground/20" />
        </div>
        <div className="relative z-10 container-wide pb-16">
          <AnimatedSection>
            <h1 className="heading-display text-background max-w-4xl">
              Gala Dinner Planner in Jordan
            </h1>
            <p className="body-lg text-background/80 mt-6 max-w-2xl">
              Custom stage design, cinematic lighting, live AV production, bespoke décor, 
              entertainment programming, and catering coordination — delivered with 
              operational precision at Jordan's most iconic venues.
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
                  Maranasi is Amman's premier gala dinner planning and production company, delivering luxury gala events across Jordan and the MENA region. From charity galas and award ceremony dinners to corporate gala nights, we handle every detail — custom stage design, cinematic lighting, live AV production, bespoke décor, entertainment, and full catering coordination.
                </p>
                <p className="body-md text-muted-foreground">
                  Whether you are planning an intimate gala dinner for 50 guests or a grand award ceremony for 500, Maranasi brings the same standard of cinematic excellence that produced TEDxAmman for over 4,000 guests in Amman, Jordan.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={100}>
              <div className="space-y-4">
                <h2 className="heading-sm mb-6">What We Deliver</h2>
                <ul className="space-y-3 text-muted-foreground">
                  {[
                    "Custom stage design and scenic production",
                    "Cinematic lighting design and rigging",
                    "Live AV production and show-calling",
                    "Bespoke décor and floral design",
                    "Entertainment programming and talent coordination",
                    "Catering coordination and menu curation",
                    "Guest journey planning and seating flow",
                    "Full on-the-night production management"
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* H2 Sub-sections */}
      <section className="section-padding bg-ivory-dark">
        <div className="container-wide space-y-20">
          <AnimatedSection>
            <h2 className="heading-lg mb-6">Gala Dinner Planning in Amman, Jordan</h2>
            <p className="body-md text-muted-foreground max-w-3xl">
              Our gala dinner planning service covers everything from initial concept through to the final guest departure. We work with Amman's finest 5-star hotel venues including the Ritz-Carlton Amman, Grand Hyatt Amman, InterContinental Jordan, and Mövenpick Dead Sea.
            </p>
          </AnimatedSection>

          <AnimatedSection>
            <h2 className="heading-lg mb-6">Charity Gala Events in Jordan</h2>
            <p className="body-md text-muted-foreground max-w-3xl">
              Maranasi plans charity galas and fundraising dinners across Jordan, combining luxury event production with meaningful cause communication. We handle donor engagement, entertainment programming, live auction management, and full cinematic documentation.
            </p>
          </AnimatedSection>

          <AnimatedSection>
            <h2 className="heading-lg mb-6">Award Ceremony Dinners in Amman</h2>
            <p className="body-md text-muted-foreground max-w-3xl">
              From corporate award nights to industry gala ceremonies, Maranasi delivers award ceremony dinners in Amman that leave a lasting impression. Custom trophy presentations, live entertainment, branded AV production, and bespoke table design — all executed flawlessly.
            </p>
          </AnimatedSection>

          <AnimatedSection>
            <h2 className="heading-lg mb-6">Corporate Gala Dinners in Jordan</h2>
            <p className="body-md text-muted-foreground max-w-3xl">
              Maranasi organises corporate gala dinners for Jordan's leading companies and international organisations operating in the Hashemite Kingdom. Annual dinners, client appreciation evenings, product launch galas — we design each event to reflect your brand and exceed your guests' expectations.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Gallery Strip */}
      <section className="py-4 bg-background">
        <div className="container-wide">
          <AnimatedSection>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {[
                { src: "/images/corporate/gala-2.jpg", alt: "Luxury gala dinner table setting — Maranasi Jordan" },
                { src: "/images/corporate/gala-3.jpg", alt: "Gala dinner stage design — corporate event Amman" },
                { src: "/images/corporate/gala-4.jpg", alt: "Award ceremony dinner production — Maranasi Jordan" },
                { src: "/images/corporate/gala-5.jpg", alt: "Charity gala dinner décor — luxury event Amman" },
              ].map((img, i) => (
                <div key={i} className="overflow-hidden">
                  <div className="aspect-[4/3]">
                    <img
                      loading="lazy"
                      src={img.src}
                      alt={img.alt}
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                    />
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Venue Partners */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <AnimatedSection>
            <h2 className="heading-lg mb-8">Venue Partners</h2>
            <p className="body-md text-muted-foreground mb-12 max-w-2xl">
              We work with Jordan's most prestigious venues to deliver gala dinner experiences 
              that match the occasion.
            </p>
          </AnimatedSection>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {["Ritz-Carlton Amman", "Grand Hyatt Amman", "InterContinental Jordan", "Four Seasons Amman", "Mövenpick Dead Sea"].map((venue, index) => (
              <AnimatedSection key={venue} delay={index * 50}>
                <div className="p-6 bg-ivory-dark text-center">
                  <span className="font-serif text-lg">{venue}</span>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="section-padding bg-ivory-dark">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto">
            <AnimatedSection>
              <h2 className="heading-lg mb-8">Frequently Asked Questions</h2>
            </AnimatedSection>
            <Accordion type="single" collapsible className="space-y-4">
              {galaDinnerFAQs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`faq-${index}`}
                  className="border border-border/50 px-6 data-[state=open]:bg-background"
                >
                  <AccordionTrigger className="text-left font-serif text-lg py-5 hover:no-underline">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-5">
                    {faq.a}
                  </AccordionContent>
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
            <h2 className="heading-lg text-background mb-6">Ready to Plan Your Gala Dinner?</h2>
            <p className="text-background/60 mb-10 max-w-xl mx-auto">
              Contact Maranasi to discuss your gala dinner vision. We'll create a tailored 
              proposal for your event in Jordan.
            </p>
            <Link to="/contact" className="btn-gold">
              Request a Gala Dinner Proposal
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
}
