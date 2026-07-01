import { useState, useEffect } from 'react'
import { X, ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react'

const PERKS = [
  'Free personalised product demo',
  'Setup in under 30 minutes',
  'Dedicated onboarding support',
]

export default function EngagementPopup() {
  const [visible, setVisible] = useState(false)
  const [closing, setClosing] = useState(false)

  useEffect(() => {
    if (sessionStorage.getItem('sm_popup')) return
    const t = setTimeout(() => {
      setVisible(true)
      sessionStorage.setItem('sm_popup', '1')
    }, 10000)
    return () => clearTimeout(t)
  }, [])

  function close() {
    setClosing(true)
    setTimeout(() => setVisible(false), 280)
  }

  if (!visible) return null

  return (
    <div
      className={`ep-overlay${closing ? ' ep-closing' : ''}`}
      onClick={close}
      role="dialog"
      aria-modal="true"
      aria-labelledby="ep-title"
    >
      <div
        className={`ep-modal${closing ? ' ep-modal-out' : ''}`}
        onClick={e => e.stopPropagation()}
      >
        {/* close */}
        <button className="ep-close" onClick={close} aria-label="Close popup">
          <X size={16} />
        </button>

        {/* accent top bar */}
        <div className="ep-accent-bar" />

        {/* badge */}
        <div className="ep-badge">
          <Sparkles size={11} />
          Free Demo Available
        </div>

        {/* headline */}
        <h2 className="ep-title" id="ep-title">
          Ready to Modernise<br />
          <span className="ep-title-accent">Your School?</span>
        </h2>

        {/* description */}
        <p className="ep-desc">
          Join <strong>500+ schools</strong> across India using SchoolMate to reduce admin work by 80% and improve parent engagement instantly.
        </p>

        {/* perks */}
        <ul className="ep-perks">
          {PERKS.map(p => (
            <li key={p}>
              <CheckCircle2 size={13} />
              {p}
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a href="/contact" className="ep-cta" onClick={close}>
          Get Free Demo <ArrowRight size={15} />
        </a>

        <p className="ep-note">No credit card required · 100% free</p>
      </div>
    </div>
  )
}
