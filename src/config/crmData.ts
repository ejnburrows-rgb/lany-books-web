export type CrmModuleId = 'portal' | 'workbook' | 'progress'

export interface CrmStudentRow {
  name: string
  grade: string
  currentLesson: string
  mastery: string
  statusLabel: string
}

export interface CrmModule {
  id: CrmModuleId
  badge: string
  tabTitle: string
  headline: string
  summary: string
  bullets: string[]
  previewTitle: string
  previewSubtitle: string
  previewStats: { label: string; value: string }[]
  studentRows: CrmStudentRow[]
  highlightCallout: string
}

const crmModulesEn: CrmModule[] = [
  {
    id: 'portal',
    badge: 'Module 01 · Classroom & Home Connection',
    tabTitle: 'Teacher & Parent Portal',
    headline: 'Teacher Classroom Management & Parent Home Portal',
    summary:
      'Unifies classroom instruction with at-home reinforcement. Teachers organize Kindergarten, 1st Grade, and 2nd Grade groups, assign weekly phonetic lessons, and share guided practice directly with parents.',
    bullets: [
      'Instant roster organization by grade level (K, 1st, 2nd) and reading group',
      'One-click weekly parent home-practice packets synced to the exact classroom lesson',
      'Bilingual teacher-parent messaging and home reading log verification',
      'Direct alignment between the 17" × 22" classroom flipchart and home review',
    ],
    previewTitle: 'Classroom Roster & Parent Sync — Kindergarten Group A',
    previewSubtitle: 'Active Unit: Las Cinco Vocales (A · E · I · O · U) & First Consonants (M · P · S · L)',
    previewStats: [
      { label: 'Active Students', value: '24 / 24' },
      { label: 'Parent Portal Sync', value: '96% Connected' },
      { label: 'Current Flipchart Lesson', value: 'Lección 4 · Sílabas con M y P' },
    ],
    studentRows: [
      {
        name: 'Sofía Martínez',
        grade: 'Kindergarten',
        currentLesson: 'Vocales + Sílabas ma, me, mi, mo, mu',
        mastery: '100% · Home Packet Reviewed',
        statusLabel: 'Parent Synced',
      },
      {
        name: 'Mateo Hernández',
        grade: 'Kindergarten',
        currentLesson: 'Sílabas pa, pe, pi, po, pu',
        mastery: '94% · Audio Poem Practiced',
        statusLabel: 'Parent Synced',
      },
      {
        name: 'Valentina Cruz',
        grade: '1st Grade',
        currentLesson: 'Oraciones controladas con L y S',
        mastery: '98% · Ready for Next Lesson',
        statusLabel: 'Milestone Met',
      },
    ],
    highlightCallout:
      'Designed specifically for schools and families using the physical La Cartilla de Gretel editions.',
  },
  {
    id: 'workbook',
    badge: 'Module 02 · Multisensory Digital Companion',
    tabTitle: 'Digital Workbook & Audio Poems',
    headline: 'Interactive Digital Workbook & Audio Poem Activities',
    summary:
      'Brings the 92-page Student Book and the 17" × 22" Flipchart to life on interactive classroom boards, tablets, and home devices with native Spanish phonetic audio and guided syllable building.',
    bullets: [
      'Narrated Flipchart Poems with synchronized syllable highlighting and pure Spanish vowel pronunciation',
      'Interactive syllable-blending tiles for the 5 pure vowels (A, E, I, O, U) and consonants',
      'Digital companion pages mirroring the 92-page full-color Student Workbook',
      'Guided print and cursive letter-tracing demonstrations for classroom projection',
    ],
    previewTitle: 'Interactive Lesson Player — Poema del Rotafolio & Sílabas',
    previewSubtitle: 'Synchronized Audio Narration + Interactive Syllable Builder (ma · me · mi · mo · mu)',
    previewStats: [
      { label: 'Workbook Pages Linked', value: '92 Full-Color Pages' },
      { label: 'Narrated Flipchart Poems', value: 'Complete Audio Set' },
      { label: 'Interactive Vowel Tiles', value: '5 Vowels + Syllables' },
    ],
    studentRows: [
      {
        name: '1. Listen & Repeat Poem',
        grade: 'Flipchart Audio',
        currentLesson: 'Pure Spanish vowel cadence & rhythm',
        mastery: 'Audio + Visual Sync',
        statusLabel: 'Interactive',
      },
      {
        name: '2. Build Controlled Syllables',
        grade: 'Interactive Tiles',
        currentLesson: 'Combine M + A → ma, M + E → me, M + I → mi',
        mastery: 'Zero Sight-Word Guessing',
        statusLabel: 'Multisensory',
      },
      {
        name: '3. Complete Student Book Page',
        grade: '92-Page Companion',
        currentLesson: 'Read and write controlled words: mamá, mimo, mapa',
        mastery: 'Print + Digital Match',
        statusLabel: 'Aligned',
      },
    ],
    highlightCallout:
      'Every digital exercise mirrors the exact typography, illustrations, and controlled sequence of Leonor Lopetegui’s printed book.',
  },
  {
    id: 'progress',
    badge: 'Module 03 · Phonetic Mastery Analytics',
    tabTitle: 'Progress & Phonetic Milestones',
    headline: 'Student Progress Tracking & Phonetic Milestone Assessments',
    summary:
      'Gives educators and school coordinators clear, objective visibility into each child’s phonetic progression—from pure vowel recognition to fluent, independent reading and writing in Spanish.',
    bullets: [
      'Step-by-step phonetic milestone checkpoints across all 6 stages of La Cartilla de Gretel',
      'Individual mastery profiles for vowels, direct syllables, inverse syllables, and full sentences',
      'Early identification of students needing targeted syllable or vowel reinforcement',
      'Printable and exportable progress reports for parent-teacher conferences and school records',
    ],
    previewTitle: 'Phonetic Milestone Matrix — K–2 Reading Progression',
    previewSubtitle: 'Real-time tracking across the 6 sequential stages of La Cartilla de Gretel',
    previewStats: [
      { label: 'Stage 1: 5 Vowels', value: '100% Mastered' },
      { label: 'Stage 2–3: Direct Syllables', value: '92% Mastered' },
      { label: 'Stage 4–6: Fluent Reading', value: 'On Track' },
    ],
    studentRows: [
      {
        name: 'Milestone 1 · Las Cinco Vocales',
        grade: 'Stage 1',
        currentLesson: 'Auditory & visual mastery of A, E, I, O, U',
        mastery: '24 / 24 Students',
        statusLabel: 'Completed',
      },
      {
        name: 'Milestone 2 · Sílabas Directas',
        grade: 'Stages 2–3',
        currentLesson: 'Controlled consonant-vowel blending (M, P, S, L, T, D, N)',
        mastery: '22 / 24 Students',
        statusLabel: 'In Progress',
      },
      {
        name: 'Milestone 3 · Lectura y Escritura',
        grade: 'Stages 4–6',
        currentLesson: 'Complete sentences, comprehension & expressive reading',
        mastery: 'Next Checkpoint',
        statusLabel: 'Scheduled',
      },
    ],
    highlightCallout:
      'Built around true Spanish syllable-timed milestones rather than generic English reading rubrics.',
  },
]

