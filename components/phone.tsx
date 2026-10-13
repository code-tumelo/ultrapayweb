import { Check } from "lucide-react";

import { QrSticker } from "@/components/qr-sticker";
import { cn } from "@/lib/utils";

// Illustrative values only, shown on the mock phone screens.
const ROUTE = "Soweto → Joburg CBD";
const REG = "BX 41 TT GP";

export function PhoneFrame({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative h-[500px] w-[250px] shrink-0 rounded-[2.4rem] border-[6px] border-neutral-800 bg-black shadow-[0_30px_60px_-20px_rgba(0,0,0,0.5)]",
        className
      )}
    >
      <div className="absolute left-1/2 top-2 z-10 h-4 w-20 -translate-x-1/2 rounded-full bg-neutral-900" />
      <div className="h-full overflow-hidden rounded-[1.9rem] bg-neutral-950 px-4 pb-5 pt-10">
        {children}
      </div>
    </div>
  );
}

const Label = ({ children }: { children: React.ReactNode }) => (
  <p className="text-xs font-semibold uppercase tracking-widest text-taxi">{children}</p>
);

/** The four screens of a fare: scan, confirm, paid, receipt. */
export function PhoneScreen({ step }: { step: number }) {
  switch (step) {
    case 0:
      return (
        <div className="flex h-full flex-col">
          <Label>Scan to pay</Label>
          <div className="relative mt-4 flex aspect-square items-center justify-center rounded-2xl bg-neutral-900">
            <QrSticker compact className="w-28" />
            <span className="absolute left-3 top-3 h-5 w-5 rounded-tl-md border-l-2 border-t-2 border-taxi" />
            <span className="absolute right-3 top-3 h-5 w-5 rounded-tr-md border-r-2 border-t-2 border-taxi" />
            <span className="absolute bottom-3 left-3 h-5 w-5 rounded-bl-md border-b-2 border-l-2 border-taxi" />
            <span className="absolute bottom-3 right-3 h-5 w-5 rounded-br-md border-b-2 border-r-2 border-taxi" />
            <span className="absolute inset-x-4 h-0.5 animate-scan rounded bg-taxi shadow-[0_0_12px_hsl(var(--taxi))]" />
          </div>
          <p className="mt-5 text-center text-sm text-gray-400">
            Point your camera at the taxi sticker
          </p>
        </div>
      );
    case 1:
      return (
        <div className="flex h-full flex-col">
          <Label>Confirm fare</Label>
          <div className="mt-4 rounded-2xl bg-neutral-900 p-4">
            <p className="text-xs text-gray-400">{ROUTE}</p>
            <p className="mt-1 font-display text-6xl font-bold leading-none text-white">
              R18.00
            </p>
            <p className="mt-3 text-xs text-gray-500">Taxi {REG}</p>
          </div>
          <div className="mt-6 flex justify-center gap-2">
            {[true, true, false, false].map((filled, i) => (
              <span
                key={i}
                className={cn(
                  "h-3 w-3 rounded-full border border-white/30",
                  filled && "border-taxi bg-taxi"
                )}
              />
            ))}
          </div>
          <div className="mt-auto rounded-md bg-taxi py-3 text-center text-sm font-bold uppercase tracking-wide text-black">
            Confirm with PIN
          </div>
        </div>
      );
    case 2:
      return (
        <div className="flex h-full flex-col items-center">
          <div className="mt-6 flex h-20 w-20 items-center justify-center rounded-full bg-taxi">
            <Check className="h-10 w-10 text-black" strokeWidth={3} />
          </div>
          <p className="mt-5 font-display text-4xl font-bold uppercase text-white">Paid</p>
          <p className="font-display text-3xl font-bold text-taxi">R18.00</p>
          <div className="mt-auto w-full rounded-2xl border border-white/10 bg-neutral-900 p-4">
            <p className="text-xs text-gray-400">Driver payout</p>
            <div className="mt-1 flex items-baseline justify-between">
              <span className="font-display text-2xl font-bold text-white">+ R18.00</span>
              <span className="text-xs font-semibold uppercase text-taxi">Settled</span>
            </div>
          </div>
        </div>
      );
    default:
      return (
        <div className="flex h-full flex-col">
          <Label>Trip receipt</Label>
          <div className="mt-4 divide-y divide-white/10 rounded-2xl bg-neutral-900 px-4 text-sm">
            {[
              ["Route", ROUTE],
              ["Time", "07:42"],
              ["Fare", "R18.00"],
              ["Taxi", REG],
            ].map(([k, v]) => (
              <div key={k} className="flex items-center justify-between gap-3 py-3">
                <span className="text-gray-400">{k}</span>
                <span className="text-right font-medium text-white">{v}</span>
              </div>
            ))}
          </div>
          <p className="mt-auto text-center text-xs text-gray-500">Receipt saved to your phone</p>
        </div>
      );
  }
}
