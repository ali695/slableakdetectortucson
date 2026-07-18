import React from 'react';
import { Metadata } from 'next';
import ZipCheckerForm from '@/components/ZipCheckerForm';
import FaqCategory from '@/components/FaqCategory';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Slab Leak Detection North Tucson & Casas Adobes',
  description: 'Specialized slab leak detection for homes in North Tucson and Casas Adobes. We navigate post-tension slabs and polybutylene pipe risks safely.',
  openGraph: {
    title: 'Slab Leak Detection North Tucson & Casas Adobes',
    description: 'Specialized slab leak detection for homes in North Tucson and Casas Adobes. We navigate post-tension slabs and polybutylene pipe risks safely.',
    url: 'https://tucsonslableakpros.com/service-areas/north-tucson/',
    siteName: 'Tucson Leak Pros',
    locale: 'en_US',
    images: [{ url: "/images/services_hub_hero.jpg", width: 1200, height: 630, alt: "Slab Leak Detection North Tucson, AZ" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Slab Leak Detection North Tucson & Casas Adobes",
    description: "Specialized slab leak detection for homes in North Tucson and Casas Adobes.",
    images: ["/images/services_hub_hero.jpg"],
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Are post-tension slabs common in North Tucson?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, many subdivisions built in North Tucson during the 1990s and 2000s utilize post-tension concrete slabs. These slabs contain highly tensioned steel cables. Jackhammering into them without extreme precision is incredibly dangerous and can cause severe structural damage, which is why accurate leak detection is absolutely critical."
      }
    },
    {
      "@type": "Question",
      "name": "What is polybutylene piping and why is it a risk?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Polybutylene (often gray or blue plastic piping) was heavily used in residential plumbing from the late 70s through the mid-90s. Many homes in Casas Adobes and North Tucson have this piping, which is notoriously prone to unexpected ruptures under the slab as it degrades."
      }
    },
    {
      "@type": "Question",
      "name": "How quickly can you locate a leak in Casas Adobes?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We offer rapid response across North Tucson. Using advanced electronic and acoustic detection gear, we can usually pinpoint the exact location of a compromised pipe within a few hours of arriving on site."
      }
    }
  ]
};

