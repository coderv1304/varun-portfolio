"use client";

import { timeline } from "@/lib/content";

export default function TimelineSection() {
  return (
    <section
      id="timeline"
      style={{
        padding: "100px var(--gutter) 80px",
        position: "relative",
      }}
      aria-label="Interlude Timeline"
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
          <span className="eyebrow-label">INTERLUDE / STILL BECOMING</span>
          <span className="eyebrow-label" style={{ color: "var(--accent)" }}>
            A JOURNEY IN MOTION
          </span>
        </div>

        {/* Heading row */}
        <div className="heading-row">
          <h2 className="section-h2">
            Started with curiosity.
            <br />
            <em>Kept asking why.</em>
          </h2>
        </div>

        {/* 4 rows: year in mono left, H3 + paragraph right, hairline between */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          {timeline.map((item) => (
            <div
              key={item.year}
              className="grid grid-cols-1 md:grid-cols-[140px_1fr] gap-4 md:gap-12"
              style={{
                borderBottom: "1px solid var(--line)",
                padding: "36px 0",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "12px",
                  letterSpacing: "1.5px",
                  color: "var(--accent)",
                  fontWeight: 500,
                }}
              >
                {item.year}
              </div>

              <div>
                <h3
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "24px",
                    fontWeight: 500,
                    color: "var(--ink)",
                    letterSpacing: "-0.5px",
                    marginBottom: "10px",
                  }}
                >
                  {item.title}
                </h3>
                <p
                  style={{
                    fontSize: "14px",
                    lineHeight: 1.8,
                    color: "var(--muted-2)",
                    maxWidth: "760px",
                  }}
                >
                  {item.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
