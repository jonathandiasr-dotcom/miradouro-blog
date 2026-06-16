/* ============================================================
   Internet.exe — Europe Edition · PART 2 · LOGIC (EN)
   Interactive map (centre of the page) + mobile selector
   ============================================================ */
(function(){
"use strict";

const $  = s => document.querySelector(s);
const $$ = s => Array.from(document.querySelectorAll(s));
function esc(s){return String(s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");}
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const panel      = $("#atlasPanel");
const tabs       = $("#atlasTabs");
const statusText = $("#mapStatusText");
let current = null;

/* ---------- logos ---------- */
function logoMarkup(c){
  if(c.img){
    return '<span class="logo-chip" data-logo="'+LOGO_PATH+c.img+'" data-name="'+esc(c.name)+'">'
      + '<span class="logo-word">'+esc(c.name)+'</span></span>';
  }
  const w = c.wm || {word:c.name};
  const style = 'color:'+(w.color||'#1a1a1a')+';'+(w.weight?('font-weight:'+w.weight+';'):'');
  return '<span class="logo-chip is-wordmark"><span class="logo-word" style="'+style+'">'
    + esc(w.word||c.name) + '</span></span>';
}
function hydrateLogos(){
  $$('.logo-chip[data-logo]').forEach(chip=>{
    const src = chip.getAttribute('data-logo');
    const file = src.split('/').pop();
    const resolved = (window.LOGO_DATA && window.LOGO_DATA[file]) ? window.LOGO_DATA[file] : src;
    const img = new Image();
    img.onload = function(){
      img.alt = chip.getAttribute('data-name')||'';
      img.setAttribute('data-logo-img','1');
      chip.innerHTML=''; chip.appendChild(img);
    };
    img.src = resolved;
  });
}

/* ---------- company card ---------- */
function companyCard(id){
  const c = COMPANIES[id];
  if(!c) return '';
  const note = c.note ? '<span class="badge note">'+esc(c.note)+'</span>' : '';
  return '<article class="co-card">'
    + '<div class="co-titlebar"><span>'+esc(c.name.toUpperCase().replace(/[^A-Z0-9]/g,'_'))+'.EXE</span><span class="tb-btns">_ &#9633; &times;</span></div>'
    + '<div class="co-head">'+logoMarkup(c)
    + '<div class="co-headtext"><div class="co-name">'+esc(c.name)+'</div>'
    + '<div class="co-period">'+esc(c.period||'')+'</div></div></div>'
    + '<div class="co-badges" style="padding:8px 16px 0;margin-top:0"><span class="badge cat">'+esc(c.cat)+'</span>'
    + '<span class="badge status '+c.sclass+'">'+esc(c.status)+'</span>'+note+'</div>'
    + '<p class="co-story co-story-solo">'+esc(c.story)+'</p>'
    + '</article>';
}

/* ---------- country panel ---------- */
function renderCountry(code){
  const co = COUNTRIES[code];
  if(!co) return;
  current = code;
  const n = co.companies.length;
  const countLabel = n + " " + (n>1?"companies":"company");
  panel.innerHTML =
    '<div class="country-head-card">'
    + '<div class="ch-titlebar"><span>'+code+'.EXE · '+esc(co.name.toUpperCase())+'</span><span class="tb-btns">_ &#9633; &times;</span></div>'
    + '<div class="ch-body"><span class="ch-flag '+co.flag+'"></span>'
    + '<div><div class="ch-name">'+esc(co.name)+'</div><div class="ch-meta">'+countLabel+' &middot; '+esc(co.meta)+'</div></div></div>'
    + '<p class="ch-note">'+esc(co.note)+'</p></div>'
    + '<div class="company-list">'+co.companies.map(companyCard).join("")+'</div>';
  hydrateLogos();
  statusText.textContent = "EUROPE.MAP · "+co.name+" · "+countLabel+" selected";
  tabs.querySelectorAll(".ctab").forEach(b=>b.classList.toggle("active", b.dataset.country===code));
  $$(".euro-svg path").forEach(p=>p.classList.toggle("is-active", p.id===code));
  $$(".euro-svg .pin").forEach(p=>p.classList.toggle("is-active", p.dataset.country===code));
  $$(".euro-svg .pin-ring").forEach(p=>p.classList.toggle("is-active", p.dataset.country===code));
}

/* ---------- country selector (= mobile list) ---------- */
ORDER.forEach(code=>{
  const co = COUNTRIES[code]; if(!co) return;
  const n = co.companies.length;
  const b = document.createElement("button");
  b.className="ctab"; b.dataset.country=code; b.type="button"; b.setAttribute("role","tab");
  b.innerHTML='<span class="ctab-flag '+co.flag+'"></span>'
    + '<span class="ctab-text"><span class="ctab-name">'+esc(co.name)+'</span>'
    + '<span class="ctab-count">'+n+' '+(n>1?'companies':'company')+'</span></span>';
  b.addEventListener("click",()=>{
    renderCountry(code);
    if(window.matchMedia("(max-width:768px)").matches){
      const y = panel.getBoundingClientRect().top + window.scrollY - 62;
      window.scrollTo({top:y, behavior: reduceMotion ? "auto" : "smooth"});
    }
  });
  tabs.appendChild(b);
});

/* ---------- SVG map: highlight + pins ---------- */
function initMap(){
  const svg = $(".euro-svg");
  if(!svg) return;
  const ns = "http://www.w3.org/2000/svg";
  ORDER.forEach(code=>{
    const path = svg.querySelector('path[id="'+code+'"]');
    if(!path) return;
    path.classList.add("selectable");
    path.style.cursor="pointer";
    path.addEventListener("click",()=>renderCountry(code));
    let bb; try{ bb = path.getBBox(); }catch(e){ return; }
    const cx = bb.x + bb.width/2, cy = bb.y + bb.height/2;
    const ring = document.createElementNS(ns,"circle");
    ring.setAttribute("cx",cx); ring.setAttribute("cy",cy); ring.setAttribute("r",6);
    ring.setAttribute("class","pin-ring"); ring.dataset.country=code;
    svg.appendChild(ring);
    const pin = document.createElementNS(ns,"circle");
    pin.setAttribute("cx",cx); pin.setAttribute("cy",cy); pin.setAttribute("r",5.5);
    pin.setAttribute("class","pin"); pin.dataset.country=code;
    pin.addEventListener("click",()=>renderCountry(code));
    svg.appendChild(pin);
  });
}
initMap();
renderCountry("FI");

/* ============================================================
   CURSOR STAR TRAIL — on [data-startrail] zones
   ============================================================ */
if(!reduceMotion){
  let last=0;
  document.addEventListener("pointermove",e=>{
    const inZone = e.target.closest && e.target.closest("[data-startrail]");
    if(!inZone) return;
    const now=performance.now();
    if(now-last<55) return; last=now;
    const s=document.createElement("div");
    s.className="trail-star"; s.textContent="✦";
    s.style.left=e.clientX+"px"; s.style.top=e.clientY+"px";
    s.style.opacity="0.9"; s.style.fontSize=(9+Math.random()*7)+"px";
    document.body.appendChild(s);
    requestAnimationFrame(()=>{ s.style.opacity="0"; s.style.transform="translate(-50%,-50%) translateY(-14px) scale(.6)"; });
    setTimeout(()=>s.remove(),820);
  },{passive:true});
}

/* ============================================================
   MARQUEE + COUNTER + SOURCES (continuity with Part 1)
   ============================================================ */
(function(){
  const items=["PART 2 · The atlas of vanished European giants","Nokia: nearly 50% of the mobile market in 2007","ARM powers almost every smartphone on Earth","Skype switched off in 2025","SAPO born at the University of Aveiro","Alcatel absorbed by Nokia in 2016","Opera bought by a Chinese consortium in 2016","iBazar bought by eBay in 2001"];
  const seg = items.map(t=>"◆ "+t+" ").join("");
  const track=$("#marqueeTrack");
  if(track) track.textContent = seg + seg;
})();

(function(){
  const el=$("#odometer"); if(!el) return;
  let base=1206;
  try{
    const k="miradouro_ix_p2_visits_en";
    base = parseInt(localStorage.getItem(k)||"1206",10)+1;
    localStorage.setItem(k,String(base));
  }catch(e){}
  const digits = String(base).padStart(6,"0").split("");
  let html="";
  digits.forEach((d,i)=>{ if(i===3) html+='<span class="odo-comma">,</span>'; html+='<span class="odo-cell">'+d+'</span>'; });
  el.innerHTML=html;
})();

(function(){
  const t=$("#sourcesToggle"), b=$("#sourcesBody");
  if(!t||!b) return;
  t.addEventListener("click",()=>{
    const open=t.getAttribute("aria-expanded")==="true";
    t.setAttribute("aria-expanded",String(!open));
    b.hidden=open;
  });
})();

/* SKIP / jump to the map */
const skip=$("#skipIntro");
if(skip) skip.addEventListener("click",e=>{
  e.preventDefault();
  const atlas=$("#atlas");
  if(atlas) window.scrollTo({top:atlas.offsetTop-54,behavior: reduceMotion?"auto":"smooth"});
});

/* right-click on image logos */
document.addEventListener("contextmenu",e=>{
  if(e.target && e.target.matches && e.target.matches('img[data-logo-img]')){
    e.preventDefault();
    alert("© Miradouro 2026 · All rights reserved.\nPlease do not copy this content without permission.");
  }
});

/* ============================================================
   CHARTS (Chart.js): Nokia's fall (the consolidation chart was
   replaced by the HTML "Where the capital went" flow module)
   ============================================================ */
function whenChart(cb){
  if(window.Chart){ cb(); return; }
  let n=0; const t=setInterval(()=>{ if(window.Chart||n++>60){ clearInterval(t); if(window.Chart) cb(); } },100);
}
whenChart(function(){
  Chart.defaults.font.family = "'Space Mono', monospace";
  Chart.defaults.font.size = 12;
  Chart.defaults.color = "#5b5043";
  const POM="#C97A5E", OURO="#C4973A", FERRO="#18140E";

  /* --- Nokia's fall --- */
  const nk = document.getElementById("nokiaChart");
  if(nk && typeof NOKIA_SHARE!=="undefined"){
    const markYears = NOKIA_SHARE.marks.reduce((o,m)=>{o[m.year]=m.label;return o;},{});
    new Chart(nk,{
      type:"line",
      data:{ labels:NOKIA_SHARE.years,
        datasets:[{ data:NOKIA_SHARE.share, borderColor:POM, borderWidth:3,
          fill:true, backgroundColor:"rgba(201,122,94,0.13)", tension:0.3,
          pointBackgroundColor:NOKIA_SHARE.years.map(y=>markYears[y]?OURO:POM),
          pointBorderColor:"#FBF8F2", pointBorderWidth:2,
          pointRadius:NOKIA_SHARE.years.map(y=>markYears[y]?7:3.5),
          pointHoverRadius:9 }] },
      options:{ responsive:true, maintainAspectRatio:false,
        layout:{padding:{top:26}},
        plugins:{ legend:{display:false},
          tooltip:{ callbacks:{ label:c=>c.parsed.y+"% market share"+(markYears[c.label]?"  ·  "+markYears[c.label]:"") } } },
        scales:{ y:{ min:0, max:55, ticks:{callback:v=>v+" %"}, grid:{color:"rgba(24,20,14,0.07)"} },
          x:{ grid:{display:false} } } },
      plugins:[{ id:"nkmarks", afterDatasetsDraw(chart){
        const {ctx,scales:{x,y}}=chart;
        NOKIA_SHARE.marks.forEach(m=>{
          const i=NOKIA_SHARE.years.indexOf(m.year); if(i<0) return;
          const px=x.getPixelForValue(m.year), py=y.getPixelForValue(NOKIA_SHARE.share[i]);
          ctx.save();
          ctx.strokeStyle="rgba(24,20,14,0.16)"; ctx.setLineDash([3,3]);
          ctx.beginPath(); ctx.moveTo(px,py-9); ctx.lineTo(px,y.getPixelForValue(0)); ctx.stroke();
          ctx.setLineDash([]);
          ctx.font="700 10.5px 'Space Mono', monospace"; ctx.fillStyle=FERRO;
          ctx.textAlign = i===0?"left":(i>=NOKIA_SHARE.years.length-2?"right":"center");
          ctx.fillText(m.label, px, py-15);
          ctx.restore();
        });
      }}]
    });
  }
});

})();
