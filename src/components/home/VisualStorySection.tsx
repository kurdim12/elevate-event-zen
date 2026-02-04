import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-event.jpg";

export function VisualStorySection() {
  return (
    <section className="bg-background">
      {/* Full-width editorial image */}
      <AnimatedSection>
        <div className="relative h-[70vh] md:h-[80vh] overflow-hidden">
          <img
            src={heroImage}
            alt="A celebration of elegance"
            className="w-full h-full object-cover"
          />
          {/* Subtle vignette */}
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 via-transparent to-transparent" />
        </div>
      </AnimatedSection>

      {/* Caption - Editorial style */}
      <div className="container-wide py-16 md:py-20">
        <AnimatedSection>
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 md:col-span-8 lg:col-span-6">
              <p className="text-xs tracking-[0.3em] text-muted-foreground/60 uppercase mb-4">
                Featured · Corporate Gala
              </p>
              <p className="font-serif text-xl md:text-2xl lg:text-3xl font-normal leading-relaxed text-foreground/80 italic">
                "A celebration of elegance at the Four Seasons Amman—
                where vision became reality."
              </p>
            </div>
            <div className="col-span-12 md:col-span-4 lg:col-span-6 flex md:justify-end md:items-end">
              <Link 
                to="/work" 
                className="inline-flex items-center text-sm tracking-[0.2em] text-muted-foreground uppercase hover:text-foreground transition-colors duration-500 group"
              >
                <span className="mr-4">View portfolio</span>
                <span className="w-8 h-px bg-muted-foreground/30 group-hover:w-16 group-hover:bg-foreground transition-all duration-500" />
              </Link>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
