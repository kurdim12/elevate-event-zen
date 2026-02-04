import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navigation = [
  { name: "Services", href: "/services" },
  { name: "Corporate", href: "/corporate-events" },
  { name: "Weddings", href: "/weddings" },
  { name: "Brand Activations", href: "/brand-activations" },
  { name: "Destinations", href: "/destinations" },
  { name: "Contact", href: "/contact" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-subtle py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container-wide flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="relative z-10">
          <span className="font-serif text-2xl md:text-3xl font-medium tracking-tight text-foreground">
            Maranasi
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-10">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={`text-sm font-medium tracking-wide transition-colors duration-300 hover:text-primary ${
                location.pathname === item.href
                  ? "text-primary"
                  : "text-foreground/80"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* CTA Button - Desktop */}
        <Link
          to="/contact"
          className="hidden lg:inline-flex btn-primary"
        >
          Request Proposal
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden relative z-10 p-2"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6 text-foreground" />
          ) : (
            <Menu className="w-6 h-6 text-foreground" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed inset-0 bg-background transition-opacity duration-300 ${
          isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <nav className="flex flex-col items-center justify-center h-full gap-8">
          {navigation.map((item, index) => (
            <Link
              key={item.name}
              to={item.href}
              className={`text-2xl font-serif font-medium transition-all duration-300 ${
                isMobileMenuOpen
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              {item.name}
            </Link>
          ))}
          <Link
            to="/contact"
            className={`btn-primary mt-4 transition-all duration-300 ${
              isMobileMenuOpen
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: "300ms" }}
          >
            Request Proposal
          </Link>
        </nav>
      </div>
    </header>
  );
}
