const fs = require('node:fs');
const path = require('node:path');
const { execFileSync } = require('node:child_process');
const sharp = require('sharp');
const root = path.resolve(__dirname, '..');
const out = path.join(root, 'dist');
const entry = 'preview-soft-cover.html';
const queue = [entry, 'portfolio-content-adjustments.json', 'assets/fonts/editorial/OFL-Noto.txt', 'assets/fonts/editorial/OFL-WenKai.txt'];
const dynamicPrefixes = ['assets/youth-media/01-editorial/expectations/', 'assets/youth-media/01-editorial/hand-drawn/', 'assets/youth-media/01-editorial/media-memoir/web/page-'];
for (const prefix of dynamicPrefixes) {
  const dir = prefix.endsWith('/') ? prefix : path.posix.dirname(prefix);
  for (const file of fs.readdirSync(path.join(root, dir))) {
    const name = path.posix.join(dir, file);
    if (name.startsWith(prefix) && /\.(png|jpg|webp)$/.test(name)) queue.push(name);
  }
}
const files = new Set();
const missing = new Set();
const contentByFile = new Map();
while (queue.length) {
  const name = queue.pop();
  if (files.has(name)) continue;
  const source = path.resolve(root, name);
  if (!source.startsWith(root + path.sep)) throw Error(`Outside project: ${name}`);
  if (!fs.existsSync(source) || !fs.statSync(source).isFile()) { missing.add(name); continue; }
  const segments = name.split('/');
  let parent = root;
  for (const segment of segments) {
    if (!fs.readdirSync(parent).includes(segment)) throw Error(`Incorrect filename case: ${name}`);
    parent = path.join(parent, segment);
  }
  files.add(name);
  if (!/\.(html|css|js|json)$/.test(name)) continue;
  let content = fs.readFileSync(source, 'utf8').replace(/^\uFEFF/, '');
  if (name.endsWith('.css')) content = content.replace(/assets\/fonts\/editorial\/([^"')]+)\.ttf/g, 'assets/fonts/editorial/web/$1.woff2').replace(/format\("truetype"\)/g, 'format("woff2")');
  if (name === entry) {
    content = content.replace(/<div class="preview-note">[\s\S]*?<\/div>/, '<div class="preview-note"><span>汪之韵 / PORTFOLIO 2026</span></div>');
    content = content.replace('</title>', '</title>\n  <meta name="description" content="汪之韵的视觉设计、品牌传播与内容策划作品集，收录人民日报数字传播、鼓浪屿建筑文创、博物馆、青年媒体与 MAZOO 原创设计项目。">');
  }
  if (name.endsWith('.js')) execFileSync(process.execPath, ['--check', source], { stdio: 'pipe' });
  contentByFile.set(name, content);
  const pattern = /(?:src|href)=["']([^"']+)["']|url\(["']?([^\)'"\s]+)|["']((?:assets|docs)\/[^"']+)["']/g;
  for (const match of content.matchAll(pattern)) {
    let ref = (match[1] || match[2] || match[3]).split('?')[0].split('#')[0];
    if (!ref || /^(?:[a-z]+:|\/\/)/i.test(ref) || ref.includes('${')) continue;
    ref = decodeURIComponent(ref);
    const resolved = path.posix.normalize(path.posix.join(path.posix.dirname(name), ref));
    if (dynamicPrefixes.includes(ref)) continue;
    if (resolved.endsWith('.html') && resolved !== entry) throw Error(`Unexpected preview link: ${name} -> ${resolved}`);
    queue.push(resolved);
  }
}
if (missing.size) throw Error(`Missing resources:\n${[...missing].sort().join('\n')}`);
if (path.resolve(out) !== path.join(root, 'dist')) throw Error('Invalid build directory');
fs.rmSync(out, { recursive: true, force: true });
fs.mkdirSync(out, { recursive: true });
async function writeBuild() {
for (const name of files) {
  const isRaster = /\.(png|jpe?g)$/i.test(name);
  const target = path.join(out, name === entry ? 'index.html' : name + (isRaster ? '.webp' : ''));
  fs.mkdirSync(path.dirname(target), { recursive: true });
  if (contentByFile.has(name)) {
    let content = contentByFile.get(name);
    for (const asset of files) if (/\.(png|jpe?g)$/i.test(asset)) content = content.split(asset).join(asset + '.webp');
    if (['youth-media-drawings.js', 'youth-media-features.js'].includes(name)) content = content.replace(/\.png(['"])/g, '.png.webp$1');
    fs.writeFileSync(target, content);
  }
  else if (isRaster) await sharp(path.join(root, name), { limitInputPixels: false }).rotate().resize({ width: 2400, height: 16000, fit: 'inside', withoutEnlargement: true }).webp({ quality: 88, effort: 5 }).toFile(target);
  else fs.copyFileSync(path.join(root, name), target);
}
fs.writeFileSync(path.join(out, '404.html'), '<!doctype html><html lang="zh-CN"><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>页面未找到 · 汪之韵</title><main><h1>页面未找到</h1><p><a href="/">返回作品集首页</a></p></main></html>');
fs.writeFileSync(path.join(out, 'robots.txt'), 'User-agent: *\nAllow: /\n');
const report = { entry, files: files.size, megabytes: Math.round([...files].reduce((n, f) => n + fs.statSync(path.join(root, f)).size, 0) / 1048576 * 10) / 10, resources: [...files].sort() };
if (process.argv.includes('--manifest')) fs.writeFileSync(path.join(root, 'production-manifest.json'), JSON.stringify(report, null, 2) + '\n');
const outputBytes = fs.readdirSync(out, { recursive: true, withFileTypes: true }).filter(f => f.isFile()).reduce((n, f) => n + fs.statSync(path.join(f.parentPath, f.name)).size, 0);
console.log(JSON.stringify({ entry: report.entry, files: report.files, sourceMegabytes: report.megabytes, outputMegabytes: Math.round(outputBytes / 1048576 * 10) / 10, missing: 0 }));
}
writeBuild().catch(error => { console.error(error); process.exitCode = 1; });
