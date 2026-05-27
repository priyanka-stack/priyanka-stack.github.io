import './About.css'

export default function About() {
  return (
    <section id="about">
      <hr className="divider" />
      <div className="container about-grid">
        <div>
          <p className="section-label">About</p>
          <h2 className="section-title">A writer who leads<br />with empathy.</h2>
        </div>
        <div className="about-body">
          <p>
            Curious. Thoughtful. A bit of a perfectionist. The kind of person who'll
            spend hours rewriting a sentence to make it sing, and then quietly wonder
            if anyone noticed.
          </p>
          <p>
            For 11+ years I've poured energy into writing for others — product teams,
            enterprise users, developers, customers across time zones. My work lives in
            documentation portals, strategy decks, and internal wikis. My writing
            philosophy starts with empathy: understanding what information genuinely
            helps users succeed, not just what communicates clearly.
          </p>
          <p>
            Based in Hyderabad, India. Staff Technical Writer at ServiceNow. Founder
            of Women in AI — building a platform for women in India to amplify their
            voices in the AI space.
          </p>
        </div>
      </div>
    </section>
  )
}
