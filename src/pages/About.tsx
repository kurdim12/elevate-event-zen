import { Layout } from "@/components/layout/Layout";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="container-wide">
          <AnimatedSection>
            <span className="text-sm tracking-[0.2em] text-muted-foreground uppercase mb-6 block">
              About Us
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium leading-tight max-w-4xl">
              Crafting Extraordinary Moments Since 2008
            </h1>
          </AnimatedSection>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 md:py-28 bg-secondary/30">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            <AnimatedSection>
              <h2 className="font-serif text-3xl md:text-4xl font-medium mb-8">
                Our Story
              </h2>
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  Founded in Amman, Jordan, Maranasi has grown from a passionate vision 
                  into one of the region's most respected event planning and production 
                  companies. Our journey began with a simple belief: every event should 
                  be an unforgettable experience.
                </p>
                <p>
                  Over the years, we've had the privilege of working with leading 
                  corporations, distinguished families, and international brands, 
                  creating moments that resonate long after the last guest departs.
                </p>
                <p>
                  Today, our team of creative directors, producers, and specialists 
                  brings together decades of combined experience in luxury event 
                  production, working across Jordan, the UAE, Saudi Arabia, and 
                  destinations worldwide.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="space-y-12">
                <div>
                  <span className="font-serif text-5xl md:text-6xl text-primary">500+</span>
                  <p className="text-sm tracking-[0.2em] text-muted-foreground uppercase mt-2">
                    Events Produced
                  </p>
                </div>
                <div>
                  <span className="font-serif text-5xl md:text-6xl text-primary">15+</span>
                  <p className="text-sm tracking-[0.2em] text-muted-foreground uppercase mt-2">
                    Years of Excellence
                  </p>
                </div>
                <div>
                  <span className="font-serif text-5xl md:text-6xl text-primary">4</span>
                  <p className="text-sm tracking-[0.2em] text-muted-foreground uppercase mt-2">
                    Countries Served
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 md:py-28">
        <div className="container-wide">
          <AnimatedSection>
            <h2 className="font-serif text-3xl md:text-4xl font-medium mb-16 text-center">
              Our Approach
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
            {[
              {
                title: "Meticulous Planning",
                description: "Every detail is considered, from the grand vision to the smallest finishing touch. We believe excellence lives in the details."
              },
              {
                title: "Creative Excellence",
                description: "Our creative team pushes boundaries while respecting timeless elegance. We craft experiences that feel both fresh and enduring."
              },
              {
                title: "Flawless Execution",
                description: "On the day of your event, our experienced production team ensures everything unfolds seamlessly, so you can be fully present."
              }
            ].map((value, index) => (
              <AnimatedSection key={value.title} delay={index * 0.1}>
                <div className="text-center">
                  <h3 className="font-serif text-xl md:text-2xl font-medium mb-4">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-foreground text-background">
        <div className="container-wide text-center">
          <AnimatedSection>
            <h2 className="font-serif text-3xl md:text-4xl font-medium mb-6">
              Let's Create Something Extraordinary
            </h2>
            <p className="text-background/70 max-w-2xl mx-auto mb-10">
              Whether you're planning a corporate conference, a luxury wedding, or a 
              brand activation, we're here to bring your vision to life.
            </p>
            <Link to="/contact" className="btn-primary bg-background text-foreground hover:bg-background/90">
              Start a Conversation
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
}
