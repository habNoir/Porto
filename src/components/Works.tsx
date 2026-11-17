"use client";

import React, { useState } from "react";
import { ExternalLink, CheckCircle2, X, Eye, Lock, Images } from "lucide-react";
import { GithubIcon } from "./Icons";
import { AthenaBustIllustration, RenaissanceMosaicIllustration } from "./ClassicalIllustrations";
import { ScrollReveal } from "./ScrollReveal";

interface ProjectItem {
  tag: string;
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
        "Sistem internal instansi pemerintah untuk pencatatan dan evaluasi kinerja pegawai secara terpusat. Source code tidak dipublikasikan karena merupakan rahasia dapur instansi.",
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
    periodGrade: "Kelas 3 SMK (2026)",
    image: "/projects/am-activator.jpg",
    title: "AM Activator (Alight Motion)",
    summary:
      "Web tool hasil reverse engineering alur aktivasi Alight Motion. Backend secara otomatis memproses magic link login pertama dan auto temp-mail dalam waktu ~10 detik tanpa perlu cek email manual.",
    liveUrl: "https://am.bloxploit.fun",
    details: {
      role: "Fullstack Developer & Reverse Engineering",
      dateInfo: "Dibuat saat Semester 1 Kelas 3 SMK (Oktober 2026)",
      overview:
        "Menganalisis protokol network dan endpoint API aktivasi, kemudian mengotomatiskan alur pertukaran token dan pembuatan temp-mail via Next.js dan Prisma.",
      features: [
        "Backend otomatisasi pemrosesan magic link login tahap pertama",
        "Integrasi temp-mail otomatis tanpa perlu verifikasi manual di inbox",
        "Limit aktivasi harian dan counter statistik penggunaan real-time",
        "Analisis logic aplikasi menggunakan bantuan MCP REA dan AI",
      ],
    },
    stack: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Axios", "MCP REA"],
  },
  {
    tag: "#03 PROYEK PKL",
    periodGrade: "Kelas 3 SMK (2026)",
    image: "/projects/absensi-digital.jpg",
    title: "Absensi Digital SMK Go Global",
    summary:
      "Aplikasi presensi online berbasis web mobile untuk siswa PKL dan staf di BP3MI Sulawesi Tengah. Dilengkapi capture kamera selfie via browser dan validasi radius lokasi GPS.",
    isPrivate: true,
    details: {
      role: "Fullstack Developer",
      dateInfo: "Dibuat saat PKL Semester 1 Kelas 3 SMK (2026)",
      overview:
        "Sistem absensi mandiri yang dirancang responsif mobile untuk mencatat kehadiran siswa dan staf secara akurat dengan foto selfie dan verifikasi koordinat lokasi.",
      features: [
        "Capture foto selfie verifikasi langsung via Web Camera API di browser",
        "Validasi koordinat GPS realtime via Geolocation API perangkat",
        "Formulir data instansi dan identitas yang mudah diakses di smartphone",
        "Penyimpanan dan rekapitulasi data absensi ke basis data internal",
      ],
    },
    stack: ["PHP", "JavaScript (Camera & GPS)", "CSS", "MySQL"],
  },
  {
    tag: "#04 STUDIO LIRIK",
    periodGrade: "Kelas 3 SMK (2026)",
    image: "/projects/vibe-lyrics-live.png",
    title: "Vibe Motion Lyrics Studio",
    summary:
      "Studio video lirik tipografi kinetik 16:9 ala VS Code dengan auto-sync backend berbasis React 19 dan Vite. Dijalankan dan di-screenshot langsung dari server lokal.",
    githubUrl: "https://github.com/habNoir/vibe-motion-lyrics",
    details: {
      role: "Creator & Frontend Developer",
      dateInfo: "Dibuat pada 17 November 2026 (Semester 1 Kelas 3 SMK)",
      overview:
        "Aplikasi studio pembuat video lirik lagu dengan rasio 16:9 bergaya editor modern. Mengintegrasikan sinkronisasi audio presisi dan visual motion responsif.",
      features: [
        "16:9 VS Code kinetic typography lyrics video stage",
        "Sinkronisasi lirik audio presisi dengan keyboard playback controls",
        "Animasi teks kinetik dan latar belakang dinamis React 19 + Vite",
      ],
    },
    stack: ["React 19", "Vite", "Tailwind CSS", "Lucide Icons", "FFmpeg"],
  },
  {
    tag: "#05 BOT WA UTAMA",
    periodGrade: "Kelas 3 SMK (2026)",
    illustration: <AthenaBustIllustration className="h-48 sm:h-56" />,
    title: "marimo WhatsApp Bot Engine",
    summary:
      "Bot WhatsApp modular multi-device generasi terbaru berbasis library Baileys dan Node.js. Dilengkapi database SQLite CRM, session persistence, dan sistem plugin dinamis.",
    githubUrl: "https://github.com/habNoir/marimo",
    details: {
      role: "Bot Architect & Developer",
      dateInfo: "Dibuat September 2026 (Semester 1 Kelas 3 SMK)",
      overview:
        "Evolusi bot WhatsApp yang lebih matang dengan arsitektur socket networking Baileys yang stabil, manajemen database session CRM, dan multi-device support.",
      features: [
        "Arsitektur plugin modular untuk kemudahan penambahan command baru",
        "Pengelolaan session multi-device menggunakan library Baileys",
        "Database SQLite untuk pencatatan riwayat pengguna dan data CRM",
        "Penanganan media pesan, voice note, stiker, dan utilitas grup",
      ],
    },
    stack: ["Node.js", "JavaScript", "Baileys", "SQLite"],
  },
  {
    tag: "#06 TUGAS PHP KELAS 2",
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
      "Kumpulan tugas pemrograman PHP saat kelas 2 SMK: manipulasi data list siswa dengan Array Map (Tugas Pak Fajar) dan sistem conditional statements toko pakaian & slip gaji (Tugas Ibu Ratna).",
    githubUrl: "https://github.com/habNoir/arrayMAP-PHP",
    details: {
      role: "Siswa Pengembang",
      dateInfo: "Dibuat pada 30 September 2025 (Semester 1 Kelas 2 SMK)",
      overview:
        "Repositori tugas resmi sekolah di SMKN 3 Palu saat mulai mempelajari materi dasar PHP, array mapping, dan percabangan kondisi logika pemrograman.",
      features: [
        "arrayMAP-PHP: Form input jumlah dan data siswa dengan pengolahan array mapping",
        "conditionalSteatments-PHP: Perhitungan diskon toko pakaian dan kalkulasi slip gaji",
        "Tersedia screenshot hasil eksekusi program asli di dalam repositori",
      ],
    },
    stack: ["PHP Native", "HTML / CSS", "Logika Array", "Conditional Logic"],
  },
  {
    tag: "#07 BOT WA AWAL",
    periodGrade: "Kelas 2 SMK (2025)",
    illustration: <RenaissanceMosaicIllustration className="h-48 sm:h-56" />,
    title: "KeyBotz WhatsApp Bot",
    summary:
      "Bot WhatsApp ringan berbasis Node.js pertama yang dibuat oleh habNoir saat mulai mendalami JavaScript automasi pada kelas 2 SMK.",
    githubUrl: "https://github.com/habNoir/KeyBotz",
    details: {
      role: "Bot Creator",
      dateInfo: "Dibuat pada 18 Oktober 2025 (Semester 1 Kelas 2 SMK)",
      overview:
        "Langkah awal eksplorasi mendalam di dunia JavaScript dan automasi perpesanan WhatsApp, menjadi pondasi sebelum membangun bot marimo yang lebih kompleks.",
      features: [
        "Lightweight WhatsApp bot built with Node.js, crafted by H4B of Key",
        "Eksperimen awal penanganan event socket pesan WhatsApp",
        "Implementasi perintah dasar automasi pesan",
      ],
    },
    stack: ["Node.js", "JavaScript", "Baileys", "Socket"],
  },
  {
    tag: "#08 UTILITY C++",
    periodGrade: "Kelas 2 SMK (2026)",
    illustration: <RenaissanceMosaicIllustration className="h-48 sm:h-56" />,
    title: "NotAFK-HAB (C++ Utility)",
    summary:
      "Utility tool berbasis C++ untuk menjaga sesi komputasi tetap aktif (anti-AFK) melalui simulasi input sistem otomatis.",
    githubUrl: "https://github.com/habNoir/NotAFK-HAB",
    details: {
      role: "Developer",
      dateInfo: "Dibuat pada 26 Mei 2026 (Semester 2 Kelas 2 SMK)",
      overview:
        "Program utilitas sistem operasi berbasis bahasa C++ yang dirancang untuk mencegah status idle atau idle timeout saat proses panjang berlangsung.",
      features: [
        "Simulasi sinyal input berkala tingkat rendah di sistem operasi",
        "Eksekusi ringan tanpa membebani performa memori komputer",
        "Source code terbuka di repositori GitHub",
      ],
    },
    stack: ["C++", "Windows API", "System Utilities"],
  },
  {
    tag: "#09 KEJURUAN",
    periodGrade: "Kelas 2 SMK (2026)",
    image: "/projects/tokoonline-storefront.png",
    gallery: [
      "/projects/tokoonline-storefront.png",
      "/projects/tokoonline-admin.png",
    ],
    title: "TokoKU — E-Commerce Kejuruan SMK",
    summary:
      "Aplikasi web e-commerce lengkap dengan antarmuka tema gelap modern. Dilengkapi katalog produk hardware/gadget, filter kategori, keranjang belanja, checkout, dan modul panel admin.",
    details: {
      role: "Solo Developer",
      dateInfo: "Dikerjakan Januari — Juni 2026 (Semester 2 Kelas 2 SMK)",
      overview:
        "Proyek latihan kejuruan di SMKN 3 Palu dengan database MySQL toko_ku (berhasil di-restore langsung). Menyajikan katalog produk lengkap, sistem transaksi, dan halaman admin login.",
      features: [
        "Katalog produk dengan pencarian dan filter kategori (Realme, Memory RAM)",
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
  const [activeTab, setActiveTab] = useState("all");

  const openModal = (proj: ProjectItem) => {
    setSelectedProject(proj);
    setActiveGalleryIdx(0);
  };

  const categories = [
    { id: "all", label: "Semua Proyek (9)" },
    { id: "pkl", label: "PKL BP3MI (2)" },
    { id: "re-bot", label: "Reverse Eng & Bot (4)" },
    { id: "school", label: "Kejuruan & Utility (3)" },
  ];

  const filteredProjects = projects.filter((p) => {
    if (activeTab === "pkl") return p.tag.includes("PKL");
    if (activeTab === "re-bot") return p.tag.includes("REVERSE") || p.tag.includes("BOT") || p.tag.includes("VIBE");
    if (activeTab === "school") return p.tag.includes("PHP") || p.tag.includes("UTILITY") || p.tag.includes("KEJURUAN");
    return true;
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
            Semua proyek di bawah diverifikasi langsung dari repositori GitHub @habNoir dan file proyek lokal, disesuaikan berdasarkan jenjang kelas saat pengerjaan.
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
            <div
              className="h-full ios-glass-card rounded-2xl overflow-hidden border border-white/[0.1] hover:border-white/[0.25] p-5 flex flex-col justify-between group"
            >
            <div className="relative rounded-xl overflow-hidden border border-white/[0.08] bg-[#0c0d12] mb-4 aspect-[16/10] flex items-center justify-center">
              {proj.image ? (
                <div className="relative w-full h-full overflow-hidden group/img">
                  <img
                    src={proj.image}
                    alt={proj.title}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover/img:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover/img:opacity-40 transition-opacity" />
                  {proj.gallery && proj.gallery.length > 1 && (
                    <div className="absolute bottom-2.5 right-2.5 ios-glass-pill px-2 py-0.5 rounded text-[10px] font-mono text-white flex items-center gap-1">
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
                      <span className="p-1.5 rounded-full ios-glass text-zinc-500" title="Private Repository Instansi">
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
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-150">
          <div className="relative w-full max-w-2xl ios-glass-panel rounded-2xl p-6 sm:p-7 border border-white/[0.2] shadow-2xl space-y-5 max-h-[90vh] overflow-y-auto">
            <div className="flex items-start justify-between border-b border-white/[0.1] pb-3">
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
                className="p-1.5 rounded-full text-zinc-400 hover:text-white hover:bg-white/[0.08] transition-colors"
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
              <div className="rounded-xl overflow-hidden border border-white/[0.15] bg-[#0c0d12] max-h-72">
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
