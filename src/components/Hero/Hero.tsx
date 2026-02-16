'use client';

import { useState } from 'react';
import InfoModal from '@/components/InfoModal/InfoModal';
import { PortableTextBlock } from '@portabletext/types';
import cls from './Hero.module.scss';

interface Certification {
  title: string;
  issuer: string;
  iconUrl?: string;
}

interface Dictionary {
  heroTitle: string;
  heroDesc: string;
  heroButton: string;
  categories?: {
    coding: string;
    cyber: string;
    ux: string;
  };
}

interface HeroProps {
  dict: Dictionary;
  resumeData: {
    experience: PortableTextBlock[];
    education: PortableTextBlock[];
    certifications: Certification[];
  };
}

export default function Hero({ dict, resumeData }: HeroProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section className={cls.hero}>
        <div className={cls.heroContent}>
          <h1 className={cls.title}>{dict.heroTitle}</h1>
          <p className={cls.description}>{dict.heroDesc}</p>
          <div className={cls.buttons}>
            <button 
              className={cls.playBtn} 
              onClick={() => setIsModalOpen(true)}
            >
              {dict.heroButton}
            </button>
          </div>
        </div>
      </section>

      {isModalOpen && (
        <InfoModal 
          data={resumeData} 
          onClose={() => setIsModalOpen(false)} 
        />
      )}
    </>
  );
}