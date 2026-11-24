export interface CaseStudyDecision {
  title: string;
  detail: string;
  tradeoff: string;
}

export interface CaseStudyResult {
  value: string;
  unit?: string;
  label: string;
  note?: string;
}

export interface CaseStudy {
  context: string;
  constraints: string[];
  decisions: CaseStudyDecision[];
  results: CaseStudyResult[];
  methodology: string;
  limitations: string[];
  reproduce: string[];
  /** Overrides project.details.architecture when the project has no details block. */
  architecture?: string[];
  /** Defaults to "Independent project". */
  role?: string;
}

/**
 * Case-study copy. Every number here is traceable to the repository, its
 * README, or a measurement taken for this site. Where a figure does not
 * exist yet, it is labelled as unpublished rather than estimated.
 */
export const caseStudies: Record<string, CaseStudy> = {
  "prometheus-ai": {
    context:
      "Kubernetes alerts arrive faster than an on-call engineer can triage them. PrometheusAI investigates the alert with Prometheus, Loki, runbooks, and read-only Kubernetes tools, then proposes a remediation that a human must approve before anything changes.",
    constraints: [
      "Remediation must be bounded: only restart, undo, and scale are allowlisted. Everything else fails closed.",
      "Approval must bind to the exact action, not a generic yes.",
      "The investigating agent must never hold write credentials.",
    ],
    decisions: [
      {
        title: "Separate write identity",
        detail:
          "A deterministic policy service holds the only Kubernetes write identity. The LangGraph agent stays read-only and can only propose.",
        tradeoff:
          "Two services to deploy and audit instead of one, plus an internal trust boundary to maintain.",
      },
      {
        title: "Approval bound to a SHA-256 action hash",
        detail:
          "A human approves a specific payload. Execution re-hashes the action and refuses to run if anything changed.",
        tradeoff:
          "Any edit invalidates the approval, so operators sometimes approve twice.",
      },
      {
        title: "Server-side dry run before execution",
        detail:
          "Each proposed change is validated against the API server before the policy service mutates anything.",
        tradeoff: "One extra API round-trip on every remediation.",
      },
    ],
    results: [
      { value: "3", label: "remediation verbs allowlisted" },
      {
        value: "0",
        label: "unapproved mutations in the local Kind benchmark",
        note: "injected faults, not production traffic",
      },
    ],
    methodology:
      "Validated by injecting faults into a local Kind cluster and exercising the full investigate → propose → approve → execute path. Not production-validated; the sample is small and synthetic.",
    limitations: [
      "Demo validated on injected faults in a local Kind cluster, not against production incidents.",
      "Only three verbs are allowlisted, so coverage of real incident classes is untested.",
    ],
    reproduce: [
      "Clone the repository and follow the README setup for the local Kind cluster.",
      "Inject the documented faults and start the agent against Prometheus and Loki.",
      "Walk an action through approval and inspect the PostgreSQL + pgvector audit trail.",
    ],
  },

  netshield: {
    context:
      "NetShield is an end-to-end network flow anomaly detector trained on CIC-IDS-2017. It ingests PCAP/PCAPNG traffic, extracts and normalises flow features, scores them with a Random Forest, and streams results to a live dashboard. The interesting part is not the benchmark score — it is what happens to precision when attacks are rare.",
    constraints: [
      "Inference must run on commodity hardware from live flows, not an offline batch job.",
      "Precision must be reported at realistic prevalence, not only at benchmark balance.",
      "Alerts must be grouped per host and time window to be operable by one person.",
    ],
    decisions: [
      {
        title: "300 s host/window alert grouping",
        detail:
          "Alerts from the same host inside a 300-second window collapse into one incident before they reach the operator.",
        tradeoff:
          "Alert volume drops 38×, but precision does not improve: at 0.1% prevalence both units scored 0.0000 PPV.",
      },
      {
        title: "Report precision across prevalence",
        detail:
          "Precision is derived with Bayes from measured recall and false-positive rate across 0.01%–25% prevalence instead of quoting one flattering score.",
        tradeoff:
          "The headline number looks far worse than a benchmark result — which is the point.",
      },
      {
        title: "Go capture sensor beside the Python pipeline",
        detail:
          "A Go sensor handles packet capture while Python keeps feature extraction, inference, and the dashboard.",
        tradeoff:
          "Two runtimes to maintain, and the sensor is still experimental.",
      },
    ],
    results: [
      { value: "96.39", unit: "%", label: "precision at 25.05% prevalence" },
      { value: "7.40", unit: "%", label: "precision at 0.1% prevalence" },
      { value: "0.79", unit: "%", label: "precision at 0.01% prevalence" },
      {
        value: "38",
        unit: "×",
        label: "fewer alerts per 10,000 flows after grouping",
        note: "alert volume only — precision is unchanged",
      },
      {
        value: "13.5",
        unit: "M",
        label: "flows scored in cross-dataset validation",
        note: "calibrated HistGradientBoosting · 0.28% benign FPR",
      },
      {
        value: "4.11",
        unit: "%",
        label: "FPR across five seeds",
        note: "± 3.27 — the threshold does not transfer",
      },
    ],
    methodology:
      "The 96.39% / 7.40% / 0.79% figures come from the seed-42 Random Forest on CIC-IDS-2017, with precision derived by Bayes from measured recall 57.94% and false-positive rate 0.725%. The 38× figure is alert volume only (177.92 → 4.62 per 10,000 flows). The 13.5M-flow result is a different model — calibrated HistGradientBoosting on CIC-IDS-2018 — and is not comparable to the benchmark numbers.",
    limitations: [
      "Live accuracy is unvalidated — every figure comes from public datasets, not production traffic.",
      "Precision collapses to 0.79% at 0.01% prevalence: roughly one true positive per 10,000 flows.",
      "Grouping cut alert volume 38× but did not rescue precision; no malicious window opened an incident at 0.1% prevalence.",
      "The benchmark threshold is unstable: FPR varies 4.11% ± 3.27% across five seeds.",
    ],
    reproduce: [
      "Clone the repository and install the Python and Go dependencies from the README.",
      "Download CIC-IDS-2017 and run the training and evaluation scripts.",
      "Replay a PCAP through the sensor and watch the dashboard stream scores.",
    ],
  },

  "cipher-watch": {
    context:
      "Cipher-Watch is a Linux administration toolkit: encrypted backups, log rotation, and statistical anomaly checks driven by systemd timers. Its core claim is not that it makes backups — it is that every backup is proven restorable.",
    constraints: [
      "Backups must be encrypted at rest, with a password-derived key.",
      "Every backup must be provably restorable, not merely written.",
      "Automation must run unattended on a schedule and fail loudly.",
    ],
    decisions: [
      {
        title: "AES-256-CBC with PBKDF2 key derivation",
        detail:
          "Archives are encrypted with OpenSSL using 100,000 PBKDF2 iterations, so the key is not stored alongside the ciphertext.",
        tradeoff:
          "Encryption adds CPU time to every backup run, which matters on small hosts.",
      },
      {
        title: "systemd timers instead of cron",
        detail:
          "Monotonic timers survive reboots, log to the journal, and make failures visible as unit state.",
        tradeoff:
          "Ties the toolkit to systemd-based distributions.",
      },
      {
        title: "Automated decrypt-and-compare restore drill",
        detail:
          "A 24-hour drill decrypts the latest archive and compares it against the source tree, failing loudly on mismatch.",
        tradeoff:
          "Extra I/O every day, and a drill failure needs a human to interpret it.",
      },
    ],
    results: [
      { value: "100", unit: "k", label: "PBKDF2 iterations" },
      { value: "24", unit: "h", label: "restore drill interval" },
    ],
    methodology:
      "The restore drill is the measurement: it decrypts the newest archive, compares contents, and reports pass or fail. There is no benchmark beyond that verification loop.",
    limitations: [
      "The drill verifies integrity and decryptability, not recovery-time objectives.",
      "Scope is single-host Linux administration; multi-host orchestration is not included.",
    ],
    reproduce: [
      "Clone the repository and install the scripts and systemd units as described in the README.",
      "Create a source directory, run a backup, and confirm the encrypted archive exists.",
      "Run the restore drill and confirm it compares the decrypted tree without error.",
    ],
  },

  "incident-command-center": {
    role: "Team project — Varun led AWS, DevOps, and infrastructure",
    context:
      "A failed CI/CD run costs 20–40 minutes of manual log reading, and the diagnosis is rarely written down. Incident Command Center turns a workflow failure into an event, asks Amazon Bedrock for a plain-English root cause, and puts the explanation on a live dashboard.",
    constraints: [
      "Detection must not depend on a human watching a pipeline.",
      "The pipeline identity must be able to emit events and nothing else.",
      "The explanation must reach a dashboard without a manual step.",
    ],
    decisions: [
      {
        title: "EventBridge as the trigger",
        detail:
          "A failing GitHub Actions step publishes a custom BuildFailed event, and an EventBridge rule invokes the Lambda.",
        tradeoff:
          "Adds an AWS dependency to a GitHub-hosted pipeline.",
      },
      {
        title: "Narrowly scoped IAM identity",
        detail:
          "The workflow assumes a role with events:PutEvents only, so a compromised pipeline cannot read or mutate anything else.",
        tradeoff: "More setup per repository, and the role must be maintained.",
      },
      {
        title: "Bedrock for explanation, not authority",
        detail:
          "The model produces a readable hypothesis for the dashboard; it does not decide whether the build failed.",
        tradeoff:
          "Operators still verify the diagnosis before acting on it.",
      },
    ],
    results: [
      {
        value: "0",
        label: "manual steps from detection to dashboard",
      },
    ],
    methodology:
      "Team project for the First Commit hackathon (September 2026). Varun led AWS, DevOps, and infrastructure. The hackathon deployment ran on AWS Amplify against a deliberately failing pipeline; that hosted build is offline, so the repository is the artifact.",
    limitations: [
      "Hackathon build, not a production incident system.",
      "The original Amplify demo URL is no longer online; reproduce it from the repository instead.",
      "Bedrock output is an explanation, not a verified root cause.",
    ],
    reproduce: [
      "Clone the repository and follow the deployment steps for Lambda, EventBridge, and the dashboard.",
      "Trigger the sample failing workflow and confirm the event reaches EventBridge.",
      "Open the dashboard and compare the generated explanation with the workflow log.",
    ],
  },

  "rates-strategy-lab": {
    context:
      "Rates Strategy Lab is fixed-income research tooling: Nelson-Siegel-Svensson and QuantLib curve construction, PCA decomposition of curve moves, DV01 bond analytics, and a walk-forward backtest of a 2s10s steepener.",
    constraints: [
      "Strategies must be evaluated out of sample, not fitted to the full history.",
      "Curve construction must be reproducible from a documented data pull.",
      "Headline performance must not be published without a real run.",
    ],
    decisions: [
      {
        title: "Walk-forward windows, 5y train / 6m test",
        detail:
          "The backtest rolls forward instead of fitting once, so each test window is genuinely unseen.",
        tradeoff:
          "Fewer effective observations, so the results are noisier.",
      },
      {
        title: "PCA for level, slope, and curvature",
        detail:
          "Curve moves are decomposed into three factors before the steepener is constructed.",
        tradeoff:
          "Factor interpretation is statistical, not causal.",
      },
      {
        title: "Deflated Sharpe with transaction costs",
        detail:
          "The evaluation adjusts for multiple trials and charges trading costs.",
        tradeoff:
          "Reported performance is lower than a naive Sharpe ratio.",
      },
    ],
    results: [
      { value: "5y / 6m", label: "walk-forward train / test windows" },
      {
        value: "—",
        label: "headline returns",
        note: "intentionally unpublished until a real FRED run",
      },
    ],
    methodology:
      "The repository documents curve construction, factor decomposition, and the walk-forward harness. Return figures are withheld rather than estimated, so nothing here should be read as performance.",
    limitations: [
      "Headline results are unpublished — no return figures are claimed anywhere on this site.",
      "Execution simulation assumes zero curve drift between signal and fill.",
    ],
    reproduce: [
      "Clone the repository and install the Python and QuantLib dependencies.",
      "Pull the Treasury data described in the README and calibrate the curve.",
      "Run the walk-forward harness and inspect the per-window output.",
    ],
  },

  "varun-portfolio": {
    architecture: [
      "Server components render each route from a single typed content module",
      "Per-route metadata, Open Graph images, and JSON-LD are generated from the same data",
      "Client components are limited to navigation, note filters, and the case-study figures",
    ],
    context:
      "This site is the case study. It exists to make claims checkable: server-rendered content, per-route metadata, case studies that publish methodology and limits, and a JavaScript budget that is enforced rather than admired.",
    constraints: [
      "All content must render without JavaScript for crawlers and readers.",
      "First-load JavaScript must stay inside a fixed budget.",
      "Motion must respect prefers-reduced-motion and never block the first CTA.",
    ],
    decisions: [
      {
        title: "Next.js App Router with server components",
        detail:
          "Pages render on the server; client components are limited to navigation, filters, and visualisations.",
        tradeoff:
          "Some interactions need explicit client boundaries and hydration care.",
      },
      {
        title: "One typed content module",
        detail:
          "Projects, notes, stats, and profile copy live in lib/content.ts, so a claim is edited in one place.",
        tradeoff:
          "Content changes ship as commits; there is no CMS.",
      },
      {
        title: "Metadata and JSON-LD generated per route",
        detail:
          "Canonical URLs, Open Graph images, and schema.org graphs are built from the same content model.",
        tradeoff:
          "More build-time code to maintain than hand-written tags.",
      },
    ],
    results: [
      {
        value: "170",
        unit: "KB",
        label: "first-load JavaScript budget, gzip",
        note: "a ceiling, not a measurement",
      },
    ],
    methodology:
      "Budgets are checked against the `next build` route table and recorded in REVIEW.md. Lighthouse runs, when published, are dated and device-specific.",
    limitations: [
      "Performance figures are build outputs and budgets until Lighthouse runs are recorded.",
      "No CMS: content changes ship as commits.",
    ],
    reproduce: [
      "Clone the repository and run npm install.",
      "Run npm run build and compare the route table with the budgets in REVIEW.md.",
      "Run npm start and audit the pages with Lighthouse on a mobile profile.",
    ],
  },
};
