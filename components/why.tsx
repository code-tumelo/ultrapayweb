import { SectionHeading } from "@/components/section-heading";

const reasons = [
  {
    title: "Cash is a risk",
    description:
      "Cash invites theft, loss and arguments. With UltraPay the fare stays digital from the moment it's paid.",
  },
  {
    title: "Change is a daily headache",
    description:
      "No more sending drivers to buy change, or turning a commuter away over a few rand.",
  },
  {
    title: "No records, no growth",
    description:
      "Digital fares build the takings history a small taxi business needs for finance, insurance and new vehicles.",
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
