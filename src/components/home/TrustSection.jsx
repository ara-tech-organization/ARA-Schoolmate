import { CheckCircle2, TrendingUp, Award } from 'lucide-react'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'
import { useCountUp } from '../../hooks/useCountUp'

const impactItems = [
  'Faster communication between schools and parents',
  'Reduced manual workload for teachers and staff',
  'Improved attendance visibility and reporting',
  'Real-time updates and centralized school management',
  'Increased parent engagement through mobile notifications',
  'Paperless workflows for smarter administration',
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
  const [imgRef, imgVis] = useScrollAnimation()
  const [cntRef, cntVis] = useScrollAnimation()

  return (
    <section className="trust-v2" id="about">
      <div className="tv2-inner">

        <div ref={imgRef} className={`tv2-photo sr-l${imgVis ? ' in' : ''}`}>
          <div className="tv2-img-frame">
            <img
              src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=800&q=80"
              alt="School classroom"
              className="tv2-img"
            />
            <div className="tv2-overlay" />
          </div>

          <div className="tv2-float tv2-float-tl">
            <div className="tv2-fi"><Award size={16} /></div>
            <div>
              <div className="tv2-fn">500+</div>
              <div className="tv2-fl">Schools Trust Us</div>
            </div>
          </div>

          <div className="tv2-float tv2-float-br">
            <div className="tv2-fi"><TrendingUp size={16} /></div>
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
        </div>

        <div ref={cntRef} className={`tv2-content sr-r${cntVis ? ' in' : ''}`}>
          <div className="chip chip-red"><TrendingUp size={12} /> Trusted by Institutions</div>
          <h2 className="htitle">
            The Future of Digital <em>Schooling Software</em> Starts Here
          </h2>
          <p className="hsub">
            SchoolMate is a modern student management system software and class attendance management system designed to help educational
            institutions streamline academic and administrative workflows — removing
            paperwork and manual tracking entirely.
          </p>

          <div className="tv2-list">
            {impactItems.map(item => (
              <div className="tv2-item" key={item}>
                <CheckCircle2 size={16} color="var(--red)" style={{ flexShrink: 0 }} />
                <span>{item}</span>
              </div>
            ))}
          </div>

          <div className="tv2-stats-bar">
            <CountStat raw={10}  suffix="+"  label="Years Experience" start={cntVis} />
            <CountStat raw={50}  suffix="+"  label="Smart Modules"    start={cntVis} />
            <CountStat raw={80}  suffix="%"  label="Less Manual Work" start={cntVis} />
            <CountStat raw={24}  suffix="/7" label="Cloud Access"     start={cntVis} />
          </div>
        </div>

      </div>
    </section>
  )
}
