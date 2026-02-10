import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

const destinationsList = [
  {
    name: "Jordan",
    href: "/destinations/jordan",
    image: "/images/weddings/citadel-pomegranate-1.jpg",
    subtitle: "Petra, Dead Sea, Amman Citadel",
  },
  {
    name: "Egypt",
    href: "/destinations/egypt",
    image: "/images/corporate/gala-2.jpg",
    subtitle: "Pyramids of Giza, North Coast, Alexandria",
  },
  {
    name: "United Arab Emirates",
    href: "/destinations/uae",
    image: "/images/corporate/booth-5.jpg",
    subtitle: "Dubai, Abu Dhabi, Sharjah",
  },
  {
    name: "Thailand",
    href: "/destinations/thailand",
    image: "/images/corporate/retreats-6.jpg",
    subtitle: "Bangkok, Pattaya, Phi Phi Islands",
  },
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
            src="/images/weddings/kempinski-dead-sea-1.jpg"
            alt="Event destinations — Dead Sea, Jordan"
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
            <p className="body-lg mb-4">
              Selected for impact, accessibility, and production feasibility. 
              Corporate events, destination weddings, proposals—Jordan, Egypt, 
              UAE, Thailand. Signature locations. Venue options suited for 
              high-value events.
            </p>
            <p className="body-md text-muted-foreground">
              Choose the right place before choosing the format.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Destinations Grid with Photos */}
      <section className="section-padding-sm bg-ivory-dark">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 gap-6">
            {destinationsList.map((destination, index) => (
              <AnimatedSection key={destination.href} delay={index * 100}>
                <Link
                  to={destination.href}
                  className="group block overflow-hidden bg-background border border-border/50 hover:border-primary/30 hover:shadow-card transition-all duration-500"
                >
                  <div className="aspect-[16/9] overflow-hidden">
                    <img
                      loading="lazy"
                      src={destination.image}
                      alt={destination.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h2 className="font-serif text-2xl font-medium group-hover:text-primary transition-colors">
                      {destination.name}
                    </h2>
                    <p className="text-sm text-muted-foreground mt-1">{destination.subtitle}</p>
                  </div>
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
