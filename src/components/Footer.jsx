import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <span className="footer-logo">EP</span>
        <p>© {new Date().getFullYear()} Elizabeth Priyanka</p>
      </div>
    </footer>
  )
}
