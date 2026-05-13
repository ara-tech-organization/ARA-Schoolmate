import { ArrowRight, Smartphone, Shield, Zap, Globe, CheckCircle2, Building2, Star, Users, TrendingUp } from 'lucide-react'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'

const stats = [
  { icon: Building2,  num: '500+', label: 'Schools'      },
  { icon: Star,       num: '10+',  label: 'Years'        },
  { icon: Users,      num: '99%',  label: 'Satisfaction' },
  { icon: TrendingUp, num: '80%',  label: 'Less Work'    },
]

const tags = [
  { icon: Smartphone, text: 'iOS & Android' },
  { icon: Shield,     text: 'Secure & Private' },
  { icon: Zap,        text: 'Real-Time Sync' },
  { icon: Globe,      text: 'Cloud-Based' },
]

const checks = [
  'Free onboarding & setup',
  'No technical expertise needed',
  'Works on all devices',
  'Dedicated support team',
]

export default function MobileHero() {
  const [topRef, topVis]   = useScrollAnimation(0.03)
  const [bodyRef, bodyVis] = useScrollAnimation(0.04)
  const [statRef, statVis] = useScrollAnimation(0.05)

  return (
    <section className="mh2-section" id="hero">

      {/* breadcrumb bar */}
      <div className="mh2-bar">
        <div className="wrap mh2-bar-inner">
          <nav className="mob-bc">
            <a href="/">Home</a>
            <span className="mob-bc-sep">/</span>
            <span>Mobile App</span>
          </nav>
          <span className="mob-bc-meta">iOS &amp; Android · Free Download</span>
        </div>
      </div>

      {/* main grid */}
      <div className="wrap mh2-body">

        {/* left — big label column */}
        <div ref={topRef} className={`mh2-left sr-l${topVis ? ' in' : ''}`}>
          <div className="mh2-eyebrow">
            <span className="mh2-eyebrow-dot" />
            School Management App
          </div>

          <h1 className="mh2-h1">
            One App.<br />
            <span className="mh2-h1-accent">Every School</span><br />
            <span className="mh2-h1-outline">Operation.</span>
          </h1>

          {/* feature tags row */}
          <div className="mh2-tags">
            {tags.map(({ icon: Icon, text }) => (
              <span key={text} className="mh2-tag">
                <Icon size={12} />
                {text}
              </span>
            ))}
          </div>

          <p className="mh2-lead">
            SchoolMate gives administrators, teachers, students, and parents a single
            powerful app to manage attendance, fees, communication, and academics —
            anytime, anywhere.
          </p>

          <div className="mh2-checks">
            {checks.map(c => (
              <div key={c} className="mh2-check">
                <CheckCircle2 size={14} />
                <span>{c}</span>
              </div>
            ))}
          </div>

          <div className="mh2-actions">
            <a href="#features" className="btn btn-red">
              Explore Features <ArrowRight size={14} />
            </a>
            <a href="#why" className="mh2-ghost">See Why Schools Love It</a>
          </div>
        </div>

        {/* right — stat cards */}
        <div ref={bodyRef} className={`mh2-right sr-r${bodyVis ? ' in' : ''}`}>
          <div className="mh2-cards-grid">
            {stats.map(({ icon: Icon, num, label }, i) => (
              <div
                key={label}
                className="mh2-stat-card"
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <div className="mh2-stat-icon"><Icon size={20} /></div>
                <span className="mh2-stat-num">{num}</span>
                <span className="mh2-stat-lbl">{label}</span>
              </div>
            ))}
          </div>

          {/* decorative big word */}
          <div className="mh2-deco-word" aria-hidden="true">APP</div>
        </div>

      </div>

      {/* bottom stripe */}
      <div ref={statRef} className={`mh2-stripe sr${statVis ? ' in' : ''}`}>
        <div className="wrap mh2-stripe-inner">
          <span className="mh2-stripe-label">Trusted by schools across India</span>
          <div className="mh2-stripe-divider" />
          <span className="mh2-stripe-label">Available on iOS &amp; Android</span>
          <div className="mh2-stripe-divider" />
          <span className="mh2-stripe-label">Free setup · No long-term contracts</span>
          <div className="mh2-stripe-divider" />
          <span className="mh2-stripe-label">24/7 dedicated support</span>
        </div>
      </div>

    </section>
  )
}
