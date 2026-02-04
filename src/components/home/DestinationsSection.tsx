import { Link } from "react-router-dom";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

const destinations = [
  {
    name: "Jordan",
    description: "Our home. From Amman's grandeur to Petra's ancient wonders.",
    featured: true,
  },
  {
    name: "UAE",
    description: "Dubai and Abu Dhabi's world-class venues and luxury settings.",
    featured: false,
  },
  {
    name: "Saudi Arabia",
    description: "Riyadh, Jeddah, and AlUla's transformative landscapes.",
    featured: false,
  },
  {
    name: "International",
    description: "Mediterranean shores to European capitals and beyond.",
    featured: false,
  },
];

export function DestinationsSection() {
  return (
    <section className="section-padding bg-ivory-dark">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Content */}
          <AnimatedSection>
            <p className="label-uppercase mb-4">Destinations</p>
            <h2 className="heading-xl mb-6">
              Events Without
              <br />
              <span className="italic">Borders</span>
            </h2>
            <p className="body-lg mb-10">
              While Jordan remains our heart and headquarters, our expertise 
              extends across the Middle East and internationally. We bring 
              the same excellence wherever your vision takes us.
            </p>
            <Link to="/destinations" className="btn-outline">
              Explore Destinations
            </Link>
          </AnimatedSection>

          {/* Right - Destinations List */}
          <AnimatedSection delay={200}>
            <div className="space-y-6">
              {destinations.map((dest, index) => (
                <div
                  key={dest.name}
                  className={`p-8 border-l-2 transition-all duration-300 hover:bg-background ${
                    dest.featured 
                      ? "border-primary bg-background" 
                      : "border-border hover:border-primary"
                  }`}
                >
                  <h3 className="heading-sm mb-2">{dest.name}</h3>
                  <p className="text-muted-foreground font-light">{dest.description}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
