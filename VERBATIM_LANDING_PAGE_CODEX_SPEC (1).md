# Codex Build Spec: Verbatim Landing Page

## Assignment

Build a production-quality marketing landing page for **Verbatim**, a local-first professional email writing workflow product.

This is not a throwaway mockup. The page will be published publicly and should look like a premium SaaS launch page from a serious, design-led startup.

The page must include a working email waitlist signup form, polished responsive design, workflow diagrams, persona diagrams, strong copy, SEO metadata, and production deployment readiness.

## Product Summary

**Verbatim** helps users write extraordinary professional emails through a guided workflow. It is not a simple proofreading bot. It turns messy thoughts, voice notes, workspace context, email threads, and recipient context into clear, tactful, strategically structured professional messages.

The core claim:

> Verbatim is a writing laboratory for high-stakes professional communication, not a prompt box.

The page should communicate that Verbatim is more advanced than asking a generic chatbot to proofread an email because it uses:

- Workspace context
- Voice brain dumps
- Strategic option generation
- Structured writing workflows
- Critique loops
- Recipient personas
- Theory-of-mind style feedback
- Human approval before send
- Local-first product architecture

## Framework Decision

Use this stack:

- **Next.js App Router**
- **React**
- **TypeScript**
- **Tailwind CSS v4**
- **shadcn/ui** for base UI primitives
- **Motion for React** for restrained page animations
- **Lucide React** for icons
- **Zod** for waitlist form validation
- **Resend Contacts API** for email signup storage
- **Vercel** as the primary deployment target

Use the latest stable package versions available at implementation time. Do not pin old versions unless necessary.

### Why this stack

Next.js is the right choice because this is a publishable marketing page with a server-side waitlist form, metadata, Open Graph support, and easy Vercel deployment. Tailwind v4 gives fast custom styling without heavy CSS overhead. shadcn/ui provides clean accessible primitives, but the final design must not look like an unmodified shadcn template. Motion should be used for subtle polish, not distracting animation.

## Non-Negotiable Product Positioning

The site must not sound like another generic AI email assistant.

Use language that emphasizes:

- workflow over one-shot prompting
- judgment over grammar correction
- recipient simulation over generic tone advice
- voice-preserving rewrites over bland professionalization
- private local workspace over cloud-hosted document dumping
- human control over autonomous sending

Do **not** overclaim. Avoid unsupported statements like:

- "Guaranteed better replies"
- "Never misread tone"
- "Fully private AI" if external APIs may be used later
- "Reads minds"
- "Automatically sends perfect emails"

Use "simulated recipient personas" and "see your email through their eyes" rather than implying literal mind-reading.

Do **not** mention Claude or ChatGPT by name on the public page. Use safer phrasing such as:

- "generic chatbot"
- "one-shot AI prompt"
- "asking an AI to proofread this"

## Target Page

Build a single-page landing page at `/`.

The page should be long-form and visually rich, with sections in this order:

1. Header and hero
2. Differentiator comparison
3. Workflow diagram
4. Persona / theory-of-mind diagram
5. Feature grid
6. Use cases
7. Final CTA
8. Footer

All navigation links should scroll to anchors on the page.

## Design Direction

Overall feel:

- Premium
- Intelligent
- Calm
- High-status
- Trustworthy
- Editorial but modern
- Beautiful enough to pitch investors or show early users

Avoid:

- generic AI gradient overload
- fake customer logos
- fake testimonials
- cartoonish illustration style
- cluttered dashboards
- dark mode by default
- giant 3D blobs
- childish emoji-heavy visuals

### Visual Style

Use an off-white background with subtle gradients and layered glass cards.

Suggested palette:

- Background: `#fbfaf7`, `#f8f7ff`, `#eef6ff`
- Ink: `#101828`, `#172033`, `#243044`
- Muted text: `#667085`, `#475467`
- Primary indigo: `#4f46e5`
- Deep violet: `#6d28d9`
- Soft blue: `#3b82f6`
- Soft teal: `#14b8a6`
- Warm accent: `#f59e0b`
- Card border: `rgba(15, 23, 42, 0.10)`
- Soft shadow: `0 24px 80px rgba(15, 23, 42, 0.10)`

Use a refined heading font and clean body font. Recommended:

- Heading font: `Fraunces` via `next/font/google`
- Body/UI font: `Inter` or `Geist` via `next/font/google`

