import { execFileSync } from "node:child_process";
import { statSync } from "node:fs";
import path from "node:path";
import type { MetadataRoute } from "next";
import { projects, site } from "@/lib/content";

/** Used only when neither git history nor file mtimes are available. */
const FALLBACK_DATE = new Date("2026-11-23T00:00:00Z");

const cache = new Map<string, Date>();

/**
 * Real last-modified dates: the newest commit touching the route's source,
 * falling back to file mtime, then a fixed date. Never "now", which would
 * tell crawlers every page changed on every deploy.
 */
function lastModified(files: string[]): Date {
  const key = files.join("|");
  const cached = cache.get(key);
  if (cached) return cached;

  let resolved: Date | null = null;
  let dirty = false;

  try {
    const output = execFileSync(
      "git",
      ["log", "-1", "--format=%cI", "--", ...files.map((file) => `:(literal)${file}`)],
      { cwd: process.cwd(), encoding: "utf8", stdio: ["ignore", "pipe", "ignore"] },
    ).trim();
    if (output) resolved = new Date(output);

    // A clean checkout (CI) trusts commit dates; local edits use mtime so the
    // sitemap never advertises a date older than the content being served.
    const status = execFileSync(
      "git",
      ["status", "--porcelain", "--", ...files.map((file) => `:(literal)${file}`)],
      { cwd: process.cwd(), encoding: "utf8", stdio: ["ignore", "pipe", "ignore"] },
    ).trim();
    dirty = status.length > 0;
  } catch {
    // git unavailable (e.g. shallow export) — fall through to mtime
  }

  if (dirty || !resolved || Number.isNaN(resolved.getTime())) {
    try {
      const mtimes = files.map((file) =>
        statSync(path.join(process.cwd(), file)).mtimeMs,
      );
      resolved = new Date(Math.max(...mtimes));
    } catch {
      resolved = resolved ?? null;
    }
  }

  const date = resolved && !Number.isNaN(resolved.getTime()) ? resolved : FALLBACK_DATE;
  cache.set(key, date);
  return date;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = site.url;

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: lastModified([
        "app/page.tsx",
        "components/HeroSection.tsx",
        "lib/content.ts",
      ]),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/work`,
      lastModified: lastModified(["app/work/page.tsx", "lib/content.ts"]),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: lastModified(["app/about/page.tsx", "lib/content.ts"]),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/notes`,
      lastModified: lastModified([
        "app/notes/page.tsx",
        "components/NoteCard.tsx",
        "lib/content.ts",
      ]),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: lastModified(["app/contact/page.tsx"]),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/beyond`,
      lastModified: lastModified(["app/beyond/page.tsx"]),
      changeFrequency: "monthly",
      priority: 0.5,
    },
  ];

  const projectRoutes: MetadataRoute.Sitemap = projects.map((project) => ({
    url: `${baseUrl}/work/${project.slug}`,
    lastModified: lastModified(["lib/content.ts", "app/work/[slug]/page.tsx"]),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...staticRoutes, ...projectRoutes];
}
