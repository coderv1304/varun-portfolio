import HeroSection from "@/components/HeroSection";
import ProofStrip from "@/components/ProofStrip";
import AboutSection from "@/components/AboutSection";
import SelectedWork from "@/components/SelectedWork";
import ChapterIndex from "@/components/ChapterIndex";
import ExpertiseSection from "@/components/ExpertiseSection";
import ImpactSection from "@/components/ImpactSection";
import NotesSection from "@/components/NotesSection";
import BeyondSection from "@/components/BeyondSection";
import TimelineSection from "@/components/TimelineSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <main id="main">
      {/* 01 HERO */}
      <HeroSection />

      {/* 02 PROOF STRIP */}
      <ProofStrip />

      {/* 03 ABOUT */}
      <AboutSection />

      {/* 04 SELECTED WORK */}
      <SelectedWork />

      {/* 05 CHAPTER INDEX */}
      <ChapterIndex />

      {/* 06 EXPERTISE */}
      <ExpertiseSection />

      {/* 07 IMPACT */}
      <ImpactSection />

      {/* 08 MEDIA SHOWCASE (NOTES) */}
      <NotesSection />

      {/* 09 SPEAKING / BEYOND */}
      <BeyondSection />

      {/* 10 INTERLUDE TIMELINE */}
      <TimelineSection />

      {/* 11 CONTACT */}
      <ContactSection />
    </main>
  );
}
