import type { Metadata } from 'next';
import Link from 'next/link';
import { LegalPage } from '../legal-page';

export const metadata: Metadata = {
  title: 'Terms of Use | HomeWise',
  description: 'Terms governing use of the HomeWise planning estimator.',
  alternates: { canonical: '/terms' },
};

export default function TermsPage() {
  return (
    <LegalPage
      currentPath="/terms"
      eyebrow="USE HOMEWISE RESPONSIBLY"
      title="Terms of Use"
      summary="These Terms govern your use of HomeWise and explain the limits of its preliminary planning estimates."
      updated="Version 2026-09-16 · Effective and last updated September 16, 2026"
    >
      <div className="legal-stop"><strong>Core limitation</strong><p>HomeWise is a software planning aid only. It does not provide architectural, engineering, plumbing, contracting, quantity-surveying, legal, or other professional services, and it does not authorize construction.</p></div>

      <section><h2>1. Intended use</h2><p>You may use HomeWise to explore preliminary one-storey house options, material quantities, labor allowances, and dated price ranges for early budgeting. Every result is a <strong>planning estimate — not for construction</strong>. You must be at least 18 years old to create an account.</p></section>
      <section><h2>2. No professional relationship or approval</h2><p>Using HomeWise does not create an architect-client, engineer-client, contractor-client, fiduciary, advisory, or professional relationship. HomeWise does not sign or seal documents, inspect a site, certify code compliance, issue permits, supervise work, approve products, or represent any government agency or professional regulator.</p><p>You must engage the appropriately registered and licensed Philippine professionals required for your project and obtain all reviews, signed or sealed documents, clearances, and approvals required by the local Building Official and other authorities before purchasing for construction or starting work.</p></section>
      <section><h2>3. Do not rely on HomeWise for safety-critical decisions</h2><p>Do not build, demolish, excavate, order structural members, install electrical or plumbing systems, or make another safety-critical decision from a HomeWise result. If HomeWise conflicts with a licensed professional, approved plan, permit condition, manufacturer instruction, applicable code, or lawful authority, disregard HomeWise and follow the authoritative requirement.</p></section>
      <section><h2>4. Estimates, quantities, prices, and sources</h2><p>Outputs depend on user entries, simplified geometry, app defaults, product assumptions, calculation versions, and available observations. They may omit site conditions, design changes, waste, laps, cuts, package rounding, substitutions, tax, delivery, equipment, permits, professional fees, contractor overhead, profit, escalation, or other scope.</p><p>Supplier prices and public references are dated information, not offers or endorsements. Availability and prices can change without notice. You are responsible for obtaining current written quotations, checking exact variants and units, and independently measuring and verifying every quantity.</p></section>
      <section><h2>5. Your responsibilities</h2><ul><li>Provide accurate information and review all assumptions, warnings, inclusions, and exclusions.</li><li>Use HomeWise only for lawful planning purposes and not to impersonate a licensed professional or market an output as certified.</li><li>Protect your login credentials and notify us if you suspect unauthorized account access.</li><li>Obtain professional, supplier, contractor, and government verification appropriate to the actual project and location.</li></ul></section>
      <section><h2>6. Content you submit</h2><p>You remain responsible for projects, feedback, names, and other content you submit. Do not upload confidential information, personal data you lack authority to share, unlawful content, misleading professional claims, or material that infringes another person&apos;s rights. The launch version keeps saved projects private and does not provide public project publishing.</p></section>
      <section><h2>7. Third-party services and links</h2><p>HomeWise may link to suppliers, manufacturers, government publications, and other third parties. Those parties control their own content, products, availability, terms, and privacy practices. A link or observed price is not sponsorship, approval, or a recommendation to purchase.</p></section>
      <section><h2>8. Service availability and changes</h2><p>The service may change, be corrected, become unavailable, or discontinue features. Saved estimates retain the recorded planning basis where supported, but no service, data source, or result is guaranteed to remain available indefinitely.</p></section>
      <section><h2>9. Disclaimer of warranties</h2><p>To the extent permitted by Philippine law, HomeWise is provided on an “as available” basis without a guarantee that it is complete, current, error-free, fit for a particular project, code-compliant, or suitable for construction. Nothing here limits a warranty or consumer right that the law does not allow us to exclude.</p></section>
      <section><h2>10. Limitation of liability</h2><p>To the maximum extent permitted by law, HomeWise and its operator will not be responsible for indirect, incidental, special, consequential, or exemplary loss arising from reliance on an estimate, third-party information, user error, service interruption, or unauthorized construction use. This clause does not exclude liability that cannot lawfully be excluded and does not waive non-waivable rights or remedies under Philippine law.</p></section>
      <section><h2>11. Governing law and updates</h2><p>These Terms are governed by Philippine law. We may update them when the service, law, or risk profile changes. Material changes will be identified by a new version date and may require renewed acceptance.</p></section>
      <section><h2>12. Contact</h2><p>Questions may be sent to <a href="mailto:housewise.app@gmail.com">housewise.app@gmail.com</a>. These Terms are a practical product safeguard and should be reviewed by qualified Philippine counsel before commercial launch.</p><p>For a plain-language description of the safety limitations, visit <Link href="/safety">Safety and Professional Review</Link>.</p></section>
    </LegalPage>
  );
}
