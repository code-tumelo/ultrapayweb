import Image from "next/image";
import { Check, Receipt } from "lucide-react";

import { Button } from "@/components/ui/button";
import { PhoneFrame, PhoneScreen } from "@/components/phone";

const delay = (s: number) => ({ animationDelay: `${s}s` });

const stats = [
  { value: "Same-day", label: "driver payouts" },
  { value: "24/7", label: "cash-out" },
  { value: "Zero", label: "cash in the taxi" },
];

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden">
      {/* soft silver light + dot grid */}
      <div aria-hidden className="dot-grid absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_at_70%_30%,black,transparent_70%)]" />
      <div
        aria-hidden
        className="absolute -right-40 -top-40 -z-10 h-[640px] w-[640px] rounded-full bg-[radial-gradient(circle,#BFC3C8_0%,rgba(230,231,233,0)_65%)] opacity-80"
      />

      <div className="container grid items-center gap-x-10 gap-y-14 pb-24 pt-32 lg:grid-cols-[1.05fr_0.95fr] lg:pt-36">
        {/* Intro */}
        <div className="min-w-0">
          <p
            className="animate-rise inline-flex items-center gap-2 rounded-full border border-ink/10 bg-silver-50 px-3.5 py-1.5 text-xs font-semibold text-charcoal-soft shadow-sm"
            style={delay(0)}
          >
            <span className="h-2 w-2 rounded-full bg-ink" />
            Now live · Built for South Africa&apos;s taxi industry
          </p>

          <h1
            className="animate-rise mt-6 font-display text-[2.75rem] font-semibold leading-[1.04] tracking-tight text-ink sm:text-6xl lg:text-[4.25rem]"
            style={delay(0.1)}
          >
            No cash. No change.{" "}
            <span className="bg-gradient-to-r from-charcoal via-silver-500 to-charcoal bg-clip-text text-transparent">
              Just scan &amp; go.
            </span>
          </h1>

          <p
            className="animate-rise mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground"
            style={delay(0.2)}
          >
            UltraPay is the fare payment system built for South Africa&apos;s
            minibus taxis — for owners, associations, drivers, vendors and the
            people who ride every day.
          </p>

          <div className="animate-rise mt-8 flex flex-wrap gap-3" style={delay(0.3)}>
            <Button size="lg" asChild>
              <a href="#how">See how it works</a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="#audiences">Who it&apos;s for</a>
            </Button>
          </div>

          <dl
            className="animate-rise mt-12 grid max-w-xl grid-cols-3 gap-4 border-t border-ink/10 pt-6"
            style={delay(0.4)}
          >
            {stats.map((s) => (
              <div key={s.label}>
                <dt className="font-display text-xl font-semibold text-ink sm:text-2xl">{s.value}</dt>
                <dd className="mt-1 text-xs text-muted-foreground sm:text-sm">{s.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Product composition: wallet card + phone */}
        <div className="animate-rise relative mx-auto h-[500px] w-full max-w-[470px] min-w-0 overflow-visible" style={delay(0.25)}>
          {/* wallet card */}
          <div className="card-metal absolute left-0 top-16 w-[250px] -rotate-[9deg] rounded-3xl p-5 shadow-[0_30px_60px_-25px_rgba(14,15,16,0.55)] ring-1 ring-ink/10 sm:w-[270px]">
            <div className="flex items-center justify-between">
              <Image src="/brand/ultrapay-logo.png" alt="" width={36} height={36} className="h-9 w-9 rounded-lg" />
              <span className="text-[11px] font-semibold tracking-[0.2em] text-charcoal-soft">WALLET</span>
            </div>
            <div className="mt-14 h-7 w-10 rounded-md bg-gradient-to-br from-silver-50 to-silver-500 ring-1 ring-ink/15" />
            <p className="mt-4 font-display text-lg font-semibold text-ink">UltraPay</p>
            <p className="text-xs text-charcoal-soft">Pay any taxi with a scan</p>
          </div>

          {/* phone */}
          <div className="absolute right-0 top-0 origin-top scale-[0.9] sm:scale-100">
            <div className="animate-float">
              <PhoneFrame>
                <PhoneScreen step={2} />
              </PhoneFrame>
            </div>
          </div>

          {/* floating glass chips */}
          <div className="glass absolute bottom-28 left-0 flex items-center gap-3 rounded-2xl px-4 py-3 shadow-lg">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-ink text-silver-50">
              <Check className="h-4 w-4" strokeWidth={3} />
            </span>
            <div>
              <p className="text-sm font-semibold text-ink">Driver paid</p>
              <p className="text-xs text-charcoal-soft">+ R18.00 · settled</p>
            </div>
          </div>
          <div className="glass absolute bottom-4 left-0 flex items-center gap-3 rounded-2xl px-4 py-3 shadow-lg">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-silver-300 text-ink">
              <Receipt className="h-4 w-4" />
            </span>
            <div>
              <p className="text-sm font-semibold text-ink">Receipt saved</p>
              <p className="text-xs text-charcoal-soft">Route, time, fare, taxi</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
