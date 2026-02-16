'use client';

import { CSSProperties } from 'react';
import cls from './Skeleton.module.scss';

interface SkeletonProps {
  width?: string | number;
  height?: string | number;
  variant?: 'rect' | 'circle';
  className?: string;
  style?: CSSProperties;
}

export default function Skeleton({ 
  width, 
  height, 
  variant = 'rect', 
  className = '',
  style 
}: SkeletonProps) {
  const combinedStyles: CSSProperties = {
    width: width || '100%',
    height: height || '100%',
    ...style
  };

  return (
    <div 
      className={`${cls.skeleton} ${cls[variant]} ${className}`} 
      style={combinedStyles}
    />
  );
}