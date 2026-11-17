"use client";

import React from "react";

interface StackingSectionProps {
  id?: string;
  children: React.ReactNode;
  zIndex?: number;
  className?: string;
}

export function StackingSection({
  id,
  children,
  className = "",
}: StackingSectionProps) {
  return (
    <div
      id={id}
      className={`relative w-full max-w-6xl mx-auto px-3 sm:px-6 my-10 sm:my-16 scroll-mt-24 ${className}`}
    >
      <div className="rounded-3xl bg-[#0c0d13] border border-white/[0.12] shadow-[0_24px_60px_-15px_rgba(0,0,0,0.9),inset_0_1px_0_0_rgba(255,255,255,0.18)] overflow-hidden">
        {children}
      </div>
    </div>
  );
}
