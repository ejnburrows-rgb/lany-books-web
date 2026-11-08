import { useEffect, useMemo, useState, type FormEvent } from 'react'
import type { KitImagePaths } from '../App'
import { generateQrMatrix, generateQrSvgString } from '../utils/qrCodeGenerator'

interface ClientShareSessionProps {
  lang: 'en' | 'es'
  contactEmail?: string
  formEndpoint?: string
  kitAssets?: KitImagePaths
}

type AudienceRole = 'school' | 'teacher' | 'parent' | 'distributor'
type MessageLang = 'en' | 'es' | 'bilingual'
type QrEncodeMode = 'page-prefilled' | 'whatsapp-direct' | 'bundle-text'

interface PacketOption {
  id: string
  thumbKey: keyof KitImagePaths
  label: { en: string; es: string }
  snippet: { en: string; es: string }
}

const BROCHURE_PDF_URL =
  'https://lany-books-web-delta.vercel.app/exports/la-cartilla-de-gretel-brochure-screen.pdf'
const STOREFRONT_URL = 'https://lany-books-web-delta.vercel.app/'
const EBAY_REF_URL = 'https://www.ebay.com/itm/227292617053'

const DEFAULT_KIT_ASSETS: KitImagePaths = {
  cover: '/images/gretel/wb-cover-hd.webp',
  logoOpenBook: '/images/gretel/logo-open-book.png',
  bundleKit: '/assets/aistudio/colorized/kit-11-piece-authentic.jpg',
  studentBookSpread: '/assets/aistudio/colorized/student-book-pages-colorized.jpg',
  syllabicCharts: '/assets/aistudio/colorized/syllabic-charts-colorized.jpg',
  bilingualHomework: '/assets/aistudio/colorized/homework-rima3-colorized.jpg',
  evaluationsKey: '/assets/aistudio/colorized/evaluations-mm-colorized.jpg',
  heritageCoversPair: '/assets/aistudio/colorized/heritage-covers-pair.jpg',
  heroPoster: '/assets/aistudio/image-gen-3_20261030-070235__9b3e6495.png',
  classroomWelcome: '/assets/aistudio/classroom-welcome-gretel.jpg',
  easelShowcase: '/assets/aistudio/image-gen-6_20261030-090159__c9217af0.png',
  libraryPortrait: '/assets/aistudio/colorized/heritage-covers-pair.jpg',
}

export const KIT_CHECKLIST_TEXT = {
  en: [
    '10-Piece Physical Classroom Kit Checklist:',
    '  1. 17" × 22" Full-Color Tabletop Flipchart & Built-In Easel',
    '  2. 92-Page Student Book (Full-color cover; Black & White interior activity/coloring/writing pages)',
    '  3. Classic White Teacher’s Guide',
    '  4. Black & White Reproducible Syllabic & Vowel Charts (Blackline Masters)',
    '  5. Black & White Teacher Answer Key to the Syllabic Charts',
    '  6. Black & White Reproducible Bilingual Homework Pages (Spanish & English instructions)',
    '  7. Black & White Reproducible Evaluations (one per letter)',
    '  8. Black & White Evaluation Teacher Answer Key',
    '  9. Audio CD of All Flipchart Poems (recorded in children’s voices)',
    '  10. 5 Handcrafted Felt Vowel Dolls (A, E, I, O, U)',
  ].join('\n'),
  es: [
    'Lista de Verificación del Kit Físico de Aula (10 Componentes):',
    '  1. Rotafolio de Mesa a Todo Color de 17" × 22" con Caballete Integrado',
    '  2. Libro del Alumno de 92 Páginas (Portada a color; páginas interiores en Blanco y Negro para trazar, escribir y colorear)',
    '  3. Guía del Maestro (Portada blanca clásica)',
    '  4. Tableros de Vocales y Sílabas Reproducibles en Blanco y Negro (Originales para fotocopiar)',
    '  5. Clave de Respuestas en Blanco y Negro para los Tableros Silábicos',
    '  6. Tareas Reproducibles Bilingües en Blanco y Negro (Instrucciones en Español e Inglés)',
    '  7. Evaluaciones Reproducibles en Blanco y Negro (una por letra)',
    '  8. Clave de Respuestas de Evaluaciones en Blanco y Negro para el Maestro',
    '  9. CD de Audio con Todos los Poemas del Rotafolio (grabados con voces infantiles)',
    '  10. 5 Muñecos de Vocales de Fieltro (A, E, I, O, U)',
  ].join('\n'),
}

