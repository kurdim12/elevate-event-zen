import { AnimatedSection } from "@/components/ui/AnimatedSection";

const tiles = [
  { src: "/images/landing/lp-supercar-citadel.jpg", alt: "Luxury brand launch at Amman Citadel", span: "col-span-2 row-span-2" },
  { src: "/images/landing/lp-red-roses.jpg", alt: "Wedding floral arrangement at Citadel", span: "col-span-1 row-span-1" },
  { src: "/images/landing/lp-plate-detail.jpg", alt: "Luxury place setting detail", span: "col-span-1 row-span-1" },
  { src: "/images/landing/lp-gala-tables.jpg", alt: "Gala dinner table setup", span: "col-span-1 row-span-2" },
  { src: "/images/landing/lp-tedx-guitarist.jpg", alt: "Live performance at TEDxAmman", span: "col-span-2 row-span-1" },
  { src: "/images/landing/lp-tedx-singer.jpg", alt: "Singer at TEDxAmman", span: "col-span-1 row-span-1" },
  { src: "/images/landing/lp-dj-night.jpg", alt: "DJ performance at night event", span: "col-span-1 row-span-1" },
  { src: "/images/landing/lp-tedx-stage.jpg", alt: "Full stage at TEDxAmman", span: "col-span-2 row-span-1" },
  { src: "/images/landing/lp-stage-backlit.jpg", alt: "Stage performance with lighting", span: "col-span-1 row-span-2" },
  { src: "/images/landing/lp-cultural-wedding.jpg", alt: "Cultural wedding at Amman Citadel", span: "col-span-1 row-span-1" },
  { src: "/images/landing/lp-bedouin-stall.jpg", alt: "Traditional Jordanian experience setup", span: "col-span-1 row-span-1" },
  { src: "/images/landing/lp-hospitality.jpg", alt: "Event hospitality detail", span: "col-span-2 row-span-1" },
  { src: "/images/landing/lp-red-florals.jpg", alt: "Red floral centerpiece detail", span: "col-span-1 row-span-1" },
  { src: "/images/landing/lp-wedding-sign.jpg", alt: "Wedding welcome mirror sign", span: "col-span-1 row-span-1" },
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

        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[180px] md:auto-rows-[220px] lg:auto-rows-[260px] gap-2 md:gap-3">
          {tiles.map((tile, i) => (
            <AnimatedSection key={i} delay={i * 50} className={tile.span}>
              <div className="relative w-full h-full overflow-hidden group cursor-pointer">
                <img
                  loading="lazy"
                  src={tile.src}
                  alt={tile.alt}
                  className="w-full h-full object-cover transition-all duration-[1.2s] ease-out group-hover:scale-[1.04]"
                />
                {/* Cinematic overlay on hover */}
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/15 transition-colors duration-700" />
                {/* Subtle bottom vignette */}
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
