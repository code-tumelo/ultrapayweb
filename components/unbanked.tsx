import { Check } from "lucide-react";

import { VendorScene } from "@/components/vendor-scene";

const points = ["No bank account", "No credit check", "No monthly fee"];

export function Unbanked() {
  return (
    <section id="unbanked" className="scroll-mt-16 py-24 md:py-32">
      <div className="container grid items-center gap-14 lg:grid-cols-2">
        <div>
          <h2 className="font-display text-5xl font-extrabold uppercase leading-[1.02] tracking-tight text-black md:text-7xl">
            No bank account?{" "}
            <span className="bg-taxi px-2 [box-decoration-break:clone]">No problem.</span>
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Most taxi commuters, and many vendors, don&apos;t have a bank
            account. With UltraPay, your phone number is enough to pay and to
            get paid.
          </p>
          <ul className="mt-8 flex flex-wrap gap-3">
            {points.map((p) => (
              <li
                key={p}
                className="flex items-center gap-2 rounded-md border-2 border-black bg-white px-4 py-2 text-sm font-bold uppercase tracking-wide text-black shadow-[3px_3px_0_0_#000]"
              >
                <Check className="h-4 w-4" strokeWidth={3} />
                {p}
              </li>
            ))}
          </ul>

          <div className="mt-10 max-w-xl border-l-8 border-taxi pl-5">
            <h3 className="font-display text-3xl font-bold uppercase leading-none text-black">
              A wallet, not a bank account
            </h3>
            <p className="mt-3 leading-relaxed text-neutral-700">
              Open an UltraPay wallet with your phone number and ID — no bank
              account, no credit check, no monthly fee. Top it up with cash at
              any vendor.
            </p>
          </div>
        </div>

        <VendorScene />
      </div>
    </section>
  );
}
