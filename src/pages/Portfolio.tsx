import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Link } from "react-router-dom";

export default function Portfolio() {
  return (
    <Layout>
      <SEO
        title="Portfolio | Luxury Event Case Studies Jordan | Maranasi"
        description="Explore Maranasi's portfolio of luxury events in Jordan — weddings, gala dinners, corporate events, and brand activations at Petra, Wadi Rum, and Amman."
        keywords="event portfolio Jordan, luxury event case studies, Maranasi portfolio, wedding portfolio Jordan"
        canonicalPath="/portfolio"
        breadcrumbs={[
          { name: "Home", url: "https://maranasi.com" },
          { name: "Portfolio", url: "https://maranasi.com/portfolio" },
        ]}
      />

      <section className="pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="container-wide">
          <AnimatedSection>
            <p className="section-label mb-4">Our Work</p>
            <h1 className="heading-display max-w-3xl">Portfolio</h1>
            <p className="body-lg mt-6 max-w-2xl">
              A curated selection of our most extraordinary productions across Jordan and MENA.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="section-padding pt-0">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "TEDxAmman", type: "Corporate Event", guests: "4,000+" },
              { title: "Petra Brand Activation", type: "Brand Activation", guests: "500+" },
              { title: "Dead Sea Wedding", type: "Destination Wedding", guests: "250" },
              { title: "Amman Citadel Gala", type: "Gala Dinner", guests: "800" },
              { title: "Wadi Rum Desert Wedding", type: "Destination Wedding", guests: "120" },
              { title: "Royal Automotive Launch", type: "Product Launch", guests: "600" },
            ].map((project, i) => (
              <AnimatedSection key={i} delay={i * 80}>
                <div className="bg-card p-8 border-t-2 border-t-primary group hover:shadow-gold-glow transition-all duration-700">
                  <p className="section-label text-[10px] mb-3">{project.type}</p>
                  <h3 className="font-display text-xl mb-2">{project.title}</h3>
                  <p className="text-sm text-muted-foreground">{project.guests} guests</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-primary/90 via-primary to-primary/80">
        <div className="container-narrow text-center">
          <AnimatedSection>
            <h2 className="heading-lg text-primary-foreground mb-8">Let's Create Your Event</h2>
            <Link to="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-background text-foreground text-[13px] font-medium uppercase tracking-[0.15em] hover:bg-background/90 transition-all">
              Request a Proposal
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
}
