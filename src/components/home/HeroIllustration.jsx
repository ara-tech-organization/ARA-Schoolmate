export default function HeroIllustration() {
  return (
    <svg
      viewBox="0 0 460 500"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      overflow="hidden"
      style={{ width: '100%', height: 'auto', display: 'block' }}
      aria-label="SchoolMate dashboard preview"
    >
      <defs>
        <filter id="hi-card-sh" x="-10%" y="-8%" width="120%" height="120%">
          <feDropShadow dx="0" dy="8" stdDeviation="20" floodColor="#00000018" />
        </filter>
        <filter id="hi-float-sh" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="4" stdDeviation="10" floodColor="#00000014" />
        </filter>
        <clipPath id="hi-card-clip">
          <rect x="28" y="60" width="292" height="348" rx="18" />
        </clipPath>
      </defs>

      {/* background glow */}
      <circle cx="174" cy="238" r="200" fill="rgba(217,28,39,0.04)" />
      <circle cx="174" cy="238" r="130" fill="rgba(217,28,39,0.03)" />

      {/* ── MAIN DASHBOARD CARD ── */}
      <rect x="28" y="60" width="292" height="348" rx="18" fill="#ffffff" filter="url(#hi-card-sh)" />

      {/* red header */}
      <rect x="28" y="60" width="292" height="54" rx="18" fill="#D91C27" clipPath="url(#hi-card-clip)" />
      <rect x="28" y="90" width="292" height="24" fill="#D91C27" />

      {/* header logo mark */}
      <circle cx="52" cy="87" r="9" fill="rgba(255,255,255,0.22)" />
      <circle cx="52" cy="87" r="4.5" fill="white" />
      <text x="68" y="92" fontFamily="Poppins,sans-serif" fontSize="13.5" fontWeight="700" fill="white">SchoolMate</text>

      {/* header avatar */}
      <circle cx="298" cy="87" r="15" fill="rgba(255,255,255,0.18)" />
      <circle cx="298" cy="84" r="5.5" fill="rgba(255,255,255,0.65)" />
      <ellipse cx="298" cy="95" rx="7.5" ry="4.5" fill="rgba(255,255,255,0.4)" />

      {/* welcome text */}
      <text x="46" y="138" fontFamily="Poppins,sans-serif" fontSize="11.5" fontWeight="700" fill="#111111">Welcome, Principal</text>
      <text x="46" y="154" fontFamily="Poppins,sans-serif" fontSize="9.5" fill="#999999">Today's Overview · May 20, 2026</text>

      {/* stat chips */}
      <rect x="46" y="164" width="80" height="42" rx="10" fill="rgba(217,28,39,0.07)" />
      <text x="86" y="183" fontFamily="Poppins,sans-serif" fontSize="14" fontWeight="700" fill="#D91C27" textAnchor="middle">1,240</text>
      <text x="86" y="197" fontFamily="Poppins,sans-serif" fontSize="8.5" fill="#999999" textAnchor="middle">Students</text>

      <rect x="133" y="164" width="80" height="42" rx="10" fill="rgba(217,28,39,0.07)" />
      <text x="173" y="183" fontFamily="Poppins,sans-serif" fontSize="14" fontWeight="700" fill="#D91C27" textAnchor="middle">84</text>
      <text x="173" y="197" fontFamily="Poppins,sans-serif" fontSize="8.5" fill="#999999" textAnchor="middle">Teachers</text>

      <rect x="220" y="164" width="80" height="42" rx="10" fill="rgba(217,28,39,0.07)" />
      <text x="260" y="183" fontFamily="Poppins,sans-serif" fontSize="14" fontWeight="700" fill="#D91C27" textAnchor="middle">96%</text>
      <text x="260" y="197" fontFamily="Poppins,sans-serif" fontSize="8.5" fill="#999999" textAnchor="middle">Attendance</text>

      {/* divider */}
      <line x1="46" y1="218" x2="306" y2="218" stroke="rgba(0,0,0,0.08)" strokeWidth="1" />

      {/* recent activity */}
      <text x="46" y="237" fontFamily="Poppins,sans-serif" fontSize="10" fontWeight="700" fill="#333333">Recent Activity</text>

      <circle cx="57" cy="255" r="6" fill="rgba(217,28,39,0.1)" />
      <circle cx="57" cy="255" r="3" fill="#D91C27" />
      <text x="70" y="259" fontFamily="Poppins,sans-serif" fontSize="9.5" fill="#333333">Attendance marked · Class 8A</text>
      <text x="308" y="259" fontFamily="Poppins,sans-serif" fontSize="8" fill="#BBBBBB" textAnchor="end">9:02 AM</text>

      <circle cx="57" cy="276" r="6" fill="rgba(22,163,74,0.1)" />
      <circle cx="57" cy="276" r="3" fill="#16A34A" />
      <text x="70" y="280" fontFamily="Poppins,sans-serif" fontSize="9.5" fill="#333333">Fee collected · ₹45,000</text>
      <text x="308" y="280" fontFamily="Poppins,sans-serif" fontSize="8" fill="#BBBBBB" textAnchor="end">8:45 AM</text>

      <circle cx="57" cy="297" r="6" fill="rgba(59,130,246,0.1)" />
      <circle cx="57" cy="297" r="3" fill="#2563EB" />
      <text x="70" y="301" fontFamily="Poppins,sans-serif" fontSize="9.5" fill="#333333">New message from parent</text>
      <text x="308" y="301" fontFamily="Poppins,sans-serif" fontSize="8" fill="#BBBBBB" textAnchor="end">8:31 AM</text>

      {/* divider */}
      <line x1="46" y1="315" x2="306" y2="315" stroke="rgba(0,0,0,0.07)" strokeWidth="1" />

      {/* attendance bars */}
      <text x="46" y="333" fontFamily="Poppins,sans-serif" fontSize="10" fontWeight="700" fill="#333333">Attendance by Class</text>

      <text x="46" y="352" fontFamily="Poppins,sans-serif" fontSize="8.5" fill="#999999">Class 8</text>
      <rect x="83" y="344" width="182" height="7" rx="3.5" fill="#F0F0F0" />
      <rect x="83" y="344" width="166" height="7" rx="3.5" fill="#D91C27" />
      <text x="270" y="352" fontFamily="Poppins,sans-serif" fontSize="8" fontWeight="700" fill="#D91C27">91%</text>

      <text x="46" y="370" fontFamily="Poppins,sans-serif" fontSize="8.5" fill="#999999">Class 9</text>
      <rect x="83" y="362" width="182" height="7" rx="3.5" fill="#F0F0F0" />
      <rect x="83" y="362" width="175" height="7" rx="3.5" fill="#D91C27" opacity="0.75" />
      <text x="270" y="370" fontFamily="Poppins,sans-serif" fontSize="8" fontWeight="700" fill="#D91C27">96%</text>

      <text x="46" y="388" fontFamily="Poppins,sans-serif" fontSize="8.5" fill="#999999">Class 10</text>
      <rect x="83" y="380" width="182" height="7" rx="3.5" fill="#F0F0F0" />
      <rect x="83" y="380" width="158" height="7" rx="3.5" fill="#D91C27" opacity="0.5" />
      <text x="270" y="388" fontFamily="Poppins,sans-serif" fontSize="8" fontWeight="700" fill="#D91C27">87%</text>

      {/* ── FLOATING CARD 1 — Attendance notification (top-right, inside viewBox) ── */}
      <rect x="250" y="30" width="192" height="68" rx="12" fill="white" filter="url(#hi-float-sh)" />
      <rect x="250" y="30" width="4" height="68" rx="2" fill="#16A34A" />
      <circle cx="272" cy="64" r="12" fill="rgba(22,163,74,0.1)" />
      <polyline points="267,64 271,69 279,59" stroke="#16A34A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <text x="291" y="57" fontFamily="Poppins,sans-serif" fontSize="9.5" fontWeight="700" fill="#111111">Attendance Marked</text>
      <text x="291" y="70" fontFamily="Poppins,sans-serif" fontSize="8" fill="#999999">Class 8A · Just now</text>
      <text x="291" y="83" fontFamily="Poppins,sans-serif" fontSize="8" fontWeight="600" fill="#16A34A">96% Present</text>

      {/* ── FLOATING CARD 2 — Fee reminder (bottom-right, inside viewBox) ── */}
      <rect x="258" y="378" width="182" height="68" rx="12" fill="white" filter="url(#hi-float-sh)" />
      <rect x="258" y="378" width="4" height="68" rx="2" fill="#D91C27" />
      <circle cx="279" cy="412" r="12" fill="rgba(217,28,39,0.08)" />
      <text x="279" y="417" fontFamily="Poppins,sans-serif" fontSize="14" fill="#D91C27" textAnchor="middle">₹</text>
      <text x="298" y="405" fontFamily="Poppins,sans-serif" fontSize="9.5" fontWeight="700" fill="#111111">Fee Reminder</text>
      <text x="298" y="418" fontFamily="Poppins,sans-serif" fontSize="8" fill="#D91C27">23 pending dues</text>
      <text x="298" y="431" fontFamily="Poppins,sans-serif" fontSize="8" fill="#BBBBBB">Action needed</text>

      {/* ── "500+ Schools" pill ── */}
      <rect x="28" y="34" width="128" height="22" rx="11" fill="#D91C27" />
      <circle cx="44" cy="45" r="4" fill="rgba(255,255,255,0.35)" />
      <circle cx="44" cy="45" r="2" fill="white" />
      <text x="54" y="50" fontFamily="Poppins,sans-serif" fontSize="8.5" fontWeight="700" fill="white">500+ Schools Trust Us</text>
    </svg>
  )
}
