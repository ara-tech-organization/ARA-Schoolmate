import { Users, GraduationCap, Building2, CheckCircle2 } from 'lucide-react'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'

const groups = [
  {
    icon:   Users,
    label:  'For Parents',
    items: [
      'Monitor attendance and homework',
      'Receive instant school updates',
      'View exam results and schedules',
      'Access fee reminders and payment details',
      'Stay connected with teachers',
    ],
  },
  {
    icon:   GraduationCap,
    label:  'For Teachers',
    items: [
      'Mark attendance digitally',
      'Upload homework and marks',
      'Share classroom updates',
      'Access student records instantly',
    ],
  },
  {
    icon:   Building2,
    label:  'For School Administrators',
    items: [
      'Manage communication centrally',
      'Monitor attendance reports',
      'Track academic performance',
      'Improve operational efficiency',
    ],
  },
]

export default function MobileUsers() {
  const [hRef, hVis] = useScrollAnimation(0.05)
  const [gRef, gVis] = useScrollAnimation(0.08)

  return (
    <section className="mob-users" id="users">
      <div className="wrap">

        <div ref={hRef} className={`mob-sec-head sr${hVis ? ' in' : ''}`}>
          <div className="mob-section-num mob-section-num-center">03</div>
          <div className="mob-chip chip chip-red">Every User</div>
          <h2 className="mob-sec-h2 htitle">
            SchoolMate App for Every User
          </h2>
        </div>

        <div ref={gRef} className={`mob-users-grid sr${gVis ? ' in' : ''}`}>
          {groups.map(({ icon: Icon, label, items }, i) => (
            <div key={label} className="mob-user-col">
              <div className="mob-user-icon-wrap">
                <Icon size={24} />
              </div>
              <h3 className="mob-user-title">{label}</h3>
              <ul className="mob-user-list">
                {items.map(item => (
                  <li key={item} className="mob-user-item">
                    <CheckCircle2 size={13} className="mob-user-check" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
