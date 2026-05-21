import { useEffect, useState } from 'react'
import './home.css'

const brand = 'SchoolMate'.split('')

export default function PageLoader() {
  const [hiding, setHiding] = useState(false)
  const [gone,   setGone]   = useState(false)

  useEffect(() => {
    const t1 = setTimeout(() => setHiding(true), 2800)
    const t2 = setTimeout(() => setGone(true),   3400)
    return () => { clearTimeout(t1); clearTimeout(t2) }
  }, [])

  if (gone) return null

  return (
    <div className={`pl-wrap${hiding ? ' pl-hide' : ''}`}>

      {/* ambient blobs */}
      <div className="pl-blob pl-blob-1" />
      <div className="pl-blob pl-blob-2" />

      {/* orbiting particles */}
      <div className="pl-orbit">
        {[...Array(6)].map((_, i) => (
          <span key={i} className="pl-particle" style={{ '--pi': i }} />
        ))}
      </div>

      {/* center icon + rings */}
      <div className="pl-center">

        <div className="pl-icon-wrap">
          {/* pulsing rings */}
          <span className="pl-pulse pl-pulse-1" />
          <span className="pl-pulse pl-pulse-2" />

          {/* solid arc */}
          <svg className="pl-ring-svg pl-arc-svg" viewBox="0 0 110 110" fill="none">
            <circle cx="55" cy="55" r="48"
              stroke="url(#plG2)" strokeWidth="3"
              strokeLinecap="round"
              strokeDasharray="72 230"
              className="pl-arc-spin" />
            <defs>
              <linearGradient id="plG2" x1="0" y1="0" x2="110" y2="110" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#d91c27" />
                <stop offset="100%" stopColor="#ff5252" />
              </linearGradient>
            </defs>
          </svg>

          {/* graduation cap SVG icon */}
          <div className="pl-icon-box">
            <svg viewBox="0 0 48 48" fill="none" className="pl-cap-svg">
              {/* cap board */}
              <path d="M24 10L4 20l20 10 20-10-20-10z"
                fill="white" opacity=".95"/>
              {/* left side */}
              <path d="M10 24.5v10c0 0 5 5 14 5s14-5 14-5v-10"
                stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                fill="none" opacity=".85"/>
              {/* tassel string */}
              <line x1="40" y1="20" x2="40" y2="33"
                stroke="white" strokeWidth="2" strokeLinecap="round" opacity=".8"/>
              {/* tassel end */}
              <circle cx="40" cy="35" r="2.5" fill="white" opacity=".8"/>
            </svg>
          </div>
        </div>

        {/* letter-by-letter brand name */}
        <div className="pl-brand-row">
          {brand.map((ch, i) => (
            <span key={i} className="pl-char"
              style={{ '--ci': i, animationDelay: `${0.05 * i + 0.3}s` }}>
              {ch}
            </span>
          ))}
        </div>

        <p className="pl-tagline">Smart School Management System</p>

        {/* wave bar */}
        <div className="pl-wave-row">
          {[...Array(5)].map((_, i) => (
            <span key={i} className="pl-wave-bar" style={{ '--wi': i }} />
          ))}
        </div>

      </div>

      {/* shimmer progress line */}
      <div className="pl-progress">
        <div className="pl-progress-fill" />
      </div>

    </div>
  )
}
