import { Zap } from 'lucide-react'

interface LogoProps {
  variant?: 'light' | 'dark'
  className?: string
}

export default function Logo({ variant = 'light', className = '' }: LogoProps) {
  const textColor = variant === 'light' ? 'text-white' : 'text-navy'
  const subColor = variant === 'light' ? 'text-electric-200' : 'text-electric-600'

  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-electric-500 to-electric-700 shadow-md shadow-electric-900/20">
        <Zap className="h-5 w-5 text-white" strokeWidth={2.5} />
      </span>
      <span className="flex flex-col leading-none">
        <span className={`font-extrabold tracking-tight ${textColor}`}>RSIPL INDIA</span>
        <span className={`text-[10px] font-medium uppercase tracking-[0.18em] ${subColor}`}>
          Ramsang Infrastructure
        </span>
      </span>
    </span>
  )
}
