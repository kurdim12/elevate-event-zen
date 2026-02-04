import { Link } from "react-router-dom";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background">
      {/* Main Footer */}
      <div className="container-wide py-20 md:py-28">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-8">
          {/* Brand - Takes more space */}
          <div className="lg:col-span-5">
            <Link to="/" className="inline-block mb-8">
              <span className="font-serif text-3xl md:text-4xl font-medium text-background">
                Maranasi
              </span>
            </Link>
            <p className="text-background/50 leading-relaxed max-w-sm mb-8">
              Crafting extraordinary events across Jordan, the UAE, Saudi Arabia, 
              and beyond. Where vision meets flawless execution.
            </p>
            <a 
              href="mailto:hello@maranasi.com" 
              className="inline-flex items-center text-sm tracking-[0.15em] text-background/40 uppercase hover:text-background transition-colors duration-500 group"
            >
              <span className="mr-4">hello@maranasi.com</span>
              <span className="w-6 h-px bg-background/20 group-hover:w-12 group-hover:bg-background transition-all duration-500" />
            </a>
          </div>

          {/* Navigation - Minimal */}
          <div className="lg:col-span-3 lg:col-start-7">
            <p className="text-xs tracking-[0.2em] text-background/30 uppercase mb-6">
              Services
            </p>
            <ul className="space-y-3">
              {[
                { name: "Corporate", href: "/corporate-events" },
                { name: "Weddings", href: "/weddings" },
                { name: "Brand Activations", href: "/brand-activations" },
                { name: "Private Events", href: "/private-events" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-background/50 hover:text-background transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Secondary Nav */}
          <div className="lg:col-span-2">
            <p className="text-xs tracking-[0.2em] text-background/30 uppercase mb-6">
              Company
            </p>
            <ul className="space-y-3">
              {[
                { name: "Work", href: "/work" },
                { name: "About", href: "/about" },
                { name: "Destinations", href: "/destinations" },
                { name: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-background/50 hover:text-background transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Location */}
          <div className="lg:col-span-2">
            <p className="text-xs tracking-[0.2em] text-background/30 uppercase mb-6">
              Based in
            </p>
            <p className="text-background/50">
              Amman, Jordan
            </p>
            <p className="text-background/30 text-sm mt-2">
              Operating globally
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Bar - Ultra minimal */}
      <div className="border-t border-background/10">
        <div className="container-wide py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-background/30 text-xs tracking-wide">
            © {currentYear} Maranasi
          </p>
          <div className="flex gap-8">
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-background/30 hover:text-background/60 transition-colors text-xs tracking-wide"
            >
              Instagram
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-background/30 hover:text-background/60 transition-colors text-xs tracking-wide"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
