(() => {
  const reduced = matchMedia('(prefers-reduced-motion:reduce)');
  const mobile = matchMedia('(max-width:700px)');
  const exportMode = new URLSearchParams(location.search).get('export');
  if (exportMode) document.body.classList.add('export-mode', `export-${exportMode}`);
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


  // Content stays readable even if observers or animation are unavailable.
  const seen = new WeakSet(), running = new Map();
  let observer, navigationUntil = 0;
  function reveal(element, immediate = false, delay = 0) {
    if (immediate) { running.get(element)?.cancel(); running.delete(element); }
    if (seen.has(element)) return;
    seen.add(element); observer?.unobserve(element);
    element.classList.add('is-in-view');
    if (immediate || reduced.matches || exportMode || !element.animate) return;
    const visual = element.matches('figure') || !!element.querySelector('img,video');
    const distance = visual ? (mobile.matches ? 18 : 28) : (mobile.matches ? 14 : 20);
    const duration = visual ? (mobile.matches ? 680 : 760) : 650;
    const animation = element.animate([
      {opacity:0, transform:`translate3d(0,${distance}px,0)`},
      {opacity:1, transform:'translate3d(0,0,0)'}
    ], {duration:performance.now()<navigationUntil ? 460 : duration,
      delay:performance.now()<navigationUntil ? 0 : delay,
      easing:'cubic-bezier(.22,.61,.36,1)', fill:'backwards'});
    running.set(element, animation);
    animation.finished.catch(()=>{}).finally(()=>{if(running.get(element)===animation) running.delete(element);});
  }
  function showTarget(target) {
    // Keep destination groups eligible for their own entry, including later sections.
    // A directory jump shortens the entry instead of removing the project's motion.
    navigationUntil = performance.now() + 1200;
    for (const element of running.keys()) {
      if (element.contains(target)) reveal(element,true);
    }
  }
  window.portfolioMotion = {showTarget};
  function setup() {
    const candidates = new Set();
    const add = element => {
      if (!element || !element.getClientRects().length || element.closest('[hidden]')) return;
      if (element.matches('script,style,dialog') || element.matches('.gulangyu-opening-rule,.contact-rule')) return;
      // Preserve existing visual groups, including their accompanying captions.
      const children = [...element.children].filter(e=>!e.matches('script,style'));
      if (children.length && !element.matches('figure,button,p,h1,h2,h3,h4,dl') &&
          (element.matches('[class$="-inner"],.mazoo-inner,.party-inner,.youth-restart-inner') || element.getBoundingClientRect().height > 950)) {
        children.forEach(add); return;
      }
      candidates.add(element);
    };
    document.querySelectorAll('main > section:not(#home),main > footer,main > article > header,main > article > section,main > article > .youth-editorial-wrap')
      .forEach(section=>[...section.children].forEach(add));
    const groups = [...candidates].filter(e=>![...candidates].some(parent=>parent!==e&&parent.contains(e)));
    observer = 'IntersectionObserver' in window ? new IntersectionObserver(entries=>{
      let index=0;
      entries.forEach(entry=>{
        if(!entry.isIntersecting) return;
        reveal(entry.target, reduced.matches || entry.boundingClientRect.bottom<0, Math.min(index++ * (mobile.matches?60:80), mobile.matches?180:240));
      });
    }, {threshold:0, rootMargin:'0px 0px 24px 0px'}) : null;
    groups.forEach(element=>{
      element.classList.add('site-motion-group');
      const rect=element.getBoundingClientRect();
      if(!observer || reduced.matches || exportMode || rect.bottom<=0) reveal(element,true);
      else observer.observe(element);
    });
    const target=document.getElementById(location.hash.slice(1));if(target)showTarget(target);
  }
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',setup,{once:true});else setup();
  addEventListener('scroll',()=>{
    // Only finish groups that have actually left the viewport; ordinary scrolling
    // must not cancel the visible slide-in halfway through.
    for(const element of running.keys()) {
      const rect=element.getBoundingClientRect();
      if(rect.bottom<0 || rect.top>innerHeight) reveal(element,true);
    }
  },{passive:true});
  addEventListener('hashchange',()=>{const target=document.getElementById(location.hash.slice(1));if(target)showTarget(target)});
  reduced.addEventListener('change',()=>{
    if(reduced.matches) document.querySelectorAll('.site-motion-group').forEach(element=>reveal(element,true));
  });
})();
