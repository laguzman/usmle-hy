export const stats = [
  { value: 1100, suffix: "+", label: "Estudiantes acompañados" },
  { value: 2018, suffix: "", label: "Desde" },
  { value: 96, suffix: "%", label: "Tasa de aprobación" },
];

export const quienesSomosText = [
  "USMLE HY TUTOR® es un programa que complementa los estudios individualizados que cada alumno debe llevar durante su preparación para los USMLE Steps. Nuestro enfoque no es saturar de información, sino potenciar habilidades a través del dominio de temas High Yield (HY). La preparación está diseñada para Step 1 y Step 2 CK al mismo tiempo, permitiendo un aprendizaje integrado desde el inicio. Nuestras clases están 100% enfocadas en lo más relevante, necesario e indispensable para los USMLE Steps. Se dictan en español, con explicaciones del tutor en Spanglish, facilitando la comprensión y adaptación progresiva al lenguaje del examen.",
  "Nuestro objetivo principal es que el alumno conozca y domine la estructura real del USMLE. Cuando se entiende cómo está construido el examen, es posible integrar los contenidos de manera lógica y responder preguntas de forma más eficiente y estratégica. Trabajamos activamente en el desarrollo de la habilidad del pensamiento, enseñando a conectar temas y disciplinas de manera inmediata. El alumno aprende a identificar pistas dentro de cada pregunta y a aplicar el método de descarte, lo que le permite avanzar con mayor seguridad y rapidez en los bancos de preguntas, hasta dominar el estilo del examen real.",
  "Las clases en USMLE HY TUTOR son aleatorias e interdisciplinarias, es decir, no siguen un orden fijo por sistemas o temas. Esta metodología replica fielmente la estructura del USMLE, donde una misma pregunta puede integrar distintas disciplinas. Los temas se repiten de forma constante, apareciendo en diferentes contextos a lo largo del tiempo. Esta repetición refuerza el aprendizaje, evita vacíos de conocimiento y asegura que el alumno no se pierda ningún contenido clave.",
  "Al inicio, esta forma de estudio puede parecer confusa, pero con constancia y práctica durante los primeros dos meses, la mente se adapta progresivamente al ritmo del programa. Con el tiempo, todo comienza a fluir de manera natural: el alumno empieza a reconocer patrones, conectar conceptos con mayor rapidez y responder con confianza. Por esta razón, afirmamos que esta es una de las mejores metodologías para entrenar la mente exactamente como lo exige el examen real. Es importante recalcar que este programa no reemplaza el estudio personal, sino que lo complementa y optimiza, haciendo que el esfuerzo del alumno sea mucho más efectivo y enfocado en lo que realmente importa para aprobar.",
  "USMLE HY TUTOR ofrece una preparación completa y estratégica para los USMLE Steps, combinando clases grupales, sesiones privadas, prácticas intensivas y seguimiento personalizado. El enfoque va más allá del contenido académico: aquí también se entrenan las habilidades de test-taking, la resistencia mental y la organización del estudio. Nuestro objetivo es que cada alumno cuente con las herramientas necesarias para avanzar con seguridad, mejorar progresivamente sus resultados en los NBME y llegar realmente preparado al examen real, tanto a nivel académico como estratégico y mental.",
];

export const quienesSomosQuote = "Tu esfuerzo + nuestro método = tu éxito en el USMLE.";

export const programFeatures = [
  "Clases grupales y privadas disponibles",
  "Drills, cursos intensivos y entrenamiento de stamina",
  "Inscripción flexible, sin fecha de inicio o fin fija",
  "Diseñado para complementar tu estudio individual, no para reemplazarlo",
];

