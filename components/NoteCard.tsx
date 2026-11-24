import Image from "next/image";
import type { NoteItem } from "@/lib/content";

interface NoteCardProps {
  note: NoteItem;
  /** Heading level so each page keeps a correct outline. */
  headingLevel?: 2 | 3;
  /** Title size in px, tuned per surface. */
  titleSize?: number;
}

export default function NoteCard({
  note,
  headingLevel = 3,
  titleSize = 24,
}: NoteCardProps) {
  const Heading = `h${headingLevel}` as "h2" | "h3";

  return (
    <article
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
          alt=""
          fill
          unoptimized
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          style={{
            objectFit: "cover",
            transition: "transform 0.65s ease",
          }}
          className="group-hover:scale-[1.02]"
        />

      </div>

      <div style={{ marginTop: "18px" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "12px",
            marginBottom: "6px",
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "9px",
              letterSpacing: "1px",
              color: "var(--muted)",
              textTransform: "uppercase",
            }}
          >
            VARUN NAIR{note.date ? ` / ${note.date}` : ""}
          </span>
          {note.draft && (
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "9px",
                letterSpacing: "1px",
                color: "var(--muted)",
                border: "1px dashed #8e796380",
                padding: "2px 6px",
                textTransform: "uppercase",
              }}
            >
              Draft
            </span>
          )}
        </div>

        <Heading
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: `${titleSize}px`,
            fontWeight: 500,
            lineHeight: 1.25,
            color: note.draft ? "var(--muted)" : "var(--ink)",
            letterSpacing: "-0.5px",
            marginBottom: "8px",
          }}
        >
          {note.href ? (
            <a
              href={note.href}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "inherit", textDecoration: "none" }}
              className="hover:text-[#ff8c59]"
            >
              {note.title}
            </a>
          ) : (
            <span>{note.title}</span>
          )}
        </Heading>

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

        {note.href ? (
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
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        ) : (
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "10px",
              letterSpacing: "1px",
              color: "var(--muted)",
              display: "inline-flex",
              alignItems: "center",
              gap: "4px",
            }}
          >
            Draft · not published
          </span>
        )}
      </div>
    </article>
  );
}
