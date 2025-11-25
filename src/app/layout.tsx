import type { Metadata } from 'next';
// Import our new fonts
import { Manrope, Playfair_Display } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

// Setup the fonts
const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope', // CSS variable for body
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['500', '700'],
  variable: '--font-playfair', // CSS variable for headings
});

export const metadata: Metadata = {
  // 1. Updates the blue link text in search results
  title: {
    template: '%s | The FlyUp Travel', // Updated: "FlyUp" (no space)
    default: 'The FlyUp Travel',       // Updated: Exact name you requested
  },
  description: 'Experience the wonder of Sri Lanka with expert local guides.',
  
  // 2. IMPORTANT: Tells Google the official "Site Name" (text above the URL)
  applicationName: 'The FlyUp Travel',
  openGraph: {
    siteName: 'The FlyUp Travel',
    type: 'website',
    title: 'The FlyUp Travel',
    description: 'Experience the wonder of Sri Lanka with expert local guides.',
  },

  icons: {
    icon: '/icons/logo.webp',
    shortcut: '/icons/logo.webp',
    apple: '/icons/apple-touch-icon.png', 
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* Apply the font variables to the body */}
      <body className={`${manrope.variable} ${playfair.variable} font-sans flex flex-col min-h-screen bg-stone-50`}>
        <Header />
        <main className="grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}