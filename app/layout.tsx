import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://homewise.khayll-labs.com'),
  title: 'HomeWise — Your dream home. A wiser start.',
  description: 'Plan your one-storey home with HomeWise. Explore room dimensions, material choices, quantities, and preliminary construction cost estimates in one place.',
  icons: { icon: '/favicon.png', apple: '/homewise-logo.png' },
  openGraph: { title: 'HomeWise — Your dream home. A wiser start.', description: 'A clearer starting point for your one-storey home. Plan spaces, explore materials, and understand preliminary costs.', type: 'website', locale: 'en_PH' },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
