import type { Metadata } from 'next';
import Link from 'next/link';
import { LegalPage } from '../legal-page';

export const metadata: Metadata = {
  title: 'Privacy Policy | HomeWise',
  description: 'How HomeWise collects, uses, protects, retains, and deletes personal information.',
  alternates: { canonical: '/privacy' },
};

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      currentPath="/privacy"
      eyebrow="YOUR INFORMATION"
      title="Privacy Policy"
      summary="This policy explains the information HomeWise processes, why it is needed, and the choices available to you."
      updated="Effective August 16, 2026 · Last updated September 16, 2026"
    >
      <section>
        <h2>Information we collect</h2>
        <ul>
          <li><strong>Account information:</strong> email address, display name, username, phone number, birthdate, and selected profile icon.</li>
          <li><strong>Legal acceptance:</strong> the Terms version accepted and the server-recorded acceptance time.</li>
          <li><strong>Project information:</strong> house dimensions, room layouts, openings, finishes, service points, material estimates, labor estimates, and saved project settings.</li>
          <li><strong>Support information:</strong> feedback or messages you choose to send to HomeWise.</li>
          <li><strong>Technical information:</strong> authentication, security, network, and service logs generated while operating the service.</li>
        </ul>
      </section>

      <section><h2>How we use information</h2><p>We use this information to create and secure accounts, confirm age eligibility, record acceptance of the Terms, save and display your projects, calculate planning estimates, provide support, prevent abuse, and improve service reliability.</p></section>

      <section><h2>Service providers and sharing</h2><p>HomeWise uses Supabase to provide authentication, database storage, and server functions. The public HomeWise website is hosted by Vercel and uses Google Analytics to understand aggregate website visits. Website analytics may process information such as visited pages, browser and device details, approximate location derived from an IP address, and referral information. Google Analytics is used on the public website, not inside the HomeWise mobile app.</p><p>These providers process information only as needed to operate, protect, and improve the relevant service or meet legal obligations. We do not sell personal information. The launch version of the HomeWise mobile app does not contain third-party advertising or advertising trackers.</p></section>

      <section><h2>How we protect information</h2><p>HomeWise uses encrypted HTTPS connections, authenticated access, database access controls, and restricted server credentials. No internet service can guarantee absolute security, so users should protect their password and contact us if they suspect unauthorized access.</p></section>

      <section><h2>Retention and deletion</h2><p>Account and project information is retained while your account is active. You can permanently delete your account and associated operational data inside the app. Limited security records or encrypted disaster-recovery backups may remain only for legal, security, or recovery purposes and are removed through the providers&apos; normal lifecycle.</p><p>See <Link href="/delete-account">Delete your HomeWise account</Link> for the in-app path and web request process.</p></section>

      <section><h2>Your choices and rights</h2><p>You may update profile information in the app, delete individual projects, or delete your account. Subject to applicable limitations, Philippine data subjects may request access, correction, erasure or blocking, object to processing, request portability where applicable, withdraw consent where consent is the basis, or lodge a complaint with the National Privacy Commission.</p><p><a href="https://privacy.gov.ph/data-subject-rights/" rel="noreferrer">Learn about Philippine data-subject rights</a>.</p></section>

      <section><h2>Children</h2><p>HomeWise accounts are intended only for adults age 18 or older. Do not create an account if you are under 18.</p></section>

      <section><h2>Planning-estimate limitation</h2><p>HomeWise outputs are preliminary planning estimates, not signed or sealed professional plans and not a substitute for licensed professionals, contractors, suppliers, or local permitting authorities. Read the <Link href="/safety">Safety and Professional Review</Link> page before relying on an estimate.</p></section>

      <section><h2>Contact</h2><p>Privacy questions or requests may be sent to <a href="mailto:housewise.app@gmail.com">housewise.app@gmail.com</a>.</p></section>
    </LegalPage>
  );
}
