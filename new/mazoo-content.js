(() => {
 const area=document.querySelector('#mazoo-content .mazoo-scenes');if(!area)return;
 const entries=[...area.querySelectorAll('.mazoo-scene-trigger')].map(button=>({button,video:button.querySelector('video'),visible:false}));
 const reduced=matchMedia('(prefers-reduced-motion:reduce)');let active=null,preferred=null;
 function pauseAll(){entries.forEach(e=>{e.video.pause();e.button.setAttribute('aria-pressed','false')});active=null;}
 function play(e){if(reduced.matches||document.hidden||!e?.visible)return;pauseAll();active=e;e.video.muted=true;e.video.play().then(()=>{if(active===e)e.button.setAttribute('aria-pressed','true');else e.video.pause()}).catch(()=>{});}
 function choose(){if(reduced.matches||document.hidden){pauseAll();return;}const next=preferred?.visible?preferred:entries.find(e=>e.visible);if(next!==active){pauseAll();if(next)play(next);}}
 entries.forEach(e=>{
  e.button.style.setProperty('--scene-poster',`url("${e.video.poster}")`);
  e.button.addEventListener('pointerenter',event=>{if(event.pointerType==='mouse'){preferred=e;play(e)}});
  e.button.addEventListener('pointerleave',event=>{if(event.pointerType==='mouse'){preferred=null;if(active===e)pauseAll()}});
  e.button.addEventListener('click',()=>{if(reduced.matches)return;if(active===e&&!e.video.paused){preferred=null;pauseAll()}else{preferred=e;play(e)}});
 });
 const observer=new IntersectionObserver(changes=>{changes.forEach(c=>{entries.find(e=>e.button===c.target).visible=c.isIntersecting&&c.intersectionRatio>=.35});choose()},{threshold:[0,.35]});entries.forEach(e=>observer.observe(e.button));
 function motion(){area.classList.toggle('is-reduced',reduced.matches);entries.forEach(e=>{e.button.disabled=reduced.matches});pauseAll();choose();const hint=document.querySelector('.mazoo-motion-hint');hint.textContent=reduced.matches?'已按减少动态效果设置显示静态首帧':'悬停或轻触切换播放 · 静音循环';}
 reduced.addEventListener('change',motion);document.addEventListener('visibilitychange',choose);motion();
})();