import { CheckCircle2, ArrowRight, Sparkles, Layers, MessageSquare, Settings, MapPin, GraduationCap } from 'lucide-react'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'

const modules = [
  {
    name: 'Lite', badge: 'Starter', featured: false,
    icon: MessageSquare, tag: 'Communication First',
    desc: 'Smart Communication for Schools Beginning Their Digital Journey',
    features: ['Real-time parent communication', 'Circulars and announcements', 'Attendance notifications', 'Homework alerts', 'Academic calendar setup', 'Limited role-based permissions'],
  },
  {
    name: 'PRO', badge: 'Popular', featured: false,
    icon: Settings, tag: 'Administration Ready',
    desc: 'Advanced Education Management ERP',
    features: ['Everything in Lite, plus:', 'Student & staff profile management', 'Online fee collection', 'Payroll and leave tracking', 'Inventory management', 'Approval workflows'],
  },
  {
    name: 'PLUS', badge: 'Recommended', featured: true,
    icon: MapPin, tag: 'Transport Included',
    desc: 'Smart Transport & Student Safety Management',
    features: ['Everything in PRO, plus:', 'GPS live bus tracking', 'Pickup and drop alerts', 'Route management', 'Emergency notifications', 'Transport-linked attendance'],
  },
  {
    name: '360', badge: 'Ultimate', featured: false,
    icon: GraduationCap, tag: 'Full Academic Suite',
    desc: 'Complete Academic & Operational Excellence',
    features: ['All Lite, PRO & PLUS, plus:', 'Auto-generated report cards', 'Syllabus tracking', 'Lesson progress monitoring', 'Performance dashboards', 'Academic analytics'],
  },
]

export default function ModulesSection() {
  const [h, hv] = useScrollAnimation()
  const [g, gv] = useScrollAnimation(0.06)

  return (
    <section className="modules2-section" id="modules">
      <div className="modules2-inner">

        <div ref={h} className={`modules2-header sr${hv ? ' in' : ''}`}>
          <div className="chip chip-red"><Layers size={12} /> Choose Your Plan</div>
          <h2 className="htitle">SchoolMate <em>Modules</em></h2>
          <p className="hsub">
            From basic communication to complete education administration software — choose the module
            that fits your institution and scale up as you grow.
          </p>
        </div>

        <div ref={g} className={`modules2-grid sr${gv ? ' in' : ''}`}>
          {modules.map((m, i) => (
            <div
              key={m.name}
              className={`m2c${m.featured ? ' m2c-featured' : ''}`}
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div className="m2c-accent" />

              <div className="m2c-head">
                <div className="m2c-icon">
                  <m.icon size={26} />
                </div>
                <div className="m2c-tag">
                  <Sparkles size={10} /> {m.tag}
                </div>
              </div>

              <div className="m2c-body">
                <div className="m2c-badge">SchoolMate · {m.badge}</div>
                <h3 className="m2c-name">{m.name}</h3>
                <p className="m2c-desc">{m.desc}</p>
                <ul className="m2c-feats">
                  {m.features.map(f => (
                    <li key={f}>
                      <CheckCircle2 size={13} style={{ flexShrink: 0 }} />
                      {f}
                    </li>
                  ))}
                </ul>
                <a href="#get-started" className={`m2c-btn${m.featured ? ' m2c-btn-featured' : ''}`}>
                  Get Started <ArrowRight size={14} />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="modules2-cta">
          <a href="#demo" className="btn btn-red btn-lg">
            Get a Free Demo <ArrowRight size={18} />
          </a>
          <p className="modules2-note">No credit card required. Setup in minutes.</p>
        </div>

      </div>
    </section>
  )
}
