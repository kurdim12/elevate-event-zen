import { ServicePageLayout } from "@/components/services/ServicePageLayout";
import weddingImage from "@/assets/wedding-event.jpg";

const Weddings = () => {
  return (
    <ServicePageLayout
      title="Luxury Weddings"
      subtitle="Timeless Celebrations"
      heroImage={weddingImage}
      description={
        <>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Your wedding day deserves nothing less than perfection. As Jordan's premier luxury 
            wedding planner, Maranasi has been crafting extraordinary wedding experiences for 
            couples who appreciate the finer details and desire an event that reflects their 
            unique love story.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-6">
            From intimate garden ceremonies to grand ballroom celebrations, we approach each 
            wedding as a once-in-a-lifetime occasion. Our full-service wedding planning 
            encompasses venue curation, design and styling, floral artistry, entertainment, 
            culinary experiences, and guest coordination—all executed with impeccable taste 
            and precision.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-6">
            We specialize in destination weddings across Jordan's most spectacular locations—from 
            the rose-red city of Petra to the shores of the Dead Sea. Our expertise extends 
            throughout the Middle East, with weddings produced in Dubai, Saudi Arabia, and 
            Mediterranean destinations for international couples.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            At Maranasi, we believe your wedding should be a seamless expression of your vision. 
            Our dedicated planning team becomes your trusted partner, managing every detail so 
            you can be fully present for the moments that matter most.
          </p>
        </>
      }
      services={[
        "Full-service wedding planning",
        "Destination wedding coordination",
        "Design & styling",
        "Floral design & installations",
        "Entertainment curation",
        "Culinary experience design",
        "Guest experience management",
        "Wedding weekend programming",
      ]}
      process={[
        {
          step: "01",
          title: "Vision & Concept",
          description: "We explore your story, preferences, and dreams to create a wedding concept that's authentically yours.",
        },
        {
          step: "02",
          title: "Design & Curation",
          description: "From venue selection to vendor partnerships, we curate every element to bring your vision to life.",
        },
        {
          step: "03",
          title: "Planning & Coordination",
          description: "Detailed timelines, logistics, and guest management ensure nothing is overlooked.",
        },
        {
          step: "04",
          title: "Your Perfect Day",
          description: "On your wedding day, our team handles everything while you celebrate surrounded by love.",
        },
      ]}
      ctaText="Plan Your Dream Wedding"
    />
  );
};

export default Weddings;
