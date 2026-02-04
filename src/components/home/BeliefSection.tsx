import { AnimatedSection } from "@/components/ui/AnimatedSection";

export function BeliefSection() {
  return (
    <section className="py-28 md:py-36 lg:py-44 bg-background">
      <div className="container-narrow">
        <AnimatedSection>
          <div className="text-center">
            <p className="text-[11px] tracking-[0.22em] text-muted-foreground/40 uppercase mb-10">
              What we believe
            </p>
            
            <blockquote className="font-serif text-xl md:text-2xl lg:text-3xl font-normal leading-[1.4] text-foreground tracking-[-0.01em]">
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

            <div className="w-8 h-px bg-border/50 mx-auto mt-12" />
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
