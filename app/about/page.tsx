import { PageShell } from "@/components/PageShell";

export default function AboutPage() {
  return (
    <PageShell>
      <p className="font-mono text-xs tracking-[0.3em] text-cyan-400">01 / ABOUT</p>
      <h1 className="mt-4 text-5xl font-black">About Varun</h1>

      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
          <p className="leading-8 text-slate-400">
            I&apos;m Varun Nair, currently pursuing my MCA at VESIT Mumbai from 2025–2027 after completing my B.Sc IT from CHM College, Ulhasnagar, Mumbai.
          </p>
          <p className="mt-6 leading-8 text-slate-400">
            I&apos;m focused on DevOps, DevSecOps, Cloud, MLOps and AIOps, with an interest in automation, infrastructure, reliability, security and intelligent operations.
          </p>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
          <div className="space-y-5 font-mono text-sm">
            <div className="flex justify-between gap-5"><span className="text-slate-500">NAME</span><span>Varun Nair</span></div>
            <div className="flex justify-between gap-5"><span className="text-slate-500">DEGREE</span><span>MCA</span></div>
            <div className="flex justify-between gap-5"><span className="text-slate-500">INSTITUTE</span><span>VESIT Mumbai</span></div>
            <div className="flex justify-between gap-5"><span className="text-slate-500">CGPA</span><span>8.5</span></div>
            <div className="flex justify-between gap-5"><span className="text-slate-500">STATUS</span><span className="text-green-300">OPEN</span></div>
          </div>
        </div>
      </div>
    </PageShell>
  );
}
