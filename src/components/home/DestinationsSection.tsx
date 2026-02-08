import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Link } from "react-router-dom";


const destinations = [
  { name: "Jordan", description: "Petra, Dead Sea, Amman" },
  { name: "UAE", description: "Dubai, Abu Dhabi" },
  { name: "Saudi Arabia", description: "Riyadh, Jeddah, AlUla" },
  { name: "International", description: "Worldwide" },
];

export function DestinationsSection() {
  return (
    <section className="py-28 md:py-36 lg:py-44 bg-foreground text-background overflow-hidden">
      <div className="container-wide">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-6">
          {/* Left - Content */}
          <div className="lg:col-span-5 lg:pr-6">
            <AnimatedSection>
              <p className="text-[11px] tracking-[0.22em] text-background/35 uppercase mb-6">
                Destinations
              </p>
              
              <h2 className="font-serif text-[1.75rem] md:text-3xl lg:text-4xl font-medium leading-[1.15] text-background tracking-[-0.01em] mb-8">
                Extraordinary events in
                <br />
                <span className="italic text-background/65">remarkable places</span>
              </h2>
              
              <p className="text-[15px] text-background/45 leading-[1.7] mb-10 max-w-sm">
                From the ancient wonders of Petra to the modern elegance of Dubai, 
                we transform iconic locations into unforgettable venues.
              </p>

              {/* Destination list */}
              <div className="space-y-3 mb-10">
                {destinations.map((dest) => (
                  <div key={dest.name} className="flex items-baseline justify-between border-b border-background/8 pb-3">
                    <span className="font-serif text-base text-background/85">{dest.name}</span>
                    <span className="text-[11px] text-background/35">{dest.description}</span>
                  </div>
                ))}
              </div>

              <Link 
                to="/destinations" 
                className="inline-flex items-center text-[13px] tracking-[0.18em] text-background/40 uppercase hover:text-background/80 transition-colors duration-500 group"
              >
                <span className="mr-3">Explore destinations</span>
                <span className="w-6 h-px bg-background/25 group-hover:w-12 group-hover:bg-background/60 transition-all duration-600" />
              </Link>
            </AnimatedSection>
          </div>

          {/* Right - Images */}
          <div className="lg:col-span-7">
            <AnimatedSection delay={150}>
              <div className="grid grid-cols-2 gap-3">
                <div className="relative overflow-hidden">
                  <div className="aspect-[3/4]">
                    <img
                      src="/images/weddings/kempinski-dead-sea-1.jpg"
                      alt="Luxury wedding setup at sunset by the Dead Sea, Jordan"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="relative overflow-hidden mt-8">
                  <div className="aspect-[3/4]">
                    <img
                      src="/images/corporate/mice-3.jpg"
                      alt="Corporate gala dinner at Amman Citadel, Jordan"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
}
