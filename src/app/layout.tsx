import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/footer/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'BS Garage',
  description:
    'Kompleksowe usługi detailingu wnętrza samochodu, w tym oklejanie, czyszczenie i zmiana podświetlania.',
  keywords:
    'usługi detailingu, oklejanie wnętrza samochodu, czyszczenie wnętrza, podświetlanie, Kraków, Przemyśl, Krosno',
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
        <Footer />
      </body>
    </html>
  );
}
