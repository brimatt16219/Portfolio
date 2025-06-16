// StarsCanvas.jsx
import * as THREE from 'three'
import { useRef, useState, useMemo } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Trail, OrbitControls, Stars } from '@react-three/drei'
import { EffectComposer, Bloom } from '@react-three/postprocessing'

function ShootingStars({ count = 20 }) {
  const { viewport } = useThree()
  const { width, height } = viewport
  const margin = width * .5
  const maxTrailWidth = 1 + Math.random()      // full trail thickness
  const fadeDuration  = 2.0     // seconds to fade out

  // Unique ID generator
  const idCounter = useRef(0)

  // Neon color palette
  const palette = useMemo(() => [
    '#39FF14', '#FE4164', '#05F2F2',
    '#F9FF00', '#FF1493', '#7D1FFF', '#FFBF00'
  ], [])

  // Factory for a fresh star
  function createStar() {
    const id         = idCounter.current++
    const initialX   = -width / 2 - margin
    const finalX     =  width / 2 + margin
    const initialY   = (Math.random() - 0.5) * height
    const arcHeight  = Math.random() * (height * 0.3) + (height * 0.1)
    const speed      = Math.random() * 2 + 1        // 1–3 units/sec
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

    // 1) Update each star
    stars.forEach(star => {
      // advance X every frame
      star.pos.x += star.speed * delta

      // compute arc on Y (clamp u so it stops curving once past finalX)
      const uRaw = (star.pos.x - star.initialX) / (star.finalX - star.initialX)
      const u = Math.min(Math.max(uRaw, 0), 1)
      star.pos.y = star.initialY + star.arcHeight * 4 * u * (1 - u)

      // 2) Start fade once it crosses the edge
      if (!star.isFading && star.pos.x > star.finalX) {
        star.isFading  = true
        star.fadeStart = now
      }

      // 3) If fading, update opacity & trail width
      if (star.isFading) {
        const t = (now - star.fadeStart) / fadeDuration
        const f = Math.min(Math.max(t, 0), 1)
        star.opacity    = 1 - f
        star.trailWidth = maxTrailWidth * (1 - f)

        // schedule removal once fade completes
        if (f >= 1) toRemove.push(star.id)
      }

      // 4) Apply position & opacity to mesh
      const mesh = meshRefs.current[star.id]
      if (mesh) {
        mesh.position.copy(star.pos)
        mesh.material.opacity = star.opacity
      }
    })

    // 5) Remove fully faded stars and spawn replacements
    if (toRemove.length > 0) {
      setStars(prev => {
        const survivors    = prev.filter(s => !toRemove.includes(s.id))
        const replacements = toRemove.map(() => createStar())
        return [...survivors, ...replacements]
      })
      // clean up refs
      toRemove.forEach(id => { delete meshRefs.current[id] })
    }
  })

  return (
    <>
      {stars.map(star => (
        <Trail
          key={star.id}
          width={star.trailWidth}
          length={20}
          decay={Math.random()}
          stride={0.0}
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

export default function StarsCanvas() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      <Canvas camera={{ 
            position: [0, 0, 10], 
            rotation: [0, -Math.PI / 2, 0], 
            fov: 60, 
            near: 0.1, 
            far: 1000 
        }}>
        <color attach="background" args={['black']} />
        <ambientLight intensity={0.5} />
        <ShootingStars count={20} />
        <Stars saturation={0} count={400} speed={0.5} />
        <OrbitControls enableZoom={false} />
        <EffectComposer>
          <Bloom mipmapBlur luminanceThreshold={0.5} intensity={1.2} />
        </EffectComposer>
      </Canvas>
    </div>
  )
}
