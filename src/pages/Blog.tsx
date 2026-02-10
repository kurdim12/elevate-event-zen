import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

// Placeholder blog structure - CMS-ready
const blogPosts = [
  {
    slug: "choosing-the-right-destination-for-your-corporate-event",
    title: "Choosing the Right Destination for Your Corporate Event",
    excerpt: "Evaluating destinations based on objectives, logistics, and guest experience requirements.",
    category: "Corporate Events",
    date: "Coming Soon"
  },
  {
    slug: "destination-wedding-planning-timeline",
    title: "Destination Wedding Planning Timeline",
    excerpt: "A structured approach to planning your destination wedding from 18 months out.",
    category: "Weddings",
    date: "Coming Soon"
  },
  {
    slug: "production-readiness-checklist-for-conferences",
    title: "Production Readiness Checklist for Conferences",
    excerpt: "Key technical and operational checks to ensure smooth conference execution.",
    category: "Production",
    date: "Coming Soon"
  },
  {
    slug: "jordan-as-a-corporate-destination",
    title: "Jordan as a Corporate Destination",
    excerpt: "Why Jordan offers unique advantages for conferences, retreats, and executive events.",
    category: "Destinations",
    date: "Coming Soon"
  }
];

export default function Blog() {
  return (
    <Layout>
      <SEO 
        title="MaraNasi Blog | Events and Weddings in Jordan"
        description="Insights on corporate events, MICE, exhibitions, production, destination weddings, proposals, and venues in Jordan and Amman. Covering Egypt, UAE, and Thailand."
        keywords="event planning blog Jordan, wedding planning tips Amman, corporate events insights Jordan, destination wedding guide Jordan, MICE planning Jordan, conference tips Amman"
        canonicalPath="/blog"
      />

      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-ivory-dark">
        <div className="container-wide">
          <AnimatedSection>
            <h1 className="heading-display max-w-4xl">Blog</h1>
          </AnimatedSection>
        </div>
      </section>

      {/* Intro */}
      <section className="section-padding-sm bg-background">
        <div className="container-narrow text-center">
          <AnimatedSection>
            <p className="body-lg">
              Corporate events, destination execution, production discipline, 
              and planning insights. Destinations, venues, and operational clarity 
              for premium results.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="section-padding bg-ivory-dark">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 gap-8">
            {blogPosts.map((post, index) => (
              <AnimatedSection key={post.slug} delay={index * 100}>
                <article className="p-8 bg-background border border-border/50">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-xs font-medium uppercase tracking-wider text-primary">
                      {post.category}
                    </span>
                    <span className="text-xs text-muted-foreground">{post.date}</span>
                  </div>
                  <h2 className="font-serif text-xl font-medium mb-3">
                    {post.title}
                  </h2>
                  <p className="text-muted-foreground text-sm">
                    {post.excerpt}
                  </p>
                </article>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-foreground">
        <div className="container-narrow text-center">
          <AnimatedSection>
            <Link to="/contact" className="btn-gold">
              Request a Proposal
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
}
