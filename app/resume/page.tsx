import { Download, ExternalLink, FileText, CheckCircle2, Award } from "lucide-react";
import { PageShell } from "@/components/PageShell";
import { site } from "@/data/site";

export default function ResumePage() {
  return (
    <PageShell>
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="font-mono text-xs tracking-[0.3em] text-[#7c93f0]">07 / RESUME</p>
          <h1 className="mt-2 text-4xl font-black text-[#2d3250] sm:text-5xl">Official Resume</h1>
          <p className="mt-2 text-base text-[#5b6478]">
            Aspiring DevOps / Platform Engineer / SRE • Cloud, Linux & Automation
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <a
            href={site.resume}
            download="Varun_Nair_Resume.pdf"
            className="inline-flex items-center gap-2 rounded-2xl bg-[#7c93f0] px-6 py-3 font-bold text-white shadow-sm transition-all hover:opacity-90"
          >
            <Download size={18} /> DOWNLOAD PDF
          </a>
          <a
            href={site.resume}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-2xl border border-[#636eeb]/30 bg-white/70 px-6 py-3 font-bold text-[#2d3250] shadow-sm backdrop-blur transition-all hover:bg-white"
          >
            <ExternalLink size={18} /> OPEN IN NEW TAB
          </a>
        </div>
      </div>

      {/* Highlights Bar */}
      <div className="mt-8 grid gap-4 sm:grid-cols-3">
        <div className="rounded-2xl border border-[#636eeb]/15 bg-white/60 p-5 backdrop-blur">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#7c93f0]">
            <CheckCircle2 size={16} /> Focus
          </div>
          <p className="mt-2 text-sm font-semibold text-[#2d3250]">
            DevOps • Cloud Infrastructure • SRE • DevSecOps
          </p>
        </div>

        <div className="rounded-2xl border border-[#636eeb]/15 bg-white/60 p-5 backdrop-blur">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#7c93f0]">
            <Award size={16} /> Certifications
          </div>
          <p className="mt-2 text-sm font-semibold text-[#2d3250]">
            AWS Academy ML Foundations • Udemy Network Cybersecurity
          </p>
        </div>

        <div className="rounded-2xl border border-[#636eeb]/15 bg-white/60 p-5 backdrop-blur">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#7c93f0]">
            <FileText size={16} /> Education
          </div>
          <p className="mt-2 text-sm font-semibold text-[#2d3250]">
            MCA @ VESIT Mumbai (CGPA: {site.education.cgpa})
          </p>
        </div>
      </div>

      {/* PDF Viewer Container */}
      <div className="mt-8 overflow-hidden rounded-3xl border border-[#636eeb]/20 bg-white shadow-lg">
        <div className="flex items-center justify-between border-b border-[#636eeb]/15 bg-[#f4f7fe] px-6 py-3.5">
          <div className="flex items-center gap-2 text-xs font-bold tracking-wider text-[#5b6478]">
            <FileText size={15} className="text-[#7c93f0]" /> DOCUMENT VIEWER: Varun_Nair_CV.pdf
          </div>
          <a
            href={site.resume}
            target="_blank"
            rel="noreferrer"
            className="text-xs font-bold text-[#7c93f0] hover:underline"
          >
            Direct Link ↗
          </a>
        </div>

        <div className="relative w-full bg-slate-100" style={{ minHeight: "850px" }}>
          <iframe
            src={`${site.resume}#view=FitH`}
            className="h-[900px] w-full border-none"
            title="Varun Nair Resume"
          />
        </div>
      </div>
    </PageShell>
  );
}