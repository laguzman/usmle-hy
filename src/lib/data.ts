export const stats = [
  { value: 1100, suffix: "+", label: "Estudiantes acompañados" },
  { value: 2018, suffix: "", label: "Desde" },
  { value: 96, suffix: "%", label: "Tasa de aprobación" },
];

export const features = [
  {
    number: "01",
    title: "La estructura del examen, como objetivo principal",
    description:
      "Si conoces el examen y dominas su estructura, puedes integrar los contenidos para poder pasarlo. Ese es el enfoque detrás de cada clase.",
  },
  {
    number: "02",
    title: "Estudio interdisciplinario",
    description:
      "Integramos los temas entre disciplinas en lugar de enseñar por materia — así aprendes a usar eliminación y las pistas del enunciado para resolver preguntas más rápido.",
  },
  {
    number: "03",
    title: "En inglés, explicado en Spanglish",
    description:
      "El material se revisa en inglés — el idioma real del examen — pero las explicaciones son en Spanglish, para que nada se pierda en el camino.",
  },
];

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
    color: "#F0A020",
    title: "Stamina Drills",
    tagline: "Cursos intensivos, una vez al mes, con temas específicos y mínimo 5 horas seguidas.",
    description:
      "Los Staminas son cursos intensivos que ofrecemos una vez al mes. Los temas son específicos y tenemos un mínimo de 5 horas seguidas. La stamina o resistencia es principalmente la capacidad actual para lograr un rendimiento de buena calidad — en nuestros intensivos te preparamos indirectamente para el día del examen, donde la resistencia y el enfoque son parte clave.",
    details: [
      { label: "Duración", value: "Una vez al mes · mínimo 5 horas seguidas" },
      { label: "Formato", value: "Curso intensivo, tema específico" },
      { label: "Para quién", value: "Quienes necesitan construir resistencia y enfoque para el examen" },
    ],
    steps: [
      {
        title: "Tema específico del mes",
        description: "Cada intensivo se enfoca en un tema puntual, sin dispersión.",
      },
      {
        title: "Mínimo 5 horas seguidas",
        description:
          "Practicas en bloques largos y continuos para entrenar tu resistencia real, no simulada.",
      },
      {
        title: "Rendimiento sostenido",
        description:
          "Trabajamos tu capacidad de mantener un rendimiento de buena calidad durante todo el bloque.",
      },
      {
        title: "Preparación indirecta para el examen",
        description: "La resistencia y el enfoque que construyes aquí se trasladan directo al día del examen.",
      },
    ],
  },
  {
    slug: "snap-drills",
    number: "06",
    color: "#F0651C",
    title: "Snap Drills",
    tagline: "Rondas rápidas de preguntas para afilar tu reconocimiento de patrones.",
    description:
      "Sesiones cortas y frecuentes de práctica rápida, diseñadas para mantenerte afilada o afilado entre bloques de estudio más largos. Te garantizamos resultados concretos en tu forma de responder.",
    details: [
      { label: "Duración", value: "Sesiones cortas y frecuentes" },
      { label: "Formato", value: "Drills rápidos en vivo" },
      { label: "Para quién", value: "Quienes quieren mantenerse activos entre bloques de estudio" },
    ],
    steps: [],
    benefits: [
      "Reconocer passwords en las preguntas",
      "Aumento de confianza",
      "Ahorro de tiempo en las preguntas",
      "Rápido procesamiento",
      "Superación personal",
      "Entrenamiento del cerebro",
      "Habilidades técnicas",
    ],
  },
  {
    slug: "drills-privados",
    number: "07",
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
    color: "#0E9AA7",
    title: "Meteorito",
    tagline: "Membresía mensual de acompañamiento continuo para quienes ya están en un programa.",
    description:
      "¡Conviértete en la fuerza que transforma el aprendizaje! Meteorito es nuestra membresía mensual de acompañamiento continuo: seguimiento cercano, apoyo con ECFMG y papeleo, guía de material de estudio y sesiones grupales para evaluar tu avance.",
    details: [
      { label: "Inversión", value: "$80 USD / mes" },
      { label: "Formato", value: "Membresía mensual de acompañamiento" },
      { label: "Para quién", value: "Quienes ya están inscritos en uno de nuestros programas" },
    ],
    steps: [],
    benefits: [
      "Follow up",
      "Clases extras",
      "Apoyo con ECFMG",
      "Resolución de dudas",
      "Acceso a chat privado",
      "Asesoría y gestión de papeleo",
      "Guía de uso del material de estudio",
      "Sesiones grupales para evaluar avances",
      "Explicación detallada de herramientas de estudio",
    ],
  },
];

export const programas = programasBase.map((p) => ({
  ...p,
  badge: `/brand/badges/${p.slug}.jpg`,
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
