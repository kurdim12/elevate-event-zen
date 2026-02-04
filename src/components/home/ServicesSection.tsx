import { Link } from "react-router-dom";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ArrowRight } from "lucide-react";

import corporateImage from "@/assets/corporate-event.jpg";
import weddingImage from "@/assets/wedding-event.jpg";
import brandImage from "@/assets/brand-activation.jpg";
import privateImage from "@/assets/private-event.jpg";
import destinationImage from "@/assets/destination-event.jpg";

const services = [
  {
    title: "Corporate Events",
    description: "Conferences, galas, and executive gatherings that elevate your brand.",
    image: corporateImage,
    href: "/corporate-events",
  },
  {
    title: "Luxury Weddings",
    description: "Bespoke wedding experiences crafted with exquisite attention to detail.",
    image: weddingImage,
    href: "/weddings",
  },
  {
    title: "Brand Activations",
    description: "Immersive brand experiences that captivate and convert.",
    image: brandImage,
    href: "/brand-activations",
  },
  {
    title: "Private Events",
    description: "Intimate celebrations designed around your personal vision.",
    image: privateImage,
    href: "/private-events",
  },
  {
    title: "Destination Experiences",
    description: "Extraordinary events in remarkable locations across the region.",
    image: destinationImage,
    href: "/destinations",
  },
];

export function ServicesSection() {
  return (
    <section className="section-padding bg-ivory-dark">
      <div className="container-wide">
        {/* Section Header */}
        <AnimatedSection className="text-center mb-16">
          <p className="label-uppercase mb-4">Our Services</p>
          <h2 className="heading-xl mb-6">
            Comprehensive Event
            <br />
            <span className="italic">Solutions</span>
          </h2>
          <p className="body-lg max-w-2xl mx-auto">
            From concept to execution, we deliver seamless experiences 
            tailored to your unique requirements.
          </p>
        </AnimatedSection>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <AnimatedSection key={service.title} delay={index * 100}>
              <Link
                to={service.href}
                className="group block relative overflow-hidden aspect-[4/5] bg-card"
              >
                {/* Image */}
                <img
                  src={service.image}
                  alt={service.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
                
                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <h3 className="heading-sm text-background mb-2">{service.title}</h3>
                  <p className="text-background/70 font-light mb-4">{service.description}</p>
                  <span className="inline-flex items-center gap-2 text-sm uppercase tracking-widest text-background/80 group-hover:text-background transition-colors">
                    Learn More
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
