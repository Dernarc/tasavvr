/**
 * All page behavior, progressively enhanced: everything works (or degrades to
 * plain links and visible content) without JavaScript.
 */

declare global {
  interface Window {
    ym?: (id: number, method: string, ...args: unknown[]) => void;
    gtag?: (...args: unknown[]) => void;
    __ymId?: number;
    pannellum?: { viewer: (el: HTMLElement, config: Record<string, unknown>) => unknown };
  }
}

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
const LANG_KEY = 'tasavvr-lang';

/* ---------- Analytics (§7.5): six events ---------- */

type EventName =
  | 'demo_request_sent'
  | 'deck_request_sent'
  | 'contact_click'
  | 'video_play'
  | 'package_click'
  | 'language_switch';

function track(name: EventName, params: Record<string, string> = {}): void {
  try {
    if (window.ym && window.__ymId) window.ym(window.__ymId, 'reachGoal', name, params);
    if (window.gtag) window.gtag('event', name, params);
  } catch {
    /* analytics must never break the page */
  }
}

document.addEventListener('click', (event) => {
  const target = (event.target as Element | null)?.closest<HTMLElement>('[data-track]');
  if (!target) return;
  const name = target.dataset.track;
  if (name === 'contact_click') track('contact_click', { channel: target.dataset.channel ?? '' });
  if (name === 'package_click') track('package_click', { package: target.dataset.package ?? '' });
});

/* ---------- Language: remember the choice, never redirect by location ---------- */

document.querySelectorAll<HTMLAnchorElement>('[data-set-lang]').forEach((link) => {
  link.addEventListener('click', () => {
    const lang = link.dataset.setLang ?? '';
    try {
      localStorage.setItem(LANG_KEY, lang);
    } catch {
      /* private mode */
    }
    if (lang !== document.body.dataset.lang) track('language_switch', { to: lang });
    // Keep the visitor's place on the page.
    if (location.hash && !link.href.includes('#')) link.href += location.hash;
  });
});

try {
  if (document.body.dataset.lang) localStorage.setItem(LANG_KEY, document.body.dataset.lang);
} catch {
  /* private mode */
}

/* ---------- Header: transparent over the hero, solid once scrolled ---------- */

const header = document.querySelector<HTMLElement>('[data-header]');
if (header?.classList.contains('over-hero')) {
  const update = () => header.classList.toggle('is-solid', window.scrollY > 24);
  update();
  window.addEventListener('scroll', update, { passive: true });
}

/* ---------- Phone menu ---------- */

const menuToggle = document.querySelector<HTMLButtonElement>('[data-menu-toggle]');
const menu = document.querySelector<HTMLElement>('[data-menu]');
const menuLabel = document.querySelector<HTMLElement>('[data-menu-label]');
const mobileBar = document.querySelector<HTMLElement>('[data-mobile-bar]');

function setMenu(open: boolean): void {
  if (!menuToggle || !menu) return;
  menuToggle.setAttribute('aria-expanded', String(open));
  menu.hidden = !open;
  header?.classList.toggle('menu-open', open);
  if (mobileBar) mobileBar.hidden = open;
  if (menuLabel) menuLabel.textContent = (open ? menuToggle.dataset.labelClose : menuToggle.dataset.labelOpen) ?? '';
}

menuToggle?.addEventListener('click', () => setMenu(menuToggle.getAttribute('aria-expanded') !== 'true'));
menu?.querySelectorAll('[data-menu-link]').forEach((link) => link.addEventListener('click', () => setMenu(false)));
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && menuToggle?.getAttribute('aria-expanded') === 'true') {
    setMenu(false);
    menuToggle.focus();
  }
});

// Close the compact language dropdown when clicking elsewhere.
document.addEventListener('click', (event) => {
  document.querySelectorAll<HTMLDetailsElement>('.lang-compact[open]').forEach((d) => {
    if (!d.contains(event.target as Node)) d.open = false;
  });
});

/* ---------- Hero video: plays muted; a still frame when "reduce motion" is on ---------- */

