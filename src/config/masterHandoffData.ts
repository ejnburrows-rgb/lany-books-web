export type BrochureStyleId = 'editorial-classic' | 'gallery-crisp' | 'classroom-heritage'
export type ApprovalStatus = 'pending' | 'approved' | 'changes-requested' | 'rejected'

export interface BrochureStyleOption {
  id: BrochureStyleId
  recommended?: boolean
  name: { en: string; es: string }
  subtitle: { en: string; es: string }
  palette: {
    canvas: string
    surface: string
    ink: string
    muted: string
    primary: string
    accent: string
    border: string
  }
  rationale: { en: string; es: string }
}

export interface SevenPageBrochureSection {
  pageNumber: number
  sectionId: string
  kicker: { en: string; es: string }
  title: { en: string; es: string }
  subtitle: { en: string; es: string }
  lead: { en: string; es: string }
  bodyParagraphs: { en: string[]; es: string[] }
  keyPoints: {
    label: { en: string; es: string }
    detail: { en: string; es: string }
  }[]
  curriculumExamples?: {
    title: { en: string; es: string }
    items: string[]
    note: { en: string; es: string }
  }
  primaryImage: {
    src: string
    secondarySrc?: string
    alt: { en: string; es: string }
    caption: { en: string; es: string }
    sourceRecord: string
  }
  availabilityNote?: { en: string; es: string }
}

export interface WebsiteConceptItem {
  id: string
  number: number
  title: { en: string; es: string }
  proposedHeadlineEs: string
  proposedHeadlineEn: string
  supportingCopy: { en: string; es: string }
  emphasis: { en: string; es: string }
  proposedPlacement: {
    sectionHash: string
    sectionName: { en: string; es: string }
    integrationStrategy: { en: string; es: string }
  }
  lifestyleBackdropSrc: string
  authenticProductAssets: {
    src: string
    label: { en: string; es: string }
    sourcePath: string
  }[]
  isConceptualDigitalPreview?: boolean
  conceptDisclaimer?: { en: string; es: string }
}

export interface AuthenticityComparisonItem {
  id: string
  title: { en: string; es: string }
  category: { en: string; es: string }
  originalSrc: string
  restoredSrc: string
  sourceFileRecord: string
  originalPdfPage: string
  restorationActions: { en: string[]; es: string[] }
  preservedElements: { en: string; es: string }
}

export const OFFICIAL_LOGO_PATH = '/images/gretel/logo-open-book.png'
export const VERIFIED_BLUE_COVER_PATH = '/images/gretel/wb-cover-hd.webp'
export const RESTORED_BLUE_COVER_PATH = '/assets/aistudio/restored/wb-cover-restored.png'

export const BROCHURE_STYLES: BrochureStyleOption[] = [
  {
    id: 'editorial-classic',
    recommended: true,
    name: {
      en: 'Style A — LANY Editorial Classic (Recommended)',
      es: 'Estilo A — Clásico Editorial LANY (Recomendado)',
    },
    subtitle: {
      en: 'Archival warm cream canvas, LANY cobalt-blue & sunny-gold hierarchy, Fraunces editorial serif + Plus Jakarta Sans prose',
      es: 'Lienzo crema cálido de archivo, jerarquía azul cobalto y dorado sol de LANY, serif editorial Fraunces + prosa Plus Jakarta Sans',
    },
    palette: {
      canvas: '#FBF9F5',
      surface: '#FFFFFF',
      ink: '#0F172A',
      muted: '#475569',
      primary: '#12489C',
      accent: '#D97706',
      border: '#E2E8F0',
    },
    rationale: {
      en: 'Pairs the exact cobalt blue (#12489C) of the authentic Student Workbook and the warm gold of the LANY Books open-book logo with a calm archival paper backdrop (#FBF9F5) that makes both full-color covers and restored black-and-white worksheets look crisp, authoritative, and warm.',
      es: 'Combina el azul cobalto exacto (#12489C) del Libro del alumno auténtico y el dorado cálido del logotipo de LANY Books con un fondo de papel editorial (#FBF9F5) que hace lucir nítidas y elegantes tanto las portadas a color como las hojas reproducibles en blanco y negro.',
    },
  },
  {
    id: 'gallery-crisp',
    name: {
      en: 'Style B — Contemporary Gallery Crisp',
      es: 'Estilo B — Galería Contemporánea Nítida',
    },
    subtitle: {
      en: 'Pure gallery white canvas, deep ink typography, architectural hairline rules, and high-contrast curriculum plates',
      es: 'Lienzo blanco puro de galería, tipografía en tinta profunda, líneas arquitectónicas finas y láminas de alto contraste',
    },
    palette: {
      canvas: '#FFFFFF',
      surface: '#F8FAFC',
      ink: '#090D16',
      muted: '#52525B',
      primary: '#0F3D8A',
      accent: '#E11D48',
      border: '#CBD5E1',
    },
    rationale: {
      en: 'Maximizes white-paper contrast for district curriculum committees and print reproduction, framing each restored worksheet and flipchart easel like an exhibition plate.',
      es: 'Maximiza el contraste sobre papel blanco para comités curriculares y reproducción impresa, enmarcando cada hoja restaurada y rotafolio como una lámina de exhibición.',
    },
  },
  {
    id: 'classroom-heritage',
    name: {
      en: 'Style C — Warm Classroom Heritage',
      es: 'Estilo C — Herencia Cálida del Aula',
    },
    subtitle: {
      en: 'Sunlit parchment background, cobalt & emerald instructional accents, and step-by-step teacher callouts',
      es: 'Fondo pergamino iluminado, acentos didácticos en cobalto y esmeralda, y recuadros paso a paso para el maestro',
    },
    palette: {
      canvas: '#FDF8EE',
      surface: '#FFFFFF',
      ink: '#1E293B',
      muted: '#64748B',
      primary: '#12489C',
      accent: '#059669',
      border: '#E5DCCB',
    },
    rationale: {
      en: 'Emphasizes warmth and early-childhood approachability for K–2 teachers and parents while keeping every product photograph and worksheet 100% authentic.',
      es: 'Destaca la calidez y cercanía para maestros de K–2 y familias, manteniendo cada fotografía de producto y hoja de trabajo 100 % auténtica.',
    },
  },
]

