import { Check, Sparkles, X } from "lucide-react";

import { AnimatedCard } from "@/components/site/animated-card";
import { SectionShell } from "@/components/site/section-shell";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { differentiatorCards } from "@/lib/constants";

export function Differentiator() {
  return (
    <SectionShell
      id="differentiation"
      eyebrow="Product"
      title="Beyond the sentence level."
      description="Most AI writing tools can polish sentences. Verbatim helps with the harder part: context, intent, recipient psychology, structure, strategy, critique, and voice. The goal is not just a cleaner draft. The goal is a message that is better thought through before you send it."
    >
      <div className="grid gap-5 lg:grid-cols-3">
        {differentiatorCards.map((card) => {
          const Icon =
            card.tone === "muted" ? X : card.tone === "primary" ? Sparkles : Check;
          return (
            <AnimatedCard key={card.title}>
              <Card
                className={
                  card.tone === "primary"
                    ? "h-full border-indigo-200 bg-indigo-50/75 shadow-[0_24px_80px_rgba(79,70,229,0.14)]"
                    : "h-full"
                }
              >
                <CardHeader>
                  <div
                    className={`mb-4 flex size-11 items-center justify-center rounded-2xl ${
                      card.tone === "muted"
                        ? "bg-slate-100 text-slate-500"
                        : card.tone === "primary"
                          ? "bg-indigo-600 text-white"
                          : "bg-teal-100 text-teal-700"
                    }`}
                  >
                    <Icon aria-hidden="true" className="size-5" />
                  </div>
                  <CardTitle className="text-2xl">{card.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {card.bullets.map((bullet) => (
                      <li
                        key={bullet}
                        className="flex gap-3 text-sm leading-6 text-slate-600"
                      >
                        <span className="mt-2 size-1.5 rounded-full bg-indigo-400" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </AnimatedCard>
          );
        })}
      </div>
    </SectionShell>
  );
}
