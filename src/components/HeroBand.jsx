import { useEffect, useRef } from 'react'

// Full-viewport cinematic "hero band" with a looping video background + a bold
// centered statement. Used as an immersive break between content sections.
// The clip auto-plays only while the band is on screen (saves CPU/battery).
export default function HeroBand({ video, poster, kicker, title, sub, cta, align = 'center' }) {
  const v = useRef(null)
  useEffect(() => {
    const el = v.current
    if (!el) return
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
    <section className={`band band--${align}`}>
      <video ref={v} className="band__bg" poster={poster.endsWith('.jpg') ? poster.slice(0, -4) + '-960.webp' : poster} muted loop playsInline preload="none">
        <source src={video.replace(/\.mp4$/, '.webm')} type="video/webm" />
        <source src={video} type="video/mp4" />
      </video>
      <div className="band__veil" />
      <div className="container band__in">
        {kicker && <div className="kicker">{kicker}</div>}
        <h2 className="band__title display">{title}</h2>
        {sub && <p className="band__sub">{sub}</p>}
        {cta && <a className="btn band__cta" href={cta.href}>{cta.label}</a>}
      </div>
    </section>
  )
}
