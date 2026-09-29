import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { ChevronRight, CheckCircle2 } from 'lucide-react'

interface PageHeroProps {
  title: string
  subtitle?: string
  breadcrumbs?: { label: string; to?: string }[]
  children?: ReactNode
  badge?: string
}

export function PageHero({ title, subtitle, breadcrumbs = [], children, badge }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-navy pt-28 pb-16 md:pt-36 md:pb-20">
      <div className="absolute inset-0 hero-grid-bg opacity-40" />
      <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-electric-500/20 blur-3xl" />
      <div className="absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-amber/10 blur-3xl" />
      <div className="container-rsipl relative">
        {breadcrumbs.length > 0 && (
          <nav className="mb-5 flex flex-wrap items-center gap-1.5 text-xs font-medium text-navy-100/70">
            {breadcrumbs.map((b, i) => (
              <span key={i} className="inline-flex items-center gap-1.5">
                {b.to ? (
                  <Link to={b.to} className="hover:text-amber">{b.label}</Link>
                ) : (
                  <span>{b.label}</span>
                )}
                {i < breadcrumbs.length - 1 && <ChevronRight className="h-3 w-3" />}
              </span>
            ))}
          </nav>
        )}
        {badge && (
          <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-amber-100 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-amber-700">
            {badge}
          </span>
        )}
        <h1 className="max-w-3xl text-3xl font-extrabold leading-tight text-white md:text-5xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-navy-100/85 md:text-lg">
            {subtitle}
          </p>
        )}
        {children && <div className="mt-8">{children}</div>}
      </div>
    </section>
  )
}

interface SectionProps {
  children: ReactNode
  className?: string
  dark?: boolean
}

export function Section({ children, className = '', dark = false }: SectionProps) {
  return (
    <section className={`section-pad ${dark ? 'bg-navy text-navy-100' : 'bg-white'} ${className}`}>
      <div className="container-rsipl">{children}</div>
    </section>
  )
}

interface SectionHeadingProps {
  eyebrow?: string
  title: string
  description?: string
  center?: boolean
  light?: boolean
}

export function SectionHeading({ eyebrow, title, description, center = false, light = false }: SectionHeadingProps) {
  return (
    <div className={`max-w-3xl ${center ? 'mx-auto text-center' : ''}`}>
      {eyebrow && (
        <p className={`text-xs font-bold uppercase tracking-[0.2em] ${light ? 'text-amber' : 'text-electric-600'}`}>
          {eyebrow}
        </p>
      )}
      <h2 className={`mt-2 text-2xl font-extrabold leading-tight md:text-4xl ${light ? 'text-white' : 'text-navy'}`}>
        {title}
      </h2>
      {description && (
        <p className={`mt-4 text-base leading-relaxed ${light ? 'text-navy-100/80' : 'text-navy-300'}`}>
          {description}
        </p>
      )}
    </div>
  )
}

interface CtaBannerProps {
  title: string
  description?: string
  buttonText?: string
  buttonTo?: string
}

export function CtaBanner({ title, description, buttonText = 'Request RFQ', buttonTo = '/rfq' }: CtaBannerProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-electric-700 via-electric-600 to-navy py-16 md:py-20">
      <div className="absolute inset-0 hero-grid-bg opacity-20" />
      <div className="container-rsipl relative flex flex-col items-center gap-6 text-center md:flex-row md:justify-between md:text-left">
        <div>
          <h2 className="text-2xl font-extrabold text-white md:text-3xl">{title}</h2>
          {description && <p className="mt-3 max-w-2xl text-navy-100/85">{description}</p>}
        </div>
        <Link
          to={buttonTo}
          className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-amber px-7 py-4 text-sm font-bold text-navy shadow-lg shadow-amber-900/20 transition-all hover:bg-amber-300 hover:shadow-xl"
        >
          {buttonText}
        </Link>
      </div>
    </section>
  )
}

interface ChecklistGridProps {
  items: string[]
  columns?: 2 | 3 | 4
}

export function ChecklistGrid({ items, columns = 2 }: ChecklistGridProps) {
  const colClass = {
    2: 'sm:grid-cols-2',
    3: 'sm:grid-cols-2 lg:grid-cols-3',
    4: 'sm:grid-cols-2 lg:grid-cols-4',
  }[columns]

  return (
    <div className={`grid gap-3 ${colClass}`}>
      {items.map((item) => (
        <div key={item} className="flex items-start gap-3 rounded-xl border border-navy-50 bg-white p-4 shadow-sm">
          <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-electric-600" />
          <span className="text-sm font-medium text-navy">{item}</span>
        </div>
      ))}
    </div>
  )
}
