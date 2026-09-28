/**
 * Cloudflare Pages Function: POST /api/demo-request
 *
 * Sends each demo request to the team's Telegram group through a bot
 * (instant), with email as a backup when configured (docs §4.12).
 *
 * Environment variables (Cloudflare Pages → Settings → Environment variables):
 *   TELEGRAM_BOT_TOKEN  required — from @BotFather
 *   TELEGRAM_CHAT_ID    required — the team group's chat ID (add the bot to the group first)
 *   RESEND_API_KEY      optional — email backup via resend.com
 *   NOTIFY_EMAIL        optional — where the backup email goes, e.g. hello@tasavvr.uz
 *   FROM_EMAIL          optional — verified sender, e.g. "TasavVR <site@tasavvr.uz>"
 *
 * Personal data passes through Telegram and (optionally) Resend. List both in
 * the privacy policy (docs §7.7).
 */

interface Env {
  TELEGRAM_BOT_TOKEN?: string;
  TELEGRAM_CHAT_ID?: string;
  RESEND_API_KEY?: string;
  NOTIFY_EMAIL?: string;
  FROM_EMAIL?: string;
}

type Context = { request: Request; env: Env };

const ROLES = ['developer', 'architect', 'buyer', 'investor', 'other'];
const PACKAGES = ['', 'basic', 'interactive', 'subscription', 'unsure'];
const CHANNELS = ['', 'telegram', 'call', 'email'];
const LANGS = ['uz', 'ru', 'en'];

const ROLE_LABELS: Record<string, string> = {
  developer: 'Construction company',
  architect: 'Architect',
  buyer: 'Buyer',
  investor: 'Investor — wants the pitch deck',
  other: 'Other',
};

function json(body: unknown, status = 200): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'no-store' },
  });
}

function clean(value: unknown, max: number): string {
  return typeof value === 'string' ? value.trim().slice(0, max) : '';
}

function escapeHtml(value: string): string {
  return value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

export async function onRequestPost({ request, env }: Context): Promise<Response> {
  let body: Record<string, unknown>;
  try {
    const type = request.headers.get('content-type') ?? '';
    body = type.includes('application/json')
      ? ((await request.json()) as Record<string, unknown>)
      : Object.fromEntries((await request.formData()).entries());
  } catch {
    return json({ ok: false, error: 'bad_request' }, 400);
  }

  // Honeypot: people never see this field. Pretend success so bots move on.
  if (clean(body.website, 200)) return json({ ok: true });

  const data = {
    name: clean(body.name, 120),
    phone: clean(body.phone, 30),
    company: clean(body.company, 160),
    role: clean(body.role, 20),
    package: clean(body.package, 20),
    size: clean(body.size, 160),
    message: clean(body.message, 2000),
    channel: clean(body.channel, 20),
    consent: clean(body.consent, 10),
    lang: clean(body.lang, 2),
    page: clean(body.page, 300),
  };

  const digits = data.phone.replace(/\D/g, '');
  const errors: string[] = [];
  if (!data.name) errors.push('name');
  if (!(digits.length === 12 && digits.startsWith('998'))) errors.push('phone');
  if (!ROLES.includes(data.role)) errors.push('role');
  if (data.consent !== 'yes') errors.push('consent');
  if (!PACKAGES.includes(data.package)) data.package = '';
  if (!CHANNELS.includes(data.channel)) data.channel = '';
  if (!LANGS.includes(data.lang)) data.lang = 'uz';
  if (errors.length) return json({ ok: false, errors }, 422);

  const phone = `+998 ${digits.slice(3, 5)} ${digits.slice(5, 8)} ${digits.slice(8, 10)} ${digits.slice(10, 12)}`;
  const lines: [string, string][] = [
    ['Name', data.name],
    ['Phone', phone],
    ['Company', data.company],
    ['I am', ROLE_LABELS[data.role] ?? data.role],
    ['Package', data.package],
    ['Project size', data.size],
    ['Reach via', data.channel],
    ['Language', data.lang.toUpperCase()],
    ['Message', data.message],
  ];
  const filled = lines.filter(([, v]) => v);
  const title = data.role === 'investor' ? '📊 Pitch deck request' : '🏠 New demo request';

  const telegramText = [`<b>${title}</b>`, ...filled.map(([k, v]) => `<b>${k}:</b> ${escapeHtml(v)}`)].join('\n');
  const plainText = [title, '', ...filled.map(([k, v]) => `${k}: ${v}`), '', data.page].join('\n');

  const deliveries: Promise<boolean>[] = [];

  if (env.TELEGRAM_BOT_TOKEN && env.TELEGRAM_CHAT_ID) {
    deliveries.push(
      fetch(`https://api.telegram.org/bot${env.TELEGRAM_BOT_TOKEN}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: env.TELEGRAM_CHAT_ID,
          text: telegramText,
          parse_mode: 'HTML',
          disable_web_page_preview: true,
        }),
      })
        .then((r) => r.ok)
        .catch(() => false),
    );
  }

  if (env.RESEND_API_KEY && env.NOTIFY_EMAIL && env.FROM_EMAIL) {
    deliveries.push(
      fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${env.RESEND_API_KEY}` },
        body: JSON.stringify({
          from: env.FROM_EMAIL,
          to: [env.NOTIFY_EMAIL],
          subject: `${title}: ${data.name}`,
          text: plainText,
        }),
      })
        .then((r) => r.ok)
        .catch(() => false),
    );
  }

  if (!deliveries.length) {
    console.error('demo-request: no delivery channel configured (set TELEGRAM_BOT_TOKEN and TELEGRAM_CHAT_ID)');
    return json({ ok: false, error: 'not_configured' }, 503);
  }

  // Success if at least one channel delivered the request.
  const results = await Promise.all(deliveries);
  if (!results.some(Boolean)) return json({ ok: false, error: 'delivery_failed' }, 502);
  return json({ ok: true });
}