const PACKET_OPTIONS: PacketOption[] = [
  {
    id: 'brochure-pdf',
    thumbKey: 'heritageCoversPair',
    label: {
      en: '10-Page Physical-Product Brochure URL (Screen PDF Link)',
      es: 'Enlace al Folleto del Producto Físico de 10 Páginas (PDF)',
    },
    snippet: {
      en: `• 10-Page Physical-Product Brochure (PDF): ${BROCHURE_PDF_URL}`,
      es: `• Folleto del Producto Físico de 10 Páginas (PDF): ${BROCHURE_PDF_URL}`,
    },
  },
  {
    id: 'kit-checklist',
    thumbKey: 'bundleKit',
    label: {
      en: 'Complete 10-Piece Physical Classroom Kit Checklist (Color Flipchart/Covers + B&W Interior Pages)',
      es: 'Lista Completa del Kit Físico de 10 Componentes (Rotafolio/Portadas a Color + Páginas Interiores en B/N)',
    },
    snippet: {
      en: KIT_CHECKLIST_TEXT.en,
      es: KIT_CHECKLIST_TEXT.es,
    },
  },
  {
    id: 'student-book',
    thumbKey: 'studentBookSpread',
    label: {
      en: '92-Page Student Book — Black & White Interior Pages (Vowel E e Grid & o, a, i, e, u Line Matching)',
      es: 'Libro del Alumno de 92 Páginas — Interior en Blanco y Negro (Cuadrícula E e y Asociación o, a, i, e, u)',
    },
    snippet: {
      en: '• 92-Page Student Book (Libro del alumno by Leonor Lopetegui): Full-color cover with 92 Black & White interior reading, tracing, line-matching, and coloring activity pages so Kindergarten, 1st Grade, and 2nd Grade students can write and color directly on every lesson page.',
      es: '• Libro del Alumno de 92 Páginas (por Leonor Lopetegui): Portada a color con 92 páginas interiores en Blanco y Negro de lectura, trazado, asociación con líneas e ilustraciones para colorear en Kindergarten, 1.º y 2.º grado.',
    },
  },
  {
    id: 'reproducible-sheets',
    thumbKey: 'syllabicCharts',
    label: {
      en: 'Black & White Reproducible Blackline Masters: Syllabic Charts, Bilingual Homework (Rima 3) & Evaluations',
      es: 'Originales Reproducibles en Blanco y Negro: Tableros Silábicos, Tarea Bilingüe (Rima 3) y Evaluaciones',
    },
    snippet: {
      en: '• Authentic Black & White Reproducible Blackline Masters: Crisp black-and-white master sheets engineered for classroom photocopying — includes vowel cut-out charts (a, e, i, o, u), syllabic word-bank sentences (mamá, amo, Mumi, mima, Meme, Memo), bilingual Spanish/English homework sheets ("P p — Mi papá — Rima 3"), and per-letter evaluations ("Evaluación M m") with B&W Teacher Answer Keys.',
      es: '• Originales Reproducibles en Blanco y Negro (Blackline Masters): Hojas maestras en blanco y negro diseñadas para fotocopiar en el aula — incluye tableros recortables de vocales (a, e, i, o, u), oraciones con banco de palabras (mamá, amo, Mumi, mima, Meme, Memo), tareas bilingües («P p — Mi papá — Rima 3») y evaluaciones por letra («Evaluación M m») con clave del maestro en blanco y negro.',
    },
  },
  {
    id: 'flipchart-easel',
    thumbKey: 'easelShowcase',
    label: {
      en: '17" × 22" Full-Color Tabletop Flipchart & Easel (Vowel Ee "La niña sordita" & Consonant Mm)',
      es: 'Rotafolio de Mesa a Todo Color de 17" × 22" con Caballete (Vocal Ee «La niña sordita» y Consonante Mm)',
    },
    snippet: {
      en: '• 17" × 22" Full-Color Tabletop Flipchart & Built-In Easel: Large-format illustrated classroom charts including the Vowel "Ee" poem ("La niña sordita": elefante, espejo, Ema, estrella, erizo, escalera) and Consonant "Mm" syllable blending (ma, me, mi, mo, mu).',
      es: '• Rotafolio de Mesa a Todo Color de 17" × 22" con Caballete Integrado: Láminas ilustradas de gran formato para toda la clase, incluyendo el poema de la vocal «Ee» («La niña sordita») y la familia silábica «Mm» (ma, me, mi, mo, mu).',
    },
  },
  {
    id: 'ebay-listing',
    thumbKey: 'cover',
    label: {
      en: 'Official eBay Reference Listing (ebay.com/itm/227292617053)',
      es: 'Publicación de Referencia en eBay (ebay.com/itm/227292617053)',
    },
    snippet: {
      en: `• Official eBay Reference & Kit Listing: ${EBAY_REF_URL}`,
      es: `• Publicación Oficial y Referencia del Kit en eBay: ${EBAY_REF_URL}`,
    },
  },
  {
    id: 'demo-inquiry',
    thumbKey: 'classroomWelcome',
    label: {
      en: 'Invitation for School Demonstration & Availability Inquiry',
      es: 'Invitación para Demostración Escolar y Consulta de Disponibilidad',
    },
    snippet: {
      en: '• Next Step: Reply to schedule a walkthrough of the physical 17" × 22" Flipchart and 92-page Student Book or to confirm current edition availability for your classroom or school.',
      es: '• Próximo Paso: Responda a este mensaje para coordinar una demostración del Rotafolio físico de 17" × 22" y del Libro del Alumno de 92 páginas o confirmar disponibilidad para su escuela.',
    },
  },
]

function getCurrentPageBaseUrl(): string {
  if (typeof window !== 'undefined' && window.location?.origin) {
    return `${window.location.origin}${window.location.pathname}`
  }
  return STOREFRONT_URL
}

