import { Link } from "react-router-dom";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const homepageFAQs = [
  {
    q: "What types of events does Maranasi plan in Jordan?",
    a: "Maranasi plans luxury weddings, corporate events, gala dinners, conferences, brand activations, and destination events across Jordan — including at Petra, Wadi Rum, the Dead Sea, and the Amman Citadel."
  },
  {
    q: "Does Maranasi plan destination weddings in Jordan?",
    a: "Yes. Maranasi is Jordan's leading destination wedding planner, organising luxury weddings at Petra, Wadi Rum, the Dead Sea, and iconic venues across Amman, Jordan."
  },
  {
    q: "Can Maranasi plan a gala dinner in Amman, Jordan?",
    a: "Yes. Maranasi specialises in luxury gala dinner planning in Amman, Jordan, including charity galas, award ceremony dinners, and corporate gala events at top venues including the Ritz-Carlton Amman and Grand Hyatt Amman."
  },
  {
    q: "Where is Maranasi based?",
    a: "Maranasi is based at Abu Hudayb Street, Amman, Jordan. We serve clients across Jordan and the wider MENA region including UAE, Saudi Arabia, and Qatar."
  },
  {
    q: "How do I book Maranasi for an event in Jordan?",
    a: "Contact us via our website inquiry form, WhatsApp at +962 79 656 5971, or email gm@maranasi.com. We respond within 24 hours to all event inquiries in Jordan and MENA."
  }
];

export const homepageFAQSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": homepageFAQs.map(faq => ({
    "@type": "Question",
    "name": faq.q,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.a
    }
  }))
};

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Maranasi",
  "description": "Maranasi is one of the leading event management companies in Jordan. A premier luxury event planning and production agency specialising in destination weddings, corporate events, gala dinners, and brand activations in Amman, Jordan and across MENA.",
  "url": "https://maranasi.com",
  "telephone": "+96279656597",
  "email": "gm@maranasi.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Abu Hudayb Street",
    "addressLocality": "Amman",
    "addressCountry": "JO"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 31.9522,
    "longitude": 35.9304
  },
  "openingHours": "Mo-Sa 09:00-18:30",
  "priceRange": "$$$",
  "areaServed": ["Jordan", "UAE", "Saudi Arabia", "Qatar", "Lebanon", "MENA"],
  "hasMap": "https://maps.google.com/?q=Maranasi+Abu+Hudayb+Street+Amman+Jordan",
  "sameAs": [
    "https://www.instagram.com/maranasi",
    "https://www.facebook.com/maranasi",
    "https://www.sortlist.com/agency/maranasi"
  ]
};

export function HomeFAQSection() {
  return (
    <section className="section-padding bg-ivory-dark">
      <div className="container-wide">
        <div className="max-w-3xl mx-auto">
          <AnimatedSection>
            <p className="text-[11px] tracking-[0.22em] text-muted-foreground/60 uppercase mb-6">
              Common Questions
            </p>
            <h2 className="heading-lg mb-8">
              Frequently Asked Questions
            </h2>
          </AnimatedSection>
          <Accordion type="single" collapsible className="space-y-4">
            {homepageFAQs.map((faq, index) => (
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
          <AnimatedSection>
            <div className="mt-10 text-center">
              <Link to="/contact" className="btn-primary">
                Start a Conversation
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
