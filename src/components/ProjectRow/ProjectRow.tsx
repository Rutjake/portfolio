"use client";

import { useRef } from 'react';
import Image from 'next/image';
import { urlFor } from '@/sanity/lib/image';
import cls from './ProjectRow.module.scss';
import { Project } from '@/types/project';
import Link from 'next/link';
import { useParams } from 'next/navigation';

interface ProjectRowProps {
  title: string;
  projects: Project[];
}

export default function ProjectRow({ title, projects }: ProjectRowProps) {
  const params = useParams();
  const lang = params.lang || 'fi';
  const scrollRef = useRef<HTMLDivElement>(null);

  if (!projects || projects.length === 0) return null;

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left'
        ? scrollLeft - clientWidth * 0.8
        : scrollLeft + clientWidth * 0.8;

      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <div className={cls.row}>
      <h2 className={cls.rowTitle}>{title}</h2>

      <div className={cls.wrapper}>
        <button
          className={`${cls.navButton} ${cls.left}`}
          onClick={() => scroll('left')}
          aria-label="Scroll left"
        >
          ‹
        </button>

        <div className={cls.scrollContainer}>
          {projects.map((project, i) => {
            const projectSlug = project.slug?.current || '';
            const projectHref = `/${lang}/projects/${projectSlug}`;

            const displayTitle = lang === 'en' && project.titleEn
              ? project.titleEn
              : project.title;

            return (
              <Link href={projectHref} key={projectSlug || i} className={cls.projectLink}>
                <div key={i} className={cls.projectCard}>
                  {project.image ? (
                    <Image
                      src={urlFor(project.image).width(400).height(225).fit('crop').url()}
                      alt={displayTitle}
                      width={400}
                      height={225}
                      className={cls.cardImage}
                      priority={i < 2}
                      loading={i < 2 ? "eager" : "lazy"}
                    />
                  ) : (
                    <div className={cls.placeholder}>
                      <span>{displayTitle}</span>
                    </div>
                  )}
                  <div className={cls.overlay}>
                    <p>{displayTitle}</p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
        
        <button
          className={`${cls.navButton} ${cls.right}`}
          onClick={() => scroll('right')}
          aria-label="Scroll right"
        >
          ›
        </button>
      </div>
    </div>
  );
}