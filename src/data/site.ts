/**
 * Everything only the TasavVR team knows lives here.
 *
 * `null` means "not filled in yet": the page shows a visible [FILL] marker in
 * its place, so nothing unconfirmed goes live by accident. Replace each null
 * with the real value (see docs/website-structure.md §9 "What to prepare").
 */

export type Media = {
  /** Path under /public, e.g. "/media/hero-1080.mp4". */
  src: string;
  /** Still frame shown before the video plays and when "reduce motion" is on. */
  poster: string;
};

export type HouseModel = {
  name: string | null;
  areaM2: number | null;
  rooms: number | null;
  /** 3–6 images per model, paths under /public. */
  images: string[];
};

export const site = {
  /** [CONFIRM: domain is free] Keep in sync with `site` in astro.config.mjs. */
  url: 'https://tasavvr.uz',

  /** Real numbers only. Shown in the hero proof line and the demo section. */
  stats: {
    houseModels: null as number | null,
    testers: null as number | null,
  },

  /** How fast the team answers a demo request, in hours. [FILL] */
  replyWithinHours: null as number | null,

  contacts: {
    /** Public Telegram username, without the @. [FILL] */
    telegram: null as string | null,
    /** Display format: +998 XX XXX XX XX. [FILL] */
    phone: null as string | null,
    /** e.g. hello@tasavvr.uz. [FILL] */
    email: null as string | null,
  },

  /** Full URLs. Leave null to hide a network. [FILL] */
  social: {
    telegramChannel: null as string | null,
    instagram: null as string | null,
    youtube: null as string | null,
    linkedin: null as string | null,
  },

  media: {
    /**
     * Hero reveal: 10–15 s, muted H.264 MP4. Flat plan → walls rise → walk
     * into the living room. ~3 MB at 1080p (16:9) and ~1.5 MB at 720p
     * (square crop). While null, the page shows the floor-plan drawing.
     */
    heroDesktop: null as Media | null,
    heroMobile: null as Media | null,

    /**
     * Plan/3D slider pair, rendered from the same overhead camera at the same
     * size. While null, the page uses the built-in sample drawings.
     */
    sliderPlan: null as string | null,
    sliderRender: null as string | null,

    /** YouTube video ID of the 60–90 s split-screen demo. [FILL] */
    demoYoutubeId: null as string | null,

    /** Equirectangular 2:1 panorama (~4096 × 2048). Null hides the 360° block. */
    panorama: null as string | null,

    /** Test-session photos (with permission from everyone in them). [FILL] */
    testPhotos: [] as string[],
  },

  /** House models for the demo gallery. [FILL] */
  models: [
    { name: null, areaM2: null, rooms: null, images: [] },
    { name: null, areaM2: null, rooms: null, images: [] },
    { name: null, areaM2: null, rooms: null, images: [] },
  ] as HouseModel[],

  /**
   * One entry per person, in the same order as `team.members` in the
   * dictionaries (roles and one-liners are translated there). [FILL]
   * Resolve the team-size question first (docs §8).
   */
  team: [
    { name: null, photo: null },
    { name: null, photo: null },
    { name: null, photo: null },
  ] as { name: string | null; photo: string | null }[],

  /** Pick one analytics tool (docs §7.5). IDs are public; leave null to disable. */
  analytics: {
    yandexMetricaId: null as number | null,
    ga4Id: null as string | null,
  },

  /** Cloudflare Pages Function in functions/api/demo-request.ts. */
  formEndpoint: '/api/demo-request',
};

export function telegramUrl(): string | null {
  return site.contacts.telegram ? `https://t.me/${site.contacts.telegram}` : null;
}

export function phoneHref(): string | null {
  return site.contacts.phone ? `tel:${site.contacts.phone.replace(/[^\d+]/g, '')}` : null;
}
