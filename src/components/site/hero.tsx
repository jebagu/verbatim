import { ArrowDownRight, CheckCircle2 } from "lucide-react";

import { AppMockup } from "@/components/site/app-mockup";
import { WaitlistForm } from "@/components/site/waitlist-form";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { trustChips } from "@/lib/constants";

export function Hero() {
  return (
    <section id="top" className="relative px-5 pb-16 pt-14 sm:px-6 lg:px-8 lg:pb-24 lg:pt-20">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="relative z-10">
          <Badge className="mb-6 border-indigo-100 bg-white/80 text-indigo-700">
            <CheckCircle2 aria-hidden="true" />
            Local-first professional writing workflow
          </Badge>
          <h1 className="font-display max-w-3xl text-5xl font-semibold leading-[0.98] tracking-normal text-slate-950 sm:text-6xl lg:text-7xl">
            Write the email you meant to send.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
            Verbatim turns messy thoughts, voice notes, email threads, and
            workspace context into extraordinary professional messages through
            a guided workflow.
          </p>
          <p className="mt-4 max-w-xl text-base font-medium leading-7 text-slate-700">
            A local-first writing workspace for people whose words carry
            consequences.
          </p>
          <div className="mt-7 flex flex-wrap gap-2">
            {trustChips.map((chip) => (
              <Badge key={chip}>{chip}</Badge>
            ))}
          </div>
          <div className="mt-8 max-w-2xl">
            <WaitlistForm />
          </div>
          <div className="mt-5">
            <Button variant="ghost" asChild>
              <a href="#workflow">
                See how it works
                <ArrowDownRight aria-hidden="true" />
              </a>
            </Button>
          </div>
        </div>
        <div className="relative">
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
