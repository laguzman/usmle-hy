export const stats = [
  { value: 1100, suffix: "+", label: "Estudiantes acompañados" },
  { value: 2018, suffix: "", label: "Desde" },
  { value: 96, suffix: "%", label: "Tasa de aprobación" },
];

export const features = [
  {
    number: "01",
    title: "Solo lo que sí importa",
    description:
      "Eliminamos el ruido. Te enfocas únicamente en lo que de verdad mueve la aguja, sin perder semanas en temas que no suman.",
  },
  {
    number: "02",
    title: "A tu ritmo, con estructura",
    description:
      "Avanzas cuando puedes, pero con un plan claro que te dice qué sigue. Libertad sin perderte en el camino.",
  },
  {
    number: "03",
    title: "Comunidad real",
    description:
      "Acompañamiento cercano entre personas que están viviendo lo mismo que tú, con mentores que ya recorrieron el camino.",
  },
];

export type ProgramIcon =
  | "group"
  | "checklist"
  | "diamond"
  | "run"
  | "bolt"
  | "lock"
  | "meteor";

export const programas = [
  {
    slug: "clases-grupales-step1-ck-step3",
    number: "01",
    icon: "group" as ProgramIcon,
    color: "#1F9D55",
    title: "Clases Grupales Step 1, Step 2 CK & Step 3",
    tagline: "Clases grupales en vivo con contenido de alto rendimiento para los tres exámenes.",
    description:
      "Clases grupales en vivo que cubren Step 1, Step 2 CK y Step 3 con material de alto rendimiento (high-yield), pensadas para avanzar junto a otras personas en tu misma etapa.",
    details: [
      { label: "Duración", value: "Programa continuo, por cohortes" },
      { label: "Formato", value: "Clases en vivo + grabaciones" },
      { label: "Para quién", value: "Quienes preparan Step 1, Step 2 CK o Step 3" },
    ],
    steps: [
      {
        title: "Ubicación en tu grupo",
        description:
          "Te ubicamos en la cohorte correcta según el examen que estás preparando.",
      },
      {
        title: "Clases en vivo semana a semana",
        description:
          "Sesiones grupales con contenido high-yield, directo a lo que realmente se pregunta.",
      },
      {
        title: "Material y grabaciones",
        description:
          "Acceso a las grabaciones y material de apoyo para repasar a tu ritmo.",
      },
      {
        title: "Práctica y refuerzo continuo",
        description:
          "Ejercicios y checkpoints para confirmar que el contenido quedó claro antes de avanzar.",
      },
    ],
  },
  {
    slug: "clases-grupales-step2-ck",
    number: "02",
    icon: "group" as ProgramIcon,
    color: "#8A5A2E",
    title: "Clases Grupales Step 2 CK",
    tagline: "Clases grupales en vivo enfocadas exclusivamente en Step 2 CK.",
    description:
      "Un espacio grupal dedicado por completo a Step 2 CK: razonamiento clínico aplicado, con el mismo enfoque de alto rendimiento.",
    details: [
      { label: "Duración", value: "Programa continuo, por cohortes" },
      { label: "Formato", value: "Clases en vivo + grabaciones" },
      { label: "Para quién", value: "Quienes preparan específicamente Step 2 CK" },
    ],
    steps: [
      {
        title: "Diagnóstico de tu nivel",
        description: "Partimos de dónde estás para enfocar las clases en lo que más te falta.",
      },
      {
        title: "Clases en vivo por sistemas",
        description:
          "Cubrimos cada sistema con casos clínicos que reflejan cómo se pregunta en el examen real.",
      },
      {
        title: "Resolución de dudas en grupo",
        description:
          "Espacio semanal para preguntar y ver cómo otros compañeros razonan los mismos casos.",
      },
      {
        title: "Simulacro de cierre",
        description: "Evaluación final para medir tu progreso antes del examen.",
      },
    ],
  },
  {
    slug: "test-taking-strategies-step1",
    number: "03",
    icon: "checklist" as ProgramIcon,
    color: "#E11D74",
    title: "Test Taking Strategies Step 1",
    tagline: "Estrategias de examen para resolver preguntas de Step 1 con más velocidad y precisión.",
    description:
      "No se trata solo de saber el contenido — se trata de saber responder. Un programa enfocado en técnica de examen para Step 1.",
    details: [
      { label: "Duración", value: "Curso corto, sesiones en vivo" },
      { label: "Formato", value: "Sesiones en vivo + práctica dirigida" },
      { label: "Para quién", value: "Quienes ya dominan el contenido y buscan afinar estrategia" },
    ],
    steps: [
      {
        title: "Análisis de tu forma de responder",
        description:
          "Revisamos tus patrones de error para identificar dónde estás perdiendo puntos.",
      },
      {
        title: "Técnicas de eliminación y manejo del tiempo",
        description:
          "Aprendes a descartar distractores y administrar el tiempo por bloque.",
      },
      {
        title: "Práctica dirigida con retroalimentación",
        description:
          "Resuelves preguntas en vivo con corrección inmediata sobre tu razonamiento.",
      },
      {
        title: "Simulacro cronometrado",
        description: "Pones en práctica la estrategia completa bajo condiciones reales.",
      },
    ],
  },
  {
    slug: "tts-step2-ck-sapphire",
    number: "04",
    icon: "diamond" as ProgramIcon,
    color: "#7C3AED",
    title: "TTS Step 2 CK Sapphire",
    tagline: "Estrategia de examen de nivel avanzado para Step 2 CK.",
    description:
      "Nuestro programa premium de estrategia para Step 2 CK, pensado para quienes buscan un score alto y una preparación más cercana.",
    highlight: true,
    details: [
      { label: "Duración", value: "Programa premium" },
      { label: "Formato", value: "Sesiones en vivo 1:1 y grupales" },
      { label: "Para quién", value: "Quienes buscan un score alto en Step 2 CK" },
    ],
    steps: [
      {
        title: "Diagnóstico avanzado",
        description:
          "Evaluamos a fondo tu razonamiento clínico y tus patrones de examen actuales.",
      },
      {
        title: "Estrategia personalizada",
        description:
          "Diseñamos un plan de técnica de examen a tu medida, no genérico.",
      },
      {
        title: "Sesiones 1:1 y grupales",
        description:
          "Combinamos acompañamiento cercano con la energía de practicar en grupo.",
      },
      {
        title: "Simulacros de alto nivel",
        description: "Práctica bajo presión real para llegar segura o seguro al examen.",
      },
    ],
  },
  {
    slug: "stamina-drills",
    number: "05",
    icon: "run" as ProgramIcon,
    color: "#F0A020",
    title: "Stamina Drills",
    tagline: "Simulacros de resistencia para aguantar el examen completo sin perder el enfoque.",
    description:
      "El contenido no sirve de nada si te agotas a la mitad del examen. Stamina Drills construye tu resistencia mental bloque a bloque.",
    details: [
      { label: "Duración", value: "Sesiones semanales" },
      { label: "Formato", value: "Bloques de práctica cronometrados" },
      { label: "Para quién", value: "Quienes necesitan construir resistencia para el día del examen" },
    ],
    steps: [
      {
        title: "Línea base de resistencia",
        description: "Medimos cuánto aguantas hoy con enfoque real, sin distracciones.",
      },
      {
        title: "Bloques progresivos",
        description:
          "Aumentamos la duración de los simulacros semana a semana, de forma controlada.",
      },
      {
        title: "Manejo de fatiga mental",
        description:
          "Técnicas concretas para mantener el enfoque en los últimos bloques del examen.",
      },
      {
        title: "Simulacro de día completo",
        description: "Un simulacro final que replica la duración total del examen real.",
      },
    ],
  },
  {
    slug: "snap-drills",
    number: "06",
    icon: "bolt" as ProgramIcon,
    color: "#F0651C",
    title: "Snap Drills",
    tagline: "Rondas rápidas de preguntas para afilar tu reconocimiento de patrones.",
    description:
      "Sesiones cortas y frecuentes de práctica rápida, diseñadas para mantenerte afilada o afilado entre bloques de estudio más largos.",
    details: [
      { label: "Duración", value: "Sesiones cortas y frecuentes" },
      { label: "Formato", value: "Drills rápidos en vivo" },
      { label: "Para quién", value: "Quienes quieren mantenerse activos entre bloques de estudio" },
    ],
    steps: [
      {
        title: "Ronda rápida de calentamiento",
        description: "Unas preguntas para activar el reconocimiento de patrones antes de empezar.",
      },
      {
        title: "Drills cronometrados",
        description: "Bloques cortos de alta intensidad enfocados en velocidad de respuesta.",
      },
      {
        title: "Revisión inmediata",
        description: "Corregimos en el momento para que el aprendizaje se quede fresco.",
      },
    ],
  },
  {
    slug: "drills-privados",
    number: "07",
    icon: "lock" as ProgramIcon,
    color: "#DC2626",
    title: "Drills Privados",
    tagline: "Sesiones de práctica 1:1, totalmente personalizadas a tus brechas.",
    description:
      "Atención completamente individual. Trabajamos exclusivamente sobre tus brechas específicas, a tu ritmo y en tu horario.",
    details: [
      { label: "Duración", value: "A tu medida" },
      { label: "Formato", value: "Sesiones privadas 1:1" },
      { label: "Para quién", value: "Quienes necesitan atención completamente personalizada" },
    ],
    steps: [
      {
        title: "Diagnóstico individual",
        description: "Identificamos con precisión tus brechas específicas de contenido y técnica.",
      },
      {
        title: "Plan de sesiones a tu medida",
        description: "Diseñamos las sesiones alrededor de lo que tú necesitas, no de un temario fijo.",
      },
      {
        title: "Práctica guiada 1:1",
        description: "Trabajamos caso por caso, con retroalimentación inmediata y personal.",
      },
    ],
  },
  {
    slug: "meteorito",
    number: "08",
    icon: "meteor" as ProgramIcon,
    color: "#0E9AA7",
    title: "Meteorito",
    tagline: "Sprint final de alto impacto para los días previos a tu examen.",
    description:
      "Cuando quedan pocas semanas, cada hora cuenta. Meteorito es un sprint de alta frecuencia enfocado solo en lo que va a mover tu resultado.",
    details: [
      { label: "Duración", value: "Sprint corto e intensivo" },
      { label: "Formato", value: "Sesiones en vivo de alta frecuencia" },
      { label: "Para quién", value: "Quienes están a semanas de su examen" },
    ],
    steps: [
      {
        title: "Detección de brechas críticas",
        description: "Priorizamos exactamente lo que más va a impactar tu score en el tiempo que queda.",
      },
      {
        title: "Plan de choque diario",
        description: "Un cronograma día a día, sin espacio para temas que no suman.",
      },
      {
        title: "Check-ins de alta frecuencia",
        description: "Seguimiento constante para ajustar el plan en tiempo real.",
      },
      {
        title: "Simulacro final",
        description: "Última prueba de confianza antes del día del examen.",
      },
    ],
  },
];

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
