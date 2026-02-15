import ProjectRow from '@/components/ProjectRow/ProjectRow';
import { getDictionary } from '@/lib/dictionary';
import { client } from '@/sanity/lib/client';
import { Project } from '@/types/project';
import cls from './page.module.scss';

async function getProjects(): Promise<Project[]> {
  const query = `*[_type == "project"] {
  _id,
  title,
  category,
  image,
  slug, // Hae koko slug-objekti
  descriptionFi,
  descriptionEn
}`;
  return await client.fetch(query, {}, { next: { revalidate: 60 } });
}

export default async function HomePage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;

  const dict = await getDictionary(lang as 'fi' | 'en');
  const allProjects = await getProjects();

  const codingProjects = allProjects.filter((p) => p.category === 'koodi');
  const cyberProjects = allProjects.filter((p) => p.category === 'kyber');
  const uxProjects = allProjects.filter((p) => p.category === 'ux');

  return (
    <main className={cls.mainContainer}>
      <section className={cls.hero}>
        <div className={cls.heroContent}>
          <h1 className={cls.title}>{dict.heroTitle}</h1>
          <p className={cls.description}>{dict.heroDesc}</p>
          <div className={cls.buttons}>
            <button className={cls.playBtn}>{dict.heroButton}</button>
          </div>
        </div>
      </section>

      <div className={cls.rowsContainer}>
        <ProjectRow title={dict.categories.coding} projects={codingProjects} />
        <ProjectRow title={dict.categories.cyber} projects={cyberProjects} />
        <ProjectRow title={dict.categories.ux} projects={uxProjects} />
      </div>
    </main>
  );
}