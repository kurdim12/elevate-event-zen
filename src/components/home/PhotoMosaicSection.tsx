import { AnimatedSection } from "@/components/ui/AnimatedSection";

const tiles = [
  { src: "/images/landing/lp-supercar-citadel.jpg", alt: "Luxury brand launch at Amman Citadel", title: "Brand Launch at the Citadel", subtitle: "Amman, Jordan", size: "large" as const },
  { src: "/images/landing/lp-tedx-stage.jpg", alt: "Full stage at TEDxAmman", title: "TEDxAmman Main Stage", subtitle: "Conference Production", size: "medium" as const },
  { src: "/images/landing/lp-red-roses.jpg", alt: "Wedding floral arrangement", title: "Floral Couture", subtitle: "Wedding Detail", size: "medium" as const },
  { src: "/images/landing/lp-gala-tables.jpg", alt: "Gala dinner table setup", title: "Gala Evening", subtitle: "Banquet Production", size: "large" as const },
  { src: "/images/landing/lp-tedx-guitarist.jpg", alt: "Live performance at TEDxAmman", title: "Live Entertainment", subtitle: "Show Production", size: "medium" as const },
  { src: "/images/landing/lp-cultural-wedding.jpg", alt: "Cultural wedding at Amman Citadel", title: "Heritage Wedding", subtitle: "Amman Citadel", size: "medium" as const },
  { src: "/images/landing/lp-dj-night.jpg", alt: "DJ performance at night event", title: "After Dark", subtitle: "Entertainment", size: "large" as const },
  { src: "/images/landing/lp-stage-backlit.jpg", alt: "Stage performance with lighting", title: "Stage & Light", subtitle: "Production Design", size: "medium" as const },
  { src: "/images/landing/lp-plate-detail.jpg", alt: "Luxury place setting detail", title: "The Details", subtitle: "Hospitality", size: "medium" as const },
  { src: "/images/landing/lp-hospitality.jpg", alt: "Event hospitality detail", title: "Guest Experience", subtitle: "Service Design", size: "large" as const },
  { src: "/images/landing/lp-bedouin-stall.jpg", alt: "Traditional Jordanian experience", title: "Jordanian Heritage", subtitle: "Destination Experience", size: "medium" as const },
  { src: "/images/landing/lp-wedding-sign.jpg", alt: "Wedding welcome mirror sign", title: "Welcome Moment", subtitle: "Wedding Styling", size: "medium" as const },
  { src: "/images/landing/lp-red-florals.jpg", alt: "Red floral centerpiece detail", title: "Colour Story", subtitle: "Floral Design", size: "large" as const },
  { src: "/images/landing/lp-tedx-singer.jpg", alt: "Singer at TEDxAmman", title: "The Performance", subtitle: "Live Show", size: "medium" as const },
];

export function PhotoMosaicSection() {
  return (
    <section className="section-padding-sm bg-ivory-dark">
      <div className="container-wide">
        <AnimatedSection className="mb-14 md:mb-20">
          <p className="label-uppercase mb-4">Behind the scenes</p>
          <h2 className="heading-xl">
            Every detail, <span className="italic">considered</span>
          </h2>
        </AnimatedSection>
      </div>

      {/* Editorial tile strip — horizontally scrolling on mobile, wrapped grid on desktop */}
      <div className="container-wide">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-3">
          {tiles.map((tile, i) => {
            const isLarge = tile.size === "large";
            return (
              <AnimatedSection
                key={i}
                delay={i * 60}
                className={isLarge ? "md:col-span-2" : "md:col-span-1"}
              >
                <div className="relative w-full aspect-[16/10] md:aspect-auto md:h-[420px] lg:h-[480px] overflow-hidden group cursor-pointer">
                  {/* Image */}
                  <img
                    loading="lazy"
                    src={tile.src}
                    alt={tile.alt}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-[1.03]"
                  />

                  {/* Permanent bottom gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/10 to-transparent" />

                  {/* Text overlay — always visible, bottom-left */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 flex flex-col justify-end">
                    <h3 className="font-serif text-xl md:text-2xl lg:text-[1.75rem] font-medium text-background leading-tight tracking-[-0.01em]">
                      {tile.title}
                    </h3>
                    <p className="mt-2 text-[11px] tracking-[0.18em] text-background/50 uppercase">
                      {tile.subtitle}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
