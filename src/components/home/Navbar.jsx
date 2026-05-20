import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { NavLink } from 'react-router-dom'
import logo from '../../assets/Header.png'

const links = [
  { label: 'Home',       to: '/' },
  { label: 'About',      to: '/about' },
  { label: 'Mobile App', to: '/smart-school-management-mobile-app' },
  { label: 'Contact',    to: '/contact' },
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
        <NavLink to="/" className="nav-logo">
          <img src={logo} alt="SchoolMate" className="nav-logo-img" />
        </NavLink>

        <nav className="nav-links">
          {links.map(l => (
            <NavLink
              key={l.label}
              to={l.to}
              end={l.to === '/'}
              className={({ isActive }) => isActive ? 'nav-active' : ''}
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="nav-actions">
          <a href="https://uat.araschoolmate.com" target="_blank" rel="noopener noreferrer" className="btn btn-outline-red" style={{ padding: '7px 18px', fontSize: '12.5px' }}>
            Login
          </a>
          <NavLink to="/#contact" className="btn btn-red" style={{ padding: '7px 18px', fontSize: '12.5px' }}>
            Get Free Demo
          </NavLink>
          <button className="nav-burger" onClick={() => setOpen(o => !o)} aria-label="menu">
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      <nav className={`nav-mobile${open ? ' open' : ''}`}>
        {links.map(l => (
          <NavLink
            key={l.label}
            to={l.to}
            end={l.to === '/'}
            className={({ isActive }) => isActive ? 'nav-active' : ''}
            onClick={() => setOpen(false)}
          >
            {l.label}
          </NavLink>
        ))}
        <NavLink to="/#contact" className="btn btn-red" onClick={() => setOpen(false)}>
          Get Free Demo
        </NavLink>
      </nav>
    </header>
  )
}
