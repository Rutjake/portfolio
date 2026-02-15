import ProjectRow from '@/components/ProjectRow/ProjectRow';
import { client } from '@/lib/sanity.client';

async function getProjects() {
  const query = `*[_type == "project"]{ title, category, image }`;
  return await client.fetch(query);
}

export default async function Page() {
  const allProjects = await getProjects();

  // Jaotellaan projektit kategorioittain
  const koodi = allProjects.filter((p: any) => p.category === 'koodi');
  const kyber = allProjects.filter((p: any) => p.category === 'kyber');
  const ux = allProjects.filter((p: any) => p.category === 'ux');

  return (
    <main style={{ backgroundColor: '#141414', minHeight: '100-screen' }}>
      <section style={{ paddingTop: '100px' }}>
        <ProjectRow title="Koodaus" projects={koodi} />
        <ProjectRow title="Kyberturvallisuus" projects={kyber} />
        <ProjectRow title="UX Design" projects={ux} />
      </section>
    </main>
  );
}