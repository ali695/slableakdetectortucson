import React from 'react';
import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ZipCheckerForm from '@/components/ZipCheckerForm';
import ZigZagBlocks from '@/components/ZigZagBlocks';
import FaqCategory from '@/components/FaqCategory';

export const metadata: Metadata = {
  title: 'Slab Leak Repair Tucson | Pipe Repair & Rerouting',
  description: 'Review slab leak repair options in Tucson, including controlled pipe access, spot repair, water-line rerouting and partial pipe replacement.',
  openGraph: {
    title: 'Slab Leak Repair Tucson | Pipe Repair & Rerouting',
    description: 'Review slab leak repair options in Tucson, including controlled pipe access, spot repair, water-line rerouting and partial pipe replacement.',
    url: 'https://tucsonslableakpros.com/slab-leak-repair-tucson/',
    siteName: 'Tucson Leak Pros',
    locale: 'en_US',
    type: 'website',
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Slab Leak Repair",
  "provider": {
    "@type": "LocalBusiness",
    "name": "Tucson Leak Pros"
  },
  "areaServed": {
    "@type": "City",
    "name": "Tucson"
  },
  "description": "Professional slab leak repair in Tucson, AZ, handling spot repairs and water-line reroutes for under-slab plumbing."
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Can a slab leak be repaired without breaking concrete?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, by abandoning the under-slab pipe entirely and rerouting the water line through a wall or ceiling. Otherwise, a direct spot repair will require a controlled concrete opening."
      }
    },
    {
      "@type": "Question",
      "name": "Should I repair or reroute a slab leak?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "It depends on the condition of the pipe, the location of the leak, and the flooring above it. A plumber for confirmed slab leak Tucson can explain whether a spot repair or rerouting is best."
      }
    },
    {
      "@type": "Question",
      "name": "How much does slab leak repair cost in Tucson?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Slab leak repair cost Tucson estimates depend on whether you choose direct access spot repair or a water-line rerouting. Factors include concrete depth, flooring type, and the extent of pipe damage."
      }
    },
    {
      "@type": "Question",
      "name": "What is repeated slab leak repair?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "If a plumbing branch is deteriorating, it may spring multiple leaks over time. In these cases, pipe replacement or partial repiping is recommended over repeated spot repairs."
      }
    }
  ]
};

