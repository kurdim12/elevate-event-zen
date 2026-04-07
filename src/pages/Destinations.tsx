import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

export default function Destinations() {
  const destinations = [
    { name: "Jordan", cities: ["Amman", "Petra", "Wadi Rum", "Dead Sea", "Aqaba"], desc: "The heart of our operations. Ancient wonders meet modern luxury." },
    { name: "UAE", cities: ["Dubai", "Abu Dhabi"], desc: "World-class venues and infrastructure for luxury events." },
    { name: "Saudi Arabia", cities: ["Riyadh", "Jeddah", "AlUla"], desc: "The Kingdom's emerging luxury event scene." },
    { name: "Europe", cities: ["London", "Paris", "Rome"], desc: "International destinations for global brand events." },
  ];

  return (
    <Layout>
      <SEO
        title="Event Destinations | Jordan, UAE, Saudi Arabia & Europe | Maranasi"
        description="Maranasi produces luxury events across Jordan, UAE, Saudi Arabia, and Europe. From Petra to Dubai — 600+ unconventional event locations worldwide."
        keywords="event destinations Jordan, luxury events UAE, corporate events Saudi Arabia, destination events MENA"
        canonicalPath="/destinations"
        breadcrumbs={[
          { name: "Home", url: "https://maranasi.com" },
          { name: "Destinations", url: "https://maranasi.com/destinations" },
        ]}
      />

      <section className="pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="container-wide">
          <AnimatedSection>
            <p className="section-label mb-4">Where We Work</p>
            <h1 className="heading-display max-w-3xl">Destinations</h1>
            <p className="body-lg mt-6 max-w-2xl">600+ unconventional event locations across 4 countries.</p>
          </AnimatedSection>
        </div>
      </section>

      <section className="section-padding pt-0">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 gap-6">
            {destinations.map((dest, i) => (
              <AnimatedSection key={dest.name} delay={i * 100}>
                <div className="bg-card p-8 border-t-2 border-t-primary">
                  <h2 className="font-accent text-xl text-primary tracking-wide mb-3">{dest.name}</h2>
                  <p className="text-sm text-muted-foreground mb-4">{dest.desc}</p>
                  <p className="text-xs text-muted-foreground/60">{dest.cities.join(" · ")}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-primary/90 via-primary to-primary/80">
        <div className="container-narrow text-center">
          <AnimatedSection>
            <h2 className="heading-lg text-primary-foreground mb-8">Plan Your Destination Event</h2>
            <Link to="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-background text-foreground text-[13px] font-medium uppercase tracking-[0.15em] hover:bg-background/90 transition-all">
              Request a Proposal
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
}
