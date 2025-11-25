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
  title: {
    template: '%s | The Fly Up Travel',
    default: 'The Fly Up Travel - Sri Lanka', // Default home page title
  },
  description: 'Experience the wonder of Sri Lanka with expert local guides.',
  icons: {
    // 1. Main icon for browser tabs and Google Search
    icon: '/icons/logo.webp',
    
    // 2. Fallback for search engines / older browsers
    shortcut: '/icons/logo.webp',
    
    // 3. Apple Devices (iPhone/iPad Home Screen)
    // Note: iPhones prefer PNG. If you only have WebP, you can try this, 
    // but a PNG is safer for Apple devices.
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