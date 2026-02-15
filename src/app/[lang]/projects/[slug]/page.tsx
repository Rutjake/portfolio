import { client } from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/image';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import cls from './ProjectDetail.module.scss';
import { getDictionary } from '@/lib/dictionary';


interface GalleryItem {
  image: {
    asset: {
      _ref: string;
      _type: string;
    };
  };
  caption?: string;
  _key?: string;
}

async function getProject(slug: string) {
  const query = `*[_type == "project" && slug.current == $slug][0] {
    title,
    descriptionFi,
    descriptionEn,
    image,
    slug,
    gallery
  }`;
  return await client.fetch(query, { slug });
}

export default async function ProjectPage({ params }: { params: Promise<{ lang: string; slug: string }> }) {
  const { lang, slug } = await params;

  const dict = await getDictionary(lang);
  const project = await getProject(slug);

 if (!project) notFound();

  const description = lang === 'en' ? project.descriptionEn : project.descriptionFi;

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
          <h1>{project.title}</h1>
          <p className={cls.description}>{description}</p>
        </div>
      </div>

      <section className={cls.gallerySection}>
        <h2>{dict.projects.galleryTitle}</h2>
        <div className={cls.episodeGrid}>
          {project.gallery?.map((item: GalleryItem, i: number) => (
            <div key={item._key || i} className={cls.episodeCard}>
              <div className={cls.imgWrapper}>
                <Image
                  src={urlFor(item.image).width(600).height(337).url()}
                  width={600}
                  height={337}
                  alt={item.caption || "Projektikuva"}
                />
              </div>
              <div className={cls.episodeText}>
                <span className={cls.episodeNumber}>{i + 1}. Vaihe</span>
                <p>{item.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}