import { useEffect, useRef, useState } from 'react'

// Scroll-driven cinematic. Each shot is either a still (crossfade + slow Ken-Burns)
// or a video clip (auto-plays only while it's the active shot). Mix freely — set a
// shot's `video` field to animate it; leave it off to keep the still.
export default function Cinematic({ id, shots }) {
  const ref = useRef(null)
  const vids = useRef([])           // <video> refs, indexed by shot
  const [active, setActive] = useState(0)

  // Map scroll position over this section -> active shot index.
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

  // Play only the active clip; pause + rewind the rest (saves CPU/GPU + battery).
  useEffect(() => {
    vids.current.forEach((v, i) => {
      if (!v) return
      if (i === active) { const pr = v.play(); if (pr && pr.catch) pr.catch(() => {}) }
      else { v.pause(); try { v.currentTime = 0 } catch {} }
    })
  }, [active])

  return (
    <section className="cin" id={id} ref={ref} style={{ height: `${shots.length * 92}vh` }}>
      <div className="cin__stick">
        {shots.map((s, i) => (
          s.video ? (
            <video
              key={i}
              ref={(el) => (vids.current[i] = el)}
              className={`cin__layer cin__video ${i === active ? 'on' : ''}`}
              src={s.video}
              poster={s.img}
              muted
              loop
              playsInline
              preload="metadata"
            />
          ) : (
            <div
              key={i}
              className={`cin__layer ${i === active ? 'on' : ''}`}
              style={{ backgroundImage: `url(${s.img})` }}
            />
          )
        ))}
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
