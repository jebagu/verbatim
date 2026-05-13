import * as React from "react";

import { cn } from "@/lib/cn";

function Badge({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="badge"
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white/80 px-3 py-1 text-xs font-semibold text-slate-700 shadow-sm",
        className,
      )}
      {...props}
    />
  );
}

export { Badge };
