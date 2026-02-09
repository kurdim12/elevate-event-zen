import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { CheckCircle } from "lucide-react";

interface ServicePageLayoutProps {
  title: string;
  subtitle: string;
  heroImage: string;
  description: ReactNode;
  services: string[];
  process: { step: string; title: string; description: string }[];
  ctaText?: string;
}

export function ServicePageLayout({
  title,
  subtitle,
  heroImage,
  description,
  services,
  process,
  ctaText = "Start Planning Your Event",
}: ServicePageLayoutProps) {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative h-[70vh] min-h-[500px] flex items-end">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt={title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/30 to-foreground/20" />
        </div>
        <div className="relative z-10 container-wide pb-16">
          <AnimatedSection>
            <p className="label-uppercase text-background/70 mb-4">{subtitle}</p>
            <h1 className="heading-display text-background max-w-3xl">{title}</h1>
          </AnimatedSection>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid lg:grid-cols-12 gap-16">
            {/* Main Content */}
            <div className="lg:col-span-7">
              <AnimatedSection>
                <div className="prose prose-lg max-w-none">
                  {description}
                </div>
              </AnimatedSection>

              {/* Process */}
              <AnimatedSection delay={200} className="mt-16">
                <h2 className="heading-md mb-10">Our Process</h2>
                <div className="space-y-8">
                  {process.map((item, index) => (
                    <div key={item.step} className="flex gap-6">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                        <span className="text-primary-foreground font-medium">{item.step}</span>
                      </div>
                      <div>
                        <h3 className="font-serif text-xl mb-2">{item.title}</h3>
                        <p className="text-muted-foreground font-light">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </AnimatedSection>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-5">
              <AnimatedSection delay={100}>
                <div className="card-luxury sticky top-32">
                  <h3 className="heading-sm mb-6">What We Offer</h3>
                  <ul className="space-y-4 mb-8">
                    {services.map((service) => (
                      <li key={service} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="font-light">{service}</span>
                      </li>
                    ))}
                  </ul>
                  <Link to="/contact" className="btn-primary w-full text-center">
                    {ctaText}
                  </Link>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding-sm bg-ivory-dark">
        <div className="container-narrow text-center">
          <AnimatedSection>
            <h2 className="heading-lg mb-6">Ready to Begin?</h2>
            <p className="body-lg mb-8">
              Share your vision. We'll respond with a clear next step.
            </p>
            <Link to="/contact" className="btn-primary">
              Request a Proposal
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
}
