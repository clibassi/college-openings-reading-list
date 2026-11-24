/* Summary beside the source: a drop-in, framework-free reader.
   The summary sits on the left, the PDF on the right. Each summary point links to the passage it most likely
   comes from (data from scripts/link_summary.py). Clicking a link scrolls the PDF and outlines the passage;
   "\u21a9 summary point" on the highlight returns to the point. Below 850px a Summary | PDF switch shows one at a time.

   mountSummaryReader(container, {
     pdf:   "paper.pdf" | ["brief1.pdf", ...],   // served path(s); must match the files link_summary.py saw
     read:  "paper.read.json",                   // link_summary.py output (or the object itself)
     title: "Author (Year)",
     original: "https://\u2026",                      // optional "open original" link
     onClose: () => {},                          // optional; shows "\u2190 Back"
     pdfjsLib, marked                            // optional; default to window globals
   })

   Needs pdf.js 3.x (window.pdfjsLib with workerSrc set) and marked (window.marked), both pinned.
   Ported from the WSAC reading list (erdc-data-docs-expert/wsac-site, 2026-11-22). Scroll mechanics follow
   ContinuousPdfPane.tsx (affordability-evidence-review); text-layer and stream code follow paper-reviewer. */
(function () {
  const esc = s => String(s ?? "").replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);
  function quadsToCssRects(quads, vp) {
    const out = [];
    for (const q of quads) {
      const [ax, ay] = vp.convertToViewportPoint(q.x1, q.y1), [bx, by] = vp.convertToViewportPoint(q.x4, q.y4);
      const r = { left: Math.min(ax, bx), top: Math.min(ay, by), width: Math.abs(bx - ax), height: Math.abs(by - ay) };
      if (r.width > .5 && r.height > .5) out.push(r);
    }
    return out;
  }

  window.mountSummaryReader = async function (root, opts) {
    const pdfjsLib = opts.pdfjsLib || window.pdfjsLib, marked = opts.marked || window.marked;
    const files = [].concat(opts.pdf);
    const md = s => marked ? marked.parse(String(s || "")) : `<p>${esc(s)}</p>`;
    const inline = s => marked ? marked.parseInline(String(s || "")) : esc(s);
    const st = { file: files[0], doc: null, sizes: [], pages: [], pv: new Map(), jobs: new Map(), gen: 0, zoom: 1, scale: 1, page: 1, on: null, io: null, data: null };

    root.classList.add("sr");
    root.innerHTML = `
      <div class="sr-bar">
        ${opts.onClose ? '<button class="sr-b" data-sr="close">\u2190 Back</button>' : ""}
        <span class="sr-title">${esc(opts.title || "")}</span>
        <span class="sr-tabs" role="group" aria-label="Show"><button class="sr-b" data-view="sum" aria-pressed="true">Summary</button><button class="sr-b" data-view="pdf" aria-pressed="false">PDF</button></span>
        <button class="sr-b sr-hide" data-sr="pane">Hide summary</button>
      </div>
      <div class="sr-main">
        <aside class="sr-pane" aria-label="Summary"><div class="sr-sum"><p class="sr-hint">Loading the summary\u2026</p></div></aside>
        <div class="sr-src">
          <div class="sr-tools">
            <button class="sr-b" data-sr="prev" aria-label="Previous page">\u2039</button><span class="sr-page"></span><button class="sr-b" data-sr="next" aria-label="Next page">\u203a</button>
            <span class="sr-sep"></span><button class="sr-b" data-sr="zout" aria-label="Zoom out">\u2212</button><button class="sr-b" data-sr="zin" aria-label="Zoom in">+</button>
            ${opts.original ? `<span class="sr-sep"></span><a class="sr-b" href="${esc(opts.original)}" target="_blank" rel="noopener">Original \u2197</a>` : ""}
          </div>
          <div class="sr-scroll"><div class="sr-pages"></div></div>
        </div>
      </div>`;
    const $ = s => root.querySelector(s), $$ = s => [...root.querySelectorAll(s)];
    const narrow = () => root.clientWidth < 850;
    root.classList.add("pane-open", "m-sum");

    /* ---------- PDF: continuous scroll, pages rendered as they approach the viewport ---------- */
    const cache = new Map();
    async function openFile(f) {
      if (st.file === f && st.doc) return;
      if (!cache.has(f)) cache.set(f, pdfjsLib.getDocument(f).promise);
      const doc = await cache.get(f);
      st.sizes = await Promise.all(Array.from({ length: doc.numPages }, (_, i) => doc.getPage(i + 1).then(p => p.getViewport({ scale: 1 }))));
      st.doc = doc; st.file = f; st.page = 1;
      await layout();
    }
    async function layout() {
      const gen = ++st.gen, wrap = $(".sr-scroll"), list = $(".sr-pages");
      if (!st.doc || !wrap.clientWidth) return;
      const widest = Math.max(...st.sizes.map(v => v.width));
      st.scale = Math.min((wrap.clientWidth - 34) / widest, 2.2) * st.zoom;
      st.io?.disconnect(); st.jobs.clear(); st.pv.clear();
      list.innerHTML = st.sizes.map((v, i) => `<div class="sr-pg" data-page="${i + 1}" style="width:${Math.floor(v.width * st.scale)}px;height:${Math.floor(v.height * st.scale)}px"><canvas></canvas></div>`).join("");
      st.pages = [...list.children];
      st.io = new IntersectionObserver(es => es.forEach(e => e.isIntersecting && renderPage(+e.target.dataset.page, gen)), { root: wrap, rootMargin: "900px 200px" });
      st.pages.forEach(el => st.io.observe(el));
      wrap.scrollTop = st.pages[st.page - 1].offsetTop - 12;
      showPage();
      await renderPage(st.page, gen);
    }
    function renderPage(n, gen) {
      if (st.jobs.has(n)) return st.jobs.get(n);
      const job = (async () => {
        const page = await st.doc.getPage(n); if (gen !== st.gen) return;
        const box = st.pages[n - 1], canvas = box.querySelector("canvas"), vp = page.getViewport({ scale: st.scale });
        const dpr = window.devicePixelRatio || 1;
        canvas.width = Math.floor(vp.width * dpr); canvas.height = Math.floor(vp.height * dpr);
        await page.render({ canvasContext: canvas.getContext("2d"), viewport: vp, transform: dpr !== 1 ? [dpr, 0, 0, dpr, 0, 0] : null }).promise;
        if (gen !== st.gen) return;
        const tl = document.createElement("div"); tl.className = "textLayer"; tl.style.setProperty("--scale-factor", vp.scale); box.appendChild(tl);
        try { await pdfjsLib.renderTextLayer({ textContentSource: await page.getTextContent(), container: tl, viewport: vp, textDivs: [] }).promise; } catch {}
        st.pv.set(n, { vp, div: box }); drawEvidence(n);
      })();
      st.jobs.set(n, job); return job;
    }
    function showPage() { $(".sr-page").textContent = st.doc ? `Page ${st.page} of ${st.doc.numPages}` : ""; }
    function goToPage(n) { if (!st.doc) return; st.page = Math.min(Math.max(1, n), st.doc.numPages); showPage(); const el = st.pages[st.page - 1]; if (el) $(".sr-scroll").scrollTop = el.offsetTop - 12; }
    let raf; $(".sr-scroll").addEventListener("scroll", () => { cancelAnimationFrame(raf); raf = requestAnimationFrame(() => {
      const r = $(".sr-scroll").getBoundingClientRect(), mid = r.top + r.height / 2; let best = st.page, d = Infinity;
      for (const el of st.pages) { const b = el.getBoundingClientRect(), x = Math.max(b.top - mid, mid - b.bottom, 0); if (x < d) { d = x; best = +el.dataset.page; } }
      if (best !== st.page) { st.page = best; showPage(); }
    }); }, { passive: true });
    let rz; new ResizeObserver(() => { clearTimeout(rz); rz = setTimeout(() => { if (st.doc) layout().then(() => st.on && focus(false)); }, 200); }).observe($(".sr-scroll"));

    /* ---------- Summary pane ---------- */
    const item = id => { for (const s of st.data?.secs || []) for (const it of s.items) if (it.id === id) return it; return null; };
    const anchorOf = ref => { const [id, k] = ref.split("|"); const it = item(id); return !it ? null : k[0] === "r" ? it.refs[+k.slice(1)] : it.a[+k]; };
    const onDoc = a => !a.f || a.f === st.file;
    const fileTag = a => a.f ? esc(a.f.split("/").pop().replace(/\.pdf$/i, "")) + " \u00b7 " : "";
    function itemHtml(it) {
      if (it.sub) return `<h4 class="sr-subh">${inline(it.md.replace(/^\*+|\*+:?$/g, ""))}</h4>`;
      const links = [...it.a.map((a, k) => [a, `${it.id}|${k}`]), ...it.refs.map((a, k) => [a, `${it.id}|r${k}`])]
        .map(([a, ref]) => `<button class="sr-link" data-anc="${ref}" aria-pressed="false" title="${a.kind === "caption" ? "The caption of this exhibit" : "Where this point most likely comes from: a text match, not checked"}">${fileTag(a)}${a.label ? esc(a.label) + " \u00b7 " : ""}p.&nbsp;${a.p}</button>`).join("");
      return `<div class="sr-item${it.li ? " li" : ""}" id="sr-${it.id}">${md(it.md)}${links ? `<div class="sr-links">${links}</div>` : ""}</div>`;
    }
    function renderSummary() {
      const d = st.data, el = $(".sr-sum");
      if (!d) { el.innerHTML = '<p class="sr-hint">No summary for this document yet.</p>'; return; }
      const gen = d.gen ? `<p class="sr-gen">${inline(d.gen)}</p>` : "";
      const five = d.five?.length ? `<div class="sr-five"><h3>If you read only ${d.five.length} pages</h3><ol>${d.five.map(f => {
        const it = item(f.item), all = it ? [...it.a, ...it.refs] : [], k = all.findIndex(a => a.p === f.p);
        const ref = k < 0 ? "" : k < it.a.length ? `${f.item}|${k}` : `${f.item}|r${k - it.a.length}`;
        return `<li><button class="sr-fp" ${ref ? `data-anc="${ref}"` : `data-page="${f.p}"`}>p.&nbsp;${f.p}</button><span>${esc(f.why)}</span></li>`; }).join("")}</ol>
        <p class="sr-note">Picked from the summary's links: the question, the design, the first key exhibits, the best-matched finding. A heuristic, not a reading.</p></div>` : "";
      const how = `<p class="sr-note top">Each page link opens the passage the point most likely comes from. Found by matching text, not checked; exhibit links go to the caption.</p>`;
      const secs = d.secs.filter(s => s.items.length).map(s => {
        const n = s.items.reduce((a, it) => a + it.a.length + it.refs.length, 0), body = s.items.map(itemHtml).join("");
        return s.open ? `<section class="sr-sec"><h3>${esc(s.h)}</h3>${body}</section>`
          : `<details class="sr-sec"><summary><h3>${esc(s.h)}</h3>${n ? `<span class="sr-n">${n} link${n > 1 ? "s" : ""}</span>` : ""}</summary>${body}</details>`;
      }).join("");
      el.innerHTML = gen + five + how + secs;
      window.MathJax?.typesetPromise?.([el]).catch(() => {});
    }

    /* ---------- Passage highlight and the two-way jump ---------- */
    function drawEvidence(n) {
      const pv = st.pv.get(n); if (!pv) return;
      pv.div.querySelectorAll(".sr-ev,.sr-evtag").forEach(x => x.remove());
      const a = st.on ? anchorOf(st.on) : null;
      if (!a || a.p !== n || !onDoc(a)) return;
      const rects = quadsToCssRects(a.quads, pv.vp);
      for (const r of rects) { const d = document.createElement("div"); d.className = "sr-ev"; Object.assign(d.style, { left: r.left + "px", top: r.top + "px", width: r.width + "px", height: r.height + "px" }); pv.div.appendChild(d); }
      if (rects.length) {
        const b = document.createElement("button"); b.className = "sr-evtag"; b.dataset.back = st.on.split("|")[0]; b.textContent = "\u21a9 summary point";
        Object.assign(b.style, { left: Math.max(2, Math.min(...rects.map(r => r.left))) + "px", top: Math.max(0, Math.min(...rects.map(r => r.top)) - 22) + "px" });
        pv.div.appendChild(b);
      }
    }
    async function focus(jump = true) {
      const a = anchorOf(st.on); if (!a) return;
      if (!onDoc(a)) await openFile(a.f);
      if (jump) goToPage(a.p);
      await renderPage(a.p, st.gen);
      for (const n of st.pv.keys()) drawEvidence(n);
      const tag = st.pv.get(a.p)?.div.querySelector(".sr-evtag"), wrap = $(".sr-scroll");
      if (tag) wrap.scrollTop += tag.getBoundingClientRect().top - wrap.getBoundingClientRect().top - Math.min(140, wrap.clientHeight * .2);
    }
    function setView(v) {
      root.classList.toggle("m-pdf", v === "pdf"); root.classList.toggle("m-sum", v !== "pdf");
      $$(".sr-tabs [data-view]").forEach(b => b.setAttribute("aria-pressed", b.dataset.view === v));
      if (v === "pdf" && st.doc) requestAnimationFrame(() => layout().then(() => st.on && focus(false)));
    }
    function openAnchor(ref) {
      st.on = ref;
      $$("[data-anc]").forEach(b => b.setAttribute("aria-pressed", b.dataset.anc === ref));
      $$(".sr-item.on").forEach(x => x.classList.remove("on")); $(`#sr-${ref.split("|")[0]}`)?.classList.add("on");
      for (const n of st.pv.keys()) drawEvidence(n);
      if (narrow()) { setView("pdf"); const a = anchorOf(ref); if (a && !onDoc(a)) openFile(a.f).then(() => focus(true)); else setTimeout(() => focus(true), 60); }
      else focus(true);
    }
    function backTo(id) {
      if (narrow()) setView("sum");
      const el = $(`#sr-${id}`); if (!el) return;
      const det = el.closest("details"); if (det) det.open = true;
      setTimeout(() => { el.scrollIntoView({ block: "center" }); el.classList.remove("flash"); void el.offsetWidth; el.classList.add("flash", "on"); }, 60);
    }
    root.addEventListener("click", e => {
      const t = e.target.closest("[data-anc],[data-page],[data-back],[data-view],[data-sr]"); if (!t) return;
      if (t.dataset.anc) openAnchor(t.dataset.anc);
      else if (t.dataset.page) { if (narrow()) setView("pdf"); goToPage(+t.dataset.page); }
      else if (t.dataset.back) backTo(t.dataset.back);
      else if (t.dataset.view) setView(t.dataset.view);
      else ({
        close: () => opts.onClose?.(),
        pane: () => { const on = root.classList.toggle("pane-open"); t.textContent = on ? "Hide summary" : "Show summary"; if (st.doc) layout(); },
        prev: () => goToPage(st.page - 1), next: () => goToPage(st.page + 1),
        zin: () => { st.zoom = Math.min(3, st.zoom * 1.25); layout(); }, zout: () => { st.zoom = Math.max(.5, st.zoom / 1.25); layout(); },
      })[t.dataset.sr]?.();
    });

    /* ---------- Load ---------- */
    try { st.data = typeof opts.read === "string" ? await fetch(opts.read).then(r => r.ok ? r.json() : null) : opts.read || null; } catch { st.data = null; }
    if (st.data && !(st.data.files || [st.data.file]).some(f => files.some(x => x.split("/").pop() === f.split("/").pop())))
      console.warn("summary-reader: the link file was built for", st.data.file, "not", files);
    renderSummary();
    try { await openFile(files[0]); } catch (err) { $(".sr-page").textContent = "The PDF did not load."; console.error(err); }
    return { open: openAnchor, goToPage };
  };
})();
