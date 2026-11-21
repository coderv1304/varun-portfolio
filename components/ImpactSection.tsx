"use client";

import Link from "next/link";
import SignalExplorer from "./SignalExplorer";
import { stats } from "@/lib/content";

export default function ImpactSection() {
  return (
    <section
      id="impact"
      style={{
        backgroundColor: "#050504",
        padding: "110px var(--gutter) 90px",
        position: "relative",
        overflow: "hidden",
      }}
      aria-label="Impact and Metrics"
    >
      {/* Radial warm glow top-right */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          width: "600px",
          height: "600px",
          background:
            "radial-gradient(circle at 80% 20%, rgba(255, 140, 89, 0.05) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: "var(--maxw)", margin: "0 auto", position: "relative", zIndex: 2 }}>
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
          <span className="eyebrow-label">04 / THE WORK, MULTIPLIED</span>
          <span className="eyebrow-label" style={{ color: "var(--accent)" }}>
            SYSTEMS. SIGNALS. STABILITY.
          </span>
        </div>

        {/* Heading row */}
        <div className="heading-row">
          <h2 className="section-h2">
            Reach is a number.
            <br />
            <em>Reliability is personal.</em>
          </h2>
          <p
            style={{
              fontSize: "15px",
              lineHeight: 1.75,
              color: "var(--muted)",
              maxWidth: "460px",
            }}
          >
            Every alert, pipeline and deployment is a chance to remove a failure mode.
          </p>
        </div>

        {/* Lead Stat: 8.49 in 245px Instrument Serif + slash-suffix /10 */}
        <div
          className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-8 items-end"
          style={{
            borderBottom: "1px solid var(--line)",
            paddingBottom: "60px",
          }}
        >
          <div>
            <div className="impact-numeral">
              {stats[0].value}
              <span
                style={{
                  color: "var(--accent)",
                  fontSize: "clamp(36px, 6vw, 90px)",
                  fontFamily: "var(--font-sans)",
                  marginLeft: "4px",
                }}
              >
                /10
              </span>
            </div>
          </div>
          <div>
            <h3
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "26px",
                fontWeight: 500,
                color: "var(--ink)",
                letterSpacing: "-0.5px",
                lineHeight: 1.25,
                marginBottom: "12px",
              }}
            >
              Aggregate CGPA.
              <br />
              Consistency under load.
            </h3>
            <p
              style={{
                fontSize: "14px",
                lineHeight: 1.8,
                color: "var(--muted)",
                marginBottom: "16px",
              }}
            >
              MCA at VESIT Mumbai — semester 2.
            </p>
            <Link
              href="/about"
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
              The academic side ↗
            </Link>
          </div>
        </div>

        {/* Pair row (1fr 1fr 1fr, gap 60px, padding 55px 0 80px) */}
        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-[60px]"
          style={{
            padding: "55px 0 80px",
            borderBottom: "1px solid var(--line)",
          }}
        >
          {/* Stat 07 */}
          <div>
            <div className="secondary-numeral">
              {stats[1].value}
              <span style={{ color: "var(--accent)", fontSize: "40px", marginLeft: "2px" }}>
                +
              </span>
            </div>
            <div
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "18px",
                fontWeight: 500,
                color: "var(--ink)",
                marginTop: "12px",
                marginBottom: "8px",
              }}
            >
              Projects shipped
            </div>
            <p style={{ fontSize: "13px", lineHeight: 1.7, color: "var(--muted)" }}>
              Seven end-to-end systems across infrastructure, security and AI operations.
            </p>
          </div>

          {/* Stat 11 */}
          <div>
            <div className="secondary-numeral">
              {stats[2].value}
              <span style={{ color: "var(--accent)", fontSize: "40px", marginLeft: "2px" }}>
                +
              </span>
            </div>
            <div
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "18px",
                fontWeight: 500,
                color: "var(--ink)",
                marginTop: "12px",
                marginBottom: "8px",
              }}
            >
              Public repositories
            </div>
            <p style={{ fontSize: "13px", lineHeight: 1.7, color: "var(--muted)" }}>
              Open code, build logs and a growing engineering knowledge base.
            </p>
          </div>

          {/* THE COMMON THREAD panel */}
          <div
            style={{
              border: "1px solid var(--line)",
              padding: "28px",
              background: "var(--surface)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <div className="eyebrow-label" style={{ marginBottom: "16px" }}>
              THE COMMON THREAD
            </div>
            <div
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "20px",
                lineHeight: 1.4,
                color: "var(--ink)",
              }}
            >
              Build it.
              <br />
              Break it.
              <br />
              <em
                style={{
                  fontFamily: "var(--font-display)",
                  fontStyle: "italic",
                  color: "var(--accent)",
                }}
              >
                Document the recovery.
              </em>
            </div>
          </div>
        </div>

        {/* The Build Story Panel + Signal Explorer #2 grid */}
        <div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start"
          style={{
            padding: "80px 0 60px",
            borderBottom: "1px solid var(--line)",
          }}
        >
          {/* The build story panel */}
          <div>
            <div className="eyebrow-label" style={{ marginBottom: "16px" }}>
              MY LEARNINGS / PART OF THE BUILDING STORY
            </div>
            <h3
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "36px",
                fontWeight: 500,
                lineHeight: 1.15,
                color: "var(--ink)",
                letterSpacing: "-1px",
                marginBottom: "20px",
              }}
            >
              From notes.
              <br />
              <em
                style={{
                  fontFamily: "var(--font-display)",
                  fontStyle: "italic",
                  color: "var(--accent)",
                }}
              >
                To running systems.
              </em>
            </h3>
            <p
              style={{
                fontSize: "14px",
                lineHeight: 1.8,
                color: "var(--muted-2)",
                marginBottom: "28px",
              }}
            >
              MY LEARNINGS started as a place to keep commands I didn&apos;t want to forget.
              It became the spine of everything here — DevOps, AWS, Linux, DevSecOps and DSA,
              written down while it was still confusing.
            </p>
            <a
              href="https://github.com/coderv1304/MY-LEARNINGS"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "11px",
                letterSpacing: "1px",
                color: "var(--accent)",
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                gap: "4px",
                marginBottom: "36px",
              }}
              className="hover:underline"
            >
              Read the repository ↗
            </a>

            {/* Timeline: 3 rows */}
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "70px 1fr",
                  borderTop: "1px solid var(--line)",
                  paddingTop: "12px",
                }}
              >
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "11px", color: "var(--accent)" }}>
                  2024
                </span>
                <span style={{ fontSize: "13px", color: "var(--muted)" }}>
                  Foundations · Linux & shell automation
                </span>
              </div>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "70px 1fr",
                  borderTop: "1px solid var(--line)",
                  paddingTop: "12px",
                }}
              >
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "11px", color: "var(--accent)" }}>
                  2025
                </span>
                <span style={{ fontSize: "13px", color: "var(--muted)" }}>
                  MCA @ VESIT · Cloud architecture & DevSecOps
                </span>
              </div>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "70px 1fr",
                  borderTop: "1px solid var(--line)",
                  paddingTop: "12px",
                }}
              >
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "11px", color: "var(--accent)" }}>
                  Today
                </span>
                <span style={{ fontSize: "13px", color: "var(--muted)" }}>
                  Building under load · AIOps & deterministic incident response
                </span>
              </div>
            </div>
          </div>

          {/* Signal Explorer #2 (default: Secure) */}
          <div>
            <SignalExplorer
              defaultTab="secure"
              customStory={{
                headline: "7 systems. One operating principle: evidence before action.",
                body: "Every layer from Linux kernels to LangGraph Kubernetes agents adheres to verifiable boundaries: state must be reproducible, changes allowlisted, and alerts validated.",
                linkText: "See the case studies ↗",
                linkUrl: "/work",
              }}
            />
          </div>
        </div>

        {/* Reach strip (2 stats + disclaimer) */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "24px",
            paddingTop: "40px",
          }}
        >
          <div style={{ display: "flex", gap: "36px" }}>
            <div>
              <span className="proof-numeral">11</span>
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "9px",
                  letterSpacing: "1px",
                  color: "var(--muted)",
                  marginLeft: "10px",
                  textTransform: "uppercase",
                }}
              >
                PUBLIC REPOSITORIES
              </span>
            </div>
            <div>
              <span className="proof-numeral">07</span>
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "9px",
                  letterSpacing: "1px",
                  color: "var(--muted)",
                  marginLeft: "10px",
                  textTransform: "uppercase",
                }}
              >
                SHIPPED PROJECTS
              </span>
            </div>
          </div>
          <p
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "10px",
              letterSpacing: "0.8px",
              color: "var(--muted)",
              maxWidth: "400px",
            }}
          >
            Repository and project counts from my public GitHub, not vanity metrics.
          </p>
        </div>
      </div>
    </section>
  );
}
