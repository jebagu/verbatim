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
- Resend Contacts API
- Vercel deployment target

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
WAITLIST_SOURCE=verbatim_landing
WAITLIST_NOTIFY_EMAIL=
```

`RESEND_API_KEY` is server-only. Do not expose it with a `NEXT_PUBLIC_` prefix.

## Waitlist Signup

The waitlist form uses a server action in `src/app/actions.ts`, validates input with Zod, drops honeypot submissions, normalizes emails, and writes contacts with the Resend Contacts API. Duplicate contacts are treated as a successful signup.

If `RESEND_API_KEY` is missing, the form returns:

```text
Waitlist is not configured yet.
```

## Commands

```bash
npm install
npm run dev
npm run lint
npm run build
```

## Deployment

1. Push the repo to GitHub.
2. Import the project into Vercel.
3. Add environment variables:
   - `RESEND_API_KEY`
   - `NEXT_PUBLIC_SITE_URL`
   - optional `WAITLIST_SOURCE`
4. Deploy.
5. Test the waitlist form in production.

## Design Notes

The page uses an off-white editorial SaaS visual system, structured diagrams built in code, and a reusable waitlist form. It avoids fake testimonials, fake logos, unsupported claims, direct competitor names, and autonomous-send promises.