export function ClientShareSession({
  lang,
  contactEmail = '',
  formEndpoint,
  kitAssets = DEFAULT_KIT_ASSETS,
}: ClientShareSessionProps) {
  const [audience, setAudience] = useState<AudienceRole>('school')
  const [msgLang, setMsgLang] = useState<MessageLang>(lang)
  const [recipientName, setRecipientName] = useState('')
  const [recipientOrg, setRecipientOrg] = useState('')
  const [recipientEmail, setRecipientEmail] = useState('')
  const [recipientPhone, setRecipientPhone] = useState('')
  const [senderName, setSenderName] = useState('')
  const [customNote, setCustomNote] = useState('')
  const [qrMode, setQrMode] = useState<QrEncodeMode>('page-prefilled')
  const [selectedIds, setSelectedIds] = useState<string[]>([
    'brochure-pdf',
    'kit-checklist',
    'student-book',
    'reproducible-sheets',
    'demo-inquiry',
  ])
  const [copiedState, setCopiedState] = useState<
    | 'idle'
    | 'clipboard-bundle'
    | 'packet'
    | 'sms'
    | 'wa-link'
    | 'sms-link'
    | 'qr-payload'
  >('idle')
  const [deskStatus, setDeskStatus] = useState<
    'idle' | 'sending' | 'sent' | 'mailto-fallback'
  >('idle')

  // Hydrate pre-filled state if visitor scans a physical brochure QR code with query parameters
  useEffect(() => {
    try {
      const params = new URLSearchParams(window.location.search)
      const qRole = params.get('qr_role') as AudienceRole | null
      const qLang = params.get('qr_lang') as MessageLang | null
      const qNote = params.get('qr_note')
      const qOrg = params.get('qr_org')
      if (
        qRole &&
        ['school', 'teacher', 'parent', 'distributor'].includes(qRole)
      ) {
        setAudience(qRole)
      }
      if (qLang && ['en', 'es', 'bilingual'].includes(qLang)) {
        setMsgLang(qLang)
      }
      if (qNote) {
        setCustomNote(qNote)
      }
      if (qOrg) {
        setRecipientOrg(qOrg)
      }
    } catch {
      // Safe fallback when URLSearchParams is unavailable
    }
  }, [])

  const toggleItem = (id: string) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    )
  }

  const effectiveLang: 'en' | 'es' = msgLang === 'bilingual' ? lang : msgLang

  const roleLabels: Record<AudienceRole, { en: string; es: string }> = {
    school: {
      en: 'School / District Leader',
      es: 'Director Escolar / Distrito',
    },
    teacher: { en: 'Classroom Teacher (K–2)', es: 'Maestro de Aula (K–2)' },
    parent: { en: 'Parent / Family', es: 'Padre / Familia' },
    distributor: {
      en: 'Distributor / Bookstore Partner',
      es: 'Distribuidor / Librería',
    },
  }

  const materialShowcases = [
    {
      id: 'mat-kit',
      src: kitAssets.bundleKit,
      badge: {
        en: 'Color Flipchart + B&W Pages',
        es: 'Rotafolio Color + Páginas B/N',
      },
      title: {
        en: '10-Piece Physical Classroom Kit',
        es: 'Kit Físico de Aula de 10 Componentes',
      },
      sub: {
        en: 'Color 17" × 22" Flipchart & Dolls + B&W Workbook & Masters',
        es: 'Rotafolio 17" × 22" y Muñecos a Color + Libro y Hojas B/N',
      },
    },
    {
      id: 'mat-covers',
      src: kitAssets.heritageCoversPair,
      badge: { en: 'Full-Color Covers', es: 'Portadas a Color' },
      title: {
        en: 'Classic White Guide & 92-Page Book',
        es: 'Guía Blanca y Libro de 92 Págs.',
      },
      sub: {
        en: 'Heritage Teacher’s Guide + Royal-Blue Libro del alumno',
        es: 'Guía del Maestro Clásica + Libro del Alumno Azul Rey',
      },
    },
    {
      id: 'mat-student',
      src: kitAssets.studentBookSpread,
      badge: { en: 'Black & White Interior', es: 'Interior en Blanco y Negro' },
      title: {
        en: '92-Page Student Book (B&W Pages)',
        es: 'Libro del Alumno (Páginas en B/N)',
      },
      sub: {
        en: 'B&W Vowel E e 4×3 Grid & o, a, i, e, u Line-Matching Spread',
        es: 'Cuadrícula E e y Asociación o, a, i, e, u en Blanco y Negro',
      },
    },
    {
      id: 'mat-charts',
      src: kitAssets.syllabicCharts,
      badge: {
        en: 'B&W Blackline Masters',
        es: 'Originales en Blanco y Negro',
      },
      title: {
        en: 'Reproducible Vowel & Syllabic Charts',
        es: 'Tableros de Vocales y Sílabas (B/N)',
      },
      sub: {
        en: 'B&W a, e, i, o, u Cut-Outs & mamá, amo, Mumi Word Bank',
        es: 'Recortables a, e, i, o, u y Oraciones mamá, Mumi en B/N',
      },
    },
    {
      id: 'mat-homework',
      src: kitAssets.bilingualHomework,
      badge: { en: 'B&W Master + Audio CD', es: 'Hoja B/N + CD de Audio' },
      title: {
        en: 'Bilingual Homework (B&W) + Audio CD',
        es: 'Tarea Bilingüe (B/N) + CD de Audio',
      },
      sub: {
        en: 'B&W P p — Mi papá — Rima 3 (Spanish & English Directions)',
        es: 'Hoja en B/N P p — Mi papá — Rima 3 (Instrucciones ES y EN)',
      },
    },
    {
      id: 'mat-eval',
      src: kitAssets.evaluationsKey,
      badge: { en: 'B&W Master + Answer Key', es: 'Hoja B/N + Clave' },
      title: {
        en: 'Evaluación M m + Teacher Key (B&W)',
        es: 'Evaluación M m + Clave (B/N)',
      },
      sub: {
        en: 'Black & White Reproducible Assessment & Teacher Answer Key',
        es: 'Evaluación Reproducible y Clave del Maestro en Blanco y Negro',
      },
    },
  ]

  const buildSubject = (): string => {
    const orgSuffix = recipientOrg.trim() ? ` — ${recipientOrg.trim()}` : ''
    if (msgLang === 'es') {
      return `La Cartilla de Gretel (LANY Books) · Folleto Físico de 10 Páginas y Kit de 10 Componentes${orgSuffix}`
    }
    if (msgLang === 'bilingual') {
      return `La Cartilla de Gretel (LANY Books) · 10-Page Physical Brochure & 10-Piece Kit / Folleto Físico${orgSuffix}`
    }
    return `La Cartilla de Gretel (LANY Books) · 10-Page Physical Brochure & 10-Piece Kit${orgSuffix}`
  }

  // Dedicated bundled text containing Brochure Link + Kit Checklist Text for instant messaging paste
  const buildClipboardBundleText = (): string => {
    const pageUrl = getCurrentPageBaseUrl()
    if (msgLang === 'es') {
      return [
        'LA CARTILLA DE GRETEL — LANY Books (K–2 · Autora: Leonor Lopetegui)',
        `• Enlace al Folleto del Producto Físico (PDF de 10 páginas): ${BROCHURE_PDF_URL}`,
        `• Página Actual / Catálogo Interactivo: ${pageUrl}`,
        '',
        KIT_CHECKLIST_TEXT.es,
        customNote.trim() ? `\nNota: ${customNote.trim()}` : '',
      ]
        .filter(Boolean)
        .join('\n')
    }
    return [
      'LA CARTILLA DE GRETEL — LANY Books (Grades K–2 · Author: Leonor Lopetegui)',
      `• 10-Page Physical-Product Brochure Link (PDF): ${BROCHURE_PDF_URL}`,
      `• Current Page / Interactive Brochure: ${pageUrl}`,
      '',
      KIT_CHECKLIST_TEXT.en,
      customNote.trim() ? `\nNote: ${customNote.trim()}` : '',
    ]
      .filter(Boolean)
      .join('\n')
  }

  const buildMessageBody = (conciseSms = false): string => {
    const cleanRecipient = recipientName.trim()
    const cleanOrg = recipientOrg.trim()
    const cleanSender = senderName.trim() || 'LANY Books Publishing'
    const roleTitle = roleLabels[audience][effectiveLang]

    if (conciseSms) {
      if (msgLang === 'es') {
        return [
          cleanRecipient ? `Hola ${cleanRecipient}:` : 'Hola:',
          'Le compartimos el Folleto del Producto Físico de La Cartilla de Gretel (LANY Books, K–2 por Leonor Lopetegui) y la Lista del Kit de 10 Componentes:',
          `• Folleto PDF (10 págs.): ${BROCHURE_PDF_URL}`,
          KIT_CHECKLIST_TEXT.es,
          `• Sitio web: ${STOREFRONT_URL}`,
          customNote.trim() ? `Nota: ${customNote.trim()}` : '',
          `— ${cleanSender}`,
        ]
          .filter(Boolean)
          .join('\n')
      }
      return [
        cleanRecipient ? `Hello ${cleanRecipient},` : 'Hello,',
        'Here is the official La Cartilla de Gretel (LANY Books, Grades K–2 by Leonor Lopetegui) Product Brochure URL and 10-Piece Physical Kit Checklist:',
        `• 10-Page Brochure PDF: ${BROCHURE_PDF_URL}`,
        KIT_CHECKLIST_TEXT.en,
        `• Website: ${STOREFRONT_URL}`,
        customNote.trim() ? `Note: ${customNote.trim()}` : '',
        `— ${cleanSender}`,
      ]
        .filter(Boolean)
        .join('\n')
    }

    const effectiveIds =
      selectedIds.length > 0 ? selectedIds : ['brochure-pdf', 'kit-checklist']
    const activeOptions = PACKET_OPTIONS.filter((opt) =>
      effectiveIds.includes(opt.id)
    )

    if (msgLang === 'es') {
      const greeting = cleanRecipient
        ? `Estimado/a ${cleanRecipient}${cleanOrg ? ` (${cleanOrg})` : ''}:`
        : `Estimado/a colega${cleanOrg ? ` de ${cleanOrg}` : ''}:`
      const lines = [
        greeting,
        '',
        `Le compartimos el resumen oficial y el folleto de 10 páginas de «La Cartilla de Gretel» de LANY Books (${roleTitle}) — el programa fonético de lectura y escritura inicial en español para Kindergarten, Primer Grado y Segundo Grado creado por la educadora Leonor Lopetegui (con rotafolio y portadas a color, y páginas interiores del Libro del Alumno y hojas reproducibles impresas en Blanco y Negro).`,
        '',
        ...activeOptions.map((opt) => opt.snippet.es),
      ]
      if (customNote.trim()) {
        lines.push('', `Nota personalizada: ${customNote.trim()}`)
      }
      lines.push(
        '',
        `Sitio web oficial y catálogo interactivo: ${STOREFRONT_URL}`,
        '',
        'Atentamente,',
        cleanSender
      )
      return lines.join('\n')
    }

    if (msgLang === 'bilingual') {
      const greeting = cleanRecipient
        ? `Hello / Estimado/a ${cleanRecipient}${cleanOrg ? ` (${cleanOrg})` : ''},`
        : 'Hello / Estimado/a,'
      const lines = [
        greeting,
        '',
        '[EN] Sharing the official 10-page physical-product brochure URL and 10-piece kit checklist for La Cartilla de Gretel (LANY Books) — a phonetic Spanish beginning reading and writing program for Kindergarten, 1st Grade, and 2nd Grade by Leonor Lopetegui (featuring full-color covers and 17" × 22" easel flipchart, plus authentic Black & White interior workbook pages and reproducible blackline masters):',
        ...activeOptions.map((opt) => opt.snippet.en),
        '',
        '[ES] Le compartimos el enlace al folleto oficial de 10 páginas y la lista del kit físico de 10 componentes de La Cartilla de Gretel (LANY Books) para Kindergarten, 1.º y 2.º grado (con portadas y rotafolio a color, y páginas interiores del libro y hojas reproducibles en Blanco y Negro):',
        ...activeOptions.map((opt) => opt.snippet.es),
      ]
      if (customNote.trim()) {
        lines.push('', `Note / Nota: ${customNote.trim()}`)
      }
      lines.push(
        '',
        `Official Website / Sitio Web: ${STOREFRONT_URL}`,
        `— ${cleanSender}`
      )
      return lines.join('\n')
    }

    const greeting = cleanRecipient
      ? `Dear ${cleanRecipient}${cleanOrg ? ` (${cleanOrg})` : ''},`
      : `Hello${cleanOrg ? ` (${cleanOrg})` : ''},`
    const lines = [
      greeting,
      '',
      `I am sharing the official 10-page physical-product brochure URL and 10-piece kit checklist for "La Cartilla de Gretel" by LANY Books (${roleTitle}) — a phonetic Spanish beginning reading and writing curriculum for Kindergarten, First Grade, and Second Grade authored by Leonor Lopetegui (featuring a full-color 17" × 22" easel flipchart and book covers, paired with authentic Black & White interior Student Book pages and reproducible blackline masters).`,
      '',
      ...activeOptions.map((opt) => opt.snippet.en),
    ]
    if (customNote.trim()) {
      lines.push('', `Personal Note: ${customNote.trim()}`)
    }
    lines.push(
      '',
      `Official Website & Interactive Brochure: ${STOREFRONT_URL}`,
      '',
      'Warm regards,',
      cleanSender
    )
    return lines.join('\n')
  }

  const cleanPhoneDigits = recipientPhone.replace(/[^\d+]/g, '')
  const waPhoneDigits = recipientPhone.replace(/\D/g, '')

  const subjectText = buildSubject()
  const fullBodyText = buildMessageBody(false)
  const smsBodyText = buildMessageBody(true)
  const clipboardBundleText = buildClipboardBundleText()

  const mailtoHref = `mailto:${encodeURIComponent(
    recipientEmail.trim() || contactEmail
  )}?subject=${encodeURIComponent(subjectText)}&body=${encodeURIComponent(
    fullBodyText
  )}`

  const whatsappHref = waPhoneDigits
    ? `https://wa.me/${waPhoneDigits}?text=${encodeURIComponent(fullBodyText)}`
    : `https://wa.me/?text=${encodeURIComponent(fullBodyText)}`

  const smsHref = cleanPhoneDigits
    ? `sms:${cleanPhoneDigits}?body=${encodeURIComponent(smsBodyText)}`
    : `sms:?body=${encodeURIComponent(smsBodyText)}`

  // Build QR payload encoding the current page URL and pre-filled message for physical brochure distribution
  const qrPayload = useMemo(() => {
    const basePageUrl = getCurrentPageBaseUrl()
    const concisePrefilledMsg =
      msgLang === 'es'
        ? `La Cartilla de Gretel (LANY Books) · Folleto PDF: ${BROCHURE_PDF_URL} · Kit de 10 componentes (Rotafolio 17x22, Libro 92 págs. B/N, Guía, Tableros B/N, Tareas B/N, Evaluaciones B/N, CD, 5 Muñecos)`
        : `La Cartilla de Gretel (LANY Books) · Brochure PDF: ${BROCHURE_PDF_URL} · 10-Piece Kit (17x22 Flipchart, 92p B&W Student Book, Guide, B&W Syllabic Charts, B&W Homework, B&W Evaluations, Audio CD, 5 Vowel Dolls)`

    if (qrMode === 'whatsapp-direct') {
      const waQrText = `${basePageUrl}\n${concisePrefilledMsg}`
      return waPhoneDigits
        ? `https://wa.me/${waPhoneDigits}?text=${encodeURIComponent(waQrText)}`
        : `https://wa.me/?text=${encodeURIComponent(waQrText)}`
    }

    if (qrMode === 'bundle-text') {
      return `${basePageUrl}\n${concisePrefilledMsg}`
    }

    // Default: 'page-prefilled' -> Current page URL with pre-filled message query parameters
    const params = new URLSearchParams()
    params.set('qr_lang', msgLang)
    params.set('qr_role', audience)
    if (recipientOrg.trim()) {
      params.set('qr_org', recipientOrg.trim())
    }
    params.set(
      'qr_note',
      customNote.trim() ||
        (msgLang === 'es'
          ? 'Folleto PDF de 10 págs. y Kit Físico de 10 componentes'
          : '10-Page Brochure PDF & 10-Piece Physical Kit Checklist')
    )
    return `${basePageUrl}?${params.toString()}#client-session`
  }, [qrMode, msgLang, audience, recipientOrg, customNote, waPhoneDigits])

  const qrMatrix = useMemo(() => generateQrMatrix(qrPayload), [qrPayload])

  const handleDownloadQrSvg = () => {
    const svgContent = generateQrSvgString(qrPayload)
    const blob = new Blob([svgContent], {
      type: 'image/svg+xml;charset=utf-8',
    })
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = 'La-Cartilla-de-Gretel-Brochure-QR.svg'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    URL.revokeObjectURL(url)
  }

  const handleCopyText = async (
    textToCopy: string,
    mode:
      | 'clipboard-bundle'
      | 'packet'
      | 'sms'
      | 'wa-link'
      | 'sms-link'
      | 'qr-payload'
  ) => {
    try {
      await navigator.clipboard.writeText(textToCopy)
      setCopiedState(mode)
      setTimeout(() => setCopiedState('idle'), 2600)
    } catch {
      setCopiedState(mode)
      setTimeout(() => setCopiedState('idle'), 2600)
    }
  }

  const handleSendToLanyDesk = async (event: FormEvent) => {
    event.preventDefault()
    if (formEndpoint) {
      setDeskStatus('sending')
      try {
        const fd = new FormData()
        fd.append(
          'name',
          recipientName || senderName || 'Client Session Inquiry'
        )
        fd.append(
          'email',
          recipientEmail || 'inquiry@lanybooks-client-session.local'
        )
        fd.append('organization', recipientOrg)
        fd.append('role', roleLabels[audience][lang])
        fd.append('phone', recipientPhone)
        fd.append('message', `${subjectText}\n\n${fullBodyText}`)
        const res = await fetch(formEndpoint, {
          method: 'POST',
          headers: { Accept: 'application/json' },
          body: fd,
        })
        if (res.ok) {
          setDeskStatus('sent')
          return
        }
      } catch {
        // Fall through to mailto / local confirmation
      }
    }
    setDeskStatus('mailto-fallback')
    window.location.href = `mailto:${encodeURIComponent(
      contactEmail
    )}?subject=${encodeURIComponent(
      `[LANY Books Client Inquiry] ${subjectText}`
    )}&body=${encodeURIComponent(fullBodyText)}`
  }

  const quietZone = 4
  const qrViewSize = qrMatrix.length + quietZone * 2

  return (
    <section
      id="client-session"
      className="section client-session-section no-print"
      aria-labelledby="client-session-heading"
      data-testid="client-share-session"
    >
      <div className="client-session-header">
        <div>
          <p className="eyebrow">
            {lang === 'es'
              ? 'Sesión de Envío, Enlaces Directos y Código QR · Correo, WhatsApp y SMS'
              : 'Client Share Session, Direct Links & QR Code Generator · Email, WhatsApp & SMS'}
          </p>
          <h2 id="client-session-heading">
            {lang === 'es'
              ? 'Generador de Enlaces Directos, Copiado Rápido y Código QR para el Folleto Físico'
              : 'Direct WhatsApp & SMS Link Generator, Copy-to-Clipboard Bundle & Print Brochure QR Code'}
          </h2>
          <p className="lead">
            {lang === 'es'
              ? 'Copie al portapapeles el enlace al folleto junto con la lista del kit, genere enlaces directos de WhatsApp y SMS, o descargue un código QR vectorial con la URL de la página y el mensaje prellenado para imprimir en el folleto físico. Las portadas y el rotafolio de 17" × 22" son a color; las 92 páginas interiores del Libro del Alumno y las hojas reproducibles son en Blanco y Negro.'
              : 'Bundle and copy the brochure link and 10-piece kit checklist to your clipboard with one click, generate direct WhatsApp/SMS links, or use the built-in QR Code Generator encoding the current page URL and pre-filled message for physical brochure distribution. Book covers and the 17" × 22" flipchart are full-color; the 92 Student Book interior pages and reproducible sheets are Black and White.'}
          </p>
        </div>
      </div>

      {/* Visual Strip of Authentic Kit Materials (Color Covers/Easel + Black & White Physical Pages) */}
      <div
        className="client-materials-strip"
        data-testid="client-materials-strip"
      >
        {materialShowcases.map((item) => (
          <figure key={item.id} className="client-material-thumb-card">
            <div className="client-material-img-wrap">
              <img src={item.src} alt={item.title[lang]} loading="lazy" />
              <span className="client-material-print-badge">
                {item.badge[lang]}
              </span>
            </div>
            <figcaption>
              <strong>{item.title[lang]}</strong>
              <span>{item.sub[lang]}</span>
            </figcaption>
          </figure>
        ))}
      </div>

      <div className="client-session-grid">
        {/* Left Column: Session Composer Controls */}
        <form className="client-session-card" onSubmit={handleSendToLanyDesk}>
          <div className="client-session-step">
            <span className="client-step-label">
              {lang === 'es'
                ? '1. Seleccione el Perfil del Destinatario y el Idioma del Mensaje'
                : '1. Select Client Audience & Message Language'}
            </span>
            <div
              className="client-role-tabs"
              role="group"
              aria-label="Audience Role"
            >
              {(
                ['school', 'teacher', 'parent', 'distributor'] as AudienceRole[]
              ).map((roleKey) => (
                <button
                  key={roleKey}
                  type="button"
                  className={`client-role-tab ${
                    audience === roleKey ? 'active' : ''
                  }`}
                  onClick={() => setAudience(roleKey)}
                >
                  {roleLabels[roleKey][lang]}
                </button>
              ))}
            </div>

            <div className="client-lang-row">
              <span>
                {lang === 'es' ? 'Idioma del mensaje:' : 'Message language:'}
              </span>
              <div className="client-lang-pills">
                <button
                  type="button"
                  className={`client-lang-pill ${
                    msgLang === 'en' ? 'active' : ''
                  }`}
                  onClick={() => setMsgLang('en')}
                >
                  English
                </button>
                <button
                  type="button"
                  className={`client-lang-pill ${
                    msgLang === 'es' ? 'active' : ''
                  }`}
                  onClick={() => setMsgLang('es')}
                >
                  Español
                </button>
                <button
                  type="button"
                  className={`client-lang-pill ${
                    msgLang === 'bilingual' ? 'active' : ''
                  }`}
                  onClick={() => setMsgLang('bilingual')}
                >
                  {lang === 'es'
                    ? 'Bilingüe (EN + ES)'
                    : 'Bilingual (EN + ES)'}
                </button>
              </div>
            </div>
          </div>

          <div className="client-session-step">
            <span className="client-step-label">
              {lang === 'es'
                ? '2. Datos del Cliente / Destinatario (Actualiza Enlaces y Código QR)'
                : '2. Client / Recipient Details (Auto-Updates Links & QR Code)'}
            </span>
            <div className="client-fields-grid">
              <label htmlFor="client-recipient-name">
                {lang === 'es'
                  ? 'Nombre del cliente o contacto'
                  : 'Client / Contact Name'}
                <input
                  id="client-recipient-name"
                  type="text"
                  placeholder={
                    lang === 'es'
                      ? 'Ej. Dra. Elena Morales'
                      : 'e.g. Dr. Elena Morales'
                  }
                  value={recipientName}
                  onChange={(e) => setRecipientName(e.target.value)}
                />
              </label>
              <label htmlFor="client-recipient-org">
                {lang === 'es'
                  ? 'Escuela, distrito u organización'
                  : 'School, District, or Organization'}
                <input
                  id="client-recipient-org"
                  type="text"
                  placeholder={
                    lang === 'es'
                      ? 'Ej. Academia Bilingüe San Marcos'
                      : 'e.g. San Marcos Dual-Language Academy'
                  }
                  value={recipientOrg}
                  onChange={(e) => setRecipientOrg(e.target.value)}
                />
              </label>
              <label htmlFor="client-recipient-email">
                {lang === 'es'
                  ? 'Correo electrónico del cliente'
                  : 'Client Email Address'}
                <input
                  id="client-recipient-email"
                  type="email"
                  placeholder="client@school.edu"
                  value={recipientEmail}
                  onChange={(e) => setRecipientEmail(e.target.value)}
                />
              </label>
              <label htmlFor="client-recipient-phone">
                {lang === 'es'
                  ? 'Número de WhatsApp / SMS (con código de país)'
                  : 'WhatsApp / SMS Phone Number (optional)'}
                <input
                  id="client-recipient-phone"
                  type="tel"
                  placeholder="+13055550199"
                  value={recipientPhone}
                  onChange={(e) => setRecipientPhone(e.target.value)}
                />
              </label>
            </div>
          </div>

          <div className="client-session-step">
            <span className="client-step-label">
              {lang === 'es'
                ? '3. Elementos del Producto Físico Incluidos (Páginas Interiores en Blanco y Negro)'
                : '3. Included Brochure URL, 10-Piece Kit Checklist & B&W Physical Pages'}
            </span>
            <div className="client-checklist">
              {PACKET_OPTIONS.map((option) => {
                const checked = selectedIds.includes(option.id)
                return (
                  <label
                    key={option.id}
                    className={`client-check-item ${checked ? 'checked' : ''}`}
                  >
                    <input
                      type="checkbox"
                      checked={checked}
                      onChange={() => toggleItem(option.id)}
                    />
                    <img
                      src={kitAssets[option.thumbKey]}
                      alt=""
                      className="client-check-thumb"
                      loading="lazy"
                    />
                    <span>{option.label[lang]}</span>
                  </label>
                )
              })}
            </div>
          </div>

          <div className="client-session-step">
            <div className="client-fields-grid">
              <label htmlFor="client-sender-name">
                {lang === 'es'
                  ? 'Firmado por (Su nombre o cargo)'
                  : 'Signed By (Your Name / Title)'}
                <input
                  id="client-sender-name"
                  type="text"
                  placeholder="LANY Books Publishing"
                  value={senderName}
                  onChange={(e) => setSenderName(e.target.value)}
                />
              </label>
              <label htmlFor="client-custom-note">
                {lang === 'es'
                  ? 'Nota adicional para el cliente'
                  : 'Custom Note or Demonstration Time'}
                <input
                  id="client-custom-note"
                  type="text"
                  placeholder={
                    lang === 'es'
                      ? 'Ej. Disponible el jueves para mostrar el rotafolio...'
                      : 'e.g. Available Thursday to walk through the flipchart...'
                  }
                  value={customNote}
                  onChange={(e) => setCustomNote(e.target.value)}
                />
              </label>
            </div>
          </div>

          {/* Direct Inquiry to LANY Books Desk Button */}
          <div className="client-desk-submit-bar">
            <button
              type="submit"
              className="button primary"
              data-testid="send-lany-desk-btn"
            >
              {deskStatus === 'sending'
                ? lang === 'es'
                  ? 'Enviando solicitud...'
                  : 'Sending inquiry...'
                : lang === 'es'
                ? 'Enviar Solicitud Directa a la Mesa de LANY Books'
                : 'Send Direct Inquiry Request to LANY Books Desk'}
            </button>
            {deskStatus === 'sent' ? (
              <span className="client-desk-feedback success" role="status">
                {lang === 'es'
                  ? 'Solicitud registrada y enviada a LANY Books.'
                  : 'Inquiry registered and sent to the LANY Books desk.'}
              </span>
            ) : null}
            {deskStatus === 'mailto-fallback' ? (
              <span className="client-desk-feedback" role="status">
                {lang === 'es'
                  ? 'Abriendo su cliente de correo con la solicitud lista para LANY Books.'
                  : 'Opened your email composer pre-addressed with this inquiry packet.'}
              </span>
            ) : null}
          </div>
        </form>

        {/* Right Column: Copy-to-Clipboard Bundle, Direct Link Generator, QR Code Generator & Live Preview */}
        <div className="client-session-preview-card">
          <div className="client-preview-header">
            <div>
              <span className="client-step-label">
                {lang === 'es'
                  ? '4. Copiado Rápido, Enlaces Directos (WhatsApp/SMS) y Código QR'
                  : '4. Copy to Clipboard, Direct Links (WhatsApp/SMS) & QR Code Generator'}
              </span>
              <h3>
                {lang === 'es'
                  ? 'Enlace al Folleto + Lista del Kit Listos para Pegar o Escanear'
                  : 'Brochure Link + Kit Checklist Ready to Paste or Scan'}
              </h3>
            </div>
            <a
              href="/exports/la-cartilla-de-gretel-brochure-screen.pdf"
              download="La-Cartilla-de-Gretel-LANY-Books-Brochure.pdf"
              className="smallButton gold"
            >
              {lang === 'es'
                ? 'Descargar PDF Adjuntable'
                : 'Download Attachable PDF'}
            </a>
          </div>

          {/* Prominent Copy to Clipboard Bar (Brochure Link + 10-Piece Kit Checklist Bundle) */}
          <div
            className="client-clipboard-bundle-bar"
            data-testid="clipboard-bundle-bar"
          >
            <div className="client-clipboard-bundle-copy">
              <strong>
                {lang === 'es'
                  ? 'Paquete Rápido para Aplicaciones de Mensajería (URL del Folleto + Lista de 10 Componentes)'
                  : 'Quick Messaging App Bundle (Brochure Link + 10-Piece Kit Checklist)'}
              </strong>
              <span>
                {lang === 'es'
                  ? 'Copia el enlace directo al PDF de 10 páginas junto con la lista completa del kit en un solo clic.'
                  : 'Bundles the 10-page brochure PDF link and the 10-piece kit checklist text for instant pasting into any chat app.'}
              </span>
            </div>
            <button
              type="button"
              className="button primary client-copy-clipboard-main-btn"
              onClick={() =>
                handleCopyText(clipboardBundleText, 'clipboard-bundle')
              }
              data-testid="copy-to-clipboard-btn"
            >
              {copiedState === 'clipboard-bundle'
                ? lang === 'es'
                  ? '✓ Copiado al Portapapeles (Enlace + Lista del Kit)'
                  : '✓ Copied to Clipboard (Brochure Link + Kit Checklist)'
                : lang === 'es'
                ? 'Copy to Clipboard · Copiar al Portapapeles'
                : 'Copy to Clipboard (Brochure Link + Kit Checklist)'}
            </button>
          </div>

          {/* Direct Link Generator Box for WhatsApp and SMS */}
          <div
            className="client-direct-link-generator"
            data-testid="direct-link-generator"
          >
            <div className="client-link-gen-row">
              <div className="client-link-gen-label">
                <strong>
                  {lang === 'es'
                    ? 'Enlace Directo de WhatsApp (URL + Lista del Kit):'
                    : 'WhatsApp Direct Link (Brochure URL + Kit Checklist):'}
                </strong>
                <span>
                  {waPhoneDigits
                    ? `${lang === 'es' ? 'Destinatario' : 'Recipient'}: +${waPhoneDigits}`
                    : lang === 'es'
                    ? 'Selector universal de contacto en WhatsApp'
                    : 'Universal WhatsApp contact picker'}
                </span>
              </div>
              <div className="client-link-gen-input-group">
                <input
                  type="text"
                  readOnly
                  value={whatsappHref}
                  aria-label="Generated WhatsApp Direct Link"
                  data-testid="generated-whatsapp-url"
                  onFocus={(e) => e.currentTarget.select()}
                />
                <button
                  type="button"
                  className="smallButton dark"
                  onClick={() => handleCopyText(whatsappHref, 'wa-link')}
                  data-testid="copy-whatsapp-url-btn"
                >
                  {copiedState === 'wa-link'
                    ? lang === 'es'
                      ? '✓ Enlace Copiado'
                      : '✓ Link Copied'
                    : lang === 'es'
                    ? 'Copiar Enlace WA'
                    : 'Copy WA Link'}
                </button>
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="smallButton gold"
                  data-testid="open-whatsapp-url-btn"
                >
                  {lang === 'es' ? 'Abrir WA ↗' : 'Open WA ↗'}
                </a>
              </div>
            </div>

            <div className="client-link-gen-row">
              <div className="client-link-gen-label">
                <strong>
                  {lang === 'es'
                    ? 'Enlace Directo SMS (URL del Folleto + Lista de 10 Componentes):'
                    : 'SMS Direct Link (Brochure URL + 10-Piece Kit Checklist):'}
                </strong>
                <span>
                  {cleanPhoneDigits
                    ? `${lang === 'es' ? 'Número SMS' : 'SMS Number'}: ${cleanPhoneDigits}`
                    : lang === 'es'
                    ? 'Enlace SMS listo para cualquier teléfono móvil'
                    : 'Ready for any mobile SMS app'}
                </span>
              </div>
              <div className="client-link-gen-input-group">
                <input
                  type="text"
                  readOnly
                  value={smsHref}
                  aria-label="Generated SMS Direct Link"
                  data-testid="generated-sms-url"
                  onFocus={(e) => e.currentTarget.select()}
                />
                <button
                  type="button"
                  className="smallButton dark"
                  onClick={() => handleCopyText(smsHref, 'sms-link')}
                  data-testid="copy-sms-url-btn"
                >
                  {copiedState === 'sms-link'
                    ? lang === 'es'
                      ? '✓ Enlace Copiado'
                      : '✓ Link Copied'
                    : lang === 'es'
                    ? 'Copiar Enlace SMS'
                    : 'Copy SMS Link'}
                </button>
                <a
                  href={smsHref}
                  className="smallButton gold"
                  data-testid="open-sms-url-btn"
                >
                  {lang === 'es' ? 'Abrir SMS ↗' : 'Open SMS ↗'}
                </a>
              </div>
            </div>
          </div>

          {/* QR Code Generator for Physical Brochure Distribution */}
          <div
            className="client-qr-generator-card"
            data-testid="qr-code-generator"
          >
            <div className="client-qr-visual-col">
              <svg
                viewBox={`0 0 ${qrViewSize} ${qrViewSize}`}
                shapeRendering="crispEdges"
                className="client-qr-svg"
                role="img"
                aria-label={
                  lang === 'es'
                    ? 'Código QR con la URL de la página actual y mensaje prellenado para distribución impresa'
                    : 'QR code encoding the current page URL and pre-filled message for physical brochure distribution'
                }
                data-testid="qr-code-svg"
              >
                <rect
                  width={qrViewSize}
                  height={qrViewSize}
                  fill="#ffffff"
                />
                {qrMatrix.map((row, y) =>
                  row.map((cell, x) =>
                    cell ? (
                      <rect
                        key={`${x}-${y}`}
                        x={x + quietZone}
                        y={y + quietZone}
                        width={1}
                        height={1}
                        fill="#0f172a"
                      />
                    ) : null
                  )
                )}
              </svg>
              <span className="client-qr-caption">
                {lang === 'es'
                  ? 'Escaneable para Folleto Impreso'
                  : 'Scannable for Print Brochure'}
              </span>
            </div>

            <div className="client-qr-controls-col">
              <div className="client-qr-header">
                <strong>
                  {lang === 'es'
                    ? 'Generador de Código QR para Distribución del Folleto Físico'
                    : 'QR Code Generator for Physical Brochure Distribution'}
                </strong>
                <span>
                  {lang === 'es'
                    ? 'Codifica la URL de la página actual y el mensaje prellenado para que escuelas y familias escaneen desde el folleto impreso.'
                    : 'Encodes the current page URL and pre-filled message so teachers, schools, and families can scan directly from printed brochures.'}
                </span>
              </div>

              <div
                className="client-qr-mode-pills"
                role="group"
                aria-label="QR Encoding Mode"
              >
                <button
                  type="button"
                  className={`client-lang-pill ${
                    qrMode === 'page-prefilled' ? 'active' : ''
                  }`}
                  onClick={() => setQrMode('page-prefilled')}
                  data-testid="qr-mode-page-btn"
                >
                  {lang === 'es'
                    ? 'URL de Página + Mensaje Prellenado'
                    : 'Page URL + Pre-Filled Message'}
                </button>
                <button
                  type="button"
                  className={`client-lang-pill ${
                    qrMode === 'whatsapp-direct' ? 'active' : ''
                  }`}
                  onClick={() => setQrMode('whatsapp-direct')}
                  data-testid="qr-mode-whatsapp-btn"
                >
                  {lang === 'es'
                    ? 'QR Directo a WhatsApp'
                    : 'WhatsApp Direct QR'}
                </button>
                <button
                  type="button"
                  className={`client-lang-pill ${
                    qrMode === 'bundle-text' ? 'active' : ''
                  }`}
                  onClick={() => setQrMode('bundle-text')}
                  data-testid="qr-mode-bundle-btn"
                >
                  {lang === 'es'
                    ? 'URL + Texto del Kit'
                    : 'Page URL + Kit Text'}
                </button>
              </div>

              <div className="client-link-gen-input-group">
                <input
                  type="text"
                  readOnly
                  value={qrPayload}
                  aria-label="Encoded QR Payload"
                  data-testid="qr-encoded-payload"
                  onFocus={(e) => e.currentTarget.select()}
                />
                <button
                  type="button"
                  className="smallButton dark"
                  onClick={() => handleCopyText(qrPayload, 'qr-payload')}
                  data-testid="copy-qr-url-btn"
                >
                  {copiedState === 'qr-payload'
                    ? lang === 'es'
                      ? '✓ Copiado'
                      : '✓ Copied'
                    : lang === 'es'
                    ? 'Copiar Datos QR'
                    : 'Copy QR Data'}
                </button>
                <button
                  type="button"
                  className="smallButton gold"
                  onClick={handleDownloadQrSvg}
                  data-testid="download-qr-svg-btn"
                >
                  {lang === 'es'
                    ? 'Descargar QR (SVG)'
                    : 'Download QR (SVG)'}
                </button>
              </div>
            </div>
          </div>

          <div className="client-preview-subject">
            <span>{lang === 'es' ? 'Asunto:' : 'Subject:'}</span>
            <strong>{subjectText}</strong>
          </div>

          <pre
            className="client-preview-body"
            data-testid="client-message-preview"
          >
            {fullBodyText}
          </pre>

          <div className="client-channel-buttons">
            <a
              href={mailtoHref}
              className="button primary client-channel-btn client-channel-btn--email"
              data-testid="launch-email-btn"
            >
              {lang === 'es' ? 'Enviar por Correo (Email)' : 'Send via Email'}
            </a>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="button client-channel-btn client-channel-btn--whatsapp"
              data-testid="launch-whatsapp-btn"
            >
              {lang === 'es' ? 'Enviar por WhatsApp' : 'Send to WhatsApp'}
            </a>
            <a
              href={smsHref}
              className="button secondary client-channel-btn client-channel-btn--sms"
              data-testid="launch-sms-btn"
            >
              {lang === 'es' ? 'Enviar por Mensaje (SMS)' : 'Send via SMS Text'}
            </a>
          </div>

          <div className="client-copy-actions">
            <button
              type="button"
              className="smallButton dark"
              onClick={() =>
                handleCopyText(`${subjectText}\n\n${fullBodyText}`, 'packet')
              }
              data-testid="copy-client-packet-btn"
            >
              {copiedState === 'packet'
                ? lang === 'es'
                  ? '✓ Paquete completo copiado al portapapeles'
                  : '✓ Full Client Packet Copied'
                : lang === 'es'
                ? 'Copiar paquete completo (Correo / WhatsApp)'
                : 'Copy Full Packet (Email / WhatsApp)'}
            </button>
            <button
              type="button"
              className="smallButton gold"
              onClick={() => handleCopyText(smsBodyText, 'sms')}
              data-testid="copy-sms-packet-btn"
            >
              {copiedState === 'sms'
                ? lang === 'es'
                  ? '✓ Mensaje SMS con lista del kit copiado'
                  : '✓ SMS Text with Kit Checklist Copied'
                : lang === 'es'
                ? 'Copiar texto para SMS (URL + Lista del Kit)'
                : 'Copy SMS Text (URL + Kit Checklist)'}
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
