import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { prefersReducedMotion } from '../lib/smoothScroll'

gsap.registerPlugin(ScrollTrigger)

// A full-bleed cinematic "workshop moment" — a photo that parallax-drifts as it
// passes through the viewport, with a short line over it. Used between the light
// content sections to make scrolling feel like a guided visit through the plant.
export default function ParallaxBand({ img, kicker, title, align = 'left' }) {
  const root = useRef(null)

  useEffect(() => {
    if (prefersReducedMotion()) return
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.pb__img',
        { yPercent: -12 },
        {
          yPercent: 12,
          ease: 'none',
          scrollTrigger: { trigger: root.current, start: 'top bottom', end: 'bottom top', scrub: true },
        }
      )
    }, root)
    return () => ctx.revert()
  }, [])

  return (
    <section className={`pb pb--${align}`} ref={root} aria-hidden="true">
      <div className="pb__imgwrap">
        <div className="pb__img" style={{ backgroundImage: `url(${img})` }} />
      </div>
      <div className="pb__veil" />
      <div className="container pb__content">
        <div className="pb__inner reveal">
          {kicker ? <span className="pb__kicker">{kicker}</span> : null}
          <h2 className="h2 pb__title">{title}</h2>
        </div>
      </div>
    </section>
  )
}
