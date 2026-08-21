import { useEffect, useRef, useState } from 'react'
import { srcSet } from '../lib/img'

// Auto-rotating carousel (scroll-snap + dots + swipe). Slides can be video or image.
export default function Carousel({ slides }) {
  const track = useRef(null)
  const [i, setI] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setI((prev) => {
        const next = (prev + 1) % slides.length
        const t = track.current
        if (t) t.scrollTo({ left: next * t.clientWidth, behavior: 'smooth' })
        return next
      })
    }, 4500)
    return () => clearInterval(id)
  }, [slides.length])

  const onScroll = () => {
    const t = track.current
    if (!t) return
    const idx = Math.round(t.scrollLeft / t.clientWidth)
    setI((c) => (c === idx ? c : idx))
  }
  const go = (n) => {
    setI(n)
    const t = track.current
    if (t) t.scrollTo({ left: n * t.clientWidth, behavior: 'smooth' })
  }

  return (
    <div className="carousel">
      <div className="carousel__track" ref={track} onScroll={onScroll}>
        {slides.map((s, n) => (
          <div className="carousel__slide" key={n}>
            {s.video ? (
              <video className="carousel__media" poster={s.img} muted loop playsInline autoPlay preload="none">
                <source src={s.video.replace(/\.mp4$/, '.webm')} type="video/webm" />
                <source src={s.video} type="video/mp4" />
              </video>
            ) : (
              <img className="carousel__media" src={s.img} srcSet={srcSet(s.img)} sizes="(min-width:900px) 60vw, 100vw" alt={s.label || ''} loading="lazy" decoding="async" />
            )}
            <div className="carousel__veil" />
            {s.label && <div className="carousel__cap">{s.label}</div>}
          </div>
        ))}
      </div>
      <div className="carousel__dots">
        {slides.map((_, n) => (
          <button key={n} className={`carousel__dot ${n === i ? 'on' : ''}`} onClick={() => go(n)} aria-label={`Show slide ${n + 1}`} />
        ))}
      </div>
    </div>
  )
}