export const SEVEN_PAGE_BROCHURE: SevenPageBrochureSection[] = [
  {
    pageNumber: 1,
    sectionId: 'page-1-cover',
    kicker: {
      en: 'PAGE 1 OF 7 · OFFICIAL CURRICULUM PUBLICATION',
      es: 'PÁGINA 1 DE 7 · PUBLICACIÓN OFICIAL DEL PROGRAMA',
    },
    title: {
      en: 'La Cartilla de Gretel',
      es: 'La Cartilla de Gretel',
    },
    subtitle: {
      en: 'Structured Phonetic Program for Beginning Reading and Writing in Spanish (Kindergarten – Grade 2)',
      es: 'Programa Fonético Estructurado para la Lectura y Escritura Inicial en Español (Kindergarten – 2.º Grado)',
    },
    lead: {
      en: 'Created by educator Leonor Lopetegui and published by LANY Books LLC, La Cartilla de Gretel guides young learners from their very first vowel sounds to complete syllables, words, sentences, and original children’s poems.',
      es: 'Creado por la educadora Leonor Lopetegui y publicado por LANY Books LLC, La Cartilla de Gretel guía a los niños desde los primeros sonidos vocálicos hasta sílabas completas, palabras, oraciones y poemas infantiles originales.',
    },
    bodyParagraphs: {
      en: [
        'Designed specifically for Spanish-language literacy in Kindergarten, First Grade, and Second Grade, the method uses memorable visual-sound associations and a strictly controlled phonetic sequence so students never encounter a letter or sound before it has been formally introduced.',
        'Every physical book cover, flipchart easel page, student workbook exercise, and reproducible blackline master shown in this publication is an authentic, unretouched representation of the original curriculum materials.',
      ],
      es: [
        'Diseñado específicamente para la lectoescritura en español en Kindergarten, Primer Grado y Segundo Grado, el método utiliza asociaciones visuales y auditivas memorables junto con una secuencia fonética estrictamente controlada para que el alumno nunca encuentre una letra o sonido que no haya sido presentado previamente.',
        'Cada portada física, lámina del rotafolio, ejercicio del libro del alumno y hoja reproducible mostrada en esta publicación es una representación auténtica y fiel de los materiales originales del programa.',
      ],
    },
    keyPoints: [
      {
        label: { en: 'Author', es: 'Autora' },
        detail: { en: 'Leonor Lopetegui', es: 'Leonor Lopetegui' },
      },
      {
        label: { en: 'Publisher', es: 'Editorial' },
        detail: {
          en: 'LANY Books LLC (Historical edition: ABC’S Book Supply, Inc. / Editorial Isla)',
          es: 'LANY Books LLC (Edición histórica: ABC’S Book Supply, Inc. / Editorial Isla)',
        },
      },
      {
        label: { en: 'Grade Levels', es: 'Grados Escolares' },
        detail: {
          en: 'Kindergarten, Grade 1, and Grade 2 (adapted to reading readiness)',
          es: 'Kindergarten, 1.er Grado y 2.º Grado (según el nivel de lectura del niño)',
        },
      },
    ],
    primaryImage: {
      src: RESTORED_BLUE_COVER_PATH,
      secondarySrc: '/assets/aistudio/restored/ep42-01-cover-restored.png',
      alt: {
        en: 'Authentic cobalt-blue La Cartilla de Gretel Student Book cover alongside the historical edition cover',
        es: 'Portada auténtica azul cobalto del Libro del alumno de La Cartilla de Gretel junto a la portada de la edición histórica',
      },
      caption: {
        en: 'Fig. 1 — Authentic cobalt-blue Student Workbook (Libro del alumno, 92 pages) and historical program cover by Leonor Lopetegui.',
        es: 'Fig. 1 — Portada auténtica azul cobalto del Libro del alumno (92 páginas) y portada histórica del programa de Leonor Lopetegui.',
      },
      sourceRecord: 'public/images/gretel/wb-cover-hd.webp + public/assets/aistudio/ep42/ep42-01-original-cover.png (Original Brochure Page 1 & Page 2)',
    },
  },
  {
    pageNumber: 2,
    sectionId: 'page-2-method',
    kicker: {
      en: 'PAGE 2 OF 7 · THE PHONETIC READING METHOD & COMPONENTS',
      es: 'PÁGINA 2 DE 7 · EL MÉTODO FONÉTICO DE LECTURA Y COMPONENTES',
    },
    title: {
      en: 'The Reading Method: Controlled Phonetic Progression',
      es: 'El Método de Lectura: Progresión Fonética Controlada',
    },
    subtitle: {
      en: 'From sound-memory associations to syllables, words, sentences, paragraphs, and poems',
      es: 'De las asociaciones de sonido y memoria a sílabas, palabras, oraciones, párrafos y poemas',
    },
    lead: {
      en: 'La Cartilla de Gretel is an easy-to-follow phonetic program that emphasizes the mechanics of reading and writing in Spanish by moving systematically from the simple to the complex.',
      es: 'La Cartilla de Gretel es un programa fonético fácil de seguir que enfatiza la mecánica de la lectura y la escritura en español, avanzando sistemáticamente de lo simple a lo complejo.',
    },
    bodyParagraphs: {
      en: [
        'First, students master the five vowel sounds (a, e, i, o, u) through vivid visual-memory stories. Once the five vowels are secure, consonants are introduced one at a time using visual sound cues and immediately combined with the five vowels to form five open syllables (for example: ma, me, mi, mo, mu).',
        'Because the method is completely controlled, no letters or phonetic sounds appear in any word, sentence, homework rhyme, or evaluation until they have been explicitly taught. High-frequency connector sight words (such as "y") are introduced purposefully so students can build complete sentences, short paragraphs, and rhythmic poems right away.',
      ],
      es: [
        'Primero, los estudiantes dominan los cinco sonidos vocálicos (a, e, i, o, u) mediante historias visuales de asociación y memoria. Una vez afianzadas las cinco vocales, las consonantes se presentan una por una mediante asociaciones visuales y se combinan de inmediato con las cinco vocales para formar cinco sílabas directas (por ejemplo: ma, me, mi, mo, mu).',
        'Al ser un método completamente controlado, ninguna letra ni sonido fonético aparece en palabras, oraciones, rimas de tarea o evaluaciones hasta haber sido enseñado explícitamente. Conectores de uso frecuente (como «y») se integran gradualmente para construir oraciones completas, párrafos breves y poemas.',
      ],
    },
    curriculumExamples: {
      title: {
        en: 'Authentic 6-Step Controlled Sequence (Lesson M m)',
        es: 'Secuencia Controlada Auténtica en 6 Pasos (Lección M m)',
      },
      items: [
        '1. Vocales (a, e, i, o, u) → Asociación auditiva y visual ("eeeee")',
        '2. Consonante M m → Sonido "mmm" (la vaca que hace mmm)',
        '3. Cinco sílabas → ma · me · mi · mo · mu',
        '4. Palabras controladas → mamá · amo · mima · Meme · Mumi · mío',
        '5. Oraciones con conector "y" → "Mi mamá me ama." · "Mamá ama a Meme y a Mumi."',
        '6. Poema completo → "Mi mamá: Mami me ama / amo a mamá / ámame mami / mímame más."',
      ],
      note: {
        en: 'Every word and sentence in Lesson M m uses exclusively the five vowels and the consonant M.',
        es: 'Cada palabra y oración de la Lección M m utiliza exclusivamente las cinco vocales y la consonante M.',
      },
    },
    keyPoints: [
      {
        label: { en: 'Historical Complete Teacher’s Kit (9 Core Components)', es: 'Kit Histórico Completo del Maestro (9 Componentes)' },
        detail: {
          en: '17" × 22" Flipchart & Easel · 92-page Student Book · Reproducible Syllabic & Vowel Charts · Syllabic Answer Key · Reproducible Homework Pages · Audio CD of Flipchart Poems · Reproducible Evaluations · Evaluation Answer Key · Teacher’s Guide & Canvas Carrying Bag (plus 5 Felt Vowel Dolls in complete classroom sets).',
          es: 'Rotafolio de 17" × 22" con caballete · Libro del alumno de 92 páginas · Carteles reproducibles de sílabas y vocales · Clave de respuestas silábicas · Tareas reproducibles · CD de audio de poemas · Evaluaciones reproducibles · Clave de evaluaciones · Guía del maestro y bolsa de lona (más 5 muñecos de fieltro de las vocales en kits completos).',
        },
      },
      {
        label: { en: 'Current LANY Books Storefront Offerings', es: 'Formatos Actuales en LANY Books' },
        detail: {
          en: 'Individual 92-page Student Workbook, 10-Workbook Classroom Pack, and 25-Workbook Classroom Kit with Flipchart & Reproducible Charts (online checkout currently disabled pending final commerce confirmation in OWNER-DECISIONS.md).',
          es: 'Libro del alumno individual de 92 páginas, Paquete de Aula de 10 libros y Kit de Aula de 25 libros con rotafolio y láminas reproducibles (compra en línea deshabilitada temporalmente según OWNER-DECISIONS.md).',
        },
      },
    ],
    primaryImage: {
      src: '/assets/aistudio/colorized/kit-11-piece-authentic.jpg',
      secondarySrc: RESTORED_BLUE_COVER_PATH,
      alt: {
        en: 'Authentic physical components of the La Cartilla de Gretel program',
        es: 'Componentes físicos auténticos del programa La Cartilla de Gretel',
      },
      caption: {
        en: 'Fig. 2 — Authentic program components: 17" × 22" Flipchart easel, 92-page Student Book, Blackline Master charts, homework, evaluations, audio CD, and carrying bag.',
        es: 'Fig. 2 — Componentes físicos auténticos: rotafolio de 17" × 22" con caballete, Libro del alumno de 92 páginas, láminas reproducibles, tareas, evaluaciones, CD y bolsa.',
      },
      sourceRecord: 'Original Brochure Page 2 + public/assets/aistudio/restored/wb-cover-restored.png + ep42-01..07',
    },
    availabilityNote: {
      en: 'Historical vs. Current Kit Notice: The original brochure lists the historical 9-component Teacher’s Kit (including the Audio CD and Folders). Current school and individual inquiries are handled directly through LANY Books while final commercial packaging and pricing are confirmed.',
      es: 'Nota sobre edición histórica y disponibilidad actual: El folleto original describe el Kit del Maestro histórico (incluyendo CD de audio y carpetas). Las consultas actuales de escuelas y familias se atienden directamente en LANY Books.',
    },
  },
  {
    pageNumber: 3,
    sectionId: 'page-3-flipchart',
    kicker: {
      en: 'PAGE 3 OF 7 · WHOLE-CLASS INSTRUCTION',
      es: 'PÁGINA 3 DE 7 · INSTRUCCIÓN GRUPAL EN EL AULA',
    },
    title: {
      en: 'Classroom Flipchart (17" × 22" with Built-In Easel)',
      es: 'Rotafolio del Aula (17" × 22" con Caballete Integrado)',
    },
    subtitle: {
      en: 'Visual-memory sound associations, syllabic combination charts, vocabulary lists, and illustrated poems',
      es: 'Asociaciones visuales de memoria y sonido, cuadros silábicos, vocabulario controlado y poemas ilustrados',
    },
    lead: {
      en: 'Standing on its own built-in tabletop easel, the 17" × 22" Classroom Flipchart is the centerpiece of group instruction, introducing every vowel and consonant through an unforgettable character story.',
      es: 'Sostenido sobre su propio caballete de mesa integrado, el rotafolio de 17" × 22" es el centro de la enseñanza grupal, presentando cada vocal y consonante mediante una historia visual inolvidable.',
    },
    bodyParagraphs: {
      en: [
        'Vowel Memory Association ("La niña sordita" — Letter E e): As shown on the actual flipchart page on the left, the vowel "e" is introduced through a little girl who is hard of hearing and cups her hand to her ear saying "eeeee" when her mother calls her ("-Ee, Ee te he llamado..."). Students immediately connect this visual cue with the phonetic sound /e/ and read the illustrated words elefante, espejo, Ema, estrella, erizo, and escalera.',
        'Consonant & Syllable Progression (Letter M m): Once all five vowels are learned, consonants are introduced in the same visual manner (the cow saying "mmm") and combined with the five vowels to form ma, me, mi, mo, mu, illustrated words (mamá, amo, mima, Meme, Mumi), six complete sentences, and the poem "Mi mamá".',
      ],
      es: [
        'Asociación de Memoria para Vocales («La niña sordita» — Letra E e): Como muestra la lámina real del rotafolio a la izquierda, la vocal «e» se presenta mediante una niña que oye bajito y dice «eeeee» cuando su mamá la llama («-Ee, Ee te he llamado...»). El alumno asocia de inmediato esta imagen con el sonido /e/ y lee las palabras ilustradas elefante, espejo, Ema, estrella, erizo y escalera.',
        'Progresión de Consonantes y Sílabas (Letra M m): Tras dominar las cinco vocales, las consonantes se presentan de forma similar y se unen a las vocales para formar ma, me, mi, mo, mu, palabras ilustradas (mamá, amo, mima, Meme, Mumi), seis oraciones completas y el poema «Mi mamá».',
      ],
    },
    keyPoints: [
      {
        label: { en: 'Vowel Page (E e)', es: 'Lámina de Vocal (E e)' },
        detail: {
          en: 'Poem "La niña sordita" + 6 illustrated initial-sound words: elefante, espejo, Ema, estrella, erizo, escalera.',
          es: 'Poema «La niña sordita» + 6 palabras ilustradas con sonido inicial: elefante, espejo, Ema, estrella, erizo, escalera.',
        },
      },
      {
        label: { en: 'Consonant & Poem Pages (M m)', es: 'Láminas de Consonante y Poema (M m)' },
        detail: {
          en: 'Syllables ma, me, mi, mo, mu + illustrated words (mamá, amo, mima, Meme, Mumi) + 15-word reading table + 6 sentences + poem "Mi mamá".',
          es: 'Sílabas ma, me, mi, mo, mu + palabras ilustradas (mamá, amo, mima, Meme, Mumi) + tabla de 15 palabras + 6 oraciones + poema «Mi mamá».',
        },
      },
    ],
    primaryImage: {
      src: '/assets/aistudio/restored/ep42-02-flipchart-e-restored.png',
      secondarySrc: '/assets/aistudio/restored/ep42-03-flipchart-m-restored.png',
      alt: {
        en: 'Authentic 17x22 Classroom Flipchart pages for Vowel E (La niña sordita) and Consonant M (ma, me, mi, mo, mu)',
        es: 'Páginas auténticas del rotafolio de 17x22 para la vocal E (La niña sordita) y la consonante M (ma, me, mi, mo, mu)',
      },
      caption: {
        en: 'Fig. 3 — Genuine 17" × 22" Flipchart easel spreads: Vowel E ("La niña sordita") and Consonant M (mamá, amo, mima, Meme, Mumi).',
        es: 'Fig. 3 — Láminas auténticas del rotafolio de 17" × 22": Vocal E («La niña sordita») y Consonante M (mamá, amo, mima, Meme, Mumi).',
      },
      sourceRecord: 'public/assets/aistudio/ep42/ep42-02-flipchart-vowel-e.png + ep42-03-flipchart-consonant-m.png (Original Brochure Page 3)',
    },
  },
  {
    pageNumber: 4,
    sectionId: 'page-4-workbook',
    kicker: {
      en: 'PAGE 4 OF 7 · INDIVIDUAL STUDENT PRACTICE',
      es: 'PÁGINA 4 DE 7 · PRÁCTICA INDIVIDUAL DEL ALUMNO',
    },
    title: {
      en: '92-Page Student Workbook (Libro del alumno)',
      es: 'Libro del Alumno de 92 Páginas',
    },
    subtitle: {
      en: 'Sound identification, uppercase and lowercase handwriting, syllable recognition, and sentence writing',
      es: 'Identificación de sonidos, caligrafía en mayúscula y minúscula, reconocimiento silábico y escritura de oraciones',
    },
    lead: {
      en: 'While the color cover features Leonor Lopetegui’s classic Gretel illustration, the 92 interior pages are printed in high-contrast black-and-white line art so students can mark, trace, draw, and write directly on every page.',
      es: 'Mientras la portada a color presenta la ilustración clásica de Gretel creada por Leonor Lopetegui, las 92 páginas interiores están impresas en blanco y negro de alto contraste para que el alumno pueda marcar, trazar, dibujar y escribir directamente en cada lección.',
    },
    bodyParagraphs: {
      en: [
        'Auditory & Visual Sound Identification (Lección 1): Students identify initial vowel sounds by marking an "X" on illustrations whose Spanish names begin with E e (such as elefante, elote, enano, escalera, erizo, escoba, estrella, escuela, enfermera, espejo) and drawing lines from each vowel (o, a, i, e, u) to its matching picture (iglesia, ocho, uno, araña, escoba).',
        'Handwriting, Syllables & Sentence Composition (Lección 7, Pages 19 & 22): Students practice writing uppercase and lowercase letters (M / m) on guided primary lines, draw an original picture beginning with the target sound, circle the matching syllable (ma, me, mi, mo, mu) across word families, fill in missing syllables, and write complete Spanish sentences.',
      ],
      es: [
        'Identificación Auditiva y Visual de Sonidos (Lección 1): El estudiante identifica los sonidos iniciales marcando con una «X» los dibujos de palabras que comienzan con E e (elefante, elote, enano, escalera, erizo, escoba, estrella, escuela, enfermera, espejo) y trazando una línea de cada vocal (o, a, i, e, u) al dibujo correspondiente (iglesia, ocho, uno, araña, escoba).',
        'Caligrafía, Sílabas y Redacción de Oraciones (Lección 7, Páginas 19 y 22): El alumno practica el trazo de mayúsculas y minúsculas (M / m) en renglones pautados, realiza un dibujo del sonido estudiado, encierra la sílaba correcta (ma, me, mi, mo, mu), completa palabras y escribe oraciones con las sílabas aprendidas.',
      ],
    },
    keyPoints: [
      {
        label: { en: 'Interior Format', es: 'Formato Interior' },
        detail: {
          en: '92 black-and-white consumable practice pages organized across 24 structured phonetic lessons.',
          es: '92 páginas interiores en blanco y negro organizadas en 24 lecciones fonéticas progresivas.',
        },
      },
      {
        label: { en: 'Skills Developed', es: 'Destrezas Desarrolladas' },
        detail: {
          en: 'Initial sound discrimination, letter formation (M / m), syllabic decoding (ma–mu), word completion, and independent sentence writing.',
          es: 'Discriminación auditiva inicial, caligrafía (M / m), lectura silábica (ma–mu), completación de palabras y escritura de oraciones.',
        },
      },
    ],
    primaryImage: {
      src: '/assets/aistudio/restored/ep42-04-workbook-restored.png',
      secondarySrc: RESTORED_BLUE_COVER_PATH,
      alt: {
        en: 'Genuine restored black-and-white interior pages from the 92-page La Cartilla de Gretel Student Book (Lesson 1)',
        es: 'Páginas interiores auténticas en blanco y negro restauradas del Libro del alumno de 92 páginas (Lección 1)',
      },
      caption: {
        en: 'Fig. 4 — Authentic Student Book interior pages (Lección 1): 12-cell "E e" initial-sound grid and vowel-to-picture line matching (o, a, i, e, u).',
        es: 'Fig. 4 — Páginas interiores auténticas del Libro del alumno (Lección 1): cuadrícula de 12 dibujos para «E e» y asociación de vocales (o, a, i, e, u).',
      },
      sourceRecord: 'public/assets/aistudio/ep42/ep42-04-student-book-pages.png (Original Brochure Page 4)',
    },
  },
  {
    pageNumber: 5,
    sectionId: 'page-5-syllabic-charts',
    kicker: {
      en: 'PAGE 5 OF 7 · REPRODUCIBLE BLACKLINE MASTERS',
      es: 'PÁGINA 5 DE 7 · LÁMINAS REPRODUCIBLES (BLACKLINE MASTERS)',
    },
    title: {
      en: 'Reproducible Vowel & Syllabic Charts',
      es: 'Carteles Reproducibles de Vocales y Sílabas',
    },
    subtitle: {
      en: 'Cut-and-paste vowel practice sheets, manipulable syllable tiles, word-building templates, and Teacher’s Answer Key',
      es: 'Hojas de recortar y pegar vocales, tarjetas silábicas recortables, plantillas de formación de palabras y Clave para el Maestro',
    },
    lead: {
      en: 'After completing the Flipchart presentation and Student Book exercises, students transition to hands-on word construction using the program’s reproducible Blackline Masters.',
      es: 'Después de completar las actividades del rotafolio y del Libro del alumno, el estudiante pasa a la construcción práctica de palabras con las hojas reproducibles (Blackline Masters).',
    },
    bodyParagraphs: {
      en: [
        'Vowel Cut-and-Paste Masters (B.L. Master 1 & 2): Students cut out bottom-row illustrations (marked with a scissors icon) and paste each drawing under the matching vowel box (a, e, i, o, u) or single-vowel reinforcement grid.',
        'Syllabic Combination Charts & Word Formation (B.L. Master 6 & B.L. Master 26): Each student receives a reproduced syllabic chart covering open syllables from ma, me, mi, mo, mu and pa, pe, pi, po, pu through za, ze, zi, zo, zu. Students cut and combine syllable tiles to form as many words and sentences as possible on their lined response sheet, while the teacher uses the included Answer Key showing the words that can be formed from each syllabic chart.',
      ],
      es: [
        'Hojas de Recortar y Pegar Vocales (B.L. Master 1 y 2): El alumno recorta las ilustraciones inferiores (indicadas con el ícono de tijeras) y pega cada dibujo en el recuadro de la vocal con que inicia (a, e, i, o, u).',
        'Cuadros de Combinaciones Silábicas y Formación de Palabras (B.L. Master 6 y B.L. Master 26): Cada estudiante recibe su cuadro reproducible de sílabas (desde ma, me, mi, mo, mu y pa, pe, pi, po, pu hasta za, ze, zi, zo, zu) para formar el mayor número posible de palabras y oraciones, mientras el maestro cuenta con una Clave de Respuestas con las palabras posibles para cada cuadro.',
      ],
    },
    keyPoints: [
      {
        label: { en: 'B.L. Master 1 & 2', es: 'B.L. Master 1 y 2' },
        detail: {
          en: '"Instrucciones: Recorta y pega el dibujo que comienza con la vocal del recuadro" (a, e, i, o, u).',
          es: '«Instrucciones: Recorta y pega el dibujo que comienza con la vocal del recuadro» (a, e, i, o, u).',
        },
      },
      {
        label: { en: 'B.L. Master 6 & 26 + Answer Key', es: 'B.L. Master 6 y 26 + Clave' },
        detail: {
          en: 'Complete reproducible syllabic matrix (m, p, s, t, d, l, n, ñ, b, v, r, rr, g, f, j, c, y, z) + student word-building sheet + teacher answer key.',
          es: 'Matriz silábica completa reproducible (m, p, s, t, d, l, n, ñ, b, v, r, rr, g, f, j, c, y, z) + hoja de palabras y oraciones + clave del maestro.',
        },
      },
    ],
    primaryImage: {
      src: '/assets/aistudio/restored/ep42-05-syllabic-restored.png',
      alt: {
        en: 'Authentic restored Blackline Master vowel cut-and-paste chart (a, e, i, o, u) and completed answer key sheet',
        es: 'Hoja reproducible auténtica restaurada de vocales (a, e, i, o, u) y hoja con clave de respuestas',
      },
      caption: {
        en: 'Fig. 5 — Authentic Blackline Master vowel practice sheet (a, e, i, o, u cut-and-paste activity) and completed Teacher Answer Key.',
        es: 'Fig. 5 — Hoja reproducible auténtica de práctica de vocales (a, e, i, o, u para recortar y pegar) y clave de respuestas completada.',
      },
      sourceRecord: 'public/assets/aistudio/ep42/ep42-05-syllabic-charts.png (Original Brochure Page 5)',
    },
  },
  {
    pageNumber: 6,
    sectionId: 'page-6-homework',
    kicker: {
      en: 'PAGE 6 OF 7 · CLASSROOM-TO-HOME REINFORCEMENT',
      es: 'PÁGINA 6 DE 7 · REFUERZO ENTRE EL AULA Y EL HOGAR',
    },
    title: {
      en: 'Reproducible Bilingual Homework Pages',
      es: 'Hojas de Tarea Reproducibles Bilingües',
    },
    subtitle: {
      en: 'Bilingual Spanish/English parent guidance paired with the exact poems taught on the Classroom Flipchart',
      es: 'Instrucciones bilingües (español e inglés) para la familia junto con los poemas estudiados en el rotafolio del aula',
    },
    lead: {
      en: 'Every homework sheet bridges classroom instruction with home reading practice by printing step-by-step parent instructions in both Spanish and English right at the top of the page.',
      es: 'Cada hoja de tarea conecta la enseñanza del aula con la práctica en casa mediante instrucciones paso a paso para los padres escritas tanto en español como en inglés en la parte superior.',
    },
    bodyParagraphs: {
      en: [
        'Bilingual Family Instructions ("¡Juntos haremos la diferencia! / Together we can make a difference!"): Parents are guided through four concrete activities with their child: (1) count the words in each verse, (2) count the letters in selected words, (3) enclose the target syllables (such as ma, me, mi, mo, mu or pa, pe, pi, po, pu or sa, se, si, so, su) in a circle, and (4) read the rhyme aloud several times.',
        'Authentic Lesson Rhymes (Rima 7 "Mi mamá", Rima 8 "Mi papá", Rima 9 "Sapo Samapo"): Because each poem uses only the syllables taught up to that lesson, children experience genuine reading success at home while families can follow along regardless of whether they speak Spanish or English.',
      ],
      es: [
        'Instrucciones Bilingües para la Familia («¡Juntos haremos la diferencia! / Together we can make a difference!»): La hoja guía a los padres en cuatro pasos concretos: (1) contar las palabras que tiene cada verso, (2) contar las letras de palabras seleccionadas, (3) encerrar en un círculo las sílabas en estudio (ma–mu, pa–pu, sa–su) y (4) leer la rima varias veces.',
        'Rimas Auténticas por Lección (Rima 7 «Mi mamá», Rima 8 «Mi papá», Rima 9 «Sapo Samapo»): Como cada poema emplea únicamente las sílabas ya estudiadas, el niño logra leer con seguridad en casa mientras su familia lo acompaña paso a paso.',
      ],
    },
    curriculumExamples: {
      title: {
        en: 'Verbatim Poem from Restored Homework Sheet (P p — Mi papá, Rima 8)',
        es: 'Poema Textual de la Hoja de Tarea Restaurada (P p — Mi papá, Rima 8)',
      },
      items: [
        'P p — Mi papá',
        'Yo amo a Pupi',
        'yo amo a papá.',
        'Pipo me ama',
        'a mí y a mamá.',
      ],
      note: {
        en: 'In historical Teacher’s Kits, an Audio CD of all Flipchart poems recorded in children’s voices accompanied these sheets.',
        es: 'En el Kit del Maestro histórico, un CD de audio con todos los poemas grabados por voces infantiles acompañaba estas tareas.',
      },
    },
    keyPoints: [
      {
        label: { en: 'Bilingual Header', es: 'Encabezado Bilingüe' },
        detail: {
          en: 'Full instructions in Spanish ("Estimada familia de...") and English ("Your son/daughter is practicing the syllables...").',
          es: 'Instrucciones completas en español («Estimada familia de...») y en inglés («Your son/daughter is practicing the syllables...»).',
        },
      },
      {
        label: { en: '4 Home Steps', es: '4 Pasos en Casa' },
        detail: {
          en: 'Count words per verse · Count letters in selected words · Circle target syllables · Read the rhyme aloud multiple times.',
          es: 'Contar palabras por verso · Contar letras en palabras · Encerrar en un círculo las sílabas · Leer la rima varias veces.',
        },
      },
    ],
    primaryImage: {
      src: '/assets/aistudio/restored/ep42-06-homework-restored.png',
      alt: {
        en: 'Authentic restored Reproducible Homework sheet for P p — Mi papá (Rima 8) with Spanish and English parent instructions',
        es: 'Hoja de tarea reproducible auténtica restaurada para P p — Mi papá (Rima 8) con instrucciones en español e inglés',
      },
      caption: {
        en: 'Fig. 6 — Authentic Reproducible Homework page (P p — Mi papá, Rima 8) showing bilingual Spanish/English parent guidance and controlled rhyme.',
        es: 'Fig. 6 — Página auténtica de Tarea Reproducible (P p — Mi papá, Rima 8) con guía bilingüe para padres y poema controlado.',
      },
      sourceRecord: 'public/assets/aistudio/ep42/ep42-06-reproducible-homework.png (Original Brochure Page 6)',
    },
  },
  {
    pageNumber: 7,
    sectionId: 'page-7-evaluations',
    kicker: {
      en: 'PAGE 7 OF 7 · ASSESSMENT & TEACHER RESOURCES',
      es: 'PÁGINA 7 DE 7 · EVALUACIÓN Y RECURSOS PARA EL MAESTRO',
    },
    title: {
      en: 'Reproducible Evaluations & Teacher Answer Keys',
      es: 'Evaluaciones Reproducibles y Claves para el Maestro',
    },
    subtitle: {
      en: 'One targeted evaluation per letter to check sound, syllable, word recognition, and sentence comprehension',
      es: 'Una evaluación específica por letra para verificar reconocimiento de sonidos, sílabas, palabras y comprensión de oraciones',
    },
    lead: {
      en: 'To help teachers monitor student progress after each lesson, the program includes reproducible black-and-white evaluations—one evaluation per letter—paired with matching Teacher Answer Keys.',
      es: 'Para ayudar al maestro a verificar el avance de cada alumno al concluir una lección, el programa incluye evaluaciones reproducibles en blanco y negro —una por cada letra— acompañadas de su Clave de Respuestas.',
    },
    bodyParagraphs: {
      en: [
        'Vowel & Letter Recognition Evaluations (Evaluación vocales & Evaluación: E e): Early assessments ask students to draw a line connecting pictures that begin with the same vowel sound or circle the illustrations whose words begin with E e.',
        'Comprehension & Sentence Completion (Evaluación: M m, Page 7): As students advance to consonants, evaluations test both word decoding and reading comprehension. Using the controlled word box (mamá, ama, Muni, mima, Meme, Memo), the student completes four sentences: (1) Mamá me ama, (2) Meme ama a mima, (3) Mi mamá ama a Memo, and (4) Memo y Mumi aman a Muni. A matching Teacher’s Answer Key is provided for straightforward grading.',
      ],
      es: [
        'Evaluaciones de Vocales y Reconocimiento Inicial (Evaluación vocales y Evaluación: E e): Las primeras evaluaciones piden trazar una línea para unir dibujos que comienzan con la misma vocal o encerrar en un círculo las palabras que inician con E e.',
        'Comprensión y Completación de Oraciones (Evaluación: M m, Página 7): Al avanzar a las consonantes, las evaluaciones comprueban tanto la lectura de palabras como la comprensión de oraciones. Con el rectángulo de palabras (mamá, ama, Muni, mima, Meme, Memo), el alumno completa cuatro oraciones: (1) Mamá me ama, (2) Meme ama a mima, (3) Mi mamá ama a Memo y (4) Memo y Mumi aman a Muni, contando con una Clave de Respuestas idéntica para el maestro.',
      ],
    },
    curriculumExamples: {
      title: {
        en: 'Verbatim Sentences from Evaluación: M m (Student Sheet & Answer Key)',
        es: 'Oraciones Textuales de Evaluación: M m (Hoja del Alumno y Clave)',
      },
      items: [
        'Rectángulo de palabras: mamá · ama · Muni · mima · Meme · Memo',
        '1- Mamá me [ ama ].',
        '2- Meme ama a [ mima ].',
        '3- Mi [ mamá ] ama a Memo.',
        '4- Memo y Mumi aman a [ Muni ].',
      ],
      note: {
        en: 'All text and handwriting lines in Fig. 7 are preserved 100% intact from the original evaluation masters.',
        es: 'Todo el texto y las líneas de respuesta en la Fig. 7 se conservan 100 % intactos de los originales.',
      },
    },
    keyPoints: [
      {
        label: { en: 'Scope of Assessments', es: 'Alcance de las Evaluaciones' },
        detail: {
          en: 'One reproducible evaluation per letter, covering vowel sound matching, syllable decoding, and sentence-level reading comprehension.',
          es: 'Una evaluación reproducible por letra, abarcando asociación de vocales, lectura silábica y comprensión de oraciones.',
        },
      },
      {
        label: { en: 'Teacher Support', es: 'Apoyo al Maestro' },
        detail: {
          en: 'Includes a completed Answer Key for every evaluation sheet plus the Teacher’s Guide.',
          es: 'Incluye una Clave de Respuestas completada para cada evaluación además de la Guía del Maestro.',
        },
      },
    ],
    primaryImage: {
      src: '/assets/aistudio/restored/ep42-07-evaluations-restored.png',
      secondarySrc: '/assets/aistudio/colorized/evaluations-mm-colorized.jpg',
      alt: {
        en: 'Authentic restored Evaluación M m student sheet and completed Teacher Answer Key',
        es: 'Hoja auténtica restaurada de Evaluación M m del alumno y Clave de Respuestas del Maestro',
      },
      caption: {
        en: 'Fig. 7 — Authentic Reproducible Evaluation (Evaluación: M m, Page 7) alongside the completed Teacher Answer Key.',
        es: 'Fig. 7 — Evaluación Reproducible auténtica (Evaluación: M m, Página 7) junto a la Clave de Respuestas del Maestro.',
      },
      sourceRecord: 'public/assets/aistudio/ep42/ep42-07-reproducible-evaluations.png + ep42-05-syllabic-charts.png (Original Brochure Page 7)',
    },
  },
]

