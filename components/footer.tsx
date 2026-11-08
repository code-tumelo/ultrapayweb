import { Wordmark } from "@/components/navbar";

const links = [
  { href: "#audiences", label: "Who it's for" },
  { href: "#how", label: "How it works" },
  { href: "#features", label: "Features" },
  { href: "#why", label: "Why UltraPay" },
];

export function Footer() {
  return (
    <footer className="bg-ink text-silver-50">
      <div className="container py-14">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <a href="#" aria-label="UltraPay home">
              <Wordmark inverted />
            </a>
            <p className="mt-4 text-silver-50">UltraPay — cashless taxi payments for South Africa</p>
            <p className="mt-2 text-sm text-silver-300">
              Proudly built in South Africa for taxi owners, associations and vendors.
            </p>
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
          © {new Date().getFullYear()} UltraPay. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
