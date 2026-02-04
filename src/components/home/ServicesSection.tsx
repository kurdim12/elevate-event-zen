import { Link } from "react-router-dom";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

import corporateImage from "@/assets/corporate-event.jpg";
import weddingImage from "@/assets/wedding-event.jpg";
import brandImage from "@/assets/brand-activation.jpg";
import privateImage from "@/assets/private-event.jpg";

const services = [
  {
    title: "Corporate",
    subtitle: "Conferences, galas, executive gatherings",
    image: corporateImage,
    href: "/corporate-events",
  },
  {
    title: "Weddings",
    subtitle: "Bespoke celebrations, destination ceremonies",
    image: weddingImage,
    href: "/weddings",
  },
  {
    title: "Brand",
    subtitle: "Launches, activations, immersive experiences",
    image: brandImage,
    href: "/brand-activations",
  },
  {
    title: "Private",
    subtitle: "Intimate gatherings, milestone moments",
    image: privateImage,
    href: "/private-events",
  },
];

export function ServicesSection() {
  return (
    <section className="py-32 md:py-40 lg:py-52 bg-background">
      <div className="container-wide">
        {/* Minimal section intro */}
        <AnimatedSection className="mb-20 md:mb-28">
          <p className="text-xs tracking-[0.3em] text-muted-foreground uppercase">
            What we do
          </p>
        </AnimatedSection>

        {/* Services - Elegant list layout */}
        <div className="space-y-0">
          {services.map((service, index) => (
            <AnimatedSection key={service.title} delay={index * 100}>
              <Link
                to={service.href}
                className="group block border-t border-border/50 py-10 md:py-14 transition-colors duration-500 hover:bg-secondary/20"
              >
                <div className="grid grid-cols-12 items-center gap-6">
                  {/* Number */}
                  <div className="col-span-1 hidden md:block">
                    <span className="text-xs text-muted-foreground/50">
                      0{index + 1}
                    </span>
                  </div>

                  {/* Title */}
                  <div className="col-span-12 md:col-span-4">
                    <h3 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium transition-colors duration-500 group-hover:text-primary">
                      {service.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <div className="col-span-12 md:col-span-4">
                    <p className="text-muted-foreground text-sm md:text-base">
                      {service.subtitle}
                    </p>
                  </div>

                  {/* Image preview - appears on hover */}
                  <div className="col-span-3 hidden lg:flex justify-end">
                    <div className="w-32 h-20 overflow-hidden opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </Link>
            </AnimatedSection>
          ))}
          
          {/* Bottom border */}
          <div className="border-t border-border/50" />
        </div>

        {/* View all link */}
        <AnimatedSection delay={400} className="mt-16 md:mt-20">
          <Link 
            to="/services" 
            className="inline-flex items-center text-sm tracking-[0.2em] text-muted-foreground uppercase hover:text-foreground transition-colors duration-500 group"
          >
            <span className="mr-4">View all services</span>
            <span className="w-8 h-px bg-muted-foreground/30 group-hover:w-16 group-hover:bg-foreground transition-all duration-500" />
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
}
