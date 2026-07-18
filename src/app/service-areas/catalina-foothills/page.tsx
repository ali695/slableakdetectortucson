import React from 'react';
import { Metadata } from 'next';
import ZipCheckerForm from '@/components/ZipCheckerForm';
import FaqCategory from '@/components/FaqCategory';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Slab Leak Detection Catalina Foothills, AZ',
  description: 'Specialized slab leak detection for luxury estates in the Catalina Foothills. We protect custom flooring and navigate rocky hillside foundations.',
  openGraph: {
    title: 'Slab Leak Detection Catalina Foothills, AZ',
    description: 'Specialized slab leak detection for luxury estates in the Catalina Foothills. We protect custom flooring and navigate rocky hillside foundations.',
    url: 'https://tucsonslableakpros.com/service-areas/catalina-foothills/',
    siteName: 'Tucson Leak Pros',
    locale: 'en_US',
    images: [{ url: "/images/services_hub_hero.jpg", width: 1200, height: 630, alt: "Slab Leak Detection Catalina Foothills, AZ" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Slab Leak Detection Catalina Foothills, AZ",
    description: "Specialized slab leak detection for luxury estates in the Catalina Foothills.",
    images: ["/images/services_hub_hero.jpg"],
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How does building into the foothills affect leak detection?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Homes in the Catalina Foothills often have multi-level or stepped foundations built directly into solid rock and caliche. When a pipe leaks beneath these custom slabs, the water is forced to travel horizontally, often surfacing far away from the actual break. This makes acoustic leak location absolutely critical before attempting any repair."
      }
    },
    {
      "@type": "Question",
      "name": "Can high water pressure in the Foothills cause slab leaks?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. To push water up into higher elevations, municipal water pressure is often higher in the foothills. Over time, high pressure combined with Tucson's hard water creates immense friction inside copper pipes, leading to pinhole leaks under the slab."
      }
    },
    {
      "@type": "Question",
      "name": "How do you fix a leak without destroying my custom flooring?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We prioritize pipe rerouting for luxury homes. By abandoning the broken underground pipe and routing a new, flexible PEX water line through the attic and walls, we completely bypass the slab and preserve your expensive tile, hardwood, and marble flooring."
      }
    }
  ]
};

