import { AnimatedSection } from "@/components/ui/AnimatedSection";
import teamPhoto from "@/assets/henna-night-stage.jpg";

export function AboutSection() {
  return (
    <section className="py-28 md:py-36 lg:py-44 bg-background">
      <div className="container-wide">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Left - Statement */}
          <AnimatedSection className="lg:col-span-6 lg:pr-8">
            <p className="text-[11px] tracking-[0.22em] text-muted-foreground/60 uppercase mb-6">
              Serious Business & Stunning Events
            </p>
            <h2 className="font-serif text-[1.75rem] md:text-3xl lg:text-4xl font-medium leading-[1.25] tracking-[-0.01em]">
              Crafting unforgettable experiences with precision, creativity, and a deep understanding of
              <span className="italic text-muted-foreground"> what makes moments truly extraordinary.</span>
            </h2>
            
            <div className="mt-8 space-y-6">
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

          {/* Right - Team Photo */}
          <AnimatedSection delay={150} className="lg:col-span-6">
            <div className="relative group overflow-hidden">
              <div className="aspect-[4/5] lg:aspect-[3/4] overflow-hidden">
                <img
                  src={teamPhoto}
                  alt="MaraNasi luxury event production at the Amman Citadel"
                  className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                />
              </div>
              {/* Subtle overlay on hover */}
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/5 transition-colors duration-700" />
              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-foreground/60 to-transparent">
                <p className="text-[11px] tracking-[0.18em] text-background/80 uppercase">
                  Our Signature Work
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
