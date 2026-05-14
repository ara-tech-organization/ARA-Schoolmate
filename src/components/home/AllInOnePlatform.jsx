import { UserCheck, Fingerprint, CreditCard, DollarSign, ClipboardCheck, MapPin, Bell, BarChart3, CheckCircle2, ArrowRight, Grid3x3 } from 'lucide-react'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'

const modules = [
  { icon: UserCheck,      title: 'Attendance',           desc: 'Real-time student & staff tracking' },
  { icon: Fingerprint,    title: 'Biometric',            desc: 'Secure biometric integration support' },
  { icon: CreditCard,     title: 'Fee & Finance',        desc: 'Online collection & payment tracking' },
  { icon: DollarSign,     title: 'Payroll',              desc: 'Staff payroll and leave management' },
  { icon: ClipboardCheck, title: 'Homework & Timetable', desc: 'Assignments, schedules & submissions' },
  { icon: MapPin,         title: 'Transport',            desc: 'GPS tracking and route management' },
  { icon: Bell,           title: 'Notifications',        desc: 'Instant push alerts for all users' },
  { icon: BarChart3,      title: 'Analytics',            desc: 'Reports, dashboards & insights' },
]

const bullets = [
  'Trusted by growing educational institutions',
  'Secure cloud infrastructure with 99.9% uptime',
  'Easy setup – go live in days, not months',
]

export default function AllInOnePlatform() {
  const [hRef, hVis] = useScrollAnimation()
  const [gRef, gVis] = useScrollAnimation(0.05)

  return (
    <section className="plat3-section">
      <div className="plat3-inner">

        {/* centered header */}
        <div ref={hRef} className={`plat3-header sr${hVis ? ' in' : ''}`}>
          <div className="chip chip-red"><Grid3x3 size={12} /> Integrated Ecosystem</div>
          <h2 className="htitle">Everything Your School Needs <em>in One Platform</em></h2>
          <p className="hsub">
            SchoolMate is an intelligent ecosystem that connects communication, administration, attendance, finance, academics, and transport.
          </p>
          <p className="plat3-seo">
            The integrated architecture and scalable modules of SchoolMate provide benefits for schools looking for an all-in-one student management system software.
            Our platform is also known as the best campus management software, as it helps institutions reduce operational gaps while improving collaboration.
            SchoolMate's integrated education management ERP brings academics, administration, and communication together in one scalable system.
          </p>
        </div>

        {/* module cards grid */}
        <div ref={gRef} className={`plat3-grid sr${gVis ? ' in' : ''}`}>
          {modules.map(({ icon: Icon, title, desc }, i) => (
            <div className="plat3-card" key={title} style={{ transitionDelay: `${i * 0.06}s` }}>
              <div className="plat3-card-icon"><Icon size={22} /></div>
              <h3 className="plat3-card-title">{title}</h3>
              <p className="plat3-card-desc">{desc}</p>
            </div>
          ))}
        </div>

        {/* bullets + CTA */}
        <div className="plat3-footer">
          <div className="plat3-bullets">
            {bullets.map(b => (
              <div className="plat3-bullet" key={b}>
                <CheckCircle2 size={16} style={{ flexShrink: 0 }} />
                <span>{b}</span>
              </div>
            ))}
          </div>
          <a href="#modules" className="btn btn-red">
            Explore All Modules <ArrowRight size={16} />
          </a>
        </div>

      </div>
    </section>
  )
}
