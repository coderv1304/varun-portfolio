"use client";

import Image from "next/image";
import Link from "next/link";
import { projects } from "@/lib/content";
import { trackEvent } from "@/lib/analytics";

export default function SelectedWork() {
  const featuredProjects = projects.filter((p) => p.featured);
  const moreProjects = projects.filter((p) => !p.featured);

  return (
    <section
      id="work"
      style={{
        padding: "100px var(--gutter) 80px",
        position: "relative",
      }}
      aria-label="Selected Engineering Work"
    >
      <div style={{ maxWidth: "var(--maxw)", margin: "0 auto" }}>
        {/* Section Label */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderBottom: "1px solid var(--line)",
            paddingBottom: "16px",
            marginBottom: "60px",
          }}
        >
          <span className="eyebrow-label">02 / SELECTED WORK</span>
          <span className="eyebrow-label" style={{ color: "var(--accent)" }}>
            BUILT. TESTED. PUT INTO THE WORLD.
          </span>
        </div>

        {/* Heading row: H2 + right paragraph */}
        <div className="heading-row">
          <h2 className="section-h2">
            Ideas are cheap.
            <br />
            <em>Working systems aren&apos;t.</em>
          </h2>
          <p
            style={{
              fontSize: "15px",
              lineHeight: 1.75,
              color: "var(--muted)",
              maxWidth: "460px",
            }}
          >
            From incident response to network defence.
            <br />
            A few systems I&apos;ve taken from concept to running code.
          </p>
        </div>

        {/* Work Gallery: Card 01 full width, Card 02 and 03 half width */}
        <div
          className="grid grid-cols-1 lg:grid-cols-2 gap-y-[70px] gap-x-10"
          style={{ marginBottom: "80px" }}
        >
          {featuredProjects.map((project, idx) => {
            const isFullWidth = idx === 0;
            return (
              <div
                key={project.slug}
                className={isFullWidth ? "lg:col-span-2 group" : "group"}
                style={{ display: "flex", flexDirection: "column" }}
              >
                {/* 1. Fake browser chrome + artwork */}
                <div
                  className="sheen-card"
                  style={{
                    border: "1px solid var(--line)",
                    background: "var(--surface)",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  {/* Browser chrome header bar */}
                  <div
                    style={{
                      height: "36px",
                      background: "#080808",
                      borderBottom: "1px solid var(--line)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      padding: "0 14px",
                    }}
                  >
                    <div style={{ display: "flex", gap: "6px" }}>
                      <span
                        style={{
                          width: "6px",
                          height: "6px",
                          borderRadius: "50%",
                          background: "#4c4c4c",
                        }}
                      />
                      <span
                        style={{
                          width: "6px",
                          height: "6px",
                          borderRadius: "50%",
                          background: "#4c4c4c",
                        }}
                      />
                      <span
                        style={{
                          width: "6px",
                          height: "6px",
                          borderRadius: "50%",
                          background: "#4c4c4c",
                        }}
                      />
                    </div>
                    <div
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "9px",
                        letterSpacing: "0.8px",
                        color: "var(--muted)",
                      }}
                    >
                      {project.repo.replace("https://", "")}
                    </div>
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Open ${project.title} on GitHub`}
                      onClick={() =>
                        trackEvent("repo_click", { project: project.slug, placement: "evidence_card" })
                      }
                      style={{
                        color: "var(--muted)",
                        fontSize: "11px",
                        textDecoration: "none",
                      }}
                      className="hover:text-[#ff8c59]"
                    >
                      ↗
                    </a>
                  </div>

                  {/* Screenshot Container */}
                  <div
                    style={{
                      position: "relative",
                      aspectRatio: "1440/660",
                      width: "100%",
                      overflow: "hidden",
                    }}
                  >
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes={isFullWidth ? "(max-width: 1500px) 100vw, 1500px" : "(max-width: 900px) 100vw, 50vw"}
                      style={{
                        objectFit: "cover",
                        filter: "saturate(0.9)",
                        transition: "transform 0.8s cubic-bezier(0.16, 1, 0.3, 1), filter 0.8s ease",
                      }}
                      className="group-hover:scale-[1.01]"
                    />

                    {/* Artifact label strip */}
                    <div
                      style={{
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        right: 0,
                        background:
                          "linear-gradient(to top, rgba(3, 3, 3, 0.95), rgba(3, 3, 3, 0.4), transparent)",
                        display: "flex",
                        justifyContent: "space-between",
                        padding: "24px 20px 14px",
                        fontFamily: "var(--font-mono)",
                        fontSize: "9px",
                        letterSpacing: "1px",
                        color: "var(--muted)",
                        textTransform: "uppercase",
                      }}
                    >
                      <span>PRODUCT & ENGINEERING</span>
                      <span style={{ color: "var(--accent)" }}>OPEN SOURCE</span>
                    </div>

                    {/* 48px circular arrow button bottom-right */}
                    <Link
                      href={project.caseStudy}
                      aria-label={`Explore ${project.title} case study`}
                      style={{
                        position: "absolute",
                        bottom: "16px",
                        right: "16px",
                        width: "48px",
                        height: "48px",
                        borderRadius: "50%",
                        background: "#030303d9",
                        border: "1px solid #aa9b8970",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "var(--ink)",
                        textDecoration: "none",
                        transition: "all 0.25s ease",
                        zIndex: 5,
                      }}
                      className="hover:!bg-[#f1eee8] hover:!text-[#030303] group-hover:rotate-45"
                    >
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <line x1="7" y1="17" x2="17" y2="7" />
                        <polyline points="7 7 17 7 17 17" />
                      </svg>
                    </Link>
                  </div>
                </div>

                {/* Caption grid: 25px 1fr */}
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "30px 1fr",
                    gap: "16px",
                    marginTop: "24px",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "11px",
                      color: "var(--accent)",
                      paddingTop: "4px",
                    }}
                  >
                    {project.index}
                  </span>
                  <div>
                    <div className="eyebrow-label" style={{ marginBottom: "6px" }}>
                      {project.category}
                    </div>
                    <h3
                      style={{
                        fontFamily: "var(--font-sans)",
                        fontSize: "27px",
                        fontWeight: 500,
                        color: "var(--ink)",
                        letterSpacing: "-1px",
                        marginBottom: "10px",
                      }}
                    >
                      {project.title}
                    </h3>
                    <p
                      style={{
                        fontSize: "13px",
                        lineHeight: 1.8,
                        color: "var(--muted-2)",
                        marginBottom: "18px",
                        maxWidth: "600px",
                      }}
                    >
                      {project.blurb}
                    </p>

                    {/* Evidence block: problem → approach → measured result */}
                    <div className="evidence-block">
                      <div className="evidence-result">
                        <span className="evidence-value">
                          {project.evidence.result.value}
                          {project.evidence.result.unit && (
                            <span className="evidence-unit">
                              {project.evidence.result.unit}
                            </span>
                          )}
                        </span>
                        <span className="evidence-result-label">
                          {project.evidence.result.label}
                        </span>
                      </div>

                      {project.evidence.result.note && (
                        <p className="evidence-note">
                          {project.evidence.result.note}
                        </p>
                      )}

                      <dl className="evidence-grid">
                        <div>
                          <dt>PROBLEM</dt>
                          <dd>{project.evidence.problem}</dd>
                        </div>
                        <div>
                          <dt>APPROACH</dt>
                          <dd>{project.evidence.approach}</dd>
                        </div>
                      </dl>

                      <ul className="evidence-stack" aria-label={`${project.title} stack`}>
                        {project.stack.slice(0, 5).map((tech) => (
                          <li key={tech}>{tech}</li>
                        ))}
                        {project.stack.length > 5 && (
                          <li className="evidence-stack-more">
                            +{project.stack.length - 5}
                          </li>
                        )}
                      </ul>

                      <div className="evidence-links">
                        <Link href={project.caseStudy}>
                          Case study <span aria-hidden="true">→</span>
                        </Link>
                        <a
                          href={project.repo}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={() =>
                            trackEvent("repo_click", { project: project.slug, placement: "evidence_links" })
                          }
                        >
                          Repository <span aria-hidden="true">↗</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* "More ways I build" block (3 rows, hairline separated) */}
        <div
          style={{
            borderTop: "1px solid var(--line)",
            paddingTop: "50px",
          }}
        >
          <div className="eyebrow-label" style={{ marginBottom: "28px" }}>
            MORE WAYS I BUILD
          </div>

          <div style={{ display: "flex", flexDirection: "column" }}>
            {moreProjects.map((p) => (
              <div
                key={p.slug}
                className="group"
                style={{
                  borderBottom: "1px solid var(--line)",
                  padding: "24px 0",
                  display: "grid",
                  gridTemplateColumns: "1fr auto",
                  alignItems: "center",
                  gap: "24px",
                }}
              >
                <div>
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "9px",
                      letterSpacing: "1px",
                      color: "var(--accent)",
                      display: "block",
                      marginBottom: "6px",
                    }}
                  >
                    {p.index} / {p.category}
                  </span>
                  <Link
                    href={p.caseStudy}
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "22px",
                      fontWeight: 500,
                      color: "var(--ink)",
                      textDecoration: "none",
                      letterSpacing: "-0.5px",
                    }}
                    className="hover:text-[#ff8c59]"
                  >
                    {p.title}
                  </Link>
                  <p
                    style={{
                      fontSize: "13px",
                      color: "var(--muted)",
                      marginTop: "6px",
                      maxWidth: "700px",
                    }}
                  >
                    {p.blurb}
                  </p>
                </div>
                <Link
                  href={p.caseStudy}
                  style={{
                    color: "var(--muted)",
                    fontSize: "18px",
                    textDecoration: "none",
                  }}
                  className="group-hover:text-[#ff8c59] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                  aria-label={`Open case study for ${p.title}`}
                >
                  ↗
                </Link>
              </div>
            ))}
          </div>

          {/* Details disclosure: Inside PrometheusAI */}
          <details
            style={{
              marginTop: "36px",
              border: "1px solid var(--line)",
              padding: "20px 24px",
              background: "var(--surface)",
              cursor: "pointer",
            }}
          >
            <summary
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "11px",
                letterSpacing: "1.2px",
                color: "var(--accent)",
                textTransform: "uppercase",
              }}
            >
              Inside PrometheusAI: Architecture & Boundary
            </summary>
            <p
              style={{
                marginTop: "16px",
                fontSize: "13px",
                lineHeight: 1.8,
                color: "var(--muted-2)",
              }}
            >
              PrometheusAI integrates LangGraph agent state machines, a FastAPI orchestration layer,
              continuous metric evaluations from Prometheus, log queries from Loki, and persistent
              vectorized runbooks using PostgreSQL + pgvector. Remediations are strictly bound to an
              isolated dry-run policy service, enforcing a cryptographic human-in-the-loop approval
              gate before any mutating kubectl call touches the cluster.
            </p>
          </details>

          {/* Footer link: Explore all work → */}
          <div style={{ marginTop: "40px" }}>
            <Link
              href="/work"
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "11px",
                letterSpacing: "1px",
                color: "var(--ink)",
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
              }}
              className="hover:text-[#ff8c59]"
            >
              Explore all work →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
