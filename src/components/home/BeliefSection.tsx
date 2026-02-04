import { AnimatedSection } from "@/components/ui/AnimatedSection";

export function BeliefSection() {
  return (
    <section className="py-32 md:py-40 lg:py-52 bg-background">
      <div className="container-narrow">
        <AnimatedSection>
          <div className="text-center">
            <p className="text-xs tracking-[0.3em] text-muted-foreground/50 uppercase mb-12">
              What we believe
            </p>
            
            <blockquote className="font-serif text-2xl md:text-3xl lg:text-4xl font-normal leading-relaxed text-foreground">
              An event is not a checklist.
              <br />
              <span className="italic text-muted-foreground">
                It is a story waiting to be told—
              </span>
              <br />
              <span className="italic text-muted-foreground">
                and the people in it, unforgettable.
              </span>
            </blockquote>

            <div className="w-12 h-px bg-border mx-auto mt-16" />
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
