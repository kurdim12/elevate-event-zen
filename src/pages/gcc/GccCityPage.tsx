import { useParams, Link, Navigate } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { getGccCity, GccCityLang } from "@/data/gcc-cities";

interface GccCityPageProps {
  lang: GccCityLang;
}

export default function GccCityPage({ lang }: GccCityPageProps) {
  const { citySlug } = useParams<{ citySlug: string }>();
  const city = citySlug ? getGccCity(citySlug) : undefined;

  if (!city) {
    return <Navigate to="/" replace />;
  }

  const content = city[lang];
  const isAr = lang === "ar";

  const enPath = `/gcc/cities/${city.slug}`;
  const arPath = `/ar/gcc/cities/${city.slug}`;
  const canonicalPath = isAr ? arPath : enPath;

  const hreflangAlternates = [
    { hreflang: "en", path: enPath },
    { hreflang: "ar", path: arPath },
    { hreflang: "x-default", path: enPath },
  ];

  const countryPathEn = `/gcc/${city.countrySlug}`;
  const countryPathAr = `/ar/gcc/${city.countrySlug}`;
  const countryPath = isAr ? countryPathAr : countryPathEn;

  const breadcrumbs = [
    { name: isAr ? "الرئيسية" : "Home", url: "https://maranasi.com/" },
    {
      name: isAr ? "دول الخليج" : "GCC",
      url: `https://maranasi.com${isAr ? "/ar/gcc" : "/gcc"}`,
    },
    { name: content.eyebrow, url: `https://maranasi.com${canonicalPath}` },
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: content.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: isAr ? "تخطيط فعاليات فاخرة" : "Luxury Event Planning",
    provider: {
      "@type": "LocalBusiness",
      name: "Maranasi",
      url: "https://maranasi.com/",
      telephone: "+962796565971",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Abu Hudayb Street",
        addressLocality: "Amman",
        addressCountry: "JO",
      },
    },
    areaServed: {
      "@type": "City",
      name: content.eyebrow,
      containedInPlace: {
        "@type": "Country",
        identifier: city.isoCountry,
      },
    },
    name: content.h1,
    description: content.description,
    url: `https://maranasi.com${canonicalPath}`,
  };

  return (
    <Layout>
      <SEO
        title={content.title}
        description={content.description}
        keywords={content.keywords}
        canonicalPath={canonicalPath}
        breadcrumbs={breadcrumbs}
        jsonLd={[serviceSchema, faqSchema]}
        hreflangAlternates={hreflangAlternates}
        locale={isAr ? "ar_JO" : "en_US"}
      />

      <article
        dir={isAr ? "rtl" : "ltr"}
        className={isAr ? "text-right" : "text-left"}
      >
        {/* Hero */}
        <section className="section-padding bg-background">
          <div className="container-wide max-w-4xl">
            <p className="text-[11px] tracking-[0.22em] text-muted-foreground/80 uppercase mb-6">
              {content.eyebrow}
            </p>
            <h1 className="heading-xl mb-6">{content.h1}</h1>
            <p className="text-lg text-muted-foreground/90 leading-relaxed">
              {content.subhead}
            </p>
          </div>
        </section>

        {/* Intro */}
        <section className="section-padding bg-ivory-dark">
          <div className="container-wide max-w-3xl space-y-6">
            {content.intro.map((p, i) => (
              <p
                key={i}
                className="text-base md:text-lg text-foreground/80 leading-relaxed"
              >
                {p}
              </p>
            ))}
          </div>
        </section>

        {/* Services */}
        <section className="section-padding bg-background">
          <div className="container-wide max-w-5xl">
            <h2 className="heading-lg mb-12">{content.servicesTitle}</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {content.services.map((s, i) => (
                <div key={i} className="border border-border/50 p-6">
                  <h3 className="font-serif text-xl mb-3">{s.title}</h3>
                  <p className="text-muted-foreground/90 leading-relaxed">
                    {s.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why */}
        <section className="section-padding bg-ivory-dark">
          <div className="container-wide max-w-3xl">
            <h2 className="heading-lg mb-8">{content.whyTitle}</h2>
            <ul className="space-y-3">
              {content.why.map((w, i) => (
                <li
                  key={i}
                  className="text-base md:text-lg text-foreground/85 leading-relaxed border-b border-border/40 pb-3"
                >
                  {w}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* FAQ */}
        <section className="section-padding bg-background">
          <div className="container-wide max-w-3xl">
            <h2 className="heading-lg mb-8">{content.faqTitle}</h2>
            <Accordion type="single" collapsible className="space-y-4">
              {content.faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`faq-${index}`}
                  className="border border-border/50 px-6"
                >
                  <AccordionTrigger className="text-left font-serif text-lg py-5 hover:no-underline">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground/90 pb-5">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* CTA + internal link back to country */}
        <section className="section-padding bg-ivory-dark">
          <div className="container-wide max-w-2xl text-center">
            <h2 className="heading-lg mb-4">{content.ctaTitle}</h2>
            <p className="text-muted-foreground/90 mb-8">{content.ctaBody}</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/contact" className="btn-primary">
                {content.ctaButton}
              </Link>
              <Link
                to={countryPath}
                className="text-sm uppercase tracking-[0.18em] underline-offset-4 hover:underline self-center"
              >
                {isAr
                  ? `← العودة إلى صفحة الدولة`
                  : `← View country page`}
              </Link>
            </div>
          </div>
        </section>
      </article>
    </Layout>
  );
}
