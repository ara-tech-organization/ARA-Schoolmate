import './index.css'
import { BrowserRouter, Routes, Route, Outlet, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/home/Navbar'
import CTAFooter from './components/home/CTAFooter'
import Home      from './pages/Home'
import About     from './pages/About'
import MobileApp from './pages/MobileApp'

function ScrollToTop() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (hash) {
      // let the DOM render first, then scroll to the anchor
      setTimeout(() => {
        const el = document.querySelector(hash)
        if (el) el.scrollIntoView({ behavior: 'smooth' })
      }, 80)
    } else {
      window.scrollTo({ top: 0, behavior: 'instant' })
    }
  }, [pathname, hash])
  return null
}

function ComingSoon({ page }) {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font)', flexDirection: 'column', gap: 12 }}>
      <span style={{ fontSize: 14, fontWeight: 700, color: 'var(--red)', letterSpacing: '.1em', textTransform: 'uppercase' }}>{page}</span>
      <p style={{ color: 'var(--text-3)', fontSize: 15 }}>Coming soon</p>
    </div>
  )
}

function Layout() {
  const location = useLocation()
  const noForm = location.pathname === '/smart-school-management-mobile-app'
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main>
        <Outlet />
      </main>
      <CTAFooter noForm={noForm} />
    </>
  )
}

function App() {
  return (
    <BrowserRouter basename="/ARA-Schoolmate">
      <Routes>
        <Route element={<Layout />}>
          <Route path="/"                                      element={<Home />} />
          <Route path="/about"                                 element={<About />} />
          <Route path="/smart-school-management-mobile-app"    element={<MobileApp />} />
          <Route path="/faq"                                   element={<ComingSoon page="FAQ" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
