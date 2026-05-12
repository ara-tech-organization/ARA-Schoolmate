import { useState, useEffect } from 'react'
import { Phone, Menu, X } from 'lucide-react'
import logo from '../../assets/Logo.png'

const links = [
  { label: 'Home',     href: '#home' },
  { label: 'Features', href: '#features' },
  { label: 'Modules',  href: '#modules' },
  { label: 'About',    href: '#why' },
  { label: 'FAQ',      href: '#faq' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <header className={`nav ${scrolled ? 'nav-solid' : 'nav-transparent'}`}>
      <div className="nav-bar">
        <a href="#home" className="nav-logo">
          <img src={logo} alt="SchoolMate" className="nav-logo-img" />
        </a>

        <nav className="nav-links">
          {links.map(l => <a key={l.label} href={l.href}>{l.label}</a>)}
        </nav>

        <div className="nav-actions">
          <a href="tel:+919876543210" className="nav-phone">
            <Phone size={15} /> +91 98765 43210
          </a>
          <a href="#get-started" className="btn btn-red" style={{ padding: '10px 20px', fontSize: '13.5px' }}>
            Get Free Demo
          </a>
          <button className="nav-burger" onClick={() => setOpen(o => !o)} aria-label="menu">
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      <nav className={`nav-mobile${open ? ' open' : ''}`}>
        {links.map(l => (
          <a key={l.label} href={l.href} onClick={() => setOpen(false)}>{l.label}</a>
        ))}
        <a href="#get-started" className="btn btn-red" onClick={() => setOpen(false)}>
          Get Free Demo
        </a>
      </nav>
    </header>
  )
}
