import React from 'react';
import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ZipCheckerForm from '@/components/ZipCheckerForm';
import ZigZagBlocks from '@/components/ZigZagBlocks';
import FaqCategory from '@/components/FaqCategory';

export const metadata: Metadata = {
  title: 'Slab Leak Detection Tucson, AZ | Locate Hidden Leaks',
  description: 'Locate suspected water-line leaks beneath concrete using pressure testing, line isolation and professional leak detection methods in Tucson.',
  openGraph: {
    title: 'Slab Leak Detection Tucson, AZ | Locate Hidden Leaks',
    description: 'Locate suspected water-line leaks beneath concrete using pressure testing, line isolation and professional leak detection methods in Tucson.',
    url: 'https://tucsonslableakpros.com/slab-leak-detection-tucson/',
    siteName: 'Tucson Leak Pros',
    locale: 'en_US',
    type: 'website',
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Slab Leak Detection",
  "provider": {
    "@type": "LocalBusiness",
    "name": "Tucson Leak Pros"
  },
  "areaServed": {
    "@type": "City",
    "name": "Tucson"
  },
  "description": "Professional slab leak detection in Tucson, AZ. Locating hidden water leaks beneath concrete safely."
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is a slab leak?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A slab leak is a plumbing failure in the pressurized water lines beneath a concrete foundation."
      }
    },
    {
      "@type": "Question",
      "name": "How to detect a slab leak in Tucson?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Professionals detect a slab leak in Tucson by isolating the plumbing system, conducting a pressure loss test, and then using acoustic or electronic leak detection equipment to locate the exact source without breaking concrete."
      }
    },
    {
      "@type": "Question",
      "name": "Can a slab leak be found without breaking concrete?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Slab leak detection should be non-destructive. Equipment is used to locate the failure before any flooring is removed."
      }
    },
    {
      "@type": "Question",
      "name": "Does a moving meter mean a slab leak?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A moving meter confirms a leak on the property, but pressure testing and isolation are required to prove the leak is beneath the slab."
      }
    },
    {
      "@type": "Question",
      "name": "How long does slab leak detection take?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Depending on the home's layout and the complexity of the plumbing system, an inspection and detection service typically takes a few hours."
      }
    }
  ]
};

