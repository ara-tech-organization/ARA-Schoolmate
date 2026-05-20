import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'
import { useRef, useEffect, useCallback } from 'react'

const testimonials = [
  { text: 'Communication with parents was faster and more structured. SchoolMate transformed how we interact with our school community — it is simply outstanding.', name: 'Divya Nair',        role: 'Principal',           init: 'D' },
  { text: 'Tracking attendance is now flawless. Real-time data for every student and staff member in our institution.',                                              name: 'Karthik Srinivasan', role: 'Academic Coordinator', init: 'K' },
  { text: 'The real-time alerts and reporting tools enhanced transparency throughout our institution. Parents love the instant updates.',                             name: 'Pooja Menon',        role: 'Director',            init: 'P' },
  { text: 'SchoolMate made our management so easy, from fees to academics and transport. One platform for everything we need.',                                      name: 'Harish Kumar',       role: 'Administrator',       init: 'H' },
  { text: 'Many institutions prefer SchoolMate because it is reliable, flexible, and easy to use. The best school management platform we have used.',               name: 'Arjun Kumar',        role: 'School Manager',      init: 'A' },
]

/* render originals + clone for seamless loop */
const allCards = [...testimonials, ...testimonials]
const CARD_W   = 276   // 260px card + 16px gap
const SET_W    = testimonials.length * CARD_W  // total width of one set

export default function Testimonials() {
  const [h, hv]      = useScrollAnimation()
  const [hero, hVis] = useScrollAnimation()
  const [g, gv]      = useScrollAnimation(0.06)
  const trackRef     = useRef(null)
  const timerRef     = useRef(null)
  const pausedRef    = useRef(false)

  /* silently reset to original set when clone is reached */
  const checkLoop = useCallback(() => {
    const el = trackRef.current
    if (!el) return
    if (el.scrollLeft >= SET_W) {
      el.scrollLeft -= SET_W   // instant jump, no animation
    }
  }, [])

  const tick = useCallback(() => {
    if (pausedRef.current || !trackRef.current) return
    trackRef.current.scrollBy({ left: CARD_W, behavior: 'smooth' })
    /* check loop after smooth scroll finishes (~500ms) */
    setTimeout(checkLoop, 520)
  }, [checkLoop])

  const startAuto = useCallback(() => {
    clearInterval(timerRef.current)
    timerRef.current = setInterval(tick, 4500)
  }, [tick])

  const stopAuto = useCallback(() => {
    clearInterval(timerRef.current)
  }, [])

  useEffect(() => {
    startAuto()
    return () => stopAuto()
  }, [startAuto, stopAuto])

  const handleArrow = (dir) => {
    if (!trackRef.current) return
    trackRef.current.scrollBy({ left: dir * CARD_W, behavior: 'smooth' })
    setTimeout(checkLoop, 520)
    /* restart timer so it doesn't fire too soon after manual click */
    stopAuto()
    startAuto()
  }

  return (
    <section className="testi2-section">
      <div className="testi2-inner">

        {/* Chip */}
        <div ref={h} className={`testi2-header sr${hv ? ' in' : ''}`}>
          <div className="chip chip-red"><Star size={12} /> Testimonials</div>
        </div>

        {/* Hero image with heading + subtitle inside */}
        <div ref={hero} className={`testi2-hero sr${hVis ? ' in' : ''}`}>
          <div className="testi2-hero-img-wrap">
            <img
              src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1200&q=70"
              alt="School campus"
              className="testi2-hero-img"
            />
            <div className="testi2-hero-overlay" />
          </div>
          <div className="testi2-hero-center">
            <h2 className="testi2-hero-heading">What <em>Schools Say</em> About SchoolMate</h2>
            <p className="testi2-hero-sub">Many institutions prefer SchoolMate as their schooling software because it is reliable, flexible, and easy to use.</p>
          </div>
        </div>

        {/* Infinite carousel */}
        <div ref={g} className={`testi2-carousel sr${gv ? ' in' : ''}`}>
          <button className="testi2-arrow" onClick={() => handleArrow(-1)} aria-label="Previous">
            <ChevronLeft size={20} />
          </button>

          <div
            className="testi2-grid"
            ref={trackRef}
            onMouseEnter={() => { pausedRef.current = true }}
            onMouseLeave={() => { pausedRef.current = false }}
          >
            {allCards.map((t, i) => (
              <div className="t2c" key={i}>
                <div className="t2c-stars">
                  {[...Array(5)].map((_, j) => <Star key={j} size={12} fill="var(--red)" color="var(--red)" />)}
                </div>
                <Quote size={16} className="t2c-quote-icon" />
                <p className="t2c-text">"{t.text}"</p>
                <div className="t2c-author">
                  <div className="t2c-ava">{t.init}</div>
                  <div>
                    <p className="t2c-name">{t.name}</p>
                    <p className="t2c-role">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button className="testi2-arrow" onClick={() => handleArrow(1)} aria-label="Next">
            <ChevronRight size={20} />
          </button>
        </div>

      </div>
    </section>
  )
}
