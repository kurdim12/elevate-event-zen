import { Link } from "react-router-dom";
import { Instagram, Youtube, Linkedin, Facebook } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card text-foreground">
      {/* Main Footer */}
      <div className="container-wide py-16 md:py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div>
            <Link to="/" className="inline-block mb-6">
              <span className="font-accent text-xl text-primary tracking-[0.3em] uppercase">
                Maranasi
              </span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              Jordan's premier luxury event planning and production company. Serious business & stunning events.
            </p>
          </div>

          {/* Services */}
          <div>
            <p className="font-accent text-[11px] tracking-[0.2em] text-primary uppercase mb-5">
              Services
            </p>
            <ul className="space-y-3">
              {[
                { name: "Weddings", href: "/weddings" },
                { name: "Gala Dinners", href: "/gala-dinners" },
                { name: "Corporate Events", href: "/corporate-events" },
                { name: "Brand Activations", href: "/exhibitions" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Destinations */}
          <div>
            <p className="font-accent text-[11px] tracking-[0.2em] text-primary uppercase mb-5">
              Destinations
            </p>
            <ul className="space-y-3">
              {[
                { name: "Jordan", href: "/destinations" },
                { name: "UAE", href: "/destinations" },
                { name: "Saudi Arabia", href: "/destinations" },
                { name: "Europe", href: "/destinations" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="font-accent text-[11px] tracking-[0.2em] text-primary uppercase mb-5">
              Contact
            </p>
            <div className="space-y-3 text-sm text-muted-foreground">
              <p>Abu Hudayb St, Amman, Jordan</p>
              <a href="tel:+962775240000" className="block hover:text-primary transition-colors">
                +962 77 524 0000
              </a>
              <a href="mailto:gm@maranasi.com" className="block hover:text-primary transition-colors">
                gm@maranasi.com
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border/50">
        <div className="container-wide py-5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-xs">
            © {currentYear} Maranasi. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            <a
              href="https://www.instagram.com/maranasi.mena"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
              aria-label="Instagram"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href="https://www.youtube.com/@MaranasiForEvents"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
              aria-label="YouTube"
            >
              <Youtube className="w-4 h-4" />
            </a>
            <a
              href="https://jo.linkedin.com/company/maranasi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="https://www.facebook.com/people/Maranasi/100095634037516/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
              aria-label="Facebook"
            >
              <Facebook className="w-4 h-4" />
            </a>
          </div>
          <p className="text-[10px] text-muted-foreground/50">
            Maranasi — Luxury Event Planner · Amman, Jordan · Est. 2009
          </p>
        </div>
      </div>
    </footer>
  );
}
