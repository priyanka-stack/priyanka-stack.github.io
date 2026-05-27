import { useParams, Link } from 'react-router-dom'
import { projects } from '../data/projects'
import './ProjectDetail.css'

export default function ProjectDetail() {
  const { slug } = useParams()
  const project = projects.find(p => p.slug === slug)

  if (!project) {
    return (
      <div className="not-found container">
        <p>Project not found.</p>
        <Link to="/" className="back-link">← Back to portfolio</Link>
      </div>
    )
  }

  return (
    <div className="project-detail">
      <div className="container">
        <Link to="/" className="back-link">← Back to portfolio</Link>

        <div className="project-detail-tags">
          {project.tags.map(t => <span key={t}>{t}</span>)}
        </div>

        <h1 className="project-detail-title">{project.title}</h1>
        <p className="project-detail-overview">{project.overview}</p>

        <div className="project-detail-section">
          <h2>What I did</h2>
          <ul className="project-highlights">
            {project.highlights.map((h, i) => (
              <li key={i}>{h}</li>
            ))}
          </ul>
        </div>

        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noreferrer"
            className="project-detail-link"
          >
            {project.linkLabel || 'View project →'}
          </a>
        )}
      </div>
    </div>
  )
}
