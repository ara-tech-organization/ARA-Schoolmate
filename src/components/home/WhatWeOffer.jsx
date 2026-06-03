import { MessageCircle, BookOpen, UserCheck, ChevronRight, Layers } from 'lucide-react'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'
import communicationImg from '../../assets/Communication.png'
import academicImg from '../../assets/Academic.png'
import attendanceImg from '../../assets/Administration.png'

const offers = [
  {
    num: '01', icon: MessageCircle,
    title: 'Communication & Engagement',
    desc: 'Keep every stakeholder connected with real-time circulars, instant notifications, and secure messaging that bridges the gap between school and home.',
    items: ['Circulars and announcements', 'Instant push notifications', 'Secure parent messaging', 'Digital consent forms', 'School news and updates'],
    img: communicationImg,
    imgAlt: 'online attendance system for students & teachers – SchoolMate schooling software',
  },
  {
    num: '02', icon: BookOpen,
    title: 'Academic Management',
    desc: 'Streamline the entire academic cycle — from homework assignments to exam schedules — in one powerful, teacher-friendly interface that saves hours every week.',
    items: ['Homework tracking & submission', 'Study material sharing', 'Exam timetables & marks', 'Result management', 'Academic calendars'],
    img: academicImg,
    imgAlt: 'education management system software – student management system software',
    flip: true,
  },
  {
    num: '03', icon: UserCheck,
    title: 'Attendance & Monitoring',
    desc: 'Never miss a moment. Track student and staff attendance in real time with instant parent alerts and comprehensive analytics dashboards for full visibility.',
    items: ['Live attendance updates', 'Staff attendance tracking', 'Parent instant notifications', 'Performance analytics', 'Daily activity reports'],
    img: attendanceImg,
    imgAlt: 'student attendance management system – online student attendance management software system',
  },
]

function OfferRow({ offer }) {
  const [ref, vis] = useScrollAnimation()
  return (
    <div ref={ref} className={`offer2-row${offer.flip ? ' offer2-flip' : ''} sr${vis ? ' in' : ''}`}>
      <div className="offer2-img-side">
        <div className="offer2-img-frame">
          <img src={offer.img} alt={offer.imgAlt || offer.title} className="offer2-img" />
          <div className="offer2-img-gradient" />
        </div>
      </div>

      <div className="offer2-content-side">
        <div className="offer2-icon-wrap">
          <offer.icon size={28} />
        </div>
        <h3 className="offer2-title">{offer.title}</h3>
        <p className="offer2-desc">{offer.desc}</p>
        <ul className="offer2-list">
          {offer.items.map(item => (
            <li key={item}>
              <ChevronRight size={14} style={{ flexShrink: 0 }} />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default function WhatWeOffer() {
  const [h, hv] = useScrollAnimation()

  return (
    <section className="offer2-section" id="features">
      <div className="offer2-inner">
        <div ref={h} className={`offer2-header sr${hv ? ' in' : ''}`}>
          <div className="chip chip-red"><Layers size={12} /> Our Offerings</div>
          <h2 className="htitle">What We <em>Offer?</em></h2>
          <p className="hsub">
            SchoolMate offers a complete online attendance system for students &amp; teachers by helping schools, colleges and institutions manage attendance, alerts, and communication in real time.
          </p>
        </div>

        <div className="offer2-rows">
          {offers.map(offer => <OfferRow key={offer.title} offer={offer} />)}
        </div>
      </div>
    </section>
  )
}
