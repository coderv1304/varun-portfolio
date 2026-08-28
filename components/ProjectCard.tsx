import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/projects";

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-7 transition duration-500 hover:-translate-y-2 hover:border-cyan-400/30 hover:bg-cyan-400/[0.04]"
    >
      <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-cyan-400/10 blur-3xl transition group-hover:bg-cyan-400/20" />
      <div className="relative">
        <div className="mb-10 flex items-center justify-between">
          <span className="font-mono text-xs text-cyan-400">
            0{index + 1}
          </span>
          <ArrowUpRight className="text-slate-500 transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-cyan-300" />
        </div>

        <p className="font-mono text-xs tracking-[0.18em] text-slate-500">
          {project.category}
        </p>
        <h3 className="mt-3 text-2xl font-bold">{project.title}</h3>
        <p className="mt-4 text-sm leading-7 text-slate-400">
          {project.description}
        </p>

        <div className="mt-7 flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-400"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
