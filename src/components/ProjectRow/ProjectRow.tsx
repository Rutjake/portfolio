"use client";

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
  if (!projects || projects.length === 0) return null;

  return (
    <div className={cls.row}>
      <h2 className={cls.rowTitle}>{title}</h2>
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
    </div>
  );
}