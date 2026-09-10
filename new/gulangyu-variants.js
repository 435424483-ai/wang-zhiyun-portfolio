(() => {
  const trigger=document.querySelector('[data-development-variants]');
  const dialog=document.querySelector('.venue-preview-dialog');
  if(!trigger||!dialog)return;
  const controls=document.createElement('div'); controls.className='vd-variant-controls'; controls.hidden=true;
  controls.innerHTML='<button type="button" aria-label="上一张补充图">← 上一张</button><button type="button" aria-label="下一张补充图">下一张 →</button>';
  dialog.append(controls);
  controls.addEventListener('click',event=>event.stopPropagation());
  const items=[
    [trigger.dataset.venuePreview,trigger.dataset.previewCaption],
    ['assets/b_gulangyu/architecture/panorama-structure.png.webp','建筑组合 · 补充版本'],
    ['assets/b_gulangyu/architecture/panorama-color-cool.png.webp','建筑组合 · 配色探索']
  ];
  let active=0;
  const show=()=>{dialog.querySelector('img').src=items[active][0];dialog.querySelector('img').alt=items[active][1];dialog.querySelector('figcaption').textContent=items[active][1]+' / '+(active+1)+' · '+items.length;};
  trigger.addEventListener('click',()=>{active=0;controls.hidden=false;show()});
  controls.querySelectorAll('button').forEach((button,i)=>button.addEventListener('click',()=>{active=(active+(i?1:-1)+items.length)%items.length;show()}));
  dialog.addEventListener('close',()=>{controls.hidden=true});
})();
