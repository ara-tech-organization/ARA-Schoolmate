import { DollarSign, BookOpen, UserCheck, Bell, MapPin, Calendar, ArrowRight, Cpu } from 'lucide-react'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'

const cards = [
  { icon: DollarSign, title: 'Finance & Billing Dashboards',    desc: 'Complete fee, payroll, and expense tracking in one place' },
  { icon: BookOpen,   title: 'Homework & Assignment Workflows', desc: 'Automated assignment distribution and submission tracking' },
  { icon: UserCheck,  title: 'Attendance & Leave Automation',   desc: 'Auto-calculate attendance and process leave requests' },
  { icon: Bell,       title: 'Circular Approvals',              desc: 'Multi-level approval workflows for circulars and notices' },
  { icon: MapPin,     title: 'Transport Management',            desc: 'GPS tracking, route planning, and safety alerts' },
  { icon: Calendar,   title: 'Event & Calendar Planning',       desc: 'School-wide calendar with event reminders and scheduling' },
]

export default function AdvancedSection() {
  const [h, hv] = useScrollAnimation()
  const [g, gv] = useScrollAnimation(0.06)

  return (
    <section className="adv2-section">
      {/* background image */}
      <div className="adv2-bg">
        <img
          src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1400&q=60"
          alt="School campus"
          className="adv2-bg-img"
        />
        <div className="adv2-bg-overlay" />
      </div>

      <div className="adv2-inner">

        {/* centered header */}
        <div ref={h} className={`adv2-header sr${hv ? ' in' : ''}`}>
          <div className="chip chip-dark"><span className="chip-dot chip-dot-white" /><Cpu size={12} /> Advanced Operations</div>
          <h2 className="htitle htitle-white">Advanced Digital <em>School Operations</em></h2>
          <p className="adv2-sub">
            SchoolMate automates routine tasks, increases accountability and transparency.
            A powerful online student attendance management software from a single dashboard.
          </p>
          <div className="adv2-ctas">
            <a href="#get-started" className="btn btn-red btn-lg">Start Free Trial <ArrowRight size={17} /></a>
            <a href="tel:+919876543210" className="btn btn-ghost-white btn-lg">Talk to Sales</a>
          </div>
        </div>

        {/* glass cards */}
        <div ref={g} className={`adv2-grid sr${gv ? ' in' : ''}`}>
          {cards.map(({ icon: Icon, title, desc }, i) => (
            <div className="adv2-card" key={title} style={{ transitionDelay: `${i * 0.07}s` }}>
              <div className="adv2-card-icon"><Icon size={22} /></div>
              <h3 className="adv2-card-title">{title}</h3>
              <p className="adv2-card-desc">{desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
