import { useEffect, useRef } from 'react'

// Animated card background: a muted looping clip that plays only while on screen
// (desktop). On touch/coarse pointers it stays a static poster (no autoplay) for
// performance and battery.
export default function CardMedia({ video, poster }) {
  const v = useRef(null)
  useEffect(() => {
    const el = v.current
    if (!el) return
    if (window.matchMedia && window.matchMedia('(pointer:coarse)').matches) return // poster only
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) { const p = el.play(); if (p && p.catch) p.catch(() => {}) }
        else el.pause()
      },
      { threshold: 0.25 }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])
  return (
    <video ref={v} className="dcard__vid" poster={poster} muted loop playsInline preload="none">
      <source src={video.replace(/\.mp4$/, '.webm')} type="video/webm" />
      <source src={video} type="video/mp4" />
    </video>
  )
}
