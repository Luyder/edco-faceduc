/* Formato de datos.js, compartido por el editor (admin.js) y el sincronizador
   con el portal (herramientas/sincronizar-portal.mjs), para que ambos escriban
   el archivo exactamente igual. */
(function (raiz) {
  const CAMPOS_CURSO = ["id", "oculto", "manual", "imagen", "titulo", "slug", "tipo", "area", "estado", "modalidad", "horas", "sesiones", "semanas", "horario", "fechas", "inscripcionHasta", "programa", "profesores", "insignia", "descripcion", "competencia"];
  const CAMPOS_PROFE = ["id", "oculto", "imagen", "nombre", "cargo", "nota", "bio"];
  const CAMPOS_NOTICIA = ["id", "oculto", "fecha", "categoria", "titulo", "imagen", "resumen", "contenido", "cursos", "enlace", "enlaceTexto"];

  function limpiar(o, campos) {
    const r = {};
    campos.forEach((k) => {
      const v = o[k];
      if (Array.isArray(v)) { if (k === "descripcion" || k === "contenido" || v.length || k === "profesores") r[k] = v; return; }
      if (v === "" || v == null || v === false) return;
      r[k] = v;
    });
    Object.keys(o).forEach((k) => { if (!campos.includes(k) && !k.startsWith("__") && o[k] !== "" && o[k] != null) r[k] = o[k]; });
    return r;
  }

  function generar(d) {
    const salida = Object.assign({}, d, {
      cursos: d.cursos.map((c) => limpiar(c, CAMPOS_CURSO)),
      profesores: d.profesores.map((p) => limpiar(p, CAMPOS_PROFE)),
      noticias: (d.noticias || []).map((n) => limpiar(n, CAMPOS_NOTICIA))
    });
    return "/* Datos del micrositio de Educación Continua — Facultad de Educación, Uniandes.\n" +
      "   Se edita desde admin.html. Si lo editas a mano, conserva el formato JSON.\n\n" +
      "   Cursos: slug = dirección en educacioncontinua.uniandes.edu.co/<slug>/p;\n" +
      "   estado = abierto | proximamente | desarrollo | finalizado; area = id de AREAS; profesores = ids.\n" +
      "   manual = true: la sincronización con el portal no cambia ese curso.\n" +
      "   Noticias: fecha = AAAA-MM-DD; cursos = ids de cursos relacionados. */\n\n" +
      "window.EDCO = " + JSON.stringify(salida, null, 2) + ";\n";
  }

  /* Lee el texto de datos.js sin ejecutarlo. */
  function leer(texto) {
    const i = texto.indexOf("window.EDCO = ");
    if (i < 0) throw new Error("datos.js no tiene el formato esperado");
    return JSON.parse(texto.slice(i + 14).trim().replace(/;\s*$/, ""));
  }

  raiz.EDCO_FORMATO = { CAMPOS_CURSO, CAMPOS_PROFE, CAMPOS_NOTICIA, generar, leer };
})(typeof window !== "undefined" ? window : globalThis);
