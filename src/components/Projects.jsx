import './Projects.css'

const projects = [
  {
    title: 'CONVERSE Framework',
    tags: ['AI Strategy', 'Framework Design', 'Talk'],
    desc: 'An 8-dimension methodology for AI-ready documentation — defining how content must be structured to be consumable by AI agents, RAG pipelines, and conversational interfaces. Presented at ServiceNow\'s EX Summit in Hyderabad and Bangalore.',
    link: '#',
  },
  {
    title: 'Claude-Powered CONVERSE Evaluator',
    tags: ['React', 'Claude API', 'DITA'],
    desc: 'A React artifact built on the Anthropic API that scores DITA and Markdown content against CONVERSE\'s 8 dimensions. Returns ring chart visualizations, verdict badges, and prioritized revision suggestions. Used for team-level documentation quality audits.',
    link: '#',
  },
  {
    title: 'InfoDevWeb DITA Style Reference Tool',
    tags: ['React', 'DITA', 'Tool Development'],
    desc: 'An interactive React artifact compiling ~120 guidelines from 19 DITA/ditamap files, enabling instant in-context lookup of InfoDevWeb and ServiceNow authoring standards. Reduced context-switching for the documentation team.',
    link: '#',
  },
  {
    title: 'Career Conversations — AI Agent Messaging',
    tags: ['Conversational Design', 'AI Agent UX', 'GenAI'],
    desc: 'Redesigned conversational prompts for two AI agents — Conversation Management Agent and Employee Summary Agent — streamlining scheduling and preparation for manager 1:1s. Simplified tone, added time zone clarity, and differentiated system-generated vs. editable talking points.',
    link: '#',
  },
  {
    title: 'Journey Designer — UX Content',
    tags: ['UX Writing', 'ServiceNow', 'HRSD'],
    desc: 'Improved clarity, consistency, and usability in ServiceNow\'s journey management features. Delivered clear status messages, standardized task labels, simplified filters, and manager view enhancements for HR managers and employees.',
    link: '#',
  },
  {
    title: 'Documentation Accuracy Initiative',
    tags: ['Content Governance', 'AI-Assisted Review', 'Cross-functional'],
    desc: 'Led a cross-functional correction effort addressing overstated claims about the Application Administration feature across multiple release versions. Used AI-assisted cross-referencing to surface and resolve critical inaccuracies in ESM and HR Roles content.',
    link: '#',
  },
]

export default function Projects() {
  return (
    <section id="projects">
      <hr className="divider" />
      <div className="container" style={{ paddingTop: 'var(--section-gap)' }}>
        <p className="section-label">Projects</p>
        <h2 className="section-title">Selected work</h2>
        <div className="projects-grid">
          {projects.map((p, i) => (
            <a key={i} href={p.link} className="project-card">
              <div className="project-tags">
                {p.tags.map(t => <span key={t}>{t}</span>)}
              </div>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
              <span className="project-arrow">View →</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
