import { useState, useEffect } from 'react'
import {
  Phone, Mail, MapPin, Clock,
  ArrowRight, CheckCircle2, MessageCircle,
} from 'lucide-react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import '../components/contact/contact.css'

const META = {
  title:       'Contact Us | SchoolMate',
  description: 'Get in touch with SchoolMate by ARA Discover Technologies. Call +91 81100 15152, email support@schoolmate.in, or visit us in Thanjavur, Tamil Nadu.',
  canonical:   'https://www.araschoolmate.com/contact.html',
}

const infoItems = [
  { num: '01', icon: Phone,  lbl: 'Call Us',       val: '+91 81100 15152',       href: 'tel:+918110015152'            },
  { num: '02', icon: Mail,   lbl: 'Email Us',      val: 'support@schoolmate.in', href: 'mailto:support@schoolmate.in' },
  { num: '03', icon: MapPin, lbl: 'Our Office',    val: '67A, Giri Rd, Thanjavur, TN 613009'                         },
  { num: '04', icon: Clock,  lbl: 'Working Hours', val: 'Mon – Sat · 9 AM – 7 PM'                                    },
]

export default function Contact() {
  const [headRef, headVis] = useScrollAnimation(0.05)
  const [stripRef, stripVis] = useScrollAnimation(0.08)
  const [formRef, formVis]  = useScrollAnimation(0.06)
  const [sent, setSent]     = useState(false)

  useEffect(() => {
    document.title = META.title
    const setMeta = (n, c) => {
      let el = document.querySelector(`meta[name="${n}"]`)
      if (!el) { el = document.createElement('meta'); el.name = n; document.head.appendChild(el) }
      el.content = c
    }
    setMeta('description', META.description)
    let canonical = document.querySelector('link[rel="canonical"]')
    if (!canonical) { canonical = document.createElement('link'); canonical.rel = 'canonical'; document.head.appendChild(canonical) }
    canonical.href = META.canonical
    return () => { document.title = 'SchoolMate'; canonical.remove() }
  }, [])

  function handleSubmit(e) {
    e.preventDefault()
    setSent(true)
  }

  return (
    <>
      {/* ── Hero ── */}
      <section className="ct-hero">
        <div
          className={`wrap ct-hero-inner sr${headVis ? ' in' : ''}`}
          ref={headRef}
        >
          <div className="ct-kicker">
            <span className="ct-kicker-dot" />
            Get In Touch
          </div>

          <h1 className="ct-h1">
            Have a Question?<br />
            We're <span>Here to Help.</span>
          </h1>

          <p className="ct-sub">
            Reach out to our team — whether it's a demo request,
            a product question, or just a hello. We respond within 24 hours.
          </p>

          <div className="ct-pills">
            <a href="tel:+918110015152" className="ct-pill">
              <Phone size={14} /> +91 81100 15152
            </a>
            <a href="mailto:support@schoolmate.in" className="ct-pill">
              <Mail size={14} /> support@schoolmate.in
            </a>
            <a href="https://wa.me/918110015152" target="_blank" rel="noopener noreferrer" className="ct-pill">
              <MessageCircle size={14} /> WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* ── Info strip ── */}
      <section className="ct-strip">
        <div
          className={`wrap sr${stripVis ? ' in' : ''}`}
          ref={stripRef}
        >
          <div className="ct-strip-wrap">
            {infoItems.map(({ num, icon: Icon, lbl, val, href }) => (
              <div key={num} className="ct-strip-item">
                <div className="ct-strip-icon"><Icon size={18} /></div>
                <div className="ct-strip-body">
                  <span className="ct-strip-lbl">{lbl}</span>
                  <div className="ct-strip-val">
                    {href ? <a href={href}>{val}</a> : val}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Red rule ── */}
      <div className="ct-rule">
        <div className="wrap ct-rule-inner">
          <span className="ct-rule-line" />
          <span className="ct-rule-text">Book a Free Demo</span>
          <span className="ct-rule-line ct-rule-line-r" />
        </div>
      </div>

      {/* ── Form + Map ── */}
      <section className="ct-main">
        <div
          className={`wrap sr${formVis ? ' in' : ''}`}
          ref={formRef}
        >
          <div className="ct-grid">

            {/* Form — dark card */}
            <div className="ct-form-card">
              <div className="ct-form-inner">
                <div className="ct-form-hd">
                  <span className="ct-form-kicker">
                    <span className="ct-kicker-dot" /> Free Demo
                  </span>
                  <h2 className="ct-form-h2">Book Your<br />Free Demo</h2>
                  <p className="ct-form-sub">Fill in your details — we'll reach out within 24 hours.</p>
                </div>

                {sent ? (
                  <div className="ct-sent">
                    <div className="ct-sent-icon"><CheckCircle2 size={28} /></div>
                    <p className="ct-sent-title">Request Received!</p>
                    <p className="ct-sent-sub">Our team will contact you within 24 hours.</p>
                  </div>
                ) : (
                  <form className="ct-form" onSubmit={handleSubmit}>
                    <div className="ct-field">
                      <input type="text" id="ct-name" placeholder=" " required />
                      <label htmlFor="ct-name">Your Name</label>
                    </div>
                    <div className="ct-field">
                      <input type="tel" id="ct-phone" placeholder=" " required />
                      <label htmlFor="ct-phone">Phone Number</label>
                    </div>
                    <div className="ct-field">
                      <input type="text" id="ct-school" placeholder=" " required />
                      <label htmlFor="ct-school">School Name</label>
                    </div>
                    <div className="ct-field">
                      <input type="text" id="ct-city" placeholder=" " required />
                      <label htmlFor="ct-city">City</label>
                    </div>
                    <button type="submit" className="ct-submit">
                      Get Free Demo <ArrowRight size={15} />
                    </button>
                    <p className="ct-form-note">No credit card required · Setup in minutes</p>
                  </form>
                )}

                <a
                  href="https://wa.me/918110015152"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ct-wa-link"
                >
                  <MessageCircle size={15} />
                  Or chat with us on WhatsApp
                  <ArrowRight size={13} />
                </a>
              </div>
            </div>

            {/* Map — full-bleed with floating overlay */}
            <div className="ct-map-card">
              <div className="ct-map-wrap">
                <iframe
                  className="ct-map-frame"
                  src="https://maps.google.com/maps?q=67A+Giri+Rd+Srinivasapuram+Balaganapathy+Nagar+Thanjavur+Tamil+Nadu+613009&output=embed"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="SchoolMate Office Location"
                />
                <div className="ct-map-overlay">
                  <div className="ct-map-ov-row">
                    <div className="ct-map-ov-icon"><MapPin size={18} /></div>
                    <div className="ct-map-ov-text">
                      <span className="ct-map-ov-lbl">Our Office</span>
                      <span className="ct-map-ov-val">
                        67A, Giri Rd, Srinivasapuram,<br />
                        Balaganapathy Nagar,<br />
                        Thanjavur, Tamil Nadu 613009
                      </span>
                    </div>
                  </div>
                  <a
                    href="https://maps.app.goo.gl/PbYzXUEaJWr14UAv6"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ct-map-btn"
                  >
                    <MapPin size={14} /> Open in Google Maps <ArrowRight size={13} />
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}
