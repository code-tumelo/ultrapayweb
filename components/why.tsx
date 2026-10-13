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
    <section id="why" className="scroll-mt-16 bg-black py-24 md:py-32">
      <div className="container">
        <SectionHeading inverted eyebrow="Why UltraPay" title="Why taxis need this" />

        <div className="mt-16">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="grid items-center gap-4 border-t border-white/20 py-10 md:grid-cols-[1.2fr_1fr] md:gap-12"
            >
              <h3 className="font-display text-5xl font-extrabold uppercase leading-[0.95] text-taxi md:text-7xl">
                {reason.title}
              </h3>
              <p className="text-lg leading-relaxed text-gray-300">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
