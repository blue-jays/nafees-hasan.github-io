import { useState, useEffect, useRef, useCallback } from 'react'
import Home from './pages/Home'
import Work from './pages/Work'
import Academic from './pages/Academic'
import About from './pages/About'

const PAGES = {
  '/': Home,
  '/work': Work,
  '/academic': Academic,
  '/about': About,
}

const ORDER = { '/': 0, '/work': 1, '/academic': 2, '/about': 3 }

const NAV = [
  { path: '/', label: 'Home' },
  { path: '/work', label: 'Work' },
  { path: '/academic', label: 'Academic' },
  { path: '/about', label: 'About' },
]

function getPath() {
  const p = window.location.pathname
  return PAGES[p] ? p : '/'
}

export default function App() {
  const [route, setRoute] = useState(getPath)
  const [anim, setAnim] = useState('')
  const prevRef = useRef(route)
  const timerRef = useRef(null)

  const doNavigate = useCallback((next, push = true) => {
    const cur = prevRef.current
    if (next === cur) return
    const dir = (ORDER[next] ?? 0) >= (ORDER[cur] ?? 0) ? 'forward' : 'back'

    clearTimeout(timerRef.current)
    setAnim(dir === 'forward' ? 'route-exit-forward' : 'route-exit-back')

    timerRef.current = setTimeout(() => {
      if (push) window.history.pushState({}, '', next)
      prevRef.current = next
      setRoute(next)
      setAnim(dir === 'forward' ? 'route-enter-forward' : 'route-enter-back')
      timerRef.current = setTimeout(() => setAnim(''), 360)
    }, 210)
  }, [])

  useEffect(() => {
    const onPop = () => {
      const next = getPath()
      doNavigate(next, false)
    }
    window.addEventListener('popstate', onPop)
    return () => window.removeEventListener('popstate', onPop)
  }, [doNavigate])

  useEffect(() => () => clearTimeout(timerRef.current), [])

  const Page = PAGES[route] || Home

  return (
    <div style={{ backgroundColor: 'var(--bg-0)', color: 'var(--text-0)', minHeight: '100vh' }}>

      {/* ── Desktop top nav ── */}
      <header style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        borderBottom: '1px solid var(--line-0)',
        backgroundColor: 'rgba(18,16,16,0.82)',
        backdropFilter: 'blur(14px)',
        WebkitBackdropFilter: 'blur(14px)',
      }}>
        <nav style={{
          maxWidth: '1100px',
          margin: '0 auto',
          padding: '0 1.5rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '58px',
        }}>
          {/* Wordmark */}
          <button
            onClick={() => doNavigate('/')}
            style={{
              fontWeight: 700,
              fontSize: '1.05rem',
              letterSpacing: '-0.03em',
              color: 'var(--text-0)',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: 0,
              fontFamily: 'inherit',
            }}
          >
            Nafees
          </button>

          {/* Desktop links */}
          <div className="desktop-only" style={{ display: 'flex', gap: '0.125rem' }}>
            {NAV.map(({ path, label }) => {
              const active = route === path
              return (
                <button
                  key={path}
                  onClick={() => doNavigate(path)}
                  style={{
                    padding: '0.35rem 0.9rem',
                    fontSize: '0.875rem',
                    fontWeight: active ? 600 : 400,
                    color: active ? 'var(--text-0)' : 'var(--text-2)',
                    background: 'none',
                    border: 'none',
                    borderBottom: active
                      ? '2px solid var(--accent-red)'
                      : '2px solid transparent',
                    cursor: 'pointer',
                    fontFamily: 'inherit',
                    transition: 'color 0.15s, border-color 0.15s',
                    marginBottom: '-1px',
                  }}
                >
                  {label}
                </button>
              )
            })}
          </div>
        </nav>
      </header>

      {/* ── Page content ── */}
      <main className={anim} style={{ minHeight: 'calc(100vh - 58px)' }}>
        <Page navigate={doNavigate} />
      </main>

      {/* ── Mobile bottom pill nav ── */}
      <nav
        className="mobile-only"
        style={{
          position: 'fixed',
          bottom: '1.25rem',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 50,
          backgroundColor: 'var(--bg-1)',
          border: '1px solid var(--line-1)',
          borderRadius: '9999px',
          padding: '0.3rem',
          display: 'flex',
          gap: '0.1rem',
          boxShadow: '0 8px 32px rgba(0,0,0,0.45)',
          backdropFilter: 'blur(14px)',
          WebkitBackdropFilter: 'blur(14px)',
        }}
      >
        {NAV.map(({ path, label }) => {
          const active = route === path
          return (
            <button
              key={path}
              onClick={() => doNavigate(path)}
              style={{
                padding: '0.45rem 0.9rem',
                fontSize: '0.78rem',
                fontWeight: active ? 600 : 400,
                color: active ? 'var(--text-0)' : 'var(--text-2)',
                backgroundColor: active ? 'var(--bg-2)' : 'transparent',
                border: 'none',
                borderRadius: '9999px',
                cursor: 'pointer',
                fontFamily: 'inherit',
                transition: 'background-color 0.15s, color 0.15s',
                whiteSpace: 'nowrap',
              }}
            >
              {label}
            </button>
          )
        })}
      </nav>
    </div>
  )
}
