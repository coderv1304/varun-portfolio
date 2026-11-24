"use client";

import Link from "next/link";

export default function ChapterIndex() {
  const links = [
    { label: "All work", href: "/work" },
    { label: "Systems & infrastructure", href: "/work" },
    { label: "Writing & build logs", href: "/notes" },
    { label: "Résumé", href: "/Varun_Nair_Resume.pdf", target: "_blank" },
  ];

  return (
    <nav
      aria-label="Chapter Index"
      style={{
        display: "flex",
        gap: "30px",
        flexWrap: "wrap",
        padding: "20px var(--gutter) 80px",
        fontSize: "13px",
        maxWidth: "var(--maxw)",
        margin: "0 auto",
      }}
    >
      {links.map((link) => (
        <Link
          key={link.label}
          href={link.href}
          target={link.target}
          rel={link.target ? "noopener noreferrer" : undefined}
          style={{
            color: "var(--muted-2)",
            textDecoration: "none",
            borderBottom: "1px solid #655141",
            paddingBottom: "10px",
            transition: "all 0.2s ease",
            display: "inline-flex",
            alignItems: "center",
            gap: "6px",
          }}
          className="hover:!text-[#ff8c59] hover:!border-[#ff8c59]"
        >
          {link.label} ↗
        </Link>
      ))}
    </nav>
  );
}
