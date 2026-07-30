export type ProductId = 'book-only'|'combo-print'|'combo-classroom'|'combo-district'
export interface Product { id: ProductId; name: string; description: string; price: number | null; priceNote: string; features: string[]; cta: string; stripeLink: string | null }
export const products: Product[] = [
  { id:'book-only', name:'La Cartilla de Gretel — Student Workbook', description:'The printed 92-page student workbook.', price:null, priceNote:'Price to be confirmed', features:['92 full-color pages','24 phonics lessons','Tracing + writing activities','Single copy'], cta:'Request a quote', stripeLink:null },
  { id:'combo-print', name:'Print Classroom Pack — 10 Copies', description:'Ten student workbooks shipped to one classroom.', price:null, priceNote:'Price to be confirmed', features:['10 student workbooks','Reproducible syllable charts','Volume pricing','Purchase orders accepted'], cta:'Request a quote', stripeLink:null },
  { id:'combo-classroom', name:'Full Classroom Kit — Print + Flipchart', description:'Everything for one teacher: printed workbooks and the classroom flipchart.', price:null, priceNote:'Price to be confirmed', features:['25 student workbooks','Classroom flipchart','Reproducible syllable charts','Volume pricing'], cta:'Request a quote', stripeLink:null },
  { id:'combo-district', name:'District Package — Bulk Orders', description:'Custom quote for schools and districts, with purchase orders and bulk pricing.', price:null, priceNote:'Price to be confirmed', features:['Purchase orders (PO) accepted','Bulk pricing','W-9 available on request','Custom quotes for districts'], cta:'Contact us', stripeLink:null }
]
export function getProductById(id: ProductId): Product | undefined { return products.find(p => p.id === id) }
export function getActiveBuyLink(product: Product): string { return product.stripeLink ?? '#contact' }
