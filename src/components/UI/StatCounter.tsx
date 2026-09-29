import { useEffect, useRef, useState } from 'react'

interface StatCounterProps {
  value: number
  suffix?: string
  label: string
  duration?: number
}

export default function StatCounter({ value, suffix = '', label, duration = 1800 }: StatCounterProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [count, setCount] = useState(0)
  const [started, setStarted] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started) {
            setStarted(true)
          }
        })
      },
      { threshold: 0.3 },
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [started])

  useEffect(() => {
    if (!started) return
    let raf = 0
    const start = performance.now()
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.round(eased * value))
      if (progress < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [started, value, duration])

  return (
    <div ref={ref} className="text-center">
      <div className="font-extrabold tracking-tight text-white text-3xl md:text-4xl lg:text-5xl">
        {count.toLocaleString('en-IN')}
        <span className="text-amber">{suffix}</span>
      </div>
      <div className="mt-2 text-sm font-medium uppercase tracking-wider text-navy-100">
        {label}
      </div>
    </div>
  )
}
