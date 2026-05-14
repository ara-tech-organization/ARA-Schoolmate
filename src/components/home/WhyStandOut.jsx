import { Award, CheckCircle2, TrendingUp, Zap, Shield, Users, Star, Globe } from 'lucide-react'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'

const metrics = [
  { icon: Users,      num: '500+',  label: 'Schools Trust Us'  },
  { icon: TrendingUp, num: '80%',   label: 'Less Manual Work'  },
  { icon: Star,       num: '99%',   label: 'Satisfaction Rate' },
  { icon: Globe,      num: '24/7',  label: 'Cloud Access'      },
  { icon: Shield,     num: '99.9%', label: 'Platform Uptime'   },
  { icon: Zap,        num: '<5s',   label: 'Alert Delivery'    },
]

const reasons = [
  'Faster communication between schools and parents',
  'Better attendance visibility and reporting',
  'Secure cloud-based access from anywhere',
  'Simplified fee management and tracking',
  'Real-time academic progress monitoring',
  'Improved parent engagement and transparency',
  'Scalable for schools of all sizes',
  'Complete student database management',
  'Education administration software built-in',
  'Advanced student monitoring capabilities',
  'Multi-branch institution support',
  'Class attendance management system',
]

export default function WhyStandOut() {
  const [h, hv] = useScrollAnimation()
  const [m, mv] = useScrollAnimation(0.07)
  const [r, rv] = useScrollAnimation(0.05)

  return (
    <section className="standout2-section" id="standout">
      <div className="standout2-inner">

        <div ref={h} className={`standout2-header sr${hv ? ' in' : ''}`}>
          <div className="chip chip-red"><Award size={12} /> Why We Stand Out</div>
          <h2 className="htitle">Why Does <em>SchoolMate</em> Stand Out?</h2>
          <h3 className="standout2-sub-h3">Designed for Modern Educational Institutions</h3>
          <p className="hsub">
            SchoolMate is not just a school management system, but a complete digital ecosystem for schools looking for operational excellence.
            For schools that want better academic visibility and more advanced student monitoring software, SchoolMate is the software of choice.
            Our platform is also a scalable education management system software for educational institutions of all sizes.
          </p>
        </div>

        <div ref={m} className={`standout2-metrics sr${mv ? ' in' : ''}`}>
          {metrics.map(({ icon: Icon, num, label }, i) => (
            <div className="s2m" key={label} style={{ transitionDelay: `${i * 0.07}s` }}>
              <div className="s2m-icon"><Icon size={22} /></div>
              <div className="s2m-num">{num}</div>
              <div className="s2m-label">{label}</div>
            </div>
          ))}
        </div>

        <div ref={r} className={`s2r-section sr${rv ? ' in' : ''}`}>
          <div className="s2r-head">
            <div className="s2r-head-icon"><TrendingUp size={18} /></div>
            <h3>Why Schools Prefer SchoolMate?</h3>
          </div>
          <div className="s2r-cards">
            {reasons.map((reason, i) => (
              <div className="s2r-card" key={reason} style={{ transitionDelay: `${i * 0.04}s` }}>
                <div className="s2r-card-icon"><CheckCircle2 size={18} /></div>
                <span>{reason}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
