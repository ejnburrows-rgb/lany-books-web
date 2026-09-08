import { getActiveBuyLink, type Product } from '../config/products'
interface BuyButtonProps { product: Product; lang?: 'en'|'es'; className?: string; variant?: 'primary'|'secondary'|'soft' }
export function BuyButton({ product, lang = 'en', className = '', variant = 'primary' }: BuyButtonProps) {
  const link = getActiveBuyLink(product)
  const isStripe = Boolean(product.stripeLink)
  const label = lang === 'es' ? `${isStripe ? 'Comprar' : 'Solicitar información sobre'} ${product.name}` : `${isStripe ? 'Buy' : 'Request info for'} ${product.name}`
  return (<a className={`button ${variant} ${className}`} href={link} target={isStripe?'_blank':undefined} rel={isStripe?'noopener noreferrer':undefined} aria-label={label}>{product.cta}</a>)
}
