import { Banknote, FileText, Landmark, QrCode, Receipt, ShieldCheck } from "lucide-react";

import { SectionHeading } from "@/components/section-heading";

const features = [
  {
    icon: QrCode,
    title: "Scan & Go",
    description:
      "Every taxi gets a QR sticker. Passengers scan, confirm the fare in rand and they're on their way in seconds.",
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
  },
];

export function Features() {
  return (
    <section id="features" className="scroll-mt-16 border-t-2 border-black py-24 md:py-32">
      <div className="container">
        <SectionHeading eyebrow="Features" title="One fare, one tap, every taxi" />

        <div className="mt-16 grid gap-x-16 md:grid-cols-2">
          {features.map(({ icon: Icon, title, description }) => (
            <div key={title} className="flex gap-5 border-t border-black/15 py-8">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md border-2 border-black bg-taxi text-black">
                <Icon className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-display text-2xl font-bold uppercase leading-none text-black">
                  {title}
                </h3>
                <p className="mt-2 leading-relaxed text-neutral-700">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
