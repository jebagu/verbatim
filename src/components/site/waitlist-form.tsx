"use client";

import { useActionState } from "react";
import { ArrowRight, Loader2 } from "lucide-react";

import { joinWaitlist, type WaitlistResult } from "@/app/actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/cn";

const initialState: WaitlistResult = { status: "idle" };

type WaitlistFormProps = {
  variant?: "hero" | "centered";
};

export function WaitlistForm({ variant = "hero" }: WaitlistFormProps) {
  const [state, formAction, isPending] = useActionState(
    joinWaitlist,
    initialState,
  );
  const messageId = `${variant}-waitlist-message`;

  return (
    <form
      action={formAction}
      className={cn(
        "w-full",
        variant === "centered" && "mx-auto max-w-xl",
      )}
    >
      <div
        className={cn(
          "flex w-full flex-col gap-3 rounded-[28px] border border-slate-200 bg-white/68 p-2 shadow-[0_16px_48px_rgba(15,23,42,0.08)] backdrop-blur sm:flex-row",
          variant === "centered" && "bg-white/78",
        )}
      >
        <label className="sr-only" htmlFor={`${variant}-email`}>
          Email address
        </label>
        <Input
          id={`${variant}-email`}
          name="email"
          type="email"
          autoComplete="email"
          placeholder="Enter your email"
          aria-describedby={messageId}
          disabled={isPending}
          required
          className="border-transparent bg-transparent shadow-none focus-visible:border-indigo-500"
        />
        <label className="sr-only" htmlFor={`${variant}-company`}>
          Company
        </label>
        <input
          id={`${variant}-company`}
          name="company"
          tabIndex={-1}
          autoComplete="off"
          className="hidden"
          aria-hidden="true"
        />
        <Button type="submit" size="lg" disabled={isPending} className="sm:min-w-44">
          {isPending ? (
            <>
              <Loader2 className="animate-spin" aria-hidden="true" />
              Joining
            </>
          ) : (
            <>
              Join the waitlist
              <ArrowRight aria-hidden="true" />
            </>
          )}
        </Button>
      </div>
      <p
        id={messageId}
        aria-live="polite"
        className={cn(
          "mt-3 min-h-6 text-sm",
          state.status === "success" && "font-medium text-teal-700",
          state.status === "error" && "font-medium text-red-600",
          state.status === "idle" && "text-slate-500",
          variant === "centered" && "text-center",
        )}
      >
        {state.status === "idle"
          ? "No spam. Occasional product updates only."
          : state.message}
      </p>
    </form>
  );
}
