import { useRef } from 'react'
import { useFrameScrub } from '../lib/useFrameScrub'

// Full-bleed horizontal hero whose footage advances ONLY as you scroll.
export default function ScrollHero({ frames, kicker, title, sub }) {
  const sec = useRef(null)
  const cv = useRef(null)
  useFrameScrub(sec, cv, frames.dir, frames.count)
  return (
    <section ref={sec} className="shero" style={{ height: '320vh' }}>
      <div className="shero__stick">
        <canvas ref={cv} className="shero__cv" />
        <div className="shero__veil" />
        <div className="container shero__in">
          {kicker && <div className="kicker">{kicker}</div>}
          <h1 className="display shero__title">{title}</h1>
          {sub && <p className="shero__sub">{sub}</p>}
          <div className="shero__cue" aria-hidden="true">Scroll</div>
        </div>
      </div>
    </section>
  )
}
