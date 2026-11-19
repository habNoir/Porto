import React from "react";
import { Navbar } from "@/components/Navbar";
import { ScrollGauge } from "@/components/ScrollGauge";
import { StackingSection } from "@/components/StackingSection";
import { Hero } from "@/components/Hero";
import { Disciplines } from "@/components/Disciplines";
import { Works } from "@/components/Works";
import { ExperienceChronicle } from "@/components/ExperienceChronicle";
import { ContactFolio } from "@/components/ContactFolio";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#090a0f] text-[#ededed] relative">
      <ScrollGauge />
      <Navbar />

      <div className="viewport-edge-fade-top" aria-hidden="true" />
      <div className="viewport-edge-fade-bottom" aria-hidden="true" />

      <main className="flex-1 w-full pt-20 sm:pt-24 pb-12">
        <StackingSection id="tentang" zIndex={10} className="!mt-2 sm:!mt-4">
          <Hero />
        </StackingSection>

        <StackingSection id="keahlian" zIndex={20}>
          <Disciplines />
        </StackingSection>

        <StackingSection id="proyek" zIndex={30}>
          <Works />
        </StackingSection>

        <StackingSection id="perjalanan" zIndex={40}>
          <ExperienceChronicle />
        </StackingSection>

        <StackingSection id="kontak" zIndex={50}>
          <ContactFolio />
        </StackingSection>
      </main>

      <Footer />
    </div>
  );
}
