import Image from "next/image";
import { Handshake } from "lucide-react";

import { SectionHeading } from "@/components/section-heading";

export function Partners() {
  return (
    <section id="partners" className="scroll-mt-16 py-24 md:py-32">
      <div className="container">
        <SectionHeading title="Built with the associations." />

        <div className="mt-14 grid max-w-4xl gap-4 md:grid-cols-2">
          <div className="card-metal rounded-3xl p-8 ring-1 ring-ink/10">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-ink text-silver-50">
              <Handshake className="h-6 w-6" strokeWidth={1.75} />
            </div>
            <h3 className="mt-10 font-display text-2xl font-semibold tracking-tight text-ink">
              Taxi associations &amp; forums
            </h3>
            <p className="mt-3 leading-relaxed text-charcoal">
              We built UltraPay with taxi associations and forums, so every
              member taxi, route and rank speaks the same payment language.
            </p>
          </div>
         
        </div>
      </div>
    </section>
  );
}
