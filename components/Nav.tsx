import Link from "next/link";

const links = [
  { href: "#about", label: "about" },
  { href: "#stack", label: "stack" },
  { href: "#projects", label: "projects" },
  { href: "#writing", label: "writing" },
];

export default function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-grid bg-base/80 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link href="/" className="font-mono text-sm font-medium text-ink">
          <span className="text-blueprint">~/</span>varun-nair
          <span className="animate-blink text-blueprint">_</span>
        </Link>
        <ul className="hidden items-center gap-8 font-mono text-xs uppercase tracking-wider text-muted sm:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="transition-colors hover:text-blueprint">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <Link
          href="/contact"
          className="rounded-sm border border-blueprint/40 bg-blueprint/10 px-3 py-1.5 font-mono text-xs uppercase tracking-wider text-blueprint transition-colors hover:bg-blueprint/20"
        >
          contact →
        </Link>
      </nav>
    </header>
  );
}
