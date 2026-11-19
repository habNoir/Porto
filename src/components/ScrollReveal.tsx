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

    const node = ref.current;
    if (!node) return;

    const initialRect = node.getBoundingClientRect();
    const initialVh = window.innerHeight;
    if (initialRect.top < initialVh - 40 && initialRect.bottom > 40) {
      setStatus("in-view");
    } else if (initialRect.bottom <= 40) {
      setStatus("above");
    } else {
      setStatus("below");
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const rect = entry.boundingClientRect;
          const vh = window.innerHeight;

          if (entry.isIntersecting) {
            setStatus("in-view");
          } else {
            if (rect.bottom <= 56) {
              setStatus("above");
            } else if (rect.top >= vh - 64) {
              setStatus("below");
            } else {
              setStatus("in-view");
            }
          }
        });
      },
      {
        root: null,
        rootMargin: "-48px 0px -60px 0px",
        threshold: [0, 0.02],
      }
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
    };
  }, []);

  let transformBelow = "translateY(36px) scale(0.95)";
  let transformAbove = "translateY(-28px) scale(0.97)";

  if (variant === "fade-up") {
    transformBelow = "translateY(28px)";
    transformAbove = "translateY(-22px)";
  } else if (variant === "scale") {
    transformBelow = "scale(0.93)";
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
      filter: "blur(0px)",
      transition:
        "opacity 0.75s cubic-bezier(0.16, 1, 0.3, 1), transform 0.75s cubic-bezier(0.16, 1, 0.3, 1), filter 0.75s cubic-bezier(0.16, 1, 0.3, 1)",
      transitionDelay: `${delay}ms`,
      willChange: "opacity, transform, filter",
    };
  } else if (status === "above") {
    dynamicStyle = {
      opacity: 0.12,
      transform: transformAbove,
      filter: "blur(3px)",
      transition:
        "opacity 0.55s cubic-bezier(0.16, 1, 0.3, 1), transform 0.55s cubic-bezier(0.16, 1, 0.3, 1), filter 0.55s cubic-bezier(0.16, 1, 0.3, 1)",
      transitionDelay: "0ms",
      willChange: "opacity, transform, filter",
    };
  } else {
    dynamicStyle = {
      opacity: 0,
      transform: transformBelow,
      filter: "blur(4px)",
      transition:
        "opacity 0.55s cubic-bezier(0.16, 1, 0.3, 1), transform 0.55s cubic-bezier(0.16, 1, 0.3, 1), filter 0.55s cubic-bezier(0.16, 1, 0.3, 1)",
      transitionDelay: "0ms",
      willChange: "opacity, transform, filter",
    };
  }

  return (
    <Component ref={ref} style={dynamicStyle} className={className}>
      {children}
    </Component>
  );
}
