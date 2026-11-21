import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/lib/content";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return projects.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return { title: "Project Not Found" };

  return {
    title: `${project.title} | Varun Nair`,
    description: project.blurb,
  };
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main
      id="main"
      style={{
        padding: "160px var(--gutter) 100px",
        minHeight: "100vh",
      }}
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
            marginBottom: "50px",
          }}
        >
          <span className="eyebrow-label">
            CASE STUDY // {project.index}
          </span>
          <span className="eyebrow-label" style={{ color: "var(--accent)" }}>
            {project.category}
          </span>
        </div>

        {/* H1 */}
        <h1
          className="section-h2"
          style={{
            fontSize: "clamp(44px, 5.5vw, 84px)",
            maxWidth: "1100px",
            marginBottom: "40px",
          }}
        >
          {project.title}.
          <br />
          <em>Systems & Engineering.</em>
        </h1>

        {/* Hero image with fake browser chrome */}
        <div
          style={{
            border: "1px solid var(--line)",
            background: "var(--surface)",
            marginBottom: "60px",
            overflow: "hidden",
          }}
        >
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
              <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#4c4c4c" }} />
              <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#4c4c4c" }} />
              <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#4c4c4c" }} />
            </div>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: "9px", color: "var(--muted)" }}>
              {project.repo.replace("https://", "")}
            </div>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: "9px", color: "var(--accent)" }}>
              VERIFIED
            </div>
          </div>
          <div style={{ position: "relative", aspectRatio: "1440/660", width: "100%" }}>
            <Image
              src={project.image}
              alt={project.title}
              fill
              priority
              style={{ objectFit: "cover", filter: "saturate(0.95)" }}
            />
          </div>
        </div>

        {/* 2-column body + Meta Strip */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_0.7fr] gap-12 lg:gap-16 items-start">
          {/* Left Column: Narrative, Architecture, Outcomes */}
          <div style={{ display: "flex", flexDirection: "column", gap: "36px" }}>
            <div>
              <div className="eyebrow-label" style={{ marginBottom: "12px", color: "var(--accent)" }}>
                OVERVIEW
              </div>
              <p style={{ fontSize: "16px", lineHeight: 1.8, color: "var(--ink)" }}>
                {project.details?.overview || project.blurb}
              </p>
            </div>

            {project.details?.architecture && (
              <div>
                <div className="eyebrow-label" style={{ marginBottom: "16px" }}>
                  SYSTEM ARCHITECTURE
                </div>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "14px" }}>
                  {project.details.architecture.map((item, idx) => (
                    <li
                      key={idx}
                      style={{
                        display: "flex",
                        alignItems: "baseline",
                        gap: "14px",
                        fontSize: "14px",
                        lineHeight: 1.7,
                        color: "var(--muted-2)",
                        borderBottom: "1px solid var(--line)",
                        paddingBottom: "12px",
                      }}
                    >
                      <span style={{ fontFamily: "var(--font-mono)", fontSize: "10px", color: "var(--accent)" }}>
                        0{idx + 1}
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {project.details?.outcomes && (
              <div>
                <div className="eyebrow-label" style={{ marginBottom: "16px" }}>
                  VERIFIED OUTCOMES
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                  {project.details.outcomes.map((item, idx) => (
                    <div
                      key={idx}
                      style={{
                        padding: "14px 18px",
                        background: "var(--surface)",
                        border: "1px solid var(--line)",
                        fontSize: "13px",
                        color: "var(--muted-2)",
                        lineHeight: 1.7,
                      }}
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Column: "outcome / stack / repo" meta strip */}
          <div
            style={{
              border: "1px solid var(--line)",
              background: "var(--surface)",
              padding: "32px 24px",
              display: "flex",
              flexDirection: "column",
              gap: "28px",
            }}
          >
            <div>
              <div className="eyebrow-label" style={{ marginBottom: "8px" }}>
                REPOSITORY
              </div>
              <a
                href={project.repo}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "11px",
                  color: "var(--accent)",
                  textDecoration: "none",
                  wordBreak: "break-all",
                }}
                className="hover:underline"
              >
                {project.repo} ↗
              </a>
            </div>

            <div>
              <div className="eyebrow-label" style={{ marginBottom: "12px" }}>
                TECHNOLOGY STACK
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                {project.stack.map((t) => (
                  <span
                    key={t}
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "9px",
                      padding: "4px 8px",
                      background: "#030303",
                      border: "1px solid var(--line)",
                      color: "var(--ink)",
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <div className="eyebrow-label" style={{ marginBottom: "8px" }}>
                NAVIGATION
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                <Link
                  href="/work"
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "10px",
                    color: "var(--muted)",
                    textDecoration: "none",
                  }}
                  className="hover:text-[#ff8c59]"
                >
                  ← Return to all work
                </Link>
                <Link
                  href="/contact"
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "10px",
                    color: "var(--accent)",
                    textDecoration: "none",
                  }}
                  className="hover:underline"
                >
                  Discuss this project ↗
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