const heroVideo = document.querySelector<HTMLVideoElement>('[data-hero-video]');
if (heroVideo) {
  const sync = () => {
    if (reduceMotion.matches) {
      heroVideo.pause();
    } else {
      heroVideo.preload = 'auto';
      heroVideo.play().catch(() => {
        /* autoplay blocked: the poster stays */
      });
    }
  };
  sync();
  reduceMotion.addEventListener('change', sync);
}

/* ---------- Plan/3D slider ---------- */

document.querySelectorAll<HTMLElement>('[data-compare]').forEach((stage) => {
  const input = stage.querySelector<HTMLInputElement>('[data-compare-input]');
  if (!input) return;
  const update = () => stage.style.setProperty('--pos', `${input.value}%`);
  input.addEventListener('input', update);
  update();
});

/* ---------- Tabs (Who it's for) ---------- */

document.querySelectorAll<HTMLElement>('[data-tabs]').forEach((root) => {
  const tablist = root.querySelector<HTMLElement>('[data-tablist]');
  const tabs = Array.from(root.querySelectorAll<HTMLButtonElement>('[role="tab"]'));
  const panels = Array.from(root.querySelectorAll<HTMLElement>('[data-panel]'));
  if (!tablist || !tabs.length) return;

  const select = (index: number, focus = false) => {
    tabs.forEach((tab, i) => {
      const selected = i === index;
      tab.setAttribute('aria-selected', String(selected));
      tab.tabIndex = selected ? 0 : -1;
      panels[i]!.hidden = !selected;
    });
    if (focus) tabs[index]!.focus();
  };

  tablist.hidden = false;
  root.classList.add('is-ready');
  select(0);

  tabs.forEach((tab, i) => {
    tab.addEventListener('click', () => select(i));
    tab.addEventListener('keydown', (event) => {
      const last = tabs.length - 1;
      const next: Record<string, number> = {
        ArrowRight: i === last ? 0 : i + 1,
        ArrowLeft: i === 0 ? last : i - 1,
        Home: 0,
        End: last,
      };
      if (event.key in next) {
        event.preventDefault();
        select(next[event.key]!, true);
      }
    });
  });
});

/* ---------- Demo video: YouTube loads only on play ---------- */

document.querySelectorAll<HTMLButtonElement>('[data-youtube]').forEach((button) => {
  button.addEventListener('click', () => {
    const id = button.dataset.youtube;
    if (!id) return;
    const params = new URLSearchParams({
      autoplay: '1',
      rel: '0',
      cc_load_policy: '1',
      hl: button.dataset.youtubeLang ?? 'uz',
      cc_lang_pref: button.dataset.youtubeLang ?? 'uz',
    });
    const iframe = document.createElement('iframe');
    iframe.src = `https://www.youtube-nocookie.com/embed/${encodeURIComponent(id)}?${params}`;
    iframe.title = button.textContent?.trim() || 'TasavVR';
    iframe.allow = 'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen';
    iframe.allowFullscreen = true;
    button.replaceWith(iframe);
    iframe.focus();
    track('video_play');
  });
});

/* ---------- 360° view: Pannellum loads only when opened ---------- */

function loadOnce(tag: 'script' | 'link', url: string): Promise<void> {
  return new Promise((resolve, reject) => {
    const el = document.createElement(tag);
    if (el instanceof HTMLScriptElement) el.src = url;
    else {
      el.rel = 'stylesheet';
      el.href = url;
    }
    el.onload = () => resolve();
    el.onerror = () => reject(new Error(url));
    document.head.appendChild(el);
  });
}

document.querySelectorAll<HTMLButtonElement>('[data-panorama-open]').forEach((button) => {
  button.addEventListener('click', async () => {
    const stage = button.closest<HTMLElement>('[data-panorama]');
    if (!stage?.dataset.panorama) return;
    button.disabled = true;
    const cdn = 'https://cdn.jsdelivr.net/npm/pannellum@2.5.6/build';
    try {
      await Promise.all([loadOnce('link', `${cdn}/pannellum.css`), loadOnce('script', `${cdn}/pannellum.js`)]);
      button.remove();
      window.pannellum?.viewer(stage, {
        type: 'equirectangular',
        panorama: stage.dataset.panorama,
        autoLoad: true,
        showZoomCtrl: false,
        orientationOnByDefault: false,
        compass: false,
      });
    } catch {
      button.disabled = false;
    }
  });
});

