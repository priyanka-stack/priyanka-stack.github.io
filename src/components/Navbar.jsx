import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import './Navbar.css'

const links = ['About', 'Skills', 'Experience', 'Projects', 'Writing', 'Contact']

function scrollTo(id) {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const isHome = location.pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-inner container">
        <button className="nav-logo" onClick={() => scrollTo('hero')}>EP</button>
        <nav className={`nav-links ${menuOpen ? 'open' : ''}`}>
          {isHome && links.map(l => (
            <button
              key={l}
              onClick={() => { scrollTo(l.toLowerCase()); setMenuOpen(false) }}
            >
              {l}
            </button>
          ))}
        </nav>
        {isHome && (
          <button
            className="menu-toggle"
            aria-label="Toggle menu"
            onClick={() => setMenuOpen(o => !o)}
          >
            <span /><span /><span />
          </button>
        )}
      </div>
    </header>
  )
}
