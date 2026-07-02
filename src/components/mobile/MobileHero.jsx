import { ArrowRight, Play, Smartphone, Shield, Zap, Globe, CheckCircle2, Building2, Star, Users, TrendingUp, Bell, Lock } from 'lucide-react'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'
import m3Img from '../../assets/M3.png'

export default function MobileHero() {
  const [ref, vis] = useScrollAnimation(0.03)

  return (
    <section className="mph-section" id="hero">

      {/* breadcrumb bar */}
      <div className="mh2-bar">
        <div className="wrap mh2-bar-inner">
          <nav className="mob-bc">
            <a href="/">Home</a>
            <span className="mob-bc-sep">/</span>
            <span>Mobile App</span>
          </nav>
          <span className="mob-bc-meta">iOS &amp; Android · Free Download</span>
        </div>
      </div>

      {/* bento grid */}
      <div className="wrap mph-bento-wrap">
        <div ref={ref} className={`mph-bento sr${vis ? ' in' : ''}`}>

          {/* A — headline card (left red strip + right content) */}
          <div className="mph-cell mph-cell-headline">
            <div className="mph-head-strip">
              <span className="mph-strip-dot" />
              <span className="mph-strip-label">School Management App</span>
            </div>
            <div className="mph-head-content">
              <div className="mph-head-top">
                <h1 className="mph-h1">
                  <span className="mph-h1-outline">One App.</span>
                  <span className="mph-h1-red">  Every School</span><br /> <span className="mph-h1-outline">Operation.</span>
                </h1>
                <p className="mph-seo-h1">Smart School Management at Your Fingertips</p>
                <img src={m3Img} alt="SchoolMate mobile app preview" className="mph-head-img" />
              </div>
              <div className="mph-actions">
                <a href="#features" className="mph-btn-primary">
                  Explore Features <ArrowRight size={14} />
                </a>
                <a href="#why" className="mph-btn-ghost"><Play size={11} />Why Schools Love It</a>
              </div>
            </div>
          </div>

          {/* B — schools stat */}
          <div className="mph-cell mph-cell-stat mph-cell-red">
            <Building2 size={28} />
            <span className="mph-bstat-num">100+</span>
            <span className="mph-bstat-lbl">Schools Trust Us</span>
          </div>

          {/* C — satisfaction stat */}
          <div className="mph-cell mph-cell-stat mph-cell-dark">
            <Users size={28} />
            <span className="mph-bstat-num">99%</span>
            <span className="mph-bstat-lbl">Satisfaction Rate</span>
          </div>

          {/* D — lead text card */}
          <div className="mph-cell mph-cell-lead">
            <p>SchoolMate Mobile App – a powerful, easy-to-use solution for administrators, teachers, students, and parents. Stay connected with your institution anytime, anywhere.</p>
            <p>SchoolMate helps schools streamline administration, improve communication, and deliver smarter educational experiences on one secure platform.</p>
            <p>SchoolMate is a modern schooling software and smartschool management system that assists schools in managing daily operations and keeping parents informed in real time.</p>
            <div className="mph-checks">
              <div className="mph-check"><CheckCircle2 size={13} /><span>Free onboarding & setup</span></div>
              <div className="mph-check"><CheckCircle2 size={13} /><span>No technical expertise needed</span></div>
              <div className="mph-check"><CheckCircle2 size={13} /><span>Works on all devices</span></div>
              <div className="mph-check"><CheckCircle2 size={13} /><span>Dedicated support team</span></div>
            </div>
          </div>

          {/* H — feature ticker */}
          <div className="mph-cell mph-cell-features">
            <div className="mph-ticker">
              <div className="mph-ticker-track">
                <div className="mph-feat"><Bell size={15} /><span>Real-time Notifications</span></div>
                <div className="mph-feat"><Lock size={15} /><span>Role-based Access</span></div>
                <div className="mph-feat"><Globe size={15} /><span>Cloud-Based Platform</span></div>
                <div className="mph-feat"><Zap size={15} /><span>Fast Communication</span></div>
                <div className="mph-feat"><Shield size={15} /><span>Secure &amp; Private</span></div>
                <div className="mph-feat"><Smartphone size={15} /><span>iOS &amp; Android App</span></div>
                <div className="mph-feat"><Star size={15} /><span>10+ Years Experience</span></div>
                <div className="mph-feat"><Users size={15} /><span>100+ Schools Trust Us</span></div>
                {/* duplicate for seamless loop */}
                <div className="mph-feat"><Bell size={15} /><span>Real-time Notifications</span></div>
                <div className="mph-feat"><Lock size={15} /><span>Role-based Access</span></div>
                <div className="mph-feat"><Globe size={15} /><span>Cloud-Based Platform</span></div>
                <div className="mph-feat"><Zap size={15} /><span>Fast Communication</span></div>
                <div className="mph-feat"><Shield size={15} /><span>Secure &amp; Private</span></div>
                <div className="mph-feat"><Smartphone size={15} /><span>iOS &amp; Android App</span></div>
                <div className="mph-feat"><Star size={15} /><span>10+ Years Experience</span></div>
                <div className="mph-feat"><Users size={15} /><span>100+ Schools Trust Us</span></div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* bottom stripe */}
      <div className="mh2-stripe">
        <div className="wrap mh2-stripe-inner">
          <span className="mh2-stripe-label">Trusted by schools across India</span>
          <div className="mh2-stripe-divider" />
          <span className="mh2-stripe-label">Available on iOS &amp; Android</span>
          <div className="mh2-stripe-divider" />
          <span className="mh2-stripe-label">Free setup · No long-term contracts</span>
          <div className="mh2-stripe-divider" />
          <span className="mh2-stripe-label">24/7 dedicated support</span>
        </div>
      </div>

    </section>
  )
}
