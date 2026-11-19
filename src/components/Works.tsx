"use client";

import React, { useState, useEffect } from "react";
import { ExternalLink, CheckCircle2, X, Eye, Lock, Images } from "lucide-react";
import { GithubIcon } from "./Icons";
import { AthenaBustIllustration, RenaissanceMosaicIllustration } from "./ClassicalIllustrations";
import { ScrollReveal } from "./ScrollReveal";

interface ProjectItem {
  tag: string;
  category: "pkl" | "re-bot" | "school";
  periodGrade: string;
  image?: string;
  gallery?: string[];
  illustration?: React.ReactNode;
  title: string;
  summary: string;
  isPrivate?: boolean;
  liveUrl?: string;
  githubUrl?: string;
  details: {
    overview: string;
    role: string;
    dateInfo: string;
    features: string[];
  };
  stack: string[];
}

const projects: ProjectItem[] = [
  {
    tag: "#01 PROYEK PKL",
    category: "pkl",
    periodGrade: "Kelas 3 SMK (2026)",
    image: "/projects/kinerjaku-dashboard.jpg",
    gallery: [
      "/projects/kinerjaku-dashboard.jpg",
      "/projects/kinerjaku-form.jpg",
      "/projects/kinerjaku-team.jpg",
    ],
    title: "KinerjaKU — BP3MI Sulawesi Tengah",
    summary:
      "Sistem pelaporan dan evaluasi kinerja harian staf BP3MI Sulawesi Tengah. Dilengkapi filter tanggal, cetak kinerja, evaluasi pimpinan, form input, dan impor otomatis data kinerja dari file PDF.",
    isPrivate: true,
    details: {
      role: "Back-end & Implementation (Tim PKL SMKN 3 Palu di BP3MI Sulteng)",
      dateInfo: "Dibuat saat PKL Semester 1 Kelas 3 SMK (2026)",
      overview:
        "Sistem internal instansi pemerintah untuk pencatatan dan evaluasi kinerja pegawai secara terpusat. Source code bersifat privat karena digunakan secara internal oleh instansi.",
      features: [
        "Dashboard pencatatan dan monitoring kinerja harian pegawai",
        "Modul Impor Kinerja otomatis langsung dari file PDF kegiatan",
        "Evaluasi pimpinan berkala dan export cetak format resmi",
        "Implementasi backend PHP dan skema database MySQL terstruktur",
      ],
    },
    stack: ["PHP", "MySQL", "JavaScript", "Tailwind CSS", "PDF Parser"],
  },
  {
    tag: "#02 REVERSE ENG",
    category: "re-bot",
    periodGrade: "Kelas 3 SMK (2026)",
    image: "/projects/am-activator-v2.png",
    gallery: [
      "/projects/am-activator-v2.png",
      "/projects/am-activator.jpg",
    ],
    title: "AM Activator v2.0 (Alight Motion)",
    summary:
      "Platform aktivasi lisensi digital Alight Motion Pro v2.0 dengan antarmuka Liquid Glass, autentikasi Google OIDC server-side, kontrol peran User/Reseller/Admin, dan engine kuota atomik anti race condition.",
    liveUrl: "https://am.habnoir.xyz",
    isPrivate: true,
    details: {
      role: "Creator, Fullstack & Reverse Engineering (Repo Privat amRev)",
      dateInfo: "Versi 2.0 dirilis November 2026 di VPS pribadi",
      overview:
        "Evolusi total dari hasil reverse engineering endpoint aktivasi. Kini berjalan dengan Next.js + Prisma + PostgreSQL, verifikasi token Google OIDC (hash SHA-256 cookie httpOnly), Atomic Quota Engine (TTL 90s), CSP nonce strict-dynamic, serta SSE live admin log.",
      features: [
        "Google OIDC server-side via google-auth-library dan sesi terenkripsi SHA-256",
        "Role-Based Access Control: User (5/hari), Reseller (50/hari + custom prefix), Admin (SSE realtime log)",
        "Engine Kuota Atomik (Reserve, Commit, Release TTL 90 detik) anti race condition",
        "Sanitasi gambar sharp (strip EXIF & validasi magic bytes) serta auto-deploy PM2 di NAT VPS",
      ],
    },
    stack: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Google OIDC", "MCP REA"],
  },
  {
    tag: "#03 PROYEK PKL",
    category: "pkl",
    periodGrade: "Kelas 3 SMK (2026)",
    image: "/projects/absensi-digital-live.png",
    gallery: [
      "/projects/absensi-digital-live.png",
      "/projects/absensi-digital.jpg",
    ],
    title: "Absensi Digital SMK Go Global",
    summary:
      "Aplikasi presensi online berbasis web mobile khusus untuk peserta program SMK Go Global di Sulawesi Tengah. Mengadopsi Design System KinerjaKU dengan kamera selfie WebRTC, GPS akurasi tinggi, proteksi 3 lapis, dan backend Google Sheets.",
    liveUrl: "https://absensi-digital-smk.vercel.app",
    isPrivate: true,
    details: {
      role: "Fullstack Developer (Repo Privat absensi-digital-smk)",
      dateInfo: "Dikembangkan saat PKL Semester 1 Kelas 3 SMK (November 2026)",
      overview:
        "Sistem absensi mandiri untuk peserta program SMK Go Global Sulawesi Tengah (BP3MI Sulteng). Menghubungkan antarmuka mobile KinerjaKU Design System ke Vercel Serverless Functions & Google Sheets sebagai otoritas data tunggal, plus fallback PHP lokal.",
      features: [
        "Kamera selfie langsung via WebRTC MediaDevices dan Geolocation GPS presisi tinggi",
        "Proteksi Lapis 1-2-3: 1-to-1 identity binding, daily cross-check nama/email, dan normalisasi kanonikal",
        "Sinkronisasi backend serverless (@vercel/functions) dengan Google Sheets & penyimpanan lokal PHP (db/json & db/image)",
        "Dukungan migrasi profil peserta, validasi radius lokasi, dan antarmuka responsif mobile-first",
      ],
    },
    stack: ["JavaScript", "WebRTC & GPS", "Vercel Functions", "PHP", "Google Sheets"],
  },
  {
    tag: "#04 STUDIO LIRIK",
    category: "re-bot",
    periodGrade: "Kelas 3 SMK (2026)",
    image: "/projects/vibe-lyrics-live.png",
    title: "Vibe Motion Lyrics Studio",
    summary:
      "Studio video lirik tipografi kinetik 1920x1080 @ 60 FPS bergaya iOS Liquid Glass (visionOS). Dilengkapi beat-synced camera zoom, triple-layer audio wave, Shazam song recognition, dan direct export 60 FPS WebM/MP4.",
    githubUrl: "https://github.com/habNoir/vibe-motion-lyrics",
    details: {
      role: "Creator & Frontend/Motion Developer",
      dateInfo: "Dirilis November 2026 (Semester 1 Kelas 3 SMK)",
      overview:
        "Aplikasi studio pembuat video lirik 16:9 di atas HTML5 Canvas 60 FPS dan React + Vite, terinspirasi motion graphics dengan transisi easeOutExpo, preset lagu Timur mixed slang, serta deteksi lagu Shazam & chunked speech recognition di backend Python.",
      features: [
        "1920x1080 @ 60 FPS Cinema Stage dengan Beat-Synced Camera Zoom & breathing drift",
        "Harmonic Triple-Layer Audio Waves dan Kinetic Typography easeOutExpo",
        "Slide-over Inspector Drawer, 0.5s Pre-Roll Theater Mode, serta integrasi Shazam & speech recognition",
        "Direct 60 FPS Master Video Export langsung dari browser",
      ],
    },
    stack: ["React", "HTML5 Canvas", "Vite", "Python", "FFmpeg"],
  },
  {
    tag: "#05 BOT WA UTAMA",
    category: "re-bot",
    periodGrade: "Kelas 3 SMK (2026)",
    illustration: <AthenaBustIllustration className="h-48 sm:h-56" />,
    title: "marimo WhatsApp Bot Engine (v1.6.3)",
    summary:
      "Bot WhatsApp multi-device modular ESM berbasis Elaina-Baileys & SQLite WAL. Dilengkapi Zero-Delay CDN Media Relay (<100ms), 10-level View-Once Inspector, transcoding 48kHz Opus PTT, dan notifikasi gempa real-time BMKG TEWS.",
    githubUrl: "https://github.com/habNoir/marimo",
    details: {
      role: "Bot Architect & Backend Developer",
      dateInfo: "Dikembangkan September — Oktober 2026 (v1.6.3)",
      overview:
        "Autonomous WhatsApp Multi-Device Engine berbasis Elaina-Baileys dan better-sqlite3 mode WAL (menghindari bottleneck NTFS I/O). Mampu mengirim media instan lewat cache token CDN di RAM, membongkar pesan view-once hingga 10 lapis, serta terhubung ke Gradio AI.",
      features: [
        "Zero-Delay Media Relay (<100ms) & SQLite WAL store untuk sesi, kontak, LID, dan grup",
        "Deep View-Once Inspector (unwrap 10 level container) & 48kHz Mono Opus PTT transcoding",
        "Live Photo / Motion Photo (ImgVid H.264 30fps) & Local Canvas Brat animated stickers",
        "Integrasi BMKG Realtime Earthquake TEWS API dengan peta Shakemap & @gradio/client AI",
      ],
    },
    stack: ["Node.js ESM", "Elaina-Baileys", "SQLite WAL", "FFmpeg", "Sharp"],
  },
  {
    tag: "#06 TUGAS PHP KELAS 2",
    category: "school",
    periodGrade: "Kelas 2 SMK (2025)",
    image: "/projects/arraymap-hasil.png",
    gallery: [
      "/projects/arraymap-hasil.png",
      "/projects/arraymap-live.png",
      "/projects/conditional-tokopakaian.png",
      "/projects/conditional-gaji.png",
    ],
    title: "Tugas PHP SMK (Array Map & Conditionals)",
    summary:
      "Kumpulan tugas pemrograman PHP saat kelas 2 SMK di SMKN 3 Palu: manipulasi list data siswa menggunakan Array Map (Tugas Pak Fajar) dan kalkulasi diskon toko pakaian & slip gaji via Conditional Statements (Tugas Ibu Ratna).",
    githubUrl: "https://github.com/habNoir/arrayMAP-PHP",
    details: {
      role: "Siswa Pengembang",
      dateInfo: "Dibuat pada 30 September 2025 (Semester 1 Kelas 2 SMK)",
      overview:
        "Dua repositori tugas resmi kejuruan RPL (arrayMAP-PHP & conditionalSteatments-PHP) di SMKN 3 Palu dengan dokumentasi kode dan screenshot eksekusi asli.",
      features: [
        "arrayMAP-PHP: Form input dinamis jumlah & data siswa dengan pemrosesan PHP array mapping",
        "conditionalSteatments-PHP: Logika percabangan diskon toko pakaian dan perhitungan komponen slip gaji",
        "Dilengkapi screenshot eksekusi lokal di kedua repositori GitHub publik",
      ],
    },
    stack: ["PHP Native", "HTML / CSS", "Array Mapping", "Conditional Logic"],
  },
  {
    tag: "#07 BOT WA AWAL",
    category: "re-bot",
    periodGrade: "Kelas 2 SMK (2025)",
    illustration: <RenaissanceMosaicIllustration className="h-48 sm:h-56" />,
    title: "KeyBotz WhatsApp Bot",
    summary:
      "Bot WhatsApp ringan berbasis Node.js & @whiskeysockets/baileys pertama yang dibuat oleh habNoir (H4B of Key) saat mulai mendalami JavaScript automasi pada kelas 2 SMK.",
    githubUrl: "https://github.com/habNoir/KeyBotz",
    details: {
      role: "Bot Creator",
      dateInfo: "Dibuat pada 18 Oktober 2025 (Semester 1 Kelas 2 SMK)",
      overview:
        "Fondasi awal eksplorasi socket Baileys, handler pesan modular, jimp/wa-sticker-formatter, dan QR pairing sebelum berevolusi menjadi arsitektur marimo.",
      features: [
        "Lightweight WhatsApp bot dengan @whiskeysockets/baileys & struktur plugins/utils modular",
        "Dukungan pembuat stiker otomatis menggunakan jimp dan fluent-ffmpeg",
        "Penanganan event pesan, command handler, dan utilitas grup dasar",
      ],
    },
    stack: ["Node.js", "JavaScript", "Baileys", "Jimp"],
  },
  {
    tag: "#08 UTILITY C++",
    category: "school",
    periodGrade: "Kelas 2 SMK (2026)",
    illustration: <RenaissanceMosaicIllustration className="h-48 sm:h-56" />,
    title: "NotAFK-HAB (C++ Win32 Utility)",
    summary:
      "Utilitas native Windows C++/Win32 (116KB+ kode) dengan UI GDI+/DWM untuk multi-instance Roblox (bypass Mutex), Smart Grid Snapping, anti-idle SendInput, Auto-Reconnect, FPS Capper, dan Discord Webhook.",
    githubUrl: "https://github.com/habNoir/NotAFK-HAB",
    details: {
      role: "Windows Native C++ Developer",
      dateInfo: "Dikembangkan Mei — Juni 2026 (Semester 2 Kelas 2 SMK)",
      overview:
        "Aplikasi utilitas desktop modular berbasis C++ Win32 API (bukan makro biasa) untuk memanipulasi jendela game, menghemat konsumsi GPU/CPU saat AFK via SuspendThread, dan mengotomatiskan pemulihan koneksi.",
      features: [
        "RobloxDetector: Bypass Mutex ROBLOX_singletonEvent untuk multi-instance & Smart Grid Snapping otomatis",
        "AntiAFKEngine & Auto-Reconnect: Simulasi SendInput tingkat rendah, deteksi layar putus via RGB(57,59,61), & smooth cursor interpolation",
        "FpsCapper & AudioManager: Batasi FPS (3/5/15 FPS) via SuspendThread & auto-mute via Windows Core Audio API (IAudioSessionManager2)",
        "DiscordWebhook: Pengiriman status sesi dan log real-time melalui HTTPS asinkron WinINet",
      ],
    },
    stack: ["C++", "Win32 API", "GDI+ / DWM", "Core Audio API", "WinINet"],
  },
  {
    tag: "#09 KEJURUAN",
    category: "school",
    periodGrade: "Kelas 2 SMK (2026)",
    image: "/projects/tokoonline-storefront.png",
    gallery: [
      "/projects/tokoonline-storefront.png",
      "/projects/tokoonline-admin.png",
    ],
    title: "TokoKU — E-Commerce Kejuruan SMK",
    summary:
      "Aplikasi web e-commerce lengkap bertema gelap modern untuk tugas kejuruan SMKN 3 Palu. Dilengkapi katalog produk hardware/gadget, filter kategori, keranjang belanja, checkout, dan modul panel admin.",
    details: {
      role: "Solo Developer",
      dateInfo: "Dikerjakan Januari — Juni 2026 (Semester 2 Kelas 2 SMK)",
      overview:
        "Proyek latihan kejuruan di SMKN 3 Palu dengan skema database MySQL toko_ku. Menyajikan katalog produk lengkap, sistem transaksi keranjang hingga checkout, serta halaman admin dashboard.",
      features: [
        "Katalog produk dengan pencarian dan filter kategori hardware/gadget",
        "Sistem keranjang belanja interaktif dan form checkout nota pembayaran",
        "Panel admin untuk manajemen produk, kategori, pelanggan, dan laporan pembelian",
        "Tampilan storefront dan halaman admin login dark-mode responsif",
      ],
    },
    stack: ["PHP", "MySQL", "Tailwind CSS", "JavaScript"],
  },
];

