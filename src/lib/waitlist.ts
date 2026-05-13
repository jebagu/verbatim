export class WaitlistConfigError extends Error {
  constructor(message = "Waitlist is not configured yet.") {
    super(message);
    this.name = "WaitlistConfigError";
  }
}

type ResendCreateResult = {
  error?: {
    message?: string | null;
    name?: string | null;
  } | null;
};

type ResendContactsClient = {
  contacts: {
    create(input: Record<string, unknown>): Promise<ResendCreateResult>;
  };
};

export async function addWaitlistContact(email: string) {
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    throw new WaitlistConfigError();
  }

  const { Resend } = await import("resend");
  const resend = new Resend(apiKey) as unknown as ResendContactsClient;

  const result = await resend.contacts.create({
    email,
    unsubscribed: false,
    properties: {
      source: process.env.WAITLIST_SOURCE ?? "verbatim_landing",
      signup_path: "/",
      signup_version: "v1",
    },
  });

  if (result.error) {
    const message = String(result.error.message ?? "").toLowerCase();

    if (
      message.includes("already") ||
      message.includes("exists") ||
      message.includes("duplicate")
    ) {
      return;
    }

    throw new Error(result.error.message ?? "Failed to create contact");
  }
}
