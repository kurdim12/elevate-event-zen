import { useState } from "react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Play, X } from "lucide-react";

interface FeaturedVideo {
  id: string;
  title: string;
  subtitle: string;
}

const featuredVideos: FeaturedVideo[] = [
  {
    id: "-8eRhlfX-XU",
    title: "Heritage & Elegance",
    subtitle: "A Destination Wedding Film",
  },
  {
    id: "6OV2tXmqKzU",
    title: "Timeless Celebrations",
    subtitle: "Corporate Excellence",
  },
  {
    id: "4l0RNKhy_hU",
    title: "Unforgettable Moments",
    subtitle: "Luxury Events",
  },
];

export function FeaturedFilmsSection() {
  const [activeVideo, setActiveVideo] = useState<FeaturedVideo | null>(null);

  const openVideo = (video: FeaturedVideo) => {
    setActiveVideo(video);
    document.body.style.overflow = "hidden";
  };

  const closeVideo = () => {
    setActiveVideo(null);
    document.body.style.overflow = "";
  };

  return (
    <>
      <section className="relative bg-foreground py-24 md:py-32 overflow-hidden">
        {/* Background texture */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="container-wide relative">
          {/* Section Header */}
          <AnimatedSection>
            <div className="text-center mb-16 md:mb-24">
              <span className="text-[10px] tracking-[0.3em] text-background/30 uppercase block mb-5">
                Our Films
              </span>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-medium text-background tracking-[-0.02em] max-w-3xl mx-auto leading-[1.15]">
                Stories Worth Telling
              </h2>
              <p className="mt-6 text-[15px] text-background/40 max-w-lg mx-auto leading-relaxed">
                Every event we create becomes a cinematic experience. Watch the moments unfold.
              </p>
            </div>
          </AnimatedSection>

          {/* Featured Video - Hero Size */}
          <AnimatedSection delay={100}>
            <div className="mb-6 md:mb-8">
              <button
                onClick={() => openVideo(featuredVideos[0])}
                className="group relative w-full cursor-pointer block overflow-hidden"
                aria-label={`Play video: ${featuredVideos[0].title}`}
              >
                {/* Thumbnail with cinematic aspect ratio */}
                <div className="relative aspect-[21/9] overflow-hidden">
                  <img
                    src={`https://img.youtube.com/vi/${featuredVideos[0].id}/maxresdefault.jpg`}
                    alt={featuredVideos[0].title}
                    className="w-full h-full object-cover transition-all duration-[1.5s] ease-out group-hover:scale-[1.03]"
                  />
                  {/* Gradient overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground via-foreground/20 to-foreground/30" />
                  <div className="absolute inset-0 bg-foreground/10 group-hover:bg-foreground/0 transition-colors duration-1000" />
                </div>

                {/* Centered play button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    {/* Outer ring animation */}
                    <div className="absolute inset-0 w-20 h-20 md:w-28 md:h-28 rounded-full border border-background/20 group-hover:scale-150 group-hover:opacity-0 transition-all duration-1000" />
                    {/* Play button */}
                    <div className="w-20 h-20 md:w-28 md:h-28 rounded-full bg-background/10 backdrop-blur-md border border-background/30 flex items-center justify-center group-hover:bg-background/20 group-hover:scale-110 transition-all duration-700">
                      <Play 
                        className="w-7 h-7 md:w-9 md:h-9 text-background ml-1" 
                        fill="currentColor" 
                        strokeWidth={0}
                      />
                    </div>
                  </div>
                </div>

                {/* Bottom content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 lg:p-12">
                  <div className="max-w-2xl">
                    <span className="text-[10px] md:text-[11px] tracking-[0.25em] text-background/40 uppercase block mb-3">
                      {featuredVideos[0].subtitle}
                    </span>
                    <h3 className="font-serif text-xl md:text-2xl lg:text-3xl font-medium text-background leading-tight">
                      {featuredVideos[0].title}
                    </h3>
                  </div>
                </div>

                {/* Corner accent */}
                <div className="absolute top-6 right-6 md:top-10 md:right-10 w-10 h-10 border-t border-r border-background/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              </button>
            </div>
          </AnimatedSection>

          {/* Secondary Videos - Side by Side */}
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {featuredVideos.slice(1).map((video, index) => (
              <AnimatedSection key={video.id} delay={200 + index * 100}>
                <button
                  onClick={() => openVideo(video)}
                  className="group relative w-full cursor-pointer block overflow-hidden"
                  aria-label={`Play video: ${video.title}`}
                >
                  {/* Thumbnail */}
                  <div className="relative aspect-video overflow-hidden">
                    <img
                      src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`}
                      alt={video.title}
                      className="w-full h-full object-cover transition-all duration-[1.2s] ease-out group-hover:scale-[1.03]"
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/20 to-foreground/10" />
                    <div className="absolute inset-0 bg-foreground/10 group-hover:bg-foreground/0 transition-colors duration-700" />
                  </div>

                  {/* Play button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-background/10 backdrop-blur-md border border-background/30 flex items-center justify-center group-hover:bg-background/20 group-hover:scale-110 transition-all duration-500">
                      <Play 
                        className="w-5 h-5 md:w-6 md:h-6 text-background ml-0.5" 
                        fill="currentColor" 
                        strokeWidth={0}
                      />
                    </div>
                  </div>

                  {/* Caption */}
                  <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
                    <span className="text-[10px] tracking-[0.2em] text-background/40 uppercase block mb-2">
                      {video.subtitle}
                    </span>
                    <h3 className="font-serif text-lg md:text-xl text-background font-medium">
                      {video.title}
                    </h3>
                  </div>

                  {/* Hover line accent */}
                  <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-primary/0 group-hover:bg-primary/60 transition-colors duration-700" />
                </button>
              </AnimatedSection>
            ))}
          </div>

          {/* View all link */}
          <AnimatedSection delay={400}>
            <div className="mt-12 md:mt-16 text-center">
              <a
                href="https://www.youtube.com/@MaraNasiForEvents"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-4 text-[11px] tracking-[0.2em] text-background/40 uppercase hover:text-background/70 transition-colors duration-500 group"
              >
                <span className="w-8 h-px bg-background/20 group-hover:w-12 group-hover:bg-background/40 transition-all duration-500" />
                <span>Watch More on YouTube</span>
                <span className="w-8 h-px bg-background/20 group-hover:w-12 group-hover:bg-background/40 transition-all duration-500" />
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Fullscreen Video Modal */}
      {activeVideo && (
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
                src={`https://www.youtube-nocookie.com/embed/${activeVideo.id}?autoplay=1&rel=0&modestbranding=1&playsinline=1`}
                title={activeVideo.title}
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
