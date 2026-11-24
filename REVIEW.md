# REVIEW.md — Varun Nair portfolio

Self-review of the conversion, SEO, design, motion and accessibility pass.
Reviewed 24 November 2026 against the brief.

Stack found in the repo: Next.js 15.5.29 (App Router), React 19, Tailwind v4 plus the existing
inline editorial styles, GSAP 3.15 + Lenis (already installed — no second animation library was
added), `next/font` (DM Sans, Instrument Serif, JetBrains Mono), `next/og` for social images,
Vercel Web Analytics.

## 0. What was actually verified

| Check | Command / method | Result |
| --- | --- | --- |
| Types | `npx tsc --noEmit` | exit 0 |
| Production build | `npm run build` | exit 0, 19 routes, `/` = 155 kB first-load JS |
| Internal links | `node scripts/link-check.mjs` against `next start -p 3100` | 19 routes crawled, `failures: []` |
| Notes deep links | `curl -L` on each of the three Hashnode URLs | 200, 200, 200 (individually re-checked) |
| Résumé | `curl -I`, PDF text extraction, Chromium render | 200 `application/pdf`, 133,219 bytes, 2 pages, content visible |
| Rendered HTML | `curl` + grep | role line, case-study diagram copy, JSON-LD, canonical all in the server HTML |
| Sitemap / robots | `curl /sitemap.xml`, `/robots.txt` | served, absolute URLs, sitemap referenced |
| `?ref` variants | `curl "/?ref=acme"` | canonical → base URL, identical server HTML, greeting is client-only |
| Hero at 1366×768 / 390×844 | browser geometry read | see §2 |

Not run here: Lighthouse, Google Rich Results Test, Schema.org validator, Search Console and Bing
Webmaster Tools. See §4 and §6 — these need owner accounts and are reported as not done, not as
passes.

### Changes made in this pass

- **Positioning**: role line is now `Platform Engineering · DevOps · SRE Intern` in the hero,
  nav, footer, `<title>`, meta description and OG image (previously "DevOps, Cloud & AI/ML").
- **Dead link**: removed the Incident Command Center AWS Amplify demo URL (DNS no longer
  resolves) and added the absence to that case study's limitations instead of leaving a broken CTA.
- **Notes**: draft cards (3 of 6) are now excluded from the home page and `/notes`; every visible
  card deep-links to its own post.
- **Referral**: `?ref=<company>` now renders "Hi &lt;Company&gt; team — the NetShield case study…".
- **Hero composition**: the wordmark was sized purely by viewport width, so on short-and-wide
  screens it grew up into the portrait's face and letters crossed his chin. The H1 is now capped by
  height (`min(17vw, 25svh)`), the cut-out is slightly smaller/dimmer with a deeper bottom fade and
  a scrim, so the face always sits in clear space and the letters cross only the chest. Measured
  chin → wordmark clearance (line box): 44 px at 1600×900, 72 px at 1366×768, 101 px at 390×844.
- **Docs**: README rewritten; this file added.

## 1. Claim audit

Every number that appears on the site, where it comes from. "Repo" means the public repository or
its README; "dissertation" is the NetShield dissertation figures supplied as the single source of
truth.

