import { Link } from "react-router-dom";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

export function CTASection() {
  return (
    <section className="py-32 md:py-40 lg:py-52 bg-ivory-dark">
      <div className="container-narrow text-center">
        <AnimatedSection>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium leading-[1.15] mb-10">
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
