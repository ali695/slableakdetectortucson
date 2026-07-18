"use client";
import React, { useState } from 'react';

export default function ZipCheckerForm() {
  const [zip, setZip] = useState("");
  const [symptom, setSymptom] = useState("");

  const handleZipCheck = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Request submitted for Zip: ${zip}`);
  };

  return (
    <div className="form-card">
      <h3 style={{ marginTop: 0, marginBottom: "0.5rem", fontSize: "1.4rem", fontWeight: "800", color: "var(--dark-charcoal)", textAlign: "center" }}>Check Availability</h3>
      <p style={{ fontSize: "0.95rem", color: "#4a4a4a", marginBottom: "1.5rem", textAlign: "center" }}>Enter your ZIP code to check coverage.</p>
      
      <form onSubmit={handleZipCheck} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <div>
          <label style={{ display: "block", marginBottom: "0.25rem", fontWeight: "bold", fontSize: "0.9rem" }}>ZIP code</label>
          <input type="text" className="form-control" style={{ marginBottom: 0 }} placeholder="e.g. 85710" value={zip} onChange={e => setZip(e.target.value)} required />
        </div>
        <div>
          <label style={{ display: "block", marginBottom: "0.25rem", fontWeight: "bold", fontSize: "0.9rem" }}>Main symptom</label>
          <select className="form-control" style={{ marginBottom: 0 }} value={symptom} onChange={e => setSymptom(e.target.value)} required>
            <option value="">Select a symptom...</option>
            <option value="Warm flooring">Warm flooring</option>
            <option value="Damp flooring">Damp flooring</option>
            <option value="Moving water meter">Moving water meter</option>
            <option value="High water usage">High water usage</option>
            <option value="Low water pressure">Low water pressure</option>
            <option value="Active water damage">Active water damage</option>
            <option value="Confirmed slab leak">Confirmed slab leak</option>
            <option value="Not sure">Not sure</option>
          </select>
        </div>
        <button type="submit" style={{ width: "100%", padding: "1rem", fontSize: "1rem", fontWeight: "bold", backgroundColor: "var(--dark-charcoal)", color: "var(--white)", border: "none", borderRadius: "8px", cursor: "pointer", marginTop: "0.5rem" }}>CHECK COVERAGE</button>
        <p style={{ fontSize: "0.75rem", color: "#71717a", textAlign: "center", marginTop: "0.5rem", marginBottom: 0 }}>
          Submitting a ZIP code does not automatically confirm an appointment.
        </p>
      </form>
    </div>
  );
}
