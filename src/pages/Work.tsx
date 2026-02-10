import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import ingotBoothImage from "@/assets/events/ingot-booth.jpg";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Link } from "react-router-dom";

const projects = [
  {
    title: "TEDxAmman — Largest in MENA",
    category: "Conference & Entertainment",
    image: "/images/events/tedx-activation-stage.jpg",
    year: "2024"
  },
  {
    title: "Dead Sea Kempinski Wedding",
    category: "Destination Wedding",
    image: "/images/weddings/kempinski-dead-sea-1.jpg",
    year: "2024"
  },
  {
    title: "MICE Gala Dinner at the Citadel",
    category: "MICE Event",
    image: "/images/events/mice-citadel-lanterns.jpg",
    year: "2024"
  },
  {
    title: "Luxury Henna Night",
    category: "Destination Wedding",
    image: "/images/weddings/henna-night-1.jpg",
    year: "2024"
  },
  {
    title: "Waqf Thareed Campaign",
    category: "Campaign Management",
    image: "/images/events/waqf-thareed-campaign.jpg",
    year: "2024"
  },
  {
    title: "Citadel Pomegranate Wedding",
    category: "Destination Wedding",
    image: "/images/weddings/citadel-pomegranate-1.jpg",
    year: "2023"
  },
  {
    title: "Fas Meknas Cultural Show",
    category: "Entertainment",
    image: "/images/events/fas-meknas-show.jpg",
    year: "2026"
  },
  {
    title: "Booth Design & Execution",
    category: "Exhibition & Booth",
    image: ingotBoothImage,
    year: "2024"
  }
];

export default function Work() {
  return (
    <Layout>
      <SEO
        title="Our Work | Events and Weddings Portfolio Jordan | MaraNasi"
        description="Portfolio of corporate events, destination weddings, exhibitions, gala dinners, and brand activations in Jordan and Amman. TEDxAmman, MICE events, luxury weddings at the Dead Sea and Amman Citadel."
        keywords="event portfolio Jordan, wedding portfolio Amman, corporate events work Jordan, destination wedding portfolio Jordan, TEDxAmman events, gala dinner portfolio Amman, exhibition portfolio Jordan"
        canonicalPath="/work"
      />
      {/* Hero */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="container-wide">
          <AnimatedSection>
            <span className="text-sm tracking-[0.2em] text-muted-foreground uppercase mb-6 block">
              Our Work
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium leading-tight max-w-4xl">
              A Portfolio of Extraordinary Experiences
            </h1>
          </AnimatedSection>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="pb-20 md:pb-28">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {projects.map((project, index) => (
              <AnimatedSection key={project.title} delay={index * 0.1}>
                <div className="group cursor-pointer">
                  <div className="aspect-[4/3] overflow-hidden mb-6">
                    <img loading="lazy"
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="font-serif text-xl md:text-2xl font-medium mb-2 group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {project.category}
                      </p>
                    </div>
                    <span className="text-sm text-muted-foreground">
                      {project.year}
                    </span>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-secondary/30">
        <div className="container-wide text-center">
          <AnimatedSection>
            <h2 className="font-serif text-3xl md:text-4xl font-medium mb-6">
              Ready to Create Your Story?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-10">
              Every project began with a conversation. 
              Let's discuss how we can bring your vision to life.
            </p>
            <Link to="/contact" className="btn-primary">
              Start Your Project
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
}
