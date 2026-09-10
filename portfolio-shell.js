(() => {
 const body=document.body,panel=document.querySelector('.index-panel'),toggle=document.querySelector('.index-toggle'),backdrop=document.querySelector('.index-backdrop'),main=document.querySelector('main');
 if(!panel||!toggle)return;
 const compact=matchMedia('(max-width:1100px)'),reduced=matchMedia('(prefers-reduced-motion:reduce)');
 const links=[...panel.querySelectorAll('a[href^="#"]')],projects=[...panel.querySelectorAll('.index-project')];
 let open=!compact.matches,manualUntil=0,pending=null,lastProject=null,lastCurrent=null,scheduled=false,closeTimer;let manualChoice=false;
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
 const work=disclosure(workOwner,projectList,'index-work-projects','项目与实践');workOwner.classList.add('index-work-group');work.set(true);
 function showProject(item){projectItems.forEach(p=>p.set(p===item));if(item)work.set(true)}
 projectItems.filter(item=>item.button).forEach(item=>item.button.addEventListener('click',()=>{manualChoice=true;manualUntil=Date.now()+2400;item.set(!item.expanded);}));
 work.button.addEventListener('click',()=>{manualChoice=true;manualUntil=Date.now()+2400;work.set(!work.expanded)});
 function render(focus=false){
  clearTimeout(closeTimer);body.classList.toggle('index-closed',!open);toggle.setAttribute('aria-expanded',String(open));toggle.setAttribute('aria-label',open?'收起目录':'展开目录');panel.inert=!open;
  if(compact.matches&&open){backdrop.hidden=false;requestAnimationFrame(()=>backdrop.classList.add('is-visible'))}else{backdrop.classList.remove('is-visible');closeTimer=setTimeout(()=>backdrop.hidden=true,reduced.matches?0:300)}
  main.inert=compact.matches&&open;document.querySelector('.rail-name').tabIndex=compact.matches&&open?-1:0;body.style.overflow=compact.matches&&open?'hidden':'';
  if(compact.matches&&open){panel.setAttribute('role','dialog');panel.setAttribute('aria-modal','true')}else{panel.removeAttribute('role');panel.removeAttribute('aria-modal')}
  if(focus&&open)panel.querySelector('a').focus();
 }
 toggle.addEventListener('click',()=>{open=!open;render(open&&compact.matches)});backdrop.addEventListener('click',()=>{open=false;render();toggle.focus()});compact.addEventListener('change',()=>{open=!compact.matches;render()});
 document.addEventListener('keydown',e=>{if(e.key==='Escape'&&open){open=false;render();toggle.focus()}if(e.key==='Tab'&&open&&compact.matches){const items=[toggle,...[...panel.querySelectorAll('a[href],button')].filter(el=>!el.closest('[inert]')&&el.getClientRects().length)],first=items[0],last=items.at(-1);if(e.shiftKey&&document.activeElement===first){e.preventDefault();last.focus()}else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first.focus()}}});
 function projectFor(target){return projectItems.find(p=>p.section===target||p.section?.contains(target))}
 function mark(target){
  const id=target?.id||'home',project=projectFor(target),parent=project?'work':id;
  links.forEach(a=>{const active=a.hash==='#'+id||(a.classList.contains('index-primary')&&a.hash==='#'+parent);if(active)a.setAttribute('aria-current','location');else a.removeAttribute('aria-current')});
  projectItems.forEach(p=>p.owner.classList.toggle('is-current-project',p===project));
  if(!manualChoice&&Date.now()>manualUntil&&(project!==lastProject||id!==lastCurrent)){showProject(project);lastProject=project;lastCurrent=id;if(open&&!panel.matches(':hover'))setTimeout(()=>{const active=panel.querySelector('.index-children [aria-current]'),scroller=panel.querySelector('.chapter-index');if(!active||active.closest('[inert]'))return;const r=active.getBoundingClientRect(),v=scroller.getBoundingClientRect();if(r.bottom>v.bottom)scroller.scrollTop+=r.bottom-v.bottom+12;else if(r.top<v.top)scroller.scrollTop-=v.top-r.top+12},reduced.matches?0:280)}
 }
 document.querySelectorAll('a[href^="#"]').forEach(a=>a.addEventListener('click',e=>{
  const target=document.getElementById(a.hash.slice(1));if(!target)return;e.preventDefault();
  if(panel.contains(a)){pending={target,until:Date.now()+1800,stable:0};manualChoice=false;manualUntil=0;showProject(projectFor(target));lastProject=projectFor(target);mark(target)}
  if(compact.matches&&open){open=false;render()}
  window.portfolioMotion?.showTarget(target);history.pushState(null,'',a.getAttribute('href'));target.scrollIntoView({behavior:reduced.matches?'instant':'smooth',block:'start'});target.setAttribute('tabindex','-1');target.focus({preventScroll:true});
 }));
 const targets=[...new Set(links.map(a=>document.getElementById(a.hash.slice(1))).filter(Boolean))].sort((a,b)=>a===b?0:a.compareDocumentPosition(b)&Node.DOCUMENT_POSITION_FOLLOWING?-1:1);
 function update(){scheduled=false;let current=targets[0];for(const el of targets)if(el.getBoundingClientRect().top<=innerHeight*.32)current=el;
  if(pending){const y=pending.target.getBoundingClientRect().top;if(Math.abs(y-(pending.y??Infinity))<2&&y<innerHeight*.4)pending.stable++;else pending.stable=0;pending.y=y;if(pending.stable>=3||Date.now()>pending.until){pending=null;mark(current)}else{mark(pending.target);queue()}}else mark(current);
  const height=document.documentElement.scrollHeight-innerHeight,p=height>0?Math.min(1,Math.max(0,scrollY/height)):0;document.querySelector('.reading-track span').style.transform=`scaleY(${p})`;document.querySelector('.rail-progress').textContent=String(Math.round(p*100)).padStart(2,'0')+'%';
 }
 function queue(){if(!scheduled){scheduled=true;requestAnimationFrame(update)}}
 addEventListener('scroll',queue,{passive:true});addEventListener('resize',queue);addEventListener('load',queue);new ResizeObserver(queue).observe(main);render();update();
})();
