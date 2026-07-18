export default function CalloutBox({ title, description, cta, phone }: { title: string, description: string, cta: string, phone: string }) {
  return (
    <div className="callout-box">
      <div className="callout-icon">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
          <circle cx="12" cy="10" r="3"></circle>
        </svg>
      </div>
      <div className="callout-content">
        {title} <strong>{phone}</strong><br/>
        <span style={{ fontWeight: 400, fontSize: "0.95rem" }}>{description} <a href="#contact" style={{ color: "var(--brand-red)", textDecoration: "underline", fontWeight: 700 }}>{cta}</a></span>
      </div>
    </div>
  );
}
