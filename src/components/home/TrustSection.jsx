import {
  TrendingUp, ArrowRight,
} from 'lucide-react'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'
import { useCountUp } from '../../hooks/useCountUp'
import imgCommunication from '../../assets/School Communication.png'
import imgWorkload      from '../../assets/Manual Workload.png'
import imgAttendance    from '../../assets/Smart Attendance.png'
import imgDashboard     from '../../assets/Real-Time Dashboard.png'
import imgParent        from '../../assets/Parent Engagement.png'
import imgPaperless     from '../../assets/Paperless Administration.png'
import imgSecureCloud   from '../../assets/Secure Cloud Infrastructure.png'
import imgEasyDashboard from '../../assets/Easy-to-Use Dashboard.png'
import imgFastImpl      from '../../assets/Fast implementation.png'
import imgMobileFirst   from '../../assets/Mobile-First Accessibility.png'

const stats = [
  { raw: 3,   suffix: '+',  label: 'Years of Industry Experience' },
  { raw: 25,  suffix: '+',  label: 'Smart Modules Integrated'     },
  { raw: 99,  suffix: '%',  label: 'Client Satisfaction Rate'     },
  { raw: 24,  suffix: '/7', label: 'Cloud-Based Accessibility'    },
  { raw: 90,  suffix: '%',  label: 'Reduction in Manual Work'     },
  { raw: 100, suffix: '+',  label: 'Schools Served'               },
]

/* ── Content-relevant illustrations, red-themed ── */
const featureGrid = [
  {
    title: 'Faster School Communication',
    desc: 'Instant messaging between schools and parents through smart notifications and real-time alerts.',
    img: imgCommunication,
  },
  {
    title: 'Reduced Manual Workload',
    desc: 'Automate repetitive tasks and paperwork so teachers and staff can focus on what matters.',
    img: imgWorkload,
  },
  {
    title: 'Smart Attendance Visibility',
    desc: 'Improved attendance tracking and reporting with digital records accessible anytime.',
    img: imgAttendance,
  },
  {
    title: 'Real-Time Dashboard Updates',
    desc: 'Centralized school management with live updates across all departments and roles.',
    img: imgDashboard,
  },
  {
    title: 'Parent Engagement via Mobile',
    desc: 'Increase parent involvement through mobile push notifications and activity feeds.',
    img: imgParent,
  },
  {
    title: 'Paperless Administration',
    desc: 'Replace manual filing with cloud-based workflows for smarter, greener school operations.',
    img: imgPaperless,
  },
]

const bottomCards = [
  {
    title: 'Secure Cloud Infrastructure',
    desc: 'Enterprise-grade security with 99.9% uptime and end-to-end encrypted data storage.',
    img: imgSecureCloud,
    href: '#features',
  },
  {
    title: 'Easy-to-Use Dashboard',
    desc: 'A clean, intuitive interface that anyone on your team can navigate from day one.',
    img: imgEasyDashboard,
    href: '#features',
  },
  {
    title: 'Fast Implementation',
    desc: 'Get your school up and running in days with our guided onboarding and support team.',
    img: imgFastImpl,
    href: '#get-started',
  },
  {
    title: 'Mobile-First Accessibility',
    desc: 'Full-featured mobile apps for parents, students, and staff on iOS and Android.',
    img: imgMobileFirst,
    href: '#features',
  },
]

function CountStat({ raw, suffix, label, start }) {
  const counted = useCountUp(raw, 1800, start)
  return (
    <div className="tv2-stat">
      <span className="tv2-stat-num">{counted}{suffix}</span>
      <span className="tv2-stat-lbl">{label}</span>
    </div>
  )
}

export default function TrustSection() {
  const [hRef, hVis] = useScrollAnimation()
  const [sRef, sVis] = useScrollAnimation()
  const [gRef, gVis] = useScrollAnimation(0.05)
  const [bRef, bVis] = useScrollAnimation(0.05)

  return (
    <section className="trust-v2" id="about">
      <div className="tv2-inner">

        {/* ── HEADER ── */}
        <div ref={hRef} className={`tv2-header sr${hVis ? ' in' : ''}`}>
          <div className="chip chip-red"><TrendingUp size={12} /> Trusted by Growing Educational Institutions</div>
          <h2 className="htitle">Trusted by Growing <em>Educational Institutions</em></h2>
          <p className="hsub">
            Schools and institutions choose SchoolMate for its measurable improvements in efficiency, engagement, and communication.
          </p>
        </div>

        {/* ── STATS STRIP ── */}
        <div ref={sRef} className={`tv2-stats-bar sr${sVis ? ' in' : ''}`}>
          {stats.map(({ raw, suffix, label }) => (
            <CountStat key={label} raw={raw} suffix={suffix} label={label} start={sVis} />
          ))}
        </div>

        {/* ── FEATURE GRID (2-col illustrated) ── */}
        <div ref={gRef} className={`tv2-feat-grid sr${gVis ? ' in' : ''}`}>
          {featureGrid.map(({ title, desc, img }, i) => (
            <div className="tv2-feat-item" key={title} style={{ animationDelay: `${i * 0.08}s` }}>
              <div className="tv2-feat-illo">
                <img src={img} alt={title} loading="lazy" />
              </div>
              <div className="tv2-feat-text">
                <h3 className="tv2-feat-title">{title}</h3>
                <p  className="tv2-feat-desc">{desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* ── BOTTOM CARDS ── */}
        <div ref={bRef} className={`tv2-bottom-cards sr${bVis ? ' in' : ''}`}>
          {bottomCards.map(({ title, desc, img, href }, i) => (
            <div className="tv2-bcard" key={title} style={{ animationDelay: `${i * 0.1}s` }}>
              <div className="tv2-bcard-illo">
                <img src={img} alt={title} loading="lazy" />
              </div>
              <h3 className="tv2-bcard-title">{title}</h3>
              <p  className="tv2-bcard-desc">{desc}</p>
              <a href={href} className="tv2-bcard-btn" aria-label={title}>
                <ArrowRight size={18} />
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
