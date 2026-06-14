import es from './es';
import en from './en';
import pt from './pt';

export type Lang = 'es' | 'en' | 'pt';

const dicts: Record<Lang, typeof es> = { es, en, pt };

export function t(lang: Lang) {
  return dicts[lang] ?? dicts.es;
}

export const LANGUAGES: { code: Lang; label: string }[] = [
  { code: 'es', label: 'Español' },
  { code: 'en', label: 'English' },
  { code: 'pt', label: 'Português' },
];