Headings should feel editorial and memorable. UI labels should be crisp and modern.

### Animation

Use Motion for React sparingly:

- subtle fade and upward motion on section entry
- soft hover lifts on cards
- animated workflow connector pulses only if tasteful
- respect `prefers-reduced-motion`

Do not animate every element. The site should feel premium, not gimmicky.

## Project Setup

Create the app with Next.js, TypeScript, App Router, ESLint, and Tailwind.

Suggested command:

```bash
npx create-next-app@latest verbatim-landing \
  --typescript \
  --eslint \
  --app \
  --src-dir \
  --import-alias "@/*" \
  --tailwind
```

Use `pnpm` if available. Otherwise use `npm`.

Install dependencies:

```bash
pnpm add motion lucide-react zod resend clsx tailwind-merge
pnpm dlx shadcn@latest init
pnpm dlx shadcn@latest add button input card badge separator
```

If shadcn initialization differs with current versions, follow the latest CLI instructions and preserve the intended component design.

## Environment Variables

Create `.env.example` with:

```bash
RESEND_API_KEY=
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

Use Resend's global Contacts API for waitlist storage. Do not expose `RESEND_API_KEY` to the client. Never prefix it with `NEXT_PUBLIC_`.

Optional env vars:

```bash
WAITLIST_SOURCE=verbatim_landing
WAITLIST_NOTIFY_EMAIL=
```

If `RESEND_API_KEY` is missing in production, the form must return a clear server-side error. Do not silently fake a signup.

## Required File Structure

Use this approximate structure:

```text
verbatim-landing/
  src/
    app/
      actions.ts
      globals.css
      layout.tsx
      page.tsx
      robots.ts
      sitemap.ts
    components/
      site/
        header.tsx
        hero.tsx
        app-mockup.tsx
        waitlist-form.tsx
        differentiator.tsx
        workflow-diagram.tsx
        persona-diagram.tsx
        feature-grid.tsx
        use-cases.tsx
        final-cta.tsx
        footer.tsx
        section-shell.tsx
        animated-card.tsx
      ui/
        button.tsx
        input.tsx
        card.tsx
        badge.tsx
        separator.tsx
    lib/
      cn.ts
      waitlist.ts
      validation.ts
      constants.ts
  public/
    og-image.png
  .env.example
  README.md
```

The final implementation may vary slightly, but keep the code organized by section. Avoid putting the entire page in one giant component.

## Page Copy

Use this copy as the default. Minor improvements are allowed if they make the page sharper while preserving the strategy.

### Header

Brand:

> Verbatim

Navigation links:

- Product
- Workflow
- Personas
- Use Cases
- Waitlist

Button:

> Join waitlist

### Hero

Headline:

> Write the email you meant to send.

Subheadline:

> Verbatim turns messy thoughts, voice notes, email threads, and workspace context into extraordinary professional messages through a guided workflow.

Support line:

> A local-first writing workspace for people whose words carry consequences.

Trust chips:

- Workspace context
- Voice-to-draft
- Recipient personas
- Human approval

Primary CTA:

- Input placeholder: `Enter your email`
- Button: `Join the waitlist`

Secondary CTA:

> See how it works

Microcopy below form:

> No spam. Occasional product updates only.

### Hero Visual

Build an app mockup in code. Do not use a static screenshot.

The mockup should show:

- A left sidebar with items: Home, Threads, Context, Drafts, Personas, Templates, Settings
- A top workflow stepper with: Context, Voice dump, Options, Draft, Critique, Finalize
- A main chat/writing area
- A right panel with context summary and persona previews

Include sample content:

Verbatim message:

> Let's build the right email. Start by adding the context I should know about this conversation.

User message:

> Launching a new analytics product. Reaching out to see if they would be open to a pilot. Budget conversation likely needed.

Verbatim message:

> Got it. Upload files, paste the thread, add notes, or record a voice dump to get started.

Action buttons:

- Upload files
- Paste thread
- Record voice

Right panel context:

- Product one-pager.pdf
- Past email thread
- Recipient notes

Persona previews:

- Booking Agent
- Investor
- Busy Executive

### Differentiator Section

Anchor: `#product`

Headline:

> More than "can you proofread this?"

Subheadline:

> Most AI writing tools start at the sentence level. Verbatim starts with intent, context, audience, structure, and the response you are trying to earn.

Use three cards.

Card 1 title:

