import { UserCheck, Fingerprint, CreditCard, DollarSign, ClipboardCheck, MapPin, Bell, BarChart3, CheckCircle2, ArrowRight, Grid3x3 } from 'lucide-react'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'

const modules = [
  { icon: UserCheck,      text: 'Attendance' },
  { icon: Fingerprint,    text: 'Biometric' },
  { icon: CreditCard,     text: 'Fee & Finance' },
  { icon: DollarSign,     text: 'Payroll' },
  { icon: ClipboardCheck, text: 'Homework' },
  { icon: MapPin,         text: 'Transport' },
  { icon: Bell,           text: 'Notifications' },
  { icon: BarChart3,      text: 'Analytics' },
]

const bullets = [
  'Trusted by growing educational institutions',
  'Secure cloud infrastructure with 99.9% uptime',
  'Easy setup – go live in days, not months',
]

function DashboardMockup() {
  return (
    <div className="dash-mockup">
      <div className="dash-topbar">
        <div className="dash-dots"><span /><span /><span /></div>
        <div className="dash-title-bar">SchoolMate — Live Dashboard</div>
        <div className="dash-live-dot"><span />Live</div>
      </div>
      <div className="dash-body">
        <div className="dash-sidebar">
          {['🏠 Overview','👥 Students','📋 Attendance','💰 Fees','🚌 Transport','📊 Reports'].map((item, i) => (
            <div key={item} className={`dash-nav-item${i === 2 ? ' dash-nav-active' : ''}`}>{item}</div>
          ))}
        </div>
        <div className="dash-main">
          <div className="dash-stat-row">
            {[['1,248','Total Students'],['98.2%','Today Attendance'],['₹4.2L','Fees Collected']].map(([n, l]) => (
              <div className="dash-stat-card" key={l}>
                <div className="dash-stat-num">{n}</div>
                <div className="dash-stat-lbl">{l}</div>
              </div>
            ))}
          </div>
          <div className="dash-chart-area">
            <div className="dash-chart-label">Weekly Attendance Trend</div>
            <div className="dash-bars">
              {[82,91,78,95,88,93,87].map((h, i) => (
                <div key={i} className="dash-bar-col">
                  <div className="dash-bar-fill" style={{ height: `${h}%` }} />
                  <div className="dash-bar-day">{['M','T','W','T','F','S','S'][i]}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="dash-alerts-area">
            <div className="dash-alert-item">🔔 3 fee reminders sent to Class 9B parents</div>
            <div className="dash-alert-item dash-alert-green">✅ Attendance marked — Class 10A (98%)</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function AllInOnePlatform() {
  const [cl, clv] = useScrollAnimation()
  const [vl, vlv] = useScrollAnimation()

  return (
    <section className="platform2-section">
      <div className="platform2-inner">

        {/* content */}
        <div ref={cl} className={`platform2-content sr-l${clv ? ' in' : ''}`}>
          <div className="chip chip-red"><Grid3x3 size={12} /> Integrated Ecosystem</div>
          <h2 className="htitle">
            The Ultimate <em>Smartschool Management System</em>
          </h2>
          <p className="hsub" style={{ marginBottom: 28 }}>
            SchoolMate is an intelligent student database management system software connecting communication, administration,
            attendance, finance, academics, and transport.
          </p>

          <div className="platform2-modules">
            {modules.map(({ icon: Icon, text }, i) => (
              <div className="p2m-item" key={text} style={{ transitionDelay: `${i * 0.06}s` }}>
                <div className="p2m-icon"><Icon size={17} /></div>
                <span>{text}</span>
              </div>
            ))}
          </div>

          <div className="platform2-bullets">
            {bullets.map(b => (
              <div className="p2b-item" key={b}>
                <CheckCircle2 size={17} style={{ flexShrink: 0 }} /> {b}
              </div>
            ))}
          </div>

          <a href="#modules" className="btn btn-red">
            Explore All Modules <ArrowRight size={16} />
          </a>
        </div>

        {/* dashboard visual */}
        <div ref={vl} className={`platform2-visual sr-r${vlv ? ' in' : ''}`}>
          <DashboardMockup />
        </div>

      </div>
    </section>
  )
}
