"use client";

import { useState } from "react";
import Link from "next/link";
import { disciplines } from "@/lib/content";

export default function ExpertiseSection() {
  const [activeId, setActiveId] = useState<string>(disciplines[0].id);

  const activeDiscipline =
    disciplines.find((d) => d.id === activeId) || disciplines[0];

  const toggleAccordion = (id: string) => {
    setActiveId(id);
  };

  return (
    <section
      id="expertise"
      style={{
        padding: "100px var(--gutter) 80px",
        position: "relative",
      }}
      aria-label="How I Think & Work"
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
          <span className="eyebrow-label">03 / HOW I THINK & WORK</span>
          <span className="eyebrow-label" style={{ color: "var(--accent)" }}>
            DEPTH MEETS PERSPECTIVE
          </span>
        </div>

        {/* 2 columns 1fr 1fr, gap 9%, margin-top 75px */}
        <div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-[9%]"
          style={{ marginTop: "75px" }}
        >
          {/* Left Column: Heading + Thinking Path Panel */}
          <div>
            <h2 className="section-h2" style={{ marginBottom: "20px" }}>
              How I work.
              <br />
              <em>From failure mode to fix.</em>
            </h2>
            <p
              style={{
                fontSize: "14px",
                color: "var(--muted)",
                marginBottom: "50px",
              }}
            >
              Choose a discipline. Follow the thinking.
            </p>

            {/* Live "thinking path" panel */}
            <div
              style={{
                border: "1px solid var(--line)",
                background: "var(--surface)",
                padding: "36px 30px",
                position: "relative",
              }}
            >
              <div
                className="eyebrow-label"
                style={{ color: "var(--accent)", marginBottom: "32px" }}
              >
                {activeDiscipline.label}
              </div>

              <ol
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: "0 0 36px 0",
                  display: "flex",
                  flexDirection: "column",
                  gap: "24px",
                }}
              >
                {activeDiscipline.steps.map((st) => (
                  <li
                    key={st.step}
                    style={{
                      display: "flex",
                      alignItems: "baseline",
                      gap: "20px",
                      borderBottom: "1px solid var(--line)",
                      paddingBottom: "16px",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "11px",
                        color: "var(--accent)",
                      }}
                    >
                      {st.step}
                    </span>
                    <span
                      style={{
                        fontFamily: "var(--font-sans)",
                        fontSize: "24px",
                        fontWeight: 450,
                        color: "var(--ink)",
                        letterSpacing: "-0.5px",
                      }}
                    >
                      {st.title}
                    </span>
                  </li>
                ))}
              </ol>

              <Link
                href="/work"
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "10px",
                  letterSpacing: "1.2px",
                  color: "var(--accent)",
                  textDecoration: "none",
                  textTransform: "uppercase",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                }}
                className="hover:underline"
              >
                Explore the engineering ↗
              </Link>
            </div>
          </div>

          {/* Right Column: 3 Accordion Items */}
          <div style={{ display: "flex", flexDirection: "column" }}>
            {disciplines.map((d) => {
              const isOpen = activeId === d.id;
              const contentId = `discipline-content-${d.id}`;
              const buttonId = `discipline-button-${d.id}`;

              return (
                <div
                  key={d.id}
                  style={{
                    borderBottom: "1px solid var(--line)",
                    padding: "30px 0",
                  }}
                >
                  <button
                    id={buttonId}
                    onClick={() => toggleAccordion(d.id)}
                    aria-expanded={isOpen}
                    aria-controls={contentId}
                    style={{
                      width: "100%",
                      textAlign: "left",
                      background: "transparent",
                      border: "none",
                      padding: 0,
                      cursor: "pointer",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                      minHeight: "44px",
                    }}
                  >
                    <div>
                      <span
                        style={{
                          fontFamily: "var(--font-mono)",
                          fontSize: "9px",
                          letterSpacing: "1px",
                          color: "var(--accent)",
                          display: "block",
                          marginBottom: "8px",
                          textTransform: "uppercase",
                        }}
                      >
                        {d.index} / {d.label}
                      </span>
                      <h3
                        style={{
                          fontFamily: "var(--font-sans)",
                          fontSize: "26px",
                          fontWeight: 500,
                          color: isOpen ? "var(--ink)" : "var(--muted)",
                          letterSpacing: "-0.5px",
                          transition: "color 0.2s ease",
                        }}
                      >
                        {d.headline}
                      </h3>
                    </div>

                    {/* Plus / Minus rotating icon 24px */}
                    <div
                      style={{
                        width: "24px",
                        height: "24px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: isOpen ? "var(--accent)" : "var(--muted)",
                        fontSize: "20px",
                        fontWeight: 300,
                        transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                        transition: "transform 0.3s ease, color 0.3s ease",
                      }}
                      aria-hidden="true"
                    >
                      +
                    </div>
                  </button>

                  {/* Accordion Body */}
                  <div
                    id={contentId}
                    role="region"
                    aria-labelledby={buttonId}
                    hidden={!isOpen}
                    style={{
                      paddingTop: isOpen ? "20px" : 0,
                      display: isOpen ? "block" : "none",
                    }}
                  >
                    <p
                      style={{
                        fontSize: "14px",
                        lineHeight: 1.8,
                        color: "var(--muted-2)",
                        marginBottom: "20px",
                        maxWidth: "520px",
                      }}
                    >
                      {d.body}
                    </p>

                    {/* Strengths tags */}
                    <div
                      style={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: "8px",
                        fontFamily: "var(--font-mono)",
                        fontSize: "10px",
                        letterSpacing: "0.8px",
                        color: "var(--muted)",
                      }}
                    >
                      {d.strengths.join(" · ")}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
