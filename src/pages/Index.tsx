import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { HeroSection } from "@/components/home/HeroSection";
import { ServicesGrid } from "@/components/home/ServicesGrid";
import { WhyMaranasi } from "@/components/home/WhyMaranasi";
import { DestinationsTeaser } from "@/components/home/DestinationsTeaser";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { HomepageCTA } from "@/components/home/HomepageCTA";
import { HomepageFAQ, homepageFAQSchema, eventPlannerSchema } from "@/components/home/HomepageFAQ";

const Index = () => {
  return (
    <Layout>
      <SEO
        title="Luxury Event Planning & Production Jordan | Maranasi"
        description="Maranasi is Jordan's premier luxury event planning company. Weddings at Petra & Wadi Rum, gala dinners, corporate events, and brand activations across MENA. Request a proposal today."
        keywords="luxury event planner Jordan, event management companies in Jordan, wedding planner Amman, gala dinner Jordan, corporate events Amman, destination wedding Jordan, brand activation Jordan"
        canonicalPath="/"
        breadcrumbs={[{ name: "Home", url: "https://maranasi.com" }]}
        jsonLd={[eventPlannerSchema, homepageFAQSchema]}
      />
      <HeroSection />
      <ServicesGrid />
      <WhyMaranasi />
      <DestinationsTeaser />
      <TestimonialsSection />
      <HomepageCTA />
      <HomepageFAQ />
    </Layout>
  );
};

export default Index;
