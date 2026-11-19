const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".site-nav");
function closeMenu(){toggle.setAttribute("aria-expanded","false");nav.classList.remove("open");nav.setAttribute("aria-hidden","true");}
toggle.addEventListener("click",()=>{const open=toggle.getAttribute("aria-expanded")!=="true";toggle.setAttribute("aria-expanded",String(open));nav.classList.toggle("open",open);nav.setAttribute("aria-hidden",String(!open));});
nav.querySelectorAll("a").forEach(a=>a.addEventListener("click",closeMenu));

async function loadEntries(file, targetId, type){
  const target=document.getElementById(targetId);
  try{
    const response=await fetch(file);
    if(!response.ok) throw new Error("Could not load data");
    const entries=await response.json();
    if(!entries.length){target.innerHTML=`<p class="empty-entry">${type==="live"?"現在、公開中のライブ情報はありません。":"現在、お知らせはありません。"}</p>`;return;}
    target.innerHTML=entries.map(item=>{
      const date=item.date||"";
      const title=item.title||"";
      const meta=[item.venue,item.open&&`OPEN ${item.open}`,item.start&&`START ${item.start}`].filter(Boolean).join(" / ");
      const link=item.url?`<a class="entry-link" href="${escapeHtml(item.url)}" target="_blank" rel="noopener" aria-label="詳細を見る">↗</a>`:"";
      return `<article class="entry"><div class="entry-date">${escapeHtml(date)}</div><div><div class="entry-title">${escapeHtml(title)}</div>${meta?`<div class="entry-meta">${escapeHtml(meta)}</div>`:""}</div>${link}</article>`;
    }).join("");
  }catch(error){target.innerHTML='<p class="empty-entry">情報を読み込めませんでした。</p>';}
}
function escapeHtml(value){return String(value).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));}
loadEntries("data/live.json","live-list","live");
loadEntries("data/news.json","news-list","news");
