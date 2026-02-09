import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <Layout>
      <SEO 
        title="About MaraNasi | Luxury Events Management"
        description="MaraNasi is a luxury events management agency delivering corporate events and destination weddings across Jordan, Egypt, UAE, and Thailand with operational control and premium execution."
        canonicalPath="/about"
      />

      {/* Hero */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-ivory-dark">
        <div className="container-wide">
          <AnimatedSection>
            <h1 className="heading-display max-w-4xl">
              About MaraNasi
            </h1>
          </AnimatedSection>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            <AnimatedSection>
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p className="body-lg text-foreground">
                  Built for clients who expect premium results without operational 
                  noise. Corporate events and destination luxury weddings—disciplined 
                  planning, supplier control, strong production backbone. Jordan, Egypt, 
                  UAE, Thailand. Iconic venues. Rare locations. Timing control. Guest 
                  experience standards.
                </p>
                <p>
                  One principle guides our work: design must be supported by operations. 
                  When both align, the event feels effortless.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={100}>
              <div className="card-luxury">
                <h2 className="heading-sm mb-8">What we stand for</h2>
                <ul className="space-y-4">
                  {[
                    "Operational control",
                    "Premium execution standards",
                    "Destination capability",
                    "Discretion and VIP handling",
                    "Production readiness and show flow discipline"
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section-padding-sm bg-ivory-dark">
        <div className="container-wide">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {[
              { value: "4", label: "Countries" },
              { value: "500+", label: "Events Delivered" },
              { value: "15+", label: "Years of Experience" },
              { value: "100%", label: "Client Focus" }
            ].map((stat, index) => (
              <AnimatedSection key={stat.label} delay={index * 100}>
                <div className="text-center">
                  <span className="font-serif text-4xl md:text-5xl text-primary">{stat.value}</span>
                  <p className="text-sm text-muted-foreground mt-2">{stat.label}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Destinations */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <AnimatedSection>
            <h2 className="heading-lg mb-12 text-center">Where We Operate</h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { name: "Jordan", href: "/destinations/jordan" },
              { name: "Egypt", href: "/destinations/egypt" },
              { name: "United Arab Emirates", href: "/destinations/uae" },
              { name: "Thailand", href: "/destinations/thailand" }
            ].map((destination, index) => (
              <AnimatedSection key={destination.name} delay={index * 50}>
                <Link 
                  to={destination.href}
                  className="block p-6 bg-ivory-dark text-center hover:bg-secondary transition-colors duration-300"
                >
                  <span className="font-serif text-lg">{destination.name}</span>
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
              Book a Call
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
}
