import { AnimatedSection } from "@/components/ui/AnimatedSection";
const heroImage = "/images/hero-citadel.jpg";

export function SignatureMomentSection() {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="MaraNasi event at Amman Citadel"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-foreground/35" />
      </div>

      {/* Quote */}
      <div className="relative z-10 text-center px-6 py-20">
        <AnimatedSection>
          <p className="font-serif text-xl md:text-2xl lg:text-3xl xl:text-4xl font-normal text-background leading-[1.35] max-w-3xl mx-auto tracking-[-0.01em]">
            <span className="italic">"The details are not the details.</span>
            <br className="hidden md:block" />
            <span className="italic">They make the design."</span>
          </p>
          <p className="mt-6 text-[11px] tracking-[0.22em] text-background/40 uppercase">
            — Charles Eames
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
