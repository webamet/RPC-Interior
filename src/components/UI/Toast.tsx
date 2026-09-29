import { useEffect } from 'react'
import { CheckCircle2, XCircle, X } from 'lucide-react'

interface ToastProps {
  message: string
  type: 'success' | 'error'
  onClose: () => void
}

export default function Toast({ message, type, onClose }: ToastProps) {
  useEffect(() => {
    const t = setTimeout(onClose, 5000)
    return () => clearTimeout(t)
  }, [onClose])

  const styles =
    type === 'success'
      ? 'bg-white border-emerald-200 text-emerald-900'
      : 'bg-white border-red-200 text-red-900'

  return (
    <div className="fixed bottom-6 right-6 z-[100] animate-toast-in">
      <div className={`flex items-start gap-3 rounded-xl border ${styles} px-5 py-4 shadow-2xl`}>
        {type === 'success' ? (
          <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-600" />
        ) : (
          <XCircle className="h-5 w-5 shrink-0 text-red-600" />
        )}
        <p className="text-sm font-medium leading-snug">{message}</p>
        <button onClick={onClose} className="ml-2 text-navy-300 hover:text-navy">
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  )
}
