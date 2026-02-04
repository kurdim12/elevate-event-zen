import { Layout } from "@/components/layout/Layout";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Link } from "react-router-dom";

import corporateImage from "@/assets/corporate-event.jpg";
import weddingImage from "@/assets/wedding-event.jpg";
import brandImage from "@/assets/brand-activation.jpg";
import privateImage from "@/assets/private-event.jpg";
import destinationImage from "@/assets/destination-event.jpg";
import heroImage from "@/assets/hero-event.jpg";

const projects = [
  {
    title: "Royal Jordanian Gala",
    category: "Corporate Events",
    image: corporateImage,
    year: "2024"
  },
  {
    title: "Al-Faisaliah Wedding",
    category: "Weddings",
    image: weddingImage,
    year: "2024"
  },
  {
    title: "Mercedes-Benz Launch",
    category: "Brand Activations",
    image: brandImage,
    year: "2023"
  },
  {
    title: "Private Estate Celebration",
    category: "Private Events",
    image: privateImage,
    year: "2023"
  },
  {
    title: "Petra Destination Event",
    category: "Destinations",
    image: destinationImage,
    year: "2023"
  },
  {
    title: "Annual Leadership Summit",
    category: "Corporate Events",
    image: heroImage,
    year: "2024"
  }
];

export default function Work() {
  return (
    <Layout>
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
                    <img
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
              Every project in our portfolio began with a conversation. 
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
