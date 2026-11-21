"use client";

import { site } from "@/lib/content";

export default function ContactSection() {
  return (
    <section
      id="contact"
      style={{
        background: "linear-gradient(90deg, #030303f5 35%, #03030366)",
        padding: "100px var(--gutter) 60px",
        position: "relative",
      }}
      aria-label="Contact and Inquiries"
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
          <span className="eyebrow-label">07 / THE NEXT CHAPTER</span>
          <span className="eyebrow-label" style={{ color: "var(--accent)" }}>
            LET&apos;S MAKE IT MATTER
          </span>
        </div>

        {/* Availability line with pulse dot */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            fontFamily: "var(--font-mono)",
            fontSize: "10px",
            letterSpacing: "1.2px",
            color: "var(--accent)",
            marginBottom: "32px",
          }}
        >
          <span className="live-dot" aria-hidden="true" />
          <span>{site.availability}</span>
        </div>

        {/* H2 */}
        <h2
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "clamp(50px, 6.5vw, 105px)",
            fontWeight: 450,
            lineHeight: 1.05,
            letterSpacing: "-2.5px",
            color: "var(--ink)",
            marginBottom: "45px",
            maxWidth: "900px",
          }}
        >
          Something great
          <br />
          starts with{" "}
          <em
            style={{
              fontFamily: "var(--font-display)",
              fontStyle: "italic",
              color: "var(--accent)",
            }}
          >
            a hello.
          </em>
        </h2>

        {/* CTA Email link */}
        <div style={{ marginBottom: "36px" }}>
          <a
            href={`mailto:${site.email}`}
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "clamp(20px, 3.5vw, 36px)",
              color: "var(--ink)",
              textDecoration: "none",
              borderBottom: "1px solid var(--line)",
              paddingBottom: "8px",
              display: "inline-flex",
              alignItems: "center",
              gap: "16px",
              transition: "color 0.2s ease, border-color 0.2s ease",
            }}
            className="hover:!text-[#ff8c59] hover:!border-[#ff8c59] group"
          >
            <span>{site.email}</span>
            <svg
              width="25"
              height="25"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
              className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
            >
              <line x1="7" y1="17" x2="17" y2="7" />
              <polyline points="7 7 17 7 17 17" />
            </svg>
          </a>
        </div>

        {/* Sub text */}
        <p
          style={{
            fontSize: "15px",
            lineHeight: 1.75,
            color: "var(--muted)",
            maxWidth: "520px",
          }}
        >
          Infrastructure, security, automation, or a good problem. If our worlds overlap, I&apos;d love to hear from you.
        </p>
      </div>
    </section>
  );
}
