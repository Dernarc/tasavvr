import { en, type Dict } from './en';
import { ru } from './ru';
import { uz } from './uz';

export const languages = ['uz', 'ru', 'en'] as const;
export type Lang = (typeof languages)[number];
export const defaultLang: Lang = 'uz';

const dictionaries: Record<Lang, Dict> = { uz, ru, en };

export function t(lang: Lang): Dict {
  return dictionaries[lang];
}

export function isLang(value: unknown): value is Lang {
  return typeof value === 'string' && (languages as readonly string[]).includes(value);
}

export const languageNames: Record<Lang, { short: string; long: string }> = {
  uz: { short: 'UZ', long: 'O‘zbekcha' },
  ru: { short: 'RU', long: 'Русский' },
  en: { short: 'EN', long: 'English' },
};

export const htmlLang: Record<Lang, string> = { uz: 'uz', ru: 'ru', en: 'en' };
export const ogLocale: Record<Lang, string> = { uz: 'uz_UZ', ru: 'ru_RU', en: 'en_US' };

export function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

/** Visible marker for information only the team has. */
export function fillMarker(label = 'N'): string {
  return `<span class="fill">[${escapeHtml(label)}]</span>`;
}

/**
 * Replace {name} tokens with values. A null value renders as a [FILL] marker,
 * so a missing number is obvious on the page instead of silently wrong.
 * Returns HTML; use with set:html.
 */
export function format(template: string, values: Record<string, string | number | null> = {}): string {
  return escapeHtml(template)
    .replace(/\[(FILL[^\]]*)\]/g, (_, label: string) => `<span class="fill">[${label}]</span>`)
    .replace(/\{(\w+)\}/g, (match, key: string) => {
      if (!(key in values)) return match;
      const value = values[key];
      if (value === null || value === undefined) return fillMarker('N');
      return escapeHtml(typeof value === 'number' ? formatNumber(value) : value);
    });
}

/** 60000000 → "60 000 000" with non-breaking spaces, so numbers never split. */
export function formatNumber(value: number): string {
  return String(value).replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
}
