(function(){
"use strict";

/* ============================================================
   A) CONFIG
   ============================================================ */
const WHATSAPP_NUMBER = "48692971895";
function waLink(msg){ return "https://wa.me/"+WHATSAPP_NUMBER+"?text="+encodeURIComponent(msg); }

/* ============================================================
   B) i18n — PL / EN / ES
   ============================================================ */
const translations = {
  pl:{
    lang_name:"Polski",
    menu_gallery:"Galeria", menu_info:"Informacja",
    social_aria:"Media społecznościowe",
    footer_credit:"stworzone przez septimapacha.com",
    info_title:"Pracownia w świecie snu",
    info_text:"Każdy portret zaczyna się od zwykłego zdjęcia i zamienia się w rękodzieło malowane na drewnie, rysowane ołówkiem lub przedstawione jako karykatura. Bez druku, bez kopii — tylko oryginał, tworzony specjalnie dla Ciebie.",
    info_cta:"Napisz na WhatsApp",
    stat_techniques:"Techniki", stat_ship:"Dostawa", stat_original:"Oryginał",
    gallery_eyebrow:"PRACOWNIA · POLSKA",
    gallery_h1:"Galeria snów",
    gallery_sub:"Zwierzęta i ludzie zamienieni w unikatowe dzieła — malowane na drewnie, rysowane ołówkiem, przedstawione jako karykatura.",
    about_p1:"Każdy portret zaczyna się od zwykłego zdjęcia — i kilkudziesięciu godzin pracy. Maluję na desce lipowej, rysuję grafitem, kreślę karykatury z humorem i czułością.",
    about_p2:"Bez druku, bez kopii — tylko oryginał, który trafia bezpośrednio do Ciebie.",
    process_eyebrow:"JAK TO DZIAŁA",
    step1_tag:"01", step1_title:"Wyślij zdjęcie", step1_text:"Prześlij ulubione zdjęcie zwierzaka lub bliskiej osoby przez WhatsApp.",
    step2_tag:"02", step2_title:"Wybierz technikę", step2_text:"Razem dobierzemy najlepszą formę: drewno, ołówek lub karykaturę.",
    step3_tag:"03", step3_title:"Odbierz dzieło", step3_text:"Tworzę portret ręcznie i bezpiecznie wysyłam gotową pracę.",
    tab_venta:"En venta", tab_vendidos:"Vendidos",
    cat_c_eyebrow:"NA SPRZEDAŻ", cat_c_title:"Kolekcja Abstraigo", cat_c_sub:"Abstrakcja w akwareli i technice mieszanej. Format A4 — unikatowe, dostępne od ręki.",
    cat_a_eyebrow:"SPRZEDANE", cat_a_title:"Portrety Zwierząt", cat_a_sub:"Psy, koty i inni czworonożni bohaterowie — inspiruj się i zamów swoją wersję.",
    cat_b_eyebrow:"SPRZEDANE", cat_b_title:"Portrety Ludzi", cat_b_sub:"Portrety bliskich osób — inspiruj się i zamów swoją wersję.",
    filter_all:"Wszystkie", subcat_wood:"Drewno", subcat_pencil:"Ołówek", subcat_bw:"Cz-b", subcat_color:"Kolor",
    sold_badge:"Sprzedane", piece_label:"Praca",
    abstraigo_offer_label:"Oferta", abstraigo_dims_label:"Wymiary", abstraigo_technique_label:"Technika", abstraigo_panel_label:"Obraz",
    abstraigo_cat_minimal:"Abstrakcja minimalistyczna", abstraigo_cat_abstract:"Abstrakcja",
    abstraigo_cta:"Zamów tę pracę", lightbox_cta:"Zamów tę pracę",
    gallery_empty:"Wkrótce więcej przykładów w tej kategorii.",
    abstraigo_wisnia_statement:"Tryptyk „Wiśnia” to trzy fragmenty jednej historii — subtelna gra plam akwareli, która ożywia każdą ścianę. Limitowany oryginał, gotowy do wysyłki w tym tygodniu.",
    abstraigo_przesladowca_statement:"„Prześladowca” to abstrakcja, która nie daje się zapomnieć — mocny gest pędzla, kontrolowany chaos, jeden oryginał.",
    wa_generic:"Cześć! Chcę zamówić portret. Proszę o więcej informacji.",
    wa_template:"Cześć! Interesuje mnie ta praca: {title} ({technique}). Poproszę o wycenę i czas realizacji.",
    wa_abstraigo_template:"Cześć! Interesuje mnie obraz \"{title}\" z kolekcji Abstraigo ({dims}, {technique}) w cenie {price} — {panel}. Poproszę o więcej informacji."
  },
  en:{
    lang_name:"English",
    menu_gallery:"Gallery", menu_info:"Info",
    social_aria:"Social media",
    footer_credit:"made by septimapacha.com",
    info_title:"A studio inside a dream",
    info_text:"Every portrait starts as an ordinary photo and becomes a handmade piece — painted on wood, drawn in pencil, or reimagined as caricature. No prints, no copies — just an original made for you.",
    info_cta:"Message on WhatsApp",
    stat_techniques:"Techniques", stat_ship:"Delivery", stat_original:"Original",
    gallery_eyebrow:"STUDIO · POLAND",
    gallery_h1:"Gallery of dreams",
    gallery_sub:"Pets and people turned into one-of-a-kind artworks — painted on wood, drawn in pencil, reimagined as caricature.",
    about_p1:"Every portrait starts with an ordinary photo — and dozens of hours of work. I paint on linden wood, draw in graphite, and sketch caricatures with humour and care.",
    about_p2:"No prints, no copies — just an original piece made for you.",
    process_eyebrow:"HOW IT WORKS",
    step1_tag:"01", step1_title:"Send a photo", step1_text:"Send your favourite photo of your pet or loved one on WhatsApp.",
    step2_tag:"02", step2_title:"Choose a technique", step2_text:"Together we'll pick the form: wood, pencil, or caricature.",
    step3_tag:"03", step3_title:"Receive the artwork", step3_text:"I create it by hand and ship the finished piece safely to you.",
    tab_venta:"For sale", tab_vendidos:"Sold",
    cat_c_eyebrow:"FOR SALE", cat_c_title:"Abstraigo Collection", cat_c_sub:"Abstract watercolor and mixed media. A4 format — one of a kind, ready to ship.",
    cat_a_eyebrow:"SOLD", cat_a_title:"Pet Portraits", cat_a_sub:"Dogs, cats and other four-legged heroes — get inspired and commission your own.",
    cat_b_eyebrow:"SOLD", cat_b_title:"People Portraits", cat_b_sub:"Portraits of the people you love — get inspired and commission your own.",
    filter_all:"All", subcat_wood:"Wood", subcat_pencil:"Pencil", subcat_bw:"B&W", subcat_color:"Color",
    sold_badge:"Sold", piece_label:"Piece",
    abstraigo_offer_label:"Offer", abstraigo_dims_label:"Dimensions", abstraigo_technique_label:"Technique", abstraigo_panel_label:"Panel",
    abstraigo_cat_minimal:"Minimalist abstract", abstraigo_cat_abstract:"Abstract",
    abstraigo_cta:"Order this piece", lightbox_cta:"Order this piece",
    gallery_empty:"More examples coming soon.",
    abstraigo_wisnia_statement:"The \"Wiśnia\" triptych is three fragments of one story — a subtle play of watercolor bleeds that brings any wall to life. A limited original, ready to ship this week.",
    abstraigo_przesladowca_statement:"\"Prześladowca\" is an abstract piece that lingers in the mind — bold brushwork, controlled chaos, a single original.",
    wa_generic:"Hi! I'd like to order a portrait. Could you tell me more?",
    wa_template:"Hi! I'm interested in this piece: {title} ({technique}). Could you give me a quote and turnaround time?",
    wa_abstraigo_template:"Hi! I'm interested in the piece \"{title}\" from the Abstraigo collection ({dims}, {technique}) priced at {price} — {panel}. Could you tell me more?"
  },
  es:{
    lang_name:"Español",
    menu_gallery:"Galería", menu_info:"Información",
    social_aria:"Redes sociales",
    footer_credit:"creado por septimapacha.com",
    info_title:"Un estudio dentro de un sueño",
    info_text:"Cada retrato empieza como una foto cualquiera y se convierte en una pieza hecha a mano — pintada sobre madera, dibujada a lápiz o reinterpretada como caricatura. Sin impresiones ni copias: solo un original hecho para ti.",
    info_cta:"Escribir por WhatsApp",
    stat_techniques:"Técnicas", stat_ship:"Envío", stat_original:"Original",
    gallery_eyebrow:"ESTUDIO · POLONIA",
    gallery_h1:"Galería de sueños",
    gallery_sub:"Mascotas y personas convertidas en obras únicas — pintadas sobre madera, dibujadas a lápiz, reinterpretadas como caricatura.",
    about_p1:"Cada retrato empieza con una foto cualquiera — y decenas de horas de trabajo. Pinto sobre madera de tilo, dibujo con grafito y trazo caricaturas con humor y cariño.",
    about_p2:"Sin impresiones ni copias: solo una pieza original hecha para ti.",
    process_eyebrow:"CÓMO FUNCIONA",
    step1_tag:"01", step1_title:"Envía una foto", step1_text:"Envíame tu foto favorita de tu mascota o ser querido por WhatsApp.",
    step2_tag:"02", step2_title:"Elige técnica", step2_text:"Juntos elegimos la forma: madera, lápiz o caricatura.",
    step3_tag:"03", step3_title:"Recibe tu obra", step3_text:"Creo el retrato a mano y lo envío con cuidado hasta ti.",
    tab_venta:"En venta", tab_vendidos:"Vendidos",
    cat_c_eyebrow:"EN VENTA", cat_c_title:"Colección Abstraigo", cat_c_sub:"Abstracción en acuarela y técnica mixta. Formato A4 — piezas únicas, disponibles ya.",
    cat_a_eyebrow:"VENDIDO", cat_a_title:"Retratos de Mascotas", cat_a_sub:"Perros, gatos y otros héroes de cuatro patas — inspírate y encarga la tuya.",
    cat_b_eyebrow:"VENDIDO", cat_b_title:"Retratos de Personas", cat_b_sub:"Retratos de las personas que quieres — inspírate y encarga la tuya.",
    filter_all:"Todas", subcat_wood:"Madera", subcat_pencil:"Lápiz", subcat_bw:"B/N", subcat_color:"Color",
    sold_badge:"Vendido", piece_label:"Pieza",
    abstraigo_offer_label:"Oferta", abstraigo_dims_label:"Dimensiones", abstraigo_technique_label:"Técnica", abstraigo_panel_label:"Cuadro",
    abstraigo_cat_minimal:"Abstracto minimalista", abstraigo_cat_abstract:"Abstracto",
    abstraigo_cta:"Encargar esta obra", lightbox_cta:"Encargar esta obra",
    gallery_empty:"Pronto más ejemplos en esta categoría.",
    abstraigo_wisnia_statement:"El tríptico \"Wiśnia\" son tres fragmentos de una misma historia — un juego sutil de manchas de acuarela que le da vida a cualquier pared. Original limitado, listo para enviar esta semana.",
    abstraigo_przesladowca_statement:"\"Prześladowca\" es una obra abstracta que no se olvida — un gesto de pincel contundente, caos controlado, una sola pieza original.",
    wa_generic:"¡Hola! Quiero encargar un retrato. ¿Podrías darme más información?",
    wa_template:"¡Hola! Me interesa esta obra: {title} ({technique}). ¿Podrías indicarme el precio y el tiempo de entrega?",
    wa_abstraigo_template:"¡Hola! Me interesa la obra \"{title}\" de la colección Abstraigo ({dims}, {technique}) con precio {price} — {panel}. ¿Podrías darme más información?"
  }
};
let currentLang = (localStorageGet("an_lang")) || "pl";
function localStorageGet(){ return null; } // artifacts/hosting-safe: no persistence, always default

function t(key){ return (translations[currentLang] && translations[currentLang][key]) !== undefined ? translations[currentLang][key] : (translations.pl[key]||""); }

function updateWaLinks(){
  const msg = t("wa_generic");
  document.querySelectorAll(".js-wa-generic").forEach(el=>el.setAttribute("href",waLink(msg)));
}
function buildPieceMsg(title,tech){ return t("wa_template").replace("{title}",title).replace("{technique}",tech); }
function buildAbstraigoMsg(work,panelLabel){
  return t("wa_abstraigo_template")
    .replace("{title}",work.title).replace("{dims}",work.dims)
    .replace("{technique}",work.technique).replace("{price}","$"+work.price)
    .replace("{panel}",panelLabel);
}

function applyLanguage(lang){
  currentLang = translations[lang] ? lang : "pl";
  document.querySelectorAll("[data-i18n]").forEach(el=>{
    const k=el.getAttribute("data-i18n");
    const v=t(k);
    if(v) el.textContent=v;
  });
  document.querySelectorAll("[data-i18n-html]").forEach(el=>{
    const k=el.getAttribute("data-i18n-html");
    const v=t(k);
    if(v) el.innerHTML=v;
  });
  document.documentElement.setAttribute("lang",currentLang);
  document.querySelectorAll(".lang-pill").forEach(b=>b.classList.toggle("is-active",b.getAttribute("data-lang")===currentLang));
  updateWaLinks();
  if(document.body.classList.contains("page-index") && typeof layoutRadial==="function") layoutRadial();
  if(document.body.classList.contains("page-gallery")){
    renderFilters("a"); renderFilters("b");
    renderGrid("a"); renderGrid("b");
    renderAbstraigo();
  }
}
document.addEventListener("click",e=>{
  const langBtn=e.target.closest("[data-lang]");
  if(langBtn) applyLanguage(langBtn.getAttribute("data-lang"));
});

/* ============================================================
   C) INDEX PAGE — radial menu + info modal
   ============================================================ */
if(document.body.classList.contains("page-index")){

  const menuItems = [
    { key:"gallery", labelKey:"menu_gallery", href:"galeria.html", tone:"tone-cyan" },
    { key:"info",    labelKey:"menu_info",    action:"info",       tone:"tone-pink" }
  ];

  const radialMenu = document.getElementById("radial-menu");
  const logoBtn = document.getElementById("logo-btn");
  const infoModal = document.getElementById("info-modal");
  const infoClose = document.getElementById("info-close");

  function buildRadialItems(){
    if(!radialMenu) return;
    radialMenu.innerHTML = menuItems.map(item=>{
      const label = t(item.labelKey);
      if(item.action==="info"){
        return `<div class="radial-item"><button type="button" class="radial-led ${item.tone} float-c" data-action="info">${label}</button></div>`;
      }
      return `<div class="radial-item"><a class="radial-led ${item.tone} float-a" href="${item.href}">${label}</a></div>`;
    }).join("");
    layoutRadial();
    radialMenu.querySelectorAll('[data-action="info"]').forEach(b=>b.addEventListener("click",openInfo));
  }

  window.layoutRadial = function layoutRadial(){
    if(!radialMenu) return;
    const items = radialMenu.querySelectorAll(".radial-item");
    const n = items.length;
    // radius scales with viewport but never pushes signs off-screen on narrow phones
    const radius = Math.max(88, Math.min(window.innerWidth * 0.26, 140));
    const arcStart = -160, arcEnd = -20;
    items.forEach((el,i)=>{
      const angle = n===1 ? -90 : arcStart + (arcEnd-arcStart)*(i/(n-1));
      const rad = angle*Math.PI/180;
      const x = radius*Math.cos(rad);
      const y = radius*Math.sin(rad);
      el.style.setProperty("--tx", x.toFixed(1)+"px");
      el.style.setProperty("--ty", y.toFixed(1)+"px");
    });
  };

  function openMenu(){
    radialMenu.classList.add("is-open");
    logoBtn.classList.add("is-open");
    logoBtn.setAttribute("aria-expanded","true");
  }
  function closeMenu(){
    radialMenu.classList.remove("is-open");
    logoBtn.classList.remove("is-open");
    logoBtn.setAttribute("aria-expanded","false");
  }
  function toggleMenu(){
    if(radialMenu.classList.contains("is-open")) closeMenu(); else openMenu();
  }

  if(logoBtn){
    logoBtn.addEventListener("click",toggleMenu);
    document.addEventListener("click",e=>{
      if(!radialMenu.classList.contains("is-open")) return;
      if(e.target===logoBtn || logoBtn.contains(e.target)) return;
      if(radialMenu.contains(e.target)) return;
      closeMenu();
    });
    document.addEventListener("keydown",e=>{ if(e.key==="Escape") closeMenu(); });
  }

  function openInfo(){
    infoModal.classList.add("is-open");
    infoModal.setAttribute("aria-hidden","false");
    closeMenu();
  }
  function closeInfo(){
    infoModal.classList.remove("is-open");
    infoModal.setAttribute("aria-hidden","true");
  }
  if(infoClose) infoClose.addEventListener("click",closeInfo);
  if(infoModal){
    infoModal.addEventListener("click",e=>{ if(e.target===infoModal) closeInfo(); });
    document.addEventListener("keydown",e=>{ if(e.key==="Escape") closeInfo(); });
  }

  window.addEventListener("resize",()=>{ if(typeof layoutRadial==="function") layoutRadial(); });

  buildRadialItems();
}

/* ============================================================
   D) GALLERY PAGE — abstraigo (for sale) + sold carousels + lightbox
   ============================================================ */
if(document.body.classList.contains("page-gallery")){

  const galleryData = {
    a: [
      { src:"https://i.ibb.co/ks3g5d7K/IMG-20260620-WA0017.jpg",   subcat:"wood" },
      { src:"https://i.ibb.co/DHPdyq5K/IMG-20260620-WA0067.jpg",   subcat:"wood" },
      { src:"https://i.ibb.co/jvZxQTDS/IMG-20260620-WA0065.jpg",   subcat:"pencil" },
      { src:"https://i.ibb.co/xTdFkgH/IMG-20260620-WA0018.jpg",    subcat:"pencil" },
      { src:"https://i.ibb.co/prZ0vPPV/FB-IMG-1781952288967.jpg",  subcat:"bw" },
      { src:"https://i.ibb.co/VhCG4DW/FB-IMG-1781951275111.jpg",   subcat:"bw" },
      { src:"https://i.ibb.co/4ZDyWMzp/FB-IMG-1781890667100.jpg",  subcat:"color" },
      { src:"https://i.ibb.co/Ld0fy84w/FB-IMG-1781890658916.jpg",  subcat:"color" }
    ],
    b: [
      { src:"https://i.ibb.co/PsNq3hRD/IMG-20260614-WA0005-1.jpg", subcat:"wood" },
      { src:"https://i.ibb.co/G4CJH7qt/IMG-20260614-WA0004-1.jpg", subcat:"pencil" },
      { src:"https://i.ibb.co/WvpjN2d7/IMG-20260614-WA0003-1.jpg", subcat:"bw" }
    ]
  };
  const SUBCATS = ["wood","pencil","bw","color"];

  const abstraigoData = [
    {
      id:"wisnia", title:"Wiśnia", category_key:"abstraigo_cat_minimal",
      price:150, dims:"A4", technique:"ACUARELA / MIXTA", triptych:true,
      statementKey:"abstraigo_wisnia_statement",
      panels:[
        { label:"Vista general", images:[
          "https://i.ibb.co/nsK7FRG5/In-Shot-20260705-221927416.jpg",
          "https://i.ibb.co/FqCq2zWH/1783253560477.png",
          "https://i.ibb.co/whMnr9zh/1783253810924.png" ] },
        { label:"Cuadro I", images:[
          "https://i.ibb.co/nsK7FRG5/In-Shot-20260705-221927416.jpg",
          "https://i.ibb.co/FqCq2zWH/1783253560477.png",
          "https://i.ibb.co/d4cMbd3Y/IMG-20260705-WA0003.jpg" ] },
        { label:"Cuadro II", images:[
          "https://i.ibb.co/nsK7FRG5/In-Shot-20260705-221927416.jpg",
          "https://i.ibb.co/whMnr9zh/1783253810924.png",
          "https://i.ibb.co/60NXzrWV/IMG-20260705-WA0006.jpg" ] },
        { label:"Cuadro III", images:[
          "https://i.ibb.co/nsK7FRG5/In-Shot-20260705-221927416.jpg",
          "https://i.ibb.co/BHcFDtqx/1783253962041.png",
          "https://i.ibb.co/s9cgpsfY/IMG-20260705-WA0007.jpg" ] }
      ]
    },
    {
      id:"przesladowca", title:"Prześladowca", category_key:"abstraigo_cat_abstract",
      price:150, dims:"A4", technique:"ACUARELA / MIXTA", triptych:false,
      statementKey:"abstraigo_przesladowca_statement",
      panels:[
        { label:"Obra", images:[
          "https://i.ibb.co/QGsjqKG/In-Shot-20260705-172340702.jpg",
          "https://i.ibb.co/jvDN6ffS/IMG-20260705-WA0018.jpg" ] }
      ]
    }
  ];

  /* ---- Tabs: En venta / Vendidos ---- */
  const tabButtons = document.querySelectorAll(".tab-btn");
  const panels = { venta: document.getElementById("panel-venta"), vendidos: document.getElementById("panel-vendidos") };
  function setTab(name){
    tabButtons.forEach(b=>b.classList.toggle("is-active", b.getAttribute("data-tab")===name));
    Object.keys(panels).forEach(k=>{ if(panels[k]) panels[k].classList.toggle("is-active", k===name); });
  }
  tabButtons.forEach(b=>b.addEventListener("click",()=>setTab(b.getAttribute("data-tab"))));
  setTab("venta");

  /* ---- Sold carousels (pets / people) ---- */
  const activeFilter={a:"all",b:"all"};
  const carouselState={a:0,b:0};

  window.renderFilters = function renderFilters(catKey){
    const c=document.getElementById("filters-"+catKey); if(!c)return;
    const labels={all:t("filter_all"),wood:t("subcat_wood"),pencil:t("subcat_pencil"),bw:t("subcat_bw"),color:t("subcat_color")};
    c.innerHTML=["all",...SUBCATS].map(k=>{
      const active=activeFilter[catKey]===k?" is-active":"";
      return `<button type="button" data-filter="${k}" class="filter-pill${active}">${labels[k]}</button>`;
    }).join("");
    c.querySelectorAll("[data-filter]").forEach(b=>b.addEventListener("click",()=>{
      activeFilter[catKey]=b.getAttribute("data-filter");
      carouselState[catKey]=0;
      renderFilters(catKey); renderGrid(catKey);
    }));
  };

  window.renderGrid = function renderGrid(catKey){
    const track=document.getElementById("carousel-track-"+catKey);
    const empty=document.getElementById("empty-"+catKey);
    if(!track)return;
    const items=galleryData[catKey];
    const filter=activeFilter[catKey];
    const tl={wood:t("subcat_wood"),pencil:t("subcat_pencil"),bw:t("subcat_bw"),color:t("subcat_color")};
    const catLabel = catKey==="a" ? t("cat_a_title") : t("cat_b_title");

    const visible = items.map((item,i)=>({item,i})).filter(({item})=>filter==="all"||filter===item.subcat);
    if(carouselState[catKey] >= visible.length) carouselState[catKey]=0;

    track.innerHTML = visible.map(({item,i})=>{
      const tech = tl[item.subcat];
      const title = t("piece_label")+" "+String(i+1).padStart(2,"0");
      const alt = `${title} — ${tech} — ${catLabel} — ArtNonimu's (sprzedane)`;
      return `<div class="carousel-slide" data-index="${i}">
        <div class="sold-card" tabindex="0" role="button" aria-label="${alt}">
          <img src="${item.src}" alt="${alt}" loading="lazy" decoding="async">
          <div class="sold-ribbon"><span>${t("sold_badge")}</span></div>
          <div class="sold-tag">${tech}</div>
        </div>
      </div>`;
    }).join("");

    track.querySelectorAll(".sold-card").forEach(card=>{
      const open=()=>{
        const idx=parseInt(card.closest(".carousel-slide").getAttribute("data-index"),10);
        openLightbox(catKey,idx);
      };
      card.addEventListener("click",open);
      card.addEventListener("keydown",e=>{ if(e.key==="Enter"||e.key===" "){e.preventDefault();open();} });
    });

    if(empty) empty.classList.toggle("hidden",visible.length!==0);
    updateCarouselPosition(catKey);
  };

  function updateCarouselPosition(catKey){
    const track=document.getElementById("carousel-track-"+catKey);
    if(!track)return;
    const total=track.children.length;
    const idx=Math.min(carouselState[catKey],Math.max(total-1,0));
    track.style.transform=`translateX(-${idx*100}%)`;
    const counter=document.getElementById("carousel-counter-"+catKey);
    if(counter) counter.textContent = total ? `${idx+1} / ${total}` : "0 / 0";
  }
  function stepCarousel(catKey,dir){
    const track=document.getElementById("carousel-track-"+catKey);
    if(!track)return;
    const total=track.children.length;
    if(total===0)return;
    carouselState[catKey]=(carouselState[catKey]+dir+total)%total;
    updateCarouselPosition(catKey);
  }
  document.addEventListener("click",e=>{
    const prev=e.target.closest("[data-carousel-prev]");
    const next=e.target.closest("[data-carousel-next]");
    if(prev) stepCarousel(prev.getAttribute("data-carousel-prev"),-1);
    if(next) stepCarousel(next.getAttribute("data-carousel-next"),1);
  });

  /* ---- Abstraigo (for-sale) mini-carousels ---- */
  const abstraigoSlideState={};

  window.renderAbstraigo = function renderAbstraigo(){
    const wrap=document.getElementById("abstraigo-works");
    if(!wrap)return;

    wrap.innerHTML = abstraigoData.map(work=>{
      const catLabel = t(work.category_key);
      const statement = t(work.statementKey);
      const gridClass = work.triptych ? "panel-grid cols-4" : "panel-grid cols-1";
      const panelsHtml = work.panels.map((panel,pIdx)=>{
        const stateKey = work.id+"__"+pIdx;
        if(abstraigoSlideState[stateKey]===undefined) abstraigoSlideState[stateKey]=0;
        const slidesHtml = panel.images.map((src,sIdx)=>{
          const alt = `${work.title} — ${panel.label} — foto ${sIdx+1} — ArtNonimu's Abstraigo A4`;
          return `<div class="ab-slide"><img src="${src}" alt="${alt}" loading="lazy" decoding="async"></div>`;
        }).join("");
        return `<div class="glass-panel ab-panel" data-work="${work.id}" data-panel="${pIdx}">
          <div class="ab-carousel">
            <div class="ab-track" id="ab-track-${work.id}-${pIdx}">${slidesHtml}</div>
            <button type="button" class="ab-nav ab-prev" data-ab-prev="${work.id}|${pIdx}" aria-label="Poprzednie zdjęcie">‹</button>
            <button type="button" class="ab-nav ab-next" data-ab-next="${work.id}|${pIdx}" aria-label="Następne zdjęcie">›</button>
            <div class="ab-dots" id="ab-dots-${work.id}-${pIdx}"></div>
          </div>
          <div class="ab-meta"><span>${panel.label}</span><span id="ab-counter-${work.id}-${pIdx}"></span></div>
        </div>`;
      }).join("");

      return `<article class="abstraigo-work glass-panel" style="padding:1.4rem 1.4rem 1.8rem;">
        <div class="abstraigo-head">
          <div>
            <p class="eyebrow" style="margin-bottom:.4rem;">${catLabel}</p>
            <h3>${work.title}</h3>
          </div>
          <div class="price-chip glass-panel">
            <span class="lbl">${t("abstraigo_offer_label")}</span>
            <span class="val">$${work.price}</span>
          </div>
        </div>
        <div class="${gridClass}">${panelsHtml}</div>
        <p class="piece-note" style="font-family:'Space Mono',monospace;font-size:.68rem;letter-spacing:.08em;text-transform:uppercase;color:rgba(246,238,252,.45);">
          ${t("abstraigo_dims_label")}: ${work.dims} · ${t("abstraigo_technique_label")}: ${work.technique}
        </p>
        <p class="piece-note">${statement}</p>
        <div class="piece-cta">
          <a class="btn-dream" href="${waLink(buildAbstraigoMsg(work, work.title))}" target="_blank" rel="noopener">${t("abstraigo_cta")}</a>
        </div>
      </article>`;
    }).join("");

    abstraigoData.forEach(work=>{
      work.panels.forEach((panel,pIdx)=>{
        renderAbDots(work.id,pIdx,panel.images.length);
        updateAbPosition(work.id,pIdx);
      });
    });
  };

  function renderAbDots(workId,pIdx,count){
    const dots=document.getElementById("ab-dots-"+workId+"-"+pIdx);
    if(!dots)return;
    dots.innerHTML=Array.from({length:count}).map((_,i)=>`<span class="ab-dot" data-ab-dot="${workId}|${pIdx}|${i}"></span>`).join("");
  }
  function updateAbPosition(workId,pIdx){
    const stateKey=workId+"__"+pIdx;
    const idx=abstraigoSlideState[stateKey]||0;
    const track=document.getElementById("ab-track-"+workId+"-"+pIdx);
    if(!track)return;
    track.style.transform=`translateX(-${idx*100}%)`;
    const total=track.children.length;
    const counter=document.getElementById("ab-counter-"+workId+"-"+pIdx);
    if(counter) counter.textContent = total ? `${idx+1}/${total}` : "";
    document.querySelectorAll(`[data-ab-dot^="${workId}|${pIdx}|"]`).forEach(dot=>{
      const dotIdx=parseInt(dot.getAttribute("data-ab-dot").split("|")[2],10);
      dot.classList.toggle("is-active",dotIdx===idx);
    });
  }
  function stepAb(workId,pIdx,dir){
    const stateKey=workId+"__"+pIdx;
    const track=document.getElementById("ab-track-"+workId+"-"+pIdx);
    if(!track)return;
    const total=track.children.length;
    if(total===0)return;
    abstraigoSlideState[stateKey]=((abstraigoSlideState[stateKey]||0)+dir+total)%total;
    updateAbPosition(workId,pIdx);
  }
  document.addEventListener("click",e=>{
    const prev=e.target.closest("[data-ab-prev]");
    const next=e.target.closest("[data-ab-next]");
    const dot=e.target.closest("[data-ab-dot]");
    if(prev){ const [w,p]=prev.getAttribute("data-ab-prev").split("|"); stepAb(w,parseInt(p,10),-1); }
    if(next){ const [w,p]=next.getAttribute("data-ab-next").split("|"); stepAb(w,parseInt(p,10),1); }
    if(dot){ const [w,p,i]=dot.getAttribute("data-ab-dot").split("|"); abstraigoSlideState[w+"__"+p]=parseInt(i,10); updateAbPosition(w,p); }
  });
  setInterval(()=>{
    abstraigoData.forEach(work=>work.panels.forEach((panel,pIdx)=>{ if(panel.images.length>1) stepAb(work.id,pIdx,1); }));
  },5200);

  /* ---- Lightbox ---- */
  const lightbox=document.getElementById("lightbox");
  const lbImg=document.getElementById("lightbox-img");
  const lbName=document.getElementById("lightbox-name");
  const lbTech=document.getElementById("lightbox-technique");
  const lbCta=document.getElementById("lightbox-cta");
  let lbState={cat:"a",index:0};

  window.openLightbox = function openLightbox(cat,index){
    lbState={cat,index}; fillLightbox();
    lightbox.classList.add("is-open");
  };
  function closeLightbox(){ lightbox.classList.remove("is-open"); }
  function fillLightbox(){
    const item=galleryData[lbState.cat][lbState.index];
    const tl={wood:t("subcat_wood"),pencil:t("subcat_pencil"),bw:t("subcat_bw"),color:t("subcat_color")};
    const tech=tl[item.subcat];
    const title=t("piece_label")+" "+String(lbState.index+1).padStart(2,"0");
    lbImg.src=item.src; lbImg.alt=title+" — "+tech;
    lbName.textContent=title+" — "+t("sold_badge");
    lbTech.textContent=tech;
    lbCta.setAttribute("href",waLink(buildPieceMsg(title,tech)));
  }
  function stepLightbox(d){
    const items=galleryData[lbState.cat];
    lbState.index=(lbState.index+d+items.length)%items.length;
    fillLightbox();
  }
  const lbCloseBtn=document.getElementById("lightbox-close");
  const lbPrevBtn=document.getElementById("lightbox-prev");
  const lbNextBtn=document.getElementById("lightbox-next");
  if(lbCloseBtn) lbCloseBtn.addEventListener("click",closeLightbox);
  if(lbPrevBtn) lbPrevBtn.addEventListener("click",()=>stepLightbox(-1));
  if(lbNextBtn) lbNextBtn.addEventListener("click",()=>stepLightbox(1));
  if(lightbox){
    lightbox.addEventListener("click",e=>{ if(e.target===lightbox) closeLightbox(); });
    document.addEventListener("keydown",e=>{
      if(!lightbox.classList.contains("is-open"))return;
      if(e.key==="Escape") closeLightbox();
      if(e.key==="ArrowLeft") stepLightbox(-1);
      if(e.key==="ArrowRight") stepLightbox(1);
    });
  }
}

/* ============================================================
   E) INIT (both pages)
   ============================================================ */
applyLanguage(currentLang);

})();
