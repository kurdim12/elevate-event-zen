import { useParams, Navigate } from "react-router-dom";
import { SubServicePageLayout } from "@/components/services/SubServicePageLayout";
import { weddingServices } from "@/data/services";
import {
  destinationLuxuryWeddingsGallery,
  luxuryWeddingDesignGallery,
  marriageProposalsGallery,
  type GalleryImage,
} from "@/data/wedding-gallery";

const galleryMap: Record<string, { images: GalleryImage[]; title: string }> = {
  "destination-luxury-weddings-service": {
    images: destinationLuxuryWeddingsGallery,
    title: "Crafted Moments",
  },
  "luxury-wedding-design-and-planning": {
    images: luxuryWeddingDesignGallery,
    title: "Wedding Design",
  },
  "destination-marriage-proposals": {
    images: marriageProposalsGallery,
    title: "Romantic Moments",
  },
};

const WeddingServicePage = () => {
  const { serviceSlug } = useParams<{ serviceSlug: string }>();

  const service = weddingServices.find(s => s.slug === serviceSlug);

  if (!service) {
    return <Navigate to="/destination-luxury-weddings" replace />;
  }

  const gallery = serviceSlug ? galleryMap[serviceSlug] : undefined;

  return (
    <SubServicePageLayout
      metaTitle={service.metaTitle}
      metaDescription={service.metaDescription}
      canonicalPath={`/destination-luxury-weddings/${service.slug}`}
      h1={service.h1}
      content={service.content}
      features={service.features}
      ctaText={service.ctaText}
      parentLink={{ label: "Destination Luxury Weddings", href: "/destination-luxury-weddings" }}
      videoId={service.videoId}
      videoTitle={service.videoTitle}
      galleryImages={gallery?.images}
      galleryTitle={gallery?.title}
      heroImage={gallery?.images[0]?.src}
      heroImageAlt={gallery?.images[0]?.alt}
    />
  );
};

export default WeddingServicePage;
