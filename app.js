/* ---------- Line-icon set (stroke, currentColor) ---------- */
const I = (p) => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round">${p}</svg>`;
const ICONS = {
  tv:I('<rect x="2.5" y="4.5" width="19" height="12" rx="1"/><path d="M8 20h8M12 16.5V20"/>'),
  ac:I('<rect x="2.5" y="5.5" width="19" height="7" rx="1.5"/><path d="M6 9h9M6 15.5c0 1.5 1 2 1 3M11 15.5c0 1.5 1 2 1 3M16 15.5c0 1.5 1 2 1 3"/>'),
  fridge:I('<rect x="6" y="2.5" width="12" height="19" rx="1.5"/><path d="M6 9h12M9 5.5v1.5M9 11.5v3"/>'),
  microwave:I('<rect x="2.5" y="5.5" width="19" height="12" rx="1"/><rect x="5" y="8" width="9" height="7"/><path d="M17 8.5v.01M17 11v.01"/>'),
  oven:I('<rect x="4" y="3" width="16" height="18" rx="1.5"/><path d="M4 8h16M7 5.5h4"/><rect x="7" y="11" width="10" height="7"/>'),
  stove:I('<rect x="3" y="4" width="18" height="16" rx="1.5"/><circle cx="8" cy="9" r="2"/><circle cx="16" cy="9" r="2"/><path d="M6 15h12"/>'),
  coffee:I('<path d="M5 8h11v4a4 4 0 0 1-4 4H9a4 4 0 0 1-4-4V8Z"/><path d="M16 9h2.5a2 2 0 0 1 0 4H16M8 3v2M11 3v2"/>'),
  water:I('<path d="M12 3s5 5.5 5 9a5 5 0 0 1-10 0c0-3.5 5-9 5-9Z"/>'),
  wifi:I('<path d="M4.5 9a11 11 0 0 1 15 0M7.5 12a7 7 0 0 1 9 0M10.5 15a3 3 0 0 1 3 0"/><circle cx="12" cy="18" r=".6" fill="currentColor"/>'),
  router:I('<rect x="3" y="12" width="18" height="6" rx="1.5"/><path d="M7 15h.01M12 15h4M12 9.5a3.5 3.5 0 0 1 3.5-3.5M12 6.5A6.5 6.5 0 0 1 18.5 13" transform="translate(-1 -1)"/>'),
  fan:I('<circle cx="12" cy="12" r="1.6"/><path d="M12 10.4C12 7 13 4 15 4s2.5 3 .8 5.6M13.4 12.7c2.9 1.6 5.9 1.4 6.4-.5s-2.3-3.5-5.3-2.9M10.8 13c-1.6 2.9-4.3 4.3-5.8 3s.3-4 3.4-4.4"/>'),
  speaker:I('<rect x="6" y="2.5" width="12" height="19" rx="2"/><circle cx="12" cy="15" r="3.2"/><circle cx="12" cy="6.5" r="1.2"/>'),
  hairdryer:I('<path d="M3 6.5h9a4 4 0 0 1 0 8H8l-1 6M3 6.5v8h5M12 10.5l6-3M12 12l6 1"/>'),
  cctv:I('<path d="M3 8.5l13-3 1.2 4-13 3Z"/><path d="M5 12.5V16a2 2 0 0 0 2 2h3M17 7.5l3-1M14 13l2.5 3"/>'),
  blender:I('<path d="M8 3h8l-1 8H9L8 3Z"/><path d="M10 11v4a2 2 0 0 0 2 2 2 2 0 0 0 2-2v-4M9 21h6"/>'),
  kettle:I('<path d="M6 9h10l-1 9a2 2 0 0 1-2 1.8H9A2 2 0 0 1 7 18L6 9Z"/><path d="M16 11l3-1.5M6 9c0-2 1.5-3 3-3M9 6h3"/>'),
  iron:I('<path d="M3 15c0-3 3-5 7-5h9a2 2 0 0 1 0 4l-1 1H3Z"/><path d="M6 10V8a2 2 0 0 1 2-2h6"/>'),
  washer:I('<rect x="4.5" y="2.5" width="15" height="19" rx="1.5"/><circle cx="12" cy="13" r="4.5"/><path d="M8 6h.01M11 6h.01"/>'),
  shelf:I('<rect x="4" y="3" width="16" height="18" rx="1"/><path d="M4 9h16M4 15h16M9 3v18"/>'),
  cabinet:I('<rect x="4" y="3" width="16" height="18" rx="1"/><path d="M12 3v18M9 8h.01M15 8h.01"/>'),
  island:I('<rect x="3" y="8" width="18" height="10" rx="1"/><path d="M3 12h18M8 12v6M13 12v6M18 12v6"/>'),
  vanity:I('<rect x="5" y="3" width="14" height="7" rx="1"/><circle cx="12" cy="6.5" r="2"/><path d="M5 13h14v8H5zM9 13v8M15 13v8"/>'),
  bed:I('<path d="M3 17v-5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v5M3 14h18M7 10V8a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v2M3 17v2M21 17v2"/>'),
  wardrobe:I('<rect x="5" y="2.5" width="14" height="19" rx="1"/><path d="M12 2.5v19M9.5 10v3M14.5 10v3"/>'),
  sofa:I('<path d="M4 11V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v3M3 12a2 2 0 0 1 2 2v3h14v-3a2 2 0 0 1 2-2M6 17v2M18 17v2M7 11h10"/>'),
  bathtub:I('<path d="M3 12h18v3a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3v-3Z"/><path d="M5 12V6.5A2 2 0 0 1 7 4.5c1.2 0 1.6.8 1.6.8M6 18l-1 2M18 18l1 2"/>'),
  mirror:I('<rect x="6" y="2.5" width="12" height="15" rx="6"/><path d="M9 20h6M12 17.5V20"/>'),
  chair:I('<path d="M7 4v8M17 4v16M7 12h10M7 12v8M5 12h2"/><path d="M17 4a3 3 0 0 0-3-3h-3a3 3 0 0 0-3 3"/>'),
  table:I('<path d="M3 8h18M5 8v11M19 8v11M8 8V6h8v2"/>'),
  lamp:I('<path d="M9 3h6l2 6H7l2-6ZM12 9v9M8 21h8"/>'),
  painting:I('<rect x="4" y="3" width="16" height="18" rx="1"/><path d="M4 15l4-4 3 3 4-5 5 6"/><circle cx="9" cy="8" r="1.3"/>'),
  vase:I('<path d="M8 3h8c-1 2-1 3 0 5 1.5 2 1 6-.5 8s-5 2-6.5 0S8 10 9.5 8c1-2 1-3-.5-5Z" transform="translate(-.5 3)"/><path d="M8.5 6h7"/>'),
  carpet:I('<rect x="3" y="6" width="18" height="12" rx="1"/><path d="M6 6v12M18 6v12M3 9h3M18 9h3M3 15h3M18 15h3"/>'),
  surf:I('<path d="M12 2c3 3 5 8 5 12s-2 7-5 8c-3-1-5-4-5-8s2-9 5-12ZM12 6v13"/>'),
  curtain:I('<path d="M3 3h18M4 3c0 8-.5 12 2 18M9 3c0 6 0 10-1 14M15 3c0 4 0 8 1 14M20 3c0 6 .5 10-2 18"/>'),
  glass:I('<path d="M8 3h8l-1 8a3 3 0 0 1-6 0L8 3ZM12 14v5M9 21h6"/>'),
  cutlery:I('<path d="M7 3v7a1.5 1.5 0 0 0 3 0V3M8.5 10v11M16 3c-1.5 0-2.5 2-2.5 4.5S15 12 16 12v9"/>'),
  pan:I('<circle cx="10" cy="13" r="6"/><path d="M15.5 11l6-2"/>'),
  plate:I('<circle cx="12" cy="12" r="8.5"/><circle cx="12" cy="12" r="4.5"/>'),
  bowl:I('<path d="M3 11h18a9 9 0 0 1-18 0ZM8 7.5c0-1 .8-1.5 1.5-2M12 6.5c0-1 .8-1.8 1.5-2.3"/>'),
  mug:I('<path d="M5 6h11v8a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3V6Z"/><path d="M16 8h2.5a2 2 0 0 1 0 4H16"/>'),
  wine:I('<path d="M8 3h8l-.5 5a3.5 3.5 0 0 1-7 0L8 3ZM12 12v6M9 21h6"/>'),
  knife:I('<path d="M4 15c8-1 14-6 16-12-1 6-3 11-8 13M4 15l3 3M6.5 16.5L9 19"/>'),
  pillow:I('<rect x="3" y="6" width="18" height="12" rx="4"/><path d="M7 9c1.5 1 1.5 5 0 6M17 9c-1.5 1-1.5 5 0 6"/>'),
  towel:I('<rect x="6" y="3" width="12" height="18" rx="1.5"/><path d="M6 7h12M9 3v18"/>'),
  robe:I('<path d="M8 3l4 3 4-3 2 4-2 2v9H6v-9L4 7l2-4ZM12 6v15"/>'),
  soap:I('<rect x="6" y="10" width="12" height="11" rx="1.5"/><path d="M11 10V7a2 2 0 0 1 4 0M15 4h2v3"/>'),
  diffuser:I('<path d="M9 21h6a2 2 0 0 0 2-2v-4H7v4a2 2 0 0 0 2 2ZM10 15l1-4M13 15l1-6M12 15l0-8"/>'),
  slippers:I('<path d="M4 13a3 3 0 0 1 6 0v3a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-3ZM10 13c1-3 4-4 6.5-4S21 11 21 13s-2 3-4 3"/>'),
  trash:I('<path d="M5 7h14M9 7V5h6v2M6 7l1 13a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2l1-13M10 11v7M14 11v7"/>'),
  card:I('<rect x="3" y="6" width="18" height="12" rx="1.5"/><path d="M3 10h18M6 14h4"/>'),
  qr:I('<rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><path d="M14 14h3v3M20 14v7M14 20h3"/>'),
  pen:I('<path d="M15 4l5 5M5 19l1.5-5L17 3.5a2 2 0 0 1 3 3L9.5 17 5 19ZM5 19l4.5-2"/>'),
  postcard:I('<rect x="3" y="5" width="18" height="14" rx="1.5"/><path d="M13 9h5M13 12h5M13 15h3M6 9h4v6H6z"/>'),
  sign:I('<path d="M12 3v4M6 7h12l2 3-2 3H6l-2-3 2-3ZM12 13v8M8 21h8"/>'),
  book:I('<path d="M5 4h11a2 2 0 0 1 2 2v13H7a2 2 0 0 0-2 2V4ZM5 19a2 2 0 0 1 2-2h11"/>'),
  luggage:I('<rect x="5" y="7" width="14" height="13" rx="2"/><path d="M9 7V4h6v3M9 20v1M15 20v1M12 10v7"/>'),
  vacuum:I('<circle cx="7" cy="17" r="4"/><path d="M7 17v-6a5 5 0 0 1 5-5h2M14 6h4v4M18 6l2-2"/>'),
  broom:I('<path d="M14 3l4 4-8 8-4-4 8-8ZM10 15l-6 6M8 13l-4 4M12 17l-4 4"/>'),
  mop:I('<path d="M12 3v11M7 14h10l-1.5 6h-7L7 14ZM9 20v.01M12 20v.01M15 20v.01"/>'),
  brush:I('<path d="M12 3v10M8 13h8v3a4 4 0 0 1-8 0v-3ZM10 20v.01M14 20v.01"/>'),
  box:I('<path d="M3 8l9-4 9 4v8l-9 4-9-4V8ZM3 8l9 4 9-4M12 12v8"/>'),
};

