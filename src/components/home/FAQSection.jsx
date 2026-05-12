import { useState } from 'react'
import { Plus, HelpCircle } from 'lucide-react'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'

const faqs = [
  { q: 'What is schooling software?', a: 'Schooling software is a digital platform that enables schools to manage attendance, communication, academics, fees, and administration all from one system. SchoolMate is a modern schooling software that automates and updates daily school activities in real-time.' },
  { q: 'Why is SchoolMate the best student management system software?', a: 'SchoolMate is a complete student management system software that helps schools manage student records, attendance, exams, homework, and communication in an efficient manner with a centralized dashboard.' },
  { q: 'How does a school management system help schools?', a: 'A school management system easily simplifies school procedures like student attendance, fee tracking, timetables, and communication. It is paperless and productive. SchoolMate gives you cloud-based management tools.' },
  { q: 'What is the SchoolMate smartschool management system?', a: 'SchoolMate is a smartschool management system because it combines academics, communication, ERP, attendance, and transport management in a single smart platform that can be accessed from web and mobile apps.' },
  { q: 'How does the student attendance management system work?', a: "SchoolMate's student attendance management system allows teachers to take attendance electronically and notify parents immediately. Real-time attendance records are also available to schools." },
  { q: 'Is SchoolMate suitable for all types of schools?', a: 'Yes, SchoolMate is a complete education management system software that is designed for schools and institutions to manage academics, administration, attendance, and communication from one dashboard.' },
  { q: 'Does SchoolMate offer an online attendance system for students & teachers?', a: 'Yes, SchoolMate provides an online attendance system for students & teachers with instant attendance updates, class-wise reports, and mobile notifications for parents & staff.' },
  { q: 'Why is SchoolMate considered the best campus management software?', a: 'SchoolMate is the best campus management software that integrates attendance, communication, ERP, finance, and transport management on one secure platform.' },
  { q: 'How does SchoolMate work as a student database management system software?', a: 'SchoolMate provides a secure, centralized cloud-based student database management system software for storing student records, attendance, academic records, and fee details.' },
  { q: 'Can I use SchoolMate as student information management software?', a: 'Yes, SchoolMate is student information management software and student monitoring software that helps schools manage student data. It also supports education administration software and class attendance management system features for complete operational control.' },
]

export default function FAQSection() {
  const [open, setOpen] = useState(null)
  const [h, hv] = useScrollAnimation()
  const [l, lv] = useScrollAnimation(0.04)

  return (
    <section className="faq-section" id="faq">
      <div className="faq-inner-wide">
        <div ref={h} className={`faq-header sr${hv ? ' in' : ''}`}>
          <div className="chip chip-red"><HelpCircle size={12} /> FAQ</div>
          <h2 className="htitle">Got <em>Questions?</em> We Have Answers</h2>
          <p className="hsub center-text" style={{ margin: '0 auto' }}>Everything you need to know about SchoolMate and how it can help your institution go digital efficiently.</p>
        </div>

        <div ref={l} className={`faq-cols sr${lv ? ' in' : ''}`}>
          {Array.from({ length: 5 }, (_, i) => (
            <div className="faq-row" key={i}>
              {[faqs[i], faqs[i + 5]].map((f, col) => (
                <div key={f.q} className={`fq${open === i * 2 + col ? ' open' : ''}`}>
                  <button className="fq-q" onClick={() => setOpen(open === i * 2 + col ? null : i * 2 + col)}>
                    <span>{f.q}</span>
                    <div className="fq-ico"><Plus size={14} /></div>
                  </button>
                  <div className="fq-ans">
                    <div className="fq-ans-in">{f.a}</div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
