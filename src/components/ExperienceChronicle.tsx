"use client";

import React from "react";
import { Calendar, MapPin } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

interface ExperienceItem {
  period: string;
  role: string;
  institution: string;
  location: string;
  summary: string;
  points: string[];
  skills: string[];
}

const chronicleList: ExperienceItem[] = [
  {
    period: "2026 — 2027",
    role: "Kelas 3 RPL (Semester 1 PKL & Jasa Web/Joki)",
    institution: "SMKN 3 Palu (RPL) & BP3MI Sulawesi Tengah",
    location: "Palu, Sulawesi Tengah",
    summary:
      "Siswa jurusan Rekayasa Perangkat Lunak (RPL) yang sedang menjalani PKL di BP3MI Sulawesi Tengah dan menyelesaikan 2 proyek instansi. Membuka jasa pembuatan website custom, jasa joki semua tugas pelajar (sekolah & kuliah) di Instagram, opreker Android, dan bersiap menyambut semester 2 tahun depan (2027) untuk lanjut kuliah di UIB.",
    points: [
      "Mengembangkan backend dan implementasi sistem pelaporan KinerjaKU (PHP, MySQL, PDF parser) di BP3MI Sulteng saat PKL.",
      "Membangun aplikasi presensi mandiri Absensi Digital SMK Go Global (WebRTC selfie, Geolocation GPS, proteksi 3-lapis, otoritas Google Sheets & backend) untuk peserta SMK Go Global Sulawesi Tengah.",
      "Membuka jasa pembuatan website (landing page, sistem informasi, toko online) dan jasa joki semua tugas pelajar/akademik di Instagram.",
      "Membangun platform AM Activator v2.0 (am.habnoir.xyz) berbasis Next.js, Google OIDC, PostgreSQL/Prisma, dan atomic quota engine.",
      "Aktif sebagai opreker HP Android dan bersiap menuju semester 2 tahun depan (2027) untuk lanjut S1 TI di Universitas Internasional Batam.",
    ],
    skills: ["PHP", "MySQL", "Next.js", "TypeScript", "Jasa Pembuatan Web", "Joki Tugas Pelajar", "MCP REA"],
  },
  {
    period: "2025",
    role: "Kelas 2 RPL — Eksplorasi JavaScript & Bot WhatsApp",
    institution: "SMKN 3 Palu (Rekayasa Perangkat Lunak)",
    location: "Palu, Sulawesi Tengah",
    summary:
      "Mulai diajarkan dasar SQL, Java, Python, dan PHP dari kurikulum RPL sekolah. Secara otodidak memperdalam JavaScript untuk membangun bot WhatsApp automasi berbasis Baileys.",
    points: [
      "Mempelajari fundamental database relational SQL, Java, Python, dan PHP sesuai materi kejuruan RPL kelas 2.",
      "Mengeksplorasi ekosistem Node.js dan library Baileys untuk automasi perpesanan WhatsApp multi-device.",
      "Membangun arsitektur bot dengan session persistence, database SQLite, dan penanganan perintah modular dinamis.",
    ],
    skills: ["JavaScript", "Node.js", "Baileys", "SQLite", "PHP", "SQL", "Python"],
  },
  {
    period: "2024",
    role: "Kelas 1 RPL — Masuk SMKN 3 Palu",
    institution: "SMKN 3 Palu (Rekayasa Perangkat Lunak)",
    location: "Palu, Sulawesi Tengah",
    summary:
      "Resmi masuk jenjang SMK di SMKN 3 Palu jurusan Rekayasa Perangkat Lunak (RPL) angkatan 2024. Mempelajari fondasi logika pemrograman, struktur algoritma dasar, dan pengenalan ilmu komputer.",
    points: [
      "Masuk SMKN 3 Palu jurusan Rekayasa Perangkat Lunak (RPL) angkatan 2024 untuk mendalami rekayasa software.",
      "Mempelajari dasar-dasar algoritma pemrograman, pseudocode, flowchart, dan logika komputasional terstruktur.",
      "Mempersiapkan dasar logika teknis yang kuat untuk materi kejuruan RPL di tingkat berikutnya.",
    ],
    skills: ["Algoritma", "Logika Pemrograman", "Dasar RPL", "Flowchart"],
  },
  {
    period: "2022 — 2023",
    role: "Pra-SMK — Awal Ketertarikan Tech (Masa Covid-19)",
    institution: "Otodidak / Pra-SMK",
    location: "Tolitoli / Palu, Sulawesi Tengah",
    summary:
      "Awal mula ketertarikan dengan dunia teknologi sejak tahun 2022 saat masa pandemi Covid-19 lewat eksperimen recode script secara otodidak sebelum masuk jenjang SMK.",
    points: [
      "Mulai tertarik dengan dunia teknologi dan coding saat masa pandemi Covid-19 pada tahun 2022.",
      "Belajar otodidak melalui recode script dan memahami bagaimana program sederhana bekerja.",
      "Menumbuhkan minat kuat di bidang software development sebelum memilih masuk ke SMKN 3 Palu.",
    ],
    skills: ["Otodidak", "Recode Script", "Eksplorasi Tech"],
  },
];

