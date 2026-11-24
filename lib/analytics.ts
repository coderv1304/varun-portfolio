"use client";

import { track } from "@vercel/analytics";

/**
 * Cookieless event helper. Vercel Web Analytics stores no cookies and no
 * cross-site identifiers; the referral value lives in sessionStorage only, so
 * it disappears when the tab closes.
 */
export const REF_STORAGE_KEY = "vn-referral";

export function readReferral(): string | null {
  if (typeof window === "undefined") return null;

  try {
    const stored = window.sessionStorage.getItem(REF_STORAGE_KEY);
    if (stored) return stored;
  } catch {
    // sessionStorage can throw in privacy modes; fall through to the URL.
  }

  const params = new URLSearchParams(window.location.search);
  const raw = params.get("ref");
  if (!raw) return null;

  const cleaned = sanitizeReferral(raw);
  if (!cleaned) return null;

  try {
    window.sessionStorage.setItem(REF_STORAGE_KEY, cleaned);
  } catch {
    // Ignore storage failures; the event still carries the value.
  }

  return cleaned;
}

/** Keep the referral readable but bounded: no markup, no long payloads. */
export function sanitizeReferral(value: string): string {
  return value
    .replace(/[^a-zA-Z0-9 .&_-]/g, "")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, 40);
}

export function trackEvent(
  name: string,
  data: Record<string, string | number | boolean> = {},
) {
  if (typeof window === "undefined") return;

  const referral = readReferral();

  try {
    track(name, referral ? { ...data, ref: referral } : data);
  } catch {
    // Analytics must never break an interaction.
  }
}