const crmModulesEs: CrmModule[] = [
  {
    id: 'portal',
    badge: 'Módulo 01 · Conexión Aula y Hogar',
    tabTitle: 'Portal Docente y Familiar',
    headline: 'Gestión de Aula para Maestros y Portal para Padres en Casa',
    summary:
      'Une la enseñanza del salón de clases con el refuerzo en el hogar. Los maestros organizan sus grupos de Kindergarten, 1.º y 2.º Grado, asignan lecciones fonéticas semanales y comparten práctica guiada con las familias.',
    bullets: [
      'Organización rápida de grupos por grado (Kindergarten, 1.º y 2.º Grado) y nivel de lectura',
      'Guías semanales de práctica en casa sincronizadas con la lección exacta del salón',
      'Comunicación directa entre maestros y padres con registro de lectura familiar',
      'Alineación total entre el rotafolio de caballete de 17" × 22" y el repaso en casa',
    ],
    previewTitle: 'Lista de Clase y Sincronización Familiar — Kindergarten Grupo A',
    previewSubtitle: 'Unidad Activa: Las Cinco Vocales (A · E · I · O · U) y Primeras Consonantes (M · P · S · L)',
    previewStats: [
      { label: 'Alumnos Activos', value: '24 / 24' },
      { label: 'Portal de Padres', value: '96% Conectado' },
      { label: 'Lección del Rotafolio', value: 'Lección 4 · Sílabas con M y P' },
    ],
    studentRows: [
      {
        name: 'Sofía Martínez',
        grade: 'Kindergarten',
        currentLesson: 'Vocales + Sílabas ma, me, mi, mo, mu',
        mastery: '100% · Repaso en Casa Completo',
        statusLabel: 'Conectado',
      },
      {
        name: 'Mateo Hernández',
        grade: 'Kindergarten',
        currentLesson: 'Sílabas pa, pe, pi, po, pu',
        mastery: '94% · Poema en Audio Practicado',
        statusLabel: 'Conectado',
      },
      {
        name: 'Valentina Cruz',
        grade: 'Primer Grado',
        currentLesson: 'Oraciones controladas con L y S',
        mastery: '98% · Lista para Siguiente Lección',
        statusLabel: 'Meta Lograda',
      },
    ],
    highlightCallout:
      'Diseñado específicamente para escuelas y familias que utilizan las ediciones físicas de La Cartilla de Gretel.',
  },
  {
    id: 'workbook',
    badge: 'Módulo 02 · Compañero Digital Multisensorial',
    tabTitle: 'Cuaderno Digital y Poemas',
    headline: 'Cuaderno de Trabajo Digital Interactivo y Poemas en Audio',
    summary:
      'Da vida al Libro del Alumno de 92 páginas y al Rotafolio de 17" × 22" en pizarras interactivas, tabletas y dispositivos en casa con audio fonético en español y construcción guiada de sílabas.',
    bullets: [
      'Poemas del rotafolio narrados con resaltado silábico sincronizado y pronunciación pura de las vocales',
      'Fichas interactivas de unión de sílabas con las 5 vocales (A, E, I, O, U) y consonantes',
      'Páginas digitales interactivas que reflejan el Libro del Alumno de 92 páginas a todo color',
      'Demostraciones guiadas de trazo en letra de molde y cursiva para proyectar en clase',
    ],
    previewTitle: 'Reproductor Interactivo de Lecciones — Poema del Rotafolio y Sílabas',
    previewSubtitle: 'Narración en Audio Sincronizada + Constructor de Sílabas (ma · me · mi · mo · mu)',
    previewStats: [
      { label: 'Páginas Vinculadas', value: '92 Páginas a Color' },
      { label: 'Poemas Narrados', value: 'Colección Completa' },
      { label: 'Vocales Interactivas', value: '5 Vocales + Sílabas' },
    ],
    studentRows: [
      {
        name: '1. Escuchar y Repetir Poema',
        grade: 'Audio del Rotafolio',
        currentLesson: 'Ritmo, rima y pronunciación clara de las vocales en español',
        mastery: 'Audio + Vista Sincronizada',
        statusLabel: 'Interactivo',
      },
      {
        name: '2. Formar Sílabas Controladas',
        grade: 'Fichas Digitales',
        currentLesson: 'Unir M + A → ma, M + E → me, M + I → mi',
        mastery: 'Sin Adivinar Palabras',
        statusLabel: 'Multisensorial',
      },
      {
        name: '3. Práctica en el Libro del Alumno',
        grade: 'Compañero de 92 Págs.',
        currentLesson: 'Leer y escribir palabras controladas: mamá, mimo, mapa',
        mastery: 'Impreso + Digital',
        statusLabel: 'Alineado',
      },
    ],
    highlightCallout:
      'Cada actividad digital conserva las ilustraciones, la tipografía y la secuencia controlada del libro impreso de Leonor Lopetegui.',
  },
  {
    id: 'progress',
    badge: 'Módulo 03 · Evaluación de Logros Fonéticos',
    tabTitle: 'Progreso y Metas Fonéticas',
    headline: 'Seguimiento del Progreso del Alumno y Evaluaciones de Logros Fonéticos',
    summary:
      'Brinda a maestros y coordinadores académicos visibilidad clara y objetiva del avance fonético de cada niño, desde el dominio de las cinco vocales hasta la lectura y escritura fluida en español.',
    bullets: [
      'Puntos de control paso a paso en las 6 etapas secuenciales de La Cartilla de Gretel',
      'Perfil individual de dominio de vocales, sílabas directas, sílabas inversas y oraciones completas',
      'Identificación temprana de alumnos que requieren refuerzo específico en vocales o sílabas',
      'Reportes claros e imprimibles para reuniones con padres y seguimiento escolar',
    ],
    previewTitle: 'Matriz de Logros Fonéticos — Progreso de Lectura K–2',
    previewSubtitle: 'Seguimiento en tiempo real de las 6 etapas secuenciales de La Cartilla de Gretel',
    previewStats: [
      { label: 'Etapa 1: 5 Vocales', value: '100% Dominado' },
      { label: 'Etapas 2–3: Sílabas Directas', value: '92% Dominado' },
      { label: 'Etapas 4–6: Lectura Fluida', value: 'En Curso' },
    ],
    studentRows: [
      {
        name: 'Meta 1 · Las Cinco Vocales',
        grade: 'Etapa 1',
        currentLesson: 'Reconocimiento auditivo y visual de A, E, I, O, U',
        mastery: '24 / 24 Alumnos',
        statusLabel: 'Completado',
      },
      {
        name: 'Meta 2 · Sílabas Directas',
        grade: 'Etapas 2–3',
        currentLesson: 'Unión controlada consonante-vocal (M, P, S, L, T, D, N)',
        mastery: '22 / 24 Alumnos',
        statusLabel: 'En Progreso',
      },
      {
        name: 'Meta 3 · Lectura y Escritura',
        grade: 'Etapas 4–6',
        currentLesson: 'Oraciones completas, comprensión y lectura expresiva',
        mastery: 'Próxima Evaluación',
        statusLabel: 'Programado',
      },
    ],
    highlightCallout:
      'Construido sobre metas fonéticas reales del idioma español y no sobre adaptaciones genéricas del inglés.',
  },
]

export function getCrmModules(lang: 'en' | 'es'): CrmModule[] {
  return lang === 'es' ? crmModulesEs : crmModulesEn
}
