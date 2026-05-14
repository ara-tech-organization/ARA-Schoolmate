import { useState } from 'react'
import {
  CheckCircle2, ArrowRight, Star,
  MessageSquare, BookOpen, Users, Clock, Shield, Smartphone,
  Award, TrendingUp, GraduationCap, Zap
} from 'lucide-react'
import heroBoyImg from '../../assets/h2.png'

const pills = [
  { icon: MessageSquare, text: 'Real-time parent communication' },
  { icon: BookOpen,      text: 'Attendance and homework tracking' },
  { icon: Users,         text: 'Online fee management' },
  { icon: Clock,         text: 'Timetable and exam scheduling' },
  { icon: Shield,        text: 'Cloud-based secure platform' },
  { icon: Smartphone,    text: 'Mobile app + web application support' },
]

const features = [
  { icon: Zap,        title: 'Best Campus Management Software',      desc: 'Communication, academics, fees & transport in one place' },
  { icon: BookOpen,   title: 'Online Attendance System for Students & Teachers',      desc: 'Replace manual tracking with automated digital processes' },
  { icon: Users,      title: 'Student Database Management System Software', desc: 'Admins, teachers, students & parents connected seamlessly' },
  { icon: Shield,     title: 'Education Management System Software',      desc: 'Real-time updates on any device, 24/7 with enterprise security' },
]

export default function HeroBanner() {
  const [form, setForm]           = useState({ name: '', school: '', phone: '', email: '' })
  const [submitted, setSubmitted] = useState(false)
  const submit = (e) => { e.preventDefault(); setSubmitted(true) }

  return (
    <section className="hero" id="home">

      <span className="hero-deco-star">✳</span>
      <div className="hero-deco-ring" />
      <div className="hero-deco-dot hdd-1" />
      <div className="hero-deco-dot hdd-2" />

      {/* ── CENTERED HEADING BLOCK ── */}
      <div className="hero-head">

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
          <p>Build a connected, efficient, future-ready institution with SchoolMate, the complete solution for communication, operations, academics, attendance, transport, and administration.</p>
          <p>SchoolMate replaces the outdated paperwork and manual tracking used by schools with a comprehensive digital ecosystem that promotes collaboration between administrators, teachers, students, and parents.</p>
          <p>Whether you're looking for complete schooling software or an advanced smartschool management system, SchoolMate has got you covered on one secure platform.</p>
          <p>The update of attendance and homework, fee management, and real-time notifications, SchoolMate facilitates smooth school operations and also improves transparency and productivity.</p>
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

      {/* ── BODY: left | center image | right form ── */}
      <div className="hero-body">

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

          <div className="hbl-trust">
            <div className="hbl-trust-nums">
              <div className="hbl-tnum"><span className="hbl-tnum-n">500+</span><span className="hbl-tnum-l">Schools</span></div>
              <div className="hbl-tnum-div" />
              <div className="hbl-tnum"><span className="hbl-tnum-n">80%</span><span className="hbl-tnum-l">Less Work</span></div>
              <div className="hbl-tnum-div" />
              <div className="hbl-tnum"><span className="hbl-tnum-n">10+</span><span className="hbl-tnum-l">Years</span></div>
            </div>
          </div>

        </div>

        {/* CENTER — boy character focal point */}
        <div className="hero-bc">
          <div className="hero-vis">
            <div className="hero-vis-inner">
              <img
                src={heroBoyImg}
                alt="SchoolMate"
                className="hero-vis-img"
              />
            </div>

            <div className="hv-card fc-tr">
              <div className="hvc-icon"><TrendingUp size={13} /></div>
              <div>
                <span className="hvc-num">99%</span>
                <span className="hvc-label">Satisfaction Rate</span>
              </div>
            </div>

            <div className="hv-card fc-bl">
              <div className="hvc-icon"><GraduationCap size={13} /></div>
              <div>
                <span className="hvc-num">10+</span>
                <span className="hvc-label">Years Experience</span>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT — lead-gen form */}
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
                    <span>Trusted by 500+ schools</span>
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
                    <button type="submit" className="form-btn">
                      Get Free Demo <ArrowRight size={14} />
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
    </section>
  )
}
