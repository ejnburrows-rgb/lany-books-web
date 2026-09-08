import { BuyButton } from './BuyButton'
import { type Product } from '../config/products'

interface ProductCardProps {
  product: Product
  highlighted?: boolean
  lang?: 'en' | 'es'
}

export function ProductCard({ product, highlighted = false, lang = 'en' }: ProductCardProps) {
  return (
    <article className={`routeCard ${highlighted ? 'package' : ''}`}>
      <h3>{product.name}</h3>
      <div className="price">
        {product.price === null ? (
          <span className="pricePlaceholder">{product.priceNote}</span>
        ) : (
          `$${product.price.toFixed(2)}`
        )}
      </div>
      <p className="routeDesc">{product.description}</p>
      <ul className="productFeatures">
        {product.features.map((feature) => (
          <li key={feature}>{feature}</li>
        ))}
      </ul>
      <BuyButton product={product} lang={lang} variant={highlighted ? 'primary' : 'secondary'} />
    </article>
  )
}
