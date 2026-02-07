import { useParams, Navigate } from "react-router-dom";
import { SubServicePageLayout } from "@/components/services/SubServicePageLayout";
import { weddingServices } from "@/data/services";

const WeddingServicePage = () => {
  const { serviceSlug } = useParams<{ serviceSlug: string }>();
  
  const service = weddingServices.find(s => s.slug === serviceSlug);
  
  if (!service) {
    return <Navigate to="/destination-luxury-weddings" replace />;
  }

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
      galleryImages={service.galleryImages}
      galleryTitle={service.galleryTitle}
    />
  );
};
