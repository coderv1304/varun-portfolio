import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Beyond the Terminal | Varun Nair",
  description: "Outside the terminal: music, singing, and finding rhythm beyond engineering.",
};

export default function BeyondPage() {
  const equalizerBars = [
    18, 35, 24, 47, 30, 54, 23, 40, 17, 32, 49, 25, 39, 20, 45, 28, 51, 19, 35,
    24, 43, 17, 31, 48, 22, 37, 19, 44, 27, 51, 21, 34,
  ];

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
          <span className="eyebrow-label">06 / OUTSIDE THE TERMINAL</span>
          <span className="eyebrow-label" style={{ color: "var(--accent)" }}>
            A DIFFERENT KIND OF SIGNAL
          </span>
        </div>

        {/* Heading */}
        <h1
          className="section-h2"
          style={{
            fontSize: "clamp(48px, 6vw, 92px)",
            maxWidth: "1000px",
            marginBottom: "60px",
          }}
        >
          Systems by day.
          <br />
          <em>Songs by heart.</em>
        </h1>

        {/* 2-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-12 lg:gap-16 items-start">
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
              priority
            />
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
            <p style={{ fontSize: "18px", lineHeight: 1.6, color: "var(--ink)" }}>
              Singing is my creative reset — a different way to find rhythm, focus and expression beyond the screen.
            </p>

            <p style={{ fontSize: "14px", lineHeight: 1.8, color: "var(--muted-2)" }}>
              When I step away from code, pipelines, and terminal consoles, music provides the counterweight.
              Just as systems require balance, timing, and harmonic coordination between components, vocal music
              demands breath control, resonance, and emotional clarity.
            </p>

            {/* Music Card */}
            <div
              style={{
                border: "1px solid var(--line)",
                background: "var(--surface)",
                padding: "28px 24px",
                position: "relative",
                marginTop: "16px",
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

              {/* Caption */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  borderTop: "1px solid var(--line)",
                  paddingTop: "16px",
                  fontSize: "12px",
                }}
              >
                <div>
                  <strong style={{ color: "var(--ink)", fontWeight: 500, display: "block" }}>
                    Curiosity, in another key.
                  </strong>
                  <span style={{ fontSize: "11px", color: "var(--muted)" }}>
                    Singing keeps the creative side in tune.
                  </span>
                </div>
                <span style={{ color: "var(--accent)", fontSize: "16px" }}>♫</span>
              </div>
            </div>

            <div style={{ marginTop: "20px" }}>
              <Link
                href="/contact"
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
                Start a conversation ↗
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
