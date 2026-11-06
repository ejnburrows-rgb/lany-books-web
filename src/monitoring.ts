import * as Sentry from '@sentry/react'

const dsn = (import.meta.env.VITE_SENTRY_DSN as string | undefined)?.trim()
if (dsn) {
  Sentry.init({
    dsn,
    tracesSampleRate: 0.1,
  })
}