function iconFor(name){
  const n = name.toLowerCase();
  const map = [
    [/tv|television|credenza/,'tv'],[/\bac\b|inverter/,'ac'],[/fridge/,'fridge'],
    [/microwave/,'microwave'],[/oven/,'oven'],[/stove|induction/,'stove'],
    [/coffee machine|french press/,'coffee'],[/water dispenser|water heater|pitcher|jug/,'water'],
    [/wifi|access point/,'wifi'],[/router/,'router'],[/ceiling fan|\bfan\b/,'fan'],
    [/speaker|amplifier/,'speaker'],[/hair dryer/,'hairdryer'],[/cctv/,'cctv'],
    [/blender/,'blender'],[/kettle/,'kettle'],[/iron/,'iron'],[/washer|dryer/,'washer'],
    [/shelving|shelf/,'shelf'],[/cabinet/,'cabinet'],[/island/,'island'],[/vanity/,'vanity'],
    [/headboard|bed stool|mattress|bedroom mattress/,'bed'],[/wardrobe/,'wardrobe'],
    [/sofa|lazy chair/,'sofa'],[/bathtub|bathub|bath tub/,'bathtub'],[/mirror/,'mirror'],
    [/dining chair|working chair|stool|chair/,'chair'],[/dining table|coffee table|portable table|table tray|tray/,'table'],
    [/lamp/,'lamp'],[/painting/,'painting'],[/vase|flower/,'vase'],[/carpet|linen/,'carpet'],
    [/surf/,'surf'],[/curtain/,'curtain'],[/water glass|wine glass|champagne|glasses/,'wine'],
    [/cutler/,'cutlery'],[/pan set|cooking pan/,'pan'],[/plate/,'plate'],[/bowl/,'bowl'],
    [/mug|tea cup/,'mug'],[/knife|sharpener|peeler|spatula|tongs|cutting board/,'knife'],
    [/pillow|blanket|coverlet|duvet|throw|sheet/,'pillow'],[/towel/,'towel'],[/robe/,'robe'],
    [/soap|shampoo|salt|pepper/,'soap'],[/diffuser/,'diffuser'],[/slipper/,'slippers'],
    [/trash|scrub|dishwasher|display cutler|napkin|tissue|safety deposit/,'trash'],
    [/access card|qr code/,'card'],[/qr code/,'qr'],[/pen|pencil|note pad|writing/,'pen'],
    [/post card/,'postcard'],[/villa sign|hang tag|coaster/,'sign'],[/book/,'book'],
    [/luggage/,'luggage'],[/vacuum/,'vacuum'],[/broom|dustpan/,'broom'],[/mop|squeegee|bucket/,'mop'],
    [/toilet brush/,'brush'],[/rack|surf rack|towel rack|holder/,'shelf'],[/pool cleaning/,'mop'],
  ];
  for(const [re,k] of map) if(re.test(n)) return ICONS[k];
  return ICONS.box;
}

