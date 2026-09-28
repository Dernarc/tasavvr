// @ts-check
import { defineConfig } from 'astro/config';

// [CONFIRM: domain is free] — used for canonical, hreflang and Open Graph URLs.
export default defineConfig({
  site: 'https://tasavvr.uz',
  trailingSlash: 'always',
  build: { format: 'directory' },
});
