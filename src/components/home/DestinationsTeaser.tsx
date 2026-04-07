import { Link } from "react-router-dom";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { destinations } from "@/data/site-data";

export function DestinationsTeaser() {
  return (
    <section className="section-padding bg-card">
      <div className="container-wide">
        <AnimatedSection>
          <p className="section-label mb-4">Where We Work</p>
          <h2 className="heading-xl text-foreground mb-16">
            From Petra to the Gulf
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {destinations.map((dest, index) => (
            <AnimatedSection key={dest.slug} delay={index * 80}>
              <Link
                to="/destinations"
                className="group block relative overflow-hidden bg-background p-8 md:p-10 text-center hover:bg-secondary/30 transition-all duration-500"
              >
                <span className="font-accent text-lg md:text-xl text-primary tracking-wide">
                  {dest.name}
                </span>
              </Link>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={400}>
          <div className="mt-12 text-center">
            <Link to="/destinations" className="btn-outline">
              Explore All Destinations
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
