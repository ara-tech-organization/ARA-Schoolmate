import { CheckCircle2, TrendingUp, Award, LayoutDashboard, Star } from 'lucide-react'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'
import { useCountUp } from '../../hooks/useCountUp'
import titleImg from '../../assets/Title.png'

const impactItems = [
  'Faster communication between schools and parents',
  'Reduced manual workload for teachers and staff',
  'Improved attendance visibility and reporting',
  'Real-time updates and centralized school management',
  'Increased parent engagement through mobile notifications',
  'Paperless workflows for smarter administration',
]

const preferItems = [
  'Secure cloud infrastructure',
  'Easy-to-use dashboard',
  'Fast implementation process',
  'Mobile-first accessibility',
  'Reliable support and onboarding',
]

const stats = [
  { raw: 3,   suffix: '+',  label: 'Years of Industry Experience' },
  { raw: 25,  suffix: '+',  label: 'Smart Modules Integrated'     },
  { raw: 99,  suffix: '%',  label: 'Client Satisfaction Rate'     },
  { raw: 24,  suffix: '/7', label: 'Cloud-Based Accessibility'    },
  { raw: 90,  suffix: '%',  label: 'Reduction in Manual Work'     },
  { raw: 100, suffix: '+',  label: 'Schools Served'               },
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
  const [hRef, hVis]   = useScrollAnimation()
  const [sRef, sVis]   = useScrollAnimation()
  const [leftRef, leftVis] = useScrollAnimation()
  const [c1Ref, c1Vis] = useScrollAnimation(0.05)
  const [c2Ref, c2Vis] = useScrollAnimation(0.08)

  return (
    <section className="trust-v2" id="about">
      <div className="tv2-inner">

        {/* ── CENTERED HEADER ── */}
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

        {/* ── TWO COLUMN AREA ── */}
        <div className="tv2-cols">

          {/* Left box: image + SEO text + dashboard note */}
          <div ref={leftRef} className={`tv2-left-box sr-l${leftVis ? ' in' : ''}`}>
            <div className="tv2-img-frame">
              <img
                src={titleImg}
                alt="School classroom"
                className="tv2-img"
              />
              <div className="tv2-overlay" />
            </div>

            <div className="tv2-float tv2-float-tl">
              <div className="tv2-fi"><Award size={16} /></div>
              <div>
                <div className="tv2-fn">100+</div>
                <div className="tv2-fl">Schools Trust Us</div>
              </div>
            </div>

            <div className="tv2-float tv2-float-br">
              <div className="tv2-fi"><Star size={16} /></div>
              <div>
                <div className="tv2-fn">99%</div>
                <div className="tv2-fl">Satisfaction Rate</div>
              </div>
            </div>

            <div className="tv2-experience-badge">
              <span className="tv2-exp-num">10+</span>
              <span className="tv2-exp-lbl">Years of<br />Excellence</span>
            </div>

            <div className="tv2-deco-ring" />
            <div className="tv2-deco-ring tv2-deco-ring-2" />

            <div className="tv2-left-seo">
              <h3 className="tv2-sub-h3">The Future of Digital School Administration Starts Here</h3>
              <p className="tv2-seo-para">
                SchoolMate is modern student management software designed to help educational institutions streamline academic and administrative workflows.
                Our software removes paperwork, reduces manual work, and allows schools to run their day-to-day activities through a single smart dashboard.
                Schools prefer SchoolMate as the right choice when they are looking for a reliable education management system software, as it brings together simplicity, automation, and scalability into one seamless solution.
              </p>
              <p className="tv2-dash-inline">
                <LayoutDashboard size={13} style={{ display:'inline', marginRight:5, verticalAlign:'middle', color:'var(--red)' }} />
                Complete All-in-One Dashboard — Manage everything from one screen.
              </p>
            </div>
          </div>

          {/* Col 2: Our Impact card */}
          <div ref={c1Ref} className={`tv2-list-card sr${c1Vis ? ' in' : ''}`}>
              <div className="tv2-lcard-head">
                <div className="tv2-lcard-icon"><CheckCircle2 size={15} /></div>
                <h3 className="tv2-lcard-title">Our Impact</h3>
              </div>
              <div className="tv2-lcard-items">
                {impactItems.map((item, i) => (
                  <div className="tv2-lcard-item" key={item} style={{ transitionDelay: `${i * 0.06}s` }}>
                    <CheckCircle2 size={13} className="tv2-lcheck" style={{ flexShrink: 0 }} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

          {/* Col 3: Why Prefer card (dark) */}
          <div ref={c2Ref} className={`tv2-list-card tv2-list-card-dark sr${c2Vis ? ' in' : ''}`}>
            <div className="tv2-lcard-head tv2-lcard-head-dark">
              <div className="tv2-lcard-icon tv2-lcard-icon-dark"><TrendingUp size={15} /></div>
              <h3 className="tv2-lcard-title tv2-lcard-title-dark">Why Institutions Prefer SchoolMate?</h3>
            </div>
            <div className="tv2-lcard-items">
              {preferItems.map((item, i) => (
                <div className="tv2-lcard-item tv2-lcard-item-dark" key={item} style={{ transitionDelay: `${i * 0.06}s` }}>
                  <CheckCircle2 size={13} className="tv2-lcheck-dark" style={{ flexShrink: 0 }} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <p className="tv2-prefer-seo">SchoolMate is becoming the choice schooling software for schools looking for a modern digital transformation without the operational complexity.</p>
          </div>

        </div>

      </div>
    </section>
  )
}
