export type RetailerId = 'amazon' | 'kindle' | 'kobo' | 'audible'

export interface RetailerLink {
  id: RetailerId
  name: string
  format: string
  cta: string
  url: string
}

const urls: Record<RetailerId, string> = {
  amazon: (import.meta.env.VITE_AMAZON_URL as string | undefined)?.trim() || '',
  kindle: (import.meta.env.VITE_KINDLE_URL as string | undefined)?.trim() || '',
  kobo: (import.meta.env.VITE_KOBO_URL as string | undefined)?.trim() || '',
  audible: (import.meta.env.VITE_AUDIBLE_URL as string | undefined)?.trim() || '',
}

const english: Omit<RetailerLink, 'url'>[] = [
  { id: 'amazon', name: 'Amazon', format: 'Print edition', cta: 'View on Amazon' },
  { id: 'kindle', name: 'Kindle', format: 'Kindle eBook', cta: 'Read on Kindle' },
  { id: 'kobo', name: 'Kobo', format: 'Kobo eBook', cta: 'Read on Kobo' },
  { id: 'audible', name: 'Audible', format: 'Audiobook', cta: 'Listen on Audible' },
]

const spanish: Omit<RetailerLink, 'url'>[] = [
  { id: 'amazon', name: 'Amazon', format: 'Edición impresa', cta: 'Ver en Amazon' },
  { id: 'kindle', name: 'Kindle', format: 'Libro electrónico Kindle', cta: 'Leer en Kindle' },
  { id: 'kobo', name: 'Kobo', format: 'Libro electrónico Kobo', cta: 'Leer en Kobo' },
  { id: 'audible', name: 'Audible', format: 'Audiolibro', cta: 'Escuchar en Audible' },
]

export function getRetailers(lang: 'en' | 'es'): RetailerLink[] {
  const catalog = lang === 'es' ? spanish : english
  return catalog
    .map((retailer) => ({ ...retailer, url: urls[retailer.id] }))
    .filter((retailer) => Boolean(retailer.url))
}
