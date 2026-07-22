import * as Sentry from '@sentry/react'

/**
 * Production error monitoring. Inert until a DSN is provided, so local dev and
 * any build without the key run completely untouched. To activate: set
 * VITE_SENTRY_DSN in Vercel → Settings → Environment Variables, then redeploy.
 * (See PLAN.md Task 4 / .env.example.)
 */
const dsn = import.meta.env.VITE_SENTRY_DSN as string | undefined

if (dsn) {
  Sentry.init({
    dsn,
    environment: import.meta.env.MODE,
    // Low trace sampling — this is a small marketing site; errors matter most.
    tracesSampleRate: 0.1,
    // Only report from real deployed builds, never from local dev.
    enabled: import.meta.env.PROD
  })
}
