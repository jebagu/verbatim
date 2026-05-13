import { ArrowRight, MailCheck } from "lucide-react";

import { SectionShell } from "@/components/site/section-shell";
import { Card } from "@/components/ui/card";
import { personas } from "@/lib/constants";

export function PersonaDiagram() {
  return (
    <SectionShell
      id="personas"
      eyebrow="Personas"
      title="See your email through their eyes"
      description="Create recipient personas with theory-of-mind style feedback so you can spot buried asks, weak framing, and tone problems before you send."
    >
      <div className="grid gap-5 lg:grid-cols-[1.05fr_0.9fr_1fr] lg:items-stretch">
        <Card className="p-5">
          <div className="mb-4 flex items-center gap-2">
            <span className="flex size-10 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600">
              <MailCheck aria-hidden="true" className="size-5" />
            </span>
            <div>
              <h3 className="font-bold text-slate-950">Current draft email</h3>
              <p className="text-sm text-slate-500">Subject: Partnership pilot opportunity</p>
            </div>
          </div>
          <div className="rounded-[20px] border border-slate-200 bg-slate-50 p-4 font-mono text-sm leading-7 text-slate-700">
            <p>Hi Taylor,</p>
            <br />
            <p>
              We have been building an analytics platform that helps teams
              surface operational insights faster. I think there could be a lot
              of value for your organization.
            </p>
            <br />
            <p>
              Would you be open to a quick call to explore a potential pilot? I
              would love to learn more about your priorities.
            </p>
            <br />
            <p>Best,</p>
            <p>Alex</p>
          </div>
        </Card>
        <div className="flex items-center justify-center">
          <ArrowRight aria-hidden="true" className="hidden size-8 text-indigo-300 lg:block" />
          <div className="grid w-full gap-3 lg:hidden">
            <div className="mx-auto h-8 w-px bg-indigo-200" />
          </div>
        </div>
        <div className="grid gap-4 lg:col-span-2 lg:grid-cols-2">
          <div className="space-y-4">
            {personas.map((persona) => (
              <div
                key={persona.title}
                className="rounded-[24px] border border-slate-200 bg-white/80 p-4 shadow-sm"
              >
                <div className="mb-3 flex items-center gap-3">
                  <span
                    className={`flex size-11 items-center justify-center rounded-full text-sm font-bold ${persona.color}`}
                  >
                    {persona.initials}
                  </span>
                  <div>
                    <h3 className="font-bold text-slate-950">{persona.title}</h3>
                    <p className="text-xs font-medium text-slate-500">
                      Recipient simulation
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
            ))}
          </div>
          <div className="space-y-4">
            {personas.map((persona) => (
              <div
                key={persona.feedback}
                className="rounded-[24px] border border-amber-200 bg-amber-50/75 p-4 shadow-sm"
              >
                <p className="text-sm font-bold text-amber-900">
                  {persona.feedback}
                </p>
                <p className="mt-2 text-sm leading-6 text-amber-950/75">
                  {persona.support}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
