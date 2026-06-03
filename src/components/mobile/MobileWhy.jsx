import { Bell, BookOpen, Megaphone, Calendar, CreditCard, Shield } from 'lucide-react'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'
import m1Img from '../../assets/M1.png'

const benefits = [
  { icon: Bell,        text: 'Instant attendance alerts'              },
  { icon: BookOpen,    text: 'Homework and assignment updates'        },
  { icon: Megaphone,   text: 'Real-time circulars and announcements'  },
  { icon: Calendar,    text: 'Exam timetable notifications'           },
  { icon: CreditCard,  text: 'Fee payment reminders'                  },
  { icon: Shield,      text: 'Secure parent-teacher communication'    },
]

export default function MobileWhy() {
  const [imgRef, imgVis] = useScrollAnimation(0.1)
  const [txtRef, txtVis] = useScrollAnimation(0.1)

  return (
    <section className="mob-why" id="why">
      <div className="wrap mob-why-inner">

        {/* left: image */}
        <div ref={imgRef} className={`mob-why-img-col sr-l${imgVis ? ' in' : ''}`}>
          <div className="mob-section-num">01</div>
          <div className="mob-why-img-frame">
            <img
              src={m1Img}
              alt="online attendance system for students & teachers – schooling software"
              className="mob-why-img"
            />
            <div className="mob-why-img-overlay" />
          </div>
        </div>

        {/* right: content */}
        <div ref={txtRef} className={`mob-why-content sr-r${txtVis ? ' in' : ''}`}>
          <div className="mob-chip chip chip-red">Why SchoolMate</div>

          <h2 className="mob-why-h2 htitle">
            Why Choose the SchoolMate Mobile App?
          </h2>

          <h3 className="mob-why-h3">
            Real-Time Communication Made Simple
          </h3>

          <p className="mob-why-body hsub">
            The SchoolMate mobile app enables schools to create better relationships
            with parents, teachers, and students through instant communication and
            real-time alerts.
          </p>

          <ul className="mob-why-list">
            {benefits.map(({ icon: Icon, text }) => (
              <li key={text} className="mob-why-item">
                <span className="mob-why-icon-wrap"><Icon size={14} /></span>
                <span>{text}</span>
              </li>
            ))}
          </ul>

          <p className="mob-why-footer">
            The SchoolMate app is an advanced student school management system that
            improves engagement while reducing manual administrative work.
          </p>
        </div>

      </div>
    </section>
  )
}
