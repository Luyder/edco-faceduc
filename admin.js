/* Editor de cursos, profesores y noticias de Educación Continua.
   Lee datos.js, edita una copia y publica el nuevo datos.js (y las fotos subidas)
   directamente en el repositorio de GitHub con la API de contenidos.
   Sin token de GitHub, descarga los archivos para subirlos a mano. */
(() => {
  const $ = (s, el = document) => el.querySelector(s);
  const clone = (o) => JSON.parse(JSON.stringify(o));
  const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const slug = (s) => String(s || "").normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "").slice(0, 60);

  const TIPOS = ["Curso", "Taller", "Programa", "Certificado profesional", "Certificado de competencias", "Diplomado", "Microcredencial", "Materia de posgrado", "Materia de pregrado"];
  const ESTADOS = { abierto: "Inscripciones abiertas", proximamente: "Próximamente", desarrollo: "En desarrollo", finalizado: "Finalizado" };
  const MODALIDADES = ["Virtual", "Presencial", "Semipresencial", "Blended", "Híbrida"];
  const { generar, leer } = window.EDCO_FORMATO;
  const CATEGORIAS = ["Anuncio", "Convocatoria", "Evento", "Logro", "Alianza", "Prensa"];
  const PREFIJO = { "c:": "cursos", "p:": "profes", "n:": "noticias" };
  const HASH = { "c:": "curso", "p:": "profesor", "n:": "noticia" };
  const hoy = () => { const d = new Date(); return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`; };

  const LS = (() => { try { localStorage.setItem("__t", "1"); localStorage.removeItem("__t"); return localStorage; } catch (e) { return null; } })();

  window.EDCO.noticias = window.EDCO.noticias || [];
  let publicado = clone(window.EDCO);
  let D = clone(publicado);
  let base = generar(D);
  let guardados = idsGuardados();
  let pendientes = {};          // ruta → { b64, dataUrl } de fotos subidas sin publicar
  let sel = seleccionInicial();

  function seleccionInicial() {
    return { cursos: D.cursos[0]?.id, profes: D.profesores[0]?.id, noticias: noticiasOrdenadas()[0]?.id };
  }
  // Las noticias se muestran por fecha (la más reciente primero), igual que en el sitio.
  function noticiasOrdenadas() {
    return [...D.noticias].sort((a, b) => String(b.fecha || "").localeCompare(String(a.fecha || "")));
  }

  function idsGuardados() {
    return new Set([...D.cursos.map((c) => "c:" + c.id), ...D.profesores.map((p) => "p:" + p.id), ...D.noticias.map((n) => "n:" + n.id)]);
  }

  /* ---------- Estado de la barra ---------- */
  const sucio = () => generar(D) !== base || Object.keys(pendientes).length > 0;
  function problemas() {
    const p = [];
    const ids = new Set();
    D.cursos.forEach((c) => {
      if (!c.titulo?.trim()) p.push("Hay un curso sin título.");
      if (!c.id) p.push(`«${c.titulo || "Curso sin título"}» no tiene identificador.`);
      else if (ids.has("c" + c.id)) p.push(`Identificador repetido: ${c.id}`);
      ids.add("c" + c.id);
      if (c.insignia && !/^https:\/\//.test(c.insignia)) p.push(`La insignia de «${c.titulo}» debe empezar por https://`);
    });
    D.profesores.forEach((x) => {
      if (!x.nombre?.trim()) p.push("Hay un profesor sin nombre.");
      if (ids.has("p" + x.id)) p.push(`Identificador repetido: ${x.id}`);
      ids.add("p" + x.id);
    });
    D.noticias.forEach((n) => {
      if (!n.titulo?.trim()) p.push("Hay una noticia sin título.");
      if (ids.has("n" + n.id)) p.push(`Identificador repetido: ${n.id}`);
      ids.add("n" + n.id);
      if (!/^\d{4}-\d{2}-\d{2}$/.test(n.fecha || "")) p.push(`La noticia «${n.titulo || "sin título"}» necesita una fecha.`);
      if (n.enlace && !/^https?:\/\//.test(n.enlace)) p.push(`El enlace de la noticia «${n.titulo}» debe empezar por https://`);
    });
    return p;
  }
  function cambio(repintarListas = true) {
    const s = sucio();
    const prob = problemas();
    $("#barra").classList.toggle("sucio", s);
    $("#estado").textContent = prob.length ? prob[0] : s ? "Cambios sin publicar" : "Sin cambios";
    $("#guardar").disabled = !s || prob.length > 0;
    $("#descartar").hidden = !s;
    if (repintarListas) { pintarListaCursos(); pintarListaProfes(); pintarListaNoticias(); }
  }

  /* ---------- Utilidades de formulario ---------- */
  function campo(etiqueta, control, ayuda, ancho) {
    const l = document.createElement("label");
    l.className = "ad-campo" + (ancho ? " ancho" : "");
    l.innerHTML = `<span>${esc(etiqueta)}</span>`;
    l.appendChild(control);
    if (ayuda) l.insertAdjacentHTML("beforeend", `<small>${ayuda}</small>`);
    return l;
  }
  function texto(valor, alCambiar, opc = {}) {
    const i = document.createElement(opc.area ? "textarea" : "input");
    i.className = "campo";
    if (!opc.area) i.type = opc.tipo || "text";
    if (opc.placeholder) i.placeholder = opc.placeholder;
    if (opc.min != null) i.min = opc.min;
    i.value = valor ?? "";
    i.addEventListener("input", () => { alCambiar(i.value, i); cambio(opc.repintar !== false); });
    return i;
  }
  function selector(valor, opciones, alCambiar, vacio) {
    const s = document.createElement("select");
    s.className = "campo";
    s.innerHTML = (vacio != null ? `<option value="">${esc(vacio)}</option>` : "") +
      opciones.map(([v, t]) => `<option value="${esc(v)}"${v === valor ? " selected" : ""}>${esc(t)}</option>`).join("");
    s.addEventListener("change", () => { alCambiar(s.value); cambio(); });
    return s;
  }
  const numero = (v) => (v === "" ? "" : Math.max(0, parseInt(v, 10) || 0));
  const fotoUrl = (ruta) => (ruta && pendientes[ruta] ? pendientes[ruta].dataUrl : ruta);

  function bloqueFoto(item, carpeta, cuadrada) {
    const caja = document.createElement("div");
    caja.className = "ad-foto" + (cuadrada ? " cuadrada" : "");
    const pintar = () => {
      caja.innerHTML = item.imagen ? `<img src="${esc(fotoUrl(item.imagen))}" alt="">` : `<span class="vacia">Sin foto</span>`;
      const subir = document.createElement("button");
      subir.type = "button"; subir.className = "boton";
      subir.textContent = item.imagen ? "Cambiar foto" : "Subir foto";
      const archivo = document.createElement("input");
      archivo.type = "file"; archivo.accept = "image/*"; archivo.hidden = true;
      subir.addEventListener("click", () => archivo.click());
      caja.appendChild(archivo);
      archivo.addEventListener("change", async (e) => {
        const f = e.target.files[0];
        if (!f) return;
        try {
          const r = await procesarFoto(f, cuadrada);
          const ruta = `assets/${carpeta}/${item.id}-${Date.now().toString(36)}.${r.ext}`;
          if (item.imagen && pendientes[item.imagen]) delete pendientes[item.imagen];
          pendientes[ruta] = r;
          item.imagen = ruta;
          pintar(); cambio();
        } catch (err) { aviso("No se pudo leer la imagen: " + err.message, true); }
      });
      caja.appendChild(subir);
      if (item.imagen) {
        const q = document.createElement("button");
        q.type = "button"; q.className = "boton"; q.textContent = "Quitar foto";
        q.addEventListener("click", () => { delete pendientes[item.imagen]; item.imagen = ""; pintar(); cambio(); });
        caja.appendChild(q);
      }
    };
    pintar();
    return caja;
  }

  /* Reduce la foto en el navegador y la convierte a WebP (o JPEG si el navegador no sabe). */
  async function procesarFoto(archivo, cuadrada) {
    const bm = await createImageBitmap(archivo);
    let sx = 0, sy = 0, sw = bm.width, sh = bm.height, w, h;
    if (cuadrada) {
      const lado = Math.min(sw, sh);
      sx = (sw - lado) / 2; sy = (sh - lado) / 3; sw = sh = lado;
      w = h = Math.min(400, lado);
    } else {
      w = Math.min(1000, sw); h = Math.round(sh * (w / sw));
    }
    const c = document.createElement("canvas");
    c.width = w; c.height = h;
    c.getContext("2d").drawImage(bm, sx, sy, sw, sh, 0, 0, w, h);
    let dataUrl = c.toDataURL("image/webp", 0.8);
    if (!dataUrl.startsWith("data:image/webp")) dataUrl = c.toDataURL("image/jpeg", 0.82);
    return { dataUrl, b64: dataUrl.split(",")[1], ext: dataUrl.startsWith("data:image/webp") ? "webp" : "jpg" };
  }

  function botonesItem(lista, item, clave, alNuevo, sinOrden) {
    const caja = document.createElement("div");
    caja.className = "ad-acciones-item";
    const i = lista.indexOf(item);
    const b = (t, fn, cls = "") => {
      const x = document.createElement("button");
      x.type = "button"; x.className = "boton " + cls; x.textContent = t;
      x.addEventListener("click", fn);
      caja.appendChild(x);
      return x;
    };
    if (!sinOrden) {
      b("↑ Subir", () => { [lista[i - 1], lista[i]] = [lista[i], lista[i - 1]]; cambio(); pintarForms(); }).disabled = i === 0;
      b("↓ Bajar", () => { [lista[i + 1], lista[i]] = [lista[i], lista[i + 1]]; cambio(); pintarForms(); }).disabled = i === lista.length - 1;
    }
    b("Duplicar", () => alNuevo(clone(item)));
    b(item.oculto ? "Mostrar en el sitio" : "Ocultar", () => { item.oculto = !item.oculto; cambio(); pintarForms(); }, item.oculto ? "negro" : "");
    b("Eliminar", () => {
      const nombre = item.titulo || item.nombre || "este elemento";
      if (!confirm(`¿Eliminar «${nombre}»? Desaparecerá del sitio al publicar.`)) return;
      lista.splice(i, 1);
      if (clave === "cursos") {
        D.cursos.forEach((c) => { if (c.programa === item.id) c.programa = ""; });
        D.noticias.forEach((n) => { if (n.cursos) n.cursos = n.cursos.filter((x) => x !== item.id); });
      }
      if (clave === "profes") D.cursos.forEach((c) => { c.profesores = c.profesores.filter((p) => p !== item.id); });
      if (item.imagen) delete pendientes[item.imagen];
      sel[clave] = clave === "noticias" ? noticiasOrdenadas()[0]?.id : lista[Math.min(i, lista.length - 1)]?.id;
      cambio(); pintarForms();
    }, "peligro");
    return caja;
  }

  function renombrar(prefijo, viejo, nuevo) {
    if (viejo === nuevo) return;
    D.cursos.forEach((c) => {
      if (prefijo === "c:" && c.programa === viejo) c.programa = nuevo;
      if (prefijo === "p:") c.profesores = c.profesores.map((p) => (p === viejo ? nuevo : p));
    });
    if (prefijo === "c:") D.noticias.forEach((n) => { if (n.cursos) n.cursos = n.cursos.map((x) => (x === viejo ? nuevo : x)); });
  }
  function idUnico(base, lista, propio) {
    let id = base || "nuevo", n = 2;
    while (lista.some((x) => x !== propio && x.id === id)) id = `${base}-${n++}`;
    return id;
  }
  function campoId(item, lista, prefijo, origen) {
    const fijo = guardados.has(prefijo + item.id);
    const i = texto(item.id, (v, el) => {
      const viejo = item.id;
      item.id = idUnico(slug(v), lista, item); item.__idManual = true;
      renombrar(prefijo, viejo, item.id);
      sel[PREFIJO[prefijo]] = item.id;
      el.classList.toggle("invalido", !item.id);
    }, { repintar: true });
    i.disabled = fijo;
    i.classList.add("ad-id");
    return campo("Identificador", i, fijo
      ? "Fijo: se usa en los enlaces directos (…/#" + HASH[prefijo] + "/" + esc(item.id) + ")."
      : "Se genera del " + origen + "; aparece en el enlace directo.");
  }

  /* ---------- Cursos ---------- */
  function pintarListaCursos() {
    const q = slug($("#filtro-cursos").value).replace(/-/g, " ");
    const ol = $("#lista-cursos");
    ol.innerHTML = D.cursos.filter((c) => !q || slug(c.titulo).replace(/-/g, " ").includes(q)).map((c) => `
      <li class="${c.oculto ? "oculto" : ""}"><button data-id="${esc(c.id)}" aria-current="${c.id === sel.cursos}">
        ${c.imagen ? `<img class="mini" src="${esc(fotoUrl(c.imagen))}" alt="">` : `<span class="mini"></span>`}
        <span><span class="punto ${esc(c.estado)}" style="display:inline-block;margin-right:6px"></span>${esc(c.titulo || "(sin título)")}
        <small>${c.oculto ? "OCULTO · " : ""}${c.manual ? "MANUAL · " : ""}${esc(c.tipo)} · ${esc(ESTADOS[c.estado] || "")}</small></span>
      </button></li>`).join("") || `<li class="ad-vacio">Sin resultados</li>`;
  }

  function pintarFormCurso() {
    const f = $("#form-curso");
    const c = D.cursos.find((x) => x.id === sel.cursos);
    f.innerHTML = "";
    if (!c) { f.innerHTML = `<p class="ad-vacio">Elige un curso de la lista o crea uno nuevo.</p>`; return; }
    f.insertAdjacentHTML("beforeend", `<h2>${esc(c.titulo || "Nuevo curso")}</h2><p class="sub">${c.oculto ? "<b class=\"ad-oculto\">Oculto: no aparece en el sitio.</b> " : ""}Los cambios se ven en el sitio después de publicar.</p>`);
    f.appendChild(botonesItem(D.cursos, c, "cursos", (copia) => {
      copia.titulo = (copia.titulo || "") + " (copia)";
      copia.id = idUnico(slug(copia.titulo), D.cursos); copia.imagen = "";
      D.cursos.splice(D.cursos.indexOf(c) + 1, 0, copia);
      sel.cursos = copia.id; cambio(); pintarForms();
    }));

    if (c.slug) {
      const m = document.createElement("label");
      m.className = "ad-check ad-manual";
      m.innerHTML = `<input type="checkbox" ${c.manual ? "checked" : ""}> <span><b>No actualizar desde el portal.</b> Marca esta casilla si cambiaste a mano datos que vienen del portal (título, estado, fechas, descripción…) y no quieres que «Actualizar desde el portal» los reemplace.</span>`;
      m.querySelector("input").addEventListener("change", (e) => { c.manual = e.target.checked; cambio(); });
      f.appendChild(m);
    }

    const g = document.createElement("div");
    g.className = "ad-rejilla";
    g.appendChild(campo("Título", texto(c.titulo, (v) => {
      c.titulo = v;
      if (!guardados.has("c:" + c.id) && !c.__idManual) { const viejo = c.id; c.id = idUnico(slug(v), D.cursos, c); renombrar("c:", viejo, c.id); sel.cursos = c.id; $("#form-curso .ad-id").value = c.id; }
      $("#form-curso h2").textContent = v || "Nuevo curso";
    }), null, true));
    g.appendChild(campoId(c, D.cursos, "c:", "título"));
    g.appendChild(campo("Estado", selector(c.estado, Object.entries(ESTADOS), (v) => { c.estado = v; })));
    g.appendChild(campo("Formato", selector(c.tipo, TIPOS.map((t) => [t, t]), (v) => { c.tipo = v; })));
    g.appendChild(campo("Área", selector(c.area, D.areas.map((a) => [a.id, a.nombre]), (v) => { c.area = v; })));
    g.appendChild(campo("Modalidad", selector(c.modalidad, MODALIDADES.map((m) => [m, m]), (v) => { c.modalidad = v; })));
    g.appendChild(campo("Horas", texto(c.horas, (v) => { c.horas = numero(v); }, { tipo: "number", min: 0 })));
    g.appendChild(campo("Sesiones", texto(c.sesiones, (v) => { c.sesiones = numero(v); }, { tipo: "number", min: 0 })));
    g.appendChild(campo("Semanas", texto(c.semanas, (v) => { c.semanas = numero(v); }, { tipo: "number", min: 0 })));
    g.appendChild(campo("Horario", texto(c.horario, (v) => { c.horario = v; }, { placeholder: "Lunes y miércoles · 6:00 p. m. – 8:00 p. m." }), null, true));
    g.appendChild(campo("Fechas", texto(c.fechas, (v) => { c.fechas = v; }, { placeholder: "6 de octubre – 24 de noviembre de 2026" }), "Déjalo vacío si aún no hay fechas.", true));
    g.appendChild(campo("Inscripciones hasta", texto(c.inscripcionHasta, (v) => { c.inscripcionHasta = v; }, { placeholder: "12 de noviembre de 2026" }), null, true));
    f.appendChild(g);

    f.insertAdjacentHTML("beforeend", `<p class="ad-seccion">Foto</p>`);
    f.appendChild(bloqueFoto(c, "cursos", false));

    f.insertAdjacentHTML("beforeend", `<p class="ad-seccion">Contenido</p>`);
    const g2 = document.createElement("div");
    g2.className = "ad-rejilla";
    g2.appendChild(campo("Descripción", texto(c.descripcion.join("\n\n"), (v) => {
      c.descripcion = v.split(/\n\s*\n/).map((p) => p.trim()).filter(Boolean);
    }, { area: true, repintar: false }), "Separa los párrafos con una línea en blanco.", true));
    g2.appendChild(campo("Competencia (opcional)", texto(c.competencia, (v) => { c.competencia = v; }, { area: true, repintar: false }), null, true));
    f.appendChild(g2);

    f.insertAdjacentHTML("beforeend", `<p class="ad-seccion">Profesores</p>`);
    const ch = document.createElement("div");
    ch.className = "ad-checks";
    D.profesores.forEach((p) => {
      const l = document.createElement("label");
      l.innerHTML = `<input type="checkbox" ${c.profesores.includes(p.id) ? "checked" : ""}> ${esc(p.nombre)}`;
      l.querySelector("input").addEventListener("change", (e) => {
        c.profesores = e.target.checked ? [...c.profesores, p.id] : c.profesores.filter((x) => x !== p.id);
        cambio();
      });
      ch.appendChild(l);
    });
    f.appendChild(ch);

    f.insertAdjacentHTML("beforeend", `<p class="ad-seccion">Enlaces</p>`);
    const g3 = document.createElement("div");
    g3.className = "ad-rejilla";
    const portal = texto(c.slug, (v) => { c.slug = v.trim().replace(/^https?:\/\/educacioncontinua\.uniandes\.edu\.co\//, "").replace(/\/p\/?$/, "").replace(/^\/|\/$/g, ""); });
    g3.appendChild(campo("Página en el portal de Uniandes", portal,
      "Pega la dirección completa o solo la parte final, por ejemplo <code>gamificacion-e-innovacion-educativa</code>. Vacío = lleva a la portada del portal.", true));
    g3.appendChild(campo("Forma parte del programa", selector(c.programa || "", D.cursos.filter((x) => x !== c && x.tipo === "Programa").map((x) => [x.id, x.titulo]), (v) => { c.programa = v; }, "— Ninguno —"), null, true));
    g3.appendChild(campo("Insignia digital (opcional)", texto(c.insignia, (v, el) => { c.insignia = v.trim(); el.classList.toggle("invalido", !!c.insignia && !/^https:\/\//.test(c.insignia)); }, { tipo: "url", placeholder: "https://…" }), null, true));
    f.appendChild(g3);
  }

  function nuevoCurso() {
    const c = { id: idUnico("nuevo-curso", D.cursos), titulo: "", slug: "", tipo: "Curso", area: D.areas[0].id, estado: "proximamente", modalidad: "Virtual", horas: "", sesiones: "", semanas: "", profesores: [], descripcion: [] };
    D.cursos.unshift(c);
    sel.cursos = c.id;
    $("#filtro-cursos").value = "";
    cambio(); pintarForms();
    $("#form-curso input")?.focus();
  }

  /* ---------- Profesores ---------- */
  function pintarListaProfes() {
    const q = slug($("#filtro-profes").value).replace(/-/g, " ");
    $("#lista-profes").innerHTML = D.profesores.filter((p) => !q || slug(p.nombre).replace(/-/g, " ").includes(q)).map((p) => `
      <li class="${p.oculto ? "oculto" : ""}"><button data-id="${esc(p.id)}" aria-current="${p.id === sel.profes}">
        ${p.imagen ? `<img class="mini" src="${esc(fotoUrl(p.imagen))}" alt="">` : `<span class="mini"></span>`}
        <span>${esc(p.nombre || "(sin nombre)")}<small>${p.oculto ? "OCULTO · " : ""}${esc(p.cargo || "")}</small></span>
      </button></li>`).join("") || `<li class="ad-vacio">Sin resultados</li>`;
  }

  function pintarFormProfe() {
    const f = $("#form-profe");
    const p = D.profesores.find((x) => x.id === sel.profes);
    f.innerHTML = "";
    if (!p) { f.innerHTML = `<p class="ad-vacio">Elige un profesor de la lista o crea uno nuevo.</p>`; return; }
    const cursos = D.cursos.filter((c) => c.profesores.includes(p.id));
    f.insertAdjacentHTML("beforeend", `<h2>${esc(p.nombre || "Nuevo profesor")}</h2><p class="sub">${p.oculto ? "<b class=\"ad-oculto\">Oculto: no aparece en el sitio.</b> " : ""}${cursos.length ? "Enseña en: " + cursos.map((c) => esc(c.titulo)).join(" · ") : "Asígnalo a sus cursos desde la pestaña Cursos."}</p>`);
    f.appendChild(botonesItem(D.profesores, p, "profes", (copia) => {
      copia.nombre += " (copia)"; copia.id = idUnico(slug(copia.nombre), D.profesores); copia.imagen = "";
      D.profesores.splice(D.profesores.indexOf(p) + 1, 0, copia);
      sel.profes = copia.id; cambio(); pintarForms();
    }));
    const g = document.createElement("div");
    g.className = "ad-rejilla";
    g.appendChild(campo("Nombre", texto(p.nombre, (v) => {
      p.nombre = v;
      if (!guardados.has("p:" + p.id) && !p.__idManual) { const viejo = p.id; p.id = idUnico(slug(v), D.profesores, p); renombrar("p:", viejo, p.id); sel.profes = p.id; $("#form-profe .ad-id").value = p.id; }
      $("#form-profe h2").textContent = v || "Nuevo profesor";
    }), null, true));
    g.appendChild(campoId(p, D.profesores, "p:", "nombre"));
    g.appendChild(campo("Cargo", texto(p.cargo, (v) => { p.cargo = v; }, { placeholder: "Profesora Asociada" })));
    g.appendChild(campo("Texto si no tiene cursos abiertos (opcional)", texto(p.nota, (v) => { p.nota = v; }, { placeholder: "Cursos corporativos" }), null, true));
    g.appendChild(campo("Biografía", texto(p.bio, (v) => { p.bio = v; }, { area: true, repintar: false }), null, true));
    f.appendChild(g);
    f.insertAdjacentHTML("beforeend", `<p class="ad-seccion">Foto</p>`);
    f.appendChild(bloqueFoto(p, "profes", true));
  }

  function nuevoProfe() {
    const p = { id: idUnico("nuevo-profesor", D.profesores), nombre: "", cargo: "", bio: "" };
    D.profesores.unshift(p);
    sel.profes = p.id;
    $("#filtro-profes").value = "";
    cambio(); pintarForms();
    $("#form-profe input")?.focus();
  }

  /* ---------- Noticias ---------- */
  function pintarListaNoticias() {
    const q = slug($("#filtro-noticias").value).replace(/-/g, " ");
    $("#lista-noticias").innerHTML = noticiasOrdenadas().filter((n) => !q || slug(n.titulo).replace(/-/g, " ").includes(q)).map((n) => `
      <li class="${n.oculto ? "oculto" : ""}"><button data-id="${esc(n.id)}" aria-current="${n.id === sel.noticias}">
        ${n.imagen ? `<img class="mini" src="${esc(fotoUrl(n.imagen))}" alt="">` : `<span class="mini"></span>`}
        <span>${esc(n.titulo || "(sin título)")}<small>${n.oculto ? "OCULTA · " : ""}${esc(n.fecha || "sin fecha")}${n.categoria ? " · " + esc(n.categoria) : ""}</small></span>
      </button></li>`).join("") || `<li class="ad-vacio">${D.noticias.length ? "Sin resultados" : "Aún no hay noticias"}</li>`;
  }

  function pintarFormNoticia() {
    const f = $("#form-noticia");
    const n = D.noticias.find((x) => x.id === sel.noticias);
    f.innerHTML = "";
    if (!n) { f.innerHTML = `<p class="ad-vacio">Elige una noticia de la lista o crea una nueva.</p>`; return; }
    f.insertAdjacentHTML("beforeend", `<h2>${esc(n.titulo || "Nueva noticia")}</h2><p class="sub">${n.oculto ? "<b class=\"ad-oculto\">Oculta: no aparece en el sitio.</b> " : ""}En el sitio se ordenan por fecha: la más reciente aparece destacada.</p>`);
    f.appendChild(botonesItem(D.noticias, n, "noticias", (copia) => {
      copia.titulo = (copia.titulo || "") + " (copia)";
      copia.id = idUnico(slug(copia.titulo), D.noticias); copia.imagen = "";
      D.noticias.push(copia);
      sel.noticias = copia.id; cambio(); pintarForms();
    }, true));

    const g = document.createElement("div");
    g.className = "ad-rejilla";
    g.appendChild(campo("Título", texto(n.titulo, (v) => {
      n.titulo = v;
      if (!guardados.has("n:" + n.id) && !n.__idManual) { n.id = idUnico(slug(v), D.noticias, n); sel.noticias = n.id; $("#form-noticia .ad-id").value = n.id; }
      $("#form-noticia h2").textContent = v || "Nueva noticia";
    }), null, true));
    g.appendChild(campoId(n, D.noticias, "n:", "título"));
    g.appendChild(campo("Fecha", texto(n.fecha, (v) => { n.fecha = v; }, { tipo: "date" })));
    const cat = texto(n.categoria, (v) => { n.categoria = v.trim(); }, { placeholder: "Anuncio" });
    cat.setAttribute("list", "categorias-noticia");
    const dl = document.createElement("datalist");
    dl.id = "categorias-noticia";
    dl.innerHTML = [...new Set([...CATEGORIAS, ...D.noticias.map((x) => x.categoria).filter(Boolean)])].map((c) => `<option value="${esc(c)}">`).join("");
    const cc = campo("Categoría", cat, "Elige una o escribe otra.");
    cc.appendChild(dl);
    g.appendChild(cc);
    f.appendChild(g);

    f.insertAdjacentHTML("beforeend", `<p class="ad-seccion">Foto (opcional)</p>`);
    f.appendChild(bloqueFoto(n, "noticias", false));

    f.insertAdjacentHTML("beforeend", `<p class="ad-seccion">Contenido</p>`);
    const g2 = document.createElement("div");
    g2.className = "ad-rejilla";
    g2.appendChild(campo("Resumen", texto(n.resumen, (v) => { n.resumen = v; }, { area: true, repintar: false }),
      "Una o dos frases. Se ve en la tarjeta y al inicio de la noticia completa.", true));
    g2.querySelector("textarea").style.minHeight = "90px";
    g2.appendChild(campo("Texto completo", texto((n.contenido || []).join("\n\n"), (v) => {
      n.contenido = v.split(/\n\s*\n/).map((p) => p.trim()).filter(Boolean);
    }, { area: true, repintar: false }), "Separa los párrafos con una línea en blanco. Se lee en la ventana que se abre al hacer clic.", true));
    f.appendChild(g2);

    f.insertAdjacentHTML("beforeend", `<p class="ad-seccion">Cursos relacionados (opcional)</p>`);
    const ch = document.createElement("div");
    ch.className = "ad-checks";
    D.cursos.forEach((c) => {
      const l = document.createElement("label");
      l.innerHTML = `<input type="checkbox" ${(n.cursos || []).includes(c.id) ? "checked" : ""}> ${esc(c.titulo)}`;
      l.querySelector("input").addEventListener("change", (e) => {
        const actuales = n.cursos || [];
        n.cursos = e.target.checked ? [...actuales, c.id] : actuales.filter((x) => x !== c.id);
        cambio();
      });
      ch.appendChild(l);
    });
    f.appendChild(ch);

    f.insertAdjacentHTML("beforeend", `<p class="ad-seccion">Botón con enlace (opcional)</p>`);
    const g3 = document.createElement("div");
    g3.className = "ad-rejilla";
    g3.appendChild(campo("Dirección", texto(n.enlace, (v, el) => { n.enlace = v.trim(); el.classList.toggle("invalido", !!n.enlace && !/^https?:\/\//.test(n.enlace)); }, { tipo: "url", placeholder: "https://…" }), "Por ejemplo, la nota completa en la web de la Universidad o un formulario.", true));
    g3.appendChild(campo("Texto del botón", texto(n.enlaceTexto, (v) => { n.enlaceTexto = v; }, { placeholder: "Más información" }), null, true));
    f.appendChild(g3);
  }

  function nuevaNoticia() {
    const n = { id: idUnico("nueva-noticia", D.noticias), titulo: "", fecha: hoy(), categoria: "", resumen: "", contenido: [], cursos: [] };
    D.noticias.push(n);
    sel.noticias = n.id;
    $("#filtro-noticias").value = "";
    cambio(); pintarForms();
    $("#form-noticia input")?.focus();
  }

  function pintarForms() { pintarFormCurso(); pintarFormProfe(); pintarFormNoticia(); pintarListaCursos(); pintarListaProfes(); pintarListaNoticias(); }

  /* ---------- Conexión con GitHub ---------- */
  function ghInicial() {
    let g = { owner: "", repo: "", branch: "main", folder: "", token: "" };
    const m = /^([a-z0-9-]+)\.github\.io$/i.exec(location.hostname);
    if (m) {
      g.owner = m[1];
      const partes = location.pathname.split("/").filter(Boolean);
      if (partes.length && /(\.html?|^admin|^index)$/.test(partes[partes.length - 1])) partes.pop();
      g.repo = partes.shift() || `${m[1]}.github.io`;
      g.folder = partes.join("/");
    }
    try { Object.assign(g, JSON.parse(LS?.getItem("edco_gh") || "{}")); } catch (e) {}
    return g;
  }
  const gh = ghInicial();
  const ghListo = () => gh.owner && gh.repo && gh.token;
  const recordar = () => !!LS?.getItem("edco_gh_recordar");
  function guardarGh() { if (recordar()) LS.setItem("edco_gh", JSON.stringify(gh)); }

  function pintarGitHub() {
    const f = $("#form-github");
    f.innerHTML = `<h2>Conexión con GitHub</h2>
      <p class="sub">El sitio vive en GitHub Pages. Para publicar desde este editor necesitas un token personal (se hace una sola vez):</p>
      <ol>
        <li>Entra a GitHub ▸ <b>Settings</b> ▸ <b>Developer settings</b> ▸ <b>Personal access tokens</b> ▸ <b>Fine-grained tokens</b> ▸ <b>Generate new token</b>.</li>
        <li>En <b>Repository access</b> elige <b>Only select repositories</b> y marca el repositorio del sitio.</li>
        <li>En <b>Permissions</b> elige <b>Contents: Read and write</b> (para publicar) y <b>Actions: Read and write</b> (para el botón «Actualizar desde el portal»). Crea el token y pégalo abajo.</li>
      </ol>
      <p><a href="tutorial-token.html" target="_blank" rel="noopener"><b>Ver el tutorial paso a paso, con imágenes ↗</b></a></p>`;
    const g = document.createElement("div");
    g.className = "ad-rejilla";
    [["owner", "Usuario u organización"], ["repo", "Repositorio"], ["branch", "Rama"], ["folder", "Carpeta dentro del repositorio (vacío = raíz)"]].forEach(([k, t]) => {
      g.appendChild(campo(t, texto(gh[k], (v) => { gh[k] = v.trim(); guardarGh(); modo(); }, { repintar: false })));
    });
    g.appendChild(campo("Token de GitHub", texto(gh.token, (v) => { gh.token = v.trim(); guardarGh(); modo(); }, { tipo: "password", placeholder: "github_pat_…", repintar: false }), null, true));
    f.appendChild(g);
    const r = document.createElement("label");
    r.className = "ad-check";
    r.innerHTML = `<input type="checkbox" ${recordar() ? "checked" : ""}> Recordar en este navegador (no lo actives en computadores compartidos)`;
    r.querySelector("input").addEventListener("change", (e) => {
      if (!LS) return;
      if (e.target.checked) { LS.setItem("edco_gh_recordar", "1"); guardarGh(); }
      else { LS.removeItem("edco_gh_recordar"); LS.removeItem("edco_gh"); }
    });
    f.appendChild(r);
    const probar = document.createElement("button");
    probar.className = "boton"; probar.textContent = "Probar conexión"; probar.style.marginTop = "18px";
    probar.addEventListener("click", async () => {
      try {
        const res = await ghFetch(rutaRepo("datos.js") + "?ref=" + encodeURIComponent(gh.branch || "main"));
        if (res.ok) aviso("Conexión correcta: el editor puede publicar en " + gh.owner + "/" + gh.repo + ".");
        else throw new Error(mensajeGh(res.status, "datos.js"));
      } catch (e) { aviso("No se pudo conectar: " + e.message, true); }
    });
    f.appendChild(probar);
  }

  function modo() {
    const m = ghListo() ? "github" : "descarga";
    $("#guardar").textContent = m === "github" ? "Publicar en el sitio" : "Descargar datos.js";
    $("#modo").textContent = m === "github"
      ? `Se publica en ${gh.owner}/${gh.repo}; el sitio se actualiza en 1–2 minutos.`
      : "Sin conexión con GitHub: se descargarán los archivos para subirlos a mano (o configura la pestaña Conexión con GitHub).";
  }

  function rutaRepo(ruta) {
    const pre = gh.folder ? gh.folder.replace(/^\/+|\/+$/g, "") + "/" : "";
    return (pre + ruta).split("/").map(encodeURIComponent).join("/");
  }
  function ghApi(ruta, opc = {}) {
    opc.headers = Object.assign({ Authorization: "Bearer " + gh.token, Accept: "application/vnd.github+json", "X-GitHub-Api-Version": "2022-11-28" }, opc.headers || {});
    opc.cache = "no-store";
    return fetch(`https://api.github.com/repos/${encodeURIComponent(gh.owner)}/${encodeURIComponent(gh.repo)}/${ruta}`, opc);
  }
  const ghFetch = (ruta, opc) => ghApi("contents/" + ruta, opc);

  function textoB64(b64) {
    const bin = atob(String(b64).replace(/\s/g, ""));
    return new TextDecoder().decode(Uint8Array.from(bin, (ch) => ch.charCodeAt(0)));
  }
  /* Lee datos.js directamente del repositorio (siempre la última versión, sin la caché de GitHub Pages). */
  async function datosRemotos() {
    const res = await ghFetch(rutaRepo("datos.js") + "?ref=" + encodeURIComponent(gh.branch || "main"));
    if (!res.ok) throw new Error(mensajeGh(res.status, "datos.js"));
    const j = await res.json();
    return { sha: j.sha, datos: leer(textoB64(j.content)) };
  }
  function reemplazarDatos(nuevo) {
    nuevo.noticias = nuevo.noticias || [];
    publicado = clone(nuevo);
    D = clone(nuevo);
    base = generar(D);
    guardados = idsGuardados();
    pendientes = {};
    sel = seleccionInicial();
    cambio(); pintarForms();
  }
  function mensajeGh(status, archivo) {
    if (status === 401) return "el token no es válido o venció";
    if (status === 403) return "el token no tiene permiso de escritura en el repositorio";
    if (status === 404) return "no se encontró el repositorio, la rama o la carpeta (revisa la pestaña Conexión con GitHub)";
    if (status === 409 || status === 422) return `alguien cambió ${archivo} al mismo tiempo; recarga la página y vuelve a intentarlo`;
    return `GitHub respondió ${status} con ${archivo}`;
  }

  function b64texto(s) {
    const bytes = new TextEncoder().encode(s);
    let bin = "";
    for (let i = 0; i < bytes.length; i += 0x8000) bin += String.fromCharCode.apply(null, bytes.subarray(i, i + 0x8000));
    return btoa(bin);
  }
  function archivos(d = D, texto = generar(d)) {
    const usadas = new Set([...d.cursos, ...d.profesores, ...d.noticias].map((x) => x.imagen));
    const lista = Object.entries(pendientes).filter(([r]) => usadas.has(r)).map(([ruta, v]) => ({ ruta, b64: v.b64 }));
    lista.push({ ruta: "datos.js", b64: b64texto(texto) });   // al final: las fotos ya existen cuando el sitio las pide
    return lista;
  }

  async function publicarGitHub(lista) {
    const rama = gh.branch || "main";
    for (const a of lista) {
      const ruta = rutaRepo(a.ruta);
      const lectura = await ghFetch(ruta + "?ref=" + encodeURIComponent(rama));
      if (!lectura.ok && (lectura.status !== 404 || a.ruta === "datos.js")) throw new Error(mensajeGh(lectura.status, a.ruta));
      const actual = lectura.ok ? await lectura.json() : null;
      // Si datos.js cambió en GitHub después de abrir el editor (otra persona o «Actualizar desde el portal»),
      // publicar ahora reemplazaría esos cambios: se pide confirmación.
      if (a.ruta === "datos.js" && actual?.content && generar(leer(textoB64(actual.content))) !== generar(publicado) &&
          !confirm("El sitio cambió en GitHub después de que abriste el editor (por ejemplo, por «Actualizar desde el portal» o porque otra persona publicó).\n\nSi publicas ahora, esos cambios se perderán. Lo recomendable es Cancelar, anotar tus cambios, recargar el editor y volver a hacerlos.\n\n¿Publicar de todas formas?")) {
        throw new Error("publicación cancelada; recarga el editor para ver la versión más reciente");
      }
      const res = await ghFetch(ruta, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: `Actualiza ${a.ruta} desde el editor de Educación Continua`, content: a.b64, branch: rama, ...(actual?.sha ? { sha: actual.sha } : {}) })
      });
      if (!res.ok) throw new Error(mensajeGh(res.status, a.ruta));
    }
  }

  function descargar() {
    const bajar = (nombre, href) => { const a = document.createElement("a"); a.href = href; a.download = nombre; document.body.appendChild(a); a.click(); a.remove(); };
    const url = URL.createObjectURL(new Blob([generar(D)], { type: "text/javascript;charset=utf-8" }));
    bajar("datos.js", url);
    setTimeout(() => URL.revokeObjectURL(url), 2000);
    const fotos = archivos().filter((a) => a.ruta !== "datos.js");
    fotos.forEach((a, i) => setTimeout(() => bajar(a.ruta.split("/").pop(), pendientes[a.ruta].dataUrl), 300 * (i + 1)));
    return fotos;
  }

  /* Marca como publicado solo lo que se envió: si se editó durante la subida, sigue pendiente. */
  function trasGuardar(enviado, texto, lista) {
    [D, enviado].forEach((d) => { d.cursos.forEach((c) => delete c.__idManual); d.profesores.forEach((p) => delete p.__idManual); d.noticias.forEach((n) => delete n.__idManual); });
    base = texto;
    publicado = enviado;
    guardados = new Set([...enviado.cursos.map((c) => "c:" + c.id), ...enviado.profesores.map((p) => "p:" + p.id), ...enviado.noticias.map((n) => "n:" + n.id)]);
    lista.forEach((a) => { delete pendientes[a.ruta]; });
    cambio(); pintarForms();
  }

  /* ---------- Actualizar desde el portal ---------- */
  // El portal no permite que un navegador lea su API desde otro sitio, así que la copia la hace
  // la GitHub Action «Sincronizar con el portal» (.github/workflows/sincronizar-portal.yml).
  const FLUJO = "sincronizar-portal.yml";
  const espera = (ms) => new Promise((r) => setTimeout(r, ms));
  const urlAcciones = () => `https://github.com/${gh.owner}/${gh.repo}/actions/workflows/${FLUJO}`;
  function mensajeAccion(status) {
    if (status === 401) return "el token no es válido o venció";
    if (status === 403) return "el token no tiene el permiso «Actions: Read and write» (revisa la pestaña Conexión con GitHub)";
    if (status === 404) return "no se encontró la acción «Sincronizar con el portal» en el repositorio";
    return `GitHub respondió ${status}`;
  }
  async function ejecuciones(rama) {
    const r = await ghApi(`actions/workflows/${FLUJO}/runs?event=workflow_dispatch&branch=${encodeURIComponent(rama)}&per_page=10`);
    if (!r.ok) throw new Error(mensajeAccion(r.status));
    return (await r.json()).workflow_runs || [];
  }

  async function sincronizarPortal() {
    if (!ghListo()) {
      informe("Actualizar desde el portal", `<p>Para usar este botón, primero configura la pestaña <b>Conexión con GitHub</b> con un token que tenga los permisos <b>Contents</b> y <b>Actions</b> (lectura y escritura).</p>
        ${gh.owner && gh.repo ? `<p>También puedes ejecutar la actualización directamente en GitHub: abre <a href="${esc(urlAcciones())}" target="_blank" rel="noopener">Sincronizar con el portal</a> y pulsa <b>Run workflow</b>. Después recarga este editor.</p>` : ""}`);
      return;
    }
    if (sucio()) { aviso("Primero publica o descarta tus cambios; luego actualiza desde el portal.", true); return; }
    const b = $("#sincronizar");
    const rama = gh.branch || "main";
    b.disabled = true; $("#guardar").disabled = true;
    const paso = (t) => { b.textContent = t; };
    try {
      paso("Iniciando…");
      const previas = new Set((await ejecuciones(rama)).map((x) => x.id));
      const r = await ghApi(`actions/workflows/${FLUJO}/dispatches`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ ref: rama }) });
      if (r.status !== 204) throw new Error(mensajeAccion(r.status));
      const inicio = Date.now();
      let run = null;
      while (Date.now() - inicio < 6 * 60 * 1000) {
        await espera(4000);
        run = (await ejecuciones(rama)).find((x) => !previas.has(x.id)) || null;
        const s = Math.round((Date.now() - inicio) / 1000);
        paso(run ? `Leyendo el portal… ${s} s` : `En cola… ${s} s`);
        if (run?.status === "completed") break;
      }
      if (!run || run.status !== "completed") throw new Error(`la actualización está tardando más de lo normal. Revisa su estado en GitHub: ${run?.html_url || urlAcciones()}`);
      if (run.conclusion !== "success") throw new Error(`la actualización falló en GitHub. Detalles: ${run.html_url}`);
      paso("Cargando…");
      const antes = clone(publicado);
      reemplazarDatos((await datosRemotos()).datos);
      mostrarInforme(antes, D, run.html_url);
    } catch (e) {
      aviso("No se pudo actualizar desde el portal: " + e.message, true);
    } finally {
      b.disabled = false; b.textContent = "↻ Actualizar desde el portal";
      cambio();
    }
  }

  function mostrarInforme(antes, ahora, url) {
    const previo = Object.fromEntries(antes.cursos.map((c) => [c.id, c]));
    const nuevos = ahora.cursos.filter((c) => !previo[c.id]);
    // Compara solo el contenido: ignora el orden de los campos y los campos vacíos.
    const canon = (o) => JSON.stringify(Object.keys(o).sort().filter((k) => o[k] !== "" && o[k] != null && o[k] !== false).map((k) => [k, o[k]]));
    const cambiados = ahora.cursos.filter((c) => previo[c.id] && canon(previo[c.id]) !== canon(c));
    const idsProfes = new Set(antes.profesores.map((p) => p.id));
    const profes = ahora.profesores.filter((p) => !idsProfes.has(p.id));
    const lista = (t, xs, nota = "") => xs.length ? `<h3>${t} (${xs.length})</h3>${nota}<ul>${xs.map((x) => `<li>${esc(x)}</li>`).join("")}</ul>` : "";
    const nada = !nuevos.length && !cambiados.length && !profes.length;
    informe("Actualización desde el portal",
      (nada ? `<p>Listo: el sitio ya estaba al día con el portal. No hubo cambios.</p>` : `<p>Listo: los cambios del portal ya están publicados en el sitio (se verán en 1–2 minutos).</p>`) +
      lista("Cursos nuevos", nuevos.map((c) => c.titulo), `<p class="ad-nota">Revisa su <b>área</b> (se propuso una automáticamente) y su foto.</p>`) +
      lista("Cursos actualizados", cambiados.map((c) => c.titulo)) +
      lista("Profesores nuevos", profes.map((p) => p.nombre), `<p class="ad-nota">Llegan sin foto ni cargo: complétalos en la pestaña Profesores.</p>`) +
      `<p class="ad-nota"><a href="${esc(url)}" target="_blank" rel="noopener">Ver el detalle en GitHub ↗</a></p>`);
  }

  function informe(titulo, html) {
    const d = $("#informe");
    d.innerHTML = `<div class="dlg-cab"><h2 id="informe-titulo">${esc(titulo)}</h2><button class="cerrar" type="button" aria-label="Cerrar">×</button></div><div class="dlg-cuerpo">${html}</div>`;
    d.querySelector(".cerrar").addEventListener("click", () => d.close());
    d.showModal();
  }
  $("#informe").addEventListener("click", (e) => { if (e.target.id === "informe") e.target.close(); });
  $("#sincronizar").addEventListener("click", sincronizarPortal);

  $("#guardar").addEventListener("click", async () => {
    const b = $("#guardar");
    if (!ghListo()) {
      const fotos = descargar();
      aviso("Descargado datos.js" + (fotos.length ? ` y ${fotos.length} foto(s); súbelas a assets/cursos, assets/profes o assets/noticias` : "") + ". Reemplaza datos.js en el repositorio de GitHub; luego recarga este editor.");
      return;
    }
    b.disabled = true; b.textContent = "Publicando…";
    const enviado = clone(D), texto = generar(enviado), lista = archivos(enviado, texto);
    try {
      await publicarGitHub(lista);
      trasGuardar(enviado, texto, lista);
      aviso("Publicado ✓ El sitio mostrará los cambios en 1–2 minutos.");
    } catch (e) {
      aviso("No se pudo publicar: " + e.message, true);
      cambio();
    }
    modo();
  });

  $("#descartar").addEventListener("click", () => {
    if (!confirm("¿Descartar todos los cambios sin publicar?")) return;
    D = clone(publicado);
    pendientes = {};
    sel = seleccionInicial();
    cambio(); pintarForms();
  });

  /* ---------- Aviso ---------- */
  let tAviso;
  function aviso(msg, error) {
    const t = $("#toast");
    t.textContent = msg; t.className = "ad-toast" + (error ? " error" : ""); t.hidden = false;
    clearTimeout(tAviso); tAviso = setTimeout(() => { t.hidden = true; }, 8000);
  }

  /* ---------- Pestañas y listas ---------- */
  document.querySelector(".ad-tabs").addEventListener("click", (e) => {
    const b = e.target.closest("[data-tab]");
    if (!b) return;
    document.querySelectorAll(".ad-tabs [data-tab]").forEach((x) => x.setAttribute("aria-selected", x === b));
    ["cursos", "profes", "noticias", "github"].forEach((t) => { $("#tab-" + t).hidden = t !== b.dataset.tab; });
  });
  $("#lista-cursos").addEventListener("click", (e) => { const b = e.target.closest("[data-id]"); if (b) { sel.cursos = b.dataset.id; pintarFormCurso(); pintarListaCursos(); } });
  $("#lista-profes").addEventListener("click", (e) => { const b = e.target.closest("[data-id]"); if (b) { sel.profes = b.dataset.id; pintarFormProfe(); pintarListaProfes(); } });
  $("#filtro-cursos").addEventListener("input", pintarListaCursos);
  $("#filtro-profes").addEventListener("input", pintarListaProfes);
  $("#lista-noticias").addEventListener("click", (e) => { const b = e.target.closest("[data-id]"); if (b) { sel.noticias = b.dataset.id; pintarFormNoticia(); pintarListaNoticias(); } });
  $("#filtro-noticias").addEventListener("input", pintarListaNoticias);
  $("#nueva-noticia").addEventListener("click", nuevaNoticia);
  $("#nuevo-curso").addEventListener("click", nuevoCurso);
  $("#nuevo-profe").addEventListener("click", nuevoProfe);
  window.addEventListener("beforeunload", (e) => { if (sucio()) { e.preventDefault(); e.returnValue = ""; } });

  pintarGitHub();
  modo();
  cambio(); pintarForms();
  // Con la conexión configurada, se trabaja sobre la última versión del repositorio
  // (GitHub Pages puede tardar unos minutos en mostrar los cambios recientes).
  if (ghListo()) {
    datosRemotos().then(({ datos }) => {
      if (!sucio() && generar(datos) !== base) { reemplazarDatos(datos); aviso("Se cargó la versión más reciente del sitio desde GitHub."); }
    }).catch(() => { /* sin conexión: se usa la copia del sitio */ });
  }
})();
