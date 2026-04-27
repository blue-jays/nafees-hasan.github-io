const PROJECTS = [
  {
    id: 'news-bias',
    title: 'News Bias Analyzer',
    subtitle: 'NLP · Chrome Extension · Python',
    description:
      'A Chrome extension + Python backend that scores the political bias and sentiment of any news article in real time. Uses fine-tuned transformer models to surface left/centre/right lean with confidence scores, helping readers identify media framing.',
    tags: ['Python', 'NLP', 'Transformers', 'Chrome Extension', 'FastAPI'],
    gradient: 'linear-gradient(135deg, #1e1010 0%, #2a1010 40%, #1a1018 100%)',
    accentColor: '#7a2c2a',
    github: 'https://github.com/blue-jays/News_Bias_Check_Companion',
    demo: null,
    status: 'Open Source',
  },
  {
    id: 'game-rec',
    title: 'Game Recommender System',
    subtitle: 'ML · Collaborative Filtering · Heroku',
    description:
      'Content + collaborative-filtering recommender that suggests video games based on user preferences and play history. Deployed as a full-stack web app on Heroku with a clean search interface.',
    tags: ['Python', 'Scikit-learn', 'Pandas', 'Flask', 'Heroku'],
    gradient: 'linear-gradient(135deg, #101a18 0%, #0e1f1a 50%, #121018 100%)',
    accentColor: '#1f4f40',
    github: null,
    demo: 'https://game-engine-753abe0961a7.herokuapp.com',
    status: 'Live Demo',
  },
  {
    id: 'customer-seg',
    title: 'Customer Segmentation — Banking',
    subtitle: 'Unsupervised ML · EDA · Business Intelligence',
    description:
      'K-Means and hierarchical clustering pipeline applied to a retail-banking dataset to discover actionable customer segments. Includes full EDA, dimensionality reduction with PCA, and a Matplotlib dashboard of segment profiles.',
    tags: ['Python', 'K-Means', 'PCA', 'Matplotlib', 'Pandas'],
    gradient: 'linear-gradient(135deg, #1a1508 0%, #221c0a 50%, #181210 100%)',
    accentColor: '#4a3a10',
    github: null,
    demo: null,
    status: 'Case Study',
  },
]

function ProjectCard({ project, lead = false }) {
  const { title, subtitle, description, tags, gradient, accentColor, github, demo, status } = project

  return (
    <div
      className="cinema-card"
      style={{
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
      }}
    >
      {/* Gradient banner */}
      <div style={{
        background: gradient,
        height: lead ? '200px' : '140px',
        position: 'relative',
        display: 'flex',
        alignItems: 'flex-end',
        padding: '1.25rem 1.5rem',
        borderBottom: '1px solid var(--line-0)',
      }}>
        {/* Status badge */}
        <span style={{
          position: 'absolute',
          top: '1rem',
          right: '1rem',
          padding: '0.25rem 0.6rem',
          backgroundColor: 'rgba(0,0,0,0.55)',
          border: `1px solid ${accentColor}`,
          borderRadius: '9999px',
          fontSize: '0.68rem',
          color: 'var(--text-2)',
          fontWeight: 500,
          letterSpacing: '0.05em',
        }}>
          {status}
        </span>

        {/* Decorative grid dots */}
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `radial-gradient(circle, ${accentColor}30 1px, transparent 1px)`,
          backgroundSize: '28px 28px',
          opacity: 0.5,
        }} />

        <div style={{ position: 'relative', zIndex: 1 }}>
          <p style={{
            fontSize: '0.68rem',
            letterSpacing: '0.14em',
            color: 'var(--text-2)',
            textTransform: 'uppercase',
            fontWeight: 500,
          }}>
            {subtitle}
          </p>
        </div>
      </div>

      {/* Card body */}
      <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
        <h2 style={{
          fontSize: lead ? '1.4rem' : '1.1rem',
          fontWeight: 700,
          color: 'var(--text-0)',
          letterSpacing: '-0.02em',
          marginBottom: '0.625rem',
        }}>
          {title}
        </h2>

        <p style={{
          fontSize: '0.875rem',
          color: 'var(--text-2)',
          lineHeight: 1.7,
          marginBottom: '1.25rem',
          flex: 1,
        }}>
          {description}
        </p>

        {/* Tags */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.375rem', marginBottom: '1.25rem' }}>
          {tags.map(t => <span key={t} className="tag">{t}</span>)}
        </div>

        {/* Links */}
        <div style={{ display: 'flex', gap: '0.625rem', flexWrap: 'wrap' }}>
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
              style={{ fontSize: '0.8rem', padding: '0.45rem 1rem' }}
            >
              GitHub →
            </a>
          )}
          {demo && (
            <a
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              style={{ fontSize: '0.8rem', padding: '0.45rem 1rem' }}
            >
              Live Demo →
            </a>
          )}
          {!github && !demo && (
            <span style={{ fontSize: '0.78rem', color: 'var(--text-2)', alignSelf: 'center' }}>
              Private / Academic
            </span>
          )}
        </div>
      </div>
    </div>
  )
}

export default function Work() {
  const [lead, ...rest] = PROJECTS

  return (
    <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '4rem 1.5rem 7rem' }}>

      {/* Header */}
      <div style={{ marginBottom: '3rem' }}>
        <p style={{
          fontSize: '0.68rem',
          letterSpacing: '0.2em',
          color: 'var(--text-2)',
          textTransform: 'uppercase',
          fontWeight: 500,
          marginBottom: '0.75rem',
        }}>
          Selected work
        </p>
        <h1 style={{
          fontSize: 'clamp(2rem, 5vw, 3.25rem)',
          fontWeight: 800,
          letterSpacing: '-0.04em',
          color: 'var(--text-0)',
          marginBottom: '0.875rem',
        }}>
          Projects
        </h1>
        <p style={{ fontSize: '0.95rem', color: 'var(--text-2)', maxWidth: '520px', lineHeight: 1.7 }}>
          A selection of data engineering, machine learning, and software projects — from research prototypes to deployed products.
        </p>
      </div>

      {/* Lead project (full width) */}
      <div style={{ marginBottom: '1.5rem' }}>
        <ProjectCard project={lead} lead />
      </div>

      {/* Paired row */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))',
        gap: '1.5rem',
      }}>
        {rest.map(p => <ProjectCard key={p.id} project={p} />)}
      </div>

    </div>
  )
}
