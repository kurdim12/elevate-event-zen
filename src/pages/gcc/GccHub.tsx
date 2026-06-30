import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { gccCountries } from "@/data/gcc-countries";
import { gccCities } from "@/data/gcc-cities";

interface GccHubProps {
  lang: "en" | "ar";
}

export default function GccHub({ lang }: GccHubProps) {
  const isAr = lang === "ar";
  const enPath = "/gcc";
  const arPath = "/ar/gcc";
  const canonicalPath = isAr ? arPath : enPath;

  const t = isAr
    ? {
        title: "تخطيط فعاليات فاخرة في دول الخليج | مرناسي",
        description:
          "مرناسي تخطّط الأعراس الفاخرة، حفلات العشاء، المؤتمرات والفعاليات الترويجية في دول الخليج — السعودية والإمارات وقطر — من عمّان، الأردن.",
        eyebrow: "دول الخليج · MENA",
        h1: "تخطيط فعاليات فاخرة في دول الخليج",
        sub: "وكالة من عمّان تعمل عبر السعودية والإمارات وقطر — أعراس، حفلات غالا، مؤتمرات وفعاليات ترويجية بإنتاج داخلي.",
        countriesTitle: "الدول",
        citiesTitle: "المدن الرئيسية",
        intro:
          "نعمل في كل دول الخليج الكبرى. ينتقل فريق الإنتاج إلى الموقع، ونعتمد على شبكة من المورّدين المحليين الموثوقين. السرية والبروتوكول والإدارة ثنائية اللغة معيار قياسي.",
        ctaTitle: "ابدأ مشروعك",
        ctaBody:
          "أخبرنا بالفكرة. نردّ شخصيًا على كل طلب خلال يوم عمل واحد.",
        ctaButton: "ابدأ المحادثة",
      }
    : {
        title: "Luxury Event Planner for the GCC | Maranasi",
        description:
          "Maranasi plans luxury weddings, gala dinners, conferences and brand activations across the GCC — Saudi Arabia, UAE and Qatar — produced from Amman, Jordan.",
        eyebrow: "GCC · MENA",
        h1: "Luxury Event Planning across the GCC",
        sub: "An Amman-based agency working across Saudi Arabia, the UAE and Qatar — weddings, gala dinners, conferences and brand activations produced in-house.",
        countriesTitle: "Countries",
        citiesTitle: "Cities we plan in",
        intro:
          "We work across every major GCC market. Our production team travels to site and we partner with a vetted local supplier network. Discretion, protocol awareness and bilingual run-of-show are standard.",
        ctaTitle: "Start a project",
        ctaBody:
          "Tell us about the brief. We respond personally to every enquiry within one working day.",
        ctaButton: "Start a Conversation",
      };

  const hreflangAlternates = [
    { hreflang: "en", path: enPath },
    { hreflang: "ar", path: arPath },
    { hreflang: "x-default", path: enPath },
  ];

  const breadcrumbs = [
    { name: isAr ? "الرئيسية" : "Home", url: "https://maranasi.com/" },
    {
      name: isAr ? "دول الخليج" : "GCC",
      url: `https://maranasi.com${canonicalPath}`,
    },
  ];

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: t.h1,
    itemListElement: [
      ...gccCountries.map((c, i) => ({
        "@type": "ListItem",
        position: i + 1,
        url: `https://maranasi.com${isAr ? `/ar/gcc/${c.slug}` : `/gcc/${c.slug}`}`,
        name: c[lang].eyebrow,
      })),
      ...gccCities.map((c, i) => ({
        "@type": "ListItem",
        position: gccCountries.length + i + 1,
        url: `https://maranasi.com${isAr ? `/ar/gcc/cities/${c.slug}` : `/gcc/cities/${c.slug}`}`,
        name: c[lang].eyebrow,
      })),
    ],
  };

  return (
    <Layout>
      <SEO
        title={t.title}
        description={t.description}
        canonicalPath={canonicalPath}
        breadcrumbs={breadcrumbs}
        jsonLd={[itemListSchema]}
        hreflangAlternates={hreflangAlternates}
        locale={isAr ? "ar_JO" : "en_US"}
      />

      <article
        dir={isAr ? "rtl" : "ltr"}
        className={isAr ? "text-right" : "text-left"}
      >
        <section className="section-padding bg-background">
          <div className="container-wide max-w-4xl">
            <p className="text-[11px] tracking-[0.22em] text-muted-foreground/80 uppercase mb-6">
              {t.eyebrow}
            </p>
            <h1 className="heading-xl mb-6">{t.h1}</h1>
            <p className="text-lg text-muted-foreground/90 leading-relaxed">
              {t.sub}
            </p>
            <p className="mt-6 text-base md:text-lg text-foreground/80 leading-relaxed">
              {t.intro}
            </p>
          </div>
        </section>

        <section className="section-padding bg-ivory-dark">
          <div className="container-wide max-w-5xl">
            <h2 className="heading-lg mb-10">{t.countriesTitle}</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {gccCountries.map((c) => {
                const href = isAr ? `/ar/gcc/${c.slug}` : `/gcc/${c.slug}`;
                return (
                  <Link
                    key={c.slug}
                    to={href}
                    className="border border-border/50 p-6 hover:border-foreground/40 transition-colors block"
                  >
                    <h3 className="font-serif text-xl mb-2">
                      {c[lang].eyebrow}
                    </h3>
                    <p className="text-sm text-muted-foreground/90 leading-relaxed">
                      {c[lang].subhead}
                    </p>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        <section className="section-padding bg-background">
          <div className="container-wide max-w-5xl">
            <h2 className="heading-lg mb-10">{t.citiesTitle}</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {gccCities.map((c) => {
                const href = isAr
                  ? `/ar/gcc/cities/${c.slug}`
                  : `/gcc/cities/${c.slug}`;
                return (
                  <Link
                    key={c.slug}
                    to={href}
                    className="border border-border/50 p-6 hover:border-foreground/40 transition-colors block"
                  >
                    <h3 className="font-serif text-xl mb-2">
                      {c[lang].eyebrow}
                    </h3>
                    <p className="text-sm text-muted-foreground/90 leading-relaxed">
                      {c[lang].subhead}
                    </p>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        <section className="section-padding bg-ivory-dark">
          <div className="container-wide max-w-2xl text-center">
            <h2 className="heading-lg mb-4">{t.ctaTitle}</h2>
            <p className="text-muted-foreground/90 mb-8">{t.ctaBody}</p>
            <Link to="/contact" className="btn-primary">
              {t.ctaButton}
            </Link>
          </div>
        </section>
      </article>
    </Layout>
  );
}
