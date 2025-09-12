import './globals.css';
import { Barlow_Condensed } from 'next/font/google';
import LayoutWrapper from '@/components/LayoutWrapper';
import type { Metadata } from 'next';

const barlowCondensed = Barlow_Condensed({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Jarno - Portfolio',
  description: 'Tervetuloa portfolio sivulleni.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fi" className={barlowCondensed.className}>
      <body>
        <LayoutWrapper>
          <main>
            {children}
          </main>
        </LayoutWrapper>
      </body>
    </html>
  );
}
