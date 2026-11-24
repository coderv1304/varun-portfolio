"use client";

import { useState } from "react";
import NoteCard from "@/components/NoteCard";
import { notes } from "@/lib/content";

export default function NotesSection() {
  const [filter, setFilter] = useState<"ALL" | "BUILD LOG" | "DEEP DIVE">("ALL");

  // Drafts stay out of the page entirely: a card without a real post URL
  // would be a dead end for a reader.
  const publishedNotes = notes.filter((note) => !note.draft);

  const filteredNotes = publishedNotes.filter((note) => {
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
          <span className="eyebrow-label">06 / IDEAS THAT TRAVEL</span>
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

        <p className="sr-only" role="status">
          Showing {filteredNotes.length} of {publishedNotes.length} notes
          {filter === "ALL" ? "" : ` in ${filter.toLowerCase()}`}.
        </p>

        {/* Grid: repeat(3, 1fr), gap 45px 25px */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-[45px] gap-x-[25px]"
          style={{ marginBottom: "80px" }}
        >
          {filteredNotes.map((note) => (
            <NoteCard key={note.title} note={note} />
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
