import { Link } from 'react-router-dom'
import { Loader2 } from 'lucide-react'
import type { ReactNode } from 'react'

type Variant = 'primary' | 'secondary' | 'outline' | 'ghost'

interface ButtonProps {
  children: ReactNode
  to?: string
  href?: string
  onClick?: () => void
  type?: 'button' | 'submit'
  variant?: Variant
  className?: string
  disabled?: boolean
  loading?: boolean
  fullWidth?: boolean
}

const variants: Record<Variant, string> = {
  primary: 'bg-amber text-navy hover:bg-amber-300 shadow-md shadow-amber-600/20',
  secondary: 'bg-electric-500 text-white hover:bg-electric-600 shadow-md shadow-electric-900/20',
  outline: 'border border-white/70 text-white hover:bg-white/10',
  ghost: 'text-navy hover:bg-navy-50',
}

export default function Button({
  children,
  to,
  href,
  onClick,
  type = 'button',
  variant = 'primary',
  className = '',
  disabled = false,
  loading = false,
  fullWidth = false,
}: ButtonProps) {
  const base = `inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 text-sm font-bold tracking-wide transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-electric-400 focus:ring-offset-2 ${
    fullWidth ? 'w-full' : ''
  } ${disabled || loading ? 'cursor-not-allowed opacity-60' : 'cursor-pointer'}`

  const content = (
    <>
      {loading && <Loader2 className="h-4 w-4 animate-spin" />}
      {children}
    </>
  )

  if (to) {
    return (
      <Link to={to} className={`${base} ${variants[variant]} ${className}`}>
        {content}
      </Link>
    )
  }
  if (href) {
    return (
      <a href={href} className={`${base} ${variants[variant]} ${className}`}>
        {content}
      </a>
    )
  }
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={`${base} ${variants[variant]} ${className}`}
    >
      {content}
    </button>
  )
}
