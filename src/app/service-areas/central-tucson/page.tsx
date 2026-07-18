import React from 'react';
import { Metadata } from 'next';
import ZipCheckerForm from '@/components/ZipCheckerForm';
import FaqCategory from '@/components/FaqCategory';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Slab Leak Detection & Repair Central Tucson, AZ',
  description: 'Specialized slab leak detection for historic and mid-century homes in Central Tucson. Serving Sam Hughes, Blenman-Elm, and Downtown (ZIPs 85701, 85716, 85719).',
  openGraph: {
    title: 'Slab Leak Detection & Repair Central Tucson, AZ',
    description: 'Specialized slab leak detection for historic and mid-century homes in Central Tucson. Serving Sam Hughes, Blenman-Elm, and Downtown (ZIPs 85701, 85716, 85719).',
    url: 'https://tucsonslableakpros.com/service-areas/central-tucson/',
    siteName: 'Tucson Leak Pros',
    locale: 'en_US',
    images: [{ url: "/images/services_hub_hero.jpg", width: 1200, height: 630, alt: "Slab Leak Detection Central Tucson, AZ" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Slab Leak Detection & Repair Central Tucson, AZ",
    description: "Specialized slab leak detection for historic and mid-century homes in Central Tucson.",
    images: ["/images/services_hub_hero.jpg"],
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How does the age of my Central Tucson home affect leak detection?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Many homes in Central Tucson were built between the 1920s and 1960s. These older properties often have aging copper lines or a mix of galvanized steel that has been retrofitted over decades. Our detection process accounts for these complex, mixed-material plumbing systems."
      }
    },
    {
      "@type": "Question",
      "name": "Is water line rerouting better for historic homes in Sam Hughes?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Often, yes. Historic homes feature original hardwood floors or unique tile that is difficult or impossible to match. Rerouting the water line through the attic or walls preserves the architectural integrity of the flooring."
      }
    },
    {
      "@type": "Question",
      "name": "Why do copper pipes fail so frequently in this part of town?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Tucson's exceptionally hard water causes mineral buildup and turbulence inside copper pipes. In older Central Tucson neighborhoods, decades of this friction literally wears the pipe walls thin from the inside out, leading to pinhole leaks under the slab."
      }
    },
    {
      "@type": "Question",
      "name": "Can you detect leaks in small, tight lot layouts common near the University?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolutely. Our electronic and acoustic leak detection equipment is highly portable and non-invasive, allowing us to pinpoint leaks even in cramped utility closets or tight property boundaries."
      }
    }
  ]
};

