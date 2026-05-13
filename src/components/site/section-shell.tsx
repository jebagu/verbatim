import type { ReactNode } from "react";

import { cn } from "@/lib/cn";

type SectionShellProps = {
  id?: string;
  eyebrow?: string;
  title: string;
  description?: string;
  children: ReactNode;
  className?: string;
  align?: "left" | "center";
};

export function SectionShell({
  id,
  eyebrow,
  title,
  description,
  children,
  className,
  align = "center",
}: SectionShellProps) {
  return (
    <section id={id} className={cn("relative px-5 py-20 sm:px-6 lg:px-8", className)}>
      <div className="mx-auto max-w-7xl">
        <div
          className={cn(
            "mb-12 max-w-3xl",
            align === "center" && "mx-auto text-center",
          )}
        >
          {eyebrow ? (
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-indigo-600">
              {eyebrow}
            </p>
          ) : null}
          <h2 className="font-display text-3xl font-semibold tracking-normal text-slate-950 sm:text-4xl lg:text-5xl">
            {title}
          </h2>
          {description ? (
            <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
              {description}
            </p>
          ) : null}
        </div>
        {children}
      </div>
    </section>
  );
}
