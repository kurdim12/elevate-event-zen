import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { CinematicVideoSection } from "@/components/ui/CinematicVideoSection";
import { EditorialGallery } from "@/components/services/EditorialGallery";
import { CheckCircle } from "lucide-react";
import type { GalleryImage } from "@/data/wedding-gallery";

interface SubServicePageLayoutProps {
  metaTitle: string;
  metaDescription: string;
  canonicalPath: string;
  h1: string;
  subtitle?: string;
  content: string[];
  features: string[];
  ctaText: string;
  parentLink: { label: string; href: string };
  videoId?: string;
  videoTitle?: string;
  galleryImages?: GalleryImage[];
  galleryTitle?: string;
}

export function SubServicePageLayout({
  metaTitle,
  metaDescription,
  canonicalPath,
  h1,
  subtitle,
  content,
  features,
  ctaText,
  parentLink,
  videoId,
  videoTitle,
  galleryImages,
  galleryTitle,
}: SubServicePageLayoutProps) {
  return (
    <Layout>
      <SEO
        title={metaTitle}
        description={metaDescription}
        canonicalPath={canonicalPath}
      />

      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-ivory-dark">
        <div className="container-wide">
          <AnimatedSection>
            {/* Breadcrumb */}
            <nav className="mb-8">
              <ol className="flex items-center gap-2 text-sm text-muted-foreground">
                <li>
                  <Link to="/" className="hover:text-foreground transition-colors">
                    Home
                  </Link>
                </li>
                <li>/</li>
                <li>
                  <Link to={parentLink.href} className="hover:text-foreground transition-colors">
                    {parentLink.label}
                  </Link>
                </li>
                <li>/</li>
                <li className="text-foreground">{h1}</li>
              </ol>
            </nav>

            {subtitle && (
              <p className="label-uppercase text-muted-foreground mb-4">{subtitle}</p>
            )}
            <h1 className="heading-xl max-w-4xl">{h1}</h1>
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
                <div className="space-y-6">
                  {content.map((paragraph, index) => (
                    <p key={index} className="body-md text-muted-foreground leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </AnimatedSection>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-5">
              <AnimatedSection delay={100}>
                <div className="card-luxury sticky top-32">
                  <h3 className="heading-sm mb-6">What is included</h3>
                  <ul className="space-y-4 mb-8">
                    {features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="font-light">{feature}</span>
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

      {/* Gallery Section - if available */}
      {galleryImages && galleryImages.length > 0 && (
        <EditorialGallery images={galleryImages} title={galleryTitle} />
      )}

      {/* Video Section - if available */}
      {videoId && (
        <CinematicVideoSection
          videoId={videoId}
          title={videoTitle || "Experience Our Work"}
          subtitle="Watch the Film"
        />
      )}

      {/* CTA Section */}
      <section className="section-padding-sm bg-foreground">
        <div className="container-narrow text-center">
          <AnimatedSection>
            <h2 className="heading-lg text-background mb-6">Ready to Begin?</h2>
            <p className="body-lg text-background/70 mb-8">
              Let's discuss how we can bring your vision to life.
            </p>
            <Link to="/contact" className="btn-gold">
              Request a Proposal
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
}
