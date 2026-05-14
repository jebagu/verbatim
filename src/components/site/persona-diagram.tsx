import { ArrowRight, MailCheck } from "lucide-react";

import { SectionShell } from "@/components/site/section-shell";
import { Card } from "@/components/ui/card";
import { personas } from "@/lib/constants";

export function PersonaDiagram() {
  return (
    <SectionShell
      id="personas"
      eyebrow="Personas"
      title="See the message from the recipient's side."
      description="Verbatim helps you anticipate how the reader will interpret the message: what they will skim, what they will resist, what feels vague, and what would make the next step easier to say yes to."
    >
      <div className="grid gap-5 lg:grid-cols-[0.92fr_1.08fr] lg:items-stretch">
        <Card className="p-5">
          <div className="mb-4 flex items-center gap-2">
            <span className="flex size-10 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600">
              <MailCheck aria-hidden="true" className="size-5" />
            </span>
            <div>
              <h3 className="font-bold text-slate-950">Current draft email</h3>
              <p className="text-sm text-slate-500">Subject: Quick update since dinner</p>
            </div>
          </div>
          <div className="rounded-[20px] border border-slate-200 bg-slate-50 p-4 font-mono text-sm leading-7 text-slate-700">
            <p>Hi Sarah,</p>
            <br />
            <p>
              Just checking in after the fintech dinner. We have made some
              progress since we talked, including two new pilots and the
              dashboard view you asked about.
            </p>
            <br />
            <p>
              Would you be open to reconnecting sometime soon? I think the
              timing may be better now.
            </p>
            <br />
            <p>Best,</p>
            <p>Alex</p>
          </div>
        </Card>
        <div className="space-y-4">
          {personas.map((persona) => (
            <div
              key={persona.title}
              className="grid gap-4 rounded-[24px] border border-slate-200 bg-white/82 p-4 shadow-sm md:grid-cols-[minmax(190px,0.86fr)_1fr] md:items-stretch"
            >
              <div className="rounded-[20px] bg-slate-50 p-4">
                <div className="mb-3 flex items-center gap-3">
                  <span
                    className={`flex size-11 items-center justify-center rounded-full text-sm font-bold ${persona.color}`}
                  >
                    {persona.initials}
                  </span>
                  <div>
                    <h3 className="font-bold text-slate-950">{persona.title}</h3>
                    <p className="text-xs font-medium text-slate-500">
                      Recipient persona
                    </p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {persona.traits.map((trait) => (
                    <span
                      key={trait}
                      className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600"
                    >
                      {trait}
                    </span>
                  ))}
                </div>
              </div>
              <div className="relative rounded-[20px] border border-amber-200 bg-amber-50/75 p-4">
                <ArrowRight
                  aria-hidden="true"
                  className="absolute -left-6 top-1/2 hidden size-5 -translate-y-1/2 text-indigo-300 md:block"
                />
                <p className="text-sm font-bold text-amber-900">
                  {persona.feedback}
                </p>
                <p className="mt-2 text-sm leading-6 text-amber-950/75">
                  {persona.support}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
