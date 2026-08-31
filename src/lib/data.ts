export const gallerySections = [
  {
    key: "eventos",
    title: "Eventos",
    description: "Encuentros, actividades y momentos especiales de nuestra comunidad.",
    cta: "Ver galería",
  },
  {
    key: "feedbacks",
    title: "Feedbacks",
    description: "Mensajes y experiencias compartidas por nuestros estudiantes durante su preparación.",
    cta: "Ver feedbacks",
  },
  {
    key: "pass",
    title: "Pass",
    description: "Celebramos cada examen aprobado y cada meta alcanzada por nuestros estudiantes.",
    cta: "Ver resultados",
  },
  {
    key: "reacciones",
    title: "Reacciones",
    description: "Reacciones de nuestros estudiantes al conocer sus resultados y logros.",
    cta: "Ver reacciones",
  },
  {
    key: "equipo",
    title: "Nuestro Equipo",
    description: "Conoce a las personas que forman parte de USMLE HY TUTOR® y acompañan a nuestros estudiantes.",
    cta: "Conocer al equipo",
  },
];

export type TeamMember = {
  name: string;
  role: string;
  photo: string;
  bio: string[];
};

export const teamMembers: TeamMember[] = [
  {
    name: "Kevin",
    role: "Founder & CEO | USMLE Mentor & Instructor",
    photo: "/gallery/equipo/kevin.jpeg",
    bio: [
      "Kevin Salazar Rikeros, médico ecuatoriano que llegó a Estados Unidos en 2017 para comenzar su preparación para los USMLE. Tras completar y aprobar sus exámenes, en 2022 fundó USMLE HY TUTOR®️, comenzando con un solo estudiante y construyendo una comunidad que hoy supera los 950 estudiantes acompañados.",
      "La medicina y la enseñanza son dos de sus grandes pasiones. Su experiencia dio origen a una metodología enfocada en High-Yield content, Pattern Recognition, razonamiento clínico y Test-Taking Strategies, participando activamente en la enseñanza y desarrollo de los programas.",
    ],
  },
  {
    name: "Matu",
    role: "Dirección Administrativa",
    photo: "/gallery/equipo/matu.jpeg",
    bio: [
      "Maria Claudia Weir, empresaria ecuatoriana con más de 15 años de experiencia en el sector camaronero, vinculada a DAPETSA en Ecuador. En 2024 asumió el liderazgo de la expansión de la compañía hacia Estados Unidos, donde actualmente dirige DAPETSA Corp, enfocándose en estrategia, operaciones y crecimiento internacional.",
      "Su experiencia en gestión, organización, marketing y desarrollo de proyectos también forma parte del crecimiento de USMLE HY TUTOR®️, trabajando junto a Kevin en la planificación, comunicación y ejecución de iniciativas para el desarrollo de la marca y su comunidad.",
    ],
  },
  {
    name: "Faviana",
    role: "Tutora",
    photo: "/gallery/equipo/faviana.jpeg",
    bio: [
      "Faviana Bracho, médica graduada de La Universidad del Zulia (LUZ) e International Medical Graduate. Ha completado y aprobado USMLE Step 1 y Step 2 CK y cuenta con certificación ECFMG.",
      "Como tutora de USMLE HY TUTOR®️, aporta su experiencia en el proceso USMLE para acompañar a los estudiantes en su preparación, reforzando conceptos High-Yield, razonamiento clínico y estrategias orientadas al examen. Se caracteriza por su dedicación, constancia y compromiso con el aprendizaje continuo.",
    ],
  },
  {
    name: "Maiva",
    role: "Tutora",
    photo: "/gallery/equipo/maiva.jpeg",
    bio: [
      "Maiva Salazar Ortega, médica cirujana venezolana, especialista en Pediatría y Puericultura, con más de 15 años de trayectoria clínica nacional e internacional. Su experiencia profesional incluye el manejo integral de la salud infantil y experiencia práctica tanto en Venezuela como en Estados Unidos.",
      "Como tutora de USMLE HY TUTOR®️, participa en la preparación de estudiantes para los USMLE, reforzando contenidos de Step 1 y Step 2 CK, asociaciones de conceptos y estrategias para la resolución eficiente de preguntas. Su experiencia clínica aporta una perspectiva práctica al aprendizaje y al desarrollo del razonamiento médico.",
    ],
  },
  {
    name: "Yuliet",
    role: "Tutora",
    photo: "/gallery/equipo/yuliet.jpeg",
    bio: [
      "Yuliet Milian, médica graduada de la Universidad de Ciencias Médicas Raúl Dorticós Torrado en Cienfuegos, Cuba, e International Medical Graduate. Cuenta con experiencia clínica en Medicina Interna, Cirugía, Pediatría, Ginecología y Obstetricia, además de atención primaria. Actualmente se desempeña como Medical Assistant en Estados Unidos, ha completado y aprobado el USMLE Step 1 y continúa su preparación para Step 2 CK.",
      "Como tutora de USMLE HY TUTOR®️, acompaña principalmente a estudiantes de Step 1, aportando sus conocimientos y experiencia durante la preparación. Su enfoque integra conceptos High-Yield, ciencias básicas, razonamiento médico y estrategias para la resolución de preguntas. Se caracteriza por su responsabilidad, perseverancia, compromiso y lealtad, cualidades que refleja tanto en su propio camino USMLE como en el acompañamiento a sus estudiantes.",
    ],
  },
  {
    name: "Diego",
    role: "Tutor",
    photo: "/gallery/equipo/diego.jpeg",
    bio: [
      "Diego Rosado Moreno, médico ecuatoriano graduado de la Universidad de Especialidades Espíritu Santo (UEES). Ha completado y aprobado USMLE Step 1 y Step 2 CK, cuenta con certificación ECFMG y logró exitosamente su Match en Boston, donde continuará su formación médica en Estados Unidos.",
      "Como tutor del grupo de Step 2 CK de USMLE HY TUTOR®️, acompaña a los estudiantes aportando su experiencia y conocimientos en razonamiento clínico, conceptos High-Yield y estrategias para la resolución de preguntas. Se caracteriza por su actitud positiva, empatía, compromiso y energía única, creando un ambiente de aprendizaje cercano y motivador para sus estudiantes.",
    ],
  },
  {
    name: "Andrea",
    role: "Tutora",
    photo: "/gallery/equipo/andrea.jpeg",
    bio: [
      "Andrea Tobar Torres, médica cirujana ecuatoriana, con experiencia en el área de la salud y un fuerte interés por la formación continua y el desarrollo de sus habilidades clínicas. Se caracteriza por su responsabilidad, compromiso y dedicación tanto en su práctica profesional como en la enseñanza.",
      "Como tutora de USMLE HY TUTOR®️, participa en la preparación de estudiantes de Step 1 y forma parte del equipo de Meteorito, donde acompaña a cientos de alumnos en la organización y planificación de sus estudios, seguimiento de su progreso y desarrollo de una preparación más estructurada y constante. Su objetivo es brindar orientación y apoyo durante cada etapa del proceso.",
    ],
  },
  {
    name: "Margarita",
    role: "Tutora",
    photo: "/gallery/equipo/margarita.jpeg",
    bio: [
      "Margarita Amaya Torres, médica hondureña y mamá, forma parte del equipo de tutores de USMLE HY TUTOR®️, donde participa activamente en la preparación de estudiantes de Step 1. Se caracteriza por su carisma, compromiso y disposición constante para orientar y apoyar a quienes atraviesan este exigente proceso.",
      "Además, forma parte del equipo de Meteorito, acompañando a cientos de estudiantes en la organización y planificación de sus estudios. Como madre, aporta una perspectiva especialmente cercana para quienes deben equilibrar maternidad, responsabilidades personales y preparación para los USMLE, ayudándolos a aprovechar mejor su tiempo, mantener la constancia y avanzar de manera organizada hacia sus objetivos.",
    ],
  },
];

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
  { value: 91, suffix: "%", prefix: "", label: "Passing Rate", label_d: "Resultados reportados por nuestros estudiantes." },
  { value: 950, suffix: "+", prefix: "", label: "Estudiantes acompañados", label_d: "Una comunidad internacional que sigue creciendo." },
  { value: 2022, suffix: "", prefix: "Desde ", label: "Preparando para los USMLE Steps", label_d: "Experiencia, estrategia y acompañamiento en cada etapa." },
];

