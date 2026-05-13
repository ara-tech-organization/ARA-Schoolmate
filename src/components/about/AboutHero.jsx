import { ArrowRight, ChevronRight, CheckCircle2, Building2, Star, Users, TrendingUp, GraduationCap } from 'lucide-react'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'

const stats = [
  { icon: Building2,   num: '500+', label: 'Schools Empowered'  },
  { icon: Star,        num: '10+',  label: 'Years of Excellence' },
  { icon: Users,       num: '99%',  label: 'Satisfaction Rate'   },
  { icon: TrendingUp,  num: '80%',  label: 'Less Manual Work'    },
]

export default function AboutHero() {
  const [c, cv] = useScrollAnimation(0.03)
  const [v, vv] = useScrollAnimation(0.05)

  return (
    <section className="abh-section">

      {/* top bar */}
      <div className="abh-bar">
        <div className="wrap abh-bar-inner">
          <nav className="abh-bc">
            <a href="/">Home</a>
            <ChevronRight size={10} />
            <span>About Us</span>
          </nav>
          <span className="abh-bc-meta">Est. 2014 · Ara Discoveries</span>
        </div>
      </div>

      {/* centered content */}
      <div ref={c} className={`wrap abh-center sr${cv ? ' in' : ''}`}>
        <div className="abh-pill">About SchoolMate</div>

        <h1 className="abh-h1">
          Shaping the Future of<br />
          <span className="abh-accent">School Management</span>
        </h1>

        <p className="abh-lead">
          SchoolMate is a smart cloud platform for schools and colleges —
          simplifying administration, improving communication, and powering
          academic excellence for every institution.
        </p>

        <ul className="abh-checks">
          <li><CheckCircle2 size={12} /> Cloud-Based ERP</li>
          <li><CheckCircle2 size={12} /> Real-Time Alerts</li>
          <li><CheckCircle2 size={12} /> Smart Attendance</li>
          <li><CheckCircle2 size={12} /> Fee Management</li>
        </ul>

        <div className="abh-actions">
          <a href="#mission" className="btn btn-red">Our Mission <ArrowRight size={13} /></a>
          <a href="#vision" className="abh-ghost">Our Vision</a>
        </div>
      </div>

      {/* cinematic image */}
      <div ref={v} className={`abh-visual sr${vv ? ' in' : ''}`}>
        <div className="abh-img-frame">
          <img
            src="https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=1400&q=85"
            alt="Smart School Management"
            className="abh-img"
          />
          <div className="abh-img-overlay" />

          {/* award badge — top right */}
          <div className="abh-award">
            <GraduationCap size={16} />
            <div>
              <span className="abh-award-num">10+</span>
              <span className="abh-award-lbl">Years of Excellence</span>
            </div>
          </div>

          {/* frosted stats bar — bottom */}
          <div className="abh-stats-bar">
            {stats.map(({ icon: Icon, num, label }) => (
              <div key={label} className="abh-stat">
                <Icon size={15} className="abh-stat-icon" />
                <span className="abh-stat-num">{num}</span>
                <span className="abh-stat-lbl">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  )
}