export default function CatalinaFoothills() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <main>
        {/* Hero Section */}
        <section style={{ position: "relative", padding: "8rem 0 6rem", overflow: "hidden", minHeight: "600px", display: "flex", alignItems: "center" }}>
          <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", zIndex: 0, backgroundColor: "#18181b" }}>
            <Image title="Catalina Foothills Slab Leak Services" src="/images/hero_home.jpg" alt="Luxury home in the Catalina Foothills" fill sizes="100vw" style={{ objectFit: "cover", opacity: 0.4 }} priority />
          </div>
          
          <div className="container" style={{ position: "relative", zIndex: 10 }}>
            <div className="hero-grid">
              <div style={{ color: "var(--white)", paddingRight: "2rem" }}>
                <span style={{ color: "var(--brand-red)", fontWeight: "700", textTransform: "uppercase", letterSpacing: "1px", display: "block", marginBottom: "0.5rem", fontSize: "0.9rem" }}>LOCAL COVERAGE AREA</span>
                <h1 style={{ color: "var(--white)", marginBottom: "1.5rem", fontSize: "3.5rem", lineHeight: "1.1", fontWeight: "800" }}>Slab Leak Experts in the Catalina Foothills</h1>
                <p style={{ fontSize: "1.1rem", marginBottom: "2rem", maxWidth: "600px", color: "#e4e4e7", lineHeight: "1.6" }}>
                  Luxury estates require a specialized approach. The rocky, sloping terrain of the Catalina Foothills makes diagnosing and repairing underground leaks complex. 
                </p>
                <p style={{ fontSize: "1.1rem", marginBottom: "2rem", maxWidth: "600px", color: "#e4e4e7", lineHeight: "1.6" }}>
                  We utilize advanced acoustic location technology to pinpoint leaks accurately, allowing us to offer clean, non-invasive repair options that protect your custom flooring and property value.
                </p>
                
                <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", marginBottom: "2rem" }}>
                  <a href="#contact" className="btn-primary" style={{ backgroundColor: "var(--brand-red)", color: "var(--white)", padding: "1rem 2rem", borderRadius: "4px", fontWeight: "bold", textDecoration: "none" }}>REQUEST LEAK DETECTION</a>
                  <a href="tel:555-555-5555" className="btn-secondary" style={{ backgroundColor: "transparent", color: "var(--white)", border: "2px solid var(--white)", padding: "1rem 2rem", borderRadius: "4px", fontWeight: "bold", textDecoration: "none" }}>CALL 520-555-0199</a>
                </div>
              </div>

              <div style={{ backgroundColor: "var(--white)", padding: "2.5rem", borderRadius: "8px", boxShadow: "0 20px 40px rgba(0,0,0,0.2)" }}>
                <h3 style={{ color: "var(--dark-charcoal)", fontSize: "1.5rem", fontWeight: "800", marginBottom: "1.5rem", textAlign: "center" }}>Check Foothills Availability</h3>
                <ZipCheckerForm />
                <div style={{ marginTop: "1.5rem", paddingTop: "1.5rem", borderTop: "1px solid #e2e8f0" }}>
                  <p style={{ margin: 0, fontSize: "0.9rem", color: "#64748b", textAlign: "center" }}>Primary ZIP Codes: 85718, 85750</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Communities Section */}
        <section style={{ padding: "4rem 0", backgroundColor: "#f8fafc" }}>
          <div className="container">
            <h2 style={{ fontSize: "2rem", fontWeight: "800", color: "var(--dark-charcoal)", marginBottom: "1.5rem", textAlign: "center" }}>Serving Exclusive Foothills Estates</h2>
            <p style={{ textAlign: "center", color: "#4a4a4a", marginBottom: "3rem", maxWidth: "800px", margin: "0 auto 3rem" }}>
              We respect the privacy, architecture, and landscaping of Tucson's most exclusive neighborhoods, providing discreet and professional diagnostic services.
            </p>
            
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1rem" }}>
              {['Ventana Canyon', 'La Paloma', 'Skyline Country Club', 'Finisterra', 'Pima Canyon', 'Catalina Foothills Estates', 'Cobblestone'].map((area) => (
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
              <h2 style={{ fontSize: "2.2rem", fontWeight: "800", color: "var(--dark-charcoal)", marginBottom: "1.5rem" }}>Navigating Complex Custom Foundations</h2>
              <p style={{ fontSize: "1.05rem", color: "#4a4a4a", marginBottom: "1rem", lineHeight: "1.7" }}>
                Building a luxury home into the Santa Catalina Mountains involves excavating solid rock and pouring stepped, multi-level concrete foundations. When a plumbing line ruptures beneath these massive slabs, the water will take the path of least resistance through the bedrock, frequently showing up on the opposite side of the house from the actual leak.
              </p>
              <p style={{ fontSize: "1.05rem", color: "#4a4a4a", marginBottom: "1rem", lineHeight: "1.7" }}>
                Because of the immense value of custom flooring—from imported marble to hand-scraped hardwood—jackhammering to find a leak through trial and error is completely unacceptable. We use highly calibrated ground microphones and thermal imaging to verify the exact failure point.
              </p>
              <p style={{ fontSize: "1.05rem", color: "#4a4a4a", marginBottom: "1rem", lineHeight: "1.7" }}>
                In almost all Foothills cases, we recommend a clean pipe reroute. By disconnecting the compromised underground line and routing a new water line through the attic and interior walls, we leave your foundation and flooring untouched.
              </p>
            </div>
            <div>
              <div style={{ backgroundColor: "#18181b", padding: "3rem", borderRadius: "12px", color: "var(--white)", boxShadow: "0 20px 40px rgba(0,0,0,0.15)" }}>
                <h3 style={{ fontSize: "1.5rem", fontWeight: "700", marginBottom: "1.5rem", color: "var(--brand-red)" }}>Warning Signs for Estate Properties</h3>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                  <li style={{ display: "flex", alignItems: "flex-start", gap: "1rem" }}>
                    <span style={{ color: "var(--brand-red)", fontSize: "1.2rem", marginTop: "2px" }}>■</span>
                    <div>
                      <strong>Unexplained High Water Usage:</strong> With large footprints and heavy irrigation, a subtle slab leak often hides as a slightly higher utility bill for months.
                    </div>
                  </li>
                  <li style={{ display: "flex", alignItems: "flex-start", gap: "1rem" }}>
                    <span style={{ color: "var(--brand-red)", fontSize: "1.2rem", marginTop: "2px" }}>■</span>
                    <div>
                      <strong>Water Seeping from Retaining Walls:</strong> Because Foothills homes are built on slopes, a slab leak will often drain outward and seep through exterior retaining walls.
                    </div>
                  </li>
                  <li style={{ display: "flex", alignItems: "flex-start", gap: "1rem" }}>
                    <span style={{ color: "var(--brand-red)", fontSize: "1.2rem", marginTop: "2px" }}>■</span>
                    <div>
                      <strong>Hot Spots on Custom Floors:</strong> A hot water slab leak will radiate intense heat through tile or stone flooring.
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Core Services */}
        <section style={{ padding: "5rem 0", backgroundColor: "#f8fafc" }}>
          <div className="container">
            <div style={{ textAlign: "center", marginBottom: "3rem" }}>
              <h2 style={{ fontSize: "2.2rem", fontWeight: "800", color: "var(--dark-charcoal)" }}>Luxury Slab Leak Solutions</h2>
            </div>
            
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "2rem" }}>
              <Link href="/slab-leak-detection-tucson" style={{ textDecoration: "none", color: "inherit", display: "block" }}>
                <div style={{ padding: "2rem", borderRadius: "8px", border: "1px solid #e2e8f0", height: "100%", transition: "transform 0.2s, box-shadow 0.2s", cursor: "pointer", backgroundColor: "#fff" }} className="hover-lift">
                  <h3 style={{ fontSize: "1.2rem", fontWeight: "700", color: "var(--brand-red)", marginBottom: "1rem" }}>Precision Leak Detection</h3>
                  <p style={{ color: "#4a4a4a", fontSize: "0.95rem", lineHeight: "1.6", margin: 0 }}>We locate the exact source of water loss through thick, stepped concrete slabs and rocky sub-bases.</p>
                </div>
              </Link>
              <Link href="/water-line-rerouting-tucson" style={{ textDecoration: "none", color: "inherit", display: "block" }}>
                <div style={{ padding: "2rem", borderRadius: "8px", border: "1px solid #e2e8f0", height: "100%", transition: "transform 0.2s, box-shadow 0.2s", cursor: "pointer", backgroundColor: "#fff" }} className="hover-lift">
                  <h3 style={{ fontSize: "1.2rem", fontWeight: "700", color: "var(--brand-red)", marginBottom: "1rem" }}>Clean Pipe Rerouting</h3>
                  <p style={{ color: "#4a4a4a", fontSize: "0.95rem", lineHeight: "1.6", margin: 0 }}>Our preferred method for custom homes: completely bypassing the slab by running new PEX lines through the walls and attic.</p>
                </div>
              </Link>
              <Link href="/slab-leak-repair-tucson" style={{ textDecoration: "none", color: "inherit", display: "block" }}>
                <div style={{ padding: "2rem", borderRadius: "8px", border: "1px solid #e2e8f0", height: "100%", transition: "transform 0.2s, box-shadow 0.2s", cursor: "pointer", backgroundColor: "#fff" }} className="hover-lift">
                  <h3 style={{ fontSize: "1.2rem", fontWeight: "700", color: "var(--brand-red)", marginBottom: "1rem" }}>Surgical Concrete Repair</h3>
                  <p style={{ color: "#4a4a4a", fontSize: "0.95rem", lineHeight: "1.6", margin: 0 }}>If a direct repair is required, we use localized, precision cutting to expose and fix the pipe with minimal intrusion.</p>
                </div>
              </Link>
              <Link href="/water-line-pressure-testing-tucson" style={{ textDecoration: "none", color: "inherit", display: "block" }}>
                <div style={{ padding: "2rem", borderRadius: "8px", border: "1px solid #e2e8f0", height: "100%", transition: "transform 0.2s, box-shadow 0.2s", cursor: "pointer", backgroundColor: "#fff" }} className="hover-lift">
                  <h3 style={{ fontSize: "1.2rem", fontWeight: "700", color: "var(--brand-red)", marginBottom: "1rem" }}>System Isolation Testing</h3>
                  <p style={{ color: "#4a4a4a", fontSize: "0.95rem", lineHeight: "1.6", margin: 0 }}>Isolating complex plumbing manifolds to prove exactly which line is leaking before recommending a repair strategy.</p>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section style={{ backgroundColor: "var(--white)", padding: "5rem 0" }}>
          <div className="container">
            <h2 style={{ fontSize: "2.2rem", fontWeight: "800", color: "var(--dark-charcoal)", marginBottom: "3rem", textAlign: "center" }}>Catalina Foothills FAQs</h2>
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
            <h2 style={{ fontSize: "2.5rem", fontWeight: "800", marginBottom: "1.5rem", color: "var(--white)" }}>Protect Your Estate From Water Damage</h2>
            <p style={{ fontSize: "1.1rem", color: "#a1a1aa", marginBottom: "3rem", lineHeight: "1.6" }}>
              Don't leave your luxury home's plumbing to chance. Request an expert diagnostic visit for your Catalina Foothills property today.
            </p>
            <div style={{ backgroundColor: "var(--white)", padding: "3rem", borderRadius: "12px", textAlign: "left", color: "var(--dark-charcoal)", boxShadow: "0 20px 40px rgba(0,0,0,0.3)" }}>
              <h3 style={{ fontSize: "1.5rem", fontWeight: "800", marginBottom: "1.5rem", textAlign: "center" }}>Request Service Now</h3>
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
