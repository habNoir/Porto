"use client";

import React, { useEffect, useState } from "react";

export function ScrollGauge() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll <= 0) return;
      const currentScroll = window.scrollY;
      const percentage = Math.min(100, Math.max(0, (currentScroll / totalScroll) * 100));
      setProgress(percentage);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 pointer-events-none">
      <div className="w-full h-[1.5px] bg-white/[0.04]">
        <div
          className="h-full bg-gradient-to-r from-white/30 via-white/80 to-white transition-all duration-75 ease-out shadow-[0_0_8px_rgba(255,255,255,0.4)]"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}
