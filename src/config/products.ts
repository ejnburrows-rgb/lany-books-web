export type ProductId = 'book-only'|'combo-print'|'combo-classroom'|'combo-district'
export interface Product { id: ProductId; name: string; description: string; price: number | null; priceNote: string; features: string[]; cta: string; stripeLink: string | null }
export const products: Product[] = [
  { id:'book-only', name:'La Cartilla de Gretel — Student Workbook', description:'The printed 92-page student workbook.', price:null, priceNote:'Price to be confirmed', features:['92 workbook pages','24 phonics lessons','Tracing + writing activities','Single copy'], cta:'Request a quote', stripeLink:null },
  { id:'combo-print', name:'Print Classroom Pack — 10 Copies', description:'Ten student workbooks shipped to one classroom.', price:null, priceNote:'Price to be confirmed', features:['10 student workbooks','Reproducible syllable charts','Volume pricing','Purchase orders accepted'], cta:'Request a quote', stripeLink:null },
  { id:'combo-classroom', name:'Full Classroom Kit — Print + Flipchart', description:'Everything for one teacher: printed workbooks and the classroom flipchart.', price:null, priceNote:'Price to be confirmed', features:['25 student workbooks','Classroom flipchart','Reproducible syllable charts','Volume pricing'], cta:'Request a quote', stripeLink:null },
  { id:'combo-district', name:'District Package — Bulk Orders', description:'Custom quote for schools and districts, with purchase orders and bulk pricing.', price:null, priceNote:'Price to be confirmed', features:['Purchase orders (PO) accepted','Bulk pricing','W-9 available on request','Custom quotes for districts'], cta:'Contact us', stripeLink:null }
]
export function getProductById(id: ProductId): Product | undefined { return products.find(p => p.id === id) }
const spanishProducts: Record<ProductId, Pick<Product, 'name' | 'description' | 'features'>> = {
  'book-only': { name: 'La Cartilla de Gretel — Libro del alumno', description: 'El libro impreso de 92 páginas para el alumno.', features: ['92 páginas de actividades', '24 lecciones de fonética', 'Actividades de trazado y escritura', 'Un ejemplar'] },
  'combo-print': { name: 'Paquete impreso para el aula — 10 ejemplares', description: 'Diez libros del alumno enviados a una misma aula.', features: ['10 libros del alumno', 'Láminas de sílabas reproducibles', 'Precios por volumen', 'Se aceptan órdenes de compra'] },
  'combo-classroom': { name: 'Kit completo para el aula — Libros y rotafolio', description: 'Libros impresos y el rotafolio para el docente.', features: ['25 libros del alumno', 'Rotafolio para el aula', 'Láminas de sílabas reproducibles', 'Precios por volumen'] },
  'combo-district': { name: 'Paquete para distritos — Pedidos por volumen', description: 'Cotización personalizada para escuelas y distritos, con órdenes de compra y precios por volumen.', features: ['Se aceptan órdenes de compra', 'Precios por volumen', 'Formulario W-9 disponible a solicitud', 'Cotizaciones personalizadas para distritos'] },
}
export function getProducts(lang: 'en' | 'es'): Product[] {
  return lang === 'es' ? products.map(product => ({ ...product, ...spanishProducts[product.id], priceNote: 'Precio por confirmar', cta: product.id === 'combo-district' ? 'Contáctenos' : 'Solicitar una cotización' })) : products
}
export function getActiveBuyLink(product: Product): string { return product.stripeLink ?? '#contact' }
