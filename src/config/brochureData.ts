export interface BrochureSpread {
  id: string
  pageIndex: number
  pageNumber: string
  badge: string
  title: string
  subtitle: string
  description: string
  primaryImage: string
  primaryImageAlt: string
  primaryImageCaption: string
  secondaryImage: string
  secondaryImageAlt: string
  secondaryImageCaption: string
  highlightsTitle: string
  highlights: string[]
  ecosystemTags?: {
    label: string
    status: 'AVAILABLE NOW' | 'COMING SOON' | 'OPTIONAL' | 'CONCEPT' | 'REVIEW REQUIRED'
    detail: string
  }[]
  sampleBox?: {
    kicker: string
    heading: string
    lines: string[]
    vocab?: string[]
    footerNote: string
  }
}

export interface CrmSlide {
  id: string
  slideNumber: string
  badge: string
  title: string
  subtitle: string
  summary: string
  sampleLabel: string
  keyPoints: string[]
  tableHeader?: string[]
  tableRows?: string[][]
  pipelineStages?: { stage: string; desc: string; countLabel: string }[]
  recordFields?: { label: string; value: string }[]
  footerNote: string
}

export interface ReplacementMapItem {
  id: string
  legacyRef: string
  legacyPage: string
  legacyIssue: { en: string; es: string }
  upgradedAsset: string
  upgradedTitle: { en: string; es: string }
  targetBrochurePage: string
  duplicateAuditNote: { en: string; es: string }
  approvalStatus: 'APPROVED' | 'REVIEW REQUIRED' | 'SUPERSEDED / DO NOT USE'
}

export interface GalleryItem {
  id: string
  src: string
  category: 'posters' | 'classroom' | 'kit'
  title: { en: string; es: string }
  caption: { en: string; es: string }
  tag: { en: string; es: string }
  aspect: '3 / 4' | '4 / 3'
  usedOnPage: string
  approvalStatus: 'APPROVED' | 'REVIEW REQUIRED'
}

export const physicalKitComponents = {
  en: [
    {
      num: '01',
      name: '17" × 22" Tabletop Flipchart & Easel',
      detail: 'Large-format illustrated classroom flipchart with built-in easel featuring phonetic rhymes, vowel associations, and syllable lessons.',
      category: 'Classroom Presentation',
    },
    {
      num: '02',
      name: '92-Page Student Book (Libro del alumno)',
      detail: '24 sequential phonics lessons guiding each child from the 5 pure vowels to direct syllables, words, sentences, paragraphs, and poems.',
      category: 'Student Practice',
    },
    {
      num: '03',
      name: '5 Felt Vowel Dolls (a, e, i, o, u)',
      detail: 'Tactile, color-coded felt vowel characters that bring the five unchanging Spanish vowel sounds to life during circle time.',
      category: 'Classroom Presentation',
    },
    {
      num: '04',
      name: 'Audio CD / Narrated Flipchart Poems',
      detail: 'Studio recordings of all rhythmic poems and vowel songs featured in the 17" × 22" flipchart to model native Spanish pronunciation.',
      category: 'Classroom Presentation',
    },
    {
      num: '05',
      name: 'Reproducible Syllabic & Vowel Charts',
      detail: 'Structured syllable matrices (ma-me-mi-mo-mu, pa-pe-pi-po-pu, sa-se-si-so-su, la-le-li-lo-lu, ta-te-ti-to-tu) for daily decoding drills.',
      category: 'Student Practice',
    },
    {
      num: '06',
      name: 'Answer Key to the Syllabic Charts',
      detail: 'Complete teacher reference key matching every illustrated cue and syllable grid in the reproducible student charts.',
      category: 'Teacher & Evaluation',
    },
    {
      num: '07',
      name: 'Reproducible Bilingual Homework Pages',
      detail: 'Take-home practice sheets with clear instructions in both Spanish and English so parents can support reading verses and syllable counting at home.',
      category: 'Home Reinforcement',
    },
    {
      num: '08',
      name: 'Reproducible Student Evaluations',
      detail: 'Lesson-by-lesson diagnostic and mastery assessments measuring syllable completion, word recognition, and reading comprehension.',
      category: 'Teacher & Evaluation',
    },
    {
      num: '09',
      name: 'Evaluation Answer Key',
      detail: 'Color-coded scoring and verification guide for all reproducible classroom evaluations.',
      category: 'Teacher & Evaluation',
    },
    {
      num: '10',
      name: "Comprehensive Teacher's Guide (Guía del maestro)",
      detail: 'Step-by-step instructional pacing, phonetic sound-association scripts, dictation exercises, and classroom lesson plans.',
      category: 'Teacher & Evaluation',
    },
  ],
  es: [
    {
      num: '01',
      name: 'Rotafolio de 17" × 22" con Caballete',
      detail: 'Rotafolio ilustrado de gran formato con atril propio que presenta los poemas fonéticos, asociaciones de vocales y lecciones silábicas.',
      category: 'Presentación en el Aula',
    },
    {
      num: '02',
      name: 'Libro del Alumno de 92 Páginas',
      detail: '24 lecciones fonéticas secuenciales que guían al niño desde las 5 vocales puras hasta sílabas directas, palabras, oraciones, párrafos y poemas.',
      category: 'Práctica del Alumno',
    },
    {
      num: '03',
      name: '5 Muñecos de Vocales de Fieltro (a, e, i, o, u)',
      detail: 'Personajes táctiles de fieltro a todo color que dan vida a los cinco sonidos invariables de las vocales en español.',
      category: 'Presentación en el Aula',
    },
    {
      num: '04',
      name: 'CD de Audio con Todos los Poemas del Rotafolio',
      detail: 'Grabaciones profesionales de todos los poemas rítmicos y rimas del rotafolio para modelar la entonación y pronunciación en español.',
      category: 'Presentación en el Aula',
    },
    {
      num: '05',
      name: 'Tableros Silábicos y de Vocales Reproducibles',
      detail: 'Matrices silábicas estructuradas (ma-me-mi-mo-mu, pa-pe-pi-po-pu, sa-se-si-so-su, la-le-li-lo-lu, ta-te-ti-to-tu) para la práctica diaria.',
      category: 'Práctica del Alumno',
    },
    {
      num: '06',
      name: 'Claves de los Tableros Silábicos',
      detail: 'Guía de referencia completa para el maestro con las respuestas de cada lámina silábica y de vocales.',
      category: 'Maestro y Evaluación',
    },
    {
      num: '07',
      name: 'Tareas Reproducibles para el Hogar (Bilingües)',
      detail: 'Hojas de práctica para casa con instrucciones en español e inglés para que las familias apoyen la lectura de versos y sílabas.',
      category: 'Refuerzo en el Hogar',
    },
    {
      num: '08',
      name: 'Evaluaciones Reproducibles',
      detail: 'Pruebas diagnósticas y de dominio por lección que evalúan sílabas iniciales, reconocimiento de palabras y comprensión lectora.',
      category: 'Maestro y Evaluación',
    },
    {
      num: '09',
      name: 'Claves de las Evaluaciones',
      detail: 'Solucionario ilustrado para calificar con rapidez y precisión todas las evaluaciones reproducibles del programa.',
      category: 'Maestro y Evaluación',
    },
    {
      num: '10',
      name: 'Guía del Maestro',
      detail: 'Secuencia didáctica paso a paso, asociaciones fonéticas, ejercicios de dictado y planes de lección para Kindergarten, 1.º y 2.º grado.',
      category: 'Maestro y Evaluación',
    },
  ],
}