export default function CentralTucson() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <main>
        {/* Hero Section */}
        <section style={{ position: "relative", padding: "8rem 0 6rem", overflow: "hidden", minHeight: "600px", display: "flex", alignItems: "center" }}>
          <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", zIndex: 0, backgroundColor: "#18181b" }}>
            <Image title="Central Tucson Slab Leak Services" src="/images/hero_home.jpg" alt="Historic home in Central Tucson" fill sizes="100vw" style={{ objectFit: "cover", opacity: 0.4 }} priority />
          </div>
          
          <div className="container" style={{ position: "relative", zIndex: 10 }}>
            <div className="hero-grid">
              <div style={{ color: "var(--white)", paddingRight: "2rem" }}>
                <span style={{ color: "var(--brand-red)", fontWeight: "700", textTransform: "uppercase", letterSpacing: "1px", display: "block", marginBottom: "0.5rem", fontSize: "0.9rem" }}>LOCAL COVERAGE AREA</span>
                <h1 style={{ color: "var(--white)", marginBottom: "1.5rem", fontSize: "3.5rem", lineHeight: "1.1", fontWeight: "800" }}>Slab Leak Detection & Repair in Central Tucson</h1>
                <p style={{ fontSize: "1.1rem", marginBottom: "2rem", maxWidth: "600px", color: "#e4e4e7", lineHeight: "1.6" }}>
                  The historic and mid-century homes in Central Tucson require a delicate touch. From aging copper lines to unique architectural flooring, we specialize in diagnosing hidden water leaks without unnecessarily destroying your property. 
                </p>
                <p style={{ fontSize: "1.1rem", marginBottom: "2rem", maxWidth: "600px", color: "#e4e4e7", lineHeight: "1.6" }}>
                  Our plumbers expertly detect and repair slab leaks across Downtown, Midtown, and the University areas, offering precision pressure testing and minimally invasive pipe rerouting options.
                </p>
                
                <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", marginBottom: "2rem" }}>
                  <a href="#contact" className="btn-primary" style={{ backgroundColor: "var(--brand-red)", color: "var(--white)", padding: "1rem 2rem", borderRadius: "4px", fontWeight: "bold", textDecoration: "none" }}>REQUEST LEAK DETECTION</a>
                  <a href="tel:555-555-5555" className="btn-secondary" style={{ backgroundColor: "transparent", color: "var(--white)", border: "2px solid var(--white)", padding: "1rem 2rem", borderRadius: "4px", fontWeight: "bold", textDecoration: "none" }}>CALL 520-555-0199</a>
                </div>
              </div>

              <div style={{ backgroundColor: "var(--white)", padding: "2.5rem", borderRadius: "8px", boxShadow: "0 20px 40px rgba(0,0,0,0.2)" }}>
                <h3 style={{ color: "var(--dark-charcoal)", fontSize: "1.5rem", fontWeight: "800", marginBottom: "1.5rem", textAlign: "center" }}>Check Central Availability</h3>
                <ZipCheckerForm />
                <div style={{ marginTop: "1.5rem", paddingTop: "1.5rem", borderTop: "1px solid #e2e8f0" }}>
                  <p style={{ margin: 0, fontSize: "0.9rem", color: "#64748b", textAlign: "center" }}>Primary ZIP Codes: 85701, 85712, 85716, 85719</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Communities Section */}
        <section style={{ padding: "4rem 0", backgroundColor: "#f8fafc" }}>
          <div className="container">
            <h2 style={{ fontSize: "2rem", fontWeight: "800", color: "var(--dark-charcoal)", marginBottom: "1.5rem", textAlign: "center" }}>Neighborhoods We Serve in the Heart of Tucson</h2>
            <p style={{ textAlign: "center", color: "#4a4a4a", marginBottom: "3rem", maxWidth: "800px", margin: "0 auto 3rem" }}>
              Whether you reside in a 1920s bungalow in Armory Park or a mid-century modern home in Miramonte, our team understands the specific plumbing challenges unique to Central Tucson's oldest neighborhoods.
            </p>
            
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1rem" }}>
              {['Sam Hughes', 'Downtown Tucson', 'Armory Park', 'Blenman-Elm', 'Barrio Viejo', 'West University', 'Feldman\'s', 'Miramonte'].map((area) => (
                <div key={area} style={{ backgroundColor: "var(--white)", padding: "1.5rem", borderRadius: "8px", borderLeft: "4px solid var(--brand-red)", fontWeight: "600", color: "var(--dark-charcoal)", boxShadow: "0 2px 4px rgba(0,0,0,0.05)" }}>
                  {area}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Local Service Context */}
        <section style={{ padding: "5rem 0", backgroundColor: "var(--white)" }}>
          <div className="container split-grid" style={{ alignItems: "center" }}>
            <div>
              <h2 style={{ fontSize: "2.2rem", fontWeight: "800", color: "var(--dark-charcoal)", marginBottom: "1.5rem" }}>Protecting Tucson's Historic Architecture</h2>
              <p style={{ fontSize: "1.05rem", color: "#4a4a4a", marginBottom: "1rem", lineHeight: "1.7" }}>
                Central Tucson is famous for its historic adobe structures, deep brick foundations, and beautifully aged hardwood and Saltillo tile floors. When a pipe leaks beneath these foundations, blindly breaking through the floor is not just expensive—it destroys irreplaceable architectural history.
              </p>
              <p style={{ fontSize: "1.05rem", color: "#4a4a4a", marginBottom: "1rem", lineHeight: "1.7" }}>
                Many of the homes in neighborhoods like Sam Hughes and Jefferson Park feature decades-old copper plumbing that has slowly degraded due to Tucson's extremely hard water. Over time, the minerals erode the pipe walls, creating microscopic pinhole leaks under the concrete slab.
              </p>
              <p style={{ fontSize: "1.05rem", color: "#4a4a4a", marginBottom: "1rem", lineHeight: "1.7" }}>
                By utilizing advanced acoustic and thermal imaging technology, we can locate these hidden leaks with pinpoint accuracy. This allows us to offer minimally invasive solutions, such as abandoning the old under-slab pipe entirely and rerouting a clean, new PEX water line through your walls or attic—completely preserving your historic floors.
              </p>
            </div>
            <div>
              <div style={{ backgroundColor: "#18181b", padding: "3rem", borderRadius: "12px", color: "var(--white)", boxShadow: "0 20px 40px rgba(0,0,0,0.15)" }}>
                <h3 style={{ fontSize: "1.5rem", fontWeight: "700", marginBottom: "1.5rem", color: "var(--brand-red)" }}>Central Tucson Leak Warning Signs</h3>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                  <li style={{ display: "flex", alignItems: "flex-start", gap: "1rem" }}>
                    <span style={{ color: "var(--brand-red)", fontSize: "1.2rem", marginTop: "2px" }}>■</span>
                    <div>
                      <strong>Unexplained High Water Bills:</strong> The most common first sign of a hidden leak in older residential neighborhoods.
                    </div>
                  </li>
                  <li style={{ display: "flex", alignItems: "flex-start", gap: "1rem" }}>
                    <span style={{ color: "var(--brand-red)", fontSize: "1.2rem", marginTop: "2px" }}>■</span>
                    <div>
                      <strong>Warm Spots on Saltillo or Tile:</strong> Hot water lines degrading under the slab will heat the concrete above them.
                    </div>
                  </li>
                  <li style={{ display: "flex", alignItems: "flex-start", gap: "1rem" }}>
                    <span style={{ color: "var(--brand-red)", fontSize: "1.2rem", marginTop: "2px" }}>■</span>
                    <div>
                      <strong>Buckling Hardwood:</strong> Historic hardwood floors will absorb moisture from a leaking foundation, causing them to cup or buckle.
                    </div>
                  </li>
                  <li style={{ display: "flex", alignItems: "flex-start", gap: "1rem" }}>
                    <span style={{ color: "var(--brand-red)", fontSize: "1.2rem", marginTop: "2px" }}>■</span>
                    <div>
                      <strong>Running Water Sounds:</strong> Hearing a hiss or flow of water inside your walls when all taps are closed.
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Repair Options & Available Services */}
        <section style={{ padding: "5rem 0", backgroundColor: "#f8fafc" }}>
          <div className="container">
            <div className="split-grid" style={{ marginBottom: "5rem" }}>
              <div>
                <h2 style={{ fontSize: "2.2rem", fontWeight: "800", color: "var(--dark-charcoal)", marginBottom: "1.5rem" }}>Custom Repair Strategies for Older Homes</h2>
                <p style={{ fontSize: "1.05rem", color: "#4a4a4a", marginBottom: "1rem", lineHeight: "1.7" }}>
                  Every home requires a custom approach. Once we isolate the exact location and severity of the leak, our technicians will lay out all available options so you can choose the best path forward for your home and budget.
                </p>
                <div style={{ backgroundColor: "var(--white)", padding: "1.5rem", borderRadius: "8px", border: "1px solid #e2e8f0", marginBottom: "1rem" }}>
                  <h3 style={{ fontSize: "1.2rem", fontWeight: "700", color: "var(--dark-charcoal)", marginBottom: "0.5rem" }}>Water-Line Rerouting (Recommended for Historic Floors)</h3>
                  <p style={{ fontSize: "0.95rem", color: "#64748b", margin: 0 }}>Instead of jackhammering through original flooring, we cap off the leaking pipe beneath the slab and run a modern PEX line through the walls or attic to restore service.</p>
                </div>
                <div style={{ backgroundColor: "var(--white)", padding: "1.5rem", borderRadius: "8px", border: "1px solid #e2e8f0" }}>
                  <h3 style={{ fontSize: "1.2rem", fontWeight: "700", color: "var(--dark-charcoal)", marginBottom: "0.5rem" }}>Direct Spot Repair</h3>
                  <p style={{ fontSize: "0.95rem", color: "#64748b", margin: 0 }}>If the leak is isolated, accessible, and the surrounding pipe is in great condition, we can carefully excavate the exact location and repair the single failure point.</p>
                </div>
              </div>
              
              <div style={{ position: "relative", width: "100%", height: "100%", minHeight: "400px", borderRadius: "12px", overflow: "hidden", boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }}>
                <Image src="/images/water_line_rerouting.jpg" alt="Water line rerouting in a Central Tucson home" fill sizes="(max-width: 768px) 100vw, 600px" style={{ objectFit: "cover" }} />
              </div>
            </div>

            <div style={{ textAlign: "center", marginBottom: "3rem" }}>
              <h2 style={{ fontSize: "2.2rem", fontWeight: "800", color: "var(--dark-charcoal)" }}>Core Services Provided</h2>
            </div>
            
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "2rem" }}>
              <Link href="/slab-leak-detection-tucson" style={{ textDecoration: "none", color: "inherit", display: "block" }}>
                <div style={{ padding: "2rem", borderRadius: "8px", border: "1px solid #e2e8f0", height: "100%", transition: "transform 0.2s, box-shadow 0.2s", cursor: "pointer", backgroundColor: "#fff" }} className="hover-lift">
                  <h3 style={{ fontSize: "1.2rem", fontWeight: "700", color: "var(--brand-red)", marginBottom: "1rem" }}>Leak Detection</h3>
                  <p style={{ color: "#4a4a4a", fontSize: "0.95rem", lineHeight: "1.6", margin: 0 }}>Acoustic and electronic locating to find the precise source of water loss without damaging your property.</p>
                </div>
              </Link>
              <Link href="/slab-leak-repair-tucson" style={{ textDecoration: "none", color: "inherit", display: "block" }}>
                <div style={{ padding: "2rem", borderRadius: "8px", border: "1px solid #e2e8f0", height: "100%", transition: "transform 0.2s, box-shadow 0.2s", cursor: "pointer", backgroundColor: "#fff" }} className="hover-lift">
                  <h3 style={{ fontSize: "1.2rem", fontWeight: "700", color: "var(--brand-red)", marginBottom: "1rem" }}>Slab Leak Repair</h3>
                  <p style={{ color: "#4a4a4a", fontSize: "0.95rem", lineHeight: "1.6", margin: 0 }}>Professional concrete excavation and spot repairs for localized pipe failures.</p>
                </div>
              </Link>
              <Link href="/water-line-pressure-testing-tucson" style={{ textDecoration: "none", color: "inherit", display: "block" }}>
                <div style={{ padding: "2rem", borderRadius: "8px", border: "1px solid #e2e8f0", height: "100%", transition: "transform 0.2s, box-shadow 0.2s", cursor: "pointer", backgroundColor: "#fff" }} className="hover-lift">
                  <h3 style={{ fontSize: "1.2rem", fontWeight: "700", color: "var(--brand-red)", marginBottom: "1rem" }}>Pressure Testing</h3>
                  <p style={{ color: "#4a4a4a", fontSize: "0.95rem", lineHeight: "1.6", margin: 0 }}>Isolating your hot and cold plumbing systems to objectively prove which line is compromised.</p>
                </div>
              </Link>
              <Link href="/water-line-rerouting-tucson" style={{ textDecoration: "none", color: "inherit", display: "block" }}>
                <div style={{ padding: "2rem", borderRadius: "8px", border: "1px solid #e2e8f0", height: "100%", transition: "transform 0.2s, box-shadow 0.2s", cursor: "pointer", backgroundColor: "#fff" }} className="hover-lift">
                  <h3 style={{ fontSize: "1.2rem", fontWeight: "700", color: "var(--brand-red)", marginBottom: "1rem" }}>Pipe Rerouting</h3>
                  <p style={{ color: "#4a4a4a", fontSize: "0.95rem", lineHeight: "1.6", margin: 0 }}>Bypassing the underground leak entirely to protect your floors and prevent future slab leaks.</p>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section style={{ backgroundColor: "var(--white)", padding: "5rem 0" }}>
          <div className="container">
            <h2 style={{ fontSize: "2.2rem", fontWeight: "800", color: "var(--dark-charcoal)", marginBottom: "3rem", textAlign: "center" }}>Central Tucson Slab Leak FAQs</h2>
            <div style={{ maxWidth: "800px", margin: "0 auto" }}>
              <FaqCategory 
                title="Common Questions"
                iconName="MessageCircleQuestion"
                faqs={faqSchema.mainEntity.map((faq: any, idx: number) => ({
                  id: `faq-${idx}`,
                  question: faq.name,
                  answer: faq.acceptedAnswer.text
                }))}
              />
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section id="contact" style={{ backgroundColor: "#18181b", color: "var(--white)", padding: "5rem 0", textAlign: "center" }}>
          <div className="container" style={{ maxWidth: "800px" }}>
            <h2 style={{ fontSize: "2.5rem", fontWeight: "800", marginBottom: "1.5rem", color: "var(--white)" }}>Secure Your Historic Home Today</h2>
            <p style={{ fontSize: "1.1rem", color: "#a1a1aa", marginBottom: "3rem", lineHeight: "1.6" }}>
              If you suspect a leak under your Central Tucson property, don't wait for foundation damage to set in. Submit your details below, and our dispatch team will coordinate a rapid diagnostic visit.
            </p>
            <div style={{ backgroundColor: "var(--white)", padding: "3rem", borderRadius: "12px", textAlign: "left", color: "var(--dark-charcoal)", boxShadow: "0 20px 40px rgba(0,0,0,0.3)" }}>
              <h3 style={{ fontSize: "1.5rem", fontWeight: "800", marginBottom: "1.5rem", textAlign: "center" }}>Request Service Availability</h3>
              <ZipCheckerForm />
            </div>
          </div>
        </section>

      </main>
      <style dangerouslySetInnerHTML={{__html: `
        .hover-lift:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 20px rgba(0,0,0,0.1);
        }
      `}} />
    </>
  );
}
