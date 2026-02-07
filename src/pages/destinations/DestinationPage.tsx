import { useParams, Navigate, Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { destinations } from "@/data/services";
import destinationImage from "@/assets/destination-event.jpg";
import heroImage from "@/assets/hero-event.jpg";

const DestinationPage = () => {
  const { destinationSlug } = useParams<{ destinationSlug: string }>();
  
  const destination = destinations.find(d => d.slug === `destinations-${destinationSlug}`);
  
  if (!destination) {
    return <Navigate to="/destinations" replace />;
  }

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
            src={destinationSlug === "jordan" ? destinationImage : heroImage}
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
                  Conferences, exhibitions, retreats, and gala dinners
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
              Share your requirements and we'll provide venue options and a clear next step.
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
