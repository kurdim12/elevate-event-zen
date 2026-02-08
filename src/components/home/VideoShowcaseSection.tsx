import { useState } from "react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Play, X } from "lucide-react";

interface VideoItem {
  id: string;
  title: string;
  category: string;
  thumbnail: string;
  isShort?: boolean;
}

const videos: VideoItem[] = [
  {
    id: "l5N0SGYhyWI",
    title: "Waqf Thareed Charity Event",
    category: "Corporate",
    thumbnail: "https://img.youtube.com/vi/l5N0SGYhyWI/maxresdefault.jpg",
  },
  {
    id: "TJjQPwqN8yw",
    title: "Pre-Wedding Video Ideas",
    category: "Weddings",
    thumbnail: "https://img.youtube.com/vi/TJjQPwqN8yw/maxresdefault.jpg",
    isShort: true,
  },
  {
    id: "NOwJEWcschc",
    title: "Engagement Tips",
    category: "Weddings",
    thumbnail: "https://img.youtube.com/vi/NOwJEWcschc/maxresdefault.jpg",
    isShort: true,
  },
];

export function VideoShowcaseSection() {
  const [activeVideo, setActiveVideo] = useState<VideoItem | null>(null);

  const openVideo = (video: VideoItem) => {
    setActiveVideo(video);
    document.body.style.overflow = "hidden";
  };

  const closeVideo = () => {
    setActiveVideo(null);
    document.body.style.overflow = "";
  };

  const featuredVideo = videos[0];
  const secondaryVideos = videos.slice(1);

  return (
    <>
      <section className="bg-background py-20 md:py-28">
        <div className="container-wide">
          {/* Section Header */}
          <AnimatedSection>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 md:mb-16">
              <div>
                <span className="text-[11px] tracking-[0.2em] text-muted-foreground/60 uppercase mb-4 block">
                  Behind the Scenes
                </span>
                <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-medium text-foreground leading-tight max-w-xl">
                  See Our Events in Motion
                </h2>
              </div>
              <a
                href="https://www.youtube.com/@MaraNasiForEvents"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-[13px] tracking-[0.12em] text-muted-foreground/60 uppercase hover:text-foreground transition-colors duration-500 group"
              >
                <span className="mr-3">View all videos</span>
                <span className="w-5 h-px bg-muted-foreground/30 group-hover:w-10 group-hover:bg-foreground transition-all duration-600" />
              </a>
            </div>
          </AnimatedSection>

          {/* Video Grid */}
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
            {/* Featured Video - Large */}
            <AnimatedSection delay={100}>
              <button
                onClick={() => openVideo(featuredVideo)}
                className="group relative w-full aspect-video overflow-hidden bg-muted cursor-pointer text-left"
              >
                <img loading="lazy"
                  src={featuredVideo.thumbnail}
                  alt={featuredVideo.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-foreground/20 group-hover:bg-foreground/30 transition-colors duration-500" />
                
                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-background/90 backdrop-blur-sm flex items-center justify-center transition-transform duration-500 group-hover:scale-110">
                    <Play className="w-6 h-6 md:w-8 md:h-8 text-foreground ml-1" fill="currentColor" />
                  </div>
                </div>

                {/* Caption */}
                <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
                  <span className="text-[10px] tracking-[0.18em] text-background/60 uppercase block mb-1.5">
                    {featuredVideo.category}
                  </span>
                  <h3 className="font-serif text-lg md:text-xl text-background font-medium">
                    {featuredVideo.title}
                  </h3>
                </div>
              </button>
            </AnimatedSection>

            {/* Secondary Videos - Stacked */}
            <div className="grid gap-6">
              {secondaryVideos.map((video, index) => (
                <AnimatedSection key={video.id} delay={200 + index * 100}>
                  <button
                    onClick={() => openVideo(video)}
                    className="group relative w-full aspect-[16/9] overflow-hidden bg-muted cursor-pointer text-left"
                  >
                    <img loading="lazy"
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-foreground/20 group-hover:bg-foreground/30 transition-colors duration-500" />
                    
                    {/* Play Button */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-background/90 backdrop-blur-sm flex items-center justify-center transition-transform duration-500 group-hover:scale-110">
                        <Play className="w-5 h-5 md:w-6 md:h-6 text-foreground ml-0.5" fill="currentColor" />
                      </div>
                    </div>

                    {/* Caption */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5">
                      <span className="text-[10px] tracking-[0.18em] text-background/60 uppercase block mb-1">
                        {video.category} {video.isShort && "· Short"}
                      </span>
                      <h3 className="font-serif text-base md:text-lg text-background font-medium">
                        {video.title}
                      </h3>
                    </div>
                  </button>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {activeVideo && (
        <div
          className="fixed inset-0 z-50 bg-foreground/95 backdrop-blur-sm flex items-center justify-center p-4 md:p-8"
          onClick={closeVideo}
        >
          <button
            onClick={closeVideo}
            className="absolute top-4 right-4 md:top-8 md:right-8 w-10 h-10 rounded-full bg-background/10 hover:bg-background/20 flex items-center justify-center transition-colors z-10"
            aria-label="Close video"
          >
            <X className="w-5 h-5 text-background" />
          </button>

          <div
            className="relative w-full max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className={`relative ${activeVideo.isShort ? "aspect-[9/16] max-w-sm mx-auto" : "aspect-video"}`}>
              <iframe
                src={`https://www.youtube.com/embed/${activeVideo.id}?autoplay=1&rel=0`}
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
