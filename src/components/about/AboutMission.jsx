import { Target, GraduationCap, Building2, Wifi, Shield, Users, CheckCircle2 } from 'lucide-react'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'

const missionPoints = [
  { icon: GraduationCap, label: 'Better academic management',   desc: 'Streamlined academic tools for every institution' },
  { icon: Building2,     label: 'Efficient administration',     desc: 'Automate daily admin tasks effortlessly' },
  { icon: Wifi,          label: 'Real-time communication',      desc: 'Instant updates for parents, teachers, and staff' },
  { icon: Shield,        label: 'Secure cloud-based access',    desc: 'Enterprise-grade security, available 24/7' },
  { icon: Users,         label: 'Smarter student engagement',   desc: 'Connect every student with their learning journey' },
]

export default function AboutMission() {
  const [q, qv] = useScrollAnimation(0.06)
  const [h, hv] = useScrollAnimation(0.06)
  const [s, sv] = useScrollAnimation(0.05)

  return (
    <section className="ab-mission" id="mission">
      <div className="ab-section-num ab-section-num-right">02</div>

      <div className="wrap">

        {/* Pull-quote block */}
        <div ref={q} className={`ab-pull-quote sr${qv ? ' in' : ''}`}>
          <div className="ab-pq-mark">"</div>
          <p className="ab-pq-text">
            We believe schools should focus less on paperwork and more on building student success.
          </p>
          <span className="ab-pq-source">— Ara Discoveries</span>
        </div>

        {/* Mission header */}
        <div ref={h} className={`ab-mission-intro sr${hv ? ' in' : ''}`}>
          <div className="ab-mission-intro-inner">
            <div>
              <div className="chip chip-red"><Target size={12} /> Our Mission</div>
              <h2 className="htitle">
                Building Smarter Schools with <em>Simpler Technology</em>
              </h2>
              <p className="ab-mission-intro-text">
                Our mission is to deliver innovative, affordable digital tools to school districts
                that make running schools easier and improve communication between schools and families.
                SchoolMate is the schooling software of choice for institutions looking for excellence.
              </p>
              <div className="ab-seo-block ab-seo-block-left">
                <p className="ab-seo-para">SchoolMate is the schooling software of choice for institutions looking for:</p>
                <ul className="ab-seo-list">
                  <li><CheckCircle2 size={13} /><span>Better academic management</span></li>
                  <li><CheckCircle2 size={13} /><span>Efficient administration</span></li>
                  <li><CheckCircle2 size={13} /><span>Real-time communication</span></li>
                  <li><CheckCircle2 size={13} /><span>Secure cloud-based access</span></li>
                  <li><CheckCircle2 size={13} /><span>Smarter student engagement</span></li>
                </ul>
              </div>
            </div>
            <div className="ab-mission-img-wrap">
              <img
                src="https://images.unsplash.com/photo-1684914669059-6c9a35e15cda?auto=format&fit=crop&w=700&q=80"
                alt="education management system software – school management system"
                className="ab-mission-img"
              />
              <div className="ab-mission-img-tag">Our Mission</div>
            </div>
          </div>
        </div>

        {/* Feature strip — horizontal, no boxes */}
        <div ref={s} className={`ab-mission-strip sr${sv ? ' in' : ''}`}>
          {missionPoints.map(({ icon: Icon, label, desc }, i) => (
            <div key={label} className="ab-mission-feature" style={{ transitionDelay: `${i * 0.07}s` }}>
              <div className="ab-mf-icon"><Icon size={22} /></div>
              <span className="ab-mf-label">{label}</span>
              <span className="ab-mf-desc">{desc}</span>
              <div className="ab-mf-underline" />
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
