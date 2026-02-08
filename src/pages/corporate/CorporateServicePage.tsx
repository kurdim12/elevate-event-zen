import { useParams, Navigate } from "react-router-dom";
import { SubServicePageLayout } from "@/components/services/SubServicePageLayout";
import { corporateServices } from "@/data/services";
import { corporateGalleries } from "@/data/corporate-gallery";

const CorporateServicePage = () => {
  const { serviceSlug } = useParams<{ serviceSlug: string }>();

  const service = corporateServices.find(s => s.slug === serviceSlug);

  if (!service) {
    return <Navigate to="/corporate-events" replace />;
  }

  const galleryImages = corporateGalleries[service.slug];
  const heroImage = galleryImages?.[0]?.src;

  return (
    <SubServicePageLayout
      metaTitle={service.metaTitle}
      metaDescription={service.metaDescription}
      canonicalPath={`/corporate-events/${service.slug}`}
      h1={service.h1}
      content={service.content}
      features={service.features}
      ctaText={service.ctaText}
      parentLink={{ label: "Corporate Events", href: "/corporate-events" }}
      heroImage={heroImage}
      heroImageAlt={galleryImages?.[0]?.alt}
      galleryImages={galleryImages}
      galleryTitle="Our Work"
    />
  );
};

export default CorporateServicePage;
