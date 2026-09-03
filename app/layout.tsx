import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://homewise-home-planning.bloomy-panda-5146.chatgpt.site'),
  title: 'HomeWise — Your dream home. A wiser start.',
  description: 'Plan your one-storey home with HomeWise. Explore room dimensions, material choices, quantities, and preliminary construction cost estimates in one place.',
  icons: { icon: '/favicon.png', apple: '/homewise-logo.png' },
  openGraph: { title: 'HomeWise — Your dream home. A wiser start.', description: 'A clearer starting point for your one-storey home. Plan spaces, explore materials, and understand preliminary costs.', type: 'website', locale: 'en_PH' },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><head><link rel="preconnect" href="https://fonts.googleapis.com" /><link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" /><link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;500;600;650;700;750;800;900&display=swap" rel="stylesheet" /></head><body>{children}</body></html>;
}
