import Link from "next/link";
import StatusWidget from "@/components/StatusWidget";
import TerminalWidget from "@/components/TerminalWidget";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";
import { site } from "@/data/site";

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="fade-up">
          <div className="eyebrow">
            SECURITY / INFRASTRUCTURE / AUTOMATION
          </div>

          <h1 className="hero-title">
            VARUN
            <span className="hero-title-muted">
              NAIR<span className="gradient-text">.</span>
            </span>
          </h1>

          <p className="hero-description">
            MCA student at VESIT Mumbai, building practical
            systems across infrastructure, cloud engineering,
            automation, and security.
          </p>

          <p className="hero-intent">
            Open to internship opportunities in DevOps, cloud,
            infrastructure, and security engineering.
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
            <a
              href={site.resume}
              target="_blank"
              rel="noreferrer"
              className="button button-secondary"
            >
              VIEW RESUME ↗
            </a>
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

      <section className="section music-section">
        <div className="music-copy">
          <div className="eyebrow">
            02 / OUTSIDE THE TERMINAL
          </div>
          <h2 className="heading">
            Systems by day.
            <br />
            <span className="gradient-text">Songs by heart.</span>
          </h2>
          <p className="subheading">
            I&apos;m just as passionate about music as I am about
            infrastructure. Singing is my creative reset: a different
            way to find rhythm, focus, and expression beyond the screen.
          </p>
        </div>

        <aside className="music-card" aria-label="A little about my love of music">
          <div className="music-card-top">
            <span className="music-chip">
              <span aria-hidden="true">♪</span> PERSONAL FREQUENCY
            </span>
            <span className="music-note">VOICE / MUSIC</span>
          </div>

          <div className="equalizer" aria-hidden="true">
            {[18, 35, 24, 47, 30, 54, 23, 40, 17, 32, 49, 25, 39, 20, 45, 28, 51, 19, 35, 24, 43, 17, 31, 48, 22, 37, 19, 44, 27, 51, 21, 34].map((height, index) => (
              <span
                key={index}
                style={{
                  "--bar-height": `${height}px`,
                  "--bar-delay": `${-index * 0.11}s`,
                } as React.CSSProperties}
              />
            ))}
          </div>

          <div className="music-card-caption">
            <span className="music-disc" aria-hidden="true">♫</span>
            <div>
              <strong>Curiosity, in another key.</strong>
              <span>Singing keeps the creative side in tune.</span>
            </div>
            <span className="music-spark" aria-hidden="true">✳</span>
          </div>
        </aside>
      </section>

      <section className="section">
        <div className="eyebrow">
          03 / CURRENT STATUS
        </div>

        <div className="info-grid">
          <div className="info-card">
            <div className="info-value">{site.education.cgpa}</div>
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
  );
}