import Link from "next/link";

const links = [
  { label: "GitHub", href: "https://github.com/coderv1304" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/connectvarun13" },
  { label: "Hashnode", href: "https://varun-nair-13.hashnode.dev/" },
  { label: "Email", href: "mailto:coderv13@gmail.com" },
];

export default function Footer() {
  return (
    <footer className="border-t border-grid">
      <div className="mx-auto max-w-6xl px-4 py-14">
        <div className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-end">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-blueprint">
              // let&apos;s build something
            </p>
            <h2 className="mt-3 max-w-md font-mono text-2xl font-bold text-ink sm:text-3xl">
              Hiring, freelancing, or just want to talk infra?
            </h2>
            <Link
              href="/contact"
              className="mt-6 inline-block rounded-sm bg-blueprint px-5 py-3 font-mono text-sm font-medium text-base transition-transform hover:-translate-y-0.5 hover:bg-blueprint/90"
            >
              open contact form →
            </Link>
          </div>

          <ul className="flex flex-col gap-2 font-mono text-sm">
            {links.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted transition-colors hover:text-blueprint"
                >
                  {l.label} ↗
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-12 flex flex-col justify-between gap-2 border-t border-grid pt-6 font-mono text-xs text-faint sm:flex-row">
          <span>© {new Date().getFullYear()} Varun Nair. Built with Next.js, deployed on Vercel.</span>
          <span>Mumbai, India</span>
        </div>
      </div>
    </footer>
  );
}
