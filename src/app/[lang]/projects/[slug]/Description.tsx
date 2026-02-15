'use client';

import { useState } from 'react';
import { PortableText } from '@portabletext/react';
import type { PortableTextBlock } from '@portabletext/types';
import cls from './ProjectDetail.module.scss';

interface DescriptionProps {
  value: PortableTextBlock[];
  dict: {
    readMore: string;
    showLess: string;
  };
}

export default function Description({ value, dict }: DescriptionProps) {
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
          {isExpanded ? dict.showLess : dict.readMore}
        </button>
      )}
    </div>
  );
}