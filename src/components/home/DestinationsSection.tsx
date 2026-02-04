import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Link } from "react-router-dom";
import destinationImage from "@/assets/destination-event.jpg";

const destinations = [
  { name: "Jordan", description: "Petra, Dead Sea, Amman" },
  { name: "UAE", description: "Dubai, Abu Dhabi" },
  { name: "Saudi Arabia", description: "Riyadh, Jeddah, AlUla" },
  { name: "International", description: "Worldwide" },
];

export function DestinationsSection() {
  return (
    <section className="py-32 md:py-40 lg:py-52 bg-foreground text-background overflow-hidden">
      <div className="container-wide">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-8">
          {/* Left - Content */}
          <div className="lg:col-span-5 lg:pr-8">
            <AnimatedSection>
              <p className="text-xs tracking-[0.3em] text-background/40 uppercase mb-8">
                Destinations
              </p>
              
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium leading-[1.15] text-background mb-10">
                Extraordinary events in
                <br />
                <span className="italic text-background/70">remarkable places</span>
              </h2>
              
              <p className="text-background/50 leading-relaxed mb-12 max-w-md">
                From the ancient wonders of Petra to the modern elegance of Dubai, 
                we transform iconic locations into unforgettable venues.
              </p>

              {/* Destination list - minimal */}
              <div className="space-y-4 mb-12">
                {destinations.map((dest) => (
                  <div key={dest.name} className="flex items-baseline justify-between border-b border-background/10 pb-4">
                    <span className="font-serif text-lg text-background">{dest.name}</span>
                    <span className="text-xs text-background/40">{dest.description}</span>
                  </div>
                ))}
              </div>

              <Link 
                to="/destinations" 
                className="inline-flex items-center text-sm tracking-[0.2em] text-background/50 uppercase hover:text-background transition-colors duration-500 group"
              >
                <span className="mr-4">Explore destinations</span>
                <span className="w-8 h-px bg-background/30 group-hover:w-16 group-hover:bg-background transition-all duration-500" />
              </Link>
            </AnimatedSection>
          </div>

          {/* Right - Image */}
          <div className="lg:col-span-7">
            <AnimatedSection delay={200}>
              <div className="relative aspect-[4/5] lg:aspect-auto lg:h-[600px] overflow-hidden">
                <img
                  src={destinationImage}
                  alt="Desert luxury destination"
                  className="w-full h-full object-cover"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
}
