import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <main className="page">
      <div className="eyebrow">
        01 / PROJECT INDEX
      </div>

      <h1 className="heading">
        Selected Work<span className="gradient-text">.</span>
      </h1>

      <p className="subheading">
        A collection of projects exploring DevOps, cloud,
        security, automation and MLOps.
      </p>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.slug}
            project={project}
            index={index}
          />
        ))}
      </div>
    </main>
  );
}