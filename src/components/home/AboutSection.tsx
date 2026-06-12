import { Link } from "react-router-dom";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

export function AboutSection() {
  return (
    <section className="py-28 md:py-36 lg:py-44 bg-background">
      <div className="container-wide">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Left - Statement */}
          <AnimatedSection className="lg:col-span-6 lg:pr-8">
            <p className="text-[11px] tracking-[0.22em] text-muted-foreground/80 uppercase mb-6">
              Serious Business & Stunning Events
            </p>
            <h2 className="font-serif text-[1.75rem] md:text-3xl lg:text-4xl font-medium leading-[1.25] tracking-[-0.01em]">
              Precision, creativity, and a deep understanding of
              <span className="italic text-muted-foreground"> what makes moments extraordinary.</span>
            </h2>
            
            <div className="mt-8 space-y-6">
              <p className="text-[15px] text-muted-foreground leading-[1.7]">
                Based in Amman, Jordan — the Hashemite Kingdom of Jordan — Maranasi is one of the leading event management companies in Jordan and the country&apos;s premier luxury event planning and production company. From <Link to="/destination-luxury-weddings" className="text-foreground underline decoration-primary/40 underline-offset-4 hover:decoration-primary transition-colors">destination weddings at Petra</Link> and Wadi Rum to <Link to="/corporate-events" className="text-foreground underline decoration-primary/40 underline-offset-4 hover:decoration-primary transition-colors">corporate events, gala dinners, and brand activations</Link> across the MENA region, we craft extraordinary experiences at every scale.
              </p>
              <p className="text-[15px] text-muted-foreground leading-[1.7]">
                Our work spans world-class conferences and intimate luxury weddings — produced by film directors, architectural visionaries, and master craftsmen creating experiences that transcend expectations. Every project begins with the story you want guests to remember, then moves through design, logistics, and production with the discipline of a film set.
              </p>
              <p className="text-[15px] text-muted-foreground leading-[1.7]">
                We plan and produce events across Jordan&apos;s most iconic settings — the rose-red city of <a href="https://www.visitjordan.com/Wheretogo/Petra.aspx" target="_blank" rel="noopener" className="text-foreground underline decoration-primary/40 underline-offset-4 hover:decoration-primary transition-colors">Petra</a>, the cinematic dunes of <a href="https://www.visitjordan.com/Wheretogo/WadiRum.aspx" target="_blank" rel="noopener" className="text-foreground underline decoration-primary/40 underline-offset-4 hover:decoration-primary transition-colors">Wadi Rum</a>, the mineral shores of the Dead Sea, and the historic terraces of the Amman Citadel. Beyond Jordan, we deliver luxury experiences across the UAE, Saudi Arabia, Qatar, and the wider MENA region.
              </p>
              <p className="text-[15px] text-muted-foreground leading-[1.7]">
                Clients come to Maranasi for restraint, craft, and a calm production team that handles complexity quietly. <Link to="/work" className="text-foreground underline decoration-primary/40 underline-offset-4 hover:decoration-primary transition-colors">See our past events</Link> or <Link to="/contact" className="text-foreground underline decoration-primary/40 underline-offset-4 hover:decoration-primary transition-colors">request a consultation</Link> — every brief receives a considered, bespoke response within twenty-four hours.
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
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                >
                  <source src="/videos/about-section.mp4" type="video/mp4" />
                </video>
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
