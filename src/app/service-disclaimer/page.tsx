import type { Metadata } from "next";
import Link from "next/link";
import { pageSocialMetadata } from "@/lib/metadata";

const title = "Service Disclaimer | Tucson Leak Pros";
const description = "Important limitations concerning website information, referrals and independent service providers.";
const headingStyle = { marginTop: "2.25rem", marginBottom: "1rem", color: "var(--brand-red)" };

export const metadata: Metadata = {
  alternates: { canonical: "/service-disclaimer/" },
  title,
  description,
  robots: { index: false, follow: true },
  ...pageSocialMetadata(title, description, "/service-disclaimer/"),
};

export default function ServiceDisclaimer() {
  return (
    <main className="legal-page">
      <article className="container legal-card">
        <h1>Service Disclaimer</h1>
        <div className="legal-content">
          <p><strong>Last updated: <time dateTime="2026-07-19">July 19, 2026</time></strong></p>

          <h2 style={headingStyle}>Information, Not a Diagnosis</h2>
          <p>
            Website content describes common slab-leak symptoms, testing concepts and repair considerations for
            general educational purposes. A warm floor, moving meter, moisture reading, sound or crack does not by
            itself establish the source, location or cause of a problem. A qualified professional must evaluate the
            specific property before a diagnosis or repair decision is made.
          </p>

          <h2 style={headingStyle}>Service-Connection Website</h2>
          <p>
            Tucson Leak Pros is a service-connection website. A request may be referred to an independent local
            provider, and submitting a request does not create an appointment, service contract or guarantee of
            availability. Unless expressly stated in a separate written agreement, this website is not the provider
            performing inspection, plumbing, concrete, restoration, engineering or insurance work.
          </p>

          <h2 style={headingStyle}>Independent Provider Responsibility</h2>
          <p>
            Independent providers are responsible for confirming their licensing, insurance, personnel, scope,
            pricing, permits, methods, safety procedures, warranties and compliance. Property owners should verify
            credentials and obtain the complete written scope before authorizing invasive access or repair. Provider
            statements and agreements control the work they perform.
          </p>

          <h2 style={headingStyle}>No Guaranteed Location or Outcome</h2>
          <p>
            Concealed piping, concrete, soil, finishes, background noise, temperature patterns and access limits can
            affect testing and locating confidence. No website description can guarantee an exact pre-access leak
            location, a non-invasive repair, a particular cost, insurance coverage or that another concealed pipe
            will not fail later.
          </p>

          <h2 style={headingStyle}>Emergency and Safety Limits</h2>
          <p>
            The website is not monitored as an emergency service. If water is near electricity, actively spreading,
            affecting structural safety or creating an immediate danger, contact the appropriate emergency service
            or qualified local professional. Operate a shutoff only when it is clearly identified and safe to use.
          </p>

          <h2 style={headingStyle}>External Information</h2>
          <p>
            Codes, utility boundaries, product instructions and third-party resources can change. External links are
            provided for reference and do not transfer responsibility for their content or availability to this
            website. Confirm current requirements with the responsible authority or qualified professional.
          </p>

          <h2 style={headingStyle}>Questions</h2>
          <p>Questions about this disclaimer can be submitted through the <Link href="/contact/">contact page</Link>.</p>
        </div>
      </article>
    </main>
  );
}
