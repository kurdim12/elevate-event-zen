import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-event.jpg";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Luxury gala event with elegant table settings"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/40 via-foreground/30 to-foreground/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-wide text-center text-background">
        <div className="max-w-4xl mx-auto">
          <p className="label-uppercase mb-6 text-background/80 animate-fade-in">
            Luxury Event Planning & Production
          </p>
          
          <h1 className="heading-display mb-8 text-background animate-fade-in-up">
            Crafting Extraordinary
            <br />
            <span className="italic">Experiences</span>
          </h1>
          
          <p className="body-lg text-background/85 max-w-2xl mx-auto mb-12 animate-fade-in opacity-0" style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}>
            Jordan's premier event studio, delivering world-class corporate events, 
            luxury weddings, and unforgettable brand experiences across the MENA region.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in opacity-0" style={{ animationDelay: "0.5s", animationFillMode: "forwards" }}>
            <Link to="/contact" className="btn-gold">
              Plan Your Event
            </Link>
            <Link 
              to="/services" 
              className="inline-flex items-center justify-center px-8 py-4 border border-background/40 text-background text-sm font-medium uppercase tracking-[0.15em] transition-all duration-300 hover:bg-background/10"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-background/40 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-background/60 rounded-full" />
        </div>
      </div>
    </section>
  );
}
