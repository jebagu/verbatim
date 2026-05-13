import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { navLinks } from "@/lib/constants";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-900/10 bg-[#fbfaf7]/78 px-5 py-4 backdrop-blur-xl sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
        <a
          href="#top"
          className="focus-ring rounded-full text-lg font-bold tracking-normal text-slate-950"
          aria-label="Verbatim home"
        >
          Verbatim
        </a>
        <nav
          className="hidden items-center gap-1 rounded-full border border-slate-200 bg-white/60 p-1 md:flex"
          aria-label="Primary navigation"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              className="focus-ring rounded-full px-3 py-2 text-sm font-medium text-slate-600 transition hover:bg-white hover:text-slate-950"
              href={link.href}
            >
              {link.label}
            </a>
          ))}
        </nav>
        <Button asChild size="sm">
          <a href="#waitlist">
            Join waitlist
            <ArrowRight aria-hidden="true" />
          </a>
        </Button>
      </div>
    </header>
  );
}
