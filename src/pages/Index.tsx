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
        title="Maranasi | Luxury Event Planning & Production in Jordan & MENA"
        description="Jordan's premier luxury event planning and production company. Crafting extraordinary corporate events, weddings, brand activations, and destination experiences across Jordan, Saudi Arabia, Dubai, Doha, Egypt, UAE, Thailand, India, Vietnam, China, United States, and Canada."
        keywords="event planner Jordan, luxury wedding planner Amman, corporate event management MENA, brand activation Middle East, destination wedding Jordan, gala dinner organizer, conference organizer Jordan, luxury event production, event planner Saudi Arabia, wedding planner Riyadh, event planner Dubai, corporate events Dubai, wedding planner Dubai, event planner Doha Qatar, destination wedding India, wedding planner Mumbai, event planner Vietnam, corporate events China Shanghai, event planner New Jersey, wedding planner Chicago, event planner Texas Houston, event planner California Los Angeles, event planner Boston, wedding planner Toronto Canada, event planner Ottawa"
        canonicalPath="/"
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
