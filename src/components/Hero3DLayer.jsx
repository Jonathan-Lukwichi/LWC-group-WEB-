import { useRef, useState, useEffect } from 'react'
import { Canvas } from '@react-three/fiber'
import { Sparkles } from '@react-three/drei'

// Subtle ambient 3D depth layered OVER the video hero: just floating gold
// particles (the orbital ring was removed per request). Lazy-loaded so three
// stays out of the main bundle; only mounted on capable desktops by HeroVideo.
// The render loop pauses when the hero scrolls out of view; R3F disposes on unmount.
export default function Hero3DLayer() {
  const wrap = useRef(null)
  const [vis, setVis] = useState(true)
  useEffect(() => {
    const el = wrap.current
    if (!el) return
    const io = new IntersectionObserver(([e]) => setVis(e.isIntersecting), { threshold: 0 })
    io.observe(el)
    return () => io.disconnect()
  }, [])
  return (
    <div ref={wrap} className="hero3dlayer" aria-hidden="true">
      <Canvas
        dpr={[1, 2]}
        frameloop={vis ? 'always' : 'never'}
        gl={{ alpha: true, antialias: true, powerPreference: 'low-power' }}
        camera={{ position: [0, 0, 6], fov: 45 }}
      >
        <Sparkles count={55} scale={[10, 6, 4]} size={2.6} speed={0.22} color="#F7E7A6" opacity={0.55} />
      </Canvas>
    </div>
  )
}
