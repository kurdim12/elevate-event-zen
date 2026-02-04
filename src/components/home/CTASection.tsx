import { Link } from "react-router-dom";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

export function CTASection() {
  return (
    <section className="section-padding bg-background">
      <div className="container-narrow text-center">
        <AnimatedSection>
          <p className="label-uppercase mb-4">Start Your Journey</p>
          <h2 className="heading-xl mb-8">
            Let's Create Something
            <br />
            <span className="italic">Extraordinary</span>
          </h2>
          <p className="body-lg mb-10 max-w-xl mx-auto">
            Whether you're planning an intimate gathering or a grand celebration, 
            we're ready to bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-primary">
              Request a Proposal
            </Link>
            <a href="tel:+962791234567" className="btn-outline">
              Call Us Directly
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