/* ---------- State ---------- */
const STATUS_LABEL = {upgrade:"Upgrade",new:"New",asis:"As Is"};
const SEC_SHORT = {
  "Electronics & Appliances":"Electronics","Fixed Furniture":"Fixed Furn.",
  "Loose Furniture":"Loose Furn.","Amenities":"Amenities","Cleaning Tools":"Cleaning",
};
const state = { tab:"upgrade", q:"", secs:new Set(), stats:new Set() };

/* ---------- Helpers ---------- */
const esc = s => (s||"").replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));

function baseSet(){
  return state.tab==="custom" ? INVENTORY.filter(x=>x.custom) : INVENTORY;
}
function matches(x){
  if(state.secs.size && !state.secs.has(x.s)) return false;
  if(state.stats.size && !state.stats.has(x.status)) return false;
  if(state.q){
    const hay = (x.name+" "+x.loc+" "+x.old+" "+x.brand+" "+x.note+" "+x.s).toLowerCase();
    if(!hay.includes(state.q)) return false;
  }
  return true;
}

/* ---------- Render ---------- */
function brandLine(x){
  if(x.status==="upgrade"){
    if(x.old && x.brand) return `<span class="old">${esc(x.old)}</span><span class="arrow">→</span><mark>${esc(x.brand)}</mark>`;
    if(x.brand) return `<mark>${esc(x.brand)}</mark>`;
    if(x.old) return `<span class="single">${esc(x.old)}</span>`;
    return "";
  }
  if(x.status==="new"){
    if(x.brand) return `<mark class="g">${esc(x.brand)}</mark>`;
    return `<mark class="g">New Addition</mark>`;
  }
  return x.old ? `<span class="single">${esc(x.old)}</span>` : "";
}

