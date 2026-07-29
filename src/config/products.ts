export type ProductId =
  | 'book-only'
  | 'combo-digital'
  | 'combo-print'
  | 'combo-classroom'
  | 'combo-district'

export interface Product {
  id: ProductId
  name: string
  description: string
  price: number | null // null means "price TBD — confirm with E N"
  priceNote: string
  features: string[]
  cta: string
  // When Stripe is activated, paste the payment link here. Until then, all
  // buy buttons route to the contact form.
  stripeLink: string | null
}

export const products: Product[] = [
  {
    id: 'book-only',
    name: 'La Cartilla de Gretel — Student Workbook',
    description: 'The printed 92-page student workbook. Perfect for families or individual classroom copies.',
    price: null,
    priceNote: 'Price to be confirmed by E N (GATE)',
    features: ['92 full-color pages', '24 phonics lessons', 'Tracing + writing activities', 'Single copy'],
    cta: 'Request a quote',
    stripeLink: null
  },
  {
    id: 'combo-digital',
    name: 'Digital + Print Bundle — Individual',
    description: 'One printed workbook plus lifetime access to the digital companion and audio read-aloud.',
    price: null,
    priceNote: 'Price to be confirmed by E N (GATE)',
    features: ['Printed workbook', 'Digital companion access', 'Audio read-aloud', 'Personal license'],
    cta: 'Request a quote',
    stripeLink: null
  },
  {
    id: 'combo-print',
    name: 'Print Classroom Pack — 10 Copies',
    description: 'Ten student workbooks shipped to one classroom, with reproducible syllable charts.',
    price: null,
    priceNote: 'Price to be confirmed by E N (GATE)',
    features: ['10 student workbooks', 'Reproducible syllable charts', 'Classroom license', 'Volume pricing'],
    cta: 'Request a quote',
    stripeLink: null
  },
  {
    id: 'combo-classroom',
    name: 'Full Classroom Kit — Print + Digital + Flipchart',
    description: 'Everything for one teacher: printed books, digital access, and the classroom flipchart.',
    price: null,
    priceNote: 'Price to be confirmed by E N (GATE)',
    features: ['25 student workbooks', 'Teacher dashboard access', 'Classroom flipchart', 'Digital companion'],
    cta: 'Request a quote',
    stripeLink: null
  },
  {
    id: 'combo-district',
    name: 'District Package — Multi-School License',
    description: 'Custom quote for schools and districts. Includes teacher training and bulk pricing.',
    price: null,
    priceNote: 'Price to be confirmed by E N (GATE)',
    features: ['Multi-school license', 'Teacher training call', 'Bulk pricing', 'Dedicated support'],
    cta: 'Contact us',
    stripeLink: null
  }
]

export function getProductById(id: ProductId): Product | undefined {
  return products.find((p) => p.id === id)
}

export function getActiveBuyLink(product: Product): string {
  // Stripe-ready: when a Stripe link is configured, return it. Otherwise the
  // storefront stays contact-form-only as requested.
  return product.stripeLink ?? '#contact'
}
