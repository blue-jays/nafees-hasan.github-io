const SKILLS = {
  'Languages': ['Python', 'JavaScript', 'TypeScript', 'SQL', 'R', 'Java', 'C++'],
  'Data & ML': ['Pandas', 'NumPy', 'Scikit-learn', 'PyTorch', 'TensorFlow', 'Matplotlib', 'Seaborn'],
  'Backend & APIs': ['FastAPI', 'Flask', 'Node.js', 'Express', 'REST APIs', 'PostgreSQL', 'MongoDB'],
  'DevOps & Cloud': ['Docker', 'Git', 'GitHub Actions', 'Heroku', 'Linux', 'CI/CD'],
  'Frontend': ['React', 'Vite', 'TailwindCSS', 'HTML', 'CSS'],
}

function SectionLabel({ children }) {
  return (
    <p style={{
      fontSize: '0.68rem',
      letterSpacing: '0.2em',
      color: 'var(--text-2)',
      textTransform: 'uppercase',
      fontWeight: 500,
      marginBottom: '0.75rem',
    }}>
      {children}
    </p>
  )
}

function Card({ children, style = {} }) {
  return (
    <div className="cinema-card" style={{ padding: '2rem', ...style }}>
      {children}
    </div>
  )
}

function MetaRow({ label, value, last = false }) {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      gap: '1.25rem',
      padding: '0.65rem 0',
      borderBottom: last ? 'none' : '1px solid var(--line-0)',
    }}>
      <span style={{ fontSize: '0.78rem', color: 'var(--text-2)', fontWeight: 500, flexShrink: 0 }}>
        {label}
      </span>
      <span style={{ fontSize: '0.855rem', color: 'var(--text-1)', textAlign: 'right' }}>
        {value}
      </span>
    </div>
  )
}

export default function Academic() {
  return (
    <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '4rem 1.5rem 7rem' }}>

      {/* Page header */}
      <div style={{ marginBottom: '3rem' }}>
        <SectionLabel>Background</SectionLabel>
        <h1 style={{
          fontSize: 'clamp(2rem, 5vw, 3.25rem)',
          fontWeight: 800,
          letterSpacing: '-0.04em',
          color: 'var(--text-0)',
        }}>
          Academic & Experience
        </h1>
      </div>

      {/* Top row: Education + Experience */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))',
        gap: '1.5rem',
        marginBottom: '1.5rem',
      }}>

        {/* Education */}
        <Card>
          <SectionLabel>Education</SectionLabel>

          {/* Institution header */}
          <div style={{ marginBottom: '1.5rem' }}>
            <h2 style={{
              fontSize: '1.2rem',
              fontWeight: 700,
              color: 'var(--text-0)',
              letterSpacing: '-0.02em',
              marginBottom: '0.25rem',
            }}>
              Seneca Polytechnic
            </h2>
            <p style={{ fontSize: '0.875rem', color: 'var(--text-2)' }}>
              Software Engineering Technology — Advanced Diploma
            </p>
          </div>

          <MetaRow label="Status"    value="In Progress" />
          <MetaRow label="Location"  value="Toronto, Ontario" />
          <MetaRow label="GPA"       value="Dean's List" />
          <MetaRow label="Grad"      value="April 2027" last />

          {/* Focus areas */}
          <div style={{ marginTop: '1.5rem' }}>
            <p style={{ fontSize: '0.72rem', color: 'var(--text-2)', letterSpacing: '0.12em', textTransform: 'uppercase', fontWeight: 500, marginBottom: '0.75rem' }}>
              Focus Areas
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
              {['Data Engineering', 'Machine Learning', 'Backend Systems', 'Software Architecture'].map(t => (
                <span key={t} className="tag">{t}</span>
              ))}
            </div>
          </div>
        </Card>

        {/* Experience */}
        <Card>
          <SectionLabel>Experience</SectionLabel>

          <div style={{ marginBottom: '1.5rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '0.75rem', marginBottom: '0.25rem' }}>
              <h2 style={{
                fontSize: '1.2rem',
                fontWeight: 700,
                color: 'var(--text-0)',
                letterSpacing: '-0.02em',
              }}>
                Montecassino Retirement Residence
              </h2>
            </div>
            <p style={{ fontSize: '0.875rem', color: 'var(--text-2)' }}>
              Data Analyst
            </p>
          </div>

          <MetaRow label="Period"    value="Apr 2023 – Present" />
          <MetaRow label="Type"      value="Part-time / Co-op" />
          <MetaRow label="Location"  value="Toronto, Ontario" last />

          {/* Responsibilities */}
          <div style={{ marginTop: '1.5rem' }}>
            <p style={{ fontSize: '0.72rem', color: 'var(--text-2)', letterSpacing: '0.12em', textTransform: 'uppercase', fontWeight: 500, marginBottom: '0.875rem' }}>
              Responsibilities
            </p>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {[
                'Built and maintained Excel/Python dashboards for resident care metrics',
                'Automated weekly reporting pipelines, reducing manual work by 60%',
                'Analysed occupancy and staffing data to support operational decisions',
                'Collaborated with management to design data collection procedures',
              ].map((item, i) => (
                <li key={i} style={{ display: 'flex', gap: '0.625rem', alignItems: 'flex-start' }}>
                  <span style={{
                    width: 5, height: 5,
                    borderRadius: '50%',
                    backgroundColor: 'var(--accent-red)',
                    flexShrink: 0,
                    marginTop: '0.45rem',
                  }} />
                  <span style={{ fontSize: '0.845rem', color: 'var(--text-2)', lineHeight: 1.65 }}>
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </Card>

      </div>

      {/* Skills */}
      <Card>
        <SectionLabel>Skills</SectionLabel>
        <h2 style={{
          fontSize: '1.15rem',
          fontWeight: 700,
          color: 'var(--text-0)',
          letterSpacing: '-0.02em',
          marginBottom: '1.75rem',
        }}>
          Technical Stack
        </h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {Object.entries(SKILLS).map(([category, items]) => (
            <div key={category}>
              <p style={{
                fontSize: '0.72rem',
                color: 'var(--text-2)',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                fontWeight: 500,
                marginBottom: '0.6rem',
              }}>
                {category}
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                {items.map(skill => (
                  <span key={skill} className="tag">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Card>

    </div>
  )
}