export default function SlabLeakDetection() {
  return (
    <>
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "WebPage", "name": "Slab Leak Detection Tucson, AZ | Locate Hidden Leaks", "description": "Locate suspected water-line leaks beneath concrete using pressure testing, line isolation and professional leak detection methods in Tucson.", "url": "https://tucsonslableakpros.com/slab-leak-detection-tucson/"}) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <main>
        {/* Hero Section */}
        <section style={{ position: "relative", padding: "6rem 0", overflow: "hidden", minHeight: "600px", display: "flex", alignItems: "center" }}>
          <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", zIndex: 0, backgroundColor: "#18181b" }}>
            <img title="Pressure Testing Tucson" src="/images/pressure_testing.jpg" alt="Tucson pressure testing services" style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.35 }} />
          </div>
          
          <div className="container" style={{ position: "relative", zIndex: 10 }}>
            <div className="hero-grid">
              <div style={{ color: "var(--white)", paddingRight: "2rem" }}>
                <span style={{ color: "var(--brand-red)", fontWeight: "700", textTransform: "uppercase", letterSpacing: "1px", display: "block", marginBottom: "0.5rem", fontSize: "0.9rem" }}>NON-DESTRUCTIVE TESTING</span>
                <h1 style={{ color: "var(--white)", marginBottom: "1.5rem", fontSize: "3.5rem", lineHeight: "1.1", fontWeight: "800" }}>Slab Leak Detection Tucson</h1>
                <p style={{ fontSize: "1.1rem", marginBottom: "1rem", maxWidth: "600px", color: "#e4e4e7", lineHeight: "1.6" }}>
                  When water escapes from a pipe beneath your home, the most expensive mistake is opening the floor in the wrong place. 
                </p>
                <p style={{ fontSize: "1.1rem", marginBottom: "2rem", maxWidth: "600px", color: "#e4e4e7", lineHeight: "1.6" }}>
                  As a leading slab leak detection company Tucson homeowners trust, our professional slab leak detection relies on plumbing isolation, <a href="/water-line-pressure-testing-tucson/" style={{ color: "var(--brand-red)", textDecoration: "underline", fontWeight: "600" }}>pressure testing</a>, and specialized equipment to pinpoint the problem before any concrete is touched.
                </p>
                
                <ul style={{ listStyle: "none", padding: 0, marginBottom: "2rem", display: "flex", flexDirection: "column", gap: "1rem" }}>
                  <li style={{ display: "flex", alignItems: "center", gap: "0.75rem", fontSize: "1.1rem", fontWeight: "600" }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--brand-red)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    Slab leak detection without opening the floor
                  </li>
                  <li style={{ display: "flex", alignItems: "center", gap: "0.75rem", fontSize: "1.1rem", fontWeight: "600" }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--brand-red)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    Plumbing isolation and static pressure testing
                  </li>
                  <li style={{ display: "flex", alignItems: "center", gap: "0.75rem", fontSize: "1.1rem", fontWeight: "600" }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--brand-red)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    Electronic and acoustic leak tracking
                  </li>
                </ul>
              </div>

              <ZipCheckerForm />
            </div>
          </div>
        </section>

        {/* Content Section 1: Signs & Symptoms */}
        <section style={{ backgroundColor: "var(--white)", padding: "5rem 0" }}>
          <div className="container split-grid" style={{ alignItems: "center" }}>
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", paddingRight: "3rem" }}>
              <h2 style={{ fontSize: "2.2rem", fontWeight: "800", marginBottom: "1.5rem", color: "var(--dark-charcoal)", lineHeight: "1.2" }}>Signs You Need a Slab Leak Inspection Tucson</h2>
              <p style={{ fontSize: "1.05rem", color: "#4a4a4a", marginBottom: "1rem", lineHeight: "1.7" }}>
                Many homeowners call an underground leak detection Tucson specialist when they notice a <strong>warm spot on floor Tucson</strong> homes commonly have (especially tile), or when a <strong>water meter keeps moving</strong> despite all fixtures being off. Other hidden water leak detection Tucson signs include a <strong>high water bill hidden leak</strong>, or when you <strong>hear water running when fixtures are off</strong>.
              </p>
              <p style={{ fontSize: "1.05rem", color: "#4a4a4a", marginBottom: "1rem", lineHeight: "1.7" }}>
                You might also experience a <strong>musty smell near flooring</strong>, see a <strong>damp floor no visible leak</strong>, or notice <strong>water underneath tile floor</strong>. Before removing tile or cutting into drywall, our slab leak locator Tucson experts will confirm whether the issue is beneath the foundation.
              </p>
              <p style={{ fontSize: "1.05rem", color: "#4a4a4a", fontStyle: "italic", lineHeight: "1.7" }}>
                We separate the hot system from the cold system to prove exactly which line is leaking, stopping the guesswork before it begins.
              </p>
            </div>
            <div style={{ display: "flex" }}>
              <img title="Water Line Rerouting Tucson" src="/images/water_line_rerouting.jpg" alt="Tucson water line rerouting services" style={{ width: "100%", height: "100%", minHeight: "450px", objectFit: "cover", borderRadius: "8px", boxShadow: "0 10px 25px rgba(0,0,0,0.1)" }} />
            </div>
          </div>
        </section>

        {/* What May Justify Detection */}
        <section style={{ backgroundColor: "#f8fafc", padding: "5rem 0" }}>
          <div className="container split-grid">
            <div>
              <h2 style={{ fontSize: "2rem", fontWeight: "800", color: "var(--dark-charcoal)", marginBottom: "1.5rem" }}>Why Choose a Local Slab Leak Detection Tucson Pro?</h2>
              <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "1rem", color: "#4a4a4a", fontSize: "1.05rem", lineHeight: "1.6" }}>
                <li style={{ position: "relative", paddingLeft: "1.5rem" }}><span style={{ position: "absolute", left: 0, color: "var(--brand-red)", fontWeight: "bold" }}>•</span> <strong>Find water leak beneath concrete floor Tucson:</strong> We use specialized acoustic equipment.</li>
                <li style={{ position: "relative", paddingLeft: "1.5rem" }}><span style={{ position: "absolute", left: 0, color: "var(--brand-red)", fontWeight: "bold" }}>•</span> <strong>Slab leak detection for warm tile floor Tucson:</strong> Pinpointing hot-water line issues accurately.</li>
                <li style={{ position: "relative", paddingLeft: "1.5rem" }}><span style={{ position: "absolute", left: 0, color: "var(--brand-red)", fontWeight: "bold" }}>•</span> <strong>Plumber to locate a hidden slab leak Tucson:</strong> You need someone trained specifically in underground tracing.</li>
                <li style={{ position: "relative", paddingLeft: "1.5rem" }}><span style={{ position: "absolute", left: 0, color: "var(--brand-red)", fontWeight: "bold" }}>•</span> <strong>Detect hot-water pipe leak under concrete Tucson:</strong> Distinct from cold-water lines, hot water systems require specific isolation tests.</li>
                <li style={{ position: "relative", paddingLeft: "1.5rem" }}><span style={{ position: "absolute", left: 0, color: "var(--brand-red)", fontWeight: "bold" }}>•</span> <strong>Water meter moving with all fixtures off Tucson:</strong> The #1 indicator that a line is bleeding pressure.</li>
              </ul>
            </div>
            
            <div>
              <h2 style={{ fontSize: "2rem", fontWeight: "800", color: "var(--dark-charcoal)", marginBottom: "1.5rem" }}>Who Performs Slab Leak Detection in Tucson AZ?</h2>
              <p style={{ fontSize: "1.05rem", color: "#4a4a4a", marginBottom: "1rem", lineHeight: "1.6" }}>
                Not every plumber carries acoustic or electronic tracing tools. You need a dedicated <strong>slab leak detector Tucson</strong> specialist or <strong>water leak locator Tucson</strong> expert who performs pressure testing before declaring where the floor should be opened.
              </p>
              <p style={{ fontSize: "1.05rem", color: "#4a4a4a", marginBottom: "1rem", lineHeight: "1.6" }}>
                Our <strong>under-slab water-line leak detection near me</strong> service ensures you don't break concrete blindly. We detect cold-water leaks beneath house slabs and locate leaking pipes beneath foundations across the Tucson metro area.
              </p>
            </div>
          </div>
        </section>

        {/* Process Steps */}
        <section style={{ backgroundColor: "#18181b", color: "var(--white)", padding: "5rem 0" }}>
          <div className="container">
            <h2 style={{ fontSize: "2.2rem", fontWeight: "800", marginBottom: "3rem", textAlign: "center", color: "var(--white)" }}>How Slab Leak Detection Works</h2>
            
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2rem" }}>
              <div style={{ padding: "2rem", borderRadius: "8px", border: "1px solid #333", backgroundColor: "rgba(255,255,255,0.02)" }}>
                <strong style={{ color: "var(--brand-red)", fontSize: "1.2rem", display: "block", marginBottom: "0.5rem" }}>1. Validate & Isolate</strong>
                <p style={{ color: "#a1a1aa", fontSize: "1.05rem", margin: 0 }}>We confirm the meter movement and pressure loss, isolating the hot and cold lines to narrow the problem area.</p>
              </div>
              <div style={{ padding: "2rem", borderRadius: "8px", border: "1px solid #333", backgroundColor: "rgba(255,255,255,0.02)" }}>
                <strong style={{ color: "var(--brand-red)", fontSize: "1.2rem", display: "block", marginBottom: "0.5rem" }}>2. Trace the Route</strong>
                <p style={{ color: "#a1a1aa", fontSize: "1.05rem", margin: 0 }}>We map the under-slab pipe locations using line-tracing equipment so we know exactly where the water travels.</p>
              </div>
              <div style={{ padding: "2rem", borderRadius: "8px", border: "1px solid #333", backgroundColor: "rgba(255,255,255,0.02)" }}>
                <strong style={{ color: "var(--brand-red)", fontSize: "1.2rem", display: "block", marginBottom: "0.5rem" }}>3. Pinpoint Electronically</strong>
                <p style={{ color: "#a1a1aa", fontSize: "1.05rem", margin: 0 }}>We listen for the frequency of escaping water or use thermal tools to detect the leak beneath the concrete safely.</p>
              </div>
            </div>
          </div>
        </section>

        <ZigZagBlocks blocks={[
            {
              kicker: "DETECTION FIRST",
              heading: "Professional Slab Leak Detection in Tucson",
            content: <><p style={{ fontSize: '1.05rem', color: '#4a4a4a', marginBottom: '1rem', lineHeight: '1.7' }}>Detecting a leak beneath a concrete slab is not something you can do with a visual inspection. Our <strong>slab leak detection in Tucson</strong> starts with a static pressure test that confirms whether your hot-water line, cold-water line, or both are actually losing pressure. This step alone eliminates guesswork and prevents unnecessary concrete openings.</p><p style={{ fontSize: '1.05rem', color: '#4a4a4a', marginBottom: '1rem', lineHeight: '1.7' }}>Once the leaking line is identified, we use <strong><a href="/electronic-leak-detection-tucson/" style={{ color: "var(--brand-red)", textDecoration: "underline", fontWeight: "600" }}>electronic leak detection</a></strong> equipment — including acoustic amplifiers and electromagnetic line tracers — to map the pipe route through your slab and pinpoint the exact failure location. The result is a marked spot on your floor, typically accurate to within a few inches.</p><p style={{ fontSize: '1.05rem', color: '#4a4a4a', marginBottom: '1rem', lineHeight: '1.7' }}>This precision matters because it determines whether a direct <strong><a href="/under-slab-pipe-repair-tucson/" style={{ color: "var(--brand-red)", textDecoration: "underline", fontWeight: "600" }}>under-slab pipe repair</a></strong> is feasible or if a <strong>water-line reroute</strong> through the attic would be more cost-effective. We walk you through each option, including estimated costs and timelines, before any concrete is touched.</p></>,
            imageSrc: "/images/slab_leak_detection.jpg",
              imageAlt: "Leak detection",
              imageOnLeft: true,
              backgroundColor: "var(--dark-charcoal)",
              buttonText: "REQUEST DETECTION",
              buttonLink: "/contact"
            },
            {
              kicker: "NON-INVASIVE",
              heading: "Protecting Your Home: Tucson Slab Leak Repair for Tile-Floor Home",
              content: <><p style={{ fontSize: '1.1rem', color: '#4a4a4a', marginBottom: '1.5rem', lineHeight: '1.7' }}>A non-invasive detection is vital for a <strong>Tucson slab leak repair for tile-floor home</strong>. We find the leak without blindly breaking your tiles.</p><p style={{ fontSize: '1.1rem', color: '#4a4a4a', marginBottom: '1.5rem', lineHeight: '1.7' }}>Once located, we can calculate the <strong>cost to fix pipe beneath concrete</strong> and discuss the benefits of a direct <strong>slab leak spot repair Tucson AZ</strong> versus other methods.</p></>,
              imageSrc: "/images/electronic_leak_detection.jpg",
              imageAlt: "Tile floor repair",
              imageOnLeft: false,
              backgroundColor: "var(--white)",
              buttonText: "LEARN MORE",
              buttonLink: "/how-slab-leak-detection-works"
            },
            {
              kicker: "TRANSPARENCY",
              heading: "Upfront Slab Leak Plumber Estimate Tucson",
              content: <><p style={{ fontSize: '1.1rem', color: '#4a4a4a', marginBottom: '1.5rem', lineHeight: '1.7' }}>After detection, we provide a transparent <strong>slab leak plumber estimate Tucson</strong>. You will know exactly what the repair entails before we cut any concrete.</p><p style={{ fontSize: '1.1rem', color: '#4a4a4a', marginBottom: '1.5rem', lineHeight: '1.7' }}>We will outline the <strong><a href="/water-line-rerouting-tucson/" style={{ color: "var(--brand-red)", textDecoration: "underline", fontWeight: "600" }}>Water-line rerouting</a> cost Tucson</strong> as well, so you can make an informed decision on how to repair your home's plumbing.</p></>,
              imageSrc: "/images/slab_leak_service_process.jpg",
              imageAlt: "Estimate process",
              imageOnLeft: true,
              backgroundColor: "#f8fafc",
              buttonText: "GET AN ESTIMATE",
              buttonLink: "/contact"
            },
          ]} />


        {/* FAQs */}
        <section style={{ backgroundColor: "var(--white)", padding: "5rem 0" }}>
          <div className="container">
            <div style={{ maxWidth: "800px", margin: "0 auto" }}>
              <FaqCategory 
                title="Frequently Asked Questions"
                iconName="MessageCircleQuestion"
                faqs={faqSchema.mainEntity.map((faq: any, idx: number) => ({
                  id: `detection-faq-${idx}`,
                  question: faq.name,
                  answer: faq.acceptedAnswer.text
                }))}
              />
              <div style={{ textAlign: "center", marginTop: "2rem" }}>
                <a href="/slab-leak-faq/" style={{ color: "var(--brand-red)", fontWeight: "bold", textDecoration: "none", fontSize: "1.1rem" }}>
                  View All Slab Leak FAQs →</a>
              </div>
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section id="contact" style={{ position: "relative", padding: "6rem 0", overflow: "hidden", minHeight: "600px", display: "flex", alignItems: "center" }}>
          <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", zIndex: 0, backgroundColor: "#18181b" }}>
            <img title="Section Water Meter Tucson" src="/images/section_water_meter.jpg" alt="Residential water meter in Tucson" style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.35 }} />
          </div>
          
          <div className="container" style={{ position: "relative", zIndex: 10 }}>
            <div className="hero-grid">
              <div style={{ color: "var(--white)", paddingRight: "2rem" }}>
                <span style={{ color: "var(--brand-red)", fontWeight: "700", textTransform: "uppercase", letterSpacing: "1px", display: "block", marginBottom: "0.5rem", fontSize: "0.9rem" }}>STOP GUESSING</span>
                <h2 style={{ color: "var(--white)", marginBottom: "1.5rem", fontSize: "3.5rem", lineHeight: "1.1", fontWeight: "800" }}>Get Professional Slab Leak Detection in Tucson</h2>
                <p style={{ fontSize: "1.1rem", marginBottom: "2rem", maxWidth: "600px", color: "#e4e4e7", lineHeight: "1.6" }}>
                  Provide your ZIP code, describe your symptoms (moving meter, warm floor, pressure drop), and we'll connect you with a qualified locator.
                </p>
              </div>

              <ZipCheckerForm />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