export function getBrochureSpreads(lang: 'en' | 'es'): BrochureSpread[] {
  if (lang === 'es') {
    return [
      {
        id: 'page-01-cover',
        pageIndex: 1,
        pageNumber: 'Página 01 · Portada Editorial',
        badge: 'LANY Books Publishing · Edición Física Oficial',
        title: 'La Cartilla de Gretel',
        subtitle: 'Programa fonético de lectura y escritura inicial en español para Kindergarten, Primer Grado y Segundo Grado · Por Leonor Lopetegui',
        description:
          'Una edición impresa cálida, estructurada y táctil que guía al niño paso a paso en la verdadera mecánica de la lectura y la escritura en español: desde los cinco sonidos puros de las vocales hasta las sílabas directas, palabras, oraciones, párrafos y poemas.',
        primaryImage: '/assets/aistudio/image-gen-3_20261030-070235__9b3e6495.png',
        primaryImageAlt: 'Portada editorial de La Cartilla de Gretel — Aprendamos a leer con el sello LANY Books',
        primaryImageCaption: 'Arte oficial mejorado «Aprendamos a leer» con el emblema de libro abierto de LANY Books y la portada auténtica del Libro del Alumno.',
        secondaryImage: '/images/gretel/wb-cover-hd.webp',
        secondaryImageAlt: 'Portada oficial del Libro del Alumno de 92 páginas de La Cartilla de Gretel',
        secondaryImageCaption: 'Portada auténtica de alta resolución: La Cartilla de Gretel — Libro del alumno (92 páginas · Autora: Leonor Lopetegui · Ilustraciones: Estela de Armas Plasencia).',
        highlightsTitle: 'Identidad del Programa Impreso',
        highlights: [
          'Título oficial preservado íntegramente: «La Cartilla de Gretel — Libro del alumno».',
          'Publicado bajo el sello editorial LANY Books LLC con el emblema oficial del libro abierto.',
          'Diseñado específicamente para la enseñanza inicial de la lectura y escritura en español (Grados K–2).',
          'Creado por la educadora Leonor Lopetegui e ilustrado por Estela de Armas Plasencia.',
        ],
        sampleBox: {
          kicker: 'Indicador Visual de Lectoescritura Inicial en Español',
          heading: 'Los 5 Sonidos Vocálicos Puros + Secuencia Fonética Controlada',
          lines: [
            'Vocales invariables del español:  A a  ·  E e  ·  I i  ·  O o  ·  U u',
            'Progresión: Sonidos → Sílabas → Palabras → Oraciones → Párrafos → Poemas',
            'Grados escolares: Kindergarten, Primer Grado y Segundo Grado',
          ],
          vocab: ['A a', 'E e', 'I i', 'O o', 'U u', 'Grados K–2'],
          footerNote: 'Documento de presentación del producto físico · LANY Books LLC.',
        },
      },
      {
        id: 'page-02-at-a-glance',
        pageIndex: 2,
        pageNumber: 'Página 02 · El Programa de un Vistazo',
        badge: 'Visión General para Educadores y Familias',
        title: '¿Qué es La Cartilla de Gretel y a Quién Sirve?',
        subtitle: 'Un programa fácil de seguir que enseña la verdadera mecánica de leer y escribir en español mediante asociaciones fonéticas.',
        description:
          'La Cartilla de Gretel es un programa para estudiantes de Kindergarten, Primer Grado y Segundo Grado diseñado para enseñar la mecánica real de la lectura y escritura en español. Su formato físico combina materiales de presentación grupal con práctica individual para que el docente enseñe con claridad desde el primer día.',
        primaryImage: '/assets/aistudio/classroom-welcome-gretel.jpg',
        primaryImageAlt: 'Bienvenidos a la escuela — Gretel en el salón de clases con el Libro del Alumno físico',
        primaryImageCaption: 'Fotografía escolar mejorada: presentación cálida y estructurada del Libro del Alumno en el salón de clases.',
        secondaryImage: '/assets/aistudio/colorized/heritage-covers-pair.jpg',
        secondaryImageAlt: 'Portadas auténticas de La Cartilla de Gretel: Guía Blanca y Libro del Alumno Azul de 92 páginas',
        secondaryImageCaption: 'Edición impresa auténtica: Guía del Maestro clásica de portada blanca y Libro del Alumno de 92 páginas.',
        highlightsTitle: 'Por Qué el Formato Físico Es Práctico para la Enseñanza',
        highlights: [
          '¿Qué es?: Un método fonético y silábico nativo del español creado por la educadora Leonor Lopetegui tras más de 50 años de labor docente.',
          '¿A quién sirve?: Estudiantes de Kindergarten, 1.º y 2.º grado en aulas bilingües, inmersión dual, escuelas y aprendizaje en casa.',
          'Progresión fundamental: Avanza de lo simple a lo complejo sin introducir jamás una letra o sonido que no haya sido enseñado antes.',
          'Practicidad física en el aula: Une el rotafolio de mesa de 17" × 22", los 5 muñecos de fieltro, el CD de poemas y el libro de 92 páginas.',
        ],
        sampleBox: {
          kicker: 'Síntesis del Programa Físico',
          heading: 'Claridad para Maestros, Directores y Familias',
          lines: [
            'Enfoque: Asociaciones de sonidos y secuencia estrictamente controlada',
            'Estructura del Libro del Alumno: 92 páginas · 24 lecciones fonéticas secuenciales',
            'Presentación grupal: Rotafolio ilustrado de 17" × 22" con caballete propio',
          ],
          vocab: ['Kindergarten', 'Primer Grado', 'Segundo Grado', '92 Páginas', '24 Lecciones'],
          footerNote: 'Sin adivinanzas visuales: cada palabra se decodifica a partir de sonidos ya aprendidos.',
        },
      },
      {
        id: 'page-03-progression',
        pageIndex: 3,
        pageNumber: 'Página 03 · Cómo Funciona la Progresión de Aprendizaje',
        badge: 'Secuencia Instruccional Verificada',
        title: 'De lo Simple a lo Complejo: Los 6 Peldaños de la Lectoescritura',
        subtitle: 'Sonidos de letras → Sílabas → Palabras → Oraciones → Párrafos → Poemas.',
        description:
          'A diferencia de los programas basados en memorizar palabras sueltas, La Cartilla de Gretel utiliza asociaciones auditivas y visuales para que el niño domine primero los sonidos puros y luego construya sílabas, palabras, oraciones completas, párrafos y poemas.',
        primaryImage: '/assets/aistudio/classroom-chalkboard-abc.jpg',
        primaryImageAlt: 'Alumna escribiendo A B C en la pizarra del aula con La Cartilla de Gretel',
        primaryImageCaption: 'Reconocimiento activo de letras y sonidos en la pizarra junto con el Libro del Alumno físico.',
        secondaryImage: '/assets/aistudio/image-gen-6_20261030-053225__a4de1333.png',
        secondaryImageAlt: 'Maestra guiando a un alumno paso a paso en la lectura del libro físico',
        secondaryImageCaption: 'Acompañamiento docente individualizado siguiendo la secuencia fonética controlada.',
        highlightsTitle: 'La Secuencia Fonética Paso a Paso',
        highlights: [
          '1. Sonidos de las letras (Vocales y Consonantes): Dominio de las 5 vocales puras (a, e, i, o, u) y el sonido de cada consonante mediante rimas y personajes.',
          '2. Sílabas directas: Unión sistemática de cada consonante con las cinco vocales (ma, me, mi, mo, mu · pa, pe, pi, po, pu).',
          '3. Palabras decodificables: Formación de palabras reales utilizando únicamente las sílabas ya estudiadas (mamá, amo, mimo, mapa, sapo).',
          '4. Oraciones, Párrafos y Poemas: Lectura comprensiva y escritura en letra script y cursiva de oraciones («Mi mamá me ama»), párrafos breves y poemas rítmicos.',
        ],
        sampleBox: {
          kicker: 'Mapa de la Progresión Pedagógica',
          heading: 'Sonidos → Sílabas → Palabras → Oraciones → Párrafos y Poemas',
          lines: [
            'Peldaño 1 · Sonidos:  a · e · i · o · u   +   sonido consonántico (/m/ «Muu»)',
            'Peldaño 2 · Sílabas:  ma · me · mi · mo · mu',
            'Peldaño 3 · Palabras:  mamá · amo · Meme · Múmi · mimo',
            'Peldaño 4 · Oraciones y Poemas:  «Mi mamá me ama.» · «Ema mima a Mimi.»',
          ],
          vocab: ['1. Sonidos', '2. Sílabas', '3. Palabras', '4. Oraciones', '5. Párrafos', '6. Poemas'],
          footerNote: 'Ninguna letra o sonido aparece antes de haber sido presentado explícitamente en su lección.',
        },
      },
      {
        id: 'page-04-flipchart',
        pageIndex: 4,
        pageNumber: 'Página 04 · El Rotafolio de Aula (17" × 22")',
        badge: 'Herramienta Central de Enseñanza Grupal',
        title: 'El Rotafolio de 17" × 22" con Caballete Integrado',
        subtitle: 'Presentación visual en gran formato con poemas fonéticos, asociaciones de memoria y vocabulario ilustrado.',
        description:
          'El rotafolio físico de 17" × 22" se coloca sobre el escritorio o mesa del maestro gracias a su caballete integrado. Cada lámina introduce un sonido vocálico o consonántico con un poema musical (grabado también en el CD de audio) y dibujos de referencia que fijan el sonido en la memoria de los niños.',
        primaryImage: '/assets/aistudio/image-gen-4_20261030-090157__4d8ebddd.png',
        primaryImageAlt: 'Póster Primeras letras mostrando la enseñanza en caballete con La Cartilla de Gretel',
        primaryImageCaption: 'Enseñanza frente al grupo con apoyo de caballete y portada oficial («Primeras letras»).',
        secondaryImage: '/assets/aistudio/image-gen-6_20261030-090159__c9217af0.png',
        secondaryImageAlt: 'Presentación en atril de madera — Cada página cuenta',
        secondaryImageCaption: 'Exhibición en caballete de mesa («Cada página cuenta») que permite a toda la clase seguir la lección.',
        highlightsTitle: 'Cómo Utilizan los Maestros el Rotafolio con los Alumnos',
        highlights: [
          'Vista completa en atril de 17" × 22": Visible desde cualquier rincón de la alfombra o los pupitres durante la lección grupal.',
          'Muestra real — Lección de la Vocal «Ee»: Presenta el poema «La niña sordita / La niña Eulalia» junto a las figuras clave (elefante, espejo, Ema/Emo, estrella, erizo/elito, escalera).',
          'Muestra real — Lección de la Consonante «Mm»: Asocia el sonido con la vaca («Muu») y despliega la familia silábica ma, me, mi, mo, mu en letra de molde y cursiva.',
          'Interacción multisensorial: Los niños escuchan el poema en el CD de audio y levantan el muñeco de fieltro de la vocal correspondiente.',
        ],
        sampleBox: {
          kicker: 'Muestra Verificada de Página del Rotafolio (Vocal Ee)',
          heading: 'Poema: «La niña sordita / La niña Eulalia»',
          lines: [
            'Sordita es la "Ee", entiende al revés,',
            'su mamá la llama una y otra vez.',
            '—Ee, Ee, te he llamado, te he llamado, Ee.',
            '—Te oigo muy bajito, llámame otra vez.',
          ],
          vocab: ['elefante', 'espejo', 'Ema / Emo', 'estrella', 'erizo / elito', 'escalera'],
          footerNote: 'Muestra adicional del Rotafolio (Consonante Mm): ma · me · mi · mo · mu → mamá, amo, Meme, Múmi.',
        },
      },
      {
        id: 'page-05-student-book',
        pageIndex: 5,
        pageNumber: 'Página 05 · El Libro del Alumno (92 Páginas)',
        badge: 'Cuaderno de Lectura y Escritura del Estudiante',
        title: 'El Libro del Alumno: 92 Páginas y 24 Lecciones Fonéticas',
        subtitle: 'Lectura guiada, formación de letras en molde y cursiva, práctica silábica y dictado en un solo volumen.',
        description:
          'Después de la presentación grupal en el rotafolio, cada estudiante trabaja en su propio ejemplar físico de 92 páginas de La Cartilla de Gretel. Sus 24 lecciones graduadas integran la lectura de sílabas, palabras y oraciones con el trazo caligráfico.',
        primaryImage: '/assets/aistudio/cada-pagina-cuenta-desk.jpg',
        primaryImageAlt: 'Gretel en su pupitre con el Libro del Alumno de 92 páginas — Cada página cuenta',
        primaryImageCaption: 'Póster oficial verificado («Cada página cuenta») mostrando el Libro del Alumno de 92 páginas en el pupitre.',
        secondaryImage: '/assets/aistudio/colorized/student-book-pages-colorized.jpg',
        secondaryImageAlt: 'Páginas interiores coloreadas del Libro del Alumno (Ejercicios de vocales Ee y asociación o, a, i, e, u)',
        secondaryImageCaption: 'Páginas interiores auténticas del Libro del Alumno (reconocimiento de sonidos con E e y asociación de vocales o, a, i, e, u) coloreadas con la estética de LANY Books.',
        highlightsTitle: 'Interior del Libro del Alumno (92 Páginas)',
        highlights: [
          'Portada aprobada e ilustraciones clásicas: Creado por Leonor Lopetegui con ilustraciones originales de Estela de Armas Plasencia.',
          'Páginas interiores de lectura: Presentan cada vocal y consonante con su cuadro silábico (ma, me, mi, mo, mu), vocabulario controlado y oraciones.',
          'Formación de letras y caligrafía: Renglones guiados para trazar mayúsculas y minúsculas (Aa Bb Cc Dd Ee Ff Gg Hh Ii) tanto en letra script (molde) como en cursiva.',
          'Lectura de párrafos y poemas: A medida que avanzan las 24 lecciones, el alumno lee textos más extensos con total comprensión.',
        ],
        sampleBox: {
          kicker: 'Muestra Interior del Libro del Alumno (Páginas de Lectura y Escritura)',
          heading: 'Lección Mm y Práctica de Trazo Caligráfico',
          lines: [
            'Lectura de sílabas:  ma   me   mi   mo   mu',
            'Lectura de palabras:  mamá  ·  amo  ·  mama  ·  Meme  ·  Mumi  ·  mimo',
            'Lectura de oraciones:  «Mi mamá me ama.»   ·   «Ema mima a Mimi.»',
            'Trazo y formación de letras:  Aa  Bb  Cc  Dd  Ee  Ff  Gg  Hh  Ii  (molde y cursiva)',
          ],
          vocab: ['92 Páginas', '24 Lecciones', 'Letra Script y Cursiva', 'Lectura + Escritura'],
          footerNote: 'Cada alumno avanza con seguridad porque lee y escribe exactamente los sonidos practicados.',
        },
      },
      {
        id: 'page-06-reproducibles-teacher',
        pageIndex: 6,
        pageNumber: 'Página 06 · Materiales Reproducibles y del Maestro',
        badge: 'Recursos de Apoyo Docente, Práctica y Evaluación',
        title: 'Láminas Reproducibles, Tareas Bilingües, Evaluaciones y Guía',
        subtitle: 'Un inventario completo de materiales verificados para reforzar la práctica en clase, involucrar a la familia y evaluar el progreso.',
        description:
          'El programa físico respalda al docente con materiales reproducibles listos para usar, claves de respuestas para calificar con rapidez, una Guía del Maestro detallada, el CD de audio y los 5 muñecos de vocales de fieltro.',
        primaryImage: '/assets/aistudio/colorized/syllabic-charts-colorized.jpg',
        primaryImageAlt: 'Tableros Silábicos y de Vocales Reproducibles coloreados (a, e, i, o, u y mamá, amo, Mumi, mima, Meme, Memo)',
        primaryImageCaption: 'Láminas reproducibles auténticas de vocales (a, e, i, o, u) y formación de oraciones (mamá, amo, Mumi, mima, Meme, Memo) en edición coloreada.',
        secondaryImage: '/assets/aistudio/colorized/evaluations-mm-colorized.jpg',
        secondaryImageAlt: 'Evaluación Reproducible M m y Clave del Maestro en tinta roja',
        secondaryImageCaption: 'Evaluación reproducible auténtica («Evaluación M m») junto a su Clave de Respuestas del Maestro en tinta roja.',
        highlightsTitle: 'Materiales de Apoyo Verificados en el Programa',
        highlights: [
          'Tableros Silábicos y de Vocales Reproducibles + Claves: Cuadros de vocales (a, e, i, o, u) y matrices silábicas (mamá, amo, Mumi, mima, Meme, Memo) con su solucionario.',
          'Tareas Reproducibles Bilingües (Español / Inglés): Hojas para el hogar («P p — Mi papá — Rima 3») con instrucciones para los padres en español e inglés.',
          'Evaluaciones Reproducibles + Claves de Evaluación: Pruebas diagnósticas por letra («Evaluación M m») junto con la clave del maestro en tinta roja.',
          'Guía del Maestro, CD de Audio y 5 Muñecos de Vocales de Fieltro: Pautas didácticas paso a paso, grabaciones de todos los poemas del rotafolio y muñecos táctiles (a, e, i, o, u).',
        ],
        sampleBox: {
          kicker: 'Muestras Reales de los Materiales Reproducibles (Edición Coloreada)',
          heading: 'Tablero de Vocales y Sílabas · Tarea «Mi papá» (Rima 3) · Evaluación M m',
          lines: [
            'Tablero Reproducible:  Recorta y pega (a, e, i, o, u) + Oraciones con mamá, amo, Mumi, mima, Meme, Memo',
            'Tarea Bilingüe (Rima 3):  «P p — Mi papá: Yo amo a Pupi / yo amo a papá. / Pipo me ama / a mí y a mamá.»',
            'Evaluación M m + Clave Roja:  1- Mamá me ama. · 2- Meme ama a Mumi. · 3- Mi mamá ama a Memo.',
          ],
          vocab: ['Tablero Silábico + Clave', 'Tareas Bilingües (Rima 3)', 'Evaluación M m + Clave', 'Guía + CD + 5 Muñecos'],
          footerNote: 'Todos los materiales reproducibles están diseñados para facilitar la labor diaria del maestro.',
        },
      },
      {
        id: 'page-07-complete-experience',
        pageIndex: 7,
        pageNumber: 'Página 07 · La Experiencia Física Completa',
        badge: 'Sistema Instruccional Unificado de 10 Componentes',
        title: 'Cómo Trabajan Juntos los 10 Componentes del Kit Físico',
        subtitle: 'Cuatro pilares coordinados: Presentación en el Aula, Práctica del Alumno, Refuerzo en Casa y Evaluación Docente.',
        description:
          'La fotografía actualizada del paquete completo reúne los 10 componentes auténticos del programa —incluyendo el rotafolio de 17" × 22" con las páginas reales de «Mm» y «La niña sordita», el Libro del Alumno de 92 páginas, la Guía del Maestro de portada blanca y las hojas reproducibles en Blanco y Negro.',
        primaryImage: '/assets/aistudio/colorized/kit-11-piece-authentic.jpg',
        primaryImageAlt: 'Fotografía del paquete físico completo de 10 componentes de La Cartilla de Gretel con materiales auténticos',
        primaryImageCaption: 'Kit Completo de 10 componentes con las páginas auténticas del rotafolio (Mm y La niña sordita), Libro del Alumno de 92 páginas, Guía del Maestro y hojas reproducibles en Blanco y Negro.',
        secondaryImage: '/assets/aistudio/colorized/homework-rima3-colorized.jpg',
        secondaryImageAlt: 'Tarea Reproducible Bilingüe — P p Mi papá (Rima 3)',
        secondaryImageCaption: 'Tarea Reproducible Bilingüe auténtica («P p — Mi papá — Rima 3») con instrucciones en español e inglés para la familia.',
        highlightsTitle: 'Los 4 Momentos del Sistema Físico en Acción',
        highlights: [
          '1. Presentación en el Aula: El maestro despliega el Rotafolio de 17" × 22" en su caballete, reproduce el poema en el CD de Audio y presenta los 5 Muñecos de Vocales de Fieltro (a, e, i, o, u).',
          '2. Práctica del Alumno: Los niños leen y escriben en su Libro del Alumno de 92 páginas y repasan fluidez con los Tableros Silábicos y de Vocales Reproducibles.',
          '3. Refuerzo en el Hogar: Las familias reciben las Tareas Reproducibles con instrucciones en español e inglés para repasar versos y sílabas en casa.',
          '4. Apoyo Docente y Evaluación: El maestro consulta la Guía del Maestro, aplica las Evaluaciones Reproducibles y verifica con las Claves de Respuestas.',
        ],
        sampleBox: {
          kicker: 'Arquitectura del Kit Físico Completo (10 Componentes)',
          heading: '1. Aula · 2. Alumno · 3. Hogar · 4. Evaluación',
          lines: [
            'Presentación Grupal: Rotafolio 17" × 22" con caballete + CD de Poemas + 5 Muñecos de Fieltro',
            'Trabajo del Estudiante: Libro del Alumno (92 págs.) + Tableros Silábicos y de Vocales Reproducibles',
            'Hogar y Evaluación: Tareas Reproducibles Bilingües + Guía del Maestro + Evaluaciones + 2 Claves de Respuestas',
          ],
          vocab: ['10 Componentes Físicos', 'Presentación', 'Práctica', 'Hogar', 'Evaluación'],
          footerNote: 'Opciones disponibles: Ejemplar individual (92 págs.), Paquete de 10 libros o Kit Completo de Aula.',
        },
      },
      {
        id: 'page-08-in-the-classroom',
        pageIndex: 8,
        pageNumber: 'Página 08 · En el Salón de Clases',
        badge: 'Vida Escolar y Participación Activa',
        title: 'La Cartilla de Gretel en el Aula: Calidez, Atención y Lectura Viva',
        subtitle: 'Enseñanza guiada por el maestro, participación de los niños e interacción táctil con los materiales impresos.',
        description:
          'Las fotografías escolares aprobadas reflejan la atmósfera de un salón que aprende con La Cartilla de Gretel: instrucción cercana frente al grupo, lectura compartida en círculo, práctica concentrada en el pupitre y entusiasmo por abrir cada página.',
        primaryImage: '/assets/aistudio/image-gen-8_20261030-090201__c5718b40.png',
        primaryImageAlt: 'Gretel leyendo con niños en la alfombra del salón — Descubre, lee y aprende',
        primaryImageCaption: '«Descubre, lee y aprende»: lectura grupal participativa en la alfombra del salón de clases.',
        secondaryImage: '/assets/aistudio/classroom-reading-desk.jpg',
        secondaryImageAlt: 'Alumna leyendo el Libro del Alumno abierto en su pupitre escolar',
        secondaryImageCaption: 'Interacción directa del estudiante con las páginas ilustradas del Libro del Alumno.',
        highlightsTitle: 'Lo Que Muestran las Escenas Reales de Aula',
        highlights: [
          'Presentación guiada por el docente: El maestro modela los sonidos puros de las vocales y sílabas en la pizarra y el caballete.',
          'Participación activa de los estudiantes: Los niños leen en voz alta, señalan sílabas y comparten la lectura con sus compañeros.',
          'Interacción física y táctil: El papel impreso, el trazo con lápiz y las láminas ilustradas fortalecen la atención y la memoria motora.',
          'Ambiente de aprendizaje cálido y enfocado: Un entorno escolar alegre, ordenado y respetuoso del ritmo de cada niño en Kindergarten, 1.º y 2.º grado.',
        ],
        sampleBox: {
          kicker: 'Galería Documental de Uso en el Aula',
          heading: '4 Momentos de la Jornada de Lectoescritura',
          lines: [
            'Momento 1 · Bienvenida y presentación del sonido del día frente al pizarrón y caballete',
            'Momento 2 · Lectura coral de vocales, sílabas y poemas en el círculo de lectura',
            'Momento 3 · Lectura individual y trazado caligráfico en el pupitre con el Libro del Alumno',
            'Momento 4 · Acompañamiento cercano del maestro verificando la comprensión de cada niño',
          ],
          vocab: ['Enseñanza Guiada', 'Círculo de Lectura', 'Práctica en Pupitre', 'Atención Individual'],
          footerNote: 'Nota editorial: Fotografías de uso escolar e ilustraciones aprobadas sin afirmaciones estadísticas no verificadas.',
        },
      },
      {
        id: 'page-09-ecosystem',
        pageIndex: 9,
        pageNumber: 'Página 09 · De una Experiencia Impresa Confiable al Ecosistema LANY Books',
        badge: 'El Producto Físico como Centro del Ecosistema',
        title: 'Del Libro Físico en el Aula al Ecosistema Moderno de LANY Books',
        subtitle: 'La Cartilla de Gretel impresa es el corazón del programa, acompañada por herramientas digitales y editoriales claramente identificadas.',
        description:
          'LANY Books preserva toda la riqueza pedagógica de la edición física de La Cartilla de Gretel y la respalda con un sitio web editorial moderno, vistas optimizadas para dispositivos móviles y compañeros digitales claramente etiquetados según su estado real.',
        primaryImage: '/assets/aistudio/image-gen-8_20261030-070240__c26e2a01.png',
        primaryImageAlt: 'Póster La lectura florece — LANY Books',
        primaryImageCaption: '«La lectura florece»: la tradición pedagógica de La Cartilla de Gretel proyectada hacia el futuro con LANY Books.',
        secondaryImage: '/assets/aistudio/image-gen-8_20261030-080503__95b6b43f.png',
        secondaryImageAlt: 'Póster Creciendo con cada libro — LANY Books',
        secondaryImageCaption: '«Creciendo con cada libro»: coherencia visual entre los libros impresos y la presencia digital de LANY Books.',
        highlightsTitle: 'Estado Verificado de Cada Componente del Ecosistema',
        highlights: [
          'Programa Físico La Cartilla de Gretel (Libro de 92 págs., Paquetes de Aula y Kit de 11 piezas): Producto central verificado.',
          'Sitio Web Oficial LANY Books ( escritorio y móvil ): Escaparate informativo bilingüe (inglés/español) y folleto digital interactivo.',
          'Aplicación Escolar / Compañero Interactivo (cartilla-de-gretel) y CRM Operativo: Herramientas complementarias para escuelas y gestión de relaciones.',
          'Plataformas Minoristas (Amazon Print, Kindle eBook, Audible, Barnes & Noble): Preparadas con aviso de lanzamiento («Próximamente»).',
        ],
        ecosystemTags: [
          {
            label: 'Programa Físico Impreso (Libro 92 págs. y Kit de 11 piezas)',
            status: 'AVAILABLE NOW',
            detail: 'Producto central de La Cartilla de Gretel. Consultas directas para familias, maestros, escuelas y distribuidores.',
          },
          {
            label: 'Sitio Web y Folleto Móvil LANY Books (lany-books-web-delta.vercel.app)',
            status: 'AVAILABLE NOW',
            detail: 'Catálogo informativo bilingüe con vista de escritorio y móvil, muestras verificadas y formulario de contacto.',
          },
          {
            label: 'Compañero Digital de Aula y Presentación CRM LANY Books',
            status: 'OPTIONAL',
            detail: 'Ecosistema digital complementario para seguimiento escolar y gestión operativa de contactos y demostraciones.',
          },
          {
            label: 'Ediciones en Amazon, Kindle, Audible y Barnes & Noble',
            status: 'COMING SOON',
            detail: 'Canales minoristas configurados en estado «Próximamente» hasta la confirmación oficial de enlaces de publicación.',
          },
        ],
        sampleBox: {
          kicker: 'Transparencia Editorial LANY Books',
          heading: 'Etiquetas de Disponibilidad Verificadas',
          lines: [
            '[AVAILABLE NOW / DISPONIBLE AHORA] · Programa físico y escaparate web oficial LANY Books',
            '[OPTIONAL / COMPLEMENTARIO] · Herramientas digitales de aula y presentación operativa CRM',
            '[COMING SOON / PRÓXIMAMENTE] · Lanzamiento minorista en Amazon, Kindle, Audible y Barnes & Noble',
          ],
          vocab: ['AVAILABLE NOW', 'OPTIONAL', 'COMING SOON', 'REVIEW REQUIRED'],
          footerNote: 'Precios y términos de pedidos escolares se confirman por solicitud directa (sin inventar precios ni contratos).',
        },
      },
      {
        id: 'page-10-call-to-action',
        pageIndex: 10,
        pageNumber: 'Página 10 · Contacto, Demostraciones y Créditos Oficiales',
        badge: 'Llamado a la Acción · LANY Books LLC',
        title: 'Solicite Información, Demostraciones Escolares o Ejemplares',
        subtitle: 'Atención directa para maestros, directores de programas bilingües, escuelas, familias, librerías y distribuidores.',
        description:
          'Conéctese con LANY Books para consultar la disponibilidad actual del Libro del Alumno de 92 páginas, el Paquete de 10 ejemplares o el Kit Completo de Aula de 11 piezas con Rotafolio, o para programar una demostración del programa.',
        primaryImage: '/assets/aistudio/un-mundo-de-lectura-walk.jpg',
        primaryImageAlt: 'Un mundo de lectura — Gretel caminando hacia la escuela con su libro y sello LANY Books',
        primaryImageCaption: 'Arte oficial verificado «Un mundo de lectura» con el emblema limpio de LANY Books.',
        secondaryImage: '/images/gretel/logo-open-book.png',
        secondaryImageAlt: 'Logotipo oficial de libro abierto de LANY Books',
        secondaryImageCaption: 'Sello editorial oficial de LANY Books LLC.',
        highlightsTitle: 'Vías de Consulta y Créditos de la Obra',
        highlights: [
          'Consultas sobre el Producto Físico: Información sobre el Libro del Alumno (92 páginas), Paquetes de Aula y el Kit Completo con Rotafolio de 17" × 22".',
          'Demostraciones para Escuelas y Aulas: Presentación del método fonético controlado para Kindergarten, 1.º y 2.º grado.',
          'Consultas de Distribuidores y Librerías: Opciones de distribución editorial y alianzas educativas.',
          'Créditos Oficiales Verificados: Autora: Leonor Lopetegui · Ilustradora: Estela de Armas Plasencia · Colaboradoras: Silvia Díez y Aída Fernández · Adaptación digital: Emilio José Novo · Sello: LANY Books.',
        ],
        sampleBox: {
          kicker: 'Información Oficial de Contacto y Publicación',
          heading: 'LANY Books LLC — Casa Editorial de La Cartilla de Gretel',
          lines: [
            'Sitio Web Oficial:  https://lany-books-web-delta.vercel.app/',
            'Formulario de Interés:  Disponible en la sección #contact de este sitio para Padres, Maestros, Escuelas y Distribuidores',
            'Dedicatoria de la Autora:  «Este libro ha nacido en las aulas y a ellas quiero que vuelva.» — Leonor Lopetegui',
          ],
          vocab: ['Consultas de Producto', 'Demostraciones Escolares', 'Distribuidores', 'LANY Books LLC'],
          footerNote: '© LANY Books LLC · Todos los derechos reservados · Edición física y digital.',
        },
      },
    ]
  }

  return [
    {
      id: 'page-01-cover',
      pageIndex: 1,
      pageNumber: 'Page 01 · Premium Cover',
      badge: 'LANY Books Publishing · Official Physical Program Brochure',
      title: 'La Cartilla de Gretel',
      subtitle: 'A phonetic Spanish beginning reading and writing program for Kindergarten, First Grade, and Second Grade · By Leonor Lopetegui',
      description:
        'A warm, structured, tactile print curriculum that guides young learners step by step through the true mechanics of reading and writing in Spanish — progressing from the five pure vowel sounds to direct syllables, words, sentences, paragraphs, and poems.',
      primaryImage: '/assets/aistudio/image-gen-3_20261030-070235__9b3e6495.png',
      primaryImageAlt: 'Editorial cover showcase of La Cartilla de Gretel — Aprendamos a leer with the official LANY Books logo',
      primaryImageCaption: 'Upgraded LANY Books hero artwork “Aprendamos a leer” pairing the official open-book LANY Books emblem with the authentic Student Book cover.',
      secondaryImage: '/images/gretel/wb-cover-hd.webp',
      secondaryImageAlt: 'Official 92-page Student Book cover of La Cartilla de Gretel',
      secondaryImageCaption: 'Authentic high-resolution book cover: La Cartilla de Gretel — Libro del alumno (92 pages · Author: Leonor Lopetegui · Illustrations: Estela de Armas Plasencia).',
      highlightsTitle: 'Cover & Imprint Highlights',
      highlights: [
        'Preserves the exact title “La Cartilla de Gretel — Libro del alumno” and authentic cover illustration.',
        'Anchored by the current LANY Books open-book publishing mark.',
        'Purpose-built for beginning Spanish reading and writing across Kindergarten, First Grade, and Second Grade.',
        'Created by veteran educator Leonor Lopetegui with classic illustrations by Estela de Armas Plasencia.',
      ],
      sampleBox: {
        kicker: 'Spanish Beginning Reading & Writing Indicator',
        heading: 'The 5 Pure Spanish Vowels & Controlled Phonetic Sequence',
        lines: [
          'Invariant Spanish Vowels:  A a  ·  E e  ·  I i  ·  O o  ·  U u',
          'Sequence: Letter Sounds → Syllables → Words → Sentences → Paragraphs → Poems',
          'Grade Levels: Kindergarten, First Grade, and Second Grade',
        ],
        vocab: ['A a', 'E e', 'I i', 'O o', 'U u', 'Grades K–2'],
        footerNote: 'Official Physical-Product Marketing Document · LANY Books LLC.',
      },
    },
    {
      id: 'page-02-at-a-glance',
      pageIndex: 2,
      pageNumber: 'Page 02 · The Program at a Glance',
      badge: 'Executive Overview for Educators & Families',
      title: 'What La Cartilla de Gretel Is & Who It Serves',
      subtitle: 'An easy-to-follow program that teaches the true mechanics of reading and writing in Spanish through sound associations.',
      description:
        'La Cartilla de Gretel is a structured program for Kindergarten, First Grade, and Second Grade students designed to teach the true mechanics of reading and writing in Spanish. Its physical format pairs whole-group tabletop presentation with hands-on student workbook practice.',
      primaryImage: '/assets/aistudio/classroom-welcome-gretel.jpg',
      primaryImageAlt: 'Bienvenidos a la escuela — Gretel in the classroom holding the physical Student Book',
      primaryImageCaption: 'Upgraded classroom scene: welcoming Kindergarten, 1st, and 2nd grade students to structured Spanish literacy.',
      secondaryImage: '/assets/aistudio/colorized/heritage-covers-pair.jpg',
      secondaryImageAlt: 'Authentic La Cartilla de Gretel covers: Classic White Guide and 92-Page Royal-Blue Student Book',
      secondaryImageCaption: 'Authentic physical print editions: Classic White Guide cover and 92-page Royal-Blue Student Book.',
      highlightsTitle: 'Why the Physical Format Is Practical for Instruction',
      highlights: [
        'What It Is: A native Spanish phonetic and syllabic literacy program developed across more than 50 years of classroom experience by Leonor Lopetegui.',
        'Who It Serves: Kindergarten, First Grade, and Second Grade students in bilingual, dual-language, Spanish immersion, and heritage-language settings.',
        'Foundational Progression: Moves systematically from the simple to the complex without ever introducing an untaught letter or sound.',
        'Practical Physical Format: Unites a standing 17" × 22" classroom flipchart, 5 felt vowel dolls, an audio poem CD, and a 92-page student workbook.',
      ],
      sampleBox: {
        kicker: 'Program Snapshot',
        heading: 'Built for Teachers, School Leaders, and Families',
        lines: [
          'Core Methodology: Sound associations + strictly controlled simple-to-complex sequence',
          'Student Book Format: 92 pages · 24 sequential phonics and handwriting lessons',
          'Classroom Display: 17" × 22" illustrated tabletop flipchart with built-in easel',
        ],
        vocab: ['Kindergarten', 'First Grade', 'Second Grade', '92 Pages', '24 Lessons'],
        footerNote: 'Zero sight-word guessing: students decode every word using sounds they have already mastered.',
      },
    },
    {
      id: 'page-03-progression',
      pageIndex: 3,
      pageNumber: 'Page 03 · How the Learning Progression Works',
      badge: 'Verified Instructional Sequence',
      title: 'From the Simple to the Complex: The 6-Stage Phonetic Ladder',
      subtitle: 'Letter sounds → Syllables → Words → Sentences → Paragraphs → Poems.',
      description:
        'Rather than relying on rote visual memorization, La Cartilla de Gretel uses memorable sound associations and a strictly controlled progression so learners master pure sounds first and immediately blend them into syllables, words, sentences, paragraphs, and poems.',
      primaryImage: '/assets/aistudio/classroom-chalkboard-abc.jpg',
      primaryImageAlt: 'Student writing A B C at the classroom chalkboard while holding La Cartilla de Gretel',
      primaryImageCaption: 'Students connect spoken letter sounds directly to print and cursive letterforms at the board and desk.',
      secondaryImage: '/assets/aistudio/image-gen-6_20261030-053225__a4de1333.png',
      secondaryImageAlt: 'Teacher guiding a student step by step through the physical La Cartilla de Gretel workbook',
      secondaryImageCaption: 'Step-by-step teacher guidance following the controlled phonetic sequence.',
      highlightsTitle: 'The Verified 6-Stage Sequence',
      highlights: [
        '1. Letter Sounds (Vowels & Consonants): Students master the 5 pure, invariant Spanish vowel sounds (a, e, i, o, u) and consonant sounds through stories and visual cues.',
        '2. Direct Syllables: Each consonant is paired systematically with the 5 vowels (ma, me, mi, mo, mu · pa, pe, pi, po, pu).',
        '3. Decodable Words: Students blend only the syllables they have already learned to read real Spanish words (mamá, amo, mimo, mapa, sapo).',
        '4. Sentences, Paragraphs & Poems: Learners read and write complete sentences (“Mi mamá me ama”), connected short paragraphs, and rhythmic flipchart poems.',
      ],
      sampleBox: {
        kicker: 'Instructional Sequence & Sound-Memory Association',
        heading: 'Letter Sounds → Syllables → Words → Sentences → Paragraphs & Poems',
        lines: [
          'Stage 1 · Letter Sounds:  a · e · i · o · u   +   consonant sound association (/m/ “Muu”)',
          'Stage 2 · Syllables:  ma · me · mi · mo · mu',
          'Stage 3 · Words:  mamá · amo · Meme · Múmi · mimo',
          'Stage 4 · Sentences & Poems:  “Mi mamá me ama.” · “Ema mima a Mimi.”',
        ],
        vocab: ['1. Letter Sounds', '2. Syllables', '3. Words', '4. Sentences', '5. Paragraphs', '6. Poems'],
        footerNote: 'No letter or phonetic sound is ever introduced in words or sentences until it has been explicitly taught.',
      },
    },
    {
      id: 'page-04-flipchart',
      pageIndex: 4,
      pageNumber: 'Page 04 · The Flipchart (17" × 22")',
      badge: 'Central Whole-Class Teaching Tool',
      title: 'The 17" × 22" Tabletop Flipchart & Built-In Easel',
      subtitle: 'Large-format classroom presentation featuring rhythmic vowel poems, picture vocabulary, and syllable charts.',
      description:
        'The physical 17" × 22" flipchart stands on any classroom table or desk with its built-in easel. Teachers use it to introduce every new vowel and consonant to the whole group, pairing the large illustrated pages with the Audio CD and the 5 Felt Vowel Dolls.',
      primaryImage: '/assets/aistudio/image-gen-4_20261030-090157__4d8ebddd.png',
      primaryImageAlt: 'Primeras letras poster showing Gretel teaching A B C at the classroom easel',
      primaryImageCaption: 'Whole-group easel presentation (“Primeras letras”) connecting spoken sounds with visual letterforms.',
      secondaryImage: '/assets/aistudio/image-gen-6_20261030-090159__c9217af0.png',
      secondaryImageAlt: 'Cada página cuenta poster showing La Cartilla de Gretel on a wooden tabletop easel',
      secondaryImageCaption: 'Tabletop easel showcase (“Cada página cuenta”) designed for clear visibility across the classroom.',
      highlightsTitle: 'How Teachers Use the Flipchart with Students',
      highlights: [
        'Full 17" × 22" Tabletop Easel View: Stands upright for circle time or whole-class phonics instruction without requiring wall mounting.',
        'Real Flipchart Example — Vowel “Ee” Page: Features the poem “La niña sordita / La niña Eulalia” alongside illustrated sound cues (elefante, espejo, Ema/Emo, estrella, erizo/elito, escalera).',
        'Real Flipchart Example — Consonant “Mm” Page: Pairs the cow sound cue (“Muu”) with direct syllables ma, me, mi, mo, mu in print and cursive.',
        'Multisensory Routine: Teachers play the poem track on the Audio CD while students hold up the matching Felt Vowel Doll (a, e, i, o, u).',
      ],
      sampleBox: {
        kicker: 'Verified Flipchart Page Example (Vowel Ee)',
        heading: 'Poem: “La niña sordita / La niña Eulalia”',
        lines: [
          'Sordita es la "Ee", entiende al revés,',
          'su mamá la llama una y otra vez.',
          '—Ee, Ee, te he llamado, te he llamado, Ee.',
          '—Te oigo muy bajito, llámame otra vez.',
        ],
        vocab: ['elefante', 'espejo', 'Ema / Emo', 'estrella', 'erizo / elito', 'escalera'],
        footerNote: 'Additional Flipchart Sample (Consonant Mm): ma · me · mi · mo · mu → mamá, amo, Meme, Múmi.',
      },
    },
    {
      id: 'page-05-student-book',
      pageIndex: 5,
      pageNumber: 'Page 05 · The Student Book (92 Pages)',
      badge: 'Individual Student Reading & Writing Book',
      title: 'The 92-Page Student Book (Libro del alumno)',
      subtitle: 'Approved cover, 24 sequential phonics lessons, letter-formation practice, and decodable Spanish reading.',
      description:
        'Following whole-group presentation on the flipchart, every child opens the 92-page Student Book (Libro del alumno). Each lesson transitions seamlessly from sound recognition and syllable blending to reading words and sentences and practicing handwriting.',
      primaryImage: '/assets/aistudio/cada-pagina-cuenta-desk.jpg',
      primaryImageAlt: 'Gretel at her classroom desk with the 92-page La Cartilla de Gretel Student Book — Cada página cuenta',
      primaryImageCaption: 'Verified editorial poster (“Cada página cuenta”) featuring the physical 92-page Student Book at the student desk.',
      secondaryImage: '/assets/aistudio/colorized/student-book-pages-colorized.jpg',
      secondaryImageAlt: 'Colorized authentic Student Book interior pages (Vowel E e picture grid and o, a, i, e, u matching activity)',
      secondaryImageCaption: 'Colorized authentic Student Book interior spread showing the Vowel E e recognition grid and o, a, i, e, u sound-matching exercises.',
      highlightsTitle: 'Inside the 92-Page Student Book',
      highlights: [
        'Approved Book Cover & Authentic Artwork: Features the iconic cover and interior illustrations by Estela de Armas Plasencia.',
        'Interior Reading & Matching Pages: Present vowel sound matching (o, a, i, e, u), direct syllable rows (ma, me, mi, mo, mu), decodable word lists, and connected sentences.',
        'Letter-Formation & Handwriting Practice: Guided writing lines teach uppercase and lowercase formation (Aa Bb Cc Dd Ee Ff Gg Hh Ii) in both print and cursive script.',
        'Cumulative Fluency: Across 24 lessons, students progress from single vowels to complete paragraphs and children’s poems.',
      ],
      sampleBox: {
        kicker: 'Authentic Student Book Interior Examples',
        heading: 'Syllable Reading (Mm), Vowel Matching & Letter Formation',
        lines: [
          'Syllable Row:  ma   me   mi   mo   mu',
          'Word Reading:  mamá  ·  amo  ·  mama  ·  Meme  ·  Mumi  ·  mimo',
          'Sentence Reading:  “Mi mamá me ama.”   ·   “Ema mima a Mimi.”',
          'Letter Formation:  Aa  Bb  Cc  Dd  Ee  Ff  Gg  Hh  Ii  (print & cursive tracing)',
        ],
        vocab: ['92 Pages', '24 Lessons', 'Print & Cursive', 'Reading + Writing'],
        footerNote: 'Every exercise reinforces the exact phonetic elements introduced on the classroom flipchart.',
      },
    },
    {
      id: 'page-06-reproducibles-teacher',
      pageIndex: 6,
      pageNumber: 'Page 06 · Reproducible and Teacher Materials',
      badge: 'Verified Curriculum Support Inventory',
      title: 'Syllabic Charts, Bilingual Homework, Evaluations & Teacher’s Guide',
      subtitle: 'Complete reproducible practice, red-key assessments, audio poems, and tactile manipulatives.',
      description:
        'Beyond the flipchart and student book, La Cartilla de Gretel provides teachers with colorized reproducible syllabic and vowel charts, bilingual take-home practice sheets, diagnostic evaluations with red-ink answer keys, a comprehensive Teacher’s Guide, Audio CD, and 5 Felt Vowel Dolls.',
      primaryImage: '/assets/aistudio/colorized/syllabic-charts-colorized.jpg',
      primaryImageAlt: 'Colorized authentic Reproducible Syllabic and Vowel Charts (a, e, i, o, u cut-outs and mamá, amo, Mumi, mima, Meme, Memo sentences)',
      primaryImageCaption: 'Colorized authentic Reproducible Vowel & Syllabic Charts (a, e, i, o, u picture cut-outs and mamá, amo, Mumi, mima, Meme, Memo sentence completion).',
      secondaryImage: '/assets/aistudio/colorized/evaluations-mm-colorized.jpg',
      secondaryImageAlt: 'Colorized Reproducible Evaluation M m alongside the Red-Ink Teacher Answer Key',
      secondaryImageCaption: 'Authentic Reproducible Evaluation (“Evaluación M m”) paired side by side with the Red-Ink Teacher Answer Key.',
      highlightsTitle: 'Verified Supporting Materials in the Program',
      highlights: [
        'Reproducible Syllabic & Vowel Charts + Answer Key: Vowel cut-out charts (a, e, i, o, u) and syllable sentence sheets (mamá, amo, Mumi, mima, Meme, Memo) with matching teacher answer keys.',
        'Reproducible Homework Pages (Bilingual Spanish/English): Take-home sheets (“P p — Mi papá — Rima 3”) with parent instructions in both Spanish and English.',
        'Reproducible Evaluations + Evaluation Answer Key: Lesson-by-lesson assessments (“Evaluación M m”) with red-ink teacher answer keys.',
        'Teacher’s Guide, Audio CD & 5 Felt Vowel Dolls: Step-by-step instructional guide, studio audio of all flipchart poems, and tactile felt vowel characters (a, e, i, o, u).',
      ],
      sampleBox: {
        kicker: 'Authentic Reproducible Material Samples (Colorized Edition)',
        heading: 'Syllabic Chart · Bilingual Homework (Rima 3) · Evaluación M m + Red Key',
        lines: [
          'Syllabic & Vowel Chart:  Cut-and-paste vowel boxes (a, e, i, o, u) + Sentence box (mamá, amo, Mumi, mima, Meme, Memo)',
          'Bilingual Homework (Rima 3):  “P p — Mi papá: Yo amo a Pupi / yo amo a papá. / Pipo me ama / a mí y a mamá.”',
          'Evaluación M m + Red Key:  1- Mamá me ama. · 2- Meme ama a Mumi. · 3- Mi mamá ama a Memo.',
        ],
        vocab: ['Syllabic Charts + Key', 'Bilingual Homework (Rima 3)', 'Evaluación M m + Key', 'Guide + CD + 5 Dolls'],
        footerNote: 'All reproducible masters and answer keys are organized in folders within the classroom kit.',
      },
    },
    {
      id: 'page-07-complete-experience',
      pageIndex: 7,
      pageNumber: 'Page 07 · The Complete Physical Experience',
      badge: 'Unified 10-Piece Instructional System',
      title: 'How All 10 Physical Components Work Together',
      subtitle: 'A cohesive instructional loop across Classroom Presentation, Student Practice, Home Reinforcement, and Teacher Evaluation.',
      description:
        'The upgraded 10-piece kit photograph brings together all authentic physical components from the original La Cartilla de Gretel program: the 17" × 22" tabletop flipchart displaying the real “Mm” and “La niña sordita” lessons, the 92-page Student Book, the classic white Teacher’s Guide, and the authentic Black & White reproducible sheets.',
      primaryImage: '/assets/aistudio/colorized/kit-11-piece-authentic.jpg',
      primaryImageAlt: 'Upgraded photograph of the complete 10-piece physical La Cartilla de Gretel kit with authentic sheets',
      primaryImageCaption: 'Authentic 10-piece classroom kit featuring the 17" × 22" flipchart easels (“Mm” and “La niña sordita”), 92-page Student Book, classic white Teacher’s Guide, and authentic Black & White reproducible charts, homework, and evaluations.',
      secondaryImage: '/assets/aistudio/colorized/homework-rima3-colorized.jpg',
      secondaryImageAlt: 'Authentic Bilingual Reproducible Homework sheet — P p Mi papá (Rima 3)',
      secondaryImageCaption: 'Authentic Bilingual Reproducible Homework sheet (“P p — Mi papá — Rima 3”) with parent guidance in Spanish and English.',
      highlightsTitle: 'The 4 Connected Pillars of the Physical Kit',
      highlights: [
        '1. Classroom Presentation: The teacher sets up the 17" × 22" Flipchart & Easel, plays the poem on the Audio CD, and introduces the 5 Felt Vowel Dolls (a, e, i, o, u).',
        '2. Student Practice: Students read, trace, and write in the 92-page Student Book and build decoding fluency with the Reproducible Syllabic & Vowel Charts.',
        '3. Home Reinforcement: Families receive Reproducible Bilingual Homework Pages with instructions in Spanish and English to reinforce verses and syllables at home.',
        '4. Teacher Support & Evaluation: Teachers follow the Teacher’s Guide, administer Reproducible Evaluations, and score with the Answer Keys.',
      ],
      sampleBox: {
        kicker: 'Complete Physical System Architecture (10 Components)',
        heading: '1. Classroom · 2. Student · 3. Home · 4. Evaluation',
        lines: [
          'Classroom Presentation: 17" × 22" Flipchart & Easel + Audio CD + 5 Felt Vowel Dolls',
          'Student Practice: 92-Page Student Book (24 lessons) + Reproducible Syllabic & Vowel Charts',
          'Home & Evaluation: Reproducible Bilingual Homework + Teacher’s Guide + Evaluations + 2 Answer Keys',
        ],
        vocab: ['10 Physical Pieces', 'Presentation', 'Student Practice', 'Home Support', 'Evaluation'],
        footerNote: 'Available as individual Student Workbooks, 10-Copy Classroom Packs, or Complete Classroom Kits.',
      },
    },
    {
      id: 'page-08-in-the-classroom',
      pageIndex: 8,
      pageNumber: 'Page 08 · In the Classroom',
      badge: 'Classroom Environment & Active Learning',
      title: 'La Cartilla de Gretel in Action: Warm, Focused Classroom Instruction',
      subtitle: 'Teacher-led presentation, joyful student participation, and tactile engagement with printed books.',
      description:
        'Approved classroom photographs and editorial scenes illustrate how La Cartilla de Gretel functions in daily instruction: clear whole-group modeling, engaged circle-time reading, focused desk handwriting, and confident student participation.',
      primaryImage: '/assets/aistudio/image-gen-8_20261030-090201__c5718b40.png',
      primaryImageAlt: 'Gretel reading with children on the classroom rug — Descubre, lee y aprende',
      primaryImageCaption: '“Descubre, lee y aprende”: collaborative circle-time reading and vowel recognition in the classroom.',
      secondaryImage: '/assets/aistudio/classroom-reading-desk.jpg',
      secondaryImageAlt: 'Student reading the open physical La Cartilla de Gretel workbook at her desk',
      secondaryImageCaption: 'Focused individual reading and tactile interaction with the 92-page Student Book.',
      highlightsTitle: 'What the Classroom Scenes Communicate',
      highlights: [
        'Teacher-Led Presentation: Educators introduce letter sounds and syllable families clearly at the chalkboard and tabletop easel.',
        'Active Student Participation: Children point to illustrated vocabulary, recite rhythmic vowel poems, and blend syllables aloud together.',
        'Physical Interaction with Materials: Turning real pages, tracing letterforms in pencil, and holding felt vowel dolls build multisensory retention.',
        'Warm, Focused Learning Environment: A welcoming, structured atmosphere tailored to Kindergarten, First Grade, and Second Grade learners.',
      ],
      sampleBox: {
        kicker: 'Classroom Documentary & Editorial Sequence',
        heading: '4 Authentic Moments of Daily Instruction',
        lines: [
          'Moment 1 · Whole-group sound introduction at the classroom chalkboard and 17" × 22" easel',
          'Moment 2 · Shared circle-time reading and poem recitation on the classroom rug',
          'Moment 3 · Independent decoding and print-to-cursive writing at student desks',
          'Moment 4 · One-on-one teacher guidance and formative syllable review',
        ],
        vocab: ['Teacher-Led Presentation', 'Student Participation', 'Tactile Practice', 'Focused Environment'],
        footerNote: 'Truthful presentation: all classroom visuals avoid fabricated statistics, unverified endorsements, or invented outcomes.',
      },
    },
    {
      id: 'page-09-ecosystem',
      pageIndex: 9,
      pageNumber: 'Page 09 · From a Trusted Print Experience to a Modern LANY Books Ecosystem',
      badge: 'Physical Core + Modern Publishing Ecosystem',
      title: 'Anchored by Print, Connected to the Modern LANY Books Ecosystem',
      subtitle: 'Positioning the physical Cartilla as the central classroom product alongside clearly labeled web, mobile, and companion experiences.',
      description:
        'While the physical La Cartilla de Gretel book and classroom kit remain the heart of instruction, LANY Books surrounds the print curriculum with an official web storefront, mobile-ready brochure access, and clearly labeled companion tools.',
      primaryImage: '/assets/aistudio/image-gen-8_20261030-070240__c26e2a01.png',
      primaryImageAlt: 'La lectura florece poster by LANY Books',
      primaryImageCaption: '“La lectura florece”: connecting the trusted heritage of the original Cartilla with the refined LANY Books identity.',
      secondaryImage: '/assets/aistudio/image-gen-8_20261030-080503__95b6b43f.png',
      secondaryImageAlt: 'Creciendo con cada libro poster by LANY Books',
      secondaryImageCaption: '“Creciendo con cada libro”: a unified visual identity across physical books, web, and school outreach.',
      highlightsTitle: 'Verified Status of Every Ecosystem Element',
      highlights: [
        'Physical La Cartilla de Gretel Program (92-Page Book, 10-Copy Pack & 11-Piece Kit): The primary, classroom-proven foundation of the program.',
        'Official LANY Books Website & Mobile Brochure (lany-books-web-delta.vercel.app): Bilingual (EN/ES) storefront and interactive marketing brochure.',
        'Digital Classroom Companion (cartilla-de-gretel) & Operational CRM Deck: Optional companion applications for classroom and relationship management.',
        'Retail Book & Audio Channels (Amazon, Kindle, Audible, Barnes & Noble): Listed transparently as Coming Soon until retail URLs are finalized.',
      ],
      ecosystemTags: [
        {
          label: 'Physical La Cartilla de Gretel Print Program (92-Page Book & 11-Piece Kit)',
          status: 'AVAILABLE NOW',
          detail: 'Core physical product. Direct inquiries open for families, teachers, schools, and distributors.',
        },
        {
          label: 'Official LANY Books Web & Mobile Experience (lany-books-web-delta.vercel.app)',
          status: 'AVAILABLE NOW',
          detail: 'Live bilingual product showcase, 10-page interactive brochure, and school inquiry portal.',
        },
        {
          label: 'Digital Classroom Companion & LANY Books CRM Operational Deck',
          status: 'OPTIONAL',
          detail: 'Companion classroom application (cartilla-de-gretel) and internal/partner sales-management presentation.',
        },
        {
          label: 'Retailer Distribution (Amazon Print, Kindle eBook, Audible, Barnes & Noble)',
          status: 'COMING SOON',
          detail: 'Retailer cards are transparently badged as Coming Soon pending final retail listing activation.',
        },
      ],
      sampleBox: {
        kicker: 'Explicit Status Labeling Rule',
        heading: 'Clear Distinction Between Current & Upcoming Offerings',
        lines: [
          '[AVAILABLE NOW] · Physical Student Book, Classroom Editions & Official LANY Books Website',
          '[OPTIONAL] · Companion Digital Classroom Tools & Separate 9-Slide CRM Operational Deck',
          '[COMING SOON] · Retail Marketplace Listings (Amazon, Kindle, Audible, Barnes & Noble)',
        ],
        vocab: ['AVAILABLE NOW', 'OPTIONAL', 'COMING SOON', 'REVIEW REQUIRED'],
        footerNote: 'Pricing and school ordering terms are provided upon request without inventing unconfirmed rates.',
      },
    },
    {
      id: 'page-10-call-to-action',
      pageIndex: 10,
      pageNumber: 'Page 10 · Call to Action & Official Credits',
      badge: 'Inquiries, Demonstrations & Partner Outreach',
      title: 'Bring La Cartilla de Gretel to Your Classroom, School, or Bookstore',
      subtitle: 'Clear pathways for product inquiries, school demonstrations, distributor partnerships, and official LANY Books credits.',
      description:
        'Whether you are a parent seeking a single 92-page Student Book, a bilingual teacher or principal exploring the 11-piece Classroom Kit, or a distributor/bookstore partner, LANY Books welcomes your inquiry.',
      primaryImage: '/assets/aistudio/un-mundo-de-lectura-walk.jpg',
      primaryImageAlt: 'Un mundo de lectura — Gretel walking to school with La Cartilla de Gretel and LANY Books badge',
      primaryImageCaption: 'Verified upgraded artwork “Un mundo de lectura” featuring the clean LANY Books open-book emblem.',
      secondaryImage: '/images/gretel/logo-open-book.png',
      secondaryImageAlt: 'Official LANY Books open-book logo',
      secondaryImageCaption: 'Official LANY Books LLC publishing mark.',
      highlightsTitle: 'How to Connect with LANY Books',
      highlights: [
        'Product Inquiries: Request current availability and ordering details for the 92-page Student Book, 10-Copy Pack, or Full Classroom Kit.',
        'School or Classroom Demonstrations: Schedule a presentation of the 17" × 22" Flipchart, 92-page Student Book, and reproducible materials.',
        'Distributor & Partner Inquiries: Connect regarding bookstore stocking, educational distribution, and regional partnerships.',
        'Official Credits: Author: Leonor Lopetegui · Illustrator: Estela de Armas Plasencia · Contributors: Silvia Díez and Aída Fernández · Digital Adaptation: Emilio José Novo · Imprint: LANY Books.',
      ],
      sampleBox: {
        kicker: 'Approved Contact & Website Information',
        heading: 'LANY Books LLC — Official Publisher of La Cartilla de Gretel',
        lines: [
          'Official Website:  https://lany-books-web-delta.vercel.app/',
          'Online Inquiry Form:  Use the #contact form on this page (Parent, Teacher, School, or Distributor/Bookstore)',
          'Author’s Dedication:  “This book was born in the classroom, and to the classroom I want it to return.” — Leonor Lopetegui',
        ],
        vocab: ['Product Inquiries', 'School Demonstrations', 'Distributor Inquiries', 'LANY Books LLC'],
        footerNote: '© LANY Books LLC · All rights reserved · Official Physical-Product Marketing Document.',
      },
    },
  ]
}