function card(x){
  const badge = x.status==="upgrade"
    ? `<span class="badge upgrade mono">✦ UPGRADE</span>`
    : x.status==="new" ? `<span class="badge new mono">+ NEW</span>` : "";
  const bl = brandLine(x);
  return `<article class="card">
    ${badge}
    <div class="top">
      <div class="iconbox">${iconFor(x.name)}</div>
      <span class="qty">×${x.qty}</span>
    </div>
    <h3>${esc(x.name)}</h3>
    <div class="loc"><span class="cdot"></span><span>${esc(x.loc||"—")}</span></div>
    ${bl?`<div class="brandline mono">${bl}</div>`:""}
    ${x.note?`<div class="note">${esc(x.note)}</div>`:""}
  </article>`;
}

function render(){
  const set = baseSet().filter(matches);
  const main = document.getElementById("sections");
  let html = "";
  let idx = 0;
  SECTIONS.forEach(sec=>{
    const items = set.filter(x=>x.s===sec);
    if(!items.length) return;
    idx++;
    const ii = String(idx).padStart(2,"0");
    html += `<section class="section" id="sec-${idx}">
      <div class="sec-head">
        <div><span class="idx">${ii} /</span><h2>${sec.toUpperCase()}</h2></div>
        <span class="n">${items.length} ITEM${items.length>1?"S":""}</span>
      </div>
      <div class="grid">${items.map(card).join("")}</div>
    </section>`;
  });
  if(!set.length){
    html = `<div class="grid"><div class="empty">NO ITEMS MATCH THESE FILTERS</div></div>`;
  }
  main.innerHTML = html;

  const total = baseSet().length;
  document.getElementById("count").innerHTML = `<b>${set.length}</b> / ${total} ITEMS`;
}

