import type { Metadata } from "next";

import { ContactDetails, LegalPage } from "@/components/legal-page";
import { COMPANY } from "@/lib/company";

export const metadata: Metadata = {
  title: "Terms of Use | UltraPay",
  description: "Terms of use for the UltraPay website.",
};

export default function TermsPage() {
  return (
    <LegalPage title="Terms of Use" intro={`Last updated ${COMPANY.lastUpdated}`}>
      <section>
        <h2>About this website</h2>
        <p>
          This website is operated by {COMPANY.legalName} and describes {COMPANY.brand}, a cashless fare payment
          service for South African minibus taxis that is currently in development. By using this website you
          agree to these terms.
        </p>
      </section>

      <section>
        <h2>Information only</h2>
        <p>
          Everything on this website is general information about a product that has not launched yet. Features,
          fees and timelines may change before launch. Nothing here is an offer of financial services, and no
          payments can be made through this website.
        </p>
      </section>

      <section>
        <h2>The UltraPay service</h2>
        <p>
          When UltraPay launches, use of the wallet and payment service will be covered by separate terms that you
          accept in the official app. Those terms will take priority over this page for anything to do with the
          service itself.
        </p>
      </section>

      <section>
        <h2>Intellectual property</h2>
        <p>
          The UltraPay name, logo and website content belong to {COMPANY.legalName}. Please do not copy them or use
          them in a way that suggests you are UltraPay.
        </p>
      </section>

      <section>
        <h2>Liability</h2>
        <p>
          We try to keep this website accurate and available, but we cannot promise it will always be error free.
          To the extent the law allows, we are not liable for loss arising from your use of this website.
        </p>
      </section>

      <section>
        <h2>Governing law</h2>
        <p>These terms are governed by the laws of the Republic of South Africa.</p>
      </section>

      <section>
        <h2>Contact</h2>
        <ContactDetails />
      </section>
    </LegalPage>
  );
}
