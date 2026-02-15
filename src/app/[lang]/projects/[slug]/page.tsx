import { client } from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/image';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import cls from './ProjectDetail.module.scss';
import { getDictionary } from '@/lib/dictionary';
import Description from './Description';


interface GalleryItem {
  image: {
    asset: {
      _ref: string;
      _type: string;
    };
  };
  caption?: {
    fi?: string;
    en?: string;
  };
  _key?: string;
}

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

      <section className={cls.gallerySection}>
        <h2>{dict.projects.galleryTitle}</h2>
        <div className={cls.episodeGrid}>
          {project.gallery?.map((item: GalleryItem, i: number) => {
            const asset = item.image?.asset || item;

            const imageUrl = asset
              ? urlFor(asset)
                .width(600)
                .fit('max')
                .auto('format')
                .url()
              : null;

            const currentCaption = typeof item.caption === 'string'
              ? item.caption
              : (lang === 'en' ? item.caption?.en : item.caption?.fi);

            return (
              <div key={item._key || i} className={cls.episodeCard}>
                <div className={cls.imgWrapper}>
                  {imageUrl ? (
                    <Image
                      src={imageUrl}
                      width={600}
                      height={337}
                      alt={currentCaption || "Projektikuva"}
                    />
                  ) : (
                    <div className={cls.placeholderImg}>Ei kuvaa</div>
                  )}
                </div>
                <div className={cls.episodeText}>
                  <p>{currentCaption}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}