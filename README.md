# varun-nair-portfolio

Personal portfolio site for Varun Nair — built with Next.js 14 (App Router), TypeScript, Tailwind CSS, and Framer Motion. Themed as an "ops dashboard / blueprint" console to match a DevOps/SRE focus.

## Local development

```bash
npm install
npm run dev
```

Visit http://localhost:3000

## Before you deploy

Open `components/ContactForm.tsx` and replace the placeholder:

```ts
const FORM_ENDPOINT = "https://formspree.io/f/YOUR_FORM_ID";
```

with your real [Formspree](https://formspree.io) endpoint (free tier is enough). See the full setup guide for step-by-step instructions.

## Build

```bash
npm run build
npm run start
```

## Deploy

Deployed via [Vercel](https://vercel.com) — connect this GitHub repo to a new Vercel project and it deploys automatically on every push to `main`.
