import { client } from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/image';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import cls from './ProjectDetail.module.scss';
import { getDictionary } from '@/lib/dictionary';
import Description from './Description';
import ProjectGallery from '@/components/ProjectGallery/ProjectGallery';

async function getProject(slug: string) {
  const query = `*[_type == "project" && slug.current == $slug][0] {
    title,
    descriptionFi,
    descriptionEn,
    image,
    slug,
    gallery // Haetaan koko galleria-objekti raakana ilman purkamista
  }`;
  return await client.fetch(query, { slug });
}

export default async function ProjectPage({ params }: { params: Promise<{ lang: string; slug: string }> }) {
  const { lang, slug } = await params;
  const dict = await getDictionary(lang);
  const project = await getProject(slug);

  if (!project) notFound();

  return (
    <main className={cls.container}>
      <div className={cls.hero}>
        <div className={cls.heroBg}>
          {project.image && (
            <Image
              src={urlFor(project.image).width(1920).url()}
              fill
              alt=""
              priority
              className={cls.bgImg}
            />
          )}
        </div>
        <div className={cls.heroContent}>
          <h1 className={cls.title}>{project.title}</h1>
          <Description
            value={lang === 'en' ? project.descriptionEn : project.descriptionFi}
            dict={{
              readMore: dict.projects.readMore,
              showLess: dict.projects.showLess
            }}
          />
        </div>
      </div>

      <ProjectGallery 
        gallery={project.gallery} 
        lang={lang}
        title={dict.projects.galleryTitle}
      />
    </main>
  );
}