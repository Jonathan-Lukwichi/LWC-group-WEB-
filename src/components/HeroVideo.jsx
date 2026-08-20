import { useEffect, useRef } from 'react'
import { home } from '../data/content'

// Main hero: full-viewport cinematic video (gold emblem) with the headline overlaid.
// Replaces the 3D medallion hero.
export default function HeroVideo() {
  const h = home
  const v = useRef(null)
  useEffect(() => {
    const el = v.current
    if (el) { const p = el.play(); if (p && p.catch) p.catch(() => {}) }
  }, [])

  return (
    <section className="vhero" id="top">
      <video
        ref={v}
        className="vhero__bg"
        src="/v-cap-emblem.mp4"
        poster="/cap-emblem.jpg"
        muted
        loop
        playsInline
        autoPlay
        preload="auto"
      />
      <div className="vhero__veil" />
      <div className="container vhero__in">
        <div className="kicker hero__kicker">{h.hero.kicker}</div>
        <h1 className="display vhero__title" style={{ whiteSpace: 'pre-line' }}>{h.hero.title}</h1>
        <p className="vhero__sub">{h.hero.sub}</p>
        <div className="hero__actions">
          <a className="btn" href="#contact">Start with a conversation</a>
          <a className="btn btn--ghost" href="#divisions">Explore our divisions</a>
        </div>
      </div>
      <a className="hero3d__cue" href="#about" aria-label="Scroll down">
        <span>Scroll</span>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14M6 13l6 6 6-6" /></svg>
      </a>
    </section>
  )
}
