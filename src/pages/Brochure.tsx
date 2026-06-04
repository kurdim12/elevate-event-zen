import { useEffect } from "react";
import brochure from "@/assets/maranasi-brochure.pdf.asset.json";
import { SEO } from "@/components/SEO";
import { Download, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export default function Brochure() {
  useEffect(() => {
    document.title = "Maranasi — Private Brochure";
  }, []);

  return (
    <>
      <SEO
        title="Maranasi — Private Brochure"
        description="A private look inside Maranasi — Jordan's luxury event atelier."
      />
      <div className="min-h-screen bg-charcoal text-ivory flex flex-col">
        {/* Top bar */}
        <header className="border-b border-ivory/10">
          <div className="container-wide py-5 flex items-center justify-between gap-6">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-[12px] uppercase tracking-[0.18em] text-ivory/70 hover:text-gold transition-colors duration-500"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              Maranasi
            </Link>

            <div className="hidden md:flex flex-col items-center text-center">
              <span className="text-[10px] uppercase tracking-[0.32em] text-gold/80">
                Private Brochure
              </span>
              <span className="font-serif text-lg italic text-ivory/90 mt-0.5">
                For our esteemed clients
              </span>
            </div>

            <a
              href={brochure.url}
              download="Maranasi-Brochure.pdf"
              className="inline-flex items-center gap-2 px-5 md:px-6 py-3 bg-gold text-charcoal
                         text-[11px] md:text-[12px] font-medium uppercase tracking-[0.18em]
                         transition-all duration-500 ease-out hover:bg-ivory"
            >
              <Download className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Download PDF</span>
              <span className="sm:hidden">PDF</span>
            </a>
          </div>
        </header>

        {/* PDF viewer */}
        <main className="flex-1 w-full bg-[#1a1714] p-3 md:p-6 lg:p-10">
          <div className="mx-auto max-w-6xl h-full">
            <div className="relative h-[calc(100vh-180px)] md:h-[calc(100vh-200px)] shadow-2xl ring-1 ring-ivory/10 bg-ivory">
              <iframe
                src={`${brochure.url}#view=FitH&toolbar=1`}
                title="Maranasi Brochure"
                className="w-full h-full border-0"
              />
            </div>
            <p className="mt-4 text-center text-[11px] uppercase tracking-[0.24em] text-ivory/40">
              © Maranasi — Amman, Jordan · Confidential
            </p>
          </div>
        </main>
      </div>
    </>
  );
}
