import StatusConsole from "@/components/StatusConsole";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Contact — Varun Nair",
  description: "Get in touch with Varun Nair about DevOps, SRE, and Platform Engineering opportunities.",
};

export default function ContactPage() {
  return (
    <main>
      <StatusConsole />
      <Nav />
      <section className="mx-auto max-w-3xl px-4 py-16 sm:py-24">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-blueprint">
          // new_message.request
        </p>
        <h1 className="mt-3 font-mono text-3xl font-bold text-ink text-glow sm:text-4xl">
          Let&apos;s talk.
        </h1>
        <p className="mt-4 max-w-xl text-muted">
          Whether it&apos;s an internship, a full-time role, or a freelance
          project — fill this out and I&apos;ll get back to you within 24
          hours. Prefer email? Reach me directly at{" "}
          <a
            href="mailto:coderv13@gmail.com"
            className="text-blueprint underline decoration-blueprint/30 underline-offset-4 hover:decoration-blueprint"
          >
            coderv13@gmail.com
          </a>
          .
        </p>

        <div className="mt-10">
          <ContactForm />
        </div>
      </section>
      <Footer />
    </main>
  );
}
