import './Contact.css'

export default function Contact() {
  return (
    <section id="contact">
      <hr className="divider" />
      <div className="container contact-inner">
        <p className="section-label">Contact</p>
        <h2 className="section-title">Let's work together</h2>
        <p className="contact-desc">
          If you have complex technical content that needs a thoughtful writer —
          or you're building something at the intersection of AI and docs — I'd
          love to hear from you.
        </p>
        <a
          href="mailto:priyanka.elizabeth7@gmail.com"
          className="contact-email"
        >
          priyanka.elizabeth7@gmail.com
        </a>
        <div className="contact-links">
          <a href="https://elizabethpriyanka.wordpress.com" target="_blank" rel="noreferrer">Blog</a>
          <a href="tel:+919160441419">+91 916 044 1419</a>
          <span className="contact-location">Hyderabad, India</span>
        </div>
      </div>
    </section>
  )
}
