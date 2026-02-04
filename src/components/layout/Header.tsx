import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import maransiLogo from "@/assets/maranasi-logo.webp";

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
    name: "Services",
    children: [
      { 
        name: "Corporate Events", 
        href: "/corporate-events",
        description: "Conferences, galas, and executive experiences"
      },
      { 
        name: "Weddings", 
        href: "/weddings",
        description: "Luxury celebrations and destination weddings"
      },
      { 
        name: "Brand Activations", 
        href: "/brand-activations",
        description: "Product launches and immersive brand experiences"
      },
      { 
        name: "Private Events", 
        href: "/private-events",
        description: "Intimate gatherings and milestone celebrations"
      },
    ],
  },
  {
    name: "Destinations",
    children: [
      { 
        name: "Jordan", 
        href: "/destinations?region=jordan",
        description: "Petra, Dead Sea, and Amman"
      },
      { 
        name: "UAE", 
        href: "/destinations?region=uae",
        description: "Dubai and Abu Dhabi"
      },
      { 
        name: "Saudi Arabia", 
        href: "/destinations?region=saudi",
        description: "Riyadh, Jeddah, and AlUla"
      },
      { 
        name: "International", 
        href: "/destinations?region=international",
        description: "Worldwide destination events"
      },
    ],
  },
  { name: "Work", href: "/work" },
  { name: "About", href: "/about" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileExpandedItems, setMobileExpandedItems] = useState<string[]>([]);
  const dropdownRef = useRef<HTMLDivElement>(null);
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
    setActiveDropdown(null);
    setMobileExpandedItems([]);
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

  const toggleMobileExpanded = (name: string) => {
    setMobileExpandedItems((prev) =>
      prev.includes(name) ? prev.filter((item) => item !== name) : [...prev, name]
    );
  };

  const isActiveRoute = (href?: string) => {
    if (!href) return false;
    if (href.includes("?")) {
      return location.pathname === href.split("?")[0];
    }
    return location.pathname === href;
  };

  const hasActiveChild = (children?: SubNavItem[]) => {
    if (!children) return false;
    return children.some((child) => isActiveRoute(child.href));
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled
          ? "bg-background/98 backdrop-blur-md shadow-subtle py-4"
          : "bg-transparent py-6"
      )}
    >
      <div className="container-wide flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="relative z-10">
          <img 
            src={maransiLogo} 
            alt="Maranasi - Serious Business Stunning Events" 
            className="h-10 md:h-12 w-auto"
          />
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
                    "flex items-center gap-1.5 px-4 py-2 text-sm font-medium tracking-wide transition-colors duration-300",
                    activeDropdown === item.name || hasActiveChild(item.children)
                      ? "text-primary"
                      : "text-foreground/80 hover:text-foreground"
                  )}
                >
                  {item.name}
                  <ChevronDown
                    className={cn(
                      "w-4 h-4 transition-transform duration-300",
                      activeDropdown === item.name && "rotate-180"
                    )}
                  />
                </button>
              ) : (
                <Link
                  to={item.href!}
                  className={cn(
                    "px-4 py-2 text-sm font-medium tracking-wide transition-colors duration-300",
                    isActiveRoute(item.href)
                      ? "text-primary"
                      : "text-foreground/80 hover:text-foreground"
                  )}
                >
                  {item.name}
                </Link>
              )}

              {/* Dropdown Menu */}
              {item.children && (
                <div
                  onMouseLeave={() => setActiveDropdown(null)}
                  className={cn(
                    "absolute top-full left-0 pt-2 transition-all duration-300",
                    activeDropdown === item.name
                      ? "opacity-100 visible translate-y-0"
                      : "opacity-0 invisible -translate-y-2"
                  )}
                >
                  <div className="bg-background border border-border/50 shadow-lg rounded-sm min-w-[280px] py-3">
                    {item.children.map((child) => (
                      <Link
                        key={child.name}
                        to={child.href}
                        className={cn(
                          "block px-5 py-3 transition-colors duration-200 group",
                          isActiveRoute(child.href)
                            ? "bg-secondary/50"
                            : "hover:bg-secondary/30"
                        )}
                      >
                        <span
                          className={cn(
                            "block text-sm font-medium transition-colors duration-200",
                            isActiveRoute(child.href)
                              ? "text-primary"
                              : "text-foreground group-hover:text-primary"
                          )}
                        >
                          {child.name}
                        </span>
                        {child.description && (
                          <span className="block text-xs text-muted-foreground mt-0.5">
                            {child.description}
                          </span>
                        )}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* CTA Button - Desktop */}
        <Link to="/contact" className="hidden lg:inline-flex btn-primary">
          Request Proposal
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

      {/* Mobile Menu */}
      <div
        className={cn(
          "lg:hidden fixed inset-0 bg-background transition-all duration-500 overflow-y-auto",
          isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        )}
      >
        <div className="pt-24 pb-8 px-6">
          <nav className="space-y-1">
            {navigation.map((item, index) => (
              <div
                key={item.name}
                className={cn(
                  "border-b border-border/30 transition-all duration-300",
                  isMobileMenuOpen
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-4"
                )}
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                {item.children ? (
                  <>
                    <button
                      onClick={() => toggleMobileExpanded(item.name)}
                      className="flex items-center justify-between w-full py-4 text-left"
                    >
                      <span
                        className={cn(
                          "font-serif text-xl font-medium",
                          hasActiveChild(item.children) && "text-primary"
                        )}
                      >
                        {item.name}
                      </span>
                      <ChevronDown
                        className={cn(
                          "w-5 h-5 text-muted-foreground transition-transform duration-300",
                          mobileExpandedItems.includes(item.name) && "rotate-180"
                        )}
                      />
                    </button>
                    <div
                      className={cn(
                        "overflow-hidden transition-all duration-300",
                        mobileExpandedItems.includes(item.name)
                          ? "max-h-96 opacity-100 pb-4"
                          : "max-h-0 opacity-0"
                      )}
                    >
                      <div className="pl-4 space-y-1">
                        {item.children.map((child) => (
                          <Link
                            key={child.name}
                            to={child.href}
                            className={cn(
                              "block py-3 transition-colors duration-200",
                              isActiveRoute(child.href)
                                ? "text-primary"
                                : "text-muted-foreground hover:text-foreground"
                            )}
                          >
                            <span className="text-base">{child.name}</span>
                            {child.description && (
                              <span className="block text-sm text-muted-foreground/70 mt-0.5">
                                {child.description}
                              </span>
                            )}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <Link
                    to={item.href!}
                    className={cn(
                      "block py-4 font-serif text-xl font-medium transition-colors duration-200",
                      isActiveRoute(item.href)
                        ? "text-primary"
                        : "text-foreground hover:text-primary"
                    )}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          <div
            className={cn(
              "mt-8 transition-all duration-300",
              isMobileMenuOpen
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            )}
            style={{ transitionDelay: "250ms" }}
          >
            <Link to="/contact" className="btn-primary w-full justify-center">
              Request Proposal
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
