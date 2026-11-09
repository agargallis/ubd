// Renders every social post to social/output/<id>.png (1080×1350 @2x).
// Usage: npm run social            (all posts)
//        npm run social -- hero    (only ids containing "hero")
// Set CHROME_PATH if Chrome/Edge is installed somewhere unusual.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createServer } from 'vite';
import puppeteer from 'puppeteer-core';

const socialDir = path.dirname(fileURLToPath(import.meta.url));
const outputDir = path.join(socialDir, 'output');
const filter = process.argv[2];

const BROWSER_CANDIDATES = [
  process.env.CHROME_PATH,
  'C:/Program Files/Google/Chrome/Application/chrome.exe',
  'C:/Program Files (x86)/Google/Chrome/Application/chrome.exe',
  'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  '/usr/bin/google-chrome',
  '/usr/bin/chromium',
].filter(Boolean);

const executablePath = BROWSER_CANDIDATES.find((candidate) => fs.existsSync(candidate));
if (!executablePath) {
  console.error('Chrome/Edge not found. Set CHROME_PATH to your browser executable.');
  process.exit(1);
}

const server = await createServer({
  configFile: path.join(socialDir, 'vite.config.mjs'),
  server: { port: 0, host: '127.0.0.1' },
});
await server.listen();
const baseUrl = server.resolvedUrls.local[0];

const browser = await puppeteer.launch({ executablePath, headless: 'new' });

try {
  const page = await browser.newPage();
  await page.setViewport({ width: 1080, height: 1350, deviceScaleFactor: 2 });
  await page.emulateMediaFeatures([{ name: 'prefers-reduced-motion', value: 'no-preference' }]);

  await page.goto(baseUrl, { waitUntil: 'networkidle0' });
  const ids = await page.evaluate(() =>
    [...document.querySelectorAll('.social-index a')].map((link) => link.textContent)
  );
  const selected = filter ? ids.filter((id) => id.includes(filter)) : ids;

  fs.mkdirSync(outputDir, { recursive: true });
  for (const id of selected) {
    await page.goto(`${baseUrl}?post=${id}`, { waitUntil: 'networkidle0' });
    await page.evaluate(() => document.fonts.ready);
    await page.waitForFunction(() => window.__SOCIAL_READY === true, { timeout: 30000 });
    const file = path.join(outputDir, `${id}.png`);
    await page.screenshot({ path: file, clip: { x: 0, y: 0, width: 1080, height: 1350 } });
    console.log('✓', path.relative(process.cwd(), file));
  }
} finally {
  await browser.close();
  await server.close();
}
