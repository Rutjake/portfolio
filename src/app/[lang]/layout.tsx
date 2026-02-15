import Link from 'next/link';

export default async function RootLayout({ 
  children, 
  params 
}: { 
  children: React.ReactNode, 
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params;

  return (
    <>
      <nav style={{ 
        padding: '20px', 
        background: '#141414', 
        display: 'flex', 
        gap: '20px',
        position: 'fixed',
        width: '100%',
        zIndex: 100,
        top: 0
      }}>
        <Link href={`/${lang}`} style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }}>
          {lang === 'fi' ? 'Etusivu' : 'Home'}
        </Link>
        <Link href={`/${lang === 'fi' ? 'en' : 'fi'}`} style={{ color: '#aaa', textDecoration: 'none' }}>
          {lang === 'fi' ? 'In English' : 'Suomeksi'}
        </Link>
      </nav>
      
      {children}
    </>
  );
}