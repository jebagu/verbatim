import { CheckCircle2 } from "lucide-react";

import { SectionShell } from "@/components/site/section-shell";

const controlPoints = [
  "You provide the context.",
  "Verbatim surfaces options and critique.",
  "You choose the strategy.",
  "You decide what to send.",
];

export function TrustSection() {
  return (
    <SectionShell
      id="trust"
      eyebrow="Control"
      title="Your judgment stays in control."
      description="Verbatim is built for sensitive professional communication. It helps you reason through context, recipient dynamics, strategy, and risk, but you remain the final editor of every message."
      className="border-y border-slate-900/10 bg-white/36"
    >
      {/* TODO: Add official privacy and data-handling copy when product policy is verified. */}
      <div className="mx-auto grid max-w-4xl gap-3 sm:grid-cols-2">
        {controlPoints.map((point) => (
          <div
            key={point}
            className="flex gap-3 rounded-[22px] border border-slate-200 bg-white/84 p-4 shadow-sm"
          >
            <CheckCircle2
              aria-hidden="true"
              className="mt-0.5 size-5 shrink-0 text-teal-600"
            />
            <p className="text-sm font-semibold leading-6 text-slate-700">
              {point}
            </p>
          </div>
        ))}
      </div>
    </SectionShell>
  );
}
