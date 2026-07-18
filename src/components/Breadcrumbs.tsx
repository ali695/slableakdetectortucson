import React from 'react';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://tucsonslableakpros.com/"
      },
      ...items.map((item, index) => ({
        "@type": "ListItem",
        "position": index + 2,
        "name": item.label,
        "item": item.href ? `https://tucsonslableakpros.com${item.href}` : undefined
      }))
    ]
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <nav aria-label="Breadcrumb" style={{ backgroundColor: '#f8fafc', padding: '0.75rem 0', borderBottom: '1px solid #e2e8f0' }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', fontSize: '0.875rem', color: '#64748b' }}>
          <Link href="/" style={{ color: 'var(--brand-red)', textDecoration: 'none', fontWeight: 600 }}>Home</Link>
          <ChevronRight size={14} style={{ margin: '0 0.5rem' }} />
          {items.map((item, index) => {
            const isLast = index === items.length - 1;
            return (
              <React.Fragment key={index}>
                {isLast || !item.href ? (
                  <span aria-current="page" style={{ color: 'var(--dark-charcoal)', fontWeight: 600 }}>
                    {item.label}
                  </span>
                ) : (
                  <>
                    <Link href={item.href} style={{ color: 'var(--brand-red)', textDecoration: 'none', fontWeight: 600 }}>
                      {item.label}
                    </Link>
                    <ChevronRight size={14} style={{ margin: '0 0.5rem' }} />
                  </>
                )}
              </React.Fragment>
            );
          })}
        </div>
      </nav>
    </>
  );
}
