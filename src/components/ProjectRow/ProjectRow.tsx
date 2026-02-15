import Image from 'next/image';
import { urlFor } from '@/sanity/lib/image';
import cls from './ProjectRow.module.scss';
import { Project } from '@/types/project';

interface ProjectRowProps {
  title: string;
  projects: Project[];
}

export default function ProjectRow({ title, projects }: ProjectRowProps) {
  if (!projects || projects.length === 0) return null;

  return (
    <div className={cls.row}>
      <h2 className={cls.rowTitle}>{title}</h2>
      <div className={cls.scrollContainer}>
        {projects.map((project, i) => {
          return (
            <div key={i} className={cls.projectCard}>
              {project.image ? (
                <Image
                  src={urlFor(project.image).width(400).height(225).fit('crop').url()}
                  alt={project.title}
                  width={400}
                  height={225}
                  className={cls.cardImage}
                  priority={i < 2}
                  loading={i < 2 ? "eager" : "lazy"}
                />
              ) : (
                <div className={cls.placeholder}>
                  <span>{project.title}</span>
                </div>
              )}
              <div className={cls.overlay}>
                <p>{project.title}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}