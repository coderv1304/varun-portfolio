"use client";

import Link from "next/link";
import { stats } from "@/lib/content";

export default function ProofStrip() {
  return (
    <section
      aria-label="Proof metrics"
      style={{
        borderBlock: "1px solid var(--line)",
        backgroundColor: "#101010",
        padding: "37px var(--gutter)",
        position: "relative",
        zIndex: 10,
      }}
    >
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1fr_1fr_1fr_0.9fr] gap-6 lg:gap-9"
        style={{
          maxWidth: "var(--maxw)",
          margin: "0 auto",
        }}
      >
        {stats.map((stat, index) => (
          <div
            key={stat.label}
            className={
              index === stats.length - 1
                ? "flex flex-col justify-center"
                : "flex flex-col justify-center pr-0 lg:pr-8 border-b md:border-b-0 md:border-r border-[var(--line)] pb-6 md:pb-0"
            }
          >
            <div className="proof-numeral">
              {stat.value}
              {stat.suffix && (
                <span
                  style={{
                    color: "var(--accent)",
                    fontSize: "0.55em",
                    marginLeft: "0.06em",
                  }}
                >
                  {stat.suffix}
                </span>
              )}
            </div>
            <div
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "10px",
                letterSpacing: "0.8px",
                color: "var(--muted)",
                marginTop: "8px",
                textTransform: "uppercase",
              }}
            >
              {stat.label}
            </div>
            {stat.sublabel && (
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "9px",
                  letterSpacing: "0.6px",
                  color: "var(--accent)",
                  marginTop: "6px",
                  textTransform: "uppercase",
                }}
              >
                {stat.sublabel}
              </div>
            )}
          </div>
        ))}

        {/* CTA (hidden <=1050px) */}
        <div className="hidden lg:flex items-center justify-between pl-4">
          <Link
            href="/#work"
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "10px",
              letterSpacing: "1.2px",
              color: "var(--ink)",
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
              transition: "color 0.2s ease",
            }}
            className="hover:text-[#ff8c59] group"
          >
            <span style={{ maxWidth: "160px", lineHeight: "1.4" }}>
              THE SYSTEMS. THE REAL-WORLD REASONING.
            </span>
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
              className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
            >
              <line x1="7" y1="17" x2="17" y2="7" />
              <polyline points="7 7 17 7 17 17" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
