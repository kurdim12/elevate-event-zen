import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

export default function About() {
  return (
    <Layout>
      <SEO
        title="About Maranasi | Jordan's Luxury Event Production Company"
        description="Maranasi is Jordan's premier luxury event agency, based in Amman. Producers of TEDxAmman for 4,000+ guests. Meet the team behind MENA's most extraordinary events."
        keywords="about Maranasi, luxury event planner Jordan, event management company Amman, TEDxAmman producers"
        canonicalPath="/about"
        breadcrumbs={[
          { name: "Home", url: "https://maranasi.com" },
          { name: "About", url: "https://maranasi.com/about" },
        ]}
        jsonLd={[{
          "@context": "https://schema.org", "@type": "Organization",
          "name": "Maranasi", "url": "https://maranasi.com",
          "foundingLocation": "Amman, Jordan",
          "description": "Jordan's premier luxury event planning and production agency.",
        }]}
      />

      {/* Hero */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="container-wide">
          <AnimatedSection>
            <p className="section-label mb-4">Our Story</p>
            <h1 className="heading-display max-w-4xl">The Art of Nabataean Romance</h1>
          </AnimatedSection>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding pt-0">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            <AnimatedSection>
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p className="body-lg text-foreground">
                  Headquartered in Amman, Jordan, Maranasi has established itself as one of the top event management companies in Jordan and the Hashemite Kingdom's leading luxury event planning and production company.
                </p>
                <p>
                  Our most notable production is TEDxAmman, which we delivered for over 4,000 guests — one of the largest independent TEDx events in the Arab world. We have also produced cinematic brand activations at Petra and the Amman Citadel.
                </p>
                <p>
                  One principle guides our work: design must be supported by operations. When both align, the event feels effortless.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={100}>
              <div className="space-y-8">
                <div>
                  <h2 className="heading-sm mb-6">Our Team</h2>
                  <div className="space-y-4">
                    {["In-House Film Directors", "Award-Winning Architects", "Art Directors & Designers"].map((role) => (
                      <div key={role} className="flex items-center gap-4">
                        <div className="w-8 h-px bg-primary" />
                        <p className="text-foreground/80">{role}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section-padding-sm bg-card">
        <div className="container-wide">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "600+", label: "Unconventional Locations" },
              { value: "TOP 100", label: "Global MICE Planners" },
              { value: "15+", label: "Years in MENA" },
              { value: "4,000+", label: "TEDxAmman Guests" },
            ].map((stat, i) => (
              <AnimatedSection key={stat.label} delay={i * 100}>
                <div className="text-center">
                  <span className="font-display text-4xl md:text-5xl text-primary">{stat.value}</span>
                  <p className="text-sm text-muted-foreground mt-2">{stat.label}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-primary/90 via-primary to-primary/80">
        <div className="container-narrow text-center">
          <AnimatedSection>
            <h2 className="heading-lg text-primary-foreground mb-8">Let's Create Something Extraordinary</h2>
            <Link to="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-background text-foreground text-[13px] font-medium uppercase tracking-[0.15em] hover:bg-background/90 transition-all">
              Get in Touch
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
}
