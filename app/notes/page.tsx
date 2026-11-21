import type { Metadata } from "next";
import Image from "next/image";
import { notes } from "@/lib/content";

export const metadata: Metadata = {
  title: "Notes & Build Logs | Varun Nair",
  description: "Technical writings, architectural post-mortems, and engineering build logs by Varun Nair.",
};

export default function NotesPage() {
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
          <span className="eyebrow-label">05 / NOTES & BUILD LOGS</span>
          <span className="eyebrow-label" style={{ color: "var(--accent)" }}>
            WRITTEN DOWN. SHIPPED. EXPLAINED.
          </span>
        </div>

        {/* Heading */}
        <div className="heading-row">
          <h1 className="section-h2">
            Engineering logs.
            <br />
            <em>Ideas that travel.</em>
          </h1>
          <p
            style={{
              fontSize: "15px",
              lineHeight: 1.75,
              color: "var(--muted)",
              maxWidth: "460px",
            }}
          >
            Technical writings and build retrospectives on infrastructure security, Kubernetes failure modes, and automated recovery.
          </p>
        </div>

        {/* Notes Grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-[50px] gap-x-[30px]"
          style={{ marginTop: "40px" }}
        >
          {notes.map((note) => (
            <article
              key={note.title}
              className="group"
              style={{ display: "flex", flexDirection: "column" }}
            >
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
                    filter: "saturate(0.9)",
                    transition: "transform 0.65s ease",
                  }}
                  className="group-hover:scale-[1.03]"
                />
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
                  }}
                >
                  {note.type}
                </div>
              </div>

              <div style={{ marginTop: "18px" }}>
                <div
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "9px",
                    color: "var(--muted)",
                    marginBottom: "6px",
                  }}
                >
                  VARUN NAIR // {note.date || "2026"}
                </div>
                <h2
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "22px",
                    fontWeight: 500,
                    lineHeight: 1.3,
                    color: "var(--ink)",
                    letterSpacing: "-0.5px",
                    marginBottom: "10px",
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
                </h2>
                <p
                  style={{
                    fontSize: "13px",
                    lineHeight: 1.7,
                    color: "var(--muted-2)",
                    marginBottom: "14px",
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
                  }}
                  className="hover:underline"
                >
                  Read on Hashnode ↗
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
