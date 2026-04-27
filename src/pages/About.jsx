const HIGHLIGHTS = [
  {
    title: 'Data Systems',
    description:
      'Designing pipelines and dashboards that turn raw data into reliable signals — from ingestion to visualisation.',
    icon: '◈',
  },
  {
    title: 'Machine Learning',
    description:
      'Applying supervised and unsupervised methods to real-world problems: recommender systems, NLP, clustering.',
    icon: '◉',
  },
  {
    title: 'Software Engineering',
    description:
      'Writing backend APIs, full-stack web apps, and tooling that ships — with clean code and pragmatic architecture.',
    icon: '◎',
  },
]

const CONTACT_LINKS = [
  {
    label: 'GitHub',
    href: 'https://github.com/blue-jays',
    desc: '@blue-jays',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/md-nazmun-hasan-nafees/',
    desc: 'md-nazmun-hasan-nafees',
  },
  {
    label: 'Email',
    href: 'mailto:nafeeshasan365@gmail.com',
    desc: 'nafeeshasan365@gmail.com',
  },
  {
    label: 'Resume',
    href: '/resume.pdf',
    desc: 'Download PDF',
    newTab: true,
  },
]

export default function About() {
  return (
    <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '4rem 1.5rem 7rem' }}>

      {/* Page header */}
      <div style={{ marginBottom: '3.5rem', maxWidth: '680px' }}>
        <p style={{
          fontSize: '0.68rem',
          letterSpacing: '0.2em',
          color: 'var(--text-2)',
          textTransform: 'uppercase',
          fontWeight: 500,
          marginBottom: '0.75rem',
        }}>
          About
        </p>
        <h1 style={{
          fontSize: 'clamp(2rem, 5vw, 3.25rem)',
          fontWeight: 800,
          letterSpacing: '-0.04em',
          color: 'var(--text-0)',
          marginBottom: '1.75rem',
        }}>
          Md Nazmun Hasan Nafees
        </h1>

        <p style={{
          fontSize: '1.0rem',
          color: 'var(--text-1)',
          lineHeight: 1.8,
          marginBottom: '1.25rem',
        }}>
          I&apos;m a Software Engineering student at Seneca Polytechnic in Toronto, focused on building systems that extract insight from data. I enjoy working across the full stack — from designing machine learning pipelines to shipping clean web interfaces.
        </p>
        <p style={{
          fontSize: '1.0rem',
          color: 'var(--text-2)',
          lineHeight: 1.8,
          marginBottom: '1.25rem',
        }}>
          Currently working as a Data Analyst at Montecassino Retirement Residence, where I automate reporting pipelines and build dashboards that support care decisions. I&apos;m actively seeking software engineering or data internship opportunities for 2025/26.
        </p>
        <p style={{
          fontSize: '1.0rem',
          color: 'var(--text-2)',
          lineHeight: 1.8,
        }}>
          Outside of work and school, I contribute to open-source projects, build browser tools, and explore the intersection of language models and information integrity.
        </p>
      </div>

      {/* Highlight cards */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
        gap: '1.25rem',
        marginBottom: '3.5rem',
      }}>
        {HIGHLIGHTS.map(({ title, description, icon }) => (
          <div
            key={title}
            className="cinema-card"
            style={{ padding: '1.75rem' }}
          >
            <div style={{
              width: '2.5rem',
              height: '2.5rem',
              borderRadius: '0.75rem',
              backgroundColor: 'var(--bg-2)',
              border: '1px solid var(--line-1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '1.1rem',
              color: 'var(--accent-red)',
              marginBottom: '1.1rem',
            }}>
              {icon}
            </div>
            <h3 style={{
              fontSize: '1rem',
              fontWeight: 700,
              color: 'var(--text-0)',
              letterSpacing: '-0.02em',
              marginBottom: '0.6rem',
            }}>
              {title}
            </h3>
            <p style={{
              fontSize: '0.855rem',
              color: 'var(--text-2)',
              lineHeight: 1.7,
            }}>
              {description}
            </p>
          </div>
        ))}
      </div>

      {/* Contact section */}
      <div>
        <p style={{
          fontSize: '0.68rem',
          letterSpacing: '0.2em',
          color: 'var(--text-2)',
          textTransform: 'uppercase',
          fontWeight: 500,
          marginBottom: '1.25rem',
        }}>
          Contact
        </p>

        <div className="cinema-card" style={{ padding: '0' }}>
          {CONTACT_LINKS.map(({ label, href, desc, newTab }, i) => (
            <a
              key={label}
              href={href}
              target={newTab ? '_blank' : undefined}
              rel={newTab ? 'noopener noreferrer' : undefined}
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                gap: '1rem',
                padding: '1.1rem 1.75rem',
                borderBottom: i < CONTACT_LINKS.length - 1
                  ? '1px solid var(--line-0)'
                  : 'none',
                textDecoration: 'none',
                transition: 'background-color 0.15s',
                borderRadius: i === 0
                  ? '2rem 2rem 0 0'
                  : i === CONTACT_LINKS.length - 1
                    ? '0 0 2rem 2rem'
                    : '0',
              }}
              onMouseEnter={e => { e.currentTarget.style.backgroundColor = 'var(--bg-2)' }}
              onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'transparent' }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <span style={{
                  width: 6,
                  height: 6,
                  borderRadius: '50%',
                  backgroundColor: 'var(--accent-red)',
                  flexShrink: 0,
                }} />
                <span style={{
                  fontSize: '0.9rem',
                  fontWeight: 600,
                  color: 'var(--text-0)',
                }}>
                  {label}
                </span>
              </div>
              <span style={{ fontSize: '0.82rem', color: 'var(--text-2)' }}>
                {desc} →
              </span>
            </a>
          ))}
        </div>
      </div>

    </div>
  )
}
