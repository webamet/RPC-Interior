import { Link } from 'react-router-dom'
import { ArrowRight, type LucideIcon } from 'lucide-react'

interface ServiceCardProps {
  icon: LucideIcon
  title: string
  description: string
  to: string
  accent?: 'electric' | 'amber' | 'navy'
}

const accents = {
  electric: 'from-electric-500 to-electric-700',
  amber: 'from-amber to-amber-600',
  navy: 'from-navy to-navy-700',
}

export default function ServiceCard({ icon: Icon, title, description, to, accent = 'electric' }: ServiceCardProps) {
  return (
    <Link
      to={to}
      className="group relative flex flex-col rounded-2xl border border-navy-50 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-electric-200 hover:shadow-xl hover:shadow-electric-900/10"
    >
      <div className={`mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${accents[accent]} shadow-md`}>
        <Icon className="h-6 w-6 text-white" strokeWidth={2} />
      </div>
      <h3 className="text-lg font-bold text-navy">{title}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-navy-300">{description}</p>
      <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-electric-600 transition-all group-hover:gap-2.5">
        Learn More <ArrowRight className="h-4 w-4" />
      </span>
    </Link>
  )
}
