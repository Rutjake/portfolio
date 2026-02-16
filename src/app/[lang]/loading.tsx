import Skeleton from '@/components/Skeleton/Skeleton';
import cls from './projects/[slug]/ProjectDetail.module.scss';

export default function Loading() {
  return (
    <main className={cls.container}>
      <section className={cls.hero}>
        <div className={cls.heroContent}>
          <Skeleton width="60%" height="4rem" />
          <div style={{ marginTop: '20px' }}>
            <Skeleton width="80%" height="1.5rem" /> 
            <Skeleton width="70%" height="1.5rem" style={{ marginTop: '10px' }} />
          </div>
        </div>
      </section>

      <section className={cls.gallerySection}>
        <Skeleton width="200px" height="2.5rem" className={cls.skeletonTitle} />
        <div className={cls.episodeGrid}>
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className={cls.episodeCard}>
              <Skeleton height="180px" variant="rect" />
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