import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const galaDinnerFAQs = [
  {
    q: "How do I plan a gala dinner in Jordan?",
    a: "Planning a gala dinner in Jordan involves selecting a luxury venue, defining the event concept, coordinating catering, AV, and décor, and managing guest logistics. Maranasi handles all of this end-to-end, from initial concept through to on-the-night production."
  },
  {
    q: "What does a luxury gala dinner cost in Amman?",
    a: "The cost of a luxury gala dinner in Amman varies based on guest count, venue, catering, and production requirements. Contact Maranasi for a tailored proposal."
  },
  {
    q: "Can Maranasi organise a charity gala event in Jordan?",
    a: "Yes. Maranasi has extensive experience planning charity galas in Jordan, including full fundraising dinner production, live entertainment, and cinematic documentation of the event."
  },
  {
    q: "What venues are best for a gala dinner in Amman?",
    a: "Maranasi works with Amman's top 5-star venues including the Ritz-Carlton Amman, Grand Hyatt Amman, InterContinental Jordan, and Mövenpick Dead Sea for luxury gala dinners."
  },
  {
    q: "How far in advance should I book a gala dinner planner in Jordan?",
    a: "We recommend booking at least 3–6 months in advance for a luxury gala dinner in Jordan to secure your preferred venue, catering, and production team."
  }
];

const faqPageSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": galaDinnerFAQs.map(faq => ({
    "@type": "Question",
    "name": faq.q,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.a
    }
  }))
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Gala Dinner Planning in Jordan",
  "provider": {
    "@type": "LocalBusiness",
    "name": "Maranasi",
    "url": "https://maranasi.com"
  },
  "serviceType": "Gala Dinner Planning",
  "areaServed": "Jordan",
  "description": "Luxury gala dinner planning and production in Jordan — charity galas, award ceremonies, and corporate dinner events in Amman. Full production, staging, and AV.",
  "url": "https://maranasi.com/gala-dinners"
};

const subCategories = [
  {
    title: "Charity Galas",
    description: "Full fundraising dinner production with live entertainment, cinematic documentation, and bespoke décor. From concept to curtain call, we create charity galas that inspire generosity and leave a lasting impression."
  },
  {
    title: "Award Ceremony Dinners",
    description: "Elegant staging, precise timing, and polished production for award ceremonies. Custom stage design, teleprompting, AV management, and show-calling to ensure every award moment is delivered flawlessly."
  },
  {
    title: "Corporate Gala Dinners",
    description: "High-profile corporate hosting with premium guest experience. Seating flow, entertainment programming, lighting design, and full production coordination for boardroom-level events."
  }
];

const venuePartners = [
  "Ritz-Carlton Amman",
  "Grand Hyatt Amman",
  "InterContinental Jordan",
  "Mövenpick Dead Sea"
];

export default function GalaDinners() {
  return (
    <Layout>
      <SEO
        title="Gala Dinner Planning in Jordan & Amman | Maranasi"
        description="Maranasi plans luxury gala dinners in Jordan — charity galas, award ceremonies, and corporate dinner events in Amman. Full production, staging, and AV."
        keywords="gala dinner Jordan, gala dinner Amman, charity gala Jordan, award ceremony dinner Amman, corporate gala dinner Jordan, luxury dinner event Amman, gala dinner planner Jordan"
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
              Gala Dinner Planning in Jordan
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
                  From intimate 50-guest charity galas to 500+ corporate gala dinners, 
                  Maranasi delivers end-to-end gala dinner production in Amman and across 
                  Jordan. We combine custom stage design with cinematic lighting, live AV 
                  production, and bespoke décor to create unforgettable evenings.
                </p>
                <p className="body-md text-muted-foreground">
                  Every detail — from guest arrival flow to entertainment cues — is 
                  planned, rehearsed, and executed with precision. Our production team 
                  manages staging, sound, lighting rigs, and live show-calling so your 
                  gala dinner runs flawlessly.
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

      {/* Sub-categories */}
      <section className="section-padding bg-ivory-dark">
        <div className="container-wide">
          <AnimatedSection>
            <h2 className="heading-lg mb-12">Our Gala Dinner Services</h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-3 gap-8">
            {subCategories.map((cat, index) => (
              <AnimatedSection key={cat.title} delay={index * 100}>
                <div className="p-8 bg-background border border-border/50 h-full">
                  <h3 className="font-serif text-xl font-medium mb-4">{cat.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{cat.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
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
            {venuePartners.map((venue, index) => (
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
