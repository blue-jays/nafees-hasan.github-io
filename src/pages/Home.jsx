export default function Home({ navigate }) {
  return (
    <div className="pf-page">
      <section className="pf-container" style={{ paddingTop: 130, paddingBottom: 80 }}>

        {/* ── Hero: two-column ── */}
        <div style={{ display: 'grid', gridTemplateColumns: '1.15fr 0.85fr', gap: 80, alignItems: 'center', minHeight: 560 }}>

          {/* Left */}
          <div>
            <div className="eyebrow">Portfolio — 2026</div>

            <h1 className="display" style={{ marginTop: 22 }}>
              Md Nazmun<br />
              Hasan <span className="ital">Nafees</span>
            </h1>

            <p className="lead">
              Software engineering student building intelligent systems that turn data into clarity — from pipeline to product.
            </p>

            <div style={{ display: 'flex', gap: 12, marginTop: 36, flexWrap: 'wrap' }}>
              <button className="btn-primary" onClick={() => navigate('/work')}>
                View selected work →
              </button>
              <a className="btn-ghost" href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                Résumé ↗
              </a>
            </div>

            <div style={{ display: 'flex', gap: 24, marginTop: 44, flexWrap: 'wrap', alignItems: 'center' }}>
              <span className="chip"><span className="pulse" />Open to 2026 internships</span>
              <span style={{ fontSize: 13, color: 'var(--ink-mute)', display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                <span style={{ width: 4, height: 4, borderRadius: '50%', background: 'var(--ink-mute)' }} />
                Toronto, ON
              </span>
              <span style={{ fontSize: 13, color: 'var(--ink-mute)', display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                <span style={{ width: 4, height: 4, borderRadius: '50%', background: 'var(--ink-mute)' }} />
                Seneca Polytechnic
              </span>
            </div>
          </div>

          {/* Right — profile card */}
          <div className="card card-pad" style={{ padding: 32 }}>
            <div className="eyebrow" style={{ marginBottom: 22 }}>Profile</div>
            <div className="profile-rows">
              <div className="prow"><span>Role</span><span>Software Engineering Student</span></div>
              <div className="prow"><span>Location</span><span>Toronto, Ontario</span></div>
              <div className="prow"><span>Focus</span><span>MLOps · Rec Systems · Anomaly Detection</span></div>
              <div className="prow"><span>Currently</span><span>Seeking 2026 internships</span></div>
              <div className="prow"><span>Graduating</span><span>April 2027</span></div>
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
      </section>

      {/* ── What I work on ── */}
      <section className="pf-container" style={{ paddingTop: 40, paddingBottom: 80 }}>
        <div className="eyebrow" style={{ marginBottom: 22 }}>What I work on</div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 16 }}>

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
