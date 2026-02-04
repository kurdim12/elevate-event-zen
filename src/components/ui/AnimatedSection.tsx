import { ReactNode, useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  animation?: "fade-in" | "fade-in-up" | "slide-in-right";
}

export function AnimatedSection({
  children,
  className,
  delay = 0,
  animation = "fade-in-up",
}: AnimatedSectionProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  const animationClass = {
    "fade-in": "animate-fade-in",
    "fade-in-up": "animate-fade-in-up",
    "slide-in-right": "animate-slide-in-right",
  }[animation];

  return (
    <div
      ref={ref}
      className={cn(className)}
      style={{
        opacity: isVisible ? undefined : 0,
        animationDelay: isVisible ? `${delay}ms` : undefined,
      }}
    >
      <div className={isVisible ? animationClass : ""} style={{ animationDelay: `${delay}ms` }}>
        {children}
      </div>
    </div>
  );
}
