import { useEffect } from 'react'

// Draws a frame sequence onto a canvas, advancing the frame ONLY with scroll.
// Loading is lazy: frames load in a sliding window around the current index, never
// all at once. On touch devices, reduced-motion, or Save-Data the sequence is
// skipped entirely and only the first frame is shown as a static poster.
export function useFrameScrub(secRef, cvRef, dir, count) {
  useEffect(() => {
    const cache = new Map()
    const url = (i) => `${dir}/frame-${String(i + 1).padStart(4, '0')}.jpg`

    let idx = -1

    const draw = (i) => {
      const c = cvRef.current
      const im = cache.get(i)
      if (!c || !im || !im.complete || !im.naturalWidth) return
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      const w = c.clientWidth
      const h = c.clientHeight
      if (!w || !h) return
      if (c.width !== Math.round(w * dpr) || c.height !== Math.round(h * dpr)) {
        c.width = Math.round(w * dpr)
        c.height = Math.round(h * dpr)
      }
      const ctx = c.getContext('2d')
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      const s = Math.max(w / im.naturalWidth, h / im.naturalHeight)
      const dw = im.naturalWidth * s
      const dh = im.naturalHeight * s
      ctx.drawImage(im, (w - dw) / 2, (h - dh) / 2, dw, dh)
    }

    const load = (i) => {
      if (i < 0 || i >= count || cache.has(i)) return
      const im = new Image()
      im.onload = () => { if (i === idx || (idx < 0 && i === 0)) draw(i) }
      im.src = url(i)
      cache.set(i, im)
    }

    // Always load the first frame (it is the poster).
    load(0)
    idx = 0

    const mm = (q) => (window.matchMedia ? window.matchMedia(q).matches : false)
    const saveData = navigator.connection && navigator.connection.saveData
    const staticOnly = mm('(pointer: coarse)') || mm('(prefers-reduced-motion: reduce)') || saveData

    if (staticOnly) {
      // Static poster: draw frame 0, redraw on resize, no scroll wiring.
      const onResize = () => draw(0)
      const im0 = cache.get(0)
      if (im0.complete) draw(0); else im0.onload = () => draw(0)
      window.addEventListener('resize', onResize)
      return () => window.removeEventListener('resize', onResize)
    }

    const AHEAD = 8
    const BEHIND = 3
    let raf = 0
    const render = () => {
      const el = secRef.current
      if (!el) return
      const total = el.offsetHeight - window.innerHeight
      const p = Math.min(Math.max(-el.getBoundingClientRect().top / (total || 1), 0), 1)
      const i = Math.min(count - 1, Math.max(0, Math.round(p * (count - 1))))
      for (let k = i - BEHIND; k <= i + AHEAD; k++) load(k) // sliding window
      if (i !== idx) { idx = i; draw(i) }
    }
    const onScroll = () => {
      if (raf) return
      raf = requestAnimationFrame(() => { raf = 0; render() })
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    render()
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [dir, count, secRef, cvRef])
}
