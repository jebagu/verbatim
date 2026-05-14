import { SectionShell } from "@/components/site/section-shell";

const faqs = [
  {
    question: "How is Verbatim different from ChatGPT?",
    answer:
      "ChatGPT gives you a blank prompt box. Verbatim gives you a guided workflow for high-stakes professional communication: context, intent, recipient modeling, strategy, structure, drafting, critique, and finalization. The goal is not just a polished draft. The goal is a better-thought-through message.",
  },
  {
    question: "Who is Verbatim for?",
    answer:
      "Verbatim is for professionals whose messages carry leverage: founders, executives, operators, dealmakers, salespeople, consultants, creators, and anyone writing important asks, follow-ups, pitches, negotiations, updates, or sensitive notes.",
  },
  {
    question: "Who is Verbatim not for?",
    answer:
      "It is probably not worth it if you only need basic grammar correction, casual email generation, or a faster way to clear low-stakes inbox tasks. Verbatim is built for messages where the strategy, tone, structure, and recipient fit matter.",
  },
  {
    question: "Can Verbatim match my writing style?",
    answer:
      "You can provide examples, notes, prior drafts, or voice dumps in the workflow to guide the tone and style of a specific message. The goal is to make the message sharper without flattening it into generic prose.",
  },
  {
    question: "What kinds of messages is Verbatim best for?",
    answer:
      "Investor follow-ups, client recommendations, sales follow-ups, executive updates, partnership pitches, recruiting notes, negotiations, delicate feedback, internal alignment messages, and any professional email where the first version is rarely the best version.",
  },
  {
    question: "Is this only for email?",
    answer:
      "Verbatim is currently focused on professional email and message workflows, but the process also fits many forms of high-stakes business communication: memos, updates, pitches, follow-ups, decision notes, and sensitive messages.",
  },
  {
    question: "What happens after the trial?",
    answer:
      "The offer shown here is $20 for one week, then $100/month. If the live billing flow differs, this page should be updated to match the exact checkout behavior.",
  },
];

export function FaqSection() {
  return (
    <SectionShell
      id="faq"
      eyebrow="FAQ"
      title="Questions before you try it"
      align="left"
    >
      <div className="grid gap-4 md:grid-cols-2">
        {faqs.map((faq) => (
          <div
            key={faq.question}
            className="rounded-[24px] border border-slate-200 bg-white/82 p-5 shadow-sm"
          >
            <h3 className="text-base font-bold text-slate-950">{faq.question}</h3>
            <p className="mt-3 text-sm leading-6 text-slate-600">{faq.answer}</p>
          </div>
        ))}
      </div>
    </SectionShell>
  );
}
