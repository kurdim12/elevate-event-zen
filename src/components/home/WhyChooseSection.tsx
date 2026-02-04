import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Award, Users, Sparkles, Shield } from "lucide-react";

const reasons = [
  {
    icon: Award,
    title: "15+ Years of Excellence",
    description: "A proven track record of delivering exceptional events across the region.",
  },
  {
    icon: Users,
    title: "Dedicated Teams",
    description: "Expert professionals who understand the nuances of luxury event production.",
  },
  {
    icon: Sparkles,
    title: "Meticulous Detail",
    description: "Every element considered, every moment perfected, every expectation exceeded.",
  },
  {
    icon: Shield,
    title: "Full-Service Execution",
    description: "From concept to completion, we handle every aspect with precision.",
  },
];

export function WhyChooseSection() {
  return (
    <section className="section-padding bg-foreground">
      <div className="container-wide">
        {/* Section Header */}
        <AnimatedSection className="text-center mb-16">
          <p className="label-uppercase mb-4 text-gold-light">Why Maranasi</p>
          <h2 className="heading-xl text-background mb-6">
            The Difference Is in
            <br />
            <span className="italic">The Details</span>
          </h2>
        </AnimatedSection>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <AnimatedSection key={reason.title} delay={index * 100}>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-background/10 mb-6">
                  <reason.icon className="w-7 h-7 text-gold-light" />
                </div>
                <h3 className="font-serif text-xl text-background mb-3">{reason.title}</h3>
                <p className="text-background/60 font-light leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
