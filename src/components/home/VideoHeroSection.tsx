import { useState, useEffect } from "react";
import { Play, X } from "lucide-react";

interface VideoHeroProps {
  videoId: string;
}

export function VideoHeroSection({ videoId = "-8eRhlfX-XU" }: VideoHeroProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 150);
    return () => clearTimeout(timer);
  }, []);

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
      <section className="relative h-[70vh] md:h-[85vh] overflow-hidden bg-foreground">
        {/* Video Thumbnail Background */}
        <button
          onClick={openVideo}
          className="absolute inset-0 w-full h-full cursor-pointer group"
          aria-label="Play video"
        >
          {/* Thumbnail with Ken Burns effect */}
          <div 
            className={`absolute inset-0 transition-transform duration-[20s] ease-out ${
              isLoaded ? "scale-[1.05]" : "scale-100"
            }`}
          >
            <img
              src={thumbnailUrl}
              alt="Featured event film"
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Cinematic gradient overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-foreground via-foreground/30 to-foreground/40" />
          <div className="absolute inset-0 bg-foreground/20 group-hover:bg-foreground/10 transition-colors duration-1000" />
          
          {/* Vignette effect */}
          <div className="absolute inset-0" style={{
            background: "radial-gradient(ellipse at center, transparent 0%, rgba(0,0,0,0.3) 100%)"
          }} />

          {/* Center Play Button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative">
              {/* Outer pulse ring */}
              <div 
                className={`absolute inset-0 w-24 h-24 md:w-32 md:h-32 rounded-full border border-background/20 transition-all duration-1000 ${
                  isLoaded ? "scale-100 opacity-100" : "scale-75 opacity-0"
                } group-hover:scale-150 group-hover:opacity-0`} 
              />
              {/* Inner glow ring */}
              <div 
                className={`absolute inset-0 w-24 h-24 md:w-32 md:h-32 rounded-full bg-background/5 transition-all duration-700 delay-100 ${
                  isLoaded ? "scale-100 opacity-100" : "scale-90 opacity-0"
                } group-hover:scale-110 group-hover:bg-background/10`} 
              />
              {/* Play button */}
              <div 
                className={`relative w-24 h-24 md:w-32 md:h-32 rounded-full bg-background/10 backdrop-blur-md border border-background/30 flex items-center justify-center transition-all duration-700 ${
                  isLoaded ? "scale-100 opacity-100" : "scale-90 opacity-0"
                } group-hover:bg-background/20 group-hover:scale-110 group-hover:border-background/50`}
              >
                <Play 
                  className="w-8 h-8 md:w-10 md:h-10 text-background ml-1 transition-transform duration-500 group-hover:scale-110" 
                  fill="currentColor" 
                  strokeWidth={0}
                />
              </div>
            </div>
          </div>

          {/* Bottom text overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12 lg:p-16">
            <div className="container-wide">
              <div 
                className={`transition-all duration-1000 delay-300 ${
                  isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
              >
                <span className="text-[10px] md:text-[11px] tracking-[0.3em] text-background/40 uppercase block mb-3">
                  Watch Our Story
                </span>
                <p className="font-serif text-xl md:text-2xl lg:text-3xl font-medium text-background max-w-xl leading-[1.3]">
                  Where Every Detail Becomes
                  <span className="italic text-background/80"> Unforgettable</span>
                </p>
              </div>
            </div>
          </div>

          {/* Corner accents */}
          <div 
            className={`absolute top-8 left-8 md:top-12 md:left-12 w-12 h-12 border-t border-l border-background/10 transition-all duration-1000 delay-500 ${
              isLoaded ? "opacity-100" : "opacity-0"
            } group-hover:border-background/30 group-hover:w-16 group-hover:h-16`} 
          />
          <div 
            className={`absolute top-8 right-8 md:top-12 md:right-12 w-12 h-12 border-t border-r border-background/10 transition-all duration-1000 delay-500 ${
              isLoaded ? "opacity-100" : "opacity-0"
            } group-hover:border-background/30 group-hover:w-16 group-hover:h-16`} 
          />

          {/* Watch indicator */}
          <div 
            className={`absolute bottom-6 right-6 md:bottom-12 md:right-12 lg:bottom-16 lg:right-16 transition-all duration-1000 delay-400 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <div className="flex items-center gap-3 opacity-60 group-hover:opacity-100 transition-opacity duration-500">
              <span className="text-[11px] tracking-[0.15em] text-background/70 uppercase hidden md:block">
                Play Film
              </span>
              <span className="w-8 md:w-12 h-px bg-background/30 group-hover:w-16 transition-all duration-500" />
            </div>
          </div>
        </button>
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
                title="MaraNasi Events Film"
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
