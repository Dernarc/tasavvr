import type { APIRoute } from 'astro';
import { htmlLang, languages } from '../i18n';
import { site } from '../data/site';

const paths = ['', 'privacy/'];

export const GET: APIRoute = () => {
  const base = site.url.replace(/\/$/, '');
  const urls = paths.flatMap((path) =>
    languages.map((lang) => {
      const alternates = languages
        .map((l) => `<xhtml:link rel="alternate" hreflang="${htmlLang[l]}" href="${base}/${l}/${path}"/>`)
        .concat(`<xhtml:link rel="alternate" hreflang="x-default" href="${base}/uz/${path}"/>`)
        .join('');
      return `<url><loc>${base}/${lang}/${path}</loc>${alternates}</url>`;
    }),
  );
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls.join('\n')}
</urlset>
`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
