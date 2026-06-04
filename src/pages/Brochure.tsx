import { useEffect } from "react";
import brochure from "@/assets/maranasi-brochure.pdf.asset.json";
import { SEO } from "@/components/SEO";
import { Download, ArrowLeft, ExternalLink } from "lucide-react";
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
          <div className="container-wide py-4 md:py-5 flex items-center justify-between gap-4 md:gap-6">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-[11px] md:text-[12px] uppercase tracking-[0.18em] text-ivory/70 hover:text-gold transition-colors duration-500 shrink-0"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Maranasi</span>
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
              className="inline-flex items-center gap-2 px-4 md:px-6 py-2.5 md:py-3 bg-gold text-charcoal
                         text-[11px] md:text-[12px] font-medium uppercase tracking-[0.18em]
                         transition-all duration-500 ease-out hover:bg-ivory shrink-0"
            >
              <Download className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Download PDF</span>
              <span className="sm:hidden">PDF</span>
            </a>
          </div>
        </header>

        {/* PDF viewer — desktop */}
        <main className="hidden md:block flex-1 w-full bg-[#1a1714] p-6 lg:p-10">
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

        {/* Mobile fallback */}
        <main className="md:hidden flex-1 flex flex-col items-center justify-center px-6 py-12">
          <div className="text-center max-w-sm">
            <span className="text-[10px] uppercase tracking-[0.32em] text-gold/80 block mb-3">
              Private Brochure
            </span>
            <h1 className="font-serif text-2xl italic text-ivory/90 leading-snug mb-2">
              For our esteemed clients
            </h1>
            <div className="w-8 h-px bg-gold/60 mx-auto my-6" />
            <p className="text-sm text-ivory/50 leading-relaxed mb-8">
              A curated look inside Maranasi — Jordan's premier luxury event atelier.
            </p>

            <div className="flex flex-col gap-3">
              <a
                href={brochure.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-gold text-charcoal
                           text-[12px] font-medium uppercase tracking-[0.18em]
                           transition-all duration-500 ease-out hover:bg-ivory"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                View Brochure
              </a>
              <a
                href={brochure.url}
                download="Maranasi-Brochure.pdf"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 border border-ivory/20 text-ivory
                           text-[12px] font-medium uppercase tracking-[0.18em]
                           transition-all duration-500 ease-out hover:bg-ivory/10"
              >
                <Download className="w-3.5 h-3.5" />
                Download PDF
              </a>
            </div>
          </div>

          <p className="mt-auto pt-12 text-center text-[11px] uppercase tracking-[0.24em] text-ivory/40">
            © Maranasi — Amman, Jordan · Confidential
          </p>
        </main>
      </div>
    </>
  );
}
