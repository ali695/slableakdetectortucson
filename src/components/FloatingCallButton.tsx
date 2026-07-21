import { Phone } from "lucide-react";

export default function FloatingCallButton() {
  return (
    <a
      href="tel:+18775638191"
      className="floating-call-button"
      aria-label="Call Tucson Leak Pros at 877-563-8191"
      title="Call 877-563-8191"
    >
      <Phone aria-hidden="true" strokeWidth={2.6} />
    </a>
  );
}
