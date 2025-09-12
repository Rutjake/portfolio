import './globals.css';
import NavDesktop from '@/components/NavDesktop';
import NavMobile from '@/components/NavMobile';
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
        <nav className="navigation">
            <NavDesktop />
            <NavMobile />
        </nav>
        <header>
          <h3 className='underText'>Ethical Hacker & Developer</h3>
        </header>
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
