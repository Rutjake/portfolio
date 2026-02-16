'use client';

import { useState } from 'react';
import Image from 'next/image';
import { urlFor } from '@/sanity/lib/image'; 
import { SanityImageSource } from '@sanity/asset-utils';
import ImageModal from '../ImageModal/ImageModal';
import cls from './ProjectGallery.module.scss';

interface GalleryItem {
  _key: string;
  image?: { 
    asset: SanityImageSource;
  };
  caption?: string | { fi: string; en: string };
}

interface ProjectGalleryProps {
  gallery: GalleryItem[];
  lang: string;
  title: string;
}

export default function ProjectGallery({ gallery, lang, title }: ProjectGalleryProps) {
  const [selectedImg, setSelectedImg] = useState<{ src: string; alt: string } | null>(null);

  if (!gallery || gallery.length === 0) return null;

  return (
    <>
      <section className={cls.gallerySection}>
        <h2>{title}</h2>
        <div className={cls.episodeGrid}>
          {gallery.map((item, i) => {
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
              <div 
                key={item._key || i} 
                className={cls.episodeCard}
                onClick={() => imageUrl && setSelectedImg({ 
                  src: asset ? urlFor(asset).width(1200).url() : imageUrl, 
                  alt: currentCaption || "" 
                })}
              >
                <div className={cls.imgWrapper}>
                  {imageUrl ? (
                    <Image
                      src={imageUrl}
                      width={600}
                      height={337}
                      alt={currentCaption || "Projektikuva"}
                      sizes="(max-width: 768px) 80vw, 320px"
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

      {selectedImg && (
        <ImageModal 
          src={selectedImg.src} 
          alt={selectedImg.alt} 
          onClose={() => setSelectedImg(null)} 
        />
      )}
    </>
  );
}