export const WEBSITE_CONCEPTS: WebsiteConceptItem[] = [
  {
    id: 'concept-1-joy-of-reading',
    number: 1,
    title: {
      en: 'Concept 1 — The Joy of First Reading',
      es: 'Concepto 1 — La Alegría de Empezar a Leer',
    },
    proposedHeadlineEs: 'Grandes historias comienzan con las primeras letras.',
    proposedHeadlineEn: 'Great stories begin with the very first letters.',
    supportingCopy: {
      en: 'A warm editorial hero scene celebrating a child’s excitement at decoding their first Spanish words, paired with the official LANY Books open-book logo and the authentic cobalt-blue La Cartilla de Gretel Student Workbook.',
      es: 'Una escena principal cálida y editorial que celebra el entusiasmo del niño al descifrar sus primeras palabras en español, acompañada del logotipo oficial de LANY Books y el auténtico Libro del alumno azul cobalto.',
    },
    emphasis: {
      en: 'Discovering the joy of reading (K–2 Spanish beginning literacy)',
      es: 'Descubrir la alegría de leer (lectoescritura inicial en español K–2)',
    },
    proposedPlacement: {
      sectionHash: '#home',
      sectionName: {
        en: 'Home Hero Banner (#home)',
        es: ' Portada Principal de Inicio (#home)',
      },
      integrationStrategy: {
        en: 'Candidate replacement or seasonal editorial toggle for the top hero card—keeps the authentic wb-cover-hd.webp prominent in the foreground while adding warm human photography behind it.',
        es: 'Candidato para la sección principal de inicio: mantiene la portada auténtica wb-cover-hd.webp en primer plano con fotografía cálida de lectura infantil como ambiente.',
      },
    },
    lifestyleBackdropSrc: '/assets/aistudio/concepts/concept-1-joy-reading-bg.jpg',
    authenticProductAssets: [
      {
        src: RESTORED_BLUE_COVER_PATH,
        label: { en: 'Authentic Student Book (92 pp.)', es: 'Libro del alumno auténtico (92 págs.)' },
        sourcePath: 'public/images/gretel/wb-cover-hd.webp',
      },
      {
        src: OFFICIAL_LOGO_PATH,
        label: { en: 'Official LANY Books Logo', es: 'Logotipo Oficial LANY Books' },
        sourcePath: 'public/images/gretel/logo-open-book.png',
      },
    ],
  },
  {
    id: 'concept-2-sounds-to-stories',
    number: 2,
    title: {
      en: 'Concept 2 — From Sounds to Stories',
      es: 'Concepto 2 — De los Primeros Sonidos a las Historias',
    },
    proposedHeadlineEs: 'De los primeros sonidos a las primeras historias.',
    proposedHeadlineEn: 'From the first sounds to the first stories.',
    supportingCopy: {
      en: 'An architectural editorial spread showing how Leonor Lopetegui’s controlled phonetic sequence moves step by step from vowel memory cues ("eeeee") to syllables (ma, me, mi, mo, mu), words, sentences, and poems using genuine Flipchart and Workbook cutouts.',
      es: 'Una composición editorial limpia que muestra paso a paso cómo la secuencia fonética controlada avanza desde las vocales («eeeee») hasta las sílabas (ma, me, mi, mo, mu), palabras, oraciones y poemas usando recortes reales del rotafolio y del cuaderno.',
    },
    emphasis: {
      en: 'How the controlled phonetic method works',
      es: 'Cómo funciona el método fonético controlado',
    },
    proposedPlacement: {
      sectionHash: '#program',
      sectionName: {
        en: 'The Method / Program Section (#program)',
        es: 'Sección El Método / Programa (#program)',
      },
      integrationStrategy: {
        en: 'Enhances the existing #program section by pairing the 4-step phonetic explanation with the real Flipchart Vowel E, Consonant M, and Student Book Lesson 1 cutouts.',
        es: 'Enriquece la sección #program actual acompañando los pasos del método con las láminas reales de la Vocal E, Consonante M y Lección 1 del Libro del alumno.',
      },
    },
    lifestyleBackdropSrc: '/assets/aistudio/colorized/student-book-pages-colorized.jpg',
    authenticProductAssets: [
      {
        src: '/assets/aistudio/restored/ep42-02-flipchart-e-restored.png',
        label: { en: 'Flipchart Vowel E (La niña sordita)', es: 'Rotafolio Vocal E (La niña sordita)' },
        sourcePath: 'public/assets/aistudio/ep42/ep42-02-flipchart-vowel-e.png',
      },
      {
        src: '/assets/aistudio/restored/ep42-03-flipchart-m-restored.png',
        label: { en: 'Flipchart Consonant M (ma–mu)', es: 'Rotafolio Consonante M (ma–mu)' },
        sourcePath: 'public/assets/aistudio/ep42/ep42-03-flipchart-consonant-m.png',
      },
      {
        src: '/assets/aistudio/restored/ep42-04-workbook-restored.png',
        label: { en: 'Student Book Lesson 1 (B&W)', es: 'Libro del alumno Lección 1 (B/N)' },
        sourcePath: 'public/assets/aistudio/ep42/ep42-04-student-book-pages.png',
      },
    ],
  },
  {
    id: 'concept-3-classroom-discovery',
    number: 3,
    title: {
      en: 'Concept 3 — A Classroom Full of Discovery',
      es: 'Concepto 3 — Un Aula Llena de Descubrimiento',
    },
    proposedHeadlineEs: 'Una experiencia de lectura para compartir en el aula.',
    proposedHeadlineEn: 'A reading experience made to be shared in the classroom.',
    supportingCopy: {
      en: 'Warm classroom circle-time photography paired with the authentic 17" × 22" tabletop Flipchart Easel and reproducible Blackline Master charts, illustrating how teachers introduce sounds to the whole group before individual workbook practice.',
      es: 'Fotografía cálida de lectura grupal en el aula combinada con el auténtico rotafolio de 17" × 22" con caballete y los carteles reproducibles, mostrando cómo el maestro presenta cada sonido al grupo antes de la práctica individual.',
    },
    emphasis: {
      en: 'Whole-class teacher instruction with the 17" × 22" Flipchart easel',
      es: 'Enseñanza grupal del maestro con el rotafolio de 17" × 22"',
    },
    proposedPlacement: {
      sectionHash: '#materials',
      sectionName: {
        en: 'Classroom Materials Section (#materials)',
        es: 'Sección Materiales de Aula (#materials)',
      },
      integrationStrategy: {
        en: 'Fits directly into #materials to showcase how the 17" × 22" Flipchart and 25-workbook classroom sets work together during daily literacy blocks.',
        es: 'Se integra directamente en #materials para mostrar cómo el rotafolio de 17" × 22" y los paquetes de 10 o 25 cuadernos se usan en la clase diaria.',
      },
    },
    lifestyleBackdropSrc: '/assets/aistudio/concepts/concept-3-classroom-discovery-bg.jpg',
    authenticProductAssets: [
      {
        src: '/assets/aistudio/restored/ep42-02-flipchart-e-restored.png',
        label: { en: '17" × 22" Flipchart Easel (Vowel E)', es: 'Rotafolio 17" × 22" (Vocal E)' },
        sourcePath: 'public/assets/aistudio/ep42/ep42-02-flipchart-vowel-e.png',
      },
      {
        src: '/assets/aistudio/restored/ep42-03-flipchart-m-restored.png',
        label: { en: '17" × 22" Flipchart Easel (Consonant M)', es: 'Rotafolio 17" × 22" (Consonante M)' },
        sourcePath: 'public/assets/aistudio/ep42/ep42-03-flipchart-consonant-m.png',
      },
    ],
  },
  {
    id: 'concept-4-learning-at-home',
    number: 4,
    title: {
      en: 'Concept 4 — Learning Together at Home',
      es: 'Concepto 4 — Aprender Juntos en Familia',
    },
    proposedHeadlineEs: 'Cada página, una oportunidad para aprender juntos.',
    proposedHeadlineEn: 'Every page, an opportunity to learn together.',
    supportingCopy: {
      en: 'Warm family reading scene paired with the authentic blue Student Workbook and the real Reproducible Bilingual Homework sheet (P p — Mi papá, Rima 8), highlighting how Spanish and English parent instructions empower families at home.',
      es: 'Escena cálida de lectura en familia acompañada del Libro del alumno azul y la hoja real de Tarea Reproducible Bilingüe (P p — Mi papá, Rima 8), destacando cómo las instrucciones en español e inglés apoyan a los padres en casa.',
    },
    emphasis: {
      en: 'Family reading and bilingual classroom-to-home reinforcement',
      es: 'Lectura en familia y refuerzo bilingüe del aula al hogar',
    },
    proposedPlacement: {
      sectionHash: '#package',
      sectionName: {
        en: 'Learning Kit & Home Practice Section (#package)',
        es: 'Sección Kit de Aprendizaje y Práctica en Casa (#package)',
      },
      integrationStrategy: {
        en: 'Complements #package by showing parents and teachers the exact bilingual homework sheet (Rima 8) and 92-page Student Workbook used for home reinforcement.',
        es: 'Complementa #package mostrando a padres y maestros la hoja real de tarea bilingüe (Rima 8) y el cuaderno de 92 páginas para práctica en casa.',
      },
    },
    lifestyleBackdropSrc: '/assets/aistudio/concepts/concept-4-family-home-bg.jpg',
    authenticProductAssets: [
      {
        src: RESTORED_BLUE_COVER_PATH,
        label: { en: 'Student Workbook (92 pp.)', es: 'Libro del alumno (92 págs.)' },
        sourcePath: 'public/images/gretel/wb-cover-hd.webp',
      },
      {
        src: '/assets/aistudio/restored/ep42-06-homework-restored.png',
        label: { en: 'Bilingual Homework (Rima 8 — Mi papá)', es: 'Tarea Bilingüe (Rima 8 — Mi papá)' },
        sourcePath: 'public/assets/aistudio/ep42/ep42-06-reproducible-homework.png',
      },
    ],
  },
  {
    id: 'concept-5-traditional-contemporary',
    number: 5,
    title: {
      en: 'Concept 5 — Traditional Method, Contemporary Presentation',
      es: 'Concepto 5 — Método Tradicional, Presentación Contemporánea',
    },
    proposedHeadlineEs: 'Una tradición de aprendizaje que mira hacia el futuro.',
    proposedHeadlineEn: 'A learning tradition looking toward the future.',
    supportingCopy: {
      en: 'Prominently presents the authentic physical Student Book, Flipchart Easel, and Reproducible Evaluations alongside a clearly labeled conceptual preview of the modern LANY Books web catalog and Gretel storefront assistant.',
      es: 'Presenta en primer plano el Libro del alumno físico, el rotafolio y las evaluaciones reproducibles junto a una vista conceptual claramente identificada del catálogo web de LANY Books y el asistente informativo Gretel.',
    },
    emphasis: {
      en: 'Preserving the physical phonetic method while extending its presentation into modern school & family environments',
      es: 'Preservar el método físico original proyectando su presentación hacia entornos educativos actuales',
    },
    proposedPlacement: {
      sectionHash: '#schools',
      sectionName: {
        en: 'Schools & Educators Section (#schools)',
        es: 'Sección Escuelas y Educadores (#schools)',
      },
      integrationStrategy: {
        en: 'Integrates into #schools with an explicit "CONCEPT PREVIEW" label so educators see the authentic physical curriculum alongside the verified storefront inquiry experience without implying unreleased digital software.',
        es: 'Se integra en #schools con etiqueta explícita de «VISTA CONCEPTUAL» para mostrar el material impreso auténtico junto al portal informativo verificado sin prometer funciones digitales no publicadas.',
      },
    },
    lifestyleBackdropSrc: '/assets/aistudio/colorized/kit-11-piece-authentic.jpg',
    authenticProductAssets: [
      {
        src: RESTORED_BLUE_COVER_PATH,
        label: { en: 'Authentic Printed Student Book', es: 'Libro del alumno impreso auténtico' },
        sourcePath: 'public/images/gretel/wb-cover-hd.webp',
      },
      {
        src: '/assets/aistudio/restored/ep42-05-syllabic-restored.png',
        label: { en: 'Reproducible Syllabic Charts', es: 'Carteles Silábicos Reproducibles' },
        sourcePath: 'public/assets/aistudio/ep42/ep42-05-syllabic-charts.png',
      },
      {
        src: '/assets/aistudio/restored/ep42-07-evaluations-restored.png',
        label: { en: 'Reproducible Evaluations (M m)', es: 'Evaluaciones Reproducibles (M m)' },
        sourcePath: 'public/assets/aistudio/ep42/ep42-07-reproducible-evaluations.png',
      },
    ],
    isConceptualDigitalPreview: true,
    conceptDisclaimer: {
      en: 'CONCEPTUAL DESIGN PREVIEW — The physical books, flipchart, and reproducible sheets are the authentic curriculum. Digital companion views are shown strictly as a conceptual presentation preview and are not advertised as a currently purchasable software product.',
      es: 'VISTA CONCEPTUAL DE DISEÑO — Los libros físicos, el rotafolio y las hojas reproducibles son el producto real. La vista digital se muestra únicamente como concepto visual y no se anuncia como software comercialmente disponible.',
    },
  },
]

