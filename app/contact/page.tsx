import type { Metadata } from "next";

import { ContactDetails, LegalPage } from "@/components/legal-page";

export const metadata: Metadata = {
  title: "Contact | UltraPay",
  description: "Contact the team behind UltraPay.",
};

export default function ContactPage() {
  return (
    <LegalPage
      title="Contact us"
      intro="Taxi owners, associations, vendors, partners and press can reach the UltraPay team here."
    >
      <section>
        <h2>Company details</h2>
        <ContactDetails />
      </section>

      <section>
        <h2>Report a scam</h2>
        <p>
          UltraPay will never ask for your PIN, OTP, ID number or bank details through this website, email, SMS or
          WhatsApp. If someone does, please do not share anything and tell us using the details above.
        </p>
      </section>
    </LegalPage>
  );
}
