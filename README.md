# 汪之韵作品集网页

这是汪之韵的新媒体运营 / 品宣运营 / 视觉传播作品集网页。

## 如何修改

- 修改文字、案例说明、图片说明：编辑 `portfolio-data.js`
- 修改页面样式：编辑 `style.css`
- 修改页面结构：编辑 `index.html`
- 替换图片：放入 `assets` 文件夹，并在 `portfolio-data.js` 中修改图片路径

## 发布

建议使用 GitHub Pages，从 `main` 分支根目录发布。


## Vercel 正式发布

正式入口源文件为 `preview-soft-cover.html`。执行 `npm install`、`npm run build` 后，发布目录为 `dist`，其 `index.html` 是新版作品集。构建会检查路径大小写、缺失资源与 JavaScript 语法，并生成压缩后的 WebP 图片。

Vercel 使用仓库根目录中的 `vercel.json`，将 GitHub 的 `main` 分支设为 Production Branch。之后提交到 main 会自动构建并更新同一个项目域名。分享项目的固定生产域名，不分享每次部署生成的预览地址。后续可以在项目 Settings → Domains 中绑定独立域名。

`assets/fonts/editorial/web/` 为网页文字的 WOFF2 字体子集，原字体授权见同目录上级的 OFL 文件。大幅新增文案时应重新生成字体子集，避免新增汉字回退到系统字体。
