import type { Metadata } from "next";
import Link from "next/link";
import { pageSocialMetadata } from "@/lib/metadata";

const title = "Cookie Policy | Tucson Leak Pros";
const description = "Learn about cookies, local browser features and infrastructure technologies associated with this website.";
const headingStyle = { marginTop: "2.25rem", marginBottom: "1rem", color: "var(--brand-red)" };

export const metadata: Metadata = {
  alternates: { canonical: "/cookie-policy/" },
  title,
  description,
  robots: { index: false, follow: true },
  ...pageSocialMetadata(title, description, "/cookie-policy/"),
};

export default function CookiePolicy() {
  return (
    <main className="legal-page">
      <article className="container legal-card">
        <h1>Cookie Policy</h1>
        <div className="legal-content">
          <p><strong>Last updated: <time dateTime="2026-07-19">July 19, 2026</time></strong></p>

          <p>
            This policy explains how cookies and similar browser technologies may be associated with the Tucson
            Leak Pros website. It should be read with the <Link href="/privacy-policy/">Privacy Policy</Link>.
          </p>

          <h2 style={headingStyle}>1. What Cookies Are</h2>
          <p>
            Cookies are small data files that a website or service provider can store through a browser. Related
            technologies include local storage, session storage and security identifiers. They can support site
            delivery, remember a user-requested setting, help prevent abuse or measure website operation.
          </p>

          <h2 style={headingStyle}>2. Current Website Use</h2>
          <p>
            The current website code does not intentionally install advertising or behavioral-profiling cookies and
            does not include a third-party analytics tag. Interactive form selections are handled in the browser.
            The hosting and security infrastructure may still process temporary identifiers, request information or
            similar technical data when necessary to deliver pages, balance traffic, detect abuse and protect the
            service.
          </p>

          <h2 style={headingStyle}>3. Third-Party Content</h2>
          <p>
            Some pages may display or link to content operated by another service, such as an embedded map. A third
            party may apply its own cookies or similar technologies when its content loads or when you follow its
            link. Those technologies are governed by that provider&apos;s policies and browser controls.
          </p>

          <h2 style={headingStyle}>4. Browser Controls</h2>
          <p>
            Most browsers allow you to review, delete or block cookies and site data. Blocking all storage may
            affect security features or interactive functions. Consult your browser&apos;s privacy or site-data
            settings for instructions specific to that browser.
          </p>

          <h2 style={headingStyle}>5. Future Changes</h2>
          <p>
            If optional analytics, advertising or other non-essential technologies are introduced, this policy and
            any legally required notice or consent controls should be updated before those technologies are used.
            The date above identifies the current version.
          </p>

          <h2 style={headingStyle}>6. Contact</h2>
          <p>Questions about this policy can be submitted through the <Link href="/contact/">contact page</Link>.</p>
        </div>
      </article>
    </main>
  );
}
