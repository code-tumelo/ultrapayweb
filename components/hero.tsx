import { CheckerStrip } from "@/components/checker-strip";
import { Countdown } from "@/components/countdown";
import { HeroScene } from "@/components/hero-scene";
import { NotifyForm } from "@/components/notify-form";
import { RouteLines } from "@/components/route-lines";

const delay = (s: number) => ({ animationDelay: `${s}s` });

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden">
      <RouteLines />

      <div className="container grid items-center gap-x-12 gap-y-10 pb-20 pt-28 lg:grid-cols-[1.05fr_0.95fr] lg:pt-32">
        {/* Intro */}
        <div className="min-w-0 lg:col-start-1 lg:row-start-1">
          <p
            className="animate-rise inline-flex items-center gap-2 border-2 border-black bg-taxi px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-black shadow-[3px_3px_0_0_#000] sm:text-sm"
            style={delay(0)}
          >
            South Africa&apos;s taxis go cashless · Launching 31 October 2026
          </p>

          <h1
            className="animate-rise mt-6 font-display text-[2.7rem] font-extrabold uppercase leading-[1.02] tracking-tight sm:text-7xl lg:text-[5.25rem]"
            style={delay(0.1)}
          >
            No cash. No change.{" "}
            <span className="bg-taxi px-2 [box-decoration-break:clone]">Just scan &amp; go.</span>
          </h1>

          <p
            className="animate-rise mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground"
            style={delay(0.2)}
          >
            UltraPay is the fare payment system built for South Africa&apos;s
            minibus taxis — for owners, associations, drivers, vendors and the
            people who ride every day.
          </p>
        </div>

        {/* Animated taxi scene */}
        <div
          className="animate-rise min-w-0 lg:col-start-2 lg:row-span-2 lg:row-start-1"
          style={delay(0.25)}
        >
          <HeroScene />
        </div>

        {/* Countdown + sign-up */}
        <div className="min-w-0 lg:col-start-1 lg:row-start-2">
          <div className="animate-rise" style={delay(0.3)}>
            <Countdown />
          </div>

          <div className="animate-rise mt-8" style={delay(0.4)}>
            <NotifyForm />
            <p className="mt-2 max-w-xl text-sm text-muted-foreground">
              For taxi owners, associations, drivers, vendors and commuters
              across South Africa.
            </p>
          </div>
        </div>
      </div>

      <CheckerStrip />
    </section>
  );
}
