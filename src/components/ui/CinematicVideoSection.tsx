import { useState } from "react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Play, X } from "lucide-react";

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
  caption 
}: CinematicVideoSectionProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  const openVideo = () => {
    setIsPlaying(true);
    document.body.style.overflow = "hidden";
  };

  const closeVideo = () => {
    setIsPlaying(false);
    document.body.style.overflow = "";
  };

  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

  return (
    <>
      <section className="relative bg-foreground overflow-hidden">
        {/* Full-width cinematic video thumbnail */}
        <div className="relative">
          <AnimatedSection>
            <button
              onClick={openVideo}
              className="group relative w-full cursor-pointer block"
              aria-label={`Play video: ${title}`}
            >
              {/* Thumbnail with aspect ratio */}
              <div className="relative aspect-[21/9] md:aspect-[2.4/1] overflow-hidden">
                <img
                  src={thumbnailUrl}
                  alt={title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                {/* Gradient overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-foreground via-foreground/20 to-foreground/40" />
                <div className="absolute inset-0 bg-foreground/10 group-hover:bg-foreground/0 transition-colors duration-700" />
              </div>

              {/* Centered play button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  {/* Outer ring animation */}
                  <div className="absolute inset-0 w-24 h-24 md:w-32 md:h-32 rounded-full border border-background/20 group-hover:scale-125 group-hover:opacity-0 transition-all duration-700" />
                  {/* Play button */}
                  <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-background/10 backdrop-blur-md border border-background/30 flex items-center justify-center group-hover:bg-background/20 group-hover:scale-110 transition-all duration-500">
                    <Play 
                      className="w-8 h-8 md:w-10 md:h-10 text-background ml-1" 
                      fill="currentColor" 
                      strokeWidth={0}
                    />
                  </div>
                </div>
              </div>

              {/* Bottom content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12 lg:p-16">
                <div className="container-wide">
                  <div className="max-w-2xl">
                    {subtitle && (
                      <span className="text-[10px] md:text-[11px] tracking-[0.25em] text-background/40 uppercase block mb-3">
                        {subtitle}
                      </span>
                    )}
                    <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-medium text-background leading-tight tracking-[-0.02em]">
                      {title}
                    </h2>
                    {caption && (
                      <p className="mt-4 text-[14px] md:text-[15px] text-background/50 max-w-lg leading-relaxed">
                        {caption}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* Watch indicator */}
              <div className="absolute bottom-6 right-6 md:bottom-12 md:right-12 lg:bottom-16 lg:right-16">
                <div className="flex items-center gap-3 opacity-60 group-hover:opacity-100 transition-opacity duration-500">
                  <span className="text-[11px] tracking-[0.15em] text-background/70 uppercase hidden md:block">
                    Watch Film
                  </span>
                  <span className="w-8 md:w-12 h-px bg-background/30 group-hover:w-16 transition-all duration-500" />
                </div>
              </div>
            </button>
          </AnimatedSection>
        </div>
      </section>

      {/* Fullscreen Video Modal */}
      {isPlaying && (
        <div
          className="fixed inset-0 z-50 bg-foreground flex items-center justify-center"
          onClick={closeVideo}
        >
          {/* Close button */}
          <button
            onClick={closeVideo}
            className="absolute top-6 right-6 md:top-10 md:right-10 z-10 w-12 h-12 rounded-full bg-background/5 hover:bg-background/15 border border-background/20 flex items-center justify-center transition-all duration-300 group"
            aria-label="Close video"
          >
            <X className="w-5 h-5 text-background/70 group-hover:text-background transition-colors" />
          </button>

          {/* Video container */}
          <div
            className="relative w-full max-w-6xl mx-4 md:mx-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-video">
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1&playsinline=1`}
                title={title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
