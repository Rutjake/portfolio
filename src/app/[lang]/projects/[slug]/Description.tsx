'use client';

import { useState } from 'react';
import { PortableText } from '@portabletext/react';
import type { PortableTextBlock } from '@portabletext/types';
import cls from './ProjectDetail.module.scss';

interface DescriptionProps {
  value: PortableTextBlock[];
}

export default function Description({ value }: DescriptionProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  if (!value || !Array.isArray(value)) return null;

  return (
    <div className={cls.descriptionContainer}>
      <div 
        className={`${cls.descriptionWrapper} ${isExpanded ? cls.expanded : ''}`}
      >
        <div className={cls.description}>
          <PortableText value={value} />
        </div>
      </div>

      {value.length > 1 && (
        <button 
          className={cls.readMoreBtn} 
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? 'Näytä vähemmän' : 'Lue lisää'}
        </button>
      )}
    </div>
  );
}