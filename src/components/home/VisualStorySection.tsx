import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-event.jpg";
import brandImage from "@/assets/brand-activation.jpg";

const stories = [
  {
    image: heroImage,
    title: "The Amman Gala",
    caption: "An evening where heritage met contemporary elegance—450 guests, one unforgettable night.",
    category: "Corporate",
    year: "2024"
  },
  {
    image: brandImage,
    title: "Desert Unveiled",
    caption: "A luxury automotive reveal under Wadi Rum's infinite sky.",
    category: "Brand Activation",
    year: "2024"
  },
];

export function VisualStorySection() {
  return (
    <section className="bg-background">
      {/* Full-width editorial image */}
      <AnimatedSection>
        <div className="relative h-[60vh] md:h-[70vh] overflow-hidden">
          <img
            src={stories[0].image}
            alt={stories[0].title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 via-transparent to-transparent" />
        </div>
      </AnimatedSection>

      {/* Caption - Editorial style with context */}
      <div className="container-wide py-12 md:py-16">
        <AnimatedSection>
          <div className="grid grid-cols-12 gap-8 items-end">
            <div className="col-span-12 md:col-span-2">
              <p className="text-xs tracking-[0.2em] text-muted-foreground/40 uppercase">
                {stories[0].category} · {stories[0].year}
              </p>
            </div>
            <div className="col-span-12 md:col-span-6">
              <h3 className="font-serif text-xl md:text-2xl text-foreground mb-2">
                {stories[0].title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {stories[0].caption}
              </p>
            </div>
            <div className="col-span-12 md:col-span-4 flex md:justify-end">
              <Link 
                to="/work" 
                className="inline-flex items-center text-sm tracking-[0.15em] text-muted-foreground/60 uppercase hover:text-foreground transition-colors duration-500 group"
              >
                <span className="mr-4">View all work</span>
                <span className="w-6 h-px bg-muted-foreground/30 group-hover:w-12 group-hover:bg-foreground transition-all duration-500" />
              </Link>
            </div>
          </div>
        </AnimatedSection>
      </div>

      {/* Second story - smaller, offset */}
      <div className="container-wide pb-20 md:pb-28">
        <AnimatedSection delay={100}>
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 md:col-span-7 md:col-start-5">
              <div className="relative aspect-[16/10] overflow-hidden mb-6">
                <img
                  src={stories[1].image}
                  alt={stories[1].title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-xs tracking-[0.2em] text-muted-foreground/40 uppercase mb-2">
                    {stories[1].category} · {stories[1].year}
                  </p>
                  <h3 className="font-serif text-lg text-foreground">
                    {stories[1].title}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    {stories[1].caption}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
