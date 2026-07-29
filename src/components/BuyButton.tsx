import { getActiveBuyLink, type Product } from '../config/products'

interface BuyButtonProps {
  product: Product
  className?: string
  variant?: 'primary' | 'secondary' | 'soft'
}

export function BuyButton({ product, className = '', variant = 'primary' }: BuyButtonProps) {
  const link = getActiveBuyLink(product)
  const isStripe = Boolean(product.stripeLink)

  return (
    <a
      className={`button ${variant} ${className}`}
      href={link}
      target={isStripe ? '_blank' : undefined}
      rel={isStripe ? 'noopener noreferrer' : undefined}
      aria-label={isStripe ? `Buy ${product.name}` : `Request info for ${product.name}`}
    >
      {product.cta}
    </a>
  )
}
