import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ArrowRight } from "lucide-react";
import corporateImage from "@/assets/corporate-event.jpg";

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
  return (
    <Layout>
      <SEO
        title="Corporate Events Management | MaraNasi"
        description="Corporate events management across Jordan, Egypt, UAE, and Thailand. MICE, conferences, exhibitions, retreats, gala dinners, activations, booth production, VIP facilitation, production, and show calling."
        canonicalPath="/corporate-events"
      />

      {/* Hero */}
      <section className="relative h-[70vh] min-h-[500px] flex items-end">
        <div className="absolute inset-0">
          <img
            src={corporateImage}
            alt="Corporate events management"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/30 to-foreground/20" />
        </div>
        <div className="relative z-10 container-wide pb-16">
          <AnimatedSection>
            <h1 className="heading-display text-background max-w-4xl">
              Corporate Events Management
            </h1>
            <p className="body-lg text-background/80 mt-6 max-w-2xl">
              MaraNasi delivers corporate events with destination level ambition and 
              operational control. We plan, produce, and run high value experiences 
              across Jordan, Egypt, the UAE, and Thailand, including conferences, 
              exhibitions, retreats, gala dinners, and brand activations.
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
                  Our approach is simple. We treat every corporate project as a managed 
                  system. Planning, suppliers, production, guest flow, and stage timing 
                  are aligned before show day. The outcome is a premium experience that 
                  runs cleanly and protects the brand.
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