| Claim on site | Where | Source | Verdict |
| --- | --- | --- | --- |
| 38× fewer alerts after 300 s host/window grouping | hero proof, proof strip, NetShield card + case study | dissertation (177.92 → 4.62 per 10,000 flows) | sourced; labelled "alert volume only" in the case study |
| 96.39% precision at 25.05% prevalence | NetShield case study | dissertation, seed-42 Random Forest, CIC-IDS-2017 | sourced |
| 7.40% at 0.1%, 0.79% at 0.01% | NetShield case study, precision curve callouts | Bayes from measured recall 57.94% / FPR 0.725% | sourced; derivation stated in the methodology footnote |
| Recall 57.94%, FPR 0.725% | methodology footnote, grid caption | dissertation (seed 42) | sourced |
| 13.5M flows at 0.28% benign FPR | NetShield case study results | résumé + repo (CIC-IDS-2018, calibrated HistGradientBoosting) | sourced; explicitly flagged as a different model, not comparable |
| FPR 4.11% ± 3.27% across five seeds | NetShield limitations | repo evaluation output | sourced from repo; not in the supplied fact list, so verify before quoting externally |
| 0 unsafe actions in the local Kind benchmark | PrometheusAI results | repo (policy + approval tests, injected faults) | sourced; note says injected faults, not production |
| 3 allowlisted remediation verbs | PrometheusAI results | repo allowlist | sourced |
| 100k PBKDF2 iterations, 24 h restore drill | Cipher-Watch results, card | repo scripts + systemd units | sourced |
| 0 manual steps detection → dashboard | Incident Command Center results | hackathon repo | sourced; team project, role stated |
| 5y / 6m walk-forward windows; returns unpublished | Rates Strategy Lab | repo harness | sourced; no return figure is claimed anywhere |
| 170 KB first-load JS budget | Varun Portfolio card, case study | `next build` route table (155 kB actual) | sourced; labelled "a ceiling, not a measurement" |
| 11 public repositories | proof strip | GitHub API `public_repos` = 11, checked 24 Nov 2026 | verified |
| Six case studies | `/work`, nav, metadata | six entries in `lib/content.ts` | verified |
| Since 2025, MCA at VESIT 2025–2027, graduating Jun 2027 | about, hero, footer | supplied facts | sourced |
| Email `coderv1304@gmail.com` | contact, JSON-LD | supplied facts | **conflict**: the PDF in `public/` prints `coderv13@gmail.com` — regenerate the résumé (§6) |
| LinkedIn `linkedin.com/in/connectvarun13` | nav, notes, JSON-LD, footer | "confirm one canonical URL" was unresolved | used consistently everywhere, but **not manually confirmed**; LinkedIn returned HTTP 999 to automated checks |

No fabricated metrics, testimonials, logos, or "N+" padding were found in the rendered pages.

## 2. Six-second test (measured, not estimated)

Measured with the production build at both viewports. Positions are element top/bottom in CSS px.

**1366×768 laptop**

| Element | Position | Visible without scrolling |
| --- | --- | --- |
| H1 "Varun Nair" | 271–472 | yes |
| Role: PLATFORM ENGINEERING · DEVOPS · SRE INTERN | 472–491 | yes |
| Mumbai, India · Available for internships Dec 2026 – Jun 2027 | 501–519 | yes |
| Proof line: 38× fewer alerts after 300 s grouping | 581–610 | yes |
| CTA "Download résumé (PDF)" | 630–688 | yes |
| CTA "View selected work" | 644–674 | yes |

**390×844 phone**

| Element | Position | Visible without scrolling |
| --- | --- | --- |
| H1 | 365–417 | yes |
| Role line | 431–448 | yes |
| Location + availability | 458–498 | yes |
| Proof line | 585–631 | yes |
| "Download résumé (PDF)" | 651–709 | yes |
| "View selected work" | 735–764 | yes |

No horizontal scroll at either width (`scrollWidth === innerWidth`). The `Résumé` button stays in
the fixed nav on mobile; "Let's talk" moves into the drawer, where the résumé CTA is the first item.

## 3. Hostile-reader test

| Case study | The toughest question a senior engineer would ask | Where the page answers it |
| --- | --- | --- |
| NetShield | "96% precision sounds great — what happens at production prevalence?" | §The base rate: 7.40% at 0.1%, 0.79% at 0.01%, with the Bayes derivation and per-10,000-flow counts; limitations state live accuracy is unvalidated |
| NetShield | "Did grouping actually improve detection, or only hide alerts?" | Trade-off text says precision is unchanged; limitations repeat that no malicious window opened an incident at 0.1% |
| PrometheusAI | "What stops the agent from doing something destructive?" | §Key decisions: separate write identity, allowlist of three verbs, server-side dry run, SHA-256-bound approval; §Limitations: local Kind faults only, not production |
| Cipher-Watch | "Encryption is table stakes — how do you know the backup restores?" | §The drill and the 24 h decrypt-and-compare restore test; limitations separate integrity from RTO |
| Incident Command Center | "Is the AI deciding whether the build failed?" | Decisions: Bedrock produces an explanation only; limitations call it a hackathon build with no verified root cause |
| Rates Strategy Lab | "Where are the returns?" | Results cell reads "— · headline returns · intentionally unpublished until a real FRED run"; limitations state no return figures are claimed |
| This portfolio | "Is '170 KB budget' a measurement or a goal?" | Labelled a ceiling in both the card and the case-study results note; the build table in §0 shows 155 kB actual |

## 4. SEO verification

