(() => {
 const body=document.body,panel=document.querySelector('.index-panel'),toggle=document.querySelector('.index-toggle'),backdrop=document.querySelector('.index-backdrop'),main=document.querySelector('main');
 if(!panel||!toggle)return;
 const compact=matchMedia('(max-width:1100px)'),reduced=matchMedia('(prefers-reduced-motion:reduce)');
 const links=[...panel.querySelectorAll('a[href^="#"]')],projects=[...panel.querySelectorAll('.index-project')];
 let open=!compact.matches,pending=null,scheduled=false,closeTimer;
 const indexScroller=panel.querySelector('.chapter-index');
 let manualIndexUntil=0,indexResumeTimer;
 function pauseIndexFollow(){manualIndexUntil=performance.now()+1200;clearTimeout(indexResumeTimer);indexResumeTimer=setTimeout(queue,1250);}
 ['wheel','touchstart','pointerdown'].forEach(type=>indexScroller.addEventListener(type,pauseIndexFollow,{passive:true}));
 indexScroller.addEventListener('keydown',e=>{if(['ArrowDown','ArrowUp','PageDown','PageUp','Home','End','Tab'].includes(e.key))pauseIndexFollow()});
 const arrow='<svg viewBox="0 0 16 16" width="16" height="16" aria-hidden="true"><path d="m6 3 5 5-5 5"/></svg>';
 function disclosure(owner,content,id,label){
  const box=document.createElement('div');box.className='index-collapse';box.id=id;
  const inner=document.createElement('div');inner.className='index-collapse-inner';content.before(box);box.append(inner);inner.append(content);
  const button=document.createElement('button');button.type='button';button.className='index-chevron';button.innerHTML=arrow;button.setAttribute('aria-controls',id);owner.insertBefore(button,box);
  const item={owner,box,inner,button,label,expanded:false};
  function set(value){item.expanded=value;owner.classList.toggle('is-expanded',value);box.classList.toggle('is-expanded',value);box.inert=!value;button.setAttribute('aria-expanded',String(value));button.title=value?'收起章节':'展开章节';button.setAttribute('aria-label',`${value?'收起':'展开'}${label}章节`);}
  item.set=set;set(false);return item;
 }
 const projectItems=projects.map((p,i)=>{const a=p.querySelector(':scope > a'),children=p.querySelector('.index-children');const letters={'people-daily':'A',mazoo:'B',gulangyu:'C','youth-media':'D',museum:'E','party-branch':'F','personal-explorations':'G'};p.dataset.projectLetter=letters[a.hash.slice(1)];a.dataset.projectLetter=p.dataset.projectLetter;const item=children?disclosure(p,children,'index-project-children-'+i,a.textContent.trim()):{owner:p,set(){},expanded:false};item.link=a;item.id=a.hash.slice(1);item.section=document.getElementById(item.id);return item});
 const workLink=panel.querySelector('.index-primary[href="#work"]'),workOwner=workLink.parentElement,projectList=document.createElement('div');projectList.className='index-project-list';projects[0].before(projectList);projects.forEach(p=>projectList.append(p));
 // The existing three levels are visible on entry; chapter lists remain collapsible.
 workOwner.classList.add('index-work-group');
 projectItems.forEach(item=>item.set(true));
 projectItems.filter(item=>item.button).forEach(item=>item.button.addEventListener('click',()=>{
  const expanded=!item.expanded;
  item.set(expanded);
 }));
 function render(focus=false){
  clearTimeout(closeTimer);body.classList.toggle('index-closed',!open);toggle.setAttribute('aria-expanded',String(open));toggle.setAttribute('aria-label',open?'收起目录':'展开目录');panel.inert=!open;
  if(compact.matches&&open){backdrop.hidden=false;requestAnimationFrame(()=>backdrop.classList.add('is-visible'))}else{backdrop.classList.remove('is-visible');closeTimer=setTimeout(()=>backdrop.hidden=true,reduced.matches?0:300)}
  main.inert=compact.matches&&open;document.querySelector('.rail-name').tabIndex=compact.matches&&open?-1:0;body.style.overflow=compact.matches&&open?'hidden':'';
  if(compact.matches&&open){panel.setAttribute('role','dialog');panel.setAttribute('aria-modal','true')}else{panel.removeAttribute('role');panel.removeAttribute('aria-modal')}
  if(focus&&open)panel.querySelector('a').focus();
  if(open)queue();
 }
 toggle.addEventListener('click',()=>{open=!open;render(open&&compact.matches)});backdrop.addEventListener('click',()=>{open=false;render();toggle.focus()});compact.addEventListener('change',()=>{open=!compact.matches;render()});
 document.addEventListener('keydown',e=>{if(e.key==='Escape'&&open){open=false;render();toggle.focus()}if(e.key==='Tab'&&open&&compact.matches){const items=[toggle,...[...panel.querySelectorAll('a[href],button')].filter(el=>!el.closest('[inert]')&&el.getClientRects().length)],first=items[0],last=items.at(-1);if(e.shiftKey&&document.activeElement===first){e.preventDefault();last.focus()}else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first.focus()}}});
 function projectFor(target){return projectItems.find(p=>p.section===target||p.section?.contains(target))}
 function mark(target){
  const id=target?.id||'home',project=projectFor(target),parent=project?'work':id;
  links.forEach(a=>{const active=a.hash==='#'+id||(a.classList.contains('index-primary')&&a.hash==='#'+parent);if(active)a.setAttribute('aria-current','location');else a.removeAttribute('aria-current')});
  projectItems.forEach(p=>p.owner.classList.toggle('is-current-project',p===project));

 }
 document.querySelectorAll('a[href^="#"]').forEach(a=>a.addEventListener('click',e=>{
  const target=document.getElementById(a.hash.slice(1));if(!target)return;e.preventDefault();
  if(panel.contains(a)){pending={target,until:Date.now()+1800,stable:0};mark(target)}
  if(compact.matches&&open){open=false;render()}
  window.portfolioMotion?.showTarget(target);history.pushState(null,'',a.getAttribute('href'));target.scrollIntoView({behavior:reduced.matches?'instant':'smooth',block:'start'});target.setAttribute('tabindex','-1');target.focus({preventScroll:true});
 }));
 const targets=[...new Set(links.map(a=>document.getElementById(a.hash.slice(1))).filter(Boolean))].sort((a,b)=>a===b?0:a.compareDocumentPosition(b)&Node.DOCUMENT_POSITION_FOLLOWING?-1:1);
 function followIndex(currentIndex,readingY){
  if(!open||performance.now()<manualIndexUntil)return;
  const rowFor=target=>{
   const row=links.find(a=>a.hash==='#'+target.id&&!a.classList.contains('index-primary'))||links.find(a=>a.hash==='#'+target.id);
   if(row&&!row.closest('[inert]'))return row;
   return projectFor(target)?.link||row;
  };
  const current=targets[currentIndex],next=targets[currentIndex+1],row=rowFor(current);
  if(!row)return;
  const frame=indexScroller.getBoundingClientRect();
  const center=el=>el.getBoundingClientRect().top-frame.top+indexScroller.scrollTop+el.getBoundingClientRect().height/2;
  let position=center(row);
  if(next){
   const nextRow=rowFor(next),start=current.getBoundingClientRect().top+scrollY,end=next.getBoundingClientRect().top+scrollY;
   if(nextRow&&end>start)position+=(center(nextRow)-position)*Math.min(1,Math.max(0,(readingY-start)/(end-start)));
  }
  const maximum=Math.max(0,indexScroller.scrollHeight-indexScroller.clientHeight);
  const top=Math.min(maximum,Math.max(0,position-indexScroller.clientHeight*.42));
  if(Math.abs(indexScroller.scrollTop-top)>.5)indexScroller.scrollTop=top;
 }
 function update(){
  scheduled=false;
  const height=document.documentElement.scrollHeight-innerHeight,p=height>0?Math.min(1,Math.max(0,scrollY/height)):0;
  const readingY=scrollY+innerHeight*.32;
  let currentIndex=0;targets.forEach((el,i)=>{if(el.getBoundingClientRect().top<=innerHeight*.32)currentIndex=i});
  if(p>=.999&&height>0)currentIndex=targets.length-1;
  const current=targets[currentIndex];
  if(pending){const y=pending.target.getBoundingClientRect().top;if(Math.abs(y-(pending.y??Infinity))<2&&y<innerHeight*.4)pending.stable++;else pending.stable=0;pending.y=y;if(pending.stable>=3||Date.now()>pending.until){pending=null;mark(current)}else{mark(pending.target);queue()}}else mark(current);
  followIndex(currentIndex,readingY);
  document.querySelector('.reading-track span').style.transform=`scaleY(${p})`;
  document.querySelector('.rail-progress').textContent=String(Math.round(p*100)).padStart(2,'0')+'%';
 }
 function queue(){if(!scheduled){scheduled=true;requestAnimationFrame(update)}}
 addEventListener('scroll',queue,{passive:true});
 ['wheel','touchstart'].forEach(type=>main.addEventListener(type,()=>{pending=null},{passive:true}));
 panel.addEventListener('transitionend',queue);indexScroller.addEventListener('transitionend',queue);addEventListener('resize',queue);addEventListener('load',queue);new ResizeObserver(queue).observe(main);render();update();
})();
