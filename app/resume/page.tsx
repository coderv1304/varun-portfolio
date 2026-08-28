import { Download } from "lucide-react";
import { PageShell } from "@/components/PageShell";
import { site } from "@/data/site";

export default function ResumePage() {
  return (
    <PageShell>
      <p className="font-mono text-xs tracking-[0.3em] text-cyan-400">07 / RESUME</p>
      <h1 className="mt-4 text-5xl font-black">Resume</h1>

      <div className="mt-12 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03]">
        <div className="flex flex-col items-center justify-center p-16 text-center">
          <p className="text-xl font-bold">Add your latest resume PDF</p>
          <p className="mt-3 max-w-lg text-sm leading-7 text-slate-500">
            Place your file at public/resume.pdf. The preview and download button will then work.
          </p>
          <a
            href={site.resume}
            target="_blank"
            rel="noreferrer"
            className="mt-7 inline-flex items-center gap-2 rounded-2xl bg-cyan-400 px-6 py-3 font-bold text-black"
          >
            <Download size={17} /> OPEN RESUME
          </a>
        </div>
      </div>
    </PageShell>
  );
}
