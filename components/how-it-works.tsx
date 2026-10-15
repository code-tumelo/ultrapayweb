"use client";

import { useEffect, useRef, useState } from "react";

import { PhoneFrame, PhoneScreen } from "@/components/phone";
import { SectionHeading } from "@/components/section-heading";
import { cn } from "@/lib/utils";

const steps = [
  {
    title: "Scan the sticker",
    description:
      "Every taxi has a QR sticker. Open your camera and scan it — it works on any smartphone.",
  },
  {
    title: "Check the fare, then confirm",
    description:
      "See exactly what you're paying in rand, then approve with your PIN or fingerprint.",
  },
  {
    title: "The driver is paid",
    description:
      "The fare reaches the driver the moment the trip ends. No cash to count and no change to find.",
  },
  {
    title: "Keep the receipt",
    description:
      "Every ride gets a receipt with the route, time, fare and taxi registration.",
  },
];

export function HowItWorks() {
  const [active, setActive] = useState(0);
  const refs = useRef<(HTMLLIElement | null)[]>([]);

  // The step crossing the middle of the viewport drives the phone on desktop
  useEffect(() => {
    const els = refs.current.filter(Boolean) as HTMLLIElement[];
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setActive(Number((e.target as HTMLElement).dataset.index));
          }
        }
      },
      { rootMargin: "-45% 0px -45% 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <section id="how" className="scroll-mt-16 border-y-2 border-black bg-neutral-100 py-24 md:py-32">
      <div className="container">
        <SectionHeading eyebrow="How it works" title="Scan. Confirm. Ride." />

        <div className="mt-16 grid gap-12 lg:grid-cols-2">
          {/* Sticky phone (desktop) */}
          <div className="hidden lg:block">
            <div className="sticky top-28 flex flex-col items-center">
              <div key={active} className="animate-fade">
                <PhoneFrame>
                  <PhoneScreen step={active} />
                </PhoneFrame>
              </div>
              <div className="mt-6 flex gap-2" aria-hidden>
                {steps.map((_, i) => (
                  <span
                    key={i}
                    className={cn(
                      "h-2 rounded-full border border-black transition-all",
                      i === active ? "w-8 bg-taxi" : "w-3 bg-white"
                    )}
                  />
                ))}
              </div>
             
            </div>
          </div>

          <ol className="space-y-16 lg:space-y-0">
            {steps.map((s, i) => (
              <li
                key={s.title}
                data-index={i}
                ref={(el) => {
                  refs.current[i] = el;
                }}
                className="flex flex-col gap-8 lg:min-h-[70vh] lg:justify-center"
              >
                {/* Inline phone (mobile) */}
                <div className="flex justify-center lg:hidden">
                  <PhoneFrame className="scale-90">
                    <PhoneScreen step={i} />
                  </PhoneFrame>
                </div>

                <div
                  className={cn(
                    "transition-opacity duration-300",
                    i === active ? "lg:opacity-100" : "lg:opacity-35"
                  )}
                >
                  <span className="inline-flex h-16 min-w-16 items-center justify-center rounded-xl border-2 border-black bg-taxi px-3 font-display text-5xl font-extrabold leading-none text-black shadow-[4px_4px_0_0_#000]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-5 font-display text-4xl font-bold uppercase leading-none text-black md:text-5xl">
                    {s.title}
                  </h3>
                  <p className="mt-4 max-w-md text-lg leading-relaxed text-neutral-700">
                    {s.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