export function getCrmPresentationSlides(lang: 'en' | 'es'): CrmSlide[] {
  if (lang === 'es') {
    return [
      {
        id: 'crm-slide-01',
        slideNumber: 'Diapositiva 01 de 09',
        badge: 'Presentación Operativa Separada · LANY Books',
        title: 'LANY Books CRM — Gestión Comercial y de Relaciones Escolares',
        subtitle: 'Documento operativo complementario para organizar contactos, demostraciones escolares, oportunidades y seguimiento de La Cartilla de Gretel.',
        summary:
          'Esta presentación de 9 diapositivas está diseñada con un tono ejecutivo, estructurado y sobrio —separado del folleto infantil del producto físico— para mostrar cómo LANY Books organiza sus relaciones con escuelas, maestros, familias y distribuidores.',
        sampleLabel: 'ARQUITECTURA OPERATIVA VERIFICADA · SIN MÉTRICAS INVENTADAS',
        keyPoints: [
          'Separación clara de audiencia: diseño ejecutivo y operativo para gestión interna, socios y presentaciones institucionales.',
          'Identidad LANY Books: utiliza la tipografía editorial y la paleta azul real y dorado de LANY Books sin elementos infantiles.',
          'Transparencia total: todos los registros de contacto y vistas de cartera están claramente etiquetados como datos de demostración.',
          'Enfoque en el producto real: conecta cada consulta con el Libro del Alumno de 92 páginas, Paquetes de Aula y el Kit Completo con Rotafolio.',
        ],
        footerNote: 'Presentación complementaria de 9 diapositivas · LANY Books CRM.',
      },
      {
        id: 'crm-slide-02',
        slideNumber: 'Diapositiva 02 de 09',
        badge: 'Propósito Operativo',
        title: '¿Por Qué Existe el CRM de LANY Books?',
        subtitle: 'Un sistema centralizado para organizar cada conversación desde la primera consulta hasta la relación continua.',
        summary:
          'A medida que escuelas, directores de programas bilingües, docentes, familias y librerías solicitan información sobre La Cartilla de Gretel, el CRM de LANY Books estructura cada etapa operativa sin perder ningún seguimiento.',
        sampleLabel: 'FUNCIONES OPERATIVAS CENTRALES',
        keyPoints: [
          'Organizar contactos y organizaciones: escuelas, distritos, maestros, padres, librerías y distribuidores.',
          'Registrar oportunidades: asociar cada consulta con las ediciones físicas o demostraciones solicitadas.',
          'Documentar comunicaciones: historial claro de correos, llamadas y notas de reuniones.',
          'Coordinar demostraciones y próximos pasos: agendar presentaciones del rotafolio de 17" × 22" y asignar responsables.',
        ],
        footerNote: 'Flujo operativo limpio y verificable para el equipo de LANY Books.',
      },
      {
        id: 'crm-slide-03',
        slideNumber: 'Diapositiva 03 de 09',
        badge: 'Ficha de Contacto y Organización',
        title: 'Vista de Contacto y Organización',
        subtitle: 'Estructura estandarizada de registro para escuelas, educadores y distribuidores.',
        summary:
          'Cada ficha de contacto presenta los 8 campos esenciales requeridos para conocer el contexto de la institución, el último contacto realizado y la siguiente acción programada.',
        sampleLabel: 'REGISTRO DE DEMOSTRACIÓN (DATOS DE EJEMPLO CLARAMENTE ETIQUETADOS)',
        recordFields: [
          { label: 'Organización (Organization)', value: '[Muestra] Academia Bilingüe San Marcos (Grados K–2)' },
          { label: 'Contacto (Contact)', value: '[Muestra] Dra. Elena Morales' },
          { label: 'Rol (Role)', value: 'Coordinadora de Lectoescritura Bilingüe (K–2)' },
          { label: 'Ubicación (Location)', value: 'Miami, FL (Registro de demostración)' },
          { label: 'Estado del contacto (Contact status)', value: 'Demostración Programada · Activo' },
          { label: 'Última interacción (Last interaction)', value: 'Envío del folleto físico rediseñado de 10 páginas (La Cartilla de Gretel)' },
          { label: 'Próxima acción (Next action)', value: 'Presentación en vivo del Rotafolio 17" × 22" y Libro del Alumno (92 págs.)' },
          { label: 'Responsable asignado (Assigned owner)', value: 'Equipo Editorial LANY Books' },
        ],
        keyPoints: [
          'Todos los campos reflejan datos de ejemplo para demostración operativa (no afirman contratos reales).',
          'Permite identificar de inmediato quién es el responsable y cuál es la próxima acción concreta.',
        ],
        footerNote: 'Estructura de 8 campos verificada: Organización, Contacto, Rol, Ubicación, Estado, Última interacción, Próxima acción y Responsable.',
      },
      {
        id: 'crm-slide-04',
        slideNumber: 'Diapositiva 04 de 09',
        badge: 'Embudo de Oportunidades',
        title: 'Pipeline de Oportunidades (6 Etapas)',
        subtitle: 'Seguimiento ordenado desde la consulta inicial hasta la relación educativa continua.',
        summary:
          'El pipeline de LANY Books organiza las consultas entrantes en seis etapas claras para que cada escuela, maestro o distribuidor reciba la información y demostración adecuadas.',
        sampleLabel: 'ETAPAS DEL PIPELINE OPERATIVO (DATOS DE MUESTRA)',
        pipelineStages: [
          { stage: '1. Consulta (Inquiry)', desc: 'Recepción de formulario web (#contact) de padre, maestro, escuela o distribuidor.', countLabel: 'Etapa 01' },
          { stage: '2. Calificación (Qualification)', desc: 'Identificación de grados (K, 1.º, 2.º), número aproximado de alumnos y formato de interés.', countLabel: 'Etapa 02' },
          { stage: '3. Demostración (Demonstration)', desc: 'Muestra del Rotafolio 17" × 22", Libro de 92 páginas y materiales reproducibles.', countLabel: 'Etapa 03' },
          { stage: '4. Seguimiento (Follow-Up)', desc: 'Envío de información adicional, resolución de dudas pedagógicas y opciones de formato.', countLabel: 'Etapa 04' },
          { stage: '5. Decisión (Decision)', desc: 'Confirmación de disponibilidad y formato seleccionado con el titular de LANY Books.', countLabel: 'Etapa 05' },
          { stage: '6. Relación Continua (Ongoing Relationship)', desc: 'Acompañamiento docente, reposición de cuadernos del alumno y futuras obras.', countLabel: 'Etapa 06' },
        ],
        keyPoints: [
          'Sin tasas de conversión ni ingresos inventados: cada etapa describe el proceso real de atención.',
          'Alineado directamente con los campos del formulario de interés del sitio web de LANY Books.',
        ],
        footerNote: 'Secuencia oficial: Consulta → Calificación → Demostración → Seguimiento → Decisión → Relación Continua.',
      },
      {
        id: 'crm-slide-05',
        slideNumber: 'Diapositiva 05 de 09',
        badge: 'Asociación de Productos',
        title: 'Interés por Producto y Materiales del Programa',
        subtitle: 'Vinculación de cada oportunidad con las ediciones físicas verificadas de La Cartilla de Gretel.',
        summary:
          'El CRM permite clasificar con precisión qué combinación de materiales físicos o demostraciones interesa a cada contacto, evitando confusiones entre ejemplares individuales y kits completos de aula.',
        sampleLabel: 'CATÁLOGO DE INTERÉS VINCULADO (SIN PRECIOS INVENTADOS)',
        tableHeader: ['Edición / Interés Verificado', 'Componentes Principales', 'Audiencia Típica', 'Estado de Precio'],
        tableRows: [
          ['Libro del Alumno (1 ejemplar)', 'Cuaderno impreso de 92 páginas (24 lecciones fonéticas)', 'Padres, tutores, evaluación docente', 'Por confirmar / A solicitud'],
          ['Paquete de Aula (10 ejemplares)', '10 Libros del Alumno + Tableros silábicos reproducibles', 'Grupos pequeños de lectura (K–2)', 'Por confirmar / A solicitud'],
          ['Kit Completo de Aula (11 piezas / 25 libros)', 'Rotafolio 17" × 22", Libro 92 págs., 5 muñecos fieltro, CD, láminas, tareas, evaluaciones, claves, guía y bolso', 'Salones de Kindergarten, 1.º y 2.º grado', 'Por confirmar / A solicitud'],
          ['Demostración Escolar y Materiales del Maestro', 'Presentación guiada del método fonético y Guía del Maestro', 'Directores bilingües y coordinadores', 'Programación directa'],
        ],
        keyPoints: [
          'Respeta estrictamente las decisiones del propietario: no inventa precios ni términos comerciales no confirmados.',
          'Conecta cada registro CRM con la lista real de componentes del programa físico.',
        ],
        footerNote: 'Opciones verificadas en src/config/products.ts y en el folleto físico.',
      },
      {
        id: 'crm-slide-06',
        slideNumber: 'Diapositiva 06 de 09',
        badge: 'Actividad y Seguimiento',
        title: 'Seguimientos e Historial de Actividades',
        subtitle: 'Registro cronológico de comunicaciones, notas, reuniones, tareas y próximos pasos.',
        summary:
          'Cada interacción con un maestro, director o distribuidor queda documentada con fecha, tipo de actividad y tarea pendiente para garantizar una atención profesional.',
        sampleLabel: 'REGISTRO DE ACTIVIDADES DE DEMOSTRACIÓN (DATOS DE EJEMPLO)',
        tableHeader: ['Tipo de Actividad', 'Resumen de la Interacción (Muestra)', 'Estado', 'Próximo Paso Programado'],
        tableRows: [
          ['Nota de Consulta Inicial', '[Muestra] Solicitud recibida vía formulario web para 2 grupos de Kindergarten.', 'Completado', 'Enviar folleto digital de 10 páginas'],
          ['Reunión / Demostración', '[Muestra] Revisión de la lección de la vocal «Ee» y consonante «Mm» en el Rotafolio.', 'Completado', 'Compartir muestra de Tablero Silábico y Evaluación'],
          ['Tarea de Seguimiento', '[Muestra] Confirmar número estimado de alumnos para el próximo ciclo escolar.', 'Pendiente', 'Llamada de seguimiento con coordinación K–2'],
        ],
        keyPoints: [
          'Mantiene juntas las comunicaciones, notas de reuniones y tareas pendientes en una sola vista.',
          'No promete envíos automáticos ni agentes en segundo plano no verificados.',
        ],
        footerNote: 'Historial estructurado para seguimiento humano y personalizado.',
      },
      {
        id: 'crm-slide-07',
        slideNumber: 'Diapositiva 07 de 09',
        badge: 'Vista de Dirección',
        title: 'Vista de Gestión y Filtros Operativos',
        subtitle: 'Resúmenes limpios por rol, etapa del proceso y tipo de producto sin métricas financieras fabricadas.',
        summary:
          'La vista de dirección ofrece filtros claros para revisar las consultas por tipo de interesado (Padre, Maestro, Escuela, Distribuidor/Librería), grado escolar (K, 1.º, 2.º) y etapa de seguimiento.',
        sampleLabel: 'VISTA DE FILTROS OPERATIVOS (DATOS DE DEMOSTRACIÓN)',
        tableHeader: ['Dimensión de Filtro', 'Categorías Disponibles en el Sistema', 'Propósito Operativo'],
        tableRows: [
          ['Por Rol del Interesado', 'Padre o madre · Maestro · Escuela · Distribuidor o librería', 'Priorizar demostraciones escolares y consultas de distribución'],
          ['Por Etapa del Pipeline', 'Consulta · Calificación · Demostración · Seguimiento · Decisión · Relación Continua', 'Visualizar qué contactos requieren acción esta semana'],
          ['Por Grado Escolar', 'Kindergarten · Primer Grado · Segundo Grado · K–2 Completo', 'Alinear las muestras del Libro del Alumno y Guía del Maestro'],
          ['Por Interés de Producto', 'Libro Individual (92 págs.) · Paquete de 10 · Kit Completo con Rotafolio 17" × 22"', 'Planificar inventario y presentaciones de materiales'],
        ],
        keyPoints: [
          'Cero ingresos falsos, cero porcentajes de cierre inventados y cero afirmaciones no verificadas.',
          'Diseñado para dar claridad operativa real al propietario de LANY Books.',
        ],
        footerNote: 'Todos los filtros corresponden a los campos verificados del flujo de consulta de LANY Books.',
      },
      {
        id: 'crm-slide-08',
        slideNumber: 'Diapositiva 08 de 09',
        badge: 'Recorrido del Cliente',
        title: 'Conexión con el Recorrido Completo del Cliente',
        subtitle: 'Inquiry → Qualification → Demonstration → Follow-Up → Decision → Ongoing Relationship.',
        summary:
          'El folleto físico de 10 páginas y el CRM de LANY Books trabajan en conjunto: el folleto presenta la riqueza pedagógica del producto físico y el CRM acompaña la relación institucional paso a paso.',
        sampleLabel: 'FLUJO INTEGRADO DE PUNTA A PUNTA',
        keyPoints: [
          '1. Consulta (Inquiry): El educador, padre o distribuidor descubre La Cartilla de Gretel en el folleto o sitio web.',
          '2. Calificación (Qualification): Se registran el rol, grado escolar (K–2), número estimado de alumnos y horizonte temporal.',
          '3. Demostración (Demonstration): Se presenta el Rotafolio de 17" × 22", el Libro de 92 páginas y los materiales reproducibles.',
          '4. Seguimiento → 5. Decisión → 6. Relación Continua: Acompañamiento transparente en la adopción y uso anual en el aula.',
        ],
        footerNote: 'Un puente ordenado entre la presentación editorial del libro y la atención a escuelas.',
      },
      {
        id: 'crm-slide-09',
        slideNumber: 'Diapositiva 09 de 09',
        badge: 'Próximo Paso',
        title: 'Siguiente Paso: Solicitar Demostración o Información',
        subtitle: 'Coordine una presentación del programa físico La Cartilla de Gretel y conozca el flujo de atención de LANY Books.',
        summary:
          'Para consultas sobre el programa físico, demostraciones para escuelas o alianzas de distribución, utilice el formulario de contacto oficial de LANY Books.',
        sampleLabel: 'ACCIÓN EJECUTABLE',
        keyPoints: [
          'Solicitar información sobre el Libro del Alumno de 92 páginas y el Kit Completo de 11 piezas.',
          'Programar una demostración para maestros y coordinadores de Kindergarten, 1.º y 2.º grado.',
          'Consultar opciones para librerías y distribuidores educativos.',
          'Sitio web oficial: https://lany-books-web-delta.vercel.app/',
        ],
        footerNote: 'LANY Books LLC · Presentación Operativa CRM (Diapositiva 09 de 09).',
      },
    ]
  }

  return [
    {
      id: 'crm-slide-01',
      slideNumber: 'Slide 01 of 09',
      badge: 'Separate Operational Companion Deck · LANY Books',
      title: 'LANY Books CRM — Sales & School Relationship Management',
      subtitle: 'A structured, operational presentation for managing school, teacher, family, and distributor relationships around La Cartilla de Gretel.',
      summary:
        'Kept intentionally separate from the children’s physical product brochure, this 9-slide companion deck uses a restrained, executive LANY Books visual language to demonstrate how inquiries, classroom demonstrations, and school relationships are organized.',
      sampleLabel: 'VERIFIED OPERATIONAL ARCHITECTURE · ZERO FABRICATED METRICS',
      keyPoints: [
        'Audience separation: keeps the 10-page physical product brochure 100% focused on literacy while providing an executive operational deck here.',
        'LANY Books brand consistency: shares the royal blue, warm cream, and gold palette and editorial typography without cartoon controls.',
        'Truthful demonstration data: all sample records and summaries are explicitly labeled as demonstration examples.',
        'Grounded in verified offerings: connects inquiries directly to the 92-page Student Book, Classroom Packs, and 11-piece Flipchart Kit.',
      ],
      footerNote: 'Separate 9-Slide Companion Presentation · LANY Books CRM.',
    },
    {
      id: 'crm-slide-02',
      slideNumber: 'Slide 02 of 09',
      badge: 'Operational Purpose',
      title: 'Why the LANY Books CRM Exists',
      subtitle: 'A single structured workspace to organize contacts, opportunities, communications, demonstrations, follow-ups, and next actions.',
      summary:
        'As schools, bilingual program directors, teachers, parents, and bookstores inquire about La Cartilla de Gretel, the LANY Books CRM keeps every conversation, demonstration, and follow-up organized and actionable.',
      sampleLabel: 'CORE OPERATIONAL CAPABILITIES',
      keyPoints: [
        'Organize contacts & organizations: schools, districts, bilingual coordinators, teachers, parents, and book distributors.',
        'Track opportunities: link each inquiry to specific physical Cartilla editions and classroom material needs.',
        'Log communications & demonstrations: maintain a clear record of notes, meetings, and physical flipchart/workbook walkthroughs.',
        'Assign clear next actions: ensure every inquiry has a scheduled follow-up and an assigned owner.',
      ],
      footerNote: 'Built for clarity, responsiveness, and relationship continuity.',
    },
    {
      id: 'crm-slide-03',
      slideNumber: 'Slide 03 of 09',
      badge: 'Contact & Organization Record',
      title: 'Contact and Organization View',
      subtitle: 'Standardized 8-field profile for schools, literacy leaders, teachers, and distributors.',
      summary:
        'Every contact record displays the exact operational context needed to prepare for a school conversation or curriculum demonstration, clearly labeled here as sample demonstration data.',
      sampleLabel: 'SAMPLE DEMONSTRATION CONTACT RECORD (CLEARLY LABELED)',
      recordFields: [
        { label: 'Organization', value: '[Sample] San Marcos Dual-Language Academy (Grades K–2)' },
        { label: 'Contact', value: '[Sample] Dr. Elena Morales' },
        { label: 'Role', value: 'Bilingual Literacy Coordinator (K–2)' },
        { label: 'Location', value: 'Miami, FL (Sample Demonstration Record)' },
        { label: 'Contact status', value: 'Demonstration Scheduled · Active Inquiry' },
        { label: 'Last interaction', value: 'Shared redesigned 10-page physical La Cartilla de Gretel brochure' },
        { label: 'Next action', value: 'Walkthrough of 17" × 22" Flipchart & 92-page Student Book' },
        { label: 'Assigned owner', value: 'LANY Books Publishing Team' },
      ],
      keyPoints: [
        'Includes all 8 required record fields: Organization, Contact, Role, Location, Contact status, Last interaction, Next action, Assigned owner.',
        'Clearly labeled as sample demonstration data — never misrepresenting sample entries as live school contracts.',
      ],
      footerNote: 'Standardized Contact & Organization View · LANY Books CRM.',
    },
    {
      id: 'crm-slide-04',
      slideNumber: 'Slide 04 of 09',
      badge: 'Opportunity Pipeline',
      title: 'Opportunity Pipeline (6-Stage Progression)',
      subtitle: 'Inquiry → Qualification → Demonstration → Follow-Up → Decision → Ongoing Relationship.',
      summary:
        'The opportunity pipeline provides a clean visual progression showing where each school, teacher, or distributor conversation stands and what step comes next.',
      sampleLabel: 'VISUAL PIPELINE ARCHITECTURE (SAMPLE VIEW)',
      pipelineStages: [
        { stage: '1. Inquiry', desc: 'Initial request received via the LANY Books interest form (#contact) from a parent, teacher, school, or distributor.', countLabel: 'Stage 01' },
        { stage: '2. Qualification', desc: 'Confirming grade levels (K, 1st, 2nd), approximate student count, timeframe, and preferred print format.', countLabel: 'Stage 02' },
        { stage: '3. Demonstration', desc: 'Presenting the 17" × 22" Flipchart, 92-page Student Book, felt vowel dolls, and reproducible charts/evaluations.', countLabel: 'Stage 03' },
        { stage: '4. Follow-Up', desc: 'Addressing curriculum questions, sharing sample pages, and reviewing classroom implementation options.', countLabel: 'Stage 04' },
        { stage: '5. Decision', desc: 'Confirming selected edition availability and fulfillment details with LANY Books.', countLabel: 'Stage 05' },
        { stage: '6. Ongoing Relationship', desc: 'Supporting classroom instruction, annual student workbook replenishment, and future LANY Books titles.', countLabel: 'Stage 06' },
      ],
      keyPoints: [
        'Zero fabricated conversion rates or invented revenue projections.',
        'Directly mirrors how educators and schools evaluate and adopt physical instructional materials.',
      ],
      footerNote: 'Verified Pipeline Sequence: Inquiry → Qualification → Demonstration → Follow-Up → Decision → Ongoing Relationship.',
    },
    {
      id: 'crm-slide-05',
      slideNumber: 'Slide 05 of 09',
      badge: 'Product Association',
      title: 'Product Interest & Curriculum Offerings',
      subtitle: 'Associating opportunities with verified physical Cartilla offerings, classroom demonstrations, and teacher materials.',
      summary:
        'Each opportunity record links directly to the verified physical editions of La Cartilla de Gretel so the team knows whether an inquiry involves individual student books, classroom packs, or complete flipchart kits.',
      sampleLabel: 'VERIFIED PRODUCT INTEREST MATRIX (NO INVENTED PRICING)',
      tableHeader: ['Verified Offering / Interest', 'Included Physical Materials', 'Primary Audience', 'Pricing Status'],
      tableRows: [
        ['92-Page Student Book (Single Copy)', '92-page Libro del alumno (24 sequential phonics lessons)', 'Parents, tutors, teacher review copies', 'Price to be confirmed'],
        ['10-Copy Print Classroom Pack', '10 Student Workbooks + reproducible syllabic & vowel charts', 'Small-group reading & literacy centers (K–2)', 'Price to be confirmed'],
        ['Complete Classroom Kit (11 Components / 25 Books)', '17" × 22" Flipchart & easel, 92-page Book, 5 felt dolls, Audio CD, charts, homework, evaluations, keys, guide & bag', 'Kindergarten, 1st & 2nd Grade classrooms', 'Price to be confirmed'],
        ['Classroom Demonstration & Teacher Materials', 'Guided presentation of the phonetic sequence, Flipchart, and Teacher’s Guide', 'Principals, bilingual directors & teachers', 'Scheduled upon request'],
      ],
      keyPoints: [
        'Strictly honors OWNER-DECISIONS.md: never invents prices, discounts, or unconfirmed commercial terms.',
        'Maps cleanly to the physical components showcased in Pages 4–7 of the marketing brochure.',
      ],
      footerNote: 'Aligned with verified product definitions in src/config/products.ts.',
    },
    {
      id: 'crm-slide-06',
      slideNumber: 'Slide 06 of 09',
      badge: 'Activity Log & Tasks',
      title: 'Follow-Ups and Activity History',
      subtitle: 'Tracking communications, meeting notes, curriculum demonstrations, tasks, and next steps.',
      summary:
        'The activity timeline keeps all communications, demonstration notes, and scheduled follow-ups in one chronological view so every educator or partner receives timely, well-informed responses.',
      sampleLabel: 'SAMPLE ACTIVITY TIMELINE (DEMONSTRATION DATA)',
      tableHeader: ['Activity Type', 'Interaction Summary (Sample Record)', 'Status', 'Scheduled Next Step'],
      tableRows: [
        ['Inquiry Note', '[Sample] Interest form submitted for Kindergarten & 1st Grade dual-language classrooms.', 'Completed', 'Send 10-page physical brochure PDF'],
        ['Curriculum Demonstration', '[Sample] Reviewed Vowel “Ee” poem and Consonant “Mm” syllable blending on the 17" × 22" Flipchart.', 'Completed', 'Share reproducible Syllabic Chart & Evaluation overview'],
        ['Follow-Up Task', '[Sample] Confirm approximate student workbook count and target semester with literacy coordinator.', 'Scheduled', 'Follow-up call on classroom kit options'],
      ],
      keyPoints: [
        'Tracks communications, notes, meetings, tasks, and next steps without claiming unverified background automation.',
        'Ensures smooth handoffs and continuity across the academic year.',
      ],
      footerNote: 'Follow-Ups & Activity History View · LANY Books CRM.',
    },
    {
      id: 'crm-slide-07',
      slideNumber: 'Slide 07 of 09',
      badge: 'Management Overview',
      title: 'Management View & Operational Filters',
      subtitle: 'Clean operational summaries and filters using clearly labeled sample data — zero fabricated financial metrics.',
      summary:
        'Leadership can filter and review inquiries by role, pipeline stage, grade level, and product interest to plan demonstrations and material readiness.',
      sampleLabel: 'MANAGEMENT FILTER DIMENSIONS (SAMPLE DEMONSTRATION VIEW)',
      tableHeader: ['Filter Dimension', 'Supported Operational Categories', 'Management Purpose'],
      tableRows: [
        ['By Contact Role', 'Parent · Teacher · School · Distributor or bookstore', 'Route inquiries to the appropriate demonstration or inquiry workflow'],
        ['By Pipeline Stage', 'Inquiry · Qualification · Demonstration · Follow-Up · Decision · Ongoing Relationship', 'Identify active conversations requiring immediate follow-up'],
        ['By Grade Level', 'Kindergarten · First Grade · Second Grade · Multi-Grade K–2', 'Tailor curriculum walkthroughs to specific grade-level needs'],
        ['By Product Interest', 'Single 92-Page Book · 10-Copy Pack · Complete 11-Piece Kit with 17" × 22" Flipchart', 'Coordinate physical sample availability and kit inquiries'],
      ],
      keyPoints: [
        'Explicitly avoids fabricated revenue numbers, conversion percentages, or unverified school adoption counts.',
        'Focuses on practical operational organization and responsive relationship management.',
      ],
      footerNote: 'Management View · Verified operational filters only.',
    },
    {
      id: 'crm-slide-08',
      slideNumber: 'Slide 08 of 09',
      badge: 'End-to-End Flow',
      title: 'Connection to the Customer Journey',
      subtitle: 'Inquiry → Qualification → Demonstration → Follow-Up → Decision → Ongoing Relationship.',
      summary:
        'The redesigned 10-page physical brochure and the LANY Books CRM work together seamlessly: the brochure communicates the value and beauty of the physical Cartilla, while the CRM structures the relationship from first inquiry to long-term classroom use.',
      sampleLabel: 'INTEGRATED CUSTOMER & SCHOOL JOURNEY',
      keyPoints: [
        '1. Inquiry: A teacher, principal, parent, or distributor explores the 10-page brochure and submits an inquiry.',
        '2. Qualification: LANY Books records the organization, role, grade level (K–2), and approximate student count.',
        '3. Demonstration: The educator experiences the 17" × 22" Flipchart, 92-page Student Book, and reproducible materials.',
        '4. Follow-Up → 5. Decision → 6. Ongoing Relationship: Thoughtful follow-up supports decision-making and ongoing annual workbook needs.',
      ],
      footerNote: 'Connecting editorial marketing with structured relationship management.',
    },
    {
      id: 'crm-slide-09',
      slideNumber: 'Slide 09 of 09',
      badge: 'Next Step',
      title: 'Next Step: Connect with LANY Books',
      subtitle: 'Request product information, schedule a classroom demonstration, or discuss distribution partnerships.',
      summary:
        'Use the inquiry form below or visit the official LANY Books website to request current availability, pricing, or a guided walkthrough of La Cartilla de Gretel.',
      sampleLabel: 'CLEAR ACTION PATH',
      keyPoints: [
        'Request information on the 92-page Student Book, 10-Copy Classroom Pack, or Complete 11-Piece Classroom Kit.',
        'Schedule a classroom or school demonstration of the physical materials.',
        'Inquire as a parent, teacher, school leader, bookstore, or educational distributor.',
        'Official Website: https://lany-books-web-delta.vercel.app/',
      ],
      footerNote: 'LANY Books LLC · Separate 9-Slide CRM Presentation Complete.',
    },
  ]
}

