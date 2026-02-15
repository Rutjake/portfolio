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
}

const dictionaries = {
  fi: () => import('@/locales/fi/mainPage.json').then((module) => module.default as Dictionary),
  en: () => import('@/locales/en/mainPage.json').then((module) => module.default as Dictionary),
}

export const getDictionary = async (locale: string): Promise<Dictionary> => {
  const loader = dictionaries[locale as Locale] 
  
  if (!loader) {
    console.warn(`Dictionary for locale "${locale}" not found, falling back to "fi"`);
    return dictionaries['fi']();
  }

  return loader();
}