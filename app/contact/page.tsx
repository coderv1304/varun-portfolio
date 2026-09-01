import ContactForm from "@/components/ContactForm";
import { site } from "@/data/site";

export default function ContactPage() {
  return (
    <main className="page">
      <div className="eyebrow">
        04 / ESTABLISH CONNECTION
      </div>

      <h1 className="heading">
        Let&apos;s build something
        <span className="gradient-text">
          {" "}
          useful.
        </span>
      </h1>

      <p className="subheading">
        Recruiter, hiring manager, collaborator or
        someone with an interesting infrastructure
        challenge? Send me the details.
      </p>

      <div className="contact-layout">
        <section className="contact-card">
          <div className="eyebrow">
            DIRECT CHANNELS
          </div>

          <div className="contact-links">
            <a
              className="contact-link"
              href={`mailto:${site.email}`}
            >
              EMAIL
              <br />
              {site.email}
            </a>

            <a
              className="contact-link"
              href={site.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              LINKEDIN
              <br />
              Connect with me
            </a>

            <a
              className="contact-link"
              href={site.github}
              target="_blank"
              rel="noreferrer"
            >
              GITHUB
              <br />
              View my repositories
            </a>

            <a
              className="contact-link"
              href={site.hashnode}
              target="_blank"
              rel="noreferrer"
            >
              HASHNODE
              <br />
              Read my technical writing
            </a>
          </div>
        </section>

        <section className="form-card">
          <div className="eyebrow">
            RECRUITER / CLIENT FORM
          </div>

          <h2 style={{ marginTop: 12 }}>
            Send a message
          </h2>

          <p className="info-label">
            Please provide your name, email, contact number
            and requirements.
          </p>

          <div style={{ marginTop: 30 }}>
            <ContactForm />
          </div>
        </section>
      </div>
    </main>
  );
}