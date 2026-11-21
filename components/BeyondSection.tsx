"use client";

import Image from "next/image";
import Link from "next/link";

export default function BeyondSection() {
  const equalizerBars = [
    18, 35, 24, 47, 30, 54, 23, 40, 17, 32, 49, 25, 39, 20, 45, 28, 51, 19, 35,
    24, 43, 17, 31, 48, 22, 37, 19, 44, 27, 51, 21, 34,
  ];

  return (
    <section
      id="beyond"
      style={{
        padding: "100px var(--gutter) 80px",
        position: "relative",
      }}
      aria-label="Outside the Terminal"
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
          <span className="eyebrow-label">06 / OUTSIDE THE TERMINAL</span>
          <span className="eyebrow-label" style={{ color: "var(--accent)" }}>
            A DIFFERENT KIND OF SIGNAL
          </span>
        </div>

        {/* 2-column layout: Full bleed image left, copy right */}
        <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-12 lg:gap-16 items-start">
          {/* Left: Kurta editorial portrait */}
          <div
            style={{
              position: "relative",
              aspectRatio: "3/4",
              border: "1px solid var(--line)",
              overflow: "hidden",
              backgroundColor: "var(--surface)",
            }}
          >
            <Image
              src="/images/varun-editorial.jpg"
              alt="Varun Nair in a patterned kurta and sunglasses, outdoors."
              fill
              sizes="(max-width:900px) 100vw, 45vw"
              style={{
                objectFit: "cover",
                objectPosition: "50% 30%",
                filter: "saturate(0.92) contrast(1.03)",
              }}
            />
          </div>

          {/* Right: Copy + Music Card + Chips */}
          <div style={{ display: "flex", flexDirection: "column" }}>
            <h2 className="section-h2" style={{ marginBottom: "24px" }}>
              Systems by day.
              <br />
              <em>Songs by heart.</em>
            </h2>

            <p
              style={{
                fontSize: "15px",
                lineHeight: 1.8,
                color: "var(--muted-2)",
                marginBottom: "28px",
                maxWidth: "520px",
              }}
            >
              Singing is my creative reset — a different way to find rhythm, focus and expression beyond the screen.
            </p>

            <div style={{ marginBottom: "40px" }}>
              <Link
                href="/beyond"
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
                More about me ↗
              </Link>
            </div>

            {/* Music Card */}
            <div
              style={{
                border: "1px solid var(--line)",
                background: "var(--surface)",
                padding: "28px 24px",
                position: "relative",
                marginBottom: "32px",
              }}
              role="region"
              aria-label="A little about my love of music"
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  borderBottom: "1px solid var(--line)",
                  paddingBottom: "14px",
                  marginBottom: "24px",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "9px",
                    letterSpacing: "1.2px",
                    color: "var(--ink)",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                  }}
                >
                  <span aria-hidden="true" style={{ color: "var(--accent)" }}>♪</span> PERSONAL FREQUENCY
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "9px",
                    letterSpacing: "1px",
                    color: "var(--muted)",
                  }}
                >
                  VOICE / MUSIC
                </span>
              </div>

              {/* 32-bar equalizer */}
              <div className="equalizer" aria-hidden="true" style={{ marginBottom: "24px" }}>
                {equalizerBars.map((height, index) => (
                  <span
                    key={index}
                    style={
                      {
                        "--bar-height": `${height}px`,
                        "--bar-delay": `${-index * 0.11}s`,
                      } as React.CSSProperties
                    }
                  />
                ))}
              </div>

              {/* Music Card Footer */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  borderTop: "1px solid var(--line)",
                  paddingTop: "16px",
                  fontSize: "12px",
                  color: "var(--muted)",
                }}
              >
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <strong style={{ color: "var(--ink)", fontWeight: 500 }}>
                    Curiosity, in another key.
                  </strong>
                  <span style={{ fontSize: "11px", color: "var(--muted)" }}>
                    Singing keeps the creative side in tune.
                  </span>
                </div>
                <span style={{ color: "var(--accent)", fontSize: "14px" }} aria-hidden="true">
                  ♫
                </span>
              </div>
            </div>

            {/* 3 topic chips: Linux, Cloud, Music in mono 8px */}
            <div style={{ display: "flex", gap: "10px" }}>
              {["LINUX", "CLOUD", "MUSIC"].map((chip) => (
                <span
                  key={chip}
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "8px",
                    letterSpacing: "1.5px",
                    padding: "6px 12px",
                    border: "1px solid var(--line)",
                    color: "var(--muted)",
                    borderRadius: "999px",
                    background: "#0c0b0980",
                  }}
                >
                  {chip}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
