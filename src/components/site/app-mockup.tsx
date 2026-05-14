import {
  ClipboardPaste,
  FileText,
  Home,
  Mail,
  Mic,
  Settings,
  Upload,
  Users,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { sidebarItems, workflowStepper } from "@/lib/constants";

const sidebarIcons = [Home, Mail, FileText, FileText, Users, ClipboardPaste, Settings];

export function AppMockup() {
  return (
    <div className="glass-panel relative w-full min-w-0 max-w-[calc(100vw-2.5rem)] overflow-hidden rounded-[32px] p-3 sm:max-w-full">
      <div className="overflow-hidden rounded-[26px] border border-slate-200/80 bg-white">
        <div className="flex items-center justify-between border-b border-slate-200 bg-slate-50/80 px-4 py-3">
          <div className="flex items-center gap-2">
            <span className="size-3 rounded-full bg-[#f87171]" />
            <span className="size-3 rounded-full bg-[#fbbf24]" />
            <span className="size-3 rounded-full bg-[#34d399]" />
          </div>
          <div className="hidden rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-500 sm:block">
            Verbatim workspace
          </div>
        </div>
        <div className="grid min-h-[620px] grid-cols-1 lg:grid-cols-[152px_1fr_226px]">
          <aside className="hidden border-r border-slate-200 bg-slate-50/70 p-3 lg:block">
            <div className="mb-5 px-2 py-3 text-sm font-bold text-slate-950">
              Verbatim
            </div>
            <div className="space-y-1">
              {sidebarItems.map((item, index) => {
                const Icon = sidebarIcons[index] ?? FileText;
                return (
                  <div
                    key={item}
                    className={`flex items-center gap-2 rounded-2xl px-3 py-2 text-xs font-medium ${
                      index === 0
                        ? "bg-indigo-50 text-indigo-700"
                        : "text-slate-500"
                    }`}
                  >
                    <Icon aria-hidden="true" className="size-4" />
                    {item}
                  </div>
                );
              })}
            </div>
          </aside>
          <div className="flex min-w-0 flex-col">
            <div className="border-b border-slate-200 bg-white px-4 py-4">
              <div className="flex gap-2 overflow-x-auto pb-1">
                {workflowStepper.map((step, index) => (
                  <div
                    key={step}
                    className={`flex shrink-0 items-center gap-2 rounded-full border px-3 py-2 text-xs font-semibold ${
                      index === 0
                        ? "border-indigo-200 bg-indigo-50 text-indigo-700"
                        : "border-slate-200 bg-white text-slate-500"
                    }`}
                  >
                    <span className="flex size-5 items-center justify-center rounded-full bg-white text-[10px]">
                      {index + 1}
                    </span>
                    {step}
                  </div>
                ))}
              </div>
            </div>
            <div className="flex-1 space-y-4 bg-gradient-to-br from-white to-slate-50 p-4 sm:p-6">
              <Message
                author="Verbatim"
                text="Let's build the investor follow-up. Start with what happened, what changed, and the response you want."
              />
              <Message
                author="You"
                text="Met Sarah two weeks ago. She liked the market but thought we were early. Since then we signed two pilots and shipped the dashboard view she asked about. Want to ask for a real meeting next week without sounding like I'm chasing."
                user
              />
              <Message
                author="Verbatim"
                text="Good. The follow-up should lead with what changed, then make a specific ask. Add the thread or notes if you want tighter recipient fit."
              />
              <div className="grid gap-2">
                <Button variant="secondary" size="sm">
                  <ClipboardPaste aria-hidden="true" />
                  Paste thread
                </Button>
                <Button variant="secondary" size="sm">
                  <FileText aria-hidden="true" />
                  Add investor notes
                </Button>
                <Button variant="secondary" size="sm">
                  <Upload aria-hidden="true" />
                  Upload milestone
                </Button>
              </div>
              <div className="rounded-[22px] border border-indigo-100 bg-indigo-50/60 p-4">
                <div className="mb-3 flex items-center justify-between">
                  <p className="text-sm font-semibold text-slate-950">
                    Strategy options forming
                  </p>
                  <Badge className="border-indigo-100 bg-white text-indigo-700">
                    Draft lab
                  </Badge>
                </div>
                <div className="grid gap-3 sm:grid-cols-3">
                  {["Traction-first", "Direct ask", "Thesis-first"].map((item) => (
                      <div
                        key={item}
                        className="rounded-2xl border border-white bg-white/80 p-3 text-xs font-medium text-slate-600 shadow-sm"
                      >
                        {item}
                      </div>
                    ))}
                </div>
                <div className="mt-4 rounded-2xl border border-white bg-white/80 p-3 text-xs leading-5 text-slate-600 shadow-sm">
                  <p className="font-semibold text-slate-950">Critique</p>
                  <p className="mt-1">
                    Move the ask into the first screen. Lead with what changed
                    since the last conversation. Make the next step specific.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <aside className="border-t border-slate-200 bg-slate-50/70 p-4 lg:border-l lg:border-t-0">
            <div className="mb-5">
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-slate-400">
                Context
              </p>
              <div className="space-y-2">
                {[
                  "Investor notes",
                  "Past email thread",
                  "Product milestone",
                  "Pilot customer update",
                ].map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-slate-200 bg-white px-3 py-2 text-xs font-medium text-slate-600"
                    >
                      {item}
                    </div>
                  ))}
              </div>
            </div>
            <div>
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-slate-400">
                Personas
              </p>
              <div className="space-y-3">
                {["Skeptical investor", "Busy partner", "Associate filter"].map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-slate-200 bg-white p-3 shadow-sm"
                  >
                    <div className="mb-2 flex items-center gap-2">
                      <span className="size-7 rounded-full bg-indigo-100" />
                      <span className="text-xs font-semibold text-slate-800">
                        {item}
                      </span>
                    </div>
                    <div className="h-1.5 rounded-full bg-slate-100">
                      <div className="h-1.5 w-2/3 rounded-full bg-indigo-400" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}

function Message({
  author,
  text,
  user = false,
}: {
  author: string;
  text: string;
  user?: boolean;
}) {
  return (
    <div className={`flex ${user ? "justify-end" : "justify-start"}`}>
      <div
        className={`max-w-[85%] rounded-[22px] border p-4 shadow-sm ${
          user
            ? "border-indigo-200 bg-indigo-600 text-white"
            : "border-slate-200 bg-white text-slate-700"
        }`}
      >
        <p className={`mb-2 text-xs font-bold ${user ? "text-indigo-100" : "text-slate-400"}`}>
          {author}
        </p>
        <p className="text-sm leading-6">{text}</p>
      </div>
    </div>
  );
}
