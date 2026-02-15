interface SanityImage {
  _type: 'image';
  asset: {
    _ref: string;
    _type: 'reference';
  };
  hotspot?: {
    x: number;
    y: number;
    height: number;
    width: number;
  };
}

export interface Project {
  _id: string;
  title: string;
  category: string;
  image: SanityImage;
  slug: {
    current: string;
  };
  descriptionFi?: string;
  descriptionEn?: string;
  tags?: string[];
  gallery?: {
    _key: string;
    image: SanityImage;
    caption?: string;
  }[];
}