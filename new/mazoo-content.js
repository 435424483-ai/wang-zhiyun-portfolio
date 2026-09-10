(() => {
 const area=document.querySelector('#mazoo-content .mazoo-scenes');if(!area)return;
 const reduced=matchMedia('(prefers-reduced-motion:reduce)');
 let started=false;
 const entries=[...area.querySelectorAll('.mazoo-scene-trigger')].map(button=>({button,video:button.querySelector('video'),pausedByUser:false}));
 function sync(entry){
  const {video}=entry;
  if(!started)return;
  if(reduced.matches||entry.pausedByUser){video.pause();return;}
  video.muted=true;
  video.play().catch(()=>{});
 }
 entries.forEach(entry=>{
  const {button,video}=entry;
  button.style.setProperty('--scene-poster',`url("${video.poster}")`);
  video.muted=true;video.defaultMuted=true;video.loop=true;video.playsInline=true;video.setAttribute('webkit-playsinline','');video.preload='none';
  video.addEventListener('canplay',()=>sync(entry));
  video.addEventListener('loadeddata',()=>sync(entry));
  video.addEventListener('play',()=>button.setAttribute('aria-pressed','true'));
  video.addEventListener('pause',()=>button.setAttribute('aria-pressed','false'));
  button.addEventListener('click',()=>{if(reduced.matches)return;entry.pausedByUser=!video.paused;sync(entry)});
 });
 function motion(){
  area.classList.toggle('is-reduced',reduced.matches);
  entries.forEach(entry=>{entry.button.disabled=reduced.matches;entry.video.autoplay=started&&!reduced.matches;sync(entry)});
  const hint=document.querySelector('.mazoo-motion-hint');
  if(hint)hint.textContent=reduced.matches?'已按减少动态效果设置显示静态首帧':'自动播放 · 静音循环 · 轻触可暂停';
 }
 reduced.addEventListener('change',motion);
 document.addEventListener('visibilitychange',()=>{if(!document.hidden)entries.forEach(sync)});
 // Retry at the section and after a user gesture for mobile autoplay policies.
 const observer=new IntersectionObserver(changes=>{if(changes.some(e=>e.isIntersecting)){started=true;motion()}},{rootMargin:'200px'});
 observer.observe(area);
 document.addEventListener('touchend',()=>entries.forEach(sync),{passive:true});
 motion();
})();
