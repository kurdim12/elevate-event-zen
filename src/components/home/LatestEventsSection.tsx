import { useRef } from "react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ChevronLeft, ChevronRight } from "lucide-react";
import corporateImage from "@/assets/corporate-event.jpg";
import weddingImage from "@/assets/wedding-event.jpg";
import destinationImage from "@/assets/destination-event.jpg";
import heroImage from "@/assets/hero-event.jpg";
import brandImage from "@/assets/brand-activation.jpg";

const events = [
  {
    id: 1,
    title: "Royal Gala Dinner",
    category: "Corporate",
    location: "Amman, Jordan",
    image: corporateImage,
  },
  {
    id: 2,
    title: "Petra Destination Wedding",
    category: "Wedding",
    location: "Petra, Jordan",
    image: weddingImage,
  },
  {
    id: 3,
    title: "Annual Conference",
    category: "Corporate",
    location: "Dubai, UAE",
    image: heroImage,
  },
  {
    id: 4,
    title: "Brand Launch Experience",
    category: "Activation",
    location: "Cairo, Egypt",
    image: brandImage,
  },
  {
    id: 5,
    title: "Wadi Rum Retreat",
    category: "Corporate",
    location: "Wadi Rum, Jordan",
    image: destinationImage,
  },
];

export function LatestEventsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 400;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="py-28 md:py-36 lg:py-44 bg-background overflow-hidden">
      <div className="container-wide">
        <AnimatedSection>
          <div className="flex items-end justify-between mb-12 md:mb-16">
            <div>
              <p className="label-uppercase mb-4">Portfolio</p>
              <h2 className="heading-xl">
                Latest <span className="italic">Events</span>
              </h2>
            </div>
            
            {/* Navigation arrows - desktop only */}
            <div className="hidden md:flex items-center gap-3">
              <button
                onClick={() => scroll("left")}
                className="w-12 h-12 border border-border/50 flex items-center justify-center hover:border-primary hover:text-primary transition-all duration-500"
                aria-label="Scroll left"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => scroll("right")}
                className="w-12 h-12 border border-border/50 flex items-center justify-center hover:border-primary hover:text-primary transition-all duration-500"
                aria-label="Scroll right"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </AnimatedSection>
      </div>

      {/* Horizontal scroll container */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto scrollbar-hide px-6 md:px-8 lg:px-12 pb-4 snap-x snap-mandatory"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        {/* Left spacer for alignment with container */}
        <div className="flex-shrink-0 w-[calc((100vw-1200px)/2-24px)] hidden xl:block" />
        
        {events.map((event, index) => (
          <AnimatedSection key={event.id} delay={index * 100}>
            <div className="flex-shrink-0 w-[320px] md:w-[380px] snap-start group cursor-pointer">
              <div className="aspect-[4/5] overflow-hidden mb-5 relative">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                />
                {/* Subtle overlay on hover */}
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors duration-700" />
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-3 text-[11px] tracking-[0.15em] text-muted-foreground/60 uppercase">
                  <span>{event.category}</span>
                  <span className="w-1 h-1 rounded-full bg-muted-foreground/30" />
                  <span>{event.location}</span>
                </div>
                <h3 className="font-serif text-lg md:text-xl font-medium group-hover:text-primary transition-colors duration-500">
                  {event.title}
                </h3>
              </div>
            </div>
          </AnimatedSection>
        ))}
        
        {/* Right spacer */}
        <div className="flex-shrink-0 w-6 md:w-8 lg:w-12" />
      </div>

      {/* Mobile swipe hint */}
      <div className="md:hidden mt-8 text-center">
        <p className="text-[11px] tracking-[0.15em] text-muted-foreground/40 uppercase">
          Swipe to explore
        </p>
      </div>
    </section>
  );
}