- **Titles / descriptions**: unique per route, e.g. home `Varun Nair | DevOps, SRE & Platform
  Intern, Mumbai` (50 chars) with a 142-character description; `/work`, `/about`, `/notes`,
  `/contact`, `/beyond` and every `/work/[slug]` set their own via `buildMetadata`.
- **Canonical**: one per route, absolute, generated from `site.url`. `?ref=` variants canonicalise
  to the base path and serve identical HTML.
- **Rendered HTML**: the home page contains the H1, role, location, availability, proof and both
  CTAs in the HTML from `curl` (no interaction needed); the PrometheusAI approval-gate copy and
  the NetShield methodology text are in the DOM; note links are server-rendered.
- **Structured data**: `/` emits `Person` + `WebSite`; each case study emits `SoftwareSourceCode` +
  `BreadcrumbList`; `/work` emits `CollectionPage`. **Validation not run** — Rich Results Test and
  the Schema.org validator have not been executed, so this is "implemented", not "validated".
- **Sitemap / robots**: `/sitemap.xml` lists every route with real last-modified dates;
  `/robots.txt` allows all and points at the sitemap. Submitted to Google Search Console / Bing
  Webmaster Tools: **not done** (requires the owner's accounts).
- **Image delivery**: hero 121,976 bytes (119 KiB, inside the 120 KB target) via `next/image` with
  `priority`; portrait 67,058 bytes; project artwork is SVG. Fonts are self-hosted through
  `next/font` with `display: swap`.
- **Lighthouse**: **not run** in this environment. Do not quote Performance/Accessibility scores
  from this document; run Lighthouse mobile on the deployed URL.

## 5. Motion audit

| Animation | Purpose | Cost | Reduced motion |
| --- | --- | --- | --- |
| Hero H1 mask reveal + kicker/CTA stagger (GSAP) | entrance, sets editorial tone | two transform/opacity tweens, ~1.1 s, once | skipped: `data-motion="off"` short-circuits, CSS kills transitions |
| HeroArtifact parallax | depth cue behind the type | one rAF loop while scrolling, settles when still | disabled when `prefers-reduced-motion` matches |
| Lenis smooth scroll + ScrollTrigger | page feel | single GSAP ticker | falls back to native scrolling |
| Scroll progress bar | reading position | one rAF per scroll event | static bar, no motion |
| CaseStudyReveal | section entrance on case studies | IntersectionObserver, transform/opacity | skipped when reduced / motion off |
| PrevalenceGrid dot reveal | explains the base-rate collapse | IO-triggered, finite | skipped; data table/static dots remain |
| BackupPipeline step animation | shows backup → verify order | finite, step-driven | checks `prefers-reduced-motion` itself |
| SignalExplorer field | hero-adjacent signal motif | rAF, stops when off-screen | disabled for reduced motion |
| Link/arrow hover transitions | affordance | CSS transform/opacity | near-instant via the global reduced-motion rule |

No looping background animation sits behind text, and no animation gates the first CTA. Global
kill switches: `html[data-motion="off"]` and the `prefers-reduced-motion` block in `globals.css`.

## 6. Remaining TODOs and placeholders

1. **Résumé PDF** (`public/Varun_Nair_Resume.pdf`): renders correctly, but page 2 carries a single
   overflowing line and the header email is `coderv13@gmail.com` while the site uses
   `coderv1304@gmail.com`. Re-export from the source document, fix the email, and re-check the page
   count.
2. **Search Console / Bing**: verify the property, submit `/sitemap.xml`, then record the status
   here. Nothing in this repo has been submitted.
3. **Structured data validation**: run the Rich Results Test and Schema.org validator on the
   deployed home page and one case study; paste the results into this file.
4. **Lighthouse**: run mobile Lighthouse on the deployed URL and record before/after numbers.
   Current performance evidence is the build route table and asset sizes only.
5. **LinkedIn URL**: automated checks get HTTP 999; confirm `connectvarun13` is the canonical
   profile by opening it while signed in.
6. **Draft notes**: three drafts ("Why approval gates matter in AIOps", "Reading Kubernetes events
   like a human", "Random Forest vs. real traffic") are hidden from the site. Publish them on
   Hashnode and add the URLs, or delete the entries.
7. **Page transitions**: the card → case-study shared-element morph and View Transitions
   enhancement are not implemented; navigation is instant. This is the main remaining item from
   the motion brief.
8. **Environment limitation**: screenshots at 1280/1440 px came out blank in this session because
   painting stopped while the window was covered; layout there was checked by geometry only, so
   those widths have not been visually reviewed.
