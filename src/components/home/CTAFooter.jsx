import { Link } from 'react-router-dom'
import logo from '../../assets/Logo.png'

// to: React Router Link path  |  href: plain anchor (same-page hash)
const footerLinks = [
  {
    title: 'Pages',
    links: [
      { label: 'Home',          to: '/'                                    },
      { label: 'About Us',      to: '/about'                               },
      { label: 'Mobile App',    to: '/smart-school-management-mobile-app'  },
      { label: 'Get Free Demo', to: '/#contact'                            },
    ],
  },
  {
    title: 'Features',
    links: [
      { label: 'What We Offer',         to: '/#features'                                        },
      { label: 'All Modules',           to: '/#modules'                                         },
      { label: 'Why SchoolMate',        to: '/#why'                                             },
      { label: 'App Features',          to: '/smart-school-management-mobile-app#features'      },
      { label: 'Mobile App FAQ',        to: '/smart-school-management-mobile-app#faq'           },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About Us',    to: '/about'          },
      { label: 'Our Mission', to: '/about#mission'  },
      { label: 'Our Vision',  to: '/about#vision'   },
      { label: 'Contact',     to: '/contact'         },
      { label: 'FAQ',         to: '/#faq'           },
    ],
  },
  {
    title: 'Support',
    links: [
      { label: 'Help Center',      to: '/contact'   },
      { label: 'Privacy Policy',   href: '#'       },
      { label: 'Terms of Service', href: '#'       },
      { label: 'Cookie Policy',    href: '#'       },
    ],
  },
]

const socials = [
  {
    label: 'Facebook', href: '#',
    svg: <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>,
  },
  {
    label: 'Twitter/X', href: '#',
    svg: <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>,
  },
  {
    label: 'LinkedIn', href: '#',
    svg: <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>,
  },
  {
    label: 'Instagram', href: '#',
    svg: <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>,
  },
]

export default function CTAFooter() {
  return (
    <>
      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-top">
            <div>
              <div className="f-brand-logo">
                <img src={logo} alt="SchoolMate" className="footer-logo-img" />
              </div>
              <p className="f-brand-desc">
                SchoolMate helps institutions modernize with scalable student database management,
                education administration software, and student monitoring solutions.
              </p>
              <div className="f-socials">
                {socials.map(({ svg, href, label }) => (
                  <a key={label} href={href} className="f-soc" aria-label={label}>
                    {svg}
                  </a>
                ))}
              </div>
            </div>

            {footerLinks.map(({ title, links }) => (
              <div key={title}>
                <h4 className="f-col-title">{title}</h4>
                <div className="f-links">
                  {links.map(({ label, to, href }) =>
                    to
                      ? <Link key={label} to={to}>{label}</Link>
                      : <a key={label} href={href}>{label}</a>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="footer-bottom">
            <p className="f-copy">© {new Date().getFullYear()} SchoolMate. All rights reserved.</p>
            <div className="f-bot-links">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
              <a href="#">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
