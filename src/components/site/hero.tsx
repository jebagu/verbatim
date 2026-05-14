import { ArrowDownRight, CreditCard } from "lucide-react";

import { AppMockup } from "@/components/site/app-mockup";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section id="top" className="relative px-5 pb-16 pt-14 sm:px-6 lg:px-8 lg:pb-24 lg:pt-20">
      <div className="mx-auto grid min-w-0 max-w-7xl items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="relative z-10 min-w-0 max-w-[calc(100vw-2.5rem)] sm:max-w-none">
          <h1 className="font-display max-w-3xl text-4xl font-semibold leading-[1.02] tracking-normal text-slate-950 sm:text-6xl sm:leading-[0.98] lg:text-7xl">
            <span className="sm:hidden">
              Write
              <br />
              extraordinary
              <br />
              emails that get
              <br />
              the results
              <br />
              you want.
            </span>
            <span className="hidden sm:inline">
              Write extraordinary emails that get the results you want.
            </span>
          </h1>
          <p className="mt-6 max-w-[32ch] text-lg leading-8 text-slate-600 sm:max-w-2xl sm:text-xl">
            Verbatim turns messy thoughts, voice notes, email threads, and
            workspace context into extraordinary professional messages through
            a guided workflow.
          </p>
          <div className="mt-8 flex max-w-[calc(100vw-2.5rem)] flex-col gap-3 sm:max-w-none sm:flex-row">
            <Button asChild size="lg" className="w-full max-w-xs sm:w-auto">
              <a href="#pricing">
                Pricing
                <CreditCard aria-hidden="true" />
              </a>
            </Button>
            <Button variant="ghost" asChild className="w-full max-w-xs sm:w-auto">
              <a href="#workflow">
                See how it works
                <ArrowDownRight aria-hidden="true" />
              </a>
            </Button>
          </div>
        </div>
        <div className="relative min-w-0">
          <div
            aria-hidden="true"
            className="absolute -inset-10 rounded-full bg-[radial-gradient(circle,rgba(79,70,229,0.18),transparent_62%)] blur-2xl"
          />
          <AppMockup />
        </div>
      </div>
    </section>
  );
}
