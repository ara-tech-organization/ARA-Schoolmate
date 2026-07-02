export default function HomeEduIllustration() {
  return (
    <div className="hei-wrap" aria-hidden="true">
      <style>{`
        @keyframes hei-float    { 0%,100%{transform:translateY(0)}  50%{transform:translateY(-12px)} }
        @keyframes hei-float2   { 0%,100%{transform:translateY(0)}  50%{transform:translateY(-8px)}  }
        @keyframes hei-float3   { 0%,100%{transform:translateY(0)}  50%{transform:translateY(-6px)}  }
        @keyframes hei-spin     { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }
        @keyframes hei-spin-rev { from{transform:rotate(360deg)} to{transform:rotate(0deg)} }
        @keyframes hei-pulse    { 0%,100%{opacity:.4;transform:scale(1)} 50%{opacity:.9;transform:scale(1.08)} }
        @keyframes hei-dash     { to{stroke-dashoffset:-40} }
        @keyframes hei-pop      { 0%,100%{transform:scale(1)} 50%{transform:scale(1.06)} }
        @keyframes hei-glow     { 0%,100%{filter:drop-shadow(0 0 6px #3b5bdb44)} 50%{filter:drop-shadow(0 0 18px #3b5bdb99)} }

        .hei-core     { animation: hei-float  4s ease-in-out infinite; transform-origin:200px 200px; }
        .hei-ring1    { animation: hei-spin   18s linear infinite;     transform-origin:200px 200px; }
        .hei-ring2    { animation: hei-spin-rev 24s linear infinite;   transform-origin:200px 200px; }
        .hei-card1    { animation: hei-float2 3.2s ease-in-out infinite; }
        .hei-card2    { animation: hei-float3 4.1s ease-in-out infinite 0.6s; }
        .hei-card3    { animation: hei-float2 3.7s ease-in-out infinite 1.1s; }
        .hei-card4    { animation: hei-float3 4.4s ease-in-out infinite 0.3s; }
        .hei-badge    { animation: hei-pop    2.8s ease-in-out infinite; }
        .hei-cap      { animation: hei-float  5s  ease-in-out infinite 0.4s; }
        .hei-cloud    { animation: hei-float2 6s  ease-in-out infinite 1.2s; }
        .hei-dot-ring { animation: hei-dash   1.8s linear infinite; }
        .hei-glow-el  { animation: hei-glow   3s  ease-in-out infinite; }
        .hei-pulse-el { animation: hei-pulse  2.4s ease-in-out infinite; }
      `}</style>

      <svg viewBox="0 0 440 440" xmlns="http://www.w3.org/2000/svg"
           className="hei-svg" style={{width:'100%',height:'100%',overflow:'visible'}}>
        <defs>
          {/* gradients */}
          <radialGradient id="gCore" cx="50%" cy="50%" r="50%">
            <stop offset="0%"   stopColor="#eef2ff"/>
            <stop offset="100%" stopColor="#c7d2fe"/>
          </radialGradient>
          <radialGradient id="gCoreInner" cx="40%" cy="35%" r="60%">
            <stop offset="0%"   stopColor="#ffffff"/>
            <stop offset="100%" stopColor="#dde4ff"/>
          </radialGradient>
          <linearGradient id="gBlue" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%"   stopColor="#4f6ef7"/>
            <stop offset="100%" stopColor="#3b5bdb"/>
          </linearGradient>
          <linearGradient id="gRed" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%"   stopColor="#ff6b6b"/>
            <stop offset="100%" stopColor="#d91c27"/>
          </linearGradient>
          <linearGradient id="gGreen" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%"   stopColor="#69db7c"/>
            <stop offset="100%" stopColor="#2f9e44"/>
          </linearGradient>
          <linearGradient id="gOrange" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%"   stopColor="#ffd43b"/>
            <stop offset="100%" stopColor="#f59f00"/>
          </linearGradient>
          <linearGradient id="gPurple" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%"   stopColor="#cc5de8"/>
            <stop offset="100%" stopColor="#862e9c"/>
          </linearGradient>
          <linearGradient id="gCard1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%"   stopColor="#ffffff" stopOpacity="0.95"/>
            <stop offset="100%" stopColor="#f0f4ff" stopOpacity="0.92"/>
          </linearGradient>
          <linearGradient id="gRing1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%"   stopColor="#4f6ef7" stopOpacity="0.5"/>
            <stop offset="50%"  stopColor="#d91c27" stopOpacity="0.3"/>
            <stop offset="100%" stopColor="#4f6ef7" stopOpacity="0.5"/>
          </linearGradient>
          <linearGradient id="gSchool" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%"   stopColor="#4f6ef7"/>
            <stop offset="100%" stopColor="#3b5bdb"/>
          </linearGradient>
          <linearGradient id="gLaptop" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%"   stopColor="#1a1f3c"/>
            <stop offset="100%" stopColor="#2c3366"/>
          </linearGradient>
          <linearGradient id="gScreen" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%"   stopColor="#0d1b4b"/>
            <stop offset="100%" stopColor="#1a2f6e"/>
          </linearGradient>
          <filter id="fShadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="6" stdDeviation="8" floodColor="#3b5bdb" floodOpacity="0.18"/>
          </filter>
          <filter id="fShadowSm" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="3" stdDeviation="5" floodColor="#000" floodOpacity="0.12"/>
          </filter>
          <filter id="fGlow">
            <feGaussianBlur stdDeviation="4" result="blur"/>
            <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>
          <clipPath id="cpScreen">
            <rect x="3" y="2" width="54" height="36" rx="3"/>
          </clipPath>
          <clipPath id="cpCard">
            <rect width="94" height="56" rx="12"/>
          </clipPath>
        </defs>

        {/* ══ OUTER AMBIENT GLOW ══ */}
        <circle cx="220" cy="220" r="175" fill="#eef2ff" opacity="0.35"/>
        <circle cx="220" cy="220" r="145" fill="#dde4ff" opacity="0.28"/>

        {/* ══ DASHED ORBIT RINGS ══ */}
        <circle cx="220" cy="220" r="158" fill="none"
                stroke="url(#gRing1)" strokeWidth="1.2"
                strokeDasharray="6 5" className="hei-ring1"/>
        <circle cx="220" cy="220" r="132" fill="none"
                stroke="#4f6ef7" strokeWidth="0.8" strokeOpacity="0.25"
                strokeDasharray="4 6" className="hei-ring2"/>

        {/* ══ RING ORBIT DOTS ══ */}
        {[0,60,120,180,240,300].map((deg,i) => {
          const r=158, cx=220, cy=220
          const rad = deg*Math.PI/180
          const x = cx + r*Math.cos(rad)
          const y = cy + r*Math.sin(rad)
          const colors=['#4f6ef7','#d91c27','#2f9e44','#f59f00','#cc5de8','#4f6ef7']
          return <circle key={i} cx={x} cy={y} r="4" fill={colors[i]} opacity="0.7"/>
        })}

        {/* ══ CORE CIRCLE ══ */}
        <g className="hei-core hei-glow-el" filter="url(#fShadow)">
          <circle cx="220" cy="220" r="100" fill="url(#gCore)"/>
          <circle cx="220" cy="220" r="100" fill="none" stroke="#4f6ef7"
                  strokeWidth="2" strokeOpacity="0.3"/>
          <circle cx="220" cy="220" r="88"  fill="url(#gCoreInner)" opacity="0.9"/>

          {/* ── SCHOOL BUILDING (inside core) ── */}
          <g transform="translate(170,165)">
            {/* main building */}
            <rect x="8"  y="26" width="84" height="54" rx="3" fill="url(#gSchool)"/>
            {/* roof triangle */}
            <polygon points="50,8 6,28 94,28" fill="#3b5bdb"/>
            <polygon points="50,8 6,28 94,28" fill="url(#gBlue)" opacity="0.6"/>
            {/* flag pole */}
            <line x1="50" y1="8" x2="50" y2="0" stroke="#fff" strokeWidth="2"/>
            <rect x="50" y="0" width="14" height="8" rx="1" fill="#d91c27"/>
            {/* windows row 1 */}
            <rect x="18" y="36" width="14" height="14" rx="2" fill="#bfdbfe" opacity="0.9"/>
            <rect x="43" y="36" width="14" height="14" rx="2" fill="#bfdbfe" opacity="0.9"/>
            <rect x="68" y="36" width="14" height="14" rx="2" fill="#bfdbfe" opacity="0.9"/>
            {/* door */}
            <rect x="36" y="58" width="28" height="22" rx="3" fill="#1e3a8a"/>
            <circle cx="60" cy="70" r="2" fill="#ffd43b"/>
            {/* pillars */}
            <rect x="14" y="48" width="5" height="32" rx="1" fill="#3b5bdb" opacity="0.5"/>
            <rect x="81" y="48" width="5" height="32" rx="1" fill="#3b5bdb" opacity="0.5"/>
            {/* steps */}
            <rect x="4"  y="79" width="92" height="4"  rx="1" fill="#6483f5"/>
            <rect x="0"  y="83" width="100" height="3" rx="1" fill="#7c96f7"/>
          </g>
        </g>

        {/* ══ CARD 1 — top-left: Attendance ══ */}
        <g className="hei-card1" transform="translate(22,68)" filter="url(#fShadowSm)">
          <rect width="118" height="66" rx="14" fill="url(#gCard1)"
                stroke="#e0e7ff" strokeWidth="1.2"/>
          {/* icon bg */}
          <rect x="10" y="10" width="28" height="28" rx="8" fill="url(#gBlue)"/>
          {/* calendar icon */}
          <rect x="14" y="14" width="20" height="20" rx="3" fill="#fff" opacity="0.25"/>
          <rect x="14" y="14" width="20" height="5"  rx="2" fill="#fff" opacity="0.6"/>
          <line x1="18" y1="24" x2="18" y2="28" stroke="#fff" strokeWidth="1.5"/>
          <line x1="22" y1="24" x2="22" y2="28" stroke="#fff" strokeWidth="1.5"/>
          <line x1="26" y1="24" x2="26" y2="28" stroke="#fff" strokeWidth="1.5"/>
          <line x1="30" y1="24" x2="30" y2="28" stroke="#fff" strokeWidth="1.5"/>
          {/* text lines */}
          <rect x="46" y="12" width="58" height="7" rx="3.5" fill="#4f6ef7" opacity="0.8"/>
          <rect x="46" y="24" width="44" height="5" rx="2.5" fill="#a5b4fc" opacity="0.7"/>
          {/* progress bar */}
          <rect x="10" y="48" width="98" height="6" rx="3" fill="#e0e7ff"/>
          <rect x="10" y="48" width="74" height="6" rx="3" fill="url(#gBlue)"/>
          <text x="112" y="55" fontFamily="Poppins,sans-serif" fontSize="5"
                fill="#4f6ef7" textAnchor="end" fontWeight="700">94%</text>
        </g>

        {/* ══ CARD 2 — top-right: Notifications ══ */}
        <g className="hei-card2" transform="translate(300,52)" filter="url(#fShadowSm)">
          <rect width="110" height="62" rx="14" fill="url(#gCard1)"
                stroke="#ffe4e6" strokeWidth="1.2"/>
          {/* bell icon bg */}
          <rect x="10" y="10" width="26" height="26" rx="8" fill="url(#gRed)"/>
          {/* bell */}
          <path d="M23 13 Q23 12 23.5 12 Q31 12 31 20 L31 24 L33 26 L15 26 L17 24 L17 20 Q17 12 22.5 12 Q23 12 23 13Z"
                fill="#fff" opacity="0.9" transform="translate(-10,-1)"/>
          <rect x="19" y="27" width="6" height="2.5" rx="1.5"
                fill="#fff" opacity="0.8" transform="translate(-3,-3)"/>
          {/* notification dot */}
          <circle cx="32" cy="12" r="5" fill="#ffd43b"/>
          <text x="32" y="15" fontFamily="Poppins,sans-serif" fontSize="5.5"
                fill="#1a1a1a" textAnchor="middle" fontWeight="700">3</text>
          {/* lines */}
          <rect x="44" y="14" width="52" height="6"  rx="3"   fill="#d91c27" opacity="0.7"/>
          <rect x="44" y="24" width="38" height="4.5" rx="2.2" fill="#fca5a5" opacity="0.6"/>
          {/* mini rows */}
          <circle cx="16" cy="50" r="4" fill="#fee2e2"/>
          <rect x="24" y="47" width="50" height="4" rx="2" fill="#fca5a5" opacity="0.5"/>
          <circle cx="16" cy="58" r="4" fill="#dbeafe"/>
          <rect x="24" y="55" width="36" height="4" rx="2" fill="#a5b4fc" opacity="0.5"/>
        </g>

        {/* ══ CARD 3 — bottom-left: Fee Chart ══ */}
        <g className="hei-card3" transform="translate(18,292)" filter="url(#fShadowSm)">
          <rect width="122" height="72" rx="14" fill="url(#gCard1)"
                stroke="#d1fae5" strokeWidth="1.2"/>
          {/* icon */}
          <rect x="10" y="10" width="26" height="26" rx="8" fill="url(#gGreen)"/>
          <line x1="14" y1="32" x2="14" y2="20" stroke="#fff" strokeWidth="2.5" strokeLinecap="round"/>
          <line x1="20" y1="32" x2="20" y2="16" stroke="#fff" strokeWidth="2.5" strokeLinecap="round"/>
          <line x1="26" y1="32" x2="26" y2="22" stroke="#fff" strokeWidth="2.5" strokeLinecap="round"/>
          <line x1="32" y1="32" x2="32" y2="13" stroke="#fff" strokeWidth="2.5" strokeLinecap="round"/>
          {/* label */}
          <rect x="44" y="12" width="64" height="6"  rx="3"   fill="#2f9e44" opacity="0.8"/>
          <rect x="44" y="22" width="46" height="4.5" rx="2.2" fill="#69db7c" opacity="0.6"/>
          {/* spark line */}
          <polyline points="10,60 28,52 46,56 64,44 82,48 100,38 110,42"
                    fill="none" stroke="url(#gGreen)" strokeWidth="2.2" strokeLinecap="round"/>
          <circle cx="110" cy="42" r="3.5" fill="#2f9e44"/>
          <circle cx="64"  cy="44" r="2.5" fill="#2f9e44" opacity="0.5"/>
        </g>

        {/* ══ CARD 4 — bottom-right: Students ══ */}
        <g className="hei-card4" transform="translate(308,300)" filter="url(#fShadowSm)">
          <rect width="114" height="66" rx="14" fill="url(#gCard1)"
                stroke="#ede9fe" strokeWidth="1.2"/>
          {/* icon */}
          <rect x="10" y="10" width="26" height="26" rx="8" fill="url(#gPurple)"/>
          {/* two person silhouettes */}
          <circle cx="19" cy="17" r="4"   fill="#fff" opacity="0.9"/>
          <path d="M11 29 Q11 22 19 22 Q27 22 27 29Z" fill="#fff" opacity="0.7"/>
          <circle cx="28" cy="17" r="3.5" fill="#e9d8fd" opacity="0.9"/>
          <path d="M21 29 Q21 23 28 23 Q35 23 35 29Z" fill="#e9d8fd" opacity="0.55"/>
          {/* stat */}
          <rect x="44" y="12" width="56" height="6"  rx="3"   fill="#862e9c" opacity="0.7"/>
          <rect x="44" y="22" width="38" height="4.5" rx="2.2" fill="#cc5de8" opacity="0.5"/>
          {/* avatar stack */}
          {[0,1,2,3].map(i=>(
            <circle key={i} cx={14+i*12} cy={52} r="9"
                    fill={['#4f6ef7','#d91c27','#2f9e44','#f59f00'][i]}
                    stroke="#fff" strokeWidth="2"/>
          ))}
          <rect x="66" y="44" width="36" height="16" rx="8" fill="#f3e8ff"/>
          <text x="84" y="55" fontFamily="Poppins,sans-serif" fontSize="7"
                fill="#862e9c" textAnchor="middle" fontWeight="700">2.4k+</text>
        </g>

        {/* ══ GRADUATION CAP (top-center floating) ══ */}
        <g className="hei-cap" transform="translate(182,18)">
          <filter id="fCapShadow">
            <feDropShadow dx="0" dy="4" stdDeviation="6" floodColor="#3b5bdb" floodOpacity="0.25"/>
          </filter>
          <g filter="url(#fCapShadow)">
            {/* cap board */}
            <ellipse cx="38" cy="22" rx="38" ry="10" fill="#1a1f3c"/>
            {/* cap top */}
            <rect x="20" y="4" width="36" height="20" rx="3" fill="#1a1f3c"/>
            {/* cap shine */}
            <ellipse cx="38" cy="4" rx="16" ry="3" fill="#fff" opacity="0.1"/>
            {/* tassel string */}
            <line x1="72" y1="22" x2="82" y2="44" stroke="#f59f00" strokeWidth="2.2" strokeLinecap="round"/>
            <circle cx="82" cy="47" r="4" fill="#f59f00"/>
            <line x1="79" y1="51" x2="76" y2="62" stroke="#f59f00" strokeWidth="1.8" strokeLinecap="round"/>
            <line x1="82" y1="51" x2="82" y2="64" stroke="#f59f00" strokeWidth="1.8" strokeLinecap="round"/>
            <line x1="85" y1="51" x2="88" y2="62" stroke="#f59f00" strokeWidth="1.8" strokeLinecap="round"/>
          </g>
        </g>

        {/* ══ CLOUD + WIFI — left-mid ══ */}
        <g className="hei-cloud" transform="translate(12,186)">
          <filter id="fCloudShadow">
            <feDropShadow dx="0" dy="3" stdDeviation="5" floodColor="#4f6ef7" floodOpacity="0.2"/>
          </filter>
          <g filter="url(#fCloudShadow)">
            <ellipse cx="40" cy="26" rx="30" ry="16" fill="url(#gCard1)"/>
            <ellipse cx="22" cy="30" rx="16" ry="12" fill="url(#gCard1)"/>
            <ellipse cx="60" cy="30" rx="18" ry="13" fill="url(#gCard1)"/>
            <rect    x="4"  y="28" width="70" height="18" rx="4" fill="url(#gCard1)"/>
            {/* wifi arcs */}
            <path d="M28 44 Q40 36 52 44" fill="none" stroke="#4f6ef7" strokeWidth="2.2" strokeLinecap="round"/>
            <path d="M32 48 Q40 43 48 48" fill="none" stroke="#4f6ef7" strokeWidth="2.2" strokeLinecap="round"/>
            <circle cx="40" cy="52" r="2.5" fill="#4f6ef7"/>
          </g>
        </g>

        {/* ══ BOOK STACK — right-mid ══ */}
        <g className="hei-card2" transform="translate(368,180)">
          <rect x="0"  y="32" width="52" height="10" rx="2.5" fill="#4f6ef7"/>
          <rect x="4"  y="22" width="44" height="11" rx="2.5" fill="#d91c27"/>
          <rect x="0"  y="12" width="52" height="11" rx="2.5" fill="#f59f00"/>
          <rect x="4"  y="2"  width="44" height="11" rx="2.5" fill="#2f9e44"/>
          {/* spine lines */}
          <line x1="6"  y1="4"  x2="6"  y2="12" stroke="#fff" strokeWidth="1.2" opacity="0.4"/>
          <line x1="6"  y1="14" x2="6"  y2="22" stroke="#fff" strokeWidth="1.2" opacity="0.4"/>
          <line x1="6"  y1="24" x2="6"  y2="32" stroke="#fff" strokeWidth="1.2" opacity="0.4"/>
          <line x1="6"  y1="34" x2="6"  y2="42" stroke="#fff" strokeWidth="1.2" opacity="0.4"/>
        </g>

        {/* ══ LAPTOP — bottom-center floating ══ */}
        <g className="hei-card3" transform="translate(148,332)">
          <filter id="fLaptopShadow">
            <feDropShadow dx="0" dy="5" stdDeviation="8" floodColor="#1a1f3c" floodOpacity="0.22"/>
          </filter>
          <g filter="url(#fLaptopShadow)">
            {/* screen */}
            <rect x="0"  y="0"  width="62" height="42" rx="4" fill="url(#gLaptop)"/>
            <rect x="3"  y="3"  width="56" height="33" rx="2" fill="url(#gScreen)"/>
            {/* screen content: mini dashboard bars */}
            <rect x="6"  y="7"  width="50" height="3"  rx="1.5" fill="#4f6ef7" opacity="0.7"/>
            <rect x="6"  y="12" width="20" height="10" rx="2"   fill="#1e3a8a" opacity="0.8"/>
            <rect x="6"  y="24" width="8"  height="10" rx="1.5" fill="#2f9e44" opacity="0.8"/>
            <rect x="17" y="20" width="8"  height="14" rx="1.5" fill="#4f6ef7" opacity="0.8"/>
            <rect x="28" y="17" width="8"  height="17" rx="1.5" fill="#d91c27" opacity="0.8"/>
            <polyline points="33,14 38,10 44,12 50,7"
                      fill="none" stroke="#ffd43b" strokeWidth="1.5" strokeLinecap="round"/>
            <circle cx="50" cy="7" r="1.8" fill="#ffd43b"/>
            {/* hinge */}
            <rect x="0"  y="42" width="62" height="3"  rx="1" fill="#2c3366"/>
            {/* base */}
            <rect x="-8" y="44" width="78" height="6"  rx="3" fill="#1a1f3c"/>
            <rect x="18" y="42" width="26" height="3"   rx="1" fill="#111827"/>
          </g>
        </g>

        {/* ══ STAR BADGE — left-top ══ */}
        <g className="hei-badge" transform="translate(72,40)">
          <circle cx="18" cy="18" r="18" fill="url(#gOrange)" opacity="0.95"/>
          <polygon points="18,6 21,15 30,15 23,20 26,29 18,24 10,29 13,20 6,15 15,15"
                   fill="#fff" opacity="0.95"/>
        </g>

        {/* ══ SHIELD BADGE — right-bottom ══ */}
        <g className="hei-badge hei-pulse-el" transform="translate(330,370)">
          <path d="M18 2 L34 8 L34 22 Q34 32 18 38 Q2 32 2 22 L2 8 Z"
                fill="url(#gBlue)" opacity="0.95"/>
          <path d="M18 4 L32 10 L32 22 Q32 30 18 36 Q4 30 4 22 L4 10 Z"
                fill="#4f6ef7" opacity="0.6"/>
          {/* tick */}
          <polyline points="10,20 16,26 27,14" fill="none" stroke="#fff"
                    strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        </g>

        {/* ══ MINI PIE CHART — top-right orbit ══ */}
        <g className="hei-card1" transform="translate(356,108)">
          <circle cx="24" cy="24" r="24" fill="url(#gCard1)"
                  stroke="#e0e7ff" strokeWidth="1.5"/>
          <circle cx="24" cy="24" r="14" fill="none"
                  stroke="#e0e7ff" strokeWidth="10"/>
          <circle cx="24" cy="24" r="14" fill="none"
                  stroke="url(#gBlue)" strokeWidth="10"
                  strokeDasharray="35 44" strokeDashoffset="-11"/>
          <circle cx="24" cy="24" r="14" fill="none"
                  stroke="url(#gRed)" strokeWidth="10"
                  strokeDasharray="18 61" strokeDashoffset="-46"/>
          <circle cx="24" cy="24" r="7"  fill="#fff"/>
        </g>

        {/* ══ CONNECTING DOTS (animated) ══ */}
        <line x1="136" y1="68" x2="186" y2="118" stroke="#a5b4fc" strokeWidth="1"
              strokeDasharray="4 4" className="hei-dot-ring"/>
        <line x1="302" y1="62" x2="282" y2="110" stroke="#fca5a5" strokeWidth="1"
              strokeDasharray="4 4" className="hei-dot-ring"/>
        <line x1="136" y1="300" x2="175" y2="288" stroke="#a7f3d0" strokeWidth="1"
              strokeDasharray="4 4" className="hei-dot-ring"/>
        <line x1="304" y1="308" x2="290" y2="286" stroke="#ddd6fe" strokeWidth="1"
              strokeDasharray="4 4" className="hei-dot-ring"/>

        {/* ══ SMALL FLOATING PARTICLES ══ */}
        <circle cx="90"  cy="140" r="5" fill="#4f6ef7" opacity="0.4" className="hei-pulse-el"/>
        <circle cx="348" cy="166" r="4" fill="#d91c27" opacity="0.4" className="hei-pulse-el"/>
        <circle cx="76"  cy="360" r="5" fill="#2f9e44" opacity="0.4" className="hei-pulse-el"/>
        <circle cx="354" cy="260" r="4" fill="#f59f00" opacity="0.4" className="hei-pulse-el"/>
        <circle cx="212" cy="50"  r="3" fill="#cc5de8" opacity="0.5" className="hei-pulse-el"/>
        <circle cx="244" cy="56"  r="3" fill="#4f6ef7" opacity="0.5" className="hei-pulse-el"/>

        {/* ══ SUBTLE HEXAGONS ══ */}
        <polygon points="382,226 390,222 398,226 398,234 390,238 382,234"
                 fill="none" stroke="#4f6ef7" strokeWidth="1.5" strokeOpacity="0.35" className="hei-card4"/>
        <polygon points="42,246 50,242 58,246 58,254 50,258 42,254"
                 fill="none" stroke="#d91c27" strokeWidth="1.5" strokeOpacity="0.35" className="hei-card3"/>

      </svg>
    </div>
  )
}
