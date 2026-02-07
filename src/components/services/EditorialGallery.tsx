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

  // Create an editorial asymmetric layout
  return (
    <section className="section-padding bg-ivory-dark overflow-hidden">
      <div className="container-wide">
        <AnimatedSection>
          <h2 className="heading-lg mb-16">{title}</h2>
        </AnimatedSection>

        {/* Editorial Grid - Asymmetric Layout */}
        <div className="grid grid-cols-12 gap-4 md:gap-6">
          {/* Large hero image - spans 8 columns */}
          {images[0] && (
            <AnimatedSection className="col-span-12 md:col-span-8">
              <div className="relative aspect-[4/3] overflow-hidden group">
                <img
                  src={images[0].src}
                  alt={images[0].alt}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                {images[0].caption && (
                  <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    <p className="text-[11px] tracking-[0.15em] text-background/80 uppercase">
                      {images[0].caption}
                    </p>
                  </div>
                )}
              </div>
            </AnimatedSection>
          )}

          {/* Tall vertical image - spans 4 columns, 2 rows */}
          {images[1] && (
            <AnimatedSection className="col-span-12 md:col-span-4 md:row-span-2" delay={100}>
              <div className="relative aspect-[3/4] md:h-full overflow-hidden group">
                <img
                  src={images[1].src}
                  alt={images[1].alt}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </AnimatedSection>
          )}

          {/* Two smaller images side by side */}
          {images[2] && (
            <AnimatedSection className="col-span-6 md:col-span-4" delay={150}>
              <div className="relative aspect-square overflow-hidden group">
                <img
                  src={images[2].src}
                  alt={images[2].alt}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </AnimatedSection>
          )}

          {images[3] && (
            <AnimatedSection className="col-span-6 md:col-span-4" delay={200}>
              <div className="relative aspect-square overflow-hidden group">
                <img
                  src={images[3].src}
                  alt={images[3].alt}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </AnimatedSection>
          )}

          {/* Full width cinematic strip */}
          {images[4] && (
            <AnimatedSection className="col-span-12" delay={250}>
              <div className="relative aspect-[21/9] overflow-hidden group">
                <img
                  src={images[4].src}
                  alt={images[4].alt}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </AnimatedSection>
          )}

          {/* Two final images in magazine layout */}
          {images[5] && (
            <AnimatedSection className="col-span-12 md:col-span-5" delay={300}>
              <div className="relative aspect-[16/10] overflow-hidden group">
                <img
                  src={images[5].src}
                  alt={images[5].alt}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </AnimatedSection>
          )}

          {images[6] && (
            <AnimatedSection className="col-span-12 md:col-span-7" delay={350}>
              <div className="relative aspect-[16/10] overflow-hidden group">
                <img
                  src={images[6].src}
                  alt={images[6].alt}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </AnimatedSection>
          )}
        </div>
      </div>
    </section>
  );
}
