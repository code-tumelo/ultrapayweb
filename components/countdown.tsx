"use client";

import { useEffect, useState } from "react";

// 31 October 2026, 00:00 South African Standard Time (UTC+2)
const LAUNCH_AT = new Date("2026-10-31T00:00:00+02:00").getTime();

type Remaining = { days: number; hours: number; minutes: number; seconds: number; done: boolean };

function getRemaining(): Remaining {
  const ms = Math.max(0, LAUNCH_AT - Date.now());
  const total = Math.floor(ms / 1000);
  return {
    days: Math.floor(total / 86400),
    hours: Math.floor((total % 86400) / 3600),
    minutes: Math.floor((total % 3600) / 60),
    seconds: total % 60,
    done: ms === 0,
  };
}

const pad = (n: number) => String(n).padStart(2, "0");

/** One flap tile per digit; the inner span re-mounts when the digit changes, replaying the flip. */
function Digits({ value }: { value: string }) {
  return (
    <div className="flex gap-1">
      {value.split("").map((ch, i) => (
        <span
          key={i}
          className="relative flex h-[clamp(2.25rem,11vw,3rem)] w-[clamp(1.25rem,7vw,2rem)] items-center justify-center overflow-hidden rounded-md border border-white/10 bg-neutral-900 sm:h-[4.25rem] sm:w-12"
        >
          <span
            key={ch}
            className="inline-block animate-flip font-display text-[clamp(1.25rem,7.5vw,2.25rem)] font-bold tabular-nums text-taxi sm:text-6xl"
          >
            {ch}
          </span>
          <span aria-hidden className="absolute inset-x-0 top-1/2 h-px bg-black" />
        </span>
      ))}
    </div>
  );
}

export function Countdown() {
  // null until mounted, so server and client render the same markup (no hydration mismatch)
  const [t, setT] = useState<Remaining | null>(null);

  useEffect(() => {
    const tick = () => setT(getRemaining());
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  if (t?.done) {
    return (
      <div className="inline-block rounded-xl border-2 border-black bg-taxi px-6 py-4 shadow-[6px_6px_0_0_#000]">
        <p className="font-display text-3xl font-bold uppercase text-black">
          Now departing — UltraPay is live
        </p>
      </div>
    );
  }

  const groups = [
    { label: "Days", value: t ? pad(t.days) : "--" },
    { label: "Hours", value: t ? pad(t.hours) : "--" },
    { label: "Min", value: t ? pad(t.minutes) : "--" },
    { label: "Sec", value: t ? pad(t.seconds) : "--" },
  ];

  return (
    <div
      role="timer"
      aria-label="Time until UltraPay launches on 31 October 2026"
      className="inline-block max-w-full rounded-xl border-2 border-black bg-neutral-950 p-3 shadow-[6px_6px_0_0_hsl(var(--taxi))] sm:p-5"
    >
      <div className="mb-3 flex items-center justify-between gap-x-6 gap-y-1 border-b border-white/10 pb-3">
        <span className="font-display text-sm font-semibold uppercase tracking-[0.25em] text-taxi">
          Next departure
        </span>
        <span className="font-display text-sm uppercase tracking-widest text-gray-400">
          UltraPay launch
        </span>
      </div>

      <div className="flex items-end gap-1 sm:gap-3">
        {groups.map((g, i) => (
          <div key={g.label} className="flex items-end gap-1 sm:gap-3">
            <div>
              <p className="mb-1.5 font-display text-xs font-semibold uppercase tracking-widest text-gray-400">
                {g.label}
              </p>
              <Digits value={g.value} />
            </div>
            {i < groups.length - 1 && (
              <span aria-hidden className="pb-1.5 font-display text-2xl text-white/30 sm:pb-3 sm:text-5xl">
                :
              </span>
            )}
          </div>
        ))}
      </div>

      <p className="mt-3 text-xs text-gray-500">Launches 00:00 SAST · 31 October 2026</p>
    </div>
  );
}
