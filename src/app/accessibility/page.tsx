import type { Metadata } from "next";
import Link from "next/link";
import { pageSocialMetadata } from "@/lib/metadata";

const title = "Accessibility Statement | Tucson Leak Pros";
const description = "Accessibility goals, supported website features, known limitations and feedback options.";
const headingStyle = { marginTop: "2.25rem", marginBottom: "1rem", color: "var(--brand-red)" };

export const metadata: Metadata = {
  alternates: { canonical: "/accessibility/" },
  title,
  description,
  robots: { index: false, follow: true },
  ...pageSocialMetadata(title, description, "/accessibility/"),
};

export default function Accessibility() {
  return (
    <main className="legal-page">
      <article className="container legal-card">
        <h1>Accessibility Statement</h1>
        <div className="legal-content">
          <p><strong>Last updated: <time dateTime="2026-07-19">July 19, 2026</time></strong></p>

          <h2 style={headingStyle}>Our Commitment</h2>
          <p>
            Tucson Leak Pros aims to make this website usable by people with a wide range of abilities, devices and
            assistive technologies. Accessibility is considered during content, navigation and responsive-layout
            updates.
          </p>

          <h2 style={headingStyle}>Accessibility Target</h2>
          <p>
            The website uses the Web Content Accessibility Guidelines (WCAG) 2.2 Level AA as a design and review
            target. This statement does not claim formal conformance for every page or third-party component. The
            site is reviewed through automated checks and manual inspection as changes are made.
          </p>

          <h2 style={headingStyle}>Features Used to Support Access</h2>
          <ul>
            <li>Semantic headings, landmarks and labelled form controls.</li>
            <li>Keyboard-accessible navigation, accordions, links and form elements.</li>
            <li>A skip link for moving directly to the main page content.</li>
            <li>Visible keyboard focus styles and text alternatives for meaningful images.</li>
            <li>Responsive layouts, readable text wrapping and horizontally scrollable data tables.</li>
            <li>Reduced-motion support where smooth scrolling or animation is used.</li>
          </ul>

          <h2 style={headingStyle}>Known Limitations</h2>
          <p>
            Third-party content, including an embedded map, may have accessibility behavior controlled by its
            provider. Wide comparison tables may require horizontal scrolling on small screens. If either format
            prevents access to information, request the same information through the contact page.
          </p>

          <h2 style={headingStyle}>Compatibility</h2>
          <p>
            The site is designed for current versions of major browsers and for keyboard and screen-reader use with
            standard HTML, CSS, JavaScript, ARIA and SVG. Very old browsers or browser extensions that substantially
            modify page content may not present every feature as intended.
          </p>

          <h2 style={headingStyle}>Feedback and Assistance</h2>
          <p>
            If you encounter an accessibility barrier, use the <Link href="/contact/">contact page</Link> and
            identify the page, the feature involved, the browser or assistive technology used and the format that
            would work better. Do not include sensitive personal information. We will use the report to investigate
            the issue and provide a reasonable alternative when possible.
          </p>
        </div>
      </article>
    </main>
  );
}
