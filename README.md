# Verbatim Landing Page

Production landing page for Verbatim, a local-first professional email writing workflow product. The page positions Verbatim as a writing laboratory for high-stakes professional communication, with guided context intake, voice-to-draft workflows, recipient simulation, critique loops, and human approval.

## Stack

- Next.js App Router
- React
- TypeScript
- Tailwind CSS v4
- shadcn-style UI primitives
- Motion for React
- Lucide React
- Zod
- GitHub Pages static deployment
- Optional external waitlist endpoint

## Local Setup

```bash
npm install
npm run dev
```

Permanent local URL:

```text
http://127.0.0.1:3842/Verbatim/
```

The `/Verbatim/` local path rewrites to the app root. Production can still be deployed at `/`.

## Environment Variables

Create `.env.local` from `.env.example`.

```bash
RESEND_API_KEY=
NEXT_PUBLIC_SITE_URL=https://your-domain.com
NEXT_PUBLIC_WAITLIST_ENDPOINT=
WAITLIST_SOURCE=verbatim_landing
WAITLIST_NOTIFY_EMAIL=
```

`NEXT_PUBLIC_WAITLIST_ENDPOINT` is optional. If it is not set, the static page
renders normally and reports that the live waitlist is not connected yet when a
visitor submits the form.

## Waitlist Signup

The waitlist form is static-export safe. It validates obvious malformed email
entries in the browser, drops honeypot submissions, and posts JSON to
`NEXT_PUBLIC_WAITLIST_ENDPOINT` when one is configured.

## Commands

```bash
npm install
npm run dev
npm run lint
npm run build
```

## Deployment

GitHub Pages is configured in `.github/workflows/deploy-pages.yml`.

Published URL:

```text
https://jebagu.github.io/verbatim/
```

The workflow builds a static export with:

```bash
GITHUB_PAGES=true NEXT_PUBLIC_SITE_URL=https://jebagu.github.io/verbatim npm run build
```

## Design Notes

The page uses an off-white editorial SaaS visual system, structured diagrams built in code, and a reusable waitlist form. It avoids fake testimonials, fake logos, unsupported claims, direct competitor names, and autonomous-send promises.
