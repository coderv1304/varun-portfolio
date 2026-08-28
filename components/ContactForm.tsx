"use client";

import { useState } from "react";
import type { FormEvent } from "react";

export function ContactForm() {
  const [state, setState] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState("sending");

    const form = event.currentTarget;
    const body = new FormData(form);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        body,
      });

      if (!response.ok) throw new Error("Request failed");

      form.reset();
      setState("success");
    } catch {
      setState("error");
    }
  }

  return (
    <form
      onSubmit={submit}
      className="space-y-5 rounded-3xl border border-white/10 bg-white/[0.03] p-6 md:p-8"
    >
      <div className="grid gap-5 md:grid-cols-2">
        <input name="name" required placeholder="Your name" className="field" />
        <input name="email" required type="email" placeholder="Email address" className="field" />
        <input name="phone" type="tel" placeholder="Contact number" className="field" />
        <input name="company" placeholder="Company / organization" className="field" />
      </div>

      <textarea
        name="requirements"
        required
        rows={7}
        placeholder="Tell me about the role, internship, project or requirements..."
        className="field w-full resize-y"
      />

      <button
        disabled={state === "sending"}
        className="w-full rounded-2xl bg-cyan-400 px-6 py-4 font-bold text-black transition hover:bg-cyan-300 disabled:cursor-wait disabled:opacity-60"
      >
        {state === "sending" ? "SENDING..." : "SEND MESSAGE →"}
      </button>

      {state === "success" && (
        <p className="text-center text-sm text-green-300">
          Message sent. Thanks for reaching out.
        </p>
      )}

      {state === "error" && (
        <p className="text-center text-sm text-red-300">
          Something went wrong. Please email me directly at coderv13@gmail.com.
        </p>
      )}
    </form>
  );
}