export function Works() {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [activeGalleryIdx, setActiveGalleryIdx] = useState(0);
  const [activeTab, setActiveTab] = useState<"all" | "pkl" | "re-bot" | "school">("all");

  const openModal = (proj: ProjectItem) => {
    setSelectedProject(proj);
    setActiveGalleryIdx(0);
  };

  useEffect(() => {
    if (!selectedProject) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedProject(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedProject]);

  const categories: { id: "all" | "pkl" | "re-bot" | "school"; label: string }[] = [
    { id: "all", label: `Semua Proyek (${projects.length})` },
    { id: "pkl", label: `PKL & Instansi (${projects.filter((p) => p.category === "pkl").length})` },
    { id: "re-bot", label: `RE, Bot & Kreatif (${projects.filter((p) => p.category === "re-bot").length})` },
    { id: "school", label: `Kejuruan & Utility (${projects.filter((p) => p.category === "school").length})` },
  ];

  const filteredProjects = projects.filter((p) => {
    if (activeTab === "all") return true;
    return p.category === activeTab;
  });

  return (
    <div className="py-16 sm:py-20 px-4 sm:px-8 max-w-6xl mx-auto">
      <ScrollReveal variant="surface-rise">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 border-b border-white/[0.08] pb-6 gap-4">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-zinc-400">
              Koleksi Karya &amp; Repositori
            </span>
            <h2 className="text-3xl sm:text-4xl font-medium text-white font-serif tracking-tight mt-1">
              Proyek, Repositori &amp; Screenshot
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-zinc-400 font-sans max-w-md">
            Seluruh proyek diverifikasi langsung dari repositori GitHub @habNoir (publik maupun privat) dan proyek lokal instansi, disesuaikan berdasarkan jenjang kelas saat pengerjaan.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`px-4 py-1.5 rounded-full text-xs font-mono transition-all ${
                activeTab === cat.id
                  ? "bg-white text-black font-semibold shadow-md"
                  : "ios-glass text-zinc-300 hover:text-white hover:bg-white/[0.08]"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((proj, idx) => (
          <ScrollReveal key={`${activeTab}-${proj.title}`} variant="surface-rise" delay={(idx % 3) * 75} className="h-full">
            <div className="h-full ios-glass-card rounded-2xl overflow-hidden border border-white/[0.1] hover:border-white/[0.25] p-5 flex flex-col justify-between group">
              <div className="relative rounded-xl overflow-hidden border border-white/[0.08] bg-[#0c0d12] mb-4 aspect-[16/10] flex items-center justify-center">
                {proj.image ? (
                  <div className="relative w-full h-full overflow-hidden group/img">
                    <img
                      src={proj.image}
                      alt={proj.title}
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover/img:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent opacity-50 group-hover/img:opacity-30 transition-opacity" />
                    {proj.gallery && proj.gallery.length > 1 && (
                      <div className="absolute top-2.5 right-2.5 bg-[#090a0f]/85 backdrop-blur-md border border-white/[0.2] px-2.5 py-0.5 rounded-full text-[10px] font-mono text-white flex items-center gap-1 shadow-lg">
                        <Images className="w-3 h-3" />
                        <span>{proj.gallery.length} Screens</span>
                      </div>
                    )}
                  </div>
                ) : (
                  proj.illustration
                )}
              </div>

              <div className="space-y-3 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between text-[10px] font-mono tracking-widest text-zinc-400 uppercase mb-1">
                    <span>{proj.tag}</span>
                    <span className="text-zinc-500">{proj.periodGrade}</span>
                  </div>
                  <h3 className="text-lg font-serif font-semibold text-white tracking-normal group-hover:text-zinc-200 transition-colors">
                    {proj.title}
                  </h3>
                  <p className="text-xs text-zinc-400 font-sans leading-relaxed pt-1 line-clamp-3">
                    {proj.summary}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/[0.06] space-y-3">
                  <div className="flex flex-wrap gap-1.5">
                    {proj.stack.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="ios-glass-pill px-2 py-0.5 rounded text-[9px] font-mono tracking-wider text-zinc-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-1">
                    <button
                      onClick={() => openModal(proj)}
                      className="text-xs font-mono text-white hover:text-zinc-300 flex items-center gap-1.5 group/btn"
                    >
                      <Eye className="w-3.5 h-3.5 text-zinc-400 group-hover/btn:text-white transition-colors" />
                      <span>Detail &amp; Screenshot</span>
                    </button>

                    <div className="flex items-center gap-2">
                      {proj.githubUrl && (
                        <a
                          href={proj.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-1.5 rounded-full ios-glass text-zinc-400 hover:text-white hover:border-white/[0.3] transition-colors"
                          title="GitHub Repository"
                        >
                          <GithubIcon className="w-3.5 h-3.5" />
                        </a>
                      )}
                      {proj.liveUrl && (
                        <a
                          href={proj.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-1.5 rounded-full ios-glass text-zinc-400 hover:text-white hover:border-white/[0.3] transition-colors"
                          title="Buka Website"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      )}
                      {proj.isPrivate && (
                        <span className="p-1.5 rounded-full ios-glass text-zinc-500" title="Private Repository">
                          <Lock className="w-3.5 h-3.5" />
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>

      {selectedProject && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-150"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="relative w-full max-w-2xl bg-[#0b0c12]/98 backdrop-blur-2xl rounded-2xl p-6 sm:p-7 border border-white/[0.2] shadow-[0_32px_80px_rgba(0,0,0,0.95)] space-y-5 max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between border-b border-white/[0.1] pb-3 gap-4">
              <div>
                <span className="text-[10px] font-mono tracking-widest text-zinc-400 uppercase">
                  {selectedProject.tag} · {selectedProject.periodGrade}
                </span>
                <h3 className="text-xl font-serif font-semibold text-white mt-0.5">
                  {selectedProject.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="p-1.5 rounded-full text-zinc-400 hover:text-white hover:bg-white/[0.08] transition-colors shrink-0"
                aria-label="Tutup modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {selectedProject.gallery && selectedProject.gallery.length > 0 && (
              <div className="space-y-3">
                <div className="relative rounded-xl overflow-hidden border border-white/[0.15] bg-[#0c0d12] max-h-72 flex items-center justify-center">
                  <img
                    src={selectedProject.gallery[activeGalleryIdx]}
                    alt={selectedProject.title}
                    className="w-full h-full object-contain max-h-72"
                  />
                </div>
                {selectedProject.gallery.length > 1 && (
                  <div className="flex items-center gap-2 overflow-x-auto pb-1">
                    {selectedProject.gallery.map((img, gIdx) => (
                      <button
                        key={gIdx}
                        onClick={() => setActiveGalleryIdx(gIdx)}
                        className={`relative rounded-lg overflow-hidden border w-20 h-12 shrink-0 transition-all ${
                          activeGalleryIdx === gIdx
                            ? "border-white scale-105"
                            : "border-white/20 opacity-60 hover:opacity-100"
                        }`}
                      >
                        <img src={img} alt="Thumbnail" className="w-full h-full object-cover object-top" />
                      </button>
                    ))}
                  </div>
                )}
              </div>
            )}

            {!selectedProject.gallery && selectedProject.image && (
              <div className="rounded-xl overflow-hidden border border-white/[0.15] bg-[#0c0d12] max-h-72 flex items-center justify-center">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-contain max-h-72"
                />
              </div>
            )}

            <div className="space-y-3 text-xs text-zinc-300 font-sans">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <div className="p-3 rounded-lg bg-white/[0.03] border border-white/[0.08] space-y-1">
                  <span className="text-[10px] font-mono tracking-wider text-zinc-400 uppercase">
                    Peran:
                  </span>
                  <p className="text-white font-medium">
                    {selectedProject.details.role}
                  </p>
                </div>
                <div className="p-3 rounded-lg bg-white/[0.03] border border-white/[0.08] space-y-1">
                  <span className="text-[10px] font-mono tracking-wider text-zinc-400 uppercase">
                    Waktu Pengerjaan:
                  </span>
                  <p className="text-white font-medium">
                    {selectedProject.details.dateInfo}
                  </p>
                </div>
              </div>

              <div className="space-y-1">
                <span className="text-[10px] font-mono tracking-wider text-zinc-400 uppercase">
                  Deskripsi Lengkap:
                </span>
                <p className="leading-relaxed text-zinc-400">
                  {selectedProject.details.overview}
                </p>
              </div>

              <div className="space-y-1.5 pt-1">
                <span className="text-[10px] font-mono tracking-wider text-zinc-400 uppercase">
                  Fitur Utama:
                </span>
                <ul className="space-y-1">
                  {selectedProject.details.features.map((item, hIdx) => (
                    <li key={hIdx} className="flex items-start gap-2 text-zinc-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-white mt-0.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="pt-3 border-t border-white/[0.1] flex flex-wrap items-center justify-between gap-3">
              <div className="flex flex-wrap gap-1">
                {selectedProject.stack.map((t, idx) => (
                  <span
                    key={idx}
                    className="text-[9px] font-mono px-2 py-0.5 rounded bg-white/[0.04] text-zinc-300 border border-white/[0.08]"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-2">
                {selectedProject.liveUrl && (
                  <a
                    href={selectedProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ios-glass-pill px-4 py-1.5 rounded-full text-xs font-mono text-white hover:bg-white/[0.15] flex items-center gap-1.5"
                  >
                    <span>Kunjungi Web</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
                {selectedProject.githubUrl && (
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ios-glass-pill px-4 py-1.5 rounded-full text-xs font-mono text-white hover:bg-white/[0.15] flex items-center gap-1.5"
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                    <span>Lihat Repo</span>
                  </a>
                )}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="ios-glass px-4 py-1.5 rounded-full text-xs font-mono text-zinc-400 hover:text-white"
                >
                  Tutup
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
