import React from 'react';
import { Metadata } from 'next';
import ZipCheckerForm from '@/components/ZipCheckerForm';
import FaqCategory from '@/components/FaqCategory';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Slab Leak Diagnostics West Tucson & Picture Rocks',
  description: 'Specialized slab leak detection and repair across West Tucson. We handle hard caliche soil, private service lines, and custom properties.',
  openGraph: {
    title: 'Slab Leak Diagnostics West Tucson & Picture Rocks',
    description: 'Specialized slab leak detection and repair across West Tucson. We handle hard caliche soil, private service lines, and custom properties.',
    url: 'https://tucsonslableakpros.com/service-areas/west-tucson/',
    siteName: 'Tucson Leak Pros',
    locale: 'en_US',
    images: [{ url: "/images/services_hub_hero.jpg", width: 1200, height: 630, alt: "Slab Leak Detection West Tucson, AZ" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Slab Leak Diagnostics West Tucson & Picture Rocks",
    description: "Specialized slab leak detection and repair across West Tucson.",
    images: ["/images/services_hub_hero.jpg"],
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Why is it so hard to find leaks on properties with caliche soil in West Tucson?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Caliche is a naturally occurring, concrete-like layer of soil extremely common in West Tucson. When a pipe leaks beneath caliche, the water often cannot penetrate downward. Instead, it travels horizontally along the rock layer, surfacing far away from the actual broken pipe, making acoustic leak detection essential."
      }
    },
    {
      "@type": "Question",
      "name": "Do you perform leak detection on private well systems in Picture Rocks?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. However, finding a leak on a rural property with a private well requires isolating the well pump, pressure tank, and long exterior service lines before we can accurately test the under-slab plumbing inside the home."
      }
    },
    {
      "@type": "Question",
      "name": "Can you reroute plumbing if my home is built into the foothills?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Many custom homes in West Tucson have split-level foundations or are built into the hillside. While this makes direct slab repair difficult, we specialize in routing flexible PEX lines through attics or framed walls to bypass the broken pipe entirely."
      }
    }
  ]
};

