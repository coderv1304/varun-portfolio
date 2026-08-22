export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-4 py-20">
      <div className="grid gap-12 md:grid-cols-[1fr_1.4fr]">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-blueprint">
            // about
          </p>
          <h2 className="mt-3 font-mono text-2xl font-bold text-ink sm:text-3xl">
            Background
          </h2>
        </div>
        <div className="space-y-6 text-muted">
          <p>
            I&apos;m currently pursuing my{" "}
            <span className="text-ink">
              Master of Computer Applications (MCA) at VESIT, Mumbai
            </span>{" "}
            (2025–2027), holding an{" "}
            <span className="text-ink">8.5 aggregate CGPA</span> as of
            semester 2. Before this, I completed my{" "}
            <span className="text-ink">
              B.Sc. in Information Technology at CHM College, Ulhasnagar
            </span>
            .
          </p>
          <p>
            My focus is DevOps, DevSecOps, Cloud, MLOps, and AIOps — I&apos;m
            building a structured, 6-project portfolio (umbrella repo:{" "}
            <span className="font-mono text-blueprint">Cipher-Watch</span>)
            rather than collecting scattered tutorials. Every project is
            built the way I&apos;d want to hand it off to a team: tested
            failure paths, real CI/CD, and documentation that doesn&apos;t
            overstate what the code does.
          </p>
          <p>
            I run my primary development environment on an{" "}
            <span className="text-ink">Ubuntu VM (VMware Workstation Pro)</span>
            , and write up what I build on my{" "}
            <a
              href="https://varun-nair-13.hashnode.dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blueprint underline decoration-blueprint/30 underline-offset-4 hover:decoration-blueprint"
            >
              DevOps blog
            </a>
            .
          </p>

          <div className="flex flex-wrap gap-3 pt-2">
            {["DevOps", "DevSecOps", "Cloud", "MLOps", "AIOps"].map((role) => (
              <span
                key={role}
                className="rounded-sm border border-blueprint/30 bg-blueprint/5 px-3 py-1 font-mono text-xs text-blueprint"
              >
                {role}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