export const AUTHENTICITY_COMPARISONS: AuthenticityComparisonItem[] = [
  {
    id: 'comp-blue-cover',
    title: {
      en: '1. Authentic Cobalt-Blue Student Book Cover (Libro del alumno)',
      es: '1. Portada Azul Cobalto Auténtica del Libro del Alumno',
    },
    category: { en: 'Book Cover Master', es: 'Portada Maestra del Libro' },
    originalSrc: VERIFIED_BLUE_COVER_PATH,
    restoredSrc: RESTORED_BLUE_COVER_PATH,
    sourceFileRecord: 'public/images/gretel/wb-cover-hd.webp (Original Brochure Page 2 bottom-right)',
    originalPdfPage: 'Page 2 of la_cartilla_de_Gretel2(1).pdf',
    restorationActions: {
      en: [
        'Preserved 100% of the original cobalt-blue cover, butterfly, Gretel watercolor illustration, title lettering, and "Autora: Leonor Lopetegui" credit.',
        'Applied conservative 2%–98% white-balance and tonal normalization with Lanczos 2× scaling to remove compression haze without altering a single pixel of artwork.',
      ],
      es: [
        'Se conservó el 100 % del fondo azul cobalto original, la mariposa, la ilustración original de Gretel, la tipografía del título y el crédito «Autora: Leonor Lopetegui».',
        'Se aplicó balance tonal conservador (2 %–98 %) y escalado Lanczos 2× para eliminar ruido de compresión sin alterar ni un solo trazo de la ilustración.',
      ],
    },
    preservedElements: {
      en: 'Title ("La cartilla de Gretel / Libro del alumno"), author credit ("Autora: Leonor Lopetegui"), yellow-red butterfly, dragonfly, floral vine, and Gretel seated on wooden stool.',
      es: 'Título («La cartilla de Gretel / Libro del alumno»), crédito («Autora: Leonor Lopetegui»), mariposa, libélula, enredadera de flores y Gretel sentada en su banquito.',
    },
  },
  {
    id: 'comp-flipchart-e-m',
    title: {
      en: '2. Physical 17" × 22" Classroom Flipchart (Vowel E & Consonant M)',
      es: '2. Rotafolio Físico del Aula de 17" × 22" (Vocal E y Consonante M)',
    },
    category: { en: 'Classroom Flipchart Easel', es: 'Rotafolio con Caballete' },
    originalSrc: '/assets/aistudio/ep42/ep42-02-flipchart-vowel-e.png',
    restoredSrc: '/assets/aistudio/restored/ep42-02-flipchart-e-restored.png',
    sourceFileRecord: 'public/assets/aistudio/ep42/ep42-02-flipchart-vowel-e.png & ep42-03-flipchart-consonant-m.png',
    originalPdfPage: 'Page 3 of la_cartilla_de_Gretel2(1).pdf',
    restorationActions: {
      en: [
        'Removed the 3px black outer box and exterior olive-green (rgb(155,172,106)) thumbnail background.',
        'Restored neutral white flipchart paper and crisp spiral-binding edge while keeping the blue tabletop easel and all Spanish poem & vocabulary text 100% untouched.',
      ],
      es: [
        'Se eliminó el borde negro exterior de 3 px y el fondo verde oliva (rgb(155,172,106)) de la captura original.',
        'Se restauró el blanco neutro del papel del rotafolio y el espiral superior manteniendo intactos el caballete azul, el poema «La niña sordita» y los dibujos.',
      ],
    },
    preservedElements: {
      en: 'Poem "La niña sordita", red initial vowel highlights, and all 6 illustrated words: elefante, espejo, Ema, estrella, erizo, escalera (plus Mm, mamá, amo, mima, Meme, Mumi on spread 2).',
      es: 'Poema «La niña sordita», letras iniciales en rojo y las 6 palabras ilustradas: elefante, espejo, Ema, estrella, erizo, escalera (más Mm, mamá, amo, mima, Meme, Mumi).',
    },
  },
  {
    id: 'comp-workbook-pages',
    title: {
      en: '3. Authentic 92-Page Student Workbook Interior Spread (Lección 1 — E e)',
      es: '3. Páginas Interiores Auténticas del Libro del Alumno (Lección 1 — E e)',
    },
    category: { en: 'Student Workbook (B&W Interior)', es: 'Libro del Alumno (Interior B/N)' },
    originalSrc: '/assets/aistudio/ep42/ep42-04-student-book-pages.png',
    restoredSrc: '/assets/aistudio/restored/ep42-04-workbook-restored.png',
    sourceFileRecord: 'public/assets/aistudio/ep42/ep42-04-student-book-pages.png',
    originalPdfPage: 'Page 4 of la_cartilla_de_Gretel2(1).pdf',
    restorationActions: {
      en: [
        'Stripped exterior olive-green background and 3px frame.',
        'Restored neutral white paper (8%–88% levels normalization) removing gray scanning discoloration while preserving 100% of the original 12-cell "E e" grid and "o, a, i, e, u" line-matching exercises.',
      ],
      es: [
        'Se recortó el fondo exterior verde oliva y el marco negro de 3 px.',
        'Se restauró el papel blanco neutro eliminando el tono grisáceo de escaneo y preservando al 100 % la cuadrícula de 12 dibujos de «E e» y las vocales «o, a, i, e, u».',
      ],
    },
    preservedElements: {
      en: 'Exact 12-cell grid (elefante, tortuga, elote, enano, escalera, erizo, abeja, escoba, unicornio, estrella, escuela, enfermera, espejo) and vowel column (o, a, i, e, u) in black-and-white.',
      es: 'Cuadrícula exacta de 12 celdas y columna de vocales (o, a, i, e, u) en blanco y negro original sin coloreado artificial ni dibujos inventados.',
    },
  },
  {
    id: 'comp-syllabic-charts',
    title: {
      en: '4. Reproducible Syllabic & Vowel Charts (B.L. Master 1 & Answer Key)',
      es: '4. Carteles Reproducibles de Sílabas y Vocales (B.L. Master 1 y Clave)',
    },
    category: { en: 'Reproducible Blackline Masters', es: 'Láminas Reproducibles B/N' },
    originalSrc: '/assets/aistudio/ep42/ep42-05-syllabic-charts.png',
    restoredSrc: '/assets/aistudio/restored/ep42-05-syllabic-restored.png',
    sourceFileRecord: 'public/assets/aistudio/ep42/ep42-05-syllabic-charts.png',
    originalPdfPage: 'Page 5 & Page 7 of la_cartilla_de_Gretel2(1).pdf',
    restorationActions: {
      en: [
        'Removed exterior olive-green border and scanning shadow.',
        'Cleaned paper background to neutral white while keeping the scissors icon, dashed vowel boxes (a, e, i, o, u), cut-out drawings, and completed Teacher Answer Key 100% faithful.',
      ],
      es: [
        'Se eliminó el fondo exterior verde oliva y la sombra de escaneo.',
        'Se limpió el papel a blanco neutro manteniendo intactos el ícono de tijeras, los recuadros de vocales (a, e, i, o, u), los dibujos recortables y la clave completada.',
      ],
    },
    preservedElements: {
      en: 'Spanish header ("Instrucciones: Recorta y pega el dibujo que comienza con la vocal del recuadro"), boxes a, e, i, o, u, and completed answer key sentences.',
      es: 'Instrucción original («Instrucciones: Recorta y pega el dibujo que comienza con la vocal del recuadro»), recuadros a, e, i, o, u y oraciones de la clave.',
    },
  },
  {
    id: 'comp-homework-evaluation',
    title: {
      en: '5. Reproducible Homework (P p — Mi papá) & Evaluation (Evaluación: M m)',
      es: '5. Tarea Reproducible (P p — Mi papá) y Evaluación (Evaluación: M m)',
    },
    category: { en: 'Homework & Assessment Masters', es: 'Tareas y Evaluaciones Reproducibles' },
    originalSrc: '/assets/aistudio/ep42/ep42-07-reproducible-evaluations.png',
    restoredSrc: '/assets/aistudio/restored/ep42-07-evaluations-restored.png',
    sourceFileRecord: 'public/assets/aistudio/ep42/ep42-06-reproducible-homework.png & ep42-07-reproducible-evaluations.png',
    originalPdfPage: 'Page 6 & Page 7 of la_cartilla_de_Gretel2(1).pdf',
    restorationActions: {
      en: [
        'Removed outer 3dcart border and gray background tint.',
        'Restored clean white worksheet paper while keeping every word in the word bank (mamá, ama, Muni, mima, Meme, Memo) and all 4 fill-in-the-blank sentences untouched.',
      ],
      es: [
        'Se eliminó el marco exterior y el tinte gris del papel escaneado.',
        'Se restauró el blanco limpio del papel conservando intacto el banco de palabras (mamá, ama, Muni, mima, Meme, Memo) y las 4 oraciones de evaluación.',
      ],
    },
    preservedElements: {
      en: 'Word bank (mamá, ama, Muni, mima, Meme, Memo), sentences 1–4, footer "Evaluación: M m — 7", and bilingual homework poem "P p — Mi papá (Rima 8)".',
      es: 'Banco de palabras (mamá, ama, Muni, mima, Meme, Memo), oraciones 1–4, pie «Evaluación: M m — 7» y poema bilingüe «P p — Mi papá (Rima 8)».',
    },
  },
]
