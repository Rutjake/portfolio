'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Skeleton from '@/components/Skeleton/Skeleton';
import cls from './ImageModal.module.scss';

interface ImageModalProps {
  src: string;
  alt: string;
  onClose: () => void;
}

export default function ImageModal({ src, alt, onClose }: ImageModalProps) {
  const [isImageLoaded, setIsImageLoaded] = useState<boolean>(false);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);


  return (
    <div className={cls.modalOverlay} onClick={onClose}>
      <button className={cls.closeBtn} onClick={onClose}>✕</button>

      <div className={cls.modalContent} onClick={(e) => e.stopPropagation()}>
        <div className={cls.imageWrapper}>
          {!isImageLoaded && (
            <Skeleton 
              width="90vw" 
              height="60vh" 
              className={cls.modalSkeleton} 
            />
          )}

          <Image 
            src={src} 
            alt={alt} 
            width={1200} 
            height={800} 
            className={`${cls.fullImage} ${isImageLoaded ? cls.loaded : cls.loading}`}
            onLoad={() => setIsImageLoaded(true)}
            priority
          />
        </div>
        
        {isImageLoaded && alt && (
          <p className={cls.modalCaption}>{alt}</p>
        )}
      </div>
    </div>
  );
}