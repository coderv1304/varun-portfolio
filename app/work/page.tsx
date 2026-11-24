import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { projects } from "@/lib/content";
import { collectionPageSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Selected work | Varun Nair",
  description:
    "Six systems with measured results: approval-gated Kubernetes remediation, 38× alert reduction, encrypted backups, and cloud incident response.",
  path: "/work",
});

export default function WorkPage() {
  return (
    <main
      id="main"
      style={{
        padding: "160px var(--gutter) 100px",
        minHeight: "100vh",
      }}
    >
      <JsonLd
        data={collectionPageSchema({
          path: "/work",
          name: "Selected work",
          description:
            "Six infrastructure and security systems with documented results and limits.",
          items: projects.map((project) => ({
            name: project.title,
            path: `/work/${project.slug}`,
          })),
        })}
      />
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
          <span className="eyebrow-label">02 / WORK ARCHIVE</span>
          <span className="eyebrow-label" style={{ color: "var(--accent)" }}>
            SIX SYSTEMS. RUNNING CODE.
          </span>
        </div>

        {/* Heading */}
        <div className="heading-row">
          <h1 className="section-h2">
            Engineered systems.
            <br />
            <em>Verifiable outcomes.</em>
          </h1>
          <p
            style={{
              fontSize: "15px",
              lineHeight: 1.75,
              color: "var(--muted)",
              maxWidth: "460px",
            }}
          >
            A comprehensive catalog of systems engineered end-to-end across Kubernetes incident response, network anomaly detection, Linux security, and quant analytics.
          </p>
        </div>

        {/* Project List */}
        <div style={{ display: "flex", flexDirection: "column", gap: "60px" }}>
          {projects.map((project) => (
            <article
              key={project.slug}
              style={{
                border: "1px solid var(--line)",
                background: "var(--surface)",
                padding: "36px var(--gutter)",
                display: "grid",
                gridTemplateColumns: "1fr",
              }}
              className="lg:grid-cols-[1.2fr_0.8fr] gap-10 items-center group"
            >
              <div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    marginBottom: "12px",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "11px",
                      color: "var(--accent)",
                      fontWeight: 600,
                    }}
                  >
                    {project.index}
                  </span>
                  <span className="eyebrow-label">{project.category}</span>
                </div>

                <h2
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "32px",
                    fontWeight: 500,
                    color: "var(--ink)",
                    letterSpacing: "-1px",
                    marginBottom: "14px",
                  }}
                >
                  <Link
                    href={project.caseStudy}
                    style={{ color: "inherit", textDecoration: "none" }}
                    className="hover:text-[#ff8c59]"
                  >
                    {project.title}
                  </Link>
                </h2>

                <p
                  style={{
                    fontSize: "14px",
                    lineHeight: 1.8,
                    color: "var(--muted-2)",
                    marginBottom: "20px",
                    maxWidth: "600px",
                  }}
                >
                  {project.blurb}
                </p>

                {/* Tech stack tags */}
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "8px",
                    marginBottom: "28px",
                  }}
                >
                  {project.stack.map((t) => (
                    <span
                      key={t}
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "9px",
                        letterSpacing: "0.8px",
                        color: "var(--muted)",
                        padding: "4px 8px",
                        border: "1px solid var(--line)",
                        background: "#050505",
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div style={{ display: "flex", gap: "24px", alignItems: "center" }}>
                  <Link
                    href={project.caseStudy}
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "10px",
                      letterSpacing: "1px",
                      color: "var(--accent)",
                      textDecoration: "none",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "4px",
                    }}
                    className="hover:underline"
                  >
                    Read case study ↗
                  </Link>
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "10px",
                      letterSpacing: "1px",
                      color: "var(--muted)",
                      textDecoration: "none",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "4px",
                    }}
                    className="hover:text-[#f1eee8]"
                  >
                    GitHub repo ↗
                  </a>
                </div>
              </div>

              {/* Artwork / Preview */}
              <div
                style={{
                  position: "relative",
                  aspectRatio: "1440/660",
                  border: "1px solid var(--line)",
                  overflow: "hidden",
                }}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 900px) 100vw, 40vw"
                  style={{ objectFit: "cover", filter: "saturate(0.9)" }}
                />
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
