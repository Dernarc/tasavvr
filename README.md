# TasavVR website

One long page in Uzbek (default), Russian and English, built around one action: **Request a demo**.
The spec it implements is [docs/website-structure.md](docs/website-structure.md).

Built with [Astro](https://astro.build) as a static site, plus one Cloudflare Pages Function for the form.

```
npm install
npm run dev          # http://localhost:4321 → opens /uz/
npm run build        # static site in dist/
npm run check        # type check
npm run check:fills  # lists every [FILL] marker still on the built pages
```

Node 22.12 or newer.

## Where things live

| What | File |
|---|---|
| All page text, per language | `src/i18n/uz.ts`, `src/i18n/ru.ts`, `src/i18n/en.ts` |
| Numbers, contacts, media, team, analytics IDs | `src/data/site.ts` |
| Sections, top to bottom | `src/components/sections/*.astro`, assembled in `src/pages/[lang]/index.astro` |
| Header, footer, phone bottom bar | `src/components/Header.astro`, `Footer.astro`, `MobileBar.astro` |
| Colors, type scale, buttons | `src/styles/global.css` |
| Sample floor plan (hero, Problem, slider) | `src/components/FloorPlan.astro` |
| Page behavior (tabs, slider, form, analytics) | `src/scripts/main.ts` |
| Form handler → Telegram (+ email) | `functions/api/demo-request.ts` |
| Logo, favicon, link-preview images | `public/brand/`, `public/og/` |

## Before launch

Anything only the team knows shows on the page as a dashed **[FILL: …]** marker, so nothing
unconfirmed goes live by accident. Replace the `null` values in `src/data/site.ts` and the
`[FILL: …]` text in the dictionaries, then run `npm run build && npm run check:fills` until it
reports 0. `[CONFIRM: …]` proposals from the spec are kept as code comments next to the copy
they affect: search for `CONFIRM` in `src/`.

Stand-ins to replace with your own files:

- **Logo** (`public/brand/logo.svg`, `logo-dark.svg`, `icon.svg`): traced from Unbounded as a
  placeholder. Swap in the real logo files.
- **Floor plan** (`FloorPlan.astro`): a sample 13 × 7.5 m apartment. Replace it with the plan of a
  home you have actually modelled, or set `media.sliderPlan` / `media.sliderRender` in `site.ts`
  to your own image pair (same overhead camera, same size).
- **Hero video**: set `media.heroDesktop` / `media.heroMobile` (MP4 + poster, under `public/media/`).
  Until then the hero shows the plan drawing.
- **Link previews** (`public/og/og-{uz,ru,en}.png`): generic cards. Replace with an eye-level
  frame from the hero video plus the logo, 1200 × 630. After changing one, send the URL to
  @WebpageBot in Telegram to refresh its cache.
- **Uzbek and Russian copy** needs a native-speaker pass.

Moving a feature from "In development" to "Works today": edit `solution.today` / `solution.next`
in all three dictionaries, and move `packages.highlight` to `interactive` once it ships.

## Deploy (Cloudflare Pages)

1. Create a Pages project from this repo. Build command `npm run build`, output directory `dist`,
   environment variable `NODE_VERSION=22`.
2. Under **Settings → Environment variables**, add `TELEGRAM_BOT_TOKEN` and `TELEGRAM_CHAT_ID`
   (create a bot with @BotFather and add it to the team group). For the email backup, also add
   `RESEND_API_KEY`, `NOTIFY_EMAIL` and `FROM_EMAIL`. See `.dev.vars.example`.
3. Add the custom domain. If it isn't `tasavvr.uz`, change `site` in `astro.config.mjs`,
   `url` in `src/data/site.ts` and the sitemap line in `public/robots.txt`.
4. Send a test request in each language from a phone and check it reaches Telegram.

To test the form locally with the function: `npm run build && npx wrangler pages dev dist`
(with a `.dev.vars` file).

Other hosts work too: the site itself is plain static files. Only `functions/api/demo-request.ts`
is Cloudflare-specific; on Netlify or Vercel, move it into their functions folder.

## Analytics

Set one of `analytics.yandexMetricaId` or `analytics.ga4Id` in `site.ts`. The page sends six events:
`demo_request_sent`, `deck_request_sent`, `contact_click` (with `channel`), `video_play`,
`package_click` (with `package`) and `language_switch` (with `to`). Mention the tool on the
privacy page.