/* ---------- Package and investor buttons pre-fill the form ---------- */

const packageSelect = document.querySelector<HTMLSelectElement>('[data-package-select]');
const roleSelect = document.querySelector<HTMLSelectElement>('[data-role-select]');

document.querySelectorAll<HTMLElement>('[data-package]').forEach((el) => {
  el.addEventListener('click', () => {
    if (packageSelect && el.dataset.package) packageSelect.value = el.dataset.package;
  });
});

document.querySelectorAll<HTMLElement>('[data-role-preset]').forEach((el) => {
  el.addEventListener('click', () => {
    if (roleSelect && el.dataset.rolePreset) roleSelect.value = el.dataset.rolePreset;
  });
});

/* ---------- Demo request form ---------- */

function formatPhone(raw: string): string {
  let digits = raw.replace(/\D/g, '');
  if (digits.length > 9 && digits.startsWith('998')) digits = digits.slice(3);
  digits = digits.slice(0, 9);
  const parts = [digits.slice(0, 2), digits.slice(2, 5), digits.slice(5, 7), digits.slice(7, 9)];
  return parts.filter(Boolean).join(' ');
}

const form = document.querySelector<HTMLFormElement>('[data-demo-form]');

if (form) {
  const phone = form.querySelector<HTMLInputElement>('[data-phone]')!;
  const submit = form.querySelector<HTMLButtonElement>('[data-submit]')!;
  const serverError = form.querySelector<HTMLElement>('[data-server-error]')!;
  const success = document.querySelector<HTMLElement>('[data-success]')!;
  const msg = form.dataset;

  phone.addEventListener('input', () => {
    phone.value = formatPhone(phone.value);
  });

  const showError = (field: HTMLInputElement | HTMLSelectElement, message: string | null) => {
    const box = document.getElementById(`e-${field.name}`);
    field.setAttribute('aria-invalid', message ? 'true' : 'false');
    if (box) {
      box.textContent = message ?? '';
      box.hidden = !message;
    }
  };

  const validate = (): (HTMLInputElement | HTMLSelectElement)[] => {
    const invalid: (HTMLInputElement | HTMLSelectElement)[] = [];
    const name = form.elements.namedItem('name') as HTMLInputElement;
    const role = form.elements.namedItem('role') as HTMLSelectElement;
    const consent = form.elements.namedItem('consent') as HTMLInputElement;
    const checks: [HTMLInputElement | HTMLSelectElement, boolean, string | undefined][] = [
      [name, name.value.trim().length > 0, msg.msgName],
      [phone, phone.value.replace(/\D/g, '').length === 9, msg.msgPhone],
      [role, role.value !== '', msg.msgRole],
      [consent, consent.checked, msg.msgConsent],
    ];
    for (const [field, ok, message] of checks) {
      showError(field, ok ? null : (message ?? ''));
      if (!ok) invalid.push(field);
    }
    return invalid;
  };

  // Re-check a field as soon as the visitor fixes it.
  form.addEventListener('change', (event) => {
    const field = event.target as HTMLInputElement;
    if (field.getAttribute('aria-invalid') === 'true') validate();
  });

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    serverError.hidden = true;

    const invalid = validate();
    if (invalid.length) {
      invalid[0]!.focus();
      return;
    }

    const data = Object.fromEntries(new FormData(form).entries()) as Record<string, string>;
    data.phone = `+998 ${phone.value}`;
    data.page = location.href;

    const label = submit.textContent;
    submit.disabled = true;
    submit.textContent = msg.msgSending ?? label;

    try {
      const response = await fetch(form.action, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(data),
      });
      if (!response.ok) throw new Error(String(response.status));
      form.hidden = true;
      success.hidden = false;
      success.focus();
      track(data.role === 'investor' ? 'deck_request_sent' : 'demo_request_sent', {
        role: data.role ?? '',
        package: data.package ?? '',
      });
    } catch {
      serverError.textContent = msg.msgServer ?? '';
      serverError.hidden = false;
    } finally {
      submit.disabled = false;
      submit.textContent = label;
    }
  });
}

export {};
