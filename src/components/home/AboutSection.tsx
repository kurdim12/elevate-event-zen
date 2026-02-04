import { AnimatedSection } from "@/components/ui/AnimatedSection";

export function AboutSection() {
  return (
    <section className="py-32 md:py-40 lg:py-52 bg-background">
      <div className="container-wide">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-8">
          {/* Left - Statement */}
          <AnimatedSection className="lg:col-span-7 lg:pr-16">
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium leading-[1.2] mb-0">
              We create events that transcend the ordinary—
              <span className="italic text-muted-foreground">where every detail tells your story.</span>
            </h2>
          </AnimatedSection>

          {/* Right - Details */}
          <AnimatedSection delay={200} className="lg:col-span-5 lg:pt-4">
            <div className="space-y-8">
              <p className="text-muted-foreground leading-relaxed">
                For fifteen years, Maranasi has partnered with visionaries 
                across the MENA region to craft experiences that resonate. 
                Based in Amman, operating globally.
              </p>
              
              {/* Refined stats - horizontal, quiet */}
              <div className="flex gap-12 pt-4">
                <div>
                  <span className="block font-serif text-3xl text-foreground">15+</span>
                  <span className="text-xs tracking-[0.15em] text-muted-foreground uppercase mt-1 block">Years</span>
                </div>
                <div>
                  <span className="block font-serif text-3xl text-foreground">500+</span>
                  <span className="text-xs tracking-[0.15em] text-muted-foreground uppercase mt-1 block">Events</span>
                </div>
                <div>
                  <span className="block font-serif text-3xl text-foreground">12</span>
                  <span className="text-xs tracking-[0.15em] text-muted-foreground uppercase mt-1 block">Countries</span>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
