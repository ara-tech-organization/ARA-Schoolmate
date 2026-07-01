import { Eye, Zap, Users, Lock, TrendingUp, ArrowRight, Globe, Star, CheckCircle2 } from 'lucide-react'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'
import { NavLink } from 'react-router-dom'
import visionImg from '../../assets/A4.png'

const qualities = [
  { icon: Zap,        num: '01', title: 'Smart & Scalable',           desc: 'Technology that grows seamlessly with your institution without disruption.' },
  { icon: Users,      num: '02', title: 'User-Friendly & Secure',     desc: 'Intuitive interfaces with enterprise-grade security built for every user.' },
  { icon: Lock,       num: '03', title: 'Accessible for All Schools', desc: 'Affordable, cloud-ready solutions available for schools of all sizes.' },
  { icon: TrendingUp, num: '04', title: 'Focused on Outcomes',        desc: 'Every feature designed to measurably improve student success and growth.' },
]

const visionStats = [
  { icon: Globe, num: '50+',  label: 'Cities Reached'      },
  { icon: Star,  num: '10+',  label: 'Years of Innovation' },
  { icon: Users, num: '500+', label: 'Schools Empowered'   },
]

const visionPoints = [
  'Future-ready smartschool management system',
  'Promotes academic excellence & transparency',
  'Better parent-school collaboration tools',
  'Trusted by schools across the country',
]

export default function AboutVision() {
  const [h, hv] = useScrollAnimation(0.05)
  const [l, lv] = useScrollAnimation(0.06)
  const [r, rv] = useScrollAnimation(0.06)
  const [q, qv] = useScrollAnimation(0.05)

  return (
    <section className="abv-section" id="vision">
      <div className="ab-section-num">03</div>

      <div className="wrap">

        {/* ── TOP: split-panel banner ── */}
        <div ref={h} className={`abv-banner sr${hv ? ' in' : ''}`}>

          {/* LEFT — red gradient panel */}
          <div className="abv-bn-left">
            <div className="abv-bn-deco" aria-hidden="true" />
            <div>
              <div className="chip" style={{ background: 'rgba(255,255,255,.18)', color: '#fff', border: '1px solid rgba(255,255,255,.28)' }}>
                <Eye size={12} /> Our Vision
              </div>
              <h2 className="abv-bn-h2">
                Transforming Education Through{' '}
                <em>Smart Digital Innovation</em>
              </h2>
            </div>
            <div className="abv-bn-stats">
              {visionStats.map(({ num, label }) => (
                <div key={label} className="abv-bn-stat">
                  <span className="abv-bn-stat-num">{num}</span>
                  <span className="abv-bn-stat-lbl">{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — white content panel */}
          <div className="abv-bn-right">
            <p className="abv-bn-lead">
              Our vision is to refine how schools and institutions operate by creating a
              future-ready smartschool management system that promotes academic excellence,
              operational transparency, and better parent-school collaboration.
            </p>
            <ul className="abv-bn-checks">
              {visionPoints.map(p => (
                <li key={p}><CheckCircle2 size={14} />{p}</li>
              ))}
            </ul>
          </div>

        </div>

        {/* ── MAIN: text left · image right ── */}
        <div className="abv3-main">

          <div ref={r} className={`abv3-text sr-l${rv ? ' in' : ''}`}>
            <p className="abv-eyeline"><Eye size={13} /> Where We Are Headed</p>
            <p className="abv-body">
              Our vision is to refine how schools and institutions operate by creating a future-ready
              smartschool management system that promotes academic excellence, operational transparency,
              and better parent-school collaboration.
            </p>
            <p className="abv-body">
              At ARA Discoveries, we believe SchoolMate will become a trusted student school management
              system worldwide, enabling educational institutions to confidently embark on digital
              transformation.
            </p>
            <div className="abv-callout">
              SchoolMate is not just software — a complete digital ecosystem for modern education.
            </div>
            <NavLink to="/#contact" className="btn btn-red abv-cta">
              Get Started <ArrowRight size={14} />
            </NavLink>
          </div>

          <div ref={l} className={`abv3-visual sr-r${lv ? ' in' : ''}`}>
            <div className="abv3-img-wrap">
              <img
                src={visionImg}
                alt="student attendance management system – education management erp"
                className="abv3-img"
              />
              <div className="abv-img-overlay" />
              <div className="abv-img-pill">
                <div className="abv-pill-dot" />
                Future-Ready Schools
              </div>
            </div>
          </div>

        </div>

        {/* ── QUALITY CARDS ── */}
        <div ref={q} className={`abv3-qualities sr${qv ? ' in' : ''}`}>
          {qualities.map(({ icon: Icon, num, title, desc }) => (
            <div key={title} className="abv3-q-card">
              <span className="abv3-q-num">{num}</span>
              <div className="abv3-q-icon"><Icon size={18} /></div>
              <span className="abv-q-title">{title}</span>
              <span className="abv-q-desc">{desc}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
