import { useEffect, useRef } from 'react'

// Second hero: a MOVING video inside a device frame (phone 9:16 or tablet 4:3),
// placed on the right (default) or left, with a headline beside it. The clip
// auto-plays only while on screen.
export default function PhoneHero({ video, poster, kicker, title, sub, variant = 'phone', side = 'right' }) {
  const v = useRef(null)
  useEffect(() => {
    const el = v.current
    if (!el) return
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) { const p = el.play(); if (p && p.catch) p.catch(() => {}) }
        else el.pause()
      },
      { threshold: 0.2 }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  const isTablet = variant === 'tablet'
  const frameClass = isTablet ? 'tablet' : 'phone'
  const camClass = isTablet ? 'tablet__cam' : 'phone__notch'
  const vidClass = isTablet ? 'tablet__cv' : 'phone__cv'
  const posterSrc = poster && poster.endsWith('.jpg') ? poster.slice(0, -4) + '-960.webp' : poster

  return (
    <section className={`phero phero--${side}`}>
      <div className="container phero__grid">
        <div className="phero__txt">
          {kicker && <div className="kicker">{kicker}</div>}
          <h2 className="h2 phero__title">{title}</h2>
          <div className="rule" />
          {sub && <p className="lead">{sub}</p>}
        </div>
        <div className={frameClass}>
          <div className={camClass} />
          <video ref={v} className={vidClass} poster={posterSrc} muted loop playsInline preload="none">
            <source src={video.replace(/\.mp4$/, '.webm')} type="video/webm" />
            <source src={video} type="video/mp4" />
          </video>
        </div>
      </div>
    </section>
  )
}
