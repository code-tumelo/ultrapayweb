import { cn } from "@/lib/utils";

/** Charcoal-and-silver taxi check, used as a divider. */
export function CheckerStrip({ className }: { className?: string }) {
  return <div aria-hidden className={cn("checker h-5 w-full", className)} />;
}
