import { ArrowRight, Building2, Star, Users, TrendingUp, GraduationCap, Shield, CheckCircle2 } from 'lucide-react'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'
import heroVisual from '../../assets/A5.png'

const stats = [
  { icon: Building2,  num: '500+', label: 'Schools Empowered'  },
  { icon: Star,       num: '10+',  label: 'Years of Excellence' },
  { icon: Users,      num: '99%',  label: 'Satisfaction Rate'   },
  { icon: TrendingUp, num: '80%',  label: 'Less Manual Work'    },
]

const highlights = [
  { icon: GraduationCap, text: 'Cloud-Based ERP'  },
  { icon: Shield,        text: 'Real-Time Alerts' },
  { icon: CheckCircle2,  text: 'Smart Attendance' },
  { icon: CheckCircle2,  text: 'Fee Management'   },
]

export default function AboutHero() {
  const [c, cv] = useScrollAnimation(0.03)

  return (
    <section className="abh2-section">

      {/* scattered dot decorations */}
      <div className="abh2-dots-layer" aria-hidden="true">
        {[...Array(18)].map((_, i) => (
          <span key={i} className={`abh2-dot-star abh2-dot-s${i % 4}`} style={{
            left: `${(i * 47 + 11) % 95}%`,
            top:  `${(i * 37 + 7)  % 88}%`,
            animationDelay: `${(i * 0.3) % 2.4}s`,
          }} />
        ))}
      </div>

      <div className="abh2-glow" aria-hidden="true" />

      <div ref={c} className={`wrap abh2-inner sr${cv ? ' in' : ''}`}>

        {/* LEFT — text */}
        <div className="abh2-left">
          <div className="abh2-kicker">
            <span className="abh2-kicker-dot" />
            Shaping Up The Future Generations!
          </div>

          <h1 className="abh2-h1">
            Smarter Schools,<br />
            <span className="abh2-h1-accent">Stronger Futures!</span>
          </h1>

          <p className="abh2-lead">
            SchoolMate is a complete cloud-based school management platform — simplifying
            administration, parent communication, and academics all in one place.
          </p>

          <ul className="abh2-checks">
            {highlights.map(({ icon: Icon, text }) => (
              <li key={text}><Icon size={13} /> {text}</li>
            ))}
          </ul>

          <div className="abh2-actions">
            <a href="#platform" className="abh2-btn-dark">
              Explore Platform <ArrowRight size={14} />
            </a>
            <a href="#mission" className="abh2-btn-ghost">Our Mission</a>
          </div>
        </div>

        {/* RIGHT — A5.png with clip-path + rotating rings */}
        <div className="abh2-right">
          <div className="abh2-img-scene">
            {/* outer slow-spin orbit */}
            <div className="abh2-orbit" aria-hidden="true" />
            {/* inner counter-spin orbit */}
            <div className="abh2-orbit-inner" aria-hidden="true" />
            {/* pulsing glow behind image */}
            <div className="abh2-img-glow" aria-hidden="true" />

            {/* clip-path image with bob + spin animation */}
            <div className="abh2-img-clip">
              <img
                src={heroVisual}
                alt="SchoolMate school management platform"
                className="abh2-hero-img"
                loading="eager"
              />
            </div>
          </div>
        </div>

      </div>

      {/* curved white bottom */}
      <div className="abh2-curve" aria-hidden="true" />

      {/* stats bar */}
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
