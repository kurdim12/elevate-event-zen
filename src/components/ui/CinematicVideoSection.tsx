import { AnimatedSection } from "@/components/ui/AnimatedSection";

interface CinematicVideoSectionProps {
  videoId: string;
  title: string;
  subtitle?: string;
  caption?: string;
}

export function CinematicVideoSection({
  videoId,
  title,
  subtitle,
  caption,
}: CinematicVideoSectionProps) {
  return (
    <section className="py-24 md:py-32 bg-foreground overflow-hidden">
      <div className="container-wide">
        <AnimatedSection>
          <div className="mb-10 md:mb-14">
            {subtitle && (
              <p className="text-[10px] tracking-[0.3em] text-background/40 uppercase block mb-4">
                {subtitle}
              </p>
            )}
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-background tracking-[-0.02em]">
              {title}
            </h2>
            {caption && (
              <p className="mt-4 text-[15px] text-background/50 max-w-2xl leading-relaxed">
                {caption}
              </p>
            )}
          </div>
        </AnimatedSection>

        <AnimatedSection delay={150}>
          <div className="relative w-full aspect-video overflow-hidden bg-foreground/80">
            <iframe
              src={`https://www.youtube.com/embed/${videoId}?autoplay=0&rel=0&modestbranding=1`}
              title={title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            />
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
