(() => {
 const overlay=document.querySelector('.intro-runway'),curtain=overlay.querySelector('.intro-curtain'),type=overlay.querySelector('.intro-composition');
 const main=document.querySelector('main'),shell=document.querySelector('.portfolio-shell'),reduced=matchMedia('(prefers-reduced-motion:reduce)');
 const params=new URLSearchParams(location.search),replay=params.get('intro')==='1';
 const orientation=matchMedia('(orientation:portrait)');
 // A rotation changes the camera's travel distance; land cleanly on the homepage.
 orientation.addEventListener('change',finish,{once:true});
 if(replay)overlay.style.display='block';
 const previousOverflow=document.body.style.overflow;let done=false,deadline;const animations=[];
 const svg=type.querySelector('.intro-connections'),threads=[...svg.querySelectorAll('.intro-thread')],nodes=[...svg.querySelectorAll('.intro-node')];
 function layoutConnections(){
  const boxes=[...type.querySelectorAll('.intro-fragment')].map(e=>({x:e.offsetLeft,y:e.offsetTop,w:e.offsetWidth,h:e.offsetHeight}));
  const [a,b,c,d]=boxes;
  const pairs=[[[a.x+a.w+12,a.y+a.h*.45],[b.x-12,b.y+b.h*.55]],[[b.x+b.w+12,b.y+b.h*.45],[c.x-12,c.y+c.h*.38]],[[c.x+c.w*.82,c.y+c.h+12],[d.x+d.w*.5,d.y-8]]];
  svg.setAttribute('viewBox',`0 0 ${type.clientWidth} ${type.clientHeight}`);
  pairs.forEach(([start,end],i)=>{const [x,y]=start,[ex,ey]=end;const bend=i===2?Math.min(type.clientWidth-8,Math.max(x,ex)+30):(x+ex)/2;
   threads[i].setAttribute('d',`M ${x} ${y} C ${bend} ${y+8}, ${bend} ${ey-8}, ${ex} ${ey}`);
   nodes[i*2].setAttribute('transform',`translate(${x} ${y})`);nodes[i*2+1].setAttribute('transform',`translate(${ex} ${ey})`);
  });
 }
 const observer=new ResizeObserver(layoutConnections);observer.observe(type);layoutConnections();
 function finish(){if(done)return;done=true;clearTimeout(deadline);observer.disconnect();orientation.removeEventListener('change',finish);animations.forEach(a=>a.cancel());const focusWasInside=overlay.contains(document.activeElement);overlay.remove();document.body.style.overflow=previousOverflow;shell.inert=false;main.inert=!document.querySelector('.index-backdrop').hidden;if(focusWasInside){const home=document.querySelector('#home');home.tabIndex=-1;home.focus({preventScroll:true})}reduced.removeEventListener('change',finish);removeEventListener('keydown',escape);removeEventListener('pagehide',finish)}
 function escape(e){if(e.key==='Escape')finish()}
 if(params.has('export')||(!replay&&(reduced.matches||(location.hash&&location.hash!=='#home')))){finish();return}
 window.scrollTo({top:0,left:0,behavior:'instant'});
 document.body.style.overflow='hidden';main.inert=true;shell.inert=true;
 overlay.querySelector('button').addEventListener('click',finish);addEventListener('keydown',escape);addEventListener('pagehide',finish);reduced.addEventListener('change',finish);
 deadline=setTimeout(finish,7200);
 (async()=>{
 const loading=overlay.querySelector('.intro-loading');
 const images=[...overlay.querySelectorAll('img')];let loaded=0;
 const advance=()=>{loaded++;loading?.style.setProperty('--load-progress',`${Math.round(loaded/(images.length+1)*100)}%`)};
 const fontReady=Promise.race([document.fonts.ready,new Promise(r=>setTimeout(r,1000))]).then(advance);
 const imagesReady=Promise.race([Promise.all(images.map(img=>img.decode().catch(()=>{}).then(advance))),new Promise(r=>setTimeout(r,1500))]);
 await Promise.all([fontReady,imagesReady]);if(done)return;
 clearTimeout(deadline);deadline=setTimeout(finish,5500);layoutConnections();
 type.querySelectorAll('.intro-type>span').forEach((line,i)=>animations.push(line.animate([{opacity:0,transform:'translateY(7px)'},{opacity:1,transform:'translateY(0)'}],{duration:1250,delay:i*140,easing:'cubic-bezier(.22,1,.36,1)',fill:'both'})));
 overlay.querySelectorAll('.intro-topline,.intro-baseline').forEach(el=>animations.push(el.animate([{opacity:0},{opacity:1}],{duration:900,easing:'ease-out',fill:'both'})));
 type.querySelectorAll('.intro-fragment').forEach((image,i)=>animations.push(image.animate([{opacity:0,transform:'translateY(7px)'},{opacity:1,transform:'translateY(0)'}],{duration:1300,delay:100+i*90,easing:'cubic-bezier(.22,1,.36,1)',fill:'both'})));
 type.querySelectorAll('.intro-editor-note,.intro-detail,.intro-signature,.intro-seal,.intro-side-note').forEach((el,i)=>animations.push(el.animate([{opacity:0,transform:'translateY(6px)'},{opacity:1,transform:'translateY(0)'}],{duration:1100,delay:380+i*80,easing:'ease-out',fill:'both'})));
 threads.forEach((path,i)=>animations.push(path.animate([{strokeDasharray:'1',strokeDashoffset:'1'},{strokeDasharray:'1',strokeDashoffset:'0'}],{duration:1050,delay:300+i*180,easing:'ease-in-out',fill:'both'})));
 nodes.forEach((node,i)=>animations.push(node.animate([{opacity:0},{opacity:1}],{duration:400,delay:300+i*120,fill:'both'})));
 svg.querySelectorAll('.node-dot').forEach((dot,i)=>animations.push(dot.animate([{r:'2.5px'},{r:'4px'},{r:'2.5px'}],{duration:700,delay:900+i*180,fill:'both'})));
 animations.push(type.animate([{transform:'scale(1.018)'},{transform:'scale(1)'}],{duration:2600,easing:'cubic-bezier(.22,1,.36,1)',fill:'forwards'}));
 // The opening, a short paper corridor, and the homepage share one vertical scene.
 overlay.classList.add('intro-ready');
 const exitAt=2200,duration=1100,easing='cubic-bezier(.6,0,.2,1)';
 const timing={delay:exitAt,duration,easing,fill:'both'};
 const gap=Math.min(280,innerHeight*.28),travel=innerHeight+gap;
 const camera=[{transform:'translateY(0)'},{transform:'translateY(-'+travel+'px)'}];
 const rect=type.getBoundingClientRect(),point=nodes.at(-1).transform.baseVal.consolidate().matrix;
 const sx=rect.left+(rect.width-type.offsetWidth)*.5+point.e;
 const sy=rect.top+(rect.height-type.offsetHeight)*.6+point.f;
 const landing=main.querySelector('.hero-top').getBoundingClientRect().bottom;
 const endY=travel+landing;
 const ns='http://www.w3.org/2000/svg',handoff=document.createElementNS(ns,'svg');
 handoff.classList.add('intro-handoff');handoff.setAttribute('aria-hidden','true');handoff.setAttribute('viewBox','0 0 '+innerWidth+' '+(travel+innerHeight));
 Object.assign(handoff.style,{position:'absolute',top:'0',left:'0',width:'100%',height:(travel+innerHeight)+'px',pointerEvents:'none',overflow:'visible'});
 const trail=document.createElementNS(ns,'path'),tip=document.createElementNS(ns,'circle');
 trail.setAttribute('d','M '+sx+' '+sy+' V '+endY);trail.setAttribute('fill','none');trail.setAttribute('stroke','#987950');trail.setAttribute('stroke-width','1.25');trail.setAttribute('stroke-linecap','round');trail.setAttribute('pathLength','1');
 tip.setAttribute('cx',sx);tip.setAttribute('cy',sy);tip.setAttribute('r','2.5');tip.setAttribute('fill','#987950');handoff.append(trail,tip);overlay.append(handoff);
 animations.push(trail.animate([{strokeDasharray:'1',strokeDashoffset:'1'},{strokeDasharray:'1',strokeDashoffset:'0'}],timing));
 animations.push(tip.animate([{transform:'translateY(0)'},{transform:'translateY('+(endY-sy)+'px)'}],timing));
 animations.push(handoff.animate(camera,timing));
 animations.push(handoff.animate([{opacity:0},{opacity:1}],{delay:exitAt,duration:70,fill:'both'}));
 const paper=getComputedStyle(main.querySelector('#home')).backgroundColor;
 const white=paper==='rgba(0, 0, 0, 0)'?'#faf9f6':paper;
 const corridor=document.createElement('div');corridor.className='intro-corridor';
 Object.assign(corridor.style,{position:'absolute',top:'0',left:'0',width:'100%',height:travel+'px',pointerEvents:'none',background:'linear-gradient(to bottom,#eae6dc '+(innerHeight-100)+'px,'+white+' '+travel+'px)'});overlay.prepend(corridor);
 animations.push(corridor.animate(camera,timing));
 const departure=curtain.animate(camera,timing);animations.push(departure);
 // Blur peaks briefly during travel, while the separate guide always stays sharp.
 animations.push(curtain.animate([{filter:'blur(0px)'},{filter:'blur(2.5px)',offset:.42},{filter:'blur(0px)'}],timing));
 animations.push(main.animate([{transform:'translateY('+travel+'px)'},{transform:'translateY(0)'}],timing));
 animations.push(shell.animate([{transform:'translateY('+travel+'px)'},{transform:'translateY(0)'}],timing));
 animations.push(main.querySelector('#home').animate([{filter:'blur(0px)'},{filter:'blur(1.5px)',offset:.42},{filter:'blur(0px)'}],timing));
 const handoffEnd=handoff.animate([{opacity:1},{opacity:0}],{delay:exitAt+duration,duration:180,easing:'ease-out',fill:'forwards'});animations.push(handoffEnd);
 try{await Promise.all([departure.finished,handoffEnd.finished]);finish()}catch{/* Skip has already cleaned up. */}
 })();
})();

