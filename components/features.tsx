import { Banknote, FileText, Landmark, QrCode, Receipt, ShieldCheck } from "lucide-react";

import { SectionHeading } from "@/components/section-heading";
import { cn } from "@/lib/utils";

const features = [
  {
    icon: QrCode,
    title: "Scan & Go",
    description:
      "Each taxi gets its own QR sticker. Passengers scan it, check the fare and pay in a few seconds.",
    dark: true,
  },
  {
    icon: Banknote,
    title: "Same-day driver payouts",
    description:
      "Drivers get their money when the trip ends, not at the end of the week. There's no cash to count either.",
  },
  {
    icon: FileText,
    title: "Operator records",
    description:
      "See the takings for each taxi and route, and export them whenever your accountant, bank or association needs them.",
  },
  {
    icon: Landmark,
    title: "Cash out anytime",
    description:
      "Send your earnings to any South African bank account or mobile wallet, at any time of day.",
  },
  {
    icon: Receipt,
    title: "Trip receipts",
    description:
      "Every ride comes with a receipt showing the route, time, fare and taxi registration. It helps a lot when there's a dispute or an audit.",
  },
  {
    icon: ShieldCheck,
    title: "No cash in the taxi",
    description:
      "You approve each payment with your PIN or fingerprint, and every transaction is encrypted. With no cash on board, there's nothing for thieves to take.",
    dark: true,
  },
];

export function Features() {
  return (
    <section id="features" className="scroll-mt-16 py-24 md:py-32">
      <div className="container">
        <SectionHeading eyebrow="Features" title="What you get with UltraPay" />

        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon: Icon, title, description, dark }) => (
            <div
              key={title}
              className={cn(
                "rounded-3xl p-7 ring-1 transition-transform duration-300 hover:-translate-y-1",
                dark
                  ? "card-ink text-silver-50 ring-ink/20"
                  : "bg-silver-50 text-ink ring-ink/10 shadow-sm"
              )}
            >
              <div
                className={cn(
                  "flex h-12 w-12 items-center justify-center rounded-2xl",
                  dark ? "bg-silver-50/10 text-silver-50" : "card-metal text-ink"
                )}
              >
                <Icon className="h-6 w-6" strokeWidth={1.75} />
              </div>
              <h3 className="mt-14 font-display text-xl font-semibold tracking-tight">{title}</h3>
              <p className={cn("mt-2 leading-relaxed", dark ? "text-silver-300" : "text-charcoal-soft")}>
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