export const quienesSomosText = [
  "USMLE HY TUTOR® es un programa especializado en la preparación para USMLE Step 1, Step 2 CK y Step 3. Nuestra metodología complementa el estudio individual y se enfoca en conceptos High-Yield (HY), reconocimiento de patrones, razonamiento clínico y estrategias de test-taking.",
  "Nuestras clases son dinámicas e interdisciplinarias, diseñadas para entrenar al estudiante a identificar pistas, conectar conceptos y responder preguntas con mayor seguridad y rapidez. Las sesiones se imparten principalmente en español, integrando terminología médica y conceptos clave en inglés para facilitar la adaptación al lenguaje del examen.",
  "A través de cada uno de nuestros programas, buscamos que el estudiante desarrolle conocimiento, estrategia, manejo del tiempo y resistencia mental, adquiriendo las herramientas necesarias para enfrentar el examen con mayor seguridad y preparación.",
];

export const quienesSomosQuote = "Tu esfuerzo + nuestro método = tu éxito en el USMLE.";

export const quienesSomosCeo = {
  name: "Dr. Kevin Salazar Rikeros",
  role: "Founder & CEO | USMLE Mentor & Instructor",
  bio: [
    "Médico ecuatoriano que llegó a Estados Unidos en 2017 para comenzar su propio camino de preparación para los USMLE. Tras completar y aprobar sus exámenes, y a partir de la experiencia adquirida durante años de preparación, en 2022 fundó USMLE HY TUTOR®, comenzando con un solo estudiante y construyendo, paso a paso, una comunidad que hoy supera los 950 estudiantes acompañados.",
    "Su metodología nace de su propia experiencia y de una filosofía clara: no se trata únicamente de memorizar contenido, sino de aprender a reconocer patrones, razonar estratégicamente y comprender cómo está construido el examen. Hoy continúa involucrado activamente en la enseñanza y en el desarrollo de los programas de USMLE HY TUTOR®.",
  ],
  quote: "La medicina es una carrera de estudio constante para toda la vida.",
  linkedin: "https://www.linkedin.com/in/kevin-salazar-rikeros-152096244",
};

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

