import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { PageShell } from "@/components/PageShell";
import { projects } from "@/data/projects";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) notFound();

  return (
    <PageShell>
      <Link href="/projects" className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-cyan-300">
        <ArrowLeft size={16} /> Back to projects
      </Link>

      <p className="mt-10 font-mono text-xs tracking-[0.3em] text-cyan-400">{project.category}</p>
      <h1 className="mt-4 max-w-4xl text-5xl font-black">{project.title}</h1>
      <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-400">{project.longDescription}</p>

      <div className="mt-10 flex flex-wrap gap-2">
        {project.tech.map((tech) => (
          <span key={tech} className="rounded-full border border-white/10 px-4 py-2 text-xs text-slate-400">{tech}</span>
        ))}
      </div>

      <div className="mt-14 grid gap-6 lg:grid-cols-2">
        <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
          <p className="font-mono text-xs tracking-[0.2em] text-cyan-400">ARCHITECTURE</p>
          <div className="mt-7 space-y-3 font-mono text-sm">
            {["Developer", "Git / GitHub", "CI/CD", "Testing & Security", "Container / Cloud", "Monitoring"].map((step, i) => (
              <div key={step}>
                <div className="rounded-xl border border-white/10 bg-black/20 px-4 py-3">{step}</div>
                {i < 5 && <div className="py-1 text-center text-cyan-400">↓</div>}
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
          <p className="font-mono text-xs tracking-[0.2em] text-cyan-400">CASE STUDY</p>
          <h2 className="mt-5 text-2xl font-bold">What to document</h2>
          <ul className="mt-5 space-y-4 text-sm leading-7 text-slate-400">
            <li>• Problem and requirements</li>
            <li>• Architecture and design decisions</li>
            <li>• Implementation and automation</li>
            <li>• Security and reliability considerations</li>
            <li>• Results and lessons learned</li>
          </ul>
        </div>
      </div>

      <div className="mt-10 flex flex-wrap gap-3">
        <a href={project.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-2xl bg-cyan-400 px-5 py-3 font-bold text-black">
          <Github size={17} /> GitHub
        </a>
        {project.demo && (
          <a href={project.demo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-2xl border border-white/10 px-5 py-3 font-bold">
            <ExternalLink size={17} /> Live Demo
          </a>
        )}
      </div>
    </PageShell>
  );
}