const chronicleLedger = [
  {
    period: "2027 (Mendatang)",
    phase: "Universitas Internasional Batam (UIB)",
    program: "S1 Teknologi Informasi (TI)",
    status: "Rencana Studi",
    detail: "Target studi lanjutan rekayasa sistem, computer science, dan arsitektur piranti lunak modern.",
  },
  {
    period: "2026 (Semester 1)",
    phase: "BP3MI Sulawesi Tengah",
    program: "Praktik Kerja Lapangan (PKL)",
    status: "Sedang Berjalan",
    detail: "Membangun sistem KinerjaKU (PHP & PDF parser) dan aplikasi Absensi Digital bagi peserta SMK Go Global Sulawesi Tengah.",
  },
  {
    period: "2024 — Sekarang",
    phase: "Layanan Mandiri @habNoir",
    program: "Jasa Web & Joki Tugas",
    status: "Komersial Aktif",
    detail: "Pembuatan website custom, joki semua tugas sekolah & kuliah di Instagram, bot WA, dan oprek HP.",
  },
  {
    period: "2025 (Kelas 2)",
    phase: "SMKN 3 Palu",
    program: "Rekayasa Perangkat Lunak",
    status: "Tuntas",
    detail: "Pendalaman JavaScript, Node.js, bot automasi WhatsApp Baileys, dan relational database SQL.",
  },
  {
    period: "2024 (Kelas 1)",
    phase: "SMKN 3 Palu",
    program: "Rekayasa Perangkat Lunak",
    status: "Tuntas",
    detail: "Masuk jurusan RPL angkatan 2024. Fondasi algoritma pemrograman, flowchart, dan logika komputer.",
  },
  {
    period: "2022 — 2023",
    phase: "Pra-SMK Otodidak",
    program: "Eksplorasi Mandiri Covid-19",
    status: "Fondasi Awal",
    detail: "Awal mula ketertarikan teknologi saat pandemi lewat recode script dan bongkar pasang software.",
  },
];

