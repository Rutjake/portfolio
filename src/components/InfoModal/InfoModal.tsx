'use client';

import { PortableText } from '@portabletext/react';
import { PortableTextBlock } from '@portabletext/types';
import Image from 'next/image';
import cls from './InfoModal.module.scss';

interface Certification {
  title: string;
  issuer: string;
  iconUrl?: string;
}

interface InfoModalProps {
  onClose: () => void;
  data: {
    experience: PortableTextBlock[];
    education: PortableTextBlock[];
    certifications: Certification[];
  };
}

export default function InfoModal({ onClose, data }: InfoModalProps) {
  if (!data) return null;

  return (
    <div className={cls.overlay} onClick={onClose}>
      <div className={cls.content} onClick={(e) => e.stopPropagation()}>
        <button className={cls.closeBtn} onClick={onClose}>✕</button>

        <section className={cls.section}>
          <h2>Työkokemus</h2>
          <div className={cls.portableText}>
            <PortableText value={data.experience} />
          </div>
        </section>

        <section className={cls.section}>
          <h2>Koulutus</h2>
          <div className={cls.portableText}>
            <PortableText value={data.education} />
          </div>
        </section>

        <section className={cls.section}>
          <h2>Sertifikaatit</h2>
          <div className={cls.certGrid}>
            {data.certifications?.map((cert, index) => (
              <div key={index} className={cls.certItem}>
                {cert.iconUrl && (
                  <div className={cls.iconWrapper}>
                    <Image 
                      src={cert.iconUrl} 
                      alt={cert.title} 
                      width={40} 
                      height={40} 
                      className={cls.certIcon}
                    />
                  </div>
                )}
                <div className={cls.certInfo}>
                  <h3>{cert.title}</h3>
                  <p>{cert.issuer}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}