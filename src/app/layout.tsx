import type { Metadata } from 'next';
// Import our new fonts
import { Manrope, Playfair_Display } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

// Setup the fonts
const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['500', '700'],
  variable: '--font-playfair',
});

export const metadata: Metadata = {
  title: {
    template: '%s | The FlyUp Travel', 
    default: 'The FlyUp Travel',
  },
  description: 'Experience the wonder of Sri Lanka with expert local guides.',
  applicationName: 'The FlyUp Travel',
  openGraph: {
    siteName: 'The FlyUp Travel',
    type: 'website',
    title: 'The FlyUp Travel',
    description: 'Experience the wonder of Sri Lanka with expert local guides.',
  },
  icons: {
    icon: '/icons/logo.png',
    shortcut: '/icons/logo.png',
    apple: '/icons/apple-touch-icon.png', 
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // --- NEW: Structured Data for Google ---
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'The FlyUp Travel',
    alternateName: ['FlyUp Travel', 'Fly Up Travel'], // Helps Google map variations to the right name
    url: 'https://theflyuptravel.com',
  };

  return (
    <html lang="en">
      <body className={`${manrope.variable} ${playfair.variable} font-sans flex flex-col min-h-screen bg-stone-50`}>
        
        {/* Inject the JSON-LD script for Google */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        <Header />
        <main className="grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}