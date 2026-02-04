import { AnimatedSection } from "@/components/ui/AnimatedSection";
import weddingImage from "@/assets/wedding-event.jpg";

export function SignatureMomentSection() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Full background image */}
      <div className="absolute inset-0">
        <img
          src={weddingImage}
          alt="An unforgettable moment"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-foreground/40" />
      </div>

      {/* Single, powerful statement */}
      <div className="relative z-10 text-center px-6">
        <AnimatedSection>
          <p className="font-serif text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-normal text-background leading-relaxed max-w-4xl mx-auto">
            <span className="italic">"The details are not the details.</span>
            <br className="hidden md:block" />
            <span className="italic">They make the design."</span>
          </p>
          <p className="mt-8 text-xs tracking-[0.3em] text-background/50 uppercase">
            — Charles Eames
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
