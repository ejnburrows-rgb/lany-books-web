import { BuyButton } from './BuyButton'
import { type Product } from '../config/products'

interface ProductCardProps {
  product: Product
  highlighted?: boolean
}

export function ProductCard({ product, highlighted = false }: ProductCardProps) {
  return (
    <article className={`routeCard ${highlighted ? 'package' : ''}`}>
      {highlighted ? <span className="routeBadge">Best value</span> : null}
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
      <BuyButton product={product} variant={highlighted ? 'primary' : 'secondary'} />
    </article>
  )
}
