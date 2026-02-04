import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import destinationImage from "@/assets/destination-event.jpg";
import heroImage from "@/assets/hero-event.jpg";

const destinations = [
  {
    id: "jordan",
    name: "Jordan",
    subtitle: "Our Home",
    description: "From the ancient wonders of Petra to the modern elegance of Amman's finest hotels, Jordan offers an unparalleled canvas for extraordinary events. The Dead Sea's unique setting, Wadi Rum's desert majesty, and Aqaba's coastal beauty provide diverse options for unforgettable experiences.",
    highlights: ["Amman's luxury hotels", "Petra & archaeological sites", "Dead Sea resorts", "Wadi Rum desert experiences", "Aqaba beach venues"],
  },
  {
    id: "uae",
    name: "United Arab Emirates",
    subtitle: "Limitless Luxury",
    description: "Dubai and Abu Dhabi represent the pinnacle of luxury event possibilities. World-class hotels, architectural marvels, and exceptional service standards make the UAE an ideal destination for high-profile corporate events, lavish weddings, and spectacular brand activations.",
    highlights: ["Dubai's iconic venues", "Abu Dhabi's cultural destinations", "Desert resort properties", "Yacht & marina events", "Ultra-luxury hotel ballrooms"],
  },
  {
    id: "saudi",
    name: "Saudi Arabia",
    subtitle: "New Horizons",
    description: "The Kingdom's transformation has created extraordinary opportunities for exceptional events. From Riyadh's emerging luxury scene to Jeddah's Red Sea coast and AlUla's ancient landscapes, Saudi Arabia offers unique settings for forward-thinking clients.",
    highlights: ["Riyadh's new venues", "Jeddah waterfront", "AlUla heritage sites", "Red Sea developments", "NEOM future destinations"],
  },
  {
    id: "international",
    name: "International",
    subtitle: "Global Reach",
    description: "Our expertise travels wherever your vision leads. We've produced events across Mediterranean destinations, European capitals, and luxury resorts worldwide. Our international network of partners ensures the same Maranasi excellence, regardless of location.",
    highlights: ["Mediterranean islands", "European capitals", "Indian Ocean resorts", "North African destinations", "Bespoke global locations"],
  },
];

const Destinations = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative h-[70vh] min-h-[500px] flex items-end">
        <div className="absolute inset-0">
          <img
            src={destinationImage}
            alt="Luxury destination experience"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/30 to-foreground/20" />
        </div>
        <div className="relative z-10 container-wide pb-16">
          <AnimatedSection>
            <p className="label-uppercase text-background/70 mb-4">Where Dreams Unfold</p>
            <h1 className="heading-display text-background max-w-4xl">
              Destination
              <br />
              <span className="italic">Experiences</span>
            </h1>
          </AnimatedSection>
        </div>
      </section>

      {/* Intro */}
      <section className="section-padding bg-background">
        <div className="container-narrow text-center">
          <AnimatedSection>
            <p className="body-lg">
              From our home base in Jordan to the world's most remarkable destinations, 
              Maranasi brings exceptional event experiences wherever your vision leads. 
              Our regional expertise and international partnerships ensure flawless 
              execution across borders.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Destinations */}
      {destinations.map((destination, index) => (
        <section
          key={destination.id}
          id={destination.id}
          className={`section-padding ${index % 2 === 0 ? "bg-ivory-dark" : "bg-background"}`}
        >
          <div className="container-wide">
            <div className={`grid lg:grid-cols-2 gap-16 items-center ${index % 2 === 1 ? "lg:grid-flow-dense" : ""}`}>
              <AnimatedSection className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                <p className="label-uppercase mb-4">{destination.subtitle}</p>
                <h2 className="heading-xl mb-6">{destination.name}</h2>
                <div className="divider-gold mb-6" />
                <p className="body-md text-muted-foreground mb-8">
                  {destination.description}
                </p>
                <ul className="space-y-3">
                  {destination.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-center gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      <span className="text-muted-foreground font-light">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </AnimatedSection>
              <AnimatedSection delay={200} className={index % 2 === 1 ? "lg:col-start-1" : ""}>
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={index === 0 ? destinationImage : heroImage}
                    alt={destination.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="section-padding bg-foreground">
        <div className="container-narrow text-center">
          <AnimatedSection>
            <h2 className="heading-xl text-background mb-6">
              Where Will Your
              <br />
              <span className="italic">Story Unfold?</span>
            </h2>
            <p className="body-lg text-background/70 mb-10">
              Let's explore the perfect destination for your event.
            </p>
            <Link to="/contact" className="btn-gold">
              Start the Conversation
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default Destinations;
