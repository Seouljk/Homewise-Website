import type { Metadata, Viewport } from 'next';
import Script from 'next/script';
import { siteUrl } from './site';
import './globals.css';

const googleAnalyticsId = 'G-QF35HEZTVE';
const shareTitle = 'HomeWise — Your dream home. A wiser start.';
const shareDescription = 'A clearer starting point for your one-storey home. Plan spaces, explore materials, and understand preliminary costs.';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'HomeWise — House Construction Cost Estimator for the Philippines',
  description: 'Plan your one-storey home in the Philippines. Set dimensions and rooms, choose materials and finishes, and see preliminary material and labor cost estimates.',
  applicationName: 'HomeWise',
  alternates: { canonical: '/' },
  robots: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1, 'max-video-preview': -1 },
  openGraph: { title: shareTitle, description: shareDescription, url: '/', siteName: 'HomeWise', type: 'website', locale: 'en_PH' },
  twitter: { card: 'summary_large_image', title: shareTitle, description: shareDescription },
};

export const viewport: Viewport = { themeColor: '#ffffff' };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-PH">
      <body>
        {children}
        {/* Analytics loads only in production builds, so local development visits are not counted. */}
        {process.env.NODE_ENV === 'production' && (
          <>
            <Script src={`https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`} strategy="afterInteractive" />
            <Script id="google-analytics" strategy="afterInteractive">
              {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${googleAnalyticsId}');`}
            </Script>
          </>
        )}
      </body>
    </html>
  );
}
