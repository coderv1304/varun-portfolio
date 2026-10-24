import Link from "next/link";
import type { Project } from "@/data/projects";

export default function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  return (
    <article className="project-card">
      <div>
        <div className="project-number">
          {String(index + 1).padStart(2, "0")}
        </div>

        <div className="project-category">
          {project.category}
        </div>

        <h3 className="project-title">
          {project.title}
        </h3>

        <p className="project-description">
          {project.description}
        </p>

        <div className="tech-list">
          {project.tech.map((tech) => (
            <span className="tech" key={tech}>
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div className="project-actions">
        <Link
          href={`/projects/${project.slug}`}
          className="project-action"
        >
          CASE STUDY <span aria-hidden="true">→</span>
        </Link>
        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          className="project-action project-source"
        >
          SOURCE CODE <span aria-hidden="true">↗</span>
        </a>
      </div>
    </article>
  );
}