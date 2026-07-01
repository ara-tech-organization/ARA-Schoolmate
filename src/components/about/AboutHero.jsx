import { ArrowRight, ChevronRight, CheckCircle2, Building2, Star, Users, TrendingUp, GraduationCap, Shield } from 'lucide-react'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'

const heroImg = 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1600&auto=format&fit=crop&q=80'

const stats = [
  { icon: Building2,   num: '500+', label: 'Schools Empowered'  },
  { icon: Star,        num: '10+',  label: 'Years of Excellence' },
  { icon: Users,       num: '99%',  label: 'Satisfaction Rate'   },
  { icon: TrendingUp,  num: '80%',  label: 'Less Manual Work'    },
]

const highlights = [
  { icon: GraduationCap, text: 'Cloud-Based ERP'     },
  { icon: Shield,        text: 'Real-Time Alerts'    },
  { icon: CheckCircle2,  text: 'Smart Attendance'    },
  { icon: CheckCircle2,  text: 'Fee Management'      },
]

export default function AboutHero() {
  const [c, cv] = useScrollAnimation(0.03)

  return (
    <section className="abh-section" style={{ backgroundImage: `url(${heroImg})` }}>

      {/* breadcrumb bar */}
      <div className="abh-bar">
        <div className="wrap abh-bar-inner">
          <nav className="abh-bc" aria-label="Breadcrumb">
            <a href="/">Home</a>
            <ChevronRight size={10} />
            <span>About Us</span>
          </nav>
          <span className="abh-bc-meta">Est. 2014 · ARA Discoveries</span>
        </div>
      </div>

      {/* centered hero content */}
      <div ref={c} className={`wrap abh-center sr${cv ? ' in' : ''}`}>
        <div className="abh-pill">About SchoolMate</div>

        <h1 className="abh-h1">About Us</h1>
        <h2 className="abh-h2">
          Shaping the Future of{' '}
          <span className="abh-accent">School Management</span>
        </h2>

        <p className="abh-lead">
          SchoolMate is a complete cloud-based school management system built to simplify administration, improve parent-teacher communication, and manage academics — all from a single, powerful platform.
        </p>

        {/* highlight chips */}
        <ul className="abh-checks">
          {highlights.map(({ icon: Icon, text }) => (
            <li key={text}>
              <Icon size={12} /> {text}
            </li>
          ))}
        </ul>

        <div className="abh-actions">
          <a href="#mission" className="btn btn-red">
            Our Mission <ArrowRight size={13} />
          </a>
          <a href="#vision" className="abh-ghost">Our Vision</a>
        </div>
      </div>

      {/* stats strip */}
      <div className="abh-stats-bar">
        {stats.map(({ icon: Icon, num, label }) => (
          <div key={label} className="abh-stat">
            <Icon size={15} className="abh-stat-icon" />
            <span className="abh-stat-num">{num}</span>
            <span className="abh-stat-lbl">{label}</span>
          </div>
        ))}
      </div>

    </section>
  )
}
