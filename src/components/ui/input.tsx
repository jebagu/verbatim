import * as React from "react";

import { cn } from "@/lib/cn";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "focus-ring flex h-12 w-full min-w-0 rounded-full border border-slate-200 bg-white/85 px-4 py-2 text-base text-slate-950 shadow-sm transition-colors placeholder:text-slate-400 focus-visible:border-indigo-500 md:text-sm",
        className,
      )}
      {...props}
    />
  );
}

export { Input };
