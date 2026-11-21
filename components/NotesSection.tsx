"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { notes } from "@/lib/content";

export default function NotesSection() {
  const [filter, setFilter] = useState<"ALL" | "BUILD LOG" | "DEEP DIVE">("ALL");

  const filteredNotes = notes.filter((note) => {
    if (filter === "ALL") return true;
    return note.type === filter;
  });

  return (
    <section
      id="notes"
      style={{
        padding: "100px var(--gutter) 80px",
        position: "relative",
      }}
      aria-label="Notes and Technical Build Logs"
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
          <span className="eyebrow-label">05 / IDEAS THAT TRAVEL</span>
          <span className="eyebrow-label" style={{ color: "var(--accent)" }}>
            WRITTEN DOWN. SHIPPED. EXPLAINED.
          </span>
        </div>

        {/* Heading row */}
        <div className="heading-row">
          <h2 className="section-h2">
            A voice.
            <br />
            <em>With something to prove.</em>
          </h2>
          <div>
            <p
              style={{
                fontSize: "15px",
                lineHeight: 1.75,
                color: "var(--muted)",
                maxWidth: "460px",
                marginBottom: "16px",
              }}
            >
              Writing architecture retrospectives, post-mortems, and technical explorations on distributed systems and cloud security.
            </p>
            <a
              href="https://varun-nair-13.hashnode.dev/"
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
              }}
              className="hover:underline"
            >
              My Hashnode ↗
            </a>
          </div>
        </div>

        {/* Filter row: All notes / Build logs / Deep dives */}
        <div
          style={{
            display: "flex",
            gap: "12px",
            marginBottom: "50px",
            flexWrap: "wrap",
          }}
          role="group"
          aria-label="Filter notes by category"
        >
          {[
            { id: "ALL", label: "All notes" },
            { id: "BUILD LOG", label: "Build logs" },
            { id: "DEEP DIVE", label: "Deep dives" },
          ].map((item) => {
            const isActive = filter === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setFilter(item.id as any)}
                aria-pressed={isActive}
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "10px",
                  letterSpacing: "1px",
                  textTransform: "uppercase",
                  padding: "10px 18px",
                  borderRadius: "999px",
                  border: "1px solid var(--line)",
                  background: isActive ? "#b99b7312" : "transparent",
                  color: isActive ? "var(--accent)" : "var(--muted)",
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                  borderBottom: isActive ? "2px solid var(--accent)" : "1px solid var(--line)",
                  minHeight: "44px",
                }}
                className="hover:border-[#ff8c59] hover:text-[#f1eee8]"
              >
                {item.label}
              </button>
            );
          })}
        </div>

        {/* Grid: repeat(3, 1fr), gap 45px 25px */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-[45px] gap-x-[25px]"
          style={{ marginBottom: "80px" }}
        >
          {filteredNotes.map((note) => (
            <article
              key={note.title}
              className="group"
              style={{ display: "flex", flexDirection: "column" }}
            >
              {/* 16:9 panel containing cover image + centered 52px play/book icon */}
              <div
                style={{
                  position: "relative",
                  aspectRatio: "16/9",
                  background: "#171410",
                  border: "1px solid #51433280",
                  overflow: "hidden",
                }}
              >
                <Image
                  src={note.cover}
                  alt={note.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  style={{
                    objectFit: "cover",
                    transition: "transform 0.65s ease, filter 0.65s ease",
                    filter: "saturate(0.9)",
                  }}
                  className="group-hover:scale-[1.035] group-hover:filter-none"
                />

                {/* Corner Tag */}
                <div
                  style={{
                    position: "absolute",
                    top: "14px",
                    left: "14px",
                    background: "#030303d9",
                    border: "1px solid #8e796340",
                    padding: "4px 8px",
                    fontFamily: "var(--font-mono)",
                    fontSize: "8px",
                    letterSpacing: "1px",
                    color: "var(--accent)",
                    zIndex: 2,
                  }}
                >
                  {note.type}
                </div>

                {/* Centered 52px circular icon */}
                <div
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: "52px",
                    height: "52px",
                    borderRadius: "50%",
                    background: "#090909d9",
                    border: "1px solid #ccdcf524",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--ink)",
                    zIndex: 2,
                    transition: "border-color 0.2s ease, transform 0.2s ease",
                  }}
                  className="group-hover:border-[#ff8c59] group-hover:scale-105"
                  aria-hidden="true"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                  </svg>
                </div>
              </div>

              {/* Caption below */}
              <div style={{ marginTop: "18px" }}>
                <div
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "9px",
                    letterSpacing: "1px",
                    color: "var(--muted)",
                    marginBottom: "6px",
                    textTransform: "uppercase",
                  }}
                >
                  VARUN NAIR / INFRASTRUCTURE
                </div>
                <h3
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "24px",
                    fontWeight: 500,
                    lineHeight: 1.25,
                    color: "var(--ink)",
                    letterSpacing: "-0.5px",
                    marginBottom: "8px",
                  }}
                >
                  <a
                    href={note.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "inherit", textDecoration: "none" }}
                    className="hover:text-[#ff8c59]"
                  >
                    {note.title}
                  </a>
                </h3>
                <p
                  style={{
                    fontSize: "13px",
                    lineHeight: 1.7,
                    color: "var(--muted-2)",
                    marginBottom: "12px",
                  }}
                >
                  {note.excerpt}
                </p>
                <a
                  href={note.href}
                  target="_blank"
                  rel="noopener noreferrer"
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
                  Read the note ↗
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* 2 Wide Link Cards below grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          style={{
            borderTop: "1px solid var(--line)",
            paddingTop: "60px",
          }}
        >
          {/* Card 1: GitHub */}
          <div
            style={{
              border: "1px solid var(--line)",
              background: "var(--surface)",
              padding: "36px 30px",
            }}
          >
            <div className="eyebrow-label" style={{ marginBottom: "16px" }}>
              GITHUB / CODERV1304
            </div>
            <h3
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "27px",
                fontWeight: 500,
                color: "var(--ink)",
                letterSpacing: "-0.5px",
                lineHeight: 1.25,
                marginBottom: "12px",
              }}
            >
              Open code,
              <br />
              <em
                style={{
                  fontFamily: "var(--font-display)",
                  fontStyle: "italic",
                  color: "var(--accent)",
                }}
              >
                in public.
              </em>
            </h3>
            <p
              style={{
                fontSize: "13px",
                lineHeight: 1.7,
                color: "var(--muted)",
                marginBottom: "24px",
              }}
            >
              Repositories, dotfiles, issue discussions and reproducible proofs-of-concept.
            </p>
            <a
              href="https://github.com/coderv1304"
              target="_blank"
              rel="noopener noreferrer"
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
              github.com/coderv1304 ↗
            </a>
          </div>

          {/* Card 2: LinkedIn */}
          <div
            style={{
              border: "1px solid var(--line)",
              background: "var(--surface)",
              padding: "36px 30px",
            }}
          >
            <div className="eyebrow-label" style={{ marginBottom: "16px" }}>
              LINKEDIN / VARUN NAIR
            </div>
            <h3
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "27px",
                fontWeight: 500,
                color: "var(--ink)",
                letterSpacing: "-0.5px",
                lineHeight: 1.25,
                marginBottom: "12px",
              }}
            >
              The thinking
              <br />
              <em
                style={{
                  fontFamily: "var(--font-display)",
                  fontStyle: "italic",
                  color: "var(--accent)",
                }}
              >
                between commits.
              </em>
            </h3>
            <p
              style={{
                fontSize: "13px",
                lineHeight: 1.7,
                color: "var(--muted)",
                marginBottom: "24px",
              }}
            >
              Career reflections, project milestones, and engineering community conversations.
            </p>
            <a
              href="https://www.linkedin.com/in/connectvarun13"
              target="_blank"
              rel="noopener noreferrer"
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
              linkedin.com/in/connectvarun13 ↗
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
