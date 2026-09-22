import type { Metadata } from 'next';
import { Mail } from 'lucide-react';
import { LegalPage } from '../legal-page';

export const metadata: Metadata = {
  title: 'Delete Your Account | HomeWise',
  description: 'Request permanent deletion of a HomeWise account and its associated data.',
  alternates: { canonical: '/delete-account' },
};

const deletionEmail = 'mailto:housewise.app@gmail.com?subject=DELETE%20HOMEWISE%20ACCOUNT&body=HomeWise%20username%3A%20%0ARegistered%20email%3A%20%0A%0AI%20request%20permanent%20deletion%20of%20my%20HomeWise%20account%20and%20associated%20data.';

export default function DeleteAccountPage() {
  return (
    <LegalPage
      currentPath="/delete-account"
      eyebrow="ACCOUNT AND DATA CONTROL"
      title="Delete your HomeWise account"
      summary="Delete directly in the app, or send a verified request if you no longer have access to it."
      updated="Last updated September 16, 2026"
    >
      <section><h2>Delete inside HomeWise</h2><ol><li>Sign in to HomeWise.</li><li>Open <strong>Profile</strong>.</li><li>Scroll to <strong>Delete account and data</strong>.</li><li>Review both confirmation prompts and choose <strong>Delete permanently</strong>.</li></ol><p>The in-app option begins deletion immediately after your final confirmation.</p></section>

      <section className="deletion-request"><h2>Request deletion by email</h2><p>If you cannot access the app, email us from the address registered to your HomeWise account.</p><ol><li>Use the subject <strong>DELETE HOMEWISE ACCOUNT</strong>.</li><li>Include your HomeWise username and registered email address.</li><li>Do not send your password.</li></ol><a className="pill-button legal-action" href={deletionEmail}><Mail size={18} aria-hidden="true" /> Start deletion request</a></section>

      <section><h2>What is deleted</h2><p>Your authentication account, profile, private profile details, Terms-acceptance record, saved projects and estimates, likes, feedback, comments, and login-session records associated with the account are deleted after verification.</p></section>
      <section><h2>Verification and timing</h2><p>We may ask you to verify account ownership. We aim to process verified email requests within seven days. Limited information may be retained when required for fraud prevention, security, legal compliance, or the disaster-recovery backup lifecycle.</p></section>
      <section><h2>Need help?</h2><p>Contact <a href="mailto:housewise.app@gmail.com">housewise.app@gmail.com</a>. Never include your password in an email.</p></section>
    </LegalPage>
  );
}
