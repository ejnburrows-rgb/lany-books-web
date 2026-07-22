import { useState } from 'react'

const logoPaths: Record<string, string> = {
  amazon: '/images/brands/amazon.svg',
  kindle: '/images/brands/kindle.svg',
  audible: '/images/brands/audible.svg',
  bn: '/images/brands/barnes-noble.svg'
}

function FormatGlyph({ id }: { id: string }) {
  switch (id) {
    case 'amazon':
      return (
        <svg className="formatGlyph" viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
          <path d="M3 14.5c5 4 13 4 18 0" fill="none" stroke="#FF9900" strokeWidth="2.4" strokeLinecap="round" />
          <path d="M17 13l4 1.4-1.4 3.7" fill="none" stroke="#FF9900" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    case 'kindle':
      return (
        <svg className="formatGlyph" viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
          <rect x="5" y="2.5" width="14" height="19" rx="2" fill="none" stroke="currentColor" strokeWidth="2" />
          <line x1="9" y1="7" x2="15" y2="7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          <line x1="9" y1="10" x2="15" y2="10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          <line x1="9" y1="13" x2="13" y2="13" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      )
    case 'epub':
      return (
        <svg className="formatGlyph" viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
          <path d="M12 5.5C9.5 4 6.5 3.7 4 4.2v13.2c2.5-.5 5.5-.2 8 1.3 2.5-1.5 5.5-1.8 8-1.3V4.2c-2.5-.5-5.5-.2-8 1.3z" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
          <line x1="12" y1="5.5" x2="12" y2="18.7" stroke="currentColor" strokeWidth="1.7" />
        </svg>
      )
    case 'pdf':
      return (
        <svg className="formatGlyph" viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
          <path d="M7 2.5h7l4 4V21a1 1 0 01-1 1H7a1 1 0 01-1-1V3.5a1 1 0 011-1z" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
          <path d="M14 2.5V6.5h4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
        </svg>
      )
    case 'audible':
      return (
        <svg className="formatGlyph" viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
          <path d="M5 13.2v-1.2a7 7 0 0114 0v1.2" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <rect x="3.4" y="12.8" width="4" height="6.4" rx="1.4" fill="currentColor" />
          <rect x="16.6" y="12.8" width="4" height="6.4" rx="1.4" fill="currentColor" />
        </svg>
      )
    case 'bn':
      return (
        <svg className="formatGlyph" viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
          <path d="M12 6c-2-1.4-5-1.9-8-1.4v12.8c3-.5 6 0 8 1.4 2-1.4 5-1.9 8-1.4V4.6c-3-.5-6 0-8 1.4z" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
          <line x1="12" y1="6" x2="12" y2="18.8" stroke="currentColor" strokeWidth="1.7" />
        </svg>
      )
    default:
      return null
  }
}

export function BrandLogo({ id, name, tag }: { id: string; name: string; tag: string }) {
  const [failed, setFailed] = useState(false)

  if (failed || !logoPaths[id]) {
    return (
      <>
        <FormatGlyph id={id} />
        <span className="formatLinkText">
          <strong>{name}</strong>
          <small>{tag}</small>
        </span>
      </>
    )
  }

  return (
    <>
      <img
        className="formatLogoImg"
        src={logoPaths[id]}
        alt={name}
        loading="lazy"
        decoding="async"
        onError={() => setFailed(true)}
      />
      <span className="formatLinkText">
        <strong>{name}</strong>
        <small>{tag}</small>
      </span>
    </>
  )
}

export function ImageFrame({
  src,
  alt,
  label,
  className = '',
  aspect
}: {
  src: string
  alt: string
  label: string
  className?: string
  aspect?: string
}) {
  const [failed, setFailed] = useState(false)
  const style = aspect ? { aspectRatio: aspect } : undefined

  if (failed) {
    return (
      <div
        className={`imageFallback ${className}`}
        style={style}
        role="img"
        aria-label={alt}
      >
        <span>{label}</span>
      </div>
    )
  }

  return (
    <img
      className={className}
      style={style}
      src={src}
      alt={alt}
      loading="lazy"
      decoding="async"
      onError={() => setFailed(true)}
    />
  )
}
