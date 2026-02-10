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
  { label: "a luxury wedding", value: "wedding", href: "/destination-luxury-weddings" },
  { label: "a brand activation", value: "activation", href: "/corporate-events" },
  { label: "a destination event", value: "destination", href: "/destinations" },
];

const destinations: Option[] = [
  { label: "Jordan", value: "jordan", href: "/destinations?region=jordan" },
  { label: "the UAE", value: "uae", href: "/destinations?region=uae" },
  { label: "Saudi Arabia", value: "saudi", href: "/destinations?region=saudi" },
  { label: "anywhere", value: "international", href: "/destinations?region=international" },
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
          "inline-flex items-center gap-1.5 border-b transition-all duration-700 pb-0.5",
          selected 
            ? "border-foreground/25 text-foreground" 
            : "border-foreground/15 text-foreground/45 hover:border-foreground/30 hover:text-foreground/65"
        )}
      >
        <span className="italic">
          {selected ? selected.label : placeholder}
        </span>
        <ChevronDown 
          className={cn(
            "w-3.5 h-3.5 transition-transform duration-500 flex-shrink-0 opacity-40",
            isOpen && "rotate-180"
          )} 
        />
      </button>

      <div
        className={cn(
          "absolute left-0 top-full mt-3 z-50 transition-all duration-500",
          isOpen
            ? "opacity-100 visible translate-y-0"
            : "opacity-0 invisible -translate-y-1.5"
        )}
      >
        <div className="bg-background border border-border shadow-elevated py-1.5 min-w-[180px]">
          {options.map((option) => (
            <button
              key={option.value}
              onClick={() => {
                onSelect(option);
                setIsOpen(false);
              }}
              className={cn(
                "block w-full text-left px-4 py-2.5 text-[15px] transition-colors duration-300",
                selected?.value === option.value
                  ? "text-foreground bg-secondary/40"
                  : "text-muted-foreground hover:text-foreground hover:bg-secondary/25"
              )}
            >
              <span className="italic">{option.label}</span>
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
    <section className="py-20 md:py-24 lg:py-28 bg-ivory-dark">
      <div className="container-narrow">
        <AnimatedSection>
          <div className="text-center">
            <h2 className="font-serif text-xl md:text-2xl lg:text-[1.75rem] font-normal leading-[1.5] text-foreground">
              We design{" "}
              <InlineDropdown
                options={eventTypes}
                selected={selectedEvent}
                onSelect={setSelectedEvent}
                placeholder="exceptional experiences"
              />{" "}
              in{" "}
              <InlineDropdown
                options={destinations}
                selected={selectedDestination}
                onSelect={setSelectedDestination}
                placeholder="remarkable places"
              />
            </h2>

            <div 
              className={cn(
                "mt-12 transition-all duration-700",
                canExplore 
                  ? "opacity-100 translate-y-0" 
                  : "opacity-0 translate-y-3 pointer-events-none"
              )}
            >
              <button
                onClick={handleExplore}
                className="text-[13px] tracking-[0.18em] uppercase text-muted-foreground hover:text-foreground transition-colors duration-500"
              >
                Explore →
              </button>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
