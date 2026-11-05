/* Datos del micrositio de Educación Continua — Facultad de Educación, Uniandes.
   Se edita desde admin.html. Si lo editas a mano, conserva el formato JSON.

   Cursos: slug = dirección en educacioncontinua.uniandes.edu.co/<slug>/p;
   estado = abierto | proximamente | desarrollo | finalizado; area = id de AREAS; profesores = ids. */

window.EDCO = {
  "contacto": {
    "whatsapp": "573103018445",
    "correo": "avega@uniandes.edu.co",
    "portal": "https://educacioncontinua.uniandes.edu.co/"
  },
  "areas": [
    {
      "id": "ia",
      "nombre": "Inteligencia artificial"
    },
    {
      "id": "bienestar",
      "nombre": "Bienestar y convivencia"
    },
    {
      "id": "docencia",
      "nombre": "Práctica docente"
    },
    {
      "id": "comunidad",
      "nombre": "Investigación con comunidad"
    },
    {
      "id": "liderazgo",
      "nombre": "Liderazgo y política educativa"
    },
    {
      "id": "crecimiento",
      "nombre": "Mentalidad y desarrollo personal"
    }
  ],
  "cursos": [
    {
      "id": "evaluacion-para-el-aprendizaje-apoyada-por-inteligencia-arti",
      "slug": "evaluacion-para-el-aprendizaje-apoyada-por-inteligencia-artificial",
      "area": "ia",
      "profesores": [
        "luis-eduardo-jaramillo",
        "gary-alberto-cifuentes-alvarez"
      ],
      "titulo": "Evaluación para el aprendizaje apoyada por inteligencia artificial",
      "tipo": "Taller",
      "estado": "abierto",
      "modalidad": "Virtual",
      "horas": 3,
      "sesiones": 1,
      "semanas": 1,
      "horario": "Martes de 5:00 p.m. a 8:00 p.m.",
      "fechas": "10 de noviembre de 2026",
      "inscripcionHasta": "5 de noviembre de 2026",
      "descripcion": [
        "La inteligencia artificial está transformando la forma en que diseñamos y comprendemos la evaluación del aprendizaje. En este taller explorarás cómo utilizar herramientas de inteligencia artificial para diseñar evaluaciones más efectivas, auténticas y alineadas con los objetivos de aprendizaje de tus estudiantes. Descubre cómo la IA puede convertirse en una aliada para crear preguntas, actividades, evidencias de aprendizaje, rúbricas y estrategias de retroalimentación que fortalezcan el aprendizaje y optimicen el tiempo dedicado a tareas de diseño evaluativo. A través de ejercicios prácticos y casos aplicados, experimentarás con herramientas de inteligencia artificial generativa para diseñar instrumentos de evaluación, construir prompts efectivos y enriquecer tus prácticas pedagógicas. Además, reflexionarás sobre las oportunidades, limitaciones y buenas prácticas para integrar la inteligencia artificial en la evaluación educativa de manera crítica y responsable. ¿Te imaginas diseñar evaluaciones que, además de medir, potencien el aprendizaje? Este taller te mostrará cómo hacerlo realidad."
      ],
      "imagen": "assets/cursos/evaluacion-para-el-aprendizaje-apoyada-por-inteligencia-arti.webp"
    },
    {
      "id": "gemas-y-notebooks-usar-la-ia-con-proposito-pedagogico",
      "slug": "gemas-y-notebooks-usar-la-ia-con-proposito-pedagogico",
      "area": "ia",
      "profesores": [
        "isabel-tejada"
      ],
      "titulo": "Gemas y notebooks: usar la IA con propósito pedagógico",
      "tipo": "Taller",
      "estado": "abierto",
      "modalidad": "Virtual",
      "horas": 3,
      "sesiones": 1,
      "semanas": 1,
      "horario": "Jueves de 5:00 p.m. a 8:00 p.m.",
      "fechas": "12 de noviembre de 2026",
      "inscripcionHasta": "6 de noviembre de 2026",
      "descripcion": [
        "Las herramientas de Google ya ofrecen diversas formas potentes y muy distintas de vincular a la IA en acciones educativas. Con las gemas de Gemini, configuras asistentes reutilizables que conservan tu rol, tu estilo y tus instrucciones cada vez que lo abres. Con NotebookLM, trabajas anclando tus propias fuentes y puedes hacer creaciones multimodales, de modo que las respuestas se sostienen en los materiales que tú eliges. Pero, ¿cómo controlar y evaluar su calidad y cómo saber qué realmente aportas como ser humano? Saber cuándo conviene cada una, cómo configurarlas y comprender su alcance marca la diferencia entre usar la IA y usarla con criterio.",
        "Este taller práctico de 3 horas te propone acercarte a estas herramientas y decidir qué aportan realmente a tu aula. Aprenderás a configurar una gema con un propósito pedagógico claro y a montar un notebook que responda con fidelidad a tus materiales, de manera que cada herramienta sirva a una intención definida y sobre todo orientada por tu juicio y criterio. Al finalizar, contarás con un método que se mantiene en el tiempo y con tus propias herramientas entrenadas para los fines que requieras."
      ],
      "imagen": "assets/cursos/gemas-y-notebooks-usar-la-ia-con-proposito-pedagogico.webp"
    },
    {
      "id": "evaluacion-inclusiva-con-iagen-impulsa-esfuerzo-y-perseveran",
      "slug": "evaluacion-inclusiva-con-iagen-impulsa-esfuerzo-y-perseverancia",
      "area": "ia",
      "profesores": [
        "paula-garcia"
      ],
      "titulo": "Evaluación inclusiva con IAGen: impulsa esfuerzo y perseverancia",
      "tipo": "Taller",
      "estado": "abierto",
      "modalidad": "Virtual",
      "horas": 3,
      "sesiones": 1,
      "semanas": 1,
      "horario": "Martes de 5:00 p.m. a 8:00 p.m.",
      "fechas": "17 de noviembre de 2026",
      "inscripcionHasta": "12 de noviembre de 2026",
      "descripcion": [
        "La inteligencia artificial está revolucionando la forma en que evaluamos. Descubre cómo las herramientas concretas de inteligencia artificial generativa (IAGen) pueden agilizar tus procesos de evaluación y retroalimentación de forma precisa, personalizada y accesible. En este taller, explorarás alternativas prácticas de IAGen para mejorar el aprendizaje de tus estudiantes y tu práctica docente.",
        "Aprende a diseñar evaluaciones y brindar retroalimentaciones inclusivas con base en los principios del Diseño Universal para el Aprendizaje (DUA), considerando la integridad académica. Integra herramientas de IAGen en procesos de evaluación comunicativos y de apoyo, teniendo en cuenta la accesibilidad. ¿Te imaginas integrar la IAGen en un proceso de evaluación que no solo mida, sino que también comunique y apoye? Aquí descubrirás cómo hacerlo realidad."
      ],
      "imagen": "assets/cursos/evaluacion-inclusiva-con-iagen-impulsa-esfuerzo-y-perseveran.webp"
    },
    {
      "id": "planificar-clases-de-matematicas-con-inteligencia-artificial",
      "slug": "planificar-clases-de-matematicas-con-inteligencia-artificial",
      "area": "ia",
      "profesores": [],
      "titulo": "Planificar clases de matemáticas con inteligencia artificial",
      "tipo": "Diplomado",
      "estado": "abierto",
      "modalidad": "Virtual",
      "horas": 100,
      "sesiones": 7,
      "semanas": 7,
      "horario": "Miércoles de 5:00 p.m. a 7:30 p.m.",
      "fechas": "3 de febrero – 17 de marzo de 2027",
      "inscripcionHasta": "25 de enero de 2027",
      "descripcion": [
        "Planificar clases de matemáticas con inteligencia artificial es un curso virtual, diseñado para profesores que enseñan matemáticas en cualquier nivel educativo, con dos propósitos: (a) que conozcan cómo funciona la inteligencia artificial, sepan cómo se puede usar y desarrollen una actitud crítica frente a su uso y (b) que sepan cómo integrar la inteligencia artificial en su práctica de planificación de clases de matemáticas.",
        "A diferencia de otros cursos sobre inteligencia artificial en educación, este espacio propone que los profesores de matemáticas reflexionen acerca de su práctica docente, planifiquen sus clases empleando el modelo del análisis didáctico con ayuda de la inteligencia artificial y conozcan algunas herramientas de inteligencia artificial generativa. Esto les permitirá abordar su práctica de aula de acuerdo con los marcos internacionales sobre el desarrollo de competencias para el manejo de las tecnologías digitales con el propósito de contribuir al aprendizaje de sus estudiantes. La experiencia del estudiante en este curso será progresiva, interactiva y práctica: ahondará en el conocimiento general sobre inteligencia artificial generativa; motivará la integración de la inteligencia artificial en el campo educativo; y propondrá el uso del modelo de análisis didáctico para integrar la inteligencia artificial en la planificación de clases de matemáticas.",
        "*Quienes se inscriban antes del 1 de diciembre pagarán un valor de 630.000, luego de esta fecha el valor del curso es 700.000"
      ],
      "imagen": "assets/cursos/planificar-clases-de-matematicas-con-inteligencia-artificial.webp"
    },
    {
      "id": "inteligencia-artificial-como-apoyo-en-la-investigacion-educa",
      "slug": "inteligencia-artificial-como-apoyo-en-la-investigacion-educativa",
      "area": "ia",
      "profesores": [
        "gary-alberto-cifuentes-alvarez"
      ],
      "titulo": "Inteligencia artificial como apoyo en la investigación educativa",
      "tipo": "Curso",
      "estado": "abierto",
      "modalidad": "Virtual",
      "horas": 6,
      "sesiones": 3,
      "semanas": 3,
      "horario": "Jueves de 6:00 p.m. a 8:00 p.m. Hora Colombia",
      "fechas": "11 de febrero – 25 de febrero de 2027",
      "inscripcionHasta": "5 de febrero de 2027",
      "descripcion": [
        "Integrar IA generativa en investigación educativa exige más que manejar herramientas. La calidad del estudio depende de formular buenas preguntas, delimitar problemas relevantes y diseñar estratégicamente; para ello, el criterio humano es insustituible. Usada reflexivamente, la IA potencia el ciclo completo: mapea literatura, sugiere marcos, apoya el diseño de instrumentos y simula pilotos antes de salir a campo, actuando como tutor, coach y simulador sin reemplazar el juicio investigador.",
        "En esta formación, trabajaremos por retos: delimitar el problema y el marco, construir y pilotear instrumentos asistidos por IA (encuesta y guía de entrevistas), anticipar errores antes de levantar datos (pre-mortem ético) y realizar pruebas de estrés para verificar decisiones metodológicas. De igual forma, aprenderemos a usar bitácoras de prompts, criterios de calidad y límites de uso de la IA para asegurar transparencia, rigor y validez en la práctica investigativa."
      ],
      "imagen": "assets/cursos/inteligencia-artificial-como-apoyo-en-la-investigacion-educa.webp"
    },
    {
      "id": "gestion-estrategica-de-universidades-corporativas",
      "slug": "gestion-estrategica-de-universidades-corporativas",
      "area": "liderazgo",
      "profesores": [
        "johanna-alfonso",
        "vanessa-catano-gamboa"
      ],
      "titulo": "Gestión Estratégica de Universidades Corporativas",
      "tipo": "Microcredencial",
      "estado": "abierto",
      "modalidad": "Virtual",
      "horas": 70,
      "sesiones": 24,
      "semanas": 12,
      "horario": "Martes y jueves de 6:00 p.m. a 8:00 p.m. Sin clase en semana santa.",
      "fechas": "2 de marzo – 27 de mayo de 2027",
      "inscripcionHasta": "25 de febrero de 2027",
      "descripcion": [
        "Esta microcredencial es única en Colombia —y de las muy pocas en América Latina— enfocada específicamente en Diseño y Direccionamiento de Universidades Corporativas en el sector público y privado. Surge como respuesta a una brecha evidente: muchas organizaciones cuentan con áreas de formación o incluso con “universidades corporativas” nominales, pero carecen de modelos sólidos que conecten el aprendizaje con la estrategia y los resultados del negocio.",
        "En la práctica, la mayoría de las empresas operan en un primer nivel de madurez, centrado en listas anuales de necesidades de capacitación y catálogos de cursos desconectados del desempeño organizacional. Un segundo nivel corresponde a aquellas que estructuran formalmente una Universidad Corporativa, pero aún requieren fortalecer gobernanza, medición de impacto y articulación cultural. Solo unas pocas avanzan hacia ecosistemas de aprendizaje maduros, donde talento, tecnología, conocimiento y estrategia están integrados.",
        "Ejemplos clave a nivel internacional tenemos a Repsol Corporate University (España) que es un pilar en su transición hacia energías sostenibles. Integra desarrollo técnico, liderazgo y cultura, alineando el aprendizaje con la estrategia del negocio. Su impacto se refleja en la reducción de brechas críticas de talento y en la aceleración de capacidades clave para enfrentar entornos energéticos complejos. También el caso de BBVA Campus (España / Global) que es un referente global en aprendizaje conectado al negocio. Su modelo combina plataformas digitales, analítica y cultura de aprendizaje continuo. Ha impulsado la transformación digital del banco, fortaleciendo capacidades, liderazgo adaptativo y toma de decisiones basada en datos. En Colombia, si bien se cuenta con casos de alto nivel no todos tienen el mismo nivel de avance: Ecopetrol, Bancolombia, Compensar, Itaú, Banco de Bogotá, entre otros.",
        "Estudios como los de Boston Consulting Group evidencian que apenas el 11 % de las universidades corporativas mide su impacto en resultados de negocio. Esta cifra confirma la necesidad urgente de profesionales capaces de transformar planes de capacitación en modelos estratégicos de aprendizaje, con identidad, arquitectura curricular, uso de tecnología e indicadores claros de valor.",
        "En un entorno marcado por transformación digital, presión competitiva y convivencia de múltiples generaciones en el trabajo, las organizaciones requieren líderes que comprendan que una Universidad Corporativa no es un concepto decorativo, sino una forma estructurada de gestionar el aprendizaje como ventaja competitiva. Esta microcredencial prepara a sus egresados para asumir ese rol con criterio técnico, visión estratégica y capacidad de implementación real.",
        "Consulta la insignia digital que obtendrás por el desarrollo de esta microcredencial."
      ],
      "imagen": "assets/cursos/gestion-estrategica-de-universidades-corporativas.webp"
    },
    {
      "id": "educacion-matematica-para-profesores-de-infantil",
      "slug": "educacion-matematica-para-profesores-de-infantil",
      "area": "docencia",
      "profesores": [
        "maria-c-canadas",
        "pedro-gomez",
        "carlos-velasco"
      ],
      "titulo": "Educación Matemática para profesores de infantil",
      "tipo": "Diplomado",
      "estado": "abierto",
      "modalidad": "Virtual",
      "horas": 100,
      "sesiones": 10,
      "semanas": 10,
      "horario": "La reunión sincrónica será todos los jueves a las 6:00 p.m.",
      "fechas": "29 de marzo – 4 de junio de 2027",
      "inscripcionHasta": "18 de marzo de 2027",
      "descripcion": [
        "Educación Matemática para profesores de infantil es el programa virtual de dos módulos pensado para que profesores de infantil progresen profesionalmente con un objetivo muy concreto: darle a sus estudiantes más y mejores oportunidades para desarrollar su pensamiento matemático. En el primer módulo del programa, los participantes abordan los temas Lenguaje y pensamiento lógico-matemático, y espacio y forma. En el segundo módulo, se abordan los temas cantidad y medida. En cada módulo y para cada tema, se trabaja un primer módulo en el que se tratan sus aspectos conceptuales, desde una perspectiva matemática. En el segundo módulo, se trabajan los aspectos relacionados con el aprendizaje y la enseñanza de ese tema. Para las nociones anteriores, los participantes conocerán las fases en las que los niños las pueden desarrollar de acuerdo con su edad y las dificultades que pueden enfrentar al hacerlo.",
        "Las actividades de aprendizaje, los cuestionarios y demás elementos de las lecciones son propios a la educación infantil."
      ],
      "imagen": "assets/cursos/educacion-matematica-para-profesores-de-infantil.webp"
    },
    {
      "id": "edudata-analisis-de-datos-para-el-mejoramiento-de-la-ensenan",
      "slug": "edudata-analisis-de-datos-para-el-mejoramiento-de-la-ensenanza",
      "area": "docencia",
      "profesores": [
        "paola-garcia-castillo"
      ],
      "titulo": "EduData: análisis de datos para el mejoramiento de la enseñanza",
      "tipo": "Curso",
      "estado": "abierto",
      "modalidad": "Virtual",
      "horas": 16,
      "sesiones": 8,
      "semanas": 8,
      "horario": "Miércoles de 6:00 p.m. a 8:00 p.m.",
      "fechas": "5 de mayo – 23 de junio de 2027",
      "inscripcionHasta": "30 de abril de 2027",
      "descripcion": [
        "En la actualidad, los entornos educativos generan una gran cantidad de información: resultados de aprendizaje, retroalimentaciones, encuestas, evaluaciones, diagnósticos y seguimientos. Sin embargo, muchas veces estos datos se quedan en informes sin traducirse en acciones concretas de mejora.",
        "Este curso responde a la necesidad de contar con herramientas pedagógicas prácticas que permitan a los docentes y directivos interpretar, analizar y usar los datos como insumo clave para fortalecer la enseñanza y el acompañamiento educativo.",
        "A lo largo del curso, los participantes aprenderán a:",
        "Enseñar con intención, comprendiendo cómo los datos pueden guiar la planeación pedagógica.",
        "Acompañar con sentido, identificando las necesidades reales de los estudiantes y sus trayectorias de aprendizaje.",
        "Mejorar la calidad educativa, transformando los datos en estrategias de acción y toma de decisiones fundamentadas.",
        "Tomar decisiones informadas, utilizando herramientas de análisis sencillas y accesibles que orienten la mejora continua en el aula y la institución.",
        "Más que un curso técnico, esta es una experiencia formativa que invita a ver la información con mirada pedagógica, a darle voz a los datos y a convertirlos en aliados para enseñar mejor, acompañar con propósito y generar impacto real en los aprendizajes."
      ],
      "imagen": "assets/cursos/edudata-analisis-de-datos-para-el-mejoramiento-de-la-ensenan.webp"
    },
    {
      "id": "mentor-investigadores",
      "imagen": "assets/cursos/mentor-investigadores.webp",
      "titulo": "Mentor de procesos de formación de investigadores participativos con comunidad",
      "slug": "mentor-de-procesos-de-formacion-de-investigadores-participativos-con-comunidad",
      "tipo": "Microcredencial",
      "area": "comunidad",
      "estado": "abierto",
      "modalidad": "Semipresencial",
      "horas": 192,
      "sesiones": 12,
      "semanas": 21,
      "profesores": [
        "irma-florez",
        "monica-alvarez"
      ],
      "insignia": "https://equipoedco.uniandes.edu.co/wp-content/uploads/RepInsig-Mentor-procesos-formacion-investigadores.png",
      "descripcion": [
        "La certificación profesional aborda las necesidades de la región latinoamericana y se alinea con las demandas específicas de los escenarios laborales contemporáneos. Esta convergencia se manifiesta a través de la incorporación de la propuesta de los Objetivos de Desarrollo Sostenible de la UNESCO como marco orientador. Estos objetivos no solo representan un compromiso global con la sostenibilidad, sino que también actúan como directrices prácticas para la formación de profesionales capaces de abordar los desafíos contemporáneos desde una perspectiva integral y socialmente responsable.",
        "Este enfoque se fundamenta en el reconocimiento de que los cambios significativos surgen de la co-construcción de conocimiento y la colaboración activa entre distintos actores sociales. Los egresados del curso no solo adquieren habilidades teóricas sólidas, sino que también se capacitan para que en la práctica apliquen y adapten ese conocimiento en colaboración con organizaciones y comunidades, respondiendo así a las dinámicas cambiantes, las necesidades específicas de la región y la agenda global del Consorcio Knowledge for Change de la cátedra UNESCO Community Participatory Based Research and Social Responsibility in Higher Education.",
        "Asimismo, el curso destaca la importancia de favorecer habilidades interdisciplinarias y una comprensión profunda de las realidades sociales y culturales de la región latinoamericana. Este enfoque responde directamente a las expectativas del mercado laboral, que valora profesionales capaces de abordar problemáticas complejas desde múltiples perspectivas y contribuir al desarrollo sostenible de la región. La conexión entre los Objetivos de Desarrollo Sostenible y la colaboración con la sociedad civil se convierten, así, en elementos clave que enriquecen la formación de los estudiantes, preparándolos para enfrentar los desafíos actuales con una visión integral y comprometida.",
        "Consulta la insignia digital que obtendrás por el desarrollo de este certificado profesional aquí.",
        "Si estás interesado deja tus datos en el siguiente link."
      ],
      "horario": "Hora Colombia Sesiones sincrónicas: Martes de 10:00 a.m. a 12:00 m. Semana presencial: 9:00 a.m. a 4:00 p.m.",
      "fechas": "18 de mayo – 2 de noviembre de 2027",
      "inscripcionHasta": "14 de mayo de 2027"
    },
    {
      "id": "educacion-matematica-para-profesores-de-primaria",
      "slug": "educacion-matematica-para-profesores-de-primaria",
      "area": "docencia",
      "profesores": [
        "maria-c-canadas",
        "maria-jose-gonzalez",
        "pedro-gomez",
        "carlos-velasco"
      ],
      "titulo": "Educación Matemática para profesores de primaria",
      "tipo": "Diplomado",
      "estado": "abierto",
      "modalidad": "Virtual",
      "horas": 126,
      "sesiones": 18,
      "semanas": 18,
      "horario": "La reunión sincrónica será todos los jueves a las 6:00 p.m.",
      "fechas": "27 de julio – 26 de noviembre de 2027",
      "inscripcionHasta": "19 de julio de 2027",
      "descripcion": [
        "Educación Matemática para profesores de primaria es el programa virtual pensado para que profesores de primaria progresen profesionalmente con un objetivo muy concreto: darle a sus estudiantes más y mejores oportunidades para aprender matemáticas. Los tres módulos del programa abordan las ideas clave sobre qué enseñar, cómo aprenden los niños y cómo planificar clases de matemáticas con intención. A diferencia de programas formales (pregrado/posgrado), este programa de un semestre propone una experiencia estructurada, coherente y enfocada en la práctica docente cotidiana.",
        "La experiencia del estudiante en este programa será progresiva y práctica: primero profundizará en el contenido, luego comprenderá los procesos de aprendizaje y, al final, podrá tomar decisiones didácticas concretas.",
        "Antes de iniciar el curso los profesores te contactarán via Whatsapp, asegúrate que tu indicativo de país y celular sea correcto en el momento de la inscripción."
      ],
      "imagen": "assets/cursos/educacion-matematica-para-profesores-de-primaria.webp"
    },
    {
      "id": "datos-que-ensenan-analisis-educativo-con-ia-excel-y-power-bi",
      "slug": "datos-que-ensenan-analisis-educativo-con-ia-excel-y-power-bi",
      "area": "ia",
      "profesores": [
        "luis-eduardo-jaramillo",
        "camila-suarez-acevedo"
      ],
      "titulo": "Datos que enseñan: análisis educativo con IA, Excel y Power BI",
      "tipo": "Taller",
      "estado": "desarrollo",
      "modalidad": "Virtual",
      "horas": 3,
      "sesiones": 1,
      "semanas": 1,
      "horario": "Jueves de 5:00 p.m. a 8:00 p.m.",
      "fechas": "5 de noviembre de 2026",
      "inscripcionHasta": "",
      "descripcion": [
        "En el campo educativo, los datos están en todas partes: el desempeño académico, la asistencia, la convivencia escolar, la percepción de estudiantes, familias y docentes, entre muchos otros. Por eso, cada vez es más necesario utilizar herramientas para visualizar datos con el objetivo de comprender los procesos de aprendizaje de forma eficaz y tomar las mejores decisiones educativas. Este taller te ofrece una introducción al uso de Excel y Power BI para el análisis de información educativa. Podrás dar tus primeros pasos en el análisis y la visualización de datos, sin necesidad de conocimientos previos en programación, estadística avanzada o ciencia de datos. Además, el curso ofrece un primer acercamiento al uso de herramientas de inteligencia artificial generativa como apoyo al análisis de datos educativos. A través de ejercicios guiados y ejemplos reales provenientes de resultados académicos, pruebas estandarizadas y encuestas institucionales, aprenderás cómo utilizar herramientas como ChatGPT o Claude para interpretar resultados, identificar hallazgos relevantes, elaborar conclusiones y redactar informes ejecutivos a partir de tablas, gráficos y tableros construidos en Excel y Power BI. Asimismo, se abordarán buenas prácticas para utilizar estas herramientas de manera crítica y responsable como apoyo a la toma de decisiones. ¿Te imaginas contar con evidencias claras y visuales para comprender mejor a tus estudiantes y orientar tus decisiones pedagógicas? Este taller te mostrará cómo aprovechar el potencial de Excel y Power BI para lograrlo."
      ],
      "imagen": "assets/cursos/datos-que-ensenan-analisis-educativo-con-ia-excel-y-power-bi.webp"
    },
    {
      "id": "del-prompt-a-la-pedagogia-inteligencia-artificial-para-la-ed",
      "slug": "del-prompt-a-la-pedagogia-inteligencia-artificial-para-la-educacion",
      "area": "ia",
      "profesores": [],
      "titulo": "Del prompt a la pedagogía: Inteligencia artificial para la educación",
      "tipo": "Programa",
      "estado": "desarrollo",
      "modalidad": "Virtual",
      "horas": 21,
      "sesiones": 7,
      "semanas": 5,
      "horario": "Martes y jueves de 5:00 p.m. a 8:00 p.m. Sin clase el 27 de octubre",
      "fechas": "22 de octubre – 17 de noviembre de 2026",
      "inscripcionHasta": "",
      "descripcion": [
        "Saber escribir un buen prompt ya no es el único reto que enfrentamos a la hora de interactuar con la Inteligencia Artificial. Hoy en día, resulta crucial decidir cuándo la IA aporta valor pedagógico, cómo integrarla en un diseño de aprendizaje y cómo evaluar lo que produce. Este programa del HUB de Innovación Educativa con IA de la Facultad de Educación de la Universidad de los Andes lleva a los participantes más allá del prompt: del uso puntual de herramientas al criterio profesional educativo para diseñar, crear, gestionar y evaluar con IA.",
        "Durante siete talleres prácticos de tres horas facilitados por investigadores y profesores de la Facultad de Educación y expertos en diseño de experiencias, analítica y evaluación. Los participantes pueden inscribirse a un taller independiente, o al programa completo de 21 horas.",
        "La propuesta se fundamenta en el AI Literacy Framework (AILit) de la OCDE y la Comisión Europea, con apoyo de CodeAI (2026), que organiza la alfabetización en IA en cuatro dominios: Interactuar e involucrarse con la IA, Crear con la IA, Gestionar la IA y Moldear la IA, y se inspira en las directrices de la UNESCO sobre una adopción de la IA centrada en el ser humano. Si bien el marco está formulado para educación primaria y secundaria; en este programa se adapta al desarrollo profesional educativo en todos los niveles.",
        "Cada taller entrega conocimientos, herramientas y competencias transferibles y que pervivirán a la próxima actualización de la herramienta de turno, se apoya en investigación aplicada y experticia de la Facultad de Educación y está situado en las realidades educativas latinoamericanas",
        "ALINEACIÓN CON EL MARCO AI LITERACY FRAMEWORK",
        "Este programa ofrece una formación única para profesionales que ejercen en educación y que se estructura desde una perspectiva situada y latinoamericana alrededor del AI Literacy Framework (AILit) de la OCDE, el cual se ha perfilado como un recurso educativo preparatorio para las pruebas PISA de 2029.",
        "El marco define la alfabetización en IA como la articulación de conocimiento técnico, habilidades humanas duraderas y actitudes que permiten a una persona interactuar, crear, gestionar y moldear la IA mientras evalúa críticamente sus beneficios, riesgos e implicaciones éticas. Esos cuatro dominios se presentan en una secuencia que refleja un recorrido de aprendizaje, donde interactuar e involucrarse con la IA es el dominio fundacional que habilita todo lo demás, crear y gestionar avanzan en paralelo mediante la experimentación práctica, y moldear la IA completa el proceso al conectar la comprensión de cómo funcionan estos sistemas con la reflexión sobre cómo deberían mejorarse.",
        "Nuestra formación ha sido diseñada con esa progresión en mente: abren con el diseño de experiencias y la creatividad, avanzan hacia la producción y el reparto intencionado del trabajo entre humano e IA, y culminan con la configuración, el testeo y la evaluación de herramientas propias y de los instrumentos con que valoramos el aprendizaje. El resultado es un programa que trasciende la enseñanza básica de la IA y permite a quienes participen decidir y actuar, con criterio profesional y evidencia, qué lugar debe ocupar esta tecnología en la educación."
      ],
      "imagen": "assets/cursos/del-prompt-a-la-pedagogia-inteligencia-artificial-para-la-ed.webp"
    },
    {
      "id": "conversaciones-que-transforman-mentalidad-de-crecimiento-y-s",
      "slug": "conversaciones-que-transforman-mentalidad-de-crecimiento-y-seguridad-psicologica-para-el-liderazgo-y-la-educacion",
      "area": "crecimiento",
      "profesores": [
        "martha-ramirez",
        "maria-luisa-ramirez-rodriguez"
      ],
      "titulo": "Conversaciones que transforman: mentalidad de crecimiento y seguridad psicológica para el liderazgo y la educación",
      "tipo": "Curso",
      "estado": "desarrollo",
      "modalidad": "Virtual",
      "horas": 20,
      "sesiones": 10,
      "semanas": 5,
      "horario": "Martes y jueves de 6:00 p.m. a 8:00 p.m.",
      "fechas": "20 de octubre – 19 de noviembre de 2026",
      "inscripcionHasta": "",
      "descripcion": [
        "En la intersección entre la gestión y la formación, el liderazgo moderno se redefine como una práctica pedagógica destinada a facilitar el desarrollo continuo de las personas. Bajo este enfoque, la comunicación efectiva es uno de los pilares del buen liderazgo. La capacidad de comunicarse con claridad, empatía y asertividad resulta indispensable para cualquier líder, ya sea en espacios internos con sus equipos de trabajo o en contextos públicos donde transmite mensajes a audiencias más amplias.",
        "Fortalecer la comunicación implica también reflexionar sobre la mentalidad desde la cual se lidera. Comprender si se está operando desde una mentalidad de crecimiento o desde una mentalidad fija permite reconocer cómo ciertas creencias influyen en la manera de interactuar con otros. El miedo al error, la incomodidad ante el feedback o el perfeccionismo impactan directamente la forma en que las personas se comunican, participan y toman decisiones. De igual manera, desarrollar la capacidad de crear entornos de alta seguridad psicológica potencia la confianza y favorece intercambios más abiertos y constructivos en distintos escenarios profesionales.",
        "Este curso ofrece herramientas prácticas e innovadoras para fortalecer la comunicación profesional a partir de los principios de la seguridad psicológica y la mentalidad de crecimiento desde una mirada pedagógica. Su contenido se fundamenta en evidencia científica e investigación actual en los campos del liderazgo, la psicología y la educación. A través de metodologías participativas, ejercicios aplicados y espacios de práctica, los participantes desarrollarán habilidades para comunicarse con mayor claridad, empatía y efectividad; dar y recibir retroalimentación constructiva y comprender cómo la comunicación contribuye a la construcción de la confianza dentro de los equipos de trabajo. Al finalizar el curso, cada líder contará con un conjunto de estrategias comunicativas para generar culturas de colaboración y desarrollo continuo."
      ],
      "imagen": "assets/cursos/conversaciones-que-transforman-mentalidad-de-crecimiento-y-s.webp"
    },
    {
      "id": "formador-de-formadores-pedagogia-e-innovacion-para-el-aprend",
      "slug": "formador-de-formadores-pedagogia-e-innovacion-para-el-aprendizaje-organizacional",
      "area": "docencia",
      "profesores": [
        "johanna-alfonso",
        "vanessa-catano-gamboa"
      ],
      "titulo": "Formador de formadores: pedagogía e innovación para el aprendizaje organizacional",
      "tipo": "Curso",
      "estado": "desarrollo",
      "modalidad": "Semipresencial",
      "horas": 21,
      "sesiones": 6,
      "semanas": 4,
      "horario": "Miércoles de 6:00 p.m. a 8:00 p.m. y sábados de 8:00 a.m. a 1:00 p.m. Sin clase el 10, 17,28 y 31 de octubre, y 4 y 11 de noviembre.",
      "fechas": "7 de octubre – 14 de noviembre de 2026",
      "inscripcionHasta": "",
      "descripcion": [
        "En un mundo empresarial donde el conocimiento se convierte en ventaja competitiva, las organizaciones necesitan que sus propios expertos se transformen en formadores capaces de transferir aprendizajes de manera clara, práctica y estratégica. Este curso brinda a los participantes las herramientas necesarias para enseñar con impacto, diseñar experiencias de aprendizaje memorables y fortalecer la cultura de desarrollo continuo en la empresa. A través de estrategias pedagógicas aplicadas a la formación corporativa, los participantes podrán estructurar procesos de capacitación que faciliten el aprendizaje significativo y el desarrollo de competencias dentro de las organizaciones.",
        "¿Cómo diseñar experiencias de aprendizaje en las organizaciones?",
        "El gran diferencial de este programa es que está diseñado desde la realidad corporativa y no desde la academia tradicional: combina metodologías activas, blended learning y storytelling con casos reales y prácticas aplicadas al día a día de los equipos. Estas herramientas permiten planear experiencias de aprendizaje adaptadas a diferentes públicos, objetivos de capacitación y contextos organizacionales reales, fortaleciendo el rol del formador como facilitador del aprendizaje.",
        "A diferencia de programas formales o cursos masivos de bajo costo, aquí los participantes aprenderán de especialistas que han implementado procesos de formación en organizaciones líderes, garantizando aplicabilidad inmediata, relevancia estratégica y un enfoque 100% alineado con las necesidades del negocio.",
        "Aplicación de la formación de formadores en el entorno corporativo",
        "La formación de formadores permite que líderes, expertos y profesionales encargados de capacitación desarrollen habilidades para transmitir conocimientos de manera estructurada y facilitar procesos de aprendizaje dentro de sus equipos."
      ],
      "imagen": "assets/cursos/formador-de-formadores-pedagogia-e-innovacion-para-el-aprend.webp"
    },
    {
      "id": "pensamiento-critico-en-educacion",
      "slug": "pensamiento-critico-en-educacion",
      "area": "docencia",
      "profesores": [],
      "titulo": "Pensamiento critico en educación",
      "tipo": "Materia de posgrado",
      "estado": "desarrollo",
      "modalidad": "Virtual",
      "horas": "",
      "sesiones": "",
      "semanas": 16,
      "horario": "Martes de 5:00 p.m. a 7:50 p.m.",
      "fechas": "3 de agosto – 28 de noviembre de 2026",
      "inscripcionHasta": "",
      "descripcion": [
        "Una revisión bibliográfica muestra que, al menos en la literatura académica, el pensamiento crítico ha sido privilegiado como un resultado deseable del proceso educativo. A veces es contrastado con el aprendizaje pasivo, en el que los estudiantes simplemente reciben un conocimiento predefinido de los profesores, aceptándolo y adoptándolo pasivamente. A veces también es contrapuesto a la indoctrinación, a procesos en que los estudiantes son introducidos en una ideología o doctrina mediante la educación. De manera interesante, muchos autores parecen atribuirle relaciones importantes con diversos valores que son considerados por algunos como necesarios para la democracia, tales como autonomía, la racionalidad, el respeto, y la responsabilidad.",
        "El pensamiento crítico puede verse por otro lado también como una mirada a la manera de mirar (el “look of the look”, Fuenmayor, 1990) nuestra o de alguien más, o como el pensar reflexivo acerca del pensamiento nuestro y de otros (Paul, 1992). En este sentido el pensamiento crítico puede verse como actuando sobre el pensamiento mismo, o sobre nuestras maneras de conocer, entender, o vivir en el mundo.",
        "Pero surge, por supuesto, la pregunta acerca de cómo se puede favorecer la aparición de pensamiento crítico por medio de procesos de educación formal. Por este motivo, diversos autores se han apoyado ahora en varios cuerpos de conocimiento tales como la teoría crítica (en filosofía y política), la lógica (formal e informal), la sociología, y diversas teorías provenientes de la semiótica y los estudios sobre comunicación y medios. Es decir, el conocimiento en todas estas disciplinas es visto como proveedor tanto de una justificación, como de herramientas útiles para la promoción de pensamiento crítico en los estudiantes.",
        "Sin embargo, estos intentos de definir pensamiento crítico no han sido, ni mucho menos, faltos de controversia. Los enfoques a los que me refiero en el párrafo anterior han presentado versiones de lo que es el pensamiento crítico que son no sólo diferentes, sino también en muchos casos contrapuestos o contradictorios. La investigación en este campo es, por tanto, no concluida, y fuente de fuertes debates. Es, también, apasionante, especialmente porque los debates no son de tal naturaleza que puedan ser resueltos mediante experimentos u observación empírica. El problema no es los resultados de las investigaciones, sino más bien la pregunta anterior acerca de qué es lo que hay que investigar."
      ],
      "imagen": "assets/cursos/pensamiento-critico-en-educacion.webp"
    },
    {
      "id": "investigacion-en-educacion-posgrados",
      "slug": "investigacion-en-educacion-posgrados",
      "area": "docencia",
      "profesores": [],
      "titulo": "Investigación en educación posgrados",
      "tipo": "Materia de posgrado",
      "estado": "desarrollo",
      "modalidad": "Presencial",
      "horas": "",
      "sesiones": "",
      "semanas": 16,
      "horario": "Lunes de 5:00 p.m. a 7:50 p.m.",
      "fechas": "3 de agosto – 28 de noviembre de 2026",
      "inscripcionHasta": "",
      "descripcion": [
        "En este curso se espera que las/os estudiantes desarrollen una postura epistemológica en la que puedan argumentar lo que significa investigar en su propio entorno educativo y justificar el modo en que lo hacen.",
        "Preguntas centrales",
        "Este curso se basa en unas preguntas centrales que se abordan de forma transversal a lo largo del desarrollo de todos los módulos. Dichas preguntas requieren de las/os estudiantes un estudio sistemático de los autores, la literatura y demás referentes teóricos en el campo de la epistemología de la investigación. Igualmente, se espera que las/os estudiantes utilicen estas preguntas para facilitar un ejercicio frecuente de reflexión contextualizada en la práctica.",
        "¿A qué llamamos investigar?",
        "¿A qué llamamos investigar en educación y en pedagogía?",
        "¿Cuáles son las implicaciones de diferentes posturas epistemológicas a la hora de investigar en un contexto educativo específico?",
        "¿Cuál es la postura epistemológica (o las posturas) que mejor se adecuan al problema de investigación que pretendo estudiar? ¿Cómo puedo justificar esa elección?"
      ],
      "imagen": "assets/cursos/investigacion-en-educacion-posgrados.webp"
    },
    {
      "id": "calidad-de-las-interacciones-en-la-primera-infancia",
      "slug": "calidad-de-las-interacciones-en-la-primera-infancia",
      "area": "docencia",
      "profesores": [],
      "titulo": "Calidad de las interacciones en la primera infancia",
      "tipo": "Materia de posgrado",
      "estado": "desarrollo",
      "modalidad": "Presencial",
      "horas": "",
      "sesiones": "",
      "semanas": 16,
      "horario": "Martes de 5:00 p.m. a 7:50 p.m.",
      "fechas": "3 de agosto – 28 de noviembre de 2026",
      "inscripcionHasta": "",
      "descripcion": [
        "Las interacciones son el motor del aprendizaje y el desarrollo en todos los niveles de la",
        "educación. Cuando los profesores establecen relaciones en las que apoyan las necesidades",
        "emocionales y sociales de los estudiantes, cuando organizan el aula para ayudarlos a regular su",
        "comportamiento y orientar su atención, y cuando utilizan estrategias efectivas para promover la",
        "comprensión y el aprendizaje, es más probable que los estudiantes tengan un buen desempeño",
        "académico, que establezcan relaciones armónicas con sus pares, que se involucren en el",
        "aprendizaje y que permanezcan en el sistema educativo. En este curso los estudiantes de",
        "educación comprenderán el rol fundamental que las interacciones profesor-estudiante tienen para",
        "el aprendizaje y el desarrollo, y aprenderán a observar y promover interacciones efectivas que",
        "contribuyan al desarrollo del lenguaje, el pensamiento y las habilidades sociales y emocionales",
        "de los estudiantes. Aunque el curso está centrado en la primera infancia, durante el semestre los",
        "estudiantes tendrán la oportunidad de comprender que las interacciones son una premisa",
        "fundamental para la calidad de la educación en todos sus niveles."
      ],
      "imagen": "assets/cursos/calidad-de-las-interacciones-en-la-primera-infancia.webp"
    },
    {
      "id": "curriculo-y-pedagogia",
      "slug": "curriculo-y-pedagogia",
      "area": "docencia",
      "profesores": [],
      "titulo": "Currículo y pedagogía",
      "tipo": "Materia de posgrado",
      "estado": "desarrollo",
      "modalidad": "Virtual",
      "horas": 192,
      "sesiones": "",
      "semanas": 16,
      "horario": "Sábados de 10:00 a.m. a 12:50 m.",
      "fechas": "3 de agosto – 28 de noviembre de 2026",
      "inscripcionHasta": "",
      "descripcion": [
        "En muchas ocasiones, el concepto de currículo se asocia al diseño de estándares educativos y a planes de estudios que se imponen desde la política pública. Esto ha generado unas tensiones permanentes entre los profesores y esa noción tradicional del currículo. En este curso, se analizan de manera crítica y propositiva diferentes perspectivas curriculares y la manera cómo éstas permiten redefinir el concepto de currículo, para invitar a los participantes a repensar, tanto los fines de la educación, como las prácticas pedagógicas. A partir de esto, el curso busca que los participantes: reflexionen acerca de y reconstruyan sus propios conceptos y perspectivas sobre el currículo y la pedagogía; generen un compromiso con su rol personal como agente constructor de currículo; evalúen currículos de manera crítica y sustentada; y propongan acciones de transformación de sus propios currículos."
      ],
      "imagen": "assets/cursos/curriculo-y-pedagogia.webp"
    },
    {
      "id": "politicas-primera-infancia",
      "imagen": "assets/cursos/politicas-primera-infancia.webp",
      "titulo": "Políticas de primera infancia en América Latina",
      "slug": "politicas-de-primera-infancia-en-america-latina",
      "tipo": "Certificado de competencias",
      "area": "liderazgo",
      "estado": "desarrollo",
      "modalidad": "Virtual",
      "horas": 120,
      "sesiones": 40,
      "semanas": 40,
      "profesores": [
        "alejandra-cortazar",
        "carolina-maldonado",
        "ernesto-trevino",
        "sunny-arely-villa-juarez",
        "eduardo-escallon"
      ],
      "descripcion": [
        "La construcción de sistemas educativos sólidos para la primera infancia representa una oportunidad clave para impulsar el desarrollo sostenible en países de ingresos bajos y medianos. El apoyo de agencias internacionales, a través de asistencia técnica y financiamiento, crea un entorno propicio para diseñar políticas articuladas y servicios de calidad. Fortalecer el liderazgo en políticas de primera infancia permitirá movilizar actores clave, mejorar la coordinación entre sistemas y aprovechar al máximo los recursos disponibles. Asimismo, las instituciones educativas tienen un gran potencial para formar líderes visionarios que guíen estos esfuerzos, especialmente en regiones como América Latina y el Caribe.",
        "El certificado profesional Políticas de Primera Infancia en América Latina es un programa desarrollado en colaboración entre el Tecnológico de Monterrey, la Universidad Católica de Chile y la Universidad de los Andes Colombia. El programa tiene como objetivo desarrollar profesionales capaces de analizar, diseñar y abogar por políticas de primera infancia basadas en evidencia y adaptadas a diversos contextos. A través de cuatro módulos, los participantes explorarán el contexto histórico de la educación infantil temprana, las prácticas y sistemas actuales, el liderazgo y la abogacía en políticas, y los marcos teóricos para el análisis de políticas.",
        "Este programa llena un vacío crítico en América Latina, donde actualmente no existe un programa universitario específicamente enfocado en formar líderes en políticas de primera infancia. Combina conocimientos teóricos con desarrollo de habilidades prácticas, permitiendo a los participantes comprender sistemas complejos de educación inicial, utilizar datos para la toma de decisiones y abogar efectivamente por cambios en las políticas.",
        "Conoce la insignia digital que recibirás por aprobar el Certificado Profesional aquí.",
        "Becas disponibles",
        "Existirá un fondo de becas para la segunda emisión del programa, otorgado por el Centro de Primera Infancia.",
        "Se podrán otorgar becas del 70% al 90% del costo total del programa.",
        "Un comité de becas asignará el porcentaje de beca correspondiente a cada solicitante en función del impacto potencial del programa (según su perfil) y de su capacidad de pago.",
        "Los lineamientos y requisitos para aspirar a una de las becas serán comunicados por el Centro de Primera Infancia.",
        "Para iniciar el proceso es necesario postularse en este enlace.",
        "Criterios de aceptación:",
        "• Título universitario en áreas afines.",
        "• Al menos 4 años de experiencia en sectores relacionados con la primera infancia.",
        "• Participación en la planificación, implementación o evaluación de políticas públicas en el área.",
        "Fechas importantes:",
        "Postulaciones: del 15 de mayo al 17 de junio",
        "Revisión de las postulaciones: del 17 de junio al 09 de julio",
        "Publicación de resultados: 10 de julio",
        "Formalización de inscripciones: 11 de julio al 22 de julio"
      ],
      "horario": "Miércoles 5:00 p.m. a 8:00 p.m. Hora Colombia",
      "fechas": "29 de julio de 2026 – 14 de julio de 2027",
      "inscripcionHasta": ""
    },
    {
      "id": "ia-imagen-video",
      "imagen": "assets/cursos/ia-imagen-video.webp",
      "titulo": "De la imaginación a la creación didáctica: inteligencia artificial generativa para imagen y video",
      "slug": "de-la-imaginacion-a-la-creacion-didactica-inteligencia-artificial-generativa-para-imagen-y-video",
      "tipo": "Taller",
      "area": "ia",
      "estado": "finalizado",
      "modalidad": "Virtual",
      "horas": 3,
      "sesiones": 1,
      "semanas": 1,
      "profesores": [
        "felipe-munoz-jaramillo"
      ],
      "descripcion": [
        "La inteligencia artificial ha democratizado la creación visual: ahora tú también puedes generar recursos creativos sin ser un experto en edición de imagen. Sumérgete en una experiencia práctica y reflexiva que te reta a imaginar y crear con inteligencia artificial. ¿Estás listo para transformar y enriquecer tus clases y proyectos con narrativas visuales innovadoras? Este taller está pensado para ti: docente, diseñador instruccional o agente educativo que busca ampliar sus recursos pedagógicos y comunicativos.",
        "Explora cómo las herramientas de IA te permiten generar imágenes y videos de forma estratégica, creativa y ética. Aprende haciendo: participa en ejercicios guiados, descubre las posibilidades y limitaciones de estas tecnologías y experimenta con un flujo de trabajo audiovisual apoyado en IA. ¿Te atreves a repensar la forma en que enseñas y comunicas?"
      ],
      "horario": "Martes de 5:00 p.m. a 8:00 p.m.",
      "fechas": "3 de noviembre de 2026",
      "inscripcionHasta": ""
    },
    {
      "id": "ia-design-thinking",
      "imagen": "assets/cursos/ia-design-thinking.webp",
      "titulo": "Inteligencia artificial y design thinking: expande tus capacidades creativas para el aprendizaje",
      "slug": "inteligencia-artificial-y-design-thinking-expande-tus-capacidades-creativas-para-el-aprendizaje",
      "tipo": "Taller",
      "area": "ia",
      "estado": "finalizado",
      "modalidad": "Virtual",
      "horas": 3,
      "sesiones": 1,
      "semanas": 1,
      "profesores": [
        "gary-alberto-cifuentes-alvarez"
      ],
      "descripcion": [
        "La inteligencia artificial está ampliando las fronteras de la creatividad. En este taller descubrirás cómo combinar el enfoque Design Thinking con herramientas de inteligencia artificial para potenciar tu capacidad de innovar. Aunque no tengas experiencia en Design Thinking, explorarás sus fases clave y verás cómo la IA puede facilitar la exploración de necesidades, la generación de ideas y la creación de prototipos.",
        "En un mundo cada vez más digitalizado, integrar la inteligencia artificial en el diseño de soluciones innovadoras te coloca a la vanguardia de la innovación educativa. Este taller está diseñado para despertar tu potencial creativo, brindándote herramientas prácticas y recursos concretos y efectivos para imaginar y diseñar soluciones innovadoras y adaptadas a las necesidades de tus contextos educativos o profesionales."
      ],
      "horario": "Jueves de 5:00 p.m. a 8:00 p.m.",
      "fechas": "29 de octubre de 2026",
      "inscripcionHasta": ""
    },
    {
      "id": "de-humanos-para-humanos-diseno-de-experiencias-con-ia",
      "slug": "de-humanos-para-humanos-diseno-de-experiencias-con-ia",
      "area": "ia",
      "profesores": [
        "felipe-munoz-jaramillo"
      ],
      "titulo": "De humanos para humanos: diseño de experiencias con IA",
      "tipo": "Taller",
      "estado": "finalizado",
      "modalidad": "Virtual",
      "horas": 3,
      "sesiones": 1,
      "semanas": 1,
      "horario": "Jueves de 5:00 p.m. a 8:00 p.m.",
      "fechas": "22 de octubre de 2026",
      "inscripcionHasta": "",
      "descripcion": [
        "Los avances tecnológicos están redefiniendo la forma en que diseñamos experiencias que despierten el interés y mantengan la motivación de las personas. Hoy en día, cuando las máquinas empiezan a conocernos mejor que nosotros mismos, ¿cómo diseñar experiencias que enganchen e impacten? Aprende una metodología que une gamificación, diseño de producto y UX, con la IA como asistente experto en comportamiento y psicología positiva.",
        "A través de ejercicios interactivos, construirás una experiencia real, donde las necesidades de las personas y tus objetivos determinarán el resultado. ¿Te gustaría diseñar ejercicios y experiencias para tus estudiantes que dejen aprendizajes duraderos? Aquí descubrirás el método exacto para hacerlo realidad."
      ],
      "imagen": "assets/cursos/de-humanos-para-humanos-diseno-de-experiencias-con-ia.webp"
    },
    {
      "id": "iap-comunidad",
      "imagen": "assets/cursos/iap-comunidad.webp",
      "titulo": "Investigación acción participativa con comunidad",
      "slug": "investigacion-accion-participativa-con-comunidad",
      "tipo": "Curso",
      "area": "comunidad",
      "estado": "finalizado",
      "modalidad": "Virtual",
      "horas": 26,
      "sesiones": 13,
      "semanas": 7,
      "horario": "Martes y jueves de 6:00 p.m. a 8:00 p.m.",
      "fechas": "15 de septiembre – 27 de octubre de 2026",
      "profesores": [
        "irma-florez",
        "andres-astaiza",
        "luisa-gonzalez"
      ],
      "descripcion": [
        "El curso es una experiencia vivencial, que introduce a los participantes, a conceptos, principios y metodologías participativas para acompañar procesos de transformación social. Se desarrollan conocimientos, habilidades y actitudes para llevar a cabo procesos de cambio social con las comunidades, desde la comprensión de la complejidad del contexto, el diálogo, la interacción horizontal y la participación efectiva de los actores. Esta propuesta busca fortalecer la democratización del conocimiento, mediante la validación de múltiples saberes y métodos de descubrimiento y difusión, como un camino para el cambio y la justicia social. El proceso consta de sesiones semanales virtuales, orientadas desde pedagogías activas y trabajo grupal. Para participar en el curso es recomendable que el aspirante este desarrollando alguna experiencia o proyecto con comunidad.",
        "Curso basado en pedagogías activas y vivenciales, centrado en el aprendizaje del proceso investigativo a través de la práctica reflexiva que se compone de actividades teórico-prácticas. Aborda los fundamentos de IAP y las estrategias necesarias para desarrollarla desde la co-construcción con la comunidad para transformar la realidad social. Atiende las necesidades de la región latinoamericana retomando la propuesta de los Objetivos de Desarrollo Sostenible de la UNESCO, así como, la importancia de la articulación entre la academia y las organizaciones de la sociedad civil. Los integrantes del equipo docente del curso están certificados como mentores del Programa de Formación de Mentores del Consorcio Knowledge for Change (K4C) de la Cátedra Unesco Community Based Research and Social Responsibility in Higher Education, e integran el Hub Colombia. https://unescochair-cbrsr.org/"
      ],
      "inscripcionHasta": ""
    },
    {
      "id": "diseno-instruccional-creativo-para-el-sector-empresarial",
      "slug": "diseno-instruccional-creativo-para-el-sector-empresarial",
      "area": "docencia",
      "profesores": [
        "johanna-alfonso"
      ],
      "titulo": "Diseño instruccional creativo para el sector empresarial",
      "tipo": "Curso",
      "estado": "finalizado",
      "modalidad": "Presencial",
      "horas": 20,
      "sesiones": 4,
      "semanas": 4,
      "horario": "Sábados de 8:00 a.m. a 1:00 p.m.",
      "fechas": "5 de septiembre – 26 de septiembre de 2026",
      "inscripcionHasta": "",
      "descripcion": [
        "Según LinkedIn Learning Workplace Report 2025, el 89 % de los líderes de talento considera que las experiencias de aprendizaje diseñadas de manera creativa y personalizada aumentan significativamente la retención y transferencia del conocimiento. Un estudio de Deloitte indica que las organizaciones con estrategias sólidas de diseño instruccional tienen hasta un 37 % más de probabilidad de lograr mejores indicadores de desempeño y apropiación de competencias críticas.",
        "Este curso responde a una necesidad crítica de las organizaciones actuales: transformar procesos de capacitación tradicionales en experiencias de aprendizaje dinámicas, estratégicas y centradas en resultados. Los participantes fortalecerán sus capacidades para diseñar experiencias formativas más efectivas, creativas y alineadas con las necesidades reales del negocio, desarrollando habilidades en arquitectura del aprendizaje, metodologías activas, gamificación, storytelling, diseño de actividades y uso de herramientas digitales e inteligencia artificial aplicadas a formación corporativa.",
        "El diferencial del programa radica en su enfoque completamente práctico y aplicado al contexto empresarial, permitiendo que cada participante construya durante las 20 horas un diseño instruccional real para su organización. A diferencia de programas académicos tradicionales o cursos genéricos de bajo costo, esta experiencia integra tendencias actuales de aprendizaje corporativo, metodologías experienciales, herramientas de IA y acompañamiento experto desde la experiencia en universidades corporativas y desarrollo organizacional de alto impacto."
      ],
      "imagen": "assets/cursos/diseno-instruccional-creativo-para-el-sector-empresarial.webp"
    },
    {
      "id": "lineamientos-para-el-diseno-de-onboarding-empresarial-para-l",
      "slug": "lineamientos-para-el-diseno-de-onboarding-empresarial-para-la-contratacion-de-talento-diverso",
      "area": "docencia",
      "profesores": [
        "johanna-alfonso"
      ],
      "titulo": "Lineamientos para el diseño de onboarding empresarial para la contratación de talento diverso",
      "tipo": "Curso",
      "estado": "finalizado",
      "modalidad": "Virtual",
      "horas": 8,
      "sesiones": 4,
      "semanas": 2,
      "horario": "Martes y jueves de 6:00 p.m. a 8:00 p.m.",
      "fechas": "21 de julio – 30 de julio de 2026",
      "inscripcionHasta": "",
      "descripcion": [
        "En Colombia, solo 2 de cada 10 personas con discapacidad acceden al mercado laboral, lo que evidencia una brecha estructural en inclusión laboral. La normativa asociada a la reforma laboral 2025 establece obligaciones para la vinculación de personas con discapacidad, lo que implica ajustes inmediatos en procesos organizacionales. Estas cifras evidencian que el reto no es únicamente contratar talento diverso, sino preparar a las organizaciones para integrarlo de manera efectiva. En este punto, el aprendizaje organizacional y el rol de la Facultad de Educación resultan fundamentales: no basta con cumplir una norma, es necesario transformar prácticas, desarrollar capacidades en líderes y equipos, y diseñar experiencias formativas que promuevan culturas inclusivas.",
        "El onboarding, entonces, se convierte en un momento crítico para garantizar inclusión real, productividad y sostenibilidad del cambio organizacional, en la medida en que articula formación, acompañamiento y apropiación de nuevas formas de trabajar con diversidad.",
        "Este curso tiene como propósito orientar a líderes y equipos de talento humano en el diseño de procesos de onboarding inclusivos, que permitan responder de manera efectiva a la incorporación de talento diverso, especialmente personas en situación de discapacidad, en el marco de las exigencias normativas actuales en Colombia.",
        "El enfoque es práctico y aplicado, permitiendo a los participantes ajustar sus procesos de inducción, formación inicial y acompañamiento, garantizando condiciones de accesibilidad, inclusión y adaptación organizacional. Al finalizar, los participantes contarán con lineamientos claros y herramientas concretas para implementar un onboarding alineado con la normativa y con las necesidades reales del negocio.",
        "El curso es altamente aplicable, ya que combina análisis de la normativa vigente, tendencias en diversidad e inclusión, y metodologías de aprendizaje organizacional, para que los participantes puedan diseñar soluciones a la medida de sus organizaciones, alineadas tanto con el cumplimiento legal como con la generación de entornos de trabajo productivos, seguros e innovadores."
      ],
      "imagen": "assets/cursos/lineamientos-para-el-diseno-de-onboarding-empresarial-para-l.webp"
    },
    {
      "id": "ia-y-educacion-en-el-sur-global-comprender-interpelar-actuar",
      "slug": "ia-y-educacion-en-el-sur-global-comprender-interpelar-actuar",
      "area": "ia",
      "profesores": [],
      "titulo": "IA y Educación en el Sur Global: Comprender, Interpelar, Actuar",
      "tipo": "Curso",
      "estado": "finalizado",
      "modalidad": "Virtual",
      "horas": 45,
      "sesiones": 10,
      "semanas": 1,
      "horario": "Lunes a viernes de 9:00 a.m. a 5:00 p.m.",
      "fechas": "6 de julio – 10 de julio de 2026",
      "inscripcionHasta": "",
      "descripcion": [
        "El programa internacional en IA Generativa y Educación en el Sur Global es una iniciativa de formación intensiva de una semana, organizada por el Hub de Innovación Educativa con IA de la Facultad de Educación de la Universidad de los Andes. Convoca a docentes, investigadores, coordinadores, profesionales de la educación y hacedores de política del ámbito hispanohablante para explorar, de manera crítica y propositiva, el fenómeno de la inteligencia artificial generativa y su impacto en los sistemas educativos contemporáneos y de la región.",
        "La presencia de la IA generativa puede ampliar las brechas globales ya existentes y dejarnos, una vez más, en un lugar periférico: el de usuarios y consumidores de tecnologías educativas producidas fuera de nuestros contextos y necesidades (Reimers et al., 2025). Por ende, este programa surge del reconocimiento de que, desde la masificación de los sistemas de IA generativa a finales de 2022, los sistemas educativos del mundo, y en particular los del Sur Global, enfrentan una serie de dilemas pedagógicos, éticos y políticos que aún están lejos de resolverse dado su carácter sistémico.",
        "Las instituciones educativas y hacedores de política buscan respuestas urgentes ante interrogantes que van desde la integridad académica hasta la reconfiguración del rol docente, desde el diseño curricular hasta la equidad en el acceso tecnológico.",
        "Fundamentación:",
        "La incertidumbre y la complejidad que caracterizan los escenarios educativos contemporáneos se intensifican ante el avance acelerado de los sistemas de IA generativa. Por esta razón, las comunidades educativas necesitan marcos conceptuales robustos, así como evidencia empírica actualizada y espacios de deliberación colectiva para tomar decisiones fundamentadas sobre el uso de estas tecnologías en sus aulas e instituciones.",
        "El Sur Global, con sus condiciones particulares de desigualdad en el acceso, sus tradiciones pedagógicas propias y sus tensiones con los modelos tecnológicos provenientes de contextos e idiosincrasias dominantes, requiere perspectivas que vayan más allá de los discursos de moda y atiendan las especificidades contextuales de sus sistemas educativos. Esta es la apuesta central del programa: generar un espacio de formación que articule el desarrollo de competencias prácticas con el pensamiento crítico situado."
      ],
      "imagen": "assets/cursos/ia-y-educacion-en-el-sur-global-comprender-interpelar-actuar.webp"
    },
    {
      "id": "gamificacion-innovacion",
      "imagen": "assets/cursos/gamificacion-innovacion.webp",
      "titulo": "Gamificación e innovación educativa",
      "slug": "gamificacion-e-innovacion-educativa",
      "tipo": "Curso",
      "area": "docencia",
      "estado": "finalizado",
      "modalidad": "Virtual",
      "horas": 24,
      "sesiones": 12,
      "semanas": 7,
      "horario": "Lunes y miércoles de 6:00 p.m. a 8:00 p.m. Sin clase el 8, 15 y 29 de junio y el 20 de julio.",
      "fechas": "1 de junio – 27 de julio de 2026",
      "profesores": [
        "javier-velazquez"
      ],
      "descripcion": [
        "Gamificación tiene el potencial de transformar profundamente las prácticas educativas. Más que usar juegos en clase, un buen gamificador piensa su clase como un juego. Esto significa cambiar la relación entre el docente y el estudiante, modificar los mecanismos de comunicación y retroalimentación, reformular los ciclos de actividades y más.",
        "En este curso se revisan los conocimientos de motivación y aprendizaje que han acumulado 50 años de diseño de juegos para entender cómo se pueden aplicar al diseño de cursos y sistemas de aprendizaje. A través de este curso pondremos en entredicho prácticas educativas tradicionales, buscando nuevas formas de enseñar. Las clases se encuentran gamificadas para que las habilidades no se aprendan sólo desde la teoría y la práctica, sino también desde el ejemplo. El participante de este curso podrá evaluar las prácticas del curso y determinar qué mecanismos encuentra valiosos de implementar, por que los ha vivido."
      ],
      "inscripcionHasta": ""
    },
    {
      "id": "neurociencias-ambito-educativo",
      "imagen": "assets/cursos/neurociencias-ambito-educativo.webp",
      "titulo": "Neurociencias y regulación emocional en el ámbito educativo",
      "slug": "neurociencias-y-regulacion-emocional-en-el-ambito-educativo",
      "tipo": "Curso",
      "area": "bienestar",
      "estado": "finalizado",
      "modalidad": "Virtual",
      "horas": 24,
      "sesiones": 12,
      "semanas": 6,
      "horario": "Lunes y miércoles de 6:00 p.m. a 8:00 p.m. Sin clase el 18 de mayo, 8 y 15 de junio.",
      "profesores": [
        "monica-moreno"
      ],
      "descripcion": [
        "Este curso plantea aproximaciones teóricas y prácticas sobre la importancia de gestionar procesos educativos enmarcados en la comprensión de la neurobiología del desarrollo infantil y juvenil, así como el establecer estrategias de regulación emocional orientados a promover el bienestar integral de los estudiantes.",
        "Lo anterior le permitirá comprender los principales hallazgos investigativos entorno al desarrollo humano desde las neurociencias aplicadas a la educación y los sistemas de regulación de las emociones en contextos educativos para que usted pueda incorporarlos a su práctica docente o para desarrollar ambientes de aprendizaje altamente efectivos.",
        "En este curso introductorio, usted no sólo tendrá una perspectiva actualizada de las tendencias teóricas de las neurociencias y su relación con el desarrollo de estrategias que promuevan el bienestar emocional de sus estudiantes, sino que adicionalmente tendrá un acompañamiento semi-personalizado en el cual la docente le acompañará a desarrollar análisis para promover la regulación emocional de sus estudiantes o analizar las necesidades particulares del ambiente de aprendizaje que desea impactar.﻿"
      ],
      "fechas": "4 de mayo – 22 de junio de 2026",
      "inscripcionHasta": ""
    },
    {
      "id": "diseno-instruccional-para-el-aprendizaje-efectivo-en-organiz",
      "slug": "diseno-instruccional-para-el-aprendizaje-efectivo-en-organizaciones",
      "area": "docencia",
      "profesores": [
        "jaime-andres-gutierrez-herrera"
      ],
      "titulo": "Diseño instruccional para el aprendizaje efectivo en organizaciones",
      "tipo": "Curso",
      "estado": "finalizado",
      "modalidad": "Virtual",
      "horas": 34,
      "sesiones": 12,
      "semanas": 6,
      "horario": "Lunes y miércoles de 6:00 p.m. a 8:00 p.m.",
      "fechas": "9 de febrero – 18 de marzo de 2026",
      "inscripcionHasta": "",
      "descripcion": [
        "El diseño instruccional es el arte y la ciencia detrás del diseño y la planeación de experiencias de aprendizaje que logren resultados reales. En un contexto donde las organizaciones deben adaptarse y desarrollar capacidades con rapidez, se ha convertido en una herramienta clave para innovar, transferir aprendizajes prácticos y mantener la competitividad.",
        "Este curso brinda a profesores, responsables de procesos de formación y a todas aquellas personas que, de manera formal o informal, tienen la responsabilidad de ayudar a otros a aprender, ya sea integrando a un nuevo miembro de equipo, transfiriendo conocimientos clave o ejerciendo un rol de mentor temporal, las competencias necesarias para estructurar experiencias de aprendizaje efectivas, alineadas con objetivos claros y resultados medibles.",
        "A lo largo de la formación, los participantes aprenderán a transformar contenidos dispersos en experiencias motivadoras, prácticas y sostenibles, utilizando metodologías activas, herramientas digitales y principios de las ciencias del aprendizaje. Gracias al enfoque práctico y aplicado de este curso, cada participante diseñará y pondrá a prueba un prototipo real de un curso, taller o módulo a partir de prácticas de diseño ágil, UX/UI, MVP y Learning By Design, que respondan a una necesidad concreta de su contexto organizacional."
      ],
      "imagen": "assets/cursos/diseno-instruccional-para-el-aprendizaje-efectivo-en-organiz.webp"
    },
    {
      "id": "liderazgo-para-el-analisis-de-politicas-educativas",
      "slug": "liderazgo-para-el-analisis-de-politicas-educativas",
      "area": "liderazgo",
      "profesores": [],
      "titulo": "Liderazgo para el análisis de políticas educativas",
      "tipo": "Materia de posgrado",
      "estado": "finalizado",
      "modalidad": "Virtual",
      "horas": 192,
      "sesiones": "",
      "semanas": 16,
      "horario": "Viernes de 5:00 p.m. a 7:50 p.m.",
      "fechas": "20 de enero – 23 de mayo de 2026",
      "inscripcionHasta": "",
      "descripcion": [
        "Este curso está diseñado como un seminario de posgrado, por lo que se espera que todos los estudiantes asuman un papel de liderazgo activo y participen de los debates en clase sobre las lecturas, tareas, así como socialicen su proyecto de análisis de políticas educativas. También se requiere la participación de los estudiantes en un proyecto colaborativo que les ayudará a comprender el panorama de la política educativa en Colombia y/o en un país de América Latina (o en un país diferente, en caso de que la/el estudiante viva en un país que no es de la región Latinoamericana). Cada clase de 3 horas se divide típicamente de la siguiente manera: (1) El instructor presenta el tema de teórico (30 – 40 minutos); (2) Un panel de estudiantes designado dirige el debate sobre las aplicaciones de la teoría al estudio de políticas educativas (40 – 50 minutos); (3) Debate abierto sobre las preguntas generadas antes y durante la clase (30 minutos); (4) Ejercicio práctico. Además, los estudiantes realizarán dos proyectos de análisis de políticas educativas para aplicar los conceptos, habilidades y herramientas discutidos durante la clase. El primero es el análisis de un proyecto de ley (Congreso) o de un proyecto de acuerdo (Concejos Municipales) sobre educación. El segundo es el análisis de una política educativa de interés para el estudiante o la elaboración de una propuesta de política educativa para el nivel local (por ejemplo, la actualización del manual de convivencia de un colegio, la política de la escuela de padres en un colegio, un protocolo para el uso de dispositivos electrónicos en el aula o una política interna en una organización) o para el nivel macro (por ejemplo, la implementación de jornadas complementarias, el diseño de una catedra sobre educación para el desarrollo sostenible, etc.). Al comienzo de cada clase, los estudiantes tendrán la oportunidad de hacer preguntas sobre las expectativas y tareas del curso. Si algún estudiante prevé faltar a alguna clase, por favor, comunicarse conmigo vía correo electrónico."
      ],
      "imagen": "assets/cursos/liderazgo-para-el-analisis-de-politicas-educativas.webp"
    },
    {
      "id": "juego-arte-y-literatura",
      "slug": "juego-arte-y-literatura",
      "area": "docencia",
      "profesores": [],
      "titulo": "Juego, arte y literatura",
      "tipo": "Materia de pregrado",
      "estado": "finalizado",
      "modalidad": "Presencial",
      "horas": "",
      "sesiones": "",
      "semanas": 16,
      "horario": "Martes de 5:00 p.m. a 7:50 p.m.",
      "fechas": "20 de enero – 23 de mayo de 2026",
      "inscripcionHasta": "",
      "descripcion": [
        "Este curso estudia los postulados fundamentales de las teorías cognitivas, en específico, los propuestos por las teorías constructivista e histórico-cultural, junto con aportes recientes de las neurociencias; y cómo esas propuestas y postulados explican el desarrollo del pensamiento y el lenguaje — mediante la operación con símbolos— como una función psicológica superior e inherente al carácter social del ser humano. Estas características en el origen del lenguaje y el pensamiento, que están en el centro de la actividad creadora humana, se generan a partir de la función social del juego, del arte y de la literatura como formas de representación del mundo, y explican el desarrollo de la escritura y la lectura. Con esto, se convierten en información pedagógica fundamental para promover su aprendizaje.",
        "En este sentido, el juego, el arte y la literatura crean y organizan el mundo simbólico y por esto son, en últimas, condición necesaria para el logro de los objetivos educativos, para la recreación permanente de la cultura y para el desarrollo histórico de la humanidad. Dicho de manera simple, sin ellos no hay educación. Es por esto que los tres son pilares de la política oficial de la educación inicial en Colombia, junto con la exploración del medio (la imaginación científica). De igual forma, podremos evidenciar cómo estos procesos ocurren y se fortalecen a lo largo del desarrollo en los distintos niveles de la educación.",
        "¿Qué son el juego, el arte y la literatura? ¿Cómo ocurren? ¿Cómo podemos promover el aprendizaje y el desarrollo de los niños y las niñas con ellos? ¿Cómo saber que con ellos alguien ha aprendido? ¿Cómo se relaciona el juego con la exploración y la imaginación científica? ¿por qué son importantes en la primera infancia?",
        "Durante este semestre, estudiaremos los principales aportes teóricos que han intentado responder estas preguntas. Este recorrido nos llevará a comprender que no hay una única respuesta y que, por el contrario, el juego, el arte y la literatura (la escritura y la lectura), en su relación con la educación infantil, han sido definidos, explicados y aplicados de diferentes maneras. Este curso parte de la idea de que todas esas teorías tienen fortalezas que deben valorarse al entender los problemas de la educación y que apuntan a diferentes propósitos del desarrollo de las personas (el desarrollo humano). Adicionalmente, al estudiar esos aportes, veremos que, de cierta forma, todas tienen implicaciones importantes para la práctica pedagógica. A lo largo del curso prestaremos especial atención a aquellas que se dirigen a promover la dimensión simbólica para que al final del semestre cada uno de ustedes comprenda el lugar que el juego, el arte y la literatura, y su relación con el pensamiento, el lenguaje, la escritura y la lectura, pueden tener en su práctica pedagógica."
      ],
      "imagen": "assets/cursos/juego-arte-y-literatura.webp"
    },
    {
      "id": "pensamiento-pedagogico",
      "slug": "pensamiento-pedagogico",
      "area": "docencia",
      "profesores": [],
      "titulo": "Pensamiento pedagógico",
      "tipo": "Materia de posgrado",
      "estado": "finalizado",
      "modalidad": "Virtual",
      "horas": 192,
      "sesiones": "",
      "semanas": 16,
      "horario": "Jueves de 5:00 p.m. a 7:50 p.m.",
      "fechas": "20 de enero – 23 de mayo de 2026",
      "inscripcionHasta": "",
      "descripcion": [
        "Este curso invita a los estudiantes a familiarizarse con textos clásicos del campo de la Educación y la Pedagogía. Se tendrán en cuenta autores como: Montessori, Piaget, Freire, Perkins, Vygotsky, Freinet, Dewey, Comenio, Rousseau y Decroly. Su propósito es comprender las mejores y más representativas escuelas de pensamiento pedagógico, a través de sus ideas, modelos, planteamientos y fundamentos tanto teóricos como prácticos. Al finalizar el curso los estudiantes estarán en capacidad de construir una visión panorámica y actual de algunas de las más importantes tradiciones pedagógicas a lo largo de la historia y podrán establecer su vigencia para nuestra situación actual. El curso es de nivel doctoral. Exige lectura y escritura semanal."
      ],
      "imagen": "assets/cursos/pensamiento-pedagogico.webp"
    },
    {
      "id": "pensamiento-cientifico",
      "slug": "pensamiento-cientifico",
      "area": "docencia",
      "profesores": [],
      "titulo": "Pensamiento científico",
      "tipo": "Materia de posgrado",
      "estado": "finalizado",
      "modalidad": "Presencial",
      "horas": 192,
      "sesiones": "",
      "semanas": 16,
      "horario": "Jueves de 5:00 p.m. a 7:50 p.m.",
      "fechas": "20 de enero – 23 de mayo de 2026",
      "inscripcionHasta": "",
      "descripcion": [
        "Desde los primeros años, los niños y niñas son científicos naturales. Analizan la información que perciben, proponen hipótesis y buscan responder preguntas constantemente. Desde el primer instante, se crea un diálogo entre el mundo que lo rodea y el niño. Sin embargo, existen barreas y contextos que llevan que esta condición natural de investigar y experimentar se vaya perdiendo o limitando. Es por esto por lo que es importante preguntarnos ¿qué hace que esta curiosidad se pierda? ¿Introducir temáticas como la física o la química en secundaria es ya muy tarde? ¿Cómo la cultura influye en el desarrollo del pensamiento científico? ¿Cómo el desarrollo del pensamiento científico puede influir en las decisiones que tomamos como sociedad? ¿En temas de segregación y brecha? ¿Cómo nosotros, desde nuestra práctica docente podemos promover el desarrollo de pensamiento científico?",
        "En este curso los estudiantes podrán reflexionar sobre la forma, el momento y la conveniencia de formar el pensamiento científico a partir de la primera infancia, así como estrategias para integrar su enseñanza con otras áreas, desde una visión constructiva y basada en proyectos.",
        "Asimismo, los estudiantes desarrollarán un proyecto grupal en el que propondrán estrategias pedagógicas y didácticas para aplicar lo reflexionado en el curso, a un caso específico."
      ],
      "imagen": "assets/cursos/pensamiento-cientifico.webp"
    },
    {
      "id": "emociones-y-educacion",
      "slug": "emociones-y-educacion",
      "area": "bienestar",
      "profesores": [],
      "titulo": "Emociones y educación",
      "tipo": "Materia de posgrado",
      "estado": "finalizado",
      "modalidad": "Presencial",
      "horas": 192,
      "sesiones": "",
      "semanas": 16,
      "horario": "Miércoles de 5:00 p.m. a 7:50 p.m.",
      "fechas": "20 de enero – 23 de mayo de 2026",
      "inscripcionHasta": "",
      "descripcion": [
        "Puede decirse que, en la actualidad, las emociones se encuentran en medio de grandes controversias en diversos ámbitos, especialmente el político y el educativo. Por ejemplo, algunas personas las culpan de ser las causantes de algunos de los males de nuestras democracias contemporáneas, lo cual se ve cuando se acusa a algunas campañas y organizaciones de manipularnos para hacernos votar con las emociones en lugar de con la razón. Al mismo tiempo, otras personas parecen proponer las emociones como aquello que nos va a salvar del caos actual en nuestras relaciones y en nuestras sociedades, donde una manifestación de esto aparece en el auge de los discursos contemporáneos sobre la empatía. Estos dos ejemplos, aunque polémicos ambos –como lo discutiremos en el curso–, parten del hecho de que las emociones juegan un papel clave en nuestra comprensión del mundo a nuestro alrededor. Que las emociones estén implicadas profundamente en cómo comprendemos el mundo ya sería por sí sola una justificación para prestarles atención en la educación. Pero su importancia se origina en al menos dos papeles más que cumplen en nuestras vidas de manera central. Por un lado, nos movilizan para actuar o para dejar de hacerlo; son, en palabras de Larry Nucci, motor de la acción, tanto individual como colectivamente. Y, por otro lado, son parte crucial de nuestra experiencia subjetiva, de modo que juegan papeles constitutivos de nuestro bien o mal-estar en el mundo, como se desprende de algunas teorías utilitaristas en la filosofía moral así como de varias otras corrientes filosóficas. Las emociones, ciertamente, ameritan una examinación y un trabajo profundo y cuidadoso en nuestras vidas en general, así como en la educación en particular.",
        "En el mundo de la educación podemos preguntarnos por su relación con las emociones al menos dos campos diferentes aunque relacionados entre sí: los papeles que juegan las emociones dentro de los procesos y espacios educativos (p. ej. el odio a las matemáticas, el miedo al examen, la admiración por quien enseña), y la educación de las emociones o educación emocional. Aunque pasaremos por el primer campo, pondremos nuestro énfasis en el segundo. A este respecto, ya desde hace algunas décadas ha reclamado gran protagonismo la llamada educación socioemocional –o educación social y emocional– y se habla cada vez con más naturalidad de las competencias socioemocionales. Este enfoque, liderado especialmente desde la psicología, ha logrado ser incluido en múltiples iniciativas, programas e instituciones tanto en Colombia como en el mundo. Esta aproximación es, sin embargo, sólo una entre varias posibles. En este curso nos ocuparemos de explorar, precisamente, qué es, qué puede ser, y qué debería ser –las tres preguntas se abordan simultáneamente– una educación emocional. En particular, nos interesará explorar, además de la educación socioemocional, propuestas educativas alternativas que podrían caracterizarse en términos de un cultivo emocional del carácter.",
        "La posibilidad de abordar la educación emocional de múltiples maneras tiene que ver con el hecho de que la idea de “emoción” sigue siendo objeto de intenso debate a pesar del largo camino recorrido en su comprensión, gracias al trabajo multi e interdisciplinar de la filosofía, la psicología, la neuropsicología, la sociología y los estudios culturales, entre otros. La magnitud de la controversia, como lo señala Peter Goldie, puede estar relacionada de manera muy directa con la complejidad misma de las emociones y con la dificultad para definir un único tipo de fenómeno como emoción: hasta ahora, no ha habido consenso acerca de algún conjunto común de aspectos que delimiten con claridad los fenómenos que llamamos “emociones” –unas características que sean comunes a todas las emociones pero que sólo sean propias de las emociones–, y podría decirse por esta razón que dichos fenómenos guardan entre sí más bien un parecido de familia. Por estas razones, es clave que el trabajo educativo desde, con y sobre las emociones se nutra de su análisis cuidadoso y crítico."
      ],
      "imagen": "assets/cursos/emociones-y-educacion.webp"
    },
    {
      "id": "evaluar-tiempos-ia",
      "imagen": "assets/cursos/evaluar-tiempos-ia.webp",
      "titulo": "Cómo evaluar en tiempos de inteligencia artificial",
      "slug": "como-evaluar-en-tiempos-de-inteligencia-artificial",
      "tipo": "Taller",
      "area": "ia",
      "estado": "finalizado",
      "modalidad": "Virtual",
      "horas": 3,
      "sesiones": 1,
      "semanas": 1,
      "profesores": [
        "isabel-tejada",
        "camilo-lopez"
      ],
      "descripcion": [
        "La inteligencia artificial está revolucionando la forma en que evaluamos. En este taller exploraremos dos temas principales, qué podemos (debemos) cambiar ahora que los estudiantes pueden usar la IA y cómo podemos usar la IA responsablemente como apoyo para la evaluación. Partiremos de una reflexión crítica sobre el impacto de la IA generativa en el diseño y en la concepción de la evaluación, y exploraremos buenas prácticas para incorporarla en el aula."
      ],
      "horario": "Martes de 5:00 p.m. a 8:00 p.m.",
      "fechas": "25 de noviembre de 2025",
      "inscripcionHasta": ""
    },
    {
      "id": "analitica-datos",
      "imagen": "assets/cursos/analitica-datos.webp",
      "titulo": "Analítica y datos en educación con inteligencia artificial",
      "slug": "analitica-y-datos-en-educacion-con-inteligencia-artificial",
      "tipo": "Taller",
      "area": "ia",
      "estado": "finalizado",
      "modalidad": "Virtual",
      "horas": 3,
      "sesiones": 1,
      "semanas": 1,
      "profesores": [
        "camilo-lopez"
      ],
      "descripcion": [
        "La inteligencia artificial y la analítica de datos están transformando la forma en que tomamos decisiones educativas. En este taller descubrirás cómo recolectar y organizar información que generas a diario—desde “pequeños datos” en el aula hasta registros en plataformas digitales— y transformarla en insumos valiosos para mejorar tus prácticas y comprender mejor a tus estudiantes.",
        "Explorarás cómo recolectar, organizar e interpretar datos de manera ética y responsable, considerando la privacidad, la protección de la información y los riesgos de sesgos en el uso de la IA. Conocerás las diferencias entre Learning Analytics, Educational Data Mining y Educational Data Science y aprenderás a valorar sus posibilidades y limitaciones para detectar patrones, anticipar riesgos y personalizar la enseñanza. ¿Te imaginas tomar decisiones pedagógicas más precisas y confiables gracias al análisis de datos? Este taller te mostrará cómo hacerlo realidad."
      ],
      "horario": "Martes de 5:00 p.m. a 8:00 p.m.",
      "fechas": "18 de noviembre de 2025",
      "inscripcionHasta": ""
    },
    {
      "id": "ia-evaluacion-inclusiva",
      "imagen": "assets/cursos/ia-evaluacion-inclusiva.webp",
      "titulo": "Inteligencia artificial y evaluación inclusiva",
      "slug": "inteligencia-artificial-y-evaluacion-inclusiva",
      "tipo": "Taller",
      "area": "ia",
      "estado": "finalizado",
      "modalidad": "Virtual",
      "horas": 3,
      "sesiones": 1,
      "semanas": 1,
      "profesores": [
        "paula-garcia"
      ],
      "descripcion": [
        "La inteligencia artificial está revolucionando la forma en que evaluamos. Descubre cómo las herramientas concretas de inteligencia artificial generativa (IAGen) pueden agilizar tus procesos de evaluación y retroalimentación de forma precisa, personalizada y accesible. En este taller, explorarás alternativas prácticas de IAGen para mejorar el aprendizaje de tus estudiantes y tu práctica docente.",
        "Aprende a diseñar evaluaciones y brindar retroalimentaciones inclusivas con base en los principios del Diseño Universal para el Aprendizaje (DUA), considerando la integridad académica. Integra herramientas de IAGen en procesos de evaluación comunicativos y de apoyo, teniendo en cuenta la accesibilidad. ¿Te imaginas integrar la IAGen en un proceso de evaluación que no solo mida, sino que también comunique y apoye? Aquí descubrirás cómo hacerlo realidad."
      ],
      "horario": "Martes de 5:00 p.m. a 8:00 p.m.",
      "fechas": "11 de noviembre de 2025",
      "inscripcionHasta": ""
    },
    {
      "id": "prompt-workflow",
      "imagen": "assets/cursos/prompt-workflow.webp",
      "titulo": "Del prompt al workflow: creación de recursos educativos con inteligencia artificial",
      "slug": "del-prompt-al-workflow-creacion-de-recursos-educativos-con-inteligencia-artificial",
      "tipo": "Taller",
      "area": "ia",
      "estado": "finalizado",
      "modalidad": "Virtual",
      "horas": 3,
      "sesiones": 1,
      "semanas": 1,
      "profesores": [
        "isabel-tejada"
      ],
      "descripcion": [
        "La inteligencia artificial generativa está transformando la forma en que interactuamos con el conocimiento. En este taller, descubrirás cómo utilizar herramientas de IA para crear materiales educativos innovadores y de alta calidad. ¿Sabías que un simple prompt no es suficiente? Aprenderás a diseñar un workflow: una estrategia clave para interactuar de manera efectiva con la IA y así crear materiales como infografías, páginas de contenido y recursos multimedia que se adapten a tus necesidades y a las de tus estudiantes.",
        "A lo largo del taller, explorarás cómo pasar de instrucciones únicas a fujos de trabajo de co-creación con IA. De esta forma, mejorarás la calidad, permanencia y adaptabilidad de los productos generados. Con una metodología que combina teoría y práctica, aprenderás a integrar la IA desde una perspectiva técnica y pedagógica para avanzar profesionalmente y estar a la vanguardia en el diseño educativo, con herramientas innovadoras."
      ],
      "horario": "Martes de 5:00 p.m. a 8:00 p.m.",
      "fechas": "21 de octubre de 2025",
      "inscripcionHasta": ""
    },
    {
      "id": "variacion-datos-azar",
      "imagen": "assets/cursos/variacion-datos-azar.webp",
      "titulo": "Variación, datos y azar en primaria",
      "slug": "variacion-datos-y-azar-en-primaria",
      "tipo": "Certificado profesional",
      "area": "docencia",
      "estado": "finalizado",
      "modalidad": "Virtual",
      "horas": 192,
      "horario": "Martes 14 de octubre de 6:20 p.m. a 8:30 p.m. Sábados de 8:30 a.m. a 11:30 a.m.",
      "fechas": "14 de octubre – 22 de noviembre de 2025",
      "profesores": [
        "pedro-gomez",
        "alexandra-bulla",
        "eliana-nieto"
      ],
      "insignia": "https://equipoedco.uniandes.edu.co/wp-content/uploads/RepInsig-Variacion-datos-azar-primaria.png",
      "descripcion": [
        "Es un certificado profesional de formación en matemáticas para profesores de primaria ofrecida por UED, el centro de investigación y formación en Educación Matemática de la Facultad de Educación de la Universidad de los Andes, que tiene como uno de sus focos de trabajo la formación de profesores de matemáticas con el propósito de mejorar su práctica docente. Variación, datos y azar en primaria es un certificado profesional de formación permanente dirigido a profesores que enseñan matemáticas en primaria que buscan dominar en el conocimiento del contenido matemático que se aborda en este nivel educativo.",
        "Competencia: resolver problemas en contextos matemáticos y no matemáticos cuya formulación, comprensión y solución requiere de la movilización de los pensamientos variacional y aleatorio.",
        "Descubre la insignia digital que obtendrás por el desarrollo de este certificado profesional aquí.",
        "Notas:",
        "1. Los estudiantes regulares de la Universidad (estudiantes que estén cursando un pregrado o posgrado) no podrán inscribirse a través de la Dirección de Educación Continua a este certificado profesional. En caso de inscripción, la Dirección procederá con la devolución de esta. Estos estudiantes podrán cursar este certificado profesional como parte de su semestre regular si aplica dentro del pénsum del programa que estén cursando.",
        "2. Este certificado profesional es homologable al curso “Matemáticas escolares 2\" de la Especialización en Educación Matemática para profesores de primaria.",
        "3. Para realizar homologación, el estudiante deberá ser admitido a la Universidad de los Andes y cumplir con el Reglamento de Homologación y Validación de Materias, vigente al momento de realizar la solicitud."
      ],
      "competencia": "Resolver problemas en contextos matemáticos y no matemáticos cuya formulación, comprensión y solución requiere de la movilización de los pensamientos variacional y aleatorio.",
      "sesiones": "",
      "semanas": "",
      "inscripcionHasta": ""
    },
    {
      "id": "interacciones-aula",
      "imagen": "assets/cursos/interacciones-aula.webp",
      "titulo": "Interacciones en el aula: observar para transformar",
      "slug": "interacciones-en-el-aula-observar-para-transformar",
      "tipo": "Certificado profesional",
      "area": "docencia",
      "estado": "finalizado",
      "modalidad": "Virtual",
      "horas": 96,
      "sesiones": 8,
      "semanas": 8,
      "horario": "Jueves de 5:00 p.m. a 7:50 p.m.",
      "fechas": "9 de octubre – 27 de noviembre de 2025",
      "profesores": [
        "andrea-solano"
      ],
      "descripcion": [
        "El certificado profesional ofrece a las/los estudiantes la posibilidad de aprender herramientas metodológicas útiles para enriquecer su comprensión sobre cómo las interacciones en el aula que favorecen o no el desarrollo cognitivo, comportamental y socioemocional de los estudiantes.",
        "A través de observaciones de aula de videos del banco de experiencias de la Facultad de Educación, los estudiantes identifican y caracterizan algunos aspectos clave de la práctica pedagógica, utilizando como referencia dimensiones basadas en evidencia investigativa. De estas observaciones y de las actividades de clase se derivan recomendaciones y aplicaciones para la práctica educativa de los/las participantes.",
        "Al finalizar el certificado profesional, los estudiantes estarán en capacidad de caracterizar las interacciones que ocurren en un aula de clase, ya sea de la práctica pedagógica propia o de otras personas, y derivar de allí recomendaciones para el mejoramiento de la misma.",
        "Competencia: reflexionar y evaluar, desde un marco estructurado y basado en evidencias, las prácticas docentes, propias o ajenas, con miras a la construcción de ambientes educativos efectivos, participativos, reflexivos y críticos.",
        "Consulta la insignia digital que obtendrás por el desarrollo de este certificado profesional aquí.",
        "Notas:",
        "1. Los estudiantes regulares de la Universidad (estudiantes que estén cursando un pregrado o posgrado) no podrán inscribirse a través de la Dirección de Educación Continua a este certificado profesional. En caso de inscripción, la Dirección procederá con la devolución de esta. Estos estudiantes podrán cursar este certificado profesional como parte de su semestre regular si aplica dentro del pénsum del programa que estén cursando.",
        "2. Este certificado profesional de 2 créditos, puede ser homologado en la Especialización en Currículo y Pedagogía de la Facultad de Educación.",
        "3. Para realizar homologación, el estudiante deberá ser admitido a la Universidad de los Andes y cumplir con el Reglamento de Homologación y Validación de Materias, vigente al momento de realizar la solicitud."
      ],
      "competencia": "Reflexionar y evaluar, desde un marco estructurado y basado en evidencias, las prácticas docentes, propias o ajenas, con miras a la construcción de ambientes educativos efectivos, participativos, reflexivos y críticos.",
      "inscripcionHasta": ""
    },
    {
      "id": "gestion-del-bienestar-socioemocional-de-comunidades-educativ",
      "slug": "gestion-del-bienestar-socioemocional-de-comunidades-educativas",
      "area": "bienestar",
      "profesores": [
        "juanita-lleras-acosta"
      ],
      "titulo": "Gestión del bienestar socioemocional de comunidades educativas",
      "tipo": "Curso",
      "estado": "finalizado",
      "modalidad": "Virtual",
      "horas": 20,
      "sesiones": 10,
      "semanas": 5,
      "horario": "Martes y jueves de 6:00 p.m. a 8:00 p.m. Hora Colombia",
      "fechas": "12 de agosto – 11 de septiembre de 2025",
      "inscripcionHasta": "",
      "descripcion": [
        "El fortalecimiento de los procesos de gestión educativa es uno de los grandes desafíos de las instituciones en el momento actual. De la claridad y efectividad de esta gestión depende que las transformaciones educativas ocurran, no solo con una lógica de mejora continua e innovación, sino también, promoviendo el bienestar de los distintos actores educativos, estudiantes, docentes, directivos docentes, padres y madres de familia. Evitando de esta forma que las vivencias sociales se deterioren y terminen generando agresión, violencia o situaciones que afecten la salud física, emocional o mental de los integrantes de las comunidades educativas.",
        "De esta forma, el curso va a permitir a todos los y las participantes adelantar procesos de reflexión sobre las maneras como se vienen dando las dinámicas e interacciones sociales en las instituciones educativas y con esto reconocer las fortalezas y oportunidades de mejora de las vivencias de bienestar en las comunidades educativas. Dentro de los propósitos del curso se busca diferenciar las estrategias de bienestar engañoso, de las acciones, estrategias y rutinas que verdaderamente promueven bienestar como personas, profesionales y agentes educativos. Igualmente, el curso permite entender y desarrollar habilidades socioemocionales en los y las participantes que aportan de manera fundamental al logro de relaciones sociales más participativas, democráticas y pacíficas en los distintos contextos escolares."
      ],
      "imagen": "assets/cursos/gestion-del-bienestar-socioemocional-de-comunidades-educativ.webp"
    },
    {
      "id": "prevencion-agresion",
      "imagen": "assets/cursos/prevencion-agresion.webp",
      "titulo": "Herramientas para la prevención de la agresión y la intimidación escolar",
      "slug": "herramientas-para-la-prevencion-de-la-agresion-y-la-intimidacion-escolar",
      "tipo": "Curso",
      "area": "bienestar",
      "estado": "finalizado",
      "modalidad": "Virtual",
      "horas": 16,
      "sesiones": 8,
      "semanas": 4,
      "programa": "desarrollo-socioemocional",
      "profesores": [
        "lina-saldarriaga",
        "jose-mejia",
        "natalia-cardenas"
      ],
      "descripcion": [
        "¿Quieres ser parte del cambio para construir escuelas más pacíficas e inclusivas? En este curso aprenderás estrategias prácticas basadas en evidencia para gestionar conflictos, prevenir la agresión escolar y fortalecer la convivencia en tu institución.",
        "Este curso, diseñado para docentes y personas interesadas en la prevención de la violencia escolar, combina trabajo con expertos, herramientas innovadoras y un enfoque práctico que impactará directamente en las comunidades educativas. La convivencia escolar es un pilar fundamental del éxito académico y personal de los estudiantes. En un contexto donde los conflictos y la agresión son retos para las instituciones educativas, este curso brinda estrategias efectivas y basadas en evidencia para abordarlos desde evidencia científica y así promover entornos seguros para todos.",
        "A lo largo de este curso, se trabajará en:",
        "Resolución efectiva de conflictos: Los asistentes aprenderán estrategias prácticas y constructivas para mediar y resolver conflictos en el aula, y para fomentar la comunicación asertiva y la empatía entre estudiantes.",
        "Prevención de la agresión escolar: Los asistentes adquirirán herramientas basadas en evidencia para identificar y abordar a tiempo comportamientos agresivos en los que se promueve un entorno seguro y respetuoso.",
        "Construcción de una cultura de paz: Los asistentes aprenderán a aplicar prácticas basadas en evidencia para mejorar el clima escolar, fortalecer relaciones positivas y prevenir futuros conflictos.",
        "¿Qué hace único este curso?",
        "Acompañamiento experto: Los asistentes contarán con el apoyo personalizado de especialistas en convivencia escolar y resolución de conflictos, quienes guiarán paso a paso a los participantes para que aprendan a aplicar los conceptos en entornos educativos.",
        "Impacto real en la escuela: Se usarán ejemplos prácticos y orientados a la acción, que permitirán que los asistentes aprendan a implementar soluciones concretas para prevenir y manejar conflictos en sí comunidad educativa.",
        "Metodología innovadora y aplicada: Los asistentes recibirán una combinación de contenidos teóricos actualizados, simulaciones, análisis de casos reales y actividades interactivas que los prepararán para enfrentar desafíos cotidianos con confianza."
      ],
      "horario": "Martes y jueves de 6:00 p.m. a 8:00 p.m. Hora Colombia",
      "fechas": "8 de julio – 31 de julio de 2025",
      "inscripcionHasta": ""
    },
    {
      "id": "educacion-financiera",
      "imagen": "assets/cursos/educacion-financiera.webp",
      "titulo": "Educación financiera, mentalidad de crecimiento y propósito de vida",
      "slug": "educacion-financiera-mentalidad-de-crecimiento-y-proposito-de-vida",
      "tipo": "Curso",
      "area": "crecimiento",
      "estado": "finalizado",
      "modalidad": "Virtual",
      "horas": 20,
      "sesiones": 10,
      "semanas": 5,
      "profesores": [
        "francisco-ardila",
        "paula-garcia",
        "isabel-tejada"
      ],
      "descripcion": [
        "Este curso está diseñado para fortalecer habilidades en la gestión de recursos financieros desde una perspectiva consciente, considerando las creencias y emociones que influyen en la toma de decisiones. A partir del propósito personal y la construcción de escenarios futuros, se brindarán herramientas para fomentar el bienestar financiero, y mitigar consecuencias asociadas al estrés financiero, tales como la ansiedad frente a la incertidumbre económica, la presión emocional derivada del endeudamiento excesivo, la toma de decisiones impulsivas por falta de planificación y el impacto en el bienestar personal causado por la inestabilidad financiera.",
        "¡Inscríbete al curso y recibe una (1) hora gratis de asesoría personalizada con un experto en finanzas! Esta sesión está valorada entre $250.000 y $300.000, por lo que tendrás un beneficio exclusivo por tu inscripción.",
        "A lo largo del curso, los participantes desarrollarán habilidades clave, como:",
        "Autoconocimiento financiero: Construir un presupuesto financiero personal a partir de Identificar y reconocer creencias, hábitos y patrones emocionales que influyen en la gestión del dinero.",
        "Planificación y toma de decisiones financieras: Diseñar estrategias alineadas con metas personales y profesionales que acompañen su propósito de vida.",
        "Regulación emocional asociada a las finanzas personales: Aplicar técnicas para reducir la ansiedad relacionada con el manejo de recursos.",
        "Mentalidad de crecimiento en finanzas: Adoptar enfoques flexibles y proactivos para mejorar la relación con el dinero.",
        "Evaluación de riesgos, simplificación y oportunidades: Analizar escenarios financieros y tomar decisiones informadas para la estabilidad y el bienestar económico.",
        "El curso se dividirá en tres módulos. En el primer módulo, los participantes explorarán los fundamentos, las etapas del ciclo de la vida y la ruta de las finanzas personales desde una perspectiva transformadora. Reflexionarán sobre cómo su mentalidad –es decir, sus creencias y patrones de pensamiento sobre el dinero– ha moldeado su situación financiera actual y cómo estas creencias pueden ser un motor de crecimiento o una barrera para el progreso. Como primer paso hacia una gestión financiera más consciente, identificarán su situación actual a través de una primera aproximación a su balance personal y presupuesto personal, herramientas clave para comprender sus ingresos, gastos, activos y pasivos.",
        "En el segundo módulo, y basándose en los principios de la mentalidad de crecimiento (growth mindset), los participantes comprenderán que su bienestar financiero no depende exclusivamente de factores externos, sino de la manera en que perciben y afrontan los desafíos económicos. A lo largo de estas sesiones, desarrollarán habilidades claves para identificar y revisar creencias sobre el dinero, así como para reconocer el impacto de las emociones en la toma de decisiones financieras. Con este conocimiento, estarán en capacidad de estructurar un plan financiero alineado con sus prioridades y redefinir o fortalecer su propósito de vida como pilar fundamental para transformar hábitos y tomar decisiones estratégicas y sostenibles.",
        "En el tercer módulo, los participantes implementarán estrategias efectivas para transformar su relación con el dinero, aplicando las leyes fundamentales de las finanzas personales: ganar, ahorrar, gastar, invertir y donar. Identificarán gastos innecesarios y determinarán planes de acción frente a estos, incluyendo los gastos hormiga, mientras desarrollan un presupuesto simplificado que les permita administrar su dinero sin estrés. Asimismo, se explorarán métodos que ayudan a salir del déficit financiero, crear un hábito de ahorro sostenible y se adentrarán en el poder de los ingresos pasivos. Finalmente, incorporarán herramientas prácticas de seguimiento y control financiero para mantener estabilidad y crecimiento en el tiempo.",
        "A través de una metodología práctica que incluye ejercicios de autoobservación, reflexiones individuales, autoevaluaciones, y desarrollo de planes financieros personalizados, los participantes desarrollarán habilidades y obtendrán herramientas que les permitan llevar a cabo una transformación en su bienestar financiero y emocional. Los docentes se intercalarán el liderazgo de cada una de las sesiones de clase.",
        "El enfoque en la conexión entre mentalidad y finanzas distingue a este curso y proporciona herramientas únicas para avanzar hacia la libertad financiera deseada."
      ],
      "horario": "Lunes y miércoles de 6:00 p.m. a 8:00 p.m.",
      "fechas": "2 de julio – 4 de agosto de 2025",
      "inscripcionHasta": ""
    },
    {
      "id": "ambientes-positivos",
      "imagen": "assets/cursos/ambientes-positivos.webp",
      "titulo": "Ambientes de aprendizaje positivos y seguros",
      "slug": "ambientes-de-aprendizaje-positivos-y-seguros",
      "tipo": "Curso",
      "area": "bienestar",
      "estado": "finalizado",
      "modalidad": "Virtual",
      "horas": 16,
      "sesiones": 8,
      "semanas": 4,
      "programa": "desarrollo-socioemocional",
      "profesores": [
        "lina-saldarriaga",
        "jose-mejia",
        "natalia-cardenas"
      ],
      "descripcion": [
        "¿Quieres transformar tu práctica docente y contribuir a un entorno escolar más pacífico, inclusivo y emocionalmente saludable? Este curso es la oportunidad perfecta para adquirir herramientas prácticas, diseñadas para enfrentar los desafíos actuales que implica formar en desarrollo socioemocional a los niños, niñas y adolescentes. ¿Por qué es importante cursarlo? Este curso es clave para fortalecer el rol del educador como un agente de cambio en el entorno escolar.",
        "Comprender el desarrollo socioemocional y su impacto en el aprendizaje permite no solo mejorar el bienestar de los estudiantes, sino también promover un ambiente más positivo y colaborativo en el aula. Además, el curso ofrece herramientas prácticas para que los educadores reflexionen sobre sus propias emociones, gestionen mejor los desafíos del día a día y faciliten un aprendizaje integral que prepare a los estudiantes para la vida.",
        "¿Qué habilidades y conocimientos desarrollarás?",
        "¿Qué se abordará en este curso?",
        "La mentalidad de crecimiento y su relación con la mentalidad financieraReflexionarás sobre tus creencias respecto a tus habilidades, educación y relación con el dinero, para tomar decisiones más conscientes y constructivas.",
        "Diagnóstico financiero personalAprenderás a identificar y clasificar tus ingresos, gastos, activos y pasivos para conocer tu situación económica y detectar oportunidades de mejora.",
        "Autoconocimiento emocional en torno a las finanzasDesarrollarás habilidades socioemocionales para reconocer y comprender cómo influyen las emociones en tus decisiones económicas y cómo pueden atenderse.",
        "Diseño de un plan financieroEstablecerás metas financieras claras y sostenibles, alineadas con tu propósito de vida, incorporando hábitos que fortalezcan tu estabilidad económica.",
        "Presupuesto eficienteExplorarás formas para optimizar tus recursos mediante la reducción de gastos innecesarios, el fortalecimiento del ahorro y la planificación financiera hacia la estabilidad y libertad económica."
      ],
      "horario": "Martes y jueves de 6:00 p.m. a 8:00 p.m. Hora de Colombia",
      "fechas": "5 de junio – 1 de julio de 2025",
      "inscripcionHasta": ""
    },
    {
      "id": "desarrollo-socioemocional",
      "imagen": "assets/cursos/desarrollo-socioemocional.webp",
      "titulo": "Desarrollo socioemocional en el contexto escolar",
      "slug": "desarrollo-socioemocional-en-el-contexto-escolar",
      "tipo": "Programa",
      "area": "bienestar",
      "estado": "finalizado",
      "modalidad": "Virtual",
      "horas": 32,
      "sesiones": 16,
      "semanas": 8,
      "profesores": [
        "lina-saldarriaga",
        "jose-mejia",
        "natalia-cardenas"
      ],
      "descripcion": [
        "¿Quieres ser parte del cambio para construir escuelas más pacíficas, inclusivas y emocionalmente saludables? Este programa académico ofrece dos cursos esenciales para transformar tu práctica docente y fortalecer la convivencia en tu institución. El primer curso está diseñado para fortalecer el rol del docente como agente de cambio, promoviendo el desarrollo socioemocional de los estudiantes, lo cual mejora tanto su bienestar como el ambiente en el aula. Además, ofrece herramientas prácticas para que los educadores gestionen sus emociones y enfrenten los desafíos diarios, favoreciendo un aprendizaje integral que prepare a los estudiantes para la vida.",
        "El segundo curso sobre la prevención de la agresión y el bullying escolar ofrece estrategias prácticas para gestionar conflictos, prevenir la violencia y mejorar la convivencia en las escuelas. El curso combina el trabajo con expertos y herramientas innovadoras, enfocándose en crear entornos educativos más seguros. Es clave para mejorar la convivencia escolar, que es fundamental para el éxito académico y personal de los estudiantes, abordando conflictos y agresiones con enfoques respaldados por evidencia científica."
      ],
      "horario": "Martes y jueves de 6:00 p.m. a 8:00 p.m. Hora Colombia",
      "fechas": "5 de junio – 31 de julio de 2025",
      "inscripcionHasta": ""
    },
    {
      "id": "constructores-paz",
      "imagen": "assets/cursos/constructores-paz.webp",
      "titulo": "Constructores de paz en Colombia",
      "slug": "constructores-de-paz-en-colombia",
      "tipo": "Materia de pregrado",
      "area": "bienestar",
      "estado": "finalizado",
      "modalidad": "Virtual",
      "horas": 16,
      "sesiones": 8,
      "semanas": 8,
      "profesores": [
        "ana-velasquez"
      ],
      "descripcion": [
        "Pertenecer a una sociedad que durante gran parte de su historia ha estado sumergida en el conflicto armado deriva en la legitimación colectiva del uso de la violencia como mecanismo para resolver los problemas, así como en un sentimiento de impotencia individual frente el logro de la paz. Este curso pretende reactivar la esperanza de sus participantes, aportándoles conocimientos, actitudes y habilidades socioemocionales que les permita encontrar caminos para construir paz social en Colombia, iniciando por la búsqueda de su propia paz interior.",
        "Para realizar esta exploración, el curso parte de dos supuestos:",
        "1. Para que las personas puedan contribuir a la paz social es vital que encuentren paz en su interior y en sus relaciones interpersonales cercanas.",
        "2. Para alcanzar la paz interior, es esencial hacer un trabajo interno de autoconocimiento.",
        "Así, el curso invita a realizar una exploración reflexiva, acompañada de prácticas meditativas de atención plena (mindfulness), que llevan a los participantes a conectarse con sus propias realidades y a generar una autorreflexión para entenderse a sí mismos como responsables de la construcción de paz en la sociedad, a partir de su propia transformación individual. Partiendo desde una aproximación basada en la ética de la virtud, los participantes se embarcan en un ejercicio de indagación de sí mismos que les permite reflexionar acerca del tipo de persona que vale la pena ser y del tipo de vida que vale la pena vivir, para transformarse a sí mismos y construir su paz interior. Cada paso adelante en este proceso de autoconocimiento, se va conectando con el análisis crítico del actual contexto colombiano de posguerra y con la construcción de un compromiso individual de paz, que se aplica en situaciones de conflicto interpersonal y en situaciones de perdón. Es así como los participantes desarrollan su capacidad para comprender los retos de país desde una perspectiva compasiva y a la vez optimista, en tanto descubren alternativas de construcción de país, desde su vida cotidiana."
      ],
      "horario": "Miércoles de 9:00 a.m. a 10:50 a.m.",
      "fechas": "3 de junio – 26 de julio de 2025",
      "inscripcionHasta": ""
    },
    {
      "id": "mujeres-que-inspiran-construyendo-una-mentalidad-de-crecimie",
      "slug": "mujeres-que-inspiran-construyendo-una-mentalidad-de-crecimiento",
      "area": "crecimiento",
      "profesores": [
        "martha-ramirez"
      ],
      "titulo": "Mujeres que inspiran: construyendo una mentalidad de crecimiento",
      "tipo": "Curso",
      "estado": "finalizado",
      "modalidad": "Virtual",
      "horas": 20,
      "sesiones": 10,
      "semanas": 6,
      "horario": "Martes y jueves 6:00 p.m. a 8:00 p.m. Sin clase el 15 de mayo",
      "fechas": "8 de mayo – 12 de junio de 2025",
      "inscripcionHasta": "",
      "descripcion": [
        "Este es un programa diseñado para mujeres interesadas en fortalecer su autoconfianza, reconocer sus limitaciones internas y externas, y desarrollar una mentalidad orientada al crecimiento. Este curso integra herramientas prácticas que abordan temas como la comunicación efectiva, la gestión emocional, el establecimiento de límites saludables y la creación de relaciones de apoyo.",
        "Diferenciales del curso:",
        "Enfoque único y adaptado a las mujeres: Este curso reconoce las experiencias únicas que enfrentan las mujeres en su desarrollo personal y profesional, como el techo de cristal, el perfeccionismo, entre otros. Cada tema está diseñado para ayudar a las participantes a identificar estas barreras desde una perspectiva de mentalidad de crecimiento, empoderándolas para su desarrollo continuo. Además, fomenta la reflexión sobre el rol de las mujeres como agentes de cambio en sus comunidades y promueve el liderazgo colaborativo.",
        "Metodología activa e innovadora: Utiliza enfoques como el aprendizaje a través del juego y la metodología de clase invertida (flipped learning), que combinan actividades prácticas, retos semanales y reflexiones individuales y grupales. Esto garantiza un aprendizaje dinámico, aplicable y significativo.",
        "Fundamentación teórica y basada en la investigación: Este curso está diseñado a partir de estrategias y prácticas fundamentadas en investigaciones actuales y una base teórica sólida, lo que asegura que los contenidos sean relevantes y confiables.",
        "Este curso se distingue por su enfoque especializado en las experiencias de las mujeres, ofreciendo herramientas prácticas y metodologías innovadoras, respaldadas por la investigación, que no solo fomentan su desarrollo personal, sino que también fortalecen su capacidad para impactar positivamente a quienes las rodean."
      ],
      "imagen": "assets/cursos/mujeres-que-inspiran-construyendo-una-mentalidad-de-crecimie.webp"
    },
    {
      "id": "inteligencia-emocional",
      "imagen": "assets/cursos/inteligencia-emocional.webp",
      "titulo": "Inteligencia emocional: conviértete en el arquitecto de tu mente y emociones para crecer sin límites",
      "slug": "inteligencia-emocional-conviertete-en-el-arquitecto-de-tu-mente-y-emociones-para-crecer-sin-limites",
      "tipo": "Curso",
      "area": "bienestar",
      "estado": "finalizado",
      "modalidad": "Virtual",
      "horas": 16,
      "sesiones": 8,
      "semanas": 5,
      "profesores": [
        "alejandro-casas"
      ],
      "descripcion": [
        "La complejidad del entorno social y profesional actual, y los desafíos emocionales que enfrentan muchas personas resaltan la necesidad de un curso en inteligencia emocional. En este curso, los estudiantes no solo aprenderán a identificar y gestionar sus propias emociones, sino que también desarrollarán habilidades para comprender y responder eficazmente a las emociones de los demás. Esto es fundamental en un contexto donde el éxito profesional y el ejercicio de la ciudadanía requieren de personas emocionalmente inteligentes, capaces de establecer relaciones interpersonales saludables y resolver conflictos de manera asertiva.",
        "Este curso ofrece herramientas prácticas para ayudar a los participantes a conocerse mejor, fortalecer sus relaciones interpersonales, motivarse, autorregularse y cultivar una mentalidad de crecimiento que les permita adaptarse a los cambios y enfrentar los retos del día a día. El diferencial de este curso radica en su contenido actualizado, orientado tanto al bienestar emocional personal, como al éxito profesional en un mundo donde la inteligencia emocional es una habilidad altamente valorada y necesaria para líderes y ciudadanos proactivos."
      ],
      "horario": "Lunes y miércoles de 6:00 p.m. a 8:00 p.m. Hora Colombia",
      "fechas": "5 de mayo – 28 de mayo de 2025",
      "inscripcionHasta": ""
    },
    {
      "id": "gamificacion-evaluacion",
      "imagen": "assets/cursos/gamificacion-evaluacion.webp",
      "titulo": "Gamificación en educación: evaluación y retroalimentación",
      "slug": "gamificacion-en-educacion-evaluacion-y-retroalimentacion",
      "tipo": "Curso",
      "area": "docencia",
      "estado": "finalizado",
      "modalidad": "Virtual",
      "horas": 20,
      "sesiones": 8,
      "semanas": 4,
      "profesores": [
        "javier-velazquez"
      ],
      "descripcion": [
        "En el mundo de los juegos los diseñadores están buscando siempre nuevas formas de evaluar el desempeño de sus jugadores y dar retroalimentación adecuada. Las prácticas educativas siguen unos principios establecidos tradicionalmente que pueden complementarse y enriquecerse con estas mecánicas de evaluación. Esto no solo le permitirá al estudiante comprender mejor su estado en el proceso de aprendizaje, sino que generará motivación en momentos de error. Gamificación generalmente se asume como una técnica de motivación basada en el premio por el logro, pero el enfoque de este curso está en comprender el error como mecanismo de motivación hacia el éxito, lo que implica enfocarse en el diseño de sistemas de progreso y de desempeño continuo. Los docentes entenderán cómo las mecánicas contienen incentivos y procesos de evaluación claros para los estudiantes."
      ],
      "horario": "Lunes y miÃ©rcoles de 6.00 p.m. a 8.00 p.m. sin clase el 24 de marzo",
      "fechas": "3 de marzo – 31 de marzo de 2025",
      "inscripcionHasta": ""
    },
    {
      "id": "ia-para-la-educacion",
      "imagen": "assets/cursos/ia-para-la-educacion.webp",
      "titulo": "Inteligencia artificial para la educación",
      "slug": "inteligencia-artificial-para-la-educacion",
      "tipo": "Curso",
      "area": "ia",
      "estado": "finalizado",
      "modalidad": "Virtual",
      "horas": 20,
      "sesiones": 8,
      "semanas": 4,
      "profesores": [
        "camilo-lopez",
        "isabel-tejada"
      ],
      "descripcion": [
        "Transforma tu práctica educativa con inteligencia artificial Este curso te ofrece herramientas prácticas y conceptos clave para que entiendas y apliques la inteligencia artificial generativa en el aula. A través de dinámicas interactivas y ejemplos de vanguardia, descubrirás cómo la IA puede enriquecer tu labor docente. Reflexionaremos sobre los desafíos éticos de la IA en educación y exploraremos estrategias innovadoras para que la tecnología impulse tu creatividad pedagógica y potencie el aprendizaje de tus estudiantes. ¿Qué te ofrece este curso? Conocerás los conceptos esenciales para entender cómo funciona la inteligencia artificial y su impacto en el ámbito educativo. Aprenderás a utilizar modelos de IA, como ChatGPT, para diseñar experiencias pedagógicas que respondan a las necesidades actuales de los estudiantes. Abordarás los desafíos éticos que plantea la IA en educación, reflexionando sobre el equilibrio entre tecnología y humanidad. Experimenta un espacio participativo, donde el trabajo en equipo y las discusiones guiadas serán clave para integrar la IA en tu contexto educativo. Los profesores del curso combinan aprendizaje activo y reflexivo, en un ambiente colaborativo y participativo. Con actividades prácticas, proyectos en grupo y el uso de modelos de IA generativa como ChatGPT, experimentarás de primera mano cómo la IA puede integrarse en tu contexto educativo. Al finalizar, estarás listo para diseñar estrategias pedagógicas impactantes y adaptadas a la era digital."
      ],
      "horario": "Martes y jueves de 5:30 p.m. a 8:00 p.m. Hora Colombia",
      "fechas": "18 de febrero – 13 de marzo de 2025",
      "inscripcionHasta": ""
    },
    {
      "id": "neurociencias-primera-infancia",
      "imagen": "assets/cursos/neurociencias-primera-infancia.webp",
      "titulo": "Neurociencias y regulación emocional en la primera infancia: claves para el ámbito educativo",
      "slug": "neurociencias-y-regulacion-emocional-en-la-primera-infancia-claves-para-el-ambito-educativo",
      "tipo": "Curso",
      "area": "bienestar",
      "estado": "finalizado",
      "modalidad": "Virtual",
      "horas": 21,
      "sesiones": 6,
      "semanas": 5,
      "profesores": [
        "monica-moreno"
      ],
      "descripcion": [
        "Este curso ofrece un enfoque teórico y práctico sobre la gestión de procesos educativos, centrado en la neurobiología del desarrollo infantil en la primera infancia. Se exploran estrategias para promover la regulación emocional y el bienestar integral de los niños en esta etapa clave de su desarrollo. Los participantes aprenderán sobre los principales hallazgos en neurociencias aplicadas a la educación y cómo integrar la regulación emocional en contextos educativos para la primera infancia. El curso les proporcionará herramientas para mejorar su práctica docente y crear ambientes de aprendizaje efectivos. A diferencia de otros programas, este curso se enfoca específicamente en los primeros años de vida, una etapa crucial para el desarrollo neurobiológico y emocional, ofreciendo herramientas especializadas. Combina neurociencia y regulación emocional de manera práctica, impactando tanto el bienestar emocional como el rendimiento académico de los niños. Además, el curso incluye acompañamiento semi-personalizado, donde los participantes reciben apoyo para adaptar las estrategias a sus necesidades educativas particulares. Ofrece un balance entre teoría y estrategias prácticas basadas en evidencia, diseñadas para generar ambientes de aprendizaje óptimos. Finalmente, el curso aborda la sensibilidad al trauma y las experiencias adversas, proporcionando estrategias para educadores que buscan crear ambientes inclusivos y empáticos."
      ],
      "horario": "Jueves de 5.30 p.m. a 8.30 p.m. Hora Colombia",
      "fechas": "13 de febrero – 20 de marzo de 2025",
      "inscripcionHasta": ""
    },
    {
      "id": "estrategias-investigacion-participativa",
      "imagen": "assets/cursos/estrategias-investigacion-participativa.webp",
      "titulo": "Estrategias de investigación participativa con comunidad",
      "slug": "estrategias-de-investigacion-participativa-con-comunidad",
      "tipo": "Curso",
      "area": "comunidad",
      "estado": "finalizado",
      "modalidad": "Virtual",
      "horas": 24,
      "sesiones": 12,
      "semanas": 6,
      "profesores": [
        "irma-florez",
        "andres-astaiza"
      ],
      "descripcion": [
        "El curso Estrategias de investigación acción participativa centrada en la comunidad es una experiencia vivencial, que introduce a participantes, conceptos, principios y metodologías participativas para acompañar procesos de transformación social. Se desarrollan conocimientos, habilidades y actitudes para llevar a cabo procesos de cambio social con las comunidades, desde la comprensión de la complejidad del contexto, el diálogo, la interacción horizontal y la participación efectiva de los actores. Esta propuesta busca fortalecer la democratización del conocimiento mediante la validación de múltiples saberes y métodos de descubrimiento y difusión, como un camino para el cambio y la justicia social. El proceso consta de sesiones semanales virtuales sincrónicas y asincrónicas, orientadas desde pedagogías activas. Como parte de las actividades del curso, los participantes desarrollarán de manera individual un trabajo de campo el cual será acompañado por un tutor. Para participar en el curso es recomendable que el aspirante este desarrollando alguna experiencia o proyecto con comunidad.",
        "Curso basado en pedagogías activas y vivenciales, centrado en el aprendizaje del proceso investigativo a través de la práctica reflexiva. Se compone de actividades teórico-prácticas y requiere el desarrollo de un trabajo de campo en el que se implementen los aprendizajes del curso. Aborda los fundamentos de IAP y las estrategias necesarias para desarrollarla desde la co-construcción con la comunidad para transformar la realidad social. Atiende las necesidades de la región latinoamericana retomando la propuesta de los Objetivos de Desarrollo Sostenible de la UNESCO, así como, la importancia de la articulación entre la academia y las organizaciones de la sociedad civil. Los integrantes del equipo docente del curso están certificados como mentores del Programa de Formación de Mentores del Consorcio Knowledge for Change (K4C) de la Cátedra Unesco Community Based Research and Social Responsibility in Higher Education, e integran el Hub Colombia, https://www.unescochair-cbrsr.org/k4c-2/"
      ],
      "horario": "Martes de 6:00 p.m. a 8:00 p.m. y jueves de 5:00 p.m. a 7:00 p.m. | Sin clase el 22 de octubre",
      "fechas": "17 de octubre – 28 de noviembre de 2024",
      "inscripcionHasta": ""
    },
    {
      "id": "liderazgo-transformacion",
      "imagen": "assets/cursos/liderazgo-transformacion.webp",
      "titulo": "Liderazgo para la transformación educativa",
      "slug": "liderazgo-para-la-transformacion-educativa",
      "tipo": "Curso",
      "area": "liderazgo",
      "estado": "finalizado",
      "modalidad": "Virtual",
      "horas": 20,
      "sesiones": 9,
      "semanas": 5,
      "profesores": [
        "constanza-liliana-alarcon-parraga",
        "hernando-bayona-rodriguez",
        "pablo-cevallos-estarellas"
      ],
      "descripcion": [
        "Este curso ofrece un espacio de reflexión y aprendizaje para líderes y tomadores de decisión de los sistemas educativos de América Latina, centrado en cómo podrían superar los principales desafíos que enfrentan en sus gestiones. El diseño pedagógico y didáctico de este curso está orientado a que los participantes adquieran el lenguaje propio de la política educativa y se sensibilicen con las complejidades de los sistemas educativos latinoamericanos en los niveles macro, meso y micro. Además del estudio de casos exitosos, que son muy populares en este tipo de escenarios, este espacio amplía la visión de los retos educativos al analizar también algunas experiencias de casos no exitosos. Utilizando un modelo de aprendizaje basado en discusiones y análisis sobre algunos casos de implementación (exitosa o fallida) de políticas educativas, los participantes aprenderán lecciones valiosas acerca de cómo evitar volver a cometer los errores del pasado y avanzar sostenidamente hacia el mejoramiento de los sistemas educativos de la región. De esta forma, los participantes desarrollarán una visión crítica de las implementaciones al buscar las razones por las cuales unas políticas funcionan y otras no.",
        "El último día de clase sábado 7 de septiembre, se realizará una sesión presencial en la sede centro, se transmitirá virtual a quienes no puedan asistir."
      ],
      "horario": "Martes y jueves de 6:00 p.m. a 8:00 p.m. | Última sesión: sábado de 9:00 a.m. a 1:00 p.m.",
      "fechas": "13 de agosto – 7 de septiembre de 2024",
      "inscripcionHasta": ""
    },
    {
      "id": "mentalidad-crecimiento",
      "imagen": "assets/cursos/mentalidad-crecimiento.webp",
      "titulo": "Mentalidad de crecimiento para el liderazgo y la comunicación",
      "slug": "mentalidad-de-crecimiento-para-el-liderazgo-y-la-comunicacion",
      "tipo": "Curso",
      "area": "crecimiento",
      "estado": "finalizado",
      "modalidad": "Virtual",
      "horas": 30,
      "sesiones": 15,
      "semanas": 8,
      "profesores": [
        "martha-ramirez",
        "paula-garcia",
        "isabel-tejada"
      ],
      "descripcion": [
        "En 2006, Carol Dweck propuso el término Mentalidad de Crecimiento (Growth Mindset) para describir cómo las personas interpretamos el mundo que nos rodea. De acuerdo con la autora, una persona en mentalidad fija ve la inteligencia como algo que es determinado por la biología y que no puede ser modificado. En contraste, desde la mentalidad de crecimiento, la inteligencia es vista como algo que puede cambiar a partir de la determinación, el esfuerzo, las estrategias adecuadas y la motivación. Por medio de metodologías constructivas y participativas, los participantes tendrán la oportunidad de profundizar y reflexionar sobre conceptos relacionados con la plasticidad cerebral, la mentalidad fija y de crecimiento, las características de una persona con mentalidad de crecimiento, la importancia de la determinación para lograr nuestras metas, el lenguaje de las dos mentalidades, cómo dar realimentación efectiva y el rol de la metacognición y la evaluación en la mentalidad de crecimiento."
      ],
      "horario": "martes y jueves de 5:00 p.m. a 7:00 p.m.",
      "fechas": "25 de junio – 13 de agosto de 2024",
      "inscripcionHasta": ""
    },
    {
      "id": "habilidades-ia",
      "imagen": "assets/cursos/habilidades-ia.webp",
      "titulo": "Habilidades y herramientas para integrar la inteligencia artificial a tu práctica pedagógica de forma ética, creativa e intencionada",
      "slug": "habilidades-y-herramientas-para-integrar-la-inteligencia-artificial-a-tu-practica-pedagogica-de-forma-etica-creativa-e-intencionada",
      "tipo": "Programa",
      "area": "ia",
      "estado": "desarrollo",
      "modalidad": "Virtual",
      "horas": 18,
      "sesiones": 6,
      "semanas": 6,
      "profesores": [],
      "descripcion": [
        "Desde el diseño de clases hasta la implementación de recursos personalizados y el análisis de datos con IA, el uso intencionado y ético de esta tecnología abre un abanico de posibilidades para innovar en la docencia y fortalecer los procesos de enseñanza y aprendizaje. En esta cohorte de la serie Edu+IA desarrollarás habilidades para colaborar con la IA y comprender los roles que puede asumir en la concepción, desarrollo y evaluación de diseños pedagógicos.",
        "La propuesta se fundamenta en las competencias del AI Literacy Framework (AILit) de la OCDE, la Comisión Europea y Code.org —interacción con IA, creación con IA, gestión de IA y diseño de IA— y en las directrices de la UNESCO para una adopción de la IA centrada en el ser humano.",
        "Cada taller funciona de forma independiente, con niveles diversos de complejidad técnica y pedagógica. Quienes lo deseen pueden tomar el paquete completo de seis talleres para una experiencia formativa más amplia e integral."
      ],
      "oculto": true
    }
  ],
  "profesores": [
    {
      "id": "ana-velasquez",
      "imagen": "assets/profes/ana-velasquez.webp",
      "nombre": "Ana María Velásquez",
      "cargo": "Profesora Titular",
      "bio": "Profesora de la Facultad de Educación de la Universidad de los Andes. Doctora en psicología del desarrollo humano de la Universidad de Concordia (Canadá), magíster en educación y psicóloga de la Universidad de los Andes. Tiene 20 años de experiencia como formadora de docentes y es autora de más de 35 artículos de investigación. Sus áreas de experticia son el clima y manejo de aula, las relaciones de pares, la educación socioemocional y ciudadana, la prevención de la agresión y la promoción de la convivencia escolar. Ha investigado en el diseño y evaluación de programas como Aulas en Paz y ha participado en la construcción de la Encuesta de Clima Escolar, la Prueba de Capacidades Ciudadanas de la Secretaría de Educación Distrital y las Pruebas Saber de Competencias Ciudadanas del ICFES."
    },
    {
      "id": "monica-moreno",
      "imagen": "assets/profes/monica-moreno.webp",
      "nombre": "Mónica Tatiana Moreno",
      "cargo": "",
      "bio": "Psicóloga de la Universidad El Bosque, magíster en Psicología Clínica de la Universidad Nacional de Colombia y doctoranda en Educación de la Universidad de los Andes. Educadora de familias en Disciplina Positiva, entrenada en microanálisis y video-feedback por el Centro de Intervención Temprana de Chile y en habilidades de la Terapia Dialéctico Comportamental (DBT). Su investigación se centra en la regulación emocional de la primera infancia, los efectos de la crianza y las prácticas docentes en el aprendizaje, y la evaluación de programas de prevención del maltrato infantil. Ha sido docente universitaria, investigadora, diseñadora de programas educativos y directora de instituciones educativas."
    },
    {
      "id": "irma-florez",
      "imagen": "assets/profes/irma-florez.webp",
      "nombre": "Irma Flores",
      "cargo": "Profesora Asociada",
      "bio": "Psicóloga de la Universidad Nacional Autónoma de México, especialista en Desarrollo Comunitario (JICA, Tokio), psicoterapeuta familiar sistémica y magíster en Desarrollo Educativo y Social (UPN–CINDE). Doctora en Ciencias Sociales: Niñez y Juventud (CINDE–Universidad de Manizales). Mentora del Programa Knowledge for Change de la Cátedra UNESCO Community Based Research and Social Responsibility in Higher Education y coordinadora del Hub Colombia del Consorcio K4C."
    },
    {
      "id": "andres-astaiza",
      "imagen": "assets/profes/andres-astaiza.webp",
      "nombre": "Andrés Astaiza",
      "cargo": "",
      "bio": "Psicólogo, magíster en Educación y candidato a magíster en Investigación en Ciencias Sociales, con más de siete años de experiencia en docencia universitaria en Psicología, Humanidades y Metodología de Investigación. Mentor certificado del Consorcio Knowledge for Change (K4C) de la UNESCO y miembro del Hub Colombia IAPaz, con experiencia en la coordinación de equipos interdisciplinarios de investigación. Su enfoque docente se basa en la innovación de las prácticas educativas, la interdisciplinariedad y el aprendizaje colaborativo."
    },
    {
      "id": "luisa-gonzalez",
      "imagen": "assets/profes/luisa-gonzalez.webp",
      "nombre": "Luisa González",
      "cargo": "",
      "bio": "Licenciada en Biología y Química de la Universidad de Caldas, magíster y doctora en Educación de la Universidad de los Andes. Especialista en investigación cualitativa, con trayectoria en el diseño, implementación y evaluación de proyectos en diversos niveles educativos. Su trabajo se enfoca en la creación de espacios formativos, el análisis curricular desde una perspectiva sistémica, la democratización del conocimiento y la responsabilidad social en la educación superior. Mentora de la cuarta cohorte del Programa Knowledge for Change de la Cátedra UNESCO."
    },
    {
      "id": "isabel-tejada",
      "imagen": "assets/profes/isabel-tejada.webp",
      "nombre": "Isabel Tejada",
      "cargo": "Profesora Asociada",
      "bio": "Educadora e investigadora con 20 años de experiencia, profesora asociada de la Facultad de Educación de la Universidad de los Andes. Doctora con doble titulación en Ciencias del Lenguaje y en Comunicación Lingüística y Mediación Multilingüe (Université Paris 8 y Universitat Pompeu Fabra). Trabaja en mentalidad de crecimiento, el inglés como medio de instrucción y la inteligencia artificial centrada en el ser humano. Coautora de The Growth Mindset Revolution Guide (2024) y de un capítulo en Mindsets in Language Education (2025)."
    },
    {
      "id": "eduardo-escallon",
      "imagen": "assets/profes/eduardo-escallon.webp",
      "nombre": "Eduardo Escallón",
      "cargo": "Profesor Asociado",
      "bio": "Codirector del grupo de investigación Educación para la primera infancia. Historiador y doctor en Literaturas y Lenguas Romances. Global Visiting Faculty del Centro de Primera Infancia del Tecnológico de Monterrey y Fundación FEMSA. Fundó el Centro de Español de la Universidad de los Andes, dirigió el CIFE y lideró la creación de la Facultad de Educación, de la que fue primer decano. Lideró el componente pedagógico de la Medición nacional de la calidad de la educación inicial y el proceso de formación Evaluar para Avanzar, que benefició a 2.400 docentes de educación inicial."
    },
    {
      "id": "carolina-maldonado",
      "imagen": "assets/profes/carolina-maldonado.webp",
      "nombre": "Carolina Maldonado",
      "cargo": "Profesora Titular",
      "bio": "Codirectora del Grupo de investigación en Educación Inicial de la Universidad de los Andes y Global Visiting Faculty del Centro de Primera Infancia del Tecnológico de Monterrey y Fundación FEMSA. Doctora en Educación de la Universidad de Pittsburgh, con formación en psicología del desarrollo y educación. Su carrera se centra en la calidad de la educación inicial y su relación con el desarrollo infantil. Dirigió la Evaluación Nacional de Calidad de la Educación Infantil en Colombia para el Ministerio de Educación y ha liderado evaluaciones de programas de desarrollo profesional docente."
    },
    {
      "id": "paula-garcia",
      "imagen": "assets/profes/paula-garcia.webp",
      "nombre": "Paula García",
      "cargo": "Profesora Asociada",
      "bio": "Educadora con Ph. D. en Fonoaudiología de Teachers College, Columbia University, con formación en educación especial, neurociencias y educación. Profesora asociada de la Facultad de Educación de la Universidad de los Andes. Investiga las prácticas y políticas que facilitan el aprendizaje en el aula diversa y la reflexión docente sobre sus mentalidades. Lleva siete años formando docentes en Mentalidad de Crecimiento y es coautora de The Growth Mindset Revolution Guide (2024) y de un capítulo en Mindsets in Language Education (2025)."
    },
    {
      "id": "pedro-gomez",
      "imagen": "assets/profes/pedro-gomez.webp",
      "nombre": "Pedro Gómez",
      "cargo": "Profesor Visitante · UED",
      "bio": "Licenciado en Matemáticas e Ingeniero Industrial de la Universidad de los Andes, con maestrías de The University of Kent y The London School of Economics y DEA en Sociología de la Universidad París III. Doctor en Didáctica de la Matemática de la Universidad de Granada. Director de UED («una empresa docente»), del proyecto Funes, de la maestría en Educación Matemática y de las especializaciones virtuales en Educación Matemática de la Universidad de los Andes. Autor de libros de texto y de didáctica de la matemática."
    },
    {
      "id": "alexandra-bulla",
      "imagen": "assets/profes/alexandra-bulla.webp",
      "nombre": "Alexandra Bulla",
      "cargo": "UED",
      "bio": "Licenciada en educación básica con énfasis en Matemáticas de la Universidad Distrital Francisco José de Caldas y magíster en Educación Matemática de la Universidad de los Andes. Forma parte del equipo directivo de UED, donde es gestora de proyectos académicos, coordina programas de formación permanente y la Especialización virtual en Educación Matemática para profesores de primaria, y participa en proyectos de innovación e investigación apoyados por Minciencias."
    },
    {
      "id": "martha-ramirez",
      "imagen": "assets/profes/martha-ramirez.webp",
      "nombre": "Martha Adelaida Ramírez",
      "cargo": "Profesora Asociada",
      "bio": "Es educadora, investigadora y consultora con más de 20 años de experiencia. Desde 2018, su investigación se ha centrado en el impacto de la mentalidad de crecimiento en el aprendizaje y el desarrollo profesional. Colabora con instituciones educativas y empresas para promover procesos de transformación basados en la mentalidad, tanto en contextos académicos como corporativos. Como profesora adjunta en la Universidad de los Andes, ha liderado proyectos innovadores que integran la mentalidad de crecimiento en la enseñanza, la formación docente y el liderazgo educativo. En el sector empresarial, su trabajo explora cómo la mentalidad influye en la comunicación, la toma de decisiones y la cultura organizacional, fortaleciendo la resiliencia, la comunicación efectiva y el trabajo en equipo. Especialista en estrategias de instrucción, ha sido pionera en la aplicación de la metodología In-Class Flip en diversos entornos de aprendizaje. Es coautora del libro In-Class Flip: A Student-Centered Approach to Differentiated Learning (ISTE) y se le reconoce por diseñar experiencias de aprendizaje activas y diferenciadas. También es coautora del Mindset Revolution Handbook for Educators (2024), una publicación de acceso abierto desarrollada en colaboración con OSUN, Bard College y la Universidad de los Andes"
    },
    {
      "id": "javier-velazquez",
      "imagen": "assets/profes/javier-velazquez.webp",
      "nombre": "Javier Velásquez",
      "cargo": "Profesor de Cátedra",
      "bio": "Profesor de cátedra de la Facultad de Educación de la Universidad de los Andes y consultor experto en gamificación. Literato y magíster en Literatura de la Universidad de los Andes. Diseñador de juegos de mesa y fundador de Azahar Juegos y Free to Play. Tiene 12 años de experiencia en educación, cinco de ellos en consultorías de gamificación educativa y organizacional para entidades como Corpovisionarios, Codensa, Terpel y ETB."
    },
    {
      "id": "andrea-solano",
      "imagen": "assets/profes/andrea-solano.webp",
      "nombre": "Andrea del Pilar Solano",
      "cargo": "DIDACTA",
      "bio": "Psicóloga y magíster en Psicología de la Universidad de los Andes, con 26 años de experiencia en educación que incluyen consultoría a organismos internacionales, docencia, investigación y acompañamiento y formación de docentes. Trabaja en la Dirección de Innovación y Desarrollo Académico, Curricular y Tecnológico para el Aprendizaje (DIDACTA) de la Universidad de los Andes."
    },
    {
      "id": "johanna-alfonso",
      "imagen": "assets/profes/johanna-alfonso.webp",
      "nombre": "Johanna Alfonso Solano",
      "cargo": "Universidades corporativas",
      "nota": "Cursos corporativos",
      "bio": "Con más de 16 años de trayectoria en el diseño y gestión de universidades corporativas y estrategias de diversidad e inclusión en Colombia. Fue directora de la Universidad Ecopetrol y de la Universidad Compensar, y lidera la Dirección Académica de la Cámara de la Diversidad. Ha dirigido estrategias de aprendizaje y desarrollo organizacional para empresas como Juan Valdez, Colmena Seguros y Banco Caja Social. Licenciada en Filosofía, magíster en Educación de la Universidad de los Andes y candidata a MBA, certificada por el Learning Performance Institute."
    },
    {
      "id": "alejandro-casas",
      "imagen": "assets/profes/alejandro-casas.webp",
      "nombre": "Alejandro Casas",
      "cargo": "",
      "bio": "Docente con más de 13 años de experiencia en todos los niveles educativos. En la Universidad de los Andes ha enseñado inteligencia emocional en pregrado, resiliencia y adaptabilidad organizacional en el programa «Todos a la U» y comunicación efectiva en educación continua; también fue docente asistente en cursos de la Facultad de Educación como ambientes de aprendizaje, clima de aula y desarrollo de competencias socioemocionales. Fue jefe de área y docente de filosofía en el Gimnasio Británico y el Colegio del Santo Ángel."
    },
    {
      "id": "camilo-lopez",
      "imagen": "assets/profes/camilo-lopez.webp",
      "nombre": "Camilo Ernesto López Guarín",
      "cargo": "",
      "bio": "Ingeniero de Sistemas de la Universidad Nacional de Colombia, magíster en Ingeniería de Sistemas y Computación y en Psicología de la misma institución. Ha sido investigador y analista de datos en educación, desde la inicial hasta la superior, para la Universidad Nacional, la Universidad de los Andes y el Ministerio de Educación Nacional. Es estudiante del doctorado en Educación de la Universidad de los Andes, donde investiga la preparación para la educación superior."
    },
    {
      "id": "lina-saldarriaga",
      "imagen": "assets/profes/lina-saldarriaga.webp",
      "nombre": "Lina María Saldarriaga Mesa",
      "cargo": "",
      "bio": "Psicóloga y magíster en Psicología de la Universidad de los Andes y Ph. D. en Psicología del Desarrollo de la Universidad de Concordia (Canadá). Directora de operaciones del programa Aulas en Paz y coordinadora del HUB Latinoamericano de la Coalition for Good Schools. Ha sido consultora e investigadora del Ministerio de Educación, el ICFES, el Banco Mundial y Save the Children. Experta en desarrollo infantil y salud mental en la infancia y la adolescencia."
    },
    {
      "id": "natalia-cardenas",
      "imagen": "assets/profes/natalia-cardenas.webp",
      "nombre": "Natalia Cárdenas Zuluaga",
      "cargo": "",
      "bio": "Psicóloga, magíster en Educación y Desarrollo Humano. Desde 2009 es coordinadora académica del Simposio Internacional Acoso Escolar (Bullying) y asesora proyectos de convivencia escolar para el Ministerio de Educación Nacional, Fundación SURA y Bancolombia, entre otros. Facilitadora del Programa ACT de la Asociación Americana de Psicología y de Prácticas Restaurativas. Coordinadora de Desarrollo de Aulas en Paz y profesora asociada de la Universidad CES."
    },
    {
      "id": "jose-mejia",
      "imagen": "assets/profes/jose-mejia.webp",
      "nombre": "José Fernando Mejía",
      "cargo": "",
      "bio": "Psicólogo de la Universidad de los Andes con maestría en Educación de la Universidad de Harvard. Consultor internacional en ciudadanía global, aprendizaje socioemocional y prevención del acoso escolar para el Banco Mundial, el BID, la OEA, la UNESCO y el ICFES. Formó parte del equipo que desarrolló los Estándares de Competencias Ciudadanas de Colombia y coordinó el currículo de desarrollo socioemocional del Ministerio de Educación de Perú. Es director ejecutivo de Aulas en Paz y preside el Comité Directivo de EDUCAPAZ."
    },
    {
      "id": "monica-alvarez",
      "imagen": "assets/profes/monica-alvarez.webp",
      "nombre": "Mónica del Pilar Álvarez",
      "cargo": "",
      "bio": "Comunicadora social y periodista, magíster en Comunicación, Desarrollo y Cambio Social de la Universidad Santo Tomás. Mentora del Programa de Investigación Basada en Comunidad del Consorcio K4C de la UNESCO, adscrita al Hub Colombia IAPaz. Coordinadora académica del Semestre Paz y Región de la Universidad de Ibagué, donde acompaña iniciativas de educación superior y educación popular en contextos comunitarios y rurales."
    },
    {
      "id": "francisco-ardila",
      "imagen": "assets/profes/francisco-ardila.webp",
      "nombre": "Francisco Mario Ardila Jiménez",
      "cargo": "",
      "bio": "Experto en finanzas personales, administración de canales corporativos y estrategias financieras. Autor de El Reino (2024), un libro para jóvenes sobre finanzas, y del video libro Libertad Financiera (2008). Con más de 25 años en ventas consultivas y gestión estratégica en Latinoamérica, ha trabajado en Dell, IBM y Lexmark. MBA de la Universidad de los Andes y consultor en educación y finanzas personales."
    },
    {
      "id": "luis-eduardo-jaramillo",
      "nombre": "Luis Eduardo Jaramillo",
      "cargo": "",
      "bio": "Magíster en Educación y en Políticas Públicas de la Universidad de los Andes, y economista de la Universidad ICESI. Cuenta con experiencia en liderazgo educativo, planeación estratégica y analítica de datos en contextos escolares de alto desempeño. Actualmente se desempeña como director y coordinador de analítica en un colegio IB en Bogotá, donde lidera procesos de evaluación institucional, seguimiento de indicadores y toma de decisiones basada en evidencia. Ha trabajado en docencia universitaria y escolar, integrando análisis de datos, evaluación educativa y formación pedagógica para fortalecer la calidad y el desempeño académico."
    },
    {
      "id": "gary-alberto-cifuentes-alvarez",
      "nombre": "Gary Alberto Cifuentes Álvarez",
      "cargo": "",
      "bio": "Profesor asociado y director de investigaciones de la Facultad de Educación de la Universidad de los Andes (Colombia), en la que ha trabajado durante más de 20 años. Es doctor en Human Centered Communication and Informatics por la Universidad de Aalborg (Dinamarca). Entre sus libros más recientes se encuentran Lineamientos para investigar y evaluar innovaciones educativas (2018); Características individuales e institucionales que promueven la investigación y la innovación educativa en el Distrito Capital (2020); y Transformaciones que perduran: Orientaciones para garantizar la sostenibilidad de una innovación educativa (2024)."
    },
    {
      "id": "vanessa-catano-gamboa",
      "nombre": "Vanessa Cataño Gamboa",
      "cargo": "",
      "bio": "Ingeniera industrial y magíster en Administración Económica y Financiera, con una sólida base en análisis organizacional, gestión estratégica y liderazgo de procesos de aprendizaje. Su formación le ha permitido integrar la perspectiva técnica, económica y humana en proyectos de desarrollo del talento y transformación educativa. Cuenta con una trayectoria de más de 15 años liderando iniciativas de aprendizaje corporativo, educación virtual y gestión del conocimiento en organizaciones de alto impacto. En Ecopetrol impulsó el lanzamiento y posicionamiento de la Universidad Corporativa Uguana, gestionó presupuestos corporativos de gran escala y desarrolló iniciativas para nuevos negocios, abastecimiento, talento organizacional y el fortalecimiento de capacidades asociadas a proyectos energéticos en La Guajira. En Compensar diseñó y consolidó la Estrategia Virtual de Aprendizaje y el Campus Virtual, alcanzando más de un millón de acciones formativas anuales. Asimismo, lideró procesos de planeación, gestión presupuestal y relacionamiento estratégico, fortaleciendo la Universidad Corporativa en su aniversario de 20 años. Como docente, ha acompañado procesos de formación ejecutiva en el CESA; ha liderado proyectos de transformación digital educativa en la Universidad Tecnológica de Pereira y fortalecido habilidades organizacionales en el SENA. Su enfoque integra estrategia, tecnología y pedagogía para desarrollar capacidades críticas en equipos y organizaciones."
    },
    {
      "id": "maria-c-canadas",
      "nombre": "María C. Cañadas",
      "cargo": "",
      "bio": "Catedrática de Universidad e investigadora en Educación Matemática. Finalizó su doctorado en Didáctica de la Matemática en 2007. Su investigación está centrada principalmente en pensamiento algebraico, generalización, resolución de problemas y representaciones. Trabajó en el Departamento de Matemáticas de la Universidad de Zaragoza desde 2003 hasta 2008. Desde 2008 trabaja en el Departamento de Didáctica de la Matemática de la Universidad de Granada. Fue investigadora principal del proyecto I+D+i “Pensamiento funcional en estudiantes de educación primaria como una aproximación al pensamiento algebraico” y actualmente es investigadora principal del proyecto “Pensamiento funcional en educación primaria: relaciones funcionales, representaciones y generalización”. Ambos proyectos I+D+i son financiado por el Gobierno Español y los fondos FEDER de la Comunidad Económica Europea."
    },
    {
      "id": "maria-jose-gonzalez",
      "nombre": "María José González",
      "cargo": "",
      "bio": "Es profesora titular de la Universidad de Cantabria en el área de Didáctica de la Matemática desde 2002. Es Coordinadora de las Pruebas de Acceso a la Universidad, responsable de la Sección de Educación de La Gaceta de la Real Sociedad Matemática Española y preside la Comisión de Calidad del Grado de Magisterio en Educación Primaria en la Universidad de Cantabria. Ha publicado una centena de artículos de investigación en Educación Matemática en temáticas relacionadas con la formación del profesorado de matemáticas y con la utilización de tecnología en la enseñanza de las matemáticas. Ha participado en una docena de proyectos de investigación nacionales y europeos y ha participado en numerosas iniciativas de desarrollo de material educativo."
    },
    {
      "id": "carlos-velasco",
      "nombre": "Carlos Velasco",
      "cargo": "",
      "bio": "Es licenciado en Matemáticas de la Universidad Distrital Francisco José de Caldas y Magister en Educación —concentración en Educación Matemática— de la Universidad de los Andes. Fue docente de la Secretaría de Educación de Bogotá desde 2005 hasta 2016. Su último cargo en esa secretaría fue docente de matemáticas de Media y del programa de Formación Complementaria, en la Escuela Normal Superior Distrital María Montessori. Actualmente, forma parte de la nómina de UED de la Universidad de los Andes, en la que coordina los proyectos de Educación Matemática para profesores de primaria e infantil y forma parte del equipo académico de la Maestría en Educación Matemática de la Facultad de Educación de la Universidad de los Andes."
    },
    {
      "id": "paola-garcia-castillo",
      "nombre": "Paola García Castillo",
      "cargo": "",
      "bio": "Cuenta con más de 25 años de experiencia en liderazgo educativo y gestión académica. Posee certificación en Liderazgo y Gestión Educativa de la Universidad de Harvard, Maestría en Gerencia Educativa del Tecnológico de Monterrey y Especialización en Educación de la Universidad de los Andes. Ha desempeñado cargos directivos en instituciones públicas y privadas, incluyendo la vicepresidencia de educación en Redcol – Cognita, la rectoría del Buckingham School y la gerencia del programa Jornada Única en la Secretaría de Educación Distrital. Su trayectoria abarca la formación y acompañamiento de docentes, rectores y funcionarios del sector educativo a nivel nacional, así como la asesoría especializada al Ministerio de Educación Nacional. Fue seleccionada por la UNESCO (APCEIU) en 2017 como una de las 10 expertas internacionales —única latinoamericana— para revisar la guía de política pública sobre Educación para la Ciudadanía Global. Cuenta con amplia experiencia en la implementación de programas internacionales como IB (PYP, MYP, DP), Cambridge, COGNIA, CIS, High Scope y RULER, y ha liderado procesos de calidad educativa y formación docente en distintos contextos. En su trayectoria también ha ejercido la docencia en áreas de arte e historia del arte, así como en programas de Cambridge IGCSE."
    },
    {
      "id": "maria-luisa-ramirez-rodriguez",
      "nombre": "María Luisa Ramírez Rodríguez",
      "cargo": "",
      "bio": "Ha trabajado en cargos de liderazgo tanto en el sector público como en el privado durante los últimos doce años. Tiene formación en psicología de la Universidad Konrad Lorenz y una Maestría en Estudios Internacionales de la Universidad de los Andes. Es una profesional apasionada por la formación de líderes y equipos en temas relacionados con el desarrollo de habilidades de liderazgo, el pensamiento estratégico y la ciencia psicológica, con un enfoque especial en la creación de culturas organizacionales basadas en la seguridad psicológica. En 2019, recibió una Citación Presidencial por la Asociación Americana de Psicología (APA) en reconocimiento a sus contribuciones extraordinarias a la Psicología Internacional. En 2024, publicó un artículo en el Handbook of International Psychology, una obra colectiva con participación de más de ochenta países. En ese mismo año, escribió un artículo en la revista Humanitarian Exchange sobre cómo cultivar la seguridad psicológica. Actualmente vive en Washington DC y dirige su propia firma de consultoría, MLR Consutlants, la cual apoya procesos organizacionales desde los principios de la psicología aplicada. También apoya el proceso estratégico de una ONG en Colombia, GENFAMI, dedicada a la transformación social a través de enfoques basados en los derechos humanos, el género y la atención psicosocial."
    },
    {
      "id": "felipe-munoz-jaramillo",
      "nombre": "Felipe Muñoz Jaramillo",
      "cargo": "",
      "bio": "Comunicador social con énfasis en Producción Audiovisual por la Pontificia Universidad Javeriana y máster en Literatura Comparada. Cuenta con más de 20 años de experiencia en la creación de contenidos para empresas e instituciones de diversos sectores. Su trayectoria como consultor en marketing digital le ha permitido materializar su pasión por contar historias y transmitir emociones a través de la imagen fija y en movimiento. Además, es experto en experiencia de usuario y gamificación, áreas que complementan de manera estratégica su quehacer profesional."
    },
    {
      "id": "camila-suarez-acevedo",
      "nombre": "Camila Suárez Acevedo",
      "cargo": "",
      "bio": "Doctora en Filosofía y magíster en Psicología, con experiencia en investigación educativa, formación de docentes e investigadores, y análisis cuantitativo de datos. Su experiencia en análisis de datos incluye el manejo de información cuantitativa en contextos educativos y de ciencias sociales, concretamente, en organización y limpieza de datos, estadística descriptiva e inferencial, y comunicación de resultados para la toma de decisiones. Ha enseñado métodos cuantitativos de investigación en pregrado y posgrado, y ha acompañado a docentes y profesionales del sector educativo en el desarrollo de competencias investigativas y analíticas."
    },
    {
      "id": "jaime-andres-gutierrez-herrera",
      "nombre": "Jaime Andrés Gutiérrez Herrera",
      "cargo": "",
      "bio": "Magíster en Educación de la Universidad de los Andes, con énfasis en currículo, pedagogía y tecnologías educativas. Entre 2010 y 2019 se desempeñó como profesor y asesor pedagógico en el Centro de Innovación en Tecnología y Educación de la Facultad de Educación de la Universidad de los Andes. Ha sido conferencista y formador en programas de desarrollo docente, fortalecimiento de capacidades e innovación en evaluación por competencias, trabajando continuamente con diversas universidades y organizaciones del país, entre ellas el Centro de Enseñanza, Aprendizaje y Trayectoria Profesional (CEAP) de la Universidad del Rosario. De 2019 a 2024 ocupó el cargo de director de Gestión Curricular en la Universidad de Ibagué. En los últimos años, ha liderado procesos de diseño instruccional, LXD y UX/UI para programas y cursos virtuales en el sector EdTech, colaborando con organizaciones como Crack the Code, Griky y CIVIX ONG en el diseño de módulos virtuales orientados al fortalecimiento del liderazgo como estrategia de formación desde la Registraduría Nacional del Estado Civil."
    },
    {
      "id": "eliana-nieto",
      "nombre": "Eliana Nieto",
      "cargo": "",
      "bio": "Magister en Educación Matemática. Experiencia: Investigación y formación en Educación Matemática para los diferentes niveles educativos."
    },
    {
      "id": "alejandra-cortazar",
      "nombre": "Alejandra Cortázar",
      "cargo": "",
      "bio": "Consultora del Banco Mundial. Global Visiting Faculty del Centro de Primera Infancia del Tecnológico de Monterrey y Fundación FEMSA. Especialista en primera infancia con más de 20 años de experiencia. Doctora en Educación y Maestría en Psicología del Desarrollo de Teachers College -Columbia University. Psicóloga de la Universidad Católica de Chile. Ha trabajado como investigadora y consultora en temas de primera infancia, educación y políticas públicas para UNICEF, OCDE, Rand Europe, Diálogo Interamericano, UNESCO, Fundación Lego y el Banco Mundial, además de diferentes reparticiones del gobierno de Chile y fundaciones. Trabajó como docente e Investigadora de la Universidad Diego Portales. Fue consejera de la Agencia de la Calidad de la Educación de Chile. Fundadora e investigadora del Centro de Estudios de la Primera Infancia (CEPI)."
    },
    {
      "id": "ernesto-trevino",
      "nombre": "Ernesto Treviño",
      "cargo": "",
      "bio": "Profesor Titular UC Chile Doctor en Educación por la Universidad de Harvard, profesor e investigador de la Facultad de Educación de la Pontificia Universidad Católica de Chile, director del Centro UC para la Transformación Educativa (CENTRE UC) e investigador principal del Centro de Justicia Educacional. Ha colaborado con UNESCO, UNICEF, OEI, OEA y otros organismos internacionales. Principales áreas de estudio: políticas educativas, educación parvularia; desigualdades en educación, segregación escolar."
    },
    {
      "id": "sunny-arely-villa-juarez",
      "nombre": "Sunny Arely Villa Juárez",
      "cargo": "",
      "bio": "Socia fundadora Centro de Investigación Económica y Presupuestaria, A.C Profesora de economía Tecnológico de Monterrey Académica adscrita Centro de Primera Infancia del Tecnológico de Monterrey y Fundación FEMSA. Es doctora en políticas públicas; maestra en administración pública y política pública y licenciada en economía por la Escuela de Gobierno del Instituto Tecnológico y de Estudios Superiores de Monterrey. Cuenta con estudios sobre políticas públicas en la Universidad de Harvard y en la Universidad de Georgetown. Se especializa en estudios del presupuesto y gasto público, economía de los cuidados, análisis de incidencia y prospectivos. Tiene experiencia en impulsar la Agenda 2030 a través de los datos abiertos y la participación ciudadana. Colaboró en el Centro Estudios de las Finanzas Públicas de la Cámara de Diputados, en el Centro para el Desarrollo Regional y Nacional y otros organismos públicos. Es socia fundadora del Centro de Investigación Económica y Presupuestaria, A.C. y profesora de planta del departamento de economía del Tec de Monterrey, donde realiza investigación en economía de los cuidados con enfoque de primera infancia, género y finanzas públicas en favor de una sociedad mejor informada y más participativa en temas fiscales."
    },
    {
      "id": "juanita-lleras-acosta",
      "nombre": "Juanita Lleras Acosta",
      "cargo": "",
      "bio": "Es Psicóloga y Maestra en Artes Plásticas de la Universidad de Los Andes (Bogotá – Colombia), con una Maestría en Administración Pública de New York University (New York – USA). Tiene amplia experiencia en docencia, investigación, intervención y gestión de proyectos educativos, culturales y sociales y en el diseño, implementación y evaluación de políticas públicas, tanto educativas como culturales. Ha trabajado con distintas instituciones públicas como el Ministerio de Educación Nacional, el Ministerio de Cultura, el ICFES, el ICBF y con varias organizaciones y fundaciones tanto nacionales como internacionales como el Banco Mundial, Save the Children, Fundación Plan, Fundación Compartir, entre otras. Igualmente, con instituciones educativas y Universidades como la Universidad de Los Andes, la Universidad de La Sabana, la Universidad del Norte, Universidad del Rosario, Universidad Nacional, New York University, entre otras. Fue parte del equipo que elaboró los Estándares de Competencias Ciudadanas y participó ampliamente en su socialización y divulgación en las distintas Entidades Territoriales desde el Ministerio de Educación Nacional. Fue directora ejecutiva de la expansión Nacional del programa Aulas en Paz, participó en el equipo que elaboró la propuesta del Currículo para la Paz y actualmente forma parte del Centro de Estudio de Educación para la Paz."
    },
    {
      "id": "constanza-liliana-alarcon-parraga",
      "nombre": "Constanza Liliana Alarcón Parraga",
      "cargo": "",
      "bio": "Psicóloga y Licenciada en Educación Especial con especialización en Atención Social Integral en Salud Mental y Maestría en Desarrollo Educativo y Social. Cuenta con amplia experiencia en el diseño, implementación y seguimiento de políticas públicas sociales y proyectos estratégicos con resultados de alto impacto. Su liderazgo técnico y estratégico a nivel nacional se destaca por su participación en el diseño y puesta en marcha de la Política de Estado de Desarrollo Integral a la Primera Infancia - De Cero a Siempre. Además, ha ocupado importantes cargos públicos en el sector social y educativo, como Viceministra de Educación Preescolar, Básica y Media, Asesora de la Consejería Presidencial para la Primera Infancia y Subdirectora de Infancia de la Secretaria Distrital de Integración Social. También ha dirigido fundaciones empresariales y ha sido miembro de juntas directivas. En el ámbito universitario, Constanza Alarcón Párraga ha ocupado cargos directivos como de docencia tanto en pregrado como en posgrado, y su interés se centra en las áreas de pedagogía e infancia. Además, ha brindado apoyo en la gestión universitaria y ha sido par académico en la evaluación de calidad de programas universitarios. También se destaca por su diseño e implementación de programas de fortalecimiento de instituciones educativas."
    },
    {
      "id": "hernando-bayona-rodriguez",
      "nombre": "Hernando Bayona Rodríguez",
      "cargo": "",
      "bio": "Maestro hasta los huesos. He sido desde maestro de escuela hasta Viceministro de Educación. Fui maestro de aula durante doce años. Además de ser pedagogo (Licenciado en matemáticas y computación de la Universidad Antonio Nariño) soy Matemático de la Pontifica Universidad Javeriana. Soy Magíster en Matemática Aplicada de la Universidad Nacional de Colombia y Magister y Doctor en Economía de la Universidad de los Andes. Tuve la fortuna de ser Visiting Fellow en la Escuela de Educación de la Universidad de Harvard y profesor en la Facultad de Economía de la Universidad Nacional de Colombia. Aunque mi pasión es la educación, trabajé en temas financieros por 7 años, desempeñándome como director de riesgo en diferentes compañías. También trabajé como subdirector de operaciones en la UIAF, en el Ministerio de Hacienda, en tema de prevención de lavado de activos y financiación del terrorismo. Desde el 2012 regresé a mi verdadera esencia, la educación. Fui asesor del despacho, Gerente del Programa Todos a Aprender y Viceministro de Educación Preescolar, Básica y Media en el Ministerio de Educación. Actualmente trabajo como profesor e investigador en la Facultad de Educación de la Universidad de los Andes. Adicionalmente, soy certificado por el CREA en el Proyecto de Comunidades de Aprendizaje (CdA), proyecto que desarrollo con escuelas públicas en Colombia; también soy miembro directivo de la Red Interamericana de Liderazgo Educacional (RILE). Recientemente comencé a trabajar con la Red Juvenil de Liderazgo y la mesa de liderazgo educativo de ASCOFADE. Mis investigaciones están enfocadas en temas de derecho a la educación, análisis de políticas públicas en educación, economía de la educación, liderazgo educativo y formación de maestros."
    },
    {
      "id": "pablo-cevallos-estarellas",
      "nombre": "Pablo Cevallos Estarellas",
      "cargo": "",
      "bio": "Tiene un doctorado en Pedagogía y Filosofía, y una maestría en Educación y Pensamiento Crítico de Montclair State University, de Nueva Jersey, Estados Unidos, donde estudió con una beca Fulbright-Laspau. Sus áreas de investigación incluyen, entre otros temas, el estudio de las reformas educativas en América Latina, la formación inicial de docentes, y la educación para la ciudadanía, así como la didáctica de la escritura académica, del pensamiento crítico y de la filosofía. Entre 2007 y 2013 fue parte del equipo del Ministerio de Educación que impulsó profundas reformas educativas en su país, Ecuador, y de 2010 a 2013 ocupó el cargo de Viceministro de Educación. Entre 2016 y 2024 fue el Director de la Oficina para América Latina y el Caribe del Instituto Internacional de Planeamiento Educativo de la UNESCO (IIPE), con sede en Buenos Aires, Argentina. También ha sido profesor en programas de grado y de posgrado en la Universidad San Francisco de Quito, en el Marist College de Poughkeepsie, Nueva York, y en la Universidad Católica de Santiago de Guayaquil, y ha dado clases como profesor invitado en en la Universidad de Barcelona y en la Facultad Latinoamericana de Ciencias Sociales (FLACSO)."
    }
  ],
  "corporativos": {
    "intro": "Impulsamos innovación y competitividad con programas de formación continua a la medida, diseñados para transformar organizaciones y potenciar su crecimiento sostenible.",
    "pregunta": "¿Por qué incluso las entidades que no pertenecen al sector educativo deberían incluir en sus planes de formación programas de aprendizaje continuo y educación para toda la vida, de la mano de una Facultad de Educación?",
    "voces": [
      {
        "autor": "Andrés Gutiérrez",
        "rol": "Profesor",
        "texto": "Formar a quienes forman, en el contexto colombiano, es hoy una ventaja estratégica para cualquier organización, sea o no del sector educativo, pues puede innovar, adaptarse y crecer rápidamente hacia su misión y visión. Aprender a enseñar transforma la manera de diseñar experiencias, liderar equipos, comunicar y construir el know-how en torno a las prácticas y desafíos que enfrenta diariamente cualquier empresa o institución."
      },
      {
        "autor": "Johanna Alfonso Solano",
        "rol": "Profesora",
        "texto": "En un mundo en constante cambio el conocimiento se convierte en el recurso más estratégico: garantiza la competitividad, impulsa la innovación y fortalece la sostenibilidad social. […] Las organizaciones no solo profesionalizan sus procesos de capacitación, transformándolos en experiencias pedagógicas estructuradas y efectivas, sino que también envían un mensaje poderoso a su talento y a la sociedad: aquí no solo se trabaja, aquí también se aprende y se crece."
      }
    ],
    "casos": [
      {
        "cliente": "ICEIN Ingenieros Constructores S.A.S.",
        "logo": "assets/empresas/icein.webp",
        "web": "https://icein.com.co/",
        "cursos": [
          "Formador de formadores técnicos",
          "Diseño de ambientes de aprendizaje activos"
        ],
        "retos": [
          "Formar ingenieros y técnicos con conocimiento disciplinar pero no pedagógico.",
          "Convertir la experiencia en procesos de enseñanza efectivos.",
          "Incorporar metodologías activas y pertinentes para equipos de trabajo.",
          "Alinear la formación con el Sistema Nacional de Cualificaciones.",
          "Crear competencias para anticipar escenarios reales del sector de la construcción."
        ],
        "logros": [
          "Transformó expertos técnicos en líderes pedagógicos, capaces de enseñar con propósito e inspirar a sus equipos.",
          "Generó proyectos aplicados que respondieron a necesidades reales de la organización y del sector.",
          "Introdujo herramientas activas, digitales y de IA que mejoraron la calidad de sus formaciones.",
          "Promovió una cultura de compartir conocimiento: enseñar multiplica la experiencia técnica y la convierte en legado.",
          "Impactó la productividad y la seguridad en obra con programas ajustados al Sistema Nacional de Cualificaciones."
        ],
        "cierre": "Cuando un técnico o ingeniero asume el rol de formador, no solo comparte su experiencia: genera confianza, dinamiza el aprendizaje colectivo y abre nuevas posibilidades de crecimiento para toda la organización."
      },
      {
        "cliente": "Fundación Panamericana para el Desarrollo",
        "logo": "assets/empresas/fupad.webp",
        "web": "https://fupad.org/",
        "cursos": [
          "Formador de formadores",
          "Estrategias didácticas innovadoras para el aprendizaje activo y experiencial"
        ],
        "retos": [
          "Fortalecer las habilidades para implementar el enfoque de aprendizaje experiencial mediante metodologías activas, estrategias pedagógicas y evaluativas innovadoras, y acompañamiento basado en la retroalimentación."
        ],
        "logros": [
          "Profesionales expertos del sector justicia —Corte Suprema de Justicia, Policía Judicial y Fiscalía— conectaron con su propia experiencia para ejercitarse en nuevas habilidades de formación.",
          "Se reconocieron capaces de diseñar oportunidades de aprendizaje que trascienden la práctica tradicional, con metodologías activas, innovación pedagógica e integración de tecnologías digitales."
        ],
        "cierre": "Fue un proceso de formación de formadores, humano y reflexivo, que dejó una capacidad instalada para seguir fortaleciendo los programas de formación en sus instituciones."
      },
      {
        "cliente": "Centro de Educación Tecnológica — Colsubsidio",
        "logo": "assets/empresas/cet.webp",
        "web": "https://cetcolsubsidio.edu.co/",
        "cursos": [
          "Caja de herramientas del formador efectivo",
          "Siete herramientas pedagógicas para crear y acompañar procesos de aprendizaje en adultos para la empleabilidad"
        ],
        "retos": [
          "Promover el uso de herramientas de formación basadas en las ciencias del aprendizaje para crear experiencias memorables y efectivas en la enseñanza de adultos para la empleabilidad."
        ],
        "logros": [
          "El equipo de profesores CET se apropió de herramientas que conectan el desarrollo de habilidades con ambientes formativos donde se cuida tanto el conocimiento como la experiencia humana.",
          "Comprendió que enseñar a adultos implica crear espacios de confianza, motivación y apoyo: «si no te emocionas, no aprendes»."
        ],
        "cierre": "Su rol trasciende el de expertos y se transforma en el de diseñadores de experiencias educativas, informados por las ciencias del aprendizaje y capaces de ampliar las oportunidades de empleo de las personas."
      }
    ]
  }
};
