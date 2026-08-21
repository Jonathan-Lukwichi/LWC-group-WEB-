import { useEffect, useRef, useState } from 'react'

// Hero that auto-plays a looping montage ("carousel" of scenes). While the user
// scrolls it slows to a cinematic crawl (playbackRate), returning to normal when
// idle. Optional time-synced captions narrate the scenes (a persistent label up
// top + the changing caption at the bottom, so they never overlap).
export default function CarouselHero({ video, poster, kicker, title, sub, captions, id }) {
  const v = useRef(null)
  const [cap, setCap] = useState(0)

  useEffect(() => {
    const el = v.current
    if (!el) return
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) { const p = el.play(); if (p && p.catch) p.catch(() => {}) }
        else el.pause()
      },
      { threshold: 0.15 }
    )
    io.observe(el)
    let t = 0
    const onScroll = () => {
      try { el.playbackRate = 0.25 } catch {}
      clearTimeout(t)
      t = setTimeout(() => { try { el.playbackRate = 1 } catch {} }, 240)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => { io.disconnect(); window.removeEventListener('scroll', onScroll); clearTimeout(t) }
  }, [])

  useEffect(() => {
    const el = v.current
    if (!el || !captions) return
    const onTime = () => {
      const ct = el.currentTime
      let i = 0
      for (let k = 0; k < captions.length; k++) if (ct >= captions[k].at) i = k
      setCap((c) => (c === i ? c : i))
    }
    el.addEventListener('timeupdate', onTime)
    return () => el.removeEventListener('timeupdate', onTime)
  }, [captions])

  const webm = video.replace(/\.mp4$/, '.webm')
  return (
    <section id={id} className="chero">
      <video ref={v} className="chero__bg" poster={poster} muted loop playsInline preload="metadata">
        <source src={webm} type="video/webm" />
        <source src={video} type="video/mp4" />
      </video>
      <div className="chero__veil" />
      {captions ? (
        <>
          {kicker && <div className="chero__label">{kicker}</div>}
          <div className="chero__caps">
            {captions.map((c, i) => (
              <div key={i} className={`chero__cap ${i === cap ? 'on' : ''}`}>
                <h2 className="h2">{c.t}</h2>
                {c.p && <p className="lead">{c.p}</p>}
              </div>
            ))}
          </div>
        </>
      ) : (
        <div className="container chero__in">
          {kicker && <div className="kicker">{kicker}</div>}
          <h1 className="display chero__title" style={{ whiteSpace: 'pre-line' }}>{title}</h1>
          {sub && <p className="chero__sub">{sub}</p>}
          {sub && (
            <div className="hero__actions" style={{ justifyContent: 'center', marginTop: 32 }}>
              <a className="btn" href="#contact">Start with a conversation</a>
              <a className="btn btn--ghost" href="#divisions">Explore our divisions</a>
            </div>
          )}
        </div>
      )}
      <div className="chero__cue" aria-hidden="true">Scroll</div>
    </section>
  )
}
