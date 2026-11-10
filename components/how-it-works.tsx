"use client";

import { useEffect, useRef, useState } from "react";

import { PhoneFrame, PhoneScreen } from "@/components/phone";
import { SectionHeading } from "@/components/section-heading";
import { cn } from "@/lib/utils";

const steps = [
  {
    title: "Scan the sticker",
    description:
      "Each taxi has a QR sticker inside. Point your phone's camera at it to scan. Any smartphone will do.",
  },
  {
    title: "Check the fare, then confirm",
    description:
      "You'll see the fare before you pay. If it looks right, approve it with your PIN or fingerprint.",
  },
  {
    title: "The driver is paid",
    description:
      "The money goes to the driver as soon as the trip ends, so nobody has to count cash or look for change.",
  },
  {
    title: "Keep the receipt",
    description:
      "You get a receipt for every ride with the route, time, fare and taxi registration on it.",
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
    <section id="how" className="scroll-mt-16 bg-silver-100 py-24 md:py-32">
      <div className="container">
        <SectionHeading eyebrow="How it works" title="Paying takes a few seconds" />

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
                      "h-2 rounded-full transition-all",
                      i === active ? "w-8 bg-ink" : "w-2 bg-silver-500/50"
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
                  <span className="inline-flex h-11 min-w-11 items-center justify-center rounded-full bg-ink px-4 text-sm font-semibold text-silver-50">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-5 font-display text-3xl font-semibold leading-tight tracking-tight text-ink md:text-5xl">
                    {s.title}
                  </h3>
                  <p className="mt-4 max-w-md text-lg leading-relaxed text-charcoal-soft">
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
