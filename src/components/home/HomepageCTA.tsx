import { Link } from "react-router-dom";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

export function HomepageCTA() {
  return (
    <section className="py-20 md:py-24 bg-gradient-to-r from-primary/90 via-primary to-primary/80">
      <div className="container-wide text-center">
        <AnimatedSection>
          <h2 className="heading-xl text-primary-foreground mb-8">
            Your Vision. Our Production.
          </h2>
          <Link to="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-background text-foreground text-[13px] font-medium uppercase tracking-[0.15em] transition-all duration-500 hover:bg-background/90">
            Request a Proposal
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
}
