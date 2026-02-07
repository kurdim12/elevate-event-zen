import destinationWedding1 from "@/assets/weddings/destination-wedding-1.jpg";
import destinationWedding2 from "@/assets/weddings/destination-wedding-2.jpg";
import destinationWedding3 from "@/assets/weddings/destination-wedding-3.jpg";
import destinationWedding4 from "@/assets/weddings/destination-wedding-4.jpg";
import destinationWedding5 from "@/assets/weddings/destination-wedding-5.png";
import destinationWedding6 from "@/assets/weddings/destination-wedding-6.png";
import destinationWedding7 from "@/assets/weddings/destination-wedding-7.png";

export interface GalleryImage {
  src: string;
  alt: string;
  caption?: string;
}

export const destinationLuxuryWeddingsGallery: GalleryImage[] = [
  { 
    src: destinationWedding1, 
    alt: "Outdoor wedding reception with red floral arrangements at historic venue", 
    caption: "Amman Citadel — Jordan" 
  },
  { 
    src: destinationWedding2, 
    alt: "Romantic wedding signage with floral decor" 
  },
  { 
    src: destinationWedding4, 
    alt: "Golden hour table setting with roses and candles" 
  },
  { 
    src: destinationWedding3, 
    alt: "Elegant place setting with personalized menu" 
  },
  { 
    src: destinationWedding5, 
    alt: "Bride and groom walking through flower aisle at night" 
  },
  { 
    src: destinationWedding6, 
    alt: "Ancient columns with floral installations at night" 
  },
  { 
    src: destinationWedding7, 
    alt: "Intimate table setting with golden accents and thank you card" 
  }
];
