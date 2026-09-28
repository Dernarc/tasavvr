// Counts the visible [FILL] markers left in the built site (run after `npm run build`).
// Launch when every page reports 0. See docs/website-structure.md §9.
import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';

const walk = (dir) =>
  readdirSync(dir).flatMap((name) => {
    const path = join(dir, name);
    return statSync(path).isDirectory() ? walk(path) : path.endsWith('.html') ? [path] : [];
  });

let total = 0;
for (const file of walk('dist').sort()) {
  const html = readFileSync(file, 'utf8');
  const labels = [...html.matchAll(/<span class="fill"[^>]*>\[([^\]]*)\]<\/span>/g)].map((m) => m[1]);
  if (!labels.length) continue;
  total += labels.length;
  const counts = labels.reduce((acc, l) => acc.set(l, (acc.get(l) ?? 0) + 1), new Map());
  console.log(`\n${file.replace(/^dist/, '')} — ${labels.length}`);
  for (const [label, n] of counts) console.log(`  ${n > 1 ? `${n}× ` : ''}${label}`);
}
console.log(`\n${total} [FILL] marker(s) left.`);
process.exitCode = total ? 1 : 0;
