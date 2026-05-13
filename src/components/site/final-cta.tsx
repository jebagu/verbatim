import { ShieldCheck } from "lucide-react";

import { WaitlistForm } from "@/components/site/waitlist-form";
import { Badge } from "@/components/ui/badge";

export function FinalCta() {
  return (
    <section id="waitlist" className="relative px-5 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl overflow-hidden rounded-[32px] border border-indigo-100 bg-[linear-gradient(135deg,rgba(255,255,255,0.86),rgba(238,246,255,0.88))] p-8 text-center shadow-[0_28px_90px_rgba(79,70,229,0.15)] backdrop-blur lg:p-14">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(79,70,229,0.12),transparent_44%)]"
        />
        <div className="relative">
          <Badge className="mb-5 border-teal-100 bg-white text-teal-700">
            <ShieldCheck aria-hidden="true" />
            Built around human approval
          </Badge>
          <h2 className="font-display text-4xl font-semibold tracking-normal text-slate-950 sm:text-5xl">
            Join the waitlist
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
            Be first to try Verbatim and help shape the future of professional
            writing.
          </p>
          <div className="mt-8">
            <WaitlistForm variant="centered" />
          </div>
        </div>
      </div>
    </section>
  );
}
