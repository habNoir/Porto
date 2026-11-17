"use client";

import React from "react";
import Image from "next/image";
import { ArrowDown } from "lucide-react";
import { GreekColumnIllustration } from "./ClassicalIllustrations";
import { GithubIcon } from "./Icons";
import { ScrollReveal } from "./ScrollReveal";

export function Hero() {
  return (
    <div className="relative min-h-[85vh] flex flex-col justify-center items-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      <ScrollReveal variant="fade-up" delay={0}>
        <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
          <span className="ios-glass-pill px-3 py-1 rounded-full text-[11px] font-mono text-zinc-300">
            SMKN 3 Palu · Rekayasa Perangkat Lunak (RPL)
          </span>
          <span className="ios-glass-pill px-3 py-1 rounded-full text-[11px] font-mono text-zinc-300">
            Kelas 3 Semester 1 (Sedang PKL)
          </span>
          <span className="ios-glass-pill px-3 py-1 rounded-full text-[11px] font-mono text-white border-white/20">
            Vibe Coder Garis Keras
          </span>
        </div>
      </ScrollReveal>

      <ScrollReveal variant="scale" delay={75}>
        <div className="flex flex-col items-center justify-center mb-6">
          <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl ios-glass border border-white/[0.16] shadow-2xl p-3 flex items-center justify-center group hover:border-white/[0.3] transition-all duration-300">
            <Image
              src="/logo-icon.png"
              alt="habNoir Monogram"
              width={96}
              height={96}
              className="w-full h-full object-contain filter drop-shadow-[0_2px_12px_rgba(255,255,255,0.18)] transition-transform duration-300 group-hover:scale-105"
              priority
            />
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal variant="fade-up" delay={120}>
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <h1 className="text-5xl sm:text-7xl font-medium tracking-tight text-white leading-[1.05] font-serif">
            habNoir
          </h1>
          <div className="text-lg sm:text-xl font-serif text-zinc-300 tracking-wide">
            Alwahab Dzulikroom Butudoka
          </div>
          <p className="text-sm sm:text-base text-zinc-400 max-w-2xl mx-auto font-sans leading-relaxed pt-2">
            Siswa jurusan Rekayasa Perangkat Lunak (RPL) SMKN 3 Palu (masuk 2024, saat ini semester 1 sedang PKL di BP3MI Sulteng). 
            Membuka jasa pembuatan website custom, jasa joki semua tugas pelajar &amp; akademik di Instagram, 
            bot WhatsApp, reverse engineering API (MCP REA), dan oprek HP Android. Calon mahasiswa TI Universitas Internasional Batam (2027).
          </p>
        </div>
      </ScrollReveal>

      <ScrollReveal variant="fade-up" delay={180}>
        <div className="flex flex-wrap items-center justify-center gap-3 mt-8">
          <a
            href="#proyek"
            className="ios-glass-pill px-6 py-2.5 rounded-full text-xs tracking-wider text-white hover:bg-white/[0.14] hover:border-white/[0.3] transition-all flex items-center gap-2 group"
          >
            <span>Lihat Proyek &amp; Screenshot</span>
            <ArrowDown className="w-3.5 h-3.5 group-hover:translate-y-0.5 transition-transform" />
          </a>
          <a
            href="#kontak"
            className="ios-glass px-5 py-2.5 rounded-full text-xs tracking-wider text-white hover:bg-white/[0.08] transition-all flex items-center gap-2"
          >
            <span>Pesan Web / Joki Tugas</span>
          </a>
          <a
            href="https://github.com/habNoir"
            target="_blank"
            rel="noopener noreferrer"
            className="ios-glass px-5 py-2.5 rounded-full text-xs tracking-wider text-zinc-300 hover:text-white hover:bg-white/[0.08] transition-all flex items-center gap-2"
          >
            <GithubIcon className="w-3.5 h-3.5" />
            <span>github.com/habNoir</span>
          </a>
        </div>
      </ScrollReveal>

      <ScrollReveal variant="fade-up" delay={240} className="w-full">
        <div className="w-full mt-12 relative rounded-2xl overflow-hidden ios-glass border border-white/[0.12] p-1 shadow-2xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 bg-[#0c0d12] rounded-xl overflow-hidden">
          <div className="lg:col-span-7 h-[240px] sm:h-[300px] relative border-b lg:border-b-0 lg:border-r border-white/[0.08]">
            <GreekColumnIllustration className="h-full" />
            <div className="absolute top-4 left-4 ios-glass-pill px-3 py-1 rounded text-[10px] font-mono text-zinc-300">
              RPL FOUNDATION // SMKN 3 PALU
            </div>
            <div className="absolute bottom-4 right-4 text-[10px] font-mono text-zinc-500">
              SMK 2024 — SULTENG
            </div>
          </div>

          <div className="lg:col-span-5 p-6 flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="text-[11px] font-mono uppercase tracking-widest text-zinc-400 border-b border-white/[0.08] pb-2">
                Layanan &amp; Keahlian
              </div>
              <div className="space-y-2.5 text-xs text-zinc-300 font-sans">
                <div className="flex items-start gap-2.5">
                  <span className="text-zinc-500 font-mono text-xs">01</span>
                  <div>
                    <span className="font-semibold text-white">Jasa Pembuatan Website:</span> Melayani pembuatan website custom, web portofolio, landing page, sistem informasi kantor, hingga toko online.
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="text-zinc-500 font-mono text-xs">02</span>
                  <div>
                    <span className="font-semibold text-white">Joki Semua Tugas Pelajar:</span> Membuka jasa pengerjaan semua tugas sekolah dan kuliah (IT, coding, makalah, tugas ketik, dll) di Instagram sejak 2024.
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="text-zinc-500 font-mono text-xs">03</span>
                  <div>
                    <span className="font-semibold text-white">Bot WhatsApp, Oprek &amp; RE:</span> Otomasi WhatsApp Baileys, reverse engineering API (MCP REA), dan oprek HP Android (root/ROM).
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-white/[0.08] flex items-center justify-between text-[11px] font-mono text-zinc-400">
              <span>TARGET KULIAH 2027:</span>
              <span className="text-white font-semibold">TI Univ. Internasional Batam</span>
            </div>
          </div>
        </div>
      </div>
      </ScrollReveal>
    </div>
  );
}
