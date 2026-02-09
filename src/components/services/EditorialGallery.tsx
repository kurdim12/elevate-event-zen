import { AnimatedSection } from "@/components/ui/AnimatedSection";

interface GalleryImage {
  src: string;
  alt: string;
  caption?: string;
}

interface EditorialGalleryProps {
  images: GalleryImage[];
  title?: string;
}

export function EditorialGallery({ images, title = "Moments That Define Us" }: EditorialGalleryProps) {
  if (!images || images.length === 0) return null;

  return (
    <section className="py-24 md:py-32 bg-foreground overflow-hidden">
      <div className="container-wide">
        {/* Section Header */}
        <AnimatedSection>
          <div className="mb-16 md:mb-24">
            <span className="text-[10px] tracking-[0.3em] text-background/40 uppercase block mb-4">
              Portfolio
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-background tracking-[-0.02em]">
              {title}
            </h2>
          </div>
        </AnimatedSection>

        {/* Uniform 3-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {images.map((image, i) => (
            <AnimatedSection key={image.src} delay={i * 60}>
              <div className="relative overflow-hidden group cursor-pointer">
                <div className="aspect-[4/3]">
                  <img
                    loading="lazy"
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-all duration-[1.2s] ease-out group-hover:scale-[1.03]"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/50 via-foreground/0 to-foreground/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                {image.caption && (
                  <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
                    <div className="transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700 ease-out">
                      <span className="text-[11px] tracking-[0.2em] text-background/90 uppercase font-light">
                        {image.caption}
                      </span>
                    </div>
                  </div>
                )}
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Bottom accent */}
        <AnimatedSection delay={400}>
          <div className="mt-16 md:mt-24 flex items-center justify-center gap-4">
            <span className="w-12 h-px bg-background/20" />
            <span className="text-[10px] tracking-[0.3em] text-background/30 uppercase">
              Every Detail Matters
            </span>
            <span className="w-12 h-px bg-background/20" />
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
