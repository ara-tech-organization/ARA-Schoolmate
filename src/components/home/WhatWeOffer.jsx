import { MessageCircle, BookOpen, UserCheck, ChevronRight, Layers, ArrowRight } from 'lucide-react'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'

const offers = [
  {
    num: '01', icon: MessageCircle,
    title: 'Communication & Engagement',
    desc: 'Keep every stakeholder connected with real-time circulars, instant notifications, and secure messaging that bridges the gap between school and home.',
    items: ['Circulars and announcements', 'Instant push notifications', 'Secure parent messaging', 'Digital consent forms', 'School news and updates'],
    img: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=700&q=80',
  },
  {
    num: '02', icon: BookOpen,
    title: 'Academic Management',
    desc: 'Streamline the entire academic cycle — from homework assignments to exam schedules — in one powerful, teacher-friendly interface that saves hours every week.',
    items: ['Homework tracking & submission', 'Study material sharing', 'Exam timetables & marks', 'Result management', 'Academic calendars'],
    img: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=700&q=80',
    flip: true,
  },
  {
    num: '03', icon: UserCheck,
    title: 'Attendance & Monitoring',
    desc: 'Never miss a moment. Track student and staff attendance in real time with instant parent alerts and comprehensive analytics dashboards for full visibility.',
    items: ['Live attendance updates', 'Staff attendance tracking', 'Parent instant notifications', 'Performance analytics', 'Daily activity reports'],
    img: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=700&q=80',
  },
]

function OfferRow({ offer }) {
  const [ref, vis] = useScrollAnimation()
  return (
    <div ref={ref} className={`offer2-row${offer.flip ? ' offer2-flip' : ''} sr${vis ? ' in' : ''}`}>
      <div className="offer2-img-side">
        <div className="offer2-img-frame">
          <img src={offer.img} alt={offer.title} className="offer2-img" />
          <div className="offer2-img-gradient" />
          <div className="offer2-num-badge">{offer.num}</div>
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
        <a href="#get-started" className="offer2-link">
          Learn More <ArrowRight size={14} />
        </a>
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
            SchoolMate offers a complete school management solution — attendance,
            communication, academics, and more — all in real time.
          </p>
        </div>

        <div className="offer2-rows">
          {offers.map(offer => <OfferRow key={offer.title} offer={offer} />)}
        </div>
      </div>
    </section>
  )
}
