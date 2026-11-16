import { Wordmark } from "@/components/navbar";
import { COMPANY } from "@/lib/company";

const links = [
  { href: "/#audiences", label: "Who it's for" },
  { href: "/#how", label: "How it works" },
  { href: "/#features", label: "Features" },
  { href: "/#why", label: "Why UltraPay" },
  { href: "/contact", label: "Contact" },
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms of Use" },
];

export function Footer() {
  return (
    <footer className="bg-ink text-silver-50">
      <div className="container py-14">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <a href="/" aria-label="UltraPay home">
              <Wordmark inverted />
            </a>
            <p className="mt-4 text-silver-50">Cashless taxi payments for South Africa.</p>
            <p className="mt-2 text-sm text-silver-300">
              Made in South Africa for taxi owners, associations and vendors.
            </p>
            <address className="mt-6 space-y-1 text-sm not-italic text-silver-300">
              <p className="font-semibold text-silver-50">{COMPANY.legalName}</p>
              {COMPANY.registrationNumber && <p>Reg. no. {COMPANY.registrationNumber}</p>}
              {COMPANY.address && <p>{COMPANY.address}</p>}
              {COMPANY.email && (
                <p>
                  <a href={`mailto:${COMPANY.email}`} className="hover:text-silver-50">{COMPANY.email}</a>
                </p>
              )}
              {COMPANY.phone && (
                <p>
                  <a href={`tel:${COMPANY.phone.replace(/\s/g, "")}`} className="hover:text-silver-50">{COMPANY.phone}</a>
                </p>
              )}
            </address>
          </div>
          <nav aria-label="Footer" className="flex flex-wrap gap-x-8 gap-y-3 text-sm">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="text-silver-300 transition-colors hover:text-silver-50">
                {l.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
      <div className="border-t border-silver-50/10">
        <div className="container py-6 text-xs text-silver-300">
          <p>© {new Date().getFullYear()} {COMPANY.legalName}. All rights reserved.</p>
          <p className="mt-2">
            UltraPay will never ask for your PIN, OTP, ID number or bank details on this website, or by email, SMS
            or WhatsApp.
          </p>
        </div>
      </div>
    </footer>
  );
}
