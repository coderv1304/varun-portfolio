"use client";

import Image from "next/image";
import Link from "next/link";
import SignalExplorer from "./SignalExplorer";
import { site } from "@/lib/content";

export default function AboutSection() {
  return (
    <section
      id="about"
      style={{
        padding: "100px var(--gutter) 80px",
        position: "relative",
      }}
      aria-label="About Varun Nair"
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
          }}
        >
          <span className="eyebrow-label">
            04 / THE PERSON BEHIND THE SYSTEMS
          </span>
          <span className="eyebrow-label" style={{ color: "var(--accent)" }}>
            A CONNECTED PERSPECTIVE
          </span>
        </div>

        {/* 2-column grid: .85fr 1.15fr, gap 11% */}
        <div
          className="grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-12 lg:gap-[11%]"
          style={{ marginTop: "80px" }}
        >
          {/* Left: Portrait in 1px bordered frame with 18px corner brackets */}
          <div>
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

              {/* Bottom gradient caption with VARUN NAIR + MUMBAI, IN */}
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  padding: "36px 20px 18px",
                  background:
                    "linear-gradient(to top, rgba(3, 3, 3, 0.95) 0%, rgba(3, 3, 3, 0.6) 60%, transparent 100%)",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  fontFamily: "var(--font-mono)",
                  fontSize: "9px",
                  letterSpacing: "1.2px",
                  color: "var(--ink)",
                  zIndex: 3,
                }}
              >
                <span>{site.name.toUpperCase()}</span>
                <span style={{ color: "var(--accent)" }}>MUMBAI, IN</span>
              </div>
            </div>
          </div>

          {/* Right Copy */}
          <div style={{ display: "flex", flexDirection: "column" }}>
            <h2 className="section-h2" style={{ marginBottom: "28px" }}>
              Infrastructure is
              <br />
              the starting point.
              <br />
              <em>Reliability is the point.</em>
            </h2>

            <p
              style={{
                fontSize: "15px",
                lineHeight: 1.75,
                color: "var(--ink)",
                marginBottom: "20px",
              }}
            >
              {site.bio.aboutLead}
            </p>

            <p
              style={{
                fontSize: "14px",
                lineHeight: 1.8,
                color: "var(--muted-2)",
                marginBottom: "24px",
              }}
            >
              {site.bio.aboutBody}
            </p>

            <div style={{ marginBottom: "36px" }}>
              <Link
                href="/about"
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
                Read my story ↗
              </Link>
            </div>

            {/* Identity notes (mono 9px, 3 items separated by thin rules) */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr 1fr",
                gap: "16px",
                borderTop: "1px solid var(--line)",
                borderBottom: "1px solid var(--line)",
                padding: "16px 0",
                marginBottom: "45px",
                fontFamily: "var(--font-mono)",
                fontSize: "9px",
                letterSpacing: "1px",
                color: "var(--muted)",
              }}
            >
              <div className="border-r border-[var(--line)] pr-2">SYSTEMS MIND.</div>
              <div className="border-r border-[var(--line)] pr-2">OPERATOR&apos;S INSTINCT.</div>
              <div>BUILDER&apos;S DISCIPLINE.</div>
            </div>

            {/* Signal Explorer Widget #1 */}
            <div>
              <SignalExplorer defaultTab="build" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
