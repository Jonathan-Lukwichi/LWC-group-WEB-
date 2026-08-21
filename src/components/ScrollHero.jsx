import { useRef } from 'react'
import { useFrameScrub } from '../lib/useFrameScrub'

// Full-bleed horizontal hero whose footage advances ONLY as you scroll (desktop),
// and collapses to a single static poster screen on touch / small viewports
// (height handled in CSS; frame loading is skipped by useFrameScrub there).
// Never traps scroll; tab order passes straight through (canvas is not focusable).
export default function ScrollHero({ frames, kicker, title, sub, heightVh = 320, heading = 'h1', id }) {
  const sec = useRef(null)
  const cv = useRef(null)
  useFrameScrub(sec, cv, frames.dir, frames.count)
  const H = heading
  return (
    <section ref={sec} id={id} className="shero" style={{ '--shero-h': `${heightVh}vh` }}>
      <div className="shero__stick">
        <canvas ref={cv} className="shero__cv" aria-hidden="true" />
        <div className="shero__veil" />
        <div className="container shero__in">
          {kicker && <div className="kicker">{kicker}</div>}
          <H className={heading === 'h1' ? 'display shero__title' : 'h2 shero__title'}>{title}</H>
          {sub && <p className="shero__sub">{sub}</p>}
          <div className="shero__cue" aria-hidden="true">Scroll</div>
        </div>
      </div>
    </section>
  )
}
