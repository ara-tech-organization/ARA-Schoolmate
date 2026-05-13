import { useEffect } from 'react'
import '../components/home/home.css'
import '../components/mobile/mobile.css'
import MobileHero      from '../components/mobile/MobileHero'
import MobileWhy       from '../components/mobile/MobileWhy'
import MobileFeatures  from '../components/mobile/MobileFeatures'
import MobileUsers     from '../components/mobile/MobileUsers'
import MobileControl   from '../components/mobile/MobileControl'
import MobilePrefer    from '../components/mobile/MobilePrefer'
import MobileFAQ       from '../components/mobile/MobileFAQ'

const META = {
  title:       'Best Smart School Management App | SchoolMate',
  description: 'SchoolMate is the best smart school management app and schooling app for attendance, communication, homework, fees, and school operations.',
  keywords:    'schooling app, student management system app, schoolmanagement app, smartschool management app, student attendance management app, education management app, online attendance system for students & teachers, online student attendance management app, best campus management app, eschool app, student online attendance management app, student database management app, student information management app, student monitoring app, education administration app, class attendance management app',
  canonical:   'https://www.araschoolmate.com/smart-school-management-mobile-app',
}

export default function MobileApp() {
  useEffect(() => {
    document.title = META.title

    const setMeta = (name, content) => {
      let el = document.querySelector(`meta[name="${name}"]`)
      if (!el) { el = document.createElement('meta'); el.name = name; document.head.appendChild(el) }
      el.content = content
    }
    setMeta('description', META.description)
    setMeta('keywords',    META.keywords)

    let canonical = document.querySelector('link[rel="canonical"]')
    if (!canonical) { canonical = document.createElement('link'); canonical.rel = 'canonical'; document.head.appendChild(canonical) }
    canonical.href = META.canonical

    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "What is schooling software?", "acceptedAnswer": { "@type": "Answer", "text": "Schooling software is a digital platform that enables schools to manage attendance, communication, academics, fees and administration all from one system. SchoolMate is a modern schooling software that automates and updates daily school activities in real-time." } },
        { "@type": "Question", "name": "Why is SchoolMate the best student management system software?", "acceptedAnswer": { "@type": "Answer", "text": "SchoolMate is a complete student management system software that helps schools manage student records, attendance, exams, homework, and communication in an efficient manner with a centralized dashboard." } },
        { "@type": "Question", "name": "How does a schoolmanagement system help schools?", "acceptedAnswer": { "@type": "Answer", "text": "School management system easily simplifies school procedures like students attendance, fee tracking, timetables, and communication. Paperless and productive. SchoolMate gives you cloud-based management tools." } },
        { "@type": "Question", "name": "What is the SchoolMate smartschool management system?", "acceptedAnswer": { "@type": "Answer", "text": "SchoolMate is a smartschool management system because it combines academics, communication, ERP, attendance and transport management in a single smart platform that can be accessed from web and mobile apps." } },
        { "@type": "Question", "name": "How does the student attendance management system work?", "acceptedAnswer": { "@type": "Answer", "text": "SchoolMate's student attendance management system allows teachers to take attendance electronically and notify parents immediately. Real-time attendance records are also available to schools." } },
        { "@type": "Question", "name": "Is SchoolMate school management system software suitable for all types of schools?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, SchoolMate is a complete education management system software which is designed for schools and institutions to manage academics, administration, attendance, and communication from one dashboard." } },
        { "@type": "Question", "name": "Does SchoolMate offer an online attendance system for students & teachers?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, SchoolMate provides an online attendance system for students & teachers with instant attendance updates, class-wise reports, mobile notifications for parents & staff." } },
        { "@type": "Question", "name": "Why is SchoolMate considered the best campus management software?", "acceptedAnswer": { "@type": "Answer", "text": "SchoolMate is the best campus management software that integrates attendance, communication, ERP, finance and transport management on one secure platform." } },
        { "@type": "Question", "name": "How does SchoolMate work as student database management system software?", "acceptedAnswer": { "@type": "Answer", "text": "SchoolMate provides a secure, centralized cloud-based student database management system software for storing student database management system software, attendance, academic records and fee details." } },
        { "@type": "Question", "name": "Can I use SchoolMate as a student information management software?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, SchoolMate is student information management software and student monitoring software in helping schools manage student data, also supports education administration software and class attendance management system features for complete operational control." } }
      ]
    }
    const faqScript = document.createElement('script')
    faqScript.type = 'application/ld+json'
    faqScript.id = 'faq-schema'
    faqScript.text = JSON.stringify(faqSchema)
    document.head.appendChild(faqScript)

    const faqSchema2 = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "What is the SchoolMate Mobile App?", "acceptedAnswer": { "@type": "Answer", "text": "SchoolMate Mobile App is a smart schooling software for schools, teachers, students, and parents to have attendance, communication, homework, fees & academics on a single platform." } },
        { "@type": "Question", "name": "How does the SchoolMate app work as a smart school management system?", "acceptedAnswer": { "@type": "Answer", "text": "SchoolMate is an intelligent school management system that provides Live attendance updates, instant notifications, access to timetable, fee management and easy communication between parents and school using mobile devices." } },
        { "@type": "Question", "name": "Does the SchoolMate app provide student attendance management system functionality?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, there is a student attendance management system in the SchoolMate app where teachers can mark attendance digitally, and parents get immediate attendance alerts and updates." } },
        { "@type": "Question", "name": "How is SchoolMate better than traditional school management system apps?", "acceptedAnswer": { "@type": "Answer", "text": "SchoolMate is not like a traditional school management system app. It provides cloud-based access, unlimited app notifications, real-time communication, digital consent forms, homework tracking, and integrated ERP features, all in one dashboard." } },
        { "@type": "Question", "name": "Is SchoolMate a student school management system software for teachers and parents?", "acceptedAnswer": { "@type": "Answer", "text": "SchoolMate is a complete student school management system software. SchoolMate helps parents to track student activities. Teachers handle attendance, homework, exams, and communication efficiently through the mobile app." } }
      ]
    }
    const faqScript2 = document.createElement('script')
    faqScript2.type = 'application/ld+json'
    faqScript2.id = 'faq-schema-2'
    faqScript2.text = JSON.stringify(faqSchema2)
    document.head.appendChild(faqScript2)

    return () => {
      document.title = 'SchoolMate'
      canonical.remove()
      document.getElementById('faq-schema')?.remove()
      document.getElementById('faq-schema-2')?.remove()
    }
  }, [])

  return (
    <>
      <MobileHero />
      <MobileWhy />
      <MobileFeatures />
      <MobileUsers />
      <MobileControl />
      <MobilePrefer />
      <MobileFAQ />
    </>
  )
}
