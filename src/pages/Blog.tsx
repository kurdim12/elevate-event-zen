import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Link } from "react-router-dom";

const blogPosts = [
  { slug: "how-to-plan-gala-dinner-jordan", title: "How to Plan a Luxury Gala Dinner in Amman, Jordan", excerpt: "A complete guide to planning an unforgettable gala dinner in Jordan's capital.", category: "Gala Dinners" },
  { slug: "destination-wedding-petra-guide", title: "The Ultimate Guide to a Destination Wedding at Petra", excerpt: "Everything you need to know about saying your vows at one of the world's most iconic sites.", category: "Weddings" },
  { slug: "corporate-events-trends-2025", title: "Corporate Event Trends in Jordan for 2025", excerpt: "The latest trends shaping corporate events in the Hashemite Kingdom.", category: "Corporate" },
];

export default function Blog() {
  return (
    <Layout>
      <SEO title="Blog | Luxury Event Planning Insights | Maranasi Jordan" description="Insights on luxury event planning in Jordan." canonicalPath="/blog" breadcrumbs={[{ name: "Home", url: "https://maranasi.com" }, { name: "Blog", url: "https://maranasi.com/blog" }]} />
      <section className="pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="container-wide">
          <AnimatedSection>
            <p className="section-label mb-4">Insights</p>
            <h1 className="heading-display max-w-3xl">Blog</h1>
          </AnimatedSection>
        </div>
      </section>
      <section className="section-padding pt-0">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, i) => (
              <AnimatedSection key={post.slug} delay={i * 100}>
                <Link to={`/blog/${post.slug}`} className="group block">
                  <div className="bg-card p-8 border-t-2 border-t-primary hover:shadow-gold-glow transition-all duration-700 h-full">
                    <p className="section-label text-[10px] mb-3">{post.category}</p>
                    <h2 className="font-display text-xl mb-3 group-hover:text-primary transition-colors">{post.title}</h2>
                    <p className="text-sm text-muted-foreground leading-relaxed">{post.excerpt}</p>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
