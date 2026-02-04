import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import heroImage from "@/assets/hero-event.jpg";

export function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative h-screen flex items-end overflow-hidden">
      {/* Background Image with Ken Burns effect */}
      <div className="absolute inset-0">
        <div 
          className={`w-full h-full transition-transform duration-[20s] ease-out ${
            isLoaded ? "scale-105" : "scale-100"
          }`}
        >
          <img
            src={heroImage}
            alt="Luxury gala event"
            className="w-full h-full object-cover"
          />
        </div>
        {/* Refined gradient - less heavy, more cinematic */}
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/10 to-transparent" />
      </div>

      {/* Content - Bottom aligned, asymmetric */}
      <div className="relative z-10 w-full pb-20 md:pb-28 lg:pb-32">
        <div className="container-wide">
          <div className="max-w-3xl">
            {/* Minimal label */}
            <p 
              className={`text-xs tracking-[0.3em] text-background/50 uppercase mb-8 transition-all duration-1000 ${
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              Luxury Events · Jordan & Beyond
            </p>
            
            {/* Confident, editorial headline */}
            <h1 
              className={`font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium text-background leading-[1.1] mb-10 transition-all duration-1000 delay-200 ${
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              Moments that
              <br />
              <span className="italic text-background/90">define legacy</span>
            </h1>
            
            {/* Single, confident CTA */}
            <div 
              className={`transition-all duration-1000 delay-500 ${
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <Link 
                to="/contact" 
                className="inline-flex items-center text-sm tracking-[0.2em] text-background/80 uppercase hover:text-background transition-colors duration-500 group"
              >
                <span className="mr-4">Begin your story</span>
                <span className="w-12 h-px bg-background/40 group-hover:w-20 group-hover:bg-background transition-all duration-500" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
