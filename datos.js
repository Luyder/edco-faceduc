/* Datos del micrositio de Educación Continua — Facultad de Educación, Uniandes.
   Este es el único archivo que hay que editar para actualizar cursos, profesores
   o casos corporativos. Fuente inicial: Canva «Portafolio EdContinua» (2025).

   Cursos:
   - slug: dirección en educacioncontinua.uniandes.edu.co/<slug>/p ("" si no hay página)
   - estado: "abierto" | "proximamente" | "desarrollo"
   - tipo: "Curso" | "Taller" | "Programa" | "Certificado profesional" | "Certificado de competencias"
   - area: id de una de las AREAS de abajo
   - profesores: ids de PROFESORES
   - programa: id del curso-programa al que pertenece (opcional) */

window.EDCO = {
  contacto: {
    whatsapp: "573103018445",
    correo: "avega@uniandes.edu.co",
    portal: "https://educacioncontinua.uniandes.edu.co/"
  },

  areas: [
    { id: "ia", nombre: "Inteligencia artificial" },
    { id: "bienestar", nombre: "Bienestar y convivencia" },
    { id: "docencia", nombre: "Práctica docente" },
    { id: "comunidad", nombre: "Investigación con comunidad" },
    { id: "liderazgo", nombre: "Liderazgo y política educativa" },
    { id: "crecimiento", nombre: "Mentalidad y desarrollo personal" }
  ],

  cursos: [
    {
      id: "neurociencias-ambito-educativo", imagen: "assets/cursos/neurociencias-ambito-educativo.webp",
      titulo: "Neurociencias y regulación emocional en el ámbito educativo",
      slug: "neurociencias-y-regulacion-emocional-en-el-ambito-educativo",
      tipo: "Curso", area: "bienestar", estado: "desarrollo", modalidad: "Virtual",
      horas: 34, sesiones: 8, semanas: 4,
      horario: "Lunes y miércoles · 6:00 p. m. – 8:00 p. m.",
      profesores: ["monica-moreno"],
      descripcion: [
        "Este curso introductorio ofrece herramientas teóricas y prácticas para comprender la neurobiología del desarrollo infantil y juvenil, y su relación con la gestión de procesos educativos. A partir de los principales hallazgos de las neurociencias aplicadas a la educación, se exploran estrategias de regulación emocional orientadas a fortalecer el bienestar integral de los estudiantes y crear ambientes de aprendizaje efectivos.",
        "Además de una actualización en tendencias actuales, el curso brinda acompañamiento semi-personalizado para que cada participante pueda analizar su contexto educativo y diseñar estrategias que promuevan la regulación emocional y el desarrollo humano en sus estudiantes."
      ]
    },
    {
      id: "gamificacion-innovacion", imagen: "assets/cursos/gamificacion-innovacion.webp",
      titulo: "Gamificación e innovación educativa",
      slug: "gamificacion-e-innovacion-educativa",
      tipo: "Curso", area: "docencia", estado: "abierto", modalidad: "Virtual",
      horas: 24, sesiones: 12, semanas: 6,
      horario: "Lunes y miércoles · 6:00 p. m. – 8:00 p. m.",
      fechas: "6 de octubre – 24 de noviembre de 2025",
      profesores: ["javier-velazquez"],
      descripcion: [
        "La gamificación va más allá de usar juegos en el aula: significa diseñar la experiencia educativa como un juego, transformando la relación docente-estudiante, los mecanismos de comunicación, la retroalimentación y los ciclos de aprendizaje.",
        "Este curso explora más de 50 años de conocimientos sobre motivación y diseño de juegos para aplicarlos a la creación de cursos innovadores y sistemas de aprendizaje efectivos. Las sesiones mismas están gamificadas, lo que permite a los participantes aprender no solo desde la teoría y la práctica, sino también desde el ejemplo.",
        "Al finalizar, cada participante podrá evaluar las dinámicas vividas y decidir qué mecanismos implementar en sus propios contextos educativos para potenciar la motivación y el aprendizaje."
      ]
    },
    {
      id: "interacciones-aula", imagen: "assets/cursos/interacciones-aula.webp",
      titulo: "Interacciones en el aula: observar para transformar",
      slug: "interacciones-en-el-aula-observar-para-transformar",
      tipo: "Certificado profesional", area: "docencia", estado: "abierto", modalidad: "Virtual",
      horas: 96, sesiones: 8, semanas: 8,
      horario: "Jueves · 5:00 p. m. – 7:50 p. m.",
      fechas: "9 de octubre – 27 de noviembre de 2025",
      profesores: ["andrea-solano"],
      descripcion: [
        "Este programa brinda herramientas metodológicas para analizar y comprender cómo las interacciones en el aula inciden en el desarrollo cognitivo, socioemocional y comportamental de los estudiantes.",
        "A partir de la observación de clases en video y el uso de dimensiones fundamentadas en evidencia investigativa, los participantes identifican aspectos clave de la práctica pedagógica y formulan recomendaciones aplicables a su propio ejercicio docente.",
        "Al finalizar, estarán en capacidad de caracterizar interacciones educativas y generar propuestas de mejoramiento que transformen el aprendizaje y la enseñanza."
      ],
      competencia: "Reflexionar y evaluar, desde un marco estructurado y basado en evidencias, las prácticas docentes, propias o ajenas, con miras a la construcción de ambientes educativos efectivos, participativos, reflexivos y críticos."
    },
    {
      id: "iap-comunidad", imagen: "assets/cursos/iap-comunidad.webp",
      titulo: "Investigación acción participativa con comunidad",
      slug: "investigacion-accion-participativa-con-comunidad",
      tipo: "Curso", area: "comunidad", estado: "abierto", modalidad: "Virtual",
      horas: 26, sesiones: 13, semanas: 7,
      horario: "Martes y jueves · 6:00 p. m. – 8:00 p. m.",
      fechas: "16 de septiembre – 28 de octubre de 2025",
      profesores: ["irma-florez", "andres-astaiza", "luisa-gonzalez"],
      descripcion: [
        "Este curso vivencial introduce a los participantes en conceptos, principios y metodologías participativas para acompañar procesos de cambio social en comunidades. A través de pedagogías activas y prácticas reflexivas, se desarrollan conocimientos, habilidades y actitudes que permiten comprender la complejidad de los contextos, promover el diálogo horizontal y fomentar la participación efectiva de los actores sociales.",
        "El programa combina actividades teórico-prácticas y trabajo grupal para abordar los fundamentos de la Investigación-Acción Participativa (IAP) y las estrategias necesarias para su implementación, desde la co-construcción con la comunidad, en respuesta a los retos de la región latinoamericana y en línea con los Objetivos de Desarrollo Sostenible de la UNESCO.",
        "Los integrantes del equipo docente están certificados como mentores del Programa de Formación de Mentores del Consorcio Knowledge for Change (K4C) de la Cátedra UNESCO Community Based Research and Social Responsibility in Higher Education, e integran el Hub Colombia."
      ]
    },
    {
      id: "variacion-datos-azar", imagen: "assets/cursos/variacion-datos-azar.webp",
      titulo: "Variación, datos y azar en primaria",
      slug: "variacion-datos-y-azar-en-primaria",
      tipo: "Certificado profesional", area: "docencia", estado: "abierto", modalidad: "Virtual",
      horas: 192,
      horario: "Lunes · 6:20 p. m. – 8:30 p. m. y sábados · 8:30 a. m. – 11:30 a. m.",
      fechas: "14 de octubre – 22 de noviembre de 2025",
      profesores: ["pedro-gomez", "alexandra-bulla"],
      insignia: "https://equipoedco.uniandes.edu.co/wp-content/uploads/RepInsig-Variacion-datos-azar-primaria.png",
      descripcion: [
        "Certificado profesional de formación en matemáticas para profesores de primaria ofrecido por UED, el centro de investigación y formación en Educación Matemática de la Facultad de Educación de la Universidad de los Andes, que tiene como uno de sus focos la formación de profesores de matemáticas con el propósito de mejorar su práctica docente.",
        "Está dirigido a profesores que enseñan matemáticas en primaria y que buscan dominar el conocimiento del contenido matemático que se aborda en este nivel educativo."
      ],
      competencia: "Resolver problemas en contextos matemáticos y no matemáticos cuya formulación, comprensión y solución requiere de la movilización de los pensamientos variacional y aleatorio."
    },
    {
      id: "mentalidad-crecimiento", imagen: "assets/cursos/mentalidad-crecimiento.webp",
      titulo: "Mentalidad de crecimiento para el liderazgo y la comunicación",
      slug: "mentalidad-de-crecimiento-para-el-liderazgo-y-la-comunicacion",
      tipo: "Curso", area: "crecimiento", estado: "proximamente", modalidad: "Virtual",
      horas: 30, sesiones: 15, semanas: 8,
      profesores: ["isabel-tejada", "paula-garcia", "martha-ramirez"],
      descripcion: [
        "En 2006, Carol Dweck propuso el término Mentalidad de Crecimiento (Growth Mindset) para describir cómo las personas interpretamos el mundo que nos rodea. Este curso introduce a los participantes en sus principios, destacando cómo la inteligencia y las capacidades pueden desarrollarse mediante el esfuerzo, las estrategias adecuadas y la motivación.",
        "A través de metodologías constructivas y participativas, se abordan temas clave como la plasticidad cerebral, la diferencia entre mentalidad fija y de crecimiento, el poder del lenguaje, la retroalimentación efectiva y el rol de la metacognición y la evaluación.",
        "Los participantes reflexionarán sobre cómo cultivar la mentalidad de crecimiento en sí mismos y en sus estudiantes, fortaleciendo la determinación y el logro de metas en contextos educativos."
      ]
    },
    {
      id: "liderazgo-transformacion", imagen: "assets/cursos/liderazgo-transformacion.webp",
      titulo: "Liderazgo para la transformación educativa",
      slug: "liderazgo-para-la-transformacion-educativa",
      tipo: "Curso", area: "liderazgo", estado: "proximamente", modalidad: "Virtual",
      horas: 20, sesiones: 8, semanas: 5,
      profesores: [],
      descripcion: [
        "Este curso está diseñado para líderes y tomadores de decisión interesados en comprender y superar los principales desafíos de los sistemas educativos latinoamericanos. A través de un enfoque reflexivo y práctico, los participantes adquieren el lenguaje propio de la política educativa y se sensibilizan frente a la complejidad de los sistemas en sus niveles macro, meso y micro.",
        "El programa combina el análisis de casos exitosos y no exitosos de implementación de políticas educativas, lo que permite identificar lecciones valiosas para avanzar hacia una gestión más efectiva y sostenible.",
        "Mediante discusiones y análisis críticos, los participantes desarrollarán una visión estratégica que les permitirá comprender por qué algunas políticas funcionan y otras fracasan, fortaleciendo así su capacidad de liderazgo y toma de decisiones para transformar la educación en la región."
      ]
    },
    {
      id: "estrategias-investigacion-participativa", imagen: "assets/cursos/estrategias-investigacion-participativa.webp",
      titulo: "Estrategias de investigación participativa con comunidad",
      slug: "estrategias-de-investigacion-participativa-con-comunidad",
      tipo: "Curso", area: "comunidad", estado: "proximamente", modalidad: "Virtual",
      horas: 24, sesiones: 12, semanas: 6,
      profesores: ["irma-florez", "andres-astaiza", "luisa-gonzalez"],
      descripcion: [
        "Este curso ofrece una experiencia vivencial y práctica que fortalece las capacidades para acompañar procesos de cambio social desde el trabajo con comunidades. A través de metodologías participativas y pedagogías activas, los participantes desarrollan conocimientos, habilidades y actitudes para comprender contextos complejos, promover el diálogo horizontal y potenciar la participación efectiva de los actores sociales.",
        "El programa combina sesiones virtuales sincrónicas y asincrónicas con un trabajo de campo individual, acompañado por tutoría experta, que permite aplicar los aprendizajes en proyectos reales.",
        "Su enfoque se centra en la co-construcción de saberes, la democratización del conocimiento y el compromiso con la justicia social, alineado con los Objetivos de Desarrollo Sostenible de la UNESCO y la articulación entre la academia y las organizaciones de la sociedad civil en América Latina."
      ]
    },
    {
      id: "neurociencias-primera-infancia", imagen: "assets/cursos/neurociencias-primera-infancia.webp",
      titulo: "Neurociencias y regulación emocional en la primera infancia: claves para el ámbito educativo",
      slug: "neurociencias-y-regulacion-emocional-en-la-primera-infancia-claves-para-el-ambito-educativo",
      tipo: "Curso", area: "bienestar", estado: "proximamente", modalidad: "Virtual",
      horas: 21, sesiones: 6, semanas: 5,
      profesores: ["monica-moreno"],
      descripcion: [
        "Este curso combina teoría y práctica para comprender la neurobiología del desarrollo en los primeros años de vida y su impacto en el bienestar integral de los niños. Los participantes exploran hallazgos clave de las neurociencias aplicadas a la educación y desarrollan estrategias para integrar la regulación emocional en contextos educativos de primera infancia.",
        "El programa ofrece herramientas basadas en evidencia para crear ambientes de aprendizaje efectivos, sensibles al trauma y a las experiencias adversas, fortaleciendo tanto el bienestar emocional como el rendimiento académico. Además, incluye acompañamiento semi-personalizado para adaptar las estrategias a las necesidades particulares de cada entorno educativo."
      ]
    },
    {
      id: "ia-para-la-educacion", imagen: "assets/cursos/ia-para-la-educacion.webp",
      titulo: "Inteligencia artificial para la educación",
      slug: "inteligencia-artificial-para-la-educacion",
      tipo: "Curso", area: "ia", estado: "proximamente", modalidad: "Virtual",
      horas: 20, sesiones: 8, semanas: 4,
      profesores: ["isabel-tejada", "camilo-lopez"],
      descripcion: [
        "Este curso brinda herramientas prácticas y conceptos clave para comprender y aplicar la inteligencia artificial generativa en el aula. A través de dinámicas interactivas y proyectos prácticos, los participantes aprenderán a utilizar modelos de IA, como ChatGPT, para diseñar experiencias pedagógicas innovadoras que respondan a las demandas de la educación en la era digital.",
        "El programa integra reflexión crítica sobre los desafíos éticos de la IA en educación y promueve un equilibrio entre tecnología y humanidad. En un ambiente colaborativo, con aprendizaje activo y reflexivo, se exploran estrategias para potenciar la creatividad docente, enriquecer el aprendizaje de los estudiantes y transformar la práctica educativa."
      ]
    },
    {
      id: "gamificacion-evaluacion", imagen: "assets/cursos/gamificacion-evaluacion.webp",
      titulo: "Gamificación en educación: evaluación y retroalimentación",
      slug: "gamificacion-en-educacion-evaluacion-y-retroalimentacion",
      tipo: "Curso", area: "docencia", estado: "proximamente", modalidad: "Virtual",
      horas: 20, sesiones: 17, semanas: 9,
      profesores: ["javier-velazquez"],
      // En el Canva esta ficha tiene por error el texto del curso de neurociencias.
      descripcion: []
    },
    {
      id: "inteligencia-emocional", imagen: "assets/cursos/inteligencia-emocional.webp",
      titulo: "Inteligencia emocional: conviértete en el arquitecto de tu mente y emociones para crecer sin límites",
      slug: "inteligencia-emocional-conviertete-en-el-arquitecto-de-tu-mente-y-emociones-para-crecer-sin-limites",
      tipo: "Curso", area: "bienestar", estado: "proximamente", modalidad: "Virtual",
      horas: 16, sesiones: 8, semanas: 5,
      profesores: ["alejandro-casas"],
      descripcion: [
        "La complejidad del entorno social y profesional actual, y los desafíos emocionales que enfrentan muchas personas, resaltan la necesidad de un curso en inteligencia emocional. Los participantes no solo aprenderán a identificar y gestionar sus propias emociones, sino que también desarrollarán habilidades para comprender y responder eficazmente a las emociones de los demás.",
        "El curso ofrece herramientas prácticas para conocerse mejor, fortalecer las relaciones interpersonales, motivarse, autorregularse y cultivar una mentalidad de crecimiento que permita adaptarse a los cambios y enfrentar los retos del día a día.",
        "Su diferencial radica en un contenido actualizado, orientado tanto al bienestar emocional personal como al éxito profesional, en un mundo donde la inteligencia emocional es una habilidad altamente valorada para líderes y ciudadanos proactivos."
      ]
    },
    {
      id: "ambientes-positivos", imagen: "assets/cursos/ambientes-positivos.webp",
      titulo: "Ambientes de aprendizaje positivos y seguros",
      slug: "ambientes-de-aprendizaje-positivos-y-seguros",
      tipo: "Curso", area: "bienestar", estado: "desarrollo", modalidad: "Virtual",
      horas: 16, sesiones: 8, semanas: 4,
      programa: "desarrollo-socioemocional",
      profesores: ["lina-saldarriaga", "natalia-cardenas", "jose-mejia"],
      descripcion: [
        "¿Quieres transformar tu práctica docente y contribuir a un entorno escolar más pacífico, inclusivo y emocionalmente saludable? Este curso es la oportunidad para adquirir herramientas prácticas, diseñadas para enfrentar los desafíos actuales que implica formar en desarrollo socioemocional a niños, niñas y adolescentes.",
        "Comprender el desarrollo socioemocional y su impacto en el aprendizaje permite no solo mejorar el bienestar de los estudiantes, sino también promover un ambiente más positivo y colaborativo en el aula. Además, el curso ofrece herramientas para que los educadores reflexionen sobre sus propias emociones, gestionen mejor los desafíos del día a día y faciliten un aprendizaje integral que prepare a los estudiantes para la vida."
      ]
    },
    {
      id: "desarrollo-socioemocional", imagen: "assets/cursos/desarrollo-socioemocional.webp",
      titulo: "Desarrollo socioemocional en el contexto escolar",
      slug: "desarrollo-socioemocional-en-el-contexto-escolar",
      tipo: "Programa", area: "bienestar", estado: "proximamente", modalidad: "Virtual",
      horas: 32, sesiones: 16, semanas: 8,
      profesores: ["lina-saldarriaga", "natalia-cardenas", "jose-mejia"],
      descripcion: [
        "¿Quieres ser parte del cambio para construir escuelas más pacíficas, inclusivas y emocionalmente saludables? Este programa académico ofrece dos cursos esenciales para transformar tu práctica docente y fortalecer la convivencia en tu institución.",
        "El primero fortalece el rol del docente como agente de cambio, promoviendo el desarrollo socioemocional de los estudiantes, lo cual mejora tanto su bienestar como el ambiente en el aula, y ofrece herramientas para que los educadores gestionen sus emociones y enfrenten los desafíos diarios.",
        "El segundo, sobre la prevención de la agresión y el bullying escolar, ofrece estrategias prácticas para gestionar conflictos, prevenir la violencia y mejorar la convivencia, con enfoques respaldados por evidencia científica."
      ]
    },
    {
      id: "constructores-paz", imagen: "assets/cursos/constructores-paz.webp",
      titulo: "Constructores de paz en Colombia",
      slug: "constructores-de-paz-en-colombia",
      tipo: "Curso", area: "bienestar", estado: "proximamente", modalidad: "Virtual",
      horas: 16, sesiones: 8, semanas: 8,
      profesores: ["ana-velasquez"],
      descripcion: [
        "Pertenecer a una sociedad que durante gran parte de su historia ha estado sumergida en el conflicto armado deriva en la legitimación colectiva del uso de la violencia para resolver los problemas, así como en un sentimiento de impotencia individual frente al logro de la paz. Este curso pretende reactivar la esperanza de sus participantes, aportándoles conocimientos, actitudes y habilidades socioemocionales para encontrar caminos de construcción de paz social en Colombia, iniciando por la búsqueda de su propia paz interior.",
        "El curso parte de dos supuestos: para contribuir a la paz social es vital encontrar paz en el interior y en las relaciones cercanas; y para alcanzar la paz interior es esencial un trabajo de autoconocimiento. Así, invita a una exploración reflexiva, acompañada de prácticas de atención plena (mindfulness), que conecta el autoconocimiento con el análisis crítico del contexto colombiano de posguerra y con la construcción de un compromiso individual de paz, aplicado en situaciones de conflicto interpersonal y de perdón."
      ]
    },
    {
      id: "prevencion-agresion", imagen: "assets/cursos/prevencion-agresion.webp",
      titulo: "Herramientas para la prevención de la agresión y la intimidación escolar",
      slug: "herramientas-para-la-prevencion-de-la-agresion-y-la-intimidacion-escolar",
      tipo: "Curso", area: "bienestar", estado: "proximamente", modalidad: "Virtual",
      horas: 16, sesiones: 8, semanas: 4,
      programa: "desarrollo-socioemocional",
      profesores: ["lina-saldarriaga", "natalia-cardenas", "jose-mejia"],
      descripcion: [
        "¿Quieres ser parte del cambio para construir escuelas más pacíficas e inclusivas? En este curso aprenderás estrategias prácticas basadas en evidencia para gestionar conflictos, prevenir la agresión escolar y fortalecer la convivencia en tu institución.",
        "Diseñado para docentes y personas interesadas en la prevención de la violencia escolar, combina trabajo con expertos, herramientas innovadoras y un enfoque práctico: resolución efectiva de conflictos, prevención de la agresión, construcción de una cultura de paz, acompañamiento experto y una metodología con simulaciones, análisis de casos reales y actividades interactivas."
      ]
    },
    {
      id: "mentor-investigadores", imagen: "assets/cursos/mentor-investigadores.webp",
      titulo: "Mentor de procesos de formación de investigadores participativos con comunidad",
      slug: "mentor-de-procesos-de-formacion-de-investigadores-participativos-con-comunidad",
      tipo: "Certificado profesional", area: "comunidad", estado: "desarrollo", modalidad: "Blended",
      horas: 192, sesiones: 12, semanas: 21,
      profesores: ["irma-florez", "monica-alvarez"],
      insignia: "https://equipoedco.uniandes.edu.co/wp-content/uploads/RepInsig-Mentor-procesos-formacion-investigadores.png",
      descripcion: [
        "La certificación profesional aborda las necesidades de la región latinoamericana y se alinea con las demandas de los escenarios laborales contemporáneos, incorporando los Objetivos de Desarrollo Sostenible de la UNESCO como marco orientador para formar profesionales capaces de abordar los desafíos actuales desde una perspectiva integral y socialmente responsable.",
        "Los egresados no solo adquieren habilidades teóricas sólidas: se capacitan para aplicar y adaptar ese conocimiento en colaboración con organizaciones y comunidades, en línea con la agenda del Consorcio Knowledge for Change de la Cátedra UNESCO Community Based Research and Social Responsibility in Higher Education.",
        "El programa favorece habilidades interdisciplinarias y una comprensión profunda de las realidades sociales y culturales de América Latina, que el mercado laboral valora en profesionales capaces de abordar problemáticas complejas desde múltiples perspectivas."
      ]
    },
    {
      id: "educacion-financiera", imagen: "assets/cursos/educacion-financiera.webp",
      titulo: "Educación financiera, mentalidad de crecimiento y propósito de vida",
      slug: "educacion-financiera-mentalidad-de-crecimiento-y-proposito-de-vida",
      tipo: "Curso", area: "crecimiento", estado: "proximamente", modalidad: "Virtual",
      horas: 20, sesiones: 10, semanas: 5,
      profesores: ["isabel-tejada", "paula-garcia", "francisco-ardila"],
      descripcion: [
        "Este curso está diseñado para fortalecer habilidades en la gestión de recursos financieros desde una perspectiva consciente, considerando las creencias y emociones que influyen en la toma de decisiones.",
        "A partir del propósito personal y la construcción de escenarios futuros, se brindan herramientas para fomentar el bienestar financiero y mitigar consecuencias asociadas al estrés financiero, como la ansiedad frente a la incertidumbre económica, la presión emocional derivada del endeudamiento, las decisiones impulsivas por falta de planificación y el impacto de la inestabilidad financiera en el bienestar personal."
      ]
    },
    {
      id: "politicas-primera-infancia", imagen: "assets/cursos/politicas-primera-infancia.webp",
      titulo: "Políticas de primera infancia en América Latina",
      slug: "politicas-de-primera-infancia-en-america-latina",
      tipo: "Certificado de competencias", area: "liderazgo", estado: "desarrollo", modalidad: "Blended",
      horas: 120, sesiones: 40, semanas: 40,
      profesores: ["eduardo-escallon", "carolina-maldonado"],
      descripcion: [
        "Este programa, desarrollado en alianza entre el Tecnológico de Monterrey, la Universidad Católica de Chile y la Universidad de los Andes, forma líderes capaces de analizar, diseñar y abogar por políticas de primera infancia basadas en evidencia.",
        "A través de cuatro módulos, los participantes exploran el contexto histórico, los sistemas actuales, el liderazgo y los marcos de análisis de políticas, combinando teoría y práctica para comprender la complejidad de la educación inicial y promover transformaciones sostenibles.",
        "Se trata de una propuesta pionera en la región, orientada a fortalecer el liderazgo y la coordinación en políticas de primera infancia para impulsar el desarrollo educativo y social en América Latina y el Caribe."
      ]
    },
    {
      id: "habilidades-ia", imagen: "assets/cursos/habilidades-ia.webp",
      titulo: "Habilidades y herramientas para integrar la inteligencia artificial a tu práctica pedagógica de forma ética, creativa e intencionada",
      slug: "habilidades-y-herramientas-para-integrar-la-inteligencia-artificial-a-tu-practica-pedagogica-de-forma-etica-creativa-e-intencionada",
      tipo: "Programa", area: "ia", estado: "desarrollo", modalidad: "Virtual",
      horas: 18, sesiones: 6, semanas: 6,
      profesores: [],
      descripcion: [
        "Desde el diseño de clases hasta la implementación de recursos personalizados y el análisis de datos con IA, el uso intencionado y ético de esta tecnología abre un abanico de posibilidades para innovar en la docencia y fortalecer los procesos de enseñanza y aprendizaje. En esta cohorte de la serie Edu+IA desarrollarás habilidades para colaborar con la IA y comprender los roles que puede asumir en la concepción, desarrollo y evaluación de diseños pedagógicos.",
        "La propuesta se fundamenta en las competencias del AI Literacy Framework (AILit) de la OCDE, la Comisión Europea y Code.org —interacción con IA, creación con IA, gestión de IA y diseño de IA— y en las directrices de la UNESCO para una adopción de la IA centrada en el ser humano.",
        "Cada taller funciona de forma independiente, con niveles diversos de complejidad técnica y pedagógica. Quienes lo deseen pueden tomar el paquete completo de seis talleres para una experiencia formativa más amplia e integral."
      ]
    },
    {
      id: "prompt-workflow", imagen: "assets/cursos/prompt-workflow.webp",
      titulo: "Del prompt al workflow: creación de recursos educativos con inteligencia artificial",
      slug: "del-prompt-al-workflow-creacion-de-recursos-educativos-con-inteligencia-artificial",
      tipo: "Taller", area: "ia", estado: "desarrollo", modalidad: "Virtual",
      horas: 3, sesiones: 1, semanas: 1,
      programa: "habilidades-ia",
      profesores: [],
      descripcion: [
        "La inteligencia artificial generativa está transformando la forma en que interactuamos con el conocimiento. En este taller descubrirás cómo utilizar herramientas de IA para crear materiales educativos innovadores y de alta calidad.",
        "¿Sabías que un simple prompt no es suficiente? Aprenderás a diseñar un workflow: una estrategia para interactuar de manera efectiva con la IA y crear infografías, páginas de contenido y recursos multimedia adaptados a tus necesidades y a las de tus estudiantes, pasando de instrucciones únicas a flujos de co-creación que mejoran la calidad, permanencia y adaptabilidad de lo generado."
      ]
    },
    {
      id: "ia-imagen-video", imagen: "assets/cursos/ia-imagen-video.webp",
      titulo: "De la imaginación a la creación didáctica: inteligencia artificial generativa para imagen y video",
      slug: "de-la-imaginacion-a-la-creacion-didactica-inteligencia-artificial-generativa-para-imagen-y-video",
      tipo: "Taller", area: "ia", estado: "abierto", modalidad: "Virtual",
      horas: 3, sesiones: 1, semanas: 1,
      programa: "habilidades-ia",
      profesores: [],
      descripcion: [
        "La inteligencia artificial ha democratizado la creación audiovisual: ahora tú también puedes generar recursos creativos sin ser experto en edición de imagen. Este taller está pensado para docentes, diseñadores instruccionales y agentes educativos que buscan ampliar sus recursos pedagógicos y comunicativos.",
        "Explora cómo las herramientas de IA permiten generar imágenes y videos de forma estratégica, creativa y ética. Aprende haciendo: ejercicios guiados, posibilidades y limitaciones de estas tecnologías y un flujo de trabajo audiovisual apoyado en IA. ¿Te atreves a repensar la forma en que enseñas y comunicas?"
      ]
    },
    {
      id: "ia-design-thinking", imagen: "assets/cursos/ia-design-thinking.webp",
      titulo: "Inteligencia artificial y design thinking: expande tus capacidades creativas para el aprendizaje",
      slug: "inteligencia-artificial-y-design-thinking-expande-tus-capacidades-creativas-para-el-aprendizaje",
      tipo: "Taller", area: "ia", estado: "abierto", modalidad: "Virtual",
      horas: 3, sesiones: 1, semanas: 1,
      programa: "habilidades-ia",
      profesores: [],
      descripcion: [
        "La inteligencia artificial está ampliando las fronteras de la creatividad. En este taller descubrirás cómo combinar el enfoque Design Thinking con herramientas de IA para potenciar tu capacidad de innovar.",
        "Aunque no tengas experiencia en Design Thinking, explorarás sus fases clave y verás cómo la IA facilita la exploración de necesidades, la generación de ideas y la creación de prototipos, con herramientas prácticas para diseñar soluciones adaptadas a tus contextos educativos o profesionales."
      ]
    },
    {
      id: "ia-evaluacion-inclusiva", imagen: "assets/cursos/ia-evaluacion-inclusiva.webp",
      titulo: "Inteligencia artificial y evaluación inclusiva",
      slug: "inteligencia-artificial-y-evaluacion-inclusiva",
      tipo: "Taller", area: "ia", estado: "abierto", modalidad: "Virtual",
      horas: 3, sesiones: 1, semanas: 1,
      programa: "habilidades-ia",
      profesores: [],
      descripcion: [
        "Descubre cómo las herramientas de inteligencia artificial generativa (IAGen) pueden agilizar tus procesos de evaluación y retroalimentación de forma precisa, personalizada y accesible.",
        "Aprende a diseñar evaluaciones y brindar retroalimentaciones inclusivas con base en los principios del Diseño Universal para el Aprendizaje (DUA), considerando la integridad académica, e integra la IAGen en procesos de evaluación que no solo midan, sino que también comuniquen y apoyen."
      ]
    },
    {
      id: "analitica-datos", imagen: "assets/cursos/analitica-datos.webp",
      titulo: "Analítica y datos en educación con inteligencia artificial",
      slug: "analitica-y-datos-en-educacion-con-inteligencia-artificial",
      tipo: "Taller", area: "ia", estado: "abierto", modalidad: "Virtual",
      horas: 3, sesiones: 1, semanas: 1,
      programa: "habilidades-ia",
      profesores: [],
      descripcion: [
        "La inteligencia artificial y la analítica de datos están transformando la forma en que tomamos decisiones educativas. Descubrirás cómo recolectar y organizar la información que generas a diario —desde «pequeños datos» en el aula hasta registros en plataformas digitales— y transformarla en insumos para mejorar tus prácticas y comprender mejor a tus estudiantes, de manera ética y responsable.",
        "Conocerás las diferencias entre Learning Analytics, Educational Data Mining y Educational Data Science, y aprenderás a valorar sus posibilidades y limitaciones para detectar patrones, anticipar riesgos y personalizar la enseñanza."
      ]
    },
    {
      id: "evaluar-tiempos-ia", imagen: "assets/cursos/evaluar-tiempos-ia.webp",
      titulo: "Cómo evaluar en tiempos de inteligencia artificial",
      slug: "como-evaluar-en-tiempos-de-inteligencia-artificial",
      tipo: "Taller", area: "ia", estado: "abierto", modalidad: "Virtual",
      horas: 3, sesiones: 1, semanas: 1,
      programa: "habilidades-ia",
      profesores: [],
      descripcion: [
        "En este taller exploraremos dos temas principales: qué podemos (y debemos) cambiar ahora que los estudiantes pueden usar la IA, y cómo usar la IA responsablemente como apoyo para la evaluación.",
        "Partiremos de una reflexión crítica sobre el impacto de la IA generativa en el diseño y la concepción de la evaluación, y exploraremos buenas prácticas para incorporarla en el aula."
      ]
    }
  ],

  profesores: [
    { id: "ana-velasquez", imagen: "assets/profes/ana-velasquez.webp", nombre: "Ana María Velásquez", cargo: "Profesora Titular",
      bio: "Profesora de la Facultad de Educación de la Universidad de los Andes. Doctora en psicología del desarrollo humano de la Universidad de Concordia (Canadá), magíster en educación y psicóloga de la Universidad de los Andes. Tiene 20 años de experiencia como formadora de docentes y es autora de más de 35 artículos de investigación. Sus áreas de experticia son el clima y manejo de aula, las relaciones de pares, la educación socioemocional y ciudadana, la prevención de la agresión y la promoción de la convivencia escolar. Ha investigado en el diseño y evaluación de programas como Aulas en Paz y ha participado en la construcción de la Encuesta de Clima Escolar, la Prueba de Capacidades Ciudadanas de la Secretaría de Educación Distrital y las Pruebas Saber de Competencias Ciudadanas del ICFES." },
    { id: "monica-moreno", imagen: "assets/profes/monica-moreno.webp", nombre: "Mónica Tatiana Moreno", cargo: "",
      bio: "Psicóloga de la Universidad El Bosque, magíster en Psicología Clínica de la Universidad Nacional de Colombia y doctoranda en Educación de la Universidad de los Andes. Educadora de familias en Disciplina Positiva, entrenada en microanálisis y video-feedback por el Centro de Intervención Temprana de Chile y en habilidades de la Terapia Dialéctico Comportamental (DBT). Su investigación se centra en la regulación emocional de la primera infancia, los efectos de la crianza y las prácticas docentes en el aprendizaje, y la evaluación de programas de prevención del maltrato infantil. Ha sido docente universitaria, investigadora, diseñadora de programas educativos y directora de instituciones educativas." },
    { id: "irma-florez", imagen: "assets/profes/irma-florez.webp", nombre: "Irma Flórez", cargo: "Profesora Asociada",
      bio: "Psicóloga de la Universidad Nacional Autónoma de México, especialista en Desarrollo Comunitario (JICA, Tokio), psicoterapeuta familiar sistémica y magíster en Desarrollo Educativo y Social (UPN–CINDE). Doctora en Ciencias Sociales: Niñez y Juventud (CINDE–Universidad de Manizales). Mentora del Programa Knowledge for Change de la Cátedra UNESCO Community Based Research and Social Responsibility in Higher Education y coordinadora del Hub Colombia del Consorcio K4C." },
    { id: "andres-astaiza", imagen: "assets/profes/andres-astaiza.webp", nombre: "Andrés Astaiza", cargo: "",
      bio: "Psicólogo, magíster en Educación y candidato a magíster en Investigación en Ciencias Sociales, con más de siete años de experiencia en docencia universitaria en Psicología, Humanidades y Metodología de Investigación. Mentor certificado del Consorcio Knowledge for Change (K4C) de la UNESCO y miembro del Hub Colombia IAPaz, con experiencia en la coordinación de equipos interdisciplinarios de investigación. Su enfoque docente se basa en la innovación de las prácticas educativas, la interdisciplinariedad y el aprendizaje colaborativo." },
    { id: "luisa-gonzalez", imagen: "assets/profes/luisa-gonzalez.webp", nombre: "Luisa González", cargo: "",
      bio: "Licenciada en Biología y Química de la Universidad de Caldas, magíster y doctora en Educación de la Universidad de los Andes. Especialista en investigación cualitativa, con trayectoria en el diseño, implementación y evaluación de proyectos en diversos niveles educativos. Su trabajo se enfoca en la creación de espacios formativos, el análisis curricular desde una perspectiva sistémica, la democratización del conocimiento y la responsabilidad social en la educación superior. Mentora de la cuarta cohorte del Programa Knowledge for Change de la Cátedra UNESCO." },
    { id: "isabel-tejada", imagen: "assets/profes/isabel-tejada.webp", nombre: "Isabel Tejada", cargo: "Profesora Asociada",
      bio: "Educadora e investigadora con 20 años de experiencia, profesora asociada de la Facultad de Educación de la Universidad de los Andes. Doctora con doble titulación en Ciencias del Lenguaje y en Comunicación Lingüística y Mediación Multilingüe (Université Paris 8 y Universitat Pompeu Fabra). Trabaja en mentalidad de crecimiento, el inglés como medio de instrucción y la inteligencia artificial centrada en el ser humano. Coautora de The Growth Mindset Revolution Guide (2024) y de un capítulo en Mindsets in Language Education (2025)." },
    { id: "eduardo-escallon", imagen: "assets/profes/eduardo-escallon.webp", nombre: "Eduardo Escallón", cargo: "Profesor Asociado",
      bio: "Codirector del grupo de investigación Educación para la primera infancia. Historiador y doctor en Literaturas y Lenguas Romances. Global Visiting Faculty del Centro de Primera Infancia del Tecnológico de Monterrey y Fundación FEMSA. Fundó el Centro de Español de la Universidad de los Andes, dirigió el CIFE y lideró la creación de la Facultad de Educación, de la que fue primer decano. Lideró el componente pedagógico de la Medición nacional de la calidad de la educación inicial y el proceso de formación Evaluar para Avanzar, que benefició a 2.400 docentes de educación inicial." },
    { id: "carolina-maldonado", imagen: "assets/profes/carolina-maldonado.webp", nombre: "Carolina Maldonado", cargo: "Profesora Titular",
      bio: "Codirectora del Grupo de investigación en Educación Inicial de la Universidad de los Andes y Global Visiting Faculty del Centro de Primera Infancia del Tecnológico de Monterrey y Fundación FEMSA. Doctora en Educación de la Universidad de Pittsburgh, con formación en psicología del desarrollo y educación. Su carrera se centra en la calidad de la educación inicial y su relación con el desarrollo infantil. Dirigió la Evaluación Nacional de Calidad de la Educación Infantil en Colombia para el Ministerio de Educación y ha liderado evaluaciones de programas de desarrollo profesional docente." },
    { id: "paula-garcia", imagen: "assets/profes/paula-garcia.webp", nombre: "Paula García", cargo: "Profesora Asociada",
      bio: "Educadora con Ph. D. en Fonoaudiología de Teachers College, Columbia University, con formación en educación especial, neurociencias y educación. Profesora asociada de la Facultad de Educación de la Universidad de los Andes. Investiga las prácticas y políticas que facilitan el aprendizaje en el aula diversa y la reflexión docente sobre sus mentalidades. Lleva siete años formando docentes en Mentalidad de Crecimiento y es coautora de The Growth Mindset Revolution Guide (2024) y de un capítulo en Mindsets in Language Education (2025)." },
    { id: "pedro-gomez", imagen: "assets/profes/pedro-gomez.webp", nombre: "Pedro Gómez", cargo: "Profesor Visitante · UED",
      bio: "Licenciado en Matemáticas e Ingeniero Industrial de la Universidad de los Andes, con maestrías de The University of Kent y The London School of Economics y DEA en Sociología de la Universidad París III. Doctor en Didáctica de la Matemática de la Universidad de Granada. Director de UED («una empresa docente»), del proyecto Funes, de la maestría en Educación Matemática y de las especializaciones virtuales en Educación Matemática de la Universidad de los Andes. Autor de libros de texto y de didáctica de la matemática." },
    { id: "alexandra-bulla", imagen: "assets/profes/alexandra-bulla.webp", nombre: "Alexandra Bulla", cargo: "UED",
      bio: "Licenciada en educación básica con énfasis en Matemáticas de la Universidad Distrital Francisco José de Caldas y magíster en Educación Matemática de la Universidad de los Andes. Forma parte del equipo directivo de UED, donde es gestora de proyectos académicos, coordina programas de formación permanente y la Especialización virtual en Educación Matemática para profesores de primaria, y participa en proyectos de innovación e investigación apoyados por Minciencias." },
    { id: "martha-ramirez", imagen: "assets/profes/martha-ramirez.webp", nombre: "Martha Adelaida Ramírez", cargo: "Profesora Asociada",
      // En el Canva su ficha repite por error la biografía de Irma Flórez.
      bio: "" },
    { id: "javier-velazquez", imagen: "assets/profes/javier-velazquez.webp", nombre: "Javier Velázquez", cargo: "Profesor de Cátedra",
      bio: "Profesor de cátedra de la Facultad de Educación de la Universidad de los Andes y consultor experto en gamificación. Literato y magíster en Literatura de la Universidad de los Andes. Diseñador de juegos de mesa y fundador de Azahar Juegos y Free to Play. Tiene 12 años de experiencia en educación, cinco de ellos en consultorías de gamificación educativa y organizacional para entidades como Corpovisionarios, Codensa, Terpel y ETB." },
    { id: "andrea-solano", imagen: "assets/profes/andrea-solano.webp", nombre: "Andrea del Pilar Solano", cargo: "DIDACTA",
      bio: "Psicóloga y magíster en Psicología de la Universidad de los Andes, con 26 años de experiencia en educación que incluyen consultoría a organismos internacionales, docencia, investigación y acompañamiento y formación de docentes. Trabaja en la Dirección de Innovación y Desarrollo Académico, Curricular y Tecnológico para el Aprendizaje (DIDACTA) de la Universidad de los Andes." },
    { id: "johanna-alfonso", imagen: "assets/profes/johanna-alfonso.webp", nombre: "Johanna Alfonso Solano", cargo: "Universidades corporativas", nota: "Cursos corporativos",
      bio: "Con más de 16 años de trayectoria en el diseño y gestión de universidades corporativas y estrategias de diversidad e inclusión en Colombia. Fue directora de la Universidad Ecopetrol y de la Universidad Compensar, y lidera la Dirección Académica de la Cámara de la Diversidad. Ha dirigido estrategias de aprendizaje y desarrollo organizacional para empresas como Juan Valdez, Colmena Seguros y Banco Caja Social. Licenciada en Filosofía, magíster en Educación de la Universidad de los Andes y candidata a MBA, certificada por el Learning Performance Institute." },
    { id: "alejandro-casas", imagen: "assets/profes/alejandro-casas.webp", nombre: "Alejandro Casas", cargo: "",
      bio: "Docente con más de 13 años de experiencia en todos los niveles educativos. En la Universidad de los Andes ha enseñado inteligencia emocional en pregrado, resiliencia y adaptabilidad organizacional en el programa «Todos a la U» y comunicación efectiva en educación continua; también fue docente asistente en cursos de la Facultad de Educación como ambientes de aprendizaje, clima de aula y desarrollo de competencias socioemocionales. Fue jefe de área y docente de filosofía en el Gimnasio Británico y el Colegio del Santo Ángel." },
    { id: "camilo-lopez", imagen: "assets/profes/camilo-lopez.webp", nombre: "Camilo Ernesto López Guarín", cargo: "",
      bio: "Ingeniero de Sistemas de la Universidad Nacional de Colombia, magíster en Ingeniería de Sistemas y Computación y en Psicología de la misma institución. Ha sido investigador y analista de datos en educación, desde la inicial hasta la superior, para la Universidad Nacional, la Universidad de los Andes y el Ministerio de Educación Nacional. Es estudiante del doctorado en Educación de la Universidad de los Andes, donde investiga la preparación para la educación superior." },
    { id: "lina-saldarriaga", imagen: "assets/profes/lina-saldarriaga.webp", nombre: "Lina María Saldarriaga Mesa", cargo: "",
      bio: "Psicóloga y magíster en Psicología de la Universidad de los Andes y Ph. D. en Psicología del Desarrollo de la Universidad de Concordia (Canadá). Directora de operaciones del programa Aulas en Paz y coordinadora del HUB Latinoamericano de la Coalition for Good Schools. Ha sido consultora e investigadora del Ministerio de Educación, el ICFES, el Banco Mundial y Save the Children. Experta en desarrollo infantil y salud mental en la infancia y la adolescencia." },
    { id: "natalia-cardenas", imagen: "assets/profes/natalia-cardenas.webp", nombre: "Natalia Cárdenas Zuluaga", cargo: "",
      bio: "Psicóloga, magíster en Educación y Desarrollo Humano. Desde 2009 es coordinadora académica del Simposio Internacional Acoso Escolar (Bullying) y asesora proyectos de convivencia escolar para el Ministerio de Educación Nacional, Fundación SURA y Bancolombia, entre otros. Facilitadora del Programa ACT de la Asociación Americana de Psicología y de Prácticas Restaurativas. Coordinadora de Desarrollo de Aulas en Paz y profesora asociada de la Universidad CES." },
    { id: "jose-mejia", imagen: "assets/profes/jose-mejia.webp", nombre: "José Fernando Mejía", cargo: "",
      bio: "Psicólogo de la Universidad de los Andes con maestría en Educación de la Universidad de Harvard. Consultor internacional en ciudadanía global, aprendizaje socioemocional y prevención del acoso escolar para el Banco Mundial, el BID, la OEA, la UNESCO y el ICFES. Formó parte del equipo que desarrolló los Estándares de Competencias Ciudadanas de Colombia y coordinó el currículo de desarrollo socioemocional del Ministerio de Educación de Perú. Es director ejecutivo de Aulas en Paz y preside el Comité Directivo de EDUCAPAZ." },
    { id: "monica-alvarez", imagen: "assets/profes/monica-alvarez.webp", nombre: "Mónica del Pilar Álvarez", cargo: "",
      bio: "Comunicadora social y periodista, magíster en Comunicación, Desarrollo y Cambio Social de la Universidad Santo Tomás. Mentora del Programa de Investigación Basada en Comunidad del Consorcio K4C de la UNESCO, adscrita al Hub Colombia IAPaz. Coordinadora académica del Semestre Paz y Región de la Universidad de Ibagué, donde acompaña iniciativas de educación superior y educación popular en contextos comunitarios y rurales." },
    { id: "francisco-ardila", imagen: "assets/profes/francisco-ardila.webp", nombre: "Francisco Mario Ardila Jiménez", cargo: "",
      bio: "Experto en finanzas personales, administración de canales corporativos y estrategias financieras. Autor de El Reino (2024), un libro para jóvenes sobre finanzas, y del video libro Libertad Financiera (2008). Con más de 25 años en ventas consultivas y gestión estratégica en Latinoamérica, ha trabajado en Dell, IBM y Lexmark. MBA de la Universidad de los Andes y consultor en educación y finanzas personales." }
  ],

  corporativos: {
    intro: "Impulsamos innovación y competitividad con programas de formación continua a la medida, diseñados para transformar organizaciones y potenciar su crecimiento sostenible.",
    pregunta: "¿Por qué incluso las entidades que no pertenecen al sector educativo deberían incluir en sus planes de formación programas de aprendizaje continuo y educación para toda la vida, de la mano de una Facultad de Educación?",
    voces: [
      { autor: "Andrés Gutiérrez", rol: "Profesor",
        texto: "Formar a quienes forman, en el contexto colombiano, es hoy una ventaja estratégica para cualquier organización, sea o no del sector educativo, pues puede innovar, adaptarse y crecer rápidamente hacia su misión y visión. Aprender a enseñar transforma la manera de diseñar experiencias, liderar equipos, comunicar y construir el know-how en torno a las prácticas y desafíos que enfrenta diariamente cualquier empresa o institución." },
      { autor: "Johanna Alfonso Solano", rol: "Profesora",
        texto: "En un mundo en constante cambio el conocimiento se convierte en el recurso más estratégico: garantiza la competitividad, impulsa la innovación y fortalece la sostenibilidad social. […] Las organizaciones no solo profesionalizan sus procesos de capacitación, transformándolos en experiencias pedagógicas estructuradas y efectivas, sino que también envían un mensaje poderoso a su talento y a la sociedad: aquí no solo se trabaja, aquí también se aprende y se crece." }
    ],
    casos: [
      {
        cliente: "ICEIN Ingenieros Constructores S.A.S.",
        logo: "assets/empresas/icein.webp",
        web: "https://icein.com.co/",
        cursos: ["Formador de formadores técnicos", "Diseño de ambientes de aprendizaje activos"],
        retos: [
          "Formar ingenieros y técnicos con conocimiento disciplinar pero no pedagógico.",
          "Convertir la experiencia en procesos de enseñanza efectivos.",
          "Incorporar metodologías activas y pertinentes para equipos de trabajo.",
          "Alinear la formación con el Sistema Nacional de Cualificaciones.",
          "Crear competencias para anticipar escenarios reales del sector de la construcción."
        ],
        logros: [
          "Transformó expertos técnicos en líderes pedagógicos, capaces de enseñar con propósito e inspirar a sus equipos.",
          "Generó proyectos aplicados que respondieron a necesidades reales de la organización y del sector.",
          "Introdujo herramientas activas, digitales y de IA que mejoraron la calidad de sus formaciones.",
          "Promovió una cultura de compartir conocimiento: enseñar multiplica la experiencia técnica y la convierte en legado.",
          "Impactó la productividad y la seguridad en obra con programas ajustados al Sistema Nacional de Cualificaciones."
        ],
        cierre: "Cuando un técnico o ingeniero asume el rol de formador, no solo comparte su experiencia: genera confianza, dinamiza el aprendizaje colectivo y abre nuevas posibilidades de crecimiento para toda la organización."
      },
      {
              cliente: "Fundación Panamericana para el Desarrollo",
        logo: "assets/empresas/fupad.webp",
        web: "https://fupad.org/",
        cursos: ["Formador de formadores", "Estrategias didácticas innovadoras para el aprendizaje activo y experiencial"],
        retos: [
          "Fortalecer las habilidades para implementar el enfoque de aprendizaje experiencial mediante metodologías activas, estrategias pedagógicas y evaluativas innovadoras, y acompañamiento basado en la retroalimentación."
        ],
        logros: [
          "Profesionales expertos del sector justicia —Corte Suprema de Justicia, Policía Judicial y Fiscalía— conectaron con su propia experiencia para ejercitarse en nuevas habilidades de formación.",
          "Se reconocieron capaces de diseñar oportunidades de aprendizaje que trascienden la práctica tradicional, con metodologías activas, innovación pedagógica e integración de tecnologías digitales."
        ],
        cierre: "Fue un proceso de formación de formadores, humano y reflexivo, que dejó una capacidad instalada para seguir fortaleciendo los programas de formación en sus instituciones."
      },
      {
        cliente: "Centro de Educación Tecnológica — Colsubsidio",
        logo: "assets/empresas/cet.webp",
        web: "https://cetcolsubsidio.edu.co/",
        cursos: ["Caja de herramientas del formador efectivo", "Siete herramientas pedagógicas para crear y acompañar procesos de aprendizaje en adultos para la empleabilidad"],
        retos: [
          "Promover el uso de herramientas de formación basadas en las ciencias del aprendizaje para crear experiencias memorables y efectivas en la enseñanza de adultos para la empleabilidad."
        ],
        logros: [
          "El equipo de profesores CET se apropió de herramientas que conectan el desarrollo de habilidades con ambientes formativos donde se cuida tanto el conocimiento como la experiencia humana.",
          "Comprendió que enseñar a adultos implica crear espacios de confianza, motivación y apoyo: «si no te emocionas, no aprendes»."
        ],
        cierre: "Su rol trasciende el de expertos y se transforma en el de diseñadores de experiencias educativas, informados por las ciencias del aprendizaje y capaces de ampliar las oportunidades de empleo de las personas."
      }
    ]
  }
};
