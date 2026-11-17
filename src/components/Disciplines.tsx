"use client";

import React from "react";
import { ScrollReveal } from "./ScrollReveal";
import {
  GreekColumnIllustration,
  AstrolabeCompassIllustration,
  NautilusSpiralIllustration,
  RenaissanceMosaicIllustration,
} from "./ClassicalIllustrations";

interface DisciplineCardProps {
  category: string;
  illustration: React.ReactNode;
  title: string;
  description: string;
  stack: string[];
}

const disciplines: DisciplineCardProps[] = [
  {
    category: "Jasa Pembuatan Web",
    illustration: <GreekColumnIllustration className="h-44 sm:h-52" />,
    title: "Jasa Pembuatan Website & Fullstack",
    description:
      "Membuka jasa pembuatan website profesional dan custom: landing page, website profil, sistem informasi instansi/kantor, hingga toko online berbasis PHP, MySQL, Next.js, dan Tailwind CSS.",
    stack: ["Jasa Pembuatan Web", "PHP", "MySQL", "Next.js", "Tailwind CSS"],
  },
  {
    category: "Jasa Joki Tugas & Oprek",
    illustration: <RenaissanceMosaicIllustration className="h-44 sm:h-52" />,
    title: "Joki Semua Tugas Pelajar & Oprek HP",
    description:
      "Membuka jasa pengerjaan semua tugas pelajar sekolah dan mahasiswa di Instagram sejak 2024 (makalah, laporan, tugas ketik, tugas coding/IT), serta opreker HP Android (root, custom ROM, unbrick).",
    stack: ["Joki Semua Tugas Pelajar", "Instagram Service", "Android Modding", "Oprek HP"],
  },
  {
    category: "Otomasi & Bot",
    illustration: <AstrolabeCompassIllustration className="h-44 sm:h-52" />,
    title: "WhatsApp Bot & Node.js Engine",
    description:
      "Pengembangan bot WhatsApp multi-device menggunakan Node.js dan library Baileys. Dilengkapi penanganan sesi multi-auth, database SQLite, dan sistem plugin modular dinamis.",
    stack: ["Node.js", "JavaScript", "Baileys", "SQLite"],
  },
  {
    category: "Reverse Engineering",
    illustration: <NautilusSpiralIllustration className="h-44 sm:h-52" />,
    title: "API Reverse Engineering (MCP REA)",
    description:
      "Menganalisis protokol endpoint API tertutup, otomasi pemrosesan magic link, generator temp-mail, serta memanfaatkan MCP REA dan AI untuk menganalisis logic aplikasi.",
    stack: ["MCP REA", "API Analysis", "Python", "Axios", "Prisma"],
  },
];

export function Disciplines() {
  return (
    <div className="py-16 sm:py-20 px-4 sm:px-8 max-w-6xl mx-auto">
      <ScrollReveal variant="surface-rise">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-white/[0.08] pb-6 gap-4">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-zinc-400">
              Layanan &amp; Keahlian
            </span>
            <h2 className="text-3xl sm:text-4xl font-medium text-white font-serif tracking-tight mt-1">
              Layanan Jasa &amp; Tech Stack
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-zinc-400 font-sans max-w-md">
            Kombinasi keahlian jurusan Rekayasa Perangkat Lunak (RPL), layanan jasa pembuatan web, joki semua tugas pelajar di Instagram, otomasi bot, dan oprek Android.
          </p>
        </div>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {disciplines.map((item, index) => (
          <ScrollReveal key={index} variant="surface-rise" delay={index * 90} className="h-full">
            <div
              className="h-full group flex flex-col justify-between ios-glass-card rounded-2xl overflow-hidden border border-white/[0.1] hover:border-white/[0.25]"
            >
              <div className="p-4 pb-2 flex items-center justify-between">
                <span className="ios-glass-pill px-3 py-0.5 rounded-full text-[10px] font-mono tracking-wider text-zinc-300">
                  {item.category}
                </span>
                <span className="text-[10px] font-mono text-zinc-600">
                  0{index + 1}
                </span>
              </div>

              <div className="relative mx-3 my-2 rounded-xl overflow-hidden border border-white/[0.08] bg-[#0c0d12]">
                {item.illustration}
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-base font-serif font-semibold text-white tracking-normal leading-snug mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-zinc-400 font-sans leading-relaxed mb-4">
                    {item.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/[0.06] flex flex-wrap gap-1.5">
                  {item.stack.map((tech, sIdx) => (
                    <span
                      key={sIdx}
                      className="text-[9px] font-mono px-2 py-0.5 rounded bg-white/[0.03] text-zinc-400 border border-white/[0.05]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  );
}
