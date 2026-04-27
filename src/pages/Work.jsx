const PROJECTS = [
  {
    id: 5,
    title: 'End-to-End ML Pipeline',
    subtitle: 'MLOps · CI/CD · Docker · Kubernetes',
    description:
      'Complete MLOps pipeline with CI/CD, model versioning, monitoring, and automated retraining. Covers the full lifecycle from data ingestion through deployment and observability.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80',
    tags: ['MLOps', 'CI/CD', 'Docker', 'Kubernetes'],
    github: 'https://github.com/blue-jays/MLOps_full_pipeline',
    demo: null,
    status: 'Open Source',
  },
  {
    id: 2,
    title: 'Credit Card Fraud Pattern Analysis',
    subtitle: 'Python · Machine Learning · Fraud Detection',
    description:
      'Helps banks spot suspicious card transactions early by finding patterns in when, where, and how fraud tends to happen.',
    image: 'https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=1200&q=80',
    tags: ['Python', 'Machine Learning', 'Fraud Detection'],
    github: 'https://github.com/blue-jays/Credit_Card_Fraud_Detection_System',
    demo: null,
    status: 'Open Source',
  },
  {
    id: 1,
    title: 'News Sentiment Bias Analyzer',
    subtitle: 'NLP · FastAPI · Chrome Extension · MLOps',
    description:
      'Full-stack system analyzing news bias across outlets using a Chrome Extension, FastAPI backend, and ML pipeline built with MLOps principles.',
    image: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=2070&auto=format&fit=crop',
    tags: ['MLOps', 'FastAPI', 'NLP', 'Chrome Extension'],
    github: 'https://github.com/blue-jays/News_Bias_Check_Companion',
    demo: null,
    status: 'Open Source',
  },
  {
    id: 3,
    title: 'Cloud-Native Task Manager',
    subtitle: 'React · Node.js · MongoDB · AWS',
    description:
      'Full-stack web application with React, Node.js, and MongoDB deployed on AWS.',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop',
    tags: ['React', 'Node.js', 'MongoDB', 'AWS'],
    github: 'https://github.com/blue-jays/task-manager',
    demo: 'https://task-manager.nafees-hasan.com',
    status: 'Live Demo',
  },
  {
    id: 4,
    title: 'Loan Default Risk Analysis',
    subtitle: 'Python · Statistics · Risk Modelling',
    description:
      'Statistical analysis of 10,000 loans to quantify default risk, evaluate a new credit policy, and build a logistic regression risk model.',
    image: 'https://images.unsplash.com/photo-1454166155302-ef4863c27e70?q=80&w=2070&auto=format&fit=crop',
    tags: ['Python', 'Statistics', 'Risk Modeling', 'Logistic Regression'],
    github: 'https://github.com/blue-jays/Loan-Default-Risk-Analysis',
    demo: null,
    status: 'Open Source',
  },
]

function ProjectCard({ project, lead = false }) {
  const { title, subtitle, description, image, tags, github, demo, status } = project

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
      {/* Image banner */}
      <div style={{
        position: 'relative',
        height: lead ? '220px' : '160px',
        overflow: 'hidden',
        borderBottom: '1px solid var(--line-0)',
      }}>
        <img
          src={image}
          alt={title}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            display: 'block',
          }}
        />
        {/* Dark cinematic overlay */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to bottom, rgba(18,16,16,0.35) 0%, rgba(18,16,16,0.72) 100%)',
        }} />

        {/* Status badge */}
        <span style={{
          position: 'absolute',
          top: '0.875rem',
          right: '0.875rem',
          padding: '0.22rem 0.6rem',
          backgroundColor: 'rgba(18,16,16,0.72)',
          border: '1px solid var(--line-1)',
          borderRadius: '9999px',
          fontSize: '0.68rem',
          color: 'var(--text-2)',
          fontWeight: 500,
          letterSpacing: '0.06em',
          backdropFilter: 'blur(6px)',
        }}>
          {status}
        </span>

        {/* Subtitle overlay at bottom */}
        <div style={{
          position: 'absolute',
          bottom: '0.875rem',
          left: '1.25rem',
        }}>
          <p style={{
            fontSize: '0.65rem',
            letterSpacing: '0.12em',
            color: 'var(--text-2)',
            textTransform: 'uppercase',
            fontWeight: 500,
          }}>
            {subtitle}
          </p>
        </div>
      </div>

      {/* Card body */}
      <div style={{ padding: '1.4rem 1.5rem 1.5rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
        <h2 style={{
          fontSize: lead ? '1.35rem' : '1.05rem',
          fontWeight: 700,
          color: 'var(--text-0)',
          letterSpacing: '-0.02em',
          marginBottom: '0.5rem',
        }}>
          {title}
        </h2>

        <p style={{
          fontSize: '0.875rem',
          color: 'var(--text-2)',
          lineHeight: 1.7,
          marginBottom: '1.1rem',
          flex: 1,
        }}>
          {description}
        </p>

        {/* Tags */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem', marginBottom: '1.1rem' }}>
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
              style={{ fontSize: '0.8rem', padding: '0.42rem 1rem' }}
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
              style={{ fontSize: '0.8rem', padding: '0.42rem 1rem' }}
            >
              Live Demo →
            </a>
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

      {/* Lead project */}
      <div style={{ marginBottom: '1.5rem' }}>
        <ProjectCard project={lead} lead />
      </div>

      {/* Paired rows */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))',
        gap: '1.5rem',
      }}>
        {rest.map(p => <ProjectCard key={p.id} project={p} />)}
      </div>

    </div>
  )
}
