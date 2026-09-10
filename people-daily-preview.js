(() => {
  const switcher=document.querySelector('.series-switcher');
  if(!switcher)return;
  const tabs=[...switcher.querySelectorAll('.series-tab')];
  const panels=[...switcher.querySelectorAll('.series-panel')];
  const exportMode=new URLSearchParams(location.search).has('export');
  if(exportMode){panels.forEach(panel=>panel.hidden=false);return}
  const activate=(id)=>{
    tabs.forEach(tab=>tab.setAttribute('aria-selected',String(tab.dataset.seriesTarget===id)));
    panels.forEach(panel=>{
      const active=panel.id===id;
      panel.hidden=!active;
      if(active){panel.classList.remove('is-entering');void panel.offsetWidth;panel.classList.add('is-entering')}
    });
  };
  tabs.forEach(tab=>tab.addEventListener('click',()=>activate(tab.dataset.seriesTarget)));
})();
