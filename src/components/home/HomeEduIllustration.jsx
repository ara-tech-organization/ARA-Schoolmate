export default function HomeEduIllustration() {
  return (
    <div className="hei-wrap" aria-hidden="true">
      <svg viewBox="0 0 400 360" xmlns="http://www.w3.org/2000/svg" className="hei-svg">

        {/* ── GRADUATION CAP (top-left) ── */}
        <g transform="translate(38, 28)">
          {/* hat top block */}
          <rect x="26" y="0" width="40" height="32" rx="4" fill="#1a1a1a" />
          {/* brim / board */}
          <ellipse cx="46" cy="32" rx="60" ry="13" fill="#1a1a1a" />
          {/* tassel string */}
          <line x1="106" y1="32" x2="118" y2="60" stroke="#1a1a1a" strokeWidth="2.5" strokeLinecap="round" />
          {/* tassel knot */}
          <circle cx="118" cy="63" r="4" fill="#f59e0b" />
          {/* tassel fringe */}
          <line x1="114" y1="67" x2="111" y2="80" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" />
          <line x1="118" y1="67" x2="118" y2="82" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" />
          <line x1="122" y1="67" x2="125" y2="80" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" />
        </g>

        {/* ── "Empowering Education" TEXT ── */}
        <text x="44" y="148" fontFamily="Poppins, sans-serif" fontWeight="800" fontSize="21" fill="#111111">Empowering</text>
        <text x="44" y="174" fontFamily="Poppins, sans-serif" fontWeight="800" fontSize="21" fill="#111111">Education</text>

        {/* ── DOTTED ARC PATHS between stacks ── */}
        <path d="M 88 318 Q 132 264 176 318" fill="none" stroke="#bbb" strokeWidth="2" strokeDasharray="5,5" />
        <path d="M 176 318 Q 238 244 296 318" fill="none" stroke="#bbb" strokeWidth="2" strokeDasharray="5,5" />

        {/* ── BOOK STACK 1 (shortest) x=58 ── */}
        <g>
          <rect x="58"  y="304" width="60" height="14" rx="3" fill="#3b82f6" />
          <rect x="62"  y="290" width="52" height="15" rx="3" fill="#10b981" />
          <rect x="58"  y="277" width="60" height="14" rx="3" fill="#fbbf24" />
        </g>

        {/* ── BOOK STACK 2 (medium) x=148 ── */}
        <g>
          <rect x="148" y="304" width="66" height="14" rx="3" fill="#8b5cf6" />
          <rect x="152" y="288" width="58" height="17" rx="3" fill="#ef4444" />
          <rect x="148" y="272" width="66" height="17" rx="3" fill="#f59e0b" />
          <rect x="152" y="257" width="58" height="16" rx="3" fill="#10b981" />
        </g>

        {/* ── BOOK STACK 3 (tallest) x=240 ── */}
        <g>
          <rect x="240" y="304" width="72" height="14" rx="3" fill="#3b82f6" />
          <rect x="244" y="286" width="64" height="19" rx="3" fill="#ec4899" />
          <rect x="240" y="267" width="72" height="20" rx="3" fill="#fbbf24" />
          <rect x="244" y="248" width="64" height="20" rx="3" fill="#ef4444" />
          <rect x="240" y="230" width="72" height="19" rx="3" fill="#10b981" />
        </g>

        {/* ── SUPERHERO GRADUATE (top-right, flying up) ── */}
        <g transform="translate(268, 18)">
          {/* graduation cap */}
          <rect x="12" y="0" width="28" height="18" rx="2" fill="#1a1a1a" />
          <ellipse cx="26" cy="18" rx="38" ry="9" fill="#1a1a1a" />
          {/* tassel */}
          <line x1="64" y1="18" x2="72" y2="36" stroke="#1a1a1a" strokeWidth="1.5" strokeLinecap="round" />
          <circle cx="72" cy="39" r="3" fill="#f59e0b" />

          {/* head */}
          <circle cx="26" cy="44" r="16" fill="#f4a261" />
          {/* face highlights */}
          <circle cx="21" cy="41" r="2.5" fill="rgba(0,0,0,.15)" />
          <circle cx="31" cy="41" r="2.5" fill="rgba(0,0,0,.15)" />

          {/* body — gown (blue) */}
          <path d="M 10 60 L 4 130 L 48 130 L 42 60 Z" fill="#1e3a8a" rx="4" />
          {/* gown collar */}
          <path d="M 14 60 L 26 72 L 38 60 Z" fill="#1e40af" />

          {/* cape (red, trailing behind/down) */}
          <path d="M 10 60 Q -18 100 -10 150 L 4 130 Q -2 105 10 88 Z" fill="#dc2626" />

          {/* right arm — raised up diagonally */}
          <line x1="42" y1="72" x2="80" y2="34" stroke="#1e3a8a" strokeWidth="10" strokeLinecap="round" />
          {/* right hand (fist) */}
          <circle cx="83" cy="31" r="9" fill="#f4a261" />
          {/* left arm — stretched out */}
          <line x1="10" y1="72" x2="-16" y2="88" stroke="#1e3a8a" strokeWidth="9" strokeLinecap="round" />
          <circle cx="-19" cy="90" r="7" fill="#f4a261" />

          {/* legs floating / angled up */}
          <line x1="22" y1="130" x2="12" y2="164" stroke="#1e3a8a" strokeWidth="9" strokeLinecap="round" />
          <line x1="34" y1="130" x2="46" y2="162" stroke="#1e3a8a" strokeWidth="9" strokeLinecap="round" />
          {/* shoes */}
          <ellipse cx="10" cy="168" rx="10" ry="6" fill="#1a1a1a" />
          <ellipse cx="48" cy="166" rx="10" ry="6" fill="#1a1a1a" />

          {/* motion lines (speed streaks) */}
          <line x1="-8" y1="50" x2="-30" y2="46" stroke="#d1d5db" strokeWidth="2" strokeLinecap="round" />
          <line x1="-6" y1="62" x2="-34" y2="60" stroke="#d1d5db" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="-10" y1="74" x2="-28" y2="73" stroke="#d1d5db" strokeWidth="1" strokeLinecap="round" />
        </g>

      </svg>
    </div>
  )
}
