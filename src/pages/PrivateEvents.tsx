import { ServicePageLayout } from "@/components/services/ServicePageLayout";
import { SEO } from "@/components/SEO";
import privateImage from "@/assets/private-event.jpg";

const PrivateEvents = () => {
  return (
    <>
      <SEO 
        title="Private Event Planning Jordan | Celebrations & Gatherings | Maranasi"
        description="Luxury private event planning in Jordan. Milestone birthdays, anniversaries, intimate gatherings. Bespoke celebrations with meticulous attention to detail."
        keywords="private event planner Jordan, birthday party Amman, anniversary celebration, VIP event planning MENA"
        canonicalPath="/private-events"
      />
      <ServicePageLayout
      title="Private Events"
      subtitle="Personal Celebrations"
      heroImage={privateImage}
      description={
        <>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Life's most meaningful moments deserve exceptional celebration. Maranasi brings the 
            same meticulous attention and creative excellence to private events that we deliver 
            for our corporate and brand clients—because your personal celebrations matter just 
            as much.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-6">
            From milestone birthdays and anniversary celebrations to intimate dinner parties and 
            family gatherings, we create experiences that reflect your personal style and honor 
            the occasion. Our private event planning services are tailored to discerning clients 
            who value quality, discretion, and impeccable execution.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Whether hosting an elegant soirée at your home, a celebration at a stunning private 
            venue, or an exclusive gathering at a destination property, our team manages every 
            element with the utmost care and attention to detail.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            We understand that private events are deeply personal. Our approach combines warm, 
            personalized service with professional excellence, ensuring you can be fully present 
            with your guests while we handle the details that make the evening unforgettable.
          </p>
        </>
      }
      services={[
        "Milestone birthday celebrations",
        "Anniversary parties",
        "Intimate dinner parties",
        "Family celebrations",
        "Engagement parties",
        "Baby showers & christenings",
        "Holiday gatherings",
        "Private concert & entertainment events",
      ]}
      process={[
        {
          step: "01",
          title: "Personal Consultation",
          description: "We begin with an intimate conversation to understand your vision, preferences, and what this occasion means to you.",
        },
        {
          step: "02",
          title: "Tailored Design",
          description: "Every element is personally curated—from venue and décor to menu and music.",
        },
        {
          step: "03",
          title: "Thoughtful Preparation",
          description: "Meticulous planning ensures every detail aligns with your expectations.",
        },
        {
          step: "04",
          title: "Seamless Celebration",
          description: "On the day, our discreet team ensures everything flows beautifully while you celebrate.",
        },
      ]}
        ctaText="Plan Your Celebration"
      />
    </>
  );
};

export default PrivateEvents;
