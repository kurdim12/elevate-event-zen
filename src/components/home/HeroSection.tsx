import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const heroItems = [
  { type: "youtube" as const, id: "iHFzJBF8t30" },
  { type: "image" as const, src: "/images/landing/lp-hero.jpg" },
  { type: "youtube" as const, id: "VISSs12n7-w" },
  { type: "image" as const, src: "/images/landing/lp-redbull-crowd.jpg" },
  { type: "youtube" as const, id: "HU0wV-E6mUw" },
];

const VIDEO_DURATION = 12000; // 12 seconds for YouTube clips
const PHOTO_DURATION = 6000;

export function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 150);
    return () => clearTimeout(timer);
  }, []);

  // Auto-advance based on content type
  useEffect(() => {
    const currentItem = heroItems[activeIndex];
    const duration = currentItem.type === "image" ? PHOTO_DURATION : VIDEO_DURATION;
    
    const timer = setTimeout(() => {
      setActiveIndex((prev) => (prev + 1) % heroItems.length);
    }, duration);
    
    return () => clearTimeout(timer);
  }, [activeIndex]);

  return (
    <section className="relative h-screen flex items-end overflow-hidden">
      {/* Background Items */}
      <div className="absolute inset-0">
        {heroItems.map((item, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              i === activeIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            {item.type === "youtube" ? (
              <div className="absolute inset-0 overflow-hidden">
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${item.id}?autoplay=1&mute=1&loop=1&playlist=${item.id}&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1&disablekb=1&fs=0&iv_load_policy=3`}
                  title="Hero video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[177.78vh] min-w-full h-[56.25vw] min-h-full pointer-events-none"
                  style={{ border: 'none' }}
                />
              </div>
            ) : (
              <img
                src={item.src}
                alt="MaraNasi luxury event"
                className="w-full h-full object-cover"
              />
            )}
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-foreground/5 to-foreground/10" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full pb-16 md:pb-20 lg:pb-24">
        <div className="container-wide">
          <div className="max-w-2xl">
            <p
              className={`text-[11px] tracking-[0.25em] text-background/40 uppercase mb-6 transition-all duration-1000 ${
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
              }`}
            >
              Luxury Events · Jordan & Beyond
            </p>

            <h1
              className={`font-serif text-[2.5rem] md:text-5xl lg:text-6xl font-medium text-background leading-[1.08] tracking-[-0.02em] mb-8 transition-all duration-1000 delay-150 ${
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              Moments that
              <br />
              <span className="italic text-background/85">define legacy</span>
            </h1>

            <div
              className={`transition-all duration-1000 delay-400 ${
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
              }`}
            >
              <Link
                to="/contact"
                className="inline-flex items-center text-[13px] tracking-[0.18em] text-background/60 uppercase hover:text-background/90 transition-colors duration-700 group"
              >
                <span className="mr-3">Begin your story</span>
                <span className="w-10 h-px bg-background/30 group-hover:w-16 group-hover:bg-background/60 transition-all duration-700" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-8 right-8 z-10 flex gap-2">
        {heroItems.map((_, i) => (
          <button
            key={i}
            onClick={() => setActiveIndex(i)}
            className={`h-1.5 rounded-full transition-all duration-500 ${
              i === activeIndex
                ? "bg-background/80 w-6"
                : "bg-background/30 w-1.5"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