> Typical chatbot

Bullets:

- One-shot prompt
- Weak project memory
- Generic professional tone
- No visible process
- Hard to compare strategies

Card 2 title:

> Verbatim

Bullets:

- Staged writing workflow
- Workspace and thread context
- Multiple strategic options
- Recipient simulation
- Voice-preserving rewrites
- Critique before final polish

Card 3 title:

> Result

Bullets:

- Clearer asks
- Better structure
- Stronger recipient fit
- Less generic wording
- More confidence before send

### Workflow Diagram Section

Anchor: `#workflow`

Headline:

> A writing laboratory, not a prompt box

Subheadline:

> Verbatim separates the hard parts of professional writing so you can make better decisions before the final draft appears.

Create a polished diagram with six connected steps. This should be one of the visual centerpieces of the page.

Steps:

1. **Load context**
   - Workspace files, pasted threads, recipient notes, and project background.

2. **Voice brain dump**
   - Say the messy version first. Capture goals, worries, and half-formed thoughts.

3. **Choose strategy**
   - Compare A / B / C approaches before committing to a draft.

4. **Build the structure**
   - Decide the opening, ask, support, objections, and close.

5. **Draft and critique**
   - Review clarity, tone, leverage, specificity, and risk.

6. **Finalize**
   - Keep human control over the final message.

Around the diagram, include small floating cards:

Workspace context card:

- Company brief.pdf
- Q2 roadmap.pptx
- Past thread
- Recipient notes

Voice card:

- Show a waveform-like visual made with CSS bars.
- Include a small recording dot.
- Label: `Voice brain dump 1:28`

Options card:

- Approach A: Direct ask
- Approach B: Relationship-first
- Approach C: Business-case lead

Critique card:

- Clarity: 5 dots
- Tone: 4 dots
- Leverage: 4 dots
- Risk: 2 dots

### Persona / Theory-of-Mind Section

Anchor: `#personas`

Headline:

> See your email through their eyes

Subheadline:

> Create recipient personas with theory-of-mind style feedback so you can spot buried asks, weak framing, and tone problems before you send.

Important wording:

Use "theory-of-mind style feedback" or "recipient simulation." Do not claim the product literally knows what someone thinks.

Build a diagram with:

- Left card: current draft email
- Middle column: three recipient persona cards
- Right column: feedback cards
- Arrows connecting draft to personas and personas to feedback

Draft email sample:

```text
Subject: Partnership pilot opportunity

Hi Taylor,

We have been building an analytics platform that helps teams surface operational insights faster. I think there could be a lot of value for your organization.

Would you be open to a quick call to explore a potential pilot? I would love to learn more about your priorities.

Best,
Alex
```

Persona 1:

Title:

> Booking Agent

Traits:

- Time-poor
- Filters for legitimacy
- Wants clear ask

Feedback:

> Your ask is still buried.

Supporting line:

> Make the request impossible to miss in the first screen.

Persona 2:

Title:

> Investor

Traits:

- Looks for signal
- Cares about downside
- Hates fluff

Feedback:

> This sounds too needy.

Supporting line:

> Lead with traction, timing, and why this conversation matters now.

Persona 3:

Title:

> Busy Executive

Traits:

- Skims first
- Responds to structure
- Needs confidence

Feedback:

> Lead with the business case.

Supporting line:

> Use a clear headline, shorter paragraphs, and a concrete next step.

### Feature Grid

Headline:

> Built for high-stakes professional writing

Subheadline:

> The pieces you need when the email actually matters.

Feature cards:

1. **Workspace memory**
   - Company background, active projects, goals, and writing preferences.

2. **Thread-aware drafting**
   - Paste an email chain and respond with the right context.

3. **Voice-to-draft workflow**
   - Turn long rambles into crisp written intent.

4. **Option generation**
   - Compare multiple strategic approaches before drafting.

5. **Critique loops**
   - Improve clarity, tone, leverage, precision, and risk.

6. **Version history**
   - Keep every branch, rewrite, and final candidate.

7. **Local-first design**
   - Your files and workflow live on your machine.

8. **Human approval**
   - You stay in control of every final send.

### Use Cases

Anchor: `#use-cases`

Headline:

> For people whose words matter

Cards:

1. **Founders**
   - Raise, recruit, sell, and build trust with sharper messages.

2. **Executives**
   - Communicate strategy, decisions, and tradeoffs with precision.

