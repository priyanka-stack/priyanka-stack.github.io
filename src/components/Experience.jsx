import './Experience.css'

const jobs = [
  {
    role: 'Founder',
    company: 'Women in AI',
    period: '2025 – Present',
    desc: 'Building a platform for women in India to amplify their voices in the AI space — creating an ecosystem that supports learning, growth, and belonging. Curating community programming at the intersection of AI literacy, inclusion, and professional development.',
  },
  {
    role: 'Staff Technical Writer',
    company: 'ServiceNow',
    period: '2021 – Present',
    desc: 'Lead content strategy for HRSD, Employee Journey Management, and Talent workflows. Designed the CONVERSE Framework for AI-ready documentation and built a Claude-powered evaluator. Led the SmartOps (NowX) team through 2 releases, drove a cross-functional documentation accuracy initiative, and built the InfoDevWeb DITA Style Reference tool compiling ~120 authoring guidelines.',
  },
  {
    role: 'Senior Technical Writer',
    company: 'Digital Guardian',
    period: '2021',
    desc: 'Led documentation for enterprise-grade DLP software. Introduced multimedia content including interactive tutorials and video walkthroughs. Streamlined workflows with Git-based versioning and reusable content models.',
  },
  {
    role: 'Senior Technical Writer',
    company: 'Progress Software',
    period: '2019 – 2021',
    desc: 'Authored product documentation for OpenEdge, PAS for OpenEdge, and OpenEdge Command Center — writing documentation for the Command Center from scratch at its first release. Implemented modular authoring templates and coordinated cross-functional reviews in agile sprints.',
  },
  {
    role: 'Information Developer',
    company: 'CA Technologies',
    period: '2016 – 2019',
    desc: 'Delivered developer and end-user documentation for CA Advanced Authentication and CloudMinder. Championed Git-based version control and reusable content architecture; contributed to DITA migration and acted as product SME between support and QA.',
  },
  {
    role: 'Technical Writer',
    company: 'Thomson Reuters',
    period: '2013 – 2016',
    desc: 'Developed comprehensive documentation for Tax & Accounting software products — user manuals, release notes, process guides, training materials, and job aids. Partnered with developers, QA, and training teams across agile release cycles.',
  },
]

export default function Experience() {
  return (
    <section id="experience">
      <hr className="divider" />
      <div className="container" style={{ paddingTop: 'var(--section-gap)' }}>
        <p className="section-label">Experience</p>
        <h2 className="section-title">Work history</h2>
        <div className="timeline">
          {jobs.map((job, i) => (
            <div key={i} className="timeline-item">
              <div className="timeline-meta">
                <span className="timeline-period">{job.period}</span>
              </div>
              <div className="timeline-content">
                <h3>{job.role}</h3>
                <p className="timeline-company">{job.company}</p>
                <p className="timeline-desc">{job.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
