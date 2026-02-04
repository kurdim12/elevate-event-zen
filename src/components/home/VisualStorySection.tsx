import { AnimatedSection } from "@/components/ui/AnimatedSection";

import heroImage from "@/assets/hero-event.jpg";
import weddingImage from "@/assets/wedding-event.jpg";
import destinationImage from "@/assets/destination-event.jpg";

const stories = [
  {
    image: heroImage,
    caption: "A celebration of elegance at the Four Seasons Amman",
    category: "Corporate Gala",
  },
  {
    image: weddingImage,
    caption: "Garden ceremony under Mediterranean skies",
    category: "Destination Wedding",
  },
  {
    image: destinationImage,
    caption: "Desert luxury at Wadi Rum",
    category: "Signature Experience",
  },
];

export function VisualStorySection() {
  return (
    <section id="work" className="section-padding bg-background">
      <div className="container-wide">
        {/* Section Header */}
        <AnimatedSection className="text-center mb-16">
          <p className="label-uppercase mb-4">Our Portfolio</p>
          <h2 className="heading-xl mb-6">
            Stories We've
            <br />
            <span className="italic">Crafted</span>
          </h2>
        </AnimatedSection>

        {/* Editorial Grid */}
        <div className="grid lg:grid-cols-12 gap-6">
          {/* Large Feature */}
          <AnimatedSection className="lg:col-span-7">
            <div className="relative overflow-hidden group aspect-[4/3]">
              <img
                src={stories[0].image}
                alt={stories[0].caption}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <span className="label-uppercase text-background/70 mb-2 block">
                  {stories[0].category}
                </span>
                <p className="font-serif text-xl md:text-2xl text-background font-light italic">
                  "{stories[0].caption}"
                </p>
              </div>
            </div>
          </AnimatedSection>

          {/* Stacked Right */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {stories.slice(1).map((story, index) => (
              <AnimatedSection key={story.category} delay={(index + 1) * 150}>
                <div className="relative overflow-hidden group aspect-[16/10]">
                  <img
                    src={story.image}
                    alt={story.caption}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <span className="label-uppercase text-background/70 mb-1 block text-xs">
                      {story.category}
                    </span>
                    <p className="font-serif text-lg text-background font-light italic">
                      "{story.caption}"
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
