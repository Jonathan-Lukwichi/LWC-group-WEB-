import { lazy, Suspense, useEffect, useRef, useState } from 'react'
import { home } from '../data/content'

const Hero3DLayer = lazy(() => import('./Hero3DLayer'))

// Main hero: full-viewport cinematic video (gold emblem) with the headline overlaid.
// The POSTER is the LCP element; the video is deferred (preload="none") and only
// starts after the page has loaded or on the user's first interaction, so it never
// competes with first paint.
export default function HeroVideo() {
  const h = home
  const v = useRef(null)
  const [show3d, setShow3d] = useState(false)

  // 3D is a progressive enhancement: only on capable desktops.
  useEffect(() => {
    const mm = (q) => window.matchMedia && window.matchMedia(q).matches
    const capable =
      mm('(min-width:1024px)') &&
      mm('(pointer:fine)') &&
      !mm('(prefers-reduced-motion:reduce)') &&
      (navigator.hardwareConcurrency || 0) > 4
    if (capable) setShow3d(true)
  }, [])

  useEffect(() => {
    const el = v.current
    if (!el) return
    let started = false
    const cleanup = () => {
      window.removeEventListener('load', start)
      window.removeEventListener('pointerdown', start)
      window.removeEventListener('keydown', start)
      window.removeEventListener('scroll', start)
    }
    function start() {
      if (started) return
      started = true
      el.preload = 'auto'
      const p = el.play()
      if (p && p.catch) p.catch(() => {})
      cleanup()
    }
    if (document.readyState === 'complete') setTimeout(start, 400)
    else window.addEventListener('load', start, { once: true })
    window.addEventListener('pointerdown', start, { once: true })
    window.addEventListener('keydown', start, { once: true })
    window.addEventListener('scroll', start, { once: true, passive: true })
    return cleanup
  }, [])

  return (
    <section className="vhero" id="top">
      <video ref={v} className="vhero__bg" poster="/cap-emblem-1440.webp" muted loop playsInline preload="none">
        <source src="/v-cap-emblem.webm" type="video/webm" />
        <source src="/v-cap-emblem.mp4" type="video/mp4" />
      </video>
      <div className="vhero__veil" />
      {show3d && <Suspense fallback={null}><Hero3DLayer /></Suspense>}
      <div className="container vhero__in">
        <div className="kicker hero__kicker">{h.hero.kicker}</div>
        <h1 className="display vhero__title" style={{ whiteSpace: 'pre-line' }}>{h.hero.title}</h1>
        <p className="vhero__sub">{h.hero.sub}</p>
        <div className="hero__actions">
          <a className="btn" href="#contact">Start with a conversation</a>
          <a className="btn btn--ghost" href="#divisions">Explore our divisions</a>
        </div>
      </div>
      <a className="hero3d__cue" href="#divisions" aria-label="Scroll to what we do">
        <span>Scroll</span>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14M6 13l6 6 6-6" /></svg>
      </a>
    </section>
  )
}
