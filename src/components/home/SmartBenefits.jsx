import {
  MessageSquare, Clock, BarChart2, Monitor,
  Smartphone, FileX, Shield, LayoutDashboard,
  Zap, Phone
} from 'lucide-react'

const BENEFITS = [
  {
    icon: MessageSquare,
    title: 'Faster School Communication',
    desc: 'Instant messaging between schools and parents through smart notifications and real-time alerts.',
    color: '#D91C27', bg: '#fff1f2',
  },
  {
    icon: Clock,
    title: 'Reduced Manual Workload',
    desc: 'Automate repetitive tasks and paperwork so teachers and staff can focus on what matters.',
    color: '#3b82f6', bg: '#eff6ff',
  },
  {
    icon: BarChart2,
    title: 'Smart Attendance Visibility',
    desc: 'Improved attendance tracking and reporting with digital records accessible anytime.',
    color: '#10b981', bg: '#f0fdf4',
  },
  {
    icon: Monitor,
    title: 'Real-Time Dashboard Updates',
    desc: 'Centralized school management with live updates across all departments and roles.',
    color: '#8b5cf6', bg: '#f5f3ff',
  },
  {
    icon: Smartphone,
    title: 'Parent Engagement via Mobile',
    desc: 'Increase parent involvement through mobile push notifications and activity feeds.',
    color: '#f59e0b', bg: '#fffbeb',
  },
  {
    icon: FileX,
    title: 'Paperless Administration',
    desc: 'Replace manual filing with cloud-based workflows for smarter, greener school operations.',
    color: '#06b6d4', bg: '#ecfeff',
  },
  {
    icon: Shield,
    title: 'Secure Cloud Infrastructure',
    desc: 'Enterprise-grade security with 99.9% uptime and end-to-end encrypted data storage.',
    color: '#D91C27', bg: '#fff1f2',
  },
  {
    icon: LayoutDashboard,
    title: 'Easy-to-Use Dashboard',
    desc: 'A clean, intuitive interface that anyone on your team can navigate from day one.',
    color: '#ec4899', bg: '#fdf2f8',
  },
  {
    icon: Zap,
    title: 'Fast Implementation',
    desc: 'Get your school up and running in days with our guided onboarding and support team.',
    color: '#f97316', bg: '#fff7ed',
  },
  {
    icon: Phone,
    title: 'Mobile-First Accessibility',
    desc: 'Full-featured mobile apps for parents, students, and staff on iOS and Android.',
    color: '#14b8a6', bg: '#f0fdfa',
  },
]

export default function SmartBenefits() {
  return (
    <section className="sb-section">
      {/* decorative background shapes */}
      <div className="sb-deco-ring sb-deco-ring-l" />
      <div className="sb-deco-ring sb-deco-ring-r" />
      <div className="sb-deco-diamond sb-dd-1" />
      <div className="sb-deco-diamond sb-dd-2" />
      <div className="sb-deco-diamond sb-dd-3" />

      <div className="wrap">
        {/* header */}
        <div className="sb-header">
          <div className="chip">Why SchoolMate</div>
          <h2 className="htitle sb-htitle">
            Benefits That Transform<br className="sb-br" /> Your School
          </h2>
          <p className="hsub sb-hsub">
            SchoolMate delivers measurable impact across every aspect of school management.
          </p>
        </div>

        {/* benefits grid */}
        <div className="sb-grid">
          {BENEFITS.map(({ icon: Icon, title, desc, color, bg }) => (
            <div className="sb-item" key={title}>
              <div className="sb-illus" style={{ background: bg }}>
                <div className="sb-illus-inner" style={{ color }}>
                  <Icon size={36} strokeWidth={1.7} />
                </div>
              </div>
              <div className="sb-text">
                <h3 className="sb-title">{title}</h3>
                <p className="sb-desc">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
