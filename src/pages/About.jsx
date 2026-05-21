import { useEffect } from 'react'
import '../components/home/home.css'
import '../components/about/about.css'
import AboutHero    from '../components/about/AboutHero'
import AboutStory   from '../components/about/AboutStory'
import AboutMission from '../components/about/AboutMission'
import AboutVision  from '../components/about/AboutVision'

const META = {
  title:       'About Us | SchoolMate',
  description: 'SchoolMate developed by Ara Discoveries is a smart schooling software and smartschool management system for modern school administration.',
  keywords:    'schooling software, student management system software, school management system, smartschool management system, student attendance management system, education management system software, online attendance system for students & teachers, online student attendance management software system, best campus management software, eschool software, student online attendance management software system, student database management system software, student information management software, student monitoring software, education administration software, class attendance management system',
  canonical:   'https://www.araschoolmate.com/about.html',
}

export default function About() {
  useEffect(() => {
    document.title = META.title

    const setMeta = (name, content) => {
      let el = document.querySelector(`meta[name="${name}"]`)
      if (!el) { el = document.createElement('meta'); el.name = name; document.head.appendChild(el) }
      el.content = content
    }
    setMeta('description', META.description)
    setMeta('keywords',    META.keywords)

    const setOg = (prop, content) => {
      let el = document.querySelector(`meta[property="${prop}"]`)
      if (!el) { el = document.createElement('meta'); el.setAttribute('property', prop); document.head.appendChild(el) }
      el.content = content
    }
    setOg('og:title',       META.title)
    setOg('og:description', META.description)
    setOg('og:url',         'https://www.araschoolmate.com/about')
    setOg('og:type',        'website')

    let canonical = document.querySelector('link[rel="canonical"]')
    if (!canonical) { canonical = document.createElement('link'); canonical.rel = 'canonical'; document.head.appendChild(canonical) }
    canonical.href = META.canonical

    return () => {
      document.title = 'SchoolMate'
      canonical.remove()
    }
  }, [])

  return (
    <>
      <AboutHero />
      <AboutStory />
      <AboutMission />
      <AboutVision />
    </>
  )
}
