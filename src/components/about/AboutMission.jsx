import { Target, GraduationCap, Building2, Wifi, Shield, Users, CheckCircle2 } from 'lucide-react'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'
import missionImg from '../../assets/A3.png'

const missionPoints = [
  { icon: GraduationCap, num: '01', label: 'Better Academic Management',   desc: 'Streamlined academic tools for every institution — exams, homework, timetables, and grading in one place.' },
  { icon: Building2,     num: '02', label: 'Efficient Administration',      desc: 'Automate daily admin tasks effortlessly so staff can focus on what matters most: students.' },
  { icon: Wifi,          num: '03', label: 'Real-Time Communication',       desc: 'Instant updates for parents, teachers, and staff. No delays, no missed messages.' },
  { icon: Shield,        num: '04', label: 'Secure Cloud-Based Access',     desc: 'Enterprise-grade security with 24/7 cloud availability — accessible from anywhere.' },
  { icon: Users,         num: '05', label: 'Smarter Student Engagement',    desc: 'Connect every student with their learning journey through digital tools built for growth.' },
]

export default function AboutMission() {
  const [q, qv] = useScrollAnimation(0.06)
  const [h, hv] = useScrollAnimation(0.06)
  const [s, sv] = useScrollAnimation(0.05)

  return (
    <section className="ab-mission" id="mission">
      <div className="ab-section-num ab-section-num-right">02</div>

      <div className="wrap">

        {/* pull-quote */}
        <div ref={q} className={`ab-pull-quote sr${qv ? ' in' : ''}`}>
          <div className="ab-pq-mark">"</div>
          <p className="ab-pq-text">
            We believe schools should focus less on paperwork and more on building student success.
          </p>
          <span className="ab-pq-source">— ARA Discoveries</span>
        </div>

        {/* Mission header: text + image */}
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
                src={missionImg}
                alt="education management system software – school management system"
                className="ab-mission-img"
              />
              <div className="ab-mission-img-tag">Our Mission</div>
            </div>
          </div>
        </div>

        {/* Feature bento cards */}
        <div ref={s} className={`ab-mf-bento sr${sv ? ' in' : ''}`}>
          {missionPoints.map(({ icon: Icon, num, label, desc }, i) => (
            <div key={label} className="ab-mf-card" style={{ transitionDelay: `${i * 0.07}s` }}>
              <span className="ab-mf-card-num">{num}</span>
              <div className="ab-mf-card-icon"><Icon size={24} /></div>
              <h4 className="ab-mf-card-title">{label}</h4>
              <p className="ab-mf-card-desc">{desc}</p>
              <div className="ab-mf-card-bar" />
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
