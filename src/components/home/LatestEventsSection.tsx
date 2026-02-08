import { useRef } from "react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ChevronLeft, ChevronRight } from "lucide-react";

const events = [
  {
    id: 1,
    title: "TEDxAmman — Largest in MENA",
    category: "Conference & Show",
    location: "Amman, Jordan",
    image: "/images/landing/lp-tedx-guitarist.jpg",
  },
  {
    id: 2,
    title: "MICE Gala Dinner at the Citadel",
    category: "MICE Event",
    location: "Amman Citadel, Jordan",
    image: "/images/landing/lp-gala-tables.jpg",
  },
  {
    id: 3,
    title: "Dead Sea Kempinski Wedding",
    category: "Destination Wedding",
    location: "Dead Sea, Jordan",
    image: "/images/weddings/kempinski-dead-sea-1.jpg",
  },
  {
    id: 4,
    title: "Luxury Henna Night",
    category: "Wedding",
    location: "Amman Citadel, Jordan",
    image: "/images/landing/lp-red-florals.jpg",
  },
  {
    id: 5,
    title: "Brand Hospitality Event",
    category: "VIP Hospitality",
    location: "Amman, Jordan",
    image: "/images/landing/lp-hospitality.jpg",
  },
  {
    id: 6,
    title: "Fas Meknas Cultural Show",
    category: "Entertainment",
    location: "Amman, Jordan",
    image: "/images/landing/lp-cultural-wedding.jpg",
  },
  {
    id: 7,
    title: "Citadel Pomegranate Wedding",
    category: "Destination Wedding",
    location: "Amman Citadel, Jordan",
    image: "/images/landing/lp-red-roses.jpg",
  },
  {
    id: 8,
    title: "TEDxAmman Gala Dinner",
    category: "Gala Dinner",
    location: "Amman, Jordan",
    image: "/images/landing/lp-tedx-stage.jpg",
  },
  {
    id: 9,
    title: "Waqf Thareed Campaign",
    category: "Campaign Management",
    location: "Amman, Jordan",
    image: "/images/landing/lp-bedouin-stall.jpg",
  },
  {
    id: 10,
    title: "TEDxAmman Live Performance",
    category: "Entertainment",
    location: "Amman, Jordan",
    image: "/images/landing/lp-tedx-singer.jpg",
  },
  {
    id: 11,
    title: "Citadel Vanilla Lime Wedding",
    category: "Destination Wedding",
    location: "Amman Citadel, Jordan",
    image: "/images/landing/lp-plate-detail.jpg",
  },
  {
    id: 12,
    title: "Private Villa — Katb Ktab",
    category: "Wedding",
    location: "Amman, Jordan",
    image: "/images/landing/lp-wedding-sign.jpg",
  },
  {
    id: 13,
    title: "Luxury Brand Launch at the Citadel",
    category: "Brand Activation",
    location: "Amman Citadel, Jordan",
    image: "/images/landing/lp-supercar-citadel.jpg",
  },
  {
    id: 14,
    title: "Red Bull Music Night",
    category: "Brand Activation",
    location: "Amman, Jordan",
    image: "/images/landing/lp-dj-night.jpg",
  },
  {
    id: 15,
    title: "TEDxAmman Stage Production",
    category: "Conference & Show",
    location: "Amman, Jordan",
    image: "/images/landing/lp-stage-backlit.jpg",
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
                <img loading="lazy"
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
