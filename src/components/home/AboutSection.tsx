import { AnimatedSection } from "@/components/ui/AnimatedSection";

export function AboutSection() {
  return (
    <section className="py-28 md:py-36 lg:py-44 bg-background">
      <div className="container-wide">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-6">
          {/* Left - Statement */}
          <AnimatedSection className="lg:col-span-7 lg:pr-12">
            <p className="text-[11px] tracking-[0.22em] text-muted-foreground/60 uppercase mb-6">
              Serious Business & Stunning Events
            </p>
            <h2 className="font-serif text-[1.75rem] md:text-3xl lg:text-4xl font-medium leading-[1.25] tracking-[-0.01em]">
              Crafting unforgettable experiences with precision, creativity, and a deep understanding of
              <span className="italic text-muted-foreground"> what makes moments truly extraordinary.</span>
            </h2>
          </AnimatedSection>

          {/* Right - Details */}
          <AnimatedSection delay={150} className="lg:col-span-5 lg:pt-2">
            <div className="space-y-6">
              <p className="text-[15px] text-muted-foreground leading-[1.7]">
                MaraNasi Events Management is Jordan's premier event planning and 
                production company. From world-class conferences to intimate luxury 
                weddings, we bring together film directors, architectural visionaries, 
                and master craftsmen to create experiences that transcend expectations.
              </p>
              
              {/* Refined stats */}
              <div className="flex gap-10 pt-2">
                <div>
                  <span className="block font-serif text-2xl text-foreground tracking-[-0.02em]">15+</span>
                  <span className="text-[11px] tracking-[0.12em] text-muted-foreground/70 uppercase mt-1 block">Years</span>
                </div>
                <div>
                  <span className="block font-serif text-2xl text-foreground tracking-[-0.02em]">500+</span>
                  <span className="text-[11px] tracking-[0.12em] text-muted-foreground/70 uppercase mt-1 block">Events</span>
                </div>
                <div>
                  <span className="block font-serif text-2xl text-foreground tracking-[-0.02em]">MENA</span>
                  <span className="text-[11px] tracking-[0.12em] text-muted-foreground/70 uppercase mt-1 block">Region</span>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
