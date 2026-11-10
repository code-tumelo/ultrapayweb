"use client";

import { useRef, useState } from "react";
import {
  Building2,
  Handshake,
  Smartphone,
  Store,
  UserRound,
  Wallet,
} from "lucide-react";

import { SectionHeading } from "@/components/section-heading";
import { cn } from "@/lib/utils";

const audiences = [
  {
    id: "owners",
    tab: "Owners",
    icon: Building2,
    title: "Taxi owners & operators",
    description:
      "See exactly what each taxi brings in, by route and by shift. You'll also have proper records ready when the bank or insurer asks for them.",
  },
  {
    id: "associations",
    tab: "Associations",
    icon: Handshake,
    title: "Taxi associations & forums",
    description:
      "Every member, route and rank pays the same way, and the association gets clear reports on all of it.",
  },
  {
    id: "drivers",
    tab: "Drivers",
    icon: UserRound,
    title: "Drivers",
    description:
      "You get paid as soon as the trip ends. You don't need a float, you don't have to look for change, and you're not carrying cash home at night.",
  },
  {
    id: "vendors",
    tab: "Vendors",
    icon: Store,
    title: "Vendors & spaza shops",
    description:
      "Accept payments and wallet top-ups at your counter, and get your money the same day.",
  },
  {
    id: "unbanked",
    tab: "No bank account",
    icon: Wallet,
    title: "Customers without a bank account",
    description:
      "That's fine. You can use a wallet linked to your phone number and load cash onto it at any vendor.",
  },
  {
    id: "commuters",
    tab: "Commuters",
    icon: Smartphone,
    title: "Commuters",
    description:
      "Scan the sticker in the taxi, check the fare and pay. It works on any smartphone.",
  },
];

export function Audiences() {
  const [active, setActive] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  function onKeyDown(e: React.KeyboardEvent, i: number) {
    let next = i;
    if (e.key === "ArrowRight") next = (i + 1) % audiences.length;
    else if (e.key === "ArrowLeft") next = (i - 1 + audiences.length) % audiences.length;
    else if (e.key === "Home") next = 0;
    else if (e.key === "End") next = audiences.length - 1;
    else return;
    e.preventDefault();
    setActive(next);
    tabRefs.current[next]?.focus();
  }

  const current = audiences[active];
  const Icon = current.icon;

  return (
    <section id="audiences" className="scroll-mt-16 py-24 md:py-32">
      <div className="container">
        <SectionHeading
          eyebrow="Who it's for"
          title="For everyone on the route"
          description="You don't book rides with UltraPay. You use it to pay for the taxis you already take. Vendors, spaza shops and people without bank accounts can use it too."
        />

        <div className="mt-12">
          <div
            role="tablist"
            aria-label="Who UltraPay is for"
            className="-mx-6 flex gap-3 overflow-x-auto px-6 pb-3 sm:mx-0 sm:flex-wrap sm:px-0"
          >
            {audiences.map((a, i) => (
              <button
                key={a.id}
                ref={(el) => {
                  tabRefs.current[i] = el;
                }}
                role="tab"
                id={`tab-${a.id}`}
                aria-selected={i === active}
                aria-controls={`panel-${a.id}`}
                tabIndex={i === active ? 0 : -1}
                onClick={() => setActive(i)}
                onKeyDown={(e) => onKeyDown(e, i)}
                className={cn(
                  "shrink-0 rounded-full border px-5 py-2.5 text-sm font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2",
                  i === active
                    ? "border-ink bg-ink text-silver-50 shadow-md"
                    : "border-ink/10 bg-silver-50 text-charcoal-soft hover:border-ink/30 hover:text-ink"
                )}
              >
                {a.tab}
              </button>
            ))}
          </div>

          <div
            key={current.id}
            role="tabpanel"
            id={`panel-${current.id}`}
            aria-labelledby={`tab-${current.id}`}
            className="card-metal mt-6 animate-fade overflow-hidden rounded-3xl p-8 shadow-[0_30px_60px_-35px_rgba(14,15,16,0.45)] ring-1 ring-ink/10 md:p-12"
          >
            <div className="flex flex-col gap-8 md:flex-row md:items-center md:gap-12">
              <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-3xl bg-ink text-silver-50 shadow-lg">
                <Icon className="h-11 w-11" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="font-display text-3xl font-semibold tracking-tight text-ink md:text-4xl">
                  {current.title}
                </h3>
                <p className="mt-4 max-w-2xl text-lg leading-relaxed text-charcoal">
                  {current.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