/* ---------- Header stats + tabs ---------- */
function computeStats(){
  const up = INVENTORY.filter(x=>x.status==="upgrade").length;
  const nw = INVENTORY.filter(x=>x.status==="new").length;
  const as = INVENTORY.filter(x=>x.status==="asis").length;
  return {total:INVENTORY.length, up, nw, as, custom:INVENTORY.filter(x=>x.custom).length};
}

function buildChrome(){
  const s = computeStats();
  // top bar
  document.getElementById("tb-brand").textContent = VILLA.brand;
  document.getElementById("tb-center").textContent = `${VILLA.villa} · ${VILLA.owner}`;
  document.getElementById("tb-doc").textContent = VILLA.docType;
  document.getElementById("tb-year").textContent = VILLA.year;
  // hero
  document.getElementById("hero-tag").textContent = VILLA.villa;
  document.getElementById("hero-sub").textContent = `· ${VILLA.owner}`;
  // tabs
  document.getElementById("tab-up-cnt").textContent = s.total;
  document.getElementById("tab-cu-cnt").textContent = s.custom;
  // stats
  const stats = [
    {idx:"01",num:s.total,lbl:"TOTAL ITEMS"},
    {idx:"02",num:s.up,lbl:"UPGRADED",dot:true},
    {idx:"03",num:s.nw,lbl:"NEW ADDITIONS",accent:true},
    {idx:"04",num:s.as,lbl:"RETAINED"},
  ];
  document.getElementById("stats").innerHTML = stats.map(t=>`
    <div class="stat${t.accent?" accent":""}">
      <span class="idx">${t.idx} /</span>
      <div class="num">${t.num}${t.dot?'<span class="dot">●</span>':""}</div>
      <span class="lbl">${t.lbl}</span>
    </div>`).join("");
  // section chips
  const secWrap = document.getElementById("sec-chips");
  secWrap.innerHTML = SECTIONS.map(sec=>`
    <button class="chip" data-dot="sec" data-sec="${esc(sec)}" aria-pressed="false">
      <span class="cdot"></span>${SEC_SHORT[sec].toUpperCase()}</button>`).join("");
  // footer meta
  document.getElementById("foot-updated").textContent = `LAST UPDATED · ${VILLA.updated.toUpperCase()}`;
  document.getElementById("foot-loc").textContent = VILLA.location;
}

