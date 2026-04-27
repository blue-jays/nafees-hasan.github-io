import { useState, useEffect, useRef, useCallback } from 'react'
import Home from './pages/Home'
import Work from './pages/Work'
import Academic from './pages/Academic'
import About from './pages/About'

const PAGES = { '/': Home, '/work': Work, '/academic': Academic, '/about': About }
const ORDER  = { '/': 0, '/work': 1, '/academic': 2, '/about': 3 }
const NAV    = [
  { path: '/',         label: 'Home'     },
  { path: '/work',     label: 'Work'     },
  { path: '/academic', label: 'Academic' },
  { path: '/about',    label: 'About'    },
]

function getPath() {
  const p = window.location.pathname
  return PAGES[p] ? p : '/'
}

function initNetWave() {
  const canvas = document.getElementById('net-wave')
  if (!canvas) return () => {}
  const ctx = canvas.getContext('2d')
  let W = 0, H = 0
  const DPR = Math.min(2, window.devicePixelRatio || 1)
  const COLS = 14, ROWS = 8
  let nodes = []

  function buildNodes() {
    nodes = []
    const padX = W * 0.06, padY = H * 0.10
    const stepX = (W - padX * 2) / (COLS - 1)
    const stepY = (H - padY * 2) / (ROWS - 1)
    for (let r = 0; r < ROWS; r++) {
      for (let c = 0; c < COLS; c++) {
        const seed = r * COLS + c
        const rnd  = (k) => { const x = Math.sin((seed + k) * 9301 + 49297) * 233280; return x - Math.floor(x) }
        nodes.push({
          bx: padX + c * stepX, by: padY + r * stepY,
          ax: (rnd(1) - 0.5) * 18, ay: 22 + rnd(2) * 36,
          phase: rnd(3) * Math.PI * 2, freq: 0.4 + rnd(4) * 0.5,
          accent: rnd(5) > 0.82, size: 1.0 + rnd(6) * 1.4,
        })
      }
    }
  }

  function resize() {
    const rect = canvas.getBoundingClientRect()
    W = rect.width; H = rect.height
    canvas.width = W * DPR; canvas.height = H * DPR
    ctx.setTransform(DPR, 0, 0, DPR, 0, 0)
    buildNodes()
  }
  window.addEventListener('resize', resize)
  resize()

  let raf
  const t0 = performance.now()
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  function frame(now) {
    const t = (now - t0) / 1000
    ctx.clearRect(0, 0, W, H)
    const pts = nodes.map(n => {
      const w1 = Math.sin(n.bx * 0.005 + n.by * 0.003 + t * n.freq + n.phase)
      const w2 = Math.cos(n.bx * 0.004 - n.by * 0.005 + t * n.freq * 0.7)
      return { x: n.bx + w2 * n.ax, y: n.by + w1 * n.ay, accent: n.accent, size: n.size,
               pulse: 0.55 + 0.45 * Math.sin(t * 1.2 + n.phase) }
    })
    ctx.lineWidth = 0.7
    for (let r = 0; r < ROWS; r++) {
      for (let c = 0; c < COLS; c++) {
        const a = pts[r * COLS + c]
        for (const [dc, dr] of [[1,0],[0,1],[1,1],[1,-1]]) {
          const cc = c + dc, rr = r + dr
          if (cc < 0 || cc >= COLS || rr < 0 || rr >= ROWS) continue
          const b = pts[rr * COLS + cc]
          const d = Math.hypot(a.x - b.x, a.y - b.y)
          const op = Math.max(0.025, 0.18 - d / (Math.max(W,H) / Math.max(COLS,ROWS) * 4))
          ctx.strokeStyle = (a.accent || b.accent) ? `oklch(0.78 0.14 145 / ${op * 1.3})` : `rgba(236,232,223,${op})`
          ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke()
        }
      }
    }
    for (const p of pts) {
      if (p.accent) {
        const r = 14 * p.pulse
        const g = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, r)
        g.addColorStop(0, `oklch(0.78 0.14 145 / ${0.55 * p.pulse})`)
        g.addColorStop(1, 'oklch(0.78 0.14 145 / 0)')
        ctx.fillStyle = g
        ctx.beginPath(); ctx.arc(p.x, p.y, r, 0, Math.PI * 2); ctx.fill()
      }
      ctx.fillStyle = p.accent ? `oklch(0.82 0.15 145 / ${0.85 * p.pulse + 0.15})` : 'rgba(236,232,223,0.55)'
      ctx.beginPath(); ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2); ctx.fill()
    }
    if (!reduce) raf = requestAnimationFrame(frame)
  }

  if (reduce) { frame(performance.now()) } else { raf = requestAnimationFrame(frame) }
  return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', resize) }
}


export default function App() {
  const [route, setRoute] = useState(getPath)
  const [anim,  setAnim]  = useState('')
  const prevRef  = useRef(route)
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
    const onPop = () => doNavigate(getPath(), false)
    window.addEventListener('popstate', onPop)
    return () => window.removeEventListener('popstate', onPop)
  }, [doNavigate])

  useEffect(() => () => clearTimeout(timerRef.current), [])

  useEffect(() => {
    const cleanup = initNetWave()
    return cleanup
  }, [route])

  const Page = PAGES[route] || Home

  return (
    <div style={{ background: 'var(--bg)', color: 'var(--ink)', minHeight: '100vh' }}>

      {/* Fixed cinematic background */}
      <div className="bg" aria-hidden="true">
        <canvas id="net-wave" />
        <div className="bg-grain" />
        <div className="bg-vignette" />
      </div>

      {/* Pill nav */}
      <nav className="pf-nav">
        <div className="pf-nav-pill">
          <button className="pf-nav-brand" onClick={() => doNavigate('/')}>
            <span className="dot" />
          </button>
          {NAV.map(({ path, label }) => (
            <button key={path}
              className={`pf-nav-link${route === path ? ' active' : ''}`}
              onClick={() => doNavigate(path)}
            >
              {label}
            </button>
          ))}
        </div>
      </nav>

      {/* Page */}
      <main className={`pf-page ${anim}`}>
        <Page navigate={doNavigate} />
        <footer className="pf-footer">
          <div className="pf-container">
            <div className="pf-footer-row">
              <span>© 2026 · MD NAZMUN HASAN NAFEES</span>
              <span>TORONTO · ON</span>
              <span>v.2026.04</span>
            </div>
          </div>
        </footer>
      </main>

    </div>
  )
}
