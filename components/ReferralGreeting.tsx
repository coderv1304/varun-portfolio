"use client";

import { useEffect, useState } from "react";
import { readReferral, sanitizeReferral, trackEvent } from "@/lib/analytics";

/**
 * Visible, dismissible referral greeting. It never changes the page content and
 * never hides anything from crawlers, so there is no cloaking: everyone sees the
 * same page, and the query string only adds this line.
 */
export default function ReferralGreeting() {
  const [company, setCompany] = useState<string | null>(null);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const referral = readReferral();
    if (!referral) return;

    setCompany(referral);
    trackEvent("referral_view", { company: referral });
  }, []);

  if (!company || dismissed) return null;

  return (
    <div className="ref-bar">
      <p className="ref-bar-text">
        <span className="ref-bar-label">Referral</span>
        Hi <strong>{sanitizeReferral(company)}</strong> team — the NetShield
        case study is the fastest way in: measured results, plus what the
        method does not prove.
      </p>
      <div className="ref-bar-actions">
        <a className="ref-bar-link" href="/work/netshield">
          Open NetShield
        </a>
        <button
          type="button"
          className="ref-bar-dismiss"
          onClick={() => setDismissed(true)}
          aria-label="Dismiss referral message"
        >
          Dismiss
        </button>
      </div>
    </div>
  );
}
