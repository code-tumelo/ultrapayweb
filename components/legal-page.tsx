import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { COMPANY } from "@/lib/company";

export function LegalPage({ title, intro, children }: { title: string; intro?: string; children: React.ReactNode }) {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <article className="container max-w-3xl pb-24 pt-32">
        <h1 className="font-display text-4xl font-semibold tracking-tight text-ink md:text-5xl">{title}</h1>
        {intro && <p className="mt-4 text-lg text-muted-foreground">{intro}</p>}
        <div className="mt-10 space-y-8 leading-relaxed text-charcoal [&_h2]:font-display [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:text-ink [&_p]:mt-3 [&_ul]:mt-3 [&_ul]:list-disc [&_ul]:space-y-1 [&_ul]:pl-6 [&_a]:underline">
          {children}
        </div>
      </article>
      <Footer />
    </main>
  );
}

/** Lists whichever contact details have been filled in. */
export function ContactDetails() {
  const rows = [
    ["Company", COMPANY.legalName],
    ["Registration number", COMPANY.registrationNumber],
    ["Address", COMPANY.address],
    ["Email", COMPANY.email],
    ["Phone", COMPANY.phone],
  ].filter(([, v]) => v);
  return (
    <dl className="mt-3 grid gap-x-6 gap-y-2 sm:grid-cols-[max-content_1fr]">
      {rows.map(([k, v]) => (
        <div key={k} className="contents">
          <dt className="font-semibold text-ink">{k}</dt>
          <dd>
            {k === "Email" ? <a href={`mailto:${v}`}>{v}</a> : k === "Phone" ? <a href={`tel:${v.replace(/\s/g, "")}`}>{v}</a> : v}
          </dd>
        </div>
      ))}
    </dl>
  );
}
