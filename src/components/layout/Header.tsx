import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

interface SubNavItem {
  name: string;
  href: string;
  description?: string;
}

interface NavItem {
  name: string;
  href?: string;
  children?: SubNavItem[];
}

const navigation: NavItem[] = [
  {
    name: "Weddings",
    href: "/weddings",
    children: [
      { name: "All Wedding Services", href: "/weddings" },
      { name: "Weddings at Petra", href: "/weddings/petra" },
      { name: "Weddings at Wadi Rum", href: "/weddings/wadi-rum" },
      { name: "Weddings at the Dead Sea", href: "/weddings/dead-sea" },
      { name: "Weddings in Amman", href: "/weddings/amman" },
    ],
  },
  { name: "Gala Dinners", href: "/gala-dinners" },
  { name: "Corporate", href: "/corporate-events" },
  { name: "Exhibitions", href: "/exhibitions" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Contact", href: "/contact" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [location]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isMobileMenuOpen]);

  const isActiveRoute = (href?: string) => {
    if (!href) return false;
    return location.pathname === href || location.pathname.startsWith(href + "/");
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled
          ? "bg-background/95 backdrop-blur-md py-4"
          : "bg-transparent py-6"
      )}
    >
      <div className="container-wide flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="relative z-10">
          <span className="font-accent text-xl md:text-2xl text-primary tracking-[0.3em] uppercase">
            Maranasi
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav ref={dropdownRef} className="hidden lg:flex items-center gap-1">
          {navigation.map((item) => (
            <div key={item.name} className="relative">
              {item.children ? (
                <button
                  onClick={() => setActiveDropdown(activeDropdown === item.name ? null : item.name)}
                  onMouseEnter={() => setActiveDropdown(item.name)}
                  className={cn(
                    "flex items-center gap-1 px-4 py-2 text-sm tracking-wide transition-colors duration-300",
                    activeDropdown === item.name || isActiveRoute(item.href)
                      ? "text-primary"
                      : "text-foreground/70 hover:text-foreground"
                  )}
                >
                  {item.name}
                  <ChevronDown
                    className={cn(
                      "w-3.5 h-3.5 transition-transform duration-300",
                      activeDropdown === item.name && "rotate-180"
                    )}
                  />
                </button>
              ) : (
                <Link
                  to={item.href!}
                  className={cn(
                    "px-4 py-2 text-sm tracking-wide transition-colors duration-300",
                    isActiveRoute(item.href)
                      ? "text-primary"
                      : "text-foreground/70 hover:text-foreground"
                  )}
                >
                  {item.name}
                </Link>
              )}

              {/* Dropdown */}
              {item.children && activeDropdown === item.name && (
                <div
                  onMouseLeave={() => setActiveDropdown(null)}
                  className="absolute top-full left-0 pt-2"
                >
                  <div className="bg-card border border-border/50 min-w-[260px] py-2">
                    {item.children.map((child) => (
                      <Link
                        key={child.name}
                        to={child.href}
                        className={cn(
                          "block px-5 py-2.5 text-sm transition-colors duration-200",
                          isActiveRoute(child.href)
                            ? "text-primary bg-secondary/30"
                            : "text-foreground/70 hover:text-primary hover:bg-secondary/20"
                        )}
                      >
                        {child.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* CTA Button - Desktop */}
        <Link
          to="/contact"
          className="hidden lg:inline-flex btn-outline text-xs"
        >
          Request a Proposal
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden relative z-10 p-2 -mr-2"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6 text-foreground" />
          ) : (
            <Menu className="w-6 h-6 text-foreground" />
          )}
        </button>
      </div>

      {/* Mobile Menu - Full screen overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden fixed inset-0 bg-background z-40"
          >
            <div className="pt-24 pb-8 px-8 h-full flex flex-col">
              <nav className="space-y-2 flex-1">
                {navigation.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05, duration: 0.3 }}
                    className="border-b border-border/30"
                  >
                    {item.children ? (
                      <div>
                        <Link
                          to={item.href || "#"}
                          className="block py-4 font-display text-2xl font-medium text-foreground"
                        >
                          {item.name}
                        </Link>
                        <div className="pl-4 pb-3 space-y-1">
                          {item.children.slice(1).map((child) => (
                            <Link
                              key={child.name}
                              to={child.href}
                              className="block py-1.5 text-sm text-muted-foreground hover:text-primary transition-colors"
                            >
                              {child.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <Link
                        to={item.href!}
                        className="block py-4 font-display text-2xl font-medium text-foreground hover:text-primary transition-colors"
                      >
                        {item.name}
                      </Link>
                    )}
                  </motion.div>
                ))}
              </nav>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <Link to="/contact" className="btn-primary w-full justify-center">
                  Request a Proposal
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