3. **Dealmakers**
   - Move sensitive conversations forward without losing leverage.

4. **Sales**
   - Write outreach and follow-ups that feel specific, not canned.

5. **Creators**
   - Pitch partners, sponsors, booking agents, and collaborators.

6. **Operators**
   - Align teams, unblock decisions, and drive outcomes.

### Final CTA

Anchor: `#waitlist`

Headline:

> Join the waitlist

Subheadline:

> Be first to try Verbatim and help shape the future of professional writing.

Use the same waitlist form component as the hero.

Privacy note:

> No spam. Occasional product updates only.

### Footer

Include:

- Verbatim brand
- Short line: `A writing laboratory for professional communication.`
- Links to page anchors
- Copyright line using current year

No fake legal pages unless you create them. If adding Privacy and Terms links, use placeholders that clearly indicate they need pages before launch.

## Waitlist Signup Implementation

Implement a real form.

### Validation

Use Zod:

- Email required
- Must be valid email
- Maximum length 254 characters
- Honeypot field must be empty

### Form behavior

States:

- idle
- submitting
- success
- error

Success message:

> You are on the list. We will send an update when early access opens.

Error message examples:

- Invalid email: `Enter a valid email.`
- Missing server config: `Waitlist is not configured yet.`
- API failure: `Signup failed. Please try again.`

### Server action

Create a server action in `src/app/actions.ts`.

The server action should:

1. Parse form data
2. Check honeypot
3. Validate email with Zod
4. Normalize email to lowercase and trim whitespace
5. Create or update a contact in Resend
6. Return a typed action result

Suggested TypeScript shape:

```ts
export type WaitlistResult =
  | { status: "idle" }
  | { status: "success"; message: string }
  | { status: "error"; message: string };
```

Use React's action state APIs to render pending, success, and error UI.

### Resend integration

Create `src/lib/waitlist.ts`.

Use `resend.contacts.create` with:

- `email`
- `unsubscribed: false`
- `properties` if supported by the installed SDK and current Resend API

Suggested properties:

- `source: "verbatim_landing"`
- `signup_path: "/"`
- `signup_version: "v1"`

If contact already exists, handle the duplicate gracefully. Do not show a scary error. Treat duplicate signup as success.

Do not send API keys to the browser.

### Spam control

Implement a hidden honeypot input named `company`. If filled, return success without writing to Resend. This quietly drops obvious bots.

Optional but good:

- Add a minimum submit delay using a hidden timestamp field.
- Add Cloudflare Turnstile only if it can be done without making the page ugly.

## Required Components

### `Header`

- Sticky or fixed at top with subtle blur
- Desktop nav links
- Mobile menu or simplified mobile nav
- CTA button scrolls to waitlist

### `WaitlistForm`

- Reusable for hero and final CTA
- Accepts `variant?: "hero" | "centered"`
- Accessible labels
- Loading state
- Success and error states
- Honeypot input

### `Hero`

- Two-column desktop layout
- Stacked mobile layout
- Strong headline
- Signup form
- App mockup
- Soft gradient background accents

### `AppMockup`

- Pure React and CSS
- No image screenshot
- Should look like a real product UI
- Include sidebar, workflow stepper, chat messages, context card, persona card
- Use rounded cards, small icons, and subtle shadows

### `Differentiator`

- Three comparison cards
- Strong iconography
- Use X icons for generic chatbot, check icons for Verbatim and results
- Cards should stack cleanly on mobile

### `WorkflowDiagram`

- Responsive diagram
- Desktop: horizontal step flow
- Mobile: vertical flow
- Use connector lines or arrows
- Include floating cards around the main sequence
- Use CSS/SVG for waveform and connectors

### `PersonaDiagram`

- Responsive layout
- Desktop: draft left, personas center, feedback right
- Mobile: stacked blocks with clear order
- Use tasteful avatar illustrations built from colored circles and initials or simple SVG shapes
- Do not use external stock photos

### `FeatureGrid`

- 8 cards
- Clean responsive grid
- Hover states
- Icons from Lucide

### `UseCases`

- 6 cards
- Each with icon, title, microcopy

### `FinalCTA`

- Large rounded panel
- Soft gradient background
- Reuse waitlist form

### `Footer`

- Simple and clean

## Accessibility Requirements