type ProgramaBase = {
  slug: string;
  number: string;
  color: string;
  title: string;
  tagline: string;
  description: string;
  details: { label: string; value: string }[];
  note?: string;
  highlight?: boolean;
  videoId?: string;
  benefits: string[];
};

const programasBase: ProgramaBase[] = [
  {
    slug: "clases-grupales-step1-ck-step3",
    number: "01",
    color: "#1F9D55",
    title: "Clases Grupales Step 1, Step 2 CK & Step 3",
    videoId: "TdYOVNO-WP4",
    tagline: "Clases en vivo con enfoque High-Yield para fortalecer conocimientos, asociación, razonamiento y estrategia para el examen.",
    description:
      "Clases en vivo cinco días a la semana, en horario de Miami (Eastern Time). El horario semanal se comunica con anticipación y, por lo general, las sesiones se realizan de 7 a 9 PM. Todas las clases quedan grabadas y disponibles en el Drive exclusivo aproximadamente 24 horas después.",
    details: [
      { label: "Horario", value: "5 días a la semana · 7–9 PM (ET)" },
      { label: "Formato", value: "Clases en vivo + grabaciones" },
      { label: "Para quién", value: "Step 1 · Step 2 CK · Step 3" },
    ],
    note: "Los horarios pueden estar sujetos a cambios y se comunican con anticipación.",
    benefits: [
      "Clases en vivo",
      "5 días a la semana",
      "Habilidades de asociación y descarte",
      "Acceso a videos de USMLE Rx y Pathoma",
      "Material de apoyo exclusivo para alumnos",
      "Grabaciones disponibles",
      "Comunidad internacional",
      "Chat interactivo para resolver dudas",
    ],
  },
  {
    slug: "clases-grupales-step2-ck",
    number: "02",
    color: "#8A5A2E",
    title: "Clases Grupales Step 2 CK",
    videoId: "6H8rIvAD9LI",
    tagline: "Preparación clínica enfocada en Step 2 CK mediante casos, preguntas High-Yield y estrategias orientadas al examen.",
    description:
      "Clases en vivo tres días a la semana, enfocadas exclusivamente en la preparación clínica para Step 2 CK. Por lo general, las sesiones se realizan de 5 a 7 PM (Eastern Time). Todas las clases quedan grabadas y disponibles en el Drive exclusivo aproximadamente 24 horas después.",
    details: [
      { label: "Horario", value: "3 días a la semana · 5–7 PM (ET)" },
      { label: "Formato", value: "Clases en vivo + grabaciones" },
      { label: "Para quién", value: "Estudiantes de Step 2 CK" },
    ],
    note: "Los horarios pueden estar sujetos a cambios y se comunican con anticipación.",
    benefits: [
      "Clases en vivo",
      "3 días a la semana",
      "Enfoque exclusivo en Step 2 CK",
      "Casos clínicos y preguntas High-Yield",
      "Grabaciones disponibles",
      "Chat interactivo para resolver dudas",
      "Acompañamiento durante la preparación",
    ],
  },
  {
    slug: "test-taking-strategies-step1",
    number: "03",
    color: "#E11D74",
    title: "Test Taking Strategies Step 1",
    tagline: "Entrenamiento intensivo para identificar pistas, mejorar el método de descarte, manejar el tiempo y responder con mayor seguridad.",
    description:
      "Grupo privado enfocado en desarrollar estrategias de test-taking para Step 1. A través de práctica intensiva, el estudiante aprende a identificar pistas, descartar opciones incorrectas, manejar mejor el tiempo y responder con mayor seguridad y precisión.",
    details: [
      { label: "Entrenamiento", value: "12 horas al mes divididas en 3 o 4 sesiones" },
      { label: "Formato", value: "Sesiones en vivo · No quedan grabadas" },
      { label: "Para quién", value: "Estudiantes de Step 1 · Cupos limitados" },
    ],
    note: "Los días y horarios pueden estar sujetos a cambios y se comunican con anticipación.",
    benefits: [
      "Entrenamiento intensivo en Test-Taking Strategies",
      "12 horas privadas al mes",
      "Identificación de pistas y palabras clave",
      "Descarte estratégico",
      "Manejo del tiempo y concentración",
      "Horas extra/bonus de práctica",
      "Preparación para NBME y Step 1",
      "Acceso a clases grupales",
    ],
  },
  {
    slug: "tts-step2-ck-sapphire",
    number: "04",
    color: "#7C3AED",
    title: "TTS Step 2 CK Sapphire",
    tagline: "Entrenamiento enfocado en razonamiento clínico, Pattern Recognition y estrategias de test-taking para Step 2 CK.",
    description:
      "Grupo privado enfocado en fortalecer el razonamiento clínico y las estrategias de test-taking para Step 2 CK. El entrenamiento trabaja preguntas y casos High-Yield para aprender a identificar información clave, reconocer patrones y seleccionar respuestas de manera más rápida y estratégica.",
    highlight: true,
    details: [
      { label: "Entrenamiento", value: "12 horas al mes divididas en 3 o 4 sesiones" },
      { label: "Formato", value: "Sesiones en vivo · No quedan grabadas" },
      { label: "Para quién", value: "Estudiantes de Step 2 CK" },
    ],
    note: "Los días y horarios pueden estar sujetos a cambios y se comunican con anticipación.",
    benefits: [
      "12 horas privadas al mes",
      "Preguntas y casos High-Yield",
      "Razonamiento clínico y Pattern Recognition",
      "Corrección directa y retroalimentación",
      "Horas extra/bonus de práctica",
      "Chat interactivo para resolver dudas",
      "Acceso a clases grupales Step 2 CK",
      "Acceso al grupo general",
    ],
  },
  {
    slug: "stamina-drills",
    number: "05",
    color: "#F0A020",
    title: "Stamina Drills",
    videoId: "AyBWIrlKTE0",
    tagline: "Entrenamiento intensivo de 8 a 10 horas diseñado para fortalecer resistencia mental, concentración y manejo del tiempo bajo presión.",
    description:
      "Sesiones grupales de alta intensidad diseñadas para simular la exigencia del USMLE. Durante 8 a 10 horas de entrenamiento, se trabajan preguntas, casos y temas High-Yield para fortalecer la resistencia mental, la concentración y el manejo del tiempo.",
    details: [
      { label: "Duración", value: "8–10 horas continuas" },
      { label: "Formato", value: "Entrenamiento grupal intensivo" },
      { label: "Para quién", value: "Step 1 · Step 2 CK · Step 3" },
    ],
    note: "Se realizan según programación y cuentan con cupos limitados.",
    benefits: [
      "Sesiones grupales 1 vez al mes",
      "8–10 horas de entrenamiento",
      "Preguntas, casos y temas High-Yield",
      "Simulación de la exigencia del examen",
      "Breaks estratégicos",
      "Desarrollo de resistencia mental (Stamina)",
      "Manejo del tiempo",
      "Concentración bajo presión",
    ],
  },
  {
    slug: "snap-drills",
    number: "06",
    color: "#F0651C",
    title: "Snap Drills",
    videoId: "VQMjPqtFDFM",
    tagline: "Entrenamiento High-Yield enfocado en Active Recall, Pattern Recognition, velocidad, precisión y manejo del tiempo.",
    description:
      "Sesiones grupales de entrenamiento High-Yield diseñadas para reforzar conceptos clave y desarrollar mayor rapidez, precisión y seguridad al responder preguntas. El entrenamiento se enfoca en Active Recall, Pattern Recognition y manejo del tiempo.",
    details: [
      { label: "Entrenamiento", value: "3 sesiones · Aproximadamente 10 horas al mes" },
      { label: "Formato", value: "Drills grupales en vivo" },
      { label: "Para quién", value: "Step 1 · Step 2 CK · Step 3" },
    ],
    note: "Los días y horarios pueden estar sujetos a cambios y se comunican con anticipación.",
    benefits: [
      "3 sesiones en vivo al mes",
      "Total 10 horas mensuales",
      "Contenido High-Yield",
      "Active Recall",
      "Pattern Recognition",
      "Velocidad y precisión",
      "Manejo del tiempo",
      "Grupo reducido · Cupos limitados",
    ],
  },
  {
    slug: "drills-privados",
    number: "07",
    color: "#DC2626",
    title: "Drills Privados",
    videoId: "md2soMWzn0c",
    tagline: "Entrenamiento personalizado con Kevin para identificar errores, perfeccionar estrategias y fortalecer el desempeño antes del examen.",
    description:
      "Sesiones de entrenamiento personalizado con Kevin, de manera individual o en grupos de hasta 3 personas. El estudiante trabaja directamente con preguntas High-Yield y recibe retroalimentación inmediata sobre su razonamiento, estrategia y selección de respuestas.",
    details: [
      { label: "Formato", value: "Individual o grupos de hasta 3 personas" },
      { label: "Entrenamiento", value: "Práctica intensiva con Kevin" },
      { label: "Para quién", value: "Estudiantes en etapa avanzada de preparación" },
    ],
    benefits: [
      "Preguntas High-Yield",
      "Retroalimentación inmediata",
      "Análisis del razonamiento",
      "Identificación y corrección de errores",
      "Método de descarte",
      "Manejo del tiempo",
      "Estrategia de respuesta",
      "Preparación enfocada en la recta final",
    ],
  },
  {
    slug: "meteorito",
    number: "08",
    color: "#0E9AA7",
    title: "Meteorito",
    tagline: "Programa de acompañamiento y seguimiento para organizar el estudio, evaluar el progreso y avanzar con mayor estructura y constancia.",
    videoId: "iIhy39JKRlE",
    description:
      "Programa de acompañamiento diseñado para ayudarte a avanzar con mayor estructura, organización y seguimiento durante tu preparación. Incluye follow-ups, planificación del estudio, análisis de resultados y apoyo continuo durante el mes.",
    details: [
      { label: "Modalidad", value: "Acompañamiento mensual" },
      { label: "Seguimiento", value: "Follow-ups durante el mes" },
      { label: "Para quién", value: "Alumnos inscritos en el programa" },
    ],
    benefits: [
      "Follow-up inicial personalizado",
      "Seguimiento escrito semanal",
      "Follow-up final y evaluación de progreso",
      "Análisis de NBME y bancos de preguntas",
      "Organización y planificación del estudio",
      "Guía para flashcards y recursos",
      "Chat privado con tutores",
      "Clases estratégicas y apoyo constante",
    ],
  },
  {
    slug: "consultoria-1-1",
    number: "09",
    color: "#2563EB",
    title: "Consultoría 1-1 con Kevin",
    videoId: "CjrGVSCdkYs",
    tagline: "Sesión privada de 45 minutos para revisar tu preparación, analizar resultados y recibir recomendaciones personalizadas.",
    description:
      "Sesión privada de 45 minutos con Kevin para revisar tu preparación, analizar resultados, resolver dudas y recibir recomendaciones personalizadas de acuerdo con tu etapa y objetivos.",
    note: "No es una clase ni un Drill Privado. Es una sesión de orientación estratégica sobre tu preparación.",
    details: [
      { label: "Duración", value: "45 minutos" },
      { label: "Formato", value: "Llamada privada 1-1 con Kevin" },
      { label: "Para quién", value: "Estudiantes que buscan orientación personalizada" },
    ],
    benefits: [
      "Revisión y análisis de resultados",
      "Evaluación de fortalezas y debilidades",
      "Recomendaciones personalizadas",
      "Resolución de dudas sobre tu preparación",
      "Orientación sobre próximos pasos",
      "Análisis de tu situación actual",
      "Enfoque estratégico personalizado",
      "Sesión individual con Kevin",
    ],
  },
];

export const programas = programasBase.map((p) => ({
  ...p,
  badge: p.slug === "consultoria-1-1" ? undefined : `/brand/badges/${p.slug}.jpg`,
}));

export const nav = [
  { label: "Quiénes Somos", href: "/quienes-somos" },
  { label: "Programas", href: "/programas" },
  { label: "Reseñas", href: "/resenas" },
  { label: "Videos", href: "/reacciones" },
  { label: "Galería", href: "/galeria" },
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
