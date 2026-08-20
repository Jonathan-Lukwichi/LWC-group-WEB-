import { useEffect } from 'react'

// Draws a frame sequence onto a canvas, advancing the frame ONLY with scroll
// position over the given section. No autoplay — motion is 100% scroll-driven.
export function useFrameScrub(secRef, cvRef, dir, count) {
  useEffect(() => {
    const imgs = []
    for (let i = 1; i <= count; i++) {
      const im = new Image()
      im.src = `${dir}/frame-${String(i).padStart(4, '0')}.jpg`
      imgs.push(im)
    }
    let idx = -1
    let raf = 0

    const draw = (i) => {
      const c = cvRef.current
      const im = imgs[i]
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
      const s = Math.max(w / im.naturalWidth, h / im.naturalHeight) // cover
      const dw = im.naturalWidth * s
      const dh = im.naturalHeight * s
      ctx.drawImage(im, (w - dw) / 2, (h - dh) / 2, dw, dh)
    }

    const render = () => {
      const el = secRef.current
      if (!el) return
      const total = el.offsetHeight - window.innerHeight
      const p = Math.min(Math.max(-el.getBoundingClientRect().top / (total || 1), 0), 1)
      const i = Math.min(count - 1, Math.max(0, Math.round(p * (count - 1))))
      if (i !== idx) { idx = i; draw(i) }
    }
    const onScroll = () => {
      if (raf) return
      raf = requestAnimationFrame(() => { raf = 0; render() })
    }

    imgs.forEach((im) => { im.onload = () => draw(idx < 0 ? 0 : idx) })
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
