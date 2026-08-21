import { useEffect, useRef, useState } from 'react'
import { useFrameScrub } from '../lib/useFrameScrub'

// Full-bleed horizontal hero whose footage advances ONLY as you scroll (desktop),
// and collapses to a single static screen on touch / small viewports.
// If `captions` is passed, it renders scroll-synced stage captions (a persistent
// label up top, the changing caption at the bottom) instead of one static title —
// so the two never overlap. Never traps scroll; canvas is not focusable.
export default function ScrollHero({ frames, kicker, title, sub, heightVh = 320, heading = 'h1', id, captions }) {
  const sec = useRef(null)
  const cv = useRef(null)
  const [cap, setCap] = useState(0)
  useFrameScrub(sec, cv, frames.dir, frames.count)

  useEffect(() => {
    if (!captions) return
    let raf = 0
    const onScroll = () => {
      if (raf) return
      raf = requestAnimationFrame(() => {
        raf = 0
        const el = sec.current
        if (!el) return
        const total = el.offsetHeight - window.innerHeight
        const p = Math.min(Math.max(-el.getBoundingClientRect().top / (total || 1), 0), 1)
        const i = Math.min(captions.length - 1, Math.max(0, Math.floor(p * captions.length)))
        setCap((c) => (c === i ? c : i))
      })
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => { window.removeEventListener('scroll', onScroll); if (raf) cancelAnimationFrame(raf) }
  }, [captions])

  const H = heading
  return (
    <section ref={sec} id={id} className="shero" style={{ '--shero-h': `${heightVh}vh` }}>
      <div className="shero__stick">
        <canvas ref={cv} className="shero__cv" aria-hidden="true" />
        <div className="shero__veil" />
        {captions ? (
          <>
            {kicker && <div className="shero__label">{kicker}</div>}
            <div className="shero__caps">
              {captions.map((c, i) => (
                <div key={i} className={`shero__cap ${i === cap ? 'on' : ''}`}>
                  <h2 className="h2">{c.t}</h2>
                  {c.p && <p className="lead">{c.p}</p>}
                </div>
              ))}
            </div>
          </>
        ) : (
          <div className="container shero__in">
            {kicker && <div className="kicker">{kicker}</div>}
            <H className={heading === 'h1' ? 'display shero__title' : 'h2 shero__title'}>{title}</H>
            {sub && <p className="shero__sub">{sub}</p>}
          </div>
        )}
      </div>
    </section>
  )
}
