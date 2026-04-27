export default function Academic() {
  return (
    <div className="pf-page">
      <section className="pf-container" style={{ paddingTop: 130, paddingBottom: 80 }}>

        <div className="section-head">
          <div className="eyebrow">Background</div>
          <h1 className="section-title">
            Academic
          </h1>
        </div>

        <article className="card card-pad" style={{ padding: 32 }}>
            <div className="eyebrow" style={{ marginBottom: 18 }}>Education</div>
            <h3 style={{ fontSize: 22, fontWeight: 600, letterSpacing: '-0.015em', margin: '0 0 6px' }}>
              Seneca Polytechnic
            </h3>
            <p style={{ fontSize: 14, color: 'var(--ink-dim)', margin: '0 0 22px' }}>
              Bachelor of Engineering — Software Engineering
            </p>
            <div className="profile-rows">
              <div className="prow"><span>Status</span><span>In Progress</span></div>
              <div className="prow"><span>Location</span><span>Toronto, Ontario</span></div>
              <div className="prow"><span>Concentration</span><span>ML · AI · Statistics</span></div>
              <div className="prow"><span>Graduating</span><span>April 2027</span></div>
            </div>
            <div className="eyebrow" style={{ marginTop: 28, marginBottom: 14 }}>Focus areas</div>
            <div className="cap-tags">
              <span className="tag">Data Engineering</span>
              <span className="tag">Machine Learning</span>
              <span className="tag">Backend Systems</span>
              <span className="tag">Software Architecture</span>
            </div>
          </article>

        <div className="card card-pad" style={{ marginTop: 16, padding: '28px 32px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', gap: 32, alignItems: 'flex-start', flexWrap: 'wrap' }}>
            <div style={{ maxWidth: 320 }}>
              <div className="eyebrow" style={{ marginBottom: 10 }}>Technical skills</div>
              <p style={{ fontSize: 13.5, color: 'var(--ink-dim)', lineHeight: 1.6, margin: 0 }}>
                Languages, frameworks, and tools across the data and software engineering stack.
              </p>
            </div>
            <div className="cap-tags" style={{ flex: 1, maxWidth: 700, justifyContent: 'flex-end' }}>
              {['Python','JavaScript','TypeScript','SQL','R','Pandas','NumPy',
                'scikit-learn','PyTorch','TensorFlow','FastAPI','Flask','Node.js',
                'PostgreSQL','MongoDB','Docker','Git','GitHub Actions','React','Vite','TailwindCSS',
                'Data Cleaning','Model Evaluation','Refactoring',
              ].map(s => <span key={s} className="tag">{s}</span>)}
            </div>
          </div>
        </div>

        <div className="card card-pad" style={{ marginTop: 16, padding: '28px 32px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', gap: 32, alignItems: 'flex-start', flexWrap: 'wrap' }}>
            <div style={{ maxWidth: 320 }}>
              <div className="eyebrow" style={{ marginBottom: 10 }}>Selected coursework</div>
              <p style={{ fontSize: 13.5, color: 'var(--ink-dim)', lineHeight: 1.6, margin: 0 }}>
                A representative slice of the technical curriculum completed or currently in progress.
              </p>
            </div>
            <div className="cap-tags" style={{ flex: 1, maxWidth: 700, justifyContent: 'flex-end' }}>
              {['Data Structures','Algorithms','Operating Systems','Databases',
                'Distributed Systems','Linear Algebra','Statistics','Software Design','Networking',
              ].map(c => <span key={c} className="tag">{c}</span>)}
            </div>
          </div>
        </div>

      </section>
    </div>
  )
}
