/* Sincroniza datos.js con el portal de Educación Continua de Uniandes.
   Lo ejecuta la GitHub Action «Sincronizar con el portal» (botón en el editor),
   o a mano:  node herramientas/sincronizar-portal.mjs [--simular]

   Del portal se copian los datos del curso: título, formato, estado, modalidad,
   duración, horario, fechas, descripción y profesores.
   Se conserva lo que se edita en el sitio: área, foto, oculto, programa,
   competencia, insignia, biografías y noticias. Los cursos marcados como
   «manual» no se tocan. Los cursos que ya no están en el portal no se borran. */
import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { fileURLToPath } from "node:url";

const RAIZ = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const API = "https://educacioncontinua.uniandes.edu.co/api/catalog_system/pub/products/search?fq=B:2000009";
const SIMULAR = process.argv.includes("--simular");

const ctx = { window: {} };
vm.runInNewContext(fs.readFileSync(path.join(RAIZ, "formato-datos.js"), "utf8"), ctx);
const { generar, leer } = ctx.window.EDCO_FORMATO;
const rutaDatos = path.join(RAIZ, "datos.js");
const D = leer(fs.readFileSync(rutaDatos, "utf8"));

/* ---------- Utilidades ---------- */
const sinTildes = (s) => String(s || "").normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();
const slug = (s) => sinTildes(s).replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "").slice(0, 60);
const MESES = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];
const v = (p, k) => (Array.isArray(p[k]) ? p[k][0] : p[k]) ?? "";

function fecha(iso) {
  const m = /^(\d{4})-(\d{2})-(\d{2})/.exec(iso || "");
  return m ? { d: +m[3], m: MESES[+m[2] - 1], a: m[1] } : null;
}
function rangoFechas(ini, fin) {
  const a = fecha(ini), b = fecha(fin);
  if (!a) return "";
  if (!b || ini.slice(0, 10) === fin.slice(0, 10)) return `${a.d} de ${a.m} de ${a.a}`;
  if (a.a === b.a) return `${a.d} de ${a.m} – ${b.d} de ${b.m} de ${b.a}`;
  return `${a.d} de ${a.m} de ${a.a} – ${b.d} de ${b.m} de ${b.a}`;
}
const fechaSola = (iso) => { const f = fecha(iso); return f ? `${f.d} de ${f.m} de ${f.a}` : ""; };
const numero = (s) => { const n = Math.round(parseFloat(String(s).replace(",", "."))); return n > 0 ? n : ""; };

