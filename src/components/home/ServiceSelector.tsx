import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

interface Option {
  label: string;
  value: string;
  href: string;
}

const eventTypes: Option[] = [
  { label: "a corporate event", value: "corporate", href: "/corporate-events" },
  { label: "a luxury wedding", value: "wedding", href: "/weddings" },
  { label: "a brand activation", value: "activation", href: "/brand-activations" },
  { label: "a private celebration", value: "private", href: "/private-events" },
];

const destinations: Option[] = [
  { label: "Jordan", value: "jordan", href: "/destinations?region=jordan" },
  { label: "the UAE", value: "uae", href: "/destinations?region=uae" },
  { label: "Saudi Arabia", value: "saudi", href: "/destinations?region=saudi" },
  { label: "anywhere in the world", value: "international", href: "/destinations?region=international" },
];

interface InlineDropdownProps {
  options: Option[];
  selected: Option | null;
  onSelect: (option: Option) => void;
  placeholder: string;
}

function InlineDropdown({ options, selected, onSelect, placeholder }: InlineDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <span ref={dropdownRef} className="relative inline-block">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "inline-flex items-center gap-1 border-b-2 transition-all duration-300 pb-1",
          selected 
            ? "border-primary text-primary" 
            : "border-foreground/30 text-foreground/60 hover:border-foreground/50 hover:text-foreground/80"
        )}
      >
        <span className="font-serif italic">
          {selected ? selected.label : placeholder}
        </span>
        <ChevronDown 
          className={cn(
            "w-4 h-4 transition-transform duration-300 flex-shrink-0",
            isOpen && "rotate-180"
          )} 
        />
      </button>

      <div
        className={cn(
          "absolute left-0 top-full mt-3 z-50 transition-all duration-300",
          isOpen
            ? "opacity-100 visible translate-y-0"
            : "opacity-0 invisible -translate-y-2"
        )}
      >
        <div className="bg-background border border-border/50 shadow-lg rounded-sm py-2 min-w-[220px]">
          {options.map((option) => (
            <button
              key={option.value}
              onClick={() => {
                onSelect(option);
                setIsOpen(false);
              }}
              className={cn(
                "block w-full text-left px-5 py-3 text-base transition-colors duration-200",
                selected?.value === option.value
                  ? "bg-secondary/50 text-primary"
                  : "text-foreground/80 hover:bg-secondary/30 hover:text-foreground"
              )}
            >
              <span className="font-serif italic">{option.label}</span>
            </button>
          ))}
        </div>
      </div>
    </span>
  );
}

export function ServiceSelector() {
  const [selectedEvent, setSelectedEvent] = useState<Option | null>(null);
  const [selectedDestination, setSelectedDestination] = useState<Option | null>(null);
  const navigate = useNavigate();

  const handleExplore = () => {
    if (selectedEvent) {
      navigate(selectedEvent.href);
    } else if (selectedDestination) {
      navigate(selectedDestination.href);
    }
  };

  const canExplore = selectedEvent || selectedDestination;

  return (
    <section className="py-20 md:py-28 bg-secondary/20">
      <div className="container-wide">
        <AnimatedSection>
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-sm tracking-[0.2em] text-muted-foreground uppercase mb-8">
              Find Your Experience
            </p>
            
            <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-medium leading-relaxed md:leading-relaxed lg:leading-relaxed">
              We specialize in crafting{" "}
              <InlineDropdown
                options={eventTypes}
                selected={selectedEvent}
                onSelect={setSelectedEvent}
                placeholder="select event type"
              />{" "}
              <span className="block md:inline mt-2 md:mt-0">
                in{" "}
                <InlineDropdown
                  options={destinations}
                  selected={selectedDestination}
                  onSelect={setSelectedDestination}
                  placeholder="select destination"
                />
              </span>
            </h2>

            <div 
              className={cn(
                "mt-12 transition-all duration-500",
                canExplore 
                  ? "opacity-100 translate-y-0" 
                  : "opacity-0 translate-y-4 pointer-events-none"
              )}
            >
              <button
                onClick={handleExplore}
                className="btn-primary"
              >
                Explore {selectedEvent ? selectedEvent.label.replace(/^a /, "") : "Services"}
              </button>
            </div>

            <p className="mt-8 text-sm text-muted-foreground">
              Or browse our{" "}
              <a href="/services" className="underline underline-offset-4 hover:text-foreground transition-colors">
                complete services
              </a>{" "}
              and{" "}
              <a href="/work" className="underline underline-offset-4 hover:text-foreground transition-colors">
                portfolio
              </a>
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
