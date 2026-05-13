"use server";

import { addWaitlistContact, WaitlistConfigError } from "@/lib/waitlist";
import { waitlistSchema } from "@/lib/validation";

export type WaitlistResult =
  | { status: "idle" }
  | { status: "success"; message: string }
  | { status: "error"; message: string };

const successMessage =
  "You are on the list. We will send an update when early access opens.";

export async function joinWaitlist(
  _prevState: WaitlistResult,
  formData: FormData,
): Promise<WaitlistResult> {
  const company = String(formData.get("company") ?? "").trim();

  if (company) {
    return {
      status: "success",
      message: successMessage,
    };
  }

  const parsed = waitlistSchema.safeParse({
    email: formData.get("email"),
    company,
  });

  if (!parsed.success) {
    return { status: "error", message: "Enter a valid email." };
  }

  try {
    await addWaitlistContact(parsed.data.email);

    return {
      status: "success",
      message: successMessage,
    };
  } catch (error) {
    if (error instanceof WaitlistConfigError) {
      return { status: "error", message: error.message };
    }

    return { status: "error", message: "Signup failed. Please try again." };
  }
}
