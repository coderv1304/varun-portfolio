import { Mail, Linkedin, Github } from "lucide-react";
import { PageShell } from "@/components/PageShell";
import { ContactForm } from "@/components/ContactForm";
import { site } from "@/data/site";

export default function ContactPage() {
  return (
    <PageShell>
      <p className="font-mono text-xs tracking-[0.3em] text-cyan-400">05 / CONTACT</p>
      <h1 className="mt-4 text-5xl font-black">Let&apos;s connect.</h1>
      <p className="mt-5 max-w-2xl text-slate-500">
        Recruiter, hiring manager, collaborator or someone with an interesting project? Send the details below.
      </p>

      <div className="mt-12 grid gap-6 lg:grid-cols-[.7fr_1.3fr]">
        <div className="space-y-5">
          <a href={`mailto:${site.email}`} className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5 hover:border-cyan-400/30">
            <Mail className="text-cyan-400" />
            <span>{site.email}</span>
          </a>
          <a href={site.github} target="_blank" rel="noreferrer" className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5 hover:border-cyan-400/30">
            <Github className="text-cyan-400" />
            <span>GitHub</span>
          </a>
          <a href={site.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5 hover:border-cyan-400/30">
            <Linkedin className="text-cyan-400" />
            <span>LinkedIn</span>
          </a>
        </div>

        <ContactForm />
      </div>
    </PageShell>
  );
}
