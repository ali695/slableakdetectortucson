"use client";
import React, { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    zip: "",
    symptom: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Thank you ${formData.name}. Your request for ZIP ${formData.zip} has been submitted.`);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="form-card">
      <h3 style={{ marginTop: 0, marginBottom: "0.5rem", fontSize: "1.6rem", fontWeight: "800", color: "var(--dark-charcoal)", textAlign: "center" }}>Request Service</h3>
      <p style={{ fontSize: "0.95rem", color: "#4a4a4a", marginBottom: "1.5rem", textAlign: "center" }}>Fill out the form below to receive a rapid response from our team.</p>
      
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <div className="responsive-flex">
          <div style={{ flex: 1 }}>
            <label style={{ display: "block", marginBottom: "0.25rem", fontWeight: "bold", fontSize: "0.9rem" }}>Full Name</label>
            <input type="text" name="name" className="form-control" style={{ marginBottom: 0 }} placeholder="John Doe" value={formData.name} onChange={handleChange} required />
          </div>
          <div style={{ flex: 1 }}>
            <label style={{ display: "block", marginBottom: "0.25rem", fontWeight: "bold", fontSize: "0.9rem" }}>Phone Number</label>
            <input type="tel" name="phone" className="form-control" style={{ marginBottom: 0 }} placeholder="(520) 555-0123" value={formData.phone} onChange={handleChange} required />
          </div>
        </div>

        <div className="responsive-flex">
          <div style={{ flex: 1 }}>
            <label style={{ display: "block", marginBottom: "0.25rem", fontWeight: "bold", fontSize: "0.9rem" }}>ZIP code</label>
            <input type="text" name="zip" className="form-control" style={{ marginBottom: 0 }} placeholder="e.g. 85710" value={formData.zip} onChange={handleChange} required />
          </div>
          <div style={{ flex: 1 }}>
            <label style={{ display: "block", marginBottom: "0.25rem", fontWeight: "bold", fontSize: "0.9rem" }}>Main symptom</label>
            <select name="symptom" className="form-control" style={{ marginBottom: 0 }} value={formData.symptom} onChange={handleChange} required>
              <option value="">Select...</option>
              <option value="Warm flooring">Warm flooring</option>
              <option value="Damp flooring">Damp flooring</option>
              <option value="High water bill">High water bill</option>
              <option value="Running water sound">Running water sound</option>
              <option value="Not sure">Not sure</option>
            </select>
          </div>
        </div>

        <div>
          <label style={{ display: "block", marginBottom: "0.25rem", fontWeight: "bold", fontSize: "0.9rem" }}>Additional Details</label>
          <textarea name="message" className="form-control" style={{ marginBottom: 0 }} rows={3} placeholder="Please describe any damages or specific concerns..." value={formData.message} onChange={handleChange}></textarea>
        </div>

        <button type="submit" style={{ width: "100%", padding: "1.25rem", fontSize: "1.1rem", fontWeight: "bold", backgroundColor: "var(--brand-red)", color: "var(--white)", border: "none", borderRadius: "8px", cursor: "pointer", marginTop: "0.5rem" }}>SUBMIT REQUEST</button>
        <p style={{ fontSize: "0.75rem", color: "#71717a", textAlign: "center", marginTop: "0.5rem", marginBottom: 0 }}>
          We aim to respond to all inquiries within 15 minutes during regular hours.
        </p>
      </form>
    </div>
  );
}
