import { useEffect, useRef, useState } from 'react'
import { prefersReducedMotion } from '../lib/smoothScroll'

// Counts from 0 to `end` when it scrolls into view. Static if reduced-motion.
export default function CountUp({ end, prefix = '', suffix = '', duration = 1600 }) {
  const ref = useRef(null)
  const [v, setV] = useState(0)

  useEffect(() => {
    if (prefersReducedMotion()) {
      setV(end)
      return
    }
    const el = ref.current
    if (!el) return
    let raf
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          io.disconnect()
          const t0 = performance.now()
          const tick = (t) => {
            const p = Math.min(1, (t - t0) / duration)
            setV(Math.round(end * (1 - Math.pow(1 - p, 3)))) // easeOutCubic
            if (p < 1) raf = requestAnimationFrame(tick)
          }
          raf = requestAnimationFrame(tick)
        }
      },
      { threshold: 0.5 }
    )
    io.observe(el)
    return () => {
      io.disconnect()
      cancelAnimationFrame(raf)
    }
  }, [end, duration])

  return (
    <span ref={ref}>
      {prefix}
      {v}
      {suffix}
    </span>
  )
}
