'use client';

import { PortableText } from '@portabletext/react';
import { PortableTextBlock } from '@portabletext/types';
import Image from 'next/image';
import cls from './InfoModal.module.scss';

interface Dictionary {
  infoModal: {
    experience: string;
    education: string;
    certifications: string;
    skills: string;
  };
}

interface Certification {
  title: string;
  issuer: string;
  iconUrl?: string;
}
interface Skill {
  name: string;
  iconUrl?: string;
}

interface InfoModalProps {
  onClose: () => void;
  dict: Dictionary;
  data: {
    experience: PortableTextBlock[];
    education: PortableTextBlock[];
    certifications: Certification[];
    skills?: Skill[];
  };
}

export default function InfoModal({ onClose, data, dict }: InfoModalProps) {
  if (!data) return null;

  return (
    <div className={cls.overlay} onClick={onClose}>
      <div className={cls.content} onClick={(e) => e.stopPropagation()}>
        <button className={cls.closeBtn} onClick={onClose}>✕</button>

        <section className={cls.section}>
          <h2>{dict.infoModal.experience}</h2>
          <div className={cls.portableText}>
            <PortableText value={data.experience} />
          </div>
        </section>

        <section className={cls.section}>
          <h2>{dict.infoModal.education}</h2>
          <div className={cls.portableText}>
            <PortableText value={data.education} />
          </div>
        </section>

        <section className={cls.section}>
          <h2>{dict.infoModal.certifications}</h2>
          <div className={cls.certGrid}>
            {data.certifications?.map((cert, index) => (
              <div key={index} className={cls.certItem}>
                {cert.iconUrl && (
                  <div className={cls.iconWrapper}>
                    <Image
                      src={cert.iconUrl}
                      alt={cert.title || 'Certification icon'}
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
        {data.skills && data.skills.length > 0 && (
          <section className={cls.section}>
            <h2>{dict.infoModal.skills}</h2>
            <div className={cls.skillsGrid}>
              {data.skills.map((skill, index) => (
                <div key={index} className={cls.skillItem}>
                  {skill.iconUrl && (
                    <Image src={skill.iconUrl} alt={skill.name} width={24} height={24} />
                  )}
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}