import { Download } from "lucide-react";
import { PageShell } from "@/components/PageShell";
import { site } from "@/data/site";

export default function ResumePage() {
  return (
    <PageShell>
      <p className="font-mono text-xs tracking-[0.3em] text-[#7c93f0]">07 / RESUME</p>
      <h1 className="mt-4 text-5xl font-black text-[#2d3250]">Resume</h1>

      <div className="mt-12 overflow-hidden rounded-3xl border border-[#636eeb]/20 bg-white/60 backdrop-blur">
        <div className="flex flex-col items-center justify-center p-16 text-center">
          <p className="text-xl font-bold text-[#2d3250]">Varun Nair — Official Resume</p>
          <p className="mt-3 max-w-lg text-sm leading-7 text-[#5b6478]">
            Click below to open or download the PDF version of my resume.
          </p>
          <a
            href={site.resume}
            target="_blank"
            rel="noreferrer"
            className="mt-7 inline-flex items-center gap-2 rounded-2xl bg-[#7c93f0] px-6 py-3 font-bold text-[#1f2547]"
          >
            <Download size={17} /> OPEN RESUME
          </a>
        </div>
      </div>
    </PageShell>
  );
}