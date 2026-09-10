(() => {
 const rule=document.querySelector('#contact .contact-rule'),path=rule?.querySelector('path');
 if(!path)return;
 const reduced=matchMedia('(prefers-reduced-motion:reduce)');
 let animation,observer,played=false;
 function enter(){
  if(played)return;played=true;observer?.disconnect();
  if(reduced.matches||new URLSearchParams(location.search).has('export'))return;
  animation=path.animate([{strokeDasharray:'1',strokeDashoffset:'1'},{strokeDasharray:'1',strokeDashoffset:'0'}],
   {duration:620,easing:'cubic-bezier(.6,0,.2,1)'});
 }
 if('IntersectionObserver' in window){observer=new IntersectionObserver(entries=>{if(entries.some(e=>e.isIntersecting))enter()},{rootMargin:'0px 0px 24px 0px'});observer.observe(rule)}
 reduced.addEventListener('change',()=>{if(reduced.matches){animation?.cancel();played=true;observer?.disconnect()}});
})();
