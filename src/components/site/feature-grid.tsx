import {
  Database,
  GitBranch,
  History,
  MessagesSquare,
  Mic,
  SearchCheck,
  Users,
} from "lucide-react";

import { AnimatedCard } from "@/components/site/animated-card";
import { SectionShell } from "@/components/site/section-shell";
import { features } from "@/lib/constants";

const icons = {
  Database,
  MessagesSquare,
  Mic,
  GitBranch,
  SearchCheck,
  History,
  Users,
};

export function FeatureGrid() {
  return (
    <SectionShell
      title="Built for high-stakes professional writing"
      description="The pieces you need when the email actually matters."
      className="border-y border-slate-900/10 bg-white/36"
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((feature) => {
          const Icon = icons[feature.icon as keyof typeof icons];
          return (
            <AnimatedCard key={feature.title}>
              <div className="h-full rounded-[24px] border border-slate-200 bg-white/82 p-5 shadow-sm">
                <div className="mb-5 flex size-11 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600">
                  <Icon aria-hidden="true" className="size-5" />
                </div>
                <h3 className="text-base font-bold text-slate-950">
                  {feature.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {feature.description}
                </p>
              </div>
            </AnimatedCard>
          );
        })}
      </div>
    </SectionShell>
  );
}