export const replacementMapData: ReplacementMapItem[] = [
  {
    id: 'rep-01',
    legacyRef: 'Legacy PDF p. 1 Header / Cover & Cut-Out Green Sticker',
    legacyPage: 'Old PDF Page 1 (Top Header & Cover)',
    legacyIssue: {
      en: 'Low-resolution scan of cover, dated 3dcart header, and cut-out green sticker (pose-7.webp) with harsh edges.',
      es: 'Escaneo de baja resolución de la portada, encabezado antiguo de 3dcart y recorte verde (pose-7.webp) con bordes irregulares.',
    },
    upgradedAsset: '/assets/aistudio/image-gen-3_20261030-070235__9b3e6495.png',
    upgradedTitle: {
      en: 'Upgraded “Aprendamos a leer” Hero + Authentic HD Cover (/images/gretel/wb-cover-hd.webp) + Official Open-Book Logo',
      es: 'Arte mejorado «Aprendamos a leer» + Portada HD auténtica (/images/gretel/wb-cover-hd.webp) + Logo oficial de libro abierto',
    },
    targetBrochurePage: 'Page 1 — Cover',
    duplicateAuditNote: {
      en: 'Selected image-gen-3_20261030-070235__9b3e6495.png (official open-book logo) over duplicate image-gen-9_20261030-080504__a998c4de.png (which contained the retired circular floral emblem).',
      es: 'Se seleccionó image-gen-3_20261030-070235__9b3e6495.png (con el logo oficial de libro abierto) sobre el duplicado image-gen-9_20261030-080504__a998c4de.png (que tenía el emblema circular retirado).',
    },
    approvalStatus: 'APPROVED',
  },
  {
    id: 'rep-02',
    legacyRef: 'Legacy PDF p. 1 Program Introduction & Classroom Context',
    legacyPage: 'Old PDF Page 1 (Program Overview Block)',
    legacyIssue: {
      en: 'Cramped two-column text block with no classroom context photograph showing who the program serves.',
      es: 'Bloque de texto comprimido en dos columnas sin fotografía de contexto escolar que muestre a quién sirve el programa.',
    },
    upgradedAsset: '/assets/aistudio/classroom-welcome-gretel.jpg',
    upgradedTitle: {
      en: '“Bienvenidos a la escuela” Classroom Welcome Scene + “Historias para descubrir” Library Portrait',
      es: 'Fotografía escolar «Bienvenidos a la escuela» + Retrato editorial «Historias para descubrir»',
    },
    targetBrochurePage: 'Page 2 — The Program at a Glance',
    duplicateAuditNote: {
      en: 'Promoted media_1793919312303_b672723f.jpg to /assets/aistudio/classroom-welcome-gretel.jpg after verifying crisp blackboard typography and authentic book cover.',
      es: 'Se promovió media_1793919312303_b672723f.jpg a /assets/aistudio/classroom-welcome-gretel.jpg tras verificar la nitidez del pizarrón y la portada auténtica.',
    },
    approvalStatus: 'APPROVED',
  },
  {
    id: 'rep-03',
    legacyRef: 'Legacy PDF p. 1–2 Instructional Sequence Text (“From the simple to the complex”)',
    legacyPage: 'Old PDF Pages 1–2 (Progression Description)',
    legacyIssue: {
      en: 'Plain bullet list without visual progression diagram or active chalkboard/teacher-guidance photography.',
      es: 'Lista simple sin diagrama visual de progresión ni fotografía activa de pizarra y acompañamiento docente.',
    },
    upgradedAsset: '/assets/aistudio/classroom-chalkboard-abc.jpg',
    upgradedTitle: {
      en: 'Classroom Chalkboard A-B-C Scene + Teacher Step-by-Step Guidance (/assets/aistudio/image-gen-6_20261030-053225__a4de1333.png)',
      es: 'Escena de Pizarra A-B-C en el Aula + Guía Paso a Paso de la Maestra (/assets/aistudio/image-gen-6_20261030-053225__a4de1333.png)',
    },
    targetBrochurePage: 'Page 3 — How the Learning Progression Works',
    duplicateAuditNote: {
      en: 'Selected media_1793642394576_a176c269.jpg (classroom-chalkboard-abc.jpg) for clearest chalkboard lettering and authentic Student Book cover.',
      es: 'Se seleccionó media_1793642394576_a176c269.jpg (classroom-chalkboard-abc.jpg) por la claridad de las letras A B C y la portada auténtica.',
    },
    approvalStatus: 'APPROVED',
  },
  {
    id: 'rep-04',
    legacyRef: 'Legacy PDF p. 1 Bottom-Left & p. 2 Top-Left (17" × 22" Flipchart Scans: Vowel Ee & Consonant Mm)',
    legacyPage: 'Old PDF Pages 1 & 2 (Flipchart Samples)',
    legacyIssue: {
      en: 'Tiny, skewed, low-DPI thumbnails of the 17" × 22" flipchart pages (“La niña sordita / Ee” and “Mm / ma me mi mo mu”) that were difficult to read.',
      es: 'Miniaturas inclinadas y de baja resolución de las páginas del rotafolio de 17" × 22" («La niña sordita / Ee» y «Mm / ma me mi mo mu») difíciles de leer.',
    },
    upgradedAsset: '/assets/aistudio/image-gen-4_20261030-090157__4d8ebddd.png',
    upgradedTitle: {
      en: '“Primeras letras” Easel Poster + “Cada página cuenta” Tabletop Easel (/assets/aistudio/image-gen-6_20261030-090159__c9217af0.png) + Structured Verbatim Ee & Mm Specimen Box',
      es: 'Póster de Caballete «Primeras letras» + Atril de Mesa «Cada página cuenta» + Recuadro Tipográfico Verificado de las Lecciones Ee y Mm',
    },
    targetBrochurePage: 'Page 4 — The Flipchart',
    duplicateAuditNote: {
      en: 'Compared easel variants and selected image-gen-4_20261030-090157__4d8ebddd.png and image-gen-6_20261030-090159__c9217af0.png; preserved exact verbatim poem text and vocabulary cues.',
      es: 'Se compararon las variantes de caballete eligiendo image-gen-4_20261030-090157__4d8ebddd.png e image-gen-6_20261030-090159__c9217af0.png; se preservó el poema y vocabulario exactos.',
    },
    approvalStatus: 'APPROVED',
  },
  {
    id: 'rep-05',
    legacyRef: 'Legacy PDF p. 2 Top-Right (92-Page Student Book Handwriting & Lesson Scan)',
    legacyPage: 'Old PDF Page 2 (Student Book Sample)',
    legacyIssue: {
      en: 'Low-contrast scan of handwriting lines (Aa Bb Cc...) and syllable exercises with dark borders.',
      es: 'Escaneo de bajo contraste de las líneas de caligrafía (Aa Bb Cc...) y ejercicios silábicos con bordes oscuros.',
    },
    upgradedAsset: '/assets/aistudio/cada-pagina-cuenta-desk.jpg',
    upgradedTitle: {
      en: 'Verified “Cada página cuenta” Student Desk Poster + Classroom Handwriting Photograph (/assets/aistudio/image-gen-3_20261030-050212__d060f899.png)',
      es: 'Póster Verificado de Pupitre «Cada página cuenta» + Fotografía de Escritura en el Aula (/assets/aistudio/image-gen-3_20261030-050212__d060f899.png)',
    },
    targetBrochurePage: 'Page 5 — The Student Book',
    duplicateAuditNote: {
      en: 'Audited duplicates: selected media_1793636365334_5cb2e3c3.jpg (/assets/aistudio/cada-pagina-cuenta-desk.jpg) with clean "any Books" spelling over media_1793636303310_66a751a8.jpg (which had a typo "anny Books").',
      es: 'Auditoría de duplicados: se eligió media_1793636365334_5cb2e3c3.jpg (/assets/aistudio/cada-pagina-cuenta-desk.jpg) con el logo limpio sobre media_1793636303310_66a751a8.jpg (que tenía «anny Books»).',
    },
    approvalStatus: 'APPROVED',
  },
  {
    id: 'rep-06',
    legacyRef: 'Legacy PDF p. 2 & Webpage (Syllabic Chart, Bilingual Homework Rima 3 & Evaluation M m Scans)',
    legacyPage: 'Old PDF Page 2 & La-Cartilla_ep_42.html (Reproducibles)',
    legacyIssue: {
      en: 'Low-resolution black-and-white scans of the Vowel/Syllabic Charts, Bilingual Homework (Rima 3), and Evaluación M m sheets.',
      es: 'Escaneos en blanco y negro de baja resolución de los Tableros de Vocales/Sílabas, Tarea Bilingüe (Rima 3) y Evaluación M m.',
    },
    upgradedAsset: '/assets/aistudio/colorized/syllabic-charts-colorized.jpg',
    upgradedTitle: {
      en: 'Colorized Authentic Syllabic & Vowel Charts + Colorized Bilingual Homework (Rima 3) + Colorized Evaluación M m with Red Key',
      es: 'Tableros de Vocales y Sílabas Coloreados + Tarea Bilingüe Coloreada (Rima 3) + Evaluación M m con Clave Roja',
    },
    targetBrochurePage: 'Page 6 — Reproducible and Teacher Materials',
    duplicateAuditNote: {
      en: 'Anchored directly to the extracted authentic La-Cartilla_ep_42.html scans (/assets/aistudio/ep42/ep42-05, ep42-06, ep42-07) and colorized in the warm LANY Books palette.',
      es: 'Anclado directamente a los escaneos auténticos extraídos de La-Cartilla_ep_42.html (/assets/aistudio/ep42/ep42-05, ep42-06, ep42-07) y coloreado en la paleta cálida de LANY Books.',
    },
    approvalStatus: 'APPROVED',
  },
  {
    id: 'rep-07',
    legacyRef: 'Legacy Kit Collage & Earlier Synthetic Kit Composite',
    legacyPage: 'Old PDF Page 1 & Previous Synthetic Kit Composite',
    legacyIssue: {
      en: 'Earlier synthetic kit composite had distorted flipchart text ("Eulalia en la le... elito") and generic placeholder worksheets instead of the authentic ep_42 sheets.',
      es: 'El collage sintético anterior tenía texto distorsionado en el rotafolio («elito») y hojas genéricas en lugar de las láminas reales de ep_42.',
    },
    upgradedAsset: '/assets/aistudio/colorized/kit-11-piece-authentic.jpg',
    upgradedTitle: {
      en: 'Reference-Anchored Authentic 11-Piece Kit Photograph (/assets/aistudio/colorized/kit-11-piece-authentic.jpg) with Real Ee & Mm Easels, White Teacher’s Guide & Colorized Sheets',
      es: 'Fotografía del Kit Auténtico de 11 Piezas (/assets/aistudio/colorized/kit-11-piece-authentic.jpg) con Rotafolios Reales Ee y Mm, Guía Blanca y Láminas Coloreadas',
    },
    targetBrochurePage: 'Page 7 — The Complete Physical Experience',
    duplicateAuditNote: {
      en: 'Replaced synthetic kit image with /assets/aistudio/colorized/kit-11-piece-authentic.jpg generated from the 3 Gretel references and authentic ep_42 flipchart/worksheet crops.',
      es: 'Se reemplazó la imagen sintética del kit por /assets/aistudio/colorized/kit-11-piece-authentic.jpg generado a partir de las 3 referencias de Gretel y los recortes auténticos de ep_42.',
    },
    approvalStatus: 'APPROVED',
  },
  {
    id: 'rep-08',
    legacyRef: 'Legacy Webpage & Brochure Classroom Context',
    legacyPage: 'Webpage & Brochure Classroom Presentation',
    legacyIssue: {
      en: 'Lacked cohesive classroom documentary photography showing circle time, student participation, and desk reading.',
      es: 'Carecía de fotografía escolar cohesiva que mostrara el círculo de lectura, la participación estudiantil y la lectura en pupitre.',
    },
    upgradedAsset: '/assets/aistudio/image-gen-8_20261030-090201__c5718b40.png',
    upgradedTitle: {
      en: '“Descubre, lee y aprende” Group Reading Poster + Classroom Desk Reading (/assets/aistudio/classroom-reading-desk.jpg) + Teacher Circle Time',
      es: 'Póster Grupal «Descubre, lee y aprende» + Lectura en Pupitre (/assets/aistudio/classroom-reading-desk.jpg) + Círculo Docente',
    },
    targetBrochurePage: 'Page 8 — In the Classroom',
    duplicateAuditNote: {
      en: 'Selected image-gen-8_20261030-090201__c5718b40.png (4 children reading together, clean LANY Books badge) and classroom-reading-desk.jpg.',
      es: 'Se seleccionó image-gen-8_20261030-090201__c5718b40.png (lectura grupal con logo limpio) y classroom-reading-desk.jpg.',
    },
    approvalStatus: 'APPROVED',
  },
  {
    id: 'rep-09',
    legacyRef: 'Legacy 3dcart Storefront References (doublermuybien-com.3dcartstores.com)',
    legacyPage: 'Old Webpage & Footer References',
    legacyIssue: {
      en: 'Dated 3dcart layout with legacy branding and no connection to the modern LANY Books ecosystem.',
      es: 'Diseño antiguo de 3dcart sin conexión con el ecosistema moderno de LANY Books.',
    },
    upgradedAsset: '/assets/aistudio/image-gen-8_20261030-070240__c26e2a01.png',
    upgradedTitle: {
      en: '“La lectura florece” & “Creciendo con cada libro” + LANY Books Ecosystem with Explicit Status Badges (AVAILABLE NOW / OPTIONAL / COMING SOON)',
      es: '«La lectura florece» y «Creciendo con cada libro» + Ecosistema LANY Books con Etiquetas de Estado Explícitas',
    },
    targetBrochurePage: 'Page 9 — From Print to Modern LANY Books Ecosystem',
    duplicateAuditNote: {
      en: 'Selected image-gen-8_20261030-070240__c26e2a01.png and image-gen-7_20261030-070239__391377d5.png featuring the official open-book LANY Books logo.',
      es: 'Se seleccionaron image-gen-8_20261030-070240__c26e2a01.png e image-gen-7_20261030-070239__391377d5.png con el logo oficial de libro abierto.',
    },
    approvalStatus: 'APPROVED',
  },
  {
    id: 'rep-10',
    legacyRef: 'Legacy PDF p. 2 Bottom Footer & Ordering Strip',
    legacyPage: 'Old PDF Page 2 (Footer & Contact)',
    legacyIssue: {
      en: 'Plain text footer without clear inquiry pathways for schools, teachers, parents, and distributors.',
      es: 'Pie de página simple sin rutas claras de consulta para escuelas, maestros, padres y distribuidores.',
    },
    upgradedAsset: '/assets/aistudio/un-mundo-de-lectura-walk.jpg',
    upgradedTitle: {
      en: 'Verified “Un mundo de lectura” Back-to-School Artwork + Official LANY Books Open-Book Logo & Credits',
      es: 'Arte Verificado «Un mundo de lectura» + Logotipo Oficial de Libro Abierto LANY Books y Créditos',
    },
    targetBrochurePage: 'Page 10 — Call to Action',
    duplicateAuditNote: {
      en: 'Audited duplicates: selected /assets/aistudio/un-mundo-de-lectura-walk.jpg (clean "any BOOKS" badge) over /assets/aistudio/image-gen-3_20261030-080458__f15ffa14.png (which had a badge typo "aaNy Books", marked REVIEW REQUIRED).',
      es: 'Auditoría de duplicados: se eligió /assets/aistudio/un-mundo-de-lectura-walk.jpg (con insignia limpia) sobre image-gen-3_20261030-080458__f15ffa14.png (que tenía «aaNy Books», marcado REVIEW REQUIRED).',
    },
    approvalStatus: 'APPROVED',
  },
  {
    id: 'rep-11',
    legacyRef: 'Superseded Duplicate Asset with Retired Circular Floral Logo',
    legacyPage: 'Asset Audit — Superseded Variant',
    legacyIssue: {
      en: 'Contains the retired circular floral emblem in the bottom-right corner instead of the current open-book LANY Books logo.',
      es: 'Contiene el emblema floral circular retirado en la esquina inferior derecha en lugar del logo actual de libro abierto de LANY Books.',
    },
    upgradedAsset: '/assets/aistudio/image-gen-9_20261030-080504__a998c4de.png',
    upgradedTitle: {
      en: 'SUPERSEDED by /assets/aistudio/image-gen-3_20261030-070235__9b3e6495.png — Excluded from Final Brochure Pages',
      es: 'REEMPLAZADO por /assets/aistudio/image-gen-3_20261030-070235__9b3e6495.png — Excluido de las Páginas Finales del Folleto',
    },
    targetBrochurePage: 'Excluded (Audit Record Only)',
    duplicateAuditNote: {
      en: 'Flagged during duplicate comparison so the retired circular logo never appears in the final marketing document.',
      es: 'Identificado durante la comparación de duplicados para que el emblema circular retirado no aparezca en el documento final.',
    },
    approvalStatus: 'SUPERSEDED / DO NOT USE',
  },
]

