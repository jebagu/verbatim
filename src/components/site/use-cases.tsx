import {
  Briefcase,
  Cog,
  Handshake,
  Lightbulb,
  Rocket,
  Target,
} from "lucide-react";

import { AnimatedCard } from "@/components/site/animated-card";
import { SectionShell } from "@/components/site/section-shell";
import { useCases } from "@/lib/constants";

const icons = {
  Rocket,
  Briefcase,
  Handshake,
  Target,
  Lightbulb,
  Cog,
};

export function UseCases() {
  return (
    <SectionShell
      id="use-cases"
      eyebrow="Use cases"
      title="For people whose words matter"
      align="left"
    >
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {useCases.map((item) => {
          const Icon = icons[item.icon as keyof typeof icons];
          return (
            <AnimatedCard key={item.title}>
              <div className="flex h-full gap-4 rounded-[24px] border border-slate-200 bg-white/80 p-5 shadow-sm">
                <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-slate-100 text-indigo-600">
                  <Icon aria-hidden="true" className="size-5" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-950">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {item.description}
                  </p>
                </div>
              </div>
            </AnimatedCard>
          );
        })}
      </div>
    </SectionShell>
  );
}
