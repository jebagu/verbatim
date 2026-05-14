import { SlidersHorizontal } from "lucide-react";

import { SectionShell } from "@/components/site/section-shell";

const controls = [
  "More direct",
  "Warmer",
  "Shorter",
  "Less polished",
  "More like my last draft",
  "Less consultant-like",
  "Keep my roughness",
  "Stronger ask",
];

export function VoiceSection() {
  return (
    <SectionShell
      id="voice"
      eyebrow="Voice"
      title="Stronger writing that still sounds like you."
      description="Verbatim should not flatten your writing into polished AI sameness. Bring your own examples, prior drafts, notes, or voice dumps so the workflow can preserve your natural rhythm, directness, vocabulary, and level of polish while improving the message."
      align="left"
    >
      <div className="rounded-[28px] border border-slate-200 bg-white/80 p-6 shadow-sm">
        <div className="mb-5 flex items-center gap-3">
          <span className="flex size-11 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600">
            <SlidersHorizontal aria-hidden="true" className="size-5" />
          </span>
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-slate-500">
            Tone controls
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          {controls.map((control) => (
            <span
              key={control}
              className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm"
            >
              {control}
            </span>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
