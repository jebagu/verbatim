"use client";

import { FormEvent, useState } from "react";
import { ArrowRight, Loader2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/cn";

type WaitlistResult =
  | { status: "idle" }
  | { status: "success"; message: string }
  | { status: "error"; message: string };

const initialState: WaitlistResult = { status: "idle" };
const waitlistEndpoint = process.env.NEXT_PUBLIC_WAITLIST_ENDPOINT;

type WaitlistFormProps = {
  variant?: "hero" | "centered";
};

export function WaitlistForm({ variant = "hero" }: WaitlistFormProps) {
  const [state, setState] = useState<WaitlistResult>(initialState);
  const [isPending, setIsPending] = useState(false);
  const messageId = `${variant}-waitlist-message`;

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    const company = String(formData.get("company") ?? "").trim();

    if (company) {
      setState({
        status: "success",
        message: "You are on the list. We will send an update when early access opens.",
      });
      form.reset();
      return;
    }

    const email = String(formData.get("email") ?? "").trim();

    if (!email || !email.includes("@")) {
      setState({ status: "error", message: "Enter a valid email." });
      return;
    }

    if (!waitlistEndpoint) {
      setState({
        status: "error",
        message: "The live waitlist is not connected on this static preview yet.",
      });
      return;
    }

    setIsPending(true);

    try {
      const response = await fetch(waitlistEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, source: "verbatim_landing" }),
      });

      if (!response.ok) {
        throw new Error("Signup failed");
      }

      setState({
        status: "success",
        message: "You are on the list. We will send an update when early access opens.",
      });
      form.reset();
    } catch {
      setState({ status: "error", message: "Signup failed. Please try again." });
    } finally {
      setIsPending(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
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
