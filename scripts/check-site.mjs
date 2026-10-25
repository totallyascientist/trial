import assert from 'node:assert/strict';
import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';

const root = process.cwd();
const read = (filePath) => readFileSync(join(root, filePath), 'utf8');

const main = read('src/main.tsx');
const home = read('src/pages/Home.tsx');
const about = read('src/pages/About.tsx');
const fanZone = read('src/pages/FanZone.tsx');
const data = read('src/data/site.ts');
const layout = read('src/components/Layout.tsx');
const html = read('index.html');
const css = read('src/styles.css');

const requiredRoutes = [
  '/',
  '/fan-zone',
  '/about',
  '/creator',
  '/partnerships',
  '/media-kit',
  '/contact',
  '/resources',
  '/vote',
];

for (const route of requiredRoutes) {
  assert.ok(main.includes(`path="${route}"`), `Missing route: ${route}`);
}

const homepageSections = [
  'className="hero"',
  'className="section fan-section"',
  'className="crossover-section"',
  'className="work-section"',
  'className="audience-section"',
  'className="about-teaser"',
  'className="commercial-section"',
];

let lastSectionIndex = -1;
for (const marker of homepageSections) {
  const index = home.indexOf(marker);
  assert.ok(index > lastSectionIndex, `Homepage section order problem: ${marker}`);
  lastSectionIndex = index;
}

assert.ok(home.includes('quick-links-section'), 'Homepage social links are missing.');
assert.ok(home.includes('AnimatedNumber'), 'Homepage audience metrics should animate.');
assert.ok(about.includes('channelGallery'), 'About page channel carousel is missing.');
assert.ok(about.includes('campaignHighlights'), 'Williams × Tzuyu highlights are missing.');
assert.ok(about.includes('channel-statistics-grid'), 'About page statistics are missing.');
assert.ok(fanZone.includes("item.number !== '02'"), 'Fan Zone must exclude the resources item.');
assert.ok(layout.includes('/assets/logo-no-bg.png'), 'Header should use the supplied logo.');
assert.ok(html.includes('/assets/favicon.png'), 'Browser tab should use the supplied logo favicon.');

const requiredFiles = [
  'public/_redirects',
  'public/robots.txt',
  'public/sitemap.xml',
  'public/assets/favicon.svg',
  'public/assets/favicon.png',
  'public/assets/logo-no-bg.png',
  'public/assets/cover.png',
  'public/assets/cover-fanzone.png',
  'public/assets/ASSET-MANIFEST.md',
  'public/assets/media/creator-portrait.webp',
  'public/assets/media/idol-of-the-week-cover.webp',
  'README.md',
];

for (const filePath of requiredFiles) {
  assert.ok(existsSync(join(root, filePath)), `Missing required file: ${filePath}`);
}

assert.ok(data.includes("href: 'https://totallyascientist.com/vote/'"), 'Voting URL changed unexpectedly.');
assert.ok(data.includes("href: 'https://totallyascientist.com/resources'"), 'Resources URL changed unexpectedly.');
assert.ok(data.includes('followers: 34_500'), 'Follower count should use the supplied metric.');
assert.ok(data.includes('monthlyReach: 2_000_000'), 'Monthly reach should use the supplied metric.');
assert.ok(data.includes('averageLikes: 10_000'), 'Average likes should use the supplied metric.');
assert.ok(data.includes('engagementRate: 17.8'), 'Engagement rate should use the supplied metric.');
assert.ok(css.includes('@media(prefers-reduced-motion:reduce)'), 'Reduced-motion styles are missing.');

const svgAssets = readdirSync(join(root, 'public/assets')).filter((name) => name.endsWith('.svg'));
assert.ok(svgAssets.length >= 10, 'Expected local SVG assets.');

console.log(
  `Site checks passed: ${homepageSections.length} homepage sections, ${requiredRoutes.length} routes, ` +
    `${svgAssets.length} SVG assets, backgrounds, logo, galleries and channel metrics verified.`,
);
