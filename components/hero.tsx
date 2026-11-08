import { Button } from "@/components/ui/button";
import { CheckerStrip } from "@/components/checker-strip";
import { HeroScene } from "@/components/hero-scene";
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
            className="animate-rise inline-flex items-center gap-2 border-2 border-charcoal bg-metal px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-charcoal shadow-[3px_3px_0_0_#3F4347] sm:text-sm"
            style={delay(0)}
          >
            South Africa&apos;s taxis go cashless · Now live
          </p>

          <h1
            className="animate-rise mt-6 font-display text-[2.7rem] font-extrabold uppercase leading-[1.02] tracking-tight sm:text-7xl lg:text-[5.25rem]"
            style={delay(0.1)}
          >
            No cash. No change.{" "}
            <span className="bg-metal px-2 [box-decoration-break:clone]">Just scan &amp; go.</span>
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

        {/* Calls to action */}
        <div className="min-w-0 lg:col-start-1 lg:row-start-2">
          <div className="animate-rise flex flex-wrap gap-3" style={delay(0.3)}>
            <Button size="lg" asChild>
              <a href="#how">See how it works</a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="#audiences">Who it&apos;s for</a>
            </Button>
          </div>
          <p
            className="animate-rise mt-4 max-w-xl text-sm text-muted-foreground"
            style={delay(0.4)}
          >
            For taxi owners, associations, drivers, vendors and commuters
            across South Africa.
          </p>
        </div>
      </div>

      <CheckerStrip />
    </section>
  );
}
