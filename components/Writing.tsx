export default function Writing() {
  return (
    <section id="writing" className="border-t border-grid bg-panel2/30">
      <div className="mx-auto max-w-6xl px-4 py-20">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-blueprint">
              // writing
            </p>
            <h2 className="mt-3 font-mono text-2xl font-bold text-ink sm:text-3xl">
              Varun&apos;s DevOps Journal
            </h2>
            <p className="mt-3 max-w-xl text-muted">
              I write up each project as I build it — the design decisions,
              the bugs, and what they taught me.
            </p>
          </div>
          <a
            href="https://varun-nair-13.hashnode.dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-sm border border-blueprint/40 bg-blueprint/10 px-4 py-2 font-mono text-xs uppercase tracking-wider text-blueprint transition-colors hover:bg-blueprint/20"
          >
            read the blog →
          </a>
        </div>
      </div>
    </section>
  );
}
