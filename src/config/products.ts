export type ProductId = 'book-only'|'combo-print'|'combo-classroom'|'combo-district'
export interface Product { id: ProductId; name: string; description: string; price: number | null; priceNote: string; features: string[]; cta: string; stripeLink: string | null }
export const products: Product[] = [
  { id:'book-only', name:'La Cartilla de Gretel — Student Workbook', description:'The printed 92-page student workbook.', price:null, priceNote:'Price to be confirmed', features:['92 workbook pages','24 phonics lessons','Tracing + writing activities','Single copy'], cta:'Request information', stripeLink:null },
  { id:'combo-print', name:'Print Classroom Pack — 10 Copies', description:'Ten student workbooks for classroom use.', price:null, priceNote:'Price to be confirmed', features:['10 student workbooks','Reproducible syllable charts','Classroom-use format','Contact LANY Books for availability'], cta:'Request information', stripeLink:null },
  { id:'combo-classroom', name:'Full Classroom Kit — Print + Flipchart', description:'Printed workbooks and the classroom flipchart for one classroom.', price:null, priceNote:'Price to be confirmed', features:['25 student workbooks','Classroom flipchart','Reproducible syllable charts','Contact LANY Books for availability'], cta:'Request information', stripeLink:null },
  { id:'combo-district', name:'School or District Inquiry', description:'Contact LANY Books for current product availability and school-ordering options.', price:null, priceNote:'Price to be confirmed', features:['School inquiries','Classroom-set inquiries','Current availability by request','Current ordering details by request'], cta:'Contact us', stripeLink:null }
]
export function getProductById(id: ProductId): Product | undefined { return products.find(p => p.id === id) }
const spanishProducts: Record<ProductId, Pick<Product, 'name' | 'description' | 'features'>> = {
  'book-only': { name: 'La Cartilla de Gretel — Libro del alumno', description: 'El libro impreso de 92 páginas para el alumno.', features: ['92 páginas de actividades', '24 lecciones de fonética', 'Actividades de trazado y escritura', 'Un ejemplar'] },
  'combo-print': { name: 'Paquete impreso para el aula — 10 ejemplares', description: 'Diez libros del alumno para uso en el aula.', features: ['10 libros del alumno', 'Láminas de sílabas reproducibles', 'Formato para uso en el aula', 'Consulte disponibilidad con LANY Books'] },
  'combo-classroom': { name: 'Kit completo para el aula — Libros y rotafolio', description: 'Libros impresos y el rotafolio para un aula.', features: ['25 libros del alumno', 'Rotafolio para el aula', 'Láminas de sílabas reproducibles', 'Consulte disponibilidad con LANY Books'] },
  'combo-district': { name: 'Consulta para escuelas o distritos', description: 'Contacte a LANY Books para conocer la disponibilidad actual y las opciones de pedido para escuelas.', features: ['Consultas para escuelas', 'Consultas sobre juegos para el aula', 'Disponibilidad actual por solicitud', 'Detalles actuales de pedido por solicitud'] },
}
export function getProducts(lang: 'en' | 'es'): Product[] {
  return lang === 'es' ? products.map(product => ({ ...product, ...spanishProducts[product.id], priceNote: 'Precio por confirmar', cta: product.id === 'combo-district' ? 'Contáctenos' : 'Solicitar información' })) : products
}
export function getActiveBuyLink(product: Product): string { return product.stripeLink ?? '#contact' }
