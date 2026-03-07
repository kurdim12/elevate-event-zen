import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { HeroSection } from "@/components/home/HeroSection";
import { AboutSection } from "@/components/home/AboutSection";
import { ServiceSelector } from "@/components/home/ServiceSelector";
import { ServicesSection } from "@/components/home/ServicesSection";
import { SignatureMomentSection } from "@/components/home/SignatureMomentSection";
import { BeliefSection } from "@/components/home/BeliefSection";
import { DestinationsSection } from "@/components/home/DestinationsSection";
import { LatestEventsSection } from "@/components/home/LatestEventsSection";
import { FeaturedFilmsSection } from "@/components/home/FeaturedFilmsSection";
import { VideoShowcaseSection } from "@/components/home/VideoShowcaseSection";
import { PhotoMosaicSection } from "@/components/home/PhotoMosaicSection";
import { CTASection } from "@/components/home/CTASection";
import { RhythmBreak } from "@/components/home/RhythmBreak";

const Index = () => {
  return (
    <Layout>
      <SEO 
        title="Luxury Event Planner in Jordan | Maranasi"
        description="Maranasi — Jordan's premier luxury event planning agency. Weddings, corporate events, gala dinners, and brand activations in Amman, Petra, and across MENA. Request a consultation today."
        keywords="luxury event planner Jordan, luxury wedding planner Amman, corporate event management Jordan, gala dinner planner Amman, brand activation Jordan, destination wedding Jordan, conference organizer Jordan, luxury event production Amman"
        canonicalPath="/"
        breadcrumbs={[
          { name: "Home", url: "https://maranasi.com" }
        ]}
      />
      <HeroSection />
      <AboutSection />
      <RhythmBreak />
      <ServiceSelector />
      <ServicesSection />
      <VideoShowcaseSection />
      <SignatureMomentSection />
      <BeliefSection />
      <DestinationsSection />
      <LatestEventsSection />
      <PhotoMosaicSection />
      <FeaturedFilmsSection />
      <CTASection />
    </Layout>
  );
};

export default Index;
