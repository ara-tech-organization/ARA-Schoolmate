import { Monitor, BookOpen, CreditCard, Calendar, Bell } from 'lucide-react'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'

const features = [
  {
    icon: Monitor,
    title: 'Attendance Management',
    body:  'Digitally track and manage attendance with real-time parent alerts. The well-integrated student attendance management system boosts transparency and accountability and reduces manual work.',
    hero:  true,
  },
  {
    icon: BookOpen,
    title: 'Homework & Study Materials',
    body:  'Teachers and staff can upload homework, assignments, relevant documents, and study material directly through the SchoolMate app for easy access by students.',
    hero:  false,
  },
  {
    icon: CreditCard,
    title: 'Fees & Finance',
    body:  'The mobile app gives parents instant access to all fee details, complete payment history, and reminders.',
    hero:  false,
  },
  {
    icon: Calendar,
    title: 'Timetable & Exam Updates',
    body:  'Students and parents can easily access class schedules, exam schedules, and academic calendar details at any time.',
    hero:  false,
  },
  {
    icon: Bell,
    title: 'Circulars & Notifications',
    body:  'Schools can instantly send notifications, announcements, circulars, event updates, and emergency notifications.',
    hero:  false,
  },
]

export default function MobileFeatures() {
  const [hRef, hVis] = useScrollAnimation(0.05)
  const [gRef, gVis] = useScrollAnimation(0.07)

  return (
    <section className="mob-features" id="features">
      <div className="wrap">

        {/* section header */}
        <div ref={hRef} className={`mob-sec-head sr${hVis ? ' in' : ''}`}>
          <div className="mob-section-num mob-section-num-center">02</div>
          <div className="mob-chip chip chip-red">App Features</div>
          <h2 className="mob-sec-h2 htitle">
            Smart Features Inside the SchoolMate App
          </h2>
        </div>

        {/* bento grid */}
        <div ref={gRef} className={`mob-feat-grid sr${gVis ? ' in' : ''}`}>

          {/* hero card — spans 2 cols */}
          <div className="mob-feat-card mob-feat-hero">
            <div className="mob-feat-hero-img-wrap">
              <img
                src="https://images.unsplash.com/photo-1757194455329-541f39364057?auto=format&fit=crop&w=800&q=80"
                alt="Empty school classroom with desks"
                className="mob-feat-hero-img"
              />
              <div className="mob-feat-hero-overlay" />
            </div>
            <div className="mob-feat-hero-body">
              <span className="mob-feat-icon-wrap mob-feat-icon-lg">
                <Monitor size={22} />
              </span>
              <h3 className="mob-feat-title">Attendance Management</h3>
              <p className="mob-feat-body">
                Digitally track and manage attendance with real-time parent alerts.
                The well-integrated student attendance management system boosts
                transparency and accountability and reduces manual work.
              </p>
            </div>
          </div>

          {/* standard cards */}
          {features.slice(1).map(({ icon: Icon, title, body }) => (
            <div key={title} className="mob-feat-card mob-feat-std">
              <span className="mob-feat-icon-wrap">
                <Icon size={18} />
              </span>
              <h3 className="mob-feat-title">{title}</h3>
              <p className="mob-feat-body">{body}</p>
            </div>
          ))}

        </div>
      </div>
    </section>
  )
}
