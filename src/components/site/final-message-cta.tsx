import { ArrowDownRight, ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";

export function FinalMessageCta() {
  return (
    <section className="relative px-5 pb-20 pt-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl rounded-[32px] border border-slate-200 bg-slate-950 p-8 text-white shadow-[0_28px_90px_rgba(15,23,42,0.18)] lg:p-12">
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <h2 className="font-display text-4xl font-semibold tracking-normal sm:text-5xl">
              Bring one important message.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-slate-200 sm:text-lg">
              Paste the thread, dump the messy version, compare strategies,
              critique the draft, and send something sharper.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <Button asChild size="lg" className="bg-white text-slate-950 hover:bg-slate-100">
              <a href="#pricing">
                Start the one-week trial
                <ArrowRight aria-hidden="true" />
              </a>
            </Button>
            <Button
              asChild
              variant="ghost"
              className="text-white hover:bg-white/10 hover:text-white"
            >
              <a href="#workflow">
                See the workflow
                <ArrowDownRight aria-hidden="true" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
