"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";

import { WaitlistForm } from "@/components/site/waitlist-form";
import { Button } from "@/components/ui/button";

export function FinalCta() {
  const [showEmailForm, setShowEmailForm] = useState(false);

  return (
    <section id="pricing" className="relative px-5 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl overflow-hidden rounded-[32px] border border-indigo-100 bg-[linear-gradient(135deg,rgba(255,255,255,0.9),rgba(238,246,255,0.9))] p-8 shadow-[0_28px_90px_rgba(79,70,229,0.15)] backdrop-blur lg:p-14">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(79,70,229,0.12),transparent_44%)]"
        />
        <div className="relative grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-indigo-600">
              Pricing
            </p>
            <h2 className="font-display mt-4 text-4xl font-semibold tracking-normal text-slate-950 sm:text-5xl">
              Try Verbatim for one high-stakes week.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
              Use the full workflow on the messages that actually matter:
              investor follow-ups, client notes, partnership asks,
              negotiations, sensitive internal communication, and complex
              replies.
            </p>
          </div>
          <div className="rounded-[28px] border border-slate-200 bg-white/86 p-5 shadow-[0_18px_54px_rgba(15,23,42,0.1)]">
            <div className="border-b border-slate-200 pb-5">
              <p className="text-sm font-semibold text-slate-500">One-week trial</p>
              <div className="mt-3 flex flex-wrap items-end gap-3">
                <span className="font-display text-6xl font-semibold leading-none text-slate-950">
                  $20
                </span>
                <div className="pb-1 text-sm font-semibold leading-6 text-slate-500">
                  <p>for one week</p>
                  <p>Then $100/month</p>
                </div>
              </div>
            </div>
            <ul className="my-5 space-y-3">
              {[
                "Guided workflow for context, intent, strategy, draft, critique, and finalization",
                "Recipient modeling and strategic options before drafting",
                "Voice-aware rewriting using your notes, examples, and prior drafts",
                "Thread-aware drafting for complex email chains",
                "Version history for alternate approaches and final candidates",
              ].map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-6 text-slate-600">
                  <CheckCircle2
                    aria-hidden="true"
                    className="mt-0.5 size-5 shrink-0 text-teal-600"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            {showEmailForm ? (
              <WaitlistForm
                variant="centered"
                buttonLabel="Submit email"
                pendingLabel="Saving"
                idleMessage="Enter the email you want to use for checkout access."
                successMessage="Got it. We will send checkout access to this email."
                unavailableMessage="Checkout email capture is not connected on this static preview yet."
                source="verbatim_pricing_trial"
              />
            ) : (
              <Button
                type="button"
                size="lg"
                className="w-full"
                onClick={() => setShowEmailForm(true)}
              >
                Start the one-week trial
                <ArrowRight aria-hidden="true" />
              </Button>
            )}
            <p className="mt-4 text-center text-sm font-medium text-slate-500">
              Built for important messages, not inbox busywork.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
