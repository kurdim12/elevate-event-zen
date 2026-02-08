import { Link } from "react-router-dom";
import { useEffect, useState, useRef } from "react";

const heroItems = [
  { type: "video" as const, src: "/videos/hero-clip-1.mp4" },
  { type: "image" as const, src: "/images/landing/lp-hero.jpg" },
  { type: "video" as const, src: "/videos/hero-clip-2.mp4" },
  { type: "image" as const, src: "/images/landing/lp-redbull-crowd.jpg" },
  { type: "video" as const, src: "/videos/hero-clip-3.mp4" },
];

export function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 150);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % heroItems.length);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    videoRefs.current.forEach((video, i) => {
      if (!video) return;
      if (i === activeIndex) {
        video.currentTime = 0;
        video.play().catch(() => {});
      } else {
        video.pause();
      }
    });
  }, [activeIndex]);

  return (
    <section className="relative h-screen flex items-end overflow-hidden">
      {/* Background Items */}
      <div className="absolute inset-0">
        {heroItems.map((item, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-1500 ${
              i === activeIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            {item.type === "video" ? (
              <video
                ref={(el) => {
                  videoRefs.current[i] = el;
                }}
                src={item.src}
                muted
                playsInline
                className="w-full h-full object-cover"
              />
            ) : (
              <img
                src={item.src}
                alt="MaraNasi luxury event"
                className="w-full h-full object-cover"
              />
            )}
          </div>
        ))}
        {/* Gradient overlay */}
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
