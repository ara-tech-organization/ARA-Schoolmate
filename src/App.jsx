import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home  from './pages/Home'
import About from './pages/About'

function ComingSoon({ page }) {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font)', flexDirection: 'column', gap: 12 }}>
      <span style={{ fontSize: 14, fontWeight: 700, color: 'var(--red)', letterSpacing: '.1em', textTransform: 'uppercase' }}>{page}</span>
      <p style={{ color: 'var(--text-3)', fontSize: 15 }}>Coming soon</p>
    </div>
  )
}

function App() {
  return (
    <BrowserRouter basename="/ARA-Schoolmate">
      <Routes>
        <Route path="/"           element={<Home />} />
        <Route path="/about"      element={<About />} />
        <Route path="/mobile-app" element={<ComingSoon page="Mobile App" />} />
        <Route path="/faq"        element={<ComingSoon page="FAQ" />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
