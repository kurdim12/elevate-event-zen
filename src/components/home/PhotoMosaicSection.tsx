import { AnimatedSection } from "@/components/ui/AnimatedSection";

const photos = [
  { src: "/images/landing/lp-supercar-citadel.jpg", alt: "Luxury brand launch at Amman Citadel", className: "col-span-2 row-span-2" },
  { src: "/images/landing/lp-red-roses.jpg", alt: "Wedding floral arrangement at Citadel" },
  { src: "/images/landing/lp-plate-detail.jpg", alt: "Luxury place setting detail" },
  { src: "/images/landing/lp-gala-tables.jpg", alt: "Gala dinner table setup" },
  { src: "/images/landing/lp-tedx-guitarist.jpg", alt: "Live performance at TEDxAmman", className: "col-span-2" },
  { src: "/images/landing/lp-tedx-singer.jpg", alt: "Singer at TEDxAmman" },
  { src: "/images/landing/lp-dj-night.jpg", alt: "DJ performance at night event" },
  { src: "/images/landing/lp-tedx-stage.jpg", alt: "Full stage at TEDxAmman" },
  { src: "/images/landing/lp-stage-backlit.jpg", alt: "Stage performance with lighting" },
  { src: "/images/landing/lp-cultural-wedding.jpg", alt: "Cultural wedding at Amman Citadel" },
  { src: "/images/landing/lp-bedouin-stall.jpg", alt: "Traditional Jordanian experience setup" },
  { src: "/images/landing/lp-hospitality.jpg", alt: "Event hospitality detail" },
  { src: "/images/landing/lp-red-florals.jpg", alt: "Red floral centerpiece detail" },
  { src: "/images/landing/lp-wedding-sign.jpg", alt: "Wedding welcome mirror sign" },
];

export function PhotoMosaicSection() {
  return (
    <section className="section-padding-sm bg-ivory-dark">
      <div className="container-wide">
        <AnimatedSection className="mb-12">
          <p className="label-uppercase mb-4">Behind the scenes</p>
          <h2 className="heading-xl">
            Every detail, <span className="italic">crafted</span>
          </h2>
        </AnimatedSection>

        <div className="columns-2 md:columns-3 lg:columns-4 gap-3 space-y-3">
          {photos.map((photo, i) => (
            <AnimatedSection key={i} delay={i * 40}>
              <div className="break-inside-avoid overflow-hidden">
                <img
                  loading="lazy"
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-auto object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
