"use client";

import React, { useEffect, useRef, useState } from "react";

interface ScrollRevealProps {
  children: React.ReactNode;
  variant?: "surface-rise" | "center-zoom" | "fade-up" | "scale" | "mask";
  delay?: number;
  className?: string;
  as?: React.ElementType;
}

export function ScrollReveal({
  children,
  variant = "surface-rise",
  delay = 0,
  className = "",
  as: Component = "div",
}: ScrollRevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [status, setStatus] = useState<"below" | "in-view" | "above">("below");
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);

    if (typeof window === "undefined") return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setStatus("in-view");
      return;
    }

    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const rect = entry.boundingClientRect;
          const vh = window.innerHeight;

          if (entry.isIntersecting) {
            setStatus("in-view");
          } else {
            if (rect.bottom <= 20) {
              setStatus("above");
            } else if (rect.top >= vh - 20) {
              setStatus("below");
            }
          }
        });
      },
      {
        root: null,
        rootMargin: "-20px 0px -20px 0px",
        threshold: [0, 0.05],
      }
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
    };
  }, []);

  let transformBelow = "translateY(28px) scale(0.96)";
  let transformAbove = "translateY(-24px) scale(0.97)";

  if (variant === "fade-up") {
    transformBelow = "translateY(24px)";
    transformAbove = "translateY(-20px)";
  } else if (variant === "scale") {
    transformBelow = "scale(0.94)";
    transformAbove = "scale(0.96)";
  }

  let dynamicStyle: React.CSSProperties = {};

  if (!hasMounted) {
    dynamicStyle = {
      opacity: 1,
      transform: "none",
      filter: "none",
    };
  } else if (status === "in-view") {
    dynamicStyle = {
      opacity: 1,
      transform: "translateY(0) scale(1)",
      filter: "blur(0)",
      transition: "opacity 0.75s cubic-bezier(0.16, 1, 0.3, 1), transform 0.75s cubic-bezier(0.16, 1, 0.3, 1), filter 0.75s cubic-bezier(0.16, 1, 0.3, 1)",
      transitionDelay: `${delay}ms`,
      willChange: "opacity, transform, filter",
    };
  } else if (status === "above") {
    dynamicStyle = {
      opacity: 0.15,
      transform: transformAbove,
      filter: "blur(3px)",
      transition: "opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1), transform 0.6s cubic-bezier(0.16, 1, 0.3, 1), filter 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
      transitionDelay: "0ms",
      willChange: "opacity, transform, filter",
    };
  } else {
    dynamicStyle = {
      opacity: 0,
      transform: transformBelow,
      filter: "blur(3px)",
      transition: "opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1), transform 0.6s cubic-bezier(0.16, 1, 0.3, 1), filter 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
      transitionDelay: "0ms",
      willChange: "opacity, transform, filter",
    };
  }

  return (
    <Component
      ref={ref}
      style={dynamicStyle}
      className={className}
    >
      {children}
    </Component>
  );
}
