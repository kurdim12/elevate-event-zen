import { Link } from "react-router-dom";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { services } from "@/data/site-data";
import { ArrowRight } from "lucide-react";

export function ServicesGrid() {
  return (
    <section className="section-padding">
      <div className="container-wide">
        <AnimatedSection>
          <p className="section-label mb-4">What We Do</p>
          <h2 className="heading-xl text-foreground mb-16">
            Events That Become Legend
          </h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <AnimatedSection key={service.id} delay={index * 100}>
              <Link
                to={service.slug}
                className="group block bg-card p-8 md:p-10 border-t-2 border-t-primary hover:shadow-gold-glow transition-all duration-700"
              >
                <span className="text-3xl mb-4 block">{service.icon}</span>
                <h3 className="font-accent text-lg tracking-wide text-foreground mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>
                <span className="inline-flex items-center gap-2 text-primary text-xs tracking-[0.15em] uppercase group-hover:gap-3 transition-all duration-300">
                  Learn More <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
