import type { Metadata } from "next";

import { ContactDetails, LegalPage } from "@/components/legal-page";
import { COMPANY } from "@/lib/company";

export const metadata: Metadata = {
  title: "Privacy Policy | UltraPay",
  description: "How UltraPay handles personal information under the Protection of Personal Information Act (POPIA).",
};

export default function PrivacyPage() {
  const officer = COMPANY.informationOfficerEmail || COMPANY.email;
  return (
    <LegalPage title="Privacy Policy" intro={`Last updated ${COMPANY.lastUpdated}`}>
      <section>
        <h2>Who we are</h2>
        <p>
          {COMPANY.brand} is a product of {COMPANY.legalName}, a company registered in South Africa. We are the
          responsible party for personal information processed through this website, as defined in the Protection
          of Personal Information Act 4 of 2013 (POPIA).
        </p>
      </section>

      <section>
        <h2>What this website collects</h2>
        <p>
          This website is for information only. It has no login, no sign up form and no payment form, and it does
          not ask for your ID number, bank details, card details or PIN.
        </p>
        <p>
          Like any website, our hosting provider keeps standard technical logs (such as IP address, browser type
          and the pages requested) for security and to keep the site running. We do not use advertising cookies or
          sell any information.
        </p>
      </section>

      <section>
        <h2>The UltraPay app</h2>
        <p>
          UltraPay is not live yet. When it launches, opening a wallet will happen only inside the official UltraPay
          app. Before we collect anything, the app will explain what we need (for example your phone number and the
          identity details required by South African financial regulations), why we need it, and how long we keep
          it. This policy will be updated at that time.
        </p>
      </section>

      <section>
        <h2>We will never ask</h2>
        <ul>
          <li>for your PIN, password or one time PIN (OTP)</li>
          <li>for your ID number or bank details through this website, email, SMS or WhatsApp</li>
          <li>you to download an app from anywhere other than the official Google Play Store or Apple App Store</li>
        </ul>
        <p>If someone asks for these while claiming to be UltraPay, do not share them, and please let us know.</p>
      </section>

      <section>
        <h2>Your rights</h2>
        <p>
          Under POPIA you may ask what personal information we hold about you, ask us to correct or delete it, and
          object to its processing. You may also lodge a complaint with the Information Regulator (South Africa)
          at inforeg.org.za.
        </p>
        {officer && (
          <p>
            To exercise these rights, contact our Information Officer at <a href={`mailto:${officer}`}>{officer}</a>.
          </p>
        )}
      </section>

      <section>
        <h2>Contact</h2>
        <ContactDetails />
      </section>
    </LegalPage>
  );
}
