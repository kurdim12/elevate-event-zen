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
        <div className="relative h-[55vh] md:h-[65vh] overflow-hidden">
          <img
            src={stories[0].image}
            alt={stories[0].title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/35 via-transparent to-transparent" />
        </div>
      </AnimatedSection>

      {/* Caption */}
      <div className="container-wide py-10 md:py-12">
        <AnimatedSection>
          <div className="grid grid-cols-12 gap-6 items-end">
            <div className="col-span-12 md:col-span-2">
              <p className="text-[11px] tracking-[0.18em] text-muted-foreground/40 uppercase">
                {stories[0].category} · {stories[0].year}
              </p>
            </div>
            <div className="col-span-12 md:col-span-6">
              <h3 className="font-serif text-lg md:text-xl text-foreground mb-1.5 tracking-[-0.01em]">
                {stories[0].title}
              </h3>
              <p className="text-[14px] text-muted-foreground/70 leading-relaxed">
                {stories[0].caption}
              </p>
            </div>
            <div className="col-span-12 md:col-span-4 flex md:justify-end">
              <Link 
                to="/work" 
                className="inline-flex items-center text-[13px] tracking-[0.15em] text-muted-foreground/50 uppercase hover:text-foreground transition-colors duration-500 group"
              >
                <span className="mr-3">View all work</span>
                <span className="w-5 h-px bg-muted-foreground/25 group-hover:w-10 group-hover:bg-foreground transition-all duration-600" />
              </Link>
            </div>
          </div>
        </AnimatedSection>
      </div>

      {/* Second story - offset */}
      <div className="container-wide pb-16 md:pb-20">
        <AnimatedSection delay={100}>
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 md:col-span-7 md:col-start-5">
              <div className="relative aspect-[16/10] overflow-hidden mb-5">
                <img
                  src={stories[1].image}
                  alt={stories[1].title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex justify-between items-start gap-4">
                <div>
                  <p className="text-[11px] tracking-[0.18em] text-muted-foreground/40 uppercase mb-1.5">
                    {stories[1].category} · {stories[1].year}
                  </p>
                  <h3 className="font-serif text-base md:text-lg text-foreground tracking-[-0.01em]">
                    {stories[1].title}
                  </h3>
                  <p className="text-[13px] text-muted-foreground/60 mt-1">
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
