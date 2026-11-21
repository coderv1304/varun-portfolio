import type { Metadata } from "next";
import { site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact | Varun Nair",
  description: "Get in touch with Varun Nair for DevOps, Cloud, and Infrastructure engineering opportunities.",
};

export default function ContactPage() {
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

        {/* H1 */}
        <h1
          className="section-h2"
          style={{
            fontSize: "clamp(48px, 6vw, 96px)",
            maxWidth: "900px",
            marginBottom: "40px",
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
        </h1>

        <div style={{ marginBottom: "40px" }}>
          <a
            href={`mailto:${site.email}`}
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "clamp(24px, 4vw, 42px)",
              color: "var(--ink)",
              textDecoration: "none",
              borderBottom: "1px solid var(--line)",
              paddingBottom: "8px",
              display: "inline-flex",
              alignItems: "center",
              gap: "16px",
            }}
            className="hover:!text-[#ff8c59] hover:!border-[#ff8c59] group"
          >
            <span>{site.email}</span>
            <svg
              width="28"
              height="28"
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

        <p
          style={{
            fontSize: "16px",
            lineHeight: 1.8,
            color: "var(--muted)",
            maxWidth: "560px",
            marginBottom: "50px",
          }}
        >
          Infrastructure, security, automation, or a good problem. If our worlds overlap, I&apos;d love to hear from you.
        </p>

        {/* Directory of direct channels */}
        <div
          style={{
            borderTop: "1px solid var(--line)",
            paddingTop: "40px",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "24px",
          }}
        >
          {site.socials.map((s) => (
            <div
              key={s.label}
              style={{
                border: "1px solid var(--line)",
                background: "var(--surface)",
                padding: "20px",
              }}
            >
              <div className="eyebrow-label" style={{ marginBottom: "8px" }}>
                {s.label.toUpperCase()}
              </div>
              <a
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "11px",
                  color: "var(--accent)",
                  textDecoration: "none",
                }}
                className="hover:underline"
              >
                Connect ↗
              </a>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
