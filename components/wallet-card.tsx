import { ArrowDownLeft, ArrowUpRight } from "lucide-react";

// Illustrative values only.
const rows = [
  { icon: ArrowDownLeft, label: "Cash-in · Spaza shop", amount: "+ R50.00" },
  { icon: ArrowUpRight, label: "Fare · Soweto → Joburg CBD", amount: "− R18.00" },
];

/** A phone-number wallet, shown as a product card (no bank account needed). */
export function WalletCard() {
  return (
    <div className="relative mx-auto w-full max-w-md">
      <div
        aria-hidden
        className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-[radial-gradient(circle_at_60%_40%,#BFC3C8,rgba(230,231,233,0)_70%)] opacity-80"
      />
      <div className="card-ink rounded-3xl p-6 text-silver-50 shadow-[0_40px_70px_-30px_rgba(14,15,16,0.7)] ring-1 ring-ink/20 sm:p-8">
        <div className="flex items-center justify-between text-xs font-semibold tracking-[0.2em] text-silver-300">
          <span>ULTRAPAY WALLET</span>
          <span>081 234 5678</span>
        </div>
        <p className="mt-10 text-sm text-silver-300">Balance</p>
        <p className="font-display text-5xl font-semibold tracking-tight">R32.00</p>

        <div className="mt-8 divide-y divide-silver-50/10 rounded-2xl bg-silver-50/5 px-4 ring-1 ring-silver-50/10">
          {rows.map(({ icon: Icon, label, amount }) => (
            <div key={label} className="flex items-center gap-3 py-3.5">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-silver-50/10">
                <Icon className="h-4 w-4 text-silver-300" />
              </span>
              <span className="min-w-0 flex-1 truncate text-sm text-silver-300">{label}</span>
              <span className="text-sm font-semibold">{amount}</span>
            </div>
          ))}
        </div>
      </div>
      
    </div>
  );
}
