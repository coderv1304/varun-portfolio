import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { site, disciplines } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "About | Varun Nair",
  description:
    "How I work: failure modes first, explicit boundaries, automated recovery. Background, operating principles, and what I'm looking for next.",
  path: "/about",
});

export default function AboutPage() {
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
            marginBottom: "60px",
          }}
        >
          <span className="eyebrow-label">01 / ABOUT</span>
          <span className="eyebrow-label" style={{ color: "var(--accent)" }}>
            THE PERSON BEHIND THE SYSTEMS
          </span>
        </div>

        {/* H1 */}
        <h1
          className="section-h2"
          style={{
            fontSize: "clamp(48px, 6vw, 92px)",
            maxWidth: "1000px",
            marginBottom: "60px",
          }}
        >
          Infrastructure is
          <br />
          the starting point.
          <br />
          <em>Reliability is the point.</em>
        </h1>

        {/* 2-column grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-12 lg:gap-20 items-start">
          {/* Portrait */}
          <div
            className="bracket-frame about-portrait"
            style={{
              border: "1px solid var(--line)",
              position: "relative",
              overflow: "hidden",
              backgroundColor: "var(--surface)",
            }}
          >
            <Image
              src="/images/varun-portrait-suit.jpg"
              alt="Varun Nair in a dark suit."
              fill
              sizes="(max-width:700px) 90vw, 600px"
              style={{
                objectFit: "cover",
                objectPosition: "50% 12%",
              }}
              priority
            />
            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                padding: "30px 20px 16px",
                background:
                  "linear-gradient(to top, rgba(3,3,3,0.95), transparent)",
                display: "flex",
                justifyContent: "space-between",
                fontFamily: "var(--font-mono)",
                fontSize: "9px",
                letterSpacing: "1.2px",
                color: "var(--ink)",
              }}
            >
              <span>VARUN NAIR</span>
              <span style={{ color: "var(--accent)" }}>MUMBAI, IN</span>
            </div>
          </div>

          {/* Detailed Story & Philosophy */}
          <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
            <p
              style={{
                fontSize: "18px",
                lineHeight: 1.6,
                color: "var(--ink)",
              }}
            >
              {site.bio.aboutLead}
            </p>

            <p style={{ fontSize: "14px", lineHeight: 1.8, color: "var(--muted-2)" }}>
              {site.bio.aboutBody}
            </p>

            <p style={{ fontSize: "14px", lineHeight: 1.8, color: "var(--muted-2)" }}>
              My work centers on the intersection of cloud platforms, Linux system internals,
              least-privilege security boundaries, and autonomous agent loops. Whether hardening
              container images, designing encrypted backup workflows with zero external dependencies,
              or architecting human-in-the-loop Kubernetes remediation agents, my core goal is always
              resilience under failure.
            </p>

            {/* Academic profile */}
            <div
              style={{
                border: "1px solid var(--line)",
                background: "var(--surface)",
                padding: "24px",
                marginTop: "16px",
              }}
            >
              <div className="eyebrow-label" style={{ marginBottom: "12px", color: "var(--accent)" }}>
                ACADEMIC FOUNDATION
              </div>
              <h3 style={{ fontSize: "20px", fontWeight: 500, color: "var(--ink)", marginBottom: "6px" }}>
                {site.education.degree}
              </h3>
              <div style={{ fontSize: "13px", color: "var(--muted)", marginBottom: "12px" }}>
                {site.education.institution} · {site.education.period}
              </div>
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "10px",
                  letterSpacing: "0.8px",
                  color: "var(--muted)",
                  textTransform: "uppercase",
                }}
              >
                Graduating June 2027 · Available Dec 2026 – Jun 2027
              </div>
            </div>

            {/* Core disciplines */}
            <div style={{ marginTop: "24px" }}>
              <div className="eyebrow-label" style={{ marginBottom: "16px" }}>
                FOCUS DISCIPLINES
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                {disciplines.map((d) => (
                  <div
                    key={d.id}
                    style={{
                      borderBottom: "1px solid var(--line)",
                      paddingBottom: "12px",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <div>
                      <strong style={{ color: "var(--ink)", fontSize: "14px" }}>{d.label}</strong>
                      <div style={{ fontSize: "12px", color: "var(--muted)", marginTop: "4px" }}>
                        {d.headline}
                      </div>
                    </div>
                    <span style={{ fontFamily: "var(--font-mono)", fontSize: "10px", color: "var(--accent)" }}>
                      {d.index}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ display: "flex", gap: "20px", marginTop: "20px" }}>
              <Link
                href="/work"
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "11px",
                  letterSpacing: "1px",
                  color: "var(--accent)",
                  textDecoration: "none",
                  borderBottom: "1px solid var(--accent)",
                  paddingBottom: "4px",
                }}
              >
                View engineering work ↗
              </Link>
              <Link
                href="/contact"
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "11px",
                  letterSpacing: "1px",
                  color: "var(--muted)",
                  textDecoration: "none",
                  borderBottom: "1px solid var(--line)",
                  paddingBottom: "4px",
                }}
                className="hover:text-[#f1eee8]"
              >
                Get in touch ↗
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
