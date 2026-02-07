import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { HeroSection } from "@/components/home/HeroSection";
import { AboutSection } from "@/components/home/AboutSection";
import { ServiceSelector } from "@/components/home/ServiceSelector";
import { ServicesSection } from "@/components/home/ServicesSection";
import { SignatureMomentSection } from "@/components/home/SignatureMomentSection";
import { FeaturedFilmsSection } from "@/components/home/FeaturedFilmsSection";
import { BeliefSection } from "@/components/home/BeliefSection";
import { DestinationsSection } from "@/components/home/DestinationsSection";
import { LatestEventsSection } from "@/components/home/LatestEventsSection";
import { CTASection } from "@/components/home/CTASection";
import { RhythmBreak } from "@/components/home/RhythmBreak";

const Index = () => {
  return (
    <Layout>
      <SEO 
        title="Maranasi | Luxury Event Planning & Production in Jordan & MENA"
        description="Jordan's premier luxury event planning and production company. Crafting extraordinary corporate events, weddings, brand activations, and destination experiences across the MENA region."
        keywords="event planner Jordan, luxury wedding planner Amman, corporate event management MENA, brand activation Middle East, destination wedding Jordan, gala dinner organizer, conference organizer Jordan"
        canonicalPath="/"
      />
      <HeroSection />
      <AboutSection />
      <RhythmBreak />
      <ServiceSelector />
      <ServicesSection />
      <SignatureMomentSection />
      <FeaturedFilmsSection />
      <BeliefSection />
      <DestinationsSection />
      <LatestEventsSection />
      <CTASection />
    </Layout>
  );
};

export default Index;
