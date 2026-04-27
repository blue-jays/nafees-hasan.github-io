const FEATURED = {
  title: 'End-to-End ML Pipeline',
  subtitle: 'MLOPS · CI/CD · DOCKER · KUBERNETES',
  description: 'Complete MLOps pipeline with CI/CD, model versioning, monitoring, and automated retraining. Covers the full lifecycle from data ingestion through deployment and observability.',
  tags: ['MLOps', 'CI/CD', 'Docker', 'Kubernetes'],
  github: 'https://github.com/blue-jays/MLOps_full_pipeline',
  status: 'Open Source',
}

const GRID_PROJECTS = [
  {
    num: '02', category: 'ML',
    title: 'News Sentiment Bias Analyzer',
    description: 'Chrome Extension + FastAPI backend analysing news bias across outlets using SBERT embeddings, clustering, and an MLOps-grade pipeline.',
    tags: ['MLOps', 'FastAPI', 'NLP', 'Chrome Extension'],
    github: 'https://github.com/blue-jays/News_Bias_Check_Companion',
    year: '2025',
  },
  {
    num: '03', category: 'Data',
    title: 'Credit Card Fraud Pattern Analysis',
    description: 'Identifies fraud patterns — when, where, and how — to help banks flag suspicious transactions early using ML classification.',
    tags: ['Python', 'scikit-learn', 'Fraud Detection'],
    github: 'https://github.com/blue-jays/Credit_Card_Fraud_Detection_System',
    year: '2025',
  },
  {
    num: '04', category: 'Research',
    title: 'Loan Default Risk Analysis',
    description: 'Statistical analysis of 10,000 loans — quantifying default risk, evaluating a new credit policy, and building a logistic regression risk model.',
    tags: ['Python', 'Statistics', 'Logistic Regression'],
    github: 'https://github.com/blue-jays/Loan-Default-Risk-Analysis',
    year: '2024',
  },
  {
    num: '05', category: 'Data',
    title: 'Reporting Pipeline Automation',
    description: 'Reduced manual reporting work by 60% through automated pipelines. Excel/Python dashboards backed by automated data refresh and validation.',
    tags: ['Python', 'Pandas', 'Excel'],
    github: null,
    year: '2025',
  },
]

export default function Work() {
  return (
    <div className="pf-page">
      <section className="pf-container" style={{ paddingTop: 130, paddingBottom: 80 }}>

        {/* Header */}
        <div className="section-head">
          <div className="eyebrow">Selected Work</div>
          <h1 className="section-title">
            Projects, <span className="ital" style={{ color: 'var(--ink-dim)' }}>shipped &amp; in motion</span>.
          </h1>
          <p style={{ fontSize: 15, color: 'var(--ink-dim)', lineHeight: 1.65, maxWidth: '60ch', marginTop: 14 }}>
            A selection of data engineering, machine learning, and software projects — from research prototypes to deployed products.
          </p>
        </div>

        {/* Featured card */}
        <article className="card" style={{ overflow: 'hidden' }}>
          <div className="proj-cover">
            <div className="proj-cover-overlay" />
            <span className="chip" style={{ position: 'absolute', top: 18, right: 18 }}>
              {FEATURED.status}
            </span>
            <div className="eyebrow" style={{ position: 'absolute', left: 24, bottom: 18 }}>
              {FEATURED.subtitle}
            </div>
          </div>
          <div style={{ padding: '28px 28px 30px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 32, flexWrap: 'wrap' }}>
              <div style={{ maxWidth: 640 }}>
                <h2 className="proj-title">{FEATURED.title}</h2>
                <p className="proj-body">{FEATURED.description}</p>
                <div className="cap-tags" style={{ marginTop: 16 }}>
                  {FEATURED.tags.map(t => <span key={t} className="tag">{t}</span>)}
                </div>
              </div>
              <a className="btn-ghost" href={FEATURED.github} target="_blank" rel="noopener noreferrer">
                GitHub →
              </a>
            </div>
          </div>
        </article>

        {/* 2×2 grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginTop: 16 }}>
          {GRID_PROJECTS.map(p => (
            <article key={p.num} className="card card-pad proj-mini">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
                <span className="eyebrow">{p.num} · {p.category}</span>
                <span className="tag">{p.year}</span>
              </div>
              <h3 className="proj-title-sm">{p.title}</h3>
              <p className="proj-body">{p.description}</p>
              <div className="cap-tags" style={{ marginTop: 14, marginBottom: p.github ? 16 : 0 }}>
                {p.tags.map(t => <span key={t} className="tag">{t}</span>)}
              </div>
              {p.github && (
                <a className="btn-ghost" href={p.github} target="_blank" rel="noopener noreferrer"
                  style={{ fontSize: 12.5, padding: '8px 14px', marginTop: 4 }}>
                  GitHub →
                </a>
              )}
            </article>
          ))}
        </div>

      </section>
    </div>
  )
}
