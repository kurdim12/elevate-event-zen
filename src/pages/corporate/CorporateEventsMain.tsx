import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

const heroImages = [
  { src: "/images/corporate/mice-1.jpg", alt: "Private MICE gala dinner at Amman Citadel" },
  { src: "/images/corporate/conference-1.jpg", alt: "Conference management at BluePeace Conference" },
  { src: "/images/corporate/entertainment-1.jpg", alt: "Live entertainment at Fas Meknas 2026" },
  { src: "/images/corporate/show-1.jpg", alt: "Stage management at TEDxAmman" },
  { src: "/images/corporate/gala-1.jpg", alt: "Gala dinner production" },
  { src: "/images/corporate/exhibition-1.jpg", alt: "Exhibition management and production" },
];

const corporateServices = [
  { name: "MICE Event Management", href: "/corporate-events/mice-event-management" },
  { name: "Destination Corporate Events", href: "/corporate-events/destination-corporate-events" },
  { name: "Destination Corporate Retreats", href: "/corporate-events/destination-corporate-retreats" },
  { name: "Exhibition Booth Design and Production", href: "/corporate-events/exhibition-booth-design-production" },
  { name: "360 Campaign Management and Brand Activations", href: "/corporate-events/360-campaign-management-activations" },
  { name: "Exhibition Management", href: "/corporate-events/exhibition-management" },
  { name: "Entertainment Programming and Production", href: "/corporate-events/entertainment-programming-production" },
  { name: "Conference Management", href: "/corporate-events/conference-management" },
  { name: "VIP Greet and Meet Facilitation", href: "/corporate-events/vip-greet-and-meet-facilitation" },
  { name: "Lighting and Sound Production", href: "/corporate-events/lighting-and-sound-production" },
  { name: "Gala Dinner and Banquet Production", href: "/corporate-events/gala-dinner-banquet-production" },
  { name: "Show Calling and Stage Management", href: "/corporate-events/show-calling-stage-management" },
];

const CorporateEventsMain = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage(prev => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <Layout>
      <SEO
        title="Corporate Events Management in Jordan | Amman | MaraNasi"
        description="Corporate events management in Jordan and Amman. MICE, conferences, exhibitions, retreats, gala dinners, activations, booth production, VIP facilitation, and show calling. Also serving Saudi Arabia, Dubai, Doha, Egypt, UAE, Thailand, India, Vietnam, China, United States, and Canada."
        keywords="corporate event planner Jordan, corporate event planner Amman, MICE event management Jordan, conference management Amman, exhibition management Jordan, gala dinner planner Amman, corporate retreat Jordan, brand activation Amman, corporate events Jordan, MICE event management Saudi Arabia, conference management Dubai, exhibition management Doha Qatar, corporate retreat Thailand, event planner New Jersey Chicago Houston Texas California Boston Los Angeles Toronto Canada"
        canonicalPath="/corporate-events"
      />

      {/* Hero with image carousel */}
      <section className="relative h-[70vh] min-h-[500px] flex items-end overflow-hidden">
        {heroImages.map((img, index) => (
          <div
            key={img.src}
            className="absolute inset-0 transition-opacity duration-1000"
            style={{ opacity: index === currentImage ? 1 : 0 }}
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/30 to-foreground/20" />

        {/* Carousel dots */}
        <div className="absolute bottom-6 right-6 flex gap-2 z-10">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImage(index)}
              className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                index === currentImage ? "bg-background w-4" : "bg-background/40"
              }`}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>

        <div className="relative z-10 container-wide pb-16">
          <AnimatedSection>
            <h1 className="heading-display text-background max-w-4xl">
              Corporate Events Management
            </h1>
            <p className="body-lg text-background/80 mt-6 max-w-2xl">
              Destination-level ambition. Operational control. We plan, produce, 
              and run high-value experiences across Jordan, Egypt, the UAE, and 
              Thailand. Conferences, exhibitions, retreats, gala dinners, brand activations.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Our Approach */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-16">
            <AnimatedSection>
              <div className="space-y-6">
                <h2 className="heading-lg mb-4">Our Approach</h2>
                <p className="body-md text-muted-foreground">
                  Simple. Every corporate project is a managed system. Planning, 
                  suppliers, production, guest flow, stage timing—aligned before 
                  show day. The outcome: a premium experience that runs cleanly 
                  and protects the brand.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={100}>
              <div className="space-y-4">
                <h2 className="heading-sm mb-6">What We Deliver</h2>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    Program planning and structure
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    Venue and destination coordination
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    Supplier management and timelines
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    Production readiness coordination for lighting and sound
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    VIP greet and meet facilitation when required
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    Show calling and stage management for timing control
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

      {/* Services Grid */}
      <section className="section-padding bg-ivory-dark">
        <div className="container-wide">
          <AnimatedSection>
            <h2 className="heading-lg mb-12">Corporate Services</h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {corporateServices.map((service, index) => (
              <AnimatedSection key={service.href} delay={index * 50}>
                <Link
                  to={service.href}
                  className="block p-6 bg-background border border-border/50 hover:border-primary/30 hover:shadow-card transition-all duration-500 group"
                >
                  <h3 className="font-serif text-lg font-medium group-hover:text-primary transition-colors">
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
              Request a Corporate Proposal
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default CorporateEventsMain;
