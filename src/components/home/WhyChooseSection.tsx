import { AnimatedSection } from "@/components/ui/AnimatedSection";

export function WhyChooseSection() {
  return (
    <section className="py-28 md:py-36 lg:py-44 bg-background">
      <div className="container-narrow">
        <AnimatedSection>
          <div className="text-center">
            <p className="text-[11px] tracking-[0.22em] text-muted-foreground/40 uppercase mb-10">
              Our approach
            </p>
            
            {/* Single powerful statement */}
            <h2 className="font-serif text-xl md:text-2xl lg:text-[1.75rem] font-normal leading-[1.45] text-foreground mb-14 tracking-[-0.01em]">
              Meticulous planning. Creative excellence. 
              <br className="hidden md:block" />
              <span className="italic text-muted-foreground">Flawless execution.</span>
            </h2>

            {/* Three pillars */}
            <div className="grid md:grid-cols-3 gap-10 md:gap-6 text-left md:text-center pt-10 border-t border-border/30">
              <div className="pt-6">
                <span className="block text-3xl md:text-4xl font-serif text-foreground/15 mb-3 tracking-[-0.02em]">01</span>
                <h3 className="font-serif text-base text-foreground mb-2">Vision</h3>
                <p className="text-[13px] text-muted-foreground/60 leading-[1.6]">
                  We begin by understanding your story, your audience, and your aspirations.
                </p>
              </div>
              <div className="pt-6">
                <span className="block text-3xl md:text-4xl font-serif text-foreground/15 mb-3 tracking-[-0.02em]">02</span>
                <h3 className="font-serif text-base text-foreground mb-2">Craft</h3>
                <p className="text-[13px] text-muted-foreground/60 leading-[1.6]">
                  Every detail is considered—from concept through design to the smallest finishing touch.
                </p>
              </div>
              <div className="pt-6">
                <span className="block text-3xl md:text-4xl font-serif text-foreground/15 mb-3 tracking-[-0.02em]">03</span>
                <h3 className="font-serif text-base text-foreground mb-2">Delivery</h3>
                <p className="text-[13px] text-muted-foreground/60 leading-[1.6]">
                  On the day, everything unfolds seamlessly—so you can be fully present.
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
