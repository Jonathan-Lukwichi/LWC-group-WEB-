import { useEffect, useRef } from 'react'

// Second hero: a phone-framed 9:16 MOVING video (auto-plays while on screen) with a
// headline beside it. Plays only in view to save resources.
export default function PhoneHero({ video, poster, kicker, title, sub }) {
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

  return (
    <section className="phero">
      <div className="container phero__grid">
        <div className="phero__txt">
          {kicker && <div className="kicker">{kicker}</div>}
          <h2 className="h2 phero__title">{title}</h2>
          <div className="rule" />
          {sub && <p className="lead">{sub}</p>}
        </div>
        <div className="phone">
          <div className="phone__notch" />
          <video ref={v} className="phone__cv" poster={poster && poster.endsWith('.jpg') ? poster.slice(0, -4) + '-960.webp' : poster} muted loop playsInline preload="none">
            <source src={video.replace(/\.mp4$/, '.webm')} type="video/webm" />
            <source src={video} type="video/mp4" />
          </video>
        </div>
      </div>
    </section>
  )
}
