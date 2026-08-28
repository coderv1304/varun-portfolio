import { PageShell } from "@/components/PageShell";
import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <PageShell>
      <p className="font-mono text-xs tracking-[0.3em] text-cyan-400">02 / PROJECTS</p>
      <h1 className="mt-4 text-5xl font-black">Selected Work</h1>
      <p className="mt-5 max-w-2xl text-slate-500">
        Replace the placeholders below with your actual projects. Each card opens a technical case-study page.
      </p>

      <div className="mt-12 grid gap-5 lg:grid-cols-2">
        {projects.map((project, i) => (
          <ProjectCard key={project.slug} project={project} index={i} />
        ))}
      </div>
    </PageShell>
  );
}
