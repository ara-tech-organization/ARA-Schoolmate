import { Monitor, MessageSquare, CreditCard, Calendar, BookOpen, Bus, BarChart3, ArrowRight, Award, Zap, CheckCircle2 } from 'lucide-react'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'

import storyImg from '../../assets/A2.png'

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
  { num: '01', text: 'Reduce manual work by up to 80%'                 },
  { num: '02', text: 'Improve parent engagement instantly'             },
  { num: '03', text: 'Automate routine administration'                 },
  { num: '04', text: 'Increase operational efficiency'                 },
  { num: '05', text: 'Deliver real-time updates to all stakeholders'   },
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
              SchoolMate was developed by ARA Discoveries to solve the everyday operational
              challenges schools face — from manual attendance tracking and slow communication
              to disconnected administrative systems.
            </p>
            <p className="abst-body">
              Today, SchoolMate is a robust student school management system that connects
              administrators, teachers, students, and parents in a centralized cloud-based
              solution — giving every stakeholder the tools they need, when they need them.
            </p>

            <div className="abst-divider" />

            {/* numbered timeline benefits */}
            <ul className="abst-timeline">
              {benefits.map(({ num, text }, i) => (
                <li key={num} className="abst-tl-item" style={{ transitionDelay: `${i * 0.06}s` }}>
                  <span className="abst-tl-num">{num}</span>
                  <div className="abst-tl-body">
                    <span className="abst-tl-text">{text}</span>
                    <div className="abst-tl-bar" />
                  </div>
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
