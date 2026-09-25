import { PageShell } from "@/components/PageShell";

export default function ExperiencePage() {
  return (
    <PageShell>
      <p className="font-mono text-xs tracking-[0.3em] text-[#7c93f0]">04 / EXPERIENCE</p>
      <h1 className="mt-4 text-5xl font-black text-[#2d3250]">Education & Journey</h1>

      <div className="mt-12 space-y-5">
        <div className="rounded-3xl border border-[#636eeb]/20 bg-white/60 p-8 backdrop-blur">
          <div className="flex flex-col justify-between gap-4 md:flex-row">
            <div>
              <p className="font-mono text-xs text-[#7c93f0]">2025 — 2027</p>
              <h2 className="mt-3 text-2xl font-bold text-[#2d3250]">Master of Computer Applications</h2>
              <p className="mt-2 text-[#5b6478]">VESIT, Mumbai</p>
              <p className="mt-3 text-sm text-[#6b7690]">8.5 aggregate CGPA as of Semester 2</p>
            </div>
            <span className="font-mono text-xs text-[#6b7690]">CURRENT</span>
          </div>
        </div>

        <div className="rounded-3xl border border-[#636eeb]/20 bg-white/60 p-8 backdrop-blur">
          <p className="font-mono text-xs text-[#7c93f0]">COMPLETED</p>
          <h2 className="mt-3 text-2xl font-bold text-[#2d3250]">B.Sc Information Technology</h2>
          <p className="mt-2 text-[#5b6478]">CHM College, Ulhasnagar, Mumbai</p>
        </div>
      </div>
    </PageShell>
  );
}