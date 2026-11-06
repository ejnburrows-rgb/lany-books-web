import type { RetailerId, RetailerLink } from '../config/retailers'

interface RetailerCardProps {
  retailer: RetailerLink
  lang: 'en' | 'es'
  onComingSoon: (retailer: RetailerLink) => void
}

function RetailerBrandLogo({ id }: { id: RetailerId }) {
  switch (id) {
    case 'amazon':
      return (
        <svg
          className="retailer-brand-svg retailer-brand-svg--amazon"
          viewBox="0 0 180 54"
          role="img"
          aria-label="Amazon"
        >
          <text
            x="8"
            y="33"
            fill="#111827"
            fontFamily="'Nunito', 'Plus Jakarta Sans', sans-serif"
            fontWeight="900"
            fontSize="31"
            letterSpacing="-0.8"
          >
            amazon
          </text>
          <path
            d="M22 40 C52 51, 98 51, 128 39"
            fill="none"
            stroke="#FF9900"
            strokeWidth="3.8"
            strokeLinecap="round"
          />
          <path
            d="M121 35 L131 38.5 L124 46"
            fill="none"
            stroke="#FF9900"
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )
    case 'audible':
      return (
        <svg
          className="retailer-brand-svg retailer-brand-svg--audible"
          viewBox="0 0 190 54"
          role="img"
          aria-label="Audible"
        >
          <text
            x="6"
            y="36"
            fill="#111827"
            fontFamily="'Nunito', 'Plus Jakarta Sans', sans-serif"
            fontWeight="800"
            fontSize="29"
            letterSpacing="-0.5"
          >
            audible
          </text>
          <path
            d="M120 35 L136 22 L152 35"
            fill="none"
            stroke="#F7991C"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M125 27 C131 21, 141 21, 147 27"
            fill="none"
            stroke="#F7991C"
            strokeWidth="2.8"
            strokeLinecap="round"
          />
          <path
            d="M129 20 C133 16, 139 16, 143 20"
            fill="none"
            stroke="#F7991C"
            strokeWidth="2.4"
            strokeLinecap="round"
          />
        </svg>
      )
    case 'kindle':
      return (
        <svg
          className="retailer-brand-svg retailer-brand-svg--kindle"
          viewBox="0 0 190 54"
          role="img"
          aria-label="Amazon Kindle"
        >
          <text
            x="6"
            y="21"
            fill="#4B5563"
            fontFamily="'Nunito', 'Plus Jakarta Sans', sans-serif"
            fontWeight="800"
            fontSize="12"
            letterSpacing="0.8"
          >
            amazon
          </text>
          <text
            x="6"
            y="43"
            fill="#0F172A"
            fontFamily="'Nunito', 'Plus Jakarta Sans', sans-serif"
            fontWeight="900"
            fontSize="28"
            letterSpacing="-0.6"
          >
            kindle
          </text>
          <path
            d="M14 48 C42 53, 82 53, 108 46"
            fill="none"
            stroke="#00A8E1"
            strokeWidth="3.2"
            strokeLinecap="round"
          />
        </svg>
      )
    case 'bn':
    default:
      return (
        <svg
          className="retailer-brand-svg retailer-brand-svg--bn"
          viewBox="0 0 220 54"
          role="img"
          aria-label="Barnes & Noble"
        >
          <rect x="4" y="9" width="36" height="36" rx="7" fill="#1E4B38" />
          <text
            x="22"
            y="33"
            textAnchor="middle"
            fill="#F4C44E"
            fontFamily="Georgia, 'Times New Roman', serif"
            fontWeight="700"
            fontSize="16"
          >
            B&amp;N
          </text>
          <text
            x="48"
            y="26"
            fill="#1E4B38"
            fontFamily="Georgia, 'Times New Roman', serif"
            fontWeight="700"
            fontSize="16"
            letterSpacing="0.6"
          >
            BARNES &amp; NOBLE
          </text>
          <text
            x="48"
            y="41"
            fill="#64748B"
            fontFamily="'Nunito', sans-serif"
            fontWeight="700"
            fontSize="10.5"
            letterSpacing="1.4"
          >
            BOOKSELLERS
          </text>
        </svg>
      )
  }
}

export function RetailerCard({ retailer, lang, onComingSoon }: RetailerCardProps) {
  const hasLiveUrl = Boolean(retailer.url)
  const statusLabel = hasLiveUrl
    ? lang === 'es'
      ? 'Disponible'
      : 'Available'
    : lang === 'es'
      ? 'Integrado · Próximamente'
      : 'Integrated · Coming Soon'

  if (hasLiveUrl) {
    return (
      <a
        href={retailer.url}
        target="_blank"
        rel="noopener noreferrer"
        className={`retailer-card retailer-card--${retailer.id}`}
        data-testid={`retailer-card-${retailer.id}`}
      >
        <div className="retailer-card__top">
          <RetailerBrandLogo id={retailer.id} />
          <span className="retailer-card__badge retailer-card__badge--live">{statusLabel}</span>
        </div>
        <div className="retailer-card__body">
          <strong className="retailer-card__format">{retailer.format}</strong>
          <p className="retailer-card__note">{retailer.editionNote}</p>
        </div>
        <span className="retailer-card__cta">
          {retailer.cta} <span aria-hidden="true">↗</span>
        </span>
      </a>
    )
  }

  return (
    <button
      type="button"
      onClick={() => onComingSoon(retailer)}
      className={`retailer-card retailer-card--button retailer-card--${retailer.id}`}
      data-testid={`retailer-card-${retailer.id}`}
    >
      <div className="retailer-card__top">
        <RetailerBrandLogo id={retailer.id} />
        <span className="retailer-card__badge">{statusLabel}</span>
      </div>
      <div className="retailer-card__body">
        <strong className="retailer-card__format">{retailer.format}</strong>
        <p className="retailer-card__note">{retailer.editionNote}</p>
      </div>
      <span className="retailer-card__cta">
        {retailer.cta} <span aria-hidden="true">→</span>
      </span>
    </button>
  )
}
