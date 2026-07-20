import type { Metadata } from "next";
import Link from "next/link";
import { pageSocialMetadata } from "@/lib/metadata";

const title = "Terms and Conditions | Tucson Leak Pros";
const description = "Terms governing use of the Tucson Leak Pros information and service-connection website.";
const headingStyle = { marginTop: "2.25rem", marginBottom: "1rem", color: "var(--brand-red)" };

export const metadata: Metadata = {
  alternates: { canonical: "/terms-and-conditions/" },
  title,
  description,
  robots: { index: false, follow: true },
  ...pageSocialMetadata(title, description, "/terms-and-conditions/"),
};

export default function TermsAndConditions() {
  return (
    <main className="legal-page">
      <article className="container legal-card">
        <h1>Terms and Conditions</h1>
        <div className="legal-content">
          <p><strong>Last updated: <time dateTime="2026-07-19">July 19, 2026</time></strong></p>

          <p>
            These Terms and Conditions govern access to and use of the Tucson Leak Pros website. By using the
            website, you agree to these terms. If you do not agree, do not use the website or submit information
            through it.
          </p>

          <h2 style={headingStyle}>1. Website Purpose</h2>
          <p>
            The website provides general information about slab leaks, water-line testing, repair approaches and
            Tucson-area service availability. It is a service-connection website and may refer a request to an
            independent local provider. The website itself does not guarantee that a particular provider will
            accept a request, arrive within a stated time or perform any specific work.
          </p>

          <h2 style={headingStyle}>2. No Emergency or Professional Diagnosis</h2>
          <p>
            Website content, forms and ZIP-directory results are not an emergency-response system, plumbing
            diagnosis, engineering opinion, insurance determination or substitute for an on-site evaluation. If
            water presents an immediate electrical, structural, health or life-safety risk, contact the appropriate
            emergency service and use a shutoff only when it is clearly identified and safe to operate.
          </p>

          <h2 style={headingStyle}>3. Independent Providers</h2>
          <p>
            A provider receiving a referral is independent and is responsible for its own licensing, insurance,
            employees, inspections, recommendations, estimates, contracts, permits, workmanship, warranties,
            billing and regulatory compliance. Confirm those matters directly before authorizing work. A referral
            or website listing is not an endorsement or guarantee of a provider&apos;s availability or performance.
          </p>

          <h2 style={headingStyle}>4. Estimates, Appointments and Agreements</h2>
          <p>
            Information shown on the website is not a binding quote. Pricing, schedules and repair scopes depend on
            site conditions and must be confirmed directly by the provider. Any service agreement is between the
            property owner or authorized customer and the provider identified in that agreement.
          </p>

          <h2 style={headingStyle}>5. Acceptable Use</h2>
          <p>You agree not to:</p>
          <ul>
            <li>Submit false, unlawful, abusive or misleading requests.</li>
            <li>Interfere with website operation, security or another visitor&apos;s use.</li>
            <li>Attempt unauthorized access, automated scraping or malicious code distribution.</li>
            <li>Copy or republish substantial website content in violation of applicable rights.</li>
          </ul>

          <h2 style={headingStyle}>6. Content and External Sources</h2>
          <p>
            We aim to keep information useful and accurate, but building conditions, product requirements, codes,
            utility responsibilities and provider practices can change. External links are offered for reference;
            their operators control their own content, availability and privacy practices.
          </p>

          <h2 style={headingStyle}>7. Intellectual Property</h2>
          <p>
            Unless otherwise stated, original website text, design elements and branding are protected by
            applicable intellectual-property laws. Limited personal, non-commercial use is permitted. No ownership
            rights are transferred by accessing the website.
          </p>

          <h2 style={headingStyle}>8. Disclaimer and Limitation</h2>
          <p>
            The website is provided on an &ldquo;as available&rdquo; basis without a promise that every page will be
            uninterrupted, error-free or suitable for a particular property decision. To the extent permitted by
            law, Tucson Leak Pros is not responsible for indirect or consequential loss arising solely from reliance
            on general website content or from an independent provider&apos;s acts or omissions. Nothing in these
            terms excludes liability that cannot lawfully be excluded.
          </p>

          <h2 style={headingStyle}>9. Privacy</h2>
          <p>
            Information handling is described in the <Link href="/privacy-policy/">Privacy Policy</Link>. Do not
            submit payment-card details, government identification numbers or unrelated sensitive information in a
            general request.
          </p>

          <h2 style={headingStyle}>10. Changes and Governing Law</h2>
          <p>
            These terms may be revised by posting an updated version and date. They are governed by applicable laws
            of the State of Arizona and the United States, without overriding consumer protections that apply in a
            visitor&apos;s jurisdiction.
          </p>

          <h2 style={headingStyle}>11. Contact</h2>
          <p>Questions about these terms can be submitted through the <Link href="/contact/">contact page</Link>.</p>
        </div>
      </article>
    </main>
  );
}