/* ---------- Events ---------- */
function wire(){
  // tabs
  document.querySelectorAll(".tab").forEach(t=>{
    t.addEventListener("click",()=>{
      state.tab = t.dataset.tab;
      document.querySelectorAll(".tab").forEach(o=>o.setAttribute("aria-selected", o===t));
      render();
    });
  });
  // search
  const inp = document.getElementById("search");
  inp.addEventListener("input",()=>{ state.q = inp.value.trim().toLowerCase(); render(); });
  // status chips
  document.querySelectorAll(".chip[data-k]").forEach(c=>{
    c.addEventListener("click",()=>toggleChip(c, state.stats, c.dataset.k));
  });
  // section chips (delegated)
  document.getElementById("sec-chips").addEventListener("click",e=>{
    const c = e.target.closest(".chip"); if(!c) return;
    toggleChip(c, state.secs, c.dataset.sec);
  });
  // share
  const sh = document.getElementById("share");
  sh.addEventListener("click",()=>{
    const p = new URLSearchParams();
    if(state.tab!=="upgrade") p.set("tab",state.tab);
    if(state.q) p.set("q",state.q);
    if(state.secs.size) p.set("sec",[...state.secs].join("|"));
    if(state.stats.size) p.set("st",[...state.stats].join("|"));
    const url = location.origin+location.pathname+(p.toString()?"?"+p:"");
    navigator.clipboard?.writeText(url).then(()=>{
      const o = sh.innerHTML; sh.classList.add("ok"); sh.textContent="LINK COPIED";
      setTimeout(()=>{sh.classList.remove("ok"); sh.innerHTML=o;},1600);
    });
    history.replaceState(null,"",url);
  });
}
function toggleChip(el,setRef,val){
  if(setRef.has(val)){setRef.delete(val); el.setAttribute("aria-pressed","false");}
  else{setRef.add(val); el.setAttribute("aria-pressed","true");}
  render();
}

function restoreFromURL(){
  const p = new URLSearchParams(location.search);
  if(p.get("tab")==="custom"){
    state.tab="custom";
    document.querySelectorAll(".tab").forEach(o=>o.setAttribute("aria-selected", o.dataset.tab==="custom"));
  }
  if(p.get("q")){ state.q=p.get("q").toLowerCase(); document.getElementById("search").value=p.get("q"); }
  if(p.get("st")) p.get("st").split("|").forEach(k=>{
    state.stats.add(k);
    const c=document.querySelector(`.chip[data-k="${k}"]`); if(c)c.setAttribute("aria-pressed","true");
  });
  if(p.get("sec")) p.get("sec").split("|").forEach(sv=>{
    state.secs.add(sv);
    const c=document.querySelector(`.chip[data-sec="${CSS.escape(sv)}"]`); if(c)c.setAttribute("aria-pressed","true");
  });
}

buildChrome();
wire();
restoreFromURL();
render();
