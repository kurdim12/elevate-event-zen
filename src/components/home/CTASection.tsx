import { Link } from "react-router-dom";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

export function CTASection() {
  return (
    <section className="py-24 md:py-28 lg:py-32 bg-ivory-dark">
      <div className="container-narrow text-center">
        <AnimatedSection>
          <h2 className="font-serif text-[1.75rem] md:text-3xl lg:text-4xl font-medium leading-[1.15] tracking-[-0.01em] mb-8">
            Let's create something
            <br />
            <span className="italic text-muted-foreground">extraordinary</span>
          </h2>
          
          <Link to="/contact" className="btn-primary">
            Start a Conversation
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
}