export function ExperienceChronicle() {
  return (
    <div className="py-16 sm:py-20 px-4 sm:px-8 max-w-5xl mx-auto space-y-20">
      <div>
        <ScrollReveal variant="surface-rise">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 border-b border-white/[0.08] pb-6 gap-4">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-zinc-400">
                Perjalanan &amp; Rekam Jejak
              </span>
              <h2 className="text-3xl sm:text-4xl font-medium text-white font-serif tracking-tight mt-1">
                Riwayat Belajar &amp; Pengalaman
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-zinc-400 font-sans max-w-md">
              Perjalanan dari awal recode script saat Covid-19 pada 2022, masuk SMKN 3 Palu pada 2024, hingga kini kelas 3 semester 1 sedang PKL di BP3MI.
            </p>
          </div>
        </ScrollReveal>

        <div className="relative border-l border-white/[0.12] ml-3 sm:ml-6 pl-6 sm:pl-8 space-y-10">
          {chronicleList.map((item, idx) => (
            <div key={idx} className="relative group">
              <div className="absolute -left-[32.5px] sm:-left-[40.5px] top-6 w-4 h-4 rounded-full ios-glass-pill flex items-center justify-center border border-white/[0.2] bg-[#0c0d12] z-10">
                <span className="w-1.5 h-1.5 rounded-full bg-white opacity-80" />
              </div>

              <ScrollReveal variant="surface-rise" delay={idx * 70}>
                <div className="ios-glass-card rounded-2xl p-6 sm:p-7 border border-white/[0.1] hover:border-white/[0.2] space-y-4">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/[0.06] pb-3">
                    <div className="flex items-center gap-1.5 text-xs font-mono text-zinc-300">
                      <Calendar className="w-3.5 h-3.5 text-zinc-400" />
                      <span>{item.period}</span>
                    </div>

                    <div className="flex items-center gap-1.5 text-xs font-mono text-zinc-400">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>{item.location}</span>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-serif font-semibold text-white tracking-normal">
                      {item.role}
                    </h3>
                    <div className="text-xs font-mono text-zinc-400 mt-0.5">
                      {item.institution}
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-zinc-400 font-sans leading-relaxed">
                    {item.summary}
                  </p>

                  <ul className="space-y-1.5 pt-1">
                    {item.points.map((point, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2 text-xs text-zinc-300 leading-relaxed">
                        <span className="text-zinc-500 font-mono text-[10px] mt-0.5">•</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="pt-3 border-t border-white/[0.06] flex flex-wrap gap-1.5">
                    {item.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.03] text-zinc-300 border border-white/[0.06]"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            </div>
          ))}
        </div>
      </div>

      <div className="pt-8 border-t border-white/[0.08]">
        <ScrollReveal variant="surface-rise">
          <div className="mb-8">
            <span className="text-xs font-mono uppercase tracking-widest text-zinc-400">
              Arsip Kronologis
            </span>
            <h3 className="text-2xl sm:text-3xl font-medium text-white font-serif tracking-tight mt-1">
              Tabel Rekam Jejak &amp; Milestone
            </h3>
            <p className="text-xs sm:text-sm text-zinc-400 font-sans mt-1">
              Ringkasan data linimasa pendidikan, proyek instansi, dan agenda rencana studi lanjut.
            </p>
          </div>
        </ScrollReveal>

        <div className="rounded-2xl border border-white/[0.1] bg-[#0c0d12]/80 overflow-hidden divide-y divide-white/[0.06]">
          <div className="hidden md:grid grid-cols-12 gap-4 px-6 py-3.5 bg-white/[0.02] text-[11px] font-mono uppercase tracking-wider text-zinc-400 border-b border-white/[0.08]">
            <div className="col-span-3">Periode &amp; Status</div>
            <div className="col-span-4">Institusi &amp; Program</div>
            <div className="col-span-5">Keterangan &amp; Capaian</div>
          </div>

          {chronicleLedger.map((row, idx) => (
            <ScrollReveal key={idx} variant="surface-rise" delay={idx * 60}>
              <div className="grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-4 px-6 py-5 hover:bg-white/[0.02] transition-colors items-start">
                <div className="md:col-span-3 space-y-1.5">
                  <div className="text-xs font-mono text-white font-medium">
                    {row.period}
                  </div>
                  <span className="inline-block px-2 py-0.5 text-[10px] font-mono rounded bg-white/[0.05] text-zinc-300 border border-white/[0.08]">
                    {row.status}
                  </span>
                </div>

                <div className="md:col-span-4 space-y-0.5">
                  <div className="text-sm font-serif font-medium text-white">
                    {row.phase}
                  </div>
                  <div className="text-xs font-mono text-zinc-400">
                    {row.program}
                  </div>
                </div>

                <div className="md:col-span-5 text-xs text-zinc-400 font-sans leading-relaxed">
                  {row.detail}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  );
}