const programasBase = [
  {
    slug: "clases-grupales-step1-ck-step3",
    number: "01",
    color: "#1F9D55",
    title: "Clases Grupales Step 1, Step 2 CK & Step 3",
    tagline: "Clases en vivo 5 días a la semana, con acceso a USMLE Rx, Pathoma y una comunidad internacional.",
    description:
      "Clases en vivo cinco días a la semana en horario de Miami (Eastern Time). El horario oficial se envía todos los domingos para que puedas organizar tu semana con anticipación — por lo general las sesiones son de 7 a 9 PM. Todas quedan grabadas y disponibles en el drive exclusivo aproximadamente 24 horas después.",
    details: [
      { label: "Horario", value: "5 días a la semana · 7–9 PM (ET)" },
      { label: "Formato", value: "Clases en vivo + grabaciones a las 24h" },
      { label: "Para quién", value: "Step 1, Step 2 CK y Step 3, en un solo grupo" },
    ],
    benefits: [
      "Clases en vivo",
      "5 días a la semana",
      "Habilidades de asociación y descarte",
      "Acceso a videos de USMLE Rx y Pathoma",
      "Material de apoyo exclusivo para alumnos",
      "Grabaciones disponibles en caso de no asistir",
      "Networking con una comunidad internacional",
      "Chat interactivo para resolver dudas en grupo",
    ],
  },
  {
    slug: "clases-grupales-step2-ck",
    number: "02",
    color: "#8A5A2E",
    title: "Clases Grupales Step 2 CK",
    tagline: "Clases en vivo 3 días a la semana, con enfoque exclusivo en Step 2 CK.",
    description:
      "Programa diseñado exclusivamente para la preparación clínica de Step 2 CK. Las clases se dictan tres días por semana, por lo general de 5 a 7 PM (Eastern Time), con acceso adicional a las clases del grupo general para complementar tu preparación con un enfoque interdisciplinario.",
    details: [
      { label: "Horario", value: "3 días a la semana · 5–7 PM (ET)" },
      { label: "Formato", value: "Clases en vivo + grabaciones a las 24h" },
      { label: "Para quién", value: "Preparación clínica enfocada en Step 2 CK" },
    ],
    benefits: [
      "Clases en vivo 3 días a la semana",
      "Enfoque exclusivo en Step 2 CK",
      "Discusión de casos clínicos y preguntas high-yield",
      "Grabaciones disponibles para revisar las clases",
      "Chat interactivo para resolver dudas y compartir en comunidad",
      "Acompañamiento durante todo el proceso de preparación",
      "Acceso al grupo general del programa",
    ],
  },
  {
    slug: "test-taking-strategies-step1",
    number: "03",
    color: "#E11D74",
    title: "Test Taking Strategies Step 1",
    tagline: "Grupo privado y exclusivo para Step 1, con cupo limitado a 25 personas.",
    description:
      "Entrenamiento intensivo en técnicas de test-taking: aprendes a leer con precisión, identificar pistas, descartar opciones incorrectas y responder de forma rápida y efectiva. Al ser un grupo reducido, cada participante recibe atención prioritaria y un seguimiento más cercano. Las sesiones son en vivo y no quedan grabadas.",
    details: [
      { label: "Horario", value: "Sábados 11 AM (ET) · 12 horas al mes" },
      { label: "Formato", value: "Grupo privado, en vivo (sin grabación)" },
      { label: "Para quién", value: "Grupo cerrado, cupo limitado a 25 personas" },
    ],
    benefits: [
      "Grupo privado y exclusivo para Step 1",
      "12 horas privadas al mes",
      "Horas extra/bonus de práctica intensiva",
      "Entrenamiento intensivo en test taking strategies",
      "Identificación de pistas y palabras clave",
      "Descarte estratégico de opciones incorrectas",
      "Manejo del tiempo y concentración bajo presión",
      "Desarrollo de habilidades para enfrentar NBME y Step 1",
      "Acceso a clases grupales",
    ],
  },
  {
    slug: "tts-step2-ck-sapphire",
    number: "04",
    color: "#7C3AED",
    title: "TTS Step 2 CK Sapphire",
    tagline: "Grupo privado y exclusivo para Step 2 CK, con cupo limitado a 25 personas.",
    description:
      "Test Taking Strategies Step 2 CK — Sapphire Group. Un grupo privado y exclusivo enfocado en preguntas y casos high-yield, con acompañamiento cercano para desarrollar razonamiento clínico y pattern recognition. Las clases se realizan por lo general los domingos o lunes en la tarde, en vivo y sin grabación.",
    highlight: true,
    details: [
      { label: "Horario", value: "Domingo o lunes en la tarde · 12h/mes" },
      { label: "Formato", value: "Grupo privado, en vivo (sin grabación)" },
      { label: "Para quién", value: "Grupo cerrado, cupo limitado a 25 personas" },
    ],
    benefits: [
      "Grupo privado y exclusivo para Step 2 CK",
      "Preguntas y casos high-yield",
      "Horas extra/bonus de práctica intensiva",
      "Chat interactivo 24/7 para resolver dudas",
      "12 horas privadas al mes",
      "Razonamiento clínico y pattern recognition",
      "Corrección directa y retroalimentación personalizada",
      "Desarrollo de habilidades para enfrentar Step 2 CK",
      "Acceso a clases grupales de Step 2 CK y grupo general",
    ],
  },
  {
    slug: "stamina-drills",
    number: "05",
    color: "#F0A020",
    title: "Stamina Drills",
    tagline: "Sesiones grupales de alta intensidad — 8 a 10 horas continuas de entrenamiento.",
    description:
      "Sesiones grupales intensivas creadas para simular la exigencia del USMLE en un entorno de alto rendimiento. Durante 8 a 10 horas continuas, los participantes enfrentan preguntas y temas high-yield, con breaks estratégicos de 5 a 10 minutos para recuperar energía sin perder el ritmo ni la concentración.",
    details: [
      { label: "Frecuencia", value: "Una vez al mes o cada dos meses" },
      { label: "Formato", value: "8–10 horas continuas, con breaks estratégicos" },
      { label: "Para quién", value: "Step 1, Step 2 CK y Step 3 · cupos limitados" },
    ],
    benefits: [
      "Sesiones grupales de alta intensidad",
      "Step 1, Step 2 CK y Step 3",
      "8 a 10 horas continuas de entrenamiento",
      "Simulación del examen real",
      "Breaks estratégicos para mantener el rendimiento",
      "Desarrollo de resistencia mental (stamina)",
      "Manejo del tiempo y concentración",
      "Una vez al mes o cada dos meses",
    ],
  },
  {
    slug: "snap-drills",
    number: "06",
    color: "#F0651C",
    title: "Snap Drills",
    tagline: "Sesiones grupales de drills high-yield — 10 horas mensuales de entrenamiento.",
    description:
      "Sesiones grupales de entrenamiento high-yield diseñadas para reforzar los conceptos más importantes y de mayor impacto en el USMLE, con enfoque en active recall y pattern recognition. Grupos reducidos de máximo 50 estudiantes para un ambiente dinámico y participativo.",
    details: [
      { label: "Horario", value: "Miércoles 7:00 PM (ET) · 10h/mes" },
      { label: "Formato", value: "3 sesiones en vivo al mes" },
      { label: "Para quién", value: "Step 1, Step 2 CK y Step 3 · grupos de máximo 50" },
    ],
    benefits: [
      "Sesiones grupales de drills high-yield",
      "Aplicable para Step 1, Step 2 CK y Step 3",
      "Enfoque en los temas más importantes del USMLE",
      "10 horas mensuales de entrenamiento",
      "Grupos reducidos de máximo 50 estudiantes",
      "Entrenamiento basado en active recall y pattern recognition",
      "Desarrollo de velocidad, precisión y manejo del tiempo",
    ],
  },
  {
    slug: "drills-privados",
    number: "07",
    color: "#DC2626",
    title: "Drills Privados",
    tagline: "Entrenamiento personalizado con Kevin, individual o en grupos de hasta 3 personas.",
    description:
      "Sesiones de entrenamiento personalizado con Kevin, de manera individual o en grupos de hasta 3 personas. No son clases tradicionales, sino espacios de práctica intensiva dirigidos a alumnos en una etapa avanzada de preparación, ideales como complemento en la recta final antes del examen.",
    details: [
      { label: "Formato", value: "Individual o en grupos de hasta 3 personas" },
      { label: "Enfoque", value: "Retroalimentación inmediata con Kevin" },
      { label: "Para quién", value: "Alumnos en etapa avanzada de preparación" },
    ],
    benefits: [
      "Sesiones individuales o en grupos de hasta 3 personas",
      "Trabajo directo con preguntas high-yield",
      "Retroalimentación inmediata sobre tu razonamiento y estrategia",
      "Identificación de errores y fortalecimiento del método de descarte",
      "Mejora en el manejo del tiempo",
      "Ideal como complemento en la recta final de tu preparación",
    ],
  },
  {
    slug: "meteorito",
    number: "08",
    color: "#0E9AA7",
    title: "Meteorito",
    tagline: "Membresía mensual de acompañamiento continuo — requiere estar inscrito en un programa.",
    description:
      "En Meteorito no solo te ayudamos a estudiar: te acompañamos durante todo el proceso con una estrategia clara, mayor organización y un seguimiento constante, para que aproveches mejor tu tiempo de preparación.",
    details: [
      { label: "Formato", value: "Follow-ups + clases estratégicas + chat privado" },
      { label: "Inicio", value: "Primeros días de cada mes" },
      { label: "Para quién", value: "Requiere estar inscrito en el programa" },
    ],
    benefits: [
      "Follow-up inicial personalizado",
      "Seguimiento escrito semanal",
      "Follow-up final y evaluación de progreso",
      "Clases estratégicas de refuerzo",
      "Análisis de NBME y bancos de preguntas",
      "Organización y planificación del estudio",
      "Guía para flashcards y recursos de estudio",
      "Acceso a chat privado con tutores",
      "Clases teóricas de Step 1 y Step 2 CK",
      "Resolución de dudas y apoyo constante",
    ],
  },
];

