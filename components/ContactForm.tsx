"use client";

import { FormEvent, useState } from "react";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);

  async function submitForm(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setLoading(true);
    setMessage("");
    setSuccess(false);

    const form = event.currentTarget;

    const formData = new FormData(form);

    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      requirements: formData.get("requirements"),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(
          result.message || "Unable to send message."
        );
      }

      setSuccess(true);
      setMessage(
        "Message received. Thank you for reaching out."
      );

      form.reset();
    } catch (error) {
      setMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <form className="form-grid" onSubmit={submitForm}>
      <div className="form-field">
        <label htmlFor="name">
          YOUR NAME *
        </label>

        <input
          id="name"
          name="name"
          required
          placeholder="John Doe"
        />
      </div>

      <div className="form-field">
        <label htmlFor="email">
          EMAIL ADDRESS *
        </label>

        <input
          id="email"
          name="email"
          type="email"
          required
          placeholder="john@example.com"
        />
      </div>

      <div className="form-field">
        <label htmlFor="phone">
          CONTACT NUMBER
        </label>

        <input
          id="phone"
          name="phone"
          placeholder="+91 XXXXX XXXXX"
        />
      </div>

      <div className="form-field">
        <label htmlFor="requirements">
          REQUIREMENTS / MESSAGE *
        </label>

        <textarea
          id="requirements"
          name="requirements"
          required
          placeholder="Tell me about the opportunity, project or requirement..."
        />
      </div>

      {message && (
        <div
          className={`form-status ${
            success ? "form-success" : "form-error"
          }`}
        >
          {message}
        </div>
      )}

      <button
        type="submit"
        className="button button-primary"
        disabled={loading}
      >
        {loading ? "TRANSMITTING..." : "SEND MESSAGE →"}
      </button>
    </form>
  );
}