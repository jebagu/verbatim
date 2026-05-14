import { CheckCircle2 } from "lucide-react";

import { AnimatedCard } from "@/components/site/animated-card";
import { SectionShell } from "@/components/site/section-shell";

const questions = [
  "Did you make the right ask?",
  "Did you frame the issue correctly?",
  "Did you anticipate what the recipient will resist?",
  "Did you explain enough without overexplaining?",
  "Did you preserve your voice?",
  "Did you increase the odds of the response you want?",
];

export function StakesSection() {
  return (
    <SectionShell
      id="stakes"
      eyebrow="Stakes"
      title="The hard part is not sounding professional. It is getting the message right."
      description="Verbatim is not built for basic grammar fixes. It is built for the messages where a generic polished draft is not enough: investor follow-ups, client recommendations, sensitive internal notes, negotiations, partnership asks, and high-leverage replies."
      align="left"
      className="pt-10"
    >
      <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <AnimatedCard>
          <div className="rounded-[28px] border border-slate-200 bg-white/82 p-6 shadow-sm">
            <p className="text-base leading-8 text-slate-600">
              Before you send, Verbatim helps you ask: Is the ask clear? Is the
              framing right? Have I anticipated the recipient&apos;s concerns? Does
              the tone fit the relationship? Is this too vague, too long, too
              needy, or too blunt? Does it still sound like me?
            </p>
          </div>
        </AnimatedCard>
        <div className="grid gap-3 sm:grid-cols-2">
          {questions.map((question) => (
            <AnimatedCard key={question}>
              <div className="flex h-full gap-3 rounded-[22px] border border-slate-200 bg-white/76 p-4 shadow-sm">
                <CheckCircle2
                  aria-hidden="true"
                  className="mt-0.5 size-5 shrink-0 text-teal-600"
                />
                <p className="text-sm font-semibold leading-6 text-slate-700">
                  {question}
                </p>
              </div>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