export const reviewRequiredItems = {
  en: [
    {
      id: 'rev-01',
      item: 'Product Pricing & School Volume Terms',
      status: 'REVIEW REQUIRED · OWNER-DECISIONS.md (Items 2 & 3)',
      detail: 'Retail prices for the 92-page Student Book, 10-Copy Pack, and Complete Classroom Kit remain labeled "Price to be confirmed" / "Availability and pricing by request". Online checkout remains disabled until owner confirmation.',
    },
    {
      id: 'rev-02',
      item: 'Direct Contact Email, Phone Number & Form Endpoint',
      status: 'REVIEW REQUIRED · OWNER-DECISIONS.md (Items 5 & 7)',
      detail: 'Controlled via VITE_CONTACT_EMAIL and VITE_FORM_ENDPOINT. No unverified phone numbers or email addresses are invented in the brochure.',
    },
    {
      id: 'rev-03',
      item: 'Retailer Live URLs (Amazon, Kindle, Audible, Barnes & Noble)',
      status: 'REVIEW REQUIRED · COMING SOON',
      detail: 'Retailer cards are configured with transparent "Coming Soon" status until verified product listing URLs are confirmed by the owner.',
    },
    {
      id: 'rev-04',
      item: 'Uncompressed Flatbed Vector/TIFF Scans of Individual Interior Worksheets',
      status: 'REVIEW REQUIRED · ASSET NOTE',
      detail: 'The legacy PDF contained small angled composite thumbnails of the Ee/Mm flipchart pages, syllabic chart, homework, and evaluation sheets. In Pages 4–6 of this brochure, we pair the upgraded high-resolution LANY Books photography/posters with faithful verbatim typographic reconstructions of those exact lessons until standalone 300-DPI flatbed scans of individual pages are supplied.',
    },
    {
      id: 'rev-05',
      item: 'Duplicate Poster Variants with Minor Badge Spelling Variations',
      status: 'REVIEW REQUIRED · DUPLICATE AUDIT',
      detail: 'image-gen-3_20261030-080458__f15ffa14.png ("Un mundo de lectura" waving on steps, badge reads "aaNy Books") and media_1793636303310_66a751a8.jpg (badge reads "anny Books") were flagged as REVIEW REQUIRED; the clean approved versions (un-mundo-de-lectura-walk.jpg and cada-pagina-cuenta-desk.jpg) were selected for the primary 10-page brochure.',
    },
  ],
  es: [
    {
      id: 'rev-01',
      item: 'Precios de Productos y Términos de Pedidos Escolares',
      status: 'REVIEW REQUIRED · OWNER-DECISIONS.md (Puntos 2 y 3)',
      detail: 'Los precios del Libro del Alumno de 92 páginas, Paquete de 10 ejemplares y Kit Completo permanecen como «Precio por confirmar» / «Disponibilidad y precios por solicitud». La compra en línea sigue deshabilitada hasta confirmación del propietario.',
    },
    {
      id: 'rev-02',
      item: 'Correo Directo, Teléfono y Destino del Formulario',
      status: 'REVIEW REQUIRED · OWNER-DECISIONS.md (Puntos 5 y 7)',
      detail: 'Controlados mediante VITE_CONTACT_EMAIL y VITE_FORM_ENDPOINT. No se inventan números telefónicos ni correos no verificados.',
    },
    {
      id: 'rev-03',
      item: 'Enlaces Activos en Librerías (Amazon, Kindle, Audible, Barnes & Noble)',
      status: 'REVIEW REQUIRED · PRÓXIMAMENTE',
      detail: 'Las tarjetas de librerías muestran el estado transparente «Próximamente» hasta que el propietario confirme los enlaces definitivos.',
    },
    {
      id: 'rev-04',
      item: 'Escaneos Planos Individuales a 300 DPI de Hojas Reproducibles',
      status: 'REVIEW REQUIRED · NOTA DE ARCHIVOS',
      detail: 'El PDF antiguo contenía miniaturas inclinadas de baja resolución de las páginas Ee/Mm, tablero silábico, tarea y evaluación. En las Páginas 4 a 6 combinamos las nuevas imágenes aprobadas de alta resolución con la transcripción tipográfica fiel de dichas lecciones hasta contar con escaneos planos individuales a 300 DPI.',
    },
    {
      id: 'rev-05',
      item: 'Variantes Duplicadas con Pequeñas Variaciones en la Insignia',
      status: 'REVIEW REQUIRED · AUDITORÍA DE DUPLICADOS',
      detail: 'image-gen-3_20261030-080458__f15ffa14.png (insignia «aaNy Books») y media_1793636303310_66a751a8.jpg (insignia «anny Books») se marcaron como REVIEW REQUIRED; para el folleto principal de 10 páginas se eligieron las versiones limpias verificadas (un-mundo-de-lectura-walk.jpg y cada-pagina-cuenta-desk.jpg).',
    },
  ],
}

