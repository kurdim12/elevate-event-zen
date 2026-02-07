import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ArrowRight } from "lucide-react";
import destinationImage from "@/assets/destination-event.jpg";

const destinationsList = [
  { name: "Jordan", href: "/destinations/jordan" },
  { name: "Egypt", href: "/destinations/egypt" },
  { name: "United Arab Emirates", href: "/destinations/uae" },
  { name: "Thailand", href: "/destinations/thailand" },
];

const DestinationsMain = () => {
  return (
    <Layout>
      <SEO
        title="Event and Wedding Destinations | MaraNasi"
        description="Explore MaraNasi destinations across Jordan, Egypt, UAE, and Thailand for corporate events, destination weddings, and proposals in iconic locations and premium venues."
        canonicalPath="/destinations"
      />

      {/* Hero */}
      <section className="relative h-[70vh] min-h-[500px] flex items-end">
        <div className="absolute inset-0">
          <img
            src={destinationImage}
            alt="Event destinations"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/30 to-foreground/20" />
        </div>
        <div className="relative z-10 container-wide pb-16">
          <AnimatedSection>
            <h1 className="heading-display text-background max-w-4xl">
              Destinations
            </h1>
          </AnimatedSection>
        </div>
      </section>

      {/* Intro */}
      <section className="section-padding bg-background">
        <div className="container-narrow text-center">
          <AnimatedSection>
            <p className="body-lg">
              MaraNasi operates across destinations selected for impact, accessibility, 
              and production feasibility. We deliver corporate events, destination 
              weddings, and proposals across Jordan, Egypt, the UAE, and Thailand.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Destinations Grid */}
      <section className="section-padding-sm bg-ivory-dark">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 gap-8">
            {destinationsList.map((destination, index) => (
              <AnimatedSection key={destination.href} delay={index * 100}>
                <Link
                  to={destination.href}
                  className="block p-10 bg-background border border-border/50 hover:border-primary/30 hover:shadow-card transition-all duration-500 group"
                >
                  <h2 className="font-serif text-2xl font-medium group-hover:text-primary transition-colors">
                    {destination.name}
                  </h2>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-foreground">
        <div className="container-narrow text-center">
          <AnimatedSection>
            <h2 className="heading-xl text-background mb-6">
              Not Sure Where
              <br />
              <span className="italic">to Begin?</span>
            </h2>
            <p className="body-lg text-background/70 mb-10">
              Tell us your goals, dates, and guest count. We'll recommend 
              the right destination for your event.
            </p>
            <Link to="/contact" className="btn-gold">
              Request a Destination Shortlist
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default DestinationsMain;
