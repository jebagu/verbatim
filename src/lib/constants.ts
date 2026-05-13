export const navLinks = [
  { label: "Product", href: "#product" },
  { label: "Workflow", href: "#workflow" },
  { label: "Personas", href: "#personas" },
  { label: "Use Cases", href: "#use-cases" },
  { label: "Waitlist", href: "#waitlist" },
];

export const trustChips = [
  "Workspace context",
  "Voice-to-draft",
  "Recipient personas",
  "Human approval",
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
      "Workspace files, pasted threads, recipient notes, and project background.",
  },
  {
    number: "2",
    title: "Voice brain dump",
    description:
      "Say the messy version first. Capture goals, worries, and half-formed thoughts.",
  },
  {
    number: "3",
    title: "Choose strategy",
    description: "Compare A / B / C approaches before committing to a draft.",
  },
  {
    number: "4",
    title: "Build the structure",
    description: "Decide the opening, ask, support, objections, and close.",
  },
  {
    number: "5",
    title: "Draft and critique",
    description: "Review clarity, tone, leverage, specificity, and risk.",
  },
  {
    number: "6",
    title: "Finalize",
    description: "Keep human control over the final message.",
  },
];

export const differentiatorCards = [
  {
    title: "Typical chatbot",
    tone: "muted",
    bullets: [
      "One-shot prompt",
      "Weak project memory",
      "Generic professional tone",
      "No visible process",
      "Hard to compare strategies",
    ],
  },
  {
    title: "Verbatim",
    tone: "primary",
    bullets: [
      "Staged writing workflow",
      "Workspace and thread context",
      "Multiple strategic options",
      "Recipient simulation",
      "Voice-preserving rewrites",
      "Critique before final polish",
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
    title: "Workspace memory",
    description:
      "Company background, active projects, goals, and writing preferences.",
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
    title: "Local-first design",
    description: "Your files and workflow live on your machine.",
    icon: "Laptop",
  },
  {
    title: "Human approval",
    description: "You stay in control of every final send.",
    icon: "UserCheck",
  },
];

export const useCases = [
  {
    title: "Founders",
    description: "Raise, recruit, sell, and build trust with sharper messages.",
    icon: "Rocket",
  },
  {
    title: "Executives",
    description: "Communicate strategy, decisions, and tradeoffs with precision.",
    icon: "Briefcase",
  },
  {
    title: "Dealmakers",
    description:
      "Move sensitive conversations forward without losing leverage.",
    icon: "Handshake",
  },
  {
    title: "Sales",
    description: "Write outreach and follow-ups that feel specific, not canned.",
    icon: "Target",
  },
  {
    title: "Creators",
    description: "Pitch partners, sponsors, booking agents, and collaborators.",
    icon: "Lightbulb",
  },
  {
    title: "Operators",
    description: "Align teams, unblock decisions, and drive outcomes.",
    icon: "Cog",
  },
];

export const personas = [
  {
    title: "Booking Agent",
    initials: "BA",
    color: "bg-amber-100 text-amber-700",
    traits: ["Time-poor", "Filters for legitimacy", "Wants clear ask"],
    feedback: "Your ask is still buried.",
    support: "Make the request impossible to miss in the first screen.",
  },
  {
    title: "Investor",
    initials: "IV",
    color: "bg-indigo-100 text-indigo-700",
    traits: ["Looks for signal", "Cares about downside", "Hates fluff"],
    feedback: "This sounds too needy.",
    support:
      "Lead with traction, timing, and why this conversation matters now.",
  },
  {
    title: "Busy Executive",
    initials: "BE",
    color: "bg-teal-100 text-teal-700",
    traits: ["Skims first", "Responds to structure", "Needs confidence"],
    feedback: "Lead with the business case.",
    support:
      "Use a clear headline, shorter paragraphs, and a concrete next step.",
  },
];
