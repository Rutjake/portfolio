import './globals.css';
import { Barlow_Condensed } from 'next/font/google';
import type { Metadata } from 'next';

const barlowCondensed = Barlow_Condensed({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Jarno - Portfolio',
  description: 'Full Stack & Security Portfolio',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className={barlowCondensed.className}>
      <body style={{ backgroundColor: '#141414', margin: 0 }}>
        {children}
      </body>
    </html>
  );
}