import { Link } from 'react-router-dom'
import { projects } from '../data/projects'
import './Projects.css'

export default function Projects() {
  return (
    <section id="projects">
      <hr className="divider" />
      <div className="container" style={{ paddingTop: 'var(--section-gap)' }}>
        <p className="section-label">Projects</p>
        <h2 className="section-title">Selected work</h2>
        <div className="projects-grid">
          {projects.map((p) => (
            <Link key={p.slug} to={`/projects/${p.slug}`} className="project-card">
              <div className="project-tags">
                {p.tags.map(t => <span key={t}>{t}</span>)}
              </div>
              <h3>{p.title}</h3>
              <p>{p.summary}</p>
              <span className="project-arrow">View →</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
