import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

interface DestinationRegion {
  region: string;
  destinations: { name: string; href: string; image: string; subtitle: string }[];
}

const destinationRegions: DestinationRegion[] = [
  {
    region: "Middle East",
    destinations: [
      { name: "Jordan", href: "/destinations/jordan", image: "/images/weddings/citadel-pomegranate-1.jpg", subtitle: "Amman, Petra, Wadi Rum, Dead Sea" },
      { name: "Saudi Arabia", href: "/destinations/saudi-arabia", image: "/images/corporate/gala-1.jpg", subtitle: "Riyadh, Jeddah, AlUla" },
      { name: "Egypt", href: "/destinations/egypt", image: "/images/corporate/gala-2.jpg", subtitle: "Pyramids of Giza, North Coast, Alexandria" },
      { name: "United Arab Emirates", href: "/destinations/uae", image: "/images/corporate/booth-5.jpg", subtitle: "Dubai, Abu Dhabi, Sharjah" },
      { name: "Dubai", href: "/destinations/dubai", image: "/images/corporate/dest-corp-1.jpg", subtitle: "Downtown, Palm Jumeirah, Marina" },
      { name: "Doha", href: "/destinations/doha", image: "/images/corporate/conference-1.jpg", subtitle: "West Bay, The Pearl, Lusail" },
    ],
  },
  {
    region: "Asia",
    destinations: [
      { name: "Thailand", href: "/destinations/thailand", image: "/images/corporate/retreats-6.jpg", subtitle: "Bangkok, Pattaya, Phuket, Koh Samui" },
      { name: "India", href: "/destinations/india", image: "/images/corporate/entertainment-1.jpg", subtitle: "Mumbai, Delhi, Udaipur, Goa" },
      { name: "Vietnam", href: "/destinations/vietnam", image: "/images/corporate/retreats-1.jpg", subtitle: "Ho Chi Minh, Hanoi, Da Nang" },
      { name: "China", href: "/destinations/china", image: "/images/corporate/conference-2.jpg", subtitle: "Shanghai, Beijing, Shenzhen" },
    ],
  },
  {
    region: "North America",
    destinations: [
      { name: "United States", href: "/destinations/usa", image: "/images/corporate/dest-corp-2.jpg", subtitle: "NJ, Chicago, Texas, California, Boston, LA" },
      { name: "Canada", href: "/destinations/canada", image: "/images/corporate/dest-corp-3.jpg", subtitle: "Toronto, Ottawa, Vancouver" },
    ],
  },
];

const DestinationsMain = () => {
  return (
    <Layout>
        <SEO
        title="Event and Wedding Destinations Worldwide | MaraNasi"
        description="Explore MaraNasi destinations across the Middle East, Asia, and North America for corporate events, destination weddings, and proposals in iconic locations and premium venues."
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
              Corporate events, destination weddings, proposals—Middle East, Asia, 
              North America. Signature locations. Venue options suited for 
              high-value events.
            </p>
            <p className="body-md text-muted-foreground">
              Choose the right place before choosing the format.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Destinations by Region */}
      {destinationRegions.map((region) => (
        <section key={region.region} className="section-padding-sm bg-ivory-dark border-b border-border/20">
          <div className="container-wide">
            <AnimatedSection>
              <p className="text-[11px] tracking-[0.22em] text-muted-foreground/60 uppercase mb-8">
                {region.region}
              </p>
            </AnimatedSection>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {region.destinations.map((destination, index) => (
                <AnimatedSection key={destination.href} delay={index * 80}>
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
                      <h2 className="font-serif text-xl font-medium group-hover:text-primary transition-colors">
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
      ))}

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