export default function SlabLeakRepair() {
  return (
    <>
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "WebPage", "name": "Slab Leak Repair Tucson | Pipe Repair & Rerouting", "description": "Review slab leak repair options in Tucson, including controlled pipe access, spot repair, water-line rerouting and partial pipe replacement.", "url": "https://tucsonslableakpros.com/slab-leak-repair-tucson/"}) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <main>
        {/* Hero Section */}
        <section style={{ position: "relative", padding: "6rem 0", overflow: "hidden", minHeight: "600px", display: "flex", alignItems: "center" }}>
          <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", zIndex: 0, backgroundColor: "#18181b" }}>
            <img title="Hero Partial Repiping Tucson" src="/images/hero_partial_repiping.jpg" alt="Tucson partial repiping experts" style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.35 }} />
          </div>
          
          <div className="container" style={{ position: "relative", zIndex: 10 }}>
            <div className="hero-grid">
              <div style={{ color: "var(--white)", paddingRight: "2rem" }}>
                <span style={{ color: "var(--brand-red)", fontWeight: "700", textTransform: "uppercase", letterSpacing: "1px", display: "block", marginBottom: "0.5rem", fontSize: "0.9rem" }}>DIRECT ACCESS & REROUTING</span>
                <h1 style={{ color: "var(--white)", marginBottom: "1.5rem", fontSize: "3.5rem", lineHeight: "1.1", fontWeight: "800" }}>Slab Leak Repair Tucson</h1>
                <p style={{ fontSize: "1.1rem", marginBottom: "1rem", maxWidth: "600px", color: "#e4e4e7", lineHeight: "1.6" }}>
                  A confirmed leak beneath a finished tile or concrete floor requires a clear repair plan, not just demolition. 
                </p>
                <p style={{ fontSize: "1.1rem", marginBottom: "2rem", maxWidth: "600px", color: "#e4e4e7", lineHeight: "1.6" }}>
                  As a dedicated slab leak repair company Tucson trusts, we help you understand your slab leak repair options. We handle <a href="/under-slab-pipe-repair-tucson/" style={{ color: "var(--brand-red)", textDecoration: "underline", fontWeight: "600" }}>under-slab leak</a> repair Tucson homes need, whether that means a direct spot repair or <a href="/water-line-rerouting-tucson/" style={{ color: "var(--brand-red)", textDecoration: "underline", fontWeight: "600" }}>water-line rerouting</a>.
                </p>
                
                <ul style={{ listStyle: "none", padding: 0, marginBottom: "2rem", display: "flex", flexDirection: "column", gap: "1rem" }}>
                  <li style={{ display: "flex", alignItems: "center", gap: "0.75rem", fontSize: "1.1rem", fontWeight: "600" }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--brand-red)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    Direct access spot repair
                  </li>
                  <li style={{ display: "flex", alignItems: "center", gap: "0.75rem", fontSize: "1.1rem", fontWeight: "600" }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--brand-red)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    Slab leak water-line rerouting
                  </li>
                  <li style={{ display: "flex", alignItems: "center", gap: "0.75rem", fontSize: "1.1rem", fontWeight: "600" }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--brand-red)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    <a href="/water-line-pressure-testing-tucson/" style={{ color: "var(--brand-red)", textDecoration: "underline", fontWeight: "600" }}>Pressure testing</a> after repair
                  </li>
                </ul>
              </div>

              <ZipCheckerForm />
            </div>
          </div>
        </section>

        {/* Content Section 1: Plumbing Slab Leak Repair Tucson */}
        <section style={{ backgroundColor: "var(--white)", padding: "5rem 0" }}>
          <div className="container split-grid" style={{ alignItems: "center" }}>
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", paddingRight: "3rem" }}>
              <h2 style={{ fontSize: "2.2rem", fontWeight: "800", marginBottom: "1.5rem", color: "var(--dark-charcoal)", lineHeight: "1.2" }}>Plumbing Slab Leak Repair Tucson Needs</h2>
              <p style={{ fontSize: "1.05rem", color: "#4a4a4a", marginBottom: "1rem", lineHeight: "1.7" }}>
                When looking for a <strong>plumber to fix slab leak Tucson</strong>, it's critical to hire a professional who offers multiple solutions. <strong>Repairing a leaking water pipe under concrete Tucson</strong> usually involves one of two choices: a direct-access spot repair, or abandoning the line entirely to reroute it.
              </p>
              <p style={{ fontSize: "1.05rem", color: "#4a4a4a", marginBottom: "1rem", lineHeight: "1.7" }}>
                Whether you need to <strong>fix hot-water pipe leak beneath slab Tucson</strong> or a cold-water line, the best approach depends on your flooring and the overall condition of the pipe. As your <strong>slab leak contractor Tucson</strong>, we explain the <strong>slab leak <a href="/slab-leak-repair-cost-tucson/" style={{ color: "var(--brand-red)", textDecoration: "underline", fontWeight: "600" }}>repair cost</a> Tucson</strong> implications of both methods.
              </p>
            </div>
            <div style={{ display: "flex" }}>
              <img title="Hot Water Slab Leak Tucson" src="/images/hot_water_slab_leak.jpg" alt="Tucson hot water slab leak services" style={{ width: "100%", height: "100%", minHeight: "450px", objectFit: "cover", borderRadius: "8px", boxShadow: "0 10px 25px rgba(0,0,0,0.1)" }} />
            </div>
          </div>
        </section>

        {/* Spot Repair vs Rerouting (Decision Keywords) */}
        <section style={{ backgroundColor: "#f8fafc", padding: "5rem 0" }}>
          <div className="container">
            <h2 style={{ fontSize: "2.2rem", fontWeight: "800", color: "var(--dark-charcoal)", marginBottom: "3rem", textAlign: "center" }}>Slab Leak Spot Repair vs Rerouting</h2>
            
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))", gap: "2rem" }}>
              <div style={{ padding: "2.5rem", borderRadius: "8px", backgroundColor: "var(--white)", borderTop: "4px solid var(--dark-charcoal)", boxShadow: "0 4px 15px rgba(0,0,0,0.03)" }}>
                <h3 style={{ fontSize: "1.5rem", fontWeight: "700", color: "var(--dark-charcoal)", marginBottom: "1rem" }}>Direct-Access Slab Leak Repair</h3>
                <p style={{ color: "#4a4a4a", fontSize: "1.05rem", lineHeight: "1.6", marginBottom: "1rem" }}>
                  <strong>Pipe repair through concrete floor Tucson</strong>: If the leak is isolated and located under accessible tile or carpet, a direct spot repair is often the fastest solution. We create a controlled opening, expose the <strong>concrete slab pipe repair</strong>, replace the damaged section, and patch the concrete.
                </p>
              </div>
              <div style={{ padding: "2.5rem", borderRadius: "8px", backgroundColor: "var(--white)", borderTop: "4px solid var(--brand-red)", boxShadow: "0 4px 15px rgba(0,0,0,0.03)" }}>
                <h3 style={{ fontSize: "1.5rem", fontWeight: "700", color: "var(--dark-charcoal)", marginBottom: "1rem" }}>Water-Line Rerouting</h3>
                <p style={{ color: "#4a4a4a", fontSize: "1.05rem", lineHeight: "1.6", marginBottom: "1rem" }}>
                  <strong>Slab leak repair without opening entire floor</strong>: If you have expensive, continuous flooring or the pipe is heavily corroded, <strong>repair or reroute leaking under-slab pipe</strong> decisions usually lean toward rerouting. We abandon the failing underground pipe and run a new line through the walls or attic.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Cost & Who Repairs */}
        <section style={{ backgroundColor: "#18181b", color: "var(--white)", padding: "5rem 0" }}>
          <div className="container split-grid">
            <div>
              <h2 style={{ color: "var(--white)", fontSize: "2rem", fontWeight: "800", marginBottom: "1.5rem" }}>Who Repairs Slab Leaks in Tucson Arizona?</h2>
              <p style={{ fontSize: "1.05rem", color: "#a1a1aa", marginBottom: "1rem", lineHeight: "1.6" }}>
                Our <strong>residential slab leak repair</strong> teams handle both the detection and the plumbing repair. When you hire an <strong><a href="/emergency-slab-leak-service-tucson/" style={{ color: "var(--brand-red)", textDecoration: "underline", fontWeight: "600" }}>emergency slab leak</a> repair Tucson</strong> professional, you want someone who can offer comprehensive solutions, whether that is a <strong>Tucson slab leak repair for tile-floor home</strong> or a full line bypass.
              </p>
            </div>
            
            <div>
              <h2 style={{ color: "var(--white)", fontSize: "2rem", fontWeight: "800", marginBottom: "1.5rem" }}>Understanding Slab Leak Repair Cost Tucson</h2>
              <p style={{ fontSize: "1.05rem", color: "#a1a1aa", marginBottom: "1rem", lineHeight: "1.6" }}>
                The <strong>cost to fix pipe beneath concrete</strong> varies based on the method. A <strong>slab leak spot repair Tucson AZ</strong> typically focuses costs on the plumbing and concrete patching. <strong>Water-line rerouting cost Tucson</strong> involves drywall repair and new pipe materials. We provide a transparent <strong>slab leak plumber estimate Tucson</strong> before any work begins.
              </p>
            </div>
          </div>
        </section>

        <ZigZagBlocks blocks={[
          {
            kicker: "OUR EXPERTISE",
            heading: "Tucson Slab Leak Repair Process",
            content: <><p style={{ fontSize: '1.05rem', color: '#4a4a4a', marginBottom: '1rem', lineHeight: '1.7' }}>Every <strong>slab leak repair in Tucson</strong> begins with a verified detection report that tells us exactly where the pipe has failed beneath your foundation. We use that data to plan the smallest possible concrete opening, minimizing disruption to your flooring and reducing the overall project cost.</p><p style={{ fontSize: '1.05rem', color: '#4a4a4a', marginBottom: '1rem', lineHeight: '1.7' }}>The repair itself involves cutting a controlled access point through the concrete, exposing the damaged pipe section, and replacing it with new copper or PEX fittings rated for under-slab applications. Once the new section is soldered or crimped in place, we run a full <strong><a href="/water-line-pressure-testing-tucson/" style={{ color: "var(--brand-red)", textDecoration: "underline", fontWeight: "600" }}>pressure test</a></strong> to confirm the line holds at normal operating pressure before closing up.</p><p style={{ fontSize: '1.05rem', color: '#4a4a4a', marginBottom: '1rem', lineHeight: '1.7' }}>For Tucson homes with tile, travertine, or decorative concrete floors, we coordinate the access cut carefully to align with grout lines when possible. This makes the eventual floor restoration significantly easier and less expensive. We also document the exact location and depth of the repair for your home records and any future plumbing work.</p></>,
            imageSrc: "/images/slab_leak_repair.jpg",
            imageAlt: "Slab leak repair",
            imageOnLeft: true,
            backgroundColor: "var(--dark-charcoal)",
            buttonText: "REQUEST A QUOTE",
            buttonLink: "/contact"
          },
          {
            kicker: "SPOT REPAIR",
            heading: "Slab Leak Spot Repair Tucson AZ",
            content: <><p style={{ fontSize: '1.1rem', color: '#4a4a4a', marginBottom: '1.5rem', lineHeight: '1.7' }}>In many cases, a direct <strong>slab leak spot repair Tucson AZ</strong> is the most efficient solution. We break a small, controlled access point in the concrete to replace the damaged pipe.</p><p style={{ fontSize: '1.1rem', color: '#4a4a4a', marginBottom: '1.5rem', lineHeight: '1.7' }}>This method helps keep the <strong>cost to fix pipe beneath concrete</strong> manageable. However, a <strong>Tucson slab leak repair for tile-floor home</strong> may require tile restoration afterward. We work meticulously to keep the access hole as small as absolutely necessary, reducing your final restoration costs.</p></>,
            imageSrc: "/images/slab_leak_service_process.jpg",
            imageAlt: "Spot repair",
            imageOnLeft: false,
            backgroundColor: "var(--white)",
            buttonText: "LEARN ABOUT SPOT REPAIR",
            buttonLink: "/how-slab-leak-detection-works"
          },
          {
            kicker: "REROUTING OPTIONS",
            heading: "Transparent Water-Line Rerouting Cost Tucson",
            content: <><p style={{ fontSize: '1.1rem', color: '#4a4a4a', marginBottom: '1.5rem', lineHeight: '1.7' }}>If your plumbing is failing in multiple spots, we will evaluate the <strong>Water-line rerouting cost Tucson</strong> to bypass the slab entirely.</p><p style={{ fontSize: '1.1rem', color: '#4a4a4a', marginBottom: '1.5rem', lineHeight: '1.7' }}>We will provide a detailed <strong>slab leak plumber estimate Tucson</strong> comparing the spot repair against the reroute, empowering you to make the best choice for your home. By running new PEX piping through your walls or attic, you permanently eliminate the risk of future slab leaks on that line.</p></>,
            imageSrc: "/images/water_line_reroute.jpg",
            imageAlt: "Water line rerouting",
            imageOnLeft: true,
            backgroundColor: "#f8fafc",
            buttonText: "DISCUSS REROUTING",
            buttonLink: "/contact"
          }
        ]} />


        {/* FAQs */}
        <section style={{ backgroundColor: "var(--white)", padding: "5rem 0" }}>
          <div className="container">
            <div style={{ maxWidth: "800px", margin: "0 auto" }}>
              <FaqCategory 
                title="Slab Leak Repair FAQ"
                iconName="MessageCircleQuestion"
                faqs={faqSchema.mainEntity.map((faq: any, idx: number) => ({
                  id: `repair-faq-${idx}`,
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
            <img title="Emergency Slab Leak Service Tucson" src="/images/emergency_slab_leak_service.jpg" alt="Tucson emergency slab leak repair technician" style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.35 }} />
          </div>
          
          <div className="container" style={{ position: "relative", zIndex: 10 }}>
            <div className="hero-grid">
              <div style={{ color: "var(--white)", paddingRight: "2rem" }}>
                <span style={{ color: "var(--brand-red)", fontWeight: "700", textTransform: "uppercase", letterSpacing: "1px", display: "block", marginBottom: "0.5rem", fontSize: "0.9rem" }}>EXPERT SLAB LEAK PLUMBER TUCSON</span>
                <h2 style={{ color: "var(--white)", marginBottom: "1.5rem", fontSize: "3.5rem", lineHeight: "1.1", fontWeight: "800" }}>Get a Repair Estimate Today</h2>
                <p style={{ fontSize: "1.1rem", marginBottom: "2rem", maxWidth: "600px", color: "#e4e4e7", lineHeight: "1.6" }}>
                  Let us review your leak detection findings and discuss the best repair method for slab leak Tucson properties.
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
