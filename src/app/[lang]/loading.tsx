import Skeleton from '@/components/Skeleton/Skeleton';
import cls from './Loading.module.scss';

export default function Loading() {
  return (
    <main className={cls.container}>
      <section className={cls.hero}>
        <div className={cls.heroBg}>
          <Skeleton width="100%" height="100%" />
        </div>

        <div className={cls.heroContent}>
          <Skeleton width="60%" height="4rem" style={{ marginBottom: '1rem' }} />
          <div className={cls.descriptionContainer}>
            <Skeleton width="80%" height="1.2rem" style={{ marginBottom: '0.5rem' }} />
            <Skeleton width="75%" height="1.2rem" style={{ marginBottom: '0.5rem' }} />
            <Skeleton width="40%" height="1.2rem" />
          </div>
        </div>
      </section>

      <section className={cls.gallerySection}>
        <Skeleton width="200px" height="2rem" style={{ marginBottom: '30px' }} />
        <div className={cls.episodeGrid}>
           {[1, 2, 3, 4].map((i) => (
             <div key={i} className={cls.episodeCard}>
               <Skeleton height="180px" />
               <div style={{ marginTop: '12px' }}>
                 <Skeleton width="90%" height="1rem" />
               </div>
             </div>
           ))}
        </div>
      </section>
    </main>
  );
}