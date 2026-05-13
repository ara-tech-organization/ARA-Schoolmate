import { Zap, Users, Monitor, MessageSquare, BarChart3, ArrowRight } from 'lucide-react'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'

const items = [
  { num: '01', icon: Zap,           text: 'A smart school management system',       desc: 'Centralised control of all school operations in one place.' },
  { num: '02', icon: Users,         text: 'A student school management system',     desc: 'Manage student data, progress, and records seamlessly.' },
  { num: '03', icon: Monitor,       text: 'A digital attendance platform',          desc: 'Real-time digital attendance with instant parent alerts.' },
  { num: '04', icon: MessageSquare, text: 'A communication management solution',    desc: 'Instant circulars, notifications, and two-way messaging.' },
  { num: '05', icon: BarChart3,     text: 'A centralized academic management app',  desc: 'Analytics, reports, and academic monitoring at your fingertips.' },
]

export default function MobileControl() {
  const [hRef, hVis] = useScrollAnimation(0.05)
  const [gRef, gVis] = useScrollAnimation(0.06)

  return (
    <section className="mob-control" id="control">
      <div className="wrap">

        <div ref={hRef} className={`mob-ctrl-head sr${hVis ? ' in' : ''}`}>
          <div className="mob-section-num">04</div>
          <span className="chip chip-red">Full Control</span>
          <h2 className="htitle mob-ctrl-h2">One App, Complete School Control</h2>
          <p className="hsub mob-ctrl-intro">
            The SchoolMate Mobile App is designed to function as a single powerful platform
            for every aspect of school management.
          </p>
        </div>

        <div ref={gRef} className={`mob-ctrl-grid sr${gVis ? ' in' : ''}`}>
          {items.map(({ num, icon: Icon, text, desc }, i) => (
            <div key={num} className="mob-ctrl-card" style={{ transitionDelay: `${i * 0.08}s` }}>
              <div className="mob-ctrl-card-top">
                <span className="mob-ctrl-num">{num}</span>
                <div className="mob-ctrl-icon"><Icon size={20} /></div>
              </div>
              <h3 className="mob-ctrl-title">{text}</h3>
              <p className="mob-ctrl-desc">{desc}</p>
              <div className="mob-ctrl-line" />
            </div>
          ))}

          {/* closing callout card */}
          <div className="mob-ctrl-card mob-ctrl-card-red">
            <p className="mob-ctrl-callout">
              SchoolMate helps institutions modernise school operations with cloud-based
              security and mobile accessibility without the complexity.
            </p>
            <a href="#why" className="mob-ctrl-cta">
              See Why Schools Choose Us <ArrowRight size={14} />
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}
