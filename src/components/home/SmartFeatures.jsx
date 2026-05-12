import { Bell, Smartphone, Shield, Lock, FileX, Zap, CheckCircle2, Sparkles, ArrowRight } from 'lucide-react'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'

const highlights = [
  'Automated attendance with biometric support',
  'Real-time GPS transport monitoring',
  'Integrated fee collection and reminders',
  'Smart timetable and exam scheduling',
  'Comprehensive academic reporting',
  'Multi-branch institution support',
  'Offline mode with auto-sync',
]

export default function SmartFeatures() {
  const [h, hv] = useScrollAnimation()
  const [b, bv] = useScrollAnimation(0.06)

  return (
    <section className="smart2-section">
      <div className="smart2-inner">

        <div ref={h} className={`smart2-header sr${hv ? ' in' : ''}`}>
          <div className="chip chip-red"><Sparkles size={12} /> Smart Features</div>
          <h2 className="htitle">Smart Features That <em>Drive Results</em></h2>
          <p className="hsub">
            SchoolMate is one scalable platform integrating full automation and complete
            communication — a productivity booster for modern schools.
          </p>
        </div>

        <div ref={b} className={`smart2-bento sr${bv ? ' in' : ''}`}>

          <div className="s2b s2b-red">
            <div className="s2b-icon-wrap"><Bell size={38} /></div>
            <h3 className="s2b-title">Real-time Notifications</h3>
            <p className="s2b-desc">Instant push and SMS alerts for attendance, fees, circulars, and emergencies — sent to every stakeholder within seconds.</p>
            <div className="s2b-notif-demo">
              <div className="s2b-notif">🔔 Attendance marked — Riya P., Class 9A</div>
              <div className="s2b-notif">💰 Fee reminder sent — 48 parents</div>
              <div className="s2b-notif">📢 Circular: Annual Day on Dec 20</div>
            </div>
          </div>

          <div className="s2b s2b-dark">
            <div className="s2b-icon-wrap s2b-icon-sm"><Smartphone size={26} /></div>
            <h3 className="s2b-title">Mobile App</h3>
            <p className="s2b-desc">Full-featured iOS & Android app for teachers, parents, and admins.</p>
          </div>

          <div className="s2b s2b-sec">
            <div className="s2b-icon-wrap s2b-icon-sm"><Shield size={26} /></div>
            <h3 className="s2b-title">Enterprise Security</h3>
            <p className="s2b-desc">Encrypted cloud with regular backups and 99.9% uptime guarantee.</p>
          </div>

          <div className="s2b s2b-highlights">
            <h3 className="s2b-hl-head"><Sparkles size={16} /> Key Highlights</h3>
            <div className="s2b-hl-list">
              {highlights.map(item => (
                <div className="s2b-hl-item" key={item}>
                  <CheckCircle2 size={14} color="var(--red)" style={{ flexShrink: 0 }} />
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="s2b s2b-purple">
            <div className="s2b-icon-wrap s2b-icon-sm"><Lock size={26} /></div>
            <h3 className="s2b-title">Role-based Access</h3>
            <p className="s2b-desc">Granular permissions — each user sees only what is relevant to them.</p>
          </div>

          <div className="s2b s2b-orange">
            <div className="s2b-icon-wrap s2b-icon-sm"><FileX size={26} /></div>
            <h3 className="s2b-title">Paperless Workflows</h3>
            <p className="s2b-desc">Digital forms and approvals eliminate manual paper-based processes entirely.</p>
          </div>

          <div className="s2b s2b-wide">
            <div className="s2b-wide-icon"><Zap size={30} /></div>
            <h3 className="s2b-title">Lightning Fast Delivery</h3>
            <p className="s2b-desc">Messages, circulars, and alerts reach all stakeholders within seconds of sending — no delays, no missed updates.</p>
            <a href="#get-started" className="btn btn-red s2b-wide-btn">
              Get Started <ArrowRight size={16} />
            </a>
          </div>

        </div>
      </div>
    </section>
  )
}
