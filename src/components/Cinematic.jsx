import { useEffect, useRef, useState } from 'react'
import { srcSet } from '../lib/img'

const webm = (mp4) => mp4.replace(/\.mp4$/, '.webm')

// Scroll-driven cinematic. Only the active shot and its immediate neighbours are
// mounted (so the whole still/clip set is never fetched at once). Stills are lazy
// <img>; video shots auto-play only while active.
export default function Cinematic({ id, shots }) {
  const ref = useRef(null)
  const vids = useRef({})
  const [active, setActive] = useState(0)

  useEffect(() => {
    let raf = 0
    const onScroll = () => {
      if (raf) return
      raf = requestAnimationFrame(() => {
        raf = 0
        const el = ref.current
        if (!el) return
        const total = el.offsetHeight - window.innerHeight
        const scrolled = Math.min(Math.max(-el.getBoundingClientRect().top, 0), total)
        const p = total > 0 ? scrolled / total : 0
        const idx = Math.min(shots.length - 1, Math.max(0, Math.floor(p * shots.length)))
        setActive((a) => (a === idx ? a : idx))
      })
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => { window.removeEventListener('scroll', onScroll); if (raf) cancelAnimationFrame(raf) }
  }, [shots.length])

  // Play only the active clip; pause + rewind the rest.
  useEffect(() => {
    Object.entries(vids.current).forEach(([i, v]) => {
      if (!v) return
      if (Number(i) === active) { const pr = v.play(); if (pr && pr.catch) pr.catch(() => {}) }
      else { v.pause(); try { v.currentTime = 0 } catch {} }
    })
  }, [active])

  return (
    <section className="cin" id={id} ref={ref} style={{ height: `${shots.length * 92}vh` }}>
      <div className="cin__stick">
        {shots.map((s, i) => {
          if (Math.abs(i - active) > 1) return null // mount active + neighbours only
          const on = i === active
          return s.video ? (
            <video
              key={i}
              ref={(el) => { vids.current[i] = el }}
              className={`cin__layer cin__video ${on ? 'on' : ''}`}
              poster={s.img.endsWith('.jpg') ? s.img.slice(0, -4) + '-960.webp' : s.img}
              muted loop playsInline preload="none"
            >
              <source src={webm(s.video)} type="video/webm" />
              <source src={s.video} type="video/mp4" />
            </video>
          ) : (
            <img key={i} className={`cin__layer cin__img ${on ? 'on' : ''}`} src={s.img} srcSet={srcSet(s.img)} sizes="100vw" alt="" loading="lazy" decoding="async" />
          )
        })}
        <div className="cin__veil" />
        <div className="cin__caps">
          {shots.map((s, i) => (
            <div key={i} className={`cin__cap ${i === active ? 'on' : ''}`}>
              <h2 className="h2">{s.t}</h2>
              {s.p && <p className="lead" style={{ margin: '14px auto 0', color: 'rgba(243,240,231,.9)' }}>{s.p}</p>}
            </div>
          ))}
        </div>
        <div className="cin__cue" aria-hidden="true">Scroll</div>
      </div>
    </section>
  )
}
