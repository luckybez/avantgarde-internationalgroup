// Render a local HTML file to PNG screenshots for visual review.
//
// Usage:
//   node scripts/render.mjs <file.html> [--pages id1,id2,...] [--out dir] [--mobile]
//
// - <file.html>      Path to the HTML file (default: live-website.html if present, else index.html)
// - --pages a,b,c    For multi-page sites driven by a global navigate(id) function,
//                    capture each page id in turn (full-page). Omit for single-page sites.
// - --out dir        Output directory (default: screenshots/)
// - --no-mobile      Skip the 390px mobile capture of the first view
//
// Examples:
//   node scripts/render.mjs live-website.html --pages page-home,page-architecture,page-cases,page-discovery
//   node scripts/render.mjs index.html
import puppeteer from 'puppeteer';
import { existsSync, mkdirSync } from 'node:fs';
import { resolve, basename } from 'node:path';

const args = process.argv.slice(2);
const flag = (name) => args.includes(name);
const opt = (name, def = null) => {
  const i = args.indexOf(name);
  return i !== -1 && args[i + 1] ? args[i + 1] : def;
};

let file = args.find((a) => !a.startsWith('--'));
if (!file) file = existsSync('live-website.html') ? 'live-website.html' : 'index.html';
const filePath = resolve(file);
if (!existsSync(filePath)) {
  console.error(`File not found: ${filePath}`);
  process.exit(1);
}

const outDir = resolve(opt('--out', 'screenshots'));
mkdirSync(outDir, { recursive: true });
const pages = (opt('--pages', '') || '').split(',').map((s) => s.trim()).filter(Boolean);
const doMobile = !flag('--no-mobile');
const stem = basename(file).replace(/\.html?$/i, '');

const browser = await puppeteer.launch({
  headless: 'new',
  args: ['--no-sandbox', '--disable-setuid-sandbox'],
});
try {
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 1 });
  await page.goto('file://' + filePath, { waitUntil: 'networkidle0', timeout: 60000 });
  // Allow webfonts to settle if present.
  if (page.evaluateHandle) {
    try { await page.evaluate(() => document.fonts && document.fonts.ready); } catch {}
  }
  await new Promise((r) => setTimeout(r, 500));

  const captures = pages.length ? pages : ['_single'];
  let n = 1;
  for (const id of captures) {
    if (id !== '_single') {
      await page.evaluate((pid) => {
        if (typeof navigate === 'function') navigate(pid);
        window.scrollTo(0, 0);
      }, id);
      await new Promise((r) => setTimeout(r, 400));
    }
    const label = id === '_single' ? stem : `${String(n).padStart(2, '0')}-${id}`;
    const out = `${outDir}/${label}.png`;
    await page.screenshot({ path: out, fullPage: true });
    console.log('rendered', out);
    n++;
  }

  if (doMobile) {
    await page.setViewport({ width: 390, height: 844, deviceScaleFactor: 2 });
    if (pages.length) {
      await page.evaluate((pid) => { if (typeof navigate === 'function') navigate(pid); window.scrollTo(0, 0); }, pages[0]);
    }
    await new Promise((r) => setTimeout(r, 400));
    const out = `${outDir}/${stem}-mobile.png`;
    await page.screenshot({ path: out, fullPage: true });
    console.log('rendered', out);
  }
} finally {
  await browser.close();
}
