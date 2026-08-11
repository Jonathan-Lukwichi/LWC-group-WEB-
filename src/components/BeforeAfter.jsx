import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { prefersReducedMotion } from '../lib/smoothScroll'
import { transformation as t } from '../data/content'

// The signature scroll mechanic: a mining breakdown "no one can master" (cold)
// wipes with a gold light sweep into "everyone masters" (warm), as you scroll.
export default function BeforeAfter() {
  const root = useRef(null)

  useEffect(() => {
    if (prefersReducedMotion()) return
    const ctx = gsap.context(() => {
      const st = {
        trigger: '.ba__stage',
        start: 'top top',
        end: '+=170%',
        scrub: 1,
        pin: true,
      }
      gsap
        .timeline({ scrollTrigger: st })
        .to('.ba__wipe', { left: '104vw', ease: 'none', duration: 1 }, 0)
        .to('.ba__after', { opacity: 1, ease: 'none', duration: 0.55 }, 0.25)
        .to('.ba__before-content', { opacity: 0, y: -20, ease: 'none', duration: 0.4 }, 0.2)
        .fromTo('.ba__after-content', { opacity: 0, y: 20 }, { opacity: 1, y: 0, ease: 'none', duration: 0.4 }, 0.55)
        .to('.ba__metric', { opacity: 1, ease: 'none', duration: 0.4 }, 0.6)

      // metric counts up with scroll progress
      const obj = { v: 0 }
      gsap.to(obj, {
        v: t.metric.value,
        ease: 'none',
        scrollTrigger: { ...st },
        onUpdate() {
          const el = root.current?.querySelector('.ba__metric-value')
          if (el) el.textContent = `${t.metric.prefix}${Math.round(obj.v)}${t.metric.suffix}`
        },
      })
    }, root)
    return () => ctx.revert()
  }, [])

  const bg = (img) => ({ backgroundImage: `url(${img})` })

  return (
    <section className="ba" ref={root} id="mining" aria-label="Mining reliability — before and after">
      <div className="ba__stage">
        <div className="ba__layer ba__before" style={bg(t.before.img)} />
        <div className="ba__layer ba__after" style={bg(t.after.img)} />
        <div className="ba__wipe" aria-hidden="true" />

        <div className="ba__content ba__before-content">
          <div className="container">
            <div className="ba__panel">
              <span className="ba__tag ba__tag--before">{t.kicker}</span>
              <h2 className="h2">{t.before.title}</h2>
              <p className="lead" style={{ marginTop: 16 }}>{t.before.caption}</p>
            </div>
          </div>
        </div>

        <div className="ba__after-content">
          <div className="container">
            <div className="ba__panel">
              <span className="ba__tag ba__tag--after">{t.kicker} · LWC</span>
              <h2 className="h2">{t.after.title}</h2>
              <p className="lead" style={{ marginTop: 16 }}>{t.after.caption}</p>
            </div>
          </div>
        </div>

        <div className="ba__metric">
          <div className="ba__metric-value">
            {t.metric.prefix}{t.metric.value}{t.metric.suffix}
          </div>
          <div className="ba__metric-label">{t.metric.label}</div>
        </div>
      </div>
      <div className="container">
        <p className="ba__note">{t.note}</p>
      </div>
    </section>
  )
}
