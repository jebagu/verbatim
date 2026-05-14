import { ArrowRight, CheckCircle2 } from "lucide-react";

import { AnimatedCard } from "@/components/site/animated-card";
import { SectionShell } from "@/components/site/section-shell";
import { Badge } from "@/components/ui/badge";

const strategyOptions = [
  {
    title: "Option A: Traction-first",
    body: "Lead with what changed since the last conversation. Best if the goal is to make the follow-up feel justified rather than needy.",
  },
  {
    title: "Option B: Question-first",
    body: "Open with a direct ask for a meeting. Best if the prior relationship is warm and the context is obvious.",
  },
  {
    title: "Option C: Thesis-first",
    body: "Reframe the company around the market insight. Best if the investor needs to believe the opportunity is bigger than the current product.",
  },
];

const exampleCards = [
  {
    label: "1",
    title: "Messy input",
    body: "Met Sarah at the fintech dinner. She liked the product but said timing may be early. Since then we got two pilots, one with Northstar and one with a smaller compliance team. Also shipped the dashboard she asked about. Want to ask if she is open to a real meeting next week. Need to sound confident, not like I'm chasing. Mention traction but not overdo it. Maybe say the timing changed? She cares about proof and downside. Keep it short.",
  },
  {
    label: "2",
    title: "Recipient context",
    body: "Sarah is a partner at an early-stage fund. She liked the market but was unsure whether the product had enough pull. She responds to concise updates, evidence of momentum, and clear reasons to re-engage. She dislikes vague checking-in emails.",
  },
  {
    label: "3",
    title: "Recommended approach",
    body: "Use traction-first. The key is to make the email feel like an update with a reason, not a generic follow-up. Put the change in circumstances in the first two lines, then ask for a specific next step.",
  },
  {
    label: "4",
    title: "Critique",
    body: "The ask is clear and early enough. The tone is confident without sounding entitled. The phrase two things changed gives the follow-up a reason to exist. Consider making the customer traction slightly more specific if the names are safe to mention. The final sentence could be shorter.",
  },
];

const finalVersion = `Subject: Two updates since the fintech dinner

Sarah, since we spoke two weeks ago, two things changed that make the timing more interesting.

We signed two pilot customers, including Northstar, and shipped the dashboard view you asked about. The early pull is coming from compliance teams that need a faster way to spot operational risk without waiting on analyst cycles.

Would you be open to a 25-minute conversation next week? I think there is now enough signal to make the discussion useful.

Best,
Alex`;

export function ProductExample() {
  return (
    <SectionShell
      id="example"
      eyebrow="Example"
      title="From messy context to a sharper message."
      description="See how Verbatim turns a high-stakes professional situation into a clearer message: context first, strategy before drafting, critique before final polish."
      className="border-y border-slate-900/10 bg-white/38"
    >
      <div className="mb-6 flex justify-center">
        <Badge className="border-indigo-100 bg-white text-indigo-700">
          Illustrative example
        </Badge>
      </div>

      <div className="grid gap-5 lg:grid-cols-[0.82fr_1.18fr]">
        <AnimatedCard>
          <div className="h-full rounded-[28px] border border-slate-200 bg-slate-950 p-6 text-white shadow-[0_24px_80px_rgba(15,23,42,0.18)]">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-teal-300">
              Scenario
            </p>
            <h3 className="mt-4 text-2xl font-semibold">
              Founder follow-up after an investor meeting
            </h3>
            <p className="mt-5 text-sm leading-7 text-slate-200">
              A founder met an investor two weeks ago. The investor was
              interested but noncommittal. Since then, the company closed two
              pilot customers and shipped a key product milestone. The founder
              wants to follow up without sounding needy, overselling, or
              burying the ask.
            </p>
            <div className="mt-6 space-y-3">
              {strategyOptions.map((option) => (
                <div
                  key={option.title}
                  className="rounded-[20px] border border-white/10 bg-white/8 p-4"
                >
                  <p className="text-sm font-bold text-white">{option.title}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    {option.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </AnimatedCard>

        <div className="grid gap-4 md:grid-cols-2">
          {exampleCards.map((card) => (
            <AnimatedCard key={card.title}>
              <div className="h-full rounded-[24px] border border-slate-200 bg-white/84 p-5 shadow-sm">
                <div className="mb-4 flex items-center gap-3">
                  <span className="flex size-9 items-center justify-center rounded-full bg-indigo-600 text-sm font-bold text-white">
                    {card.label}
                  </span>
                  <h3 className="text-base font-bold text-slate-950">
                    {card.title}
                  </h3>
                </div>
                <p className="text-sm leading-6 text-slate-600">{card.body}</p>
              </div>
            </AnimatedCard>
          ))}
        </div>
      </div>

      <div className="mt-5 grid gap-5 lg:grid-cols-[0.72fr_1.28fr]">
        <AnimatedCard>
          <div className="h-full rounded-[24px] border border-indigo-100 bg-indigo-50/70 p-5 shadow-sm">
            <div className="flex items-center gap-3">
              <CheckCircle2
                aria-hidden="true"
                className="size-5 shrink-0 text-indigo-600"
              />
              <h3 className="text-base font-bold text-slate-950">Draft path</h3>
            </div>
            <div className="mt-5 space-y-3">
              {[
                "Messy input",
                "Recipient context",
                "Strategic options",
                "Recommended approach",
                "Draft",
                "Critique",
                "Final version",
              ].map((step, index) => (
                <div key={step} className="flex items-center gap-3">
                  <span className="flex size-7 items-center justify-center rounded-full bg-white text-xs font-bold text-indigo-700">
                    {index + 1}
                  </span>
                  <span className="text-sm font-semibold text-slate-700">
                    {step}
                  </span>
                  {index < 6 ? (
                    <ArrowRight
                      aria-hidden="true"
                      className="ml-auto hidden size-4 text-indigo-300 sm:block"
                    />
                  ) : null}
                </div>
              ))}
            </div>
          </div>
        </AnimatedCard>

        <AnimatedCard>
          <div className="rounded-[24px] border border-slate-200 bg-white/88 p-5 shadow-sm">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-indigo-600">
              Final version
            </p>
            <div className="whitespace-pre-line rounded-[20px] border border-slate-200 bg-slate-50 p-5 font-mono text-sm leading-7 text-slate-700">
              {finalVersion}
            </div>
          </div>
        </AnimatedCard>
      </div>
    </SectionShell>
  );
}
