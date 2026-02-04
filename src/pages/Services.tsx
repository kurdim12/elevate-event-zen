import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
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
    description: "From executive conferences to grand galas, we create business events that inspire, connect, and elevate your brand.",
    image: corporateImage,
    href: "/corporate-events",
  },
  {
    title: "Luxury Weddings",
    description: "Bespoke wedding experiences crafted with exquisite attention to detail, honoring your unique love story.",
    image: weddingImage,
    href: "/weddings",
  },
  {
    title: "Brand Activations",
    description: "Immersive brand experiences that captivate audiences and create lasting connections with your market.",
    image: brandImage,
    href: "/brand-activations",
  },
  {
    title: "Private Events",
    description: "Personal celebrations designed around your vision—intimate, meaningful, and flawlessly executed.",
    image: privateImage,
    href: "/private-events",
  },
  {
    title: "Destination Experiences",
    description: "Extraordinary events in remarkable locations across Jordan, the Middle East, and beyond.",
    image: destinationImage,
    href: "/destinations",
  },
];

const Services = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-background">
        <div className="container-wide">
          <AnimatedSection className="max-w-3xl">
            <p className="label-uppercase mb-4">What We Do</p>
            <h1 className="heading-display mb-6">
              Full-Service Event
              <br />
              <span className="italic">Excellence</span>
            </h1>
            <p className="body-lg">
              From intimate gatherings to grand productions, Maranasi delivers 
              comprehensive event solutions tailored to your unique vision and objectives.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Services List */}
      <section className="section-padding-sm bg-background">
        <div className="container-wide">
          <div className="space-y-24">
            {services.map((service, index) => (
              <AnimatedSection key={service.title}>
                <div className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:grid-flow-dense" : ""}`}>
                  <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                    <span className="label-uppercase mb-4 block text-taupe">0{index + 1}</span>
                    <h2 className="heading-xl mb-6">{service.title}</h2>
                    <p className="body-lg mb-8">{service.description}</p>
                    <Link
                      to={service.href}
                      className="inline-flex items-center gap-3 text-primary font-medium hover:gap-4 transition-all"
                    >
                      <span>Explore {service.title}</span>
                      <ArrowRight className="w-5 h-5" />
                    </Link>
                  </div>
                  <div className={`aspect-[4/3] overflow-hidden ${index % 2 === 1 ? "lg:col-start-1" : ""}`}>
                    <Link to={service.href} className="block group h-full">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </Link>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-ivory-dark">
        <div className="container-narrow text-center">
          <AnimatedSection>
            <h2 className="heading-lg mb-6">Not Sure Where to Start?</h2>
            <p className="body-lg mb-10">
              Let's discuss your vision and find the perfect approach for your event.
            </p>
            <Link to="/contact" className="btn-primary">
              Start a Conversation
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
