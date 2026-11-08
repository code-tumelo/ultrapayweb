import Image from "next/image";
import { Handshake } from "lucide-react";

import { SectionHeading } from "@/components/section-heading";

export function Partners() {
  return (
    <section id="partners" className="scroll-mt-16 py-24 md:py-32">
      <div className="container">
        <SectionHeading title="Built with the associations. Banked with FirstRand." />

        <div className="mt-16 grid max-w-4xl gap-6 md:grid-cols-2">
          <div className="rounded-xl border-2 border-charcoal bg-silver-50 p-8 shadow-[6px_6px_0_0_#3F4347]">
            <div className="flex h-12 w-12 items-center justify-center rounded-md border-2 border-charcoal bg-metal text-charcoal">
              <Handshake className="h-6 w-6" />
            </div>
            <h3 className="mt-6 font-display text-3xl font-bold uppercase leading-none text-charcoal">
              Taxi associations &amp; forums
            </h3>
            <p className="mt-3 leading-relaxed text-charcoal-soft">
              We built UltraPay with taxi associations and forums, so every
              member taxi, route and rank speaks the same payment language.
            </p>
          </div>

          <div className="flex flex-col justify-between rounded-xl border-2 border-charcoal bg-silver-50 p-8 shadow-[6px_6px_0_0_#3F4347]">
            <Image
              src="/brand/firstrand-logo.png"
              alt="FirstRand Bank logo"
              width={602}
              height={506}
              className="h-24 w-auto self-start"
            />
            <div className="mt-6">
              <p className="text-sm font-semibold uppercase tracking-widest text-charcoal-soft">
                Banked with
              </p>
              <h3 className="mt-2 font-display text-4xl font-bold uppercase leading-none text-charcoal">
                FirstRand Bank
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
