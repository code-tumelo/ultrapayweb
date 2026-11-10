import { SectionHeading } from "@/components/section-heading";

const reasons = [
  {
    title: "Cash is a risk",
    description:
      "Cash gets stolen, goes missing and starts arguments. With UltraPay, fares are paid digitally, so there's no cash to lose.",
  },
  {
    title: "Change is a daily headache",
    description:
      "Drivers don't have to run off to find change, and nobody gets turned away because they don't have the right coins.",
  },
  {
    title: "Cash leaves no records",
    description:
      "When fares are paid digitally, you build up a history of your takings. Banks and insurers want to see that before they finance or cover a new taxi.",
  },
];

export function Why() {
  return (
    <section id="why" className="scroll-mt-16 bg-ink py-24 md:py-32">
      <div className="container">
        <SectionHeading inverted eyebrow="Why UltraPay" title="Why taxis need this" />

        <div className="mt-14 grid gap-4 md:grid-cols-3">
          {reasons.map((reason, i) => (
            <div
              key={reason.title}
              className="rounded-3xl bg-silver-50/[0.04] p-8 ring-1 ring-silver-50/10"
            >
              <p className="font-display text-sm font-semibold text-silver-500">
                {String(i + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-10 bg-gradient-to-b from-silver-50 to-silver-300 bg-clip-text font-display text-3xl font-semibold leading-tight tracking-tight text-transparent">
                {reason.title}
              </h3>
              <p className="mt-4 leading-relaxed text-silver-300">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
