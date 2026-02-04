import { AnimatedSection } from "@/components/ui/AnimatedSection";

export function WhyChooseSection() {
  return (
    <section className="py-32 md:py-40 lg:py-52 bg-background">
      <div className="container-narrow">
        <AnimatedSection>
          <div className="text-center">
            <p className="text-xs tracking-[0.3em] text-muted-foreground/60 uppercase mb-12">
              Our approach
            </p>
            
            {/* Single powerful statement */}
            <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-normal leading-relaxed text-foreground mb-16">
              Meticulous planning. Creative excellence. 
              <br className="hidden md:block" />
              <span className="italic text-muted-foreground">Flawless execution.</span>
            </h2>

            {/* Three pillars - quiet, confident */}
            <div className="grid md:grid-cols-3 gap-12 md:gap-8 text-left md:text-center pt-8 border-t border-border/30">
              <div className="pt-8">
                <span className="block text-4xl md:text-5xl font-serif text-foreground/20 mb-4">01</span>
                <h3 className="font-serif text-lg text-foreground mb-3">Vision</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  We begin by understanding your story, your audience, and your aspirations.
                </p>
              </div>
              <div className="pt-8">
                <span className="block text-4xl md:text-5xl font-serif text-foreground/20 mb-4">02</span>
                <h3 className="font-serif text-lg text-foreground mb-3">Craft</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Every detail is considered—from concept through design to the smallest finishing touch.
                </p>
              </div>
              <div className="pt-8">
                <span className="block text-4xl md:text-5xl font-serif text-foreground/20 mb-4">03</span>
                <h3 className="font-serif text-lg text-foreground mb-3">Delivery</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
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
