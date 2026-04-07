import { useParams, Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

const posts: Record<string, { title: string; content: string[]; relatedLinks: { name: string; href: string }[] }> = {
  "how-to-plan-gala-dinner-jordan": {
    title: "How to Plan a Luxury Gala Dinner in Amman, Jordan",
    content: [
      "Planning a luxury gala dinner in Amman, Jordan requires attention to every detail — from venue selection and catering coordination to cinematic lighting design and entertainment programming.",
      "Maranasi has produced some of the most prestigious gala dinners in Jordan, working with venues like the Ritz-Carlton Amman, Grand Hyatt Amman, and InterContinental Jordan.",
      "Start by defining your event's purpose, guest count, and desired atmosphere. Whether it's a charity gala, corporate award night, or a celebration dinner, every element should align with your vision.",
    ],
    relatedLinks: [
      { name: "Gala Dinner Planning", href: "/gala-dinners" },
      { name: "Contact Us", href: "/contact" },
    ],
  },
  "destination-wedding-petra-guide": {
    title: "The Ultimate Guide to a Destination Wedding at Petra",
    content: [
      "Petra, one of the New Seven Wonders of the World, offers an unparalleled backdrop for destination weddings in Jordan.",
      "As Jordan's most experienced luxury wedding planner, Maranasi handles all permits, logistics, and production for weddings at this UNESCO World Heritage site.",
      "From candlelit ceremonies in the Siq to receptions overlooking the Treasury, a Petra wedding is truly once-in-a-lifetime.",
    ],
    relatedLinks: [
      { name: "Weddings at Petra", href: "/weddings/petra" },
      { name: "Wedding Planning", href: "/weddings" },
    ],
  },
  "corporate-events-trends-2025": {
    title: "Corporate Event Trends in Jordan for 2025",
    content: [
      "The corporate events landscape in Jordan is evolving rapidly, with brands seeking more immersive, experiential formats.",
      "Key trends include destination corporate retreats at the Dead Sea, AI-integrated event production, and hybrid event formats that combine in-person and virtual experiences.",
      "Maranasi continues to lead corporate event management in Jordan, bringing cinematic production quality to every conference, product launch, and brand activation.",
    ],
    relatedLinks: [
      { name: "Corporate Events", href: "/corporate-events" },
      { name: "Brand Activations", href: "/exhibitions" },
    ],
  },
};

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = posts[slug || ""];

  if (!post) {
    return (
      <Layout>
        <section className="pt-40 pb-20 text-center">
          <h1 className="heading-lg">Post Not Found</h1>
          <Link to="/blog" className="btn-outline mt-8">Back to Blog</Link>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      <SEO
        title={`${post.title} | Maranasi`}
        description={post.content[0]}
        canonicalPath={`/blog/${slug}`}
        breadcrumbs={[
          { name: "Home", url: "https://maranasi.com" },
          { name: "Blog", url: "https://maranasi.com/blog" },
          { name: post.title, url: `https://maranasi.com/blog/${slug}` },
        ]}
      />

      <section className="pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="container-narrow">
          <AnimatedSection>
            <Link to="/blog" className="text-sm text-primary hover:underline mb-6 block">← Back to Blog</Link>
            <h1 className="heading-xl">{post.title}</h1>
          </AnimatedSection>
        </div>
      </section>

      <section className="section-padding pt-0">
        <div className="container-narrow">
          <AnimatedSection>
            <div className="prose-lg space-y-6">
              {post.content.map((p, i) => (
                <p key={i} className="text-muted-foreground leading-relaxed">{p}</p>
              ))}
            </div>

            <div className="mt-12 pt-8 border-t border-border">
              <h3 className="font-display text-xl mb-4">Related</h3>
              <div className="flex flex-wrap gap-3">
                {post.relatedLinks.map((link) => (
                  <Link key={link.href} to={link.href} className="btn-outline text-xs">{link.name}</Link>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
}
