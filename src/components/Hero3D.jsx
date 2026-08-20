import { Suspense, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Environment, Lightformer, Float, Sparkles, useTexture } from '@react-three/drei'
import * as THREE from 'three'
import { home } from '../data/content'

function Medallion() {
  const g = useRef()
  const tex = useTexture('/logo.png')
  tex.colorSpace = THREE.SRGBColorSpace
  useFrame((_, dt) => { if (g.current) g.current.rotation.y += dt * 0.14 })
  return (
    <group ref={g} position={[0, 0.92, 0]} scale={0.66}>
      {/* gold rim */}
      <mesh>
        <torusGeometry args={[1.36, 0.1, 44, 160]} />
        <meshStandardMaterial color="#E8C15A" metalness={1} roughness={0.2} envMapIntensity={1.7} />
      </mesh>
      {/* dark backing */}
      <mesh position={[0, 0, -0.02]}>
        <circleGeometry args={[1.35, 96]} />
        <meshStandardMaterial color="#0b0b0e" metalness={0.7} roughness={0.45} envMapIntensity={1} />
      </mesh>
      {/* glowing gold emblem (logo texture) */}
      <mesh position={[0, 0, 0.015]}>
        <circleGeometry args={[1.28, 96]} />
        <meshStandardMaterial
          map={tex} emissiveMap={tex} emissive="#CFA23C" emissiveIntensity={0.7}
          metalness={0.25} roughness={0.6} transparent toneMapped={false}
        />
      </mesh>
    </group>
  )
}

export default function Hero3D() {
  const h = home
  return (
    <section className="hero3d" id="top">
      <div className="hero3d__canvas">
        <Canvas camera={{ position: [0, 0.5, 6.6], fov: 40 }} dpr={[1, 2]} gl={{ antialias: true, alpha: false }}
          onCreated={({ gl }) => { gl.toneMappingExposure = 1.15 }}>
          <color attach="background" args={['#0A0A0C']} />
          <ambientLight intensity={0.35} />
          <directionalLight position={[4, 5, 6]} intensity={1.6} color="#fff3d6" />
          <pointLight position={[-5, -2, 3]} intensity={40} color="#D4AF37" />
          <pointLight position={[4, -3, -2]} intensity={20} color="#8C6A1E" />
          <Suspense fallback={null}>
            <Environment resolution={256}>
              <Lightformer intensity={2.2} position={[0, 3, 4]} scale={[9, 9, 1]} color="#fff3d6" />
              <Lightformer intensity={1.3} position={[-6, -1, 3]} scale={[6, 6, 1]} color="#8C6A1E" />
              <Lightformer intensity={1} position={[6, 2, -3]} scale={[5, 5, 1]} color="#E8C15A" />
            </Environment>
            <Float speed={1.3} rotationIntensity={0.5} floatIntensity={0.7}>
              <Medallion />
            </Float>
          </Suspense>
          <Sparkles count={150} scale={[10, 7, 5]} size={3.2} speed={0.3} color="#F7E7A6" opacity={0.7} />
        </Canvas>
      </div>
      <div className="hero3d__glow" />
      <div className="container hero3d__content">
        <div className="kicker hero__kicker">{h.hero.kicker}</div>
        <h1 className="display hero__title" style={{ whiteSpace: 'pre-line' }}>{h.hero.title}</h1>
        <p className="hero__sub">{h.hero.sub}</p>
        <div className="hero__actions">
          <a className="btn" href="#contact">Start with a conversation</a>
          <a className="btn btn--ghost" href="#divisions">Explore our divisions</a>
        </div>
      </div>
      <a className="hero3d__cue" href="#about" aria-label="Scroll down">
        <span>Scroll</span>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14M6 13l6 6 6-6" /></svg>
      </a>
    </section>
  )
}
