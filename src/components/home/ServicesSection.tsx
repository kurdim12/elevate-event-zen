import { Link } from "react-router-dom";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

const services = [
  {
    title: "Corporate Events",
    subtitle: "Conferences, MICE, Gala Dinners & Campaign Management",
    image: "/images/landing/lp-tedx-production.jpg",
    href: "/corporate-events",
  },
  {
    title: "Luxury Weddings",
    subtitle: "Bespoke celebrations, Cultural nights & Destination ceremonies",
    image: "/images/landing/lp-wedding-setting.jpg",
    href: "/destination-luxury-weddings",
  },
  {
    title: "Brand Activations",
    subtitle: "360 Campaigns, Exhibitions & Immersive brand experiences",
    image: "/images/landing/lp-redbull-crowd.jpg",
    href: "/corporate-events",
  },
  {
    title: "Destination Events",
    subtitle: "Iconic locations, Retreats & VIP destination experiences",
    image: "/images/landing/lp-jordan-tent.jpg",
    href: "/destinations",
  },
];

export function ServicesSection() {
  return (
    <section className="py-28 md:py-36 lg:py-44 bg-background">
      <div className="container-wide">
        {/* Minimal section intro */}
        <AnimatedSection className="mb-16 md:mb-20">
          <p className="text-[11px] tracking-[0.22em] text-muted-foreground/60 uppercase">
            What we do
          </p>
        </AnimatedSection>

        {/* Services list */}
        <div className="space-y-0">
          {services.map((service, index) => (
            <AnimatedSection key={service.title} delay={index * 80}>
              <Link
                to={service.href}
                className="group block border-t border-border/40 py-8 md:py-10 transition-colors duration-700 hover:bg-secondary/15"
              >
                <div className="grid grid-cols-12 items-center gap-4 md:gap-6">
                  {/* Number */}
                  <div className="col-span-2 md:col-span-1">
                    <span className="text-[11px] text-muted-foreground/40">
                      0{index + 1}
                    </span>
                  </div>

                  {/* Title */}
                  <div className="col-span-10 md:col-span-4">
                    <h3 className="font-serif text-2xl md:text-3xl lg:text-4xl font-medium tracking-[-0.01em] transition-colors duration-500 group-hover:text-primary">
                      {service.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <div className="col-span-10 col-start-3 md:col-span-4 md:col-start-auto -mt-2 md:mt-0">
                    <p className="text-[14px] text-muted-foreground/70">
                      {service.subtitle}
                    </p>
                  </div>

                  {/* Image preview */}
                  <div className="col-span-3 hidden lg:flex justify-end">
                    <div className="w-28 h-16 overflow-hidden opacity-0 translate-x-3 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-600">
                      <img loading="lazy"
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

          <div className="border-t border-border/40" />
        </div>

        {/* View all link */}
        <AnimatedSection delay={350} className="mt-12 md:mt-14">
          <Link
            to="/work"
            className="inline-flex items-center text-[13px] tracking-[0.18em] text-muted-foreground/60 uppercase hover:text-foreground transition-colors duration-500 group"
          >
            <span className="mr-3">View our portfolio</span>
            <span className="w-6 h-px bg-muted-foreground/25 group-hover:w-12 group-hover:bg-foreground transition-all duration-600" />
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
}
