"use client";

import React, { useState } from 'react';
import FaqAccordion from './FaqAccordion';
import { LucideIcon, Thermometer, Search, Droplets, Wrench, Calculator, ShieldAlert, MapPin, Home, MessageCircleQuestion } from 'lucide-react';
import Link from 'next/link';

const iconMap: Record<string, LucideIcon> = {
  Thermometer, Search, Droplets, Wrench, Calculator, ShieldAlert, MapPin, Home, MessageCircleQuestion
};

interface FaqItem {
  id: string;
  question: string;
  answer: React.ReactNode;
}

interface FaqCategoryProps {
  title: string;
  iconName?: string;
  description?: string;
  faqs: FaqItem[];
  relatedGuideLink?: { href: string; label: string };
  relatedServiceLink?: { href: string; label: string };
  defaultOpenId?: string | null;
}

export default function FaqCategory({ 
  title, 
  iconName = 'MessageCircleQuestion', 
  description, 
  faqs, 
  relatedGuideLink, 
  relatedServiceLink,
  defaultOpenId = null
}: FaqCategoryProps) {
  const [openId, setOpenId] = useState<string | null>(defaultOpenId);
  
  const Icon = iconMap[iconName] || MessageCircleQuestion;

  const handleToggle = (id: string) => {
    setOpenId(prevId => prevId === id ? null : id);
  };

  return (
    <div style={{ marginBottom: "4rem" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: description ? "1rem" : "2rem", borderBottom: "2px solid #e2e8f0", paddingBottom: "1rem" }}>
        <Icon size={28} color="var(--brand-red)" />
        <h2 style={{ fontSize: "2rem", fontWeight: "800", color: "var(--dark-charcoal)", margin: 0 }}>{title}</h2>
      </div>
      
      {description && (
        <p style={{ color: "#4a4a4a", fontSize: "1.1rem", marginBottom: "2rem" }}>{description}</p>
      )}

      <div style={{ display: "flex", flexDirection: "column" }}>
        {faqs.map(faq => (
          <FaqAccordion
            key={faq.id}
            id={faq.id}
            question={faq.question}
            answer={faq.answer}
            isOpen={openId === faq.id}
            onToggle={() => handleToggle(faq.id)}
          />
        ))}
      </div>

      {(relatedGuideLink || relatedServiceLink) && (
        <div style={{ display: "flex", gap: "1rem", marginTop: "1.5rem", flexWrap: "wrap" }}>
          {relatedGuideLink && (
            <Link href={relatedGuideLink.href} style={{ color: "var(--brand-red)", fontWeight: "bold", textDecoration: "none", display: "flex", alignItems: "center", gap: "0.5rem" }}>
              → {relatedGuideLink.label}
            </Link>
          )}
          {relatedServiceLink && (
            <Link href={relatedServiceLink.href} style={{ color: "var(--brand-red)", fontWeight: "bold", textDecoration: "none", display: "flex", alignItems: "center", gap: "0.5rem" }}>
              → {relatedServiceLink.label}
            </Link>
          )}
        </div>
      )}
    </div>
  );
}
