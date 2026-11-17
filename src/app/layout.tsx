import type { Metadata } from "next";
import { Cinzel, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "habNoir — Portfolio",
  description: "Portofolio habNoir (Alwahab Dzulikroom Butudoka). Siswa SMKN 3 Palu, Vibe Coder, Fullstack Developer & Reverse Engineering.",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/logo-icon.png", type: "image/png" },
    ],
    apple: [
      { url: "/apple-icon.png" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${cinzel.variable} ${geistSans.variable} ${geistMono.variable} dark`}
    >
      <body className="min-h-screen bg-[#090a0f] text-[#ededed] antialiased selection:bg-white selection:text-black font-sans">
        {children}
      </body>
    </html>
  );
}
