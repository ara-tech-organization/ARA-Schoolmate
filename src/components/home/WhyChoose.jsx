import { X, CheckCircle2, AlertTriangle, Zap, Users, TrendingUp, Clock, Shield, ArrowRight } from 'lucide-react'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'

const problems = [
  { icon: Clock,         title: 'Attendance',     text: 'Manual registers with frequent errors and no real-time updates' },
  { icon: Users,         title: 'Communication',  text: 'Missed notices, delayed calls, frustrated parents' },
  { icon: TrendingUp,    title: 'Reports',        text: 'Hours wasted generating academic reports manually' },
  { icon: Shield,        title: 'Fee Tracking',   text: 'Cash-only with no reminders, receipts or audit trail' },
  { icon: Zap,           title: 'Admin Work',     text: 'Buried in paperwork with no centralised view' },
  { icon: AlertTriangle, title: 'Data Insights',  text: 'Zero visibility into school or student performance' },
]

const solutions = [
  { title: 'Digital Attendance',   text: 'One-tap attendance with instant SMS & app alerts to parents' },
  { title: 'Real-Time Alerts',     text: 'Push notifications, circulars & homework updates instantly' },
  { title: 'Auto Reports',         text: 'Academic reports generated instantly from one dashboard' },
  { title: 'Smart Fee System',     text: 'Online payments, reminders, and full transaction history' },
  { title: 'Zero Paperwork',       text: 'Everything centralised — run your school from one screen' },
  { title: 'Live Analytics',       text: 'Track every student, class, and branch in real time' },
]

export default function WhyChoose() {
  const [h, hv] = useScrollAnimation()
  const [l, lv] = useScrollAnimation(0.04)
  const [r, rv] = useScrollAnimation(0.04)

  return (
    <section className="wsp-section" id="why">
      <div className="wsp-blob wsp-blob-tl" />
      <div className="wsp-blob wsp-blob-br" />

      <div className="wsp-inner">

        <div ref={h} className={`wsp-header sr${hv ? ' in' : ''}`}>
          <div className="chip chip-red"><span className="chip-dot chip-dot-red" /> Why Choose SchoolMate</div>
          <h2 className="htitle">Traditional Systems Are <em>Slow & Fragmented</em></h2>
          <p className="hsub">
            SchoolMate replaces scattered tools with one smart platform — built for modern
            schools that want real efficiency, not more complexity.
          </p>
        </div>

        <div className="wsp-split">

          {/* LEFT — problems */}
          <div ref={l} className={`wsp-card wsp-left sr-l${lv ? ' in' : ''}`}>
            <div className="wsp-card-top">
              <div className="wsp-badge wsp-badge-bad"><X size={12} /> Without SchoolMate</div>
              <h3 className="wsp-card-title">The Old Way</h3>
            </div>
            <ul className="wsp-list">
              {problems.map(({ icon: Icon, title, text }, i) => (
                <li key={title} className="wsp-prob-row" style={{ transitionDelay: `${i * 0.05}s` }}>
                  <div className="wsp-row-icon"><Icon size={15} /></div>
                  <div className="wsp-row-body">
                    <span className="wsp-row-title">{title}</span>
                    <span className="wsp-row-text">{text}</span>
                  </div>
                  <X size={13} className="wsp-row-x" />
                </li>
              ))}
            </ul>
          </div>

          {/* CENTER */}
          <div className="wsp-center">
            <div className="wsp-center-line" />
            <div className="wsp-center-btn"><ArrowRight size={20} color="#fff" /></div>
            <div className="wsp-center-line" />
          </div>

          {/* RIGHT — solutions */}
          <div ref={r} className={`wsp-card wsp-right sr-r${rv ? ' in' : ''}`}>
            <div className="wsp-card-top">
              <div className="wsp-badge wsp-badge-good"><CheckCircle2 size={12} /> With SchoolMate</div>
              <h3 className="wsp-card-title wsp-title-white">The SchoolMate Way</h3>
            </div>
            <ul className="wsp-list">
              {solutions.map(({ title, text }, i) => (
                <li key={title} className="wsp-sol-row" style={{ transitionDelay: `${i * 0.05}s` }}>
                  <CheckCircle2 size={15} className="wsp-sol-check" style={{ flexShrink: 0 }} />
                  <div className="wsp-row-body">
                    <span className="wsp-row-title wsp-white">{title}</span>
                    <span className="wsp-row-text wsp-white-muted">{text}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  )
}
