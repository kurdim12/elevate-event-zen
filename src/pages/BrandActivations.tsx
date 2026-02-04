import { ServicePageLayout } from "@/components/services/ServicePageLayout";
import { SEO } from "@/components/SEO";
import brandImage from "@/assets/brand-activation.jpg";

const BrandActivations = () => {
  return (
    <>
      <SEO 
        title="Brand Activation Agency Middle East | Product Launches | Maranasi"
        description="Strategic brand activations & product launches across MENA. Immersive experiences that create lasting impressions in Jordan, UAE, and Saudi Arabia."
        keywords="brand activation Middle East, product launch agency MENA, experiential marketing Jordan, pop-up events Dubai"
        canonicalPath="/brand-activations"
      />
      <ServicePageLayout
      title="Brand Activations"
      subtitle="Immersive Experiences"
      heroImage={brandImage}
      description={
        <>
          <p className="text-muted-foreground leading-relaxed mb-6">
            In today's competitive landscape, brands need more than visibility—they need 
            meaningful connections. Maranasi creates immersive brand activations that transform 
            audiences into advocates, delivering experiences that resonate long after the 
            event concludes.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Our brand activation expertise spans product launches, pop-up experiences, 
            influencer events, and experiential marketing campaigns. We work with global brands 
            and regional leaders to create activations that capture attention, drive engagement, 
            and generate measurable results across Jordan and the MENA region.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-6">
            From concept development through execution, our team integrates strategic thinking 
            with creative excellence. We understand the nuances of regional markets and consumer 
            behavior, ensuring your activation connects authentically with local audiences while 
            maintaining global brand standards.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Whether launching a luxury product in Dubai, activating a lifestyle brand in Riyadh, 
            or creating an experiential campaign across multiple cities, Maranasi delivers brand 
            experiences that convert awareness into loyalty.
          </p>
        </>
      }
      services={[
        "Product launches & reveals",
        "Pop-up experiences",
        "Influencer & VIP events",
        "Experiential marketing",
        "Trade show activations",
        "Brand immersions",
        "Consumer engagement events",
        "Multi-city activation tours",
      ]}
      process={[
        {
          step: "01",
          title: "Brand Immersion",
          description: "We deeply understand your brand, objectives, and target audience to craft a strategic approach.",
        },
        {
          step: "02",
          title: "Creative Concept",
          description: "Our team develops innovative activation concepts that embody your brand story.",
        },
        {
          step: "03",
          title: "Production & Build",
          description: "Expert fabrication and technical production bring the creative vision to reality.",
        },
        {
          step: "04",
          title: "Activation & Analysis",
          description: "We execute flawlessly and provide comprehensive analytics on engagement and impact.",
        },
      ]}
        ctaText="Launch Your Activation"
      />
    </>
  );
};

export default BrandActivations;
