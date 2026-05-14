# Codex Task: Improve the Verbatim Landing Page

## Goal

Update the Verbatim landing page at `https://jebagu.github.io/verbatim/` so it more clearly positions Verbatim as a premium AI-assisted writing workflow for high-stakes professional communication.

The current page has the right core idea, but it should be sharper, more premium, more concrete, and more conversion-oriented. The main upgrade is to move from merely describing Verbatim to demonstrating Verbatim.

Verbatim should feel like:

> A better writing process for people whose words already matter.

Not:

> A generic AI email writer.

Not:

> A grammar checker.

Not:

> A remedial tool for people who cannot write.

Not:

> A blank chatbot with a nicer interface.

Make the edits directly in the landing page code. Preserve the existing visual direction where possible, but improve the copy, section order, CTAs, product mock content, and explanatory sections.

---

## Product positioning to use throughout

Use this positioning as the north star:

> Verbatim is a premium AI-assisted writing workflow for high-stakes professional communication.

The product is for already competent professionals who want important messages to become sharper, more strategic, more audience-aware, and more likely to produce the intended response.

The implicit promise:

> You already write well. Verbatim helps you think, structure, and communicate at a higher level when the message matters.

Use this conceptual distinction:

> Verbatim works beyond the sentence level.

That means it helps with:

- Context
- Intent
- Recipient theory of mind
- Strategy
- Structure
- Critique
- Voice
- Final polish

Do not say Verbatim works “before the sentence level.” Use “beyond the sentence level.”

---

## Hard guardrails

Do not add fake testimonials.

Do not add fake customer logos.

Do not add fake usage numbers.

Do not claim real case studies unless they already exist in the repo.

Do not claim persistent style profiles unless the product actually supports them.

Do not claim specific privacy, data retention, deletion, or model-training policies unless they already exist in the repo or product docs.

Do not make the product sound like it is for people who are bad at writing.

Do not overuse the word “AI.” The buyer is paying for better communication under pressure, not for AI as such.

Avoid generic SaaS hype. The tone should be precise, calm, serious, and premium.

Avoid copy like:

- “Write emails 10x faster”
- “Fix your writing”
- “Sound professional instantly”
- “Never worry about tone again”
- “AI writes it for you”
- “Grammar made easy”

Prefer copy like:

- “For messages too important to hand to a chatbot”
- “Write the important message better”
- “Think through the message before you send it”
- “Stronger strategy, structure, tone, and recipient fit”
- “Sharper messages, still in your voice”
- “Built for important messages, not inbox busywork”

---

## Implementation approach

1. Locate the landing page source file.
   - It may be a React component, static HTML, or a page file in a framework.
   - Search for the current hero text: `Write extraordinary emails that get the results you want`.
   - Search for the current pricing CTA: `Buy`.

2. Make the edits in the smallest reasonable number of files.
   - Keep the existing styling system.
   - Reuse existing section/card/button components where possible.
   - Do not add new dependencies unless absolutely necessary.

3. Preserve responsive behavior.
   - The hero, CTA, and product mockup must remain usable on mobile.
   - New sections should stack cleanly on small screens.

4. After editing, run the relevant build/test command if available.
   - Use the project’s package manager.
   - If there is no obvious build command, at least ensure the page compiles or renders locally according to the repo setup.

5. Produce a concise summary of changed sections and any assumptions.

---

## Desired page architecture

Reorder or extend the page into this structure:

1. Hero
2. Stakes section
3. Differentiation section
4. Workflow section
5. Product proof example
6. Persona / recipient modeling section
7. Feature grid, including style/voice preservation
8. Use cases
9. Trust / user control section
10. Pricing
11. FAQ
12. Final CTA

Do not make the page feel bloated. The new product proof, FAQ, and trust sections are more important than adding generic marketing filler.

---

## 1. Hero section

### Current issue

The current hero says:

> Write extraordinary emails that get the results you want.

This is decent but too generic. It could describe many AI email tools. Verbatim’s value is more specific: it gives professionals a better process for high-stakes communication.

### Replace with

Headline:

> For messages too important to hand to a chatbot.

Subheadline:

> Verbatim is a guided AI writing workflow for professionals who already write well, but want stronger strategy, structure, recipient fit, and voice when the message matters.

Primary CTA:

> Try it on one important message

Secondary CTA:

> See the workflow

Microcopy under CTAs, if there is room:

> Paste a thread, dump your intent, compare strategies, critique the draft, and finalize in your own voice.

### CTA changes

Replace the current hero CTA `Pricing` with:

> Try it on one important message

Keep a secondary CTA, but use:

> See the workflow

instead of a more generic phrase if possible.

### Hero visual

Keep the existing product mockup direction, but make the visible content more coherent and more premium.

The current mockup mentions an analytics product pilot and uses inconsistent personas like Booking Agent, Investor, and Busy Executive. Replace the mockup copy with one coherent scenario.

Use this scenario:

- A founder is following up with an investor after a first conversation.
- The founder has two new pilot customers and a shipped product milestone.
- The goal is to re-engage without sounding needy.

Suggested mockup content:

User input:

> Met Sarah two weeks ago. She liked the market but thought we were early. Since then we signed two pilots and shipped the dashboard view she asked about. Want to ask for a real meeting next week without sounding like I’m chasing.

Strategy options:

- Traction-first
- Direct ask
- Thesis-first

Context items:

- Investor notes
- Past email thread
- Product milestone
- Pilot customer update

Personas:

- Skeptical investor
- Busy partner
- Associate filter

Critique panel examples:

- Move the ask into the first screen.
- Lead with what changed since the last conversation.
- Make the next step specific.

---

## 2. Add a stakes section after the hero

### Purpose

Clarify that Verbatim is not remedial grammar help. It is for high-leverage communication where the strategic shape of the message matters.

### Add section headline

> The hard part is not sounding professional. It is getting the message right.

### Add body copy

> Verbatim is not built for basic grammar fixes. It is built for the messages where a generic polished draft is not enough: investor follow-ups, client recommendations, sensitive internal notes, negotiations, partnership asks, and high-leverage replies.

> Before you send, Verbatim helps you ask: Is the ask clear? Is the framing right? Have I anticipated the recipient’s concerns? Does the tone fit the relationship? Is this too vague, too long, too needy, or too blunt? Does it still sound like me?

### Optional bullets

If the design supports cards or bullets, include these:

- Did you make the right ask?
- Did you frame the issue correctly?
- Did you anticipate what the recipient will resist?
- Did you explain enough without overexplaining?
- Did you preserve your voice?
- Did you increase the odds of the response you want?

---

## 3. Update differentiation section

### Current section

The current section begins:

> More than “can you proofread this?”

and includes:

> Most AI writing tools start at the sentence level. Verbatim starts with intent, context, audience, structure, and the response you are trying to earn.

### Change the framing

Replace with:

Headline:

> Beyond the sentence level.

Body:

> Most AI writing tools can polish sentences. Verbatim helps with the harder part: context, intent, recipient psychology, structure, strategy, critique, and voice.

> The goal is not just a cleaner draft. The goal is a message that is better thought through before you send it.

### Update comparison lists

If the current comparison section has columns for `Typical chatbot`, `Verbatim`, and `Result`, keep that structure but update the copy.

Typical chatbot:

- Starts from a prompt
- Produces a draft quickly
- Leaves strategy mostly to you
- Often defaults to polished-generic language
- Makes it hard to compare approaches
- Rarely shows its reasoning as a writing process

Verbatim:

- Starts from context and intent
- Models the recipient
- Surfaces strategic options
- Structures the message before drafting
- Preserves your voice
- Critiques clarity, tone, leverage, specificity, and risk
- Keeps you in control of the final message

Result:

- Clearer asks
- Better structure
- Stronger recipient fit
- Less generic wording
- More confidence before send

---

## 4. Update workflow section

### Current headline

> A writing laboratory, not a prompt box.

Keep this. It is strong.

### Replace or refine body

Use:

> Verbatim separates the hard parts of professional communication so you can make better decisions before the final draft appears.

### Update workflow step copy

Use these steps:

1. **Load context**  
   Paste the thread, upload notes, or describe the situation.

2. **Dump the messy version**  
   Say what you mean before worrying about structure.

3. **Model the recipient**  
   Surface what they care about, what they may resist, and what would make the next step easier.

4. **Compare strategies**  
   Try direct ask, relationship-first, business-case lead, risk reduction, or other approaches.

5. **Build the structure**  
   Decide the opening, framing, evidence, ask, objection handling, and close.

6. **Draft and critique**  
   Review clarity, tone, specificity, leverage, risk, and recipient fit.

7. **Finalize in your voice**  
   Make it sharper without making it sound generic.

