export type RetailerId = 'amazon' | 'audible' | 'kindle' | 'bn' | 'kobo'

export interface RetailerLink {
  id: RetailerId
  name: string
  format: string
  editionNote: string
  cta: string
  url: string
  comingSoonNote: string
}

const urls: Record<RetailerId, string> = {
  amazon: (import.meta.env?.VITE_AMAZON_URL as string | undefined)?.trim() || '',
  audible: (import.meta.env?.VITE_AUDIBLE_URL as string | undefined)?.trim() || '',
  kindle: (import.meta.env?.VITE_KINDLE_URL as string | undefined)?.trim() || '',
  bn: (import.meta.env?.VITE_BN_URL as string | undefined)?.trim() || '',
  kobo: (import.meta.env?.VITE_KOBO_URL as string | undefined)?.trim() || '',
}

const english: Omit<RetailerLink, 'url'>[] = [
  {
    id: 'amazon',
    name: 'Amazon',
    format: 'Print Edition (Paperback & Hardcover)',
    editionNote: '92-page full-color Student Book & Classroom Editions',
    cta: 'Order on Amazon',
    comingSoonNote: 'The official Amazon print listing for La Cartilla de Gretel is coming soon. Request early availability or school copies below.',
  },
  {
    id: 'audible',
    name: 'Audible',
    format: 'Narrated Audiobook & Flipchart Poems',
    editionNote: 'Spanish phonetic pronunciation & musical poems',
    cta: 'Listen on Audible',
    comingSoonNote: 'The official Audible edition featuring the narrated poems and phonetic lessons of La Cartilla de Gretel is coming soon.',
  },
  {
    id: 'kindle',
    name: 'Amazon Kindle',
    format: 'Digital Kindle eBook Edition',
    editionNote: 'Full-color digital reading & phonetic exercises',
    cta: 'Read on Kindle',
    comingSoonNote: 'The Amazon Kindle digital edition of La Cartilla de Gretel is coming soon. Contact us below for early release notifications.',
  },
  {
    id: 'bn',
    name: 'Barnes & Noble',
    format: 'Print Edition & NOOK Book',
    editionNote: 'Available for retail readers, educators & families',
    cta: 'View at Barnes & Noble',
    comingSoonNote: 'The Barnes & Noble print and NOOK edition of La Cartilla de Gretel is coming soon. Reach out below to reserve copies.',
  },
]

const spanish: Omit<RetailerLink, 'url'>[] = [
  {
    id: 'amazon',
    name: 'Amazon',
    format: 'Edición Impresa (Pasta Blanda y Dura)',
    editionNote: 'Libro del Alumno de 92 páginas a todo color',
    cta: ' Ordenar en Amazon',
    comingSoonNote: 'La publicación oficial impresa en Amazon de La Cartilla de Gretel estará disponible próximamente. Solicite copias o aviso de lanzamiento abajo.',
  },
  {
    id: 'audible',
    name: 'Audible',
    format: 'Audiolibro y Poemas del Rotafolio',
    editionNote: 'Pronunciación fonética en español y poemas narrados',
    cta: 'Escuchar en Audible',
    comingSoonNote: 'La edición oficial en Audible con los poemas narrados y lecciones fonéticas de La Cartilla de Gretel estará disponible próximamente.',
  },
  {
    id: 'kindle',
    name: 'Amazon Kindle',
    format: 'Edición Digital Kindle eBook',
    editionNote: 'Lectura digital a todo color y práctica fonética',
    cta: 'Leer en Kindle',
    comingSoonNote: 'La edición digital para Amazon Kindle de La Cartilla de Gretel estará disponible próximamente. Solicite notificación de lanzamiento abajo.',
  },
  {
    id: 'bn',
    name: 'Barnes & Noble',
    format: 'Edición Impresa y NOOK Book',
    editionNote: 'Ediciones para familias, lectores y educadores',
    cta: 'Ver en Barnes & Noble',
    comingSoonNote: 'La edición de La Cartilla de Gretel en Barnes & Noble estará disponible próximamente. Contáctenos abajo para reservar ejemplares.',
  },
]

export function getRetailers(lang: 'en' | 'es'): RetailerLink[] {
  const catalog = lang === 'es' ? spanish : english
  return catalog.map((retailer) => ({
    ...retailer,
    cta: retailer.cta.trim(),
    url: urls[retailer.id],
  }))
}
