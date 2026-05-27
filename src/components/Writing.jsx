import './Writing.css'

const talks = [
  {
    title: '"From Documentation to Dialogue"',
    venue: 'ServiceNow EX Summit — Hyderabad & Bangalore',
    date: '2024',
    desc: 'Two packed sessions on creating structured content for conversational interfaces — covering RAG pipelines, modular semantic content, and the CONVERSE framework for AI-ready documentation.',
  },
  {
    title: 'Guest Lecture — Content Writing & Technical Writing',
    venue: 'GITAM University, Hyderabad',
    date: 'Jan 2025',
    desc: 'Guest lecture for students on the craft and career paths in technical communication.',
  },
  {
    title: '"Finding Your Style"',
    venue: 'GSpann',
    date: '2024',
    desc: 'Brand and image building session focused on personal professional identity and communication presence.',
  },
  {
    title: 'Chief of Marketing — ISB SPARK 2024',
    venue: 'Indian School of Business',
    date: '2024',
    desc: 'Led marketing strategy for ISB\'s marquee annual event SPARK 2024, and served as Marketing Lead for LAKSHYA 2024 (alumni networking event).',
  },
  {
    title: '"Groom for Zoom"',
    venue: 'Blue Yonder — Women\'s Day',
    date: '2022',
    desc: 'Session on professional presence and video communication for Women\'s Day.',
  },
  {
    title: '"Be Your Own Kind of Beautiful"',
    venue: 'CA Technologies — Women\'s Day',
    date: '',
    desc: 'Keynote on confidence, identity, and self-presentation.',
  },
]

const publishedDocs = [
  { title: 'Employee Journey Management', url: 'https://www.servicenow.com/docs/bundle/yokohama-employee-service-management/page/product/human-resources/concept/employee-journey-management.html' },
  { title: 'Learning Experience', url: 'https://www.servicenow.com/docs/bundle/yokohama-employee-service-management/page/product/human-resources/concept/exploring-learning-exp.html' },
  { title: 'Career Assessment', url: 'https://www.servicenow.com/docs/bundle/yokohama-employee-service-management/page/product/human-resources/concept/exam-engine.html' },
  { title: 'Mentoring', url: 'https://www.servicenow.com/docs/bundle/yokohama-employee-service-management/page/product/mentoring-egd/concept/mentoring-egd-overview.html' },
  { title: 'Talent Feedback', url: 'https://www.servicenow.com/docs/bundle/yokohama-employee-service-management/page/product/talent-feedback/concept/talent-feedback-landing.html' },
  { title: 'OpenEdge Command Center', url: 'https://docs.progress.com/bundle/openedge-command-center-olh/page/Learn-about-OpenEdge-Command-Center.html' },
]

export default function Writing() {
  return (
    <section id="writing">
      <hr className="divider" />
      <div className="container" style={{ paddingTop: 'var(--section-gap)' }}>
        <p className="section-label">Talks & Initiatives</p>
        <h2 className="section-title">Speaking & community</h2>
        <div className="writing-list">
          {talks.map((t, i) => (
            <div key={i} className="writing-item">
              <div className="writing-meta">
                <span className="writing-pub">{t.venue}</span>
                {t.date && <span className="writing-date">{t.date}</span>}
              </div>
              <h3>{t.title}</h3>
              <p>{t.desc}</p>
            </div>
          ))}
        </div>

        <div className="published-docs">
          <p className="section-label" style={{ marginTop: '3rem' }}>Published Docs</p>
          <h2 className="section-title" style={{ fontSize: '1.2rem' }}>Live documentation I've written</h2>
          <ul className="docs-list">
            {publishedDocs.map((doc, i) => (
              <li key={i}>
                <a href={doc.url} target="_blank" rel="noreferrer">{doc.title} →</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
