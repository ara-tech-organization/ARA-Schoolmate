import { Star, Quote } from 'lucide-react'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'

const testimonials = [
  { text: 'Communication with parents was faster and more structured. SchoolMate transformed how we interact with our school community — it is simply outstanding.', name: 'Rajesh Kumar', role: 'Principal, Delhi Public School', init: 'R' },
  { text: 'Tracking attendance is now flawless. Real-time data for every student and staff member in our institution.', name: 'Priya Sharma', role: 'Academic Coordinator, Sunrise Academy', init: 'P' },
  { text: 'The real-time alerts and reporting tools enhanced transparency throughout our institution. Parents love the instant updates.', name: 'Mohammed Iqbal', role: 'Director, Al-Ameen School', init: 'M' },
  { text: 'SchoolMate made our management so easy — from fees to academics and transport. One platform for everything we need.', name: 'Anjali Nair', role: 'Administrator, Greenwood Public School', init: 'A' },
]

export default function Testimonials() {
  const [h, hv]     = useScrollAnimation()
  const [hero, hVis] = useScrollAnimation()
  const [g, gv]     = useScrollAnimation(0.06)

  const featured = testimonials[0]
  const rest     = testimonials.slice(1)

  return (
    <section className="testi2-section">
      <div className="testi2-inner">

        <div ref={h} className={`testi2-header sr${hv ? ' in' : ''}`}>
          <div className="chip chip-red"><Star size={12} /> Testimonials</div>
          <h2 className="htitle">What <em>Schools Say</em> About SchoolMate</h2>
          <p className="hsub">Many institutions prefer SchoolMate as their schooling software because it is reliable, flexible, and easy to use.</p>
        </div>

        <div ref={hero} className={`testi2-hero sr${hVis ? ' in' : ''}`}>
          <div className="testi2-hero-img-wrap">
            <img
              src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1200&q=70"
              alt="School campus"
              className="testi2-hero-img"
            />
            <div className="testi2-hero-overlay" />
          </div>
          <div className="testi2-hero-content">
            <div className="testi2-quote-icon"><Quote size={52} color="rgba(255,255,255,.15)" /></div>
            <div className="testi2-hero-stars">
              {[...Array(5)].map((_, i) => <Star key={i} size={20} fill="#ffffff" color="#ffffff" />)}
            </div>
            <p className="testi2-hero-text">"{featured.text}"</p>
            <div className="testi2-hero-author">
              <div className="testi2-ava testi2-ava-lg">{featured.init}</div>
              <div>
                <p className="testi2-name">{featured.name}</p>
                <p className="testi2-role">{featured.role}</p>
              </div>
            </div>
          </div>
        </div>

        <div ref={g} className={`testi2-grid sr${gv ? ' in' : ''}`}>
          {rest.map((t, i) => (
            <div className="t2c" key={t.name} style={{ transitionDelay: `${i * 0.12}s` }}>
              <div className="t2c-top">
                <div className="t2c-stars">
                  {[...Array(5)].map((_, j) => <Star key={j} size={13} fill="var(--red)" color="var(--red)" />)}
                </div>
                <div className="t2c-quote-mark">"</div>
              </div>
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

      </div>
    </section>
  )
}
