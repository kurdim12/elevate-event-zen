import { useParams, Navigate, Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { EditorialGallery } from "@/components/services/EditorialGallery";
import { destinations } from "@/data/services";

const destinationHeroMap: Record<string, string> = {
  jordan: "/images/weddings/citadel-pomegranate-1.jpg",
  egypt: "/images/destinations/egypt-pyramids.jpg",
  uae: "/images/corporate/booth-5.jpg",
  thailand: "/images/corporate/retreats-6.jpg",
};

const jordanGallery = [
  { src: "/images/weddings/kempinski-dead-sea-1.jpg", alt: "Luxury wedding at the Dead Sea, Jordan", caption: "Dead Sea — Jordan" },
  { src: "/images/weddings/citadel-pomegranate-2.jpg", alt: "Wedding dinner at Amman Citadel" },
  { src: "/images/corporate/mice-1.jpg", alt: "MICE gala dinner at Amman Citadel" },
  { src: "/images/weddings/henna-night-1.jpg", alt: "Henna night at the Citadel" },
  { src: "/images/corporate/show-1.jpg", alt: "TEDxAmman — largest in MENA" },
  { src: "/images/corporate/gala-1.jpg", alt: "Corporate gala dinner production" },
  { src: "/images/weddings/private-villa-1.jpg", alt: "Private villa wedding in Amman" },
];

const DestinationPage = () => {
  const { destinationSlug } = useParams<{ destinationSlug: string }>();

  const destination = destinations.find(d => d.slug === `destinations-${destinationSlug}`);

  if (!destination) {
    return <Navigate to="/destinations" replace />;
  }

  const heroImage = destinationSlug ? destinationHeroMap[destinationSlug] : "/images/weddings/kempinski-dead-sea-1.jpg";
  const showGallery = destinationSlug === "jordan";

  return (
    <Layout>
      <SEO
        title={destination.metaTitle}
        description={destination.metaDescription}
        canonicalPath={`/destinations/${destinationSlug}`}
      />

      {/* Hero */}
      <section className="relative h-[60vh] min-h-[450px] flex items-end">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt={destination.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/30 to-foreground/20" />
        </div>
        <div className="relative z-10 container-wide pb-16">
          <AnimatedSection>
            {/* Breadcrumb */}
            <nav className="mb-6">
              <ol className="flex items-center gap-2 text-sm text-background/60">
                <li>
                  <Link to="/" className="hover:text-background transition-colors">
                    Home
                  </Link>
                </li>
                <li>/</li>
                <li>
                  <Link to="/destinations" className="hover:text-background transition-colors">
                    Destinations
                  </Link>
                </li>
                <li>/</li>
                <li className="text-background">{destination.name}</li>
              </ol>
            </nav>
            <h1 className="heading-display text-background max-w-3xl">
              {destination.h1}
            </h1>
          </AnimatedSection>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-16">
            <AnimatedSection>
              <p className="body-lg mb-8">
                {destination.content}
              </p>
              <Link to="/contact" className="btn-primary">
                {destination.ctaText}
              </Link>
            </AnimatedSection>
            <AnimatedSection delay={100}>
              <div className="card-luxury">
                <h2 className="heading-sm mb-6">Locations</h2>
                <ul className="space-y-3">
                  {destination.locations.map((location) => (
                    <li key={location} className="flex items-center gap-3 text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {location}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Gallery for Jordan */}
      {showGallery && (
        <EditorialGallery images={jordanGallery} title="Events in Jordan" />
      )}

      {/* Services */}
      <section className="section-padding-sm bg-ivory-dark">
        <div className="container-wide">
          <AnimatedSection>
            <h2 className="heading-lg mb-8 text-center">What We Deliver in {destination.name}</h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <AnimatedSection delay={100}>
              <Link
                to="/corporate-events"
                className="block p-8 bg-background border border-border/50 hover:border-primary/30 hover:shadow-card transition-all duration-500 text-center"
              >
                <h3 className="font-serif text-xl font-medium mb-2">Corporate Events</h3>
                <p className="text-sm text-muted-foreground">
                  Conferences, exhibitions, retreats, gala dinners
                </p>
              </Link>
            </AnimatedSection>
            <AnimatedSection delay={150}>
              <Link
                to="/destination-luxury-weddings"
                className="block p-8 bg-background border border-border/50 hover:border-primary/30 hover:shadow-card transition-all duration-500 text-center"
              >
                <h3 className="font-serif text-xl font-medium mb-2">Destination Weddings</h3>
                <p className="text-sm text-muted-foreground">
                  Luxury weddings and marriage proposals
                </p>
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-foreground">
        <div className="container-narrow text-center">
          <AnimatedSection>
            <h2 className="heading-xl text-background mb-6">
              Plan Your Event in
              <br />
              <span className="italic">{destination.name}</span>
            </h2>
            <p className="body-lg text-background/70 mb-10">
              Share your requirements. We'll provide venue options and a clear next step.
            </p>
            <Link to="/contact" className="btn-gold">
              {destination.ctaText}
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default DestinationPage;
