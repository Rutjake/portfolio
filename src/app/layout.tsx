import './globals.css';
import LayoutWrapper from '@/components/LayoutWrapper';
import type { Metadata } from 'next';

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
    <html lang="fi">
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
