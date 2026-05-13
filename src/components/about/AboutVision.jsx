import { Eye, Zap, Users, Lock, TrendingUp, ArrowRight, Globe, Star } from 'lucide-react'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'

const qualities = [
  { icon: Zap,        num: '01', title: 'Smart & Scalable',              desc: 'Technology that grows seamlessly with your institution without disruption.' },
  { icon: Users,      num: '02', title: 'User-Friendly & Secure',        desc: 'Intuitive interfaces with enterprise-grade security built for every user.' },
  { icon: Lock,       num: '03', title: 'Accessible for All Schools',    desc: 'Affordable, cloud-ready solutions available for schools of all sizes.' },
  { icon: TrendingUp, num: '04', title: 'Focused on Outcomes',           desc: 'Every feature designed to measurably improve student success and growth.' },
]

const visionStats = [
  { icon: Globe, num: '50+',  label: 'Cities Reached'     },
  { icon: Star,  num: '10+',  label: 'Years of Innovation' },
  { icon: Users, num: '500+', label: 'Schools Empowered'  },
]

export default function AboutVision() {
  const [h, hv] = useScrollAnimation(0.05)
  const [l, lv] = useScrollAnimation(0.06)
  const [r, rv] = useScrollAnimation(0.06)

  return (
    <section className="abv-section" id="vision">
      <div className="ab-section-num">03</div>

      <div className="wrap">

        {/* header */}
        <div ref={h} className={`abv-header sr${hv ? ' in' : ''}`}>
          <div className="chip chip-red"><Eye size={12} /> Our Vision</div>
          <h2 className="htitle abv-title">
            Transforming Education Through <em>Smart Digital Innovation</em>
          </h2>
        </div>

        {/* main layout */}
        <div className="abv-layout">

          {/* LEFT — image + stats */}
          <div ref={l} className={`abv-left sr-l${lv ? ' in' : ''}`}>
            <div className="abv-img-frame">
              <div className="abv-corner abv-corner-tl" />
              <div className="abv-corner abv-corner-br" />
              <img
                src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=700&q=80"
                alt="Modern school building"
                className="abv-img"
              />
              <div className="abv-img-overlay" />
              <div className="abv-img-pill">
                <div className="abv-pill-dot" />
                Future-Ready Schools
              </div>
            </div>

            <div className="abv-stats-row">
              {visionStats.map(({ icon: Icon, num, label }) => (
                <div key={label} className="abv-stat">
                  <div className="abv-stat-icon"><Icon size={16} /></div>
                  <span className="abv-stat-num">{num}</span>
                  <span className="abv-stat-label">{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — text + quality cards */}
          <div ref={r} className={`abv-right sr-r${rv ? ' in' : ''}`}>

            <p className="abv-eyeline"><Eye size={13} /> Where We Are Headed</p>
            <p className="abv-body">
              Our vision is to redefine how schools and institutions operate by creating a
              future-ready smart school management system that promotes academic excellence,
              operational transparency, and better parent-school collaboration.
            </p>
            <div className="abv-callout">
              SchoolMate is not just software — a complete digital ecosystem for modern education.
            </div>

            <div className="abv-qualities">
              {qualities.map(({ icon: Icon, num, title, desc }, i) => (
                <div key={title} className="abv-q-card" style={{ transitionDelay: `${i * 0.07}s` }}>
                  <div className="abv-q-top">
                    <div className="abv-q-icon"><Icon size={16} /></div>
                    <span className="abv-q-num">{num}</span>
                  </div>
                  <span className="abv-q-title">{title}</span>
                  <span className="abv-q-desc">{desc}</span>
                </div>
              ))}
            </div>

            <a href="#contact" className="btn btn-red abv-cta">
              Get Started Today <ArrowRight size={14} />
            </a>

          </div>
        </div>
      </div>
    </section>
  )
}
