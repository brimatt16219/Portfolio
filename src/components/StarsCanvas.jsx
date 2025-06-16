// StarsCanvas.jsx
import * as THREE from 'three'
import { useRef, useState, useMemo, useEffect } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Trail, Stars } from '@react-three/drei'
import { EffectComposer, Bloom } from '@react-three/postprocessing'

function ShootingStars({ count = 20 }) {
  const { viewport } = useThree()
  const { width, height } = viewport
  const margin = width * 0.5
  const maxTrailWidth = 1 + Math.random()      // full trail thickness
  const fadeDuration  = 2.0                     // seconds to fade out

  // Unique ID generator
  const idCounter = useRef(0)

  // Palette of pastel/neon colors
  const palette = useMemo(() => [
    '#E0F7FA', '#B3E5FC',
    '#FFF3E0', '#FFE0B2', '#FFCC80',
    '#FFFDE7', '#FFF9C4', '#FFF59D',
    '#FCE4EC', '#F8BBD0',
    '#FFEBEE', '#FFCDD2'
  ], [])

  // Factory for a fresh star
  function createStar() {
    const id         = idCounter.current++
    const initialX   = -width / 2 - margin
    const finalX     =  width / 2 + margin
    const initialY   = (Math.random() - 0.5) * height
    const arcHeight  = Math.random() * (height * 0.3) + (height * 0.1)
    const speed      = Math.random() * 6 + 1          // 1–7 units/sec
    const z          = (Math.random() - 0.5) * 20
    const pos        = new THREE.Vector3(initialX, initialY, z)
    const hex        = palette[Math.floor(Math.random() * palette.length)]
    const color      = new THREE.Color(hex)

    return {
      id, initialX, finalX, initialY, arcHeight,
      speed, z, pos, color,
      isFading:    false,
      fadeStart:   0,
      opacity:     1,
      trailWidth:  maxTrailWidth
    }
  }

  // State holds our active stars
  const [stars, setStars] = useState(() =>
    Array.from({ length: count }, createStar)
  )

  // Refs to mesh instances for imperative updates
  const meshRefs = useRef({})

  useFrame((state, delta) => {
    const now = state.clock.getElapsedTime()
    const toRemove = []

    // Update each star
    stars.forEach(star => {
      // Advance X
      star.pos.x += star.speed * delta
      // Parabolic arc on Y
      const uRaw = (star.pos.x - star.initialX) / (star.finalX - star.initialX)
      const u = Math.min(Math.max(uRaw, 0), 1)
      star.pos.y = star.initialY + star.arcHeight * 4 * u * (1 - u)

      // Start fade-out if past finalX
      if (!star.isFading && star.pos.x > star.finalX) {
        star.isFading  = true
        star.fadeStart = now
      }

      // Apply fading
      if (star.isFading) {
        const t = (now - star.fadeStart) / fadeDuration
        const f = Math.min(Math.max(t, 0), 1)
        star.opacity    = 1 - f
        star.trailWidth = maxTrailWidth * (1 - f)
        if (f >= 1) toRemove.push(star.id)
      }

      // Update mesh
      const mesh = meshRefs.current[star.id]
      if (mesh) {
        mesh.position.copy(star.pos)
        mesh.material.opacity = star.opacity
      }
    })

    // Remove and replace faded stars
    if (toRemove.length > 0) {
      setStars(prev => {
        const survivors    = prev.filter(s => !toRemove.includes(s.id))
        const replacements = toRemove.map(() => createStar())
        return [...survivors, ...replacements]
      })
      toRemove.forEach(id => { delete meshRefs.current[id] })
    }
  })

  return (
    <>
      {stars.map(star => (
        <Trail
          key={star.id}
          width={star.trailWidth}
          length={35}
          decay={1}
          stride={0}
          interval={1}
          local
          color={star.color}
          attenuation={t => t * t}
        >
          <mesh
            ref={el => (meshRefs.current[star.id] = el)}
            position={star.pos}
          >
            <sphereGeometry args={[0.025, 16, 16]} />
            <meshBasicMaterial
              toneMapped={false}
              transparent
              opacity={star.opacity}
              color={star.color}
            />
          </mesh>
        </Trail>
      ))}
    </>
  )
}

function ScrollCameraController({ progressRef, lerpFactor = 0.05 }) {
  const { camera } = useThree()
  useFrame(() => {
    const targetY = +Math.PI  * progressRef.current
    camera.rotation.x = THREE.MathUtils.lerp(
      camera.rotation.y,
      targetY,
      lerpFactor
    )
  })
  return null
}

export default function StarsCanvas() {
  const scrollProgress = useRef(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight
      scrollProgress.current = Math.min(scrollTop / maxScroll, 1)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 25], fov: 60, near: 0.1, far: 1000 }}>
        <ScrollCameraController progressRef={scrollProgress} />
        <color attach="background" args={['black']} />
        <ambientLight intensity={0.5} />
        <ShootingStars count={13} />
        <Stars saturation={0} count={400} speed={0.5} />
        {/* <OrbitControls enableZoom={false} /> */}
        <EffectComposer>
          <Bloom mipmapBlur luminanceThreshold={0.05} intensity={1.0} />
        </EffectComposer>
      </Canvas>
    </div>
  )
}