export default function NorthTucson() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <main>
        {/* Hero Section */}
        <section style={{ position: "relative", padding: "8rem 0 6rem", overflow: "hidden", minHeight: "600px", display: "flex", alignItems: "center" }}>
          <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", zIndex: 0, backgroundColor: "#18181b" }}>
            <Image title="North Tucson Slab Leak Services" src="/images/hero_home.jpg" alt="Home in North Tucson" fill sizes="100vw" style={{ objectFit: "cover", opacity: 0.4 }} priority />
          </div>
          
          <div className="container" style={{ position: "relative", zIndex: 10 }}>
            <div className="hero-grid">
              <div style={{ color: "var(--white)", paddingRight: "2rem" }}>
                <span style={{ color: "var(--brand-red)", fontWeight: "700", textTransform: "uppercase", letterSpacing: "1px", display: "block", marginBottom: "0.5rem", fontSize: "0.9rem" }}>LOCAL COVERAGE AREA</span>
                <h1 style={{ color: "var(--white)", marginBottom: "1.5rem", fontSize: "3.5rem", lineHeight: "1.1", fontWeight: "800" }}>Slab Leak Experts in North Tucson & Casas Adobes</h1>
                <p style={{ fontSize: "1.1rem", marginBottom: "2rem", maxWidth: "600px", color: "#e4e4e7", lineHeight: "1.6" }}>
                  Tackling plumbing leaks in North Tucson requires specific knowledge of post-tension slabs and late-20th-century plumbing materials like polybutylene. We bring specialized diagnostic tools to safely locate leaks without endangering your home's structural integrity.
                </p>
                <p style={{ fontSize: "1.1rem", marginBottom: "2rem", maxWidth: "600px", color: "#e4e4e7", lineHeight: "1.6" }}>
                  Whether you live near Casas Adobes or Flowing Wells, our team guarantees transparent pricing, professional electronic detection, and custom repair options.
                </p>
                
                <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", marginBottom: "2rem" }}>
                  <a href="#contact" className="btn-primary" style={{ backgroundColor: "var(--brand-red)", color: "var(--white)", padding: "1rem 2rem", borderRadius: "4px", fontWeight: "bold", textDecoration: "none" }}>REQUEST LEAK DETECTION</a>
                  <a href="tel:555-555-5555" className="btn-secondary" style={{ backgroundColor: "transparent", color: "var(--white)", border: "2px solid var(--white)", padding: "1rem 2rem", borderRadius: "4px", fontWeight: "bold", textDecoration: "none" }}>CALL 520-555-0199</a>
                </div>
              </div>

              <div style={{ backgroundColor: "var(--white)", padding: "2.5rem", borderRadius: "8px", boxShadow: "0 20px 40px rgba(0,0,0,0.2)" }}>
                <h3 style={{ color: "var(--dark-charcoal)", fontSize: "1.5rem", fontWeight: "800", marginBottom: "1.5rem", textAlign: "center" }}>Check North Tucson Availability</h3>
                <ZipCheckerForm />
                <div style={{ marginTop: "1.5rem", paddingTop: "1.5rem", borderTop: "1px solid #e2e8f0" }}>
                  <p style={{ margin: 0, fontSize: "0.9rem", color: "#64748b", textAlign: "center" }}>Primary ZIP Codes: 85704, 85705, 85737, 85741, 85742</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Communities Section */}
        <section style={{ padding: "4rem 0", backgroundColor: "#f8fafc" }}>
          <div className="container">
            <h2 style={{ fontSize: "2rem", fontWeight: "800", color: "var(--dark-charcoal)", marginBottom: "1.5rem", textAlign: "center" }}>Neighborhoods We Serve in North Tucson</h2>
            <p style={{ textAlign: "center", color: "#4a4a4a", marginBottom: "3rem", maxWidth: "800px", margin: "0 auto 3rem" }}>
              From the bustling corridors of Oracle Road out to the peaceful enclaves of Tortolita, we are the trusted local experts for non-invasive pipe testing and repair.
            </p>
            
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1rem" }}>
              {['Casas Adobes', 'Flowing Wells', 'Tortolita', 'Cortaro', 'Northwest Tucson', 'Rillito'].map((area) => (
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
              <h2 style={{ fontSize: "2.2rem", fontWeight: "800", color: "var(--dark-charcoal)", marginBottom: "1.5rem" }}>The Dangers of Post-Tension Slabs</h2>
              <p style={{ fontSize: "1.05rem", color: "#4a4a4a", marginBottom: "1rem", lineHeight: "1.7" }}>
                A large percentage of homes built in North Tucson and Casas Adobes between 1985 and 2010 were constructed on post-tension concrete slabs. These foundations are reinforced with steel cables stretched under immense pressure.
              </p>
              <p style={{ fontSize: "1.05rem", color: "#4a4a4a", marginBottom: "1rem", lineHeight: "1.7" }}>
                If an inexperienced plumber guesses the location of a leak and hits one of these cables with a jackhammer, it can snap with explosive force, causing catastrophic structural damage to your home and serious injury.
              </p>
              <p style={{ fontSize: "1.05rem", color: "#4a4a4a", marginBottom: "1rem", lineHeight: "1.7" }}>
                This is why guessing is never an option for us. We use highly calibrated acoustic listeners and electronic pressure testing to map out exactly where the leak is occurring. For homes with post-tension slabs, we frequently recommend <strong>water line rerouting</strong> through the walls or attic to completely avoid the dangers of concrete excavation altogether.
              </p>
            </div>
            <div>
              <div style={{ backgroundColor: "#18181b", padding: "3rem", borderRadius: "12px", color: "var(--white)", boxShadow: "0 20px 40px rgba(0,0,0,0.15)" }}>
                <h3 style={{ fontSize: "1.5rem", fontWeight: "700", marginBottom: "1.5rem", color: "var(--brand-red)" }}>Warning Signs of a Failing Pipe</h3>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                  <li style={{ display: "flex", alignItems: "flex-start", gap: "1rem" }}>
                    <span style={{ color: "var(--brand-red)", fontSize: "1.2rem", marginTop: "2px" }}>■</span>
                    <div>
                      <strong>A Spinning Water Meter:</strong> If your meter dial is moving while all fixtures are off, water is escaping somewhere underground.
                    </div>
                  </li>
                  <li style={{ display: "flex", alignItems: "flex-start", gap: "1rem" }}>
                    <span style={{ color: "var(--brand-red)", fontSize: "1.2rem", marginTop: "2px" }}>■</span>
                    <div>
                      <strong>Mold or Mildew Smells:</strong> Water wicking up through the slab into carpet padding often creates a musty odor long before it's visible.
                    </div>
                  </li>
                  <li style={{ display: "flex", alignItems: "flex-start", gap: "1rem" }}>
                    <span style={{ color: "var(--brand-red)", fontSize: "1.2rem", marginTop: "2px" }}>■</span>
                    <div>
                      <strong>Cracking Floor Tiles:</strong> While settling occurs, sudden localized cracking in tile floors can indicate foundation heave caused by a water leak.
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
              <h2 style={{ fontSize: "2.2rem", fontWeight: "800", color: "var(--dark-charcoal)" }}>Professional Slab Leak Solutions</h2>
            </div>
            
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "2rem" }}>
              <Link href="/slab-leak-detection-tucson" style={{ textDecoration: "none", color: "inherit", display: "block" }}>
                <div style={{ padding: "2rem", borderRadius: "8px", border: "1px solid #e2e8f0", height: "100%", transition: "transform 0.2s, box-shadow 0.2s", cursor: "pointer", backgroundColor: "#fff" }} className="hover-lift">
                  <h3 style={{ fontSize: "1.2rem", fontWeight: "700", color: "var(--brand-red)", marginBottom: "1rem" }}>Electronic Leak Detection</h3>
                  <p style={{ color: "#4a4a4a", fontSize: "0.95rem", lineHeight: "1.6", margin: 0 }}>Advanced diagnostics to pinpoint under-slab water loss without damaging your floors or post-tension slab.</p>
                </div>
              </Link>
              <Link href="/slab-leak-repair-tucson" style={{ textDecoration: "none", color: "inherit", display: "block" }}>
                <div style={{ padding: "2rem", borderRadius: "8px", border: "1px solid #e2e8f0", height: "100%", transition: "transform 0.2s, box-shadow 0.2s", cursor: "pointer", backgroundColor: "#fff" }} className="hover-lift">
                  <h3 style={{ fontSize: "1.2rem", fontWeight: "700", color: "var(--brand-red)", marginBottom: "1rem" }}>Direct Spot Repair</h3>
                  <p style={{ color: "#4a4a4a", fontSize: "0.95rem", lineHeight: "1.6", margin: 0 }}>Precision concrete excavation for isolated pipe failures, ensuring surrounding cables and structures are unharmed.</p>
                </div>
              </Link>
              <Link href="/water-line-pressure-testing-tucson" style={{ textDecoration: "none", color: "inherit", display: "block" }}>
                <div style={{ padding: "2rem", borderRadius: "8px", border: "1px solid #e2e8f0", height: "100%", transition: "transform 0.2s, box-shadow 0.2s", cursor: "pointer", backgroundColor: "#fff" }} className="hover-lift">
                  <h3 style={{ fontSize: "1.2rem", fontWeight: "700", color: "var(--brand-red)", marginBottom: "1rem" }}>Diagnostic Testing</h3>
                  <p style={{ color: "#4a4a4a", fontSize: "0.95rem", lineHeight: "1.6", margin: 0 }}>We isolate your hot and cold lines to definitively prove which system is compromised.</p>
                </div>
              </Link>
              <Link href="/water-line-rerouting-tucson" style={{ textDecoration: "none", color: "inherit", display: "block" }}>
                <div style={{ padding: "2rem", borderRadius: "8px", border: "1px solid #e2e8f0", height: "100%", transition: "transform 0.2s, box-shadow 0.2s", cursor: "pointer", backgroundColor: "#fff" }} className="hover-lift">
                  <h3 style={{ fontSize: "1.2rem", fontWeight: "700", color: "var(--brand-red)", marginBottom: "1rem" }}>PEX Rerouting</h3>
                  <p style={{ color: "#4a4a4a", fontSize: "0.95rem", lineHeight: "1.6", margin: 0 }}>The safest option for many North Tucson homes. We abandon the broken pipe and route a new line through the attic.</p>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section style={{ backgroundColor: "var(--white)", padding: "5rem 0" }}>
          <div className="container">
            <h2 style={{ fontSize: "2.2rem", fontWeight: "800", color: "var(--dark-charcoal)", marginBottom: "3rem", textAlign: "center" }}>North Tucson & Casas Adobes FAQs</h2>
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
            <h2 style={{ fontSize: "2.5rem", fontWeight: "800", marginBottom: "1.5rem", color: "var(--white)" }}>Stop Water Damage Before It Spreads</h2>
            <p style={{ fontSize: "1.1rem", color: "#a1a1aa", marginBottom: "3rem", lineHeight: "1.6" }}>
              Our expert technicians are standing by to evaluate your North Tucson property. Enter your details below and we will confirm availability and schedule your diagnostic testing immediately.
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
