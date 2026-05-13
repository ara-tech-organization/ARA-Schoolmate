import { ArrowRight, PhoneCall } from 'lucide-react'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'
import { NavLink } from 'react-router-dom'

export default function MobileTransform() {
  const [ref, vis] = useScrollAnimation(0.1)

  return (
    <section className="mob-transform">
      <div ref={ref} className={`wrap mob-transform-inner sr${vis ? ' in' : ''}`}>
        <div className="mob-transform-chip">Get Started</div>
        <h2 className="mob-transform-h2">
          Transform Your School Digitally
        </h2>
        <p className="mob-transform-body">
          SchoolMate Mobile App helps schools to streamline administration, improve
          communication, and deliver smarter educational experiences. SchoolMate is
          the one powerful mobile platform containing all the tools your institution
          needs, from attendance tracking and communications tools to fee management
          and academic monitoring.
        </p>
        <div className="mob-transform-actions">
          <NavLink to="/#contact" className="mob-transform-btn-white">
            Get Free Demo <ArrowRight size={14} />
          </NavLink>
          <a href="#features" className="mob-transform-btn-ghost">
            <PhoneCall size={14} /> Explore Features
          </a>
        </div>
      </div>
    </section>
  )
}
