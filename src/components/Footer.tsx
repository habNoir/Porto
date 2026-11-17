"use client";

import React from "react";
import Image from "next/image";
import { ArrowUp } from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-white/[0.08] bg-[#07080a] py-14 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full flex items-center justify-center ios-glass p-1 overflow-hidden">
            <Image
              src="/logo-icon.png"
              alt="habNoir Monogram"
              width={24}
              height={24}
              className="w-full h-full object-contain"
            />
          </div>
          <div>
            <div className="text-xs font-serif font-semibold tracking-wider text-white">
              habNoir — Alwahab Dzulikroom Butudoka
            </div>
            <div className="text-[10px] font-mono text-zinc-500 mt-0.5">
              SMKN 3 Palu (RPL) · Sulawesi Tengah · Vibe Coder
            </div>
          </div>
        </div>

        <div className="text-xs text-zinc-500 font-mono">
          © 2026 habNoir. All rights reserved.
        </div>

        <div>
          <button
            onClick={scrollToTop}
            className="ios-glass-pill px-3.5 py-1.5 rounded-full text-xs font-mono text-zinc-300 hover:text-white flex items-center gap-1.5 transition-colors group"
            title="Kembali ke atas"
          >
            <span>Ke Atas</span>
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
}
