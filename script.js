const button=document.querySelector('.menu-toggle');
const nav=document.querySelector('.navigation');
button.addEventListener('click',()=>{
  const open=nav.classList.toggle('open');
  button.setAttribute('aria-expanded',String(open));
});
nav.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>{
  nav.classList.remove('open');
  button.setAttribute('aria-expanded','false');
}));
const toTop=document.querySelector('.to-top');
const toggleTop=()=>toTop.classList.toggle('show',window.scrollY>500);
window.addEventListener('scroll',toggleTop,{passive:true});
toggleTop();

/* Vista previa: las 8 cartas pequeñas y las 8 láminas, navegables entre sí. */
const cards=[...document.querySelectorAll('.small-card-grid img, .large-card-grid img')];
const lb=document.querySelector('.lightbox');
const lbImg=lb.querySelector('.lb-img');
let current=0;
const show=i=>{
  current=(i+cards.length)%cards.length;
  lbImg.src=cards[current].currentSrc||cards[current].src;
  lbImg.alt=cards[current].alt;
};
cards.forEach((img,i)=>{
  img.tabIndex=0;
  img.setAttribute('role','button');
  const open=()=>{show(i);lb.showModal();};
  img.addEventListener('click',open);
  img.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();open();}});
});
lb.querySelector('.lb-close').addEventListener('click',()=>lb.close());
lb.querySelector('.lb-prev').addEventListener('click',()=>show(current-1));
lb.querySelector('.lb-next').addEventListener('click',()=>show(current+1));
lb.addEventListener('click',e=>{if(e.target===lb)lb.close();});
lb.addEventListener('keydown',e=>{
  if(e.key==='ArrowLeft')show(current-1);
  if(e.key==='ArrowRight')show(current+1);
});
