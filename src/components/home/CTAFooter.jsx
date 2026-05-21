import { ArrowRight, CheckCircle2, Users, Star, Zap } from 'lucide-react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'
import footerImg from '../../assets/Footer.png'

const footerLinks = [
  {
    title: 'Pages',
    links: [
      { label: 'Home',          to: '/'                                    },
      { label: 'About Us',      to: '/about'                               },
      { label: 'Mobile App',    to: '/smart-school-management-mobile-app'  },
      { label: 'Get Free Demo', to: '/#contact'                            },
    ],
  },
  {
    title: 'Features',
    links: [
      { label: 'What We Offer',         to: '/#features'                                        },
      { label: 'All Modules',           to: '/#modules'                                         },
      { label: 'Why SchoolMate',        to: '/#why'                                             },
      { label: 'App Features',          to: '/smart-school-management-mobile-app#features'      },
      { label: 'Mobile App FAQ',        to: '/smart-school-management-mobile-app#faq'           },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About Us',    to: '/about'          },
      { label: 'Our Mission', to: '/about#mission'  },
      { label: 'Our Vision',  to: '/about#vision'   },
      { label: 'Contact',     to: '/contact'        },
      { label: 'FAQ',         to: '/#faq'           },
    ],
  },
  {
    title: 'Support',
    links: [
      { label: 'Help Center',      to: '/contact'  },
      { label: 'Privacy Policy',   href: '#'       },
      { label: 'Terms of Service', href: '#'       },
      { label: 'Cookie Policy',    href: '#'       },
    ],
  },
]

const socials = [
  {
    label: 'Facebook', href: '#',
    svg: <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>,
  },
  {
    label: 'Twitter/X', href: '#',
    svg: <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>,
  },
  {
    label: 'LinkedIn', href: '#',
    svg: <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>,
  },
  {
    label: 'Instagram', href: '#',
    svg: <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>,
  },
]

const trust = [
  { icon: Users, num: '100+', label: 'Schools' },
  { icon: Star,  num: '99%',  label: 'Satisfaction' },
  { icon: Zap,   num: '24/7', label: 'Support' },
]

const perks = [
  'Free setup & onboarding assistance',
  'No long-term contracts required',
  'Live demo within 24 hours',
  'Dedicated account manager',
]

export default function CTAFooter({ noForm = false }) {
  const [left, lv]  = useScrollAnimation()
  const [right, rv] = useScrollAnimation()
  const [sent, setSent] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    setSent(true)
  }

  return (
    <>
      {!noForm && (
        <section className="cta2-section" id="contact">
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
                Join 100+ institutions already transforming their school operations
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

              <p className="cta2-seo-para">SchoolMate has the tools your institution needs to grow, whether you need eschool software, student information management software, or a complete smartschool management system.</p>
              <p className="cta2-seo-para">SchoolMate continues to help institutions modernize with scalable student database management system software, education administration software, and student monitoring software solutions.</p>
              <p className="cta2-upgrade">Upgrade your school with SchoolMate now.</p>
              <a href="tel:+919876543210" className="cta2-call-btn">
                📞 Call Us: +91 98765 43210
              </a>
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
      )}

      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-top">
            <div>
              <div className="f-brand-logo">
                <img src={footerImg} alt="SchoolMate" className="footer-logo-img" />
              </div>
              <p className="f-brand-desc">
                SchoolMate helps institutions modernize with scalable student database management,
                education administration software, and student monitoring solutions.
              </p>
              <div className="f-socials">
                {socials.map(({ svg, href, label }) => (
                  <a key={label} href={href} className="f-soc" aria-label={label}>
                    {svg}
                  </a>
                ))}
              </div>
            </div>

            {footerLinks.map(({ title, links }) => (
              <div key={title}>
                <h4 className="f-col-title">{title}</h4>
                <div className="f-links">
                  {links.map(({ label, to, href }) =>
                    to
                      ? <Link key={label} to={to}>{label}</Link>
                      : <a key={label} href={href}>{label}</a>
                  )}
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
            <p className="f-crafted">
              <span className="f-heart">❤️</span> Crafted with Excellence by{' '}
              <a href="https://discovertechnologies.co/" target="_blank" rel="noopener noreferrer">Ara Technology</a>
            </p>
          </div>
        </div>
      </footer>
    </>
  )
}