export const copyVerificationList = {
  en: [
    {
      claim: 'Product Title & Grade Levels',
      text: 'La Cartilla de Gretel — A phonetic Spanish reading and writing program for Kindergarten, First Grade, and Second Grade.',
      source: 'Verified from la_cartilla_de_Gretel2.pdf, doublermuybien-com.3dcartstores.com/La-Cartilla_ep_42.html & src/copy.ts',
    },
    {
      claim: 'Instructional Progression',
      text: 'Uses sound associations and a strictly controlled sequence from the simple to the complex: letter sounds, syllable sounds, words, sentences, paragraphs, and poems. No letter or phonetic sound is introduced in words or sentences without having been taught before.',
      source: 'Verified verbatim from la_cartilla_de_Gretel2.pdf & La-Cartilla_ep_42.html',
    },
    {
      claim: '11 Complete Package Components',
      text: '17" × 22" flipchart & easel, 92-page Student Book (24 lessons), 5 felt vowel dolls (a, e, i, o, u), Audio CD of flipchart poems, reproducible syllabic & vowel charts, answer key to syllabic charts, reproducible bilingual homework pages, reproducible evaluations, evaluation answer key, Teacher’s Guide, and carrying bag & folders.',
      source: 'Verified from la_cartilla_de_Gretel2.pdf, La-Cartilla_ep_42.html (ebay.com/itm/227292617053), /assets/aistudio/colorized/kit-11-piece-authentic.jpg & src/copy.ts',
    },
    {
      claim: 'Flipchart Sample (Vowel Ee & Consonant Mm)',
      text: 'Vowel Ee poem “La niña sordita / La niña Eulalia” with vocabulary cues (elefante, espejo, Ema/Emo, estrella, erizo/elito, escalera); Consonant Mm direct syllables (ma, me, mi, mo, mu) and decodable words/sentences (“Mi mamá me ama”, “Ema mima a Mimi”).',
      source: 'Verified from la_cartilla_de_Gretel2.pdf interior sample pages',
    },
    {
      claim: 'Official Credits & Dedication',
      text: 'Author: Leonor Lopetegui (50+ years as an educator) · Illustrator: Estela de Armas Plasencia · Contributors: Silvia Díez and Aída Fernández · Digital Adaptation: Emilio José Novo · Imprint: LANY Books. Dedication: “This book was born in the classroom, and to the classroom I want it to return.”',
      source: 'Verified from physical book credits & src/copy.ts',
    },
  ],
  es: [
    {
      claim: 'Título del Producto y Grados Escolares',
      text: 'La Cartilla de Gretel — Programa fonético de lectura y escritura en español para Kindergarten, Primer Grado y Segundo Grado.',
      source: 'Verificado en la_cartilla_de_Gretel2.pdf, doublermuybien-com.3dcartstores.com/La-Cartilla_ep_42.html y src/copy.ts',
    },
    {
      claim: 'Progresión Instruccional',
      text: 'Utiliza asociaciones de sonidos y una secuencia controlada de lo simple a lo complejo: sonidos de letras, sílabas, palabras, oraciones, párrafos y poemas. Ninguna letra o sonido aparece sin haber sido enseñado previamente.',
      source: 'Verificado literalmente en la_cartilla_de_Gretel2.pdf y La-Cartilla_ep_42.html',
    },
    {
      claim: '11 Componentes del Paquete Completo',
      text: 'Rotafolio de 17" × 22" con caballete, Libro del Alumno de 92 páginas (24 lecciones), 5 muñecos de vocales de fieltro (a, e, i, o, u), CD de audio con los poemas del rotafolio, tableros silábicos y de vocales reproducibles, claves de los tableros, tareas reproducibles bilingües, evaluaciones reproducibles, claves de evaluación, Guía del Maestro y bolso con carpetas.',
      source: 'Verificado en la_cartilla_de_Gretel2.pdf, La-Cartilla_ep_42.html (ebay.com/itm/227292617053), /assets/aistudio/colorized/kit-11-piece-authentic.jpg y src/copy.ts',
    },
    {
      claim: 'Muestras del Rotafolio y Libro (Vocal Ee y Consonante Mm)',
      text: 'Poema de la vocal Ee «La niña sordita / La niña Eulalia» (elefante, espejo, Ema/Emo, estrella, erizo/elito, escalera); sílabas directas Mm (ma, me, mi, mo, mu) y oraciones («Mi mamá me ama», «Ema mima a Mimi»).',
      source: 'Verificado en las muestras interiores de la_cartilla_de_Gretel2.pdf',
    },
    {
      claim: 'Créditos Oficiales y Dedicatoria',
      text: 'Autora: Leonor Lopetegui (más de 50 años como educadora) · Ilustradora: Estela de Armas Plasencia · Colaboradoras: Silvia Díez y Aída Fernández · Adaptación digital: Emilio José Novo · Sello: LANY Books. Dedicatoria: «Este libro ha nacido en las aulas y a ellas quiero que vuelva.»',
      source: 'Verificado en los créditos oficiales del libro y src/copy.ts',
    },
  ],
}

