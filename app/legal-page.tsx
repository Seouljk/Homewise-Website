import type { ReactNode } from 'react';
import Link from 'next/link';
import { SiteFooter } from './site-footer';
import { SiteHeader } from './site-header';

const legalLinks = [
  { href: '/safety', label: 'Safety' },
  { href: '/terms', label: 'Terms of Use' },
  { href: '/privacy', label: 'Privacy Policy' },
  { href: '/delete-account', label: 'Delete Account' },
];

type LegalPageProps = {
  currentPath: string;
  eyebrow: string;
  title: string;
  summary: string;
  updated: string;
  children: ReactNode;
};

export function LegalPage({ currentPath, eyebrow, title, summary, updated, children }: LegalPageProps) {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <SiteHeader />
      <main id="main" className="legal-page shell">
        <nav className="legal-navigation" aria-label="Legal and safety pages">
          {legalLinks.map(({ href, label }) => (
            <Link key={href} href={href} aria-current={currentPath === href ? 'page' : undefined}>
              {label}
            </Link>
          ))}
        </nav>
        <article className="legal-article">
          <header className="legal-heading">
            <span className="eyebrow">{eyebrow}</span>
            <h1>{title}</h1>
            <p className="legal-summary">{summary}</p>
            <p className="legal-updated">{updated}</p>
          </header>
          <div className="legal-content">{children}</div>
        </article>
      </main>
      <SiteFooter />
    </>
  );
}
