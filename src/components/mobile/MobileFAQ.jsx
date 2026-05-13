import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'

const faqs = [
  {
    q: 'What is the SchoolMate Mobile App?',
    a: 'SchoolMate Mobile App is a smart schooling software for schools, teachers, students, and parents to have attendance, communication, homework, fees & academics on a single platform.',
  },
  {
    q: 'How does the SchoolMate app work as a smart school management system?',
    a: 'SchoolMate is an intelligent school management system that provides Live attendance updates, instant notifications, access to timetable, fee management and easy communication between parents and school using mobile devices.',
  },
  {
    q: 'Does the SchoolMate app provide student attendance management system functionality?',
    a: 'Yes, there is a student attendance management system in the SchoolMate app where teachers can mark attendance digitally, and parents get immediate attendance alerts and updates.',
  },
  {
    q: 'How is SchoolMate better than traditional school management system apps?',
    a: 'SchoolMate is not like a traditional school management system app. It provides cloud-based access, unlimited app notifications, real-time communication, digital consent forms, homework tracking, and integrated ERP features, all in one dashboard.',
  },
  {
    q: 'Is SchoolMate a student school management system software for teachers and parents?',
    a: 'SchoolMate is a complete student school management system software. SchoolMate helps parents to track student activities. Teachers handle attendance, homework, exams, and communication efficiently through the mobile app.',
  },
]

export default function MobileFAQ() {
  const [open, setOpen] = useState(null)
  const [hRef, hVis] = useScrollAnimation(0.05)
  const [lRef, lVis] = useScrollAnimation(0.07)

  const toggle = i => setOpen(prev => (prev === i ? null : i))

  return (
    <section className="mob-faq" id="faq">
      <div className="wrap mob-faq-inner">

        <div ref={hRef} className={`mob-sec-head sr${hVis ? ' in' : ''}`}>
          <div className="mob-section-num mob-section-num-center">06</div>
          <div className="mob-chip chip chip-red">FAQs</div>
          <h2 className="mob-sec-h2 htitle">
            Frequently Asked Questions (FAQs)
          </h2>
        </div>

        <div ref={lRef} className={`mob-faq-list sr${lVis ? ' in' : ''}`}>
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`mob-faq-item${open === i ? ' mob-faq-open' : ''}`}
            >
              <button
                className="mob-faq-q"
                onClick={() => toggle(i)}
                aria-expanded={open === i}
              >
                <h4 className="mob-faq-q-text">{faq.q}</h4>
                <ChevronDown
                  size={18}
                  className={`mob-faq-chevron${open === i ? ' mob-faq-chevron-open' : ''}`}
                />
              </button>
              <div className={`mob-faq-answer${open === i ? ' mob-faq-answer-open' : ''}`}>
                <p className="mob-faq-answer-text">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
