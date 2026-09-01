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
    <Link
      href={`/projects/${project.slug}`}
      className="project-card"
    >
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
    </Link>
  );
}