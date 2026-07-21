import React from 'react';
import Link from 'next/link';
import { MapPin, Phone } from 'lucide-react';

const zipCodes = [
  '85701', '85704', '85705', '85706', '85710', '85711', '85712', '85713',
  '85714', '85715', '85716', '85718', '85719', '85730', '85737', '85741',
  '85742', '85743', '85745', '85746', '85747', '85748', '85749', '85750',
  '85755', '85756', '85757'
];

export default function ZipCodeDirectory() {
  return (
    <section style={{ backgroundColor: "#18181b", color: "var(--white)", padding: "6rem 0", position: "relative", overflow: "hidden" }}>
      {/* Decorative background element */}
      <div style={{ position: "absolute", top: "-50%", left: "-10%", width: "50%", height: "150%", background: "radial-gradient(circle, rgba(229,0,7,0.05) 0%, rgba(24,24,27,0) 70%)", zIndex: 1, pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: "-50%", right: "-10%", width: "50%", height: "150%", background: "radial-gradient(circle, rgba(229,0,7,0.05) 0%, rgba(24,24,27,0) 70%)", zIndex: 1, pointerEvents: "none" }} />

      <div className="container" style={{ position: "relative", zIndex: 10 }}>
        <div style={{ textAlign: "center", marginBottom: "3.5rem", maxWidth: "800px", margin: "0 auto 3.5rem" }}>
          <span style={{ color: "var(--brand-red)", fontWeight: "700", textTransform: "uppercase", letterSpacing: "1px", display: "block", marginBottom: "0.75rem", fontSize: "0.95rem" }}>
            SERVICE COVERAGE
          </span>
          <h2 style={{ fontSize: "2.5rem", fontWeight: "800", color: "var(--white)", marginBottom: "1.25rem", lineHeight: "1.1" }}>
            Tucson Area ZIP Code Directory
          </h2>
          <p style={{ fontSize: "1.1rem", color: "#a1a1aa", lineHeight: "1.6" }}>
            We provide slab leak detection, pressure testing, and under-slab pipe repair to homeowners across the following Tucson ZIP codes. Service availability and emergency response times depend on current technician routing.
          </p>
        </div>

        <div className="zip-grid">
          {zipCodes.map(zip => (
            <Link href="/service-areas/" key={zip} className="zip-badge">
              <MapPin size={16} />
              {zip}
            </Link>
          ))}
        </div>

        <div style={{ marginTop: "5rem", textAlign: "center", padding: "3rem", backgroundColor: "rgba(255,255,255,0.03)", borderRadius: "12px", border: "1px solid rgba(255,255,255,0.05)", boxShadow: "0 10px 30px rgba(0,0,0,0.2)" }}>
          <h3 style={{ fontSize: "1.5rem", color: "var(--white)", marginBottom: "1rem", fontWeight: "700" }}>Don't see your ZIP code?</h3>
          <p style={{ color: "#a1a1aa", marginBottom: "2rem", maxWidth: "600px", margin: "0 auto 2rem", fontSize: "1.05rem" }}>
            We frequently expand our service routes. Call our dispatch team to see if we have a technician available in your area today.
          </p>
          <a href="tel:+18775638191" className="btn-primary" style={{ display: "inline-flex", alignItems: "center", gap: "0.75rem", padding: "1.25rem 2.5rem", borderRadius: "8px", fontSize: "1.1rem" }}>
            <Phone size={20} /> Call 877-563-8191
          </a>
        </div>
      </div>
    </section>
  );
}
