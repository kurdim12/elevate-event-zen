import { Link } from "react-router-dom";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const homepageFAQs = [
  {
    q: "What services does Maranasi offer?",
    a: "Maranasi offers luxury event planning and production across four pillars: destination weddings, corporate events and conferences, gala dinners, and brand activations. Each engagement covers concept, design, logistics, and on-the-night production — delivered end-to-end by our in-house team in Amman, Jordan."
  },
  {
    q: "Do you plan destination weddings in Petra or the Dead Sea?",
    a: "Yes. Destination weddings are a core part of our work. We produce ceremonies and celebrations at Petra, Wadi Rum, the Dead Sea, and other iconic settings across Jordan, handling venue access, guest logistics, and full production for couples travelling from across the region and beyond."
  },
  {
    q: "How far in advance should I book an event planner in Jordan?",
    a: "The earlier the better — especially for peak wedding season and large corporate programmes. Securing iconic venues, hotel allotments, and key suppliers takes time, and an earlier start gives us room for considered design rather than rushed execution. We are happy to discuss timelines on a first call."
  },
  {
    q: "Do you organize corporate events and brand activations?",
    a: "Yes. We design and produce conferences, gala dinners, MICE programmes, exhibitions, 360 campaign activations, and immersive brand experiences for regional and international clients. Our team has produced TEDxAmman alongside work for global brands across the MENA region."
  },
  {
    q: "Which regions do you serve?",
    a: "Maranasi is based in Amman, Jordan, and serves clients across Jordan and the wider MENA region, including the UAE, Saudi Arabia, and Qatar. Destination work outside the region is considered on a case-by-case basis."
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
  "telephone": "+962796565971",
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
  "areaServed": ["Jordan", "UAE", "Saudi Arabia", "Qatar", "MENA"],
  "hasMap": "https://maps.google.com/?q=Maranasi+Abu+Hudayb+Street+Amman+Jordan",
  "sameAs": [
    "https://www.instagram.com/maranasi.mena",
    "https://www.facebook.com/people/MaraNasi/100095634037516/",
    "https://www.youtube.com/@MaranasiForEvents",
    "https://jo.linkedin.com/company/maranasi",
    "https://www.sortlist.com/agency/maranasi"
  ]
};

export function HomeFAQSection() {
  return (
    <section className="section-padding bg-ivory-dark">
      <div className="container-wide">
        <div className="max-w-3xl mx-auto">
          <AnimatedSection>
            <p className="text-[11px] tracking-[0.22em] text-muted-foreground/80 uppercase mb-6">
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
