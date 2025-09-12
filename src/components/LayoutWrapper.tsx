'use client';

import React, { useState, useEffect } from 'react';
import NavDesktop from './NavDesktop/NavDesktop';
import NavMobile from './NavMobile/NavMobile';

export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsDesktop(window.innerWidth > 768);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  return (
    <>
      <nav className="navigation">
        {isDesktop ? <NavDesktop /> : <NavMobile />}
      </nav>
      <header>
        <h3 className='underText'>Ethical Hacker & Developer</h3>
      </header>
      {children}
    </>
  );
}
