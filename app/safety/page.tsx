import type { Metadata } from 'next';
import Link from 'next/link';
import { LegalPage } from '../legal-page';

export const metadata: Metadata = {
  title: 'Safety and Professional Review | HomeWise',
  description: 'HomeWise planning limitations and required professional review in the Philippines.',
  alternates: { canonical: '/safety' },
};

export default function SafetyPage() {
  return (
    <LegalPage
      currentPath="/safety"
      eyebrow="PLAN FIRST. VERIFY BEFORE BUILDING."
      title="Safety and Professional Review"
      summary="HomeWise helps with early budgeting and option comparison. It does not replace the people legally and professionally responsible for a safe house."
      updated="Last updated September 16, 2026"
    >
      <div className="legal-stop"><strong>Do not build from the app</strong><p>A HomeWise estimate, saved project, or PDF is not a signed or sealed plan, professional bill of quantities, contractor quotation, permit, inspection, or safe-to-build approval.</p></div>

      <section><h2>Before purchasing or construction</h2><ol><li>Have the actual lot, boundaries, levels, drainage, hazards, soil, utilities, and existing conditions assessed.</li><li>Engage the appropriately registered and licensed professionals for the architectural, structural or civil, electrical, plumbing or sanitary, and other required disciplines.</li><li>Obtain project-specific drawings, calculations, specifications, quantities, and signed or sealed documents where required.</li><li>Confirm zoning, subdivision, fire, accessibility, environmental, utility, and local requirements with the responsible authorities.</li><li>Obtain the required building permit and other approvals before work starts.</li><li>Use properly licensed contractors where required and follow approved plans, professional instructions, product instructions, inspections, and tests.</li></ol></section>

      <section><h2>Professional review areas</h2><div className="legal-card-grid"><div><h3>Architecture and space planning</h3><p>Room arrangements, openings, aesthetics, occupancy, accessibility, and architectural documents require project-specific professional review.</p></div><div><h3>Structure and site</h3><p>Footings, columns, beams, slabs, walls, framing, trusses, bracing, anchors, wind, earthquake, flood, and soil behavior cannot be approved from app presets.</p></div><div><h3>Electrical work</h3><p>Point counts and wire allowances are not load calculations or wiring designs. Protection, grounding, conductor sizing, and installation require the appropriate licensed electrical professional.</p></div><div><h3>Plumbing and sanitation</h3><p>Fixture and pipe allowances are not plumbing or sanitary designs. Water pressure, sizing, slopes, vents, drainage, septic or sewer connections, testing, and installation require qualified review.</p></div></div></section>

      <section><h2>Estimate limitations</h2><p>Quantities are sensitive to dimensions, drawings, structural design, manufacturer systems, waste, lap, cuts, stock lengths, packaging, and workmanship. Prices are dated planning references and may omit tax, delivery, availability, or the exact product variant. Obtain current written quotations and a professional or contractor takeoff before purchasing.</p></section>

      <section><h2>Philippine regulatory context</h2><p>The exact professionals and documents required depend on the project and lawful authorities. Useful primary references include:</p><ul><li><a href="https://lawphil.net/statutes/repacts/ra2004/ra_9266_2004.html" rel="noreferrer">Republic Act No. 9266 — Architecture Act of 2004</a></li><li><a href="https://lawphil.net/statutes/repacts/ra1950/ra_544_1950.html" rel="noreferrer">Republic Act No. 544 — Civil Engineering Law</a></li><li><a href="https://lawphil.net/statutes/repacts/ra1995/ra_7920_1995.html" rel="noreferrer">Republic Act No. 7920 — New Electrical Engineering Law</a></li><li><a href="https://lawphil.net/statutes/repacts/ra1955/ra_1378_1955.html" rel="noreferrer">Republic Act No. 1378 — Plumbing Law</a></li><li><a href="https://lawphil.net/statutes/repacts/ra1965/ra_4566_1965.html" rel="noreferrer">Republic Act No. 4566 — Contractors&apos; License Law</a></li><li><a href="https://elibrary.judiciary.gov.ph/thebookshelf/showdocs/11/53320" rel="noreferrer">Presidential Decree No. 1096 — National Building Code of the Philippines</a></li></ul><p className="legal-small">These references provide context, not a complete legal checklist. Codes, implementing rules, local ordinances, permit requirements, and professional scopes may change or require project-specific interpretation.</p></section>

      <div className="legal-callout"><strong>When information conflicts:</strong><p>Follow the licensed professional, approved plans, manufacturer instructions, permit conditions, and lawful authority — not HomeWise. If a condition appears unsafe, stop work and contact the appropriate professional or local authority.</p></div>
      <p><Link className="pill-button legal-action" href="/terms">Read the Terms of Use</Link></p>
    </LegalPage>
  );
}
