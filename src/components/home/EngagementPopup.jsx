import { useState, useEffect } from 'react'
import { X, ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react'

export default function EngagementPopup() {
  const [visible, setVisible]     = useState(false)
  const [closing, setClosing]     = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm]           = useState({ name: '', phone: '', school: '', email: '' })

  useEffect(() => {
    if (!localStorage.getItem('sm_visited')) {
      localStorage.setItem('sm_visited', '1')
      return
    }
    const t = setTimeout(() => setVisible(true), 10000)
    return () => clearTimeout(t)
  }, [])

  function close() {
    setClosing(true)
    setTimeout(() => setVisible(false), 280)
  }

  function submit(e) {
    e.preventDefault()
    setSubmitted(true)
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

        {submitted ? (
          <div className="form-success">
            <div className="form-success-icon"><CheckCircle2 size={32} /></div>
            <h3 style={{ fontSize: 17, fontWeight: 700, marginBottom: 6 }}>Thank You!</h3>
            <p style={{ fontSize: 12.5, color: 'var(--text-4)' }}>Our team will reach you within 24 hours.</p>
          </div>
        ) : (
          <>
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

            {/* form */}
            <form onSubmit={submit}>
              <div className="fg-row">
                <div className="fg">
                  <label>Full Name *</label>
                  <input type="text" placeholder="Your name" required
                    value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} />
                </div>
                <div className="fg">
                  <label>Phone *</label>
                  <input type="tel" placeholder="+91 XXXXX" required
                    value={form.phone} onChange={e => setForm(f => ({ ...f, phone: e.target.value }))} />
                </div>
              </div>
              <div className="fg">
                <label>School / Institution *</label>
                <input type="text" placeholder="School name" required
                  value={form.school} onChange={e => setForm(f => ({ ...f, school: e.target.value }))} />
              </div>
              <div className="fg">
                <label>Email Address</label>
                <input type="email" placeholder="you@school.com"
                  value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))} />
              </div>
              <button type="submit" className="form-btn" style={{ marginTop: 10, marginBottom: 12 }}>
                Get Free Demo <ArrowRight size={15} />
              </button>
            </form>

            <p className="ep-note">No credit card required · 100% free</p>
          </>
        )}
      </div>
    </div>
  )
}
