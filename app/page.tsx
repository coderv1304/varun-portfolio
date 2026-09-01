import Link from "next/link";
import BootScreen from "@/components/BootScreen";
import StatusWidget from "@/components/StatusWidget";
import TerminalWidget from "@/components/TerminalWidget";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";
import { site } from "@/data/site";

export default function Home() {
  return (
    <>
      <BootScreen />

      <main>
        <section className="hero">
          <div className="fade-up">
            <div className="eyebrow">
              ENGINEERING / AUTOMATION / CLOUD
            </div>

            <h1 className="hero-title">
              VARUN
              <span className="hero-title-muted">
                NAIR<span className="gradient-text">.</span>
              </span>
            </h1>

            <p className="hero-description">
              Building reliable, secure and intelligent
              systems through DevOps, cloud engineering,
              automation and modern infrastructure.
            </p>

            <p className="hero-description">
              {site.title}
            </p>

            <div className="hero-buttons">
              <Link
                href="/projects"
                className="button button-primary"
              >
                VIEW PROJECTS →
              </Link>

              <Link
                href="/contact"
                className="button button-secondary"
              >
                CONTACT ME
              </Link>
            </div>

            <div className="social-row">
              <a
                href={site.github}
                target="_blank"
                rel="noreferrer"
              >
                GITHUB
              </a>

              <a
                href={site.linkedin}
                target="_blank"
                rel="noreferrer"
              >
                LINKEDIN
              </a>

              <a
                href={site.hashnode}
                target="_blank"
                rel="noreferrer"
              >
                HASHNODE
              </a>
            </div>
          </div>

          <div className="widget-stack">
            <StatusWidget />
            <TerminalWidget />
          </div>
        </section>

        <section className="section">
          <div className="eyebrow">
            01 / SELECTED WORK
          </div>

          <h2 className="heading">
            Projects<span className="gradient-text">.</span>
          </h2>

          <p className="subheading">
            Infrastructure, automation, security and
            intelligent systems built while exploring the
            DevOps and cloud ecosystem.
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
        </section>

        <section className="section">
          <div className="eyebrow">
            02 / CURRENT STATUS
          </div>

          <div className="info-grid">
            <div className="info-card">
              <div className="info-value">8.5</div>
              <div className="info-label">
                Aggregate CGPA · Semester 2
              </div>
            </div>

            <div className="info-card">
              <div className="info-value">2025–27</div>
              <div className="info-label">
                MCA · VESIT Mumbai
              </div>
            </div>

            <div className="info-card">
              <div className="info-value gradient-text">
                OPEN
              </div>
              <div className="info-label">
                Internships & relevant roles
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}