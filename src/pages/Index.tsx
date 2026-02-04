import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { AboutSection } from "@/components/home/AboutSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { VisualStorySection } from "@/components/home/VisualStorySection";
import { DestinationsSection } from "@/components/home/DestinationsSection";
import { WhyChooseSection } from "@/components/home/WhyChooseSection";
import { CTASection } from "@/components/home/CTASection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <VisualStorySection />
      <DestinationsSection />
      <WhyChooseSection />
      <CTASection />
    </Layout>
  );
};

export default Index;
