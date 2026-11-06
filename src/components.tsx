import { useState } from 'react'

interface ImageFrameProps {
  src: string
  alt: string
  label: string
  className?: string
  aspect?: string
  priority?: boolean
}

export function ImageFrame({
  src,
  alt,
  label,
  className = '',
  aspect,
  priority = false,
}: ImageFrameProps) {
  const [failed, setFailed] = useState(false)

  if (failed) {
    return (
      <div className={`imageFallback ${className}`} style={aspect ? { aspectRatio: aspect } : undefined}>
        <span>{label}</span>
      </div>
    )
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      style={aspect ? { aspectRatio: aspect } : undefined}
      loading={priority ? 'eager' : 'lazy'}
      onError={() => setFailed(true)}
    />
  )
}
