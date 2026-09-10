(() => {
 const body=document.body, panel=document.querySelector('.index-panel'), toggle=document.querySelector('.index-toggle'), backdrop=document.querySelector('.index-backdrop'), main=document.querySelector('main');
 const compact=matchMedia('(max-width:1100px)'), reduced=matchMedia('(prefers-reduced-motion:reduce)');
 let open=!compact.matches;
 function render(focus=false){
  body.classList.toggle('index-closed',!open);toggle.setAttribute('aria-expanded',String(open));toggle.setAttribute('aria-label',open?'收起目录':'展开目录');
  panel.inert=!open;backdrop.hidden=!(compact.matches&&open);main.inert=compact.matches&&open;
  document.querySelector('.rail-name').tabIndex=compact.matches&&open?-1:0;
  body.style.overflow=compact.matches&&open?'hidden':'';
  if(compact.matches&&open){panel.setAttribute('role','dialog');panel.setAttribute('aria-modal','true')}else{panel.removeAttribute('role');panel.removeAttribute('aria-modal')}
  if(focus&&open)panel.querySelector('a').focus();
 }
 toggle.addEventListener('click',()=>{open=!open;render(open&&compact.matches)});
 backdrop.addEventListener('click',()=>{open=false;render();toggle.focus()});
 compact.addEventListener('change',()=>{open=!compact.matches;render()});
 document.addEventListener('keydown',e=>{
  if(e.key==='Escape'&&open){open=false;render();toggle.focus()}
  if(e.key==='Tab'&&open&&compact.matches){const items=[toggle,...panel.querySelectorAll('a[href]')],first=items[0],last=items.at(-1);if(e.shiftKey&&document.activeElement===first){e.preventDefault();last.focus()}else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first.focus()}}
 });
 document.querySelectorAll('a[href^="#"]').forEach(a=>a.addEventListener('click',e=>{
  const target=document.querySelector(a.getAttribute('href'));if(!target)return;e.preventDefault();
  if(compact.matches&&open){open=false;render()}
  history.pushState(null,'',a.getAttribute('href'));target.scrollIntoView({behavior:reduced.matches?'instant':'smooth',block:'start'});
  target.setAttribute('tabindex','-1');target.focus({preventScroll:true});
 }));
 const ids=['home','profile','work','people-daily','people-daily-case','people-daily-posters','people-daily-series','gulangyu','gulangyu-context','gulangyu-development','gulangyu-ai','gulangyu-products','museum','museum-overview','museum-boards','museum-game','museum-collection','youth-media','youth-media-restart','youth-editorial','youth-media-memoir','youth-they-say','youth-expectations','youth-hand-drawn','youth-calendar-restart','youth-gift-invitation','youth-delivery','youth-team-development','youth-experience-sharing','party-branch','party-script','party-comics','mazoo','mazoo-overview','mazoo-character','mazoo-content','mazoo-products','contact'];
 const links=[...panel.querySelectorAll('a[href^="#"]')];let scheduled=false;
 function update(){scheduled=false;let current='home';for(const id of ids){if(document.getElementById(id)?.getBoundingClientRect().top<=innerHeight*.32)current=id}
  const parent=/^(people-daily|gulangyu|museum|youth|party|mazoo)/.test(current)?'work':current;
  links.forEach(a=>{const id=a.hash.slice(1),active=id===current||(a.classList.contains('index-primary')&&id===parent);if(active)a.setAttribute('aria-current','location');else a.removeAttribute('aria-current')});
  const height=document.documentElement.scrollHeight-innerHeight,p=height>0?Math.min(1,Math.max(0,scrollY/height)):0;
  document.querySelector('.reading-track span').style.transform=`scaleY(${p})`;document.querySelector('.rail-progress').textContent=String(Math.round(p*100)).padStart(2,'0')+'%';
 }
 const queue=()=>{if(!scheduled){scheduled=true;requestAnimationFrame(update)}};
 addEventListener('scroll',queue,{passive:true});addEventListener('resize',queue);addEventListener('load',queue);new ResizeObserver(queue).observe(main);
 render();update();
})();


