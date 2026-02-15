import cls from './ProjectRow.module.scss';
import Image from 'next/image';

interface Project {
    title: string;
    image: any;
    category: string;
}

export default function ProjectRow({ title, projects }: { title: string, projects: Project[] }) {
    if (projects.length === 0) return null;

    return (
        <div className= { cls.row } >
        <h2 className={ cls.rowTitle }> { title } </h2>
            < div className = { cls.scrollContainer } >
            {
                projects.map((project, i) => (
                    <div key= { i } className = { cls.projectCard } >
                    <div className={ cls.placeholderImage } >
                    { project.title }
                    </div>
                < div className = { cls.cardInfo } >
                <span className={ cls.badge } > { project.category } </span>
                </div>
                </div>
                ))
            }
                </div>
                </div>
  );
}