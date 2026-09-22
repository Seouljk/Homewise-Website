import Image from 'next/image';
import Link from 'next/link';
import wordmark from './images/homewise-wordmark.webp';

export function SiteFooter() {
  return (
    <footer className="site-footer shell">
      <div className="footer-brand">
        <Link href="/" aria-label="HomeWise home">
          <Image src={wordmark} alt="HomeWise" width={156} height={52} unoptimized />
        </Link>
        <span>A wiser start to a place of your own.</span>
      </div>
      <nav aria-label="Footer navigation">
        <Link href="/#features">Features</Link>
        <Link href="/#how-it-works">How it works</Link>
        <Link href="/#faq">FAQ</Link>
        <Link href="/safety">Safety</Link>
        <Link href="/privacy">Privacy</Link>
        <Link href="/terms">Terms</Link>
        <Link href="/delete-account">Delete account</Link>
      </nav>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} HomeWise</span>
        <span>Thoughtful planning. Better beginnings.</span>
      </div>
    </footer>
  );
}
