const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const { chromium } = require('playwright');

const base = process.env.PORTFOLIO_TEST_URL || 'http://127.0.0.1:8793/';
async function main() {
  const browser = await chromium.launch({ channel: 'chrome', headless: true });
  const results = [];
  for (const width of [1440, 390]) {
    const page = await browser.newPage({ viewport: { width, height: 900 }, deviceScaleFactor: 1 });
    const errors = [];
    const requests = [];
    page.on('pageerror', error => errors.push(error.message));
    page.on('response', response => {
      if (response.request().resourceType() === 'image') requests.push({ url: response.url(), status: response.status(), bytes: Number(response.headers()['content-length'] || 0) });
    });
    const session = await page.context().newCDPSession(page);
    await session.send('Network.enable');
    await session.send('Network.setCacheDisabled', { cacheDisabled: true });
    await session.send('Network.emulateNetworkConditions', { offline: false, latency: 120, downloadThroughput: 187500, uploadThroughput: 93750 });
    const start = Date.now();
    await page.goto(base, { waitUntil: 'domcontentloaded' });
    await page.addStyleTag({ content: 'html{scroll-behavior:auto!important}.site-header{visibility:hidden!important}' });
    await page.waitForFunction(() => [...document.querySelectorAll('#profile img')].every(img => img.complete && img.naturalWidth), null, { timeout: 45000 });
    const heroMs = Date.now() - start;
    const initialBytes = requests.reduce((sum, item) => sum + item.bytes, 0);
    assert(requests.every(item => item.url.includes('/assets/previews/')), 'Original downloaded before lightbox use');
    await session.send('Network.emulateNetworkConditions', { offline: false, latency: 0, downloadThroughput: -1, uploadThroughput: -1 });
    await page.evaluate(() => document.querySelectorAll('img[src]').forEach(img => { img.loading = 'eager'; }));
    await page.waitForFunction(() => [...document.querySelectorAll('img[src]')].filter(img => img.id !== 'viewer-image').every(img => img.complete && img.naturalWidth), { timeout: 30000 });
    await page.locator('[data-panel="gift-calendar"]').click({ force: true });
    await page.waitForFunction(() => {
      const image = document.querySelector('.gift-overview-image');
      return image.dataset.imageOriginal?.endsWith('c35_travel_calendar_full.png') && image.complete && image.naturalWidth;
    });
    const thumb = page.locator('.museum-browser-thumb').nth(1);
    await thumb.click({ force: true });
    await page.waitForFunction(() => document.querySelector('.museum-browser-main-button').dataset.full.includes('topic_02'));
    await page.waitForFunction(() => !document.querySelector('.museum-browser-main').classList.contains('is-switching'));
    const board = page.locator('.museum-browser-main-button');
    const fullUrl = await board.getAttribute('data-full');
    await board.click();
    await page.waitForFunction(source => document.querySelector('#viewer-image').getAttribute('src') === source && document.querySelector('#viewer-image').naturalWidth > 0, fullUrl);
    await page.keyboard.press('Escape');
    const flip = page.locator('[data-card-flip]');
    await flip.click({ force: true });
    assert.equal(await flip.getAttribute('aria-pressed'), 'true');
    const overflow = await page.evaluate(() => document.documentElement.scrollWidth > innerWidth);
    assert.equal(overflow, false);
    assert.deepEqual(errors, []);
    assert(requests.every(item => item.status === 200), 'Image HTTP failure');
    await page.addStyleTag({ content: '.site-header{visibility:hidden!important}' });
    const heading = page.locator('.museum-board-heading');
    await heading.scrollIntoViewIfNeeded();
    await page.screenshot({ path: `.codex-build/image-loading-${width}.png` });
    results.push({ width, heroMs, initialImageBytes: initialBytes, images: await page.locator('img').count(), errors });
    await page.close();
  }
  const page = await browser.newPage();
  let attempts = 0;
  await page.route('**/assets/previews/*', route => {
    if (route.request().url().includes('retry=')) attempts += 1;
    if (!attempts) { attempts += 1; return route.abort('failed'); }
    return route.continue();
  });
  await page.goto(base, { waitUntil: 'domcontentloaded' });
  await page.waitForFunction(() => [...document.querySelectorAll('#profile img')].every(img => img.complete && img.naturalWidth));
  assert(attempts >= 2, 'Failed image was not retried');
  results.push({ transientFailureRecovered: true });
  fs.writeFileSync(path.resolve('.codex-build/image-loading-results.json'), JSON.stringify(results, null, 2));
  console.log(JSON.stringify(results));
  await browser.close();
}
main().catch(error => { console.error(error); process.exit(1); });
