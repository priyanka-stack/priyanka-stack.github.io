import './Hero.css'

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="container">
        <p className="hero-eyebrow">Staff Technical Writer · Content Strategist · AI Practitioner</p>
        <h1 className="hero-title">
          Writing that helps people<br />
          <em>actually succeed.</em>
        </h1>
        <p className="hero-sub">
          11+ years turning complex enterprise software into documentation people
          want to read. At ServiceNow I lead content strategy for HRSD, build
          AI-powered authoring tools, and define what it means to write for
          both humans and AI agents.
        </p>
        <div className="hero-cta">
          <a href="#projects" className="btn-primary">View my work</a>
          <a href="#contact" className="btn-ghost">Get in touch</a>
        </div>
      </div>
    </section>
  )
}
