export const navLinks = [
  { label: "Product", href: "#differentiation" },
  { label: "Workflow", href: "#workflow" },
  { label: "Personas", href: "#personas" },
  { label: "Use Cases", href: "#use-cases" },
  { label: "Pricing", href: "#pricing" },
];

export const sidebarItems = [
  "Home",
  "Threads",
  "Context",
  "Drafts",
  "Personas",
  "Templates",
  "Settings",
];

export const workflowStepper = [
  "Context",
  "Voice dump",
  "Build persona",
  "Options",
  "Draft",
  "Critique",
  "Finalize",
];

export const workflowSteps = [
  {
    number: "1",
    title: "Load context",
    description:
      "Paste the thread, upload notes, or describe the situation.",
  },
  {
    number: "2",
    title: "Dump the messy version",
    description:
      "Say what you mean before worrying about structure.",
  },
  {
    number: "3",
    title: "Model the recipient",
    description:
      "Surface what they care about, what they may resist, and what would make the next step easier.",
  },
  {
    number: "4",
    title: "Compare strategies",
    description:
      "Try direct ask, relationship-first, business-case lead, risk reduction, or other approaches.",
  },
  {
    number: "5",
    title: "Build the structure",
    description:
      "Decide the opening, framing, evidence, ask, objection handling, and close.",
  },
  {
    number: "6",
    title: "Draft and critique",
    description:
      "Review clarity, tone, specificity, leverage, risk, and recipient fit.",
  },
  {
    number: "7",
    title: "Finalize in your voice",
    description:
      "Make it sharper without making it sound generic.",
  },
];

export const differentiatorCards = [
  {
    title: "Typical chatbot",
    tone: "muted",
    bullets: [
      "Starts from a prompt",
      "Produces a draft quickly",
      "Leaves strategy mostly to you",
      "Often defaults to polished-generic language",
      "Makes it hard to compare approaches",
      "Rarely shows its reasoning as a writing process",
    ],
  },
  {
    title: "Verbatim",
    tone: "primary",
    bullets: [
      "Starts from context and intent",
      "Models the recipient",
      "Surfaces strategic options",
      "Structures the message before drafting",
      "Preserves your voice",
      "Critiques clarity, tone, leverage, specificity, and risk",
      "Keeps you in control of the final message",
    ],
  },
  {
    title: "Result",
    tone: "success",
    bullets: [
      "Clearer asks",
      "Better structure",
      "Stronger recipient fit",
      "Less generic wording",
      "More confidence before send",
    ],
  },
];

export const features = [
  {
    title: "Risk-based memory",
    description:
      "Remember goals, context, sensitivities, and avoidable mistakes.",
    icon: "Database",
  },
  {
    title: "Thread-aware drafting",
    description: "Paste an email chain and respond with the right context.",
    icon: "MessagesSquare",
  },
  {
    title: "Voice-to-draft workflow",
    description: "Turn long rambles into crisp written intent.",
    icon: "Mic",
  },
  {
    title: "Option generation",
    description: "Compare multiple strategic approaches before drafting.",
    icon: "GitBranch",
  },
  {
    title: "Critique loops",
    description: "Improve clarity, tone, leverage, precision, and risk.",
    icon: "SearchCheck",
  },
  {
    title: "Version history",
    description: "Keep every branch, rewrite, and final candidate.",
    icon: "History",
  },
  {
    title: "Persona creation",
    description:
      "Paste a job title, profile, or everything you know about the recipient, then anticipate concerns from their point of view.",
    icon: "Users",
  },
  {
    title: "Style-aware drafting",
    description:
      "Bring examples, prior drafts, notes, or voice dumps so Verbatim can write closer to your natural style without flattening the message into generic prose.",
    icon: "FileText",
  },
];

export const useCases = [
  {
    title: "Founders",
    description:
      "Investor follow-ups, customer pilots, recruiting notes, board updates, and delicate asks where the first version is rarely the best version.",
    icon: "Rocket",
  },
  {
    title: "Executives",
    description:
      "Align teams around hard decisions, explain tradeoffs clearly, and send messages that reduce confusion instead of creating another meeting.",
    icon: "Briefcase",
  },
  {
    title: "Dealmakers",
    description:
      "Negotiate terms, reset expectations, follow up after complex conversations, and keep momentum without sounding needy.",
    icon: "Handshake",
  },
  {
    title: "Sales",
    description:
      "Turn call notes, objections, and buying committee context into follow-ups that feel specific, useful, and worth answering.",
    icon: "Target",
  },
  {
    title: "Creators",
    description:
      "Pitch sponsors, partners, agents, editors, and collaborators with a clear ask and a reason to care.",
    icon: "Lightbulb",
  },
  {
    title: "Operators",
    description:
      "Ask for decisions, clarify accountability, summarize tradeoffs, and move stalled projects forward.",
    icon: "Cog",
  },
];

export const personas = [
  {
    title: "Skeptical investor",
    initials: "SI",
    color: "bg-amber-100 text-amber-700",
    traits: ["Looks for proof", "Cares about downside", "Rejects vague updates"],
    feedback: "This sounds like a generic follow-up.",
    support: "Lead with what changed since the last conversation.",
  },
  {
    title: "Busy partner",
    initials: "BP",
    color: "bg-indigo-100 text-indigo-700",
    traits: ["Skims first", "Needs signal fast", "Wants a specific next step"],
    feedback: "The ask does not appear until the second paragraph.",
    support:
      "Move it into the first screen and make the meeting length specific.",
  },
  {
    title: "Associate filter",
    initials: "AF",
    color: "bg-teal-100 text-teal-700",
    traits: ["Summarizes quickly", "Needs context", "Flags unclear thesis"],
    feedback: "You are assuming they remember the product.",
    support:
      "Add one short reminder of the thesis before the traction detail.",
  },
];
