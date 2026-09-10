(() => {
 if(new URLSearchParams(location.search).has('export'))return;
 const portrait=matchMedia('(max-width:700px) and (orientation:portrait) and (pointer:coarse)');
 let dismissed=false;
 try{dismissed=sessionStorage.getItem('portfolio-orientation-dismissed')==='1'}catch{}
 const hint=document.createElement('aside');hint.className='orientation-hint';hint.hidden=true;
 hint.setAttribute('aria-label','观看提示');
 hint.innerHTML='<span aria-hidden="true">↻</span><div><strong>横屏可更宽幅地欣赏作品</strong><small>也可以继续竖屏阅读</small></div><button type="button" aria-label="关闭横屏提示">×</button>';
 document.body.append(hint);
 const update=()=>{hint.hidden=dismissed||!portrait.matches||!!document.querySelector('.intro-runway')};
 hint.querySelector('button').addEventListener('click',()=>{dismissed=true;try{sessionStorage.setItem('portfolio-orientation-dismissed','1')}catch{}update()});
 portrait.addEventListener('change',update);
 const observer=new MutationObserver(()=>{if(!document.querySelector('.intro-runway')){update();observer.disconnect()}});
 observer.observe(document.body,{childList:true});update();
})();
