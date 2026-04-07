import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { testimonials } from "@/data/site-data";
import { Star } from "lucide-react";

export function TestimonialsSection() {
  return (
    <section className="section-padding">
      <div className="container-wide">
        <AnimatedSection>
          <p className="section-label mb-4">Client Voices</p>
          <h2 className="heading-xl text-foreground mb-16 max-w-2xl">
            Trusted by Jordan's Most Discerning Clients
          </h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <AnimatedSection key={index} delay={index * 150}>
              <div className="bg-card p-8 md:p-10 border-l-2 border-l-primary">
                <span className="text-5xl text-primary/30 font-display leading-none block mb-4">
                  "
                </span>
                <p className="text-foreground/80 text-lg leading-relaxed mb-6 italic font-display">
                  {testimonial.quote}
                </p>
                <div className="flex items-center gap-1 mb-3">
                  {Array.from({ length: testimonial.stars }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground tracking-wide">
                  — {testimonial.name}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
