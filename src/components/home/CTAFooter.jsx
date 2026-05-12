import { ArrowRight, CheckCircle2, Users, Star, Zap } from 'lucide-react'
import { useState } from 'react'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'
import logo from '../../assets/Logo.png'

const footerLinks = {
  Product:  ['SchoolMate Lite', 'SchoolMate PRO', 'SchoolMate PLUS', 'SchoolMate 360', 'Pricing'],
  Features: ['Attendance System', 'Fee Management', 'Transport Tracking', 'Academic Management', 'Parent Portal'],
  Company:  ['About Us', 'Blog', 'Careers', 'Press Kit', 'Contact'],
  Support:  ['Help Center', 'Documentation', 'API Reference', 'System Status', 'Privacy Policy'],
}

const trust = [
  { icon: Users, num: '500+',  label: 'Schools' },
  { icon: Star,  num: '99%',   label: 'Satisfaction' },
  { icon: Zap,   num: '24/7',  label: 'Support' },
]

const perks = [
  'Free setup & onboarding assistance',
  'No long-term contracts required',
  'Live demo within 24 hours',
  'Dedicated account manager',
]

export default function CTAFooter() {
  const [left, lv]  = useScrollAnimation()
  const [right, rv] = useScrollAnimation()
  const [sent, setSent] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    setSent(true)
  }

  return (
    <>
      <section className="cta2-section" id="contact">
        {/* decorative rings */}
        <div className="cta2-ring cta2-ring-1" />
        <div className="cta2-ring cta2-ring-2" />

        <div className="cta2-inner">

          {/* left — text */}
          <div ref={left} className={`cta2-left sr-l${lv ? ' in' : ''}`}>
            <div className="chip chip-red" style={{ marginBottom: 24 }}>
              <span className="chip-dot chip-dot-red" /> Get Started Today
            </div>

            <h2 className="cta2-heading">
              Let's Build a <span className="cta2-heading-em">Smarter</span><br />
              <span className="cta2-heading-em">School</span> Together
            </h2>


            <p className="cta2-sub">
              Join 500+ institutions already transforming their school operations
              with SchoolMate — the all-in-one school management platform.
            </p>

            <div className="cta2-perks">
              {perks.map(p => (
                <div className="cta2-perk" key={p}>
                  <CheckCircle2 size={16} style={{ flexShrink: 0 }} />
                  <span>{p}</span>
                </div>
              ))}
            </div>

            <div className="cta2-trust">
              {trust.map(({ icon: Icon, num, label }) => (
                <div className="cta2-trust-item" key={label}>
                  <Icon size={18} className="cta2-trust-icon" />
                  <span className="cta2-trust-num">{num}</span>
                  <span className="cta2-trust-lbl">{label}</span>
                </div>
              ))}
            </div>

          </div>

          {/* right — form card */}
          <div ref={right} className={`cta2-right sr-r${rv ? ' in' : ''}`}>
            <div className="cta2-card">
              <div className="cta2-card-top">
                <h3 className="cta2-card-title">Book Your Free Demo</h3>
                <p className="cta2-card-sub">Fill in your details — we'll reach out within 24 hours.</p>
              </div>

              {sent ? (
                <div className="cta2-success">
                  <div className="cta2-success-icon"><CheckCircle2 size={32} /></div>
                  <p className="cta2-success-title">Request Received!</p>
                  <p className="cta2-success-sub">Our team will contact you within 24 hours.</p>
                </div>
              ) : (
                <form className="cta2-form" onSubmit={handleSubmit}>
                  <div className="cta2-fg">
                    <label>Your Name</label>
                    <input type="text" placeholder="e.g. Rajesh Kumar" required />
                  </div>
                  <div className="cta2-fg">
                    <label>Phone Number</label>
                    <input type="tel" placeholder="+91 98765 43210" required />
                  </div>
                  <div className="cta2-fg">
                    <label>School Name</label>
                    <input type="text" placeholder="e.g. Delhi Public School" required />
                  </div>
                  <div className="cta2-fg">
                    <label>City</label>
                    <input type="text" placeholder="e.g. Mumbai" required />
                  </div>
                  <button type="submit" className="cta2-submit">
                    Get Free Demo <ArrowRight size={16} />
                  </button>
                  <p className="cta2-note">No credit card required · Setup in minutes</p>
                </form>
              )}
            </div>
          </div>

        </div>
      </section>

      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-top">
            <div>
              <div className="f-brand-logo">
                <img src={logo} alt="SchoolMate" className="footer-logo-img" />
              </div>
              <p className="f-brand-desc">
                SchoolMate helps institutions modernize with scalable student database management,
                education administration software, and student monitoring solutions.
              </p>
              <div className="f-socials">
                {['F', 'T', 'L', 'I'].map(s => (
                  <a key={s} href="#" className="f-soc">{s}</a>
                ))}
              </div>
            </div>

            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <h4 className="f-col-title">{title}</h4>
                <div className="f-links">
                  {links.map(l => <a key={l} href="#">{l}</a>)}
                </div>
              </div>
            ))}
          </div>

          <div className="footer-bottom">
            <p className="f-copy">© {new Date().getFullYear()} SchoolMate. All rights reserved.</p>
            <div className="f-bot-links">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
              <a href="#">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
