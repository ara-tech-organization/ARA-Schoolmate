import { useState, useEffect } from 'react'
import {
  CheckCircle2, ArrowRight, Star,
  MessageSquare, BookOpen, Users, Clock, Shield, Smartphone,
  Zap, TrendingUp, Award
} from 'lucide-react'
import heroImg1 from '../../assets/Hero.png'
import heroImg2 from '../../assets/Hero1.png'
import heroImg3 from '../../assets/Academic.png'
import heroImg4 from '../../assets/Communication.png'
import heroBoyImg from '../../assets/h2.png'
import HeroIllustration from './HeroIllustration'
import { submitLead } from '../../utils/submitLead'

const heroSlides = [
  { src: heroImg1, alt: 'schooling software – Smart school management system'              },
  { src: heroImg2, alt: 'student management system software'                               },
  { src: heroImg3, alt: 'education management system software'                             },
  { src: heroImg4, alt: 'online student attendance management software system'             },
]

const pills = [
  { icon: MessageSquare, text: 'Real-time parent communication' },
  { icon: BookOpen,      text: 'Attendance and homework tracking' },
  { icon: Users,         text: 'Online fee management' },
  { icon: Clock,         text: 'Timetable and exam scheduling' },
  { icon: Shield,        text: 'Cloud-based secure platform' },
  { icon: Smartphone,    text: 'Mobile app + web application support' },
]

const features = [
  { icon: Zap,        title: 'Best Campus Management Software',                desc: 'Communication, academics, fees & transport in one place' },
  { icon: BookOpen,   title: 'Online Attendance System for Students & Teachers', desc: 'Replace manual tracking with automated digital processes' },
  { icon: Users,      title: 'Student Database Management System Software',     desc: 'Admins, teachers, students & parents connected seamlessly' },
  { icon: Shield,     title: 'Education Management System Software',            desc: 'Real-time updates on any device, 24/7 with enterprise security' },
]

