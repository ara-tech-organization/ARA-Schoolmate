import { X, CheckCircle2, ArrowRight } from 'lucide-react'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'

const before = [
  'Manual attendance registers',
  'Delayed report sharing',
  'Poor parent communication',
  'Complicated fee management',
  'Time-consuming paperwork',
  'No centralized insights',
]

const after = [
  'Online student attendance management software system',
  'Automated report generation',
  'Real-time homework & circular updates',
  'Smart fee reminders & payment tracking',
  'Student monitoring software & centralized dashboards',
  'Faster communication workflows',
]

export default function WhyChoose() {
  const [h, hv] = useScrollAnimation()
  const [c, cv] = useScrollAnimation(0.08)

  return (
    <section className="why2-section" id="why">
      <div className="why2-deco-ring" />
      <div className="why2-inner">

        {/* header */}
        <div ref={h} className={`why2-header sr${hv ? ' in' : ''}`}>
          <div className="chip chip-red"><span className="chip-dot chip-dot-red" /> Why Choose SchoolMate</div>
          <h2 className="htitle">
            Traditional Systems Are <em>Slow & Fragmented</em>
          </h2>
          <p className="hsub">
            SchoolMate brings all operations into one centralized dashboard — a trusted
            smartschool management system and student information management software that helps schools manage everything from
            academics to transportation.
          </p>
        </div>

        {/* visual comparison */}
        <div ref={c} className={`why2-compare sr${cv ? ' in' : ''}`}>

          {/* BEFORE card */}
          <div className="why2-card why2-before">
            <div className="why2-card-photo">
              <img
                src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=600&q=75"
                alt="Traditional school system"
              />
              <div className="why2-before-photo-overlay" />
            </div>
            <div className="why2-card-body">
              <div className="why2-badge why2-badge-bad">
                <X size={13} /> Before SchoolMate
              </div>
              <ul className="why2-list">
                {before.map(t => (
                  <li key={t} className="why2-bad-item">
                    <X size={13} color="#ff7070" style={{ flexShrink: 0 }} />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Arrow transform */}
          <div className="why2-arrow-col">
            <div className="why2-arrow-circle">
              <ArrowRight size={26} color="#fff" />
            </div>
            <div className="why2-arrow-label">Transform with<br />SchoolMate</div>
          </div>

          {/* AFTER card */}
          <div className="why2-card why2-after">
            <div className="why2-card-photo">
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=75"
                alt="Digital school management"
              />
              <div className="why2-after-photo-overlay" />
            </div>
            <div className="why2-card-body">
              <div className="why2-badge why2-badge-good">
                <CheckCircle2 size={13} /> After SchoolMate
              </div>
              <ul className="why2-list">
                {after.map(t => (
                  <li key={t} className="why2-good-item">
                    <CheckCircle2 size={13} color="#4ade80" style={{ flexShrink: 0 }} />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>


      </div>
    </section>
  )
}
