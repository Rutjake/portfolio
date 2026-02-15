import type { SanityImageSource } from "@sanity/image-url/lib/types/types";

export interface Project {
  title: string;
  category: string;
  image?: SanityImageSource;
  descriptionFi?: string;
  descriptionEn?: string;
}