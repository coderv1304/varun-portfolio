import { ExternalLink } from "lucide-react";
import { PageShell } from "@/components/PageShell";
import { site } from "@/data/site";

export default function BlogPage() {
  return (
    <PageShell>
      <p className="font-mono text-xs tracking-[0.3em] text-[#7c93f0]">06 / BLOG</p>
      <h1 className="mt-4 text-5xl font-black text-[#2d3250]">Writing & Notes</h1>
      <p className="mt-5 max-w-2xl text-[#5b6478]">
        I&apos;ll publish DevOps, cloud, automation, security and AI operations notes here.
      </p>

      
        href={site.hashnode}
        target="_blank"
        rel="noreferrer"
        className="mt-12 flex max-w-2xl items-center justify-between rounded-3xl border border-[#636eeb]/20 bg-white/60 p-7 backdrop-blur transition hover:-translate-y-1 hover:border-[#7c93f0]/45"
      >
        <div>
          <p className="font-mono text-xs text-[#7c93f0]">HASHNODE</p>
          <h2 className="mt-3 text-2xl font-bold text-[#2d3250]">Read my articles</h2>
          <p className="mt-2 text-sm text-[#5b6478]">varun-nair-13.hashnode.dev</p>
        </div>
        <ExternalLink className="text-[#5b6478]" />
      </a>
    </PageShell>
  );
}