export const upgradedGalleryItems: GalleryItem[] = [
  {
    id: 'kit-bundle',
    src: '/assets/aistudio/colorized/kit-11-piece-authentic.jpg',
    category: 'kit',
    aspect: '4 / 3',
    usedOnPage: 'Page 7 — Complete Physical Experience',
    approvalStatus: 'APPROVED',
    tag: { en: 'Authentic 11-Piece Kit (Colorized)', es: 'Kit Auténtico de 11 Piezas (Coloreado)' },
    title: {
      en: 'La Cartilla de Gretel — Reference-Anchored 11-Piece Physical Classroom Kit',
      es: 'La Cartilla de Gretel — Kit Físico Completo de 11 Piezas con Materiales Auténticos',
    },
    caption: {
      en: 'Royal-blue tote bag, 17" × 22" easel flipcharts (Mm & La niña sordita), 92-page Student Book, white Teacher’s Guide, colorized syllabic charts, bilingual homework (Rima 3), Evaluación M m, audio CD, and 5 felt vowel dolls.',
      es: 'Bolso azul rey, rotafolios de 17" × 22" (Mm y La niña sordita), Libro del Alumno de 92 páginas, Guía del Maestro blanca, tableros coloreados, tarea Rima 3, Evaluación M m, CD de audio y 5 muñecos de fieltro.',
    },
  },
  {
    id: 'colorized-student-book-pages',
    src: '/assets/aistudio/colorized/student-book-pages-colorized.jpg',
    category: 'kit',
    aspect: '4 / 3',
    usedOnPage: 'Page 5 — The Student Book',
    approvalStatus: 'APPROVED',
    tag: { en: 'Colorized Student Book Pages', es: 'Páginas Interiores Coloreadas' },
    title: {
      en: 'Colorized Student Book Spread (Vowel E e Grid & o, a, i, e, u Matching)',
      es: 'Páginas Interiores Coloreadas del Libro del Alumno (Vocal E e y Asociación o, a, i, e, u)',
    },
    caption: {
      en: 'Colorized from the authentic La-Cartilla_ep_42 Student Book interior scan showing Vowel E e picture recognition and vowel-to-picture line matching.',
      es: 'Coloreado a partir del escaneo interior auténtico del Libro del Alumno en La-Cartilla_ep_42.',
    },
  },
  {
    id: 'colorized-syllabic-charts',
    src: '/assets/aistudio/colorized/syllabic-charts-colorized.jpg',
    category: 'kit',
    aspect: '4 / 3',
    usedOnPage: 'Page 6 — Reproducible & Teacher Materials',
    approvalStatus: 'APPROVED',
    tag: { en: 'Colorized Syllabic & Vowel Charts', es: 'Tableros Reproducibles Coloreados' },
    title: {
      en: 'Colorized Reproducible Vowel Cut-Outs & Sentence Completion Sheet',
      es: 'Tableros Reproducibles Coloreados de Vocales (a, e, i, o, u) y Oraciones (Mm)',
    },
    caption: {
      en: 'Colorized from the authentic La-Cartilla_ep_42 Reproducible Syllabic Charts scan featuring vowel boxes (a, e, i, o, u) and word-bank sentences (mamá, amo, Mumi, mima, Meme, Memo).',
      es: 'Coloreado a partir de las láminas reproducibles auténticas de La-Cartilla_ep_42.',
    },
  },
  {
    id: 'colorized-homework-rima3',
    src: '/assets/aistudio/colorized/homework-rima3-colorized.jpg',
    category: 'kit',
    aspect: '3 / 4',
    usedOnPage: 'Page 7 — Complete Physical Experience',
    approvalStatus: 'APPROVED',
    tag: { en: 'Colorized Bilingual Homework (Rima 3)', es: 'Tarea Bilingüe Coloreada (Rima 3)' },
    title: {
      en: 'Colorized Bilingual Reproducible Homework — “P p: Mi papá (Rima 3)”',
      es: 'Tarea Reproducible Bilingüe Coloreada — «P p: Mi papá (Rima 3)»',
    },
    caption: {
      en: 'Colorized from the authentic La-Cartilla_ep_42 homework sheet with Spanish & English family instructions and the poem “Yo amo a Pupi, yo amo a papá.”',
      es: 'Coloreado a partir de la hoja de tarea bilingüe auténtica con instrucciones en español e inglés y el poema «Mi papá (Rima 3)».',
    },
  },
  {
    id: 'colorized-evaluations-mm',
    src: '/assets/aistudio/colorized/evaluations-mm-colorized.jpg',
    category: 'kit',
    aspect: '4 / 3',
    usedOnPage: 'Page 6 — Reproducible & Teacher Materials',
    approvalStatus: 'APPROVED',
    tag: { en: 'Colorized Evaluación M m + Red Key', es: 'Evaluación M m Coloreada + Clave Roja' },
    title: {
      en: 'Colorized Reproducible Assessment (“Evaluación M m”) & Red-Ink Teacher Key',
      es: 'Evaluación Reproducible Coloreada («Evaluación M m») y Clave en Tinta Roja',
    },
    caption: {
      en: 'Colorized from the authentic La-Cartilla_ep_42 evaluation sheet paired with the teacher’s red-ink answer key.',
      es: 'Coloreado a partir de la hoja de evaluación auténtica de La-Cartilla_ep_42 junto con la clave del maestro en tinta roja.',
    },
  },
  {
    id: 'colorized-heritage-covers',
    src: '/assets/aistudio/colorized/heritage-covers-pair.jpg',
    category: 'kit',
    aspect: '4 / 3',
    usedOnPage: 'Prompt Studio & Heritage Comparison',
    approvalStatus: 'APPROVED',
    tag: { en: 'White Teacher’s Guide & Blue Student Book', es: 'Guía Blanca y Libro Azul' },
    title: {
      en: 'Classic White-Cover Edition & Official Blue Student Book Side-by-Side',
      es: 'Edición Clásica de Portada Blanca y Libro del Alumno Azul Lado a Lado',
    },
    caption: {
      en: 'Pairs the original white La Cartilla de Gretel cover from La-Cartilla_ep_42 with the current royal-blue hardcover Student Book.',
      es: 'Reúne la portada blanca original de La-Cartilla_ep_42 con la portada azul rey actual del Libro del Alumno.',
    },
  },
  {
    id: 'poster-aprendamos',
    src: '/assets/aistudio/image-gen-3_20261030-070235__9b3e6495.png',
    category: 'posters',
    aspect: '3 / 4',
    usedOnPage: 'Page 1 — Cover',
    approvalStatus: 'APPROVED',
    tag: { en: 'Page 1 Cover Hero', es: 'Portada Página 1' },
    title: {
      en: '“Aprendamos a leer” — Classroom Desk Edition (Official Open-Book Logo)',
      es: '«Aprendamos a leer» — Edición de Aula (Logo Oficial de Libro Abierto)',
    },
    caption: {
      en: 'Gretel presenting the official 92-page Student Book in a sunlit classroom with the official LANY Books open-book emblem.',
      es: 'Gretel presentando el Libro del Alumno oficial de 92 páginas en el salón de clases con el sello oficial de LANY Books.',
    },
  },
  {
    id: 'classroom-welcome',
    src: '/assets/aistudio/classroom-welcome-gretel.jpg',
    category: 'classroom',
    aspect: '3 / 4',
    usedOnPage: 'Page 2 — The Program at a Glance',
    approvalStatus: 'APPROVED',
    tag: { en: 'Page 2 Classroom Scene', es: 'Escena Escolar Página 2' },
    title: {
      en: '“Bienvenidos a la escuela” — Classroom Welcome with Student Book',
      es: '«Bienvenidos a la escuela» — Bienvenida al Aula con el Libro del Alumno',
    },
    caption: {
      en: 'Warm classroom welcome showcasing the physical La Cartilla de Gretel workbook in front of the welcome blackboard.',
      es: 'Cálida bienvenida al salón de clases mostrando el ejemplar físico de La Cartilla de Gretel frente al pizarrón.',
    },
  },
  {
    id: 'classroom-chalkboard',
    src: '/assets/aistudio/classroom-chalkboard-abc.jpg',
    category: 'classroom',
    aspect: '3 / 4',
    usedOnPage: 'Page 3 — Learning Progression',
    approvalStatus: 'APPROVED',
    tag: { en: 'Page 3 Progression Scene', es: 'Progresión Página 3' },
    title: {
      en: 'Active Letter & Sound Recognition at the Chalkboard (A, B, C)',
      es: 'Reconocimiento Activo de Letras y Sonidos en el Pizarrón (A, B, C)',
    },
    caption: {
      en: 'Student practicing letterforms at the classroom chalkboard while holding the physical Student Workbook.',
      es: 'Alumna practicando el trazo de letras en el pizarrón mientras sostiene el Libro del Alumno físico.',
    },
  },
  {
    id: 'poster-primeras-letras',
    src: '/assets/aistudio/image-gen-4_20261030-090157__4d8ebddd.png',
    category: 'posters',
    aspect: '3 / 4',
    usedOnPage: 'Page 4 — The Flipchart',
    approvalStatus: 'APPROVED',
    tag: { en: 'Page 4 Flipchart & Easel', es: 'Rotafolio Página 4' },
    title: {
      en: '“Primeras letras” — A, B, C Easel Instruction',
      es: '«Primeras letras» — Enseñanza en Pizarra y Caballete',
    },
    caption: {
      en: 'Interactive sound-symbol association at the classroom easel with the authentic La Cartilla de Gretel Student Book.',
      es: 'Asociación fonética visual y auditiva frente al grupo con el Libro del Alumno de La Cartilla de Gretel.',
    },
  },
  {
    id: 'poster-cada-pagina-easel',
    src: '/assets/aistudio/image-gen-6_20261030-090159__c9217af0.png',
    category: 'posters',
    aspect: '3 / 4',
    usedOnPage: 'Page 4 — The Flipchart',
    approvalStatus: 'APPROVED',
    tag: { en: 'Page 4 Tabletop Easel', es: 'Atril de Mesa Página 4' },
    title: {
      en: '“Cada página cuenta” — Tabletop Easel & Values',
      es: '«Cada página cuenta» — Lectura, Valores y Creatividad',
    },
    caption: {
      en: 'Showcasing the physical Student Workbook on a wooden tabletop easel alongside LANY Books branding.',
      es: 'Presentación del Libro del Alumno en atril de madera junto con los pilares de Lectura, Valores, Naturaleza y Creatividad.',
    },
  },
  {
    id: 'poster-cada-pagina-desk',
    src: '/assets/aistudio/cada-pagina-cuenta-desk.jpg',
    category: 'posters',
    aspect: '3 / 4',
    usedOnPage: 'Page 5 — The Student Book',
    approvalStatus: 'APPROVED',
    tag: { en: 'Page 5 Student Book', es: 'Libro del Alumno Página 5' },
    title: {
      en: '“Cada página cuenta” — Student Desk Edition',
      es: '«Cada página cuenta» — Edición de Pupitre Escolar',
    },
    caption: {
      en: 'Clean verified edition showing Gretel at her desk with the 92-page Libro del alumno and the LANY Books open-book badge.',
      es: 'Edición verificada que muestra a Gretel en su pupitre con el Libro del Alumno de 92 páginas y el sello limpio de LANY Books.',
    },
  },
  {
    id: 'classroom-writing-desk',
    src: '/assets/aistudio/image-gen-3_20261030-050212__d060f899.png',
    category: 'classroom',
    aspect: '3 / 4',
    usedOnPage: 'Page 5 — The Student Book',
    approvalStatus: 'APPROVED',
    tag: { en: 'Page 5 Handwriting Practice', es: 'Escritura Página 5' },
    title: {
      en: 'Guided Letter-Formation & Handwriting Practice at the Desk',
      es: 'Práctica Guiada de Caligrafía y Escritura en el Pupitre',
    },
    caption: {
      en: 'Every lesson in the 92-page Student Book integrates reading decoding with print and cursive writing.',
      es: 'Cada lección del Libro del Alumno de 92 páginas integra la lectura con la escritura en letra de molde y cursiva.',
    },
  },
  {
    id: 'poster-leer-juntos',
    src: '/assets/aistudio/image-gen-5_20261030-070236__d664398d.png',
    category: 'posters',
    aspect: '3 / 4',
    usedOnPage: 'Page 6 — Reproducible & Teacher Materials',
    approvalStatus: 'APPROVED',
    tag: { en: 'Page 6 Family Reinforcement', es: 'Lectura en Familia Página 6' },
    title: {
      en: '“Leer juntos — Momentos que inspiran”',
      es: '«Leer juntos — Momentos que inspiran»',
    },
    caption: {
      en: 'Connecting classroom phonics with warm family reading and bilingual take-home practice.',
      es: 'Uniendo la enseñanza fonética del aula con momentos de lectura compartida en el hogar.',
    },
  },
  {
    id: 'poster-descubre-4kids',
    src: '/assets/aistudio/image-gen-8_20261030-090201__c5718b40.png',
    category: 'posters',
    aspect: '3 / 4',
    usedOnPage: 'Page 8 — In the Classroom',
    approvalStatus: 'APPROVED',
    tag: { en: 'Page 8 Circle Time', es: 'Círculo de Lectura Página 8' },
    title: {
      en: '“Descubre, lee y aprende” — Group Reading Circle',
      es: '«Descubre, lee y aprende» — Lectura Grupal en el Aula',
    },
    caption: {
      en: 'Students gathered on the classroom rug discovering Spanish vowels, syllables, and stories together.',
      es: 'Niños reunidos en la alfombra del salón descubriendo las vocales, sílabas y poemas en español.',
    },
  },
  {
    id: 'classroom-reading-desk',
    src: '/assets/aistudio/classroom-reading-desk.jpg',
    category: 'classroom',
    aspect: '3 / 4',
    usedOnPage: 'Page 8 — In the Classroom',
    approvalStatus: 'APPROVED',
    tag: { en: 'Page 8 Independent Reading', es: 'Lectura en Pupitre Página 8' },
    title: {
      en: 'Focused Student Reading with the Open Workbook',
      es: 'Lectura Concentrada con el Libro del Alumno Abierto',
    },
    caption: {
      en: 'Student reading an illustrated spread of La Cartilla de Gretel at her classroom desk.',
      es: 'Alumna leyendo una página ilustrada de La Cartilla de Gretel en su pupitre.',
    },
  },
  {
    id: 'poster-lectura-florece',
    src: '/assets/aistudio/image-gen-8_20261030-070240__c26e2a01.png',
    category: 'posters',
    aspect: '3 / 4',
    usedOnPage: 'Page 9 — Modern LANY Books Ecosystem',
    approvalStatus: 'APPROVED',
    tag: { en: 'Page 9 Ecosystem Poster', es: 'Ecosistema Página 9' },
    title: {
      en: '“La lectura florece” — School Garden Bench',
      es: '«La lectura florece» — Jardín de la Escuela',
    },
    caption: {
      en: 'Vibrant LANY Books artwork celebrating confident Spanish readers blossoming outside the schoolhouse.',
      es: 'Arte colorido de LANY Books que celebra cómo florece la lectura en español en cada niño.',
    },
  },
  {
    id: 'poster-creciendo-cada-libro',
    src: '/assets/aistudio/image-gen-8_20261030-080503__95b6b43f.png',
    category: 'posters',
    aspect: '3 / 4',
    usedOnPage: 'Page 9 — Modern LANY Books Ecosystem',
    approvalStatus: 'APPROVED',
    tag: { en: 'Page 9 Brand Identity', es: 'Identidad LANY Books Página 9' },
    title: {
      en: '“Creciendo con cada libro” — Library Steps Showcase',
      es: '«Creciendo con cada libro» — Escalinata de Biblioteca',
    },
    caption: {
      en: 'Connecting the classic Cartilla heritage with the modern LANY Books publishing imprint.',
      es: 'Conectando la herencia pedagógica de la Cartilla con el sello editorial moderno LANY Books.',
    },
  },
  {
    id: 'poster-mundo-lectura-walk',
    src: '/assets/aistudio/un-mundo-de-lectura-walk.jpg',
    category: 'posters',
    aspect: '3 / 4',
    usedOnPage: 'Page 10 — Call to Action',
    approvalStatus: 'APPROVED',
    tag: { en: 'Page 10 Call to Action', es: 'Llamado a la Acción Página 10' },
    title: {
      en: '“Un mundo de lectura” — Walking to School (Verified Clean Badge)',
      es: '«Un mundo de lectura» — Camino a la Escuela (Insignia Verificada)',
    },
    caption: {
      en: 'Selected after duplicate audit for its crisp, accurate LANY Books open-book badge and authentic workbook cover.',
      es: 'Seleccionado tras la auditoría de duplicados por su insignia limpia de LANY Books y portada auténtica.',
    },
  },
  {
    id: 'poster-historias-wooden-chair',
    src: '/assets/aistudio/colorized/heritage-covers-pair.jpg',
    category: 'kit',
    aspect: '4 / 3',
    usedOnPage: 'Page 2 — The Program at a Glance',
    approvalStatus: 'APPROVED',
    tag: { en: 'Authentic Edition Covers', es: 'Portadas Auténticas' },
    title: {
      en: 'Classic White Edition & 92-Page Royal-Blue Student Book Covers',
      es: 'Portadas Auténticas: Edición Blanca Clásica y Libro del Alumno de 92 Páginas',
    },
    caption: {
      en: '100% pixel-faithful studio presentation of the classic white La Cartilla de Gretel cover and the royal-blue Libro del alumno cover.',
      es: 'Presentación de estudio 100% fiel de la portada blanca clásica y la portada azul rey del Libro del Alumno.',
    },
  },
  {
    id: 'poster-historias-puppy',
    src: '/assets/aistudio/image-gen-2_20261030-080456__785d07cf.png',
    category: 'posters',
    aspect: '3 / 4',
    usedOnPage: 'Gallery & Home Reading Showcase',
    approvalStatus: 'APPROVED',
    tag: { en: 'Home Reading Poster', es: 'Lectura en Casa' },
    title: {
      en: '“Historias para descubrir” — Cozy Reading Nook',
      es: '«Historias para descubrir» — Rincón de Lectura',
    },
    caption: {
      en: 'Warm storybook aesthetics pairing the physical Libro del alumno with independent reading at home.',
      es: 'Estética cálida de cuento que acompaña la lectura independiente en casa con el Libro del Alumno.',
    },
  },
  {
    id: 'poster-historias-teacup',
    src: '/assets/aistudio/image-gen-2_20261030-090155__ff6e3594.png',
    category: 'posters',
    aspect: '3 / 4',
    usedOnPage: 'Gallery & Editorial Showcase',
    approvalStatus: 'APPROVED',
    tag: { en: 'Storybook Armchair Edition', es: 'Edición Sillón de Lectura' },
    title: {
      en: '“Historias para descubrir” — Editorial Reading Portrait',
      es: '«Historias para descubrir» — Retrato Editorial de Lectura',
    },
    caption: {
      en: 'Refined LANY Books editorial presentation of the 92-page Student Book.',
      es: 'Presentación editorial refinada de LANY Books del Libro del Alumno de 92 páginas.',
    },
  },
  {
    id: 'classroom-teacher-circle-1',
    src: '/assets/aistudio/image-gen-5_20261030-050214__5559897d.png',
    category: 'classroom',
    aspect: '3 / 4',
    usedOnPage: 'Page 8 — In the Classroom',
    approvalStatus: 'APPROVED',
    tag: { en: 'Teacher Circle Time', es: 'Lectura Guiada por la Maestra' },
    title: {
      en: 'Teacher-Led Story & Phonics Circle in the Classroom',
      es: 'Círculo de Lectura y Fonética Guiado por la Maestra',
    },
    caption: {
      en: 'Educator sharing La Cartilla de Gretel with attentive Kindergarten and 1st grade students.',
      es: 'Docente compartiendo La Cartilla de Gretel con alumnos atentos de Kindergarten y 1.º grado.',
    },
  },
  {
    id: 'classroom-teacher-circle-2',
    src: '/assets/aistudio/image-gen-3_20261030-053223__aa556643.png',
    category: 'classroom',
    aspect: '3 / 4',
    usedOnPage: 'Page 8 — In the Classroom',
    approvalStatus: 'APPROVED',
    tag: { en: 'Small-Group Instruction', es: 'Enseñanza en Grupo Pequeño' },
    title: {
      en: 'Interactive Small-Group Reading Session',
      es: 'Sesión Interactiva de Lectura en Grupo Pequeño',
    },
    caption: {
      en: 'Students raising their hands and participating during a phonetic reading lesson.',
      es: 'Alumnos levantando la mano y participando activamente durante la lección fonética.',
    },
  },
  {
    id: 'classroom-teacher-one-on-one',
    src: '/assets/aistudio/image-gen-6_20261030-053225__a4de1333.png',
    category: 'classroom',
    aspect: '3 / 4',
    usedOnPage: 'Page 3 — Learning Progression',
    approvalStatus: 'APPROVED',
    tag: { en: 'One-on-One Guidance', es: 'Acompañamiento Individual' },
    title: {
      en: 'Teacher & Student One-on-One Reading Practice',
      es: 'Práctica de Lectura Individual entre Maestra y Alumna',
    },
    caption: {
      en: 'Direct instructional support using the physical 92-page Student Workbook.',
      es: 'Apoyo docente directo utilizando el Libro del Alumno físico de 92 páginas.',
    },
  },
  {
    id: 'classroom-easel-stand',
    src: '/assets/aistudio/image-gen-7_20261030-053226__6ae1919f.png',
    category: 'classroom',
    aspect: '3 / 4',
    usedOnPage: 'Page 7 — Complete Physical Experience',
    approvalStatus: 'APPROVED',
    tag: { en: 'Classroom Easel Display', es: 'Exhibición en Atril de Aula' },
    title: {
      en: 'Classroom Easel & Student Book Presentation',
      es: 'Presentación en Caballete de Aula y Libro del Alumno',
    },
    caption: {
      en: 'Demonstrating how the standing easel and student book anchor the classroom environment.',
      es: 'Demostración de cómo el caballete y el libro del alumno estructuran el ambiente del salón.',
    },
  },
  {
    id: 'cover-hd-master',
    src: '/images/gretel/wb-cover-hd.webp',
    category: 'kit',
    aspect: '3 / 4',
    usedOnPage: 'Pages 1, 2 & 5 — Official Cover',
    approvalStatus: 'APPROVED',
    tag: { en: 'Official Book Cover', es: 'Portada Oficial del Libro' },
    title: {
      en: 'La Cartilla de Gretel — Official 92-Page Student Book Cover',
      es: 'La Cartilla de Gretel — Portada Oficial del Libro del Alumno (92 Páginas)',
    },
    caption: {
      en: 'Authentic high-resolution cover artwork by Estela de Armas Plasencia for author Leonor Lopetegui.',
      es: 'Arte de portada auténtico en alta resolución por Estela de Armas Plasencia para la autora Leonor Lopetegui.',
    },
  },
  {
    id: 'poster-mundo-lectura-wave-review',
    src: '/assets/aistudio/image-gen-3_20261030-080458__f15ffa14.png',
    category: 'posters',
    aspect: '3 / 4',
    usedOnPage: 'Duplicate Audit Archive (REVIEW REQUIRED)',
    approvalStatus: 'REVIEW REQUIRED',
    tag: { en: 'REVIEW REQUIRED · Badge Variant', es: 'REVIEW REQUIRED · Variante de Insignia' },
    title: {
      en: '“Un mundo de lectura” — School Steps Variant (Flagged in Duplicate Audit)',
      es: '«Un mundo de lectura» — Variante en Escaleras (Marcada en Auditoría)',
    },
    caption: {
      en: 'Flagged as REVIEW REQUIRED during duplicate comparison because the top-left badge reads "aaNy Books"; superseded on Page 10 by un-mundo-de-lectura-walk.jpg.',
      es: 'Marcada como REVIEW REQUIRED durante la comparación de duplicados porque la insignia superior dice «aaNy Books»; reemplazada en la Página 10 por un-mundo-de-lectura-walk.jpg.',
    },
  },
]

