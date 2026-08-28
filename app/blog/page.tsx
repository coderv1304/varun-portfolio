import { ExternalLink } from "lucide-react";
import { PageShell } from "@/components/PageShell";
import { site } from "@/data/site";

export default function BlogPage() {
  return (
    <PageShell>
      <p className="font-mono text-xs tracking-[0.3em] text-cyan-400">06 / BLOG</p>
      <h1 className="mt-4 text-5xl font-black">Writing & Notes</h1>
      <p className="mt-5 max-w-2xl text-slate-500">
        I&apos;ll publish DevOps, cloud, automation, security and AI operations notes here.
      </p>

      <a
        href={site.hashnode}
        target="_blank"
        rel="noreferrer"
        className="mt-12 flex max-w-2xl items-center justify-between rounded-3xl border border-white/10 bg-white/[0.03] p-7 transition hover:-translate-y-1 hover:border-cyan-400/30"
      >
        <div>
          <p className="font-mono text-xs text-cyan-400">HASHNODE</p>
          <h2 className="mt-3 text-2xl font-bold">Read my articles</h2>
          <p className="mt-2 text-sm text-slate-500">varun-nair-13.hashnode.dev</p>
        </div>
        <ExternalLink className="text-slate-500" />
      </a>
    </PageShell>
  );
}
