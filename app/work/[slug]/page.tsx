import type { Metadata } from "next";
import type { ReactNode } from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import TrackedAnchor from "@/components/TrackedAnchor";
import CaseStudyDepth from "@/components/CaseStudyDepth";
import CaseStudyReveal from "@/components/case-study/CaseStudyReveal";
import AgentLoop from "@/components/case-study/AgentLoop";
import ArchitectureDiagram from "@/components/case-study/ArchitectureDiagram";
import BackupPipeline from "@/components/case-study/BackupPipeline";
import PrecisionCurve from "@/components/case-study/PrecisionCurve";
import PrevalenceGrid from "@/components/case-study/PrevalenceGrid";
import { projects } from "@/lib/content";
import { caseStudies } from "@/lib/case-studies";
import { breadcrumbSchema, projectSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return projects.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return { title: "Project not found | Varun Nair" };

  return buildMetadata({
    title: `${project.title} — case study | Varun Nair`,
    description: project.blurb,
    path: `/work/${project.slug}`,
    ogType: "article",
  });
}

function SectionLabel({ index, children }: { index: string; children: ReactNode }) {
  return (
    <div className="case-label">
      <span className="case-label-index">{index}</span>
      {children}
    </div>
  );
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  const study = caseStudies[project.slug];
  const position = projects.findIndex((p) => p.slug === project.slug);
  const previous = projects[(position - 1 + projects.length) % projects.length];
  const next = projects[(position + 1) % projects.length];

  const architecture = study?.architecture ?? project.details?.architecture ?? [];
  const results =
    study?.results ??
    [
      {
        value: project.evidence.result.value,
        unit: project.evidence.result.unit,
        label: project.evidence.result.label,
        note: project.evidence.result.note,
      },
    ];

  let visual: {
    index: string;
    label: string;
    heading: string;
    intro: string;
    node: ReactNode;
  } | null = null;

  if (project.slug === "netshield") {
    visual = {
      index: "05b",
      label: "The base rate",
      heading: "Why the benchmark score is not the story",
      intro:
        "A classifier can look excellent on a balanced benchmark and still be wrong almost every time in production, because attacks are rare. These figures use the measured recall and false-positive rate to show that collapse, and what it means per 10,000 flows.",
      node: (
        <>
          <PrecisionCurve />
          <PrevalenceGrid />
        </>
      ),
    };
  } else if (project.slug === "prometheus-ai") {
    visual = {
      index: "05b",
      label: "The gate",
      heading: "Where the human sits in the loop",
      intro:
        "The agent can investigate and propose, but it cannot act. Step through the loop to see where evidence becomes an action, and where a human has to sign off on the exact payload.",
      node: <AgentLoop />,
    };
  } else if (project.slug === "cipher-watch") {
    visual = {
      index: "05b",
      label: "The drill",
      heading: "The restore is the product",
      intro:
        "Writing an encrypted archive proves nothing on its own. The drill decrypts the newest archive, compares it with the source, and fails the unit on a mismatch. Walk the pipeline to see the check.",
      node: <BackupPipeline />,
    };
  }

  return (
    <main id="main" className="case-shell">
      <JsonLd
        data={{
          "@graph": [
            projectSchema(project),
            breadcrumbSchema([
              { name: "Home", path: "/" },
              { name: "Work", path: "/work" },
              { name: project.title, path: `/work/${project.slug}` },
            ]),
          ],
        }}
      />

      <CaseStudyDepth slug={project.slug} />
      <CaseStudyReveal />

      <div className="case-wrap">
        <nav className="case-breadcrumb" aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          <span aria-hidden="true">/</span>
          <Link href="/work">Work</Link>
          <span aria-hidden="true">/</span>
          <span aria-current="page">{project.title}</span>
        </nav>

        <header>
          <div className="case-kicker">
            <span>
              CASE STUDY // {project.index} <strong>·</strong> {project.category}
            </span>
            <span>{study?.role ?? "Independent project"}</span>
          </div>

          <h1 className="case-title">{project.title}</h1>
          <p className="case-lead">{project.blurb}</p>

          <div className="case-meta">
            <div className="case-meta-cell">
              <div className="case-meta-label">Repository</div>
              <div className="case-meta-value">
                <TrackedAnchor
                  href={project.repo}
                  event="repo_click"
                  eventData={{ project: project.slug, placement: "case_meta" }}
                  external
                >
                  {project.repo.replace("https://", "")} ↗
                </TrackedAnchor>
              </div>
            </div>
            <div className="case-meta-cell">
              <div className="case-meta-label">Stack</div>
              <div className="case-meta-value">{project.stack.join(" · ")}</div>
            </div>
            <div className="case-meta-cell">
              <div className="case-meta-label">Headline result</div>
              <div className="case-meta-value">
                {project.evidence.result.value}
                {project.evidence.result.unit ?? ""} —{" "}
                {project.evidence.result.label}
              </div>
            </div>
            {project.demo && (
              <div className="case-meta-cell">
                <div className="case-meta-label">Live demo</div>
                <div className="case-meta-value">
                  <a href={project.demo} target="_blank" rel="noopener noreferrer">
                    Open the deployment ↗
                  </a>
                </div>
              </div>
            )}
          </div>
        </header>

        <figure style={{ margin: 0 }}>
          <div className="case-hero-media">
            <Image
              src={project.image}
              alt={`${project.title} project artwork`}
              fill
              priority
              sizes="(max-width: 900px) 100vw, 1400px"
              style={{ objectFit: "cover" }}
            />
          </div>
          <figcaption className="case-hero-caption" style={{ marginTop: "10px" }}>
            FIG. 1.0 — Project artwork from the repository · {project.title}
          </figcaption>
        </figure>

        <section className="case-section" aria-labelledby="context-heading">
          <div className="case-section-grid">
            <div>
              <SectionLabel index="01">Context</SectionLabel>
            </div>
            <div>
              <h2 className="case-h2" id="context-heading">
                The problem worth solving
              </h2>
              <p className="case-prose">{study?.context ?? project.details?.overview ?? project.blurb}</p>
              <p className="case-prose" style={{ color: "var(--ink)" }}>
                {project.evidence.problem}
              </p>
            </div>
          </div>
        </section>

        {study && (
          <section className="case-section" aria-labelledby="constraints-heading">
            <div className="case-section-grid">
              <div>
                <SectionLabel index="02">Constraints</SectionLabel>
              </div>
              <div>
                <h2 className="case-h2" id="constraints-heading">
                  What the design could not ignore
                </h2>
                <ol className="case-list">
                  {study.constraints.map((constraint) => (
                    <li key={constraint}>{constraint}</li>
                  ))}
                </ol>
              </div>
            </div>
          </section>
        )}

        {architecture.length > 0 && (
          <section className="case-section" aria-labelledby="architecture-heading">
            <div className="case-section-grid">
              <div>
                <SectionLabel index="03">Architecture</SectionLabel>
              </div>
              <div>
                <h2 className="case-h2" id="architecture-heading">
                  How it is put together
                </h2>
                <ArchitectureDiagram steps={architecture} />
                <p className="case-prose" style={{ marginTop: "22px", fontSize: "14px" }}>
                  Each step is documented in the repository README. The diagram
                  shows request order, not deployment topology.
                </p>
              </div>
            </div>
          </section>
        )}

        {study && (
          <section className="case-section" aria-labelledby="decisions-heading">
            <div className="case-section-grid">
              <div>
                <SectionLabel index="04">Key decisions</SectionLabel>
              </div>
              <div>
                <h2 className="case-h2" id="decisions-heading">
                  What I chose, and what it cost
                </h2>
                <div className="case-decisions">
                  {study.decisions.map((decision) => (
                    <div className="case-decision" key={decision.title}>
                      <div>
                        <h3 className="case-decision-title">{decision.title}</h3>
                        <p className="case-decision-detail">{decision.detail}</p>
                      </div>
                      <p className="case-tradeoff">{decision.tradeoff}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        <section className="case-section" aria-labelledby="results-heading">
          <div className="case-section-grid">
            <div>
              <SectionLabel index="05">Results</SectionLabel>
            </div>
            <div>
              <h2 className="case-h2" id="results-heading">
                What is actually measured
              </h2>
              <div className="case-results">
                {results.map((result) => (
                  <div className="case-result" key={`${result.label}-${result.value}`}>
                    <div className="case-result-value">
                      {result.value}
                      {result.unit ? <span>{result.unit}</span> : null}
                    </div>
                    <div className="case-result-label">{result.label}</div>
                    {result.note && <div className="case-result-note">{result.note}</div>}
                  </div>
                ))}
              </div>
              <p className="case-footnote">
                <strong>Methodology.</strong>{" "}
                {study?.methodology ??
                  "Figures come from the repository README. Where a measurement does not exist, no number is claimed."}
              </p>
            </div>
          </div>
        </section>

        {visual && (
          <section className="case-section" aria-labelledby="measurement-heading">
            <div className="case-section-grid">
              <div>
                <SectionLabel index={visual.index}>{visual.label}</SectionLabel>
              </div>
              <div>
                <h2 className="case-h2" id="measurement-heading">
                  {visual.heading}
                </h2>
                <p className="case-prose" style={{ marginBottom: "22px" }}>
                  {visual.intro}
                </p>
                <div style={{ display: "grid", gap: "22px" }}>{visual.node}</div>
              </div>
            </div>
          </section>
        )}

        {study && (
          <section className="case-section" aria-labelledby="limits-heading">
            <div className="case-section-grid">
              <div>
                <SectionLabel index="06">Limitations</SectionLabel>
              </div>
              <div>
                <h2 className="case-h2" id="limits-heading">
                  What this does not prove
                </h2>
                <div className="case-limits">
                  <div className="case-limit-pill">
                    {project.slug === "netshield"
                      ? "Limitations: live accuracy unvalidated"
                      : "Limitations: read before citing"}
                  </div>
                  <ul>
                    {study.limitations.map((limitation) => (
                      <li key={limitation}>{limitation}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>
        )}

        {study && (
          <section className="case-section" aria-labelledby="reproduce-heading">
            <div className="case-section-grid">
              <div>
                <SectionLabel index="07">Reproduce</SectionLabel>
              </div>
              <div>
                <h2 className="case-h2" id="reproduce-heading">
                  Check it yourself
                </h2>
                <div className="case-repro">
                  {study.reproduce.map((step, index) => (
                    <div className="case-repro-step" key={step}>
                      <span>{String(index + 1).padStart(2, "0")}</span>
                      <span>{step}</span>
                    </div>
                  ))}
                </div>
                <TrackedAnchor
                  className="case-repo-link"
                  href={project.repo}
                  event="repo_click"
                  eventData={{ project: project.slug, placement: "case_footer" }}
                  external
                >
                  Open the repository ↗
                </TrackedAnchor>
              </div>
            </div>
          </section>
        )}

        <nav className="case-pager" aria-label="Case study navigation">
          <Link href={`/work/${previous.slug}`}>
            <span className="case-pager-label">← Previous case study</span>
            <span className="case-pager-title">{previous.title}</span>
          </Link>
          <Link href={`/work/${next.slug}`}>
            <span className="case-pager-label">Next case study →</span>
            <span className="case-pager-title">{next.title}</span>
          </Link>
        </nav>

        <div style={{ marginTop: "32px" }}>
          <Link
            href="/work"
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "11px",
              letterSpacing: "1px",
              color: "var(--muted)",
              textDecoration: "none",
            }}
          >
            ← All six case studies
          </Link>
        </div>
      </div>
    </main>
  );
}
