import { useEffect } from "react";
import brochure from "@/assets/maranasi-brochure.pdf.asset.json";
import { SEO } from "@/components/SEO";

export default function Brochure() {
  useEffect(() => {
    document.title = "Maranasi Brochure";
  }, []);

  return (
    <>
      <SEO
        title="Maranasi Brochure"
        description="Private Maranasi brochure."
        noIndex
      />
      <div className="min-h-screen bg-background flex flex-col">
        <div className="container-wide py-6 flex items-center justify-between">
          <h1 className="font-serif text-2xl">Maranasi Brochure</h1>
          <a
            href={brochure.url}
            download="Maranasi-Brochure.pdf"
            className="btn-primary"
          >
            Download PDF
          </a>
        </div>
        <div className="flex-1 w-full">
          <iframe
            src={brochure.url}
            title="Maranasi Brochure"
            className="w-full h-[calc(100vh-96px)] border-0"
          />
        </div>
      </div>
    </>
  );
}