const slideCounts: Record<string, number> = {
  "clases-grupales-step1-ck-step3": 3,
  "clases-grupales-step2-ck": 3,
  "test-taking-strategies-step1": 3,
  "tts-step2-ck-sapphire": 3,
  "stamina-drills": 3,
  "snap-drills": 3,
  "drills-privados": 1,
  meteorito: 4,
};

export const programas = programasBase.map((p) => ({
  ...p,
  badge: `/brand/badges/${p.slug}.jpg`,
  slides: Array.from(
    { length: slideCounts[p.slug] ?? 0 },
    (_, i) => `/brand/slides/${p.slug}/${i + 1}.jpg`
  ),
}));

export const nav = [
  { label: "Quiénes Somos", href: "/quienes-somos" },
  {
    label: "Programas",
    href: "/programas",
    dropdown: programas.map((p) => ({
      title: p.title,
      description: p.tagline,
      href: `/programas/${p.slug}`,
    })),
  },
  { label: "Reseñas", href: "/resenas" },
  { label: "Reacciones", href: "/reacciones" },
  { label: "Galería", href: "/galeria" },
] as const;

export const resenas = [
  {
    name: "Camila R.",
    role: "TTS Step 2 CK Sapphire",
    quote:
      "El método me dio algo que no tenía: un plan claro. Dejé de sentirme perdida entre tantos recursos y empecé a avanzar de verdad.",
    rating: 5,
  },
  {
    name: "Daniel M.",
    role: "Meteorito",
    quote:
      "En seis semanas logré lo que llevaba meses posponiendo. La estructura y el acompañamiento hicieron toda la diferencia.",
    rating: 5,
  },
  {
    name: "Valentina P.",
    role: "Test Taking Strategies Step 1",
    quote:
      "Sentí que por fin alguien me decía exactamente qué hacer y cuándo. La comunidad también ayudó muchísimo a no rendirme.",
    rating: 5,
  },
  {
    name: "Andrés G.",
    role: "Clases Grupales Step 1, Step 2 CK & Step 3",
    quote:
      "Pasé de sentirme abrumado a tener total claridad de mi ruta. Recomendado para quien necesita foco de verdad.",
    rating: 5,
  },
  {
    name: "Renata S.",
    role: "Clases Grupales Step 2 CK",
    quote:
      "Lo que más valoro es que eliminaron lo que no servía. Aprendí más en menos tiempo que en intentos anteriores por mi cuenta.",
    rating: 5,
  },
  {
    name: "Julián T.",
    role: "Drills Privados",
    quote:
      "El acompañamiento se sintió humano, no automatizado. Eso marcó la diferencia en los momentos más difíciles.",
    rating: 5,
  },
];