export default function HeroBanner() {
  const [form, setForm]           = useState({ name: '', school: '', phone: '', email: '' })
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError]         = useState('')
  const [slide, setSlide]         = useState(0)
  const [progress, setProgress]   = useState(0)
  const SLIDE_MS = 3500
  const submit = async (e) => {
    e.preventDefault()
    setError('')
    setSubmitting(true)
    try {
      await submitLead({ source: 'home_hero', ...form })
      setSubmitted(true)
    } catch (err) {
      setError('Something went wrong. Please try again or contact us on WhatsApp.')
    } finally {
      setSubmitting(false)
    }
  }

  useEffect(() => {
    setProgress(0)
    const start = Date.now()
    const raf = () => {
      const p = Math.min((Date.now() - start) / SLIDE_MS * 100, 100)
      setProgress(p)
      if (p < 100) requestAnimationFrame(raf)
    }
    const id = requestAnimationFrame(raf)
    const t = setTimeout(() => {
      setSlide(s => (s + 1) % heroSlides.length)
    }, SLIDE_MS)
    return () => { clearTimeout(t); cancelAnimationFrame(id) }
  }, [slide])

  return (
    <section className="hero" id="home">

      {/* ── SECTION 1 wrapper: pink bg + deco ── */}
      <div className="hero-s1">
        {/* deco isolated in its own clipping layer */}
        <div className="hero-deco-wrap">
          <span className="hero-deco-star">✳</span>
          <div className="hero-deco-ring" />
          <div className="hero-deco-dot hdd-1" />
          <div className="hero-deco-dot hdd-2" />
        </div>

      {/* ── SECTION 1: left content | right image ── */}
      <div className="hero-head">

        {/* LEFT — content */}
        <div className="hero-head-left">
          <div className="hero-eyebrow">
            <div className="hero-chip hero-chip-light">
              <span className="hero-chip-dot" />
              Smart School Management System
            </div>
          </div>
          <h1 className="hero-h1">
            <span className="hero-h1-brand">SchoolMate</span>
            <span className="hero-h1-rest"> – Smart Digital Solution for Modern Schools</span>
          </h1>
          <h2 className="hero-h2">
            Transform Your School with Smart Digital Management
          </h2>
          <div className="hero-seo-desc">
            <p>Build a connected, efficient, future-ready institution with SchoolMate, the complete solution for communication, academics, attendance, transport, and administration. SchoolMate replaces the outdated paperwork and manual tracking used by schools with a comprehensive ecosystem that promotes collaboration between administrators, teachers, students, and parents. Whether you're looking for complete schooling software or smartschool management system, SchoolMate has got you covered on one secure platform.</p>
          </div>
          <div className="hero-pills">
            {pills.map(({ icon: Icon, text }) => (
              <div className="hero-pill" key={text}>
                <span className="hero-pill-icon"><Icon size={11} /></span>
                {text}
              </div>
            ))}
          </div>
          <div className="hero-cta">
            <a href="#contact" className="btn btn-red hero-btn-primary">
              Get Started Today <ArrowRight size={15} />
            </a>
            <a href="#features" className="btn btn-ghost-red">
              Explore Features
            </a>
          </div>
        </div>

        {/* RIGHT — premium slider */}
        <div className="hero-head-right">
          <div className="hhs-frame">
            {/* decorative corner accents */}
            <span className="hhs-corner hhs-corner-tl" />
            <span className="hhs-corner hhs-corner-tr" />
            <span className="hhs-corner hhs-corner-br" />

            {/* progress bar */}
            <div className="hhs-progress">
              <div className="hhs-progress-fill" style={{ width: `${progress}%` }} />
            </div>

            {/* images */}
            <div className="hhs-track">
              {heroSlides.map(({ src, alt }, i) => (
                <div key={i} className={`hhs-slide${slide === i ? ' active' : ''}`}>
                  <img src={src} alt={alt} className="hhs-img" />
                </div>
              ))}
            </div>

            {/* bottom bar: dots + counter */}
            <div className="hhs-footer">
              <div className="hhs-dots">
                {heroSlides.map((_, i) => (
                  <button
                    key={i}
                    className={`hhs-dot${slide === i ? ' active' : ''}`}
                    onClick={() => setSlide(i)}
                    aria-label={`Slide ${i + 1}`}
                  />
                ))}
              </div>
              <span className="hhs-counter">{slide + 1} / {heroSlides.length}</span>
            </div>
          </div>
        </div>

      </div>
      </div>{/* end hero-s1 */}

      {/* ── SECTION 2: left cards | right form ── */}
      <div className="hero-body">
      <div className="hero-body-inner">

        {/* LEFT — feature cards */}
        <div className="hero-bl">
          <div className="hbl-features">
            {features.map(({ icon: Icon, title, desc }) => (
              <div className="hbl-feat" key={title}>
                <div className="hbl-feat-icon"><Icon size={14} /></div>
                <div className="hbl-feat-text">
                  <span className="hbl-feat-title">{title}</span>
                  <span className="hbl-feat-desc">{desc}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CENTER — h2.png character */}
        <div className="hero-bc">
          <div className="hero-vis">
            <div className="hero-vis-inner">
              <img src={heroBoyImg} alt="Smart school management system – SchoolMate app" className="hero-vis-img" />
            </div>
            <div className="hv-card hv-card-bc fc-bl">
              <div className="hvc-icon"><Award size={13} /></div>
              <div>
                <span className="hvc-num">3+</span>
                <span className="hvc-label">Years Experience</span>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT — form */}
        <div className="hero-br">
          <div className="hero-form-wrap">
            <div className="hero-form" id="get-started">
              {submitted ? (
                <div className="form-success">
                  <div className="form-success-icon"><CheckCircle2 size={32} /></div>
                  <h3 style={{ fontSize: 17, fontWeight: 700, marginBottom: 6 }}>Thank You!</h3>
                  <p style={{ fontSize: 12.5, color: 'var(--text-4)' }}>Our team will reach you within 24 hours.</p>
                </div>
              ) : (
                <>
                  <div className="hero-form-header">
                    <div className="hero-form-icon">
                      <Star size={19} fill="var(--red)" color="var(--red)" />
                    </div>
                    <div>
                      <p className="hf-title">Get Started with SchoolMate</p>
                      <p className="hf-sub">Free demo – no credit card required</p>
                    </div>
                  </div>
                  <div className="hf-stars-row">
                    {[...Array(5)].map((_, i) => <Star key={i} size={11} fill="#F59E0B" color="#F59E0B" />)}
                    <span>Trusted by 100+ schools</span>
                  </div>
                  <form onSubmit={submit}>
                    <div className="fg-row">
                      <div className="fg">
                        <label>Full Name *</label>
                        <input type="text" placeholder="Your name" required
                          value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} />
                      </div>
                      <div className="fg">
                        <label>Phone *</label>
                        <input type="tel" placeholder="+91 XXXXX" required
                          value={form.phone} onChange={e => setForm(f => ({ ...f, phone: e.target.value }))} />
                      </div>
                    </div>
                    <div className="fg">
                      <label>School / Institution *</label>
                      <input type="text" placeholder="School name" required
                        value={form.school} onChange={e => setForm(f => ({ ...f, school: e.target.value }))} />
                    </div>
                    <div className="fg">
                      <label>Email Address</label>
                      <input type="email" placeholder="you@school.com"
                        value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))} />
                    </div>
                    {error && <p style={{ fontSize: 12.5, color: 'var(--red)', margin: '-4px 0 4px' }}>{error}</p>}
                    <button type="submit" className="form-btn" disabled={submitting}>
                      {submitting ? 'Submitting…' : <>Get Free Demo <ArrowRight size={14} /></>}
                    </button>
                  </form>
                  <p className="form-note">
                    <CheckCircle2 size={10} style={{ display:'inline', marginRight:3, verticalAlign:'middle' }} />
                    No spam. We respect your privacy.
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
      </div>

    </section>
  )
}
