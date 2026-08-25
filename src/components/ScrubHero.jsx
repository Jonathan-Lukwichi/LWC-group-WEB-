import { useEffect, useRef, useState } from 'react'

// Immersive hero: on desktop a pre-rendered film is drawn to a canvas and driven
// by scroll, with an eased rAF loop so it reads like a PLAYING VIDEO even between
// scroll steps; when idle it gently auto-plays and loops (so it is always alive),
// and scrolling scrubs it. Chapter captions fade through as the film advances.
// On touch/small it falls back to a light looping <video>. No "scroll" cue.
const step = (x, a, b) => {
  const t = Math.min(1, Math.max(0, (x - a) / (b - a)))
  return t * t * (3 - 2 * t)
}

export default function ScrubHero({ id, frames, video, poster, kicker, beats = [], heightVh = 340, cta }) {
  const CTA = cta && (
    <div className="scrub__cta">
      {cta.map((c) => <a key={c.href} className={`btn ${c.ghost ? 'btn--ghost' : ''}`} href={c.href}>{c.label}</a>)}
    </div>
  )
  const secRef = useRef(null)
  const canvasRef = useRef(null)
  const beatsRef = useRef(null)
  const vidRef = useRef(null)
  const [mobile, setMobile] = useState(false)

  useEffect(() => {
    setMobile(window.matchMedia && window.matchMedia('(pointer:coarse)').matches)
  }, [])

  // Windows [fadeInStart, fullFrom, fullTo, fadeOutEnd] as progress fractions.
  const WINDOWS = beats.map((b, i, arr) => {
    const n = arr.length
    const a = i / n
    const z = (i + 1) / n
    const s = z - a
    return [
      i === 0 ? -0.1 : a + 0.04 * s,
      i === 0 ? -0.05 : a + 0.32 * s,
      i === n - 1 ? 1.0 : z - 0.32 * s,
      i === n - 1 ? 1.0 : z - 0.04 * s,
    ]
  })

  useEffect(() => {
    if (mobile || !frames) return
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    const N = frames.count
    const images = new Array(N)
    let target = 0, current = 0, scrollTarget = 0, lastScroll = -9999, raf = 0

    const drawCover = (img) => {
      const cw = canvas.width, ch = canvas.height
      const s = Math.max(cw / img.width, ch / img.height)
      const w = img.width * s, h = img.height * s
      ctx.drawImage(img, (cw - w) / 2, (ch - h) / 2, w, h)
    }
    const render = (idx) => {
      const i = Math.max(0, Math.min(N - 1, idx))
      const img = images[i]
      if (img && img.complete && img.naturalWidth) drawCover(img)
    }
    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      canvas.width = Math.floor(window.innerWidth * dpr)
      canvas.height = Math.floor(window.innerHeight * dpr)
      render(Math.round(current))
    }
    const setBeats = (p) => {
      const els = beatsRef.current && beatsRef.current.children
      if (!els) return
      for (let i = 0; i < els.length; i++) {
        const [a, b, c, d] = WINDOWS[i]
        const op = Math.min(step(p, a, b), 1 - step(p, c, d))
        els[i].style.opacity = op.toFixed(3)
        els[i].style.transform = `translateY(${((1 - op) * 20).toFixed(1)}px)`
      }
    }
    const progress = () => {
      const sec = secRef.current
      if (!sec) return 0
      const total = sec.offsetHeight - window.innerHeight
      const scrolled = Math.min(total, Math.max(0, -sec.getBoundingClientRect().top))
      return total > 0 ? scrolled / total : 0
    }

    // preload all frames
    const framePath = (i) => `${frames.dir}/frame-${String(i + 1).padStart(4, '0')}.webp`
    for (let i = 0; i < N; i++) {
      const img = new Image()
      img.src = framePath(i)
      img.onload = () => { if (Math.round(current) === i || i === 0) render(Math.round(current)) }
      images[i] = img
    }

    resize()
    scrollTarget = progress() * (N - 1); target = scrollTarget; current = target
    setBeats(current / (N - 1 || 1))

    const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const loop = () => {
      const now = performance.now()
      if (now - lastScroll > 900) {                 // idle → gently auto-play, looping
        target += 0.5
        if (target >= N - 1) { target = 0; current = 0 }
      } else {
        target = scrollTarget
      }
      current += (target - current) * 0.14
      render(Math.round(current))
      setBeats(current / (N - 1 || 1))
      raf = requestAnimationFrame(loop)
    }
    if (reduce) { render(0); setBeats(0) } else raf = requestAnimationFrame(loop)

    const onScroll = () => { scrollTarget = progress() * (N - 1); lastScroll = performance.now(); if (reduce) { current = scrollTarget; render(Math.round(current)); setBeats(current / (N - 1 || 1)) } }
    const onResize = () => { resize(); scrollTarget = progress() * (N - 1) }
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onResize)
    return () => { cancelAnimationFrame(raf); window.removeEventListener('scroll', onScroll); window.removeEventListener('resize', onResize) }
  }, [mobile, frames])

  // in-view play for the mobile fallback video
  useEffect(() => {
    if (!mobile) return
    const el = vidRef.current
    if (!el) return
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting){const p=el.play();if(p&&p.catch)p.catch(()=>{})} else el.pause() }, { threshold: 0.15 })
    io.observe(el)
    return () => io.disconnect()
  }, [mobile])

  if (mobile) {
    return (
      <section className={`scrub scrub--static ${cta ? 'scrub--cta' : ''}`} id={id}>
        <video ref={vidRef} className="scrub__vid" poster={poster} muted loop playsInline preload="none">
          <source src={video.replace(/\.mp4$/, '.webm')} type="video/webm" />
          <source src={video} type="video/mp4" />
        </video>
        <div className="scrub__veil" />
        {kicker && <div className="scrub__label">{kicker}</div>}
        {beats[0] && (
          <div className="scrub__caps"><div className="scrub__cap on"><h1 className="display">{beats[0].t}</h1>{beats[0].p && <p className="lead">{beats[0].p}</p>}</div></div>
        )}
        {CTA}
      </section>
    )
  }

  return (
    <section className={`scrub ${cta ? 'scrub--cta' : ''}`} ref={secRef} id={id} style={{ height: `${heightVh}vh` }}>
      <div className="scrub__sticky">
        <canvas className="scrub__canvas" ref={canvasRef} aria-hidden="true" />
        <div className="scrub__veil" />
        {kicker && <div className="scrub__label">{kicker}</div>}
        <div className="scrub__caps" ref={beatsRef}>
          {beats.map((b, i) => (
            <div className="scrub__cap" key={i}>
              <h1 className="display">{b.t}</h1>
              {b.p && <p className="lead">{b.p}</p>}
            </div>
          ))}
        </div>
        {CTA}
      </div>
    </section>
  )
}