- Semantic HTML
- One `h1`
- Logical heading order
- Keyboard navigable form and buttons
- Visible focus states
- Proper labels for email inputs
- Aria live region for form success/error
- Sufficient contrast
- Respect reduced motion preference
- Buttons must be real buttons or links, not clickable divs

## SEO Requirements

In `layout.tsx`, define metadata:

```ts
export const metadata = {
  title: "Verbatim | Write the email you meant to send",
  description:
    "Verbatim is a local-first professional email writing workflow that turns context, voice notes, and recipient personas into sharper messages.",
  openGraph: {
    title: "Verbatim | Write the email you meant to send",
    description:
      "A writing laboratory for high-stakes professional email, with workflows, critique loops, and recipient personas.",
    url: process.env.NEXT_PUBLIC_SITE_URL,
    siteName: "Verbatim",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Verbatim | Write the email you meant to send",
    description:
      "More than proofreading. Verbatim helps you structure, draft, critique, and finalize professional emails.",
  },
};
```

Create:

- `robots.ts`
- `sitemap.ts`

Create a simple `public/og-image.png` or implement a dynamic OG image if reasonable. A static generated OG image is fine. It should use the Verbatim brand, headline, and subtle background.

## Performance Requirements

The landing page should feel fast.

- Avoid heavy client components except where necessary.
- Use Server Components by default.
- Mark only interactive components with `"use client"`.
- Keep Motion usage scoped to client wrapper components.
- Avoid large image assets.
- Use CSS/SVG diagrams instead of raster diagrams.
- Use `next/font` for optimized fonts.
- Run build and fix lint errors.

Target:

- Lighthouse Performance: 90+
- Accessibility: 95+
- Best Practices: 95+
- SEO: 95+

## Responsive Behavior

Breakpoints:

- Mobile: single column, generous spacing, diagrams stack vertically
- Tablet: two-column where possible
- Desktop: rich two-column hero and full workflow diagrams

Mobile must not feel like an afterthought. The waitlist form should be easy to use on a phone.

## Detailed Design Notes

### Backgrounds

Use layered background accents:

- top hero radial gradient behind app mockup
- subtle grid texture or noise only if tasteful
- section separators with faint borders
- final CTA card with low-opacity wave lines or orbital rings

Do not use harsh gradients.

### Cards

Cards should have:

- white or translucent background
- subtle border
- soft shadow
- 20 to 28 px radius
- hover state with slight lift

### Icons

Use Lucide icons with consistent stroke width.

Suggested mapping:

- Workspace memory: Database
- Thread-aware drafting: MessagesSquare
- Voice-to-draft: Mic
- Option generation: GitBranch
- Critique loops: RefreshCcw or SearchCheck
- Version history: History
- Local-first design: Laptop or Lock
- Human approval: UserCheck
- Founders: Rocket
- Executives: Briefcase
- Dealmakers: Handshake
- Sales: Target
- Creators: Lightbulb
- Operators: Cog

### Microinteractions

- CTA button hover glow
- Cards lift 2 to 4 px on hover
- Form button shows spinner or loading text
- Workflow steps have gentle active glow
- Persona feedback cards should look like sticky notes or review panels

## Content Accuracy and Publication Safety

Since this page is public:

- No fake customers
- No fake testimonials
- No invented metrics
- No competitor names
- No claims that imply medical, legal, financial, or HR compliance
- No claim that the product guarantees responses
- No claim that the tool fully replaces human judgment
- No claim that recipient personas know the real recipient's thoughts

Use careful language:

- `recipient simulation`
- `theory-of-mind style feedback`
- `helps you spot`
- `designed to preserve your voice`
- `local-first`
- `human approval`

## Implementation Details

### `src/lib/constants.ts`

Define all section content as structured data where practical:

```ts
export const workflowSteps = [
  {
    number: "1",
    title: "Load context",
    description:
      "Workspace files, pasted threads, recipient notes, and project background.",
  },
  // ...
];
```

This keeps components clean.

### `src/lib/cn.ts`

Use `clsx` and `tailwind-merge`:

```ts
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

### `src/lib/validation.ts`

Use Zod for email validation:

```ts
import { z } from "zod";

export const waitlistSchema = z.object({
  email: z.string().trim().toLowerCase().email().max(254),
  company: z.string().optional(),
});
```

### `src/app/actions.ts`

Use a server action. Example structure:

```ts
"use server";

