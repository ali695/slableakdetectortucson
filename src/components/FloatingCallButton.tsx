import { Phone } from "lucide-react";

export default function FloatingCallButton() {
  return (
    <a
      href="tel:+15205930550"
      className="floating-call-button"
      aria-label="Call Tucson Leak Pros at (520) 593-0550"
      title="Call (520) 593-0550"
    >
      <Phone aria-hidden="true" strokeWidth={2.6} />
    </a>
  );
}
