import { useRef, useState, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Sparkles, Float } from '@react-three/drei'

// Subtle ambient 3D depth layered OVER the video hero (not a replacement, and not
// a second medallion — the emblem is already in the video). Lazy-loaded so three
// stays out of the main bundle; only mounted on capable desktops by HeroVideo.
// The render loop pauses when the hero scrolls out of view; R3F disposes on unmount.
function Ring() {
  const r = useRef()
  useFrame((_, dt) => { if (r.current) r.current.rotation.z += dt * 0.06 })
  return (
    <mesh ref={r} position={[2.4, 0.5, -1]} rotation={[1.1, 0.3, 0]}>
      <torusGeometry args={[1.6, 0.015, 16, 120]} />
      <meshBasicMaterial color="#D4AF37" transparent opacity={0.45} />
    </mesh>
  )
}

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
        <ambientLight intensity={0.6} />
        <Float speed={1.1} rotationIntensity={0.4} floatIntensity={0.6}><Ring /></Float>
        <Sparkles count={55} scale={[10, 6, 4]} size={2.6} speed={0.22} color="#F7E7A6" opacity={0.55} />
      </Canvas>
    </div>
  )
}
