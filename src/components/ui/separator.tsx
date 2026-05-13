import * as React from "react";

import { cn } from "@/lib/cn";

function Separator({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="separator"
      role="separator"
      className={cn("h-px w-full bg-slate-200/70", className)}
      {...props}
    />
  );
}

export { Separator };
