export default function About() {
  return (
    <div className="pf-page">
      <section className="pf-container" style={{ paddingTop: 130, paddingBottom: 80 }}>

        <div className="section-head">
          <div className="eyebrow">About</div>
          <h1 className="section-title">
            Md Nazmun <span className="ital" style={{ color: 'var(--ink-dim)' }}>Hasan Nafees</span>
          </h1>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 40, alignItems: 'flex-start', marginBottom: 16 }}>

          {/* Left — bio + CTA */}
          <div>
            <p style={{ fontSize: 16, color: 'var(--ink)', lineHeight: 1.75, marginBottom: 20 }}>
              I&apos;m a Software Engineering student at Seneca Polytechnic in Toronto, focused on building systems that extract insight from data. I enjoy working across the full stack — from designing machine learning pipelines to shipping clean web interfaces.
            </p>
            <p style={{ fontSize: 15, color: 'var(--ink-dim)', lineHeight: 1.75, marginBottom: 36 }}>
              Outside of work and school, I contribute to open-source projects, build browser tools, and explore the intersection of language models and information integrity.
            </p>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <a className="btn-primary" href="mailto:nafeeshasan365@gmail.com">
                Get in touch →
              </a>
              <a className="btn-ghost" href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                Download résumé ↗
              </a>
            </div>
          </div>

          {/* Right — at a glance card */}
          <div className="card card-pad" style={{ padding: 32 }}>
            <div className="eyebrow" style={{ marginBottom: 18 }}>At a glance</div>
            <div className="profile-rows">
              <div className="prow"><span>Name</span><span>Md Nazmun Hasan Nafees</span></div>
              <div className="prow"><span>Location</span><span>Toronto, Ontario</span></div>
              <div className="prow"><span>Program</span><span>B.Eng in Software Engineering</span></div>
              <div className="prow"><span>School</span><span>Seneca Polytechnic</span></div>
              <div className="prow"><span>Status</span><span style={{ color: 'var(--accent)' }}>Open to 2026 internships</span></div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginTop: 24 }}>
              <a className="btn-ghost" style={{ justifyContent: 'center' }}
                href="https://github.com/blue-jays" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
              <a className="btn-ghost" style={{ justifyContent: 'center' }}
                href="https://www.linkedin.com/in/md-nazmun-hasan-nafees/" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        {/* Domain cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 16, marginTop: 16 }}>

          <div className="card card-pad">
            <div className="mono-num">01</div>
            <h3 className="cap-title">MLOps / Machine Learning</h3>
            <p className="cap-body">End-to-end ML workflows — pipeline design, model training, deployment, and monitoring. Data engineering and backend woven in.</p>
            <div className="cap-tags">
              <span className="tag">MLflow</span>
              <span className="tag">PyTorch</span>
              <span className="tag">Airflow</span>
            </div>
          </div>

          <div className="card card-pad">
            <div className="mono-num">02</div>
            <h3 className="cap-title">Recommendation Systems</h3>
            <p className="cap-body">Building systems that surface what matters — collaborative filtering, content-based, and hybrid approaches at scale.</p>
            <div className="cap-tags">
              <span className="tag">scikit-learn</span>
              <span className="tag">Embeddings</span>
              <span className="tag">SQL</span>
            </div>
          </div>

          <div className="card card-pad">
            <div className="mono-num">03</div>
            <h3 className="cap-title">Anomaly Detection</h3>
            <p className="cap-body">Fraud detection and AML — surfacing suspicious behaviour in transactions and financial data using statistical and deep learning methods.</p>
            <div className="cap-tags">
              <span className="tag">Python</span>
              <span className="tag">Isolation Forest</span>
              <span className="tag">Statistics</span>
            </div>
          </div>

        </div>

      </section>
    </div>
  )
}
