import { WeddingSubPage } from "@/components/weddings/WeddingSubPage";

export default function PetraWedding() {
  return (
    <WeddingSubPage
      location="Petra"
      title="Weddings at Petra"
      metaTitle="Petra Wedding Planner | Destination Weddings at Petra | Maranasi"
      metaDescription="Plan a destination wedding at Petra with Maranasi — Jordan's premier luxury wedding planner. Ceremonies at the Treasury, candlelit receptions in the Siq."
      keywords="Petra wedding planner, destination wedding Petra, wedding at Petra Jordan, luxury wedding Petra"
      canonicalPath="/weddings/petra"
      intro="Petra — the ancient Nabataean city carved into rose-red cliffs — offers one of the most breathtaking wedding backdrops on earth. Maranasi handles all permits, logistics, and cinematic production for destination weddings at Petra."
      highlights={[
        "UNESCO World Heritage site — globally iconic backdrop",
        "Candlelit ceremonies in the Siq corridor",
        "Receptions overlooking the Treasury",
        "Complete permit and logistics management",
        "Cinematic film production in ancient settings",
      ]}
    />
  );
}