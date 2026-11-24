import type { Metadata } from "next";
import NoteCard from "@/components/NoteCard";
import { notes } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Notes & build logs | Varun Nair",
  description:
    "Build logs and deep dives on Linux automation, encrypted backups, containers, and the limits of ML-based network detection.",
  path: "/notes",
});

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
          {notes
            .filter((note) => !note.draft)
            .map((note) => (
              <NoteCard key={note.title} note={note} headingLevel={2} titleSize={22} />
            ))}
        </div>
      </div>
    </main>
  );
}
