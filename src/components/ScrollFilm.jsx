import { useEffect, useMemo, useRef, useState } from 'react'

const FRAMES = 120
const src = (i) => `/frames/frame-${String(i + 1).padStart(4, '0')}.jpg`

// The story told over the scrubbed cinematic (matches the visuals:
// inspection → tablet → LWC dashboard → healthy / -40%).
const CAPS = [
  { at: [0.0, 0.26], t: 'You can’t fix what you can’t see.', p: 'Machines fail without warning — and it costs you.' },
  { at: [0.26, 0.55], t: 'We read your plant’s own data.', p: 'Engineering plus AI turn raw readings into insight.' },
  { at: [0.55, 0.82], t: 'We see the failure before it happens.', p: 'Asset health, remaining life, the next action — clear.' },
  { at: [0.82, 1.01], t: 'Reliability you can prove.', p: 'Measured results — not promises.' },
]

function drawCover(ctx, img, cw, ch) {
  if (!img || !img.width) return
  const ir = img.width / img.height, cr = cw / ch
  let w, h, x, y
  if (ir > cr) { h = ch; w = ch * ir; x = (cw - w) / 2; y = 0 }
  else { w = cw; h = cw / ir; x = 0; y = (ch - h) / 2 }
  ctx.drawImage(img, x, y, w, h)
}

export default function ScrollFilm() {
  const sectionRef = useRef(null)
  const canvasRef = useRef(null)
  const [active, setActive] = useState(0)
  const imgs = useMemo(() => Array.from({ length: FRAMES }, (_, i) => { const im = new Image(); im.src = src(i); return im }), [])

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let raf = 0
    const cur = { drawn: -1 }

    const size = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      canvas.width = canvas.clientWidth * dpr
      canvas.height = canvas.clientHeight * dpr
      cur.drawn = -1
    }
    const paint = (frame) => {
      if (frame === cur.drawn) return
      const img = imgs[frame]
      if (!img || !img.complete || !img.width) return
      drawCover(ctx, img, canvas.width, canvas.height)
      cur.drawn = frame
    }
    const onScroll = () => {
      if (raf) return
      raf = requestAnimationFrame(() => {
        raf = 0
        const el = sectionRef.current
        if (!el) return
        const total = el.offsetHeight - window.innerHeight
        const scrolled = Math.min(Math.max(-el.getBoundingClientRect().top, 0), total)
        const progress = total > 0 ? scrolled / total : 0
        paint(Math.round(progress * (FRAMES - 1)))
        const idx = CAPS.findIndex((c) => progress >= c.at[0] && progress < c.at[1])
        if (idx !== -1) setActive((a) => (a === idx ? a : idx))
      })
    }

    size()
    // paint the first frame as soon as it loads
    if (imgs[0].complete) paint(0)
    else imgs[0].onload = () => paint(0)

    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', size)
    onScroll()
    return () => { window.removeEventListener('scroll', onScroll); window.removeEventListener('resize', size); if (raf) cancelAnimationFrame(raf) }
  }, [imgs])

  return (
    <section className="sfilm" ref={sectionRef} aria-label="LWC Group — reliability in motion">
      <div className="sfilm__stick">
        <canvas className="sfilm__canvas" ref={canvasRef} />
        <div className="sfilm__veil" />
        <div className="sfilm__caps">
          {CAPS.map((c, i) => (
            <div key={i} className={`sfilm__cap ${i === active ? 'on' : ''}`}>
              <h2 className="h2">{c.t}</h2>
              <p className="lead" style={{ margin: '14px auto 0', color: 'rgba(243,240,231,.9)' }}>{c.p}</p>
            </div>
          ))}
        </div>
        <div className="sfilm__cue" aria-hidden="true">Keep scrolling</div>
      </div>
    </section>
  )
}
