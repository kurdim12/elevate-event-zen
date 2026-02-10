import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { faqs } from "@/data/services";

export default function FAQs() {
  return (
    <Layout>
      <SEO 
        title="FAQs | Event Planning in Jordan | MaraNasi"
        description="FAQs about corporate events, destination weddings, proposals, production, timelines, and planning in Jordan, Amman, and across the Middle East."
        keywords="event planning FAQ Jordan, wedding planner FAQ Amman, corporate events questions Jordan, destination wedding FAQ Jordan, event management FAQ Amman"
        canonicalPath="/faqs"
      />

      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-ivory-dark">
        <div className="container-wide">
          <AnimatedSection>
            <h1 className="heading-display max-w-4xl">
              Frequently Asked Questions
            </h1>
          </AnimatedSection>
        </div>
      </section>

      {/* FAQs */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto">
            {faqs.map((category, catIndex) => (
              <AnimatedSection key={category.category} delay={catIndex * 100}>
                <div className="mb-12">
                  <h2 className="heading-md mb-6">{category.category}</h2>
                  <Accordion type="single" collapsible className="space-y-4">
                    {category.questions.map((faq, index) => (
                      <AccordionItem 
                        key={index} 
                        value={`${category.category}-${index}`}
                        className="border border-border/50 px-6 data-[state=open]:bg-ivory-dark"
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
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-foreground">
        <div className="container-narrow text-center">
          <AnimatedSection>
            <Link to="/contact" className="btn-gold">
              Request a Proposal
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
}