export interface GretelReferenceSample {
  id: string
  code: string
  src: string
  title: { en: string; es: string }
  role: { en: string; es: string }
  whyUseIt: { en: string; es: string }
}

export interface PromptStudioRecipe {
  id: string
  number: string
  title: { en: string; es: string }
  targetBrochurePage: { en: string; es: string }
  referenceCodes: string[]
  originalEp42Crop: string
  originalEp42Label: { en: string; es: string }
  colorizedResult: string
  promptText: string
  whatChanged: { en: string; es: string }
}

export const gretelReferenceSamples: GretelReferenceSample[] = [
  {
    id: 'ref-a',
    code: 'REF A',
    src: '/images/gretel/wb-cover-hd.webp',
    title: {
      en: 'Official 92-Page Student Book Cover (wb-cover-hd.webp)',
      es: 'Portada Oficial del Libro del Alumno de 92 Páginas (wb-cover-hd.webp)',
    },
    role: {
      en: 'Book Cover, Typography & Classic Gretel Illustration Anchor',
      es: 'Ancla de Portada, Tipografía e Ilustración Clásica de Gretel',
    },
    whyUseIt: {
      en: 'Locks in the exact royal-blue cover, yellow-and-red butterfly, Gretel sitting on a wooden stool reading her red book, and the exact title “La cartilla de Gretel — Libro del alumno · Autora: Leonor Lopetegui”.',
      es: 'Fija la portada azul rey exacta, la mariposa amarilla y roja, a Gretel leyendo su libro rojo sobre el banquito y el título exacto «La cartilla de Gretel — Libro del alumno · Autora: Leonor Lopetegui».',
    },
  },
  {
    id: 'ref-b',
    code: 'REF B',
    src: '/assets/aistudio/image-gen-3_20261030-070235__9b3e6495.png',
    title: {
      en: 'Gretel & Official Open-Book LANY Books Emblem (“Aprendamos a leer”)',
      es: 'Gretel y Emblema Oficial de Libro Abierto LANY Books («Aprendamos a leer»)',
    },
    role: {
      en: 'Character Proportions, Dress Embroidery & Official LANY Books Logo Anchor',
      es: 'Ancla de Proporciones del Personaje, Vestido Bordado y Logo Oficial LANY Books',
    },
    whyUseIt: {
      en: 'Preserves Gretel’s red hair bow, orange-red striped sleeves, royal-blue pinafore with orange floral hem, white socks with red dots, and the current open-book LANY Books logo.',
      es: 'Preserva el lazo rojo de Gretel, las mangas a rayas, el vestido azul con flores naranjas en el borde, las medias blancas con puntos rojos y el logo actual de libro abierto de LANY Books.',
    },
  },
  {
    id: 'ref-c',
    code: 'REF C',
    src: '/assets/aistudio/cada-pagina-cuenta-desk.jpg',
    title: {
      en: 'Classroom Tabletop & Standing Easel Lighting Anchor (“Cada página cuenta”)',
      es: 'Ancla de Iluminación Escolar, Pupitre de Madera y Atril («Cada página cuenta»)',
    },
    role: {
      en: 'Warm Editorial Classroom Lighting, Oak Desk Texture & Product Scale Anchor',
      es: 'Ancla de Luz Cálida de Aula, Textura de Madera y Escala Física del Libro',
    },
    whyUseIt: {
      en: 'Establishes the warm sunlit oak tabletop, colored pencils, realistic book shadows, and clean LANY Books placard for photographing worksheets and kit components.',
      es: 'Establece la iluminación cálida sobre madera, lápices de colores, sombras realistas y la tarjeta limpia de LANY Books para presentar hojas y componentes físicos.',
    },
  },
]

export const promptStudioRecipes: PromptStudioRecipe[] = [
  {
    id: 'prompt-01-kit',
    number: 'Prompt 01',
    title: {
      en: 'Complete 11-Piece Physical Classroom Kit (Color Flipchart/Covers + Authentic B&W Interior Pages)',
      es: 'Kit Físico Completo de 11 Piezas (Rotafolio/Portadas a Color + Páginas Interiores Auténticas en B/N)',
    },
    targetBrochurePage: {
      en: 'Page 7 — The Complete Physical Experience & Storefront Kit Showcase',
      es: 'Página 7 — La Experiencia Física Completa y Escaparate del Kit',
    },
    referenceCodes: ['REF A', 'ep42-02 (Flipchart Ee)', 'ep42-04 (B&W Student Pages)'],
    originalEp42Crop: '/assets/aistudio/ep42/ep42-02-flipchart-vowel-e.png',
    originalEp42Label: {
      en: 'Original ep_42 Flipchart & Kit Components List',
      es: 'Rotafolio Original ep_42 y Lista de 11 Componentes',
    },
    colorizedResult: '/assets/aistudio/colorized/kit-11-piece-authentic.jpg',
    promptText:
      'High-resolution studio tabletop product photograph of the complete 11-piece physical "La Cartilla de Gretel" classroom kit on a warm oak table. In the back stand the colorful 17 by 22 inch tabletop flipchart on its blue easel ("La niña sordita" vowel Ee lesson), the royal-blue cover of "La Cartilla de Gretel — Libro del alumno" (Reference Image 1), the classic white cover of the Teacher’s Guide, the royal-blue canvas carrying bag, the Audio CD in its jewel case, and the 5 felt vowel dolls. In the foreground lie the open 92-page Student Book interior pages and the reproducible blackline master worksheets (Syllabic Charts, Homework "P p — Mi papá — Rima 3", and "Evaluación M m" matching Reference Image 3), which are printed strictly in CRISP BLACK INK ON WHITE PAPER (100% black-and-white interior pages and blackline masters with NO color ink on the interior pages or worksheets). Authentic educational publishing photography, sharp black-and-white worksheet line art.',
    whatChanged: {
      en: 'Replaces the synthetic kit flatlay with the colorful 17" × 22" flipchart easel, royal-blue Student Book cover, and 5 felt vowel dolls paired with authentic 100% Black & White interior workbook pages and reproducible blackline masters.',
      es: 'Reemplaza el collage sintético con el rotafolio a color de 17" × 22", la portada azul rey y los 5 muñecos de fieltro junto a las páginas interiores del libro y hojas reproducibles impresas 100% en Blanco y Negro.',
    },
  },
  {
    id: 'prompt-02-student-book',
    number: 'Prompt 02',
    title: {
      en: 'Authentic Black & White 92-Page Student Book Interior Spread (Vowel E e Grid & o, a, i, e, u Matching)',
      es: 'Páginas Interiores Físicas en Blanco y Negro del Libro del Alumno (Cuadrícula E e y Asociación o, a, i, e, u)',
    },
    targetBrochurePage: {
      en: 'Page 5 — The Student Book (92 Black & White Interior Pages)',
      es: 'Página 5 — El Libro del Alumno (92 Páginas Interiores en Blanco y Negro)',
    },
    referenceCodes: ['ep42-04 (Student Book B&W Scan)', 'REF C'],
    originalEp42Crop: '/assets/aistudio/ep42/ep42-04-student-book-pages.png',
    originalEp42Label: {
      en: 'Original ep_42 Student Book B&W Interior Scan',
      es: 'Escaneo Original ep_42 en B/N del Interior del Libro del Alumno',
    },
    colorizedResult: '/assets/aistudio/colorized/student-book-pages-colorized.jpg',
    promptText:
      'High-resolution overhead studio photograph of the open 92-page "La Cartilla de Gretel — Libro del alumno" workbook resting on a natural oak classroom desk, faithfully reproducing Reference Image 1 in authentic BLACK AND WHITE printing (100% black ink on crisp white paper, NO color ink anywhere on the pages). The left page shows the uppercase and lowercase "E e" header above a 4x3 grid of 12 black-and-white line-art vocabulary drawings (estrella, elefante, espejo, escoba, erizo, embudo) for students to identify and color; the right page shows five black-and-white line-art drawings on the left connected by pencil lines to the lowercase vowels "o, a, i, e, u" on the right, with handwriting lines below. A wooden pencil rests beside the open black-and-white workbook. Crisp paper texture, authentic black-and-white interior pages.',
    whatChanged: {
      en: 'Preserves the authentic Black & White printing of the 92 physical workbook pages so students can mark with an X, draw matching lines, write on the handwriting rules, and color the line-art illustrations themselves.',
      es: 'Preserva fielmente la impresión en Blanco y Negro de las 92 páginas físicas del libro para que los alumnos marquen con una X, tracen líneas, escriban y coloreen los dibujos.',
    },
  },
  {
    id: 'prompt-03-syllabic-charts',
    number: 'Prompt 03',
    title: {
      en: 'Authentic Black & White Reproducible Syllabic & Vowel Charts (Blackline Masters)',
      es: 'Tableros Reproducibles de Vocales y Sílabas en Blanco y Negro (Blackline Masters)',
    },
    targetBrochurePage: {
      en: 'Page 6 — Reproducible Blackline Masters and Teacher Materials',
      es: 'Página 6 — Originales Reproducibles en Blanco y Negro y Materiales del Maestro',
    },
    referenceCodes: ['ep42-05 (Syllabic Charts B&W Scan)', 'REF C'],
    originalEp42Crop: '/assets/aistudio/ep42/ep42-05-syllabic-charts.png',
    originalEp42Label: {
      en: 'Original ep_42 B&W Reproducible Vowel & Syllabic Charts Scan',
      es: 'Escaneo Original ep_42 en B/N de los Tableros Reproducibles',
    },
    colorizedResult: '/assets/aistudio/colorized/syllabic-charts-colorized.jpg',
    promptText:
      'High-resolution overhead studio photograph of the two authentic "La Cartilla de Gretel" Reproducible Blackline Master Vowel and Syllabic Charts resting on a natural oak classroom table, faithfully reproducing Reference Image 1 in 100% BLACK AND WHITE printing (crisp black ink on white paper, NO color ink on the sheets). The upper-left black-and-white sheet shows the five dashed cut-out vowel boxes "a, e, i, o, u" with a black-and-white line-art student vignette; the lower-right black-and-white sheet shows the word-bank box ("mamá, amo, Mumi, mima, Meme, Memo") and four numbered fill-in-the-blank Spanish sentences ("1. Mamá me ama.", "2. Memo ama a Mumi.", "3. Mi mamá mima a Memo.", "4. Memo y Mumi aman a mamá.") with a black-and-white line-art mother-and-child illustration. Authentic blackline master photocopy sheets.',
    whatChanged: {
      en: 'Displays the authentic Black & White blackline master sheets engineered for clean classroom photocopying, cut-and-paste vowel practice (a, e, i, o, u), and sentence completion.',
      es: 'Muestra las hojas maestras originales en Blanco y Negro diseñadas para fotocopiar limpiamente en el aula, recortar vocales (a, e, i, o, u) y completar oraciones.',
    },
  },
  {
    id: 'prompt-04-homework',
    number: 'Prompt 04',
    title: {
      en: 'Authentic Black & White Bilingual Reproducible Homework (“P p — Mi papá · Rima 3”) + Audio CD',
      es: 'Tarea Reproducible Bilingüe en Blanco y Negro («P p — Mi papá · Rima 3») + CD de Audio',
    },
    targetBrochurePage: {
      en: 'Page 6 & Page 7 — Home Reinforcement Showcase',
      es: 'Página 6 y Página 7 — Refuerzo Bilingüe en el Hogar',
    },
    referenceCodes: ['ep42-06 (Homework Rima 3 B&W Scan)', 'ep42-07 (Evaluation M m B&W Scan)'],
    originalEp42Crop: '/assets/aistudio/ep42/ep42-06-reproducible-homework.png',
    originalEp42Label: {
      en: 'Original ep_42 B&W Reproducible Homework Scan (Rima 3)',
      es: 'Escaneo Original ep_42 en B/N de la Tarea Reproducible (Rima 3)',
    },
    colorizedResult: '/assets/aistudio/colorized/homework-rima3-colorized.jpg',
    promptText:
      'High-resolution overhead studio photograph of the authentic black-and-white "La Cartilla de Gretel" Reproducible Bilingual Homework sheet ("P p — Mi papá — Rima 3", Reference Image 1) and the authentic black-and-white Reproducible Evaluation sheet ("Evaluación M m", Reference Image 2) resting side by side on a warm oak classroom desk alongside the physical Audio CD in a clear jewel case. Both printed sheets are 100% BLACK AND WHITE reproducible blackline masters (crisp black ink on white paper, NO color ink on the worksheets). Left sheet shows bilingual Spanish/English parent instructions, "P p", "Mi papá: Yo amo a Pupi, yo amo a papá, Papá me ama a mí y a mamá. — Rima 3"; right sheet shows "Completa la oración con una palabra del rectángulo" ("mamá, amo, Mumi, mima, Meme, Memo") and 4 numbered evaluation sentences. Authentic educational publishing photography.',
    whatChanged: {
      en: 'Presents the authentic Black & White bilingual homework blackline master (“P p — Mi papá — Rima 3”) paired with the physical Audio CD of flipchart poems.',
      es: 'Presenta el original reproducible en Blanco y Negro de la tarea bilingüe («P p — Mi papá — Rima 3») junto con el CD de audio físico de los poemas.',
    },
  },
  {
    id: 'prompt-05-evaluations',
    number: 'Prompt 05',
    title: {
      en: 'Authentic Black & White Reproducible Evaluation & Teacher Answer Key (“Evaluación M m”)',
      es: 'Evaluación Reproducible y Clave del Maestro en Blanco y Negro («Evaluación M m»)',
    },
    targetBrochurePage: {
      en: 'Page 6 — Reproducible Blackline Masters and Teacher Materials',
      es: 'Página 6 — Originales Reproducibles en Blanco y Negro y Materiales del Maestro',
    },
    referenceCodes: ['ep42-07 (Evaluation M m B&W Scan)', 'REF C'],
    originalEp42Crop: '/assets/aistudio/ep42/ep42-07-reproducible-evaluations.png',
    originalEp42Label: {
      en: 'Original ep_42 B&W Evaluation M m Scan',
      es: 'Escaneo Original ep_42 en B/N de la Evaluación M m',
    },
    colorizedResult: '/assets/aistudio/colorized/evaluations-mm-colorized.jpg',
    promptText:
      'High-resolution overhead studio photograph of the authentic black-and-white "La Cartilla de Gretel" Reproducible Evaluation sheet ("Evaluación M m", Reference Image 1) resting on a natural oak teacher’s desk alongside its matching black-and-white printed Teacher’s Answer Key sheet. Both physical sheets are 100% BLACK AND WHITE reproducible blackline masters (crisp black ink on white paper, NO color ink or colored banners on the sheets). The student sheet shows "Nombre ___ Fecha ___", "Completa la oración con una palabra del rectángulo.", the rectangular word bank box ("mamá, amo, Mumi, mima, Meme, Memo"), and four numbered fill-in-the-blank evaluation sentences ("1- Mamá me ___.", "2- Meme ama a ___.", "3- Mi ___ ama a Memo.", "4- Memo y Mumi aman a ___.", "Evaluación M m"). Authentic educational publishing photography.',
    whatChanged: {
      en: 'Shows both the student “Evaluación M m” sheet and the Teacher’s Answer Key as authentic 100% Black & White reproducible blackline masters on white paper.',
      es: 'Muestra tanto la hoja «Evaluación M m» del alumno como la Clave de Respuestas del Maestro como originales reproducibles 100% en Blanco y Negro.',
    },
  },
  {
    id: 'prompt-06-heritage-covers',
    number: 'Prompt 06',
    title: {
      en: 'Full-Color Covers: Classic White-Cover Guide & Official Royal-Blue Student Book Pair',
      es: 'Portadas a Color: Guía Clásica de Portada Blanca y Libro del Alumno Azul Rey Lado a Lado',
    },
    targetBrochurePage: {
      en: 'Page 2 & Page 7 — Heritage & Teacher’s Guide Comparison',
      es: 'Página 2 y Página 7 — Comparativa Histórica y Guía del Maestro',
    },
    referenceCodes: ['ep42-01 (Original White Cover)', 'REF A', 'REF B'],
    originalEp42Crop: '/assets/aistudio/ep42/ep42-01-original-cover.png',
    originalEp42Label: {
      en: 'Original ep_42 White Cover Scan',
      es: 'Escaneo Original ep_42 de la Portada Blanca',
    },
    colorizedResult: '/assets/aistudio/colorized/heritage-covers-pair.jpg',
    promptText:
      "High-resolution studio product photograph pairing the two authentic 'La Cartilla de Gretel' editions from the first and second reference images side by side on a warm cream editorial surface with soft natural shadows: on the left, the classic white-cover Teacher's Guide ('La Cartilla de Gretel' in bold black serif type at top left, yellow-and-red butterfly, and classic colorized illustration of blonde Gretel with a red hair bow sitting on a small wooden stool reading a red book in a flower patch); on the right, the royal-blue hardcover Student Book ('La cartilla de Gretel — Libro del alumno' by Leonor Lopetegui) with the official open-book LANY Books emblem. Crisp studio lighting, realistic bookbinding texture.",
    whatChanged: {
      en: 'Connects the heritage white cover from the original webpage directly with the modernized royal-blue LANY Books Student Book edition (while interior pages remain B&W).',
      es: 'Conecta directamente la portada blanca histórica de la página original con la edición moderna azul rey de LANY Books (mientras que las páginas interiores son en Blanco y Negro).',
    },
  },
]

