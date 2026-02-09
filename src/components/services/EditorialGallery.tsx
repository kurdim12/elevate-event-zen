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

        {/* Editorial Masonry Grid */}
        <div className="space-y-4 md:space-y-6">
          
          {/* Row 1: Hero + Vertical */}
          <div className="grid grid-cols-12 gap-4 md:gap-6">
            {/* Large hero image */}
            {images[0] && (
              <AnimatedSection className="col-span-12 lg:col-span-7">
                <div className="relative overflow-hidden group cursor-pointer">
                  <div className="aspect-[4/3]">
                    <img loading="lazy"
                      src={images[0].src}
                      alt={images[0].alt}
                      className="w-full h-full object-cover transition-all duration-[1.2s] ease-out group-hover:scale-[1.03]"
                    />
                  </div>
                  {/* Elegant overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-foreground/0 to-foreground/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  {/* Caption */}
                  {images[0].caption && (
                    <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                      <div className="transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700 ease-out">
                        <span className="text-[11px] tracking-[0.2em] text-background/90 uppercase font-light">
                          {images[0].caption}
                        </span>
                      </div>
                    </div>
                  )}
                  {/* Corner accent */}
                  <div className="absolute top-6 right-6 w-8 h-8 border-t border-r border-background/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                </div>
              </AnimatedSection>
            )}

            {/* Tall vertical image */}
            {images[1] && (
              <AnimatedSection className="col-span-12 lg:col-span-5" delay={100}>
                <div className="relative overflow-hidden group cursor-pointer h-full">
                  <div className="aspect-[3/4] lg:aspect-auto lg:h-full">
                    <img loading="lazy"
                      src={images[1].src}
                      alt={images[1].alt}
                      className="w-full h-full object-cover transition-all duration-[1.2s] ease-out group-hover:scale-[1.03]"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/50 via-foreground/0 to-foreground/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  <div className="absolute top-6 left-6 w-8 h-8 border-t border-l border-background/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                </div>
              </AnimatedSection>
            )}
          </div>

          {/* Row 2: Three equal images */}
          <div className="grid grid-cols-12 gap-4 md:gap-6">
            {images[2] && (
              <AnimatedSection className="col-span-6 lg:col-span-4" delay={150}>
                <div className="relative overflow-hidden group cursor-pointer">
                  <div className="aspect-[1/1]">
                    <img loading="lazy"
                      src={images[2].src}
                      alt={images[2].alt}
                      className="w-full h-full object-cover transition-all duration-[1.2s] ease-out group-hover:scale-[1.03]"
                    />
                  </div>
                  <div className="absolute inset-0 bg-foreground/30 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                </div>
              </AnimatedSection>
            )}

            {images[3] && (
              <AnimatedSection className="col-span-6 lg:col-span-4" delay={200}>
                <div className="relative overflow-hidden group cursor-pointer">
                  <div className="aspect-[1/1]">
                    <img loading="lazy"
                      src={images[3].src}
                      alt={images[3].alt}
                      className="w-full h-full object-cover transition-all duration-[1.2s] ease-out group-hover:scale-[1.03]"
                    />
                  </div>
                  <div className="absolute inset-0 bg-foreground/30 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                </div>
              </AnimatedSection>
            )}

            {images[4] && (
              <AnimatedSection className="col-span-12 lg:col-span-4" delay={250}>
                <div className="relative overflow-hidden group cursor-pointer">
                  <div className="aspect-[16/9] lg:aspect-[1/1]">
                    <img loading="lazy"
                      src={images[4].src}
                      alt={images[4].alt}
                      className="w-full h-full object-cover transition-all duration-[1.2s] ease-out group-hover:scale-[1.03]"
                    />
                  </div>
                  <div className="absolute inset-0 bg-foreground/30 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                </div>
              </AnimatedSection>
            )}
          </div>

          {/* Row 3: Cinematic wide + Portrait */}
          <div className="grid grid-cols-12 gap-4 md:gap-6">
            {images[5] && (
              <AnimatedSection className="col-span-12 lg:col-span-5" delay={300}>
                <div className="relative overflow-hidden group cursor-pointer">
                  <div className="aspect-[4/5]">
                    <img loading="lazy"
                      src={images[5].src}
                      alt={images[5].alt}
                      className="w-full h-full object-cover transition-all duration-[1.2s] ease-out group-hover:scale-[1.03]"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-b from-foreground/40 via-foreground/0 to-foreground/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  <div className="absolute bottom-6 right-6 w-8 h-8 border-b border-r border-background/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                </div>
              </AnimatedSection>
            )}

            {images[6] && (
              <AnimatedSection className="col-span-12 lg:col-span-7" delay={350}>
                <div className="relative overflow-hidden group cursor-pointer h-full">
                  <div className="aspect-[16/10] lg:aspect-auto lg:h-full">
                    <img loading="lazy"
                      src={images[6].src}
                      alt={images[6].alt}
                      className="w-full h-full object-cover transition-all duration-[1.2s] ease-out group-hover:scale-[1.03]"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/50 via-foreground/0 to-foreground/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  {/* Decorative line */}
                  <div className="absolute bottom-8 left-8 right-8 h-px bg-background/0 group-hover:bg-background/30 transition-colors duration-1000" />
                </div>
              </AnimatedSection>
            )}
          </div>

          {/* Row 4: Additional images (if available) */}
          {images.length > 7 && (
            <div className="grid grid-cols-12 gap-4 md:gap-6">
              {images[7] && (
                <AnimatedSection className="col-span-6 lg:col-span-3" delay={400}>
                  <div className="relative overflow-hidden group cursor-pointer">
                    <div className="aspect-[4/3]">
                      <img loading="lazy"
                        src={images[7].src}
                        alt={images[7].alt}
                        className="w-full h-full object-cover transition-all duration-[1.2s] ease-out group-hover:scale-[1.03]"
                      />
                    </div>
                    <div className="absolute inset-0 bg-foreground/30 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  </div>
                </AnimatedSection>
              )}

              {images[8] && (
                <AnimatedSection className="col-span-6 lg:col-span-3" delay={450}>
                  <div className="relative overflow-hidden group cursor-pointer">
                    <div className="aspect-[4/3]">
                      <img loading="lazy"
                        src={images[8].src}
                        alt={images[8].alt}
                        className="w-full h-full object-cover transition-all duration-[1.2s] ease-out group-hover:scale-[1.03]"
                      />
                    </div>
                    <div className="absolute inset-0 bg-foreground/30 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  </div>
                </AnimatedSection>
              )}

              {images[9] && (
                <AnimatedSection className="col-span-6 lg:col-span-3" delay={500}>
                  <div className="relative overflow-hidden group cursor-pointer">
                    <div className="aspect-[4/3]">
                      <img loading="lazy"
                        src={images[9].src}
                        alt={images[9].alt}
                        className="w-full h-full object-cover transition-all duration-[1.2s] ease-out group-hover:scale-[1.03]"
                      />
                    </div>
                    <div className="absolute inset-0 bg-foreground/30 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  </div>
                </AnimatedSection>
              )}

              {images[10] && (
                <AnimatedSection className="col-span-6 lg:col-span-3" delay={550}>
                  <div className="relative overflow-hidden group cursor-pointer">
                    <div className="aspect-[4/3]">
                      <img loading="lazy"
                        src={images[10].src}
                        alt={images[10].alt}
                        className="w-full h-full object-cover transition-all duration-[1.2s] ease-out group-hover:scale-[1.03]"
                      />
                    </div>
                    <div className="absolute inset-0 bg-foreground/30 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  </div>
                </AnimatedSection>
              )}
            </div>
          )}
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
