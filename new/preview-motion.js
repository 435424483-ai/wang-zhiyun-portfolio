(() => {
  const reduced=matchMedia('(prefers-reduced-motion:reduce)').matches;
  const exportMode=new URLSearchParams(location.search).get('export');
  if(exportMode)document.body.classList.add('export-mode',`export-${exportMode}`);
  const reveal=selector=>document.querySelectorAll(selector).forEach(el=>el.classList.add('preview-reveal'));

  reveal('.people-daily-opening .project-meta,.people-daily-opening h2,.people-daily-overview,.people-daily-case .approved-heading,.people-daily-sources,.people-daily-translation,.people-daily-final,.people-daily-posters .section-heading,.people-daily-series .section-heading,.series-switcher,.gulangyu-opening [data-gy-open],.gulangyu-opening-rule,.venue-context-heading,.venue-context-overview,.venue-group,.development-heading,.development-overview,.development-venue,.development-result,.museum-opening .project-meta,.museum-opening h2,.project-summary,.core>.section-heading,.approved-heading,.draft-row,.board-main,.board-side,.game-layout>div,.collection>.section-heading');

  document.querySelectorAll('.route-cards>img').forEach((front,index)=>{
    const button=document.createElement('button');
    button.type='button';button.className='preview-route-card';button.setAttribute('aria-pressed','false');
    button.setAttribute('aria-label',`${front.alt}，点击查看背面`);
    const inner=document.createElement('span');inner.className='preview-route-card-inner';
    const frontFace=document.createElement('span');frontFace.className='preview-route-card-face preview-route-card-front';
    const backFace=document.createElement('span');backFace.className='preview-route-card-face preview-route-card-back';
    const back=document.createElement('img');back.src='assets/d_museum/museum_game_route_back.png';back.alt=`路线手卡背面 ${index+1}`;back.loading='lazy';
    front.replaceWith(button);frontFace.append(front);backFace.append(back);inner.append(frontFace,backFace);button.append(inner);
    button.addEventListener('click',()=>{const flipped=button.classList.toggle('is-flipped');button.setAttribute('aria-pressed',String(flipped))});
  });

  const tracks=[
    ['.board-thumbs','.work-image'],
    ['.route-cards',':scope>.preview-route-card'],
    ['.collection-grid',':scope>figure'],
    ['.people-daily-poster-grid',':scope>figure']
  ];
  for(const [trackSelector,itemSelector] of tracks)document.querySelectorAll(trackSelector).forEach(track=>{
    track.classList.add('preview-slide-track');
    track.querySelectorAll(itemSelector).forEach((item,index)=>{
      item.classList.add('preview-slide-item');
      item.style.setProperty('--motion-index',index);
    });
  });

  document.body.classList.add('motion-ready');
  const targets=[...document.querySelectorAll('.preview-reveal,.preview-slide-track')];
  if(reduced||exportMode){targets.forEach(el=>el.classList.add('is-in-view'));return}
  const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{
    if(!entry.isIntersecting)return;
    entry.target.classList.add('is-in-view');
    observer.unobserve(entry.target);
  }),{threshold:.08,rootMargin:'0px 0px -7%'});
  targets.forEach(el=>observer.observe(el));
})();
