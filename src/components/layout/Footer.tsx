import { Link } from "react-router-dom";
import { Instagram, Youtube, Linkedin, Facebook } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background">
      {/* Main Footer */}
      <div className="container-wide py-16 md:py-20">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-6">
          {/* Brand */}
          <div className="lg:col-span-5">
            <Link to="/" className="inline-block mb-6">
              <span className="font-serif text-2xl md:text-3xl font-medium text-background tracking-[-0.02em]">
                Maranasi
              </span>
            </Link>
            <p className="text-[14px] text-background/40 leading-[1.7] max-w-xs mb-6">
              Crafting extraordinary events across Jordan, the UAE, Saudi Arabia, 
              and beyond. Where vision meets flawless execution.
            </p>
            <a 
              href="mailto:hello@maranasi.com" 
              className="inline-flex items-center text-[13px] tracking-[0.12em] text-background/35 uppercase hover:text-background/70 transition-colors duration-500 group"
            >
              <span className="mr-3">hello@maranasi.com</span>
              <span className="w-5 h-px bg-background/15 group-hover:w-10 group-hover:bg-background/50 transition-all duration-600" />
            </a>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-3 lg:col-start-7">
            <p className="text-[11px] tracking-[0.18em] text-background/25 uppercase mb-5">
              Services
            </p>
            <ul className="space-y-2.5">
              {[
                { name: "Corporate Events", href: "/corporate-events" },
                { name: "Weddings", href: "/destination-luxury-weddings" },
                { name: "Blog", href: "/blog" },
                { name: "FAQs", href: "/faqs" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-[14px] text-background/40 hover:text-background/75 transition-colors duration-400"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Secondary Nav */}
          <div className="lg:col-span-2">
            <p className="text-[11px] tracking-[0.18em] text-background/25 uppercase mb-5">
              Company
            </p>
            <ul className="space-y-2.5">
              {[
                { name: "Work", href: "/work" },
                { name: "About", href: "/about" },
                { name: "Destinations", href: "/destinations" },
                { name: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-[14px] text-background/40 hover:text-background/75 transition-colors duration-400"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Location */}
          <div className="lg:col-span-2">
            <p className="text-[11px] tracking-[0.18em] text-background/25 uppercase mb-5">
              Based in
            </p>
            <p className="text-[14px] text-background/45">
              Amman, Jordan
            </p>
            <p className="text-[12px] text-background/25 mt-1">
              Operating globally
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-background/8">
        <div className="container-wide py-5 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-background/25 text-[11px] tracking-wide">
            © {currentYear} Maranasi
          </p>
          <div className="flex items-center gap-5">
            <a 
              href="https://www.instagram.com/maranasi.mena" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-background/40 hover:text-background/70 transition-colors duration-400"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a 
              href="https://www.youtube.com/@MaraNasiForEvents" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-background/40 hover:text-background/70 transition-colors duration-400"
              aria-label="YouTube"
            >
              <Youtube className="w-5 h-5" />
            </a>
            <a 
              href="https://jo.linkedin.com/company/maranasi" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-background/40 hover:text-background/70 transition-colors duration-400"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a 
              href="https://www.facebook.com/people/MaraNasi/100095634037516/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-background/40 hover:text-background/70 transition-colors duration-400"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
