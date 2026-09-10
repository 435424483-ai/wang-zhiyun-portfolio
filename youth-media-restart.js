(() => {
 const section=document.querySelector('#youth-media');if(!section)return;
 const blocks=[...section.querySelectorAll('.youth-hand-drawn,.youth-feature,.youth-memoir,.youth-editorial-main,.youth-editorial-process,.youth-restart-heading,.youth-promotion-cover,.youth-comparison,.youth-gift-heading,.youth-gift-layout,.youth-delivery-heading,.youth-delivery-evidence,.youth-delivery-results,.youth-team-heading,.youth-team-department,.youth-team-teaching,.youth-teaching-chapter')];
 blocks.forEach(e=>e.classList.add('preview-reveal'));
 if(matchMedia('(prefers-reduced-motion:reduce)').matches||new URLSearchParams(location.search).has('export')){blocks.forEach(e=>e.classList.add('is-in-view'));return}
 const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('is-in-view');observer.unobserve(entry.target)}}),{threshold:.05});
 blocks.forEach(e=>observer.observe(e));
})();
