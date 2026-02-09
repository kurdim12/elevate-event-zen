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

function GalleryItem({ image, aspect = "aspect-[4/3]", className = "", delay = 0, fill = false }: {
  image: GalleryImage;
  aspect?: string;
  className?: string;
  delay?: number;
  fill?: boolean;
}) {
  return (
    <AnimatedSection className={className} delay={delay}>
      <div className="relative overflow-hidden group cursor-pointer h-full">
        <div className={fill ? "lg:aspect-auto lg:h-full " + aspect : aspect}>
          <img
            loading="lazy"
            src={image.src}
            alt={image.alt}
            className="w-full h-full object-cover transition-all duration-[1.2s] ease-out group-hover:scale-[1.03]"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/50 via-foreground/0 to-foreground/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
        {image.caption && (
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
            <div className="transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700 ease-out">
              <span className="text-[11px] tracking-[0.2em] text-background/90 uppercase font-light">
                {image.caption}
              </span>
            </div>
          </div>
        )}
      </div>
    </AnimatedSection>
  );
}

export function EditorialGallery({ images, title = "Moments That Define Us" }: EditorialGalleryProps) {
  if (!images || images.length === 0) return null;

  // First 7 images use the editorial layout, remaining use a repeating 3-col grid
  const editorialImages = images.slice(0, 7);
  const extraImages = images.slice(7);

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

        <div className="space-y-4 md:space-y-6">
          {/* Row 1: Hero + Vertical */}
          {editorialImages[0] && (
            <div className="grid grid-cols-12 gap-4 md:gap-6">
              <GalleryItem image={editorialImages[0]} aspect="aspect-[4/3]" className="col-span-12 lg:col-span-7" />
              {editorialImages[1] && (
                <GalleryItem image={editorialImages[1]} aspect="aspect-[3/4]" className="col-span-12 lg:col-span-5" delay={100} fill />
              )}
            </div>
          )}

          {/* Row 2: Three equal */}
          {editorialImages[2] && (
            <div className="grid grid-cols-12 gap-4 md:gap-6">
              <GalleryItem image={editorialImages[2]} aspect="aspect-square" className="col-span-6 lg:col-span-4" delay={150} />
              {editorialImages[3] && (
                <GalleryItem image={editorialImages[3]} aspect="aspect-square" className="col-span-6 lg:col-span-4" delay={200} />
              )}
              {editorialImages[4] && (
                <GalleryItem image={editorialImages[4]} aspect="aspect-[16/9] lg:aspect-square" className="col-span-12 lg:col-span-4" delay={250} />
              )}
            </div>
          )}

          {/* Row 3: Portrait + Wide */}
          {editorialImages[5] && (
            <div className="grid grid-cols-12 gap-4 md:gap-6">
              <GalleryItem image={editorialImages[5]} aspect="aspect-[4/5]" className="col-span-12 lg:col-span-5" delay={300} />
              {editorialImages[6] && (
                <GalleryItem image={editorialImages[6]} aspect="aspect-[16/10]" className="col-span-12 lg:col-span-7" delay={350} fill />
              )}
            </div>
          )}

          {/* Extra images: repeating 3-column grid */}
          {extraImages.length > 0 && (
            <div className="grid grid-cols-12 gap-4 md:gap-6">
              {extraImages.map((image, i) => (
                <GalleryItem
                  key={image.src}
                  image={image}
                  aspect="aspect-[4/3]"
                  className="col-span-6 lg:col-span-4"
                  delay={400 + i * 50}
                />
              ))}
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
