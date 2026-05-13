import { Monitor, MessageSquare, CreditCard, Calendar, BookOpen, Bus, BarChart3, CheckCircle2, ArrowRight } from 'lucide-react'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'

const modules = [
  { icon: Monitor,       label: 'Attendance',     desc: 'Digital tracking with instant alerts'  },
  { icon: MessageSquare, label: 'Communication',  desc: 'Real-time circulars & notifications'   },
  { icon: CreditCard,    label: 'Fee Management', desc: 'Online payments & smart reminders'     },
  { icon: Calendar,      label: 'Timetable',      desc: 'Smart scheduling & class planning'     },
  { icon: BookOpen,      label: 'Academics',      desc: 'Progress monitoring & report cards'    },
  { icon: Bus,           label: 'Transport',      desc: 'Live GPS tracking for school buses'    },
  { icon: BarChart3,     label: 'ERP & Reports',  desc: 'Unified data across your institution'  },
]

const benefits = [
  'Reduce manual work by up to 80%',
  'Improve parent engagement instantly',
  'Automate routine administration',
  'Deliver real-time updates to all stakeholders',
  'Access everything from one cloud dashboard',
]

export default function AboutStory() {
  const [h, hv] = useScrollAnimation(0.05)
  const [l, lv] = useScrollAnimation(0.05)
  const [r, rv] = useScrollAnimation(0.05)

  return (
    <section className="abst-section" id="platform">
      <div className="ab-section-num">01</div>

      <div className="wrap">

        {/* header */}
        <div ref={h} className={`abst-header sr${hv ? ' in' : ''}`}>
          <div className="chip chip-red"><span className="chip-dot chip-dot-red" /> All-In-One Platform</div>
          <h2 className="htitle abst-title">A Complete Digital Ecosystem<br />for <em>Modern Education</em></h2>
          <p className="hsub abst-sub">
            SchoolMate combines every tool a school needs into one seamless,
            cloud-based platform — from attendance to analytics, all in one place.
          </p>
        </div>

        {/* two-col layout */}
        <div className="abst-layout">

          {/* LEFT — image with floating module tags */}
          <div ref={l} className={`abst-left sr-l${lv ? ' in' : ''}`}>
            <div className="abst-img-wrap">
              <img
                src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80"
                alt="Students with technology"
                className="abst-img"
              />
              <div className="abst-img-overlay" />

              {/* floating stat */}
              <div className="abst-float abst-float-tl">
                <div className="abst-float-num">500+</div>
                <div className="abst-float-lbl">Schools Trust Us</div>
              </div>
              <div className="abst-float abst-float-br abst-float-red">
                <CheckCircle2 size={14} />
                <span>All-in-One Platform</span>
              </div>
            </div>

            {/* module pill grid */}
            <div className="abst-pills">
              {modules.map(({ icon: Icon, label }) => (
                <div key={label} className="abst-pill">
                  <Icon size={13} /> {label}
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — text + benefit list */}
          <div ref={r} className={`abst-right sr-r${rv ? ' in' : ''}`}>
            <p className="abst-eyebrow">Why Schools Choose SchoolMate</p>
            <p className="abst-body">
              Our platform is an all-in-one solution that combines attendance tracking,
              communication tools, fee management, timetable scheduling, academic monitoring,
              transport management, and ERP features into one seamless dashboard.
            </p>
            <p className="abst-body">
              SchoolMate has everything modern schools need to grow digitally — from attendance
              alerts and homework notifications to online fee management and academic analytics.
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
