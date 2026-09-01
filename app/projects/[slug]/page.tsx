import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";

export default function ProjectPage({
  params,
}: {
  params: { slug: string };
}) {
  const project = projects.find(
    (item) => item.slug === params.slug
  );

  if (!project) {
    notFound();
  }

  return (
    <main className="page">
      <div className="eyebrow">
        PROJECT / {project.category}
      </div>

      <h1 className="heading">
        {project.title}
        <span className="gradient-text">.</span>
      </h1>

      <p className="subheading">
        {project.longDescription}
      </p>

      <div className="skill-panel" style={{ marginTop: 50 }}>
        <h3>TECHNOLOGIES</h3>

        <div className="skill-items">
          {project.tech.map((tech) => (
            <span className="skill-item" key={tech}>
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div className="hero-buttons">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="button button-primary"
          >
            VIEW ON GITHUB →
          </a>
        )}

        <Link
          href="/projects"
          className="button button-secondary"
        >
          ← ALL PROJECTS
        </Link>
      </div>
    </main>
  );
}