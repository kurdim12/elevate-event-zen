import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { stats } from "@/data/site-data";

export function WhyMaranasi() {
  const differentiators = [
    "Internationally acclaimed in-house film directors",
    "Award-winning architects & art directors",
    "Strategic vendor network across MENA",
  ];

  return (
    <section className="section-padding bg-background">
      <div className="container-wide">
        <AnimatedSection>
          <p className="section-label mb-4">The Maranasi Difference</p>
          <h2 className="heading-xl text-primary mb-16 max-w-3xl">
            We Don't Plan Events. We Direct Experiences.
          </h2>
        </AnimatedSection>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 mb-20">
          {stats.map((stat, index) => (
            <AnimatedSection key={stat.label} delay={index * 100}>
              <div className="text-center md:text-left">
                <span className="font-display text-4xl md:text-5xl lg:text-6xl font-medium text-foreground">
                  {stat.value}
                </span>
                <p className="text-sm text-muted-foreground mt-2 tracking-wide">
                  {stat.label}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Differentiators */}
        <AnimatedSection delay={300}>
          <div className="space-y-4">
            {differentiators.map((point) => (
              <div key={point} className="flex items-center gap-4">
                <div className="w-8 h-px bg-primary" />
                <p className="text-foreground/80 text-lg">{point}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
