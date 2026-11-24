import type { Metadata } from "next";
import { site } from "@/lib/content";

export const OG_SIZE = { width: 1200, height: 630 } as const;

export function absoluteUrl(path = "/"): string {
  return new URL(path, site.url).toString();
}

/** Trim to a word boundary so meta descriptions never end mid-word. */
export function clampDescription(text: string, max = 155): string {
  if (text.length <= max) return text;
  const cut = text.slice(0, max - 1);
  const lastSpace = cut.lastIndexOf(" ");
  return `${cut.slice(0, lastSpace > 80 ? lastSpace : max - 1).trimEnd()}…`;
}

interface BuildMetadataInput {
  title: string;
  description: string;
  /** Route path, always starting with "/" — used for the canonical URL. */
  path: string;
  ogType?: "website" | "article" | "profile";
  /** Explicit social image. Omit to inherit the nearest file-based OG image. */
  ogImage?: { url: string; alt: string };
  noindex?: boolean;
  publishedTime?: string;
  modifiedTime?: string;
}

export function buildMetadata({
  title,
  description,
  path,
  ogType = "website",
  ogImage,
  noindex = false,
  publishedTime,
  modifiedTime,
}: BuildMetadataInput): Metadata {
  const trimmed = clampDescription(description);

  return {
    title,
    description: trimmed,
    alternates: { canonical: path },
    robots: noindex
      ? { index: false, follow: false }
      : { index: true, follow: true },
    openGraph: {
      title,
      description: trimmed,
      url: path,
      siteName: `${site.name} — Portfolio`,
      locale: "en_IN",
      type: ogType,
      ...(ogImage
        ? {
            images: [
              {
                url: ogImage.url,
                width: OG_SIZE.width,
                height: OG_SIZE.height,
                alt: ogImage.alt,
              },
            ],
          }
        : {}),
      ...(ogType === "article"
        ? { publishedTime, modifiedTime, authors: [site.name] }
        : {}),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: trimmed,
      ...(ogImage ? { images: [ogImage.url] } : {}),
    },
  };
}
