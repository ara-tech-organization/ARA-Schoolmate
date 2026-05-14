import { useEffect } from 'react'
import '../components/home/home.css'
import HeroBanner      from '../components/home/HeroBanner'
import TrustSection    from '../components/home/TrustSection'
import WhyChoose       from '../components/home/WhyChoose'
import WhatWeOffer     from '../components/home/WhatWeOffer'
import AllInOnePlatform from '../components/home/AllInOnePlatform'
import ModulesSection  from '../components/home/ModulesSection'
import PowerfulFeatures from '../components/home/PowerfulFeatures'
import SmartFeatures   from '../components/home/SmartFeatures'
import Testimonials    from '../components/home/Testimonials'
import WhyStandOut     from '../components/home/WhyStandOut'
import AdvancedSection from '../components/home/AdvancedSection'
import FAQSection      from '../components/home/FAQSection'

export default function Home() {
  useEffect(() => {
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [{
        "@type": "Question",
        "name": "What is schooling software?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Schooling software is a digital platform that enables schools to manage attendance, communication, academics, fees and administration all from one system. SchoolMate is a modern schooling software that automates and updates daily school activities in real-time."
        }
      },{
        "@type": "Question",
        "name": "Why is SchoolMate the best student management system software?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "SchoolMate is a complete student management system software that helps schools manage student records, attendance, exams, homework, and communication in an efficient manner with a centralized dashboard."
        }
      },{
        "@type": "Question",
        "name": "How does a schoolmanagement system help schools?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "School management system easily simplifies school procedures like students attendance, fee tracking, timetables, and communication. Paperless and productive. SchoolMate gives you cloud-based management tools."
        }
      },{
        "@type": "Question",
        "name": "What is the SchoolMate smartschool management system?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "SchoolMate is a smartschool management system because it combines academics, communication, ERP, attendance and transport management in a single smart platform that can be accessed from web and mobile apps."
        }
      },{
        "@type": "Question",
        "name": "How does the student attendance management system work?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "SchoolMate’s student attendance management system allows teachers to take attendance electronically and notify parents immediately. Real-time attendance records are also available to schools."
        }
      },{
        "@type": "Question",
        "name": "Is SchoolMate school management system software suitable for all types of schools?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, SchoolMate is a complete education management system software which is designed for schools and institutions to manage academics, administration, attendance, and communication from one dashboard."
        }
      },{
        "@type": "Question",
        "name": "Does SchoolMate offer an online attendance system for students & teachers?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, SchoolMate provides an online attendance system for students & teachers with instant attendance updates, class-wise reports, mobile notifications for parents & staff."
        }
      },{
        "@type": "Question",
        "name": "Why is SchoolMate considered the best campus management software?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "SchoolMate is the best campus management software that integrates attendance, communication, ERP, finance and transport management on one secure platform."
        }
      },{
        "@type": "Question",
        "name": "How does SchoolMate work as student database management system software?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "SchoolMate provides a secure, centralized cloud-based student database management system software for storing student database management system software, attendance, academic records and fee details."
        }
      },{
        "@type": "Question",
        "name": "Can I use SchoolMate as a student information management software?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, SchoolMate is student information management software and student monitoring software in helping schools manage student data, also supports education administration software and class attendance management system features for complete operational control."
        }
      }]
    };

    document.title = 'Best Smart School Management System | SchoolMate';
    const setMeta = (name, content) => {
      let el = document.querySelector(`meta[name="${name}"]`);
      if (!el) { el = document.createElement('meta'); el.name = name; document.head.appendChild(el); }
      el.content = content;
    };
    setMeta('description', 'SchoolMate is a smart schooling software and student school management system with attendance, ERP, communication, and smartschool management system tools.');
    setMeta('keywords', 'schooling software, student management system software, school management system, smartschool management system, student attendance management system, education management system software, online attendance system for students & teachers, online student attendance management software system, best campus management software, eschool software, student online attendance management software system, student database management system software, student information management software, student monitoring software, education administration software, class attendance management system, education management erp, smartschool erp');

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = 'home-faq-schema';
    script.innerHTML = JSON.stringify(faqSchema);
    document.head.appendChild(script);

    return () => {
      document.title = 'SchoolMate';
      const existingScript = document.getElementById('home-faq-schema');
      if (existingScript) existingScript.remove();
    };
  }, []);

  return (
    <>
      <HeroBanner />
      <TrustSection />
      <WhyChoose />
      <WhatWeOffer />
      <AllInOnePlatform />
      <ModulesSection />
      <PowerfulFeatures />
      <SmartFeatures />
      <Testimonials />
      <WhyStandOut />
      <AdvancedSection />
      <FAQSection />
    </>
  )
}
