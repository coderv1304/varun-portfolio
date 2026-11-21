"use client";

import Link from "next/link";
import { site } from "@/lib/content";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      style={{
        padding: "60px var(--gutter) 40px",
        borderTop: "1px solid var(--line)",
        backgroundColor: "var(--bg)",
        fontFamily: "var(--font-mono)",
        fontSize: "9px",
        letterSpacing: "1px",
        color: "var(--muted)",
        position: "relative",
        zIndex: 10,
      }}
    >
      <div
        style={{
          maxWidth: "var(--maxw)",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          gap: "40px",
        }}
      >
        {/* Row 1: 3-column grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-[1fr_auto_auto] gap-6 md:gap-12 items-baseline"
          style={{
            borderBottom: "1px solid var(--line)",
            paddingBottom: "30px",
          }}
        >
          <div>
            <span style={{ color: "var(--ink)", fontWeight: 600 }}>VARUN NAIR</span>
            <span style={{ marginLeft: "12px", color: "var(--muted)" }}>© 2026</span>
          </div>
          <div className="text-left md:text-center" style={{ color: "var(--muted-2)" }}>
            DEVOPS / CLOUD / DEVSECOPS / MLOPS / AIOPS
          </div>
          <div className="text-left md:text-right" style={{ color: "var(--accent)" }}>
            MUMBAI, INDIA ↗ THE WORLD
          </div>
        </div>

        {/* Row 2: Social Links + Back to top button */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "20px",
          }}
        >
          <div style={{ display: "flex", gap: "24px", flexWrap: "wrap" }}>
            {site.socials.map((social) => (
              <a
                key={social.label}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "var(--muted)",
                  textDecoration: "none",
                  transition: "color 0.2s ease",
                  display: "inline-flex",
                  alignItems: "center",
                  minHeight: "44px",
                }}
                className="hover:text-[#ff8c59]"
              >
                {social.label} ↗
              </a>
            ))}
          </div>

          <button
            onClick={scrollToTop}
            aria-label="Scroll back to top"
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              border: "1px solid var(--line)",
              background: "transparent",
              color: "var(--ink)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              transition: "all 0.2s ease",
            }}
            className="hover:border-[#ff8c59] hover:text-[#ff8c59]"
          >
            ↑
          </button>
        </div>
      </div>
    </footer>
  );
}
