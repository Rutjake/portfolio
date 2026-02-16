import 'server-only'

export type Locale = 'fi' | 'en'

export interface Dictionary {
  heroTitle: string;
  heroDesc: string;
  heroButton: string;
  categories: {
    coding: string;
    cyber: string;
    ux: string;
  };
  projects: {
    galleryTitle: string;
    step: string;
    readMore: string;
    showLess: string;
  };
  infoModal: {
    experience: string;
    education: string;
    certifications: string;
    skills: string;
  };
}

const dictionaries = {
  fi: async () => {
    const [main, proj, info] = await Promise.all([
      import('@/locales/fi/mainPage.json').then((m) => m.default),
      import('@/locales/fi/projects.json').then((m) => m.default),
      import('@/locales/fi/infoModal.json').then((m) => m.default),
    ]);
    return { 
      ...main, 
      projects: proj, 
      infoModal: info 
    } as Dictionary;
  },
  en: async () => {
    const [main, proj, info] = await Promise.all([
      import('@/locales/en/mainPage.json').then((m) => m.default),
      import('@/locales/en/projects.json').then((m) => m.default),
      import('@/locales/en/infoModal.json').then((m) => m.default),
    ]);
    return { 
      ...main, 
      projects: proj, 
      infoModal: info 
    } as Dictionary;
  },
}

export const getDictionary = async (locale: string): Promise<Dictionary> => {
  const loader = dictionaries[locale as Locale] || dictionaries['fi'];
  return loader();
}