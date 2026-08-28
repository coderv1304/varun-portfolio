import { PageShell } from "@/components/PageShell";
import { skillGroups } from "@/data/skills";

export default function SkillsPage() {
  return (
    <PageShell>
      <p className="font-mono text-xs tracking-[0.3em] text-cyan-400">03 / TOOLKIT</p>
      <h1 className="mt-4 text-5xl font-black">Technology Stack</h1>

      <div className="mt-12 grid gap-5 md:grid-cols-2">
        {skillGroups.map((group) => (
          <div key={group.title} className="rounded-3xl border border-white/10 bg-white/[0.03] p-7">
            <p className="font-mono text-xs tracking-[0.2em] text-cyan-400">{group.title}</p>
            <h2 className="mt-3 text-xl font-bold">{group.description}</h2>
            <div className="mt-6 flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span key={skill} className="rounded-full border border-white/10 px-4 py-2 text-sm text-slate-300">{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <p className="mt-8 text-sm text-slate-600">
        Keep this page honest: only list technologies you have actually used or clearly label technologies you are currently learning.
      </p>
    </PageShell>
  );
}
