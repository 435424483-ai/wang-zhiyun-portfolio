/* Shared preview selection for initial markup and interactive image changes. */
function portfolioPreviewSource(source) {
  return window.portfolioImagePreviews?.[source]?.large.src || source;
}

function applyPortfolioPreview(image, source, eager = false) {
  const entry = window.portfolioImagePreviews?.[source];
  image.dataset.imageOriginal = source;
  image.dataset.imageAttempt = '0';
  image.classList.remove('image-unavailable');
  image.parentElement?.querySelector('.image-retry-status')?.remove();
  image.decoding = 'async';
  image.loading = eager ? 'eager' : 'lazy';
  image.removeAttribute('srcset');
  if (entry) {
    const thumbnail = image.closest('.museum-browser-thumb, .campus-series-thumb');
    image.sizes = thumbnail ? '160px' : '(max-width: 600px) 92vw, (max-width: 1100px) 60vw, 720px';
    image.srcset = `${entry.small.src} ${entry.small.width}w, ${entry.large.src} ${entry.large.width}w`;
    image.width = entry.width;
    image.height = entry.height;
    image.src = entry.small.src;
  } else {
    image.src = source;
  }
}

function preparePortfolioImages(fragment) {
  fragment.querySelectorAll('img[src]').forEach(image => {
    const source = image.dataset.imageOriginal || image.getAttribute('src');
    if (source) applyPortfolioPreview(image, source);
  });
}

function enablePortfolioImageRecovery(image) {
  if (image.id === 'viewer-image') return;
  const loaded = () => {
    image.classList.remove('image-unavailable');
    image.classList.add('is-loaded');
    image.closest('figure')?.classList.remove('image-missing');
    image.closest('.museum-route-card-face')?.classList.remove('is-missing');
    image.parentElement?.querySelector('.image-retry-status')?.remove();
  };
  const failed = () => {
    const original = image.dataset.imageOriginal || image.getAttribute('src');
    if (!original) return;
    const entry = window.portfolioImagePreviews?.[original];
    const attempt = Number(image.dataset.imageAttempt || 0);
    if (attempt < 2) {
      image.dataset.imageAttempt = String(attempt + 1);
      const candidate = attempt === 0 ? (image.currentSrc || image.src) : (entry?.small.src || original);
      window.setTimeout(() => {
        if ((image.dataset.imageOriginal || image.getAttribute('src')) !== original) return;
        const retryUrl = new URL(candidate, document.baseURI);
        retryUrl.searchParams.set('retry', String(attempt + 1));
        image.removeAttribute('srcset');
        image.src = retryUrl.href;
      }, 500 * (attempt + 1));
      return;
    }
    image.classList.add('image-unavailable');
    image.dispatchEvent(new Event('portfolioimageerror'));
    if (image.parentElement.querySelector('.image-retry-status')) return;
    const parentButton = image.closest('button, a');
    const retry = document.createElement(parentButton ? 'span' : 'button');
    retry.className = 'image-retry-status';
    retry.textContent = '图片暂未加载，点击重试';
    if (!parentButton) retry.type = 'button';
    image.parentElement.append(retry);
  };
  image.addEventListener('load', loaded);
  image.addEventListener('error', failed);
  if (image.complete && image.getAttribute('src')) {
    if (image.naturalWidth) loaded();
    else failed();
  }
}

document.addEventListener('click', event => {
  const retry = event.target.closest('.image-retry-status');
  const container = retry?.parentElement || event.target.closest('button, a');
  const failed = container?.querySelector('img.image-unavailable');
  if (!failed) return;
  event.preventDefault();
  event.stopImmediatePropagation();
  applyPortfolioPreview(failed, failed.dataset.imageOriginal, true);
}, true);
