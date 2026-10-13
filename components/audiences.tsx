"use client";

import { useRef, useState } from "react";
import {
  ArrowRight,
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
      "Know what every taxi earns. See takings by taxi, route and shift, and build the records your business needs to grow.",
  },
  {
    id: "associations",
    tab: "Associations",
    icon: Handshake,
    title: "Taxi associations & forums",
    description:
      "One way to pay across every member, route and rank — with clear reporting for your association.",
  },
  {
    id: "drivers",
    tab: "Drivers",
    icon: UserRound,
    title: "Drivers",
    description:
      "Get paid the moment the trip ends. No cash float, no hunting for change, no carrying money at night.",
  },
  {
    id: "vendors",
    tab: "Vendors",
    icon: Store,
    title: "Vendors & spaza shops",
    description:
      "Take fare payments and cash-ins at your counter, and get your takings the same day.",
  },
  {
    id: "unbanked",
    tab: "No bank account",
    icon: Wallet,
    title: "Customers without a bank account",
    description:
      "You don't need one. Use a phone-number wallet and top it up with cash at any vendor.",
  },
  {
    id: "commuters",
    tab: "Commuters",
    icon: Smartphone,
    title: "Commuters",
    description:
      "Scan the sticker, check the fare in rand, ride. Works on any smartphone.",
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
          title="Built for everyone on the route"
          description="UltraPay isn't a ride-hailing app. It's the payment system for the taxis South Africa already rides — and for the vendors, spaza shops and customers without bank accounts who depend on them."
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
                  "shrink-0 rounded-md border-2 px-5 py-2.5 font-display text-lg font-bold uppercase tracking-wide transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2",
                  i === active
                    ? "border-black bg-taxi text-black shadow-[3px_3px_0_0_#000]"
                    : "border-black/20 bg-white text-black/70 hover:border-black hover:text-black"
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
            className="mt-6 animate-fade rounded-xl border-2 border-black bg-white p-8 shadow-[8px_8px_0_0_#000] md:p-12"
          >
            <div className="flex flex-col gap-8 md:flex-row md:items-center md:gap-12">
              <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-2xl border-2 border-black bg-taxi text-black">
                <Icon className="h-12 w-12" strokeWidth={1.75} />
              </div>
              <div>
                <h3 className="font-display text-4xl font-bold uppercase leading-none text-black md:text-5xl">
                  {current.title}
                </h3>
                <p className="mt-4 max-w-2xl text-xl leading-relaxed text-neutral-700">
                  {current.description}
                </p>
                <a
                  href="#notify"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-black underline decoration-taxi decoration-4 underline-offset-4 hover:decoration-black"
                >
                  Get notified at launch
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
