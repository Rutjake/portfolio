'use client';

import Image from 'next/image';
import { useEffect } from 'react';
import cls from './ImageModal.module.scss';

interface ImageModalProps {
  src: string;
  alt: string;
  onClose: () => void;
}

export default function ImageModal({ src, alt, onClose }: ImageModalProps) {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = 'unset'; };
  }, []);

  return (
    <div className={cls.modalOverlay} onClick={onClose}>
      <button className={cls.closeBtn} onClick={onClose}>✕</button>
      <div className={cls.modalContent} onClick={(e) => e.stopPropagation()}>
        <Image 
          src={src} 
          alt={alt} 
          width={1200} 
          height={800} 
          className={cls.fullImage}
          priority
        />
        {alt && <p className={cls.modalCaption}>{alt}</p>}
      </div>
    </div>
  );
}