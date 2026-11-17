"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Copy, Check, Send, Smartphone, GraduationCap, Globe, BookOpen } from "lucide-react";
import { GithubIcon } from "./Icons";
import { ScrollReveal } from "./ScrollReveal";

export function ContactFolio() {
  const [copied, setCopied] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const emailAddress = "habnoir@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1000);
  };

  return (
    <div className="py-16 sm:py-20 px-4 sm:px-8 max-w-5xl mx-auto">
      <ScrollReveal variant="surface-rise">
        <div className="text-center mb-12 space-y-2">
          <span className="text-xs font-mono uppercase tracking-widest text-zinc-400">
            Hubungi Saya
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-medium text-white tracking-tight">
            Kontak &amp; Pesan Jasa
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400 font-sans max-w-md mx-auto">
            Terbuka untuk pesanan jasa pembuatan website, joki semua tugas pelajar (sekolah/kuliah), pembuatan bot WhatsApp, atau oprek HP Android.
          </p>
        </div>
      </ScrollReveal>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <ScrollReveal variant="surface-rise" delay={80} className="lg:col-span-5 space-y-6">
          <div className="ios-glass-card rounded-2xl p-6 sm:p-7 border border-white/[0.12] space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full flex items-center justify-center bg-white/[0.08] border border-white/[0.15] p-1.5 overflow-hidden">
                <Image
                  src="/logo-icon.png"
                  alt="habNoir Monogram"
                  width={36}
                  height={36}
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <div className="text-xs font-semibold tracking-wider text-white">
                  habNoir (Alwahab Dzulikroom)
                </div>
                <div className="text-[11px] font-mono text-zinc-400">
                  SMKN 3 Palu (RPL) · Sulawesi Tengah
                </div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.08] space-y-2">
              <div className="text-[10px] font-mono tracking-wider text-zinc-400 uppercase">
                Email Pribadi
              </div>
              <div className="flex items-center justify-between gap-2">
                <span className="text-xs font-mono text-white truncate">
                  {emailAddress}
                </span>
                <button
                  onClick={handleCopyEmail}
                  className="ios-glass-pill p-2 rounded-lg text-zinc-300 hover:text-white hover:border-white/[0.3] transition-colors shrink-0 flex items-center gap-1 text-[10px] font-mono"
                  title="Salin alamat email"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Tersalin</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Salin</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            <div className="space-y-2.5 text-xs text-zinc-300 font-sans">
              <div className="flex items-start gap-2.5">
                <Globe className="w-4 h-4 text-zinc-400 mt-0.5 shrink-0" />
                <span>Jasa Pembuatan Website: Landing page, web profil, sistem informasi, e-commerce.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <BookOpen className="w-4 h-4 text-zinc-400 mt-0.5 shrink-0" />
                <span>Jasa Joki Semua Tugas Pelajar: Tugas sekolah, makalah, laporan, ketik, &amp; coding di IG.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <Smartphone className="w-4 h-4 text-zinc-400 mt-0.5 shrink-0" />
                <span>Oprek HP Android: Root, custom ROM, bootloader, module tweak sejak 2024.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <GraduationCap className="w-4 h-4 text-zinc-400 mt-0.5 shrink-0" />
                <span>Calon Mahasiswa TI Universitas Internasional Batam (UIB 2027).</span>
              </div>
            </div>

            <div className="pt-2 border-t border-white/[0.08] flex items-center justify-between">
              <span className="text-[11px] font-mono text-zinc-400">Akun GitHub:</span>
              <a
                href="https://github.com/habNoir"
                target="_blank"
                rel="noopener noreferrer"
                className="ios-glass-pill px-3 py-1.5 rounded-full text-zinc-300 hover:text-white transition-colors flex items-center gap-1.5 text-xs font-mono"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>github.com/habNoir</span>
              </a>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal variant="fade-up" delay={160} className="lg:col-span-7">
          <div className="ios-glass-panel rounded-2xl p-6 sm:p-8 border border-white/[0.14] shadow-2xl">
            {submitted ? (
              <div className="text-center py-10 space-y-3">
                <div className="w-10 h-10 rounded-full mx-auto ios-glass flex items-center justify-center border border-emerald-400/40">
                  <Check className="w-5 h-5 text-emerald-400" />
                </div>
                <h3 className="text-lg font-serif font-semibold text-white">
                  Pesan Terkirim
                </h3>
                <p className="text-xs text-zinc-400 font-sans max-w-sm mx-auto">
                  Terima kasih sudah menghubungi. Pesan atau rincian pesanan kamu telah tercatat dan akan saya respon secepatnya.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="ios-glass-pill px-4 py-1.5 rounded-full text-xs text-zinc-300 hover:text-white mt-3"
                >
                  Kirim Pesan Lain
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-mono tracking-wider text-zinc-400 uppercase">
                      Nama Kamu
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Nama lengkap atau panggilan"
                      className="w-full px-4 py-2.5 rounded-xl bg-white/[0.03] border border-white/[0.1] text-xs font-sans text-white placeholder:text-zinc-600 focus:outline-none focus:border-white/40 transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[10px] font-mono tracking-wider text-zinc-400 uppercase">
                      Kontak (Email / WhatsApp / IG)
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="WhatsApp: 08xx / @username_ig"
                      className="w-full px-4 py-2.5 rounded-xl bg-white/[0.03] border border-white/[0.1] text-xs font-sans text-white placeholder:text-zinc-600 focus:outline-none focus:border-white/40 transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] font-mono tracking-wider text-zinc-400 uppercase">
                    Layanan yang Diperlukan
                  </label>
                  <select
                    className="w-full px-4 py-2.5 rounded-xl bg-[#0c0d12] border border-white/[0.1] text-xs font-sans text-white focus:outline-none focus:border-white/40 transition-colors"
                  >
                    <option>Jasa Pembuatan Website (Custom / Landing Page / Toko Online)</option>
                    <option>Jasa Joki Tugas Pelajar (Makalah / Laporan / Tugas Ketik)</option>
                    <option>Jasa Joki Tugas Coding / IT / Pemrograman</option>
                    <option>Pembuatan Bot WhatsApp (Baileys Node.js)</option>
                    <option>Oprek HP Android (Root / Custom ROM / Module)</option>
                    <option>Diskusi Proyek Lainnya</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] font-mono tracking-wider text-zinc-400 uppercase">
                    Rincian Pesan / Tugas
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Tuliskan rincian tugas, deadline, spesifikasi website, atau pertanyaan kamu..."
                    className="w-full px-4 py-2.5 rounded-xl bg-white/[0.03] border border-white/[0.1] text-xs font-sans text-white placeholder:text-zinc-600 focus:outline-none focus:border-white/40 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full ios-glass-pill py-2.5 rounded-xl text-xs font-mono tracking-wider text-white hover:bg-white/[0.14] hover:border-white/[0.3] transition-all flex items-center justify-center gap-2 group disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Mengirimkan Pesan...</span>
                  ) : (
                    <>
                      <span>Kirim Pesan / Permintaan</span>
                      <Send className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
