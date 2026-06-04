import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import pdfAsset from "@/assets/Maranasi.pdf.asset.json";

export default function Brochure() {
  return (
    <Layout>
      <SEO
        title="Maranasi Brochure | Luxury Event Planning Jordan"
        description="Maranasi private brochure — luxury event planning and production in Jordan."
        canonicalPath="/brochure"
      />
      <section className="pt-32 pb-10">
        <div className="container-wide flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <div>
            <p className="section-label mb-3">Private</p>
            <h1 className="heading-display">The Maranasi Brochure</h1>
          </div>
          <a
            href={pdfAsset.url}
            download="Maranasi.pdf"
            className="btn-outline text-xs self-start sm:self-auto"
          >
            Download PDF
          </a>
        </div>
      </section>

      <section className="pb-24">
        <div className="container-wide">
          <div className="w-full bg-card border border-border/40" style={{ height: "85vh" }}>
            <object
              data={pdfAsset.url}
              type="application/pdf"
              className="w-full h-full"
              aria-label="Maranasi Brochure PDF"
            >
              <iframe
                src={pdfAsset.url}
                title="Maranasi Brochure"
                className="w-full h-full"
              />
              <div className="p-8 text-center text-muted-foreground">
                Your browser cannot display the PDF inline.{" "}
                <a href={pdfAsset.url} className="text-primary underline" download>
                  Download it here
                </a>
                .
              </div>
            </object>
          </div>
        </div>
      </section>
    </Layout>
  );
}
