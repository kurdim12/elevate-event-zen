import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import heroImage from "@/assets/hero-main.jpg";

export function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 150);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative h-screen flex items-end overflow-hidden">
      {/* Background Image with subtle Ken Burns */}
      <div className="absolute inset-0">
        <div 
          className={`w-full h-full transition-transform duration-[25s] ease-out ${
            isLoaded ? "scale-[1.03]" : "scale-100"
          }`}
        >
          <img
            src={heroImage}
            alt="Luxury gala event"
            className="w-full h-full object-cover"
          />
        </div>
        {/* Refined gradient - cinematic, not heavy */}
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-foreground/5 to-foreground/10" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full pb-16 md:pb-20 lg:pb-24">
        <div className="container-wide">
          <div className="max-w-2xl">
            {/* Minimal label */}
            <p 
              className={`text-[11px] tracking-[0.25em] text-background/40 uppercase mb-6 transition-all duration-1000 ${
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
              }`}
            >
              Luxury Events · Jordan & Beyond
            </p>
            
            {/* Confident, editorial headline */}
            <h1 
              className={`font-serif text-[2.5rem] md:text-5xl lg:text-6xl font-medium text-background leading-[1.08] tracking-[-0.02em] mb-8 transition-all duration-1000 delay-150 ${
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              Moments that
              <br />
              <span className="italic text-background/85">define legacy</span>
            </h1>
            
            {/* Single CTA */}
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
    </section>
  );
}
