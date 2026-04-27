const PROFILE_ROWS = [
  { label: 'Role',        value: 'Software Engineering Student' },
  { label: 'Location',    value: 'Toronto, Ontario' },
  { label: 'Focus',       value: 'Data Engineering · ML · Backend' },
  { label: 'Currently',   value: 'Seeking 2025/26 internships' },
  { label: 'Graduating',  value: 'April 2027' },
]

const METADATA = ['Toronto', 'Seneca Polytechnic', 'Open to internships']

export default function Home({ navigate }) {
  return (
    <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '5rem 1.5rem 7rem' }}>

      {/* Two-column grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 420px), 1fr))',
        gap: '4rem',
        alignItems: 'start',
      }}>

        {/* ── Left: Cinematic intro ── */}
        <div>
          <p style={{
            fontSize: '0.8rem',
            letterSpacing: '0.01em',
            color: 'var(--text-2)',
            fontWeight: 500,
            marginBottom: '0.4rem',
          }}>
            Md Nazmun Hasan Nafees
          </p>
          <p style={{
            fontSize: '0.68rem',
            letterSpacing: '0.2em',
            color: 'var(--text-2)',
            textTransform: 'uppercase',
            fontWeight: 400,
            marginBottom: '1.75rem',
            opacity: 0.6,
          }}>
            Portfolio — 2025
          </p>

          <div style={{ marginBottom: '1.75rem', lineHeight: 0.95 }}>
            <h1 style={{
              fontSize: 'clamp(3.8rem, 10vw, 7.5rem)',
              fontWeight: 800,
              letterSpacing: '-0.045em',
              color: 'var(--text-0)',
              display: 'block',
            }}>
              Nafees
            </h1>
            <h1 style={{
              fontSize: 'clamp(3.8rem, 10vw, 7.5rem)',
              fontWeight: 800,
              letterSpacing: '-0.045em',
              color: 'var(--text-2)',
              display: 'block',
            }}>
              / Hasan
            </h1>
          </div>

          <p style={{
            fontSize: '1.05rem',
            color: 'var(--text-1)',
            maxWidth: '460px',
            lineHeight: 1.75,
            marginBottom: '2.25rem',
          }}>
            Building intelligent systems that make data meaningful — from pipeline to product.
          </p>

          {/* Metadata strip */}
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '0.5rem 1.5rem',
            marginBottom: '2.75rem',
          }}>
            {METADATA.map(item => (
              <span key={item} style={{
                fontSize: '0.82rem',
                color: 'var(--text-2)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.45rem',
              }}>
                <span style={{
                  width: 5,
                  height: 5,
                  borderRadius: '50%',
                  backgroundColor: 'var(--accent-red)',
                  display: 'inline-block',
                  flexShrink: 0,
                }} />
                {item}
              </span>
            ))}
          </div>

          {/* CTAs */}
          <div style={{ display: 'flex', gap: '0.875rem', flexWrap: 'wrap' }}>
            <button
              onClick={() => navigate('/work')}
              className="btn-primary"
            >
              View my work
            </button>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
            >
              Resume →
            </a>
          </div>
        </div>

        {/* ── Right: Profile card ── */}
        <div className="cinema-card" style={{ padding: '2rem' }}>
          <p style={{
            fontSize: '0.68rem',
            letterSpacing: '0.18em',
            color: 'var(--text-2)',
            textTransform: 'uppercase',
            fontWeight: 500,
            marginBottom: '1.5rem',
          }}>
            Profile
          </p>

          {PROFILE_ROWS.map(({ label, value }, i) => (
            <div
              key={label}
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                gap: '1.25rem',
                padding: '0.7rem 0',
                borderBottom: i < PROFILE_ROWS.length - 1
                  ? '1px solid var(--line-0)'
                  : 'none',
              }}
            >
              <span style={{
                fontSize: '0.78rem',
                color: 'var(--text-2)',
                fontWeight: 500,
                whiteSpace: 'nowrap',
                flexShrink: 0,
              }}>
                {label}
              </span>
              <span style={{
                fontSize: '0.855rem',
                color: 'var(--text-1)',
                textAlign: 'right',
              }}>
                {value}
              </span>
            </div>
          ))}

          {/* Social links */}
          <div style={{
            display: 'flex',
            gap: '0.625rem',
            marginTop: '1.75rem',
          }}>
            {[
              { label: 'GitHub', href: 'https://github.com/blue-jays' },
              { label: 'LinkedIn', href: 'https://www.linkedin.com/in/md-nazmun-hasan-nafees/' },
            ].map(({ label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  flex: 1,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '0.6rem 0.875rem',
                  backgroundColor: 'var(--bg-2)',
                  border: '1px solid var(--line-1)',
                  borderRadius: '0.75rem',
                  color: 'var(--text-1)',
                  textDecoration: 'none',
                  fontSize: '0.82rem',
                  fontWeight: 500,
                  transition: 'border-color 0.15s, color 0.15s',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = 'var(--text-2)'
                  e.currentTarget.style.color = 'var(--text-0)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'var(--line-1)'
                  e.currentTarget.style.color = 'var(--text-1)'
                }}
              >
                {label}
              </a>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}
