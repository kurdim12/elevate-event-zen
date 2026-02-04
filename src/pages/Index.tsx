import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { AboutSection } from "@/components/home/AboutSection";
import { ServiceSelector } from "@/components/home/ServiceSelector";
import { ServicesSection } from "@/components/home/ServicesSection";
import { SignatureMomentSection } from "@/components/home/SignatureMomentSection";
import { VisualStorySection } from "@/components/home/VisualStorySection";
import { BeliefSection } from "@/components/home/BeliefSection";
import { DestinationsSection } from "@/components/home/DestinationsSection";
import { WhyChooseSection } from "@/components/home/WhyChooseSection";
import { CTASection } from "@/components/home/CTASection";
import { RhythmBreak } from "@/components/home/RhythmBreak";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <AboutSection />
      <RhythmBreak />
      <ServiceSelector />
      <ServicesSection />
      <SignatureMomentSection />
      <VisualStorySection />
      <BeliefSection />
      <DestinationsSection />
      <WhyChooseSection />
      <CTASection />
    </Layout>
  );
};

export default Index;
