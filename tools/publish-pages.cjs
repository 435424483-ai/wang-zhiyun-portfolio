const fs = require('node:fs');
const path = require('node:path');
const { execFileSync } = require('node:child_process');
const root = path.resolve(__dirname, '..');
execFileSync(process.execPath, [path.join(__dirname, 'build-production.cjs')], { cwd: root, stdio: 'inherit' });
// Keep generated pages separate from their editable source files.
fs.mkdirSync(path.join(root, 'new'), { recursive: true });
fs.cpSync(path.join(root, 'dist'), path.join(root, 'new'), { recursive: true });
fs.writeFileSync(path.join(root, 'index.html'), '<!doctype html><html lang="zh-CN"><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>汪之韵 · 作品集</title><meta http-equiv="refresh" content="0;url=new/"><script>location.replace("new/"+location.search+location.hash)</script><a href="new/">进入汪之韵作品集</a></html>');
const notFound = fs.readFileSync(path.join(root, 'dist', '404.html'), 'utf8').replace('href="/"', 'href="/wang-zhiyun-portfolio/new/"');
fs.writeFileSync(path.join(root, '404.html'), notFound);
fs.writeFileSync(path.join(root, '.nojekyll'), '');
console.log('GitHub Pages files updated. Commit and push to main to publish.');
