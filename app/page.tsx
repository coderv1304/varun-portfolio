import Link from "next/link";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { BootScreen } from "@/components/BootScreen";
import { TerminalWidget } from "@/components/TerminalWidget";
import { StatusWidget } from "@/components/StatusWidget";
import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/data/projects";
import { site } from "@/data/site";

export default function Home() {
  return (
    <>
      <BootScreen />

      <header className="fixed left-0 right-0 top-0 z-40 border-b border-white/10 bg-[#020711]/65 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5">
          <Link href="/" className="font-black">
            VARUN<span className="text-cyan-400">.DEV</span>
          </Link>
          <nav className="hidden gap-6 text-xs font-semibold tracking-widest text-slate-400 md:flex">
            <Link href="/about" className="hover:text-cyan-300">ABOUT</Link>
            <Link href="/projects" className="hover:text-cyan-300">PROJECTS</Link>
            <Link href="/skills" className="hover:text-cyan-300">SKILLS</Link>
            <Link href="/contact" className="hover:text-cyan-300">CONTACT</Link>
          </nav>
          <a href={site.resume} target="_blank" rel="noreferrer" className="rounded-full border border-cyan-400/30 px-4 py-2 text-xs font-bold text-cyan-300">
            RESUME
          </a>
        </div>
      </header>

      <main>
        <section className="relative flex min-h-screen items-center overflow-hidden px-5 pb-20 pt-28">
          <div className="mx-auto grid w-full max-w-7xl gap-12 lg:grid-cols-[1.05fr_.95fr] lg:items-center">
            <div>
              <p className="mb-5 font-mono text-xs tracking-[0.3em] text-cyan-400">ENGINEERING / AUTOMATION / CLOUD</p>
              <h1 className="text-5xl font-black tracking-[-0.04em] sm:text-7xl lg:text-8xl">
                VARUN
                <span className="block text-slate-500">NAIR<span className="text-cyan-400">.</span></span>
              </h1>
              <p className="mt-7 max-w-2xl text-xl leading-8 text-slate-300">
                DevOps • Cloud • DevSecOps • MLOps • AIOps
              </p>
              <p className="mt-4 max-w-2xl leading-7 text-slate-500">
                MCA student at VESIT Mumbai building reliable, secure and intelligent systems through automation and cloud engineering.
              </p>

              <div className="mt-9 flex flex-wrap gap-3">
                <Link href="/projects" className="group rounded-2xl bg-cyan-400 px-6 py-3 font-bold text-black">
                  VIEW PROJECTS <ArrowRight className="ml-2 inline transition group-hover:translate-x-1" size={17} />
                </Link>
                <Link href="/contact" className="rounded-2xl border border-white/10 px-6 py-3 font-bold text-white hover:border-cyan-400/30">
                  CONTACT ME
                </Link>
              </div>

              <div className="mt-8 flex gap-5 text-slate-500">
                <a href={site.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github /></a>
                <a href={site.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin /></a>
                <a href={`mailto:${site.email}`} aria-label="Email"><Mail /></a>
              </div>
            </div>

            <div className="space-y-5">
              <StatusWidget />
              <TerminalWidget />
            </div>
          </div>
        </section>

        <section className="border-y border-white/10 px-5 py-24">
          <div className="mx-auto max-w-7xl">
            <div className="flex items-end justify-between gap-5">
              <div>
                <p className="font-mono text-xs tracking-[0.3em] text-cyan-400">01 / SELECTED WORK</p>
                <h2 className="mt-3 text-4xl font-bold">Projects</h2>
              </div>
              <Link href="/projects" className="hidden text-sm text-slate-400 hover:text-cyan-300 sm:block">View all →</Link>
            </div>

            <div className="mt-10 grid gap-5 lg:grid-cols-3">
              {projects.map((project, i) => <ProjectCard key={project.slug} project={project} index={i} />)}
            </div>
          </div>
        </section>

        <section className="px-5 py-24">
          <div className="mx-auto max-w-7xl rounded-3xl border border-white/10 bg-white/[0.025] p-8 md:p-12">
            <p className="font-mono text-xs tracking-[0.3em] text-cyan-400">02 / CURRENT STATUS</p>
            <div className="mt-5 grid gap-10 md:grid-cols-3">
              <div>
                <p className="text-4xl font-black">8.5</p>
                <p className="mt-2 text-sm text-slate-500">Aggregate CGPA · Semester 2</p>
              </div>
              <div>
                <p className="text-4xl font-black">2025–27</p>
                <p className="mt-2 text-sm text-slate-500">MCA · VESIT Mumbai</p>
              </div>
              <div>
                <p className="text-4xl font-black text-cyan-300">OPEN</p>
                <p className="mt-2 text-sm text-slate-500">Internships & relevant roles</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