---

## 5. Add a product proof example section

### Purpose

This is the most important new section. The page needs to demonstrate the Verbatim workflow, not just describe it.

Place this section after the workflow section and before the feature grid.

### Section headline

> From messy context to a sharper message.

### Label

Add a small visible label:

> Illustrative example

This must be clearly marked as illustrative. Do not imply it is a real customer case study.

### Intro copy

> See how Verbatim turns a high-stakes professional situation into a clearer message: context first, strategy before drafting, critique before final polish.

### Scenario card

Title:

> Founder follow-up after an investor meeting

Body:

> A founder met an investor two weeks ago. The investor was interested but noncommittal. Since then, the company closed two pilot customers and shipped a key product milestone. The founder wants to follow up without sounding needy, overselling, or burying the ask.

### Messy input card

Title:

> Messy input

Body:

> Met Sarah at the fintech dinner. She liked the product but said timing may be early. Since then we got two pilots, one with Northstar and one with a smaller compliance team. Also shipped the dashboard she asked about. Want to ask if she is open to a real meeting next week. Need to sound confident, not like I’m chasing. Mention traction but not overdo it. Maybe say the timing changed? She cares about proof and downside. Keep it short.

### Recipient context card

Title:

> Recipient context

Body:

> Sarah is a partner at an early-stage fund. She liked the market but was unsure whether the product had enough pull. She responds to concise updates, evidence of momentum, and clear reasons to re-engage. She dislikes vague “checking in” emails.

### Strategy options card

Title:

> Strategic options

Options:

**Option A: Traction-first**  
Lead with what changed since the last conversation. Best if the goal is to make the follow-up feel justified rather than needy.

**Option B: Question-first**  
Open with a direct ask for a meeting. Best if the prior relationship is warm and the context is obvious.

**Option C: Thesis-first**  
Reframe the company around the market insight. Best if the investor needs to believe the opportunity is bigger than the current product.

### Recommended approach card

Title:

> Recommended approach

Body:

> Use traction-first. The key is to make the email feel like an update with a reason, not a generic follow-up. Put the change in circumstances in the first two lines, then ask for a specific next step.

### Draft card

Title:

> Draft

Body:

Subject: Quick update since the fintech dinner

Sarah, since we spoke two weeks ago, two things changed that make the timing more interesting.

We signed two pilot customers, including Northstar, and shipped the dashboard view you asked about during the dinner. The early pull is coming from compliance teams that need a faster way to spot operational risk without waiting on analyst cycles.

Would you be open to a 25-minute conversation next week? I think the company is now in a better place to discuss whether this fits your early-stage fintech thesis.

### Critique card

Title:

> Critique

Body:

> The ask is clear and early enough. The tone is confident without sounding entitled. The phrase “two things changed” gives the follow-up a reason to exist. Consider making the customer traction slightly more specific if the names are safe to mention. The final sentence could be shorter.

### Final version card

Title:

> Final version

Body:

Subject: Two updates since the fintech dinner

Sarah, since we spoke two weeks ago, two things changed that make the timing more interesting.

We signed two pilot customers, including Northstar, and shipped the dashboard view you asked about. The early pull is coming from compliance teams that need a faster way to spot operational risk without waiting on analyst cycles.

Would you be open to a 25-minute conversation next week? I think there is now enough signal to make the discussion useful.

Best,  
Alex

### Visual presentation

Use cards, panels, or a timeline. Do not dump this as one long block of text.

The section should make the workflow visible:

1. Messy input
2. Context
3. Strategy options
4. Recommended approach
5. Draft
6. Critique
7. Final version

If the page is becoming too long, show a condensed version on the page with expandable details if the codebase already has that pattern. Do not add a complex interactive component unless it is easy and consistent with the current code.

---

## 6. Update persona / recipient modeling section

### Current issue

The current section says:

> Create recipient personas with theory-of-mind style feedback so you can spot buried asks, weak framing, and tone problems before you send.

The concept is good, but the phrase “theory-of-mind style feedback” is a little academic. Also, the visible personas are not internally coherent with the example message.

### Replace headline

Use:

> See the message from the recipient’s side.

### Replace body

Use:

> Verbatim helps you anticipate how the reader will interpret the message: what they will skim, what they will resist, what feels vague, and what would make the next step easier to say yes to.

### Update persona examples

Use one coherent scenario. For the founder/investor follow-up scenario, use:

- Skeptical investor
- Busy partner
- Associate filter

Example feedback snippets:

- The ask does not appear until the second paragraph. Move it into the first screen.
- This sounds like a generic follow-up. Lead with what changed.
- The tone is warm, but the next step is vague. Offer a specific meeting length and timeframe.
- You are assuming they remember the product. Add one short reminder of the thesis.

---

## 7. Update feature grid

### Current headline

> Built for high-stakes professional writing

Keep this headline if it still fits the design.

### Current subheadline

> The pieces you need when the email actually matters.

This is good. Keep or slightly revise to:

> The pieces you need when the message actually matters.

### Keep these features, with refined copy

**Risk-based memory**  
Remember goals, context, sensitivities, and avoidable mistakes.

**Thread-aware drafting**  
Paste an email chain and respond with the right context.

**Voice-to-draft workflow**  
Turn long rambles into crisp written intent.

**Option generation**  
Compare multiple strategic approaches before drafting.

**Critique loops**  
Improve clarity, tone, leverage, precision, and risk.

**Version history**  
Keep every branch, rewrite, and final candidate.

**Persona creation**  
Paste a job title, profile, or everything you know about the recipient, then anticipate concerns from their point of view.

### Add this feature

**Style-aware drafting**  
Bring examples, prior drafts, notes, or voice dumps so Verbatim can write closer to your natural style without flattening the message into generic AI prose.

Use this safer phrasing unless persistent style profiles are actually implemented.

Do not say “upload writing samples to create a reusable style profile” unless that is true in the product.

---

## 8. Add or update style / voice preservation section

### Purpose

Answer the buyer objection: “Will this make me sound generic?”

This can be a standalone section or part of the feature grid. Prefer a standalone section if the design has room.

### Headline

> Stronger writing that still sounds like you.

### Body

> Verbatim should not flatten your writing into polished AI sameness. Bring your own examples, prior drafts, notes, or voice dumps so the workflow can preserve your natural rhythm, directness, vocabulary, and level of polish while improving the message.

### Optional control chips

If the design supports badges/chips, add:

- More direct
- Warmer
- Shorter
- Less polished
- More like my last draft
- Less consultant-like
- Keep my roughness
- Stronger ask

Do not overbuild. Simple chips or small cards are enough.

---

## 9. Update use cases

### Current headline

> For people whose words matter

Keep this headline. It is strong.

### Update cards to be situation-based

Replace current short generic copy with this:

**Founders**  
Investor follow-ups, customer pilots, recruiting notes, board updates, and delicate asks where the first version is rarely the best version.

**Executives**  
Align teams around hard decisions, explain tradeoffs clearly, and send messages that reduce confusion instead of creating another meeting.

**Dealmakers**  
Negotiate terms, reset expectations, follow up after complex conversations, and keep momentum without sounding needy.

**Sales**  
Turn call notes, objections, and buying committee context into follow-ups that feel specific, useful, and worth answering.

**Creators**  
Pitch sponsors, partners, agents, editors, and collaborators with a clear ask and a reason to care.

**Operators**  
Ask for decisions, clarify accountability, summarize tradeoffs, and move stalled projects forward.

---

## 10. Add a trust / user control section

### Purpose

Reduce friction before pricing without making unsupported privacy claims.

### Headline

> Your judgment stays in control.

### Body

> Verbatim is built for sensitive professional communication. It helps you reason through context, recipient dynamics, strategy, and risk, but you remain the final editor of every message.

### Optional supporting bullets

- You provide the context.
- Verbatim surfaces options and critique.
- You choose the strategy.
- You decide what to send.

### Privacy copy rule

If there is an existing privacy policy or official data-handling copy in the repo, link to it or summarize it accurately.

If there is no privacy policy or verified product data-handling language, do not invent one. Add a code comment or internal TODO asking for official privacy/data-handling copy before a public privacy FAQ is added.

Do not publicly display a vague privacy claim like “your data is always safe” unless the actual policy supports it.

---

## 11. Update pricing section

### Current headline

> Try Verbatim for one high-stakes week.

Keep this headline. It is good.

### Replace body copy

Use:

> Use the full workflow on the messages that actually matter: investor follow-ups, client notes, partnership asks, negotiations, sensitive internal communication, and complex replies.

### Pricing card

Keep:

> One-week trial  
> $20 then $100/month

If the design supports it, make the price clearer:

> $20 for one week  
> Then $100/month

### Pricing bullets

Use:

- Guided workflow for context, intent, strategy, draft, critique, and finalization
- Recipient modeling and strategic options before drafting
- Voice-aware rewriting using your notes, examples, and prior drafts
- Thread-aware drafting for complex email chains
- Version history for alternate approaches and final candidates

### CTA

Replace:

> Buy

With:

> Start the one-week trial

### Microcopy

Add:

> Built for important messages, not inbox busywork.

If cancellation is straightforward and true, add:

> Cancel anytime.

Only say “Cancel anytime” if that is true in the billing flow.

---

## 12. Add FAQ section

Add an FAQ near the bottom, after pricing or before final CTA. Use concise answers. If the current codebase already has an accordion component, use it. Otherwise simple stacked cards are fine.

### FAQ title

> Questions before you try it

### FAQ items

#### How is Verbatim different from ChatGPT?

ChatGPT gives you a blank prompt box. Verbatim gives you a guided workflow for high-stakes professional communication: context, intent, recipient modeling, strategy, structure, drafting, critique, and finalization. The goal is not just a polished draft. The goal is a better-thought-through message.

#### Who is Verbatim for?

Verbatim is for professionals whose messages carry leverage: founders, executives, operators, dealmakers, salespeople, consultants, creators, and anyone writing important asks, follow-ups, pitches, negotiations, updates, or sensitive notes.

#### Who is Verbatim not for?

It is probably not worth it if you only need basic grammar correction, casual email generation, or a faster way to clear low-stakes inbox tasks. Verbatim is built for messages where the strategy, tone, structure, and recipient fit matter.

#### Does Verbatim preserve my voice?

That is the goal. Verbatim helps make the message sharper without flattening it into generic AI prose. Bring your own notes, prior drafts, writing samples, or voice dumps so the workflow can stay closer to your natural style.

#### Can I upload writing samples?

Use this answer only if upload or paste support exists:

> You can bring prior drafts, examples, notes, or voice dumps into the workflow so Verbatim can write closer to your style.

Do not claim a persistent style profile unless it is implemented.

If upload support does not exist, change the question to:

> Can Verbatim match my writing style?

And answer:

> You can provide examples, notes, or prior drafts in the workflow to guide the tone and style of a specific message.

#### What kinds of messages is Verbatim best for?

Investor follow-ups, client recommendations, sales follow-ups, executive updates, partnership pitches, recruiting notes, negotiations, delicate feedback, internal alignment messages, and any professional email where the first version is rarely the best version.

#### Is this only for email?

Verbatim is currently focused on professional email and message workflows, but the process also fits many forms of high-stakes business communication: memos, updates, pitches, follow-ups, decision notes, and sensitive messages.

#### What happens after the trial?

After the one-week trial, the subscription continues at $100/month unless canceled. Use the exact billing behavior from the product if it differs.

#### Can I cancel?

Only add this if cancellation behavior is known and true.

If true, use:

> Yes. You can cancel before the trial ends or any time after.

If unknown, omit this FAQ until the billing behavior is confirmed.

---

## 13. Add final CTA section

At the bottom, before the footer, add a short final CTA.

Headline:

> Bring one important message.

Body:

> Paste the thread, dump the messy version, compare strategies, critique the draft, and send something sharper.

CTA:

> Start the one-week trial

Secondary link, optional:

> See the workflow

---

## Design and UX requirements

Preserve the premium feel.

Use existing spacing, typography, colors, cards, and grid patterns where possible.

Make new sections easy to skim.

Headings should tell the story by themselves:

1. For messages too important to hand to a chatbot.
2. The hard part is not sounding professional. It is getting the message right.
3. Beyond the sentence level.
4. A writing laboratory, not a prompt box.
5. From messy context to a sharper message.
6. See the message from the recipient’s side.
7. Stronger writing that still sounds like you.
8. For people whose words matter.
9. Your judgment stays in control.
10. Try Verbatim for one high-stakes week.
11. Questions before you try it.
12. Bring one important message.

Make sure the primary CTA appears in:

- Hero
- Pricing
- Final CTA

Make sure the secondary “See the workflow” CTA scrolls to or links to the workflow section if the page already supports anchor links. If not, add IDs to sections and implement simple anchor links.

Make buttons accessible:

- Use real buttons or links as appropriate.
- Preserve visible focus states.
- Do not rely only on color for meaning.

