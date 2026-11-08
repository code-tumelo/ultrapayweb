import { Banknote, FileText, Landmark, QrCode, Receipt, ShieldCheck } from "lucide-react";

import { SectionHeading } from "@/components/section-heading";
import { cn } from "@/lib/utils";

const features = [
  {
    icon: QrCode,
    title: "Scan & Go",
    description:
      "Every taxi gets a QR sticker. Passengers scan, confirm the fare in rand and they're on their way in seconds.",
    dark: true,
  },
  {
    icon: Banknote,
    title: "Same-day driver payouts",
    description:
      "Drivers are paid the moment the trip ends. No waiting a week and no cash to count.",
  },
  {
    icon: FileText,
    title: "Operator records",
    description:
      "Digital takings per taxi and per route, ready to export for your accountant, your bank and your association.",
  },
  {
    icon: Landmark,
    title: "Cash out anytime",
    description:
      "Withdraw your earnings 24/7 to any South African bank account or mobile wallet.",
  },
  {
    icon: Receipt,
    title: "Trip receipts",
    description:
      "Every ride gets a receipt with the route, time, fare and taxi registration — useful for disputes and audits.",
  },
  {
    icon: ShieldCheck,
    title: "No cash in the taxi",
    description:
      "Approve with a PIN or fingerprint. Transactions are encrypted, and there's no cash in the taxi to attract thieves.",
    dark: true,
  },
];

export function Features() {
  return (
    <section id="features" className="scroll-mt-16 py-24 md:py-32">
      <div className="container">
        <SectionHeading eyebrow="Features" title="One fare, one tap, every taxi" />

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
