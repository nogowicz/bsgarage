import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/footer/Footer';
import Contact from '@/components/contact/Contact';
import CookieConsentBanner from '@/components/cookie-consent-banner/CookieConsentBanner';

const inter = Inter({ subsets: ['latin'] });

const info = {
  title: 'BS Garage',
  description:
    'Kompleksowe usługi detailingu wnętrza samochodu, w tym oklejanie, czyszczenie i zmiana podświetlania.',
  keywords:
    'bs garage, bsgarage, detialing, , samochód, sprzątanie samochodu, usługi detailingu, oklejanie wnętrza samochodu, czyszczenie wnętrza, podświetlanie, Kraków, Przemyśl, Krosno',
  images: ['/banner/open-graph.jpg'],
};

const metadataBase = new URL('https://bsgarage.pl');

export const metadata: Metadata = {
  title: info.title,
  description: info.description,
  openGraph: {
    title: info.title,
    description: info.description,
    images: info.images.map((image) => ({
      url: new URL(image, metadataBase).toString(),
    })),
  },
  twitter: {
    card: 'summary_large_image',
    title: info.title,
    description: info.description,
    images: info.images.map((image) => new URL(image, metadataBase).toString()),
  },
  metadataBase,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Contact />
        <Footer />
        {/* <CookieConsentBanner /> */}
      </body>
    </html>
  );
}