Keep mobile clean:

- Stack cards vertically.
- Avoid tiny text in mockups.
- Keep hero CTA visible early.
- Do not let the product mockup push the primary CTA too far down.

---

## Suggested section IDs

Use these if helpful:

- `#hero`
- `#stakes`
- `#differentiation`
- `#workflow`
- `#example`
- `#personas`
- `#features`
- `#voice`
- `#use-cases`
- `#trust`
- `#pricing`
- `#faq`

---

## Acceptance criteria

The updated landing page should satisfy these checks:

1. The hero clearly says what Verbatim is within five seconds.
2. The hero makes clear that Verbatim is for high-stakes professional communication, not basic grammar help.
3. The hero primary CTA is not `Pricing`.
4. The pricing CTA is not `Buy`.
5. The page includes the phrase or concept “beyond the sentence level.”
6. The page includes a stakes section explaining that the hard part is getting the message strategically right.
7. The page includes a product proof/example section labeled as illustrative.
8. The product proof shows messy input, recipient context, strategic options, critique, and final version.
9. The page includes a style/voice preservation section or feature.
10. The page does not claim persistent style profiles unless implemented.
11. The page does not contain fake testimonials, logos, metrics, or fake case studies.
12. The persona examples are coherent with the product proof scenario.
13. Use cases are situation-based, not just generic persona blurbs.
14. Pricing is framed around important messages and leverage.
15. The FAQ answers the main objections without unsupported claims.
16. The page remains responsive and visually consistent with the existing design.
17. The build passes, or any build issue is reported clearly.

---

## Final copy inventory

Use this as the main copy source while editing.

### Hero

**For messages too important to hand to a chatbot.**

Verbatim is a guided AI writing workflow for professionals who already write well, but want stronger strategy, structure, recipient fit, and voice when the message matters.

Primary CTA: Try it on one important message  
Secondary CTA: See the workflow

Microcopy: Paste a thread, dump your intent, compare strategies, critique the draft, and finalize in your own voice.

### Stakes

**The hard part is not sounding professional. It is getting the message right.**

Verbatim is not built for basic grammar fixes. It is built for the messages where a generic polished draft is not enough: investor follow-ups, client recommendations, sensitive internal notes, negotiations, partnership asks, and high-leverage replies.

Before you send, Verbatim helps you ask: Is the ask clear? Is the framing right? Have I anticipated the recipient’s concerns? Does the tone fit the relationship? Is this too vague, too long, too needy, or too blunt? Does it still sound like me?

### Differentiation

**Beyond the sentence level.**

Most AI writing tools can polish sentences. Verbatim helps with the harder part: context, intent, recipient psychology, structure, strategy, critique, and voice.

The goal is not just a cleaner draft. The goal is a message that is better thought through before you send it.

### Workflow

**A writing laboratory, not a prompt box.**

Verbatim separates the hard parts of professional communication so you can make better decisions before the final draft appears.

### Product proof

**From messy context to a sharper message.**

Illustrative example

See how Verbatim turns a high-stakes professional situation into a clearer message: context first, strategy before drafting, critique before final polish.

### Persona

**See the message from the recipient’s side.**

Verbatim helps you anticipate how the reader will interpret the message: what they will skim, what they will resist, what feels vague, and what would make the next step easier to say yes to.

### Voice

**Stronger writing that still sounds like you.**

Verbatim should not flatten your writing into polished AI sameness. Bring your own examples, prior drafts, notes, or voice dumps so the workflow can preserve your natural rhythm, directness, vocabulary, and level of polish while improving the message.

### Features

**Built for high-stakes professional writing**

The pieces you need when the message actually matters.

### Use cases

**For people whose words matter**

### Trust

**Your judgment stays in control.**

Verbatim is built for sensitive professional communication. It helps you reason through context, recipient dynamics, strategy, and risk, but you remain the final editor of every message.

### Pricing

**Try Verbatim for one high-stakes week.**

Use the full workflow on the messages that actually matter: investor follow-ups, client notes, partnership asks, negotiations, sensitive internal communication, and complex replies.

$20 for one week  
Then $100/month

CTA: Start the one-week trial

Microcopy: Built for important messages, not inbox busywork.

### FAQ

**Questions before you try it**

### Final CTA

**Bring one important message.**

Paste the thread, dump the messy version, compare strategies, critique the draft, and send something sharper.

CTA: Start the one-week trial
