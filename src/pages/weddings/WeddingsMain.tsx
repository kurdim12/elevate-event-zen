import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { CinematicVideoSection } from "@/components/ui/CinematicVideoSection";

const weddingServices = [
  { name: "Luxury Wedding Design and Planning", href: "/destination-luxury-weddings/luxury-wedding-design-and-planning" },
  { name: "Destination Luxury Weddings", href: "/destination-luxury-weddings/destination-luxury-weddings-service", videoId: "1-bWe1RN6Ys" },
  { name: "Destination Marriage Proposals", href: "/destination-luxury-weddings/destination-marriage-proposals" },
];

const galleryStrip = [
  { src: "/images/weddings/kempinski-dead-sea-3.jpg", alt: "Wedding ceremony at Dead Sea" },
  { src: "/images/weddings/citadel-pomegranate-3.jpg", alt: "Wedding at Amman Citadel" },
  { src: "/images/weddings/henna-night-2.jpg", alt: "Henna night celebration" },
  { src: "/images/weddings/kempinski-dead-sea-4.jpg", alt: "Evening reception at Dead Sea" },
];

const WeddingsMain = () => {
  return (
    <Layout>
      <SEO
        title="Destination Luxury Weddings in Jordan | Amman | MaraNasi"
        description="Luxury wedding design, destination weddings, and marriage proposals in Jordan including Petra, Dead Sea, and Amman Citadel. Premium planning and execution. Also serving Saudi Arabia, Dubai, Doha, Egypt, UAE, Thailand, India, Vietnam, China, United States, and Canada."
        keywords="destination wedding Jordan, luxury wedding planner Amman, wedding planner Jordan, destination wedding Petra, wedding planner Dead Sea, luxury wedding Amman Citadel, wedding planner Wadi Rum, destination wedding Jordan Amman, luxury wedding planner Dubai, wedding planner Saudi Arabia Riyadh, destination wedding Doha Qatar, wedding planner India Mumbai Udaipur, destination wedding Thailand, destination wedding New Jersey, wedding planner Chicago Houston Texas, luxury wedding California Los Angeles Boston, wedding planner Toronto Canada Ottawa"
        canonicalPath="/destination-luxury-weddings"
      />

      {/* Hero */}
      <section className="relative h-[70vh] min-h-[500px] flex items-end">
        <div className="absolute inset-0">
          <img
            src="/images/weddings/kempinski-dead-sea-1.jpg"
            alt="Destination luxury wedding at the Dead Sea, Jordan"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/30 to-foreground/20" />
        </div>
        <div className="relative z-10 container-wide pb-16">
          <AnimatedSection>
            <h1 className="heading-display text-background max-w-4xl">
              Destination Luxury Weddings
            </h1>
          </AnimatedSection>
        </div>
      </section>

      {/* Intro */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-16">
            <AnimatedSection>
              <div className="space-y-6">
                <p className="body-lg">
                  Aesthetics and execution. In balance. We handle concept, design, 
                  venue coordination, supplier management, production readiness, 
                  and on-ground delivery. Jordan, Egypt, UAE, Thailand.
                </p>
                <p className="body-md text-muted-foreground">
                  Iconic locations with premium control. The wedding feels effortless 
                  because the operation is managed.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={100}>
              <div className="space-y-4">
                <h2 className="heading-sm mb-6">What we deliver</h2>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    Concept and design direction
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    Venue and destination coordination
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    Supplier management and timeline control
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    Production readiness coordination for lighting and sound
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    Guest journey and hospitality planning
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    Show flow control for entrances, key moments, and entertainment
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    On ground execution and escalation control
                  </li>
                </ul>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Photo Strip */}
      <section className="py-4 bg-background">
        <div className="container-wide">
          <AnimatedSection>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {galleryStrip.map((img, i) => (
                <div key={i} className="overflow-hidden">
                  <div className="aspect-[4/3]">
                    <img
                      loading="lazy"
                      src={img.src}
                      alt={img.alt}
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                    />
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Cinematic Video Showcase */}
      <CinematicVideoSection
        videoId="VISSs12n7-w"
        title="Where Dreams Meet Reality"
        subtitle="Watch Our Story"
        caption="Every detail orchestrated. Every moment captured. Experience the MaraNasi difference in destination luxury weddings."
      />

      {/* Services */}
      <section className="section-padding bg-ivory-dark">
        <div className="container-wide">
          <AnimatedSection>
            <h2 className="heading-lg mb-12">Wedding Services</h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-3 gap-8">
            {weddingServices.map((service, index) => (
              <AnimatedSection key={service.href} delay={index * 100}>
                <Link
                  to={service.href}
                  className="block p-8 bg-background border border-border/50 hover:border-primary/30 hover:shadow-card transition-all duration-500 group h-full"
                >
                  <h3 className="font-serif text-xl font-medium group-hover:text-primary transition-colors">
                    {service.name}
                  </h3>
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
              Request a Wedding Consultation
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default WeddingsMain;
