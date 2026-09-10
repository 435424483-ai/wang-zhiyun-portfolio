(() => {
 const root=document.querySelector('#personal-explorations');if(!root)return;
 const reduced=matchMedia('(prefers-reduced-motion:reduce)');
 const entries=[...root.querySelectorAll('.personal-motion')].map(figure=>({figure,video:figure.querySelector('video'),button:figure.querySelector('button'),visible:false,pausedByUser:false}));
 function sync(e){
  e.figure.classList.toggle('is-static',reduced.matches);
  e.button.disabled=reduced.matches;
  if(reduced.matches||document.hidden||!e.visible||e.pausedByUser){e.video.pause();return;}
  e.video.muted=true;e.video.play().catch(()=>{});
 }
 entries.forEach(e=>{
  e.figure.querySelector('.personal-video-frame').style.backgroundImage=`url("${e.video.poster}")`;
  function label(){const playing=!e.video.paused;e.button.textContent=playing?'暂停':'播放';e.button.setAttribute('aria-pressed',String(playing));e.button.setAttribute('aria-label',(playing?'暂停':'播放')+e.video.getAttribute('aria-label'));}
  e.video.addEventListener('play',label);e.video.addEventListener('pause',label);
  e.button.addEventListener('click',()=>{e.pausedByUser=!e.video.paused;sync(e)});
 });
 const observer=new IntersectionObserver(changes=>{changes.forEach(change=>{const e=entries.find(e=>e.video===change.target);e.visible=change.isIntersecting&&change.intersectionRatio>=.2;sync(e)})},{threshold:[0,.2]});
 entries.forEach(e=>{observer.observe(e.video);sync(e)});
 reduced.addEventListener('change',()=>entries.forEach(sync));
 document.addEventListener('visibilitychange',()=>entries.forEach(sync));
})();
