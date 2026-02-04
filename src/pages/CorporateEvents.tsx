import { ServicePageLayout } from "@/components/services/ServicePageLayout";
import { SEO } from "@/components/SEO";
import corporateImage from "@/assets/corporate-event.jpg";

const CorporateEvents = () => {
  return (
    <>
      <SEO 
        title="Corporate Event Planning Jordan | Conferences & Galas | Maranasi"
        description="Expert corporate event management in Jordan & MENA. Conferences, summits, gala dinners, award ceremonies. Full production & AV services."
        keywords="corporate event planner Jordan, conference organizer Amman, gala dinner MENA, award ceremony production, business event management"
        canonicalPath="/corporate-events"
      />
      <ServicePageLayout
      title="Corporate Events"
      subtitle="Business Excellence"
      heroImage={corporateImage}
      description={
        <>
          <p className="text-muted-foreground leading-relaxed mb-6">
            At Maranasi, we understand that corporate events are far more than gatherings—they're 
            strategic opportunities to inspire teams, strengthen partnerships, and elevate your brand. 
            As Jordan's leading corporate event management company, we specialize in creating 
            impactful experiences that align with your business objectives.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-6">
            From executive conferences and product launches to annual galas and team-building 
            retreats, our full-service approach ensures every detail reflects your company's 
            values and vision. Our expertise spans intimate board meetings for 20 guests to 
            large-scale conferences hosting thousands.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Operating across Amman, Dubai, Riyadh, and beyond, we bring world-class production 
            standards to every corporate event. Our team manages venue selection, technical 
            production, guest management, catering, entertainment, and post-event analysis—allowing 
            you to focus on what matters most: your message and your people.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Whether you're launching a new initiative, celebrating company milestones, or 
            hosting international stakeholders, Maranasi delivers corporate events that make 
            lasting impressions and drive real business outcomes.
          </p>
        </>
      }
      services={[
        "Conference & summit production",
        "Executive retreats & board meetings",
        "Product launches & reveals",
        "Gala dinners & award ceremonies",
        "Team building experiences",
        "Investor & stakeholder events",
        "Annual company celebrations",
        "Trade shows & exhibitions",
      ]}
      process={[
        {
          step: "01",
          title: "Discovery & Strategy",
          description: "We begin by understanding your objectives, audience, and success metrics to develop a strategic event framework.",
        },
        {
          step: "02",
          title: "Creative Development",
          description: "Our team designs a concept that embodies your brand and creates meaningful engagement opportunities.",
        },
        {
          step: "03",
          title: "Production Planning",
          description: "Detailed logistics, vendor coordination, and technical specifications ensure flawless execution.",
        },
        {
          step: "04",
          title: "Execution & Delivery",
          description: "Our on-site team manages every element, allowing you to be fully present with your guests.",
        },
      ]}
        ctaText="Plan Your Corporate Event"
      />
    </>
  );
};

export default CorporateEvents;
