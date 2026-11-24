# Varun Nair — portfolio

Platform engineering, DevOps and SRE intern portfolio. Next.js 15 (App Router), server-rendered
content, six engineering case studies that publish methodology and limitations alongside results.

**Hiring snapshot**

- Role sought: Platform Engineering (primary), DevOps, SRE, Cloud, MLOps, AIOps
- Availability: internships Dec 2026 – Jun 2027; full-time from Jun 2027
- Location: Mumbai, India
- Résumé: [`/Varun_Nair_Resume.pdf`](public/Varun_Nair_Resume.pdf) (linked from the nav and hero)
- GitHub: [coderv1304](https://github.com/coderv1304) · LinkedIn: [connectvarun13](https://www.linkedin.com/in/connectvarun13) · Hashnode: [varun-nair-13](https://varun-nair-13.hashnode.dev/)

## Local setup

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Production build

```bash
npm run build
npm start
```

Production build output is recorded in [`REVIEW.md`](REVIEW.md), along with the claim audit, the
SEO checks that were run, and the checks that were not.

## Link crawl

```bash
npm run build
npx next start -p 3100
node scripts/link-check.mjs
```

The crawler walks every internal route (including case studies), reports HTTP status per URL, and
records external links separately.

## What this site does and does not claim

**Does:** every project number traces to a repository, the dissertation behind NetShield, or a
measurement taken for this site. Case studies state limitations, including unvalidated live
traffic accuracy.

**Does not:** promise search rankings, invent metrics, testimonials, logos or "X+" padding, or
claim production validation for lab and hackathon work. Where a figure does not exist it is
labelled unpublished (see Rates Strategy Lab) instead of estimated.

Realistic SEO expectations: ranking for the name query and a handful of long-tail queries
("DevOps intern Mumbai", "NetShield network anomaly detection") is plausible over time. Ranking
for competitive head terms such as "platform engineer" is not, and nothing on this site promises
it.

## Analytics

Vercel Web Analytics (cookieless) is loaded only on a Vercel deployment. Tracked events: résumé
downloads, contact clicks, outbound repository clicks, referral views, and case-study scroll depth
at 25/50/75/100%. No cookie banner is required.