export default function WestTucson() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <main>
        {/* Hero Section */}
        <section style={{ position: "relative", padding: "8rem 0 6rem", overflow: "hidden", minHeight: "600px", display: "flex", alignItems: "center" }}>
          <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", zIndex: 0, backgroundColor: "#18181b" }}>
            <Image title="West Tucson Slab Leak Services" src="/images/hero_home.jpg" alt="Home in West Tucson foothills" fill sizes="100vw" style={{ objectFit: "cover", opacity: 0.4 }} priority />
          </div>
          
          <div className="container" style={{ position: "relative", zIndex: 10 }}>
            <div className="hero-grid">
              <div style={{ color: "var(--white)", paddingRight: "2rem" }}>
                <span style={{ color: "var(--brand-red)", fontWeight: "700", textTransform: "uppercase", letterSpacing: "1px", display: "block", marginBottom: "0.5rem", fontSize: "0.9rem" }}>LOCAL COVERAGE AREA</span>
                <h1 style={{ color: "var(--white)", marginBottom: "1.5rem", fontSize: "3.5rem", lineHeight: "1.1", fontWeight: "800" }}>Slab Leak Experts in West Tucson</h1>
                <p style={{ fontSize: "1.1rem", marginBottom: "2rem", maxWidth: "600px", color: "#e4e4e7", lineHeight: "1.6" }}>
                  Properties in West Tucson, from the Tucson Mountains out to Picture Rocks, present unique geological and plumbing challenges. Hard caliche soil and long private water lines make guessing where a leak is incredibly risky.
                </p>
                <p style={{ fontSize: "1.1rem", marginBottom: "2rem", maxWidth: "600px", color: "#e4e4e7", lineHeight: "1.6" }}>
                  Our professional technicians utilize advanced acoustic sensors to locate hidden water loss, ensuring your property is protected whether you live in a custom foothills estate or a rural ranch.
                </p>
                
                <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", marginBottom: "2rem" }}>
                  <a href="#contact" className="btn-primary" style={{ backgroundColor: "var(--brand-red)", color: "var(--white)", padding: "1rem 2rem", borderRadius: "4px", fontWeight: "bold", textDecoration: "none" }}>REQUEST LEAK DETECTION</a>
                  <a href="tel:555-555-5555" className="btn-secondary" style={{ backgroundColor: "transparent", color: "var(--white)", border: "2px solid var(--white)", padding: "1rem 2rem", borderRadius: "4px", fontWeight: "bold", textDecoration: "none" }}>CALL 520-555-0199</a>
                </div>
              </div>

              <div style={{ backgroundColor: "var(--white)", padding: "2.5rem", borderRadius: "8px", boxShadow: "0 20px 40px rgba(0,0,0,0.2)" }}>
                <h3 style={{ color: "var(--dark-charcoal)", fontSize: "1.5rem", fontWeight: "800", marginBottom: "1.5rem", textAlign: "center" }}>Check West Tucson Availability</h3>
                <ZipCheckerForm />
                <div style={{ marginTop: "1.5rem", paddingTop: "1.5rem", borderTop: "1px solid #e2e8f0" }}>
                  <p style={{ margin: 0, fontSize: "0.9rem", color: "#64748b", textAlign: "center" }}>Primary ZIP Codes: 85745, 85743, 85746</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Communities Section */}
        <section style={{ padding: "4rem 0", backgroundColor: "#f8fafc" }}>
          <div className="container">
            <h2 style={{ fontSize: "2rem", fontWeight: "800", color: "var(--dark-charcoal)", marginBottom: "1.5rem", textAlign: "center" }}>Communities We Serve on the West Side</h2>
            <p style={{ textAlign: "center", color: "#4a4a4a", marginBottom: "3rem", maxWidth: "800px", margin: "0 auto 3rem" }}>
              From the neighborhoods nestled against the Tucson Mountains all the way out to Avra Valley and Picture Rocks.
            </p>
            
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1rem" }}>
              {['Starr Pass', 'Tucson Mountains', 'Picture Rocks', 'Avra Valley', 'Silverbell', 'Menlo Park', 'Sweetwater'].map((area) => (
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
              <h2 style={{ fontSize: "2.2rem", fontWeight: "800", color: "var(--dark-charcoal)", marginBottom: "1.5rem" }}>Overcoming Caliche and Custom Foundations</h2>
              <p style={{ fontSize: "1.05rem", color: "#4a4a4a", marginBottom: "1rem", lineHeight: "1.7" }}>
                West Tucson is renowned for its rocky soil and thick layers of caliche. Because caliche acts like natural concrete, water from a leaking pipe often cannot drain down into the earth. Instead, it travels sideways, surfacing yards away from the actual broken pipe. If a plumber simply digs where they see water, they will likely destroy your yard or floor for no reason.
              </p>
              <p style={{ fontSize: "1.05rem", color: "#4a4a4a", marginBottom: "1rem", lineHeight: "1.7" }}>
                Additionally, many homes near Starr Pass or the Tucson Mountains feature custom, split-level foundations. Plumbing routes in these homes are complex. Before any jackhammers are brought in, we perform rigorous isolation testing to confirm exactly which line (hot or cold) is compromised.
              </p>
              <p style={{ fontSize: "1.05rem", color: "#4a4a4a", marginBottom: "1rem", lineHeight: "1.7" }}>
                For rural properties further west, such as Picture Rocks, high water usage or well pump cycling might actually be caused by a long exterior yard line failing, rather than an under-slab leak. We trace these lines accurately to save you money on unnecessary indoor repairs.
              </p>
            </div>
            <div>
              <div style={{ backgroundColor: "#18181b", padding: "3rem", borderRadius: "12px", color: "var(--white)", boxShadow: "0 20px 40px rgba(0,0,0,0.15)" }}>
                <h3 style={{ fontSize: "1.5rem", fontWeight: "700", marginBottom: "1.5rem", color: "var(--brand-red)" }}>Signs of a West Tucson Pipe Failure</h3>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                  <li style={{ display: "flex", alignItems: "flex-start", gap: "1rem" }}>
                    <span style={{ color: "var(--brand-red)", fontSize: "1.2rem", marginTop: "2px" }}>■</span>
                    <div>
                      <strong>Constant Well Pump Cycling:</strong> If your private well pump turns on and off constantly when you aren't using water, you likely have an underground leak.
                    </div>
                  </li>
                  <li style={{ display: "flex", alignItems: "flex-start", gap: "1rem" }}>
                    <span style={{ color: "var(--brand-red)", fontSize: "1.2rem", marginTop: "2px" }}>■</span>
                    <div>
                      <strong>Unusually Green Patches of Yard:</strong> In the dry Tucson desert, a random patch of lush weeds or grass over a caliche bed often points directly to a leaking water line.
                    </div>
                  </li>
                  <li style={{ display: "flex", alignItems: "flex-start", gap: "1rem" }}>
                    <span style={{ color: "var(--brand-red)", fontSize: "1.2rem", marginTop: "2px" }}>■</span>
                    <div>
                      <strong>Warm Flooring Inside the Home:</strong> A hot water pipe leaking under a concrete slab will radiate heat upward into your tile or carpet.
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
                  <h3 style={{ fontSize: "1.2rem", fontWeight: "700", color: "var(--brand-red)", marginBottom: "1rem" }}>Acoustic Leak Detection</h3>
                  <p style={{ color: "#4a4a4a", fontSize: "0.95rem", lineHeight: "1.6", margin: 0 }}>Locating the exact frequency of escaping water, even when it travels horizontally across hard caliche rock.</p>
                </div>
              </Link>
              <Link href="/slab-leak-repair-tucson" style={{ textDecoration: "none", color: "inherit", display: "block" }}>
                <div style={{ padding: "2rem", borderRadius: "8px", border: "1px solid #e2e8f0", height: "100%", transition: "transform 0.2s, box-shadow 0.2s", cursor: "pointer", backgroundColor: "#fff" }} className="hover-lift">
                  <h3 style={{ fontSize: "1.2rem", fontWeight: "700", color: "var(--brand-red)", marginBottom: "1rem" }}>Concrete Spot Repair</h3>
                  <p style={{ color: "#4a4a4a", fontSize: "0.95rem", lineHeight: "1.6", margin: 0 }}>If the leak is indoors, we can execute precision concrete removal to fix the broken line directly.</p>
                </div>
              </Link>
              <Link href="/water-line-pressure-testing-tucson" style={{ textDecoration: "none", color: "inherit", display: "block" }}>
                <div style={{ padding: "2rem", borderRadius: "8px", border: "1px solid #e2e8f0", height: "100%", transition: "transform 0.2s, box-shadow 0.2s", cursor: "pointer", backgroundColor: "#fff" }} className="hover-lift">
                  <h3 style={{ fontSize: "1.2rem", fontWeight: "700", color: "var(--brand-red)", marginBottom: "1rem" }}>System Isolation Testing</h3>
                  <p style={{ color: "#4a4a4a", fontSize: "0.95rem", lineHeight: "1.6", margin: 0 }}>We test your house lines against long yard lines or well equipment to ensure we are digging in the right place.</p>
                </div>
              </Link>
              <Link href="/water-line-rerouting-tucson" style={{ textDecoration: "none", color: "inherit", display: "block" }}>
                <div style={{ padding: "2rem", borderRadius: "8px", border: "1px solid #e2e8f0", height: "100%", transition: "transform 0.2s, box-shadow 0.2s", cursor: "pointer", backgroundColor: "#fff" }} className="hover-lift">
                  <h3 style={{ fontSize: "1.2rem", fontWeight: "700", color: "var(--brand-red)", marginBottom: "1rem" }}>Pipe Rerouting</h3>
                  <p style={{ color: "#4a4a4a", fontSize: "0.95rem", lineHeight: "1.6", margin: 0 }}>Bypassing broken underground pipes entirely by routing a new, durable PEX line overhead through your walls or attic.</p>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section style={{ backgroundColor: "var(--white)", padding: "5rem 0" }}>
          <div className="container">
            <h2 style={{ fontSize: "2.2rem", fontWeight: "800", color: "var(--dark-charcoal)", marginBottom: "3rem", textAlign: "center" }}>West Tucson Slab Leak FAQs</h2>
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
            <h2 style={{ fontSize: "2.5rem", fontWeight: "800", marginBottom: "1.5rem", color: "var(--white)" }}>Stop Water Loss Today</h2>
            <p style={{ fontSize: "1.1rem", color: "#a1a1aa", marginBottom: "3rem", lineHeight: "1.6" }}>
              Don't let a hidden leak damage your property or drain your well. Request a diagnostic visit for your West Tucson home now.
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
