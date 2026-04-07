import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { homepageFAQs } from "@/data/site-data";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const homepageFAQSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": homepageFAQs.map((faq) => ({
    "@type": "Question",
    "name": faq.q,
    "acceptedAnswer": { "@type": "Answer", "text": faq.a },
  })),
};

export const eventPlannerSchema = {
  "@context": "https://schema.org",
  "@type": "EventPlanner",
  "name": "Maranasi",
  "description": "Jordan's premier luxury event planning and production company.",
  "url": "https://maranasi.com",
  "telephone": "+962775240000",
  "email": "gm@maranasi.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Abu Hudayb St",
    "addressLocality": "Amman",
    "addressCountry": "JO",
  },
  "areaServed": ["Jordan", "UAE", "Saudi Arabia", "MENA"],
  "sameAs": [
    "https://www.instagram.com/maranasi.mena",
    "https://jo.linkedin.com/company/maranasi",
    "https://www.youtube.com/@MaranasiForEvents",
    "https://www.facebook.com/people/Maranasi/100095634037516/",
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5.0",
    "reviewCount": "47",
  },
};

export function HomepageFAQ() {
  return (
    <section className="section-padding bg-card">
      <div className="container-wide">
        <div className="max-w-3xl mx-auto">
          <AnimatedSection>
            <p className="section-label mb-4">Common Questions</p>
            <h2 className="heading-lg text-foreground mb-10">
              Everything You Need to Know
            </h2>
          </AnimatedSection>

          <Accordion type="single" collapsible className="space-y-3">
            {homepageFAQs.map((faq, index) => (
              <AnimatedSection key={index} delay={index * 50}>
                <AccordionItem
                  value={`faq-${index}`}
                  className="border border-border/50 px-6 data-[state=open]:bg-background/50"
                >
                  <AccordionTrigger className="text-left font-display text-lg py-5 hover:no-underline text-foreground">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              </AnimatedSection>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
