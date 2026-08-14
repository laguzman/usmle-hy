export const countries = [
  "Argentina",
  "Bolivia",
  "Chile",
  "Colombia",
  "Costa Rica",
  "Cuba",
  "Ecuador",
  "El Salvador",
  "España",
  "Estados Unidos",
  "Guatemala",
  "Honduras",
  "México",
  "Nicaragua",
  "Panamá",
  "Paraguay",
  "Perú",
  "Puerto Rico",
  "República Dominicana",
  "Uruguay",
  "Venezuela",
  "Otro",
];

export const stats = [
  { value: 700, suffix: "+", label: "Estudiantes acompañados" },
  { value: 2021, suffix: "", label: "Desde" },
  { value: 90.6, suffix: "%", label: "Tasa de aprobación" },
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

export type FaqBlock =
  | { type: "p"; text: string }
  | { type: "list"; items: string[] };

export type FaqItem = {
  question: string;
  blocks: FaqBlock[];
};

export const faq: FaqItem[] = [
  {
    question: "¿Esto es un curso o un programa?",
    blocks: [
      {
        type: "p",
        text: "USMLE HY Tutor es un programa de preparación, no un curso tradicional. No existe una fecha fija de inicio o finalización, ni una duración establecida. Puedes ingresar en cualquier momento del año y avanzar de acuerdo con tu ritmo, disponibilidad y objetivos.",
      },
      { type: "p", text: "Nuestra metodología está diseñada para adaptarse a:" },
      {
        type: "list",
        items: [
          "Alumnos que comienzan desde cero.",
          "Alumnos que ya llevan tiempo estudiando.",
          "Alumnos que han tenido intentos previos y desean prepararse con una estrategia diferente.",
          "Alumnos que buscan fortalecer sus bases antes de presentar el examen.",
        ],
      },
      {
        type: "p",
        text: "Más que un \"paquete cerrado\", ofrecemos un acompañamiento continuo y flexible. Cada estudiante permanece en el programa el tiempo que considere necesario hasta sentirse preparado para presentar su examen y alcanzar su objetivo.",
      },
    ],
  },
  {
    question: "¿Cuánto tiempo dura el programa?",
    blocks: [
      { type: "p", text: "La duración del programa depende completamente de cada estudiante." },
      {
        type: "p",
        text: "No existe un tiempo exacto, ya que cada persona avanza a un ritmo diferente según sus conocimientos previos, disponibilidad y objetivos.",
      },
      {
        type: "p",
        text: "En términos generales, la preparación para Step 1 suele tomar entre 8 meses y 1 año o más, dependiendo de factores como:",
      },
      {
        type: "list",
        items: [
          "Base académica.",
          "Tiempo disponible para estudiar.",
          "Trabajo, familia u otras responsabilidades.",
          "Constancia y compromiso con el plan de estudio.",
        ],
      },
      {
        type: "p",
        text: "Nuestro objetivo no es que presentes el examen lo más rápido posible, sino que lo hagas cuando realmente estés preparado. Creemos que una preparación sólida, organizada y constante siempre ofrece mejores resultados que acelerar el proceso.",
      },
    ],
  },
  {
    question: "¿Cuánto tiempo tengo que estar en el programa para pasar el examen?",
    blocks: [
      {
        type: "p",
        text: "No existe una fórmula universal y ningún programa puede garantizar un PASS. El éxito en el USMLE depende de múltiples factores que varían en cada estudiante.",
      },
      { type: "p", text: "El resultado está influenciado por aspectos como:" },
      {
        type: "list",
        items: [
          "Disciplina",
          "Constancia",
          "Base académica",
          "Tiempo dedicado al estudio",
          "Manejo emocional el día del examen",
          "Compromiso con la metodología",
        ],
      },
      {
        type: "p",
        text: "Nuestro compromiso es acompañarte durante todo el proceso con una guía de estudio estructurada, clases, evaluaciones periódicas, seguimiento y orientación para ayudarte a identificar el momento en el que realmente estés preparado para presentar el examen.",
      },
      {
        type: "p",
        text: "No buscamos que presentes el examen lo antes posible; buscamos que lo presentes cuando tengas las mayores probabilidades de obtener un PASS.",
      },
    ],
  },
  {
    question: "Si estoy empezando desde cero, ¿puedo empezar con el programa?",
    blocks: [
      { type: "p", text: "Sí, y de hecho es el mejor momento para comenzar." },
      {
        type: "p",
        text: "Empezar desde cero dentro de USMLE HY Tutor representa una gran ventaja, ya que desde el primer día contarás con una metodología estructurada y una guía clara para avanzar paso a paso.",
      },
      { type: "p", text: "¿Qué beneficios obtienes?" },
      {
        type: "list",
        items: [
          "Recibes una guía de estudio organizada desde el inicio.",
          "Aprendes a utilizar los recursos correctos en el momento adecuado.",
          "Evitas perder tiempo y dinero probando múltiples materiales sin una estrategia.",
          "Construyes una base sólida que facilitará todo tu proceso de preparación.",
        ],
      },
      {
        type: "p",
        text: "Además, contamos con Meteorito, un subprograma diseñado especialmente para alumnos que comienzan desde cero. A través de seguimiento, organización, clases de apoyo y orientación constante, te ayudamos a estructurar tu preparación de forma realista, ordenada y sostenible.",
      },
      {
        type: "p",
        text: "La gran mayoría de nuestros alumnos que hoy han aprobado Step 1, Step 2 CK e incluso Step 3 comenzaron exactamente igual: desde cero, siguiendo nuestra metodología y confiando en el proceso.",
      },
    ],
  },
  {
    question: "¿Este programa es para Step 1 o Step 2 CK?",
    blocks: [
      { type: "p", text: "Nuestro programa te prepara para Step 1 y Step 2 CK al mismo tiempo." },
      {
        type: "p",
        text: "Esta es una de las principales ventajas de nuestra metodología. Desde el inicio trabajamos las bases fundamentales, permitiéndote desarrollar el razonamiento clínico y conectar los conceptos que ambos exámenes comparten.",
      },
      {
        type: "p",
        text: "Al construir una base sólida durante la preparación de Step 1, el camino hacia Step 2 CK se vuelve mucho más natural, rápido y eficiente. En lugar de empezar nuevamente desde cero, continúas fortaleciendo y aplicando los conocimientos que ya adquiriste.",
      },
      {
        type: "p",
        text: "Por eso, muchos de nuestros alumnos nos comentan que al llegar a Step 2 CK sienten que gran parte del trabajo ya está hecho. Todo termina conectándose, lo que les permite enfocarse en perfeccionar el razonamiento clínico y las estrategias propias de este examen, optimizando significativamente su tiempo de preparación.",
      },
      {
        type: "p",
        text: "En USMLE HY Tutor no preparamos un examen a la vez; construimos las bases necesarias para que avances con éxito en todo tu camino hacia la residencia médica en Estados Unidos.",
      },
    ],
  },
  {
    question: "¿Las clases son por sistemas o por temas?",
    blocks: [
      {
        type: "p",
        text: "No. Las clases no están organizadas por sistemas ni siguen un orden tradicional.",
      },
      {
        type: "p",
        text: "Nuestra metodología es interdisciplinaria, tal como funciona el USMLE. En una misma sesión se pueden integrar distintas especialidades (por ejemplo: gastroenterología, psiquiatría, microbiología y farmacología), permitiendo que el estudiante aprenda a relacionar conceptos de la misma forma en que los encontrará durante el examen.",
      },
      {
        type: "p",
        text: "Este enfoque fortalece el Pattern Recognition, desarrolla el razonamiento clínico y entrena al estudiante para identificar rápidamente las pistas clave de cada pregunta, en lugar de memorizar información aislada.",
      },
      {
        type: "p",
        text: "Gracias a esta metodología, puedes incorporarte al programa en cualquier momento del año, sin necesidad de esperar el inicio de un sistema específico. Nuestro objetivo es que aprendas a pensar como el USMLE desde el primer día.",
      },
    ],
  },
  {
    question: "¿Se alcanza a cubrir todo el material?",
    blocks: [
      { type: "p", text: "No existe un tiempo específico para \"terminar\" el material." },
      {
        type: "p",
        text: "Nuestra metodología no funciona como un curso tradicional donde se completa un temario en 3, 6 o 12 meses. USMLE HY Tutor es un programa de preparación continuo e interdisciplinario, diseñado para reforzar constantemente los temas de mayor importancia (High-Yield) para el USMLE.",
      },
      {
        type: "p",
        text: "Los temas se van integrando y repitiendo desde diferentes enfoques a lo largo del tiempo, permitiendo que el estudiante fortalezca sus bases, conecte conceptos y consolide el aprendizaje con cada clase. De esta manera, tanto los alumnos nuevos como quienes ya llevan varios meses continúan obteniendo beneficios del programa.",
      },
      {
        type: "p",
        text: "El paquete que elijas no determina el tiempo que permanecerás estudiando ni la cantidad de material que recibirás. Permanecerás en el programa el tiempo que necesites, de acuerdo con tu ritmo de estudio, tu evolución y la fecha en la que planees presentar el examen.",
      },
      {
        type: "p",
        text: "Nuestro objetivo no es que \"termines un curso\", sino que desarrolles las bases, el razonamiento clínico y la confianza necesarios para obtener tu PASS.",
      },
    ],
  },
  {
    question: "¿Qué pasa si soy nuevo y siento que sé poco?",
    blocks: [
      { type: "p", text: "No te asustes, es completamente normal." },
      {
        type: "p",
        text: "Prácticamente todos nuestros alumnos comenzaron exactamente igual que tú. Al iniciar un programa nuevo es normal sentirse un poco perdido mientras conoces la metodología, el Drive, los horarios y la dinámica de estudio.",
      },
      {
        type: "p",
        text: "Las primeras semanas requieren un período de adaptación. Poco a poco comenzarás a entender cómo funciona el programa, a conectar los temas y a aprovechar mejor todas las herramientas que ponemos a tu disposición.",
      },
      {
        type: "p",
        text: "Lo más importante es confiar en el proceso, seguir la guía de estudio y asistir a las clases. No te compares con alumnos que llevan varios meses en el programa; todos ellos estuvieron exactamente donde tú estás hoy.",
      },
      {
        type: "p",
        text: "Dale tiempo al proceso. Mantén la constancia, sigue la metodología y muy pronto tú también sentirás que todo empieza a conectar.",
      },
    ],
  },
  {
    question: "¿Puedo trabajar y estudiar al mismo tiempo con el programa?",
    blocks: [
      { type: "p", text: "Sí, es totalmente posible." },
      {
        type: "p",
        text: "La gran mayoría de nuestros alumnos trabajan, tienen familia, realizan guardias o estudian otras actividades mientras se preparan para el USMLE.",
      },
      {
        type: "p",
        text: "Nuestro programa está diseñado para ser flexible. Puedes organizar tu tiempo de estudio de acuerdo con tu disponibilidad, asistir a las clases en vivo cuando te sea posible y, si no puedes conectarte, revisar las grabaciones posteriormente para no perder el ritmo de la preparación.",
      },
      {
        type: "p",
        text: "No se trata de estudiar 10 o 12 horas al día. Lo más importante es la calidad del estudio, no la cantidad. En muchos casos, dedicar 4 o 5 horas diarias, bien organizadas y enfocadas, resulta mucho más efectivo que estudiar muchas horas sin una estrategia clara.",
      },
      {
        type: "p",
        text: "Con disciplina, constancia y una buena planificación, sí es posible trabajar y prepararte al mismo tiempo.",
      },
    ],
  },
  {
    question: "¿Necesito saber inglés para poder pasar los Steps?",
    blocks: [
      { type: "p", text: "No. No es necesario dominar inglés para aprobar el examen." },
      {
        type: "p",
        text: "Las clases se dictan en español, con apoyo en Spanglish cuando es necesario, y están enfocadas en:",
      },
      {
        type: "list",
        items: [
          "Identificar palabras clave",
          "Reconocer las pistas dentro de cada pregunta",
          "Entender qué te están preguntando, incluso sin un inglés perfecto",
        ],
      },
      {
        type: "p",
        text: "El objetivo no es \"hablar inglés\", sino aprender a leer estratégicamente el USMLE, interpretar correctamente las preguntas y llegar a la respuesta correcta de forma eficiente.",
      },
      {
        type: "p",
        text: "Muchos de nuestros alumnos han aprobado sin tener un inglés avanzado, gracias a las estrategias de lectura, análisis y descarte que se enseñan durante el programa.",
      },
    ],
  },
  {
    question: "¿Necesito tener todos los recursos (UWorld, NBME, libros, etc.) desde el inicio?",
    blocks: [
      {
        type: "p",
        text: "No. Uno de los principales objetivos de USMLE HY Tutor es evitar que el estudiante invierta tiempo y dinero en recursos que todavía no necesita.",
      },
      {
        type: "p",
        text: "Desde el primer día te indicaremos qué recursos utilizar, cuándo incorporarlos y cómo sacarles el mayor provecho, siguiendo el orden establecido en nuestra guía de estudio. No es necesario comprar todos los bancos de preguntas, libros o plataformas al inicio de la preparación.",
      },
      {
        type: "p",
        text: "Nuestra metodología está diseñada para que cada recurso se incorpore en el momento adecuado, de acuerdo con tu avance y tus necesidades.",
      },
      {
        type: "p",
        text: "Nuestro objetivo es que estudies mejor, no que acumules más recursos. Siguiendo la metodología, ahorrarás tiempo, dinero y evitarás la confusión que suele generar utilizar demasiados materiales al mismo tiempo.",
      },
    ],
  },
  {
    question: "¿Ustedes ayudan con papeleos y trámites?",
    blocks: [
      {
        type: "p",
        text: "Sí, pero este acompañamiento se realiza exclusivamente a través de nuestro subprograma Meteorito.",
      },
      {
        type: "p",
        text: "Además de ofrecer clases de refuerzo, sesiones de planificación y apoyo en la organización del estudio, Meteorito brinda orientación en documentación, trámites y aspectos administrativos relacionados con la preparación para el USMLE.",
      },
      {
        type: "p",
        text: "Si tienes dudas sobre documentación, registros, cronogramas o cualquier trámite relacionado con tu preparación, el equipo de Meteorito estará disponible para orientarte y ayudarte a organizar cada paso.",
      },
      {
        type: "p",
        text: "Con Meteorito, buscamos que puedas concentrarte en estudiar mientras nosotros te ayudamos a mantener tu preparación organizada, evitando confusiones y optimizando tu tiempo durante todo el proceso.",
      },
    ],
  },
  {
    question: "¿Cómo evalúan a los estudiantes?",
    blocks: [
      {
        type: "p",
        text: "La preparación del alumno no se evalúa únicamente con un simulacro. Aunque los NBME son una de las herramientas más importantes para medir el progreso, también analizamos la evolución del estudiante durante todo su proceso de preparación.",
      },
      {
        type: "p",
        text: "Generalmente, recomendamos comenzar a realizar NBME a partir del sexto mes de estudio, ya que permiten evaluar el razonamiento clínico, identificar fortalezas y debilidades, y estimar el nivel de preparación para el examen real.",
      },
      {
        type: "p",
        text: "Además, con Meteorito, las tutoras realizan un seguimiento continuo del estudiante, revisando el cumplimiento de la guía de estudio, el avance en bancos de preguntas, los resultados de los simulacros y el progreso general de la preparación.",
      },
      {
        type: "p",
        text: "La recomendación de presentar el examen no depende únicamente de aprobar un NBME, sino del conjunto de múltiples factores: el desempeño en los simulacros, el cumplimiento de la metodología, el progreso académico, la constancia y la confianza del estudiante.",
      },
    ],
  },
  {
    question: "¿Cuánto cuesta el programa y qué planes de pago tienen?",
    blocks: [
      {
        type: "p",
        text: "Contamos con diferentes programas y modalidades, por lo que la inversión varía según el plan que decidas tomar. Contáctanos y con gusto te compartimos el detalle de cada opción.",
      },
      {
        type: "p",
        text: "Todos nuestros programas se pagan de contado. Actualmente no ofrecemos financiamiento ni pagos en cuotas directamente con USMLE HY Tutor.",
      },
      {
        type: "p",
        text: "Si deseas diferir el pago, puedes realizarlo con tarjeta de crédito y posteriormente solicitar el diferido directamente con tu banco, de acuerdo con las opciones que este ofrezca.",
      },
      {
        type: "p",
        text: "De esta manera podrás organizar tus pagos de la forma que mejor se adapte a tus necesidades, sin afectar tu proceso de preparación.",
      },
    ],
  },
  {
    question: "¿Qué opción me recomiendan para empezar si soy nuevo 100%?",
    blocks: [
      {
        type: "p",
        text: "La mejor opción para comenzar son las clases grupales, ya que te permiten construir una base sólida y adaptarte a la metodología de estudio. Desde el inicio también recomendamos Meteorito, por el seguimiento continuo y la organización que brinda durante todo el proceso.",
      },
      {
        type: "p",
        text: "Snap Drills y Stamina Drills pueden incorporarse desde las primeras etapas para fortalecer el razonamiento clínico, el Pattern Recognition, la velocidad de respuesta y la resistencia mental. Más adelante, Test Taking Strategies ayuda a perfeccionar la estrategia para responder preguntas, mientras que los Drills Privados están especialmente recomendados para la recta final de la preparación, antes de presentar el examen.",
      },
      {
        type: "p",
        text: "Además, Test Taking Strategies también puede iniciarse desde el comienzo de la preparación. Este programa acelera significativamente el aprendizaje, ya que desde el inicio enseña a interpretar preguntas, identificar pistas, manejar el tiempo y desarrollar una estrategia efectiva para responder el examen.",
      },
    ],
  },
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
  { label: "Videos", href: "/reacciones" },
  { label: "Galeria", href: "/galeria" },
  { label: "FAQ", href: "/faq" },
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
