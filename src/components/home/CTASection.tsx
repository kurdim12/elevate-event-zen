import { Link } from "react-router-dom";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

export function CTASection() {
  return (
    <section className="py-24 md:py-28 lg:py-32 bg-ivory-dark">
      <div className="container-narrow text-center">
        <AnimatedSection>
          <p className="text-[11px] tracking-[0.22em] text-muted-foreground/60 uppercase mb-6">
            Ready to Begin?
          </p>
          <h2 className="font-serif text-[1.75rem] md:text-3xl lg:text-4xl font-medium leading-[1.15] tracking-[-0.01em] mb-4">
            Let's create your next
            <br />
            <span className="italic text-muted-foreground">unforgettable moment</span>
          </h2>
          <p className="text-[15px] text-muted-foreground leading-[1.7] max-w-md mx-auto mb-8">
            From initial concept to flawless execution, we're here to bring your vision to life.
          </p>
          
          <Link to="/contact" className="btn-primary">
            Start a Conversation
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
}
