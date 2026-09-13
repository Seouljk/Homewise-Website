import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';

const googleAnalyticsId = 'G-QF35HEZTVE';

export const metadata: Metadata = {
  metadataBase: new URL('https://homewise.khayll-labs.com'),
  title: 'HomeWise — Your dream home. A wiser start.',
  description: 'Plan your one-storey home with HomeWise. Explore room dimensions, material choices, quantities, and preliminary construction cost estimates in one place.',
  icons: { icon: '/favicon.png', apple: '/homewise-logo.png' },
  openGraph: { title: 'HomeWise — Your dream home. A wiser start.', description: 'A clearer starting point for your one-storey home. Plan spaces, explore materials, and understand preliminary costs.', type: 'website', locale: 'en_PH' },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
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
