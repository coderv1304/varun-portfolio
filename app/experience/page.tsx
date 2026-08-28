import { PageShell } from "@/components/PageShell";

export default function ExperiencePage() {
  return (
    <PageShell>
      <p className="font-mono text-xs tracking-[0.3em] text-cyan-400">04 / EXPERIENCE</p>
      <h1 className="mt-4 text-5xl font-black">Education & Journey</h1>

      <div className="mt-12 space-y-5">
        <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
          <div className="flex flex-col justify-between gap-4 md:flex-row">
            <div>
              <p className="font-mono text-xs text-cyan-400">2025 — 2027</p>
              <h2 className="mt-3 text-2xl font-bold">Master of Computer Applications</h2>
              <p className="mt-2 text-slate-400">VESIT, Mumbai</p>
              <p className="mt-3 text-sm text-slate-500">8.5 aggregate CGPA as of Semester 2</p>
            </div>
            <span className="font-mono text-xs text-slate-600">CURRENT</span>
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
          <p className="font-mono text-xs text-cyan-400">COMPLETED</p>
          <h2 className="mt-3 text-2xl font-bold">B.Sc Information Technology</h2>
          <p className="mt-2 text-slate-400">CHM College, Ulhasnagar, Mumbai</p>
        </div>
      </div>
    </PageShell>
  );
}
