import { useEffect, useRef } from 'react'
import { prefersReducedMotion } from '../lib/smoothScroll'

const FRAME_COUNT = 120
const framePath = (i) => `/frames/frame-${String(i).padStart(4, '0')}.jpg`

// Fixed full-screen background for the story page, SCROLL-SCRUBBED: scroll
// position maps to the video frame, so scrolling moves the video (it does not
// auto-play). A rAF lerp makes the scrub smooth even on fast flicks.
export default function ImmersiveBg() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    const images = []
    let target = 0
    let current = 0
    let raf

    const drawCover = (img) => {
      const cw = canvas.clientWidth
      const ch = canvas.clientHeight
      const ir = img.width / img.height
      const cr = cw / ch
      let w, h, x, y
      if (cr > ir) { w = cw; h = cw / ir; x = 0; y = (ch - h) / 2 }
      else { h = ch; w = ch * ir; x = (cw - w) / 2; y = 0 }
      ctx.clearRect(0, 0, cw, ch)
      ctx.drawImage(img, x, y, w, h)
    }
    const render = (idx) => {
      const img = images[Math.max(0, Math.min(FRAME_COUNT - 1, idx))]
      if (img && img.complete && img.naturalWidth) drawCover(img)
    }
    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      canvas.width = canvas.clientWidth * dpr
      canvas.height = canvas.clientHeight * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      render(Math.round(current))
    }
    const progress = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight
      return max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0
    }
    const setTarget = () => { target = progress() * (FRAME_COUNT - 1) }

    // preload every frame; draw the current one as soon as it arrives
    for (let i = 0; i < FRAME_COUNT; i++) {
      const img = new Image()
      img.src = framePath(i + 1)
      img.onload = () => { if (Math.round(current) === i) render(i) }
      images.push(img)
    }

    resize()
    setTarget()
    current = target

    const reduce = prefersReducedMotion()
    if (reduce) {
      render(Math.round(current)) // no smoothing loop; scrub directly on scroll
    } else {
      const loop = () => {
        current += (target - current) * 0.15 // smooth follow
        render(Math.round(current))
        raf = requestAnimationFrame(loop)
      }
      raf = requestAnimationFrame(loop)
    }

    const onScroll = () => {
      setTarget()
      if (reduce) { current = target; render(Math.round(current)) } // scroll still moves the video
    }
    const onResize = () => { resize(); setTarget() }
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onResize)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onResize)
    }
  }, [])

  return (
    <div className="ibg" aria-hidden="true">
      <canvas className="ibg__canvas" ref={canvasRef} />
      <div className="ibg__veil" />
    </div>
  )
}
