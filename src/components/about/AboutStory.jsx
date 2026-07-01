import { Monitor, MessageSquare, CreditCard, Calendar, BookOpen, Bus, BarChart3, CheckCircle2, ArrowRight, Award, Zap } from 'lucide-react'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'

const storyImg = 'https://images.unsplash.com/photo-1588072432836-e10032774350?w=900&auto=format&fit=crop&q=80'

const modules = [
  { icon: Monitor,       label: 'Attendance'     },
  { icon: MessageSquare, label: 'Communication'  },
  { icon: CreditCard,    label: 'Fee Management' },
  { icon: Calendar,      label: 'Timetable'      },
  { icon: BookOpen,      label: 'Academics'      },
  { icon: Bus,           label: 'Transport'      },
  { icon: BarChart3,     label: 'ERP & Reports'  },
]

const benefits = [
  'Reduce manual work by up to 80%',
  'Improve parent engagement instantly',
  'Automate routine administration',
  'Increase operational efficiency',
  'Deliver real-time updates to all stakeholders',
]

const achievements = [
  { icon: Award, num: '500+', label: 'Schools' },
  { icon: Zap,   num: '80%',  label: 'Less Work' },
]

export default function AboutStory() {
  const [h, hv] = useScrollAnimation(0.05)
  const [l, lv] = useScrollAnimation(0.05)
  const [r, rv] = useScrollAnimation(0.05)

  return (
    <section className="abst-section" id="platform">

      <div className="wrap">

        {/* section header */}
        <div ref={h} className={`abst-header sr${hv ? ' in' : ''}`}>
          <div className="chip chip-red"><span className="chip-dot chip-dot-red" /> All-In-One Platform</div>
          <h2 className="htitle abst-title">
            A Complete Digital Ecosystem<br />for <em>Modern Education</em>
          </h2>
          <p className="hsub abst-sub">
            SchoolMate combines every tool a school needs into one seamless,
            cloud-based platform — from attendance to analytics, all in one place.
          </p>
        </div>

        {/* two-col layout */}
        <div className="abst-layout">

          {/* LEFT — image */}
          <div ref={l} className={`abst-left sr-l${lv ? ' in' : ''}`}>
            <div className="abst-img-wrap">
              <img
                src={storyImg}
                alt="student management system software – smartschool management system"
                className="abst-img"
                loading="lazy"
              />
              <div className="abst-img-overlay" />

              {/* floating stat cards */}
              <div className="abst-float abst-float-tl">
                <div className="abst-float-num">500+</div>
                <div className="abst-float-lbl">Schools Trust Us</div>
              </div>
              <div className="abst-float abst-float-br abst-float-red">
                <CheckCircle2 size={14} />
                <span>All-in-One Platform</span>
              </div>
            </div>

            {/* module pills */}
            <div className="abst-pills">
              {modules.map(({ icon: Icon, label }) => (
                <div key={label} className="abst-pill">
                  <Icon size={13} /> {label}
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — content */}
          <div ref={r} className={`abst-right sr-r${rv ? ' in' : ''}`}>
            <p className="abst-eyebrow">Why Schools Choose SchoolMate</p>

            <p className="abst-body">
              SchoolMate was developed by ARA Discoveries to solve the everyday operational challenges schools face — from manual attendance tracking and slow communication to disconnected administrative systems.
            </p>
            <p className="abst-body">
              Today, SchoolMate is a robust student school management system that connects administrators, teachers, students, and parents in a centralized cloud-based solution — giving every stakeholder the tools they need, when they need them.
            </p>

            <div className="abst-divider" />

            <ul className="abst-benefits">
              {benefits.map((b, i) => (
                <li key={b} className="abst-benefit" style={{ transitionDelay: `${i * 0.06}s` }}>
                  <div className="abst-b-icon"><CheckCircle2 size={15} /></div>
                  <span>{b}</span>
                </li>
              ))}
            </ul>

            <a href="#mission" className="btn btn-red abst-cta">
              Our Mission <ArrowRight size={14} />
            </a>
          </div>

        </div>
      </div>
    </section>
  )
}
