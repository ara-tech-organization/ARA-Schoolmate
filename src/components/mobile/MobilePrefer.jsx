import { Zap, FileText, Heart, LayoutDashboard } from 'lucide-react'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'

const cards = [
  {
    icon:  Zap,
    title: 'Fast & Secure Communication',
    body:  'Unlimited notifications, updates. Instantly. No text message limits.',
  },
  {
    icon:  FileText,
    title: 'Paperless School Operations',
    body:  'Digitize attendance, alerts, circulars, homework, consent forms, and academic workflows.',
  },
  {
    icon:  Heart,
    title: 'Improved Parent Engagement',
    body:  'Keep Parents informed with Live Notifications on Attendance, Tests, Homework, and School Activities.',
  },
  {
    icon:  LayoutDashboard,
    title: 'Easy-to-Use Dashboard',
    body:  'One simple and intuitive interface for all school activities.',
  },
]

export default function MobilePrefer() {
  const [hRef, hVis] = useScrollAnimation(0.05)
  const [gRef, gVis] = useScrollAnimation(0.07)

  return (
    <section className="mob-prefer" id="prefer">
      <div className="wrap">

        <div ref={hRef} className={`mob-sec-head sr${hVis ? ' in' : ''}`}>
          <div className="mob-chip chip chip-red">School Choice</div>
          <h2 className="mob-sec-h2 htitle">
            Why Do Schools Prefer SchoolMate Mobile App?
          </h2>
        </div>

        <div ref={gRef} className={`mob-prefer-grid sr${gVis ? ' in' : ''}`}>
          {cards.map(({ icon: Icon, title, body }) => (
            <div key={title} className="mob-prefer-card">
              <div className="mob-prefer-icon-wrap">
                <Icon size={20} />
              </div>
              <h4 className="mob-prefer-title">{title}</h4>
              <p className="mob-prefer-body">{body}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