const ENTIDADES = { nbsp: " ", amp: "&", lt: "<", gt: ">", quot: '"', apos: "'", aacute: "á", eacute: "é", iacute: "í", oacute: "ó", uacute: "ú", Aacute: "Á", Eacute: "É", Iacute: "Í", Oacute: "Ó", Uacute: "Ú", ntilde: "ñ", Ntilde: "Ñ", uuml: "ü", iexcl: "¡", iquest: "¿", laquo: "«", raquo: "»", ndash: "–", mdash: "—", hellip: "…", ldquo: "“", rdquo: "”", lsquo: "‘", rsquo: "’", bull: "•", middot: "·" };
function parrafos(html) {
  return String(html || "")
    .replace(/<br\s*\/?>/gi, "\n\n")
    .replace(/<\/(p|div|li|h[1-6]|ul|ol)>/gi, "\n\n")
    .replace(/<[^>]+>/g, "")
    .replace(/&(#x?[0-9a-f]+|\w+);/gi, (t, e) => e[0] === "#"
      ? String.fromCodePoint(e[1].toLowerCase() === "x" ? parseInt(e.slice(2), 16) : +e.slice(1))
      : ENTIDADES[e] ?? t)
    .replace(/[\u200b-\u200d\ufeff]/g, "")
    .split(/\n\s*\n/)
    .map((p) => arreglar(p).replace(/\s+/g, " ").trim())
    .filter(Boolean);
}

/* Corrige textos que el portal guardó con la codificación dañada («miÃ©rcoles» → «miércoles»). */
function arreglar(t) {
  t = String(t ?? "");
  if (!/Ã[\u0080-\u00bf]|Â[\u00a0-\u00bf]/.test(t)) return t;
  try { const r = Buffer.from(t, "latin1").toString("utf8"); return r.includes("\ufffd") ? t : r; } catch (e) { return t; }
}
const linea = (t) => arreglar(t).replace(/\s+/g, " ").trim();

const TIPOS = { "materias de posgrado": "Materia de posgrado", "materias de pregrado": "Materia de pregrado", "certificado profesional": "Certificado profesional" };
const ESTADOS = { "en inscripciones": "abierto", "en desarrollo": "desarrollo", finalizado: "finalizado", "proximamente": "proximamente", "próximamente": "proximamente" };
const MODALIDADES = { "semipresencial / blended": "Semipresencial" };

/* Área propuesta para un curso nuevo (la coordinadora puede cambiarla en el editor). */
function areaPropuesta(texto) {
  const t = sinTildes(texto);
  const reglas = [
    ["ia", /inteligencia artificial|\bia\b|iagen|chatgpt|prompt|analitica|datos/],
    ["bienestar", /convivencia|socioemocional|emocion|bienestar|\bpaz\b|agresion|familia/],
    ["crecimiento", /mentalidad|crecimiento/],
    ["comunidad", /comunidad|participativ/],
    ["liderazgo", /liderazgo|politica|gestion|directiv|universidades corporativas/]
  ];
  const ids = new Set(D.areas.map((a) => a.id));
  const r = reglas.find(([id, re]) => ids.has(id) && re.test(t));
  return r ? r[0] : ids.has("docencia") ? "docencia" : D.areas[0]?.id;
}

/* ---------- Profesores ---------- */
// El portal escribe los nombres con variaciones («Isabel Tejada Sánchez», «Johana» / «Johanna»):
// se considera la misma persona si todas las palabras del nombre más corto están en el más largo
// (sin tildes ni letras dobles) y coinciden al menos dos.
const palabras = (n) => sinTildes(n).replace(/[^a-z ]/g, " ").split(/\s+/).filter((x) => x && !/^(de|del|la|las|los|y)$/.test(x)).map((x) => x.replace(/(.)\1+/g, "$1"));
function mismaPersona(a, b) {
  let [x, y] = [palabras(a), palabras(b)];
  if (x.length > y.length) [x, y] = [y, x];
  return x.length >= 2 && x.every((w) => y.includes(w));
}
const profesNuevos = [];
function idProfe(info) {
  const nombre = linea(info.Nombre);
  if (!nombre) return null;
  let p = D.profesores.find((x) => mismaPersona(x.nombre, nombre));
  if (!p) {
    let id = slug(nombre), n = 2;
    while (D.profesores.some((x) => x.id === id)) id = `${slug(nombre)}-${n++}`;
    p = { id, nombre, cargo: "", bio: linea(info.Descripcion) };
    D.profesores.push(p);
    profesNuevos.push(p);
  }
  return p.id;
}

/* ---------- Portal ---------- */
async function descargarPortal() {
  const productos = [];
  for (let desde = 0; desde < 2000; desde += 50) {
    const res = await fetch(`${API}&_from=${desde}&_to=${desde + 49}`, { headers: { Accept: "application/json" } });
    if (!res.ok && res.status !== 206) throw new Error(`El portal respondió ${res.status}`);
    const lote = await res.json();
    productos.push(...lote);
    if (lote.length < 50) break;
  }
  return productos.filter((p) => !/prueba/i.test(p.productName + " " + p.linkText) && v(p, "Ocultar en vitrina") !== "true");
}

function desdePortal(p) {
  const estado = ESTADOS[sinTildes(v(p, "Estado"))] || "proximamente";
  const tipo = v(p, "Tipo de programa") || v(p, "Tipo de Evento") || "Curso";
  const modalidad = v(p, "Modalidad") || "Virtual";
  let profes = [];
  try { profes = JSON.parse(v(p, "Profesores") || "[]"); } catch (e) { /* sin profesores */ }
  return {
    titulo: linea(p.productName),
    tipo: TIPOS[sinTildes(tipo)] || tipo,
    estado,
    modalidad: MODALIDADES[sinTildes(modalidad)] || modalidad,
    horas: numero(v(p, "Duración Horas")),
    sesiones: numero(v(p, "Duración Sesiones")),
    semanas: numero(v(p, "Duración Semanas")),
    horario: linea(`${v(p, "Horario")} ${v(p, "Nota Horario")}`),
    fechas: rangoFechas(v(p, "Fecha Inicio Curso"), v(p, "Fecha Fin Curso")),
    inscripcionHasta: estado === "abierto" ? fechaSola(v(p, "Fecha Fin Inscripción")) : "",
    descripcion: parrafos(p.description),
    __profes: Array.isArray(profes) ? profes : []
  };
}

async function descargarFoto(p, id) {
  const url = p.items?.[0]?.images?.[0]?.imageUrl;
  if (!url) return "";
  // Pide al portal una versión de 1000 px de ancho.
  const reducida = url.replace(/\/arquivos\/ids\/(\d+)\//, "/arquivos/ids/$1-1000-auto/");
  let res;
  try { res = await fetch(reducida); } catch (e) { return ""; }   // sin foto: el sitio dibuja la ilustración
  if (!res.ok) return "";
  const ext = (res.headers.get("content-type") || "").includes("png") ? "png" : (res.headers.get("content-type") || "").includes("webp") ? "webp" : "jpg";
  const ruta = `assets/cursos/${id}.${ext}`;
  if (!SIMULAR) fs.writeFileSync(path.join(RAIZ, ruta), Buffer.from(await res.arrayBuffer()));
  return ruta;
}

/* ---------- Sincronizar ---------- */
const CAMPOS_PORTAL = ["titulo", "tipo", "estado", "modalidad", "horas", "sesiones", "semanas", "horario", "fechas", "inscripcionHasta", "descripcion"];
const igual = (a, b) => JSON.stringify(a ?? "") === JSON.stringify(b ?? "");

const productos = await descargarPortal();
if (productos.length < 5) throw new Error(`El portal devolvió solo ${productos.length} cursos; no se cambia nada por precaución.`);

const informe = { actualizados: [], nuevos: [], manuales: [], fueraDelPortal: [] };
const vistos = new Set();
for (const p of productos) {
  const datos = desdePortal(p);
  let c = D.cursos.find((x) => x.slug === p.linkText);
  if (c) {
    vistos.add(c);
    if (c.manual) { informe.manuales.push(c.titulo); continue; }
    const cambios = [];
    for (const k of CAMPOS_PORTAL) {
      if (!igual(c[k], datos[k])) { c[k] = datos[k]; cambios.push(k); }
    }
    // Los profesores solo se reemplazan si el portal tiene alguno; si no, se dejan los del sitio.
    if (datos.__profes.length) {
      const ids = [...new Set(datos.__profes.map(idProfe).filter(Boolean))];
      if (!igual([...c.profesores].sort(), [...ids].sort())) { c.profesores = ids; cambios.push("profesores"); }
    }
    if (cambios.length) informe.actualizados.push(`${c.titulo} (${cambios.join(", ")})`);
  } else {
    let id = slug(datos.titulo), n = 2;
    while (D.cursos.some((x) => x.id === id)) id = `${slug(datos.titulo)}-${n++}`;
    c = { id, slug: p.linkText, area: areaPropuesta(datos.titulo + " " + datos.descripcion.join(" ")), profesores: [...new Set(datos.__profes.map(idProfe).filter(Boolean))] };
    CAMPOS_PORTAL.forEach((k) => { c[k] = datos[k]; });
    c.imagen = await descargarFoto(p, id);
    D.cursos.unshift(c);
    vistos.add(c);
    informe.nuevos.push(c.titulo);
  }
}
D.cursos.forEach((c) => { if (!vistos.has(c) && c.slug && !c.oculto) informe.fueraDelPortal.push(c.titulo); });

const texto = generar(D);
const cambio = texto !== fs.readFileSync(rutaDatos, "utf8");
if (cambio && !SIMULAR) fs.writeFileSync(rutaDatos, texto);

const lista = (t, xs) => (xs.length ? `\n### ${t} (${xs.length})\n` + xs.map((x) => `- ${x}`).join("\n") + "\n" : "");
const resumen = `## Sincronización con el portal\n\n${productos.length} cursos leídos del portal. ${cambio ? "datos.js actualizado." : "Sin cambios."}\n` +
  lista("Cursos nuevos (revisa su área)", informe.nuevos) +
  lista("Cursos actualizados", informe.actualizados) +
  lista("Profesores nuevos (sin foto)", profesNuevos.map((p) => p.nombre)) +
  lista("Cursos marcados como manuales (no se tocaron)", informe.manuales) +
  lista("Cursos del sitio que ya no están en el portal (no se borraron)", informe.fueraDelPortal);
console.log(resumen);
if (process.env.GITHUB_STEP_SUMMARY) fs.appendFileSync(process.env.GITHUB_STEP_SUMMARY, resumen);
