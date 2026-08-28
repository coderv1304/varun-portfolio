import { site } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-white/10 px-5 py-10">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-5 md:flex-row">
        <div>
          <p className="font-bold">
            VARUN<span className="text-cyan-400">.DEV</span>
          </p>
          <p className="mt-2 text-xs text-slate-500">
            Building reliable, secure & intelligent systems.
          </p>
        </div>
        <div className="flex flex-wrap gap-5 text-xs text-slate-500">
          <a href={site.github} target="_blank" rel="noreferrer" className="hover:text-cyan-300">GitHub</a>
          <a href={site.linkedin} target="_blank" rel="noreferrer" className="hover:text-cyan-300">LinkedIn</a>
          <a href={site.hashnode} target="_blank" rel="noreferrer" className="hover:text-cyan-300">Hashnode</a>
          <a href={`mailto:${site.email}`} className="hover:text-cyan-300">Email</a>
        </div>
      </div>
    </footer>
  );
}