import { waitlistSchema } from "@/lib/validation";
import { addWaitlistContact } from "@/lib/waitlist";

export async function joinWaitlist(
  _prevState: WaitlistResult,
  formData: FormData,
): Promise<WaitlistResult> {
  const raw = {
    email: formData.get("email"),
    company: formData.get("company"),
  };

  const parsed = waitlistSchema.safeParse(raw);

  if (!parsed.success) {
    return { status: "error", message: "Enter a valid email." };
  }

  if (parsed.data.company) {
    return {
      status: "success",
      message: "You are on the list. We will send an update when early access opens.",
    };
  }

  try {
    await addWaitlistContact(parsed.data.email);
    return {
      status: "success",
      message: "You are on the list. We will send an update when early access opens.",
    };
  } catch (error) {
    return { status: "error", message: "Signup failed. Please try again." };
  }
}
```

Refine the exact typing and error handling during implementation.

### `src/lib/waitlist.ts`

Implement Resend server-only integration:

```ts
import { Resend } from "resend";

export async function addWaitlistContact(email: string) {
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    throw new Error("RESEND_API_KEY is missing");
  }

  const resend = new Resend(apiKey);

  const result = await resend.contacts.create({
    email,
    unsubscribed: false,
    properties: {
      source: process.env.WAITLIST_SOURCE ?? "verbatim_landing",
      signup_version: "v1",
    },
  });

  if (result.error) {
    const message = String(result.error.message ?? "").toLowerCase();
    if (message.includes("already") || message.includes("exists")) {
      return;
    }
    throw new Error(result.error.message ?? "Failed to create contact");
  }
}
```

If the current Resend SDK differs, adjust to match the latest API while preserving this behavior.

## README Requirements

Create a `README.md` with:

- Project summary
- Stack
- Local setup
- Required environment variables
- How to run dev server
- How to deploy
- Waitlist signup configuration
- Design notes

Include these commands:

```bash
pnpm install
pnpm dev
pnpm lint
pnpm build
```

## Deployment Requirements

This should be easy to deploy to Vercel.

Deployment steps in README:

1. Push repo to GitHub
2. Import project into Vercel
3. Add env vars:
   - `RESEND_API_KEY`
   - `NEXT_PUBLIC_SITE_URL`
   - optional `WAITLIST_SOURCE`
4. Deploy
5. Test waitlist form in production

## Acceptance Criteria

Codex is done only when all of these are true:

- The site builds successfully with `pnpm build` or `npm run build`.
- The site has a real waitlist form backed by a server-side action.
- The site has no exposed API keys.
- The page is responsive and looks good on mobile, tablet, and desktop.
- The page includes all required sections.
- The hero app mockup is implemented in code, not as a screenshot.
- The workflow diagram is implemented in code, not as a screenshot.
- The persona diagram is implemented in code, not as a screenshot.
- The copy clearly communicates that Verbatim is a workflow system, not a proofreading chatbot.
- The final public copy does not name direct competitors.
- The design feels premium and polished.
- The navigation anchors work.
- The form has loading, success, and error states.
- The page has SEO metadata, sitemap, robots, and Open Graph metadata.
- The code is organized into reusable components.
- Accessibility basics are implemented.
- There is a README with setup and deployment instructions.

## Stretch Goals

Do these only after the core implementation works:

- Add a dynamic Open Graph image route.
- Add a subtle animated workflow path.
- Add a small FAQ section near the footer.
- Add a small "Built around human approval" note in the final CTA.
- Add a `WaitlistForm` analytics callback only if analytics are explicitly configured.

## Optional FAQ Copy

If adding an FAQ, use these questions:

### Is Verbatim just another AI email writer?

No. Verbatim is built around a guided workflow: context, voice notes, strategic options, structure, drafting, critique, and final approval.

### What are recipient personas?

Recipient personas are simulated reviewers that help you evaluate how different kinds of people might read your message. They are designed to reveal unclear asks, weak framing, tone problems, and avoidable risk.

### Does Verbatim send emails automatically?

No. Verbatim is designed around human approval. You stay in control of the final message.

### What does local-first mean?

The product is designed around a workspace that lives on your machine, with your project files, notes, drafts, and workflow history organized locally.

## Final Instruction to Codex

Build the landing page now. Do not ask for more product direction. Make sensible design decisions where details are unspecified. Prioritize a beautiful, credible, production-ready page over a minimal scaffold.
