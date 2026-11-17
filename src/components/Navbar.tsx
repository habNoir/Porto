"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeHref, setActiveHref] = useState("#tentang");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const navItems = ["#tentang", "#keahlian", "#proyek", "#perjalanan", "#kontak"];
      for (let i = navItems.length - 1; i >= 0; i--) {
        const el = document.querySelector(navItems[i]);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= window.innerHeight * 0.4) {
            setActiveHref(navItems[i]);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Tentang", href: "#tentang" },
    { name: "Keahlian", href: "#keahlian" },
    { name: "Proyek", href: "#proyek" },
    { name: "Perjalanan", href: "#perjalanan" },
    { name: "Kontak", href: "#kontak" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4 sm:pt-6 pointer-events-none">
      <nav
        className={`pointer-events-auto w-full max-w-5xl rounded-full px-5 py-3 flex items-center justify-between transition-all duration-300 ${
          scrolled
            ? "ios-glass-panel shadow-2xl border-white/[0.18]"
            : "ios-glass border-white/[0.12]"
        }`}
      >
        <a
          href="#"
          className="flex items-center gap-2.5 focus:outline-none group"
        >
          <div className="w-8 h-8 rounded-full flex items-center justify-center bg-white/[0.06] border border-white/[0.15] p-1 overflow-hidden transition-transform duration-300 group-hover:scale-105">
            <Image
              src="/logo-icon.png"
              alt="habNoir Monogram"
              width={32}
              height={32}
              className="w-full h-full object-contain filter drop-shadow-[0_1px_4px_rgba(255,255,255,0.15)]"
              priority
            />
          </div>
          <div className="flex flex-col text-left">
            <span className="text-xs font-bold tracking-widest text-white uppercase font-sans">
              habNoir
            </span>
          </div>
        </a>

        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-xs tracking-wide px-3.5 py-1.5 rounded-full transition-all duration-300 ${
                activeHref === link.href
                  ? "bg-white/[0.12] text-white border border-white/[0.22] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.2)]"
                  : "text-zinc-300 hover:text-white hover:bg-white/[0.06] border border-transparent"
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="hidden sm:flex items-center gap-3">
          <a
            href="#kontak"
            className="ios-glass-pill px-4 py-1.5 rounded-full text-xs font-medium text-white hover:bg-white/[0.12] hover:border-white/[0.3] transition-all"
          >
            Hubungi Saya
          </a>
        </div>

        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-full text-zinc-300 hover:text-white hover:bg-white/[0.08] focus:outline-none"
          aria-label="Toggle Navigation"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {mobileMenuOpen && (
        <div className="pointer-events-auto md:hidden absolute top-20 left-4 right-4 ios-glass-panel rounded-2xl p-6 shadow-2xl border border-white/[0.18] flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-xs tracking-wider text-zinc-300 hover:text-white py-2 px-3 rounded-lg hover:bg-white/[0.06] transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="pt-2 border-t border-white/[0.1]">
            <a
              href="#kontak"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full ios-glass-pill py-2.5 rounded-xl text-xs text-white text-center flex items-center justify-center"
            >
              Hubungi Saya
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
