import { BuyButton } from './BuyButton'
import type { Product } from '../config/products'

interface ProductCardProps {
  product: Product
  lang: 'en' | 'es'
  highlighted?: boolean
}

export function ProductCard({ product, lang, highlighted = false }: ProductCardProps) {
  return (
    <article className={`routeCard ${highlighted ? 'package' : ''}`}>
      {highlighted ? (
        <span className="routeBadge">{lang === 'es' ? 'Kit destacado' : 'Featured kit'}</span>
      ) : null}
      <h3>{product.name}</h3>
      <span className="price">{product.priceNote}</span>
      <p className="routeDesc">{product.description}</p>
      <ul className="productFeatures">
        {product.features.map((feature) => (
          <li key={feature}>{feature}</li>
        ))}
      </ul>
      <BuyButton
        product={product}
        lang={lang}
        variant={highlighted ? 'primary' : 'secondary'}
      />
    </article>
  )
}
