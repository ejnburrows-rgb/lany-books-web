import { Component, type ErrorInfo, type ReactNode } from 'react'

type Props = { children: ReactNode }
type State = { hasError: boolean }

/**
 * App-wide error boundary. If any part of the app throws while rendering,
 * this shows a calm bilingual "something went wrong" screen with a reload
 * button instead of a blank white page. Styles are inline on purpose so the
 * fallback still renders even if the app's stylesheet failed to load.
 * (Production error reporting is wired separately in PLAN.md Task 4.)
 */
export class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false }

  static getDerivedStateFromError(): State {
    return { hasError: true }
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    // Kept for local debugging; a monitoring service is added in Task 4.
    console.error('App error boundary caught:', error, info)
  }

  private handleReload = () => {
    window.location.reload()
  }

  render() {
    if (!this.state.hasError) {
      return this.props.children
    }

    return (
      <div
        role="alert"
        style={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '2rem',
          background:
            'linear-gradient(180deg, #fff8e8 0%, #f6fff8 50%, #fff1d8 100%)',
          fontFamily:
            'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif',
          color: '#14343d'
        }}
      >
        <div
          style={{
            maxWidth: '30rem',
            textAlign: 'center',
            background: 'rgba(255, 255, 255, 0.85)',
            border: '1px solid rgba(20, 52, 61, 0.1)',
            borderRadius: '1.75rem',
            padding: '2.5rem 2rem',
            boxShadow: '0 34px 95px rgba(20, 52, 61, 0.14)'
          }}
        >
          <p
            style={{
              margin: '0 0 1.25rem',
              textTransform: 'uppercase',
              letterSpacing: '0.13em',
              fontWeight: 950,
              fontSize: '0.85rem',
              color: '#9a7231'
            }}
          >
            LANY Books
          </p>

          <h1
            style={{
              margin: '0 0 0.5rem',
              fontSize: '1.6rem',
              lineHeight: 1.2,
              color: '#12343d'
            }}
          >
            Algo salió mal
          </h1>
          <p style={{ margin: '0 0 1.5rem', color: '#4b6a6f', lineHeight: 1.6 }}>
            Ocurrió un problema al mostrar la página. Vuelva a cargarla, por favor.
          </p>

          <h2
            style={{
              margin: '0 0 0.5rem',
              fontSize: '1.15rem',
              lineHeight: 1.2,
              color: '#12343d'
            }}
          >
            Something went wrong
          </h2>
          <p style={{ margin: '0 0 1.75rem', color: '#4b6a6f', lineHeight: 1.6 }}>
            There was a problem loading the page. Please reload and try again.
          </p>

          <button
            type="button"
            onClick={this.handleReload}
            style={{
              border: 0,
              borderRadius: '999px',
              padding: '0.95rem 1.6rem',
              fontWeight: 900,
              fontSize: '1rem',
              cursor: 'pointer',
              background: '#14343d',
              color: '#fff',
              boxShadow: '0 22px 48px rgba(20, 52, 61, 0.2)'
            }}
          >
            Recargar / Reload
          </button>
        </div>
      </div>
    )
  }
}
