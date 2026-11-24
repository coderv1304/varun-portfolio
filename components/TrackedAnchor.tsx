"use client";

import type { CSSProperties, ReactNode } from "react";
import { trackEvent } from "@/lib/analytics";

interface TrackedAnchorProps {
  href: string;
  event: string;
  eventData?: Record<string, string | number | boolean>;
  className?: string;
  children: ReactNode;
  /** External links open in a new tab and get noopener. */
  external?: boolean;
  download?: boolean;
  style?: CSSProperties;
  ariaLabel?: string;
}

/**
 * Anchor that reports one event before navigating. Used on server-rendered
 * pages, where an inline handler is not possible.
 */
export default function TrackedAnchor({
  href,
  event,
  eventData,
  className,
  children,
  external = false,
  download = false,
  style,
  ariaLabel,
}: TrackedAnchorProps) {
  return (
    <a
      href={href}
      className={className}
      style={style}
      aria-label={ariaLabel}
      download={download || undefined}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      onClick={() => trackEvent(event, { href, ...eventData })}
    >
      {children}
    </a>
  );
}
