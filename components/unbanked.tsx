import { Check } from "lucide-react";

import { WalletCard } from "@/components/wallet-card";

const points = ["No bank account", "No credit check", "No monthly fee"];

export function Unbanked() {
  return (
    <section id="unbanked" className="scroll-mt-16 overflow-x-clip py-24 md:py-32">
      <div className="container grid items-center gap-14 lg:grid-cols-2">
        <div>
          <h2 className="font-display text-4xl font-semibold leading-[1.08] tracking-tight text-ink md:text-6xl">
            No bank account?{" "}
            <span className="bg-gradient-to-r from-charcoal via-silver-500 to-charcoal bg-clip-text text-transparent">
              No problem.
            </span>
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            A lot of commuters and vendors don&apos;t have a bank account. With
            UltraPay, all you need is your phone number to pay and get paid.
          </p>
          <ul className="mt-8 flex flex-wrap gap-3">
            {points.map((p) => (
              <li
                key={p}
                className="flex items-center gap-2 rounded-full border border-ink/10 bg-silver-50 px-4 py-2 text-sm font-semibold text-ink shadow-sm"
              >
                <Check className="h-4 w-4" strokeWidth={3} />
                {p}
              </li>
            ))}
          </ul>

          <div className="mt-10 max-w-xl rounded-3xl bg-silver-100 p-6">
            <h3 className="font-display text-xl font-semibold text-ink">A wallet, not a bank account</h3>
            <p className="mt-3 leading-relaxed text-charcoal-soft">
              Open an UltraPay wallet with your phone number and ID. There&apos;s
              no credit check and no monthly fee, and you can load cash onto it
              at any vendor.
            </p>
          </div>
        </div>

        <WalletCard />
      </div>
    </section>
  );
}
