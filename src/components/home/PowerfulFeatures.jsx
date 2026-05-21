import { useState } from 'react'
import { GraduationCap, Users, Settings, ClipboardCheck, Upload, MessageCircle, BookOpen, Eye, CreditCard, Bell, Calendar, BarChart3, LayoutDashboard, DollarSign, Zap } from 'lucide-react'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'
import teachersImg from '../../assets/Teachers.png'
import parentImg from '../../assets/Parent.png'
import administrationImg from '../../assets/Administration.png'

const tabs = [
  { id: 'teachers', label: 'For Teachers', icon: GraduationCap },
  { id: 'parents',  label: 'For Parents',  icon: Users },
  { id: 'admins',   label: 'For School Administrators', icon: Settings },
]

const content = {
  teachers: {
    icon: GraduationCap, title: 'Empower Teachers with Smart Tools',
    sub: 'A time and class attendance management system that makes classroom operations and reporting effortless.',
    seoPara: 'Teachers like a time and class attendance management system that makes classroom operations and reporting easy.',
    img: teachersImg,
    items: [
      { icon: ClipboardCheck, title: 'Instant Attendance Marking', desc: 'Mark class attendance in seconds with auto-parent alerts' },
      { icon: Upload,         title: 'Upload Homework & Marks',    desc: 'Share assignments and results directly from the app' },
      { icon: MessageCircle,  title: 'Parent Updates',             desc: 'Send real-time updates and circulars to parents' },
      { icon: BookOpen,       title: 'Student Records',            desc: 'Access complete student academic history instantly' },
    ],
  },
  parents: {
    icon: Users, title: 'Keep Parents in the Loop',
    sub: 'SchoolMate makes parent engagement easy with a smart online attendance system and real-time updates.',
    seoPara: 'SchoolMate makes parent engagement easy with a smart online attendance system for students & teachers with real-time updates.',
    img: parentImg,
    items: [
      { icon: Eye,        title: 'Monitor Attendance', desc: 'Get real-time alerts every time your child enters or exits' },
      { icon: BookOpen,   title: 'Homework & Exams',   desc: 'View exam schedules, homework, and academic results' },
      { icon: Bell,       title: 'Instant Alerts',     desc: 'Receive circular, fee, and event alerts instantly' },
      { icon: CreditCard,    title: 'Pay Fees Online',           desc: 'Secure, hassle-free fee payment from your phone' },
      { icon: MessageCircle, title: 'All Communication',         desc: 'Access all communication in one place' },
    ],
  },
  admins: {
    icon: Settings, title: 'Complete Control for Administrators',
    sub: 'A reliable student database management system for administrators handling large operational data.',
    seoPara: 'SchoolMate is a reliable student database management system software for administrators who deal with a large amount of academic and operational data.',
    img: administrationImg,
    items: [
      { icon: LayoutDashboard, title: 'Centralized Dashboard',      desc: 'Single view of all school operations and analytics' },
      { icon: DollarSign,      title: 'Fee & Finance Tracking',    desc: 'Monitor collections, dues, and financial reports' },
      { icon: Calendar,        title: 'Timetable Planning',        desc: 'Drag-and-drop scheduling for classes and exams' },
      { icon: Bell,            title: 'Circular & Event Mgmt',    desc: 'Create and distribute circulars and manage school events' },
      { icon: BarChart3,       title: 'Analytics & Reports',       desc: 'Data-driven insights to improve school performance' },
    ],
  },
}

export default function PowerfulFeatures() {
  const [active, setActive] = useState('teachers')
  const data = content[active]
  const [h, hv] = useScrollAnimation()
  const [b, bv] = useScrollAnimation()

  return (
    <section className="feat2-section" id="powerful-features">
      <div className="feat2-inner">

        <div ref={h} className={`feat2-header sr${hv ? ' in' : ''}`}>
          <div className="chip chip-red"><Zap size={12} /> Powerful Features</div>
          <h2 className="htitle">Powerful Features for <em>Every User</em></h2>
          <p className="hsub">Whether you are a teacher, parent, or administrator, SchoolMate has the right tools to make school life simpler.</p>
        </div>

        <div className="feat2-tabs">
          {tabs.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              className={`ft2${active === id ? ' ft2-active' : ''}`}
              onClick={() => setActive(id)}
            >
              <Icon size={16} />{label}
            </button>
          ))}
        </div>

        <div ref={b} className={`feat2-body sr${bv ? ' in' : ''}`} key={active}>
          <div className="feat2-list-side">
            <h3 className="feat2-list-title">{data.title}</h3>
            <p className="feat2-list-sub">{data.sub}</p>
            <div className="feat2-items">
              {data.items.map(({ icon: Icon, title, desc }) => (
                <div className="f2-item" key={title}>
                  <div className="f2-icon"><Icon size={20} /></div>
                  <div>
                    <p className="f2-title">{title}</p>
                    <p className="f2-desc">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
            {data.seoPara && <p className="feat2-seo-para">{data.seoPara}</p>}
          </div>

          <div className="feat2-visual-side">
            <div className="feat2-phone-wrap">
              <div className="feat2-phone">
                {/* Dynamic Island */}
                <div className="feat2-phone-di" />
                {/* Status bar */}
                <div className="feat2-phone-status">
                  <span className="feat2-phone-time">9:41</span>
                  <div className="feat2-phone-icons">
                    <svg width="16" height="11" viewBox="0 0 16 11" fill="none">
                      <rect x="0" y="3.5" width="3" height="7.5" rx="1" fill="#1c1c1e"/>
                      <rect x="4.5" y="2" width="3" height="9" rx="1" fill="#1c1c1e"/>
                      <rect x="9" y="0.5" width="3" height="10.5" rx="1" fill="#1c1c1e"/>
                      <rect x="13.5" y="0" width="2.5" height="11" rx="1" fill="#1c1c1e" opacity="0.3"/>
                    </svg>
                    <svg width="25" height="12" viewBox="0 0 25 12" fill="none">
                      <rect x="0.5" y="0.5" width="21" height="11" rx="3.5" stroke="#1c1c1e" strokeOpacity="0.35"/>
                      <rect x="22" y="3.5" width="2" height="5" rx="1" fill="#1c1c1e" fillOpacity="0.4"/>
                      <rect x="2" y="2" width="16" height="8" rx="2" fill="#1c1c1e"/>
                    </svg>
                  </div>
                </div>
                {/* Screen content */}
                <div className="feat2-phone-screen">
                  <img src={data.img} alt={data.title} className="feat2-phone-img" />
                </div>
                {/* Home indicator */}
                <div className="feat2-phone-home" />
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
