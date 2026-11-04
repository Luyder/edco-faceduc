/* Micrositio Educación Continua — render a partir de datos.js (window.EDCO). */
(() => {
  // Los cursos y profesores marcados como ocultos en el editor no aparecen en el sitio.
  const D = Object.assign({}, window.EDCO, {
    cursos: window.EDCO.cursos.filter((c) => !c.oculto),
    profesores: window.EDCO.profesores.filter((p) => !p.oculto)
  });
  const $ = (s, el = document) => el.querySelector(s);
  const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const sinTildes = (s) => s.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();

  const ESTADOS = { abierto: "Inscripciones abiertas", proximamente: "Próximamente", desarrollo: "En desarrollo" };
  const ORDEN_ESTADO = { abierto: 0, proximamente: 1, desarrollo: 2 };
  const areaPorId = Object.fromEntries(D.areas.map((a) => [a.id, a]));
  const profePorId = Object.fromEntries(D.profesores.map((p) => [p.id, p]));
  const cursoPorId = Object.fromEntries(D.cursos.map((c) => [c.id, c]));
  const cursosDe = (profeId) => D.cursos.filter((c) => c.profesores.includes(profeId));
  const partesDe = (progId) => D.cursos.filter((c) => c.programa === progId);

  const urlInfo = (c) => (c.slug ? `${D.contacto.portal}${c.slug}/p` : D.contacto.portal);
  const urlWhatsapp = (texto) => `https://api.whatsapp.com/send?phone=${D.contacto.whatsapp}&text=${encodeURIComponent(texto)}`;
  const ICONO_WA = '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4.2-.4.7-1.4.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.7 11.8 11.8 0 0 0 4.5 4c1.7.7 2.4.8 3.2.6a2.7 2.7 0 0 0 1.8-1.3 2.2 2.2 0 0 0 .2-1.3c-.1-.1-.3-.2-.5-.3Z"/></svg>';
  const ICONO_FLECHA = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="square"/></svg>';

  /* ---------- Dibujo topográfico (determinista por semilla) ---------- */
  function semilla(str) {
    let h = 2166136261;
    for (const ch of str) h = Math.imul(h ^ ch.charCodeAt(0), 16777619);
    return () => {
      h += 0x6d2b79f5;
      let t = h;
      t = Math.imul(t ^ (t >>> 15), t | 1);
      t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }

  function topo(id, { w = 400, h = 150, anillos = 11, radio = 1, trazo = "#111", grosor = 1.1, mancha = true, cx: cxFijo, cy: cyFijo } = {}) {
    const r = semilla(id);
    const cx = cxFijo ?? w * (0.25 + r() * 0.5);
    const cy = cyFijo ?? h * (0.3 + r() * 0.4);
    const maxR = Math.max(w, h) * 0.62 * radio;
    const fases = [r() * 6.3, r() * 6.3, r() * 6.3];
    const amps = [0.1 + r() * 0.08, 0.05 + r() * 0.06, 0.02 + r() * 0.03];
    const estira = 0.75 + r() * 0.5;
    let caminos = "";
    for (let k = 1; k <= anillos; k++) {
      const base = (maxR * k) / anillos;
      let d = "";
      for (let i = 0; i <= 96; i++) {
        const t = (i / 96) * Math.PI * 2;
        const f = 1 + amps[0] * Math.sin(2 * t + fases[0] + k * 0.18) + amps[1] * Math.sin(3 * t + fases[1] - k * 0.12) + amps[2] * Math.sin(5 * t + fases[2] + k * 0.3);
        const x = cx + Math.cos(t) * base * f * estira;
        const y = cy + Math.sin(t) * base * f;
        d += (i ? "L" : "M") + x.toFixed(1) + " " + y.toFixed(1);
      }
      caminos += `<path d="${d}Z"/>`;
    }
    const m = mancha
      ? `<circle cx="${(cx + (r() - 0.5) * maxR * 0.7).toFixed(1)}" cy="${(cy + (r() - 0.5) * maxR * 0.5).toFixed(1)}" r="${(maxR * (0.28 + r() * 0.14)).toFixed(1)}" fill="#5cbb6a"/>`
      : "";
    return `<svg viewBox="0 0 ${w} ${h}" preserveAspectRatio="xMidYMid slice" aria-hidden="true">${m}<g fill="none" stroke="${trazo}" stroke-width="${grosor}" vector-effect="non-scaling-stroke">${caminos}</g></svg>`;
  }

  /* ---------- Portada ---------- */
  $("#arte-portada").innerHTML = topo("portada-edco", { w: 520, h: 520, anillos: 16, radio: 0.66, cx: 260, cy: 260, grosor: 1.3 });
  $("#topo-contacto").innerHTML = topo("contacto-edco", { w: 560, h: 560, anillos: 14, radio: 0.55, trazo: "#fff", mancha: false, cx: 280, cy: 280 });
  $("#topo-contacto svg").classList.add("topo");

  const profesActivos = D.profesores.length;
  $("#cifras").innerHTML = [
    [D.cursos.length, "cursos, talleres y programas"],
    [profesActivos, "profesores"],
    [D.corporativos.casos.length, "aliados corporativos"]
  ].map(([n, t]) => `<div><strong>${n}</strong><span>${t}</span></div>`).join("");

  /* ---------- Cursos ---------- */
  const filtro = { area: "", tipo: "", estado: "", texto: "" };
  const tipos = [...new Set(D.cursos.map((c) => c.tipo))];
  $("#filtro-tipo").insertAdjacentHTML("beforeend", tipos.map((t) => `<option value="${esc(t)}">${esc(t)}</option>`).join(""));

  function pintarChips() {
    const chips = [{ id: "", nombre: "Todas las áreas" }, ...D.areas].map((a) => {
      const n = a.id ? D.cursos.filter((c) => c.area === a.id).length : D.cursos.length;
      return `<button class="chip" data-area="${a.id}" aria-pressed="${filtro.area === a.id}">${esc(a.nombre)} · ${n}</button>`;
    });
    $("#filtro-area").innerHTML = chips.join("");
  }

  const indice = Object.fromEntries(D.cursos.map((c) => [c.id, sinTildes([
    c.titulo, c.tipo, areaPorId[c.area]?.nombre, c.modalidad, ...c.descripcion,
    ...c.profesores.map((p) => profePorId[p]?.nombre)
  ].join(" "))]));

  function tarjeta(c) {
    const horas = c.horas ? `${c.horas} ${c.horas === 1 ? "hora" : "horas"}` : "";
    return `<button class="tarjeta" data-curso="${c.id}" aria-label="${esc(c.titulo)} · ${esc(ESTADOS[c.estado] ?? "")}: ver detalle">
      <div class="cabeza"><span class="tipo">${esc(c.tipo)}</span><h3>${esc(c.titulo)}</h3></div>
      <div class="meta"><span class="mod">${esc(c.modalidad)}</span>${horas ? `<span>${horas}</span>` : ""}</div>
      <div class="dibujo">${c.imagen ? `<img src="${esc(c.imagen)}" alt="" loading="lazy">` : topo(c.id)}</div>
      <div class="pie"><span class="estado ${esc(c.estado)}">${esc(ESTADOS[c.estado] ?? "")}</span><span class="area-eti">${esc(areaPorId[c.area]?.nombre)}</span></div>
    </button>`;
  }

  function pintarCursos() {
    const q = sinTildes(filtro.texto.trim());
    const lista = D.cursos
      .filter((c) => (!filtro.area || c.area === filtro.area) && (!filtro.tipo || c.tipo === filtro.tipo) && (!filtro.estado || c.estado === filtro.estado))
      .filter((c) => !q || q.split(/\s+/).every((p) => indice[c.id].includes(p)))
      .sort((a, b) => ORDEN_ESTADO[a.estado] - ORDEN_ESTADO[b.estado]);
    $("#rejilla-cursos").innerHTML = lista.length
      ? lista.map(tarjeta).join("")
      : `<p class="vacio">No encontramos cursos con esos filtros. <button class="enlace-chip" id="limpiar">Ver todos</button></p>`;
    $("#conteo").textContent = `${lista.length} de ${D.cursos.length}`;
  }

  $("#filtro-area").addEventListener("click", (e) => {
    const b = e.target.closest("[data-area]");
    if (!b) return;
    filtro.area = b.dataset.area;
    pintarChips();
    $(`#filtro-area [data-area="${filtro.area}"]`).focus();
    pintarCursos();
  });
  $("#filtro-tipo").addEventListener("change", (e) => { filtro.tipo = e.target.value; pintarCursos(); });
  $("#filtro-estado").addEventListener("change", (e) => { filtro.estado = e.target.value; pintarCursos(); });
  $("#buscar").addEventListener("input", (e) => { filtro.texto = e.target.value; pintarCursos(); });
  $("#rejilla-cursos").addEventListener("click", (e) => {
    if (e.target.id === "limpiar") {
      Object.assign(filtro, { area: "", tipo: "", estado: "", texto: "" });
      $("#buscar").value = ""; $("#filtro-tipo").value = ""; $("#filtro-estado").value = "";
      pintarChips(); pintarCursos();
      return;
    }
    const t = e.target.closest("[data-curso]");
    if (t) abrirCurso(t.dataset.curso);
  });

  /* ---------- Corporativos ---------- */
  const C = D.corporativos;
  $("#corp-intro").innerHTML = `
    <div class="recuadro">${esc(C.intro)}</div>
    <div>
      <p class="pregunta">${esc(C.pregunta)}</p>
      ${C.voces.map((v) => `<blockquote class="voz"><p>${esc(v.texto)}</p><cite>${esc(v.rol)} ${esc(v.autor)}</cite></blockquote>`).join("")}
    </div>`;
  $("#casos").innerHTML = C.casos.map((k, i) => `
    <article class="caso">
      <div class="lado">
        ${topo("caso-" + i, { w: 240, h: 240, anillos: 9, radio: 0.55, trazo: "#fff", mancha: false, cx: 120, cy: 120 }).replace("<svg", '<svg class="topo"')}
        ${k.logo ? `<span class="logo-empresa"><img src="${esc(k.logo)}" alt="${esc(k.cliente)}"></span>` : ""}
        <span class="eti">Curso diseñado para</span>
        <h3>${esc(k.cliente)}</h3>
        <ul class="cursos-dis">${k.cursos.map((c) => `<li>${esc(c)}</li>`).join("")}</ul>
        <a href="${esc(k.web)}" target="_blank" rel="noopener">Conocer la organización ↗</a>
      </div>
      <div class="cuerpo">
        <div><h4>El reto</h4><ul class="retos">${k.retos.map((r) => `<li>${esc(r)}</li>`).join("")}</ul></div>
        <div><h4>Resultados</h4><ol class="logros">${k.logros.map((r) => `<li>${esc(r)}</li>`).join("")}</ol></div>
        <p class="cierre">${esc(k.cierre)}</p>
      </div>
    </article>`).join("");
  $("#wa-corp").href = urlWhatsapp("Hola, me interesa un curso corporativo de Educación Continua de la Facultad de Educación.");
  $("#wa-corp").insertAdjacentHTML("afterbegin", ICONO_WA);

  /* ---------- Profesores ---------- */
  const iniciales = (n) => n.split(/\s+/).filter((p) => !/^(de|del|la)$/i.test(p)).slice(0, 2).map((p) => p[0]).join("");
  const nombreMarca = (n) => {
    const p = n.split(/\s+/);
    const ultimo = p.pop();
    return `${esc(p.join(" "))} <i>${esc(ultimo)}</i>`;
  };
  const resumenCursos = (p) => {
    const cs = cursosDe(p.id);
    if (!cs.length) return p.nota || "";
    return cs.map((c) => c.titulo.split(":")[0]).join(" · ");
  };
  $("#rejilla-profes").innerHTML = D.profesores.map((p) => `
    <button class="profe" data-profe="${p.id}" aria-label="${esc(p.nombre)}: ver perfil">
      <div class="marco"><div class="cara">${p.imagen ? `<img src="${esc(p.imagen)}" alt="" loading="lazy">` : `${topo("profe-" + p.id, { w: 300, h: 300, anillos: 10, trazo: "#c9c9c9", mancha: false })}<span class="iniciales">${esc(iniciales(p.nombre))}</span>`}</div></div>
      <p class="nombre">${nombreMarca(p.nombre)}</p>
      ${p.cargo ? `<p class="cargo">${esc(p.cargo)}</p>` : ""}
      <p class="sus-cursos">${esc(resumenCursos(p))}</p>
    </button>`).join("");
  $("#rejilla-profes").addEventListener("click", (e) => {
    const b = e.target.closest("[data-profe]");
    if (b) abrirProfe(b.dataset.profe);
  });

  /* ---------- Contacto ---------- */
  $("#acciones-contacto").innerHTML = `
    <a class="boton negro" href="${urlWhatsapp("Hola, quisiera información sobre los cursos de Educación Continua de la Facultad de Educación.")}" target="_blank" rel="noopener">${ICONO_WA} WhatsApp</a>
    <a class="boton borde" href="mailto:${D.contacto.correo}">${esc(D.contacto.correo)}</a>
    <a class="boton borde" href="${D.contacto.portal}" target="_blank" rel="noopener">Portal Educación Continua ${ICONO_FLECHA}</a>`;

  /* ---------- Diálogos ---------- */
  const dlg = $("#dlg");
  let volverA = "";

  function mostrar(html, hash, seccion) {
    dlg.innerHTML = html;
    if (!dlg.open) {
      volverA = seccion;
      dlg.showModal();
    }
    dlg.scrollTop = 0;
    $("#dlg-titulo").focus();
    history.replaceState(null, "", hash);
  }

  function abrirCurso(id) {
    const c = cursoPorId[id];
    if (!c) return;
    const ficha = [
      ["Formato", c.tipo],
      ["Duración", c.horas && `${c.horas} horas`],
      ["Sesiones", c.sesiones],
      ["Semanas", c.semanas],
      ["Modalidad", c.modalidad],
      ["Horario", c.horario],
      ["Fechas", c.fechas]
    ].filter(([, v]) => v);
    const programa = c.programa && cursoPorId[c.programa];
    const partes = partesDe(c.id);
    const profes = c.profesores.map((p) => profePorId[p]).filter(Boolean);
    mostrar(`
      <div class="dlg-cab">
        <span class="tipo">${esc(areaPorId[c.area]?.nombre)}</span>
        <h2 id="dlg-titulo" tabindex="-1">${esc(c.titulo)}</h2>
        <button class="cerrar" data-cerrar aria-label="Cerrar">×</button>
      </div>
      ${c.imagen ? `<img class="dlg-foto" src="${esc(c.imagen)}" alt="">` : ""}
      <div class="dlg-cuerpo">
        <p style="margin:0 0 18px"><span class="estado ${esc(c.estado)}">${esc(ESTADOS[c.estado] ?? "")}</span></p>
        <dl class="ficha">${ficha.map(([k, v]) => `<div${String(v).length > 22 ? ' class="ancho"' : ""}><dt>${k}</dt><dd>${esc(v)}</dd></div>`).join("")}</dl>
        <div class="texto">${c.descripcion.length
          ? c.descripcion.map((p) => `<p>${esc(p)}</p>`).join("")
          : `<p class="aviso">La descripción detallada de este curso está en preparación. Escríbenos y te contamos más.</p>`}</div>
        ${c.competencia ? `<div class="competencia"><b>Competencia</b>${esc(c.competencia)}</div>` : ""}
        ${programa ? `<div class="bloque-dlg"><h3>Forma parte del programa</h3><div class="lista-enlaces"><button class="enlace-chip" data-curso="${programa.id}">${esc(programa.titulo)}</button></div></div>` : ""}
        ${partes.length ? `<div class="bloque-dlg"><h3>Incluye</h3><div class="lista-enlaces">${partes.map((p) => `<button class="enlace-chip" data-curso="${p.id}">${esc(p.titulo)}</button>`).join("")}</div></div>` : ""}
        ${profes.length ? `<div class="bloque-dlg"><h3>Profesores</h3><div class="lista-enlaces">${profes.map((p) => `<button class="enlace-chip" data-profe="${p.id}">${esc(p.nombre)}</button>`).join("")}</div></div>` : ""}
        ${/^https:\/\//.test(c.insignia || "") ? `<p class="bloque-dlg"><a href="${esc(c.insignia)}" target="_blank" rel="noopener">Ver la insignia digital que obtendrás ↗</a></p>` : ""}
        <div class="dlg-acciones">
          <a class="boton negro" href="${urlInfo(c)}" target="_blank" rel="noopener">Más información e inscripciones ${ICONO_FLECHA}</a>
          <a class="boton" href="${urlWhatsapp(`Hola, me interesa: ${c.titulo}`)}" target="_blank" rel="noopener">${ICONO_WA} Preguntar por WhatsApp</a>
        </div>
      </div>`, `#curso/${c.id}`, "#cursos");
  }

  function abrirProfe(id) {
    const p = profePorId[id];
    if (!p) return;
    const cs = cursosDe(p.id);
    mostrar(`
      <div class="dlg-cab">
        <span class="tipo">${esc(p.cargo || "Profesor(a)")}</span>
        <h2 id="dlg-titulo" tabindex="-1" style="text-transform:none">${nombreMarca(p.nombre)}</h2>
        <button class="cerrar" data-cerrar aria-label="Cerrar">×</button>
      </div>
      <div class="dlg-cuerpo dlg-profe">
        ${p.imagen ? `<img class="dlg-retrato" src="${esc(p.imagen)}" alt="${esc(p.nombre)}">` : ""}
        <div class="texto">${p.bio ? `<p>${esc(p.bio)}</p>` : `<p class="aviso">Perfil en actualización.</p>`}</div>
        ${cs.length ? `<div class="bloque-dlg"><h3>Enseña en</h3><div class="lista-enlaces">${cs.map((c) => `<button class="enlace-chip" data-curso="${c.id}">${esc(c.titulo)}</button>`).join("")}</div></div>` : ""}
      </div>`, `#profesor/${p.id}`, "#profesores");
  }

  dlg.addEventListener("click", (e) => {
    if (e.target === dlg || e.target.closest("[data-cerrar]")) return dlg.close();
    const c = e.target.closest("[data-curso]");
    if (c) return abrirCurso(c.dataset.curso);
    const p = e.target.closest("[data-profe]");
    if (p) abrirProfe(p.dataset.profe);
  });
  dlg.addEventListener("close", () => history.replaceState(null, "", volverA || location.pathname));

  function desdeHash() {
    const [tipo, id] = location.hash.slice(1).split("/");
    if (tipo === "curso") abrirCurso(id);
    else if (tipo === "profesor") abrirProfe(id);
  }
  window.addEventListener("hashchange", desdeHash);

  /* ---------- Menú móvil ---------- */
  const menu = $(".menu-btn"), nav = $("#nav");
  menu.addEventListener("click", () => {
    const abierto = nav.classList.toggle("abierto");
    menu.setAttribute("aria-expanded", abierto);
  });
  nav.addEventListener("click", (e) => {
    if (e.target.closest("a")) { nav.classList.remove("abierto"); menu.setAttribute("aria-expanded", "false"); }
  });

  pintarChips();
  pintarCursos();
  desdeHash();
})();
