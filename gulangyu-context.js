(() => {
  const buttons = [...document.querySelectorAll('[data-venue-preview]')];
  if (!buttons.length || typeof HTMLDialogElement === 'undefined') return;
  const dialog = document.createElement('dialog');
  dialog.className = 'venue-preview-dialog';
  dialog.setAttribute('aria-label', '作品大图预览');
  dialog.innerHTML = '<button class="venue-preview-close" type="button" aria-label="关闭大图">×</button><figure><img alt=""><figcaption></figcaption></figure>';
  document.body.append(dialog);
  const image = dialog.querySelector('img');
  const caption = dialog.querySelector('figcaption');
  const close = dialog.querySelector('.venue-preview-close');
  let opener = null;
  const shut = () => { if (dialog.open) dialog.close(); };
  buttons.forEach(button => button.addEventListener('click', () => {
    opener = button;
    dialog.classList.toggle('party-reading-preview', button.dataset.previewReading === 'true');
      dialog.classList.remove('party-reading-zoom');
      image.src = button.dataset.venuePreview;
    image.alt = button.querySelector('img')?.alt || '';
    caption.textContent = button.dataset.previewCaption || '';
    dialog.showModal();
    close.focus();
  }));
  image.addEventListener('click', () => { if (dialog.classList.contains('party-reading-preview')) dialog.classList.toggle('party-reading-zoom'); });
    close.addEventListener('click', shut);
  dialog.addEventListener('click', event => {
    const rect = dialog.getBoundingClientRect();
    if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) shut();
  });
  dialog.addEventListener('close', () => {
    image.removeAttribute('src');
    opener?.focus();
    opener = null;
  });
})();
