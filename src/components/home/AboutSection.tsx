import { AnimatedSection } from "@/components/ui/AnimatedSection";

export function AboutSection() {
  return (
    <section id="about" className="section-padding bg-background">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left Column - Content */}
          <AnimatedSection>
            <p className="label-uppercase mb-4">About Maranasi</p>
            <h2 className="heading-xl mb-8">
              Where Vision Meets
              <br />
              <span className="italic">Flawless Execution</span>
            </h2>
            <div className="divider-gold mb-8" />
            <div className="space-y-6">
              <p className="body-md text-muted-foreground">
                For over fifteen years, Maranasi has been the trusted partner for 
                discerning clients seeking exceptional event experiences. Based in 
                Amman, Jordan, we operate across the entire MENA region and beyond.
              </p>
              <p className="body-md text-muted-foreground">
                Our approach combines meticulous planning with creative innovation, 
                ensuring every event—from intimate gatherings to large-scale 
                productions—reflects our commitment to excellence and our clients' 
                unique vision.
              </p>
              <p className="body-md text-muted-foreground">
                We don't just plan events. We craft experiences that resonate, 
                inspire, and endure in memory.
              </p>
            </div>
          </AnimatedSection>

          {/* Right Column - Stats */}
          <AnimatedSection delay={200}>
            <div className="grid grid-cols-2 gap-8">
              <div className="card-luxury text-center">
                <span className="block font-serif text-5xl md:text-6xl text-primary mb-2">15+</span>
                <span className="text-sm uppercase tracking-widest text-muted-foreground">Years of Excellence</span>
              </div>
              <div className="card-luxury text-center">
                <span className="block font-serif text-5xl md:text-6xl text-primary mb-2">500+</span>
                <span className="text-sm uppercase tracking-widest text-muted-foreground">Events Delivered</span>
              </div>
              <div className="card-luxury text-center">
                <span className="block font-serif text-5xl md:text-6xl text-primary mb-2">12</span>
                <span className="text-sm uppercase tracking-widest text-muted-foreground">Countries Served</span>
              </div>
              <div className="card-luxury text-center">
                <span className="block font-serif text-5xl md:text-6xl text-primary mb-2">100%</span>
                <span className="text-sm uppercase tracking-widest text-muted-foreground">Client Satisfaction</span>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
