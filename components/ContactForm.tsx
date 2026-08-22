"use client";

import { useState, FormEvent } from "react";

// 1. Go to https://formspree.io, sign up free, create a form.
// 2. Copy the endpoint it gives you (looks like https://formspree.io/f/xxxxabcd).
// 3. Paste it below, replacing the placeholder.
const FORM_ENDPOINT = "https://formspree.io/f/xwlezway";

type Status = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="panel-border rounded-sm bg-panel p-8 font-mono">
        <p className="text-online">✓ message_sent: 200 OK</p>
        <p className="mt-2 text-sm text-muted">
          Thanks for reaching out — I&apos;ll respond within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="panel-border space-y-5 rounded-sm bg-panel p-6 sm:p-8"
    >
      <Field label="name" htmlFor="name">
        <input
          id="name"
          name="name"
          type="text"
          required
          placeholder="Your full name"
          className="field"
        />
      </Field>

      <Field label="email" htmlFor="email">
        <input
          id="email"
          name="email"
          type="email"
          required
          placeholder="you@company.com"
          className="field"
        />
      </Field>

      <Field label="phone" htmlFor="phone">
        <input
          id="phone"
          name="phone"
          type="tel"
          placeholder="+91 XXXXX XXXXX (optional)"
          className="field"
        />
      </Field>

      <Field label="requirements" htmlFor="requirements">
        <textarea
          id="requirements"
          name="requirements"
          required
          rows={5}
          placeholder="What are you looking for — internship, full-time role, freelance project? Tell me a bit about it."
          className="field resize-none"
        />
      </Field>

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full rounded-sm bg-blueprint px-5 py-3 font-mono text-sm font-medium text-base transition-transform hover:-translate-y-0.5 hover:bg-blueprint/90 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "loading" ? "sending..." : "send message →"}
      </button>

      {status === "error" && (
        <p className="font-mono text-xs text-alert">
          ✗ send_failed: check FORM_ENDPOINT is set up correctly, then retry.
        </p>
      )}

      <style jsx global>{`
        .field {
          width: 100%;
          background: #0d1622;
          border: 1px solid rgba(140, 170, 210, 0.14);
          border-radius: 2px;
          padding: 0.7rem 0.85rem;
          color: #e7ecf3;
          font-family: var(--font-sans);
          font-size: 0.9rem;
        }
        .field::placeholder {
          color: #5b6478;
        }
        .field:focus {
          outline: none;
          border-color: #4c9fff;
          box-shadow: 0 0 0 3px rgba(76, 159, 255, 0.15);
        }
      `}</style>
    </form>
  );
}

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label
        htmlFor={htmlFor}
        className="mb-1.5 block font-mono text-xs uppercase tracking-wider text-faint"
      >
        {label}
      </label>
      {children}
    </div>
  );
}
