import {
  ArrowRight,
  CircleDot,
  Mic,
  NotebookTabs,
  Sparkles,
  Users,
} from "lucide-react";

import { SectionShell } from "@/components/site/section-shell";
import { workflowSteps } from "@/lib/constants";

const waveform = [22, 36, 18, 52, 34, 64, 30, 46, 28, 58, 24, 42];

export function WorkflowDiagram() {
  return (
    <SectionShell
      id="workflow"
      eyebrow="Workflow"
      title="A writing laboratory, not a prompt box"
      description="Verbatim separates the hard parts of professional communication so you can make better decisions before the final draft appears."
      className="border-y border-slate-900/10 bg-white/38"
    >
      <div className="relative rounded-[32px] border border-slate-200 bg-white/64 p-5 shadow-[0_24px_80px_rgba(15,23,42,0.08)] backdrop-blur lg:p-8">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7">
          {workflowSteps.map((step, index) => (
            <div key={step.title} className="relative">
              <div className="h-full rounded-[24px] border border-slate-200 bg-white p-4 shadow-sm">
                <div className="mb-4 flex items-center justify-between">
                  <span className="flex size-9 items-center justify-center rounded-full bg-indigo-600 text-sm font-bold text-white">
                    {step.number}
                  </span>
                  {index < workflowSteps.length - 1 ? (
                    <ArrowRight
                      aria-hidden="true"
                      className="hidden size-5 text-indigo-300 xl:block"
                    />
                  ) : (
                    <Sparkles aria-hidden="true" className="size-5 text-amber-500" />
                  )}
                </div>
                <h3 className="text-base font-bold text-slate-950">{step.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
          <FloatingCard title="Workspace context" icon={<NotebookTabs />}>
            {["Investor notes", "Past thread", "Product milestone", "Pilot update"].map(
              (item) => (
                <div
                  key={item}
                  className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-medium text-slate-600"
                >
                  {item}
                </div>
              ),
            )}
          </FloatingCard>
          <FloatingCard title="Voice brain dump 1:28" icon={<Mic />}>
            <div className="flex h-20 items-end gap-1 rounded-2xl bg-slate-950 px-4 py-3">
              <span className="mb-5 size-2 rounded-full bg-red-500" />
              {waveform.map((height, index) => (
                <span
                  key={`${height}-${index}`}
                  className="w-full rounded-full bg-teal-300"
                  style={{ height }}
                />
              ))}
            </div>
          </FloatingCard>
          <FloatingCard title="Build persona" icon={<Users />}>
            {["Skeptical investor", "Busy partner", "Associate filter"].map((item) => (
              <div
                key={item}
                className="rounded-xl bg-teal-50 px-3 py-2 text-xs font-semibold text-teal-700"
              >
                {item}
              </div>
            ))}
          </FloatingCard>
          <FloatingCard title="Strategic options" icon={<Sparkles />}>
            {["Option A: Traction-first", "Option B: Direct ask", "Option C: Thesis-first"].map(
              (item) => (
                <div
                  key={item}
                  className="rounded-xl bg-indigo-50 px-3 py-2 text-xs font-semibold text-indigo-700"
                >
                  {item}
                </div>
              ),
            )}
          </FloatingCard>
          <FloatingCard title="Critique panel" icon={<CircleDot />}>
            {[
              ["Clarity", 5],
              ["Tone", 4],
              ["Leverage", 4],
              ["Risk", 2],
            ].map(([label, count]) => (
              <div key={label} className="flex items-center justify-between gap-3">
                <span className="text-xs font-semibold text-slate-600">{label}</span>
                <span className="flex gap-1">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <span
                      key={index}
                      className={`size-2 rounded-full ${
                        index < Number(count) ? "bg-indigo-500" : "bg-slate-200"
                      }`}
                    />
                  ))}
                </span>
              </div>
            ))}
          </FloatingCard>
        </div>
      </div>
    </SectionShell>
  );
}

function FloatingCard({
  title,
  icon,
  children,
}: {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-[24px] border border-slate-200 bg-white/88 p-4 shadow-[0_18px_44px_rgba(15,23,42,0.08)]">
      <div className="mb-4 flex items-center gap-2 text-sm font-bold text-slate-950">
        <span className="flex size-8 items-center justify-center rounded-2xl bg-slate-100 text-indigo-600 [&_svg]:size-4">
          {icon}
        </span>
        {title}
      </div>
      <div className="space-y-2">{children}</div>
    </div>
  );
}
