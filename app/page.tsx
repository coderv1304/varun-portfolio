import type { Metadata } from "next";
import HeroSection from "@/components/HeroSection";
import SelectedWork from "@/components/SelectedWork";
import ProofStrip from "@/components/ProofStrip";
import AboutSection from "@/components/AboutSection";
import ExpertiseSection from "@/components/ExpertiseSection";
import NotesSection from "@/components/NotesSection";
import ContactSection from "@/components/ContactSection";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Varun Nair | DevOps, SRE & Platform Intern, Mumbai",
  description:
    "Platform, DevOps and SRE intern in Mumbai, available Dec 2026 to Jun 2027. Six infrastructure case studies with methodology and stated limits.",
  path: "/",
});

export default function Home() {
  return (
    <main id="main">
      {/* 01 HERO */}
      <HeroSection />

      {/* 02 SELECTED WORK — evidence first */}
      <SelectedWork />

      {/* 03 PROOF STRIP */}
      <ProofStrip />

      {/* 04 ABOUT */}
      <AboutSection />

      {/* 05 EXPERTISE */}
      <ExpertiseSection />

      {/* 06 NOTES */}
      <NotesSection />

      {/* 07 CONTACT */}
      <ContactSection />
    </main>
  );
